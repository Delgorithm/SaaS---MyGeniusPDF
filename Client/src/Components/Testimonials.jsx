import React from 'react';
import TestimonialsFullData from '../Data/TestimonialsData';
import TestimonialsProps from '../Props/TestimonialsProps';

const Testimonials = () => {

  const firstFourTestimonials = TestimonialsFullData.slice(0, 4);
  const nextFourTestimonials = TestimonialsFullData.slice(4, 8);
  const remainingTestimonials = TestimonialsFullData.slice(8);


  return (
    <main>
      <section className='flex flex-col items-center align-center'>
        <h2 id='avis' className='bg-gradient-to-l from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text text-4xl font-bold'>Avis</h2>
        <h5 className='relative mt-4 text-xl text-center'>Ils parlent de nous. Rejoignez les</h5>
      </section>
      
      {/* --- firstFourTestimonials --- */}
      <section className='flex mt-6 gap-4 m-4 w-[110%]'>
        {firstFourTestimonials.map((testimonial) => (
          <TestimonialsProps
            key={testimonial.id}
            opinion={testimonial.opinion}
            profilPicture={testimonial.profilPicture}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </section>

      {/* --- nextFourTestimonials --- */}
      <section className='flex gap-4 m-4 -translate-x-20 w-[110%]'>
        {nextFourTestimonials.map((testimonial) => (
          <TestimonialsProps
            key={testimonial.id}
            opinion={testimonial.opinion}
            profilPicture={testimonial.profilPicture}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </section>
      {/* --- remainingTestimonials --- */}
      <section className='flex gap-4 m-4 -translate-x-40 w-[110%]'>
        {remainingTestimonials.map((testimonial) => (
          <TestimonialsProps
            key={testimonial.id}
            opinion={testimonial.opinion}
            profilPicture={testimonial.profilPicture}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </section>
    </main>
  )
}

export default Testimonials