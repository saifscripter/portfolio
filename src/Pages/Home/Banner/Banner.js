import React from 'react';
import banner from '../../../Assets/Images/banner.png';
import ButtonOutline from '../../../Components/ButtonOutline';
import ButtonPrimary from '../../../Components/ButtonPrimary';
const Banner = () => {
  const downloadResume = () => {
    fetch('https://mdsaifullah.herokuapp.com/download-resume');
  };
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
          <ButtonPrimary onclick={downloadResume}>
            Download Resume
          </ButtonPrimary>
          <ButtonOutline>Contact Me</ButtonOutline>
        </div>
      </div>
      <div>
        <img src={banner} alt='' className='w-full' />
      </div>
    </section>
  );
};

export default Banner;
