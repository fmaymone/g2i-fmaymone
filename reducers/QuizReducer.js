const initialState = {
    isFinished: false
}

export default (state = initialState, action) => {
    switch (action.type) {
         case 'FINISH_QUIZ':
             return { ...state, isFinished: true}
         default:
              return state
    }
}
