import { combineReducers } from 'redux';
import  quiz_data_reducer from './quiz_data_reducer'
import SelectionReducer from './SelectionReducer';
import appReducer from './AppReducer'
import quizReducer from './QuizReducer'

export default combineReducers({
  quiz_data: quiz_data_reducer,
  currentQuestion: SelectionReducer,
  appReducer: appReducer,
  quizReducer: quizReducer
});
