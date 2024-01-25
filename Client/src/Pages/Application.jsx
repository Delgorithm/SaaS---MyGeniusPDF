  import React, { useState } from 'react'
  import { CiHome, CiPercent } from "react-icons/ci";
  import { GoPerson } from "react-icons/go";
  import { CiCreditCard2 } from "react-icons/ci";
  import { CiSettings } from "react-icons/ci";
  import { CiSaveDown2 } from "react-icons/ci";
  import { TiArrowUp } from "react-icons/ti";
  import { Link } from 'react-router-dom';
  import { RiAttachment2 } from "react-icons/ri";
import PDFContent from '../Components/PDFContent';

  const Application = () => {

    const [pdfFile, setPdfFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setPdfFile(file);
    }

    return (
      <main className='flex h-screen overflow-hidden'>

        {/* --- Left part : Sidebar --- */}
        <section className='bg-[#222131] w-1/6 h-screen border-r-[0.5px] border-[#ECECEC] flex flex-col text-white'>
          <div className='flex flex-col pl-6 pt-10 h-3/5'>
            <Link to="/">
              <div className='flex items-center gap-2'>
                  <img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
                  <p className='text-xl'>MyGeniusPDF</p>
              </div>
            </Link>
            <div className='flex flex-col gap-4'>
              <p>Menu</p>
              <ul>
                <li className='flex flex-col'>
                  <span className='flex justify-center items-center gap-2'>
                    <CiHome />
                    <a href="">Home</a>
                  </span>
                  <span className='flex justify-center items-center gap-2'>
                    <GoPerson />
                    <a href="">Mon profil</a>
                  </span>
                  <span className='flex justify-center items-center gap-2'>
                    <CiPercent />
                    <a href="">Paiement</a>
                  </span>
                  <span className='flex justify-center items-center gap-2'>
                    <CiSettings />
                    <a href="">Paramètres</a>
                  </span>
                  <span className='flex justify-center items-center gap-2'>
                    <CiHome />
                    <a href="">Page d'accueil</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Right part : Main part --- */}
        <section className='flex flex-col w-5/6 h-screen bg-[#222131]'>

          {/* --- Screen to see the pdf --- */}

          {/* --- Button to add the pdf --- */}

          <div className='relative flex items-center justify-center w-full h-full'>
            {pdfFile ? (
              <PDFContent pdfFile={pdfFile} />
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
                  <button className='text-4xl flex justify-center items-center' onClick={handleFileChange}>
                    <RiAttachment2 />
                  </button>
                </label>

                {/* --- Input for the text --- */}
                <textarea id="chat" rows="1" className="block  p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500" placeholder="Message pour MyGeniusPDF..."></textarea>

                {/* --- Button to post the question --- */}
                <button type="submit" className="inline-flex justify-center items-center p-0.5 ml-2 bg-white rounded cursor-pointer hover:opacity-80 active:scale-95">
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