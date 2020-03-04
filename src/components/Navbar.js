// React Imports
import React, { useState } from "react";

// Custom Imports
import pifLogo from "../media/icons/pif-logo-header.png";
import HamburgerOptions from "./HamburgerOptions";

// This is a dynamic navbar that expands to show links
// Layout:
// Header Links, Collapsible Menu Options
const Navbar = () => {
  // state for the hamburger dropdown
  const [expanded, setExpanded] = useState(false);

  // METHOD: click handler for hamburger dropdown toggle
  const onHamburgerClick = e => {
    setExpanded(!expanded);
  };

  // SVG Icon for collapsing menu
  const hamburgerCollapseIcon = (
    <svg
      className="h-8 w-8 fill-current text-red-500"
      onClick={onHamburgerClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  );

  // SVG Icon for expanding menu
  const hamburgerExpandIcon = (
    <svg
      className="h-8 w-8 fill-current text-white"
      onClick={onHamburgerClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <header className="bg-gray-900">
      {/* Header Links */}
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <div>
          <img className="h-12" src={pifLogo} alt="" />
        </div>
        <div>{expanded ? hamburgerCollapseIcon : hamburgerExpandIcon}</div>
      </div>

      {/* Collapsible Menu Options */}
      {expanded ? <HamburgerOptions /> : null}
    </header>
  );
};

export default Navbar;
