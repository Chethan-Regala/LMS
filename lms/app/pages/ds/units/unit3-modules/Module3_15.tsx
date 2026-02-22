'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_15: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.15</div>
        <div className="lesson-title-main">
          <h1>Palindrome Linked List</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Palindrome Linked List – LeetCode Problem #234</h3>

        <p className="mb-6">
          Is it the same forward as it is backward? While checking if a string like "RACECAR" is a palindrome is straightforward, doing the same for a Linked List is a classic interview favorite. Why? Because unlike an array, you can't just "index" into the back of a linked list or walk through it backward easily.
        </p>

        <p className="mb-6">
          This problem forces you to combine three essential linked list techniques into one elegant solution:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Finding the Middle:</strong> Using the "Slow and Fast Pointer" strategy.</li>
          <li><strong>Reversing a List:</strong> Flipping pointers to change the direction of the nodes.</li>
          <li><strong>Comparison:</strong> Walking through two lists simultaneously.</li>
        </ul>

        <p className="mb-6">
          Solving this effectively demonstrates that you have a high "pointer IQ" and can manipulate complex data structures in place without wasting extra memory.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" alt="Palindrome Linked List Example" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Watch this before coding</h3>
        <p className="mb-4">
          This video explains the optimal time and space approach, which is the gold standard for this specific problem.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-DtNInqFUXs" title="Palindrome Linked List" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach</h3>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Find the Middle</p>
            <p>Use two pointers: slow and fast. Move slow by one step and fast by two. When fast reaches the end, slow will be right in the middle.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Reverse the Second Half</p>
            <p>From the slow pointer onwards, reverse the direction of the links. Now, the end of the original list points back toward the middle.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">The Comparison</p>
            <p>Start one pointer at the original head and another at the new head (the end of the original list). Compare their values one by one.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Restore (Optional but Professional)</p>
            <p>In a real-world scenario, you'd reverse the second half back to its original state before returning the result to keep the data structure intact.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Time Complexity:</p>
            <p>We traverse the list a few times (to find the middle, reverse, and compare), but it remains linear.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Space Complexity:</p>
            <p>By reversing the list in place, we avoid using an extra array or stack.</p>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230807115335/Palindrome-Linked-List.png" alt="Palindrome Check Process" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Key Insight:</p>
          <p>The slow and fast pointer technique (also called the "tortoise and hare" method) is a powerful pattern for linked list problems. The fast pointer moves twice as fast, so when it reaches the end, the slow pointer is exactly at the middle. This technique appears in many linked list interview questions!</p>
        </div>

        <p className="mb-6 text-center font-semibold">
          Master this pattern and you'll ace linked list interviews! 🎯
        </p>

        <Quiz
          title="Module 3.15 Quiz: Palindrome Linked List"
          questions={[
            {
              question: "What is the result of the 'Slow and Fast Pointer' technique when the fast pointer reaches the end of the list?",
              options: ["The list is reversed", "The slow pointer is at the middle of the list", "The list is deleted", "The list is confirmed to be a palindrome"],
              correctAnswer: 1,
              explanation: "Since the fast pointer moves at twice the speed of the slow pointer, it covers the whole list while the slow pointer covers exactly half."
            },
            {
              question: "Why do we reverse the second half of the linked list in the optimized solution?",
              options: ["To make the list shorter", "To allow us to compare values starting from the 'back' of the original list by walking 'forward' through the reversed section", "Because linked lists must always be reversed", "To sort the elements"],
              correctAnswer: 1,
              explanation: "In a singly linked list, we can only move forward. By reversing the second half, the 'forward' direction of that section now effectively moves toward the middle of the original list."
            },
            {
              question: "What is the Time Complexity of checking for a palindrome using the middle-reversal method?",
              options: ["O(log n)", "O(1)", "O(n)", "O(n^2)"],
              correctAnswer: 2,
              explanation: "The algorithm makes a few passes (finding middle, reversing, comparing), each taking O(n) or O(n/2) time, which simplifies to O(n)."
            },
            {
              question: "What is the Space Complexity of the optimized solution compared to a solution that copies the list into an array?",
              options: ["O(n) vs O(n)", "O(1) vs O(n)", "O(n) vs O(1)", "O(1) vs O(log n)"],
              correctAnswer: 1,
              explanation: "Copying to an array takes O(n) extra space, while reversing the list in-place uses only a few pointers, giving O(1) extra space."
            },
            {
              question: "True or False: If the linked list has an odd number of elements, the 'Slow and Fast Pointer' technique still works to find the middle.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "The logic holds for both even and odd lengths; the slow pointer will correctly identify the starting point for the second half."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={15}
        />
      </section>
    </div>
  );
};

export default Module3_15;
