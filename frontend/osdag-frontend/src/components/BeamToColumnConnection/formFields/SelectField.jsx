// components/ConnectionDesigner/formFields/SelectField.js
import React from 'react';
import styles from '../../../styles/ConnectionDesigner.module.scss';

const SelectField = ({ label, value, onChange, options, required = false }) => {
  return (
    <div className={styles.formGroup}>
      <label>{label}{required && ' *'}</label>
      <select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;