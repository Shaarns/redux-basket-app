import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';

const TODO = combineReducers({
  Todo: TodoReducer,
});
export default TODO;
