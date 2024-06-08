
"use client"
// components/Tabs.js
import { useState } from 'react';




const Tabs = ({ tabs }) => {
  
  const [activeTab, setActiveTab] = useState(0);

  return (

    <div><section className="container mx-auto mt-20">
        




<div className="flex flex-row justify-center align-middle">
      
      <div className=" ml-8 w-6/12">
        <div className="text-2xl">
          <h2 className="text-6xl font-extrabold p-8">Collaborate <span className="gradient1">with everyone.</span></h2>
          <p className='px-8 py-2 '>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page.</p>
        </div>
      </div>
      

      {/* tabs section mapping */}
      <div className="w-6/12 p-5">
      <div className="">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-800'
            } px-5 py-3 w-full mr-4 rounded-full focus:outline-none mb-6 `}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4 md:mt-0 p-5 text-xl bg-slate-100">
        {tabs[activeTab].content}

        <div className='flex flex-row'>

            {
                tabs[activeTab].fields.map((field, index) =>(
                    <p key={index} className='text-sm border-0 bg-slate-50 px-3 py-3 m-1 mt-6 rounded-full text-center	hover:bg-purple-600 hover:text-white '>
{field}

                    </p>
                )
            
            )
            }
        </div>
      </div>
    </div>

      </div>
      
      
      </div>

   
  </section></div>
    
  );
};

export default Tabs;





