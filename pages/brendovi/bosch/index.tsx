import React, { useState } from "react";
import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import bosch from "../../../public/bos.webp";
const boschKatalogVrednosti = [
  {
    imeKataloga: "1.bosch katalog",
    rutaKataloga: "/katalog.pdf"
  },
  {
    imeKataloga: "2.bosch katalog",
    rutaKataloga: "/katalog.pdf"
  },
  {
    imeKataloga: "3.bosch katalog",
    rutaKataloga: "/katalog.pdf"
  },
  {
    imeKataloga: "4.bosch katalog",
    rutaKataloga: "/katalog.pdf"
  }
];
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
        catalogueValues={boschKatalogVrednosti}
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
        textDoKraja={
          'Jedan od najznačajnijih napredaka bio je razvoj XR tehnologije (Extended Runtime) koja je poboljšala trajnost baterija i osigurala duže vreme rada alata. Osim toga, DeWalt je pionirski predstavio brusilice s poboljšanom prašinskom kontrolom, akumulatorske alate s visokim naponom i izuzetno otporne alate za rad u zahtevnim uslovima. DeWalt je takođe poznat po svom sistemu "FlexVolt", koji omogućava da se akumulatorski alati koriste s različitim naponima, u zavisnosti od potreba posla. Ova inovacija omogućava korisnicima da imaju snažne alate za najzahtevnije zadatke, ali i lakše i kompaktnije alate za manje poslove, sve uz isti akumulator. Njihova linija alata nije ograničena samo na profesionalce; DeWalt se takođe fokusira na potrebe kućnih majstora i entuzijasta. Njihov širok asortiman alata, od jednostavnih bušilica i ubodnih testera do sofisticiranih višenamenskih alata, omogućava svima, bez obzira na nivo iskustva, da obavljaju poslove sa lakoćom i efikasnošću. DeWalt je ne samo sinonim za izvrsne proizvode, već i za izvanrednu podršku korisnicima. Njihova usluga i jamstvena podrška osiguravaju da kupci imaju poverenje u svoje alate, znajući da je kompanija tu da im pomogne u slučaju bilo kakvih problema. Danas, DeWalt je globalno prepoznata marka koja je postala nezamenljiv partner brojnim profesionalcima i entuzijastima širom sveta. Njihova predanost kvalitetu, inovacijama i korisničkom iskustvu osigurava da će DeWalt i dalje ostati vodeća snaga u svetu električnih alata i da će nastaviti transformisati način na koji se poslovi obavljaju u različitim industrijskim granama.'
        }
      />
    </div>
  );
};

export default index;
