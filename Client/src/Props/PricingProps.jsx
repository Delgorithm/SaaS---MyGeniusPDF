import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const PricingProps = (props) => {

  const navigate = useNavigate();

  const handleRedirection = () => {
    if (props.btnOffer === "Passer à la formule Gratuite") {
      window.location.href='https://buy.stripe.com/test_9AQbMgaUs6CJ2MEeUX';
    } else if (props.btnOffer === "Passer à la formule Pro") {
      window.location.href='https://buy.stripe.com/test_aEU8A4d2A0el0Ew7su';
    } else {
      window.location.href='https://buy.stripe.com/test_6oE4jO5A82mt72U5kl';
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
    </main>
  )
}

export default PricingProps