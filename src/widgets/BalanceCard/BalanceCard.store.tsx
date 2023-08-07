import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import accountActions from 'actions/accountActions';
import useActions from 'hooks/useActions';

import BalanceCard from './BalanceCard';

const BalanceCardWidget = () => {
  const { fetchBalance } = useActions(accountActions);
  const balanceWallet = useSelector(
    (state: { balance: { count: any } }) => state.balance.count
  );

  const address = useSelector(
    (state: { account: { address: string } }) => state.account.address
  );

  useEffect(() => {
    if (address) {
      fetchBalance(address);
    }
  }, [address]);

  return <BalanceCard balance={balanceWallet} />;
};

export default BalanceCardWidget;
