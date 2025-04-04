// components/Home/Sidebar.js
'use client';

import React from 'react';
import { useHome } from './HomeContext';
import styles from '../../styles/Home.module.scss';

const SidebarButton = ({ icon, text, selected }) => {
  return (
    <div className={`${styles.sidebarButton} ${selected ? styles.selected : ''}`}>
      <i className={icon}></i>
      <span>{text}</span>
    </div>
  );
};

const Sidebar = () => {
  const { darkMode, toggleDarkMode, sidebarMenuItems } = useHome();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Osdag</h2>
      </div>
      
      <div className={styles.sidebarMenu}>
        {sidebarMenuItems.map((item, index) => (
          <SidebarButton
            key={index}
            icon={item.icon}
            text={item.text}
            selected={item.selected}
          />
        ))}
      </div>
      
      <div className={styles.sidebarFooter}>
        <div className={styles.helpDropdown}>
          <i className="fas fa-question-circle"></i>
          <span>Help</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles.darkMode}>
          <span>Dark Mode</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;