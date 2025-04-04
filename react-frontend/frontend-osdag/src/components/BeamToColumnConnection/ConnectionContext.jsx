import React, { createContext, useContext, useState } from 'react';
import '../../styles/ConnectionDesigner.css';

const ConnectionContext = createContext();

export function useConnection() {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('useConnection must be used within a ConnectionProvider');
  }
  return context;
}

export function ConnectionProvider({ children }) {
  // Input state
  const [connectionType, setConnectionType] = useState('Column Flange-Beam Web');
  const [endPlateType, setEndPlateType] = useState('Flushed - Reversible Moment');
  const [material, setMaterial] = useState('E 250 (Fe 410 WA)');
  const [boltType, setBoltType] = useState('Bearing Bolt');
  const [columnSection, setColumnSection] = useState('');
  const [beamSection, setBeamSection] = useState('');
  const [loads, setLoads] = useState({
    bendingMoment: '',
    shearForce: '',
    axialForce: ''
  });
  const [boltSettings, setBoltSettings] = useState({
    diameter: 'All',
    propertyClass: 'All'
  });

  // Output state (would be calculated after design)
  const [designResults, setDesignResults] = useState({
    criticalBolt: {
      diameter: null,
      propertyClass: null,
      shearDemand: null,
      shearCapacity: null,
      bearingCapacity: null,
      boltCapacity: null,
      tensionDueMoment: null,
      pryingForce: null,
      tensionDemand: null,
      tensionCapacity: null,
      combinedCapacityIR: null,
    },
    detailing: {
      numBolts: null,
      numColumns: null,
      numRows: null,
      pitchDistance: null,
      gaugeDistance: null,
      crossCentreGauge: null,
    }
  });

  // Form handling functions
  const updateLoads = (field, value) => {
    setLoads(prev => ({ ...prev, [field]: value }));
  };

  const updateBoltSettings = (field, value) => {
    setBoltSettings(prev => ({ ...prev, [field]: value }));
  };

  // Design calculation function
  const performDesign = () => {
    // This would contain the actual design logic
    // For now, we'll just show a placeholder calculation
    console.log('Performing design with current inputs');
    
    // Example - in a real app this would be actual calculations
    const sampleResults = {
      criticalBolt: {
        diameter: 20,
        propertyClass: '8.8',
        shearDemand: 20.5,
        shearCapacity: 45.2,
        bearingCapacity: 82.6,
        boltCapacity: 45.2,
        tensionDueMoment: 56.8,
        pryingForce: 12.3,
        tensionDemand: 69.1,
        tensionCapacity: 91.7,
        combinedCapacityIR: 0.85,
      },
      detailing: {
        numBolts: 8,
        numColumns: 2,
        numRows: 4,
        pitchDistance: 70,
        gaugeDistance: 140,
        crossCentreGauge: 140,
      }
    };
    
    setDesignResults(sampleResults);
  };

  // Reset function
  const resetInputs = () => {
    setConnectionType('Column Flange-Beam Web');
    setEndPlateType('Flushed - Reversible Moment');
    setMaterial('E 250 (Fe 410 WA)');
    setBoltType('Bearing Bolt');
    setColumnSection('');
    setBeamSection('');
    setLoads({
      bendingMoment: '',
      shearForce: '',
      axialForce: ''
    });
    setBoltSettings({
      diameter: 'All',
      propertyClass: 'All'
    });
    setDesignResults({
      criticalBolt: {
        diameter: null,
        propertyClass: null,
        shearDemand: null,
        shearCapacity: null,
        bearingCapacity: null,
        boltCapacity: null,
        tensionDueMoment: null,
        pryingForce: null,
        tensionDemand: null,
        tensionCapacity: null,
        combinedCapacityIR: null,
      },
      detailing: {
        numBolts: null,
        numColumns: null,
        numRows: null,
        pitchDistance: null,
        gaugeDistance: null,
        crossCentreGauge: null,
      }
    });
  };

  const value = {
    // Input states
    connectionType,
    setConnectionType,
    endPlateType,
    setEndPlateType,
    material,
    setMaterial,
    boltType,
    setBoltType,
    columnSection,
    setColumnSection,
    beamSection,
    setBeamSection,
    loads,
    updateLoads,
    boltSettings,
    updateBoltSettings,
    
    // Output state
    designResults,
    
    // Actions
    performDesign,
    resetInputs
  };

  return (
    <ConnectionContext.Provider value={value}>
      {children}
    </ConnectionContext.Provider>
  );
}