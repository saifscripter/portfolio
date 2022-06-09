import React from 'react';

const ButtonOutline = ({ children }) => {
  return (
    <button className='btn btn-outline border-2 border-primary text-primary hover:bg-secondary rounded-none'>
      {children}
    </button>
  );
};

export default ButtonOutline;
