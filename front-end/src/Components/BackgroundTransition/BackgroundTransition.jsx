import React from 'react';
import './BackgroundTransition.css';
import { useEffect } from 'react';

const BackgroundTransition = ({ onComplete }) => {
  useEffect(() => {
      // Chame a função onComplete após a duração da animação (4 segundos)
      const timer = setTimeout(() => {
          onComplete();
      }, 4000);

      return () => clearTimeout(timer);
  }, [onComplete]);

  return (
      <div className="container-background">
          <div className="left"></div>
          <div className="right"></div>
      </div>
  );
};

export default BackgroundTransition;
