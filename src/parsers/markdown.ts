import * as remark2rehype from "remark-rehype";
import * as matter from "gray-matter";
import * as parse from "remark-parse";
import * as slug from "remark-slug";
import * as unified from "unified";
import * as stringify from "rehype-stringify";
import * as raw from "rehype-raw";
import { VFile } from "vfile";

const jsonC = require("../compilers/json");

import { processMarkdownPlugins } from "../utils/plugins";
import { cwd } from "process";
import { Logger } from "../utils/logger";
import { FileExtension } from "../utils/types";

export type MarkdownFile<T extends "multiple" | "single"> = T extends "single"
  ? ({ file?: string } & Record<string, unknown>) | string
  : (string | ({ file?: string } & Record<string, unknown>))[];

export interface MarkdownToc {
  id: string;
  depth: number;
  text: string;
}

export interface MarkdownPlugin {
  name: string;
  instance: () => {};
  options?: object;
}

export type MarkdownJSON<T> = T & {
  title: string;
  subtitle: string;
  extension: FileExtension;
  updatedAt: number;
  toc: MarkdownToc;
  body: string;
};

export interface GenerateContentOptions {
  toc: boolean;
}

/**
 * @property {any[]} remarkPlugins - String array for the names of the plugins to use
 * Alternatively, accepts an Object with 'name' and 'options' properties for especify lib options.
 * @property {any[]} rehypePlugins - String array for the names of the plugins to use
 * Alternatively, accepts an Object with 'name' and 'options' properties for especify lib options.
 * @property {string} absolutePath - The lib need a absolute path to node_modules for find remark/rehype libs,
 * but you can also pass a string with your custom absolute path for node_modules.
 */
export interface MarkdownParserOptions {
  remarkPlugins?: any[];
  rehypePlugins?: any[];
  absolutePath?: string;
}

const defaultOptions: MarkdownParserOptions = {
  rehypePlugins: [],
  remarkPlugins: [],
};

export class Markdown {
  private options: MarkdownParserOptions;
  private absolutePath: string;
  private logger: Logger;

  constructor(options: MarkdownParserOptions = defaultOptions) {
    // instance logger
    this.logger = new Logger();

    // instance options
    this.options = options;

    // instance absolute path for ext modules
    this.absolutePath = this.options.absolutePath
      ? this.options.absolutePath
      : cwd();

    // process plugins
    processMarkdownPlugins(this.options, this.absolutePath);
  }

  /**
   * Converts markdown document to it's JSON structure.
   * Set the type parameter "F" to "single" to get a single object.
   * @param {string} file - Markdown file
   * @return {string} - Object stringified
   */
  public toJSON<
    F extends "multiple" | "single" = "multiple",
    T = Record<string, unknown>
  >(
    file: MarkdownFile<F>
  ): F extends "single" ? MarkdownJSON<T> : Array<MarkdownJSON<T>> {
    if (Array.isArray(file)) {
      return this.processMultipleFileJSON(file) as F extends "single"
        ? MarkdownJSON<T>
        : Array<MarkdownJSON<T>>;
    } else {
      return this.processSingleFileJSON(file as MarkdownFile<"single">);
    }
  }

  private processSingleFileJSON<T>(
    file: MarkdownFile<"single">
  ): MarkdownJSON<T> {
    let obj: any;

    if (typeof file === "string") {
      obj = this.toObject(file);
    } else {
      obj = this.toObject(file.file);
      delete file.file;
      obj = { ...obj, ...file };
    }

    return obj;
  }

  private processMultipleFileJSON<T>(
    file: MarkdownFile<"multiple">
  ): Array<MarkdownJSON<T>> {
    let obj: any[] = [];

    for (let item of file) {
      if (typeof item === "string") {
        const itemFile = this.toObject(item);
        obj.push(itemFile);
      } else {
        const itemFile = this.toObject(item.file);
        delete item.file;
        obj.push({ ...itemFile, ...item });
      }
    }

    return obj;
  }

  /**
   * Converts markdown document to it's HTML content
   * @param {string} file - Markdown file
   * @return {string} - Object stringified
   */
  public toHTML(file: any): any {
    if (Array.isArray(file)) {
      return this.processMultipleFileHTML(file);
    } else {
      return this.processSingleFileHTML(file);
    }
  }

  private processSingleFileHTML(file: any): any {
    let obj: any;

    if (typeof file === "string") {
      obj = this.toString(file);
    } else {
      this.logger.error("HTML mode only accepts strings");
    }

    return obj;
  }

  private processMultipleFileHTML(file: any): any {
    let obj: any[] = [];

    for (let item of file) {
      if (typeof item === "string") {
        const itemFile = this.toString(item);
        obj.push(itemFile);
      } else {
        this.logger.error("HTML mode only accepts strings");
      }
    }

    return obj;
  }

  private toObject(file: any) {
    let { data, content } = matter(file);

    let json = this.generateContent(content, { toc: true });
    let body = this.generateContent(content, { toc: false });

    let toc: MarkdownToc[] = this.generateToc(json);

    let obj: any = {
      ...data,
      extension: ".md",
      updatedAt: Date.now(),
      toc,
      body,
    };

    return obj;
  }

  private toString(file: any) {
    return this.generateContent(file, { toc: false });
  }

  private generateContent(content: string, options: GenerateContentOptions) {
    let stream = unified().use(parse).use(slug);

    stream = this.processPluginsFor("remark", stream);
    stream = stream.use(remark2rehype, { allowDangerousHtml: true });
    stream = this.processPluginsFor("rehype", stream);

    if (options.toc) {
      let tree: VFile = stream.use(jsonC).processSync(content) as VFile;
      return tree.result;
    }

    let tree = stream.use(raw).use(stringify).processSync(content);
    return tree.contents;
  }

  /**
   * Generate table of contents
   * @param {object} body - JSON AST generated from markdown.
   * @returns {array} List of headers
   */
  private generateToc(body: any): MarkdownToc[] {
    return body.children
      .filter((node: any) =>
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tag)
      )
      .map((node: any) => {
        return this.assignTags(node);
      });
  }

  private assignTags(node: any) {
    let id: string = node.props.id;

    let depth = {
      h1: 1,
      h2: 2,
      h3: 3,
      h4: 4,
      h5: 5,
      h6: 6,
    }[node.tag];

    let text: string = this.flattenNodeText(node);

    return {
      id,
      depth,
      text,
    };
  }

  private processPluginsFor(type: string, stream: any): any {
    const typePlugin: any[] = this.options[`${type}Plugins`];

    for (const plugin of typePlugin) {
      stream = plugin.options
        ? stream.use(plugin.instance, plugin.options)
        : stream.use(plugin.instance);
    }

    return stream;
  }

  private flattenNodeText(node: any): any {
    return node.type === "text"
      ? node.value
      : node.children.reduce((text: any, child: any) => {
          return text.concat(this.flattenNodeText(child));
        }, "");
  }
}
