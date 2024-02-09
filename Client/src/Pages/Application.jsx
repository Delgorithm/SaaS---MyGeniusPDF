import React, { useState } from 'react'
import { CiHome, CiPercent } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiCreditCard2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { TiArrowUp } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { RiAttachment2 } from "react-icons/ri";
import PDFContent from '../Components/PDFContent';
import { UserAuth } from '../Context/AuthContext' 
import { useNavigate } from 'react-router-dom';

const Application = () => {

  const {user, logout} = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("Vous vous êtes déconnecté(e)");
    } catch (e) {
      console.log(e.message)
    }
  }

  const [pdfFile, setPdfFile] = useState(null);

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setPdfFile(file);
  }

  return (
    <main className='flex h-screen overflow-hidden'>

      {/* --- Left part : Sidebar --- */}
      <section className='bg-[#666666] w-1/6 h-screen border-r-[0.5px] border-[#ECECEC] flex flex-col text-white'>
        <div className='flex flex-col justify-between pl-6 pt-10 h-screen'>
          <div>
            <Link to="/application">
              <div className='flex items-center gap-2'>
                  <img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
                  <p className='text-xl'>MyGeniusPDF</p>
              </div>
            </Link>
            <div className='flex flex-col gap-4'>
              <p>Menu</p>
              <ul>
                <li className='flex flex-col items-start gap-4 text-xl'>
                  <Link to="/application">
                    <span className='flex justify-center items-center gap-2 bg-[#6d79f9] p-3 rounded-2xl'>
                      <CiHome />
                      <p>Home</p>
                    </span>
                  </Link>

                  <Link to="profil">
                    <span className='flex justify-center items-center gap-2'>
                      <GoPerson />
                      <p>Mon profil</p>
                    </span>
                  </Link>

                  <Link to="abonnement">
                    <span className='flex justify-center items-center gap-2'>
                      <CiCreditCard2 />
                      <p>Abonnement</p>
                    </span>
                  </Link>

                  <Link to="/settings">
                    <span className='flex justify-center items-center gap-2'>
                      <CiSettings />
                      <p>Paramètres</p>
                    </span>
                  </Link>

                  <Link to="/">
                    <span className='flex justify-center items-center gap-2'>
                      <CiHome />
                      <p>Page d'accueil</p>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-10 flex justify-around items-center'>
            <p className='text-xl'>Email : {user && user.email}</p>
            <button 
              onClick={handleLogout}
              className='text-3xl'
            >
              <CiLogout />
            </button>
          </div>
        </div>
      </section>

      {/* --- Right part : Main part --- */}
      <section className='flex flex-col w-5/6 h-screen bg-[#b9b9b9]'>

        {/* --- Screen to see the pdf --- */}

        {/* --- Button to add the pdf --- */}

        <div className='relative flex items-center justify-center w-full h-full'>
          {pdfFile ? (
            <section className='flex w-full'>
              <div className='w-2/3 flex items-center justify-center'>
                <PDFContent pdfFile={pdfFile} />
              </div>
              <div className='w-2/5 mx-4 bg-[#666666] text-white'>
                {response}
              </div>
            </section>
          ) : (
              <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center p-16 border-dashed border-[2.5px] border-gray-500 rounded-2xl hover:opacity-50 cursor-pointer'>
                <span className='text-5xl text-gray-500'>
                  <CiSaveDown2 />
                </span>
                <div className='flex flex-col items-center justify-center pb-6'>
                  <svg className='w-8 h-8 mn-4 text-gray-500' aria-hidden="true" fill='none' viewBox='0 0 20 16'>
                    <path stroke='currenColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 text-center font-bold'>Ajoutez vos fichiers PDF</p>
                </div>
                <input type="file" id='dropzone-file' className='hidden' onChange={handleFileChange} />
              </label>
          )}
        </div>

        {/* --- Inputs : Text bar + buttons --- */}
        <div className='flex flex-col items-center border-t-[0.5px] border-[#ECECEC]'>
          <form className='w-3/4 p-2'>
            <div className='flex items-center px-2 py-2 rounded-lg'>
              
              {/* --- Input for a pdf file --- */}
              <label htmlFor="dropzone-file" className='inline-flex justify-center items-center p-0.5 mr-2 bg-white rounded cursor-pointer hover:opacity-80 active:scale-95'>
                <input className='items-center hidden' type='file' id='dropzone-file' onClick={handleFileChange} />
                  <span className='text-4xl'><RiAttachment2 /></span>
              </label>

              {/* --- Input for the text --- */}
              <input
                id="chat" 
                type='text' 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                className="block  p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Message pour MyGeniusPDF..." 
              />

              {/* --- Button to post the question --- */}
              <button 
                type='submit'
                value="submit" 
                className="inline-flex justify-center items-center p-0.5 ml-2 bg-white rounded cursor-pointer hover:opacity-80 active:scale-95" 
              >
                <span className='text-4xl flex justify-center items-center'>
                  <TiArrowUp />
                </span> 
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Application