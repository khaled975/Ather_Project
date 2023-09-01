import React from 'react'
import { AboutUs, ContactUs, Download, Footer, Header, Logos, Navbar, Services, Testimonials, Video, } from './container';

const MainApp = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Logos/>
    <AboutUs/>
    <Services/>
    <Download/>
    <Video/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default MainApp