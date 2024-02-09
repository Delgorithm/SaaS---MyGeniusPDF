import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiCreditCard2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import PricingProps from '../Props/PricingProps';
import PricingFullData from '../Data/PricingData';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Abonnement = () => {

  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("Vous vous êtes déconnecté(e)");
    } catch (e) {
      console.log(e.message)
    }
  }

  const firstSecondPrice = PricingFullData.slice(0,2);
  const thirdPrice = PricingFullData.slice(2);

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
                    <span className='flex justify-center items-center gap-2'>
                      <GoPerson />
                      <p>Mon profil</p>
                    </span>
                  </Link>

                  <Link to="/application/abonnement">
                    <span className='flex justify-center items-center gap-2 bg-[#6d79f9] p-3 rounded-2xl'>
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
          <div className='mb-10 flex justify-around items-center'>
            <p className='text-xl'>Email : {user && user.email}</p>
            <button 
              onClick={handleLogout}
              className='text-3xl'
            >
              <CiLogout />
            </button>
          </div>
        </div>

      </section>

      {/* --- Right part : Main part --- */}
      <section className='flex flex-col justify-center w-5/6 h-screen bg-[#b9b9b9]'>
        <div className='flex justify-center items-center m-10 p-4 gap-10'>
          <div className='flex gap-10'>
            {firstSecondPrice.map((prices) => (
              <div key={prices.id} className='w-80 bg-gradient-to-t from-[#eeeeef] to-[#ffffff] border-[0.5px] border-[#e5e2e9] rounded-3xl transition duration-200 hover:scale-105'>
                <PricingProps 
                  title={prices.title}
                  price={prices.price}
                  month={prices.month}
                  description={prices.description}
                  icon={prices.icon}
                  featureOne={prices.featureOne}
                  featureTwo={prices.featureTwo}
                  featureThree={prices.featureThree}
                  featureFour={prices.featureFour}
                  btnOffer={prices.btnOffer}
                /> 
              </div>
            ))}
          </div>
          <div>
            {thirdPrice.map((prices) => (
              <div key={prices.id}  className='w-80 bg-gradient-to-b from-[#0E063E] to-[#6125AE] text-[#ffffff] border-[0.5px] border-[#e5e2e9] rounded-3xl transition duration-200 hover:scale-105'>
                <PricingProps
                  title={prices.title}
                  popularity={prices.popularity}
                  price={prices.price}
                  month={prices.month}
                  description={prices.description}
                  icon={prices.icon}
                  featureOne={prices.featureOne}
                  featureTwo={prices.featureTwo}
                  featureThree={prices.featureThree}
                  featureFour={prices.featureFour}
                  btnOffer={prices.btnOffer}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Abonnement