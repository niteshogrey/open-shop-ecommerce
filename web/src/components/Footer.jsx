import React from 'react'
import PolicySection from './PolicySection'
import ContactAndAbout from './ContactAndAbout'
import BottomStrip from './BottomStrip'

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
        <PolicySection />
        <ContactAndAbout />
        <BottomStrip />
    </footer>
  )
}

export default Footer