import React, { useEffect, useState } from 'react';
import Home from '../../Screens/HomeScreen/home';
import './preloader.css';

function Preloader( {updateCurse, updateLeave}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add an event listener to the 'load' event of the window
    window.addEventListener('load', () => {
      // Hide the preloader when the window is fully loaded
      setIsLoading(false);
    });

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return isLoading ? (
    <div className="preloader">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
      <p>The Awesomeness awaits, give it a minute</p>
    </div>
  ) : (
    <Home 
        updateCurse={updateCurse}
        updateLeave={updateLeave}
    />
  );
}

export default Preloader;