// components/Home/ConnectionGrid.js
'use client';

import React from 'react';
import { useHome } from './HomeContext';
import ConnectionCard from './ConnectionCard';
import styles from '../../styles/Home.module.scss';

const ConnectionGrid = () => {
  const { getCardsToDisplay } = useHome();
  const cardsToDisplay = getCardsToDisplay();

  return (
    <div className={styles.connectionGrid}>
      {cardsToDisplay.map((card, index) => (
        <ConnectionCard 
          key={index} 
          title={card.title} 
          image={card.image} 
        />
      ))}
    </div>
  );
};

export default ConnectionGrid;