import { ADD_ANSWER_QUIZ, UPDATE_ANSWER_QUIZ, RESET_ANSWER_QUIZ } from '../actions/types'

const initialStateAnswers = {
    answers: []
}

export default (state = initialStateAnswers, action) => {
    switch (action.type) {
        case ADD_ANSWER_QUIZ:


        //check if the object already exists
        var obj = state.answers.find(function (obj) { 
            return obj.id === action.payload.id })
        if(obj == null){
            return { ...state, answers: state.answers.concat(action.payload) }
        }else{
            state.answers.pop(obj)
            return { ...state, answers: state.answers.concat(action.payload) }
        }

        case RESET_ANSWER_QUIZ:
        return { ...state, answers: [] }

        
            
        case UPDATE_ANSWER_QUIZ:
            return { ...state, [action.payload.prop]: action.payload.value }
         default:
            return state
    }
}

