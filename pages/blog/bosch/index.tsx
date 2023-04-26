import Hero from "@/pages/components/Hero";
import React from "react";
import Head from "next/head";
import CardListBosch from "./components/CardListBosch";


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
      <CardListBosch />
    </div>
  );
};

export default index;