'use client';
import React from 'react';
import Module1_1 from './unit1-modules/Module1_1';
import Module1_2 from './unit1-modules/Module1_2';
import Module1_3 from './unit1-modules/Module1_3';
import Module1_4 from './unit1-modules/Module1_4';
import Module1_5 from './unit1-modules/Module1_5';
import Module1_6 from './unit1-modules/Module1_6';
import Module1_7 from './unit1-modules/Module1_7';
import Module1_8 from './unit1-modules/Module1_8';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Proof Techniques',
    'Alphabets and Strings',
    'Language Operations',
    'Finite State Machines',
    'DFA and NFA',
    'Transition Diagrams',
    'Regular Expressions',
    'Pumping Lemma'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module1_1 />;
      case 2:
        return <Module1_2 />;
      case 3:
        return <Module1_3 />;
      case 4:
        return <Module1_4 />;
      case 5:
        return <Module1_5 />;
      case 6:
        return <Module1_6 />;
      case 7:
        return <Module1_7 />;
      case 8:
        return <Module1_8 />;
      default:
        return <div>Module not found</div>;
    }
  };

  return (
    <div className="unit-container">
      {renderModule()}
      <div className="navigation-buttons" style={{ marginTop: '40px', marginBottom: '40px' }}>
        {currentModule > 1 && (
          <button onClick={() => setCurrentModule(currentModule - 1)} className="prev-module-btn" style={{ fontWeight: 'bold' }}>
            ← {moduleNames[currentModule - 2]}
          </button>
        )}
        {currentModule < 8 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit1; 
