import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdWebStories } from 'react-icons/md'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div>
      <p className='text-primary-500 font-title text-4xl md:text-5xl text-center mt-8'>Projects</p>
      <div className='mt-6 flex overflow-auto whitespace-nowrap ml-4 md:ml-8 project-scrollbar'>
        {
          PROJECTS.map((project, index) => (
            <div key={index} className='p-3 md:mx-4'>
              <Image src={`/${project.image}`} width={400} height={100} alt="" />
              <p className='font-title text-primary-500 text-left text-2xl mt-2'>{project.title}</p>
              <p className='font-body text-secondary-500 text-left text-sm'>{project.duration}</p>
              <div className='w-80 md:w-96 whitespace-normal'>
                <p className='font-body text-black-100 text-justify text-sm min-h-[80px]'>{project.description}</p>
              </div>
              <div className='flex mt-2'>
                {project.gitLink && <a href={project.gitLink} className='font-body text-primary-500 text-left text-sm flex items-center'><FaGithub className='text-sm mr-2' /> View git repo</a>}
                {project.projectLink && <a href={project.projectLink} className='font-body text-primary-500 text-left text-sm flex items-center ml-8'><MdWebStories className='text-sm mr-2' /> View live site</a>}
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Projects