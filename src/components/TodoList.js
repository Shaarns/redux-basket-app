import React from 'react';
import Todo from './Todo';

const TodoList = ({ handleDelete, handleCounter, todoList }) => {
  return (
    <div className='todo-items'>
      {todoList.map((item) => {
        return (
          <Todo
            {...item}
            key={item.id}
            // handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleCounter={handleCounter}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
