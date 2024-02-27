import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({imageUrl, collectionName, link}) => {
  return (
    <div className=' w-full md:w-[350px] h-[300px]'>
        <div className='relative w-full flex flex-row rounded-xl bg-[#162A13] h-[200px]'>
            <div className=' relative -left-[40px] -top-[90px] w-[280px]'>
                <img src={imageUrl} alt="plant"  className='w-full object-contain' />
            </div>
            <div className='absolute px-1 right-2 top-[50%] '>
                <p className='text-white '>Plants for {collectionName}</p>
                <Link to={link}>
                  <p className='text-[#489E23] font-IBM text-[16px] font-[200]'>Explore Now </p>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Card