import * as fs from "fs";
import * as xml2js from "xml2js";

export default class BlogFeedReader {

  private static readonly FEED = "./public/feed.atom"

  static async readFeed() {
    const fileContents = fs.readFileSync(this.FEED, 'utf-8')
    return await xml2js.parseStringPromise(fileContents)
  }
}