// Main imports for authentification
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { userDataRef, dbFireStore, app } from './Firebase';
import { set, push } from 'firebase/database';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Icon for design
import { BsCheck2Circle } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUserAccount } = UserAuth();

  // Récupérer l'instance d'authentification
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserAccount(email, password);
      const user = await getAuth().currentUser;
      const uid = user.uid;

      const userRef = push(userDataRef);
      set(userRef, {
        email: email,
        password: password,
        uid: uid,
      });
      
      const docRef = await addDoc(collection(dbFireStore, "users"), {
        email: email,
        password: password,
        uid: uid,
      });

      navigate('/compte');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <main className='h-screen w-screen flex justify-center items-center gap-5 relative'>
      <section className='flex flex-col w-[30%] h-2/5'>
        <p className='text-2xl py-4'>Essayez gratuitement</p>
        <section className='flex flex-col justify-around h-4/5'>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>
              <BsCheck2Circle />
            </span>
            <p>Jusqu'à <span className='text-[#9f54ff] font-semibold'>5</span> PDFs par mois</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>
              <BsCheck2Circle />
            </span>
            <p>Possibilité de poser <span className='text-[#9f54ff] font-semibold'>10</span> questions sur les PDF</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>
              <BsCheck2Circle />
            </span>
            <p>Accès à <span className='text-[#9f54ff] font-semibold'>l'analyse conversationnelle</span> des documents</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>
              <BsCheck2Circle />
            </span>
            <p>Stockage cloud limité à <span className='text-[#9f54ff] font-semibold'>100 Mo</span></p>
          </div>
          <span className='w-full h-[0.5px] bg-[#969696]'></span>
          <p>Explorez d'autres formules. <span className='font-semibold'>Pro</span>, <span className='font-semibold'>Premium</span> :</p>
          <a href="" className='text-[#9f54ff] font-semibold hover:underline w-1/2'>Voir les différentes formules</a>
        </section>
        {/* Left part : Will include the main part of the free plan with some tokens allowed */}
      </section>
      <section className='bg-[#f0f0f0] m-10 h-3/6 w-[28%] rounded-3xl shadow-sm'>
        <div className='bg-white m-1.5 p-6 h-[90%] rounded-3xl'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <picture className='pb-5'>
              <img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
            </picture>
            <h1 className='flex justify-center font-semibold text-2xl'>S'inscrire</h1>
            <p className='text-[#969696] text-sm text-center pb-4'>Inscrivez-vous pour bénéficier des avantages</p>
          </div>
          <form>
            {/* --- Adresse mail --- */}
            <div className='relative pb-2'>
              <input 
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Email...'
                autoComplete='current-email'
                className='p-1.5 w-full rounded-lg pl-12 bg-[#f1f1f2] placeholder:text-[#969696] outline-[#969696]'
              />
              <div className='absolute top-0.5 left-2 text-3xl text-[#969696]'>
                <CiMail />
              </div>
            </div>

            {/* --- Mot de passe --- */}
            <div className='relative'>
              <input 
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Mot de passe...'
                autoComplete='current-password'
                className='p-1.5 w-full rounded-lg pl-12 bg-[#f1f1f2] placeholder:text-[#969696] outline-[#969696]'
              />
              <div className='absolute top-0.5 left-2 text-3xl text-[#969696]'>
                <CiLock />
              </div>
            </div>

            <button
              type='submit'
              onClick={handleSubmit}
              className='w-full bg-black text-white p-2 mt-4 rounded-lg hover:opacity-80 active:translate-y-0.5'
            >
              S'enregistrer
            </button>

            {/* Other option for registration */}
            <div className='flex flex-col justify-center items-center mt-4'>
              <p className='text-sm pb-2 text-[#969696]'>Ou continuer avec</p>
              <button className='flex justify-center items-center p-1 text-3xl w-24 rounded-lg border border-[#f5f5f5] shadow-lg hover:opacity-70'>
                <FcGoogle />
              </button>
            </div>
          </form>
        </div>

        {/* Redirection if the user has an account */}
        <p className='flex justify-center items-center gap-1 text-[#969696] font-light'>
          Vous avez déjà un compte?
          <NavLink to="/login" ><span className='text-black font-normal hover:underline'>Se connecter</span></NavLink>
        </p>
      </section>

      {/* Styling img */}
      <picture>
        <img src="./Img/ellipse.svg" alt="" className='absolute top-0 left-0' />
        <img src="./Img/gridbackground.svg" alt="" className='absolute top-0 left-0 opacity-30 -z-50' />
      </picture>
    </main>
  );
};

export default Signup;