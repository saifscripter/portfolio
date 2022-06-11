import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://mdsaifullah.herokuapp.com/project')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className='container py-20 text-accent'>
      {/* Title */}
      <h2 className='text-center text-4xl uppercase'>Featured Projects</h2>
      <div className='flex gap-2 justify-center items-center mb-12'>
        <div className='w-8 h-[2px] bg-secondary'></div>
        <p className='text-sm uppercase'>My projects</p>
        <div className='w-8 h-[2px] bg-secondary'></div>
      </div>

      {/* Main Part */}
      <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-10'>
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
