// components/Home/SecondaryNavigation.js
'use client';

import React from 'react';
import { useHome } from './HomeContext';
import styles from '../../styles/Home.module.scss';

const SecondaryNavigation = () => {
  const { 
    activeTab, 
    secondaryTab, 
    setSecondaryTab, 
    momentConnectionTabs 
  } = useHome();

  if (activeTab !== 'moment-connection') return null;
  
  return (
    <div className={styles.topNav}>
      {momentConnectionTabs.map((tab) => (
        <div 
          key={tab.id} 
          className={`${styles.navButton} ${secondaryTab === tab.id ? styles.active : ''}`} 
          onClick={() => setSecondaryTab(tab.id)}
        >
          {tab.text}
        </div>
      ))}
    </div>
  );
};

export default SecondaryNavigation;