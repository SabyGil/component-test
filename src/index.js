import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes from './Router';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
registerServiceWorker();
