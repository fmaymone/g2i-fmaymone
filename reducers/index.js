import { combineReducers } from 'redux';
import  quiz_data_reducer from './quiz_data_reducer'
import SelectionReducer from './SelectionReducer';
import appReducer from './appReducer'

export default combineReducers({
  quiz_data: quiz_data_reducer,
  currentQuestion: SelectionReducer,
  appReducer: appReducer
});
