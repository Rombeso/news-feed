import React from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import { App } from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { initializeAPI } from './api';

initializeAPI();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
