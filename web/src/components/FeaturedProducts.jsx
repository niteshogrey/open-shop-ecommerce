import React from 'react'
import ProductBox from './atom/ProductBox'

const FeaturedProducts = () => {
  return (
     <section className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p>Do not miss the current offers until the end of March.</p>
        </div>
      </div>
      <div className="flex">
        <ProductBox />
      </div>
    </section>
  )
}

export default FeaturedProducts