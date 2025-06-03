import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Category from '../components/Category'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Carousel />
        <Category />
    </div>
  )
}

export default Home