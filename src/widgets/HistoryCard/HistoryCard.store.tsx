import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionsActions from 'actions/transactionsActions';
import useActions from 'hooks/useActions';

import HistoryCard from './HistoryCard';

const HistoryCardWidget = () => {
  const { getTransactionsHistory } = useActions(transactionsActions);
  const transactionHistory = useSelector(
    (state: { transactions: { transactionHistory: any } }) =>
      state.transactions.transactionHistory
  );
  const address = useSelector(
    (state: { account: { address: string } }) => state.account.address
  );

  useEffect(() => {
    if (address) {
      getTransactionsHistory(address);
    }
  }, [address]);

  return <HistoryCard transactionHistory={transactionHistory} />;
};

export default HistoryCardWidget;
