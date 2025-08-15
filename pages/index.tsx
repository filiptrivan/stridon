import Head from "next/head";
import Hero from "../components/Hero";
import { SliderData } from "../data/SliderData";
import Slider from "../components/Slider";
import Instagram from "../components/Instagram";
import Brendovi from "../components/Brendovi";
import SnageStridona from "../components/SnageStridona"; 
import DynamicCounterContainer from "../components/DynamicCounterContainer";
import TestimonList from "../components/TestimonList"; 
import records from "../data/testimonials.json" 
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export default function Home( ) {
const {t:translate} = useTranslation('home')
  return (
    <main>
      <Head>
        <title>Najbolja prodavnica alata u Srbiji | Stridon Group</title>
        <meta
          name="description"
          content="Veleprodaja, maloprodaja i online prodaja opreme, alata i mašina najpoznatijih brendova po jeftinim cenama u Srbiji. Pogledajte nase cene, akcije i kataloge."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name='image' property='og:image' content="/stridon-prodavnica-alata.webp" />
        <meta name='url' property='og:url' content="https://www.stridon.rs" />
        <meta name='type' property='og:type' content="website" />
      </Head>
      
      <Hero
        translate={translate}
        titleNaHomePage={`Stridon Group`}
        opisNaHomePage={translate("hero opis")}
        naslovButtona={translate("naslov buttona")}
        externalUrl={"https://www.prodavnicaalata.rs"}
      />
      <Brendovi translate={translate}/>
      <SnageStridona translate={translate}/>
      <Slider slides={SliderData} translate={translate}/>
      <DynamicCounterContainer translate={translate}/>
      <TestimonList records={records} translate={translate}/>
      <Instagram translate={translate}/>
    </main>
  );
}

export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,["home", "NavBar", "Footer"]))
    }
  }
}

