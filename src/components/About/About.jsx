import React from 'react'
import profile from '../../assets/profile.png'

export const About = () => {
  return (
    <div className='w-full '>
      <div className=' w-[90%] mx-auto my-4 flex flex-col justify-center items-center'>
        <h1 className='text-center text-[24px] font-[900] font-white'>About us</h1>
        <p className='font-IBM w-max-[60%] font-[100] text-[18px] '>Welcome to our plant gift website, where we're igniting a green revolution! At the heart of our mission is a commitment to fostering a greener, healthier planet. Through your generous donations, we procure and nurture a diverse array of plants, each one representing a step towards a more sustainable future. Our community of nature lovers shares a common goal: to cultivate beauty, promote biodiversity, and reduce harm to our environment. Join us in this green revolution as we work together to sow the seeds of positive change and create a world where nature thrives. Together, let's make a lasting impact, one plant at a time.</p>
      </div>

      <div className='flex mx-auto w-[90%] py-8 flex-col md:flex-row justify-between items-start'>
        <div className=''>
          <img src={profile} alt="" />
        </div>
        <div className='w-full md:w-1/2'>
          <h1 className='font-white text-[42px] font-[600]'>Dinesh Prajapati</h1>
          <p className='font-light text-[#ffffff54] text-[24px] '>Founder & Leader</p>
          <p className='font-IBM font-[100]  text-[#fff] text-[18px]'>As the visionary leader of our green revolution, I spearhead a movement dedicated to fostering environmental stewardship and sustainability. With a passion for nurturing nature, I inspire others to join our mission of growth and preservation through plant gifting and care.</p>
        </div>
      </div> 
    </div>
  )
}
