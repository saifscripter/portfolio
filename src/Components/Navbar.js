import React, { useState } from 'react';
import logo from '../Assets/Images/logo.png';
import CustomLink from './CustomLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { GoLocation } from 'react-icons/go';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className='bg-white py-8'>
      <div className='container flex justify-between items-center'>
        <div className='w-16'>
          <h1 className='uppercase text-5xl font-bold'>S</h1>
        </div>
      </div>
      <button
        className={`${
          sidebar ? '' : 'shadow-2xl'
        }  bg-white text-gray-900 text-2xl lg:text-3xl p-4 fixed top-8 right-12 z-50`}
        onClick={() => setSidebar(!sidebar)}>
        {sidebar ? <ImCross /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`${
          sidebar ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 bottom-0 z-40 flex flex-col gap-16 sm:gap-20 justify-center lg:justify-end items-center w-1/2 h-screen bg-gray-900 text-white transition-transform duration-200 ease-in-out p-8`}>
        <nav>
          <ul className='flex flex-col items-center gap-8 text-2xl sm:text-3xl'>
            <CustomLink onClick={() => setSidebar(!sidebar)} to={'/'}>
              Home
            </CustomLink>
            <CustomLink onClick={() => setSidebar(!sidebar)} to={'/about-me'}>
              About Me
            </CustomLink>
            <CustomLink onClick={() => setSidebar(!sidebar)} to={'/blogs'}>
              Blogs
            </CustomLink>
          </ul>
        </nav>
        <a
          href='/#contact-me'
          className='btn btn-primary text-white hover:bg-secondary rounded-none'>
          Contact Me
        </a>
        <div className='flex justify-center gap-4 sm:gap-8 text-lg sm:text-xl'>
          <a
            target='_blank'
            href='https://www.github.com/mdsaifullah-wd'
            rel='noreferrer'>
            <FaGithub />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/mdsaifullah365'
            rel='noreferrer'>
            <FaLinkedin />
          </a>
          <a
            target='_blank'
            href='mailto:mdsaifullah365@yahoo.com'
            rel='noreferrer'>
            <FaEnvelope />
          </a>
          <a href='tel:+8801766637772' rel='noreferrer'>
            <FaPhone />
          </a>
        </div>
        <div className='flex gap-2 text-[9px] sm:text-base items-center'>
          <GoLocation />
          <p>Chattogram, Bangladesh</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
