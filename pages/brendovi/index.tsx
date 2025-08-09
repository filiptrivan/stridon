import React from 'react'
import CardList from '../../components/components/CardList'
import {Brendovi} from "../../data/Brendovi"
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import Hero from '@/components/Hero';

const index = () => {

  const {t:translate} = useTranslation('home')
  
  return (
    <div>
      <Head>
        <title>Uvoznik i distributer najboljih brendova | Stridon Group</title>
        <meta
          name="description"
          content="Brendovi mašina, pribora, električnog, ručnog i akumulatorskog alata koje uvozimo i za koje je naša firma uvoznik i distributer na teritoriji Srbije."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
      translate={translate}
      titleNaHomePage={translate('BrandsHeroTitle')}
      opisNaHomePage={translate('BrandsHeroDescription')} 
      bigTitle={false}
      />
      <CardList Brendovi = {Brendovi} translate={translate}/>
    </div>
  )
}

export default index

export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,["home", "NavBar", "Footer"]))
    }
  }
}
