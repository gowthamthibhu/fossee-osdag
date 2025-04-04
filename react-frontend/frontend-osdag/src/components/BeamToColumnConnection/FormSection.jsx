import React from 'react';
import '../../styles/ConnectionDesigner.css';

const FormSection = ({ title, children }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FormSection;