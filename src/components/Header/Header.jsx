import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button } from '../Utils'
import { RiMenuFill , RiCloseFill} from '@remixicon/react'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className=' px-6 py-2'>
      <div className='flex flex-row justify-between items-center bg-transparent text-white w-full'>
        <Link to='' className='w-32 h-full'>
          <img className='w-full h-full' src={logo} alt="" />
        </Link>
        <ul className='w-[300px] font-IBM hidden font-[100] md:flex flex-row justify-between items-center text-[18px]'>
          <NavLink to='' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> Home</NavLink>
          <NavLink to='about' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> About</NavLink>
          <NavLink to='products' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> Products</NavLink>
          <NavLink to='contact' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> Contact</NavLink>
        </ul>
        <div className='hidden md:block'>
          <Button name="Gift Me" isAtcive={false}/>
        </div>
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
                <ul className='z-20 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md text-white bg-black animate-slide-in'>
                    <li className='text-xl w-full my-2'>
                    <RiCloseFill 
                        onClick={()=>setToggleMenu(!toggleMenu)}
                        size={24}
                        color='#84cc16'
                        className='my-icon' />
                    </li>
                    <ul className=' text-white font-IBM  font-[100] 
                    flex flex-col gap-4  text-[18px]'>
                      <NavLink to='' 
                      onClick={()=>setToggleMenu(false)}> Home</NavLink>
                      <NavLink to='about' 
                      onClick={()=>setToggleMenu(false)}> About</NavLink>
                      <NavLink to='products'
                      onClick={()=>setToggleMenu(false)}> Products</NavLink>
                      <NavLink to='contact'
                      onClick={()=>setToggleMenu(false)}> Contact</NavLink>
                      <Button name="Gift Me" isAtcive={true}/>

                    </ul>
                </ul>
            )}
        </div>
      </div> 
    </nav>
  )
}

export default Header