'use client';
import React from 'react';

const Module5_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.4</div>
        <div className="lesson-title-main">
          <h1>Assignment | Quest for the Hidden Integer</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In this assignment, you will be on a quest for the hidden integer in a binary search tree.
        </p>
        <p className="mt-4">
          Before starting the assignment, Explore how to perform search operation and traversal in a BST.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/BST_kingdom_PLU.webp"
            alt="BST Search and Traversal"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>Practice Problem</h3>
        <p>
          For additional practice, you can visit the following leetcode link given below. This part is optional and you can continue to the next lesson without solving this problem.
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a 
              href="https://leetcode.com/problems/search-in-a-binary-search-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-1
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/minimum-distance-between-bst-nodes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-2
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-3
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Instructions</h3>
        <p>
          In this session, students will participate in a pair programming exercise. Each pair is required to collaboratively solve the given problem using a single system. Once the solution is successfully implemented and verified, the second member may use that solution for their individual assignment submission.
        </p>
        <p className="mt-4"><strong>Guidelines:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Form pairs before the session begins.</li>
          <li>Work together on one system per pair to develop and test the solution.</li>
          <li>In case a student is unable to find a partner, they should pair up with the mentor for this activity.</li>
          <li>Use of Large Language Models (LLMs) such as ChatGPT, Gemini, or similar tools is strictly prohibited.</li>
          <li>You may refer to Google or official documentation only for understanding syntax or language-specific concepts.</li>
        </ul>
        <p className="mt-4">
          The objective of this activity is to encourage collaboration, logical thinking, and peer learning while maintaining academic integrity.
        </p>
      </section>
    </div>
  );
};

export default Module5_4;
