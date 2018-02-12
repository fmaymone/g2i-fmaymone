
export default (state = 0, action) => {
    switch (action.type) {
      case 'SELECT_QUIZ':
        return action.payload;
      default:
        return state;
    }
  };