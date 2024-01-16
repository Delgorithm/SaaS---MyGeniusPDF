import React, { useState } from 'react'

const FAQProps = (props) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className=''>
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className='flex justify-between w-full items-center'
            >
                <span className='text-left mx-8 font-bold'>{props.question}</span>
                {accordionOpen
                    ? <span className='text-3xl mx-8 font-extralight'>-</span>
                    : <span className='text-3xl mx-8 font-extralight'>+</span>
                }
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                accordionOpen
                    ? 'grid-rows-[1fr] opacity-100 font-light pb-2'
                    : 'grid-rows-[0fr] opacity-0 text-xs'
            }`}>
                <div className='overflow-hidden mx-8'>{props.answer}</div>
            </div>
        </div>
  )
}

export default FAQProps