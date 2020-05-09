import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './styles.css' // <- change './index.css' to './styles.css'
import './index.css'
=======
import './index.css';
>>>>>>> 8c951b09344c382bf2c91a56a07262b73e68a73f
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/04B_30__.TTF'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
