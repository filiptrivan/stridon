import Hero from "@/pages/components/Hero";
import React from "react";
import CardBosch from "./components/CardBosch";
import Head from "next/head";


const index = () => {
  return (
    <div>
      <Head >
        <title>Stridon | Blog | Bosch</title>
        <meta name='Bosch Blog' content='Novosti o Bosch mašinama i alatima' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Blog Bosch"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
      />
      <CardBosch />
    </div>
  );
};

export default index;