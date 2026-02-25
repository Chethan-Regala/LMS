'use client';
import React from 'react';
import Module2_1 from './unit2-modules/Module2_1';
import Module2_2 from './unit2-modules/Module2_2';
import Module2_3 from './unit2-modules/Module2_3';
import Module2_4 from './unit2-modules/Module2_4';
import Module2_5 from './unit2-modules/Module2_5';
import Module2_6 from './unit2-modules/Module2_6';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Regular Expressions',
    'Identities & Algebraic Laws',
    'Pumping Lemma',
    'Closure Properties',
    'Decision Properties',
    'Minimization of FA'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module2_1 />;
      case 2:
        return <Module2_2 />;
      case 3:
        return <Module2_3 />;
      case 4:
        return <Module2_4 />;
      case 5:
        return <Module2_5 />;
      case 6:
        return <Module2_6 />;
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
        {currentModule < moduleNames.length && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit2;