import React, { useState } from "react";
import Hero from "../../brendovi/bosch/components/Hero";
import TextoviISlike from "../../brendovi/bosch/components/TextoviISlike";
import Head from "next/head";
import bosch from "../../../public/bos.webp";

const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | Bosch </title>
        <meta name="Bosch" content="Bosch mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Bosch"}
        opis={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
        naslovButtona={"Preuzmi PDF katalog"}
      />
      <TextoviISlike
        naslovPasusa1={"Bosch1"}
        naslovPasusa2={"Bosch2"}
        naslovPasusa3={"Bosch3"}
        textPasusa1={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse sequi delectus eum exercitationem placeat fugiat labore est officia, doloribus temporibus consequatur explicabo neque dignissimos modi dolorem nostrum accusantium adipisci. Exercitationem a eaque assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam."
        }
        textPasusa2={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse sequi delectus eum exercitationem placeat fugiat labore est officia, doloribus temporibus consequatur explicabo neque dignissimos modi dolorem nostrum accusantium adipisci. Exercitationem a eaque assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam."
        }
        textPasusa3={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse sequi delectus eum exercitationem placeat fugiat labore est officia, doloribus temporibus consequatur explicabo neque dignissimos modi dolorem nostrum accusantium adipisci. Exercitationem a eaque assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam."
        }
        slika1={bosch}
        slika2={bosch}
        slika3={bosch}
      />
    </div>
  );
};

export default index;
