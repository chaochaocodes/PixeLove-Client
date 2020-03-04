// React Imports
import React, { useState } from "react";

// Custom Imports
import burgerExpand from "../media/icons/burgerSelected.svg";
import burgerUnexpand from "../media/icons/burgerUnselected.svg";
import pifLogo from "../media/icons/pif-logo.svg";
import HamburgerOptions from "./HamburgerOptions"

const Navbar = () => {
  
    // state for the hamburger dropdown
    const [expanded, setExpanded] = useState(false);
  
    // METHOD: click handler for hamburger dropdown toggle
    const onHamburgerClick = (e) => {
        setExpanded(!expanded);
    }

    // RETURN method
    return (
    <header className="bg-gray-900">
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <div >
          <img className="h-8" src={pifLogo} alt=""/>
        </div>
        <div>
          <img className="h-8" src={expanded ? burgerUnexpand : burgerExpand} onClick={onHamburgerClick} alt="" />
        </div>
      </div>
      {expanded ? <HamburgerOptions/> : null}
    </header>
  );
};

export default Navbar;
