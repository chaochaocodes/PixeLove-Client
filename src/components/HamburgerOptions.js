// React imports
import React from "react";

// This functional component renders the options for the hamburger
const HamburgerOptions = (props) => {
  return (
    <div className="flex justify-around pb-2 px-1">
      <a
        className="text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        Home
      </a>
      <a
        className="text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        About
      </a>
      <a
        className="text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        Events
      </a>
      <a
        className="text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        Nonprofits
      </a>
    </div>
  );
};

export default HamburgerOptions;
