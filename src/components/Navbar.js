// React Imports
import React, { useState } from "react";

// Custom Imports
import burgerExpand from "../media/icons/burgerSelected.svg";
import burgerUnexpand from "../media/icons/burgerUnselected.svg";
import pifLogo from "../media/icons/pif-logo.svg";
import HamburgerOptions from "./HamburgerOptions"

const Navbar = () => {
  
    const [expanded, setExpanded] = useState(false);
  
    const onHamburgerClick = (e) => {
        setExpanded(!expanded);
    }

    return (
    <header className="bg-gray-900">
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <div className="w-auto">
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
