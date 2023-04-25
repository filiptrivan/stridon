import Image from 'next/image'
import Head from 'next/head'
import Hero from './components/Hero'
import { SliderData } from './components/SliderData'
import Slider from './components/Slider'
import Instagram from './components/Instagram'
import Brendovi from './components/Brendovi'

export default function Home() {
  return (
    <main>
      <Head >
        <title>Stridon</title>
        <meta name='description' content='Prodavnica alata' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Hero 
    titleNaHomePage={"Stridon Group"} 
    opisNaHomePage={"Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."}
    />
    <Brendovi/>
    <Slider slides={SliderData} />
    <Instagram/>
    </main>
  )
}
