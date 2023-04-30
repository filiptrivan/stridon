import React from 'react'
import HeroServis from './components/HeroServis'
import Brendovi from '../components/Brendovi'
import Mapa from '../components/Mapa'

const index = () => {
  return (
    <div>
      <HeroServis titleNaHomePage={"SG Servis"} opisNaHomePage={"lorem ipsum, lorem adenom venum, raqulen esta min oparal.lorem ipsum, lorem adenom venum."}/>
      <Brendovi title = {"Brendovi koji se servisiraju"} />
      <Mapa email={"sgservis@gmail.com"} kontakt={"064/616-5003"} kontakt2={""} adresa={"Vojislava Ilića 141 b"}/>
    </div>
  )
}

export default index
