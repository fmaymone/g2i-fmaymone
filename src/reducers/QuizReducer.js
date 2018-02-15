import {
  FINISH_QUIZ,
  SELECT_QUIZ,
  ADD_ANSWER_QUIZ,
  LOAD_QUIZ_DATA,
  SET_LEVEL_QUIZ,
  SET_NUMBER_QUESTIONS
} from "../actions/types"
import {
  LEVEL_HARD,
  LEVEL_MEDIUM,
  LEVEL_EASY
} from "../config/QuizConfiguration"
const initialStateQuiz = {
  isFinished: false,
  answerQuiz: [],
  quizData: {},
  level:  LEVEL_MEDIUM ,
  numberQuestions: 10
}

export default (state = initialStateQuiz, action) => {
  switch (action.type) {
    case FINISH_QUIZ:
      return { ...state, isFinished: action.payload }
    case LOAD_QUIZ_DATA:
      return { ...state, quizData: action.payload }
    case SET_NUMBER_QUESTIONS:
      return { ...state, numberQuestions: action.payload }
    case SET_LEVEL_QUIZ:
      return { ...state, level: action.payload }

    default:
      return state
  }
}
