import React from 'react'

const Facts = () => {
  return (
<section className="fact-area section-spacing pb-0">
    <div className="container mx-auto sm:px-4 container-large">
      <div className="section-header">
        
      <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-gray-600 font-inter">Made for students by fellow students</h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                    {/* Turn your visitors into profitable */}
                    Turn your hopes into your
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative"> motivation </span>
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
      </div>
      <div className="fact-content-box">
        <div className="section-content-wrapper">
          <div className="section-content">
            <h3 className="title has_fade_anim font-semibold text-3xl">Pathways for Ugandan Talent</h3>
            <p className="text has_fade_anim">Providing comprehensive support for Ugandan individuals seeking to advance their careers and educational opportunities globally</p>
            <div className="apps-list has_fade_anim">
              <div className="shape-1">
                <img src="images/Features/shape-s-16.webp" alt="shape image"/>
              </div>
              <div className="apps-links">
                {/* <div className="app">
                  <img src="images/banner/app-store.png" alt="app image"/>
                </div> */}
                <div className="app">
                  <img src="images/Features/exclusive.png"className='w-2/3 rounded-lg'  alt="app image"/>
                </div>
              </div>
            </div>
          </div>
          <div className="section-thumb has_fade_anim">
            {/* <img src="images/Features/fact.webp" alt="app image"/> */}
            <img src="images/Features/phone2.png" alt="app image"/>
          </div>
        </div>
        <div className="facts-wrapper">
          <div className="fact-box has_fade_anim">
            <div className="title-wrapper">
              <h3 className="title">10K +</h3>
            </div>
            <div className="text-wrapper">
              <p className="text">Providing career guidance and counseling services to 10,000+ Ugandan students </p>
            </div>
          </div>
          <div className="fact-box has_fade_anim" data-delay="0.25">
            <div className="title-wrapper">
              <h3 className="title">50+</h3>
            </div>
            <div className="text-wrapper">
              <p className="text">Striving to establish partnerships with 50+ educational institutions and scholarship providers worldwide</p>
            </div>
          </div>
          <div className="fact-box has_fade_anim" data-delay="0.35">
            <div className="title-wrapper">
              <h3 className="title">500 +</h3>
            </div>
            <div className="text-wrapper">
              <p className="text">Mentor and prepare 500 Ugandan students annually for competitive scholarship applications</p>
            </div>
          </div>
          <div className="fact-box has_fade_anim" data-delay="0.45">
            <div className="title-wrapper">
              <h3 className="title">1000 +</h3>
            </div>
            <div className="text-wrapper">
              <p className="text">Assist 100 Ugandan professionals annually in accessing international job opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Facts