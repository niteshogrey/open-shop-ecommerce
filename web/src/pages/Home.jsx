import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import FreeShipping from '../components/atom/FreeShipping'
import BannerSlider from '../components/BannerSlider'
import PopularProductSection from '../components/PopularProductSection'
import Footer from '../components/Footer'
import LatestProducts from '../components/LatestProducts'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Carousel />
        <Category />
        <PopularProductSection/>
        <FreeShipping />
        <LatestProducts />
        <FeaturedProducts />
        <BannerSlider />
        <Footer />
    </div>
  )
}

export default Home