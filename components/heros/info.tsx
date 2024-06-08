import React from 'react'

const Info = () => {
  return (
    <div><section className="container mx-auto">
    <div className="flex flex-row justify-center align-middle">
      <div className="w-6/12 p-5">
       <img src="images/heros/info1.webp" alt="" className='w-full' />
        {/* <img src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/illustration.png" className="w-full" alt=""/> */}
      </div>
      <div className=" ml-8 w-6/12">
        <div className="text-2xl">
          <h2 className="text-5xl font-semibold p-8">Collaborate coding, <span className="gradient1">with everyone.</span></h2>
          <p className='px-8 py-2 text-xl '>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page.</p>
        <button className=' ml-8 mt-3 border-0 p-3 px-7 text-white bg-purple-600 text-xl rounded-full'> Learn more</button>
        
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Info