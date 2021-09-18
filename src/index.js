import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/Futura-Medium-01.ttf';
import './fonts/Futura-CondensedMedium-04.ttf';
import './fonts/Futura-Bold-03.ttf';
import './fonts/Futura-CondensedExtraBold-05.ttf';
import './fonts/Futura-MediumItalic-02.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
