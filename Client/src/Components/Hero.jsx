import React from 'react'
import BtnCTA from './BtnCTA'

const Hero = () => {
  return (
    <main className='relative'>
        <section className='z-50'>
            <div className='flex flex-col items-center'>
                <h1 className='text-6xl m-4'>
                    <span className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text'>Interrogez</span> Vos <span className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text'>Documents</span> Avec l'<span className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text'>IA</span>
                </h1>
                <p className='pt-4 text-xs font-bold'>Une Solution Innovante basée sur l'IA pour Simplifier le Traitement de vos PDF.</p>
                <p className='pb-4 text-xs font-bold'>Grâce à notre technologie avancée</p>
                <BtnCTA>Essayer Gratuitement</BtnCTA>
                <picture className='mt-8 -z-10'>
                    <img src="./Img/rectangle.jpg" alt="" className='-z-50' />
                </picture>
                <p className='font-bold my-4'>Ils nous font confiance</p>
                <picture>
                    <img src="./Img/socialProof2.svg" alt="Social Proof" />
                </picture>
                <p className='m-6 font-light'><span>(</span>Utilisé par plus de 300 utilisateurs<span>)</span></p>
                <picture>
                    <img src="./Img/socialProof.svg" alt="Social Proof" />
                </picture>
            </div>
        </section>

        {/* --- Styling --- */}
        <div>
            <picture>
                <img src="./Img/ellipse.svg" alt="" className='absolute -top-40 -z-1' />
            </picture>
            <picture>
                <img src="./Img/Ellipseright.svg" alt="" className='absolute -top-80 right-0 -z-10'/>
            </picture>
        </div>
    </main>
  )
}

export default Hero