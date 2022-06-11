import React, { useRef, useState } from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  // YUP Validation
  const signupSchema = yup.object({
    name: yup.string().required('Please enter your Full Name'),
    email: yup
      .string()
      .email('Please enter a valid Email')
      .required('Please enter your Email'),
    subject: yup
      .string()

      .required('Please enter Subject'),
    message: yup.string().required('Please enter your Message'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    setLoading(true);
    emailjs
      .sendForm(
        'service_s5dju8w',
        'template_azzg66u',
        form.current,
        '5WTPuyDqkg8ObBNdb'
      )
      .then(
        (result) => {
          if (result.text) {
            setLoading(false);
            reset();
            toast.success('Thanks for reaching me out. I will reply you soon!');
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact-me' className='container my-20'>
      {/* Title */}
      <h2 className='text-center text-4xl uppercase'>Contact Me</h2>
      <div className='flex gap-2 justify-center items-center mb-12'>
        <div className='w-8 h-[2px] bg-secondary'></div>
        <p className='text-sm uppercase'>Reach me out</p>
        <div className='w-8 h-[2px] bg-secondary'></div>
      </div>

      {/* Main Part */}
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
        <div>
          <h4 className='text-xl font-bold mb-2'>Contact Details</h4>
          <p className='mb-4 leading-relax'>
            Feel free to contact me anytime. I will reply you as soon as
            possible.
          </p>
          <div className='flex gap-5 items-center mb-3'>
            <FaGithub className='text-[28px]' />
            <div>
              <h5 className='text-lg font-bold'>Name</h5>
              <p>Md Saif Ullah</p>
            </div>
          </div>
          <div className='flex gap-5 items-center mb-3'>
            <FaPhone className='text-[28px]' />
            <div>
              <h5 className='text-lg font-bold'>Phone</h5>
              <p>(+880) 01766637772</p>
            </div>
          </div>
          <div className='flex gap-5 items-center mb-3'>
            <FaEnvelope className='text-[28px]' />
            <div>
              <h5 className='text-lg font-bold'>Email</h5>
              <p>mdsaifullah365@yahoo.com</p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <h4 className='text-xl font-bold mb-2'>Let's talk</h4>
          <div className='grid grid-cols-2 gap-5 mb-5'>
            <div>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='input input-bordered w-full rounded-none text-accent border-gray-400 focus:border-primary'
                {...register('name')}
              />
              <p className='mt-2 text-sm text-error'>{errors.name?.message}</p>
            </div>

            <div>
              <input
                type='text'
                placeholder='Email'
                name='email'
                className='input input-bordered w-full rounded-none text-accent border-gray-400 focus:border-primary'
                {...register('email')}
              />
              <p className='mt-2 text-sm text-error'>{errors.name?.message}</p>
            </div>
          </div>

          <input
            type='text'
            placeholder='Subject'
            name='subject'
            className='input input-bordered w-full rounded-none text-accent border-gray-400 focus:border-primary mb-5'
            {...register('subject')}
          />
          <p className='mt-2 text-sm text-error'>{errors.subject?.message}</p>

          <textarea
            type='text'
            placeholder='Message'
            name='message'
            className='textarea textarea-bordered w-full rounded-none text-accent border-gray-400 focus:border-primary mb-5'
            {...register('message')}
          />
          <p className='mt-2 text-sm text-error'>{errors.message?.message}</p>

          <button className='btn btn-primary' disabled={loading}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
