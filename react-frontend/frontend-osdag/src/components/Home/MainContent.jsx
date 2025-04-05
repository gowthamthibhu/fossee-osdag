import React from 'react';
import { useHome } from './HomeContext';
import TopNavigation from './TopNavigation';
import SecondaryNavigation from './SecondaryNavigation';
import ConnectionGrid from './ConnectionGrid';
import StartButton from './StartButton';
import '../../styles/Home.css';

const MainContent = () => {
  const { darkMode, activeTab, secondaryTab } = useHome(); 
  

  return (
    <div className={`mainContent ${darkMode ? 'darkMode' : ''}`}>
      <TopNavigation />
      <SecondaryNavigation />
      <ConnectionGrid />
      <StartButton />
    </div>
  );
};

export default MainContent;