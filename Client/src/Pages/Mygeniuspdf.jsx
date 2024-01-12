import React from 'react'
import { Link } from 'react-router-dom'

const Mygeniuspdf = () => {
  return (
    <div>
      <h1>MyGeniusPDF</h1>
      <div className='flex flex-col gap-5'>
        <p>
          <Link to="/signup">Créer un compte</Link>
        </p>
        <p>
          <Link to="/login">Se connecter</Link>
        </p>

      </div>
    </div>
  )
}

export default Mygeniuspdf