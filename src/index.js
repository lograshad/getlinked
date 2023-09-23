import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
          <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// todos
// gsap
// framer motion
// image masking
// animate stars yoyo
// svgs responsiveness
// add music
// press a key anywhere to contact
// add ellipse to that babes head and remove the second one
// carefully crosscheck one by one
// comment code and uncomment
// bounce man on cloud
// position stars, glowball and flares to responsiveness 
// page load on image download
// fix text area
// fix boy filter
// add read me
// fix text area text color