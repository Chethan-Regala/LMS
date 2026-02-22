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
      description: 'Start your coding journey with foundational concepts. This unit covers basic math, complexity analysis, and simple array-based challenges to build your algorithmic problem-solving skills.',
      modules: [
        { title: 'Introduction to DSA & Orientation', description: 'Explore why DSA is the most important subject for software engineers and how the course is structured.' },
        { title: 'Foundational Mathematics for DSA', description: 'Refresh your math skills with concepts like Logarithms, Series, and Probability essential for CS.' },
        { title: 'Foundational Mathematics for DSA - II', description: 'Dive deeper into discrete math and combinatorics required for advanced algorithm design.' },
        { title: 'Power of Two', description: 'A classic problem to understand bit manipulation and basic algorithmic thinking.' },
        { title: 'Fizz Buzz', description: 'The legendary interview problem. Learn how to solve it efficiently and what it teaches about logical flow.' },
        { title: 'Time and space Complexity', description: 'The most critical topic. Learn Big O notation and how to measure the performance of your code.' },
        { title: 'Deep Dive into Complexity Analysis', description: 'Master the art of analyzing nested loops, recursive calls, and complex data operations.' },
        { title: 'Revisiting Arrays and Strings', description: 'Re-learn the most basic data structures from an algorithmic perspective.' },
        { title: 'Running Sum of 1d Array', description: 'Practice array manipulation with prefix sums and cumulative data processing.' },
        { title: 'Richest Customer Wealth', description: 'A hands-on problem to practice 2D array traversal and optimization.' },
        { title: 'Contains Duplicate', description: 'Learn how to use frequency counting and sorting to find duplicates in an array.' },
        { title: 'Valid Palindrome', description: 'Master string manipulation and two-pointer techniques to check for palindromic patterns.' },
        { title: 'Reverse String', description: 'Explore in-place array reversal techniques and their memory implications.' },
        { title: 'Longest Common Prefix', description: 'A string handling challenge that tests your ability to handle multiple inputs simultaneously.' },
        { title: 'Assignment | Sieve of Eratosthenes', description: 'Implement one of the most efficient algorithms for finding prime numbers.' },
        { title: 'Count Primes', description: 'Apply the Sieve of Eratosthenes to solve a real-world computational challenge.' }
      ]
    },
    {
      id: 2,
      title: 'Algorithm Essentials',
      description: 'Master the fundamental logic patterns of competitive coding. This module dives into recursion, sorting, two-pointers, and sliding window techniques.',
      modules: [
        { title: 'Introduction to Recursion', description: 'Think within a circle! Learn how functions can call themselves to solve complex problems.' },
        { title: 'Deep Dive into Recursion', description: 'Explore the call stack, base cases, and how the computer handles recursive logic under the hood.' },
        { title: 'Letter combination of phone number', description: 'A classic back-tracking problem. Learn how to generate all possible combinations from sets.' },
        { title: 'Fibonacci Number', description: 'From nature to computer science. Understand different ways to calculate sequences and their efficiency.' },
        { title: 'Pow(x, n)', description: 'Optimize your mathematical computations using binary exponentiation (Divide and Conquer).' },
        { title: 'Hands-On | File Directory Scanner', description: 'Apply recursion to a real-world task: traversing complex file systems and directories.' },
        { title: 'Subsequence Patterns in Recursion', description: 'Master the art of generating subsequences, a fundamental pattern for many DP problems.' },
        { title: 'Introduction to Sorting & Merge Sort', description: 'Start your journey into sorting algorithms. Learn the "Divide and Conquer" philosophy.' },
        { title: 'Sort an Array', description: 'Practice your sorting skills with real-world constraints and large datasets.' },
        { title: 'Merge Sorted Array', description: 'Learn how to efficiently combine two pre-ordered lists into one.' },
        { title: 'Assignment | Kth largest element in an array', description: 'Solve selection problems using sorting or optimized partitioning techniques.' },
        { title: 'Assignment | Merge Sort', description: 'Implement Merge Sort from scratch and analyze its recursive structure.' },
        { title: 'Quick Sort Algorithm', description: 'Explore the "Partition" strategy. Learn one of the most widely used sorting algorithms.' },
        { title: 'Assignment | Quick Sort', description: 'Implement Quick Sort and understand pivot selection strategies.' },
        { title: 'Assignment | Sorting Algorithm Optimization', description: 'Learn how to make standard sorting algorithms even faster for specific data types.' },
        { title: 'The Two-Pointer Approach | Collision Pattern', description: 'A powerful optimization technique for array and list problems. Reduce O(n^2) to O(n).' },
        { title: 'Two Sum II - Input Array Is Sorted', description: 'Apply two-pointer logic to find target sums in linear time.' },
        { title: 'Container With Most Water', description: 'A classic geometric problem solved efficiently with the two-pointer strategy.' },
        { title: '3 sum', description: 'Scale up your two-pointer skills to handle triple-element combinations without duplicates.' },
        { title: 'The Sliding Window Pattern', description: 'Master the technique for processing contiguous subarrays or substrings efficiently.' },
        { title: 'Longest Substring Without Repeating Characters', description: 'Use sliding windows and hash sets to solve string search problems in record time.' },
        { title: 'Assignment | Maximum Sum Subarray of Size K', description: 'A fundamental sliding window exercise to compute aggregate data over intervals.' },
        { title: 'Clash of Codes #1 | Algorithm Essentials', description: 'Test your knowledge in a competitive coding environment covering all Unit 2 topics.' }
      ]
    },
    {
      id: 3,
      title: 'Stacks, Queues & Linked lists',
      description: 'Explore linear data structures and their applications. Learn how to manage data in LIFO and FIFO patterns and master dynamic memory with linked nodes.',
      modules: [
        { title: 'Introduction to Stacks', description: 'Learn about the Last-In, First-Out structure used in undo buffers and browser history.' },
        { title: 'Introduction to Queues & Deques', description: 'Explore First-In, First-Out logic and double-ended queues for flexible data processing.' },
        { title: 'Assignment | Infix to Postfix Conversion', description: 'Learn how computers parse mathematical expressions using stacks.' },
        { title: 'Assignment | Infix to Prefix Conversion', description: 'Explore alternative notation formats used in specialized computing environments.' },
        { title: 'Evaluate Reverse Polish Notation', description: 'Use stacks to calculate values from postfix expressions, just like a scientific calculator.' },
        { title: 'Assignment | Infix to Postfix Conversion', description: 'Advanced practice on expression parsing and stack-based computing.' },
        { title: 'Basic Calculator', description: 'Build a functional expression evaluator that handles parentheses and operator precedence.' },
        { title: 'Assignment | Valid Parentheses', description: 'A critical skill for compilers. Ensure all brackets are correctly opened and closed.' },
        { title: 'Valid Parentheses', description: 'Practical application of stack patterns to validate syntactic structures.' },
        { title: 'Next Greater Element I', description: 'Solve monotonic stack problems to find relationships between array elements.' },
        { title: 'Tower of Hanoi', description: 'The legendary recursive puzzle. Learn how stacks and recursion work together.' },
        { title: 'Introduction to Singly Linked list', description: 'Move beyond contiguous memory. Learn how nodes link to form dynamic data chains.' },
        { title: 'Assignment | Design a Linked List', description: 'Build your own data structure from scratch, implementing insertion and deletion.' },
        { title: 'Merge Two Sorted Lists', description: 'Combine linked structures efficiently without using extra memory (in-place).' },
        { title: 'Palindrome Linked List', description: 'Use fast/slow pointers and list reversal to check for symmetry in linked data.' },
        { title: 'Assignment | Reverse a Linked List', description: 'A fundamental interview favorite. Learn how to flip pointers without losing data.' },
        { title: 'The Slow & Fast Pointer Pattern', description: 'Master the "tortoise and hare" technique for detecting cycles and midpoints.' },
        { title: 'Middle of the Linked List', description: 'Find the center of a list in a single pass using two pointers.' },
        { title: 'Remove Nth Node From End of List', description: 'A tricky pointer manipulation problem that tests your understanding of list traversal.' },
        { title: 'Assignment | Linked List Cycle Detection', description: 'Use Floyd\'s Cycle-Finding Algorithm to detect infinite loops in data structures.' },
        { title: 'Hands-on | GPS Navigation', description: 'Apply your knowledge of lists and nodes to model real-world navigation paths.' },
        { title: 'Clash of Codes #2 | Stacks, Queues & Linked Lists', description: 'A high-stakes coding challenge to solidify your mastery of linear data structures.' }
      ]
    },
    {
      id: 4,
      title: 'Trees and Hash Maps',
      description: 'Move into non-linear hierarchies. Learn about binary trees, traversals, and the lightning-fast lookup power of hash-based structures.',
      modules: [
        { title: 'Introduction to trees', description: 'Step into hierarchical data. Learn how files and HTML DOM are organized.' },
        { title: 'Assignment | Level Order Traversal', description: 'Explore "Breadth-First" searching. Visit nodes level by level using queues.' },
        { title: 'Assignment | Inorder, Preorder and Postorder Traversal', description: 'Master the three ways to visit every node into a tree recursively.' },
        { title: 'Assignment | Tree traversals using recursion', description: 'Practice implementing all traversal types to understand tree navigation.' },
        { title: 'Introduction to Binary Trees', description: 'Focus on trees where each parent has at most two children. Foundation for search.' },
        { title: 'Assignment | Binary Tree Operations - I', description: 'Learn how to insert, search, and count nodes in a binary structure.' },
        { title: 'Assignment | Binary Tree Operations Part - II', description: 'Dive into more complex operations like finding diameters and balanced states.' },
        { title: 'Assignment | Find Maximum Depth of Binary Tree', description: 'Compute the "height" of a tree, a crucial metric for performance analysis.' },
        { title: 'Assignment | Invert Binary Tree', description: 'The famous "mirroring" problem. Learn how to swap child nodes recursively.' },
        { title: 'Introduction to Hash Maps and Hash Tables', description: 'Learn how to achieve O(1) average lookup time. The "Swiss Army Knife" of DSA.' },
        { title: 'Assignment | Design HashMap', description: 'Build your own hash system, handling collisions and bucketing strategies.' },
        { title: 'Assignment | Two Sum using Hash Map', description: 'Revisit the Two Sum problem and solve it in record speed using a dictionary.' },
        { title: 'Hands-on | Semantic Keyword Analyzer', description: 'Build a tool that processes documents and identifies frequency using maps.' },
        { title: 'Clash of Codes #3 | Trees and Hash Maps', description: 'Compete with others to solve complex tree and map problems under time pressure.' }
      ]
    },
    {
      id: 5,
      title: 'BSTs, & Graphs',
      description: 'Tackle advanced search structures and complex networks. Master Binary Search Trees and graph traversals used in modern tech like Google Maps and social networks.',
      modules: [
        { title: 'Introduction to Binary Search Trees (BSTs)', description: 'Learn about specialized trees where data is kept sorted automatically for fast searching.' },
        { title: 'Search in a Binary Search Tree', description: 'Observe perfect logarithmic search in action and see why BSTs beat lists.' },
        { title: 'Assignment | Validate Binary Search Tree', description: 'Ensure a tree maintains the BST property: left < root < right.' },
        { title: 'Assignment | Quest for the Hidden Integer', description: 'A search challenge that tests your ability to navigate sorted branches.' },
        { title: 'Assignment | BST Pair Sum Check', description: 'Find two numbers that sum to a target within a BST using efficient traversal.' },
        { title: 'Introduction to Graphs and Representation', description: 'Explore the most complex structure. Model social networks, cities, and the internet.' },
        { title: 'Graph Traversal Algorithms (BFS & DFS)', description: 'Learn how to "walk" through a network and find every connected node.' },
        { title: 'Assignment | BFS and DFS on a Graph', description: 'Implement both depth-first and breadth-first search on real-world models.' },
        { title: 'Find if Path Exists in Graph', description: 'Use traversals to determine if two points in a 2D network are connected.' },
        { title: 'Clone Graph', description: 'Learn how to create deep copies of complex, interconnected data structures.' },
        { title: 'Assignment | Number of Islands', description: 'A classic "connected components" problem. Use DFS to count separate groups in a grid.' },
        { title: 'Cycle Detection in Graphs', description: 'Identify loops in networks, a must-have skill for avoiding infinite processing.' },
        { title: 'Assignment | Detect Cycle in a Graph', description: 'Build a tool that flags circular dependencies in software or logistics.' },
        { title: 'Assignment | Social Network Clique Finder', description: 'Use graph theory to find closely-knit groups in a social data model.' },
        { title: 'Hands-on | Task Dependency Manager', description: 'Build a system that determines the order of tasks using topological concepts.' },
        { title: 'Clash of Codes #4 | BSTs & Graphs', description: 'The final challenge. Solve high-level graph and tree problems to earn your badge.' }
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
                    <div className="module-badge">
                      <div className="badge-label">Module</div>
                      <div className="badge-number">{unit.id}</div>
                    </div>
                    <div className="unit-description">
                      <h2 className="unit-title">{unit.title}</h2>
                      <p className="unit-desc">{unit.description}</p>
                    </div>
                    <div className="expand-indicator">{expandedUnit === unit.id ? '▼' : '▶'}</div>
                  </div>

                  {expandedUnit === unit.id && (
                    <div className="lessons-timeline">
                      {unit.modules.map((module, idx) => (
                        <div
                          key={idx}
                          className="lesson-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            onModuleSelect(unit.id, idx + 1);
                          }}
                        >
                          <div className="lesson-badge">{unit.id}.{idx + 1}</div>
                          <div className="lesson-content">
                            <h3 className="lesson-title">{module.title}</h3>
                            <p className="lesson-desc">{module.description}</p>
                          </div>
                        </div>
                      ))}
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