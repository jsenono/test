import React from 'react'

const Steps = () => {
  return (
    <div>
        <section className="home-two-feature-area p-relative pt-120 pb-90 fix">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap  justify-center items-center">
                        <div className="lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4 sm:w-full pr-4 pl-4">
                            <div className="section-title mb-80 text-center">  
                                    <h5><span>Data-driven coaching</span></h5>
                                    <h2>It’ll find and <span>fix anything that hurts</span></h2>                                     
                                </div>       
                        </div>
                    </div>
                      <div className="flex flex-wrap ">
                        <div className="lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4 sm:w-full pr-4 pl-4">
                           <div className="home-two-feature-box-one mb-30 wow fadeInUp animated" data-animation="fadeInLeft" data-delay=".4s">                       
                                <div className="text">
                                    <h3 className='font-thin'><a href="about.html">Celebrate milestones</a></h3>     
                                    <p>Instant alerts and weekly digests to keep your team aligned and celebrate wins</p>
                                </div>
                                <div className="img">
                                    <img src="images/steps/featue-box-img-01.png" alt="icon01"/>
                                </div>
                            </div>
                            <div className="also-done-text">
                                    <img src="images/steps/also-done-text.png" alt="icon01"/>
                            </div>
                        </div>
                          <div className="lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4 sm:w-full pr-4 pl-4">
                           <div className="home-two-feature-box-one col-b2 mb-30 wow fadeInUp animated" data-animation="fadeInLeft" data-delay=".4s">                       
                                <div className="text">
                                    <h3><a href="about.html">Automatic enrichment</a></h3>     
                                    <p>Automatically enrich your customers profiles and their users powered by GPT</p>
                                </div>
                                <div className="img">
                                    <img src="images/steps/featue-box-img-02.png" alt="icon01"/>
                                </div>
                            </div>
                            <div className="home-two-feature-box-one col-b3 mb-30 wow fadeInUp animated" data-animation="fadeInLeft" data-delay=".4s">                       
                                <div className="text">
                                    <h3><a href="about.html">Integrated with your CRM</a></h3>     
                                    <p>Connect June to your CRM and sync product usage data with your CS and sales teams</p>
                                </div>
                                <div className="img">
                                    <img src="images/steps/featue-box-img-03.png" alt="icon01"/>
                                </div>
                            </div>
                        </div>   
                    </div>                  
                </div>
            </section>
    </div>
  )
}

export default Steps