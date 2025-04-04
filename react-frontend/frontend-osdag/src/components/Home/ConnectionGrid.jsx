import React from 'react';
import { useHome } from './HomeContext';
import ConnectionCard from './ConnectionCard';
import '../../styles/Home.css';

const ConnectionGrid = () => {
  const { getCardsToDisplay } = useHome();
  const cardsToDisplay = getCardsToDisplay();

  return ( 
    <div className="connectionGrid">
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