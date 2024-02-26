import React from 'react'
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiCreditCard2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Profil = () => {

  const navigate = useNavigate();

  return (
    <main className='flex h-screen overflow-hidden'>

      {/* --- Left part : Sidebar --- */}
      <section className='bg-[#666666] w-1/6 h-screen border-r-[0.5px] border-[#ECECEC] flex flex-col text-white'>
        <div className='flex flex-col justify-between pl-6 pt-10 h-screen'>
          <div>
            <Link to="/application">
              <div className='flex items-center gap-2'>
                  <img src="../Img/logo-big.svg" alt="MyGeniusPDF's logo" />
                  <p className='text-xl'>MyGeniusPDF</p>
              </div>
            </Link>
            <div className='flex flex-col gap-4 h-full'>
              <p>Menu</p>
              <ul>
                <li className='flex flex-col items-start gap-4 text-xl'>
                  <Link to="/application">
                    <span className='flex justify-center items-center gap-2'>
                      <CiHome />
                      <p>Home</p>
                    </span>
                  </Link>

                  <Link to="/application/profil">
                    <span className='flex justify-center items-center gap-2 bg-[#6d79f9] p-3 rounded-2xl'>
                      <GoPerson />
                      <p>Mon profil</p>
                    </span>
                  </Link>

                  <Link to="/application/abonnement">
                    <span className='flex justify-center items-center gap-2'>
                      <CiCreditCard2 />
                      <p>Abonnement</p>
                    </span>
                  </Link>

                  <Link to="/settings">
                    <span className='flex justify-center items-center gap-2'>
                      <CiSettings />
                      <p>Paramètres</p>
                    </span>
                  </Link>

                  <Link to="/">
                    <span className='flex justify-center items-center gap-2'>
                      <CiHome />
                      <p>Page d'accueil</p>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Right part : Main part --- */}
      <section className='flex flex-col justify-center w-5/6 h-screen bg-[#b9b9b9]'>
        <p>Profil</p>
      </section>
    </main>
  )
}

export default Profil