import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

console.log('hello');

ReactDOM.render(
  <React.StrictMode>
    <App propForHoc1="one" propForHoc2="two" />
  </React.StrictMode>,
  document.getElementById('root')
);
