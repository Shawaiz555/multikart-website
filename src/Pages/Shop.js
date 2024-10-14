import React from 'react'
import Navbar from '../Components/Navbar'
import StylishWomenFashion from '../Sections/Shop/StylishWomenFashion'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

export default function Shop() {
  return (
    <div>
        <Navbar/>
        <StylishWomenFashion/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}
