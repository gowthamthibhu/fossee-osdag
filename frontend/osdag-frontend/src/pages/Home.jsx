'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import styles from '../styles/Home.module.scss';


const API_URL = "http://127.0.0.1:8000/api/beam-to-column/";



// Sidebar menu items configuration
const sidebarMenuItems = [
  { icon: 'fas fa-link', text: 'Connection', selected: true },
  { icon: 'fas fa-weight-hanging', text: 'Tension Member' },
  { icon: 'fas fa-compress-arrows-alt', text: 'Compression Member' },
  { icon: 'fas fa-exchange-alt', text: 'Flexural Member' },
  { icon: 'fas fa-columns', text: 'Beam-Column' },
  { icon: 'fas fa-ruler-horizontal', text: 'Plate Girder' },
  { icon: 'fas fa-sitemap', text: 'Truss' },
  { icon: 'fas fa-border-all', text: '2D Frame' },
  { icon: 'fas fa-cube', text: '3D Frame' },
  { icon: 'fas fa-object-group', text: 'Group Design' },
];

// Top navigation tabs configuration
const topNavTabs = [
  { id: 'shear-connection', icon: 'fas fa-cut', text: 'Shear Connection' },
  { id: 'moment-connection', icon: 'fas fa-sync-alt', text: 'Moment Connection' },
  { id: 'base-plate', icon: 'fas fa-square', text: 'Base Plate' },
  { id: 'truss-connection', icon: 'fas fa-project-diagram', text: 'Truss Connection' },
];

// Secondary navigation tabs for moment connection
const momentConnectionTabs = [
  { id: 'beam-to-beam', text: 'Beam-to-Beam Splice' },
  { id: 'beam-to-column', text: 'Beam-to-Column' },
  { id: 'column-to-column', text: 'Column-to-Column Splice' },
  { id: 'peb', text: 'PEB' },
];

// Connection card configurations
const connectionCards = {
  'shear-connection': [
    { title: 'Fin Plate', image: 'placeholder.png' },
    { title: 'Cleat Angle', image: 'placeholder.png' },
    { title: 'End Plate', image: 'placeholder.png' },
    { title: 'Seated Angle', image: 'placeholder.png' },
  ],
  'moment-connection': {
    'beam-to-beam': [
      { title: 'Cover Plate Bolted', image: 'placeholder.png' },
      { title: 'Cover Plate Welded', image: 'placeholder.png' },
      { title: 'End Plate', image: 'placeholder.png' },
    ],
    'beam-to-column': [
      { title: 'End Plate', image: 'placeholder.png' },
    ],
    'column-to-column': [
      { title: 'Cover Plate Bolted', image: 'placeholder.png' },
      { title: 'Cover Plate Welded', image: 'placeholder.png' },
      { title: 'End Plate', image: 'placeholder.png' },
    ],
    'peb': [
      { title: 'PEB Connection 1', image: 'placeholder.png' },
      { title: 'PEB Connection 2', image: 'placeholder.png' },
    ],
  },
  'base-plate': [
    { title: 'Base Plate 1', image: 'placeholder.png' },
    { title: 'Base Plate 2', image: 'placeholder.png' },
    { title: 'Base Plate 3', image: 'placeholder.png' },
    { title: 'Base Plate 4', image: 'placeholder.png' },
  ],
  'truss-connection': [
    { title: 'Truss Connection 1', image: 'placeholder.png' },
    { title: 'Truss Connection 2', image: 'placeholder.png' },
    { title: 'Truss Connection 3', image: 'placeholder.png' },
    { title: 'Truss Connection 4', image: 'placeholder.png' },
  ],
};

// Sidebar component
const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Osdag</h2>
      </div>
      
      <div className={styles.sidebarMenu}>
        {sidebarMenuItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.sidebarButton} ${item.selected ? styles.selected : ''}`}
          >
            <i className={item.icon}></i>
            <span>{item.text}</span>
          </div>
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
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

// Top Navigation component
const TopNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.topNav}>
      {topNavTabs.map((tab) => (
        <div 
          key={tab.id} 
          className={`${styles.navButton} ${activeTab === tab.id ? styles.active : ''}`} 
          onClick={() => setActiveTab(tab.id)}
        >
          <i className={tab.icon}></i>
          {tab.text}
        </div>
      ))}
    </div>
  );
};

// Secondary Navigation component for moment connection
const SecondaryNavigation = ({ activeTab, secondaryTab, setSecondaryTab }) => {
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

// Connection Card component
const ConnectionCard = ({ title, image }) => {
  return (
    <div className={styles.connectionCard}>
      <h3>{title}</h3>
      <div className={styles.connectionImage}>
        <img src={image} alt={title}/>
        <div className={styles.radioContainer}>
          <label className={styles.radio}>
            <input type="radio" name="connection-type"/>
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

// Connection Grid component
const ConnectionGrid = ({ activeTab, secondaryTab }) => {
  let cardsToDisplay = [];
  
  if (activeTab === 'moment-connection' && secondaryTab) {
    cardsToDisplay = connectionCards[activeTab][secondaryTab] || [];
  } else {
    cardsToDisplay = connectionCards[activeTab] || [];
  }
  
  return (
    <div className={styles.connectionGrid}>
      {cardsToDisplay.map((card, index) => (
        <ConnectionCard key={index} title={card.title} image={card.image} />
      ))}
    </div>
  );
};


const StartButton = ({ onDataLoaded }) => {
  const handleClick = async () => {
    try {
      const response = await axios.get(API_URL); // Fetch data from the API
      onDataLoaded(response.data); // Pass the data to the parent component
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.startButtonContainer}>
      <button className={styles.startButton} onClick={handleClick}>
        <i className="fas fa-play"></i>
        Start
      </button>
    </div>
  );
};

// Main component
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('shear-connection');
  const [secondaryTab, setSecondaryTab] = useState('beam-to-beam');

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <Head>
        <title>Osdag</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      
      {/* Left sidebar */}
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Main content area */}
      <div className={styles.mainContent}>
        {/* Top navigation */}
        <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Secondary navigation for moment connection */}
        <SecondaryNavigation 
          activeTab={activeTab} 
          secondaryTab={secondaryTab} 
          setSecondaryTab={setSecondaryTab} 
        />
        
        {/* Connection types grid */}
        <ConnectionGrid activeTab={activeTab} secondaryTab={secondaryTab} />
        
      </div>
    </div>
  );
};

export default Home;