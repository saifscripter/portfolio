import React, { useState } from 'react';
import CustomLink from './CustomLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { GoLocation } from 'react-icons/go';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import logo from '../Assets/Images/logo.png';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navLinks = (
    <>
      <CustomLink onClick={() => setSidebar(!sidebar)} to={'/'}>
        Home
      </CustomLink>
      <CustomLink onClick={() => setSidebar(!sidebar)} to={'/about-me'}>
        About Me
      </CustomLink>
      <CustomLink onClick={() => setSidebar(!sidebar)} to={'/blogs'}>
        Blogs
      </CustomLink>
    </>
  );

  return (
    <header className='bg-white text-accent py-4 sticky top-0 z-50'>
      <div className='container flex justify-between items-center'>
        <div className='flex items-center gap-8'>
          <img src={logo} alt='' className='w-16' />
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-8 text-sm text-gray-500'>
              {navLinks}
            </ul>
          </nav>
        </div>
        <HashLink
          onClick={() => setSidebar(!sidebar)}
          to='/#contact-me'
          className='btn btn-secondary text-white'>
          Contact Me
        </HashLink>
        <button
          className={`${
            sidebar ? '' : 'shadow-2xl'
          } md:hidden inline-block font-thin text-3xl p-4 relative z-50`}
          onClick={() => setSidebar(!sidebar)}>
          {sidebar ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div
        className={`${
          sidebar ? 'translate-x-0 md:translate-x-full' : 'translate-x-full'
        } fixed top-0 right-0 bottom-0 z-40 flex flex-col gap-16 sm:gap-20 justify-center lg:justify-end items-center w-1/2 h-screen bg-gray-800 text-white transition-transform duration-200 ease-in-out p-8`}>
        <nav>
          <ul className='flex flex-col items-center gap-8 text-2xl sm:text-3xl'>
            {navLinks}
          </ul>
        </nav>
        <HashLink
          onClick={() => setSidebar(!sidebar)}
          to='/#contact-me'
          className='btn btn-secondary text-white'>
          Contact Me
        </HashLink>
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
