"use client"

import React from 'react'
import { useState } from 'react';

const Features1 = () => {

    const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const accordionItems = [
    { 
      title: 'Expert Guidance', 
      content: 'Our team of experienced counselors provides expert guidance throughout the university application process, ensuring you make informed decisions and present your best self to prospective universities.'
    },
    { 
      title: 'Tailored Support', 
      content: 'Receive tailored support that caters to your individual needs and aspirations. We understand that every student is unique, and we strive to provide customized assistance to help you achieve your academic goals.'
    },
    { 
      title: 'Comprehensive Preparation', 
      content: 'Prepare comprehensively for university applications with our comprehensive preparation program. From brainstorming ideas for application essays to conducting mock interviews, we cover every aspect of the application process.'
    },
  ];
  


  return (
    <div>

<div><section className="container mx-auto mt-20 p-9">
    <div className="flex flex-row justify-center align-middle gap-8">
      
      <div className=" ml-8 w-3/12 justify-center align-middle items-center m-auto">
        

      <div className="w-full max-w-md mx-auto">
      {accordionItems.map((item, index) => (
        <div key={index} className="border-0 items-center   bg-slate-200 mb-3 rounded-lg">
          <button
            className="w-full flex items-center justify-between px-2 py-8 focus:outline-none text-left bg-slate-200 mb-3 rounded-lg"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-xl mx-7">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-6 h-6 transition-transform transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-8 border-t border-gray-200 py-5 mt-n6">{item.content}</div>
          )}
        </div>
      ))}
    </div>


      </div>

      <div className="w-8/12 p-5">
        <img src="images/Features/features.webp" className="w-full" alt=""/>
      </div>


    </div>
  </section></div>



        
    </div>
  )
}

export default Features1