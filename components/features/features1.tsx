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

<div>
<div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-gray-600 font-inter">Are we like every one else?</h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                    {/* Turn your visitors into profitable */}
                    Why we are the right choice
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative"> for you </span>
                    </span>
                </p>

                {/* <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                    >
                        Get more customers
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                        role="button"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Watch free demo
                    </a>
                </div> */}

                </div>

  
  
  <section className="container mx-auto mt-20 p-9">
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