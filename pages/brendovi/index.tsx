import React from 'react'
import CardList from '../../components/components/CardList'
import {Brendovi} from "../../data/Brendovi"
import HeroWithoutButton from '../../components/HeroWithoutButton'
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head';

const index = () => {

  const {t:translate} = useTranslation('home')
  
  return (
    <div>
      <Head>
        <title>Uvoznik najboljih svetskih brendova - Stridon Group DOO</title>
        <meta
          name="description"
          content="Otkrijte našu široku paletu renomiranih brendova i proizvoda koji će vas oduševiti. Pouzdanost, stručnost i vrhunska usluga, samo sa Stridon Group DOO.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWithoutButton titleNaHomePage={translate('brendovi')} opisNaHomePage={translate('opisNaHomePage')} />
      <CardList Brendovi = {Brendovi} translate={translate}/>
    </div>
  )
}

export default index

export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,['home']))
    }
  }
}
