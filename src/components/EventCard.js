// React Imports
import React from "react";

// Custom Imports
import pifLogo from "../media/icons/pif-logo.png";

const EventCard = () => {
  const propSample = {
    data: {
      event: [
        {
          id: 1,
          title: "Volunteering Event Title",
          date: "2020-03-28",
          address: "1234 Somewhere St, Seattle, WA, 98177",
          nonprofit: {
            displayName: "Play It Forward",
            logo: "Insert url here"
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col items-center bg-white w-48 rounded-lg overflow-hidden">
      <div className="h-16 w-16">
        <img className="object-cover" src={pifLogo} alt="" />
      </div>
      <div className="flex flex-col pl-2 bg-blue-400 w-full">
        <h1 className="text-s">{propSample.data.event[0].nonprofit.displayName}</h1>
        <h1 className="text-xl font-semibold">{propSample.data.event[0].title}</h1>
        <h1 className="text-s">{propSample.data.event[0].date}</h1>
        <h1 className="text-xs truncate">{propSample.data.event[0].address}</h1>
      </div>
    </div>
  );
};

export default EventCard;
