// React Imports
import React from 'react';

// Custom Imports
import Navbar from '../components/Navbar'

// This functional component renders the landing page
const LandingPage = () => {
    return (
        <div className="bg-green-900 h-screen">
            <Navbar />
            <div className="bg-red-900 h-32">
                <h1>PLAY IT FORWARD</h1>
            </div>
            <div className="bg-blue-900 h-24">
                <h1>MAKE A DIFFERENCE</h1>
            </div>
            <div className="bg-yellow-900 h-">
                <h1>EVENTS</h1>
            </div>
        </div>
    );
};

export default LandingPage;