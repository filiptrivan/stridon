import Image from 'next/image'
import Head from 'next/head'
import Hero from './components/Hero'
import { SliderData } from './components/SliderData'
import Slider from './components/Slider'
import Instagram from './components/Instagram'

export default function Home() {
  return (
    <main>
      <Head >
        <title>Stridon</title>
        <meta name='description' content='Prodavnica alata' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Hero />
    <Slider slides={SliderData} />
    <Instagram/>
    </main>
  )
}
