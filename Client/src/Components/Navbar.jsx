import React from 'react'
import BtnCTA from './BtnCTA'

const Navbar = () => {
  return (
    <main>
        <section className='flex items-center justify-between m-8 mx-20'>
            <div>
                <a href="" className='flex items-center gap-2'>
                    <img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
                    <p className='text-xl'>MyGeniusPDF</p>
                </a>
            </div>
            <div className='w-[30%] border-b-2 rounded-xl'>
                <ul>
                    <li className='flex justify-around'>
                        <a clhref="">Features</a>
                        <a href="">Avis</a>
                        <a href="">Prix</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <a href="">Se connecter</a>
                <BtnCTA>Essayer</BtnCTA>
            </div>
        </section>
    </main>
  )
}

export default Navbar