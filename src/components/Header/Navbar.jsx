import React, { useState } from 'react'
import {logo} from '../../assets'
import { RiMenuFill , RiCloseFill} from '@remixicon/react'


const NavbarItems = ({title, classProps}) =>{
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='w-full  flex md:justify-center justify-between items-center p-4 '>
        <div className='md:flex-[0.5] flex-initial justify-center items'>
            <img src={logo} alt="logo" className='w-32 cursor-pointer' />
        </div>
        <ul className='text-white md:flex hidden list-none justify-between items-center flex-initial'>
            {["Home" ,"Products","About", "Contact"].map((item, index)=>(<NavbarItems title={item} key={index} /> ))}
        </ul>
        <div className='flex relative sm:hidden'>
        {toggleMenu ? 
            ""
           :
            < RiMenuFill  onClick={()=> setToggleMenu(!toggleMenu)}
              size={24} // set custom `width` and `height`
              color="#84CC16" // set `fill` color
              className="my-icon" // add custom class name
            />}
            {toggleMenu && (
                <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md text-white bg-black animate-slide-in'>
                    <li className='text-xl w-full my-2'>
                    <RiCloseFill 
                        onClick={()=>setToggleMenu(!toggleMenu)}
                        size={24}
                        color='#84cc16'
                        className='my-icon' />
                    </li>
                      {["Home" ,"Products","About", "Contact"].map((item, index)=>(<NavbarItems title={item} key={index} /> ))}
                </ul>
            )}
        </div>
    </nav>
  )
}

export default Navbar