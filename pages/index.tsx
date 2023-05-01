import Head from "next/head";
import Hero from "./components/Hero";
import { SliderData } from "../components/SliderData";
import Slider from "./components/Slider";
import Instagram from "./components/Instagram";
import Brendovi from "./components/Brendovi";
import SnageStridona from "./components/SnageStridona";

export default function Home( ) {
  return (
    <main>
      <Head>
        <title>Stridon</title>
        <meta name="Prodavnica Alata" content="Mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero
        titleNaHomePage={"Stridon Group"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, najveci asortiman alata u Srbiji."
        }
        naslovButtona={"Idi na našu online prodavnicu alata"}
      />
      <Brendovi title={"Brendovi"} />
      <SnageStridona/>
      <Slider slides={SliderData} />
      <Instagram />
    </main>
  );
}


