
import React from 'react'
import BlogDetails, {BlogData} from './components/BlogDetails'
import {prisma} from "../../../server/db/client"

interface IndexProps {
  blogs: BlogData[]
}

const index: React.FC<IndexProps> = ({ blogs }) => {
  return (
    <div className='max-w-[1140px] mx-auto '>
      <BlogDetails blogData = {blogs}/>
    </div>
  )
}

export default index

export async function getServerSideProps() {
  const blogs = await prisma.blog.findMany({
    include: {
      vrsta: true,
    },
  });

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}