'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module1_8: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'cpp' | 'java'>('cpp');

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.8</div>
        <div className="lesson-title-main">
          <h1>Revisiting Arrays and Strings</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>The Foundation of Data Storage</h3>
        <p>
          Welcome back! Arrays are the most fundamental data structure—the "OG" that holds your data like a clingy best friend. They store multiple elements of the same data type in back-to-back memory locations.
        </p>
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed italic">
            "Need fast access? Just yell their index number. Arrays are like a loyal assistant who always knows where your stuff is (as long as you give them the right index)."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Why Arrays Matter</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">🚀 Instant Access</h4>
            <p className="text-sm text-gray-600">Access any element in <strong>O(1)</strong> constant time. Faster than your pizza delivery.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-2">📦 Memory Efficient</h4>
            <p className="text-sm text-gray-600">Elements are stored contiguously, minimizing memory fragmentation.</p>
          </div>
        </div>
      </section>

      <div className="language-selector flex gap-4 mb-6 border-b border-gray-100 pb-4">
        <button
          onClick={() => setActiveLang('cpp')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${activeLang === 'cpp' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          C++
        </button>
        <button
          onClick={() => setActiveLang('java')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${activeLang === 'java' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          Java
        </button>
      </div>

      <section className="content-section">
        <h3>{activeLang === 'cpp' ? 'C++' : 'Java'} Implementation</h3>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-800 px-4 py-2 flex justify-between items-center text-xs">
              <span className="text-gray-400 font-mono">array_operations.{activeLang === 'cpp' ? 'cpp' : 'java'}</span>
            </div>
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="text-emerald-400">
                {activeLang === 'cpp' ? (
                  `// Declaration & Initialization
int arr[5]; // Garbage values
int nums[5] = {1, 2, 3, 4, 5};

// Access (O(1))
int val = nums[2]; // Gets 3

// Traversal
for (int i = 0; i < 5; i++) {
    cout << nums[i] << " ";
}`
                ) : (
                  `// Declaration & Initialization
int[] arr = new int[5]; // Initialized to 0
int[] nums = {1, 2, 3, 4, 5};

// Access (O(1))
int val = nums[2]; // Gets 3

// Traversal
for (int i = 0; i < nums.length; i++) {
    System.out.print(nums[i] + " ");
}`
                )}
              </code>
            </pre>
          </div>

          <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500">
            <h4 className="font-bold text-rose-800 mb-2">Cost of Modification</h4>
            <p className="text-sm text-gray-700">Insertion and Deletion in the middle require <strong>O(n)</strong> because elements must be shifted to fill or create gaps.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Matrix Manipulation (2D Arrays)</h3>
        <p>A matrix is simply an array of arrays. Accessing an element requires two indices: <code className="bg-gray-100 px-1 rounded">matrix[row][col]</code>.</p>
        <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm text-blue-300 my-4 shadow-xl">
          {activeLang === 'cpp' ? 'int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};' : 'int[][] matrix = {{1, 2, 3}, {4, 5, 6}};'}
        </div>
      </section>

      <section className="content-section">
        <h3>Real-World Applications</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 bg-gray-50 rounded-lg border-l-2 border-blue-300"><strong>Pixels:</strong> Image grids are giant 2D arrays of colors.</li>
          <li className="p-4 bg-gray-50 rounded-lg border-l-2 border-emerald-300"><strong>Leaderboards:</strong> Storing player scores for quick ranking.</li>
          <li className="p-4 bg-gray-50 rounded-lg border-l-2 border-purple-300"><strong>Financials:</strong> Recording precise daily stock closing prices.</li>
          <li className="p-4 bg-gray-50 rounded-lg border-l-2 border-amber-300"><strong>Games:</strong> Inventory systems and map layouts.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Complexity Overview</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/dsa_array_time.png" alt="Time Analysis" className="rounded-xl border shadow-sm" />
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/dsa_array_space.png" alt="Space Analysis" className="rounded-xl border shadow-sm" />
        </div>
      </section>

      <Quiz
        title="Module 1.8 Quiz: Array Fundamentals"
        questions={[
          {
            question: "What is the Time Complexity to access an element at a known index in an array?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctAnswer: 0,
            explanation: "Arrays support direct addressing. Since we know the memory address of the first element and the size of each element, we jump straight to the correct location in constant time."
          },
          {
            question: "Why does inserting an element at the beginning of an array take O(n) time?",
            options: ["Because searching takes O(n)", "Because all existing elements must be shifted forward", "Because arrays only grow at the end", "Because of memory fragmentation"],
            correctAnswer: 1,
            explanation: "To make space at the start (index 0), every existing element must move one position back, taking 'n' steps."
          },
          {
            question: "What is an 'Out-of-Bounds' error?",
            options: ["Storing a string in an integer array", "Accessing an index that doesn't exist (e.g., index 5 in size-5 array)", "Deleting the first element", "Using too much memory"],
            correctAnswer: 1,
            explanation: "Array indices are 0 to n-1. Attempting to access index 'n' or higher results in an error because that memory isn't allocated for the array."
          },
          {
            question: "How is a value in row 1, column 2 accessed in a 2D matrix?",
            options: ["matrix[1,2]", "matrix[1][2]", "matrix(1)(2)", "matrix{1}{2}"],
            correctAnswer: 1,
            explanation: "In both C++ and Java, 2D arrays are accessed using two separate square bracket sets: [row][column]."
          },
          {
            question: "In C++, what happens if you access an uninitialized array element?",
            options: ["It returns 0", "The program crashes immediately", "It returns a 'garbage' value from memory", "It returns null"],
            correctAnswer: 2,
            explanation: "Unlike Java (which defaults to 0), C++ does not initialize local arrays by default, often returning whatever random value was already in that memory location."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={8}
      />
    </div>
  );
};

export default Module1_8;