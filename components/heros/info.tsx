import React from 'react'

const Info = () => {
  return (
    <div><section className="container mx-auto">
    <div className="flex flex-row justify-center align-middle mt-10 ">
      <div className="w-6/12 p-5 relative">
       {/* <img src="images/heros/info1.webp" alt="" className='w-full' /> */}
        {/* <img src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/illustration.png" className="w-full" alt=""/> */}
        <img src="images/heros/1/4.png" alt="" className='w-8/12 m-auto' /> 
        <img src="images/heros/1/9.png" alt="" className='w-5/12 top-5 left-80  absolute shadow-xl border-0 rounded-2xl' />
        <img src="images/heros/1/6.webp" alt="" className=' top-20 left-10  absolute border-0 shadow-xl' /> 

      </div>
      <div className=" ml-8 w-6/12">
        <div className="text-3xl">
          <h2 className="text-6xl font-extrabold p-8">Opening and creating new <span className="gradient">opportunities.</span></h2>
          <p className='px-8 py-2 text-xl '>UGforUG is a groundbreaking initiative poised to revolutionize opportunities for Ugandans across various spheres of life. Through these efforts, UGforUG aspires to be the catalyst for a new era of growth, prosperity, and success for Uganda and its people. </p>
        <button className=' ml-8 mt-3 border-0 p-3 px-7 text-white bg-purple-600 text-xl rounded-full'> Learn more</button>
        
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Info