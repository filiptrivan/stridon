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
        <title>Najbolja prodavnica alata u Srbiji - Stridon Group DOO</title>
        <meta
          name="description"
          content="Veleprodaja, maloprodaja i online prodaja opreme, alata i mašina najpoznatijih brendova po jeftinim cenama. Cene, akcije i katalozi za 2023. godinu.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero
        titleNaHomePage={"Stridon Group"}
        opisNaHomePage={
          "Veleprodaja, maloprodaja i online prodaja alata i mašina."
        }
        naslovButtona={"Online prodavnica"}
        slug={"https://www.prodavnicaalata.rs"}
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


