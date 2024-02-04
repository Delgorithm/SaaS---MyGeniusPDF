import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";

const PricingProps = (props) => {

  const {user} = UserAuth();
  const navigate = useNavigate();

  const handleRedirection = () => {
    if (props.btnOffer === "Passer à la formule Gratuite") {
      navigate('/');
    } else if (props.btnOffer === "Passer à la formule Pro") {
      window.location.href = 'https://buy.stripe.com/test_9AQeYs6Ec4uBbja5kk';
    } else {
      navigate('/application');
    }

  }

  return (
    <main className='flex flex-col h-[40rem] p-4 shadow-xl rounded-3xl'>
      <div className='flex items-center'>
        <p className='text-4xl mx-6 mt-4'>{props.title}</p>
        <p className='text-sm font-extralight border p-1 rounded-2xl'>{props.popularity}</p>
      </div>
      <div className='flex items-center gap-2 mt-4 mx-6'>
        <p className='text-3xl'>{props.price}</p>
        <p>{props.month}</p>
      </div>
      <p className='mt-3 mx-6 font-light text-sm'>{props.description}</p>
      <span className='self-center w-[70%] text-center h-0.5 bg-[#cecece] mt-4'></span>
      <div className='flex flex-col justify-around h-full mx-6 mt-4'>
        <div className='flex items-start gap-2'>
          <p className='text-2xl'>{props.icon}</p>
          <p className='text-sm'>{props.featureOne}</p>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-2xl'>{props.icon}</p>
          <p className='text-sm'>{props.featureTwo}</p>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-2xl'>{props.icon}</p>
          <p className='text-sm'>{props.featureThree}</p>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-2xl'>{props.icon}</p>
          <p className='text-sm'>{props.featureFour}</p>
        </div>
      </div>
      <span className='self-center w-[70%] text-center h-0.5 bg-[#cecece] mt-4'></span>
      
      <div>
        {user && user.email 
          ? (
              <button
                onClick={handleRedirection} 
                className='flex justify-center mt-4 p-2 w-full rounded-lg bg-gradient-to-b from-[#92919A] to-[#020014] transition duration-150 text-white hover:opacity-80 active:translate-y-0.5 cursor-pointer'
              >
                {props.btnOffer}
              </button>
          ) : ( 
              <Link to="/signup">
                <button
                  className='flex justify-center mt-4 p-2 w-full rounded-lg bg-gradient-to-b from-[#92919A] to-[#020014] transition duration-150 text-white hover:opacity-80 active:translate-y-0.5 cursor-pointer'
                >
                  {props.btnOffer}
                </button>
              </Link>
        )}
      </div>
    </main>
  )
}

export default PricingProps