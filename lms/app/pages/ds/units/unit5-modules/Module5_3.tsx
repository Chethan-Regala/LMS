'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.3</div>
        <div className="lesson-title-main">
          <h1>Assignment | Validate Binary Search Tree</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi there 👋, welcome to today's session on Validate Binary Search Tree</p>
        <p className="mt-4">
          In this session, you will explore and solve the problem Validate Binary Search Tree. This problem builds your understanding of binary search tree (BST) properties, and challenges you to apply recursive bounds checking and in-order traversal techniques.
        </p>
        <p>
          This is an excellent problem to practice your newly acquired knowledge about BSTs. For your assistance, we have provided default code as well as hints so that you understand the meaning of every line of code you write. In case you are stuck at a particular point, please reach out to your mentor for assistance.
        </p>
      </section>

      <section className="content-section">
        <h3>Video explanation</h3>
        <p>Watch this video to understand the problem.</p>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sLoZJ2E4ZDs"
            title="Validate Binary Search Tree (LeetCode 98) | Full solution with animations and visuals"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>How to approach this problem</h3>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Step-by-step approach (click to expand)</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">1. Parse input and build the tree (level-order)</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Read the single line of space-separated tokens.</li>
                <li>Use null to represent missing children.</li>
                <li>Build nodes level-by-level using a queue: pop parent, attach left if not null, attach right if not null.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">2. Validate BST using bounds (recommended)</h4>
              <p>Use a helper isBST(node, minVal, maxVal) where minVal and maxVal are exclusive bounds.</p>
              <p className="mt-2">For each node:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>If node == null return true.</li>
                <li>If node-&gt;val &lt;= minVal or node-&gt;val &gt;= maxVal, return false.</li>
                <li>Recurse left with (minVal, node-&gt;val) and right with (node-&gt;val, maxVal).</li>
              </ul>
              <p className="mt-2">Initialize bounds with negative and positive infinity (or LLONG_MIN / LLONG_MAX in C++).</p>
            </div>

            <div>
              <h4 className="font-semibold">3. Edge cases to remember</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Duplicate values are not allowed in BST by this problem statement (strict inequality).</li>
                <li>Single-node tree is always a BST.</li>
                <li>Very skewed trees (all left or all right) should still pass if values are strictly ordered.</li>
                <li>Watch for integer overflow: use 64-bit bounds when node values are 32-bit.</li>
                <li>Empty tree → valid BST by definition.</li>
                <li>Subtrees with incorrect values → must not just check child-parent relationship, but full range.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">4. Complexity</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Time:</strong> O(n) — you visit every node once.</li>
                <li><strong>Space:</strong> O(h) for recursion stack where h is tree height (worst O(n)).</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice problems</h3>
        <p>Practice these problems during your leisure time to improve your understanding of these types of problems.</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a
              href="https://leetcode.com/problems/validate-binary-search-tree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Validate Binary Search Tree | LeetCode
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Kth Smallest Element in a BST | LeetCode #230
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/challenges/is-binary-search-tree/problem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Is This a Binary Search Tree? | HackerRank
            </a>
          </li>
        </ul>
        <p className="mt-4">
          A follow-up BST traversal problem that reinforces in-order traversal logic. Helps you get comfortable with visiting BST elements in sorted order.
        </p>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            You got this! Validating BSTs is a foundational skill, it's short, elegant, and appears in interviews. Try the examples, then tweak the tree inputs to test edge cases. When you finish, you'll have a neat trick to add to your coding toolkit
          </p>
        </div>
        <p>
          The next session will be a pair programming session where you will voyage your way to a Quest for the Hidden Integer with your programming buddy.
        </p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.3 Quiz: Validate Binary Search Tree"
          questions={[
            {
              question: "Why is simply checking left < root < right for each node insufficient to validate a BST?",
              options: ["It works perfectly for all cases", "It doesn't check the height of the tree", "A node in the right subtree of an ancestor could violate the ancestor's constraint", "It ignores null nodes"],
              correctAnswer: 2,
              explanation: "Consider root=10, right child=15, and 15's left child=6. 6 < 15 locally looks valid, but 6 < 10 violates the root's BST constraint. You must propagate min/max bounds through the tree."
            },
            {
              question: "In the bounds-checking approach isBST(node, minVal, maxVal), what bounds are passed for the RIGHT child of a node?",
              options: ["(minVal, node.val)", "(node.val, maxVal)", "(minVal, maxVal)", "(node.val, node.val)"],
              correctAnswer: 1,
              explanation: "The right child must be GREATER than the current node, so node.val becomes the new minimum. The maximum bound remains unchanged."
            },
            {
              question: "Is an empty tree (null root) a valid BST?",
              options: ["No, it has no root", "No, it violates the BST property", "Yes, by definition", "Only if height is 0"],
              correctAnswer: 2,
              explanation: "An empty tree trivially satisfies all BST constraints (there's nothing to violate them). It is considered a valid BST by definition."
            },
            {
              question: "What is the time complexity of validating a BST using the bounds-checking approach?",
              options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
              correctAnswer: 1,
              explanation: "Every node is visited exactly once, making the time complexity O(n)."
            },
            {
              question: "Which traversal technique, when applied to a valid BST, always produces a SORTED sequence?",
              options: ["Preorder", "Postorder", "Inorder", "Level Order"],
              correctAnswer: 2,
              explanation: "Inorder traversal (Left → Root → Right) on any valid BST visits nodes in ascending sorted order. This can also be used as an alternative BST validation method."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={3}
        />
      </section>
    </div>
  );
};

export default Module5_3;
