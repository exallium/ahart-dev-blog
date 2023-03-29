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
  return (
    <div className='grid grid-cols-2 gap-4'>
      {props.feed.feed.entry.map((entry: AtomEntry) => (
        <div className="mt-4" key={entry.id[0]}>
          <FeedEntryTitle title={entry.title} link={entry.link[0]['$']['href']}/>
          <p className='mt-2'>{entry.summary}</p>
        </div>
      ))}
    </div>
  )
}

export default Home;