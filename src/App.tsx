// React Imports
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

// Custom Imports
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'

function App() {
   return (
      <Router>
         <div>
            <LandingPage />
         </div>
      </Router>
   );
}

export default App;
