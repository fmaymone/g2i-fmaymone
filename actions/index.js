export const selectQuestion = (questionId) => {
    return {
      type: 'select_question',
      payload: questionId
    };
  };
  