import React, { useState } from 'react';
import { addTodo, deleteTodo, basket, deleteAll } from '../action';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import BasketList from './BasketList';
import TodoInput from './TodoInput';
import './style.css';

const Home = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState('');
  const todoList = useSelector((state) => state.Todo.list);

  let filteredTask = [];
  filteredTask = todoList.filter((todo) => todo.filtered);

  const handleCounter = (id) => {
    dispatch(basket(id));
  };

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputData || inputData.trim() === '') {
      return;
    }
    dispatch(addTodo(inputData));
    setInputData('');
  };

  return (
    <div className='container'>
      <section className='todo-container'>
        <div className='heading'>
          <h3>Todo List</h3>
        </div>
        <TodoInput
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputData={inputData}
          handleDeleteAll={handleDeleteAll}
        />
        <TodoList
          handleCounter={handleCounter}
          handleDelete={handleDelete}
          todoList={todoList}
        />
      </section>
      <BasketList filteredTask={filteredTask} />
    </div>
  );
};

export default Home;
