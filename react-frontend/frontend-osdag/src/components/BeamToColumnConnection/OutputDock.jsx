import React from 'react';
import '../../styles/ConnectionDesigner.css';
import { useConnection } from './ConnectionContext';
import FormSection from './FormSection';
import NumberField from './formFields/NumberField';

const OutputDock = () => {
  const { 
    designResults,
  } = useConnection();

  const { criticalBolt, detailing } = designResults;

  const handleCreateReport = () => {
    console.log('Creating design report...');
    // Logic to generate report
  };

  const handleSaveOutput = () => {
    console.log('Saving output...');
    // Logic to save output
  };

  return (
    <div className="outputDock">
      <h2>Output Dock</h2>
      
      <FormSection title="Critical Bolt Design">
        <NumberField
          label="Diameter (mm)"
          value={criticalBolt.diameter}
          disabled={true}
        />
        
        <div className="formGroup">
          <label>Property Class</label>
          <input type="text" value={criticalBolt.propertyClass || ''} disabled />
        </div>
        
        <NumberField
          label="Shear Demand (kN)"
          value={criticalBolt.shearDemand}
          disabled={true}
        />
        
        <NumberField
          label="Shear Capacity (kN)"
          value={criticalBolt.shearCapacity}
          disabled={true}
        />
        
        <NumberField
          label="Bearing Capacity (kN)"
          value={criticalBolt.bearingCapacity}
          disabled={true}
        />
        
        <NumberField
          label="Bolt Capacity"
          value={criticalBolt.boltCapacity}
          disabled={true}
        />
        
        <NumberField
          label="Tension Due to Moment (kN)"
          value={criticalBolt.tensionDueMoment}
          disabled={true}
        />
        
        <NumberField
          label="Prying Force (kN)"
          value={criticalBolt.pryingForce}
          disabled={true}
        />
        
        <NumberField
          label="Tension Demand (kN)"
          value={criticalBolt.tensionDemand}
          disabled={true}
        />
        
        <NumberField
          label="Tension Capacity (kN)"
          value={criticalBolt.tensionCapacity}
          disabled={true}
        />
        
        <NumberField
          label="Combined Capacity IR"
          value={criticalBolt.combinedCapacityIR}
          disabled={true}
        />
      </FormSection>

      <FormSection title="Detailing">
        <NumberField
          label="No. of Bolts"
          value={detailing.numBolts}
          disabled={true}
        />
        
        <NumberField
          label="No. of Columns"
          value={detailing.numColumns}
          disabled={true}
        />
        
        <NumberField
          label="No. of Rows"
          value={detailing.numRows}
          disabled={true}
        />
        
        <NumberField
          label="Pitch Distance (mm)"
          value={detailing.pitchDistance}
          disabled={true}
        />
        
        <NumberField
          label="Gauge Distance (mm)"
          value={detailing.gaugeDistance}
          disabled={true}
        />
        
        <NumberField
          label="Cross-centre Gauge (mm)"
          value={detailing.crossCentreGauge}
          disabled={true}
        />
      </FormSection>

      <div className="buttonGroup">
        <button 
          className="reportButton" 
          onClick={handleCreateReport}
        >
          Create Design Report
        </button>
        <button 
          className="saveButton"
          onClick={handleSaveOutput}
        >
          Save Output
        </button>
      </div>
    </div>
  );
};

export default OutputDock;