import React from 'react';
import banner from '../../../Assets/Images/banner.png';

const Banner = () => {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-10 text-accent'>
      <div>
        <div className='mb-6 font-bold'>
          <p className='text-2xl'>Hello there! I am</p>
          <h1 className='name uppercase text-6xl mb-2'>Md Saif Ullah</h1>
          <h2 className='text-2xl uppercase'>Front-End Web Developer</h2>
          <h2 className='text-base'>Web Developer || Programmer</h2>
        </div>
        <div className='flex gap-8'>
          <a
            className='btn btn-primary'
            href='https://mdsaifullah.herokuapp.com/download-resume'>
            Download Resume
          </a>
          <a
            href='/#contact-me'
            className='btn btn-outline border-2 border-primary text-primary hover:border-primary hover:bg-primary'>
            Contact Me
          </a>
        </div>
      </div>
      <div>
        <img src={banner} alt='' className='w-full' />
      </div>
    </section>
  );
};

export default Banner;
