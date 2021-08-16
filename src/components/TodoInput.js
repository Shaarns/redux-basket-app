import React from 'react';

const TodoInput = ({
  handleSubmit,
  handleChange,
  inputData,
  handleDeleteAll,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add Task'
          onChange={handleChange}
          value={inputData}
          autoFocus
        />
        <input type='submit' value={'ADD'} />
        <input type='button' value={'Delete All'} onClick={handleDeleteAll} />
      </form>
    </div>
  );
};

export default TodoInput;
