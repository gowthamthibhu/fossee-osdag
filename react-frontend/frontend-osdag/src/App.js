import React, { useEffect } from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import BeamToColumnConnection from './components/BeamToColumnConnection';
import { HomeProvider, useHome } from './components/Home/HomeContext';
import './styles/global.css';

// Wrapper component that has access to the context
const AppContent = () => {
  const { darkMode } = useHome();
  
  // Apply dark mode class to the document body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BeamToColumnConnection" element={<BeamToColumnConnection />} />
    </Routes>
  );
};

function App() {
  return (
    <HomeProvider>
      <AppContent />
    </HomeProvider>
  );
}

export default App;