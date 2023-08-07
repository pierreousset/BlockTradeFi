// import axios from 'axios';
import Web3 from 'web3';
import { map } from 'lodash';
import {
  AssetTransfersWithMetadataResult,
  AssetTransfersCategory,
} from 'alchemy-sdk';
import { alchemy, utils } from 'services/alchemy';
import { ThunkAction, GetNumberTransactions } from './transactionsActions';

export const setTransactions = (count: any) => ({
  type: 'SET_TRANSACTIONS',
  count,
});

export const setTransactionHistory = (
  transactionHistory: AssetTransfersWithMetadataResult[]
) => ({
  type: 'SET_TRANSACTION_HISTORY',
  transactionHistory,
});

export const setGasPrice = (gasPrice: string) => ({
  type: 'SET_GAS_PRICE',
  gasPrice,
});

export const setAllToken = (data: any) => ({
  type: 'SET_ALL_TOKEN',
  data,
});

// export const fetchTransactions = (address) => async (dispatch) => {
//   try {
//     const response = await axios.get(`http://localhost:3001/api/address/${address}/transactions`);
//     dispatch(setTransactions(response.data));
//   } catch (error) {
//     console.error('Error fetching transactions:', error);
//   }
// };

// https://mainnet.infura.io/v3/8cdf4ac39b9b4a288fbdf9131a941ad3

// export const fetchNumberTransactions = (address) => async (dispatch) => {
//   try {
//     const provider = 'https://mainnet.infura.io/v3/8cdf4ac39b9b4a288fbdf9131a941ad3';
//     const web3Provider = new Web3.providers.HttpProvider(provider);
//     const web3 = new Web3(web3Provider);
//     web3.eth.getTransactionCount(address).then((result) => {
//       dispatch(setTransactions(result));
//     });
//   } catch (error) {
//     console.error('Error fetching transactions:', error);
//   }
// };

export const getTransactionsHistory =
  (address: string): ThunkAction<GetNumberTransactions> =>
  async (
    dispatch: (arg0: { type: string; transactionHistory: any }) => void
  ) => {
    try {
      await alchemy.core
        .getAssetTransfers({
          fromBlock: '0x0',
          toBlock: 'latest',
          fromAddress: address,
          category: [
            AssetTransfersCategory.EXTERNAL,
            AssetTransfersCategory.INTERNAL,
            AssetTransfersCategory.ERC20,
            AssetTransfersCategory.ERC721,
            AssetTransfersCategory.ERC1155,
          ],
        })
        .then((result) => {
          dispatch(setTransactionHistory(result.transfers));
        });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

export const getGasPrice =
  () => async (dispatch: (arg0: { type: string; gasPrice: any }) => void) => {
    try {
      alchemy.core.getGasPrice().then((result) => {
        const balance = utils.formatUnits(result, 'wei');
        dispatch(setGasPrice(balance));
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

export const getAllToken =
  (address: string) =>
  async (dispatch: (arg0: { type: string; data: any }) => any) => {
    try {
      const tokenContractAddresses = [
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      ];
      // Get token balances
      const balances = await alchemy.core.getTokenBalances(
        address,
        tokenContractAddresses
      );

      const metadata = await alchemy.core.getTokenMetadata(
        '0xdAC17F958D2ee523a2206206994597C13D831ec7'
      );
      // Remove tokens with zero balance
      // const nonZeroBalances = balances.tokenBalances.filter((token) => {
      //   return token.tokenBalance !== "0";
      // });

      // // Counter for SNo of final output
      // let i = 1;

      // const balanceTokenList = [];

      // Loop through all tokens with non-zero balance
      // for (let token of nonZeroBalances) {
      //   // Get balance of token
      //   let balance = token.tokenBalance;

      //   // Get metadata of token
      //   const metadata = await alchemy.core.getTokenMetadata(
      //     token.contractAddress
      //   );

      //   // Compute token balance in human-readable format
      //   balance = balance / Math.pow(10, metadata.decimals);
      //   balance = balance.toFixed(7);
      //   console.log(balance);

      //   balanceTokenList.push({ ...metadata, balance: balance });
      // }

      // console.log("autre", balances.tokenBalances[0].tokenBalance);

      // const metadata = await alchemy.core.getTokenMetadata(
      //   balances.tokenBalances[0].contractAddress
      // );

      // const tokenName = metadata.name + "(" + metadata.symbol + ")";
      // const tokenBalance =
      //   balances.tokenBalances[0].tokenBalance /
      //   Math.pow(10, metadata.decimals);

      // // console.log("Token balance for", tokenName, "is", tokenBalance);

      // parseInt(balances.tokenBalances[0].tokenBalance, 16);
      // console.log(
      //   "Token balance foriii address\n",
      //   parseInt(balances.tokenBalances[0].tokenBalance, 16)
      // );

      const balance = await alchemy.core.getBalance(address, 'latest');

      dispatch(setAllToken({ count: utils.formatEther(balance) }));
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

// export const getBalanceAllToken = (contract) => async (dispatch) => {
//   try {
//     alchemy.core.getTokenBalances(contract).then((result) => {
//       const tokentList = map(result.tokenBalances, ({ contractAddress }) => {
//         return alchemy.core.getTokenMetadata(contractAddress);
//       });

//       Promise.all(tokentList).then((data) => dispatch(setBalanceAllToken(data)));
//     });
//   } catch (error) {
//     console.error('Error fetching transactions:', error);
//   }
// };

// alchemy.core.getTokenBalances(contract).then((result) => {
//   console.log(`The balances of ${contract} address are:`, result);
//   const tokentList = map(result.tokenBalances, ({ contractAddress }) => {
//     console.log(contractAddress);
//     return alchemy.core.getTokenMetadata(contractAddress);
//   });

//   Promise.all(tokentList).then((data) => dispatch(setAllToken(data)));
// });

export default {
  getTransactionsHistory,
};
