const initialState = {
  count: 0,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return { ...state, count: action.balance };
    case 'SET_ALL_TOKEN':
      return { ...state, tokens: action.data };
    default:
      return state;
  }
};

export default walletReducer;