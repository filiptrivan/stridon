import React from 'react'
import CardList from './components/CardList'
import records from "../../data/brendovi.json"

const index = () => {
  return (
    <div>
      <CardList records = {records} />
    </div>
  )
}

export default index
