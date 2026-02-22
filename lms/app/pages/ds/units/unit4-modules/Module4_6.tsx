'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.6</div>
        <div className="lesson-title-main">
          <h1>Assignment | Binary Tree Operations - I</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In this assignment, you will be implementing various binary tree operations in a single program.
        </p>
      </section>

      <section className="content-section">
        <h3>Prerequisites for this assignment:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Calculating height of a tree.</li>
          <li>Print the Root node.</li>
          <li>Counting the total number of Nodes and Leaf nodes in a tree.</li>
          <li>Print the all Leaf node.</li>
          <li>Printing the longest path from root to leaf.</li>
        </ul>
        <p className="mt-4">
          Try to formulate a logic to implement the above operations and start the assignment.
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
              href="https://leetcode.com/problems/maximum-depth-of-binary-tree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-1
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/count-complete-tree-nodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-2
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/binary-tree-paths/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-3
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/binary-tree-right-side-view/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-4
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-5
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.6 Quiz: Binary Tree Operations Part I"
          questions={[
            {
              question: "What is the height of a binary tree defined as?",
              options: ["The number of nodes in the tree", "The number of edges on the longest path from root to a leaf", "The number of leaf nodes", "The total number of edges"],
              correctAnswer: 1,
              explanation: "Height is the number of edges on the longest root-to-leaf path. A tree with a single root node has height 0."
            },
            {
              question: "Which node(s) are considered leaf nodes?",
              options: ["Nodes with two children", "Nodes with one child", "Nodes with no children (degree 0)", "The root node"],
              correctAnswer: 2,
              explanation: "A leaf node is any node with no children. They are the terminal/end nodes of the tree."
            },
            {
              question: "What does 'the longest path from root to leaf' give us?",
              options: ["The diameter of the tree", "The height of the tree", "The width of the tree", "The number of internal nodes"],
              correctAnswer: 1,
              explanation: "Following the deepest root-to-leaf path gives the tree's height, which is one of the most fundamental measurements in tree problems."
            },
            {
              question: "How do you count the total number of nodes in a binary tree recursively?",
              options: ["1 + count(left) only", "count(left) + count(right)", "1 + count(left) + count(right)", "height(root) * 2"],
              correctAnswer: 2,
              explanation: "Total nodes = 1 (current node) + all nodes in the left subtree + all nodes in the right subtree. Recursion handles the rest."
            },
            {
              question: "Which operation must be completed BEFORE printing the root node in terms of binary tree operations?",
              options: ["Nothing, the root is printed first", "Counting all leaf nodes", "Building/creating the tree", "Deleting all children"],
              correctAnswer: 2,
              explanation: "You must first build or have the tree structure (with a valid root pointer) before you can access and print any node, including the root."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={6}
        />
      </section>
    </div>
  );
};

export default Module4_6;
