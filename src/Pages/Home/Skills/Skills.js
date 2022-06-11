import React from 'react';

const Skills = () => {
  const technologies = [
    { id: 1, name: 'html 5', completed: '90%' },
    { id: 2, name: 'javascript', completed: '75%' },
    { id: 3, name: 'css 3', completed: '50%' },
    { id: 4, name: 'react js', completed: '80%' },
    { id: 5, name: 'tailwind', completed: '85%' },
    { id: 6, name: 'node js', completed: '30%' },
    { id: 7, name: 'bootstrap', completed: '70%' },
    { id: 8, name: 'express js', completed: '80%' },
    { id: 9, name: 'sass', completed: '75%' },
    { id: 10, name: 'mongodb', completed: '40%' },
  ];
  return (
    <section className='container py-20 bg-gray-900 text-base-200'>
      <div className='mb-12'>
        <h2 className='text-center text-4xl uppercase'>Professional Skills</h2>
        <div className='flex gap-2 justify-center items-center'>
          <div className='w-8 h-[2px] bg-base-300'></div>
          <p className='text-sm uppercase'>Skills I know</p>
          <div className='w-8 h-[2px] bg-base-300'></div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {technologies.map((tech) => (
          <div key={tech.id}>
            <h3 className='text-2xl uppercase mb-1'>{tech.name}</h3>
            <div className='h-2 w-full bg-base-200 rounded-2xl'>
              <div
                style={{ width: `${tech.completed}` }}
                className='h-2 bg-primary rounded-2xl relative'>
                <div className='absolute -right-1 -top-1 bg-primary h-4 w-4 rounded-full'></div>
                <div className='absolute -right-2 bottom-5'>
                  {tech.completed}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
