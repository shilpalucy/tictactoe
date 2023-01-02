import React from 'react';

const Square = ({value ,onClick1}) => {
  return (
    
      <button type="button" className="square" onClick={onClick1}>{value}</button>
  );
}

export default Square;
