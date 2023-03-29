import React, { useState } from 'react';
import  '../classes/button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
        {isVisible &&
        <button onClick={scrollToTop}>
          <FontAwesomeIcon icon={faCaretUp} className="icon"/>
        </button>
      }
    </>
  );
};

export default ScrollToTopButton;


