import React from "react";
import Card from "./components/Card";
import Hero from "../components/Hero";
import Head from "next/head";

const index = () => {
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
      <Card/>
    </div>
  );
};

export default index;
