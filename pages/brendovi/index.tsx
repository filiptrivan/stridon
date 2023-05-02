import React from 'react'
import CardList from './components/CardList'
import records from "../../data/brendovi.json"
import HeroWithoutButton from '../components/HeroWithoutButton'

const index = () => {
  return (
    <div>
      <HeroWithoutButton titleNaHomePage='Brendovi' opisNaHomePage='Lorem Ipsum, abonam dela rinq vela ista est ro. Lorem Ipsum, abonam dela rinq vela ista est ro.' />
      <CardList records = {records} />
    </div>
  )
}

export default index
