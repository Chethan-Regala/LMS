'use client';
import React from 'react';

const Module3_19: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.19</div>
        <div className="lesson-title-main">
          <h1>Remove Nth Node From End of List</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Welcome Back</h3>
        
        <p className="mb-6">
          So far, you have explored multiple linked list patterns such as merging two sorted linked lists, where you learned how pointer movement can help you build an output list efficiently without extra traversal. But here is the important realization: linked list problems are not about memorizing code. They are about learning how to control node connections carefully.
        </p>

        <p className="mb-6">
          Now we move one step further into a more practical and commonly asked interview problem: removing the nth node from the end of a linked list.
        </p>

        <p className="mb-6">
          At first, this sounds simple, but the challenge is that linked lists do not support indexing like arrays. You cannot directly jump to the required node. So, the real question becomes:
        </p>

        <p className="mb-6 italic text-lg">
          If you don't know the length of the list, how do you still delete the correct node in one pass?
        </p>

        <p className="mb-6">
          This is where the two-pointer technique (fast and slow pointer) becomes extremely useful.
        </p>

        <p className="mb-6">
          Removing the nth node from the end of a linked list is a very practical linked list problem because it forces you to think differently than arrays. In an array, you can directly jump to an index, but in a linked list you must travel node by node.
        </p>

        <p className="mb-6">
          This assignment teaches you how to solve this efficiently using the two-pointer technique, which avoids unnecessary extra traversals and makes the solution clean and fast.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" alt="Remove Nth Node Example" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Video</h3>
        <p className="mb-4">
          This video explains the Remove Nth Node From End of List problem using the fast and slow pointer technique, showing how to maintain a gap of n nodes between two pointers and remove the correct node in a single traversal. It also covers common edge cases like deleting the head node when n equals the length of the list.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XVuQxVej6y8" title="Remove Nth Node From End of List" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Practice Tool</h3>
        <p className="mb-4">
          To make the concept easier, use this interactive webpage to visualize how pointers move and how the node gets removed.
        </p>

        <p className="mb-3 font-semibold">How to Use the Visualizer</p>
        <ol className="list-decimal ml-6 mb-6 space-y-1">
          <li>Enter the linked list values</li>
          <li>Enter the value of n (nth node from end)</li>
          <li>Click submit / run</li>
          <li>Observe how the fast pointer moves ahead first</li>
          <li>Then notice how both pointers move together until deletion happens</li>
        </ol>

        <p className="mb-6">
          This makes it easier to understand why slow stops exactly before the node to delete.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://visualgo.net/img/png/list.png" alt="Linked List Visualizer" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">
            <a href="https://visualgo.net/en/list" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit VisuAlgo for interactive visualization</a>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-step Approach</h3>

        <div className="mb-6 space-y-6">
          <div>
            <p className="font-semibold mb-3">Step 1: Understand what "nth node from end" means</p>
            <p className="mb-2">If the list is:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5</code>
            </pre>
            <p className="mb-2">and n = 2, the 2nd node from the end is:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>4</code>
            </pre>
            <p className="mb-2">After removing it, the list becomes:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>1 -&gt; 2 -&gt; 3 -&gt; 5</code>
            </pre>
            <p>So the goal is not just finding the node, but also correctly reconnecting the list.</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Step 2: Why not use brute force?</p>
            <p className="mb-2">Brute force means:</p>
            <ol className="list-decimal ml-6 mb-3 space-y-1">
              <li>traverse once to find the length L</li>
              <li>traverse again to reach (L - n)th node</li>
              <li>delete the next node</li>
            </ol>
            <p className="mb-2">This works, but it requires two passes, which is unnecessary.</p>
            <p className="font-semibold">We want a one-pass solution.</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Step 3: Use the Two Pointer Technique (Fast and Slow Pointer)</p>
            <p className="mb-2">The main idea:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Move fast pointer n steps ahead</li>
              <li>Keep slow pointer at the start</li>
              <li>Then move both pointers one step at a time</li>
              <li>When fast reaches the end, slow will be exactly at the node before the one we need to remove</li>
            </ul>
            <p className="mt-2">This gives us the correct deletion position in a single traversal.</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Step 4: Handle the edge case (removing the head)</p>
            <p className="mb-2">If fast becomes NULL immediately after moving n steps, that means the node to remove is the head itself.</p>
            <p className="mb-2">Example:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>10 -&gt; 20 -&gt; 30</code>
            </pre>
            <p className="mb-2">n = 3</p>
            <p className="mb-2">Remove 10, answer becomes:</p>
            <pre className="bg-gray-100 p-3 rounded mb-2">
              <code>20 -&gt; 30</code>
            </pre>
            <p>So we return head.next.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Example Walkthrough</h3>
        <p className="mb-2 font-semibold">Input:</p>
        <pre className="bg-gray-100 p-3 rounded mb-2">
          <code>List: 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5</code>
        </pre>
        <p className="mb-4">n = 2</p>

        <p className="mb-2 font-semibold">Steps:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-2">
          <li>fast moves 2 steps → reaches node 3</li>
          <li>slow stays at 1</li>
          <li>Now both move together:
            <ul className="list-disc ml-6 mt-1">
              <li>slow = 2, fast = 4</li>
              <li>slow = 3, fast = 5</li>
              <li>fast reaches end next → stop</li>
            </ul>
          </li>
          <li>Now slow is at 3, so the node after slow (4) must be removed.</li>
        </ol>

        <p className="mb-2 font-semibold">Result:</p>
        <pre className="bg-gray-100 p-3 rounded mb-6">
          <code>1 -&gt; 2 -&gt; 3 -&gt; 5</code>
        </pre>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230807115335/Remove-Nth-Node-From-End.png" alt="Remove Nth Node Visualization" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Time Complexity</h3>
        <p className="mb-6">
          <strong>O(n)</strong> - Because we traverse the list only once using two pointers.
        </p>

        <h3 className="text-xl font-semibold mb-4">Space Complexity</h3>
        <p className="mb-6">
          <strong>O(1)</strong> - Because we only use two pointers and no extra data structures.
        </p>

        <h3 className="text-xl font-semibold mb-4">Practice Links</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Remove Nth Node From End of List | LeetCode</a></li>
          <li><a href="https://leetcode.com/problems/delete-node-in-a-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Delete Node in a Linked List | LeetCode</a></li>
          <li><a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Middle of the Linked List | LeetCode</a></li>
          <li><a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Linked List Cycle | LeetCode</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Reference Links</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://www.geeksforgeeks.org/remove-nth-node-from-end-of-the-linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Remove Nth Node From End | GeeksforGeeks</a></li>
          <li><a href="https://www.geeksforgeeks.org/two-pointers-technique/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Two Pointer Technique | GeeksforGeeks</a></li>
          <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Linked List Basics | GeeksforGeeks</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <p className="mb-6">
          In this assignment, you learned how to remove the nth node from the end of a singly linked list using the two-pointer approach. Instead of counting nodes and doing two traversals, we create a gap of n nodes between fast and slow pointers. Once the fast pointer reaches the end, the slow pointer automatically reaches the correct deletion position.
        </p>

        <p className="mb-6">
          This technique is efficient, clean, and extremely important for solving real linked list interview problems.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Key Takeaway:</p>
          <p>The two-pointer technique with a fixed gap is a powerful pattern. By maintaining a distance of n nodes between pointers, you can solve "from the end" problems in a single pass without knowing the list length!</p>
        </div>

        <p className="mb-6 text-center font-semibold">
          Master this pattern and ace your linked list interviews! 🚀
        </p>
      </section>
    </div>
  );
};

export default Module3_19;
