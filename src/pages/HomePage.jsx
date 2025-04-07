import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Header from "../components/Header";
import React from 'react'
import SearchBar from "../components/SearchBar";
//taking all the view and merging
function Home() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <Popular></Popular>
      <Veggie></Veggie>
    </div>
  )
}

export default Home