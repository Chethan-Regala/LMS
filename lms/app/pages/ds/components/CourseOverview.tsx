'use client';
import React, { useState, useEffect } from 'react';
import MainSidebar from '@/components/Sidebar';
import { useSession } from 'next-auth/react';

interface CourseOverviewProps {
  onModuleSelect: (unitId: number, moduleId: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ onModuleSelect }) => {
  const [activeTab, setActiveTab] = useState('learning-path');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const { data: session } = useSession();
  const [studentProgress, setStudentProgress] = useState<any[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchStudentProgress(session.user.email);
    }
  }, [session]);

  const fetchStudentProgress = async (email: string) => {
    const res = await fetch(`/api/progress?userEmail=${email}&subject=DS`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    const data = await res.json();
    if (data.success) {
      setStudentProgress(data.data);
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

  const completedModules = studentProgress.length;
  const masteryModules = studentProgress.filter(p => p.percentage >= 80).length;
  const totalModules = units.reduce((acc, unit) => acc + unit.modules.length, 0);
  const completedPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  const masteryPercentage = totalModules > 0 ? Math.round((masteryModules / totalModules) * 100) : 0;

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen overflow-hidden">
        <MainSidebar />
      </div>
      <div className="flex-1">
        <div className="lms-dashboard">
          <div className="lms-container">
            <div className="lms-header">
              <div className="header-left">
                <svg className="megaphone-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#E63946" strokeWidth="2" fill="none" />
                </svg>
                <h1 className="course-title">Data Structures (DS)</h1>
              </div>
              <div className="header-right">
                <div className="progress-bar-container">
                  <div className="progress-segments">
                    {[...Array(20)].map((_, i) => {
                      const segmentThreshold = (i + 1) * 5;
                      return (
                        <div
                          key={i}
                          className={`segment ${completedPercentage >= segmentThreshold ? 'completed' :
                              masteryPercentage >= segmentThreshold ? 'mastery' : ''
                            }`}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="progress-text">{completedPercentage}% Completed • {masteryPercentage}% Mastery</div>
                </div>
              </div>
            </div>

            <nav className="tab-navigation">
              <button className={`tab ${activeTab === 'learning-path' ? 'active' : ''}`} onClick={() => setActiveTab('learning-path')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 3h12M2 8h12M2 13h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                Learning Path
              </button>
              <button className={`tab ${activeTab === 'sessions' ? 'active' : ''}`} onClick={() => setActiveTab('sessions')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                Sessions
              </button>
              <button className={`tab ${activeTab === 'assessments' ? 'active' : ''}`} onClick={() => setActiveTab('assessments')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Assessments
              </button>
              <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                About
              </button>
              <button className="tab" onClick={() => window.location.href = '/pages/livebooks'} style={{ marginLeft: 'auto' }}>
                Go to Livebooks
              </button>
            </nav>

            <div className="timeline-content">
              {units.map((unit) => (
                <div key={unit.id} className="unit-block">
                  <div className="unit-header-block" onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}>
                    <div className="unit-number-badge">{unit.id}</div>
                    <div className="unit-title-text">{unit.title}</div>
                    <div className="expand-indicator">{expandedUnit === unit.id ? '▼' : '▶'}</div>
                  </div>

                  {expandedUnit === unit.id && (
                    <div className="lessons-timeline">
                      {unit.modules.map((module, idx) => {
                        const isCompleted = studentProgress.some(
                          p => p.unitId === unit.id && p.moduleId === idx + 1 && p.completed
                        );
                        return (
                          <div
                            key={idx}
                            className="lesson-item"
                            onClick={(e) => {
                              e.stopPropagation();
                              onModuleSelect(unit.id, idx + 1);
                            }}
                          >
                            <div className={`lesson-number-badge ${isCompleted ? 'completed' : ''}`}>{unit.id}.{idx + 1}</div>
                            <div className="lesson-content">
                              <h3 className="lesson-title">{module}</h3>
                            </div>
                            <div className="lesson-arrow">→</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;