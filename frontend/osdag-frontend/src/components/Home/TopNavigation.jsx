
// components/Home/TopNavigation.js
'use client';

import React from 'react';
import { useHome } from './HomeContext';
import styles from '../../styles/Home.module.scss';

const NavButton = ({ id, icon, text, active, onClick }) => {
  return (
    <div 
      className={`${styles.navButton} ${active ? styles.active : ''}`} 
      onClick={onClick}
    >
      {icon && <i className={icon}></i>}
      {text}
    </div>
  );
};

const TopNavigation = () => {
  const { activeTab, setActiveTab, topNavTabs } = useHome();

  console.log("Top navigation tabs:", topNavTabs); // Debugging line

  return (
    <div className={styles.topNav}>
      {topNavTabs.map((tab) => (
        <NavButton
          key={tab.id}
          id={tab.id}
          icon={tab.icon}
          text={tab.text}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        />
      ))}
    </div>
  );
};

export default TopNavigation;