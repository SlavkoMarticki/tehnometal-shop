import React from 'react';
import './loader.css';
import { useLoader } from '../../hooks';

const Loader: React.FC = () => {
  const { isLoading } = useLoader();
  return isLoading ? (
    <div className='loader-overlay'>
      <div className='loader-container'>
        <div className='loader'></div>
      </div>
    </div>
  ) : null;
};

export default Loader;
