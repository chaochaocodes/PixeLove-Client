import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Custom Imports
import Landing from './components/Landing';
import NameForm from './components/NameForm';
import Lobby from './components/Lobby';
import Draw from './components/Draw';

function App() {
   return (
      <div className="App">
      <Router>
         <Switch>
            <Route exact path="/"><Landing/></Route>
            <Route path="/enter" component={routerProps => <NameForm {...routerProps}/>}/>
            <Route path="/lobby"><Lobby/></Route>
            <Route path="/room/:id" component={routerProps => <Draw {...routerProps}/>}/>
         </Switch>
      </Router>
      </div>
   );
}

export default App;
