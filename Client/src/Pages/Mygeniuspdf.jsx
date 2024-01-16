import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Testimonials from '../Components/Testimonials'
import Pricing from '../Components/Pricing'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

const Mygeniuspdf = () => {
  return (
    <main className='relative overflow-hidden'>
      <section className='z-1'>
        <Navbar />
        <div className='h-12'></div>
        <Hero />
        <div className='h-12'></div>
        <Features />
        <div className='h-12'></div>
        <Testimonials />
        <div className='h-12'></div>
        <Pricing />
        <div className='h-12'></div>
        <FAQ />
        <div className='h-12'></div>
        <Footer />
      </section>
    </main>
  )
}

export default Mygeniuspdf