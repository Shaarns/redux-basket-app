import React from 'react';
import Basket from './Basket';

const BasketList = ({ filteredTask }) => {
  return (
    <div>
      <section className='basket-container'>
        <div className='heading'>
          <h3>Basket</h3>
        </div>
        <div className='basekt-item'>
          {filteredTask.map((basketItem) => {
            return <Basket key={basketItem.id} {...basketItem} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default BasketList;
