import { combineReducers } from 'redux'
import quizReducer from './QuizReducer'
import selectionReducer from './SelectionReducer'
import answersReducer from './AnswersReducer'


export default combineReducers({
  
  quizReducer: quizReducer,
  selectionReducer: selectionReducer,
  answersReducer: answersReducer
})
