import React from 'react'
import { Card, ProductCard } from '../Utils'
import plantHome from '../../assets/snakeplant.png'
import plantOffice from '../../assets/plant12.png'
import plantGarden from '../../assets/plant-3.png'
import {HomeProducts, OfficeProducts, GardenProducts} from '../index'
import {collectionPlant1, collectionPlant2,collectionPlant3,collectionPlant4, leaf1, leaf2, leaf3, leaf4, leaf5, leaf6, leaf7, leaf8, plant1 , plant2, plant3, plant4, plant5, plant6} from '../../assets'

const Plants = () => {
 
  return (
    <div className='w-full max-w-[1500px] xl:w-[90%] mx-auto'>
      <div className='mx-auto mt-24 w-[96%] xl:w-full flex  flex-wrap justify-between flex-col items-center md:flex-row '>
        <Card imageUrl={plantHome} collectionName="Home" link='homeproducts' />
        <Card imageUrl={plantOffice} collectionName="School" link='officeproducts' />
        <Card imageUrl={plantGarden} collectionName="Garden" link='gardenproducts' />
      </div>
      <div className='mx-4 my-4 w-[250px]'>
        <h1 className='text-white font-IBM text-[24px]'>Top Gifts</h1>
        <p className='bg-[#84CC16] w-full h-[1px]' />
      </div>
      <div className='mb-16 w-full flex flex-row flex-wrap justify-evenly gap-y-8 items-center'>
        <ProductCard Title='Money Plant' isPot={false} imageUrl={collectionPlant1} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={collectionPlant2} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf1} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf2} />
        <ProductCard Title='Snake Plant' isPot={true} imageUrl={plant1} />
        <ProductCard Title='Snake Plant' isPot={true} imageUrl={plant2} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf3} />
        <ProductCard Title='Snake Plant' isPot={true} imageUrl={plant3} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={collectionPlant3} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf4} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={collectionPlant4} />
        <ProductCard Title='Snake Plant' isPot={true} imageUrl={plant4} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf5} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf6} />
        <ProductCard Title='Snake Plant' isPot={true} imageUrl={plant5} />
        <ProductCard Title='Snake Plant' isPot={true} imageUrl={plant6} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf7} />
        <ProductCard Title='Snake Plant' isPot={false} imageUrl={leaf8} />
        
      </div>
    </div>
  )
}

export default Plants