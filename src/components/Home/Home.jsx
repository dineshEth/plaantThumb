import React from 'react'
import { Link } from 'react-router-dom'
import moneyPlant from '../../assets/moneyplant2.png'
import { Button , Card} from '../Utils/index'
import plantHome from '../../assets/snakeplant.png'
import plantOffice from '../../assets/plant12.png'
import plantGarden from '../../assets/plant-3.png'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div className=' px-4 relative overflow-hidden w-full'>
      <div className= 'absolute w-[350px] right-[-110px]  sm:w-1/2   md:right-0 '>
        <img src={moneyPlant} alt=""  className='w-full object-contain' />
      </div>
      <div className='max-w-[1080px] w-[90%] mt-4 md:mt-12 z-10 flex flex-col items-start gap-y-4'>
        <h1 className=' font text-[24px] sm:text-[48px] z-10 xl:text-[72px] font-[900]'>
            Gift us a 
            <span className='text-[#84CC16]'> Plant</span>:
            Your Gift, Our Promise to <span className='text-pink-600'>"Rejuvenate Nature"</span> 
        </h1>
        <p className='font-IBM w-[75%] md:w-full max-w-[600px] z-10 text-[14px] md:text-[28px] font-[100] text-light ' style={{textShadow:'7px 0px 8px #000'}}>Join our green revolution! Gift money for plant purchases, contributing to the re-development of Mother Earth's natural beauty.
        </p>
        <Link to="products">
          <Button name="Explore More"/>
        </Link>
      </div>
      <div className='mt-36 md:mt-60 flex w-full flex-wrap justify-center gap-10 flex-col items-center md:flex-row '>
        <Card imageUrl={plantHome} collectionName="Home" link='homeproducts' />
        <Card imageUrl={plantOffice} collectionName="School" link='officeproducts' />
        <Card imageUrl={plantGarden} collectionName="Garden" link='gardenproducts' />
      </div>
      <Testimonial />
    </div>
  )
}

export default Home