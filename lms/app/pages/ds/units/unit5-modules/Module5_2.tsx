'use client';
import React from 'react';

const Module5_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.2</div>
        <div className="lesson-title-main">
          <h1>Search in a Binary Search Tree</h1>
        </div>
      </div>

      <section className="content-section">
        <p>👋 Welcome back! Hope you're feeling comfortable with Binary Search Trees by now. Today, we're going to put that understanding into action with a very practical problem.</p>
        <p className="mt-4">In the last lesson, you learned:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>What a Binary Search Tree is</li>
          <li>How values are arranged using the left &lt; root &lt; right rule</li>
          <li>Why BSTs are faster than normal binary trees for searching</li>
        </ul>
        <p className="mt-4">
          That structure is the superpower of BSTs—and today, we'll use it to efficiently search for a value inside a tree.
        </p>
      </section>

      <section className="content-section">
        <h3>Problem Introduction: Search in a BST</h3>
        <p>
          Imagine you have a neatly organized bookshelf 📚. Because everything is sorted, you don't check every book—you go straight to the right section.
        </p>
        <p>That's exactly how searching works in a BST.</p>
        <h4 className="font-semibold mt-4">Problem Statement (In Simple Words)</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>You are given a BST and a value val</li>
          <li>Your task is to find the node with that value</li>
          <li>If found, return the subtree rooted at that node</li>
          <li>If not found, return null</li>
        </ul>
        <p className="mt-4">This problem helps you:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Practice tree traversal</li>
          <li>Apply BST properties logically</li>
          <li>Prepare for validation and advanced tree problems</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>🎥 Concept Explainer (Short & Clear)</h3>
        <p>Video: Binary Search Tree – Search Operation (Beginner Friendly)</p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/cySVml6e_Fc" title="5.10 Binary Search Trees (BST) - Insertion and Deletion | DSA Full Course" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="text-sm text-gray-600 text-center">(Short, visual, and perfect for understanding the decision-making process in BST search)</p>
        <p className="mt-4">If you prefer visuals instead of videos, think of this:</p>
        <p>
          🌳 <strong>Flat Art Idea:</strong> A tree where each comparison decides whether you go left or right—just like a flowchart.
        </p>
      </section>

      <section className="content-section">
        <h3>🪜 Step-by-Step Approach</h3>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to Expand</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Start at the root</h4>
              <p>Begin your search from the root node of the BST.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Compare the value</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>If val == root.value → you've found the node</li>
                <li>If val &lt; root.value → move to the left subtree</li>
                <li>If val &gt; root.value → move to the right subtree</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Repeat until found or tree ends</h4>
              <p>Continue comparing and moving left or right until:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The value is found, or</li>
                <li>You reach null (value does not exist)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Step 4: Return the result</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Return the subtree if found</li>
                <li>Otherwise, return null</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>🧪 Practice Problems</h3>
        <h4 className="font-semibold mt-4">LeetCode</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://leetcode.com/problems/search-in-a-binary-search-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔹 Search in a Binary Search Tree https://leetcode.com/problems/search-in-a-binary-search-tree/
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>📚 Additional Reference Material</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://visualgo.net/en/bst" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visual BST tool: https://visualgo.net/en/bst
            </a>
          </li>
          <li>
            <a 
              href="https://www.geeksforgeeks.org/search-a-node-in-binary-search-tree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GeeksforGeeks BST Search: https://www.geeksforgeeks.org/search-a-node-in-binary-search-tree/
            </a>
          </li>
          <li>
            <a 
              href="https://www.freecodecamp.org/news/binary-search-tree-what-is-it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              FreeCodeCamp Trees Guide (Beginner Friendly)
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>💪 Encouragement Before the Assessment</h3>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            You've got this 💯 This problem is all about thinking calmly and following the BST rules—no tricks, no pressure. Take your time, trace the tree, and trust the logic.
          </p>
          <p className="mt-2">
            Every correct comparison is one step closer to mastering trees 🌳
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>🔮 Bridge to the Next Lesson</h3>
        <p><strong>Next Lesson: Assignment | Validate Binary Search Tree</strong></p>
        <p className="mt-4">
          Now that you can search inside a BST, the next natural question is:
        </p>
        <p className="mt-2">
          👉 How do we even know if a tree is a valid BST in the first place?
        </p>
        <p className="mt-4">
          In the next lesson, you'll learn how to verify whether a binary tree truly follows BST rules—an essential skill for interviews and real-world systems.
        </p>
        <p className="mt-4">
          See you there! 🚀
        </p>
      </section>
    </div>
  );
};

export default Module5_2;
