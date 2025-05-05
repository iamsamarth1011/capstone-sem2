"use client"
import React from 'react'
import HeroSection from "./landingSection/heroSection"
import Faculty from "./landingSection/faculty"
import AllPlace from './landingSection/allPlaces'
import AboutUs from './landingSection/aboutus'
import FAQ from "./landingSection/faq"
import JoinNow from "./landingSection/joinNow"
import Expert from "./landingSection/expert"
 

const page = () => {
  return (
    <div className='bg-gradient-to-r from-blue-100/50 via-white to-purple-100/80'>
        <HeroSection/>
        <Faculty/>
        <AllPlace/>
        <AboutUs/>
        <JoinNow/>
        <Expert/>
        <FAQ/>
       
    </div>
  )
}

export default page