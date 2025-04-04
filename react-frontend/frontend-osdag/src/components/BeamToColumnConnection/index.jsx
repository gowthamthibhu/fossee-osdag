import React from 'react';
import Header from './Header';
import InputDock from './InputDock';
import ViewPort from './ViewPort';
import OutputDock from './OutputDock';
import { ConnectionProvider } from './ConnectionContext';
import '../../styles/ConnectionDesigner.css';

export default function ConnectionDesigner() {
  return (
    <ConnectionProvider>
      <div className="connectionDesigner">
        <Header title="Beam-to-Column End Plate Connection" />
        <div className="mainContent">
          <InputDock />
          <ViewPort />
          <OutputDock />
        </div>
      </div>
    </ConnectionProvider>
  );
}