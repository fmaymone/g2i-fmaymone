export const selectQuiz = (quizPos) => {
    return {
      type: 'select_quiz',
      payload: quizPos
    };
  };
  