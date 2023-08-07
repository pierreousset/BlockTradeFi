import type { NextPage } from 'next';
import { use, useEffect, useState } from 'react';
import { useAccount, Chain, useNetwork, useContract } from 'wagmi';

import { useDispatch, useSelector } from 'react-redux';
import { getGasPrice, getAllToken } from '../actions/transactionsActions';

import { setAddress } from '../actions/accountActions';

import styles from '../styles/Home.module.css';
import React from 'react';
import TableTransaction from './TableTransaction';
import TableAsset from './TableAssets';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import { css } from '@emotion/react';
import BalanceCardWidget from 'widgets/BalanceCard/BalanceCard.store';
import HistoryCardWidget from 'widgets/HistoryCard/HistoryCard.store';

const Home: NextPage = () => {
  const { address, connector, isDisconnected } = useAccount();
  const { chain } = useNetwork();

  const dispatch = useDispatch();

  const [NumberTransactions, setTransactions] = useState<Number | undefined>(0);
  const [transactionsList, setListTransactions] = useState<any | undefined>([]);
  const [isConnected, setConnected] = useState<boolean>(false);

  const [gas, setGas] = useState(0);
  const [tokens, setAllToken] = useState<any | undefined>([]);

  const transactionsCount = useSelector(
    (state: { transactions: { count: any } }) => state.transactions.count
  );
  const gasPrice = useSelector(
    (state: { blockchain: { gasPrice: any } }) => state.blockchain.gasPrice
  );
  const allToken = useSelector(
    (state: { balance: { tokens: any } }) => state.balance.tokens
  );

  useEffect(() => {
    if (address) {
      dispatch(setAddress(address));
      dispatch(getGasPrice());
      dispatch(getAllToken(address));
    }
  }, [address]);

  useEffect(() => {
    setConnected(!!connector);
  }, [connector]);

  useEffect(() => {
    setTransactions(transactionsCount);
    setGas(gasPrice);
    setAllToken(allToken);
  }, [transactionsCount, gasPrice, allToken]);

  return (
    <div className={styles.container}>
      <div
        css={css`
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f9f9f9;
        `}
      >
        <Title>Wallet</Title>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            gap: 30px;
          `}
        >
          {isConnected && <BalanceCardWidget />}
          {isConnected && <HistoryCardWidget />}
        </div>
      </div>
    </div>
  );
};

export default Home;
// https://etherscan.io/tx/

{
  /* <TableAsset assetList={tokens} />
          <TableTransaction transactionsList={transactionsList} /> */
}
