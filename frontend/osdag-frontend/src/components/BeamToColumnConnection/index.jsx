// components/ConnectionDesigner/index.js
'use client';

import React from 'react';
import Header from './Header';
import InputDock from './InputDock';
import ViewPort from './ViewPort';
import OutputDock from './OutputDock';
import { ConnectionProvider } from './ConnectionContext';
import styles from '../../styles/ConnectionDesigner.module.scss';

export default function ConnectionDesigner() {
  return (
    <ConnectionProvider>
      <div className={styles.connectionDesigner}>
        <Header title="Beam-to-Column End Plate Connection" />
        <div className={styles.mainContent}>
          <InputDock />
          <ViewPort />
          <OutputDock />
        </div>
      </div>
    </ConnectionProvider>
  );
}