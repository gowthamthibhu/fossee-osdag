import React from 'react';
import { HomeProvider } from './HomeContext';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import '../../styles/Home.css';
import { useHome } from './HomeContext';

const HomeContent = () => {
  const { darkMode } = useHome();
  
  return (
    <div className={`container ${darkMode ? 'darkMode' : ''}`}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

const Home = () => {
  return ( 
    <HomeProvider>
      <HomeContent />
    </HomeProvider>
  );
};

export default Home;