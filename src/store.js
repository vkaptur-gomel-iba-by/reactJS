const init = { flag: false };
const reducer = (state = init, action) => {
  switch (action.type) {
    case 'changeFile':
      return {
        ...state,
        flag: !state.flag,
      };
    default:
      return state;
  }
};

export default reducer;
