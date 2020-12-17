import * as path from "path";
import { MarkdownParserOptions, MarkdownPlugin } from "../parsers/markdown";

import { Logger } from "./logger";

const logger = new Logger();

/**
 * @param {string} resolvePath - Absolute path to parent node_modules
 * @param {MarkdownParserOptions} options - Remark/Rehype plugins
 * Assign plugin instances to options
 */
export function processMarkdownPlugins(
  options: MarkdownParserOptions,
  resolvePath: string
): void {
  options.remarkPlugins = loopPLugins("remark", options, resolvePath);
  options.rehypePlugins = loopPLugins("rehype", options, resolvePath);
  options.absolutePath = resolvePath;
}

/**
 *
 * @param {string} type - Remark or Rehype plugin. Values: 'remark' and 'rehype'
 * @param {MarkdownParserOptions} options - Remark/Rehype plugins
 * @param {string} resolvePath - Absolute path to parent node_modules
 */
const loopPLugins = (
  type: string,
  options: MarkdownParserOptions,
  resolvePath: string
): MarkdownPlugin[] => {
  const plugins: any[] = [];
  const typePlugins: any[] = options[`${type}Plugins`]
    ? options[`${type}Plugins`]
    : [];

  if (typePlugins.length === 0) {
    logger.success(`No ${type.toUpperCase()} plugins detected`);
  }

  for (const plugin of typePlugins) {
    let name: string = "";
    let options: any;
    let instance: () => {};
    let pathToRequire: string;

    if (typeof plugin === "object") {
      name = plugin.name;
      if (plugin.options) {
        options = plugin.options;
      }
    }

    if (typeof plugin === "string") {
      name = plugin;
    }

    pathToRequire = path.resolve(resolvePath, "node_modules", name);

    try {
      instance = require(pathToRequire);

      if (options) {
        plugins.push({ name, instance, options });
        logger.success(`[${name}] module loaded`);
      } else {
        plugins.push({ name, instance });
        logger.success(`[${name}] module loaded`);
      }
    } catch (e) {
      logger.error(`Cannot find module ${name} on ${pathToRequire}`);
    }
  }

  return plugins;
};
