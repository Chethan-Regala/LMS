'use client';
import React from 'react';

const Module4_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.4</div>
        <div className="lesson-title-main">
          <h1>Assignment | Tree traversals using recursion</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi there! Welcome to today's session.</p>
        <p>
          Today you'll take a big step forward, not by learning a new traversal, but by learning how to connect input format with tree structure.
        </p>
        <p>
          So far, you've practiced preorder, inorder, and postorder traversals on trees where the structure was already clear.
        </p>
        <p>But real programs rarely give you a ready-made tree.</p>
        <p>They give you data.</p>
      </section>

      <section className="content-section">
        <h3>Problem Introduction</h3>
        <p>Now imagine this.</p>
        <p>
          You are given a binary tree in level order format inside an array. Some values may be -1, meaning the node does not exist.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Your first responsibility is to build the tree correctly using the createTree() function.</li>
          <li>Only after the tree is ready, you will apply:
            <ul className="list-disc ml-6 mt-2">
              <li>Preorder recursion</li>
              <li>Inorder recursion</li>
              <li>Postorder recursion</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4">And print them in this order:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Preorder</li>
          <li>Inorder</li>
          <li>Postorder</li>
        </ol>
        <p className="mt-4">
          This is exactly how tree-based systems work: they don't give you the structure, they give you raw data and expect you to create meaning from it.
        </p>
      </section>

      <section className="content-section">
        <h3>Practice Links</h3>
        <p><strong>LeetCode — Construct Binary Tree from Level Order</strong></p>
        <p>
          <a 
            href="https://leetcode.com/problems/maximum-binary-tree/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://leetcode.com/problems/maximum-binary-tree/
          </a>
        </p>
        <p className="mt-4"><strong>GeeksForGeeks — Build Tree from Level Order</strong></p>
        <p>
          <a 
            href="https://www.geeksforgeeks.org/construct-a-binary-tree-from-parent-array-representation/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.geeksforgeeks.org/construct-a-binary-tree-from-parent-array-representation/
          </a>
        </p>
        <p className="mt-4"><strong>HackerRank — Tree Traversals</strong></p>
        <p>
          <a 
            href="https://www.hackerrank.com/challenges/tree-preorder-traversal/problem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.hackerrank.com/challenges/tree-preorder-traversal/problem
          </a>
        </p>
      </section>

      <section className="content-section">
        <h3>Additional References</h3>
        <p><strong>Understanding recursive tree traversals</strong></p>
        <p>
          <a 
            href="https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
          </a>
        </p>
        <p className="mt-4"><strong>Level order traversal concepts</strong></p>
        <p>
          <a 
            href="https://www.programiz.com/dsa/level-order-traversal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.programiz.com/dsa/level-order-traversal
          </a>
        </p>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            This assignment checks whether you truly understand trees — not just traversal order. If you can convert level-order input into a real tree, the traversal part becomes natural. Take it step by step. Build first. Traverse later.
          </p>
        </div>
        <p>
          Once you master creating trees from arrays and traversing them recursively, you'll be ready to handle more advanced problems like tree construction from different traversal combinations and tree validation tasks.
        </p>
        <p>
          Today is about turning raw data into structure — the most important skill in tree problems.
        </p>
        <p className="mt-4">
          You can start the assignment now and Happy coding!
        </p>
      </section>
    </div>
  );
};

export default Module4_4;
