import React from 'react';
import '../../../styles/ConnectionDesigner.css';

const NumberField = ({ label, value, onChange, disabled = false }) => {
  const sanitizedValue = value || ''; // Provide an empty string as the default value if value is null
  return (
    <div className="formGroup">
      <label>{label}</label>
      <input 
        type="number" 
        value={sanitizedValue} 
        onChange={onChange} 
        disabled={disabled} 
      />
    </div>
  );
};

export default NumberField;