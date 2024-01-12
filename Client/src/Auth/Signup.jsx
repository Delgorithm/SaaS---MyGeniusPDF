import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { app, auth } from './Firebase';
import { UserAuth } from '../Context/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Firebase : Realtime Database
  const db = getDatabase();
  const userDataRef = ref(db, 'users/');

  const auth = getAuth(app);

  const { createUserAccount } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserAccount(email, password);

      const user = auth.currentUser;
      const userId = user.uid;

      await set(ref(userDataRef, userId), {
        email: email,
        password: password,
      });

      navigate('/compte');
      // await set(userDataRef, {
      //   email: email,
      //   password: password,
      // });
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
                  placeholder='**********'
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


      <div className='flex flex-col gap-5 mt-14'>
        <p>
          <Link to="/signup">Créer un compte</Link>
        </p>
        <p>
          <Link to="/login">Se connecter</Link>
        </p>

      </div>
    </main>
  );
};

export default Signup;
