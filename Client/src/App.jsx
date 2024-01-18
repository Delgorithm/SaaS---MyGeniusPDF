import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Mygeniuspdf from './Pages/mygeniuspdf';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import PaymentStripe from './Pages/PaymentStripe';
import Account from './Auth/Account';
import Application from './Pages/Application';
import { AuthContextProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={ < Mygeniuspdf/>} />
        <Route path='/signup' element={ < Signup/>} />
        <Route path='/login' element={ < Login/>} />
        <Route path='/paiement' element={ < PaymentStripe/>} />
        <Route path='/account' element={ < Account/>} />
        <Route path='/application' element={ < Application/>} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App