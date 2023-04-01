import React from 'react'
import { EXPERIENCE } from '../constants'

const Experience = () => (
  <>
    <p className='text-primary-500 font-title text-4xl md:text-5xl text-center'>Experience</p>
    <div className='lg:w-2/3 xl:w-1/2 m-auto lg:mt-8'>
      <div className='grid grid-cols-1 gap-4 mt-4'>
        {
          EXPERIENCE.map((work, index) => (
            <div key={index}>
              <div className='p-3 bg-black-400/20 mx-4 rounded shadow-md'>
                <p className='font-title text-primary-500 text-left text-2xl'>{work.title}</p>
                <p className='font-body text-secondary-500 text-left text-sm'>{work.company} &#x2022; {work.duration}</p>
                <ul className='list-disc list-outside mt-2 ml-4'>
                  {
                    work.description.map((desc, index) => (
                      <li key={index} className='font-body text-black-100 text-left text-sm'>{desc}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='h-6 bg-primary-500 w-0.5 m-auto last-of-type:hidden'></div>
            </div>
          ))
        }
      </div>
    </div>
  </>
)

export default Experience