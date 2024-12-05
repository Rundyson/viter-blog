import React from 'react'

const Values = () => {
  return (
    <section className="values">
        <h2 className='uppercase text-center py-10 border-b border-light text-7xl font-normal font-[syne] mb-10'>Our Values</h2>
        <div className="container">
            <div className="grid grid-cols-2 gap-10">

                <div className="values-img pr-5 ">
                    <img 
                    src="https://assets-global.website-files.com/63661389dd2417f19a0d89d3/63695645ae15af53f7884f58_home-values-p-1080.webp" 
                    alt="" 
                    className='rounded-lg h-full object-cover'/>
                </div>

                <div className="values-content pl-14 border-l border-light">
                    <div className="space-y-10 ">

                        <div className="grid grid-cols-[40px_1fr] gap-5 mb-5 border-b border-light py-5">
                            <span 
                            className='size-[50px] center-all block border border-light inline-block rounded-full text-xl'>
                                01
                            </span>
                            <div>
                                <h4 className='font-[syne] font-normal text-2xl mb-5'>Vision</h4>
                                <p className='font-[syne] font-normal text-lg mb-5 leading-loose'>Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations, transforming their dreams into reality and shaping a future worth embracing.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[40px_1fr] gap-5 mb-5 border-b border-light py-5">
                            <span 
                            className='size-[50px] center-all block border border-light inline-block rounded-full text-xl'>
                                01
                            </span>
                            <div>
                                <h4 className='font-[syne] font-normal text-2xl mb-5'>Vision</h4>
                                <p className='font-[syne] font-normal text-lg mb-5 leading-loose'>Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations, transforming their dreams into reality and shaping a future worth embracing.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[40px_1fr] gap-5 mb-5 py-5">
                            <span 
                            className='size-[50px] center-all block border border-light inline-block rounded-full text-xl'>
                                01
                            </span>
                            <div>
                                <h4 className='font-[syne] font-normal text-2xl mb-5'>Vision</h4>
                                <p className='font-[syne] font-normal text-lg mb-5 leading-loose'>Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations, transforming their dreams into reality and shaping a future worth embracing.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values