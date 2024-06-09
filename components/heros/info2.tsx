import React from 'react'

const Info = () => {
  return (
    <div><section className="container mx-auto mt-20">
    <div className="flex flex-row justify-center align-middle">
     
      <div className=" ml-8 w-6/12">
        <div className="text-2xl">
          <h2 className="text-5xl font-semibold p-8">We are redefining <span className="gradient">the status quo.</span></h2>
          <p className='px-8 py-2 text-s '>UGforUG is set to disrupt the conventional university application process in Uganda by introducing a comprehensive support system tailored to the needs of aspiring students. Unlike the traditional approach, which often leaves students navigating the complex admissions landscape on their own, UGforUG offers personalized guidance and assistance at every step of the journey.</p>
        <button className=' ml-8 mt-3 border-0 p-3 px-7 text-white bg-purple-600 text-xl rounded-full'> Learn more</button>
        
        </div>
      </div>


      <div className="w-6/12 p-5">
       <img src="images/heros/info1.webp" alt="" className='w-full' />
        {/* <img src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/illustration.png" className="w-full" alt=""/> */}
      </div>


    </div>
  </section></div>
  
  )
}

export default Info