const initialState = {
  list: [
    {
      id: 1,
      data: 'Apple',
      complete: false,
      counter: 1,
      filtered: true,
    },
    {
      id: 2,
      data: 'Mango',
      complete: false,
      counter: 1,
      filtered: true,
    },
    {
      id: 3,
      data: 'Banana',
      complete: false,
      counter: 1,
      filtered: true,
    },
    {
      id: 4,
      data: 'Strawberry',
      complete: false,
      counter: 1,
      filtered: true,
    },
    {
      id: 5,
      data: 'Cherry',
      complete: false,
      counter: 1,
      filtered: true,
    },
  ],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data, complete, counter, filterd } = action.payload;
      return {
        ...state, //this is requiered to make this immutable
        list: [
          ...state.list,
          {
            id,
            data,
            complete,
            counter,
            filterd,
          },
        ],
      };

    case 'DELETE_TODO': {
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            ...item,
            complete: !item.complete,
          };
        }),
      };
    }

    case 'ITEM_COUNTER/ITEM_FILTERED': {
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            filtered: true,
            counter: item.counter + 1,
          };
        }),
      };
    }
    case 'DELETE_ALL': {
      return {
        list: [...initialState.list],
      };
    }

    default:
      return state;
  }
};

export default TodoReducer;
