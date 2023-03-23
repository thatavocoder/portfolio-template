import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Contact = () => {
  return (
    <div id="contact" className='min-h-screen max-w-[1440px] m-auto flex flex-col items-center'>
      <div>
        <p className='text-primary-500 font-title text-4xl md:text-5xl text-center pt-12'>Contact me</p>
        <p className='text-secondary-500 font-body px-8 text-center'>You&apos;re just one click away from turning your idea into reality.</p>
      </div>
      <div className='mt-8 relative top-1/2'>
        <a href="" className='flex justify-center items-center mt-4 text-white-500 font-body text-xl'><FaGithub className='mr-4' /> Github</a>
        <a href="" className='flex justify-center items-center mt-4 text-white-500 font-body text-xl'><FaLinkedinIn className='mr-4' /> LinkedIn</a>
        <a href="" className='flex justify-center items-center mt-4 text-white-500 font-body text-xl'><FaTwitter className='mr-4' /> Twitter</a>
        <p className='mt-8 text-secondary-500 font-body'>------- Or send an email on -------</p>
        <a href="mailto:abc@gmail.com" className='flex justify-center items-center mt-8 text-white-500 font-body text-xl'><MdMail className='mr-4' />abc@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact