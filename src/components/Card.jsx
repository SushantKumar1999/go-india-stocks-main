import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-3 shadow-md bg-bg-secondary rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
