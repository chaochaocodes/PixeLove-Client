// React Imports
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

// Custom Imports
import LandingPage from './pages/LandingPage'

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
