import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Header from "./Header";
import router from "../../routes/router";

import { Provider } from "react-redux";
import { store } from "../../store";

import { Web3ReactProvider } from "@web3-react/core";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
};

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
  projectId: "3f658ad1ac5d9962ec148d904b333f1c",
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//   },
// ]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} showRecentTransactions={true}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            {/* <RouterProvider router={router} /> */}
          </Provider>
        </Web3ReactProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
