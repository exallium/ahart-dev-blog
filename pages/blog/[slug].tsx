import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import BlogEntryFetcher from "@/lib/BlogEntryFetcher";
import React, {useMemo} from "react";
import BlogTitle from "@/components/molecules/BlogTitle";

export async function getStaticPaths() {
  return {
    paths: [
      '/blog/basic-gradle-version-catalogs'
    ],
    fallback: false
  }
}

export async function getStaticProps({params}: GetStaticPropsContext) {
  if (params && typeof params.slug === 'string') {
    const entry = await BlogEntryFetcher.fetchEntry(params!!.slug)
    return {
      props: {
        entry: JSON.parse(JSON.stringify(entry))
      }
    }
  }

  throw 'error loading entry path'
}

const BlogEntry: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({entry}) => {

  const date = useMemo(() => (
    new Date(entry.date).toLocaleDateString()
  ), [entry.date])

  return (
    <div className="flex flex-col">
      <BlogTitle title={entry.title} slug={entry.slug} />
      <p className='my-2'>{date}</p>
      <div className="markdown" dangerouslySetInnerHTML={{__html: entry.contentHtml}}/>
    </div>
  );
}

export default BlogEntry