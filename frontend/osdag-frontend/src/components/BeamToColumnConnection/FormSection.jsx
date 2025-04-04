// components/ConnectionDesigner/FormSection.js
import React from 'react';
import styles from '../../styles/ConnectionDesigner.module.scss';

const FormSection = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FormSection;