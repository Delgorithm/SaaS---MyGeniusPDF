import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Mygeniuspdf from './Pages/mygeniuspdf';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import PaymentStripe from './Pages/PaymentStripe';
import Account from './Pages/Account';
import Application from './Pages/Application';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ < Mygeniuspdf/>} />
      <Route path='/signup' element={ < Signup/>} />
      <Route path='/login' element={ < Login/>} />
      <Route path='/paiement' element={ < PaymentStripe/>} />
      <Route path='/compte' element={ < Account/>} />
      <Route path='/application' element={ < Application/>} />
    </Routes>
  )
}

export default App