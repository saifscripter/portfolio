import React from 'react';
import banner from '../../../Assets/Images/banner.png';
import ButtonOutline from '../../../Components/ButtonOutline';

const Banner = () => {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
      <div>
        <div className='text-accent mb-6 font-bold'>
          <p className='text-2xl'>Hello there! I am</p>
          <h1 className='text-7xl uppercase mb-5'>Md Saif Ullah</h1>
          <h2 className='text-2xl uppercase'>Front-End Web Developer</h2>
          <h2 className='text-base'>Web Developer || Programmer</h2>
        </div>
        <div className='flex gap-8'>
          <a
            className='btn btn-primary text-white hover:bg-secondary rounded-none'
            href='https://mdsaifullah.herokuapp.com/download-resume'>
            Download Resume
          </a>
          <a
            href='/#contact-me'
            className='btn btn-outline border-2 border-primary text-primary hover:bg-secondary rounded-none'>
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
