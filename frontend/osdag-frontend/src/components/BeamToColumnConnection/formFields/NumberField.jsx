// components/ConnectionDesigner/formFields/NumberField.js
import React from 'react';
import styles from '../../../styles/ConnectionDesigner.module.scss';

const NumberField = ({ label, value, onChange, disabled = false }) => {
  const sanitizedValue = value || ''; // Provide an empty string as the default value if value is null
  return (
    <div className={styles.formGroup}>
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