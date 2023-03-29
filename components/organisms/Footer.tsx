import React from "react";
import Link from "next/link";
import MastodonIcon from "@/components/atoms/MastodonIcon";

const Footer: React.FC = () => {
  return (
    <div className='my-2'>
      <Link className='text-blue-700 dark:text-blue-300' rel="me" href="https://androiddev.social/@exallium">
        <div className='flex'>
          <MastodonIcon className='self-center'/>
          <p className='ml-2'>Follow me on Mastodon</p>
        </div>
      </Link>
      <p className='my-2'>&copy; Alex Hart, 2023. All rights reserved.</p>
    </div>
  );
}

export default Footer;