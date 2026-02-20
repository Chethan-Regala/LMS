'use client';
import React from 'react';

const Module4_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.7</div>
        <div className="lesson-title-main">
          <h1>Assignment | Binary Tree Operations Part - II</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          This assignment will further let you practice the operations of a binary tree.
        </p>
      </section>

      <section className="content-section">
        <p>
          Use this video to comprehend the reasoning behind determining the maximum height of a tree.
        </p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/wQGQnyv_9hI" title="Minimum Height Trees - Leetcode 310 - Python" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <p>
          Use this video as a reference to understand the underlying logic of finding the minimum height of a tree.
        </p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/ivl6BHJVcB0" title="Minimum Height Trees | Live Coding with Explanation | Leetcode #310" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">Tip:</p>
          <p>
            This problem will ask you to print the right-side view of a tree, the maximum and minimum height of a tree.
          </p>
        </div>
        <p>
          Consider devising a strategy for the problem and commence with the assignment.
        </p>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>
          For additional practice, you can visit the following leetcode links given below. This part is optional and you can continue to the next lesson without solving these problems.
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a 
              href="https://leetcode.com/problems/minimum-depth-of-binary-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-1
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/binary-tree-right-side-view/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-2
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" 
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

export default Module4_7;
