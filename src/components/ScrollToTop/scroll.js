import React, { useEffect, useState } from 'react';
import './scroll.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = pageHeight * 0.3;

      setShowButton(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top-button ${showButton ? 'visible' : 'hidden'}`}>
        <div onClick={scrollToTop} id='arrow-top'>↑</div>
    </div>
  );
};

export default ScrollToTopButton;
