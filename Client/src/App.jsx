import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import Mygeniuspdf from './Pages/mygeniuspdf';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Application from './Pages/Application';
import Profil from './Pages/Profil';
import NoMatch from './Pages/NoMatch';
import Abonnement from './Pages/Abonnement';
import CheckoutForm from './Stripe/CheckoutForm';
import Completion from './Stripe/Completion';


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
        <Route path='/application/abonnement' element={<Abonnement />} />
        
        {/* Route for Stripe */}
        <Route path='/application/abonnement/checkoutform' element={<CheckoutForm />} />
        <Route path='/application/abonnement/completion' element={<Completion/> } />


      </Routes>
    </AuthContextProvider>
  )
}

export default App