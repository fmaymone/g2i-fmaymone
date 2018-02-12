
export default (state = 0, action) => {
    switch (action.type) {
      case 'select_quiz':
        return action.payload;
      default:
        return state;
    }
  };