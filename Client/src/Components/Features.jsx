import React from 'react'
import BtnCTA from './BtnCTA'

const Features = () => {
  return (
    <main>
      <section>
        <div className='flex flex-col items-center align-center'>
          <h2 id='features' className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text text-4xl'>Features</h2>
          <h4 className='pt-4 text-2xl'>
            <span className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text'>Découvrez</span> et <span className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text'>Analysez</span> vos documents en <span className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text'>Discutant</span> avec
          </h4>
          <p className='pt-4 text-xs font-bold'>Une approche novatrice pour intéragir de manière conversationnelle avec vos documents</p>
          <picture className='relative flex flex-col items-center -z-50 -top-24'>
            <img src="./Img/MacAndIphone.svg" alt="MacBookPro16' and iPhone 15" className='w-screen'/>
          </picture>

          {/* --- Grid part --- */}
          <div className='grid grid-cols-3 grid-rows-2 gap-4 relative -top-40'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img src="./Img/IconDiscussion.svg" alt="Icon Discussion" />
              <p className='text-lg font-bold'>Analyse Conversationnelle des Documents</p>
              <p className='text-center font-light mb-4'>Interagissez avec vos documents de manière conversationnelle <br /> pour une gestuin plus intuitive</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img src="./Img/IconIA.svg" alt="Icon IA" />
              <p className='text-lg font-bold'>Technologie d'IA Avancée</p>
              <p className='text-center font-light mb-4'>Découvrez comment notre technologie d'IA <br /> révolutionne la gestion de documents</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img src="./Img/IconChat.svg" alt="Icon Chat" />
              <p className='text-lg font-bold'>Reconnaissance Optique de Caractères (OCR)</p>
              <p className='text-center font-light mb-4'>Convertissez le texte de vos images ou PDF en <br /> contenu éditable en un clin d'oeil</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img src="./Img/IconPower.svg" alt="Icon Power" />
              <p className='text-lg font-bold'>Extraction Intelligente de Données</p>
              <p className='text-center font-light mb-4'>Libérez la puissance de l'IA pour extraire des <br /> informations clés de vos documents</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img src="./Img/IconCloud.svg" alt="Icon Cloud" />
              <p className='text-lg font-bold'>Stockage Cloud Sécurisée</p>
              <p className='text-center font-light mb-4'>Vos documents sont en sécurité dans notre <br />stokage cloud hautement sécurisé </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img src="./Img/IconCharger.svg" alt="Icon Discussion" />
              <p className='text-lg font-bold'>Intégrations Puissantes</p>
              <p className='text-center font-light mb-4'>Connec tez votre solution à d'autres outils pour <br /> une expérience utilisateur complète</p>
            </div>
          </div>

          {/* --- Stats part --- */}
          <div className='relative -top-20 w-20 h-8 rounded-full bg-gradient-to-l from-[#E6E6E8] to-[#e4e4e4] border-[0.5px] border-[#b2b2b2] shadow-2xl flex items-center justify-center text-2xl'>✨</div>
          <h5 className='relative -top-10 text-2xl'>Comprenez en profondeur vos documents</h5>
          <p className='relative -top-5 text-center font-light'>Explorez une nouvelle façon d'intéragir avec vos documents grâce à l'analyse conversationnelle <br />et à l'IA avancée</p>
          <section className='flex justify-around items-center gap-10 w-[60%]'>
            <div className='flex flex-col items-center'>
              <p className='text-5xl bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text font-bold'>200+</p>
              <p>Projets complétés</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-5xl bg-gradient-to-t from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text font-bold'>500%</p>
              <p>Retour sur investissement</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-5xl bg-gradient-to-r from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text font-bold'>800+</p>
              <p>Utilisation</p>
            </div>
          </section>
          <section className='flex justify-between items-center w-[60%] mt-10 p-4 border-[0.5px] border-[#8B7EFF] shadow-xs rounded-xl '>
            <div className=''>
              <p className='text-2xl'>Commencer gratuitement</p>
              <p className='text-sm font-extralight'>Utilisé par plus de 300 personnes</p>
            </div>
            <BtnCTA>Essayer gratuitement</BtnCTA>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Features