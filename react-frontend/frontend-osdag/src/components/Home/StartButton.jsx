import React from 'react';
import { useHome } from './HomeContext';
import '../../styles/Home.css';

const StartButton = () => {
  const { fetchNavigationData, loading } = useHome(); // Correctly destructure fetchNavigationData

  return (
    <div className="startButtonContainer">
      <button  
        className="startButton" 
        onClick={fetchNavigationData} // Use the correct function
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