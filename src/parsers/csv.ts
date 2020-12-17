import * as csv from "csvtojson";
import { CSVParseParam } from "csvtojson/v2/Parameters";

export interface Csvtojson {
  body: any[];
}

export class Csv {
  private options: CSVParseParam;

  constructor(options: CSVParseParam) {
    this.options = options;
  }

  /**
   * Converts csv document to it's JSON structure.
   * @param {string} file - Csv file
   * @return {Object}
   */
  public async toJSON(file: string): Promise<Csvtojson> {
    const body = await csv({ ...this.options }).fromString(file);
    ``;
    return {
      body,
    };
  }
}
