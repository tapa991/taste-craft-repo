import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Header from "../components/Header";
import React from 'react'

//taking all the view and merging
function Home() {
  return (
    <div>
      <Header></Header>
      <Popular></Popular>
      <Veggie></Veggie>
    </div>
  )
}

export default Home