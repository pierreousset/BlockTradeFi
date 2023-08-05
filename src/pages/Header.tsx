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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-75 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ConnectButton accountStatus="avatar" chainStatus="icon" />
          <ul className="space-y-2 font-medium py-3">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-black-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
