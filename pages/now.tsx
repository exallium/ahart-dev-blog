import React from "react";
import {InferGetStaticPropsType} from "next";
import BlogEntryFetcher from "@/lib/BlogEntryFetcher";
import BlogTitle from "@/components/molecules/BlogTitle";

export async function getStaticProps() {
  const entry = await BlogEntryFetcher.fetchEntry('now')
    return {
      props: {
        entry: JSON.parse(JSON.stringify(entry))
      }
    }
}

const NowPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({entry}) => {
  return (
    <div className="flex flex-col">
      <BlogTitle title={entry.title} slug={entry.slug} />
      <div className="markdown" dangerouslySetInnerHTML={{__html: entry.contentHtml}}/>
    </div>
  )
}

export default NowPage