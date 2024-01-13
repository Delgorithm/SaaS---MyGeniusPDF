import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { app, db, userDataRef } from './Firebase';
import { ref, set, push } from 'firebase/database';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { createUserAccount } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserAccount(email, password);
      const userRef = push(userDataRef);
      set(userRef, {
        email: email,
        password: password
      });
      navigate('/compte');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>S'inscrire</h1>
            <form>

              {/* --- Full name---
              <div>
                <label htmlFor="fullname">
                  Fullname
                </label>
                <input 
                  type="text"
                  label="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  placeholder='John doe...'
                  autoComplete='current-fullname'
                />
              </div> */}


              {/* --- Adresse mail --- */}
              <div>
                <label htmlFor="email-address">
                  Adresse mail
                </label>
                <input 
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Votre adresse mail...'
                  autoComplete='current-email'
                />
              </div>

              {/* --- Mot de passe --- */}
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input 
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Votre mot de passe...'
                  autoComplete='current-password'
                />
              </div>

              <button
                type='submit'
                onClick={handleSubmit}
              >
                S'enregistrer
              </button>

            </form>

            <p>
              Vous avez déjà un compte ? {' '}
              <NavLink to="/login" >Se connecter</NavLink>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;