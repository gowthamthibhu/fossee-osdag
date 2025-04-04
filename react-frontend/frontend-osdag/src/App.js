import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import BeamToColumnConnection from './components/BeamToColumnConnection';
import './styles/global.css'; 

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/BeamToColumnConnection" element={<BeamToColumnConnection />} />
      </Routes>
  );
}

export default App;