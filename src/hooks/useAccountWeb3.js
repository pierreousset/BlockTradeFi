import { useState, useEffect } from 'react';
import Web3 from 'web3';

export function useAccountWeb3() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [library, setLibrary] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
        setProvider(window.ethereum);
        setLibrary(new Web3(window.ethereum));
        setConnected(true);
      } catch (err) {
        console.error('Failed to connect wallet:', err);
      }
    } else {
      console.log('Please install MetaMask or another compatible wallet.');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      setLibrary(new Web3(window.ethereum));
    }
  }, []);

  return { connectWallet, connected, address, provider, library };
}