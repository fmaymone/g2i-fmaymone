import {
  FINISH_QUIZ,
  CHANGE_QUESTION_QUIZ,
  ADD_ANSWER_QUIZ,
  RESET_QUIZ,
  RESET_ANSWER_QUIZ,
  LOAD_QUIZ_DATA,
  SET_NUMBER_QUESTIONS,
  SET_LEVEL_QUIZ
} from "./types";

export const selectQuiz = quizPos => {
  return {
    type: CHANGE_QUESTION_QUIZ,
    payload: quizPos
  };
};
export const finishQuiz = value => {
  return {
    type: FINISH_QUIZ,
    payload: value
  };
};

export const answerQuestion = answer => {
  return {
    type: ADD_ANSWER_QUIZ,
    payload: answer
  };
};

export const resetQuiz = () => {
  return {
    type: RESET_QUIZ,
    payload: answer
  };
};

export const loadQuizData = data => {
  return {
    type: LOAD_QUIZ_DATA,
    payload: data
  };
};

export const resetAnswerQuiz = data => {
  return {
    type: RESET_ANSWER_QUIZ,
    payload: data
  };
};
export const setNumberQuestions = data => {
  return {
    type: SET_NUMBER_QUESTIONS,
    payload: data
  };
};
export const setLevelQuiz = data => {
  return {
    type: SET_LEVEL_QUIZ,
    payload: data
  };
};
