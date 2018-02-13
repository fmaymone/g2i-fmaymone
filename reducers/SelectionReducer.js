import { FINISH_QUIZ, CHANGE_QUESTION_QUIZ, RESET_QUIZ } from '../actions/types'

export default (state = 0, action) => {
    switch (action.type) {
      case CHANGE_QUESTION_QUIZ:
        return action.payload
      case RESET_QUIZ:
        return 0;
      default:
        return state
    }
  };