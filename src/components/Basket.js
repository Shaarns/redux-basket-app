import React from 'react';

const Basket = ({ counter, data }) => {
  return (
    <div className='item'>
      <p>{counter}</p>
      <h2>{data}</h2>
      <span>
        <button> - </button>
      </span>
    </div>
  );
};

export default Basket;
