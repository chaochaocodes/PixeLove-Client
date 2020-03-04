import React from "react";

const HamburgerOptions = (props) => {
  return (
    <div className="pb-2 px-1">
      <a
        className="block text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        Home
      </a>
      <a
        className="block text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        About
      </a>
      <a
        className="block text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        Events
      </a>
      <a
        className="block text-white font-semibold rounded px-1 hover:bg-blue-700"
        href="#"
      >
        Nonprofits
      </a>
    </div>
  );
};

export default HamburgerOptions;
