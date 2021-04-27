import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <>
  
 <BrowserRouter>
 <App />
 </BrowserRouter>
   </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
