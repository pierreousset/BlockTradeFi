import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import transactionsReducer from './src/reducers/transactionsReducer';
import balanceReducer from './src/reducers/walletReducer';
import blockchainReducer from './src/reducers/blockchainReducer';
import accountReducer from './src/reducers/accountReducer';

// initial states here
const initalState = {
  transactions: [],
};

// middleware
const middleware = [thunk];

const allReducers = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
  blockchain: blockchainReducer,
  account: accountReducer,
})

// creating store
export const store = createStore(
  allReducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);