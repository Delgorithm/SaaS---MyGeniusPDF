import React from 'react'
import FAQProps from '../Props/FAQProps'
import FaqFullData from '../Data/FAQData'

const FAQ = () => {
  return (
    <main className='flex flex-col items-center align-center'>
        <h2 id='faq' className='bg-gradient-to-b from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text text-4xl font-bold mb-8'>FAQ</h2>
        <section className='mx-24 border-[0.5px] bg-gradient-to-b from-[#fafafa] to-[#efefef] shadow-xl'>
          {FaqFullData.map((faqs) => (
            <div key={faqs.id} className='m-2 flex flex-col'>
              <FAQProps
                question={faqs.question}
                answer={faqs.answer}
              />  
            </div>
          ))}
        </section>
    </main>
  )
}

export default FAQ