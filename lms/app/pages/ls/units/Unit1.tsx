'use client';
import React from 'react';
import Module1_1 from './unit1-modules/Module1_1';
import Module1_2 from './unit1-modules/Module1_2';
import Module1_3 from './unit1-modules/Module1_3';
import CompletionButton from '@/components/CompletionButton';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    "Overview of Linguistics and its Sub-fields",
    "Phonetics",
    "Phonology"
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module1_1 />;
      case 2: return <Module1_2 />;
      case 3: return <Module1_3 />;
      default: return <div>Module not found</div>;
    }
  };

  return (
    <div className="unit-container">
      {renderModule()}
      <CompletionButton
        subject="LS"
        unitId={1}
        moduleId={currentModule}
      />
      <div className="navigation-buttons" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <button
          onClick={currentModule === 1 ? onBack : () => setCurrentModule(currentModule - 1)}
          className="prev-module-btn"
          style={{ fontWeight: 'bold' }}
        >
          ← {currentModule === 1 ? 'Back to Overview' : moduleNames[currentModule - 2]}
        </button>
        {currentModule < 3 && (
          <button
            onClick={() => setCurrentModule(currentModule + 1)}
            className="next-module-btn"
            style={{ fontWeight: 'bold' }}
          >
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit1;
