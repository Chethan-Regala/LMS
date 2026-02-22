'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_18: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.18</div>
        <div className="lesson-title-main">
          <h1>Middle of the Linked List</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Middle of the Linked List – LeetCode Problem #876</h3>

        <p className="mb-6">
          Finding the midpoint of an array is easy—you just divide the length by two. But in a Linked List, you don't know the length upfront! To find the middle, you'd normally have to walk through the entire list to count the nodes, then walk through it a second time to reach the center.
        </p>

        <p className="mb-6">
          However, there is a much more elegant, "one-pass" solution known as the Tortoise and Hare algorithm. This technique is a fundamental tool in your coding arsenal, used for everything from finding middle elements to detecting cycles in a data structure.
        </p>

        <p className="mb-6">
          In this problem, if there are two middle nodes (in an even-length list), you need to return the second middle node.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg" alt="Middle of Linked List Example" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Watch this before coding</h3>
        <p className="mb-4">
          This video demonstrates the "Fast and Slow Pointer" technique visually, making it clear why the "Fast" pointer always finishes exactly when the "Slow" pointer hits the target.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/A2_ldqM4QcY" title="Middle of the Linked List" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach</h3>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">The Two-Pointer Strategy</p>
            <p>Initialize two pointers, slow and fast, both starting at the head of the linked list.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">The Race</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Move slow forward by one node.</li>
              <li>Move fast forward by two nodes.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">The Finish Line</p>
            <p>Continue this loop as long as fast and fast.next are not null. Because fast travels twice as fast as slow, by the time fast reaches the end of the list, slow will be exactly at the halfway point.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Handling Even vs. Odd</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>In an odd list (e.g., 5 nodes), fast ends on the last node, and slow is on the 3rd.</li>
              <li>In an even list (e.g., 6 nodes), fast ends at null, and slow ends on the 4th (the second middle), which perfectly matches the problem requirements.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Time Complexity:</p>
            <p>We traverse the list only once.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Space Complexity:</p>
            <p>We only use two extra pointers regardless of the size of the list.</p>
          </div>
        </div>


        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-4">
          Now that you've mastered the Tortoise and Hare, try applying it here:
        </p>

        <p className="mb-2 font-semibold">LeetCode:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">876. Middle of the Linked List</a></li>
          <li><a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">141. Linked List Cycle (The classic use case for these pointers!)</a></li>
          <li><a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">19. Remove Nth Node From End of List</a></li>
        </ul>

        <p className="mb-2 font-semibold">HackerRank:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Find Merge Point of Two Lists</li>
          <li>Cycle Detection</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Additional Reference Material</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GeeksforGeeks – Finding the middle of a given linked list</a></li>
          <li>Python/Java/C++ Implementation of Fast and Slow Pointers</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Where It's Asked</h3>
        <p className="mb-6">
          This is a quintessential "warm-up" question used to test your comfort with basic data structures. You'll find it at: <strong>Google, Adobe, Amazon, Qualcomm, and Samsung</strong>
        </p>

        <p className="mb-6">
          It is often used as a stepping stone to harder problems like "Reorder List" or "Sort List."
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Key Insight:</p>
          <p>Think of the fast pointer as the scout and the slow pointer as the base camp. Once the scout finds the edge of the map, the base camp is exactly where it needs to be!</p>
        </div>

        <p className="mb-6 text-center font-semibold">
          Master this pattern and unlock many linked list problems! 🎯
        </p>

        <Quiz
          title="Module 3.18 Quiz: Finding the Middle Element"
          questions={[
            {
              question: "If a linked list has 7 nodes (odd), at which node will the 'slow' pointer stop when the 'fast' pointer reaches the end?",
              options: ["3rd node", "4th node", "5th node", "7th node"],
              correctAnswer: 1,
              explanation: "In an odd list, the formula for the middle is (n/2) + 1. For 7 nodes, the slow pointer lands exactly on the 4th node."
            },
            {
              question: "If the problem asks for the FIRST middle node in an even-length list (e.g., node 3 in a 6-node list), how would you adjust the logic?",
              options: ["Move the slow pointer faster", "Change the loop condition to stop one step earlier for the fast pointer", "Reverse the list first", "There is no way to do this"],
              correctAnswer: 1,
              explanation: "By checking 'fast.next.next' or ending the loop slightly earlier, you can capture the first of the two middle elements."
            },
            {
              question: "What is the primary advantage of the two-pointer approach over counting the nodes first?",
              options: ["It uses less memory", "It performs the task in a single pass instead of two", "It works only for sorted lists", "It is easier to write in Python"],
              correctAnswer: 1,
              explanation: "Efficiency in linked lists often involves minimizing the number of times you traverse the pointers."
            },
            {
              question: "In the condition 'while (fast != NULL && fast.next != NULL)', why do we check 'fast.next != NULL'?",
              options: ["To check if the list is empty", "To prevent a Null Pointer Exception when the fast pointer tries to jump two steps", "To find the tail node", "To delete the last node"],
              correctAnswer: 1,
              explanation: "Since 'fast' moves two nodes at a time, we must ensure that a node exists to jump TO before making the leap."
            },
            {
              question: "What is the Space Complexity of this 'Tortoise and Hare' algorithm?",
              options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
              correctAnswer: 2,
              explanation: "The algorithm only uses two pointers (slow and fast), which do not scale with the size of the input list."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={18}
        />
      </section>
    </div>
  );
};

export default Module3_18;
