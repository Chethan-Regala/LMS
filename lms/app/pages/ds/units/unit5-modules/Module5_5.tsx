'use client';
import React from 'react';

const Module5_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.5</div>
        <div className="lesson-title-main">
          <h1>Assignment | BST Pair Sum Check</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            This is an optional assignment and you can choose to skip this if you wish. But we suggest you spend some time to solve this assignment problem for better practice.
          </p>
        </div>
        <p>
          You have to check if there exist two elements in the BST such that their sum is equal to k.
        </p>
        <p className="mt-4">
          Try to think of a logic to solve this problem before starting this assignment.
        </p>
        <p>
          Happy coding!
        </p>
      </section>

      <section className="content-section">
        <h3>Practice Problem</h3>
        <p>
          For additional practice, you can visit the following leetcode link given below. This part is optional and you can continue to the next lesson without solving this problem.
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a 
              href="https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-1
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/find-mode-in-binary-search-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-2
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-3
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Module5_5;
