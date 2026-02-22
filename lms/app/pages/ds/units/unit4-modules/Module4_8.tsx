'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.8</div>
        <div className="lesson-title-main">
          <h1>Assignment | Find Maximum Depth of Binary Tree</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Gifs%2Fminion-hello.gif"
            alt="Maximum Depth of Binary Tree"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>Hi there! Welcome back to the pair programming session.</p>
        <p>
          You already learned how to compute tree properties like height, depth, and node-count in a binary tree in the previous sessions. Now, let's use that understanding to solve a common interview-style problem: finding the maximum depth or "height" of a binary tree.
        </p>
      </section>

      <section className="content-section">
        <p>Here's the problem for today.</p>
        <p>
          Given the root of a binary tree, return its maximum depth, i.e. the number of nodes along the longest path from the root node down to the farthest leaf node. You'll read the tree in a level-order representation (with "null" to mark missing children).
        </p>
        <p className="mt-4"><strong>For example: Input:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`7  
3 9 20 null null 15 7`}</pre>
        </div>
        <p><strong>Output:</strong> 3</p>
        <p>
          Because the longest root-to-leaf path is 3 nodes (3 → 20 → 15 or 3 → 20 → 7).
        </p>
        <p className="mt-4">
          Understanding this problem well helps set the stage for more complex tree-based problems (like balancing trees, checking height differences, or inverting trees).
        </p>
      </section>

      <section className="content-section">
        <h3>Explainer Video</h3>
        <p>
          This video walks you through how to compute maximum depth using recursion or level-order techniques, with clear examples and walkthroughs.
        </p>
        <div className="flex justify-center my-6">
          <iframe
            src="https://drive.google.com/file/d/170vh9dfoLJ5T1SgPEvSqRg7eN6PSnAj8/preview"
            width="560"
            height="315"
            allow="autoplay"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 text-center">This video was made using NoteBook LM</p>
      </section>

      <section className="content-section">
        <h3>A brief step-by-Step Approach</h3>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to reveal</summary>
          <div className="mt-4 space-y-2">
            <p>1. <strong>Read input:</strong> integer n, followed by n space-separated strings (either integer values or "null").</p>
            <p>2. <strong>If n == 0,</strong> the tree is empty ⇒ depth = 0 → output 0.</p>
            <p>3. <strong>Else, build the tree from level-order:</strong></p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>The first element (if not "null") becomes the root.</li>
              <li>Use a queue to attach children: pop a node, take the next two values from the input list as left and right (if not "null"), create corresponding child nodes, push them into the queue.</li>
              <li>Continue until you exhaust the input list or queue.</li>
            </ul>
            <p className="mt-2">4. <strong>Once the tree is built, compute the maximum depth:</strong></p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>If root is null, return 0.</li>
              <li>Otherwise, recursively compute depth(left) and depth(right), return 1 + max(depth(left), depth(right)).</li>
            </ul>
            <p className="mt-2">5. <strong>Print the resulting depth.</strong></p>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="https://www.geeksforgeeks.org/problems/height-of-binary-tree/1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode | Tree: Height of a Binary Tree
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Leetcode | 559. Maximum Depth of N-ary Tree
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/maximum-depth-of-binary-tree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Leetcode | 104. Maximum Depth of Binary Tree
            </a>
          </li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            <strong>Note:</strong> The question includes some default code to help you. You only need to type the tree-building and core logic of the problem. Comments are also provided for you to read and solve the problem.
          </p>
        </div>
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

      <section className="content-section">
        <p>
          You got this! Once you implement the build-tree + max-depth logic, you can handle many other tree problems. Dive in, debug, test with edge cases, and you'll deepen your understanding of recursion and trees.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            <strong>Next up:</strong> we will learn how to invert a binary tree, which flips left ↔ right subtrees recursively. Once you know to get the tree depth, inverting it will teach you how to transform tree structure, a useful concept in many algorithms.
          </p>
        </div>
        <p>
          Let's get down to the coding part now.
        </p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Gifs%2Fcat-bye.gif" alt="" />
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.8 Quiz: Maximum Depth of Binary Tree"
          questions={[
            {
              question: "For a binary tree [3, 9, 20, null, null, 15, 7], what is the maximum depth?",
              options: ["1", "2", "3", "4"],
              correctAnswer: 2,
              explanation: "The tree has 3 levels: root (3) at level 1, {9,20} at level 2, {15,7} at level 3. The maximum depth is 3."
            },
            {
              question: "What is the recursive formula for computing maximum depth?",
              options: ["depth = height(left) + height(right)", "depth = 1 + max(depth(left), depth(right))", "depth = max(left, right)", "depth = nodes / 2"],
              correctAnswer: 1,
              explanation: "The depth at any node is 1 (for the current node) plus the maximum depth of its left or right subtree, whichever is deeper."
            },
            {
              question: "What does the algorithm return when the root is null (empty tree)?",
              options: ["-1", "0", "1", "undefined"],
              correctAnswer: 1,
              explanation: "An empty tree has no nodes, so its depth/height is 0."
            },
            {
              question: "What is step 3 in building the tree from level-order input?",
              options: ["Sort the input array", "Use a queue to attach children from the input array", "Find the max value", "Count the null values"],
              correctAnswer: 1,
              explanation: "After creating the root from the first element, you use a queue to process nodes and attach the next two input values as left and right children for each node."
            },
            {
              question: "Mastering max-depth of binary trees is a prerequisite for which more advanced topic?",
              options: ["Sorting algorithms", "Graph shortest path (Dijkstra)", "Balancing trees (AVL trees) and tree transformation", "Dynamic programming"],
              correctAnswer: 2,
              explanation: "Understanding depth computation is foundational for AVL/balancing algorithms (which rely on height differences) and tree transformations like inversion."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={8}
        />
      </section>
    </div>
  );
};

export default Module4_8;
