
import React, { useState } from "react";
import CardList from "./components/CardList";
import HeroWithoutButton from "../components/HeroWithoutButton";
import Head from "next/head";
import Records from "./blogovi.json";
import Pagination from "./components/Pagination";
import { prisma } from "../../server/db/client";

const index =  ({blogs}) => {
  const [blogData, setBlogData] = useState(Records);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(14);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Records.slice(firstPostIndex, lastPostIndex);

  let totalPage = Math.ceil(Records.length / postsPerPage);

  

  return (
    <div>
      <Head>
        <title>Stridon | Blog </title>
        <meta name="Blog alata" content="Novosti o mašinama i alatima" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWithoutButton
        titleNaHomePage={"Stridon Group Blog"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
      />
      <CardList blogData={currentPosts} />
      <Pagination
        totalPosts={Records.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        siblings={1}
        totalPage={totalPage}
      />
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.id}</p>
        </div>
      ))}
    </div>
  );
};

export default index;

// page == currentPage
// totalPage == totalPage na pagination si napravio ne moras da saljes
// limit == postsPerPage

export async function getServerSideProps() {
  const blogs = await prisma.blog.findMany()

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}