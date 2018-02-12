import { FINISH_QUIZ, SELECT_QUIZ } from '../actions/types'

const initialStateQuiz = {
    isFinished: false
}

export default (state = initialStateQuiz, action) => {
    switch (action.type) {
         case FINISH_QUIZ:
             return { ...state, isFinished: true}
         default:
              return state
    }
}

