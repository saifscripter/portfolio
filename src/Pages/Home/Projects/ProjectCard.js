import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, description, live, client, server, img } = project;
  return (
    <div class='card bg-base-100 shadow-xl rounded-none image-full'>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='flex gap-3'>
          <a
            className='text-white visited:text-white hover:text-base-300 underline'
            target='_blank'
            href={client}
            rel='noreferrer'>
            Client Repo
          </a>
          {server && (
            <a
              className='text-white visited:text-white hover:text-base-300 underline'
              target='_blank'
              href={server}
              rel='noreferrer'>
              Server Repo
            </a>
          )}
        </div>
        <div class='card-actions justify-end items-center'>
          <a
            target='_blank'
            className='btn btn-primary text-white hover:bg-secondary rounded-none'
            href={live}
            rel='noreferrer'>
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
