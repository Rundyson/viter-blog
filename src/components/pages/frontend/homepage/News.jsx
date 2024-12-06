import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'
import { Link } from 'react-router-dom'

const News = ({title, result}) => {

  return (
    <section className="py-16 border-b border-light">
        <div className="container">

            <div className="flex justify-between items-center py-10 border-y border-light mb-10 ">
                <h2 
                className='uppercase font-[syne] font-normal text-7xl mb-0'>
                    {title}
                </h2>
                <Link to="/" 
                className='btn-animate' 
                data-text="See All">
                    See All
                </Link>
            </div>

            <div className="grid grid-cols-3 divide-x divide-black overflow-auto">

                {result?.data.map((item, key) => (
                <div className="card-news px-5 " key={key}>
                    <img 
                    src={`${imgPath}/${item.blog_image}`}
                    alt="" 
                    className='w-full rounded-lg h-[300px] object-cover'/>
                    <small className='uppercase text-lg font-[syne] block my-3'>{item.blog_category}</small>
                    <Link to="/"
                    className='text-2xl'>{item.blog_description}
                    </Link>
                </div>
                  ))}

            </div>

        </div>
    </section>
  )
}

export default News