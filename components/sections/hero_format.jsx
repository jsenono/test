import React from 'react'

const   HeroX = () => {
  return (
    <div><section className="container mx-auto">
    <div className="flex flex-row justify-center align-middle mt-10">
      <div className="w-6/12 p-5">
       <img src="images/heros/info1.webp" alt="" className='w-full' />
        {/* <img src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/illustration.png" className="w-full" alt=""/> */}
      </div>
      <div className=" ml-8 w-6/12">
        <div className="text-2xl">
          <h2 className="text-6xl font-bold p-8">Opportunity has  <span className="gradient">No Price Tag</span></h2>
          <p className='px-8 py-2 text-xl '>UGforUG stands as a beacon of hope and opportunity for Ugandan students, breaking down barriers to access through its commitment to providing all services completely free of charge. </p>
        <button className=' ml-8 mt-3 border-0 p-3 px-7 text-white bg-purple-600 text-xl rounded-full'> Learn more</button>
        
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default HeroX