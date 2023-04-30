// import React, { useState, useEffect } from 'react'
// import { Prisma, PrismaClient } from '@prisma/client'
// import { GetServerSideProps } from 'next';

// const prisma = new PrismaClient();

// interface Props {
//     blogs: Prisma.ProjectsSelect[]
// }

// export default function Index ({blogs}) {

//   return (
//     <div>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.a}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export const getServerSideProps: GetServerSideProps = async()=>{
//     // const prisma = new PrismaClient();

//     // const fetchBlogs = async () => {
//       const blogs = await prisma.blog.findMany();
    
//       return {
//         props: {blogs}
//     } 
// }
import React from 'react'

const index = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default index
