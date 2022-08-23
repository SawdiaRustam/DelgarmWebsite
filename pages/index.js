import React from "react"
import Layout from "../src/common/layout/Layout"
import Hero from "../src/components/pages/home/Hero"
import Suggestion from "../src/components/pages/home/Suggestion"
import Newest from "../src/components/pages/home/Newest"
import Sales from "../src/components/pages/home/Sales"
import Connect from "../src/components/pages/home/Connect"



function Home() {
  return (

    <Layout>
      <Hero />
      <Suggestion />
      <Newest />
      <Sales />
      <Connect />
    </Layout>


  )


}

export default Home