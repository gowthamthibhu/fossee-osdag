import React from 'react';
import '../../styles/ConnectionDesigner.css';
import { useConnection } from './ConnectionContext';
import FormSection from './FormSection';
import SelectField from './formFields/SelectField';
import NumberField from './formFields/NumberField';

const InputDock = () => {
  const {
    connectionType,
    setConnectionType,
    endPlateType,
    setEndPlateType,
    material,
    setMaterial,
    boltType,
    setBoltType,
    columnSection,
    setColumnSection,
    beamSection,
    setBeamSection,
    loads,
    updateLoads,
    boltSettings,
    updateBoltSettings,
    performDesign,
    resetInputs
  } = useConnection();

  return (
    <div className="inputDock">
      <h2>Input Dock</h2>
      
      <FormSection title="Connecting Members">
        <SelectField
          label="Connectivity"
          value={connectionType}
          onChange={(e) => setConnectionType(e.target.value)}
          options={[
            'Column Flange-Beam Web',
            'Column Web-Beam Web',
            'Column Flange-Beam Flange'
          ]}
        />
        
        <SelectField
          label="End Plate Type"
          value={endPlateType}
          onChange={(e) => setEndPlateType(e.target.value)}
          options={[
            'Flushed - Reversible Moment',
            'Extended - One Way',
            'Extended - Both Ways'
          ]}
        />

        <SelectField
          label="Column Section *"
          value={columnSection}
          onChange={(e) => setColumnSection(e.target.value)}
          options={['Select Section']}
          required
        />

        <SelectField
          label="Beam Section *"
          value={beamSection}
          onChange={(e) => setBeamSection(e.target.value)}
          options={['Select Section']}
          required
        />

        <SelectField
          label="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          options={[
            'E 250 (Fe 410 WA)',
            'E 350 (Fe 490)',
            'E 410 (Fe 540)'
          ]}
        />
      </FormSection>

      <FormSection title="Factored Loads">
        <NumberField
          label="Bending Moment (kNm)"
          value={loads.bendingMoment}
          onChange={(e) => updateLoads('bendingMoment', e.target.value)}
        />
        
        <NumberField
          label="Shear Force (kN)"
          value={loads.shearForce}
          onChange={(e) => updateLoads('shearForce', e.target.value)}
        />
        
        <NumberField
          label="Axial Force (kN)"
          value={loads.axialForce}
          onChange={(e) => updateLoads('axialForce', e.target.value)}
        />
      </FormSection>

      <FormSection title="Bolt">
        <SelectField
          label="Diameter (mm)"
          value={boltSettings.diameter}
          onChange={(e) => updateBoltSettings('diameter', e.target.value)}
          options={['All', '16', '20', '24']}
        />
        
        <SelectField
          label="Type"
          value={boltType}
          onChange={(e) => setBoltType(e.target.value)}
          options={['Bearing Bolt', 'Friction Bolt']}
        />
        
        <SelectField
          label="Property Class"
          value={boltSettings.propertyClass}
          onChange={(e) => updateBoltSettings('propertyClass', e.target.value)}
          options={['All', '4.6', '8.8', '10.9']}
        />
      </FormSection>

      <FormSection title="End Plate">
        {/* End plate fields would go here */}
      </FormSection>

      <div className="buttonGroup">
        <button 
          className="resetButton"
          onClick={resetInputs}
        >
          Reset
        </button>
        <button 
          className="designButton"
          onClick={performDesign}
        >
          Design
        </button>
      </div>
    </div>
  );
};

export default InputDock;