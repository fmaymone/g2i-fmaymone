export const selectQuiz = (quizPos) => {
  return {
    type: 'SELECT_QUIZ',
    payload: quizPos
  }
}
export const finishQuiz = () => {
  return {
    type: 'FINISH_QUIZ',
    payload: null
  }
}


  