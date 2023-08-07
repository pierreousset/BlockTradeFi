import { Alchemy, Network, Utils } from "alchemy-sdk";

const settings = {
  apiKey: "AUiqazTkl3_ensLZSiNTpu59_XvxYgx-", // Replace with your Alchemy API key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

export const alchemy = new Alchemy(settings);

export const utils = Utils;

export default { alchemy, utils };
