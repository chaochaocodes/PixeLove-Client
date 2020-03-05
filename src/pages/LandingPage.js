// React Imports
import React from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventCardCollection from "../components/EventCardCollection";

// This functional component renders the landing page
// Layout (from top --> bottom):
// Navbar, Mission Statement, Upcoming Events
const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Navbar */}
      <Navbar />

      {/* Mission Statement */}
      <div className="flex items-center justify-center h-64">
        <h1 className="font-bold">Mission Statement</h1>
      </div>

      {/* Upcoming Events */}
      <div className="flex flex-col items-center justify-center w-screen flex-grow">
        <h1 className="font-bold text-xl pb-1">UPCOMING EVENTS</h1>
        <EventCardCollection />
      </div>
    </div>
  );
};

export default LandingPage;
