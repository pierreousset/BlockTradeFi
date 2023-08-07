import { alchemy, utils } from 'services/alchemy';
// Type: Action Creator
export const setAddress = (address: string) => ({
  type: 'SET_ADDRESS',
  address,
});

export const setBalance = (balance: string) => ({
  type: 'SET_BALANCE',
  balance,
});

export const fetchBalance =
  (address: string | Promise<string>) =>
  async (d: (arg0: { type: string; balance: any }) => void) => {
    try {
      alchemy.core.getBalance(address, 'latest').then((result) => {
        const balance = utils.formatUnits(result, 'ether');
        d(setBalance(balance));
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

export default {
  fetchBalance,
};
