import { FINISH_QUIZ, SELECT_QUIZ, ADD_ANSWER_QUIZ, LOAD_QUIZ_DATA } from '../actions/types'

const initialStateQuiz = {
    isFinished: false,
    answerQuiz: [],
    quizData: {}
}

export default (state = initialStateQuiz, action) => {
    switch (action.type) {
        case FINISH_QUIZ:
             return { ...state, isFinished: action.payload}
        case LOAD_QUIZ_DATA:
             return { ...state, quizData: action.payload}
             
         default:
              return state
    }
}

