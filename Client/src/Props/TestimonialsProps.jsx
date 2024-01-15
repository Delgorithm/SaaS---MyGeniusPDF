import React from 'react'

const TestimonialsProps = (props) => {
  return (
    <div className='flex flex-col p-5 gap-5 justify-center w-96 rounded-xl shadow-lg border-[0.5px] border-[#ebebeb] bg-gradient-to-t from-[#f0f0ff] to-[#ffffff]'>
        <p className='text-center'>{props.opinion}</p>
        <div className=' flex items-center gap-2'>
            <picture>
                <img src={props.profilPicture} alt="Client's profil picture" className='rounded-full w-20 h-20 object-cover' />
            </picture>
            <div className='flex flex-col'>
                <p className='font-bold'>{props.name}</p>
                <p className='font-extralight text-sm'>{props.role}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsProps