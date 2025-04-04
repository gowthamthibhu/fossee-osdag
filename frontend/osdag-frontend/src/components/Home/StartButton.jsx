// components/Home/StartButton.js
'use client';

import React from 'react';
import { useHome } from './HomeContext';
import styles from '../../styles/Home.module.scss';

const StartButton = () => {
  const { fetchData, loading } = useHome();

  return (
    <div className={styles.startButtonContainer}>
      <button 
        className={styles.startButton} 
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
        {loading ? 'Loading...' : 'Start'}
      </button>
    </div>
  );
};

export default StartButton;