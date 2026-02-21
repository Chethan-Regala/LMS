'use client';
import React from 'react';

const Module3_20: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.20</div>
        <div className="lesson-title-main">
          <h1>Assignment | Linked List Cycle Detection</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.tenor.com/QgC0rQXsYjEAAAAi/penguin-pudgy.gif" alt="Cycle Detection" className="w-full max-w-md h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          Hey everyone!
        </p>

        <p className="mb-6">
          In the last session, you learned to build on basic linked list traversal by reversing a linked list, which is a classic question asked in programming interviews. In this session, you're going to tackle another classic problem: figuring out if a linked list has a cycle.
        </p>

        <p className="mb-6">
          A cycle happens when a node in the list points back to a previous node, creating an endless loop. If you try to traverse a list with a cycle, you'll be stuck looping forever!
        </p>

        <h3 className="text-xl font-semibold mb-4">Here's the Challenge</h3>
        <p className="mb-6">
          Your task is to determine if a given linked list contains a cycle. You'll be given the head of the list, and you need to return true if there's a loop and false otherwise.
        </p>

        <p className="mb-4">
          This video provides a clear, concise explanation of the problem and the two-pointer approach we'll use to solve it. We recommend you go through the video before attempting the assignment.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gBTe7lFR3vc" title="Linked List Cycle Detection" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <p className="text-sm text-gray-600 mb-6 text-center">Credits: Nick White</p>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach to Solving the Problem</h3>
        
        <p className="mb-4">
          The most efficient way to solve this is using Floyd's Tortoise and Hare algorithm, which involves two pointers moving at different speeds.
        </p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Initialize Two Pointers:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Create a "slow" pointer (the tortoise) that starts at the head of the list.</li>
              <li>Create a "fast" pointer (the hare) that also starts at the head.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Handle Edge Cases:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>If the list is empty (head is null) or has only one node (head-&gt;next is null), it's impossible to have a cycle. Return false.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Traverse the List:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Move the slow pointer one step at a time (slow = slow-&gt;next).</li>
              <li>Move the fast pointer two steps at a time (fast = fast-&gt;next-&gt;next).</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Check for a Collision:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Inside your loop, continuously check if the slow and fast pointers are pointing to the same node.</li>
              <li>If slow == fast, it means the fast pointer has lapped the slow pointer, which can only happen if there's a cycle. You've found a loop, so you can return true.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Check for the End of the List:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>The loop should continue as long as the fast pointer and its next node (fast-&gt;next) are not null.</li>
              <li>If the fast pointer reaches the end of the list (becomes null), it means there was no cycle. In this case, exit the loop.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Return the Result:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>If the loop finishes without the pointers ever meeting, return false.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230807115335/Linked-List-Cycle-Detection.png" alt="Cycle Detection Visualization" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-3">
          To master this concept, try solving these similar problems:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode: Linked List Cycle</a></li>
          <li><a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode: Linked List Cycle II (A great follow-up that asks you to find the start of the cycle)</a></li>
          <li><a href="https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HackerRank: Cycle Detection</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Additional References</h3>
        <p className="mb-3">
          Here are some great resources to deepen your understanding:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GeeksforGeeks: Detect Loop in a Linked List</a></li>
          <li><a href="https://medium.com/@tuvo1106/the-tortoise-and-the-hare-floyds-algorithm-87badf5f7d41" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medium Article: The Tortoise and The Hare</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Instructions</h3>
        <p className="mb-4">
          In this session, students will participate in a pair programming exercise. Each pair is required to collaboratively solve the given problem using a single system. Once the solution is successfully implemented and verified, the second member may use that solution for their individual assignment submission.
        </p>

        <p className="mb-3 font-semibold">Guidelines:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Form pairs before the session begins.</li>
          <li>Work together on one system per pair to develop and test the solution.</li>
          <li>In case a student is unable to find a partner, they should pair up with the mentor for this activity.</li>
          <li>Use of Large Language Models (LLMs) such as ChatGPT, Gemini, or similar tools is strictly prohibited.</li>
          <li>You may refer to Google or official documentation only for understanding syntax or language-specific concepts.</li>
        </ul>

        <p className="mb-6">
          The objective of this activity is to encourage collaboration, logical thinking, and peer learning while maintaining academic integrity.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Pro Tip:</p>
          <p>Floyd's Cycle Detection algorithm is one of the most elegant algorithms in computer science. The key insight is that if there's a cycle, the fast pointer will eventually "lap" the slow pointer. Think of it like two runners on a circular track - the faster runner will eventually catch up to the slower one!</p>
        </div>

        <p className="mb-6">
          You've got this! This is a fun and clever problem that teaches a powerful technique. Give it a try and see if you can catch that loop! In the next session, you will have your first hands-on session of this course, where you will build a simple program that mimics a GPS navigation system. Happy coding!
        </p>

        <p className="mb-6 text-center font-semibold">
          Happy pair programming! 🚀
        </p>
      </section>
    </div>
  );
};

export default Module3_20;
