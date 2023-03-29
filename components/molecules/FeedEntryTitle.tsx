import React from "react";
import Link from "next/link";
import H2 from "@/components/atoms/H2";

const FeedEntryTitle: React.FC<{
  title: string,
  link: string
}> = ({title, link}) => {
  return (
    <Link className='my-4' href={link}>
      <H2 className='font-semibold'>{title}</H2>
    </Link>
  )
}

export default FeedEntryTitle;