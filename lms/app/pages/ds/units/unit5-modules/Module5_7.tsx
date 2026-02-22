'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.7</div>
        <div className="lesson-title-main">
          <h1>Graph Traversal Algorithms (BFS & DFS)</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi there! Welcome to today's session.</p>
        <p>
          In our previous lesson, "Introduction to Graphs and Representation," we learned how to structure the world into nodes (vertices) and connections (edges). You learned how to store these networks using Adjacency Matrices and Adjacency Lists.
        </p>
        <p>
          But simply storing a map isn't enough; you need to know how to read it. Imagine having a map of a city but not knowing how to trace a route from point A to point B.
        </p>
        <p className="mt-4">
          <strong>Today's Goal:</strong> We are going to learn how to move through a graph systematically. This process is called Graph Traversal.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            Graph Traversal refers to the process of visiting (checking and/or updating) each vertex in a graph in a specific order.
          </p>
        </div>
        <p>Think of it like this:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>BFS (Breadth-First Search):</strong> Imagine dropping a pebble into a pond. The ripples explore outward in perfect circles, layer by layer.</li>
          <li><strong>DFS (Depth-First Search):</strong> Imagine solving a maze. You pick a path and run down it until you hit a dead end, then you backtrack and try the next path.</li>
        </ul>
        <p className="mt-4">
          Let's start our exploration with the "Ripple" method: Breadth-First Search.
        </p>
      </section>

      <section className="content-section">
        <h3>Breadth-First Search (BFS)</h3>
        <p>
          BFS is a traversal algorithm that explores a graph level by level. It visits all the neighbors of a starting node before moving on to the neighbors of those neighbors.
        </p>
        <h4 className="font-semibold mt-4">Visualizing BFS</h4>
        <p>
          To manage the order of visits, BFS uses a Queue data structure (First-In, First-Out).
        </p>
        <div className="flex flex-col items-center my-6">
          <video
            width="640"
            height="480"
            controls
            className="rounded-lg shadow-md"
          >
            <source src="https://usaco.guide/animations/bfs_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 mt-2">Credits: USACO</p>
        </div>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">Real-World Analogy: The Delivery Route</h4>
        <p>
          Imagine you are a new delivery person in a small town. You are at the Post Office (P) and you want to find the shortest path (fewest stops) to the Cinema (C).
        </p>
        <p className="mt-4">Here is the map of the town:</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`+-------+ +-------+ +-------+
| Park |------|Library|------| School|
+-------+ +-------+ +-------+
    |             |
    |             |
+-------+ +-------+ +-------+
| Post |------|Market |------| Cinema|
+-------+ +-------+ +-------+`}</pre>
        </div>
        <p><strong>How BFS solves this:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Start at Post Office.</li>
          <li>Layer 1: Visit immediate neighbors: Park and Market.</li>
          <li>Layer 2: Visit neighbors of Park (Library) and Market (Cinema).</li>
          <li>Found it! You found the Cinema in Layer 2.</li>
        </ol>

        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see the Step-by-Step BFS Trace</summary>
          <div className="mt-4">
            <p>We use a Queue to track where to go next.</p>
            <ol className="list-decimal ml-6 space-y-2 mt-2">
              <li>Start at Post Office (P). Queue: [P]</li>
              <li>Dequeue P. Visit unvisited neighbors (K, M). Queue: [K, M]</li>
              <li>Dequeue K (Park). Visit unvisited neighbor (L). Queue: [M, L]</li>
              <li>Dequeue M (Market). Visit unvisited neighbor (C). Queue: [L, C]</li>
              <li>Dequeue L (Library). Visit unvisited neighbor (S). Queue: [C, S]</li>
              <li>Dequeue C (Cinema). No new neighbors. Queue: [S]</li>
              <li>Dequeue S (School). Done.</li>
            </ol>
            <p className="mt-4"><strong>Traversal Order:</strong> P -&gt; K -&gt; M -&gt; L -&gt; C -&gt; S</p>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">Implementation (C++)</h4>
        <p>
          To code this, we use a std::queue to store nodes we need to visit, and a visited array to ensure we don't go in circles.
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void bfs(vector<vector<int>>& graph, int startNode) {
    int numNodes = graph.size();
    vector<bool> visited(numNodes, false);
    queue<int> q;

    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " "; // Process the node

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`}</pre>
        </div>

        <h4 className="font-semibold mt-4">Why use BFS?</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Shortest Path:</strong> In unweighted graphs (like our town map), BFS always finds the shortest path.</li>
          <li><strong>Social Networks:</strong> Finding "Friends of Friends" (2nd degree connections).</li>
          <li><strong>Web Crawlers:</strong> Exploring links level-by-level from a source page.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Depth-First Search (DFS)</h3>
        <p>
          Now, let's change our strategy. DFS (Depth-First Search) explores a graph as deeply as possible along each branch before backtracking.
        </p>
        <h4 className="font-semibold mt-4">Visualizing DFS</h4>
        <p>
          DFS uses a Stack data structure (Last-In, First-Out). This can be done explicitly with a stack or implicitly using Recursion.
        </p>
        <div className="flex flex-col items-center my-6">
          <video
            width="640"
            height="480"
            controls
            className="rounded-lg shadow-md"
          >
            <source src="https://usaco.guide/animations/dfs_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 mt-2">Credits: USACO</p>
        </div>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">Real-World Analogy: The Maze Explorer</h4>
        <p>
          Let's go back to our delivery driver. This time, you aren't looking for the shortest path. You are just exploring the town to see every single street, going as far as you can before turning back.
        </p>
        <p className="mt-4"><strong>How DFS solves this:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Start at Post Office.</li>
          <li>Go to Park. From Park, immediately go to Library.</li>
          <li>From Library, immediately go to School.</li>
          <li>School is a dead end! Backtrack to Library.</li>
          <li>From Library, go to Market.</li>
          <li>From Market, go to Cinema.</li>
        </ol>

        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see the Step-by-Step DFS Trace</summary>
          <div className="mt-4">
            <p>We use a Stack (or Recursion) to track our path.</p>
            <ol className="list-decimal ml-6 space-y-2 mt-2">
              <li>Start P. Stack: [P]</li>
              <li>Visit Neighbor K. Stack: [P, K]</li>
              <li>Visit Neighbor L. Stack: [P, K, L]</li>
              <li>Visit Neighbor S. Stack: [P, K, L, S]</li>
              <li>S is a dead end. Pop S. Stack: [P, K, L]</li>
              <li>Back at L. Visit other neighbor M. Stack: [P, K, L, M]</li>
              <li>Visit Neighbor C. Stack: [P, K, L, M, C]</li>
              <li>C is a dead end. Pop C... (Backtrack all the way home).</li>
            </ol>
            <p className="mt-4"><strong>Traversal Order:</strong> P -&gt; K -&gt; L -&gt; S -&gt; M -&gt; C (Note: Order varies based on which neighbor you pick first)</p>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">Implementation (C++ using Recursion)</h4>
        <p>
          The code for DFS is often shorter because the "stack" is handled by the computer's recursion stack.
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`void dfs(vector<vector<int>>& graph, int node, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " "; // Process the node

    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited); // Recursive call
        }
    }
}`}</pre>
        </div>

        <h4 className="font-semibold mt-4">Why use DFS?</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Maze Solving:</strong> Exploring paths until you find an exit.</li>
          <li><strong>Cycle Detection:</strong> Checking if a system has loops (deadlocks).</li>
          <li><strong>Topological Sorting:</strong> Deciding the order of tasks where some tasks depend on others (like compiling code).</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Complexity & Comparison</h3>
        <p>
          Both algorithms visit every node and every edge exactly once in the worst case.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">BFS (Breadth-First)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">DFS (Depth-First)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Data Structure</td>
                <td className="border border-gray-300 px-4 py-2">Queue (FIFO)</td>
                <td className="border border-gray-300 px-4 py-2">Stack (LIFO) or Recursion</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Strategy</td>
                <td className="border border-gray-300 px-4 py-2">Level by Level (Ripples)</td>
                <td className="border border-gray-300 px-4 py-2">Deep dive then backtrack (Maze)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Time Complexity</td>
                <td className="border border-gray-300 px-4 py-2">O(V + E)</td>
                <td className="border border-gray-300 px-4 py-2">O(V + E)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Space Complexity</td>
                <td className="border border-gray-300 px-4 py-2">O(V) (Width of graph)</td>
                <td className="border border-gray-300 px-4 py-2">O(V) (Height of graph)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Best For</td>
                <td className="border border-gray-300 px-4 py-2">Finding shortest paths</td>
                <td className="border border-gray-300 px-4 py-2">Path existence, Puzzle solving</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Where V is the number of vertices and E is the number of edges.
        </p>
      </section>

      <section className="content-section">
        <p>Let's do a quick mental check.</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">Discussion Task: Consider a Binary Tree (which is just a specific type of graph).</p>
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li>If you use BFS on a tree, what is the traversal order usually called?</li>
            <li>If you use DFS on a tree, what are the traversal orders?</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <p>
          Now that you understand the logic, it's time to write the code yourself. In the next lesson, "Assignment | BFS and DFS on a Graph," you will be challenged to implement these algorithms to solve specific problems.
        </p>
        <p className="mt-4">
          See you there!
        </p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FMindmaps%2FGraph%20traversal%20-%20Mindmap.png" alt="Mind map" />
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.7 Quiz: Graph Traversal - BFS & DFS"
          questions={[
            {
              question: "What data structure does BFS use to track nodes to visit?",
              options: ["Stack", "Queue", "Heap", "Array"],
              correctAnswer: 1,
              explanation: "BFS uses a Queue (FIFO). Nodes discovered at the current level are enqueued and processed before going deeper, ensuring level-by-level traversal."
            },
            {
              question: "What data structure does DFS use (either explicitly or via recursion)?",
              options: ["Queue", "Priority Queue", "Stack", "Deque"],
              correctAnswer: 2,
              explanation: "DFS uses a Stack — either an explicit stack in iterative implementation, or the call stack implicitly via recursion. This enables deep-first exploration."
            },
            {
              question: "Why must we track VISITED nodes in graph traversal (unlike tree traversal)?",
              options: ["To count edges", "Graphs can have cycles which would cause infinite loops without visited tracking", "To determine the height", "For sorting purposes"],
              correctAnswer: 1,
              explanation: "Unlike trees, graphs can have cycles. Without marking visited nodes, traversal might loop endlessly through cyclic paths. A visited set/array prevents revisiting."
            },
            {
              question: "BFS is preferred over DFS when the goal is to find the:",
              options: ["Deepest node", "Shortest path in an unweighted graph", "All nodes in a component", "Topological ordering"],
              correctAnswer: 1,
              explanation: "BFS explores layer by layer, so the first time it reaches the destination node is guaranteed to be via the shortest path (fewest edges) in an unweighted graph."
            },
            {
              question: "For BFS on a graph with V vertices and E edges, what is the time complexity?",
              options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
              correctAnswer: 2,
              explanation: "BFS visits each vertex once (O(V)) and processes each edge once (O(E)), giving a total time complexity of O(V + E)."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={7}
        />
      </section>
    </div>
  );
};

export default Module5_7;
