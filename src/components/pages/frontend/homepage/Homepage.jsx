import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import WhatWeDo from './WhatWeDo'
import Work from './Work'
import Values from './Values'
import LatestNews from './LatestNews'
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
    <div className="p-4 border border-black m-4">
    <Header/>
    <Banner/>
    <WhatWeDo/>
    <Work/>
    <Values/>
    <LatestNews/>
    <Footer/>
    </div>
    </>
  )
}

export default Homepage