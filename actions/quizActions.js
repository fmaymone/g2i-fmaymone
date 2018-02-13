import { FINISH_QUIZ, CHANGE_QUESTION_QUIZ, ADD_ANSWER_QUIZ, RESET_QUIZ } from './types'

export const selectQuiz = (quizPos) => {
  return {
    type: CHANGE_QUESTION_QUIZ,
    payload: quizPos
  }
}
export const finishQuiz = (value) => {
  return {
    type: FINISH_QUIZ,
    payload: value
  }
}

export const answerQuestion = (answer) => {

  return {
    type: ADD_ANSWER_QUIZ,
    payload: answer
  }
}

export const resetQuiz = () => {

  return {
    type: RESET_QUIZ,
    payload: answer
  }
}



  