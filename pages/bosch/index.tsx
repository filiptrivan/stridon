import React from 'react'
import Hero from './components/Hero'
import TextoviISlike from './components/TextoviISlike'

const index = () => {
  return (
    <div>
        <Hero 
        title={"Bosch"} 
        opis={"Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."}
        />
        <TextoviISlike/>
    </div>
  )
}

export default index
