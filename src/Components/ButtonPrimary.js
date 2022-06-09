import React from 'react';

const ButtonPrimary = ({ children }) => {
  return (
    <button className='btn btn-primary text-white hover:bg-secondary rounded-none'>
      {children}
    </button>
  );
};

export default ButtonPrimary;
