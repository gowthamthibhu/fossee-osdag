import React from 'react';
import { HomeProvider } from './HomeContext';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import '../../styles/Home.css';

const Home = () => {
  return ( 
    <HomeProvider>
      <div className="container">
        {/* React doesn't have the Head component, so we're removing it */}
        {/* You might need to add these in your public/index.html file */}
        <Sidebar />
        <MainContent />
      </div>
    </HomeProvider>
  );
};

export default Home;