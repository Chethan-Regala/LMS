'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

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

        <Quiz
          title="Module 3.14 Quiz: Merging Sorted Lists"
          questions={[
            {
              question: "What is the 'Dummy Node' technique Primarily used for?",
              options: ["To store actual data", "To avoid special 'if' logic for the empty initial result list", "To speed up the computer's CPU", "To reverse the list"],
              correctAnswer: 1,
              explanation: "A dummy node provides a fixed starting point, so you don't have to check if the result list is empty every time you add a new node."
            },
            {
              question: "If List A has 5 nodes and List B has 3 nodes, what is the Maximum number of comparisons needed to merge them?",
              options: ["15", "8", "3", "5"],
              correctAnswer: 1,
              explanation: "In the worst case, you compare elements from both lists until one is exhausted. The number of steps scales linearly with the total number of nodes (m + n)."
            },
            {
              question: "What happens when one list becomes empty during the merging process?",
              options: ["The algorithm stops and deletes the other list", "The remaining nodes of the non-empty list are attached as a block to the end of the result", "An error is thrown", "The result list is reversed"],
              correctAnswer: 1,
              explanation: "Since both input lists were already sorted, any leftover nodes are guaranteed to be larger than everything already in the merged list."
            },
            {
              question: "What is the time complexity of merging two sorted linked lists of size M and N?",
              options: ["O(M * N)", "O(M + N)", "O(log(M+N))", "O(1)"],
              correctAnswer: 1,
              explanation: "The algorithm traverses each node exactly once, resulting in linear time complexity."
            },
            {
              question: "If you used a dummy node to build your list, what should the function return?",
              options: ["The dummy node itself", "NULL", "The next pointer of the dummy node", "The tail of the list"],
              correctAnswer: 2,
              explanation: "The dummy node is just a placeholder; the actual starting data of your merged list begins at dummy->next."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={14}
        />
      </section>
    </div>
  );
};

export default Module3_14;
