const initialState = {
  address: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return { ...state, address: action.address };
    default:
      return state;
  }
};

export default accountReducer;