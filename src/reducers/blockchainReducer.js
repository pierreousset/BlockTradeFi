const initialState = {
  gasPrice: 0,
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GAS_PRICE':
      return { ...state, gasPrice: action.gasPrice };
    case 'SET_DATA_BLOCKCHAIN':
      return { ...state, data: { ...action.data } };
    default:
      return state;
  }
};

export default blockchainReducer;