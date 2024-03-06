import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { youtube, linkedIn, x, dribble, instagram } from '../../assets'

const Footer = () => {
  return (
    <div className='bg-[#162A13] px-4'>
      <div className='flex flex-col gap-y-4 md:flex-row justify-between items-start '>
        <div className='md:w-[300px] w-full p-1'>
          <h1 className='text-white font-IBM text-[18px]'><span className='text-[#84CC16]'>Go</span> Green</h1>
          <p className='bg-[#ffffff58] w-full h-[1px]' />
          <p className=' text-light text-[18px] font-IBM font-[100] '>Our vision for the green revolution is to foster a global community of eco-enthusiasts dedicated to nurturing our planet's greenery. Through collective contributions, we aim to create lush environments, promote sustainability, and cultivate a deeper appreciation for the natural world.</p>
        </div>
        <div className='md:w-[300px] w-full p-1 '>
          <h1 className='text-[#84CC16] font-IBM text-[18px]'> Links</h1>
          <p className='bg-[#ffffff58] w-full h-[1px]' />
          <ul className='flex flex-row gap-x-8 text-[18px] flex-wrap font-IBM font-[100]'>
          <NavLink to='' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> Home</NavLink>
          <NavLink to='about' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> About</NavLink>
          <NavLink to='products' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> Products</NavLink>
          <NavLink to='contact' className={({isActive})=>`${isActive ? 'text-[#84CC16]':'text-white'}`}> Contact</NavLink>
          </ul>  
        </div>
        <div className='md:w-[300px] w-full p-1 '>
          <h1 className=' font-IBM text-[18px] text-[#84CC16]'>Contact</h1>
          <p className='bg-[#ffffff58] w-full h-[1px]' />
          <p className='font-IBM font-[100] text-[18px]'>+91 6354xxx854</p>
          <p className='font-IBM font-[100] text-[18px]'>info@greenthumb.com</p>
          <p className='font-IBM font-[100] text-[18px]'>132, main street, Thalms-89 Bharat</p>
        </div>
      </div>
      
      <div className='py-4 flex flex-row w-full justify-center items-center gap-8'>
        <Link to='https://www.instagram.com/cs_dinezh/'>
          <img src={instagram} alt="" />
        </Link>
        <Link to="https://www.twitter.com/dinesh_eth." >
          <img src={x} alt="" />
        </Link>
        <Link to="https://www.youtube.com/@dineshTechfi">
          <img src={youtube} alt="" />
        </Link>
        <Link>
          <img src={dribble} alt="" />
        </Link>
        <Link to="https://www.linkedin.com/in/dinesh-prajapati-26b1a7216/">
          <img src={linkedIn} alt="" />
        </Link>
      </div>

      <p className='font-sans text-center py-4 text-white capitalize'>Copyright 2024</p>
    </div>
  )
}

export default Footer