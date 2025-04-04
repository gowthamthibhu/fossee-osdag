import React from 'react';
import { useHome } from './HomeContext';
import '../../styles/Home.css';

const SecondaryNavigation = () => {
  const { 
    activeTab, 
    secondaryTab, 
    setSecondaryTab, 
    momentConnectionTabs 
  } = useHome();
 
  if (activeTab !== 'moment-connection') return null;
  
  return (
    <div className="topNav">
      {momentConnectionTabs.map((tab) => (
        <div 
          key={tab.id} 
          className={`navButton ${secondaryTab === tab.id ? 'active' : ''}`} 
          onClick={() => setSecondaryTab(tab.id)}
        >
          {tab.text}
        </div>
      ))}
    </div>
  );
};

export default SecondaryNavigation;