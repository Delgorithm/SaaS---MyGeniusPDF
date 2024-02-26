import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mygeniuspdf from './Pages/Mygeniuspdf';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Application from './Pages/Application';
import Profil from './Pages/Profil';
import NoMatch from './Pages/NoMatch';
import Abonnement from './Pages/Abonnement';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={ <Mygeniuspdf/>} />
        <Route path='*' element={ <NoMatch/>} />
        <Route path='/signup' element={ <Signup/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/application' element={ <Application/>} />
        <Route path='/application/profil' element={<Profil />} />
        <Route path='/application/abonnement' element={<Abonnement />} />
      </Routes>
  )
}

export default App