import React from 'react';
import { HomeProvider } from './HomeContext';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import WelcomeMsg from './WelcomeMsg';
import '../../styles/Home.css';
import { useHome } from './HomeContext';

const HomeContent = () => {
  const { darkMode, showConnectionPage } = useHome();

  return (
    <div className={`container ${darkMode ? 'darkMode' : ''}`}>
      <Sidebar />
      {showConnectionPage ? <MainContent /> : <WelcomeMsg />}
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