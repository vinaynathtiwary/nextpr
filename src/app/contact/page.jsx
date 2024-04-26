'use client'
import React from 'react'
import Contactform from '../../components/contact'
import Footer from '../../components/footerPage'

const page = () => {
  return (
    <div className='bg-white'>
        <h2 style={{color: "black" , textAlign: "center" , fontSize: '32px', PaddingTop: "100px", }}>Let's Work With Us</h2>
        <Contactform/>
        <Footer/>
    </div>
  )
}

export default page