import React, { useState } from 'react';
import { Button } from '../Utils'
import emailjs from '@emailjs/browser';
import {RiPhoneFill, RiMapPin2Fill,RiMailFill } from '@remixicon/react'


const Contact = () => {
  const [name, setName] = useState('');
  const [email , setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = ( event ) => {
    event.preventDefault();
    if(name && email && message ) {
      let template = {
        name,
        email,
        message
      };

      const  TEMPLATE_ID = "template_ws3vyal";
      const SERVICE_ID = "service_9him8on";
      const PUBLIC_KEY = 'l02BzK90DjYdS3HH2'
      emailjs.send(SERVICE_ID, TEMPLATE_ID, template, {
        publicKey : PUBLIC_KEY
      }).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      
      setEmail('');
      setMessage('')
      setName('');
    }
    else return;  
  }
  return (
    <div className='w-full '>
      <div className=' w-[90%] mx-auto my-4 flex flex-col justify-center items-center'>
        <h1 className='text-center text-[24px] font-[900] font-white'>Contact</h1>
      </div>
      <form className='mx-auto  mt-10 mb-20 w-[90%] flex flex-col gap-4'>
        <div className='w-full flex gap-8 flex-col md:flex-row'>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Veer json' className='text-[#84CC16] outline-none rounded-[4px] px-2 text-[24px] bg-transparent border font-[300] w-full md:w-1/2 h-[40px] border-[#84CC16]' />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='veerjson@gmail.com' className='text-[#84CC16] outline-none rounded-[4px] px-2 text-[24px] bg-transparent font-[300] border w-full md:w-1/2 h-[40px] border-[#84CC16]' />
        </div>
        {/* <input type="contact" placeholder='1234567890' className='text-[#84CC16] outline-none rounded-[4px] px-2 text-[24px] bg-transparent border w-full h-[40px] border-[#84CC16]' /> */}
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message'  className='text-[#84CC16] outline-none w-full h-[200px] bg-transparent border text-[24px] font-[300] px-2 border-[#84CC16] rounded-[4px]' />
        <Button isAtcive={true} name="Send Message" style="md:w-1/6  text-[24px]" click={true} handleClick={handleSubmit} />
      </form>
      <div className='mx-auto my-24 w-[90%]'>
        <div className='md:w-[300px] w-full p-1 '>
            <h1 className='text-white font-IBM text-[24px]'>Contact details</h1>
            <p className='bg-[#84CC16] w-full h-[1px]' />
            <div className='px-4 flex flex-col gap-2'>
              <p className='text-white  font-IBM text-[18px] flex flex-row justify-start items-center gap-2'>
                <RiPhoneFill />
                +91 63******55
                </p>
              <p className='text-white  font-IBM text-[18px] flex flex-row justify-start items-center gap-2'>
                <RiMailFill />
                info@greenthumb.com
                </p>
              <p className='text-white font-IBM text-[18px] flex flex-row justify-start items-start gap-2'>
                <RiMapPin2Fill size={36} />
                132, main street, Thalms-89 Bharat
                </p>
            </div> 
          </div>
      </div>
    </div>
  )
}

export default Contact
