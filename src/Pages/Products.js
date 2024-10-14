import React from 'react'
import Navbar from '../Components/Navbar'
import ProductDetails from '../Sections/Products/ProductDetails'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

export default function Products() {
  return (
    <div>
        <Navbar/>
        <ProductDetails/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}
