import React, { useState } from "react";
import Hero from "./components/Hero";
import TextoviISlike from "../../brendovi/bosch/components/TextoviISlike";
import Head from "next/head";
import dewalt from "../../../public/devalt.webp";

const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | DeWalt </title>
        <meta name="DeWalt" content="DeWalt mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"DeWalt"}
        opis={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
        naslovButtona={"Preuzmi PDF katalog"}
      />
      <TextoviISlike
        naslovPasusa1={"Dewalt1"}
        textPasusa1={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse sequi delectus eum exercitationem placeat fugiat labore est officia, doloribus temporibus consequatur explicabo neque dignissimos modi dolorem nostrum accusantium adipisci. Exercitationem a eaque assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam."
        }
        slika1={dewalt}
        naslovPasusa2={"Dewalt2"}
        textPasusa2={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse sequi delectus eum exercitationem placeat fugiat labore est officia, doloribus temporibus consequatur explicabo neque dignissimos modi dolorem nostrum accusantium adipisci. Exercitationem a eaque assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam."
        }
        slika2={dewalt}
        naslovPasusa3={"Dewalt1"}
        textPasusa3={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse sequi delectus eum exercitationem placeat fugiat labore est officia, doloribus temporibus consequatur explicabo neque dignissimos modi dolorem nostrum accusantium adipisci. Exercitationem a eaque assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam."
        }
        slika3={dewalt}
      />
    </div>
  );
};

export default index;
