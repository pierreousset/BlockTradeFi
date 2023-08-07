import { Fragment, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Navbar from "components/Navbar/Navbar";
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
    <Navbar
      rightContent={() => (
        <ConnectButton accountStatus="avatar" chainStatus="icon" />
      )}
    />
  );
};

export default Header;
