import React from 'react'

const Info = () => {
  return (
    <div><section className="container mx-auto mt-20">
    <div className="flex flex-row justify-center align-middle">
     
      <div className=" ml-8 w-6/12 m-auto   ">
        <div className="text-2xl m-auto ">
          <h2 className="text-6xl font-extrabold p-8">We are redefining <span className="gradient">the status quo.</span></h2>
          <p className='px-8 py-2 text-s '>UGforUG aims to revolutionize Uganda's university application process with personalized support for students, replacing the traditional approach of independent navigation with comprehensive guidance at every stage.</p>
        <button className=' ml-8 mt-3 border-0 p-3 px-7 text-white bg-purple-600 text-xl rounded-full'> Learn more</button>
        
        </div>
      </div>


      <div className="w-6/12 p-5 relative">
       {/* <img src="images/heros/info1.webp" alt="" className='w-full' /> */}
       <img src="images/heros/1/11.png" alt="" className='w-11/12 ' />
       <img src="images/heros/1/10.webp" alt="" className=' top-[400px]  absolute border-0 left-8 shadow-2xl rounded-m' /> 

        {/* <img src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/illustration.png" className="w-full" alt=""/> */}
      </div>


    </div>
  </section></div>
  
  )
}

export default Info