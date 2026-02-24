'use client';
import React from 'react';
import Module3_1 from './unit3-modules/Module3_1';
import Module3_2 from './unit3-modules/Module3_2';
import Module3_3 from './unit3-modules/Module3_3';
import Module3_4 from './unit3-modules/Module3_4';
import Module3_5 from './unit3-modules/Module3_5';
import Module3_6 from './unit3-modules/Module3_6';
import Module3_7 from './unit3-modules/Module3_7';
import Module3_8 from './unit3-modules/Module3_8';
import Module3_9 from './unit3-modules/Module3_9';
import Module3_10 from './unit3-modules/Module3_10';
import Module3_11 from './unit3-modules/Module3_11';
import Module3_12 from './unit3-modules/Module3_12';
import Module3_13 from './unit3-modules/Module3_13';
import Module3_14 from './unit3-modules/Module3_14';
import Module3_15 from './unit3-modules/Module3_15';
import Module3_16 from './unit3-modules/Module3_16';
import Module3_17 from './unit3-modules/Module3_17';
import Module3_18 from './unit3-modules/Module3_18';
import Module3_19 from './unit3-modules/Module3_19';
import Module3_20 from './unit3-modules/Module3_20';
import Module3_21 from './unit3-modules/Module3_21';
import Module3_22 from './unit3-modules/Module3_22';
import CompletionButton from '@/components/CompletionButton';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Introduction to Stacks',
    'Introduction to Queues & Deques',
    'Assignment | Infix to Postfix Conversion',
    'Assignment | Infix to Prefix Conversion',
    'Evaluate Reverse Polish Notation (Optional)',
    'Assignment | Infix to Postfix Conversion (Optional)',
    'Basic Calculator (Optional)',
    'Assignment | Balancing Symbols',
    'Valid Parentheses (Optional)',
    'Next Greater Element I (Optional)',
    'Tower of Hanoi',
    'Introduction to Singly Linked list',
    'Assignment | Design a Linked List',
    'Merge Two Sorted Lists (Optional)',
    'Palindrome Linked List (Optional)',
    'Assignment | Reverse a Linked List',
    'The Slow & Fast Pointer Pattern',
    'Middle of the Linked List (Optional)',
    'Remove Nth Node From End of List (Optional)',
    'Assignment | Linked List Cycle Detection',
    'Hands-on | GPS Navigation',
    'Clash of Codes #2 | Stacks, Queues & Linked Lists'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module3_1 />;
      case 2: return <Module3_2 />;
      case 3: return <Module3_3 />;
      case 4: return <Module3_4 />;
      case 5: return <Module3_5 />;
      case 6: return <Module3_6 />;
      case 7: return <Module3_7 />;
      case 8: return <Module3_8 />;
      case 9: return <Module3_9 />;
      case 10: return <Module3_10 />;
      case 11: return <Module3_11 />;
      case 12: return <Module3_12 />;
      case 13: return <Module3_13 />;
      case 14: return <Module3_14 />;
      case 15: return <Module3_15 />;
      case 16: return <Module3_16 />;
      case 17: return <Module3_17 />;
      case 18: return <Module3_18 />;
      case 19: return <Module3_19 />;
      case 20: return <Module3_20 />;
      case 21: return <Module3_21 />;
      case 22: return <Module3_22 />;
      default: return <div>Module not found</div>;
    }
  };

  return (
    <div className="unit-container">
      {renderModule()}
      <CompletionButton
        subject="DS"
        unitId={3}
        moduleId={currentModule}
      />
      <div className="navigation-buttons" style={{ marginTop: '40px', marginBottom: '40px' }}>
        {currentModule > 1 && (
          <button onClick={() => setCurrentModule(currentModule - 1)} className="prev-module-btn" style={{ fontWeight: 'bold' }}>
            ← {moduleNames[currentModule - 2]}
          </button>
        )}
        {currentModule < 22 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit3;
