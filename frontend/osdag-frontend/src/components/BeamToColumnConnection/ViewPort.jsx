// components/ConnectionDesigner/ViewPort.js
import React, { useState } from 'react';
import styles from '../../styles/ConnectionDesigner.module.scss';

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
    <div className={styles.viewPort}>
      <div className={styles.viewControls}>
        <div className={styles.axisIcons}>
          <div className={styles.axisIcon}></div>
          <div className={styles.axisIcon}></div>
          <div className={styles.axisIcon}></div>
        </div>
        <div className={styles.viewCheckboxes}>
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
      <div className={styles.modelView}>
        {/* 3D model would be rendered here */}
        <div className={styles.coordinateSystem}>
          <div className={styles.xAxis}></div>
          <div className={styles.yAxis}></div>
          <div className={styles.zAxis}></div>
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