import React from 'react'
import Hero from './components/Hero'
import TextoviISlike from './components/TextoviISlike'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head >
        <title>Stridon | Bosch </title>
        <meta name='Bosch' content='Bosch mašine i alati' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero 
        title={"Bosch"} 
        opis={"Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."}
        naslovButtona={"Preuzmi PDF katalog"}
        />
        <TextoviISlike/>
    </div>
  )
}

export default index
