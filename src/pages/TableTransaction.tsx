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

const TableTransaction = ({
  transactionsList,
}: {
  transactionsList: Array<any>;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <th className="py-3 px-6">Id</th>
              <th className="py-3 px-6">Block Number</th>
              <th className="py-3 px-6">From</th>
              <th className="py-3 px-6">To</th>
              <th className="py-3 px-6">value</th>
              <th className="py-3 px-6">Asset</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {transactionsList &&
              transactionsList.map(
                (
                  item: {
                    uniqueId: any;
                    blockNum: any;
                    from: any;
                    to: any;
                    value: any;
                    asset: any;
                    hash: any;
                  },
                  idx: any
                ) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-normal break-all">
                      {item.uniqueId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.blockNum}
                    </td>
                    <td className="max-w-12 px-6 py-4 whitespace-normal break-all">
                      {item.from}
                    </td>
                    <td className="max-w-12 px-6 py-4 whitespace-normal break-all">
                      {item.to}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-all">
                      {item.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.asset}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <a
                        className="px-3 py-3 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
                        href={`https://etherscan.io/tx/${item.hash}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Etherscan
                      </a>
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

export default TableTransaction;
