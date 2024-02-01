import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';

// Si la personne n'est pas connecté && qu'elle clique sur le bouton formule (de son choix) ça va l'emmener à la page d'inscription puis une fois connecté ça l'emmenera à la page des formules

// Si la personne est connecté && qu'elle clique sur le bouton formule (de son choix) ça va l'emmener à la page des formules

const PricingProps = (props) => {

  const checkout = (plan) => {
    fetch('http://localhost:5173/api/v1/create-subscription-checkout-session', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      mode: "cors",
      body: JSON.stringify({plan: plan, customierId: userId})
    })
    .then((res) => {
      if(res.ok) return res.json();
      console.log(res);
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({session}) => {
      window.location = session.url;
    })
    .catch((e) => {
      console.log(e.error);
    })
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
      
      {/* <Link to="/signup" className='flex justify-center mt-4 p-2 rounded-lg bg-gradient-to-b from-[#92919A] to-[#020014] transition duration-150 text-white hover:opacity-80 active:translate-y-0.5'> */}
      <div className='flex justify-center mt-4 p-2 rounded-lg bg-gradient-to-b from-[#92919A] to-[#020014] transition duration-150 text-white hover:opacity-80 active:translate-y-0.5'>
        <button onClick={checkout}>{props.btnOffer}</button>
      </div>
    </main>
  )
}

export default PricingProps