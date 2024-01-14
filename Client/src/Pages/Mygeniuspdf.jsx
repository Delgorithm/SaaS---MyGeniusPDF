import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Features from '../Components/Features'

const Mygeniuspdf = () => {
  return (
    <main className='relative'>
      <div className='absolute -top-10 left-0 w-screen h-96 bg-grid-pattern -z-50'></div>
      <section className='z-1'>
        <Navbar />
        <div className='h-12'></div>
        <Hero />
        <div className='h-12'></div>
        <Features />
        <h1>MyGeniusPDF</h1>
        <div className='flex flex-col gap-5'>
          <p>
            <Link to="/signup">Créer un compte</Link>
          </p>
          <p>
            <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Mygeniuspdf