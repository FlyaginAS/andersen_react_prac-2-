import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';

console.log('hello');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App propForHoc1="one" propForHoc2="two" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
