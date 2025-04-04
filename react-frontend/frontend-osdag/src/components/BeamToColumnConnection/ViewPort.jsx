import React, { useState } from 'react';
import '../../styles/ConnectionDesigner.css';

const ViewPort = () => {
  const [viewSettings, setViewSettings] = useState({
    showModel: true,
    showBeam: true,
    showColumn: true,
    showEndPlate: true
  });

  const toggleView = (setting) => {
    setViewSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="viewPort">
      <div className="viewControls">
        <div className="axisIcons">
          <div className="axisIcon"></div>
          <div className="axisIcon"></div>
          <div className="axisIcon"></div>
        </div>
        <div className="viewCheckboxes">
          {Object.entries({
            showModel: 'Model',
            showBeam: 'Beam',
            showColumn: 'Column',
            showEndPlate: 'End Plate'
          }).map(([key, label]) => (
            <label key={key}>
              <input 
                type="checkbox" 
                checked={viewSettings[key]} 
                onChange={() => toggleView(key)}
              /> 
              {label}
            </label>
          ))}
        </div>
      </div>
      <div className="modelView">
        {/* 3D model would be rendered here */}
        <div className="coordinateSystem">
          <div className="xAxis"></div>
          <div className="yAxis"></div>
          <div className="zAxis"></div>
        </div>
        
        {/* In a real app, we would conditionally render models based on viewSettings */}
        {/* Example: 
          {viewSettings.showBeam && <BeamModel />}
          {viewSettings.showColumn && <ColumnModel />}
          etc.
        */}
      </div>
    </div>
  );
};

export default ViewPort;