import React from 'react'
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
      <section className='bg-grid-pattern -z-50'>
        <div className='z-10'>
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
        </div>
      </section>
    </main>
  )
}

export default Mygeniuspdf