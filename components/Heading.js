import React from 'react';

const Heading = ({ children }) => {
  return (
    <h1 className='mb-8 font-medium capitalize text-3xl text-center'>
      {children}
    </h1>
  );
};

export default Heading;
