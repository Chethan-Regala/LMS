'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.2</div>
        <div className="lesson-title-main">
          <h1>Assignment | Level Order Traversal</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">Quick Tip: You can either read through the text content below, or if you prefer not to read, a NotebookLM generated video summary is attached towards the end of this lesson!</p>
        </div>
        <p>
          In our last lesson, we laid the foundation. We explored what Trees and Forests are, their properties, and most importantly, how they are stored in computer memory. You now know that a tree isn't just a drawing on a whiteboard; it's a specific arrangement of data pointers.
        </p>
        <p>
          But having data stored is only half the battle. The real magic happens when we need to read, search, or modify that data.
        </p>
        <p>Ask yourself:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>How does a search engine crawl through links?</li>
          <li>How does Facebook suggest "Friends of Friends"?</li>
          <li>How do you find the shortest route on a map?</li>
        </ul>
        <p>
          These tasks rely on Traversals—efficiently visiting every node in a structure. Today, we are going to uncover the magic behind this. While we will take a brief look at the different ways to traverse a tree, our main spotlight today is on Breadth-First Traversal, also known as Level Order Traversal.
        </p>
      </section>

      <section className="content-section">
        <h3>What is Traversal?</h3>
        <p>
          Simply put, Tree Traversal is the process of visiting each node in a tree exactly once.
        </p>
        <p>
          Think of it like reading a book. You don't just open pages randomly; you have a system. You might read line-by-line (level by level) or finish one chapter before starting the next (depth by depth).
        </p>
        <p>In Computer Science, we have two main "families" of traversal:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Depth-First Search (DFS):</strong> The "Deep Diver."</li>
          <li><strong>Breadth-First Search (BFS):</strong> The "Wide Explorer."</li>
        </ul>
        <p>
          Let's quickly understand the "Deep Diver" first, so we can appreciate how unique our main topic (BFS) really is.
        </p>
      </section>

      <section className="content-section">
        <h3>A Brief Walkthrough of Depth-First Algorithms</h3>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p><strong>Note:</strong> We will explore DFS in depth in future lessons; we are briefly introducing it here only so you can clearly understand the specific strengths and trade-offs of today's focus, Level Order Traversal.</p>
        </div>
        <p>
          Depth-First Search (DFS) explores as far as possible along each branch before backtracking. Imagine a maze runner who touches the wall and follows it all the way to a dead-end before turning back.
        </p>
        <p>There are three standard ways to do this (don't worry about the code for these right now, just focus on the flow):</p>

        <h4 className="font-semibold mt-4">Inorder Traversal (Left -&gt; Root -&gt; Right):</h4>
        <p>
          Great for Binary Search Trees (BST) because it retrieves data in sorted (ascending) order. Like listing words in a dictionary alphabetically.
        </p>

        <h4 className="font-semibold mt-4">Preorder Traversal (Root -&gt; Left -&gt; Right):</h4>
        <p>
          Useful for creating a copy of a tree. You visit the root first, so you can create it, then attach the children.
        </p>

        <h4 className="font-semibold mt-4">Postorder Traversal (Left -&gt; Right -&gt; Root):</h4>
        <p>
          Useful for deleting a tree. You delete the children first (leaves) before you delete the parent (root), ensuring no references are lost.
        </p>

        <p className="mt-4">
          <strong>Transition:</strong> DFS is powerful, but sometimes we don't want to dive deep. Sometimes, we want to explore what's right in front of us first. That brings us to today's topic.
        </p>
      </section>

      <section className="content-section">
        <h3>Exploring Breadth-First (Level Order) Traversal</h3>
        <p>
          Breadth-First Traversal (BFT), or Level Order Traversal, works differently. instead of diving down, it moves horizontally.
        </p>
        <p>
          BFS visits all the nodes at the current depth (level) before moving down to the next level.
        </p>

        <h4 className="font-semibold mt-4">The Analogy</h4>
        <p>Imagine you are looking for a specific colleague in a large office building.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>DFS approach:</strong> You pick one elevator, go to the top floor, check one room, then go down, checking one room on every floor until you hit the lobby, then go back up.</li>
          <li><strong>BFS approach:</strong> You check the whole lobby first. Then you go to the 1st floor and check every room. Then the 2nd floor, and so on.</li>
        </ul>

        <h4 className="font-semibold mt-4">How it Works</h4>
        <p>
          While DFS usually uses a Stack (or recursion), BFS relies on a Queue (First-In, First-Out). This is crucial.
        </p>
        <p>The Algorithm:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Enqueue the Root node.</li>
          <li>While the Queue is not empty:
            <ul className="list-disc ml-6 mt-2">
              <li>Dequeue a node (take it out from the front).</li>
              <li>Visit that node (print it/process it).</li>
              <li>Enqueue all of that node's children (add them to the back).</li>
            </ul>
          </li>
        </ol>
        <p>
          By adding children to the back of the line, we ensure we finish the current level before looking at the next one.
        </p>
      </section>

      <section className="content-section">
        <h3>DFS vs. BFS</h3>
        <p>
          Now that you know both concepts, how do you choose? Let's break it down.
        </p>

        <h4 className="font-semibold mt-4">1. Time and Space Complexity</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Time Complexity:</strong> Both are O(n). Whether you go deep or wide, you still have to visit n nodes.</li>
          <li><strong>Space Complexity (Memory):</strong> This is where they differ.
            <ul className="list-disc ml-6 mt-2">
              <li><strong>DFS:</strong> Uses memory proportional to the height of the tree. Better for narrow, deep trees.</li>
              <li><strong>BFS:</strong> Uses memory proportional to the width of the tree (maximum number of nodes at any one level). This can be heavy on memory for very wide trees.</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-semibold mt-4">2. When to use which?</h4>
        <p><strong>Use BFS (Level Order) when:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>You are looking for the shortest path (e.g., GPS navigation, social media connections).</li>
          <li>The solution is likely close to the root.</li>
          <li>You need to print the tree structure visually layer-by-layer.</li>
        </ul>
        <p className="mt-4"><strong>Use DFS when:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>You need to solve puzzles (mazes, Sudoku) where you need to reach the end to see if a solution exists.</li>
          <li>Memory is tight, and the tree is very wide.</li>
        </ul>

        <h4 className="font-semibold mt-4">3. Limitations & Failures</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>DFS Failure:</strong> In graphs (unlike trees) that have cycles (loops), DFS can get stuck in an infinite loop if you don't mark nodes as "visited." It can also cause a "Stack Overflow" if the tree is extremely deep.</li>
          <li><strong>BFS Failure:</strong> If the tree is incredibly wide, the Queue can grow so large that it consumes all available RAM (Out of Memory error).</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>How to Overcome Algorithm Failures</h3>
        <p>
          We discussed where these algorithms fail, DFS hitting stack overflows, and BFS running out of memory. But as engineers, we don't just identify problems; we fix them. Here is how we overcome these specific challenges:
        </p>

        <h4 className="font-semibold mt-4">1. Overcoming DFS Failures</h4>
        <p><strong>The Problem: Stack Overflow.</strong> If a tree is extremely deep (like a linked list with millions of nodes), recursive DFS will crash because the computer's call stack has a limit.</p>
        <p>
          <strong>The Fix: Iterative DFS.</strong> Instead of using recursion (the system's stack), we handle the logic manually using an explicit Stack data structure in our code. This moves the memory usage from the limited call stack to the much larger heap memory, allowing us to traverse much deeper trees without crashing.
        </p>
        <p className="mt-4"><strong>The Problem: Infinite Loops (in Graphs).</strong> If you apply DFS to a structure that has cycles (loops), it will run forever.</p>
        <p>
          <strong>The Fix: Visited Array.</strong> We simply keep a list or a "set" of nodes we have already seen. Before visiting a node, we check: "Have I been here before?" If yes, we skip it.
        </p>

        <h4 className="font-semibold mt-4">2. Overcoming BFS Failures</h4>
        <p><strong>The Problem: Memory Hog.</strong> In a massive tree or graph, the queue can get too big, crashing the program (Out of Memory).</p>
        <p>
          <strong>The Fix: Iterative Deepening DFS (IDDFS).</strong> This is a hybrid technique. It mimics the behavior of BFS (visiting level by level) but uses the memory efficiency of DFS.
        </p>
        <p>
          <strong>How it works:</strong> We run a DFS but give it a "leash", a depth limit. First, we say "DFS, but don't go deeper than Level 1." Then "DFS, don't go deeper than Level 2," and so on. This allows us to find the shortest path (like BFS) without storing a massive queue in memory (like DFS).
        </p>
      </section>

      <section className="content-section">
        <h3>Code Walkthrough</h3>
        <p>
          Let's look at how we implement Level Order Traversal in C++.
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;

    vector<int> nodes(N);
    for (int i = 0; i < N; i++) {
        cin >> nodes[i];
    }

    unordered_map<int, vector<int>> children;
    unordered_set<int> childSet;

    for (int i = 0; i < N - 1; i++) {
        int parent, child;
        cin >> parent >> child;

        children[parent].push_back(child);
        childSet.insert(child);
    }

    // Find root (node that never appears as a child)
    int root;
    for (int node : nodes) {
        if (childSet.find(node) == childSet.end()) {
            root = node;
            break;
        }
    }

    // Perform level order traversal using queue
    queue<int> q;
    q.push(root);

    while (!q.empty()) {
        int current = q.front();
        q.pop();

        cout << current << " ";

        // Add all children to the queue
        for (int child : children[current]) {
            q.push(child);
        }
    }

    return 0;
}`}</pre>
        </div>
      </section>

      <section className="content-section">
        <h3>Video Summary</h3>
        <div className="flex justify-center my-6">
          <iframe
            src="https://drive.google.com/file/d/1WbnJliQZFKUZHFMfIVYexguXIiFptmwn/preview"
            width="560"
            height="315"
            allow="autoplay"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <p>To wrap up:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>BFS explores layer by layer, like reading a book line by line.</li>
          <li>It uses a Queue to manage the flow.</li>
          <li>It is ideal for finding shortest paths but can be memory-intensive on wide trees.</li>
        </ul>
        <p>
          We've covered the theory, the logic, and the comparisons. But the best way to understand traversal is to actually implement it yourself and see the nodes printing in the console.
        </p>
        <p>
          So, let's transition from the theory to the IDE. Open up your editors, and let's start the live code along!
        </p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.2 Quiz: Level Order Traversal (BFS)"
          questions={[
            {
              question: "Which data structure does BFS (Level Order Traversal) rely on to process nodes?",
              options: ["Stack", "Queue", "Array", "Linked List"],
              correctAnswer: 1,
              explanation: "BFS uses a Queue (First-In, First-Out). By enqueuing children at the back, we guarantee all nodes at the current level are visited before moving to the next."
            },
            {
              question: "Both BFS and DFS have the same time complexity. What is it?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
              correctAnswer: 2,
              explanation: "Both algorithms visit every node exactly once, resulting in O(n) time complexity regardless of the direction of traversal."
            },
            {
              question: "When is BFS preferred over DFS?",
              options: ["When memory is tight and the tree is very wide", "When looking for a deep node in a very tall tree", "When searching for the shortest path or a node near the root", "When the tree has no children"],
              correctAnswer: 2,
              explanation: "BFS explores level by level, so it naturally finds the shortest path and is ideal when the solution is expected to be close to the root."
            },
            {
              question: "What is the first step in the BFS (Level Order) algorithm?",
              options: ["Dequeue the root", "Enqueue the root node", "Visit all leaf nodes", "Sort the nodes by value"],
              correctAnswer: 1,
              explanation: "BFS begins by placing the root into the queue. Everything that follows is driven by the queue's FIFO processing order."
            },
            {
              question: "Which approach mitigates BFS's high memory usage while still finding shortest paths?",
              options: ["Recursive DFS", "Iterative DFS with a stack", "Iterative Deepening DFS (IDDFS)", "Preorder traversal"],
              correctAnswer: 2,
              explanation: "IDDFS is a hybrid technique: it runs DFS with increasing depth limits, achieving BFS-like shortest-path guarantees with DFS-like memory efficiency."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={2}
        />
      </section>
    </div>
  );
};

export default Module4_2;
