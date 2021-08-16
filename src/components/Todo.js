import React from 'react';

const Todo = ({ data, id, complete, handleCounter, handleDelete }) => {
  return (
    <div style={{ textDecoration: complete ? 'line-through' : '' }}>
      <div className='item'>
        <h2>{data}</h2>
        <span>
          <button onClick={() => handleCounter(id)}>+</button>
          <button onClick={() => handleDelete(id)}> - </button>
        </span>
      </div>
    </div>
  );
};

export default Todo;
