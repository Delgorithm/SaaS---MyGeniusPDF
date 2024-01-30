import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import Mygeniuspdf from './Pages/mygeniuspdf';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import PaymentStripe from './Pages/PaymentStripe';
import Account from './Auth/Account';
import Application from './Pages/Application';
import Profil from './Pages/Profil';
import NoMatch from './Pages/NoMatch';


const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={ <Mygeniuspdf/>} />
        <Route path='*' element={ <NoMatch/>} />
        <Route path='/signup' element={ <Signup/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/application' element={ <Application/>} />
        <Route path='/application/profil' element={<Profil />} />
        <Route path='/account' element={ <Account/>} />
        <Route path='/paiement' element={ <PaymentStripe/>} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App