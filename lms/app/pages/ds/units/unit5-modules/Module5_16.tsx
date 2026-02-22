'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_16: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.16</div>
        <div className="lesson-title-main">
          <h1>Clash of Codes #4 | BSTs &amp; Graphs</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold text-xl">Enter the Final Chapter</p>
          <p className="mt-2 text-lg">The Algorithm Detective</p>
          <p className="mt-4">
            Learn how to identify algorithms from behavior — the exact skill top interviews test.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Session Snapshot</h3>
        <ul className="list-none space-y-2 mt-4">
          <li>⏱ 50-minute live session</li>
          <li>👥 Team-based competition</li>
          <li>📽 Fully PPT-driven</li>
          <li>⚡ Rapid-fire rounds</li>
          <li>🧠 Interview-focused thinking</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Why This Session Matters</h3>
        <div className="space-y-4 mt-4">
          <div>
            <p className="font-semibold">🧠 Think like an interviewer</p>
            <p className="ml-6">Identify algorithms without seeing full code</p>
          </div>
          <div>
            <p className="font-semibold">⚡ Handle pressure</p>
            <p className="ml-6">Timed decision-making just like real interviews</p>
          </div>
          <div>
            <p className="font-semibold">🔍 Spot patterns fast</p>
            <p className="ml-6">Behavior → Algorithm mapping</p>
          </div>
          <div>
            <p className="font-semibold">🗣 Defend your reasoning</p>
            <p className="ml-6">Explain why one approach beats others</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>How the Algorithm Detective Works</h3>
        <div className="space-y-4 mt-4">
          <div>
            <p className="font-semibold">1️⃣ Observe</p>
            <p className="ml-6">Read behavior clues shown on the slide</p>
          </div>
          <div>
            <p className="font-semibold">2️⃣ Discuss</p>
            <p className="ml-6">Quick team discussion and elimination</p>
          </div>
          <div>
            <p className="font-semibold">3️⃣ Decide</p>
            <p className="ml-6">First correct team scores points</p>
          </div>
          <div>
            <p className="font-semibold">⚡ Rapid-Fire</p>
            <p className="ml-6">45 seconds. One clue. Go.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Challenge Rounds</h3>
        <div className="space-y-4 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="font-semibold">🟢 Round 1 — Easy</p>
            <p className="mt-2">Recognize familiar algorithms from clear behavior clues.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-semibold">🟡 Round 2 — Medium</p>
            <p className="mt-2">Differentiate between similar-looking approaches.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="font-semibold">⚡ Rapid-Fire</p>
            <p className="mt-2">One clue. 45 seconds. Pure instinct.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold text-lg">This is the final Clash of Codes</p>
          <p className="mt-4">You've coded.</p>
          <p>You've debugged.</p>
          <p className="mt-2 font-semibold">Now it's time to think like an engineer.</p>
        </div>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.16 Quiz: BSTs & Graphs Review"
          questions={[
            {
              question: "An algorithm visits all nodes at the current depth before moving deeper. Which algorithm is it?",
              options: ["DFS", "BFS", "Binary Search", "Inorder Traversal"],
              correctAnswer: 1,
              explanation: "Level-by-level exploration is the hallmark of BFS (Breadth-First Search). It uses a queue and processes all neighbors of the current level before descending."
            },
            {
              question: "An algorithm always explores as far as possible before backtracking. Which algorithm is it?",
              options: ["BFS", "Level Order Traversal", "DFS", "Topological Sort"],
              correctAnswer: 2,
              explanation: "Going deep along one branch before backtracking is the signature behavior of DFS (Depth-First Search). It uses a stack (explicit or recursive)."
            },
            {
              question: "In a BST, the inorder traversal produces nodes in:",
              options: ["Random order", "Reverse sorted order", "Ascending sorted order", "Level order"],
              correctAnswer: 2,
              explanation: "Inorder traversal (Left → Root → Right) always visits BST nodes in ascending sorted order. This is one of the most useful properties of BSTs."
            },
            {
              question: "A graph algorithm detects 'back edges' using a recursion stack. It is solving:",
              options: ["Shortest path", "Cycle detection in a directed graph", "Minimum spanning tree", "BST validation"],
              correctAnswer: 1,
              explanation: "Back edges (from a node to an ancestor in the DFS tree) only appear in directed graphs with cycles. DFS with a 'currently in stack' flag detects these back edges."
            },
            {
              question: "You need to check if two nodes in an undirected graph are connected. The minimal approach is:",
              options: ["Sort all edges first", "Run BFS or DFS from one node and check if the other is reachable", "Build an adjacency matrix and check entry", "Compute shortest path with Dijkstra"],
              correctAnswer: 1,
              explanation: "Simple BFS or DFS from the source node marks all reachable nodes. If the destination is marked visited at the end, they are connected. This is O(V+E) and simpler than other approaches."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={16}
        />
      </section>
    </div>
  );
};

export default Module5_16;
