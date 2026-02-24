'use client';
import React from 'react';
import Module2_1 from './unit2-modules/Module2_1';
import Module2_2 from './unit2-modules/Module2_2';
import Module2_3 from './unit2-modules/Module2_3';
import CompletionButton from '@/components/CompletionButton';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    "Syntax and Syntactic Structures",
    "Semantics and Semantic Structures",
    "Language Typology"
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module2_1 />;
      case 2: return <Module2_2 />;
      case 3: return <Module2_3 />;
      default: return <div>Module not found</div>;
    }
  };

  return (
    <div className="unit-container">
      {renderModule()}
      <CompletionButton
        subject="LS"
        unitId={2}
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

export default Unit2;
