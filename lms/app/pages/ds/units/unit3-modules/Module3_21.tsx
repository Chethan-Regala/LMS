'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_21: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.21</div>
        <div className="lesson-title-main">
          <h1>Hands-on | GPS Navigation</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          Hi There!
        </p>

        <p className="mb-6">
          Welcome to your first Hands-on session. So far, you've only implemented the logic in simple narrated problems; it's time now to see how these algorithms are used in real-world applications.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif" alt="GPS Navigation" className="w-full max-w-md h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          Imagine you joined a company that helps its clients to keep track of their transport fleet, and you were assigned to work on the Maps section of the software. It's your first day, and you've just received a critical bug report for your company's GPS navigation system. A delivery driver is stuck in a loop; their GPS keeps routing them through the same set of intersections, and they can't complete their delivery.
        </p>

        <p className="mb-6">
          Your mission is to analyze the route data and pinpoint the exact intersection where the faulty loop begins.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>A Route is represented by a singly linked list.</li>
          <li>Each Intersection is a node in the list.</li>
          <li>The Road Segment to the next intersection is the next pointer.</li>
        </ul>

        <p className="mb-6">
          You need to write a function that takes the starting point of a route (head) and returns the first intersection (node) that is part of the recurring loop. If the route is perfectly fine and has a clear destination (it ends in NULL), you should return NULL.
        </p>

        <h3 className="text-xl font-semibold mb-4">Visualizing the Problem</h3>
        <p className="mb-4">
          To understand the core logic of detecting and locating the cycle, we recommend that you watch this video, which provides a clear walkthrough of the Problem in Hand.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://drive.google.com/file/d/17vDmE8_aKW9nggJUJtAsFwIp-yCH_HTc/preview" title="GPS Navigation Cycle Detection" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" alt="Cycle in Route" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach</h3>
        <p className="mb-4">
          Here's a breakdown of the two-phase approach to solve this problem.
        </p>

        <div className="mb-6 space-y-6">
          <div>
            <p className="font-semibold mb-3">1. Problem Restatement</p>
            <p className="mb-2">We are given a linked list that might contain a cycle.</p>
            <p className="mb-2">Example:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>{`Head → 1 → 2 → 3 → 4 → 5
               ↑_______↓`}</code>
            </pre>
            <p>Our goal is to return the node where the cycle starts (in this case, the node with the value 3).</p>
          </div>

          <div>
            <p className="font-semibold mb-3">2. Key Idea: The Two-Phase Approach</p>
            <p className="mb-2">We can't solve this in one go. We need to break it down:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Phase 1:</strong> Detect if a cycle even exists. We use two pointers, a slow one and a fast one. If they ever meet, a cycle is confirmed.</li>
              <li><strong>Phase 2:</strong> Find the starting node of that cycle. Once a cycle is confirmed, we use the meeting point to find the cycle's entry point.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">3. Phase 1: Detect the Cycle (The Tortoise and the Hare)</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Initialize two pointers, slow and fast, both at the head of the list.</li>
              <li>Start a loop that continues as long as fast and fast.next are not NULL.</li>
              <li>Inside the loop:
                <ul className="list-circle ml-6 mt-1">
                  <li>Move slow one step: slow = slow.next.</li>
                  <li>Move fast two steps: fast = fast.next.next.</li>
                </ul>
              </li>
              <li>If slow and fast point to the same node (slow == fast), we have found a meeting point inside the cycle. Break the loop and proceed to Phase 2.</li>
              <li>If the loop finishes because fast reached the end, it means there is no cycle. Return NULL.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">4. Phase 2: Find the Cycle's Starting Node</p>
            <p className="mb-2">This is the clever part. It's a proven mathematical property that if you have the meeting point from Phase 1:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Leave the fast pointer at the meeting point.</li>
              <li>Reset the slow pointer back to the head of the list.</li>
              <li>Now, advance both slow and fast one step at a time (slow = slow.next, fast = fast.next).</li>
              <li>The node where they meet again is the start of the cycle. Return this node.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230807115335/Linked-List-Cycle-II.png" alt="Finding Cycle Start" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Real-World Application:</p>
          <p>This exact algorithm is used in GPS systems to detect routing loops, in network protocols to detect circular dependencies, and in memory management to detect circular references. Understanding this pattern opens doors to solving many practical problems!</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-3">
          To master this pattern, try solving these problems. They use the same underlying "slow and fast pointer" technique.
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode 142: Linked List Cycle II - (This is the exact problem)</a></li>
          <li><a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode 141: Linked List Cycle - (An easier version where you only have to detect if a cycle exists)</a></li>
          <li><a href="https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HackerRank: Cycle Detection</a></li>
          <li><a href="https://leetcode.com/problems/find-the-duplicate-number/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode 287: Find the Duplicate Number - (A tricky but brilliant problem that can be modeled as a linked list cycle)</a></li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="font-semibold mb-2">Challenge:</p>
          <p>Can you explain why resetting the slow pointer to the head and moving both pointers one step at a time leads them to meet at the cycle's start? Try to work through the mathematics behind this elegant solution!</p>
        </div>

        <p className="mb-6">
          Best of luck trying to fix this bug. The next session will be the 2nd clash of codes of this course, but this time around it will be a bit different.
        </p>

        <p className="mb-6 text-center font-semibold">
          Happy debugging! 🚀
        </p>

        <Quiz
          title="Module 3.21 Quiz: GPS Navigation - Finding the Loop Entrance"
          questions={[
            {
              question: "What is the very first step in solving the 'Find Cycle Start' problem?",
              options: ["Move slow to the head immediately", "Detect if a cycle even exists using Floyd's Tortoise and Hare", "Reverse the linked list", "Delete the head node"],
              correctAnswer: 1,
              explanation: "You cannot find the start of a cycle if you aren't sure one exists. Phase 1 is always detection."
            },
            {
              question: "After confirming a cycle, if you move one pointer starting from the 'head' and another starting from the 'meeting point' at the SAME speed, where will they first meet?",
              options: ["At the tail", "At the middle of the list", "At the starting node of the cycle", "They will never meet again"],
              correctAnswer: 2,
              explanation: "Mathematically, the distances align such that moving both at 1x speed from these specific points leads them to collide exactly at the entrance of the loop."
            },
            {
              question: "Why does the delivery driver problem represent a Linked List Cycle?",
              options: ["Because roads are like pointers connecting intersections (nodes)", "Because GPS uses an array", "Because cars always move in circles", "It doesn't; it's just an analogy"],
              correctAnswer: 0,
              explanation: "An intersection is a node, and the path to the next intersection is the 'next' pointer. If you end up back at an intersection you already visited, you've hit a loop."
            },
            {
              question: "What should your function return if the fast pointer reaches NULL during the detection phase?",
              options: ["The head node", "The middle node", "NULL (no loop found)", "A negative number"],
              correctAnswer: 2,
              explanation: "Reaching NULL means the 'route' has a definite end-point, so no cycles were detected."
            },
            {
              question: "What is the combined time complexity of Phase 1 and Phase 2?",
              options: ["O(log n)", "O(n)", "O(n^2)", "O(2^n)"],
              correctAnswer: 1,
              explanation: "Even though there are two phases, each phase makes at most a constant number of passes over the list, so the complexity remains linear."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={21}
        />
      </section>
    </div>
  );
};

export default Module3_21;
