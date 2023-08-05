// import axios from 'axios';
// import Web3 from "web3";
import { map } from "lodash";
import {
  Alchemy,
  AssetTransfersWithMetadataResult,
  Network,
  Utils,
  AssetTransfersCategory,
} from "alchemy-sdk";

import { Action } from "redux";
import { ThunkAction as ReduxThunkAction } from "redux-thunk";

export type TActionType = "GET_NUMBER_TRANSACTIONS" | "CLOSE_TOAST";

export interface IAction {
  type: TActionType;
  payload?: any;
  isRefreshing?: boolean;
  err?: any;
  init?: boolean;
}

export interface IGetRequestData {
  address: string;
}

export interface GetNumberTransactions extends IAction {
  type: "GET_NUMBER_TRANSACTIONS";
  payload: IGetRequestData;
}

export type ThunkAction<A extends Action = IAction> = ReduxThunkAction<
  void,
  IRootState,
  unknown,
  A
>;
