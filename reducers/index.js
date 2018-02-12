import { combineReducers } from 'redux'
import  quiz_data_reducer from './quiz_data_reducer'
import quizReducer from './QuizReducer'
import selectionReducer from './SelectionReducer'
import answersReducer from './AnswersReducer'


export default combineReducers({
  quiz_data: quiz_data_reducer,
  quizReducer: quizReducer,
  selectionReducer: selectionReducer,
  answersReducer: answersReducer
})
