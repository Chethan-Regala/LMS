'use client';
import React from 'react';

const Module3_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.14</div>
        <div className="lesson-title-main">
          <h1>Merge Two Sorted Lists</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Merge Two Sorted Lists – LeetCode Problem #21</h3>
        
        <p className="mb-6">
          If you've been working with Linked Lists, this is the quintessential "Bread and Butter" problem. It's the logical next step after learning how to traverse a list. Merge Two Sorted Lists tests your ability to manipulate pointers and manage memory without losing track of your data.
        </p>

        <p className="mb-6">
          The goal is simple: You are given the heads of two sorted linked lists. You need to splice them together into one single, continuous sorted list and return its head.
        </p>

        <p className="mb-6">
          Think of it like merging two lines of students standing in height order into one single line. You look at the person at the front of each line, pick the shorter one, and move to the next person in that line.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="Merge Two Sorted Lists Example" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Watch this before coding</h3>
        <p className="mb-4">
          This video provides a great visual representation of the "Dummy Node" technique, which is a life-saver for avoiding edge-case bugs in linked list problems.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XIdigk956u0" title="Merge Two Sorted Lists" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach</h3>
        
        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">The "Dummy Node" Trick</p>
            <p>Create a "dummy" node to act as the starting point of your new list. This prevents you from having to write extra logic to handle the very first node.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">The Comparison Loop</p>
            <p className="mb-2">Use a pointer (let's call it tail) to track the end of your new merged list. While both input lists have nodes:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Compare the values of the current nodes in List 1 and List 2.</li>
              <li>Attach the smaller value node to tail-&gt;next.</li>
              <li>Move the pointer forward in the list you just picked from.</li>
              <li>Move the tail pointer forward.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Handling Leftovers</p>
            <p>After the loop, one list might still have nodes left (since they might be different lengths). Since the lists are already sorted, you can simply attach the remaining part of the non-empty list to the end of your merged list.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Time Complexity:</p>
            <p>You visit every node in both lists exactly once, where m and n are the lengths of the two lists.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Space Complexity:</p>
            <p>If you merge the lists in place by adjusting the existing pointers, you don't use any extra space (excluding the output).</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Pro Tip:</p>
          <p>The dummy node technique is a common pattern in linked list problems. It simplifies your code by eliminating special cases for the head of the list. Remember to return dummy.next, not dummy itself!</p>
        </div>

        <p className="mb-6 text-center font-semibold">
          Ready to merge? Let's code! 🚀
        </p>
      </section>
    </div>
  );
};

export default Module3_14;
