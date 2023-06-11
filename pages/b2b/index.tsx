import React from 'react'
import HeroWithoutButton from '../components/HeroWithoutButton'
import ErrorPage from '../_error'

const index = () => {
  return (
    <div>
      <HeroWithoutButton titleNaHomePage='B2B' opisNaHomePage='Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.'/>
      <ErrorPage/>
    </div>
  )
}

export default index
