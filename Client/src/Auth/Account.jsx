import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("Vous vous êtes déconnecté(e)")
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <h1>Mon compte</h1>
      <p>Email : {user && user.email}</p>
      <button 
        onClick={handleLogout}
        className='border px-6 py-2 my-4'
      >
        Se déconnecter
      </button>
    </div>
  )
}

export default Account