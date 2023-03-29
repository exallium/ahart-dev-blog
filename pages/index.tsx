import {Inter} from 'next/font/google'
import {InferGetStaticPropsType} from "next";
import BlogFeedReader from "@/lib/BlogFeedReader";
import React from "react";
import FeedEntryTitle from "@/components/molecules/FeedEntryTitle";
import {AtomEntry} from "@/lib/BlogEntryFetcher";

const inter = Inter({subsets: ['latin']})

export async function getStaticProps() {
  const feed = await BlogFeedReader.readFeed()
  return {
    props: {
      feed: JSON.parse(JSON.stringify(feed))
    }
  }
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  console.log(props.feed.feed.entry[0].link[0]['$']['href'])
  return (
    <>
      {props.feed.feed.entry.map((entry: AtomEntry) => (
        <div key={entry.id[0]}>
          <FeedEntryTitle title={entry.title} link={entry.link[0]['$']['href']}/>
          <p className='mt-2'>{entry.summary}</p>
        </div>
      ))}
    </>
  )
}

export default Home;