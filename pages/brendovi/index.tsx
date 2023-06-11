import React from 'react'
import CardList from './components/CardList'
import {Brendovi} from "../../data/Brendovi"
import HeroWithoutButton from '../components/HeroWithoutButton'

const index = () => {
  return (
    <div>
      <HeroWithoutButton titleNaHomePage='Brendovi' opisNaHomePage='Lorem Ipsum, abonam dela rinq vela ista est ro. Lorem Ipsum, abonam dela rinq vela ista est ro.' />
      <CardList Brendovi = {Brendovi} />
    </div>
  )
}

export default index
