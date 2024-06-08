import React from 'react'

const InfoTabs = () => {
  return (
    <div><section className="container mx-auto mt-20">
    <div className="flex flex-row justify-center align-middle">
      
      <div className=" ml-8 w-5/12">
        <div className="text-2xl">
          <h2 className="text-6xl font-extrabold p-8">Collaborate coding, <span className="gradient1">with everyone.</span></h2>
          <p className='px-8 py-2 '>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page.</p>
        </div>
      </div>

      <div className="w-7/12 p-5">

      <div className='flex items-center justify-center min-h-screen'>
<ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
  <li className="">
    <input className="peer sr-only" type="radio" value="yes" name="answer" id="yes" checked />
    <label className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="yes">Details</label>

        <div className="absolute bg-white shadow-lg left-6 p-6 border mt-2 border-indigo-300 rounded-lg w-[50vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
     ur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
    </div>
  </li>

  <li className="">
    <input className="peer sr-only" type="radio" value="no" name="answer" id="no" />
    <label className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="no">About</label>

        <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[50vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
      ti  ti  tis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
    </div>
  </li>

  <li className="">
    <input className="peer sr-only" type="radio" value="yesno" name="answer" id="yesno" />
    <label className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out " for="yesno">Something</label>

        <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[50vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
        haf  had  had  t amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
    </div>
  </li>
</ul>

</div>
       
       
        {/* <img src="https://cdn.rareblocks.xyz/collection/clarity/images/features/2/illustration.png" className="w-full" alt=""/> */}
      </div>


    </div>
  </section></div>
  )
}

export default InfoTabs