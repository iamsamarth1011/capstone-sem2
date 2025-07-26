"use client"
import React from 'react'
import HeroSection from "./landingSection/heroSection"
import Faculty from "./landingSection/faculty"
import FAQ from "./landingSection/faq"
import ContactUs from './landingSection/contactUs'
 

const page = () => {
  return (
    <div>
        <HeroSection/>
        <Faculty/>
        <FAQ/>
        <ContactUs />
       
    </div>
  )
}

export default page