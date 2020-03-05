// React imports
import React from "react";

// This functional component renders the options for the navbar menu
// Layout:
// Links (x4)
const NavbarOptions = (props) => {
  return (
    <div className="flex text-blue-400 bg-gray-900 justify-around px-1">
      <a
        className="font-semibold rounded px-2 hover:bg-blue-700"
        href="#"
      >
        Home
      </a>
      <a
        className="font-semibold rounded px-2 hover:bg-blue-700"
        href="#"
      >
        About
      </a>
      <a
        className="font-semibold rounded px-2 hover:bg-blue-700"
        href="#"
      >
        Events
      </a>
      <a
        className="font-semibold rounded px-2 hover:bg-blue-700"
        href="#"
      >
        Nonprofits
      </a>
    </div>
  );
};

export default NavbarOptions;
