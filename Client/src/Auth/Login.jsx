import React, { useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/compte')
    } catch (e) {
      setError(e.message);
      console.log(e.message)
    }
  }

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit}>
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
              Vous n'avez pas encore de compte? {' '}
              <NavLink to="/signup" >Créer un compte</NavLink>
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

export default Login;
