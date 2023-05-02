import Head from "next/head";
import Hero from "./components/Hero";
import { SliderData } from "../data/SliderData";
import Slider from "./components/Slider";
import Instagram from "./components/Instagram";
import Brendovi from "./components/Brendovi";
import SnageStridona from "./components/SnageStridona";
import DynamicCounterContainer from "./components/DynamicCounterContainer";
import Button from "./components/Button";
import TestimonList from "./components/TestimonList";
import records from "../data/testimonials.json"

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
      <Button naslovButtona="Detaljnije o Brendovima"/>
      <SnageStridona/>
      <Slider slides={SliderData} />
      <DynamicCounterContainer/>
      <TestimonList records = {records}/>
      <Instagram />
    </main>
  );
}


