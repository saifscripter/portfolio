import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-gray-700 text-base-200 rounded'>
      <div className='grid grid-flow-col gap-4'>
        <Link to={'/about-me'} className='link link-hover'>
          About Me
        </Link>
        <Link to={'/#contact-me'} className='link link-hover'>
          Contact Me
        </Link>
        <Link to={'/blogs'} className='link link-hover'>
          Blogs
        </Link>
        <a
          href='https://mdsaifullah.herokuapp.com/download-resume'
          className='link link-hover'>
          {' '}
          Download Resume
        </a>
      </div>
      <div>
        <div className='grid grid-flow-col gap-8 text-2xl'>
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
      </div>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} Md Saif Ullah - All right
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
