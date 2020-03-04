// React Imports
import React from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard"

// This functional component renders the landing page
const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex items-center justify-center bg-red-900 h-64">
        <h1 className="font-bold">PLAY IT FORWARD</h1>
      </div>
      <div className="flex items-center justify-center bg-blue-900 h-24">
        <button className="bg-blue-500 focus:outline-none hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Login
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-yellow-900 flex-grow">
        <h1 className="font-bold pb-2">VIEW UPCOMING EVENTS</h1>
        <EventCard />
      </div>
    </div>
  );
};

export default LandingPage;
