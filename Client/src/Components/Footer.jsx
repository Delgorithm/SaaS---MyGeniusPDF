import React from 'react'

const Footer = () => {
  return (
    <main className='bg-[#f6f6f6] h-80 p-8 mt-32'>
        <section className='flex justify-between items-center mx-16'>
            <div className='flex flex-col justify-between gap-6'>
                <a href="#">
                    <img src="./Img/logobigname.svg" alt="MyGeniusPDF's logo" />
                </a>
                <div>
                    <p className='text-xl'>Être informé(e). S'abonner dès maintenant</p>
                    <p className='font-light'>Recevoir des informations exclusives, conseils et dernières <br />informations via notre newsletter.</p>
                    <form action="" method='post' className='mt-4 flex gap-6'>
                        <input type="email" id='email' name='email' className='p-2 pr-40 text-left rounded-md shadow-lg border-2 bg-gradient-to-t from-[#fefefe] to-[#fafafa] focus:text-black focus:outline-[#8B7EFF]' placeholder="S'inscrire à la newsletter..." required />
                        <button type='submit' className='px-8 rounded-md text-[#FAFAFA] bg-gradient-to-b from-[#92919A] to-[#020014] transition duration-300 hover:scale-105 hover:opacity-80 active:translate-y-0.5'>S'abonner</button>
                    </form>
                </div>
            </div>
            <div className='flex gap-5'>
                <div>
                    <ul>
                        <li className='flex flex-col text-left gap-2'>
                            <p className='font-bold'>Informations</p>
                            <a href="" className='font-light transition duration-100 hover:text-[#9f54ff]'>Conditions d'utilisations</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='flex flex-col text-right gap-2'>
                            <p className='font-bold'>Navigation</p>
                            <a href="#features" className='font-light transition duration-100 hover:text-[#9f54ff]'>Features</a>
                            <a href="avis" className='font-light transition duration-100 hover:text-[#9f54ff]'>Avis</a>
                            <a href="prix" className='font-light transition duration-100 hover:text-[#9f54ff]'>Prix</a>
                            <a href="faq" className='font-light transition duration-100 hover:text-[#9f54ff]'>FAQ</a>
                        </li>
                    </ul>
                </div>
                {/* <p>Site fait et réalisé par <span><a href="">Adrien Douville</a></span></p> */}
            </div>
        </section>
    </main>
  )
}

export default Footer