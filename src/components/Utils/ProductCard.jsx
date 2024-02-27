import React from 'react'
import {Button} from './index'


const ProductCard = ({imageUrl, isPot= false, Title="Money plant"}) => {
  return (
    <div className={`${!isPot && 'overflow-hidden'} w-[350px]  bg-[#84CC16] rounded-md text-[#162A13]`}>
        <div className={`${ isPot ?'h-full w-4/5' : 'h-[200px] w-full overflow-hidden' }   mx-auto`}>
            <img src={imageUrl} alt="" className='w-full h-full object-cover hover:scale-150 transition-[2s] '/>
        </div>
        <div className='w-full px-4 z-10'>
            <h1 className='font-[500] font-IBM text-[24px]'>{Title}</h1>
            <p className='font-[100] text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe ea, quae ut esse adipisci quas rem. Laborum, neque explicabo.</p>
            <Button name="Gift Me a Plant" isAtcive={false} style="bg-[#151B0F] text-[#84CC16]" />
        </div>
    </div>
  )
}

export default ProductCard