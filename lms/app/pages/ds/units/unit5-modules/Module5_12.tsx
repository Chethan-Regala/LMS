'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.12</div>
        <div className="lesson-title-main">
          <h1>Cycle Detection in Graphs</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In this lesson, you will explore how to detect cycles in graphs. But before that let's revise what graphs are. Okay, so simply put a graph is like a collection of things (called nodes or vertices) that are connected to each other by links (called edges). Think of it as a group of friends. The friends are the nodes, and if two friends know each other, there's a link between them.
        </p>
        <p className="mt-4">
          Now, with that clear, let's focus on today's topic. We'll start by learning what a cycle in a graph is, then move to the other topics.
        </p>
      </section>

      <section className="content-section">
        <h3>What is a Cycle?</h3>
        <p>
          Consider a map with cities connected by roads. A cycle on this map is like a road trip where you start in one city, travel through several others, and return to your starting city. You've completed a full loop without revisiting any city (except the start/end) more than once.
        </p>
        <p className="mt-4">
          Think of a roundabout as a circular path. You enter from one road, take a few exits, and eventually exit back onto the original road. This circular path is like a cycle in a graph, starting and ending at the same point after visiting other connecting points.
        </p>
        <p className="mt-4">The diagram below shows how a cycle looks in a graph.</p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/cycle+in+graph.png"
            alt="Cycle in Graph"
            className="max-w-2xl rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-600 mt-2">Credits: favtutor</p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Explanation:</p>
          <p className="mt-2">
            The diagram illustrates a cycle in an undirected graph. Starting from vertex C, you can follow the edges to D, then E, then G, then F, and finally back to C. This closed path, C-D-E-G-F-C, demonstrates a cycle where you begin and end at the same vertex by traversing a sequence of distinct edges.
          </p>
        </div>
        <p className="mt-4">
          Now that we understand the basics of graphs and cycles, let's explore how we can use the Breadth-First Search (BFS) algorithm to find cycles, specifically in undirected graphs.
        </p>
      </section>

      <section className="content-section">
        <h3>Cycle Detection in an Undirected Graph Using BFS</h3>
        <p>
          Let's briefly understand Breadth-First Search (BFS). BFS is a graph traversal algorithm that explores a graph level by level. Starting from a chosen node, it visits its immediate neighbors, then those of its neighbors, and so on. A queue data structure tracks the nodes to visit, ensuring closer nodes are visited first.
        </p>
        <p className="mt-4">
          When using BFS to detect cycles in an undirected graph, track visited nodes and their parents during traversal. If a neighbor of the current node is visited but not the immediate parent, a cycle exists. This implies an alternative path to the node, forming a loop.
        </p>
        <p className="mt-4">Let's see how we can take a programmatic approach to this.</p>
      </section>

      <section className="content-section">
        <h3>Approach</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Use a queue for BFS and a visited array (initially all unvisited).</li>
          <li>Enqueue the source node paired with its parent (e.g., &lt;source, parent&gt;).</li>
          <li>Mark the source node as visited.</li>
          <li>While the queue is not empty:
            <ul className="list-disc ml-6 mt-2">
              <li>Dequeue a node and its parent.</li>
              <li>For each unvisited neighbor of the current node:
                <ul className="list-disc ml-6 mt-2">
                  <li>Enqueue the neighbor with the current node as its parent.</li>
                  <li>Mark the neighbor as visited.</li>
                </ul>
              </li>
              <li>For each visited neighbor of the current node:
                <ul className="list-disc ml-6 mt-2">
                  <li>If the visited neighbor is NOT the current node's parent, a cycle exists.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>If the queue becomes empty without detecting a cycle, the graph has no cycles.</li>
        </ol>
        <p className="mt-4">
          The animation below visually demonstrates this process of cycle detection in an undirected graph using the Breadth-First Search algorithm.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/bfs+cycle+detection.gif"
            alt="BFS Cycle Detection Animation"
            className="max-w-2xl rounded-lg shadow-md"
          />
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/adjacency+list+for+bfs+diagram.png" alt="" />
          <p className="text-sm text-gray-600 mt-2">Credits: takeuforward</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Explanation</h3>
        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Click to Expand</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Initialization</h4>
              <p>All nodes are unvisited → Visited array = [0, 0, 0, 0, 0, 0, 0]</p>
              <p>Queue is empty at the beginning.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Start BFS from node 1</h4>
              <p>Node 1 is marked as visited → Update Visited array.</p>
              <p>Add (1, -1) to the queue (node 1 has no parent, so we use -1).</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Explore neighbors of 1</h4>
              <p>Node 1 has neighbors: 2 and 3.</p>
              <p>Both are unvisited: Mark 2 and 3 as visited. Add (2, 1) and (3, 1) to the queue.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 4: Explore node 2</h4>
              <p>Pop (2, 1) from queue. Neighbors of 2: 1 and 5.</p>
              <p>1 is already visited and it's the parent, so it's okay.</p>
              <p>5 is unvisited → mark visited and add (5, 2) to queue.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 5: Explore node 3</h4>
              <p>Pop (3, 1) from queue. Neighbors: 1, 4, 6.</p>
              <p>1 is already visited and is the parent → okay.</p>
              <p>4 and 6 are unvisited → mark visited and add (4, 3) and (6, 3) to queue.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 6: Explore node 5</h4>
              <p>Pop (5, 2) from queue. Neighbors: 2 and 7.</p>
              <p>2 is the parent → okay. 7 is unvisited → mark visited and add (7, 5) to queue.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 7: Explore node 4</h4>
              <p>Pop (4, 3) → Neighbor is 3 (already visited and parent) → okay.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 8: Explore node 6</h4>
              <p>Pop (6, 3) → Neighbors: 3 and 7.</p>
              <p>3 is the parent → okay.</p>
              <p>7 is already visited BUT it's not the parent → ⚠️ Cycle found!</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>BFS Example: Triangle Graph</h3>
        <p>Consider an undirected graph with 3 nodes and 3 edges, forming a triangle:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Nodes: 1, 2, 3</li>
          <li>Edges: (1-2), (2-3), (3-1)</li>
        </ul>
        <p className="mt-4">We'll start the BFS from node 1.</p>
        <p className="mt-4">
          The BFS algorithm successfully detected a cycle in the undirected graph. Starting from node 1, we explored its neighbors. When processing node 2 (reached from node 1), we encountered its neighbor 3, which was already visited and was not the parent of node 2. This indicates a back edge (3-2) that completes a cycle (1-2-3-1).
        </p>
      </section>

      <section className="content-section">
        <h3>Optional Video: BFS Cycle Detection</h3>
        <p>Learn how to detect cycles in undirected graphs using the Breadth First Search Algorithm by watching the video given below.</p>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BPlrALf1LDU"
            title="Detect Cycle in Undirected Graph using BFS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Cycle Detection in an Undirected Graph Using DFS</h3>
        <p>
          Let's start by recapping DFS first. DFS is like exploring a maze. You pick a path and go as deep as you can until you hit a dead end. Then, you backtrack (go back) to the last point where you had another option and try a different path. In graph terms, DFS starts at a node and keeps going to the next unvisited neighbor until there are no more new neighbors. If, during this deep exploration, you stumble upon a node you've already visited, it means you've found a cycle – you've created a loop back to a place you've been before.
        </p>
        <p className="mt-4">Now we'll explore what approach we can take to detect cycles in a graph using DFS.</p>
      </section>

      <section className="content-section">
        <h3>DFS Approach</h3>
        <p>
          This algorithm uses DFS to find cycles. It keeps track of visited nodes and the parent of each node during traversal. For each node, it explores its unvisited neighbors, marking them as visited and noting the current node as their parent. If a visited neighbor is found that is not the current node's parent, a cycle exists. This check for a non-parent visited node is crucial to avoid mistakenly identifying the immediate backtrack in the DFS as a cycle (e.g., moving from node 2 to 1 and then back to 2). Only when we encounter an already visited node through a different path (not just the one we came from) have we found a cycle.
        </p>
        <p className="mt-4">Let's understand this better using the animation given below.</p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/cycle+detection+using+DFS.gif"
            alt="DFS Cycle Detection Animation"
            className="max-w-2xl rounded-lg shadow-md"
          />
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/adjacency+list+for+DFS.png" alt="" />
        </div>
      </section>

      <section className="content-section">
        <h3>DFS Step-by-Step Explanation</h3>
        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Click to Expand</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Start DFS from Node 1</h4>
              <p>We begin the DFS at Node 1. Mark Node 1 as visited by setting Visited[1] = 1. Since Node 1 is the starting point, we designate its parent as -1.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Move to neighbor Node 2 (from 1)</h4>
              <p>From Node 1, we move to its neighbor, Node 2, which has not been visited yet. Mark Node 2 as visited by setting Visited[2] = 1 and record its parent as Node 1.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Move to neighbor Node 5 (from 2)</h4>
              <p>Next, we proceed from Node 2 to its unvisited neighbor, Node 5. Mark Node 5 as visited by setting Visited[5] = 1, and set its parent to Node 2.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 4: Move to neighbor Node 7 (from 5)</h4>
              <p>From Node 5, the DFS advances to Node 7, which has not been visited. Mark Node 7 as visited by setting Visited[7] = 1 and assign Node 5 as its parent.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 5: Move to neighbor Node 6 (from 7)</h4>
              <p>Then, we move from Node 7 to its unvisited neighbor, Node 6. Mark Node 6 as visited by setting Visited[6] = 1, and record Node 7 as its parent.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 6: Move to neighbor Node 3 (from 6)</h4>
              <p>From Node 6, we continue the traversal by moving to Node 3, which has not yet been visited. Mark Node 3 as visited by setting Visited[3] = 1 and record its parent as Node 6.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 7: Move to neighbor Node 1 (from 3)</h4>
              <p>Finally, we attempt to move from Node 3 to its neighbor, Node 1. However, Node 1 has already been visited, and importantly, it is not the parent of Node 3. This situation confirms that a cycle exists in the graph because encountering a visited node that is not the parent indicates a back edge.</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>DFS Example: 4-Node Graph</h3>
        <p>Consider an undirected graph with 4 nodes and 4 edges:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Nodes: 1, 2, 3, 4</li>
          <li>Edges: (1-2), (2-3), (3-4), (4-2)</li>
        </ul>
        <p className="mt-4">We'll start the DFS from node 1.</p>
        <p className="mt-4">
          The DFS algorithm identified a cycle in this undirected graph. Starting from node 1, the traversal went to 2, then 3, and then 4. When exploring neighbors of node 4, we encountered node 2, which was already visited and present in the current recursion stack. This back edge (4-2) confirms the existence of a cycle: 2-3-4-2.
        </p>
      </section>

      <section className="content-section">
        <h3>Optional Video: DFS Cycle Detection</h3>
        <p>You can also watch this video, which shows how to detect cycles in undirected graphs using the Depth First Search Algorithm.</p>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zQ3zgFypzX4"
            title="Detect Cycle in Undirected Graph using DFS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Which One is Better?</h3>
        <p>
          Both Breadth-First Search (BFS) and Depth-First Search (DFS) are powerful and widely used algorithms for traversing graphs and can effectively identify the presence of cycles in undirected graphs. While they both achieve the same goal, they employ distinct strategies and have different characteristics. Let's now delve into the specific differences between these two approaches using the table below:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Breadth-First Search (BFS)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Depth-First Search (DFS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Data Structure</td>
                <td className="border border-gray-300 px-4 py-2">Queue</td>
                <td className="border border-gray-300 px-4 py-2">Stack (implicitly through recursion)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Cycle Detection</td>
                <td className="border border-gray-300 px-4 py-2">Detects a cycle when encountering a visited neighbor that is not the parent of the current node.</td>
                <td className="border border-gray-300 px-4 py-2">Detects a cycle when encountering a visited neighbor that is currently in the recursion stack.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Parent Tracking</td>
                <td className="border border-gray-300 px-4 py-2">Explicitly maintains parent information for each node during traversal.</td>
                <td className="border border-gray-300 px-4 py-2">Implicitly tracks the current path through the recursion stack.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Order of Traversal</td>
                <td className="border border-gray-300 px-4 py-2">Explores nodes level by level.</td>
                <td className="border border-gray-300 px-4 py-2">Explores as far as possible along each branch before backtracking.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Implementation</td>
                <td className="border border-gray-300 px-4 py-2">Typically iterative using a queue.</td>
                <td className="border border-gray-300 px-4 py-2">Can be implemented recursively or iteratively using a stack.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">First Cycle Found</td>
                <td className="border border-gray-300 px-4 py-2">May find a shorter cycle first (due to level-by-level exploration).</td>
                <td className="border border-gray-300 px-4 py-2">May find a cycle that is deeper in the graph first.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          In essence, the fundamental difference lies in how they explore the graph. BFS adopts a level-by-level approach, prioritizing breadth, while DFS prioritizes depth, exploring one path as far as possible. This difference in exploration strategy leads to variations in how they detect cycles and their suitability for different graph problems.
        </p>
      </section>

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p>This section is optional and if you would like to explore further, you can use the following resources:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a
              href="https://www.youtube.com/watch?v=9twcmtQj4DU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Cycle detection using directed graph using DFS | YouTube
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@vignesh_waran/graph-algorithm-cycle-detection-in-undirected-graph-using-bfs-9f692bf7c2e6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Graph Algorithm — Cycle Detection in Undirected Graph using BFS | Medium
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/dsa/dsa_algo_graphs_cycledetection.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Graphs Cycle Detection | w3schools
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>
          For additional practice, you can visit the following leetcode links given below. This part is optional and you can continue to the next lesson without solving these problems.
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a
              href="https://leetcode.com/problems/find-if-path-exists-in-graph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-1: Find if Path Exists in Graph
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/redundant-connection/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-2: Redundant Connection
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/graph-valid-tree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-3: Graph Valid Tree
            </a>
          </li>
        </ul>
        <p className="mt-4">Over to the next lesson now.</p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.12 Quiz: Cycle Detection in Graphs"
          questions={[
            {
              question: "In BFS cycle detection for an undirected graph, how is a cycle identified?",
              options: ["When the queue becomes empty", "When a visited neighbor is found that is NOT the current node's parent", "When two nodes have the same value", "When the graph has more edges than nodes"],
              correctAnswer: 1,
              explanation: "In BFS, if we encounter an already-visited neighbor that is not the parent of the current node, it means we've found an alternative path back — a cycle."
            },
            {
              question: "Why do we track the PARENT node during BFS/DFS cycle detection in an undirected graph?",
              options: ["To find the root", "To avoid falsely reporting the reverse edge of the same edge as a cycle", "To count edges", "To compute depth"],
              correctAnswer: 1,
              explanation: "In an undirected graph, every edge A-B appears as both A→B and B→A. Without tracking the parent, going back to A from B would falsely trigger as a cycle. The parent check prevents this false positive."
            },
            {
              question: "How does DFS cycle detection differ from BFS in undirected graphs?",
              options: ["DFS uses a queue; BFS uses recursion", "DFS implicitly tracks paths via the recursion stack instead of an explicit parent queue", "DFS cannot detect cycles", "BFS checks the parent; DFS does not"],
              correctAnswer: 1,
              explanation: "DFS uses the recursion stack to implicitly track the current path. A cycle is detected when a neighbor is visited AND present in the current recursion path (excluding the immediate parent)."
            },
            {
              question: "In a triangle graph (nodes 1-2-3-1), starting BFS from node 1, at which step is the cycle detected?",
              options: ["When node 1 is first visited", "When node 3 is first visited", "When processing node 2 and finding node 3 is visited and not its parent", "When the queue empties"],
              correctAnswer: 2,
              explanation: "From node 1, BFS visits 2 and 3. When processing node 2, it checks neighbor 3 — 3 is already visited and is not 2's parent, so a cycle (1-2-3-1) is detected."
            },
            {
              question: "Which of these graphs would NOT contain a cycle?",
              options: ["A triangle (3 nodes, 3 edges)", "A path graph (3 nodes, 2 edges in a line)", "A complete graph K4", "A graph where every node has degree ≥ 2"],
              correctAnswer: 1,
              explanation: "A simple path graph (1-2-3) has no cycle: you can't return to a starting node without reusing an edge. All other options either are or typically contain cycles."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={12}
        />
      </section>
    </div>
  );
};

export default Module5_12;
