import React from 'react'

const TestimonialsProps = (props) => {
  return (
    <div className='flex flex-col mx-12 my-3 p-10 gap-6 w-[40%] justify-center rounded-xl bg-red-300'>
        <p>{props.opinion}</p>
        <div className=' flex items-center gap-2'>
            <picture>
                <img src={props.profilPicture} alt="Client's profil picture" className='rounded-full w-24 h-24 object-cover' />
            </picture>
            <div className='flex flex-col'>
                <p>{props.name}</p>
                <p>{props.role}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsProps