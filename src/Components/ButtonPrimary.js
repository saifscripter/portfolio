import React from 'react';

const ButtonPrimary = ({ children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className='btn btn-primary text-white hover:bg-secondary rounded-none'>
      {children}
    </button>
  );
};

export default ButtonPrimary;
