import React from 'react'
import CardList from './components/CardList'
import {Brendovi} from "../../data/Brendovi"
import HeroWithoutButton from '../components/HeroWithoutButton'

const index = () => {
  return (
    <div>
      <HeroWithoutButton titleNaHomePage='Brendovi' opisNaHomePage='Deo asortimana koji uvozimo i za koji je naša firma uvoznik i distributer na teritoriji Srbije' />
      <CardList Brendovi = {Brendovi} />
    </div>
  )
}

export default index
