import Image from 'next/image'
import React from 'react'

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Sass",
    "Node.js",
    "Nest.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
  ]
  return (
    <div id="about" className='min-h-screen flex items-center'>
      <div className='lg:flex items-center lg:min-h-screen py-12 lg:pt-10'>
        <p className='text-primary-500 text-6xl lg:text-6xl xl:text-7xl font-title h-max w-full text-center xl:w-3/5 lg:-rotate-90'>About Me</p>
        <div className='flex flex-col mt-8 lg:mt-0'>
          <div>
            <div className='w-3/4 xl:w-4/6 ml-8 md:ml-16 lg:ml-12 xl:ml-28 border-4 border-primary-500 bg-secondary-500/20 p-8 xl:p-10 rounded-t-[80px] rounded-bl-[80px]'>
              <p className='text-sm xl:text-lg text-white-500 font-body text-justify'>
                &ldquo;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quas magni sint aliquam ratione minus veniam reiciendis eos, ut placeat mollitia. Rem distinctio beatae quisquam deleniti vel accusantium rerum neque delectus hic at quo animi ex voluptatum atque vero consectetur porro quis, voluptatem magnam laudantium sed obcaecati! Asperiores, nam molestias?&rdquo;
              </p>
            </div>
            <Image src='/profile.png' width={60} height={60} className='rounded-full hidden md:block border-2 border-primary-500 bg-black-400 relative left-[92%] lg:left-[90%] xl:left-[82%] -translate-x-full w-max' alt="" />
            <Image src='/profile.png' width={40} height={40} className='rounded-full block md:hidden border-2 border-primary-500 bg-black-400 relative left-[85%]' alt="" />
          </div>
          <div className='flex flex-col items-center justify-center lg:w-10/12 xl:w-9/12 ml-4 md:ml-10 xl:ml-24 p-2 mt-8'>
            <p className='text-secondary-500 text-3xl font-title w-full'>Skills</p>
            <p className='text-white-500 font-body lg:text-sm xl:text-lg w-full mt-4 !leading-10 xl:leading-[3rem]'>
              {
                skills.map((skill, index) => (
                  <>
                    <span key={index} className='bg-black-400 p-2'>{skill}</span>
                    <span> </span>
                  </>
                ))
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About