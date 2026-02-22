'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.3</div>
        <div className="lesson-title-main">
          <h1>Assignment | Inorder, Preorder and Postorder Traversal</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Welcome back, Kalvians!</p>
        <p>
          In our previous lesson, we explored the Breadth-First (Level Order) approach. We learned how to scan a tree horizontally, visiting every neighbor on a floor before taking the elevator down. It was great for finding the shortest path or searching near the surface.
        </p>
        <p>
          But not all problems are solved by going wide. Sometimes, you need to be bold and dive deep. Today, we are shifting gears to Depth-First Search (DFS). Instead of exploring layer-by-layer, we are going to pick a path and follow it all the way to the bottom before coming back up.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">💡 Quick Tip: You can either read through the text content below, or if you prefer not to read, a NotebookLM generated video summary is attached towards the end of this lesson!</p>
        </div>
      </section>

      <section className="content-section">
        <h3>The "Root" Rule</h3>
        <p>
          When we "traverse" a tree using DFS, we generally do three things at every step:
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Visit the Root (the current node).</li>
          <li>Traverse the Left subtree.</li>
          <li>Traverse the Right subtree.</li>
        </ol>
        <p>
          The only thing that changes between the three algorithms is when we visit the Root. The names actually give away the secret:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>PRE-order:</strong> Root is visited PRE (Before) the children.</li>
          <li><strong>IN-order:</strong> Root is visited IN-between the children.</li>
          <li><strong>POST-order:</strong> Root is visited POST (After) the children.</li>
        </ul>
        <p>Let's break them down one by one.</p>
      </section>

      <section className="content-section">
        <h3>Preorder Traversal (Root → Left → Right)</h3>
        <p>
          In Preorder, we are proactive. We process the node the moment we see it, then we dive into the subtrees.
        </p>
        <p><strong>The Order:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Visit Root</li>
          <li>Traverse Left</li>
          <li>Traverse Right</li>
        </ol>
        <p className="mt-4"><strong>C++ Snippet:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`void preorderTraversal(Node* node) {
    if (node == NULL) return;

    cout << node->data << " "; // 1. Visit Root
    preorderTraversal(node->left);  // 2. Go Left
    preorderTraversal(node->right); // 3. Go Right
}`}</pre>
        </div>
        <p><strong>Code Breakdown:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>if (node == NULL) return;</strong>: The Safety Check. This is our "Base Case." If we reach a point where there is no node (we fell off the leaf), we stop and go back.</li>
          <li><strong>cout &lt;&lt; node-&gt;data</strong>: The Action. Because this is Preorder, we print the data immediately before doing anything else.</li>
          <li><strong>preorderTraversal(node-&gt;left)</strong>: The Dive. Now we pause the current function and call it again for the left child. We won't move to the next line until we finish exploring the entire left side.</li>
          <li><strong>preorderTraversal(node-&gt;right)</strong>: The Turn. Once the left side is fully explored, we do the same for the right side.</li>
        </ul>
        <p className="mt-4"><strong>Use Case:</strong> Creating a copy of a tree or saving a tree structure to a file.</p>
      </section>

      <section className="content-section">
        <h3>Inorder Traversal (Left → Root → Right)</h3>
        <p>
          In Inorder, we are methodical. We go as far left as possible, handle the current node, and then go right.
        </p>
        <p><strong>The Order:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Traverse Left</li>
          <li>Visit Root</li>
          <li>Traverse Right</li>
        </ol>
        <p className="mt-4"><strong>C++ Snippet:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`void inorderTraversal(Node* node) {
    if (node == NULL) return;

    inorderTraversal(node->left);   // 1. Go Left
    cout << node->data << " "; // 2. Visit Root
    inorderTraversal(node->right);  // 3. Go Right
}`}</pre>
        </div>
        <p><strong>Code Breakdown:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>if (node == NULL) return;</strong>: The Safety Check. Standard check to see if the node exists.</li>
          <li><strong>inorderTraversal(node-&gt;left)</strong>: The Delay. Notice we don't print yet. We immediately pass the baton to the left child. We keep doing this until we hit the bottom left.</li>
          <li><strong>cout &lt;&lt; node-&gt;data</strong>: The Action. We only print after the left child returns. This puts the parent "in between" the left and right children.</li>
          <li><strong>inorderTraversal(node-&gt;right)</strong>: The Continuation. Finally, we explore the right side.</li>
        </ul>
        <p className="mt-4"><strong>Use Case:</strong> Printing nodes of a Binary Search Tree (BST) in sorted (ascending) order.</p>
      </section>

      <section className="content-section">
        <h3>Postorder Traversal (Left → Right → Root)</h3>
        <p>
          In Postorder, we are cautious. We process the children first and save the parent for last.
        </p>
        <p><strong>The Order:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Traverse Left</li>
          <li>Traverse Right</li>
          <li>Visit Root</li>
        </ol>
        <p className="mt-4"><strong>C++ Snippet:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`void postorderTraversal(Node* node) {
    if (node == NULL) return;

    postorderTraversal(node->left);   // 1. Go Left
    postorderTraversal(node->right);  // 2. Go Right
    cout << node->data << " ";   // 3. Visit Root
}`}</pre>
        </div>
        <p><strong>Code Breakdown:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>if (node == NULL) return;</strong>: The Safety Check. Standard check.</li>
          <li><strong>postorderTraversal(node-&gt;left)</strong>: First Priority. Go handle the left side entirely.</li>
          <li><strong>postorderTraversal(node-&gt;right)</strong>: Second Priority. Go handle the right side entirely.</li>
          <li><strong>cout &lt;&lt; node-&gt;data</strong>: The Cleanup. Only after both left and right sides are completely finished do we print the current node. The parent is the last one to be processed.</li>
        </ul>
        <p className="mt-4"><strong>Use Case:</strong> Deleting a tree (you must delete children before the parent) or solving math expressions.</p>
      </section>

      <section className="content-section">
        <h3>Summary & Quick Comparison</h3>
        <p>Let's recap the differences using a simple tree:</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`    A
   / \\
  B   C`}</pre>
        </div>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Preorder (Root First):</strong> A -&gt; B -&gt; C</li>
          <li><strong>Inorder (Root Middle):</strong> B -&gt; A -&gt; C</li>
          <li><strong>Postorder (Root Last):</strong> B -&gt; C -&gt; A</li>
        </ul>
        <p className="mt-4">
          All three of these are DFS algorithms. They all have a Time Complexity of O(n) (visiting every node once) and a Space Complexity dependent on the height of the tree (for the recursion stack).
        </p>
        <p>
          We have covered the theory and seen the logic. Now, it's time to see these recursive functions in action.
        </p>
        <p>
          In the next section, we will fire up our C++ environment. We will create a simple tree and implement all three functions side-by-side to watch how the output changes just by swapping a single line of code.
        </p>
        <p>
          Let's transition from the theory part to the coding part now.
        </p>
      </section>

      <section className="content-section">
        <h3>Instructions</h3>
        <p>
          In this session, students will participate in a pair programming exercise. Each pair is required to collaboratively solve the given problem using a single system. Once the solution is successfully implemented and verified, the second member may use that solution for their individual assignment submission.
        </p>
        <p className="mt-4"><strong>Guidelines:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Form pairs before the session begins.</li>
          <li>Work together on one system per pair to develop and test the solution.</li>
          <li>In case a student is unable to find a partner, they should pair up with the mentor for this activity.</li>
          <li>Use of Large Language Models (LLMs) such as ChatGPT, Gemini, or similar tools is strictly prohibited.</li>
          <li>You may refer to Google or official documentation only for understanding syntax or language-specific concepts.</li>
        </ul>
        <p className="mt-4">
          The objective of this activity is to encourage collaboration, logical thinking, and peer learning while maintaining academic integrity.
        </p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.3 Quiz: DFS Tree Traversals"
          questions={[
            {
              question: "In which traversal order does the ROOT node get visited FIRST?",
              options: ["Inorder", "Preorder", "Postorder", "Level Order"],
              correctAnswer: 1,
              explanation: "In Preorder traversal the sequence is Root → Left → Right. The root is processed before any of its subtrees."
            },
            {
              question: "Inorder traversal on a Binary Search Tree (BST) produces nodes in which order?",
              options: ["Random order", "Reverse sorted (descending) order", "Sorted (ascending) order", "Level-by-level order"],
              correctAnswer: 2,
              explanation: "Inorder (Left → Root → Right) on a BST visits nodes from the smallest to the largest value, producing sorted ascending output."
            },
            {
              question: "Postorder traversal is most useful for which of the following tasks?",
              options: ["Printing a BST alphabetically", "Creating a copy of the tree", "Finding the shortest path", "Deleting a tree safely"],
              correctAnswer: 3,
              explanation: "In Postorder (Left → Right → Root), children are visited before their parent. This ensures child nodes are deleted before the parent, preventing dangling references."
            },
            {
              question: "For the tree: A at root, B as left child, C as right child — what is the Preorder result?",
              options: ["B → A → C", "B → C → A", "A → B → C", "C → B → A"],
              correctAnswer: 2,
              explanation: "Preorder is Root → Left → Right, so we visit A first, then B (left), then C (right): A → B → C."
            },
            {
              question: "All three DFS traversals (Inorder, Preorder, Postorder) share which time complexity?",
              options: ["O(log n)", "O(n log n)", "O(n)", "O(n^2)"],
              correctAnswer: 2,
              explanation: "Each DFS traversal visits every node exactly once, giving a linear O(n) time complexity regardless of the visit order."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={3}
        />
      </section>
    </div>
  );
};

export default Module4_3;
