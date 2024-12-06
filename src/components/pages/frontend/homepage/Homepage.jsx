import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import WhatWeDo from './WhatWeDo'
import Work from './Work'
import Values from './Values'
import Footer from './Footer'
import News from './News'
import useQueryData from '@/components/custom-hook/useQueryData'

const Homepage = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/blog`, // endpoint
    "get", // method
    "blog"
  );
  return (
    <>
    <div className="p-2">
    <div className="p-4 border border-black m-4">
    <Header/>
    <Banner result={result}/>
    <WhatWeDo/>
    <Work result={result}/>
    <Values result={result}/>
    <News title="Latest News" result={result}/>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Homepage