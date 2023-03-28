import path from "path";
import * as fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

export default class BlogEntryFetcher {

  private static readonly ENTRIES_DIRECTORY = './media/entries/'

  static async fetchEntry(slug: string) {
    const fullPath = path.join(BlogEntryFetcher.ENTRIES_DIRECTORY, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      contentHtml,
      ...matterResult.data
    }
  }
}