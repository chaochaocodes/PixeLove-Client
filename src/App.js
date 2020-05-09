import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Custom Imports
import Landing from './components/Landing';
import Lobby from './components/Lobby';
import Draw from './components/Draw';

function App() {
   return (
      <div className="App">
      <Router>
         <Switch>
            <Route exact path="/"><Landing/></Route>
            <Route path="/lobby"><Lobby/></Route>
            <Route path="/draw"><Draw/></Route>
         </Switch>
      </Router>
      </div>
   );
}

export default App;
