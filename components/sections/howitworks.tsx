import React from 'react'

const Howitworks = () => {
 
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto my-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start ">
          <div className="space-y-8" >
            <h2 className="text-4xl font-bold text-gray-800">How it works today</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    1
                  </div>
                  <div className="h-20 w-0.5 bg-gray-300 mx-5 mt-2 position-absolute" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Register your app</h3>
                  <p className="text-gray-600">To be able to create an account, input your email address and password.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    2
                  </div>
                  <div className="h-8 w-0.5 bg-gray-300 mx-2" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Select a Template</h3>
                  <p className="text-gray-600">
                    Simply input some basic information or keywords about your brand or product.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Customize your App</h3>
                  <p className="text-gray-600">Personalize your app with themes, colors, and content.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-3 p-4 mt-8 lg:mt-0">
            <div className="flex flex-col items-center justify-center">
             <img src="../../daily-payment1.jpg" alt="daily_payment-1" className=''/>
            </div>
          </div>
        </div>
        <div className="text-right mt-4">
          <span className="text-sm font-medium text-blue-600">Easy to use · Process</span>
        </div>
      </div>
    )
  }
  
  
export default Howitworks