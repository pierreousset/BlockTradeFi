import { alchemy, utils } from 'services/alchemy';

export const setMetaCoin = (coins: Object) => ({
  type: 'SET_META_COIN',
  coins,
});

export const getMetaCoin =
  (addressCoin: string) =>
  async (d: (arg0: { type: string; balance: any }) => void) => {
    try {
      alchemy.core.getTokenMetadata(addressCoin).then((result) => {
        d(setMetaCoin(result));
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

export default {
  getMetaCoin,
};
