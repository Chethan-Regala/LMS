'use client';
import React from 'react';

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
      </section>
    </div>
  );
};

export default Module3_15;
