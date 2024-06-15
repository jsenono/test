"use client"

import React from 'react'
import { ReactTyped } from "react-typed";

const HeroStarter = () => {
  return (
    
    <section class="relative  sm:py-16 lg:pt-20 lg:pb-36">
<div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
        <div class="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
            <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj bg-gradient-to-br " >Get meaningful <span className='gradient'>feedbacks </span> on  <ReactTyped
      strings={[
        "University Apps",
        "Essay Tips",
        "Carreer Help",
        "Interview prep"
      ]}
      typeSpeed={40}
      backSpeed={10}
      attr="placeholder"
      loop
    >
      <input type="text" className='text-black' />
      {/* <p></p> */}
    </ReactTyped></h1>

                <div class="mt-8 lg:mt-12 lg:flex lg:items-center">
                    <div class="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                        <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png" alt="" />
                        <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png" alt="" />
                        <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png" alt="" />
                    </div>

                    <p class="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Join with <span class="font-bold">4600+ Developers</span> and start getting feedbacks right now</p>
                </div>
            </div>

            <div class="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <a
                    href="#"
                    title=""
                    class="inline-flex items-center px-8 py-4 text-lg font-normal text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                    role="button"
                >
                    Get feedback
                </a>

                <a
                    href="#"
                    title=""
                    class="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                    role="button"
                >
                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download iOS App
                </a>
            </div>
        </div>

        <div class="xl:col-span-3 relative">
            <img src="images/starterpics/2.webp" alt="" className='absolute top-85 left-10 right-0 shadow-md  border-0 rounded-lg'/>
            <img src="images/starterpics/3.webp" alt="" className='absolute top-80 left-50 right-0 shadow-md  border-0 rounded-lg' />
        <img src="images/starterpics/1.png" alt="heroMAIN/1.png" className='w-2/3 align-right justify-center m-auto' />
        {/* <img src="images/heroMAIN/4.webp" alt="" className='absolute top-80 left-10 right-0 shadow-md  border-0 rounded-lg'/> */}
            {/* <img class="w-full mx-auto scale-110" src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png" alt="" /> */}
        </div>
    </div>
</div>
</section>

  )
}

export default HeroStarter