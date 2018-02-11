const initialState = {
    texto: 'Texto inicial!'
}

export default (state = initialState, action) => {
    switch (action.type) {
         case 'MUDAR_TEXTO':
              return action.payload
         default:
              return state
    }
}
