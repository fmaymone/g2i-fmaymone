import { FINISH_QUIZ, CHANGE_QUESTION_QUIZ } from '../actions/types'

export default (state = 0, action) => {
    switch (action.type) {
      case CHANGE_QUESTION_QUIZ:
        return action.payload;
      default:
        return state;
    }
  };