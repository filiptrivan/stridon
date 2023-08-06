import React from 'react'
import CardList from './components/CardList'
import {Brendovi} from "../../data/Brendovi"
import HeroWithoutButton from '../components/HeroWithoutButton'
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

const index = () => {

  const {t:translate} = useTranslation('home')
  
  return (
    <div>
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
