'use client';
import React from 'react';

const Module4_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.9</div>
        <div className="lesson-title-main">
          <h1>Assignment | Invert Binary Tree</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Gifs%2Fminion-hello.gif"
            alt="Invert Binary Tree"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          In the last lesson, you learned how to calculate the maximum depth of a binary tree using recursion and traversal. Now, we'll use that same recursive thinking to transform a binary tree by flipping it — left to right.
        </p>
        <p>
          In this problem, you're given the root of a binary tree, and your task is to invert the tree.
        </p>
        <p className="mt-4">
          <strong>Inverting means:</strong> 👉 Swap the left and right children of every node in the tree.
        </p>
        <p>
          This transforms the tree into its mirror image.
        </p>
      </section>

      <section className="content-section">
        <h3>Example: Input:</h3>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`4 2 7 1 3 6 9`}</pre>
        </div>
        <p><strong>Output after inversion:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`4 7 2 9 6 3 1`}</pre>
        </div>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FInvert%20binary%20tree%2Finvert1-tree-example1.jpg"
            alt="Invert Binary Tree Example"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>This problem is a classic interview favorite because it tests:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Recursion</li>
          <li>Tree traversal</li>
          <li>Your ability to think about structure transformation</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Video Explanation</h3>
        <p>
          Watch this video to understand the core logic of the problem at hand
        </p>
        <div className="flex justify-center my-6">
          <iframe
            src="https://drive.google.com/file/d/1c673Zdi3GloOGQDShDyeHy1JTTCqM_5J/preview"
            width="560"
            height="315"
            allow="autoplay"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 text-center">This video is made using NoteBook LM</p>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>Try these after solving your main problem:</p>
        
        <h4 className="font-semibold mt-4">LeetCode</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://leetcode.com/problems/invert-binary-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Leetcode | 226. Invert Binary Tree
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/same-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Leetcode | 100. Same Tree
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/symmetric-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Leetcode | 101. Symmetric Tree
            </a>
          </li>
        </ul>

        <h4 className="font-semibold mt-4">HackerRank</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/swap-nodes-algo/problem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Binary Tree – Swap Nodes
            </a>
          </li>
        </ul>
        <p className="mt-4">
          These will help reinforce the idea of tree mirroring and structure changes.
        </p>
      </section>

      <section className="content-section">
        <h3>Additional Reference Material</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://www.freecodecamp.org/news/understanding-recursion-in-programming/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Finally Understanding: Recursion and Binary Search Trees
            </a>
          </li>
          <li>
            <a 
              href="https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Tree traversals (Preorder, Inorder, Postorder)
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/invert-binary-tree/solutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode discussion on tree inversion techniques
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            Tree problems might look scary at first, but this one is your gateway into mastering tree recursion. Once you solve this, more advanced tree problems will feel much easier!
          </p>
        </div>
        <p>
          Now that you can flip a tree… what if you were asked to check whether a tree is symmetric around its center? Can you adapt your logic to verify mirror structure without actually flipping it? That's where we're heading next!
        </p>
      </section>
    </div>
  );
};

export default Module4_9;
