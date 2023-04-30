import React, { useState } from "react";
import CardList from "./components/CardList";
import HeroWithoutButton from "../components/HeroWithoutButton";
import Head from "next/head";
import Pagination from "./components/Pagination";
import { prisma } from "../../server/db/client";

const index = ({ blogs }) => {
  const [blogData, setBlogData] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(14);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogs.slice(firstPostIndex, lastPostIndex);

  let totalPage = Math.ceil(blogs.length / postsPerPage);

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
        totalPosts={blogs.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        siblings={1}
        totalPage={totalPage}
      />
    </div>
  );
};

export default index;

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

// page == currentPage
// totalPage == totalPage na pagination si napravio ne moras da saljes
// limit == postsPerPage
