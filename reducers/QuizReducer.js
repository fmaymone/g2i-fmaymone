import { FINISH_QUIZ, SELECT_QUIZ, ADD_ANSWER_QUIZ } from '../actions/types'

const initialStateQuiz = {
    isFinished: false,
    answerQuiz: []
}

export default (state = initialStateQuiz, action) => {
    switch (action.type) {
        case FINISH_QUIZ:
             return { ...state, isFinished: action.payload}
       
         default:
              return state
    }
}

