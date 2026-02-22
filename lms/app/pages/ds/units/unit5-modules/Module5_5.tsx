'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

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

      <section className="content-section">
        <Quiz
          title="Module 5.5 Quiz: Pair Sum in BST"
          questions={[
            {
              question: "What is the goal of the 'Pair Sum in BST' problem?",
              options: ["Find the sum of all nodes", "Check if two nodes exist that sum to a target k", "Find the maximum pair", "Find the minimum path sum"],
              correctAnswer: 1,
              explanation: "The problem asks whether there exist two distinct nodes in the BST whose values add up to a given target k."
            },
            {
              question: "Which approach efficiently solves the pair sum problem using the BST inorder property?",
              options: ["BFS + brute force", "Inorder traversal to get sorted array, then two-pointer technique", "DFS with backtracking", "Binary search on random pairs"],
              correctAnswer: 1,
              explanation: "Inorder traversal of BST gives a sorted array. Applying two pointers (left at start, right at end) on this sorted array finds the pair in O(n) time."
            },
            {
              question: "In the two-pointer approach for pair sum, when should the LEFT pointer move RIGHT?",
              options: ["When sum > k", "When sum < k", "When sum == k", "When both pointers are equal"],
              correctAnswer: 1,
              explanation: "If the current sum is less than k, we need a larger value. Moving the left pointer right increases the sum."
            },
            {
              question: "What is the time complexity of pairing BST inorder traversal with two-pointer search?",
              options: ["O(n²)", "O(log n)", "O(n)", "O(n log n)"],
              correctAnswer: 2,
              explanation: "Inorder traversal takes O(n), and the two-pointer scan also takes O(n). Combined, the total complexity is O(n)."
            },
            {
              question: "What auxiliary space does the inorder + two-pointer approach require?",
              options: ["O(1)", "O(log n)", "O(n) for the sorted array", "O(n²)"],
              correctAnswer: 2,
              explanation: "We store the inorder traversal result in a separate array, which requires O(n) auxiliary space proportional to the number of nodes."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={5}
        />
      </section>
    </div>
  );
};

export default Module5_5;
