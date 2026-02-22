'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface SidebarProps {
  selectedModule: string;
  onModuleSelect: (unitId: number, moduleId: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedModule, onModuleSelect, isOpen, onClose }) => {
  const { data: session } = useSession();
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (session?.user?.email) {
      fetchProgress();
    }
  }, [session]);

  const fetchProgress = async () => {
    try {
      const res = await fetch(`/api/progress?userEmail=${session?.user?.email}&subject=DS`);
      const data = await res.json();
      if (data.success) {
        const completed = new Set<string>(
          data.data
            .filter((p: any) => p.completed)
            .map((p: any) => `${p.unitId}.${p.moduleId}`)
        );
        setCompletedModules(completed);
      }
    } catch (error) {
      console.error('Failed to fetch progress:', error);
    }
  };
  const units = [
    {
      id: 1,
      title: 'Foundations of DSA',
      modules: [
        'Introduction to DSA & Orientation',
        'Foundational Mathematics for DSA',
        'Foundational Mathematics for DSA - II',
        'Power of Two',
        'Fizz Buzz',
        'Time and space Complexity',
        'Deep Dive into Complexity Analysis',
        'Revisiting Arrays and Strings',
        'Running Sum of 1d Array',
        'Richest Customer Wealth',
        'Contains Duplicate',
        'Valid Palindrome',
        'Reverse String',
        'Longest Common Prefix',
        'Assignment | Sieve of Eratosthenes',
        'Count Primes'
      ]
    },
    {
      id: 2,
      title: 'Algorithm Essentials',
      modules: [
        'Introduction to Recursion',
        'Deep Dive into Recursion',
        'Letter combination of phone number',
        'Fibonacci Number',
        'Pow(x, n)',
        'Hands-On | File Directory Scanner',
        'Subsequence Patterns in Recursion',
        'Introduction to Sorting & Merge Sort',
        'Sort an Array',
        'Merge Sorted Array',
        'Assignment | Kth largest element in an array',
        'Assignment | Merge Sort',
        'Quick Sort Algorithm',
        'Assignment | Quick Sort',
        'Assignment | Sorting Algorithm Optimization',
        'The Two-Pointer Approach | Collision Pattern',
        'Two Sum II - Input Array Is Sorted',
        'Container With Most Water',
        '3 sum',
        'The Sliding Window Pattern',
        'Longest Substring Without Repeating Characters',
        'Assignment | Maximum Sum Subarray of Size K',
        'Clash of Codes #1 | Algorithm Essentials'
      ]
    },
    {
      id: 3,
      title: 'Stacks, Queues & Linked lists',
      modules: [
        'Introduction to Stacks',
        'Introduction to Queues & Deques',
        'Assignment | Infix to Postfix Conversion',
        'Assignment | Infix to Prefix Conversion',
        'Evaluate Reverse Polish Notation',
        'Assignment | Infix to Postfix Conversion',
        'Basic Calculator',
        'Assignment | Valid Parentheses',
        'Valid Parentheses',
        'Next Greater Element I',
        'Tower of Hanoi',
        'Introduction to Singly Linked list',
        'Assignment | Design a Linked List',
        'Merge Two Sorted Lists',
        'Palindrome Linked List',
        'Assignment | Reverse a Linked List',
        'The Slow & Fast Pointer Pattern',
        'Middle of the Linked List',
        'Remove Nth Node From End of List',
        'Assignment | Linked List Cycle Detection',
        'Hands-on | GPS Navigation',
        'Clash of Codes #2 | Stacks, Queues & Linked Lists'
      ]
    },
    {
      id: 4,
      title: 'Trees and Hash Maps',
      modules: [
        'Introduction to trees',
        'Assignment | Level Order Traversal',
        'Assignment | Inorder, Preorder and Postorder Traversal',
        'Assignment | Tree traversals using recursion',
        'Introduction to Binary Trees',
        'Assignment | Binary Tree Operations - I',
        'Assignment | Binary Tree Operations Part - II',
        'Assignment | Find Maximum Depth of Binary Tree',
        'Assignment | Invert Binary Tree',
        'Introduction to Hash Maps and Hash Tables',
        'Assignment | Design HashMap',
        'Assignment | Two Sum using Hash Map',
        'Hands-on | Semantic Keyword Analyzer',
        'Clash of Codes #3 | Trees and Hash Maps'
      ]
    },
    {
      id: 5,
      title: 'BSTs, & Graphs',
      modules: [
        'Introduction to Binary Search Trees (BSTs)',
        'Search in a Binary Search Tree',
        'Assignment | Validate Binary Search Tree',
        'Assignment | Quest for the Hidden Integer',
        'Assignment | BST Pair Sum Check',
        'Introduction to Graphs and Representation',
        'Graph Traversal Algorithms (BFS & DFS)',
        'Assignment | BFS and DFS on a Graph',
        'Find if Path Exists in Graph',
        'Clone Graph',
        'Assignment | Number of Islands',
        'Cycle Detection in Graphs',
        'Assignment | Detect Cycle in a Graph',
        'Assignment | Social Network Clique Finder',
        'Hands-on | Task Dependency Manager',
        'Clash of Codes #4 | BSTs & Graphs'
      ]
    }
  ];

  const [expandedUnit, setExpandedUnit] = useState<number | null>(
    selectedModule ? parseInt(selectedModule.split('.')[0]) : null
  );

  const [currentUnit] = selectedModule.split('.').map(Number);
  const [, currentModule] = selectedModule.split('.').map(Number);

  const handleUnitClick = (unitId: number) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  const handleModuleClick = (unitId: number, moduleIndex: number) => {
    onModuleSelect(unitId, moduleIndex);
    onClose();
  };

  const isModuleCompleted = (unitId: number, moduleId: number) => {
    return completedModules.has(`${unitId}.${moduleId}`);
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>×</button>
        <Link href="/pages/livebooks" className="back-to-livebooks">
          ← Back to Livebooks
        </Link>
        <div className="sidebar-header">
          <h2>Data Structures (DS)</h2>
        </div>
        <nav className="sidebar-nav">
          {units.map((unit) => (
            <div key={unit.id} className="unit-section">
              <button
                className={`unit-button ${currentUnit === unit.id ? 'active' : ''}`}
                onClick={() => handleUnitClick(unit.id)}
              >
                <span className="unit-number">{unit.id}</span>
                <span className="unit-title-text">{unit.title}</span>
              </button>
              {expandedUnit === unit.id && (
                <ul className="module-list">
                  {unit.modules.map((module, index) => {
                    const moduleId = index + 1;
                    const isCompleted = isModuleCompleted(unit.id, moduleId);
                    return (
                      <li key={index}>
                        <button
                          className={`module-button ${currentModule === moduleId ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                          onClick={() => handleModuleClick(unit.id, moduleId)}
                        >
                          <span className="module-number">{unit.id}.{moduleId}</span>
                          <span className="module-title-text">{module}</span>
                          <span className="module-arrow">→</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;