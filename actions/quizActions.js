import { FINISH_QUIZ, CHANGE_QUESTION_QUIZ, ADD_ANSWER_QUIZ } from './types'

export const selectQuiz = (quizPos) => {
  return {
    type: CHANGE_QUESTION_QUIZ,
    payload: quizPos
  }
}
export const finishQuiz = () => {
  return {
    type: FINISH_QUIZ,
    payload: null
  }
}

export const answerQuestion = (answer) => {

  return {
    type: ADD_ANSWER_QUIZ,
    payload: answer
  }
}


  