import React from 'react'
import Image from 'next/image'
import { MdEmail, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => (
  <div className='min-h-screen relative' id="home">
    <Image src='/hero-bg.jpeg' className='z-0 absolute opacity-5 object-cover object-center' fill alt="" />
    <div className='max-w-[1440px] 2xl:m-auto'>
      <div className='fixed w-full max-w-[1440px] flex flex-row justify-between xsm:px-4 md:px-6 xsm:py-1 md:py-2 z-10'>
        <div>
          <p className='text-primary-500 xsm:text-xl md:text-3xl font-logo'>AB</p>
        </div>
        <div>
          <a href='#home' className='text-primary-500 xsm:text-lg md:text-xl font-title ml-4'>Home</a>
          <a href='#about' className='text-primary-500 xsm:text-lg md:text-xl font-title ml-4'>About</a>
          <a href='#work' className='text-primary-500 xsm:text-lg md:text-xl font-title ml-4'>Work</a>
          <a href='#contact' className='text-primary-500 xsm:text-lg md:text-xl font-title ml-4'>Contact</a>
        </div>
        <div className='flex items-center'>
          <FaGithub className='text-primary-500 xsm:text-lg md:text-2xl ml-4' />
          <FaLinkedinIn className='text-primary-500 xsm:text-lg md:text-2xl ml-4' />
          <MdEmail className='text-primary-500 xsm:text-lg md:text-2xl ml-4' />
        </div>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <p className='font-title text-8xl xsm:text-5xl md:text-8xl text-primary-500 tracking-wide'>Name Surname</p>
        <p className='font-body text-xl text-white-500 mt-4 xsm:hidden md:block'>Lorem ipsum. Bloop Floof.</p>
        <p className='font-body text-lg text-white-500 mt-4 md:hidden'>Lorem ipsum.</p>
        <p className='font-body text-lg text-white-500 md:hidden'>Bloop Floof.</p>
        <p className='font-body xsm:text-lg md:text-xl text-white-500'>Shwoop.</p>
      </div>
      <div className='absolute bottom-0 pb-2 w-full max-w-[1440px] flex flex-row justify-center'>
        <MdKeyboardDoubleArrowDown className='text-primary-500 text-3xl opacity-30 animate-bounce' />
      </div>
    </div>
  </div>
)

export default Hero