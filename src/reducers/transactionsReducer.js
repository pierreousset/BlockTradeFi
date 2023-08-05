const initialState = {
  count: 0,
  transactionHistory: [],
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...state, count: action.transactions };
    case 'SET_TRANSACTION_HISTORY':
      return { ...state, transactionHistory: action.transactionHistory };
    default:
      return state;
  }
};

export default transactionsReducer;