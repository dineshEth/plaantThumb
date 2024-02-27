import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button } from '../Utils'
import { RiMenuFill , RiCloseFill} from '@remixicon/react'

const Header = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  return (
    <nav className=' px-6 py-2'>
      <div className='flex flex-row justify-between items-center bg-transparent text-white w-full'>
        <Link to='' className='w-24 h-full'>
          <img className='w-full h-full' src={logo} alt="" />
        </Link>
        <ul className='w-[300px] font-IBM hidden font-[100] md:flex flex-row justify-between items-center'>
          <Link to=''> Home</Link>
          <Link to='about'> About</Link>
          <Link to='products'> Products</Link>
          <Link to='contact'> Contact</Link>
        </ul>
        <div className='hidden md:block'>
          <Button name="Gift Me" isAtcive={false}/>
        </div>
        <div className='block md:hidden'>
          {showMenuIcon ? 
            <RiCloseFill 
            onClick={()=>setShowMenuIcon(!showMenuIcon)}
            size={24}
            color='#84cc16'
            className='my-icon' />
           :
            < RiMenuFill  onClick={()=> setShowMenuIcon(!showMenuIcon)}
              size={24} // set custom `width` and `height`
              color="#84CC16" // set `fill` color
              className="my-icon" // add custom class name
            />
          } 
        </div>
      </div> 
    </nav>
  )
}

export default Header