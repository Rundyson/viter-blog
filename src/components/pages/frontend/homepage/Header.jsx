import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-5 border-b border-light'>
        <div className="container">
            <div className="flex items-center justify-between ">
                <Link to="">PYLA</Link>

                <div className='flex justify-between items-center gap-5'>

                    <ul className='flex justify-between gap-10 text-sm uppercase'>
                        <li>
                            <NavLink to="/">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Studio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Cart</NavLink>
                        </li>
                    </ul>

                    <button 
                    className='btn-animate' data-text="Let's Talk">
                        Let's Talk
                    </button>

                    <ul className='flex items-center gap-5 pl-5 border-l border-line'>
                        <li
                         className='size-[30px] text-xs border border-light center-all hover:bg-black hover:text-white transition-all rounded-full'>
                            <a href="#">IN</a>
                         </li>
                        <li
                         className='size-[30px] text-xs border border-light center-all hover:bg-black hover:text-white transition-all rounded-full'>
                            <a href="#">BE</a>
                         </li>
                        <li
                         className='size-[30px] text-xs border border-light center-all hover:bg-black hover:text-white transition-all rounded-full'>
                            <a href="#">TW</a>
                         </li>
                    </ul>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Header