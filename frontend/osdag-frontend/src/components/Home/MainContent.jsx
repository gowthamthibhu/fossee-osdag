// components/Home/MainContent.js
'use client';

import React from 'react';
import { useHome } from './HomeContext';
import TopNavigation from './TopNavigation';
import SecondaryNavigation from './SecondaryNavigation';
import ConnectionGrid from './ConnectionGrid';
import StartButton from './StartButton';
import styles from '../../styles/Home.module.scss';

const MainContent = () => {
  const { darkMode, activeTab, secondaryTab } = useHome();

  return (
    <div className={`${styles.mainContent} ${darkMode ? styles.darkMode : ''}`}>
      <TopNavigation />
      <SecondaryNavigation />
      <ConnectionGrid />
      <StartButton />
    </div>
  );
};

export default MainContent;