import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
const slides = [
  "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/flat-black-friday-twitter-cover-template_23-2149103019.jpg?semt=ais_items_boosted&w=740",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qdlc1TEUEimFwRj6NlwM9yu8zmCHuZmQ8mkuJql6bA168hj5yeAp9Zm01ETxPYi4mHc&usqp=CAU",
  "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const autoSlide = true
  const autoSlideInterval = 2000

  const nextSlide = () =>{
    setCurrent(current === slides.length - 1 ? 0 : current + 1 )
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length -1 : current - 1)
  }

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, current])
  

  return (
    // make a main div
    // and main div has 3 div
    // 1. for images
    // 2. for arrow buttons
    // 3. for indicators

    <div className="main relative flex items-center justify-center gap-1 h-[80vh] w-[100vw] sm:h-[80vh] sm:w-[40vh] md:h-[90vh] md:w-[50vh] lg:h-[60vh] lg:w-full ">
      
      <div className="images h-[80vh] w-[100vw] sm:h-[80vh] sm:w-[40vh] md:h-[90vh] md:w-[50vh] lg:h-[60vh] lg:w-[100vw] ">
        {slides.map(
          (item, index) => current === index && <img key={index} src={item} className="h-full w-full  object-cover" />
        )}
      </div>
      
      <div className="buttons absolute flex justify-between items-center h-full w-full text-white">
      <button onClick={() => prevSlide()} className="left-arrow bg-white p-4 text-black rounded-full shadow">
        <ChevronLeft />
      </button>
      <button type="button" onClick={() => nextSlide()} className="right-arrow bg-white p-4 text-black rounded-full shadow ">
        <ChevronRight />
      </button>
      </div>
      <div className="absolute flex gap-2 items-center bottom-15 left-1/2 transition -translate-x-1/2 "   >
        {
          slides.map((_,i) => (
            <div key={i} className={` transition-all w-3 h-3 bg-white rounded-full ${ current === i ? "p-2" : "opacity-50"}`} ></div>
          ))
        }
      </div>
    </div>
  );
};

export default Carousel;