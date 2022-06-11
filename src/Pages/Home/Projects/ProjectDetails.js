import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { name, imgL, imgR1, imgR2, imgR3, imgR4, imgR5 } = project;
  useEffect(() => {
    fetch(`https://mdsaifullah.herokuapp.com/project/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, [id]);
  return (
    <section className='container'>
      {/* Title */}
      <h2 className='text-center text-4xl uppercase'>{name}</h2>
      <div className='flex gap-2 justify-center items-center mb-12'>
        <div className='w-8 h-[2px] bg-secondary'></div>
        <p className='text-sm uppercase'>Project Description</p>
        <div className='w-8 h-[2px] bg-secondary'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-7 gap-2'>
        <div className='col-span-5'>
          <h2 className='font-bold text-2xl'>Project Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
        </div>
        <div className='col-span-2'>
          <h2 className='font-bold text-2xl'>Technology Used</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
        </div>
      </div>
      <h2 className='text-center text-4xl uppercase'>Screenshots</h2>
      <div className='flex gap-2 justify-center items-center mb-12'>
        <div className='w-8 h-[2px] bg-secondary'></div>
        <p className='text-sm uppercase'>Site images</p>
        <div className='w-8 h-[2px] bg-secondary'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <img src={imgL} className='w-full' alt='' />
        <div className='flex flex-col justify-between'>
          <img src={imgR1} className='w-full' alt='' />
          <img src={imgR2} className='w-full' alt='' />
          <img src={imgR3} className='w-full' alt='' />
          <img src={imgR4} className='w-full' alt='' />
          <img src={imgR5} className='w-full' alt='' />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
