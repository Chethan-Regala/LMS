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
import Module1_9 from './unit1-modules/Module1_9';
import Module1_10 from './unit1-modules/Module1_10';
import Module1_11 from './unit1-modules/Module1_11';
import Module1_12 from './unit1-modules/Module1_12';
import Module1_13 from './unit1-modules/Module1_13';
import Module1_14 from './unit1-modules/Module1_14';
import Module1_15 from './unit1-modules/Module1_15';
import Module1_16 from './unit1-modules/Module1_16';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Introduction to DSA & Orientation',
    'Foundational Mathematics for DSA',
    'Foundational Mathematics for DSA - II',
    'Power of Two (Optional)',
    'Fizz Buzz (Optional)',
    'Time and space Complexity',
    'Deep Dive into Complexity Analysis',
    'Revisiting Arrays and Strings',
    'Running Sum of 1d Array (Optional)',
    'Richest Customer Wealth (Optional)',
    'Contains Duplicate (Optional)',
    'Valid Palindrome (Optional)',
    'Reverse String (Optional)',
    'Longest Common Prefix (Optional)',
    'Assignment | Sieve of Eratosthenes',
    'Count Primes (Optional)'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module1_1 />;
      case 2: return <Module1_2 />;
      case 3: return <Module1_3 />;
      case 4: return <Module1_4 />;
      case 5: return <Module1_5 />;
      case 6: return <Module1_6 />;
      case 7: return <Module1_7 />;
      case 8: return <Module1_8 />;
      case 9: return <Module1_9 />;
      case 10: return <Module1_10 />;
      case 11: return <Module1_11 />;
      case 12: return <Module1_12 />;
      case 13: return <Module1_13 />;
      case 14: return <Module1_14 />;
      case 15: return <Module1_15 />;
      case 16: return <Module1_16 />;
      default: return <div>Module not found</div>;
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
        {currentModule < 16 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit1;
