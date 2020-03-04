// React Imports
import React from "react";

// Custom Imports
import pifLogo from '../media/icons/pif-logo.png'

const EventCard = () => {
  const propSample = {
    data: {
      event: [
        {
          id: 1,
          title: "Volunteering Event Title",
          date: "2020-03-28",
          nonprofit: {
            displayName: "Play It Forward",
            logo: "Insert url here"
          }
        }
      ]
    }
  };

  console.log(propSample);

  return (
    <div className="flex flex-col">
    <div className="h-16 w-16">
    <img className="object-cover" src={pifLogo} alt="" />
    </div>
    <div>{propSample.data.event[0].title}</div>
    <div>{propSample.data.event[0].date}</div>
    <div>{propSample.data.event[0].nonprofit.displayName}</div>
  </div>
  );
};

export default EventCard;
