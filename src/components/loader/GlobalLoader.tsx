import React from 'react';
import './loader.css';

const GlobalLoader: React.FC = () => {
  return (
    <div className='loader-overlay'>
      <div className='loader-container'>
        <div className='loader'></div>
      </div>
    </div>
  );
};

export default GlobalLoader;
