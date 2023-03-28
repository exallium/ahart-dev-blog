import React from "react";
import Link from "next/link";
import H1 from "@/components/atoms/H1";

const BlogTitle: React.FC<{
  title: string,
  slug: string
}> = ({title, slug}) => {
  return (
    <Link className='my-4' href={`/blog/${slug}`}>
      <H1 className='font-semibold'>{title}</H1>
    </Link>
  )
}

export default BlogTitle;