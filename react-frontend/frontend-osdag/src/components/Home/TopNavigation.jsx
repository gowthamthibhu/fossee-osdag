import React from 'react';
import { useHome } from './HomeContext';
import '../../styles/Home.css';

const NavButton = ({ id, icon, text, active, onClick }) => {
  return (
    <div 
      className={`navButton ${active ? 'active' : ''}`} 
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
    <div className="topNav">
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