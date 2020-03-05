// React Imports
import React from "react";

// Custom Imports
import pifLogo from "../media/icons/pif-logo.png"; // PLACEHOLDER

// This is a re-usable Card component for event info
// Layout:
// Event Logo, Event Information
const EventCard = props => {

  return (
    <div className="flex flex-col bg-white mb-3 items-center rounded-lg w-56 h-40 shadow-md">
      {/* Event Logo */}
      <div className="h-16 w-16">
        <img className="object-cover" src={pifLogo} alt="" />
      </div>

      {/* Event Information */}
      <div className="flex flex-col pl-2 bg-blue-400 w-full flex-grow rounded-b-lg">
        <h1 className="text-s">{props.event.nonprofit.displayName}</h1>
        <h1 className="text font-semibold">{props.event.title}</h1>
        <h1 className="text-s">{props.event.date}</h1>
        <h1 className="text-xs truncate">{props.event.address}</h1>
      </div>
    </div>
  );
};

export default EventCard;
