import path from "path";
import * as fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import remarkStringify from "remark-stringify";
import rehypeStringify from "rehype-stringify";
import gradle from "highlight.js/lib/languages/gradle"

export default class BlogEntryFetcher {

  private static readonly ENTRIES_DIRECTORY = './media/entries/'

  static async fetchEntry(slug: string) {
    const fullPath = path.join(BlogEntryFetcher.ENTRIES_DIRECTORY, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
      .use(remarkParse)
      .use(remarkRehype)
      .use(remarkStringify)
      .use(rehypeHighlight, {languages: {gradle}})
      .use(rehypeStringify)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      contentHtml,
      ...matterResult.data
    }
  }
}