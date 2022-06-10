import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlinePreview, MdOutlineOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { id, name, live, client, server, img } = project;
  return (
    <div>
      <a target='_blank' href={live} rel='noreferrer'>
        <div className='group overflow-hidden relative cursor-pointer'>
          <img
            src={img}
            alt=''
            className='group-hover:scale-105 transition-transform duration-75 ease-in'
          />
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-slate-900 opacity-0 group-hover:opacity-60'></div>
          <div className='absolute top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 text-white'>
            <div>
              <MdOutlinePreview className='text-9xl' />
              <div className='flex gap-3 justify-center items-center'>
                <p className='text-center'>Live Preview</p>
                <MdOutlineOpenInNew />
              </div>
            </div>
          </div>
        </div>
      </a>
      <Link to={`/projects/${id}`}>
        <h3 className='hover:text-primary font-bold text-2xl my-3'>{name}</h3>
      </Link>
      <div className='flex justify-between items-center pr-2'>
        <Link
          to={`/projects/${id}`}
          className='btn btn-primary text-white hover:bg-secondary rounded-none btn-sm'>
          Project Details
        </Link>
        <div className='flex gap-5 text-2xl'>
          <div
            className='tooltip hover:scale-150 transition-transform duration-200 ease-in-out'
            data-tip='Front-end Repository'>
            <a target='_blank' href={client} rel='noreferrer' className=''>
              <FaGithub />
            </a>
          </div>
          <div
            className='tooltip hover:scale-150 transition-transform duration-200 ease-in-out'
            data-tip='Back-end Repository'>
            <a target='_blank' href={server} rel='noreferrer' className=''>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
