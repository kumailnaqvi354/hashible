import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";
import App from './App';

ReactDOM.render(
 <React.StrictMode>
   <LightgalleryProvider>
     <App />
   </LightgalleryProvider>
 </React.StrictMode>,
 document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
