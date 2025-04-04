import React from 'react';
import { useHome } from './HomeContext';
import '../../styles/Home.css';

const SidebarButton = ({ icon, text, selected }) => {
  return (
    <div className={`sidebarButton ${selected ? 'selected' : ''}`}>
      <i className={icon}></i>
      <span>{text}</span>
    </div> 
  );
};

const Sidebar = () => {
  const { darkMode, toggleDarkMode, sidebarMenuItems } = useHome();

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Osdag</h2>
      </div>
      
      <div className="sidebarMenu">
        {sidebarMenuItems.map((item, index) => (
          <SidebarButton
            key={index}
            icon={item.icon}
            text={item.text}
            selected={item.selected}
          />
        ))}
      </div>
      
      <div className="sidebarFooter">
        <div className="helpDropdown">
          <i className="fas fa-question-circle"></i>
          <span>Help</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="darkMode">
          <span>Dark Mode</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className={`slider round`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;