import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/navigation-items/";

const HomeContext = createContext();

export function useHome() {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('useHome must be used within a HomeProvider');
  }
  return context;
}

export function HomeProvider({ children }) {
  // State management
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('shear-connection');
  const [secondaryTab, setSecondaryTab] = useState('beam-to-beam');
  const [loading, setLoading] = useState(false);

  // Navigation data state
  const [navigationData, setNavigationData] = useState({
    sidebarMenuItems: [],
    topNavTabs: [],
    momentConnectionTabs: [],
    connectionCards: {},
  });

  // Function to fetch navigation data from API
  const fetchNavigationData = async () => {
    try {
      setLoading(true);
      console.log("Fetching data from:", API_URL); 
      const response = await axios.get(API_URL);
      const data = response.data;
      console.log("Fetched data:", data); // Debugging line

      // Map the data to the required structure
      const sidebarMenuItems = data
        .filter(item => item.category === 'sidebarMenuItems')
        .map(item => ({
          icon: item.icon,
          text: item.text,
          selected: false, // Default value
        }));

      const topNavTabs = data
        .filter(item => item.category === 'topNavTabs')
        .map(item => ({
          id: item.id,
          icon: item.icon,
          text: item.text,
        }));

      const momentConnectionTabs = data
        .filter(item => item.category === 'momentConnectionTabs')
        .map(item => ({
          id: item.id,
          text: item.text,
        }));

        const connectionCards = {};
        data
          .filter(item => item.category === 'connectionCards')
          .forEach(item => {
            if (!connectionCards[item.parent_id]) {
              connectionCards[item.parent_id] = [];
            }
            connectionCards[item.parent_id].push({
              title: item.text,
              image: item.image || 'placeholder.png', // Use the actual image URL if available
            });
          });

      setNavigationData({ sidebarMenuItems, topNavTabs, momentConnectionTabs, connectionCards });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching navigation data:', error);
      setLoading(false);
    }
  };

  // Get appropriate connection cards based on active tabs
  const getCardsToDisplay = () => {
    if (activeTab === 'moment-connection' && secondaryTab) {
      return navigationData.connectionCards[secondaryTab] || [];
    } else {
      return navigationData.connectionCards[activeTab] || [];
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    fetchNavigationData();
  }, []);

  const value = {
    // State
    darkMode,
    setDarkMode,
    toggleDarkMode,
    activeTab,
    setActiveTab,
    secondaryTab,
    setSecondaryTab,
    loading,

    // Data
    navigationData,
    sidebarMenuItems: navigationData.sidebarMenuItems,
    topNavTabs: navigationData.topNavTabs,
    momentConnectionTabs: navigationData.momentConnectionTabs,

    // Functions
    fetchNavigationData,
    getCardsToDisplay,
  };

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
}