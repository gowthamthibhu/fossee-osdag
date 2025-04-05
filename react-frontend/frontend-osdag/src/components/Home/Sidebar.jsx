import React from 'react';
import { useHome } from './HomeContext';
import '../../styles/Home.css';

const SidebarButton = ({ icon, text, selected, onClick }) => {
  return (
    <div className={`sidebarButton ${selected ? 'selected' : ''}`} onClick={onClick}>
      <i className={icon}></i>
      <span>{text}</span>
    </div> 
  );
};

const Sidebar = () => {
  const { 
    darkMode, 
    toggleDarkMode, 
    sidebarMenuItems, 
    setShowConnectionPage, 
    setSelectedSidebar, 
    fetchNavigationData // Access fetchNavigationData from useHome
  } = useHome();

  const handleSidebarClick = (item) => {
    setSelectedSidebar(item.text);
    const isConnection = item.id === 'connection-side';
    setShowConnectionPage(isConnection);

    // Notify backend when "Connection" is clicked
    if (isConnection) {
      fetch('http://127.0.0.1:8000/api/connection-selected/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: 'connection' }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Backend response:", data);
          if (data.message === "Connection page acknowledged by backend.") {
            fetchNavigationData(); // Fetch updated data from the backend
          }
        })
        .catch((error) => console.error("Error notifying backend:", error));
    }
  };

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
            onClick={() => handleSidebarClick(item)}
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