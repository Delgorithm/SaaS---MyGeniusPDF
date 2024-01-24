import React from 'react'
import BtnCTA from './BtnCTA'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <main>
        <section className='flex items-center justify-between m-8 mx-20 z-50'>
            <div className='z-50'>
                <a href="#" className='flex items-center gap-2'>
                    <img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
                    <p className='text-xl'>MyGeniusPDF</p>
                </a>
            </div>
            <div className='w-[30%] border-b-2 rounded-xl'>
                <ul>
                    <li className='flex justify-around'>
                        <a href="#features" className='p-2 transition duration-100 hover:-translate-y-0.5 hover:text-[#9f54ff] z-30'>Features</a>
                        <a href="#avis" className='p-2 transition duration-100 hover:-translate-y-0.5 hover:text-[#9f54ff]'>Avis</a>
                        <a href="#prix" className='p-2 transition duration-100 hover:-translate-y-0.5 hover:text-[#9f54ff]'>Prix</a>
                        <a href="#faq" className='p-2 transition duration-100 hover:-translate-y-0.5 hover:text-[#9f54ff]'>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <Link to="/login">
                    <p className='hover:text-[#9f54ff]'>Se connecter</p>
                </Link>
                <BtnCTA>Essayer</BtnCTA>
            </div>
        </section>
    </main>
  )
}

export default Navbar