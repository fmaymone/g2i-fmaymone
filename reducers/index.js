import { combineReducers } from 'redux';
import  quiz_data_reducer from './quiz_data_reducer'

export default combineReducers({
  quiz_data: quiz_data_reducer
});
