'use client';
import React from 'react';

const Module3_16: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.16</div>
        <div className="lesson-title-main">
          <h1>Assignment | Reverse a Linked List</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this problem, we are working with a singly linked list. A linked list is a linear data structure where elements (called nodes) are connected using pointers. Unlike arrays, linked lists don't require contiguous memory, making them flexible for insertion and deletion.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.tenor.com/QgC0rQXsYjEAAAAi/penguin-pudgy.gif" alt="Linked List Animation" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">Credits: Tenor</p>
        </div>

        <p className="mb-6">
          Your task is to reverse a linked list, i.e., make the last node become the head and change the direction of all next pointers. This problem helps you strengthen your understanding of pointers, iteration, and memory links in data structures.
        </p>

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

        <p className="mb-4">
          [Optionally] You can also watch this video to understand this problem better.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/O0By4Zq0OFc" title="How To Reverse A Singly Linked List | The Ultimate Explanation (Iteratively &amp; Recursively)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-4">
          Here's a step-by-step explanation of the approach you can take.
        </p>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Explanation: Reversing a Linked List</h3>

        <div className="mb-6 space-y-6">
          <div>
            <p className="font-semibold mb-3">1. Problem Restatement</p>
            <p className="mb-2">We are given a singly linked list:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>Head → 1 → 2 → 3 → 4 → 5 → NULL</code>
            </pre>
            <p className="mb-2">Our goal is to reverse it so that it becomes:</p>
            <pre className="bg-gray-100 p-3 rounded">
              <code>Head → 5 → 4 → 3 → 2 → 1 → NULL</code>
            </pre>
          </div>

          <div>
            <p className="font-semibold mb-3">2. Key Idea</p>
            <p className="mb-2">We need to re-wire the next pointers so that they point backwards instead of forwards. To do this safely, we use three pointers:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>prev (initially NULL)</li>
              <li>curr (starting at head)</li>
              <li>next (to temporarily store the next node)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">3. Step-by-Step Pointer Movement</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Step 1: Initialize</p>
                <p className="mb-2">prev = NULL, curr = Head (1), next = NULL</p>
                <pre className="bg-gray-100 p-3 rounded">
                  <code>{`NULL ← 1 → 2 → 3 → 4 → 5 → NULL
 ^
 Head`}</code>
                </pre>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 2: Reverse First Link</p>
                <ul className="list-disc ml-6 mb-2 space-y-1">
                  <li>Store next = curr.next (2)</li>
                  <li>Make curr.next = prev (NULL)</li>
                  <li>Move pointers ahead: prev = 1, curr = 2</li>
                </ul>
                <pre className="bg-gray-100 p-3 rounded">
                  <code>NULL ← 1    2 → 3 → 4 → 5 → NULL</code>
                </pre>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 3: Reverse Second Link</p>
                <ul className="list-disc ml-6 mb-2 space-y-1">
                  <li>Store next = curr.next (3)</li>
                  <li>Make curr.next = prev (1)</li>
                  <li>Move pointers: prev = 2, curr = 3</li>
                </ul>
                <pre className="bg-gray-100 p-3 rounded">
                  <code>NULL ← 1 ← 2    3 → 4 → 5 → NULL</code>
                </pre>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 4: Continue for All Nodes</p>
                <p className="mb-2">Following the same steps, after processing all nodes:</p>
                <pre className="bg-gray-100 p-3 rounded mb-2">
                  <code>NULL ← 1 ← 2 ← 3 ← 4 ← 5</code>
                </pre>
                <p>Now curr = NULL and prev points to the new head (5).</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">4. Final State</p>
            <p className="mb-2">The new head of the reversed list is 5:</p>
            <pre className="bg-gray-100 p-3 rounded">
              <code>Head → 5 → 4 → 3 → 2 → 1 → NULL</code>
            </pre>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230807115335/Reverse-a-Linked-List.png" alt="Reverse Linked List Visualization" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Practice Problem Links</h3>
        <p className="mb-3">Here are some related problems to practice:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode 206: Reverse Linked List</a></li>
          <li><a href="https://www.geeksforgeeks.org/reverse-a-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GeeksforGeeks: Reverse a Linked List</a></li>
          <li><a href="https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HackerRank: Print in Reverse</a></li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Remember:</p>
          <p>Every programmer should be able to manipulate pointers and understand memory flow. Mastering linked lists is a big leap toward becoming a confident problem solver, so take up this challenge and push yourself to code it out!</p>
        </div>

        <p className="mb-6 text-center font-semibold">
          Happy pair programming! 🚀
        </p>
      </section>
    </div>
  );
};

export default Module3_16;
