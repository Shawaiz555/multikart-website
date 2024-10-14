import React from 'react'
import Navbar from '../Components/Navbar'
import HeaderSection from '../Sections/Home/HeaderSection'
import TopCollection from '../Sections/Home/TopCollection'
import FashionTrends from '../Sections/Home/FashionTrends'
import ExclusiveProducts from '../Sections/Home/ExclusiveProducts'
import OurCollection from '../Sections/Home/OurCollection'
import Instagram from '../Sections/Home/Instagram'
import Footer from '../Components/Footer'
import Subscribe from '../Components/Subscribe'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeaderSection/>
        <TopCollection/>
        <FashionTrends/>
        <ExclusiveProducts/>
        <OurCollection/>
        <Subscribe/>
        <Instagram/>
        <Footer/>
    </div>
  )
}
