import React from 'react';
import Home from './components/Home';
import './styles/ConnectionDesigner.css';
import { Routes, Route } from 'react-router-dom';
import BeamToColumnConnection from './components/BeamToColumnConnection';
import './styles/global.css'; 

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/BeamToColumnConnection" element={<BeamToColumnConnection />} />
      </Routes>
    </div>
  );
}

export default App;