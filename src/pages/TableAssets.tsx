import { Fragment, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
// import {
//   ArrowPathIcon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
// } from "@heroicons/react/24/outline";
// import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const TableAsset = ({ assetList }: { assetList: Array<any> }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(assetList);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Transaction
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Asset</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Balance</th>
              <th className="py-3 px-6">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {assetList &&
              assetList.map(
                (
                  item: {
                    symbol: any;
                    name: any;
                    balance: any;
                    to: any;
                    value: any;
                    asset: any;
                    hash: any;
                  },
                  idx: any
                ) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-normal break-all">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.blockNum}
                    </td>
                    <td className="max-w-12 px-6 py-4 whitespace-normal break-all">
                      {item.balance}
                      {item.symbol}
                    </td>
                    <td className="max-w-12 px-6 py-4 whitespace-normal break-all">
                      {item.to}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAsset;
