import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css' // <- change './index.css' to './styles.css'
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/04B_30__.TTF'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();