'use client';
import React from 'react';
import Module2_1 from './unit2-modules/Module2_1';
import Module2_2 from './unit2-modules/Module2_2';
import Module2_3 from './unit2-modules/Module2_3';
import Module2_4 from './unit2-modules/Module2_4';
import Module2_5 from './unit2-modules/Module2_5';
import Module2_6 from './unit2-modules/Module2_6';
import Module2_7 from './unit2-modules/Module2_7';
import Module2_8 from './unit2-modules/Module2_8';
import Module2_9 from './unit2-modules/Module2_9';
import Module2_10 from './unit2-modules/Module2_10';
import Module2_11 from './unit2-modules/Module2_11';
import Module2_12 from './unit2-modules/Module2_12';
import Module2_13 from './unit2-modules/Module2_13';
import Module2_14 from './unit2-modules/Module2_14';
import Module2_15 from './unit2-modules/Module2_15';
import Module2_16 from './unit2-modules/Module2_16';
import Module2_17 from './unit2-modules/Module2_17';
import Module2_18 from './unit2-modules/Module2_18';
import Module2_19 from './unit2-modules/Module2_19';
import Module2_20 from './unit2-modules/Module2_20';
import Module2_21 from './unit2-modules/Module2_21';
import Module2_22 from './unit2-modules/Module2_22';
import Module2_23 from './unit2-modules/Module2_23';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Introduction to Recursion',
    'Deep Dive into Recursion',
    'Letter combination of phone number (Optional)',
    'Fibonacci Number (Optional)',
    'Pow(x, n) (Optional)',
    'Hands-On | File Directory Scanner',
    'Subsequence Patterns in Recursion',
    'Introduction to Sorting & Merge Sort',
    'Sort an Array (Optional)',
    'Merge Sorted Array (Optional)',
    'Assignment | Kth largest element in an array (Optional)',
    'Assignment | Merge Sort',
    'Quick Sort Algorithm',
    'Assignment | Quick Sort',
    'Assignment | Sorting Algorithm Optimization',
    'The Two-Pointer Approach | Collision Pattern',
    'Two Sum II - Input Array Is Sorted (Optional)',
    'Container With Most Water (Optional)',
    '3 sum (Optional)',
    'The Sliding Window Pattern',
    'Longest Substring Without Repeating Characters (Optional)',
    'Assignment | Maximum Sum Subarray of Size K',
    'Clash of Codes #1 | Algorithm Essentials'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module2_1 />;
      case 2: return <Module2_2 />;
      case 3: return <Module2_3 />;
      case 4: return <Module2_4 />;
      case 5: return <Module2_5 />;
      case 6: return <Module2_6 />;
      case 7: return <Module2_7 />;
      case 8: return <Module2_8 />;
      case 9: return <Module2_9 />;
      case 10: return <Module2_10 />;
      case 11: return <Module2_11 />;
      case 12: return <Module2_12 />;
      case 13: return <Module2_13 />;
      case 14: return <Module2_14 />;
      case 15: return <Module2_15 />;
      case 16: return <Module2_16 />;
      case 17: return <Module2_17 />;
      case 18: return <Module2_18 />;
      case 19: return <Module2_19 />;
      case 20: return <Module2_20 />;
      case 21: return <Module2_21 />;
      case 22: return <Module2_22 />;
      case 23: return <Module2_23 />;
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
        {currentModule < 23 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit2;
