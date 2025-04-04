import React, { useState, useRef, useEffect } from 'react';
import '../../styles/ConnectionDesigner.css';

const ViewPort = () => {
  const [viewSettings, setViewSettings] = useState({
    showModel: true,
    showBeam: true,
    showColumn: true,
    showEndPlate: true
  });
  
  const [viewportHeight, setViewportHeight] = useState('100%');
  const viewportRef = useRef(null);
  const resizeBarRef = useRef(null);
  const upperViewRef = useRef(null);
  const lowerViewRef = useRef(null);
  
  const [isResizing, setIsResizing] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [upperHeight, setUpperHeight] = useState('50%');
  const [lowerHeight, setLowerHeight] = useState('50%');

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      
      const viewportRect = viewportRef.current.getBoundingClientRect();
      let newUpperHeight = ((e.clientY - viewportRect.top) / viewportRect.height) * 100;
      
      // Set limits for resize
      newUpperHeight = Math.max(20, Math.min(80, newUpperHeight));
      
      setUpperHeight(`${newUpperHeight}%`);
      setLowerHeight(`${100 - newUpperHeight}%`);
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
    };
    
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleResizeStart = (e) => {
    setIsResizing(true);
    setInitialY(e.clientY);
    document.body.style.cursor = 'ns-resize';
  };

  const toggleView = (setting) => {
    setViewSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="viewPort" ref={viewportRef}>
      <div className="viewControls">
        <div className="viewButtons">
          <button className="viewButton">F</button>
          <button className="viewButton">T</button>
          <button className="viewButton">S</button>
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
      
      {/* Upper View - 3D Model */}
      <div 
        className="upperView"
        ref={upperViewRef}
        style={{ height: upperHeight }}
      >
        {/* 3D model would be rendered here */}
        <div className="coordinateSystem">
          <div className="xAxis"></div>
          <div className="yAxis"></div>
          <div className="zAxis"></div>
        </div>
      </div>
      
      {/* Resize handle */}
      <div 
        className="viewportResizeBar"
        ref={resizeBarRef}
        onMouseDown={handleResizeStart}
      >
        <div className="resizeHandle"></div>
      </div>
      
      {/* Lower View - 2D Details or Controls */}
      <div 
        className="lowerView"
        ref={lowerViewRef}
        style={{ height: lowerHeight }}
      >
        <div className="lowerViewContent">
          {/* 2D view or additional controls would be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default ViewPort;