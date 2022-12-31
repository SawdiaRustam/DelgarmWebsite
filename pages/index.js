import React from "react"
import Layout from "../src/common/layout/Layout"

import Suggestion from "../src/components/pages/home/Suggestion"
import Newest from "../src/components/pages/home/Newest"
import Sales from "../src/components/pages/home/Sales"
import Connect from "../src/components/pages/home/Connect"



function Home() {
  return (

    <Layout>
      <MainHero/>
      <Suggestion />
      <Newest />
      <Sales />
      <Connect />
    </Layout>


  )


}
import HeroSwiper from "../src/components/pages/home/HeroSection"
import MainHero from "../src/components/pages/home/MainHero"

export default Home