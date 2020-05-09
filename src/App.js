import React from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> 8c951b09344c382bf2c91a56a07262b73e68a73f
}

export default App;
