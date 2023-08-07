const initialState = {
  address: null,
};

const metaCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_META_COIN':
      return { ...state, coins: { ...state.coins, ...action.coin } };
    default:
      return state;
  }
};

export default metaCoinReducer;