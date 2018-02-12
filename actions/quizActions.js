import { FINISH_QUIZ, CHANGE_QUESTION_QUIZ } from './types'

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


  