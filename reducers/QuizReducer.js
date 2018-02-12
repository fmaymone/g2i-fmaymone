import { FINISH_QUIZ, SELECT_QUIZ, ADD_ANSWER_QUIZ } from '../actions/types'

const initialStateQuiz = {
    isFinished: false,
    answerQuiz: []
}

export default (state = initialStateQuiz, action) => {
    switch (action.type) {
        case FINISH_QUIZ:
             return { ...state, isFinished: true}
        case ADD_ANSWER_QUIZ:
             return { ...state, isFinished: true}
         default:
              return state
    }
}

