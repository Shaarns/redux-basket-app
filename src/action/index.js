export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),
      data,
      filtered: false,
      complete: false,
      counter: 0,
    },
  };
};

export const basket = (id) => {
  return {
    type: 'ITEM_COUNTER/ITEM_FILTERED',
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  };
};

export const deleteAll = () => {
  return {
    type: 'DELETE_ALL',
  };
};
