"use client"
import React, { useState } from "react";
import CardList from "./components/CardList";
import Hero from "../components/Hero";
import Head from "next/head";
import Records from "./blogovi.json";
import Pagination from "./components/Pagination";

const index = () => {
  const [blogData, setBlogData] = useState(Records);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(14);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =  Records.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Head >
        <title>Stridon | Blog </title>
        <meta name='Blog alata' content='Novosti o mašinama i alatima' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Stridon Group Blog"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
      />
      <CardList blogData={currentPosts} />
      <Pagination totalPosts = {Records.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default index;
