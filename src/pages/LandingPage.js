// React Imports
import React from "react";

// Custom Imports
import Navbar from "../components/Navbar";

// This functional component renders the landing page
const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex items-center justify-center bg-red-900 h-40">
        <h1 className="font-bold">PLAY IT FORWARD</h1>
      </div>
      <div className="flex items-center justify-center bg-blue-900 h-16">
        <button class="bg-blue-500 focus:outline-none hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Login
        </button>
      </div>
      <div className="flex items-center justify-center bg-yellow-900 flex-grow">
        <h1 className="font-bold">VIEW UPCOMING EVENTS</h1>
        
      </div>
    </div>
  );
};

export default LandingPage;
