import React from 'react'
import { Link } from 'react-router-dom'

const BtnCTA = ({ onClick, children }) => {
  return (
    <Link to='/signup'>
      <button 
          className='px-4 py-1.5 rounded-md text-[#FAFAFA] bg-gradient-to-b from-[#92919A] to-[#020014] transition duration-100 hover:scale-105 hover:opacity-80 active:translate-y-0.5'
          onClick={onClick}
      >
          {children}
      </button>
    </Link>
  )
}

export default BtnCTA