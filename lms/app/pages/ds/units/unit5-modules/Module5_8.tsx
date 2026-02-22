'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.8</div>
        <div className="lesson-title-main">
          <h1>Assignment | BFS and DFS on a Graph</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Welcome to your first real-world Graph challenge!</p>
        <p>
          In our last lesson, we visualized how BFS spreads like ripples in a pond and how DFS explores deep into a maze. We covered the theory, analyzed the time complexity, and looked at basic code snippets.
        </p>
        <p>
          Now, it's time to take off the training wheels. In this assignment, you will apply those exact algorithms to solve a practical system administration problem: monitoring a server network.
        </p>
      </section>

      <section className="content-section">
        <p>
          Imagine you are a System Administrator managing a massive network of servers. Servers are connected by cables, but sometimes cables break, or servers go offline. You have a "Mainframe" (Server 0) that needs to send a critical security update to a specific "Target Server."
        </p>
        <p className="mt-4">You need to write a program that answers two questions:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Latency (BFS):</strong> What is the shortest number of hops (cables) the update needs to travel to reach the Target?</li>
          <li><strong>Network Health (DFS):</strong> How many total servers can the Mainframe actually reach right now?</li>
        </ol>
        <p className="mt-4">
          This assignment will test your ability to implement BFS (for finding the shortest distance) and DFS (for counting connected nodes) in a single program.
        </p>
      </section>

      <section className="content-section">
        <h3>Understanding the Logic</h3>
        <p>
          Before you start coding, watch this short breakdown on why we use BFS for shortest paths and DFS for connectivity.
        </p>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pcKY4hjDrxk"
            title="5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <p>
          We have provided the boilerplate code that handles the input and builds the graph for you. Your job is to fill in the logic for two specific functions.
        </p>

        <h4 className="font-semibold mt-4">Task 1: BFS (Shortest Distance)</h4>
        <p>
          To find the shortest path in an unweighted graph (like a server network), BFS is the standard choice.
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Initialize Distance:</strong> Create a dist array filled with -1. This represents "unvisited" or "unreachable".</li>
          <li><strong>Start:</strong> Set dist[0] = 0 and push Server 0 into a Queue.</li>
          <li><strong>Loop:</strong> While the queue is not empty:
            <ul className="list-disc ml-6 mt-2">
              <li>Pop the current server.</li>
              <li><strong>Check:</strong> Is this the Target Server? If yes, return the distance immediately.</li>
              <li><strong>Explore:</strong> Look at all connected neighbors.</li>
              <li><strong>Update:</strong> If a neighbor has not been visited (dist is -1):
                <ul className="list-disc ml-6 mt-2">
                  <li>Set dist[neighbor] = dist[current] + 1</li>
                  <li>Push the neighbor into the queue.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Fail Safe:</strong> If the loop finishes and you never found the target, return -1.</li>
        </ol>

        <h4 className="font-semibold mt-4">Task 2: DFS (Counting Active Servers)</h4>
        <p>
          To count how many servers are in the active network, we just need to visit every reachable node once.
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Track Visits:</strong> Use a visited array (boolean) to make sure you don't count the same server twice.</li>
          <li><strong>Recursive Step (The Helper):</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Mark the current node as true in the visited array.</li>
              <li>Increment your count variable.</li>
              <li>Loop through all neighbors.</li>
              <li>If a neighbor is not visited, call the helper function on that neighbor.</li>
            </ul>
          </li>
          <li><strong>Wrapper:</strong> The main function just initializes the variables and calls the helper starting at Server 0.</li>
        </ol>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>
          If you want to warm up before taking on the assignment, try these problems:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a
              href="https://leetcode.com/problems/find-if-path-exists-in-graph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode 1971: Find if Path Exists in Graph (Great for DFS practice)
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/challenges/bfsshortreach/problem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              HackerRank: BFS: Shortest Reach (Very similar to our assignment)
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/find-the-town-judge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode 997: Find the Town Judge (Good for understanding node relationships)
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.8 Quiz: BFS & DFS on Server Networks"
          questions={[
            {
              question: "In the server network problem, what does BFS compute from a source server?",
              options: ["Number of servers total", "Shortest distance (fewest hops) to every reachable server", "The longest path", "Total bandwidth"],
              correctAnswer: 1,
              explanation: "BFS on an unweighted graph computes the minimum number of hops (edges) from the source to every reachable node, which equals the shortest distance."
            },
            {
              question: "In the server network problem, what does DFS count from a source server?",
              options: ["The shortest path", "Number of edges", "All reachable nodes (total servers accessible)", "Disconnected components"],
              correctAnswer: 2,
              explanation: "DFS explores as far as possible along each branch, marking all reachable nodes. Counting these visited nodes gives the total number of accessible servers."
            },
            {
              question: "Which initialization step is CRITICAL before starting BFS or DFS on a graph?",
              options: ["Sort the adjacency list", "Mark all nodes as visited", "Initialize a visited array/set (all false)", "Count total edges"],
              correctAnswer: 2,
              explanation: "You must initialize a visited array with all values set to false/unvisited before traversal begins. This prevents infinite loops and ensures correct counting."
            },
            {
              question: "What adjacency list entry do you add when building an UNDIRECTED graph edge between servers A and B?",
              options: ["Only adj[A].add(B)", "Only adj[B].add(A)", "Both adj[A].add(B) and adj[B].add(A)", "adj[A].add(A) and adj[B].add(B)"],
              correctAnswer: 2,
              explanation: "For undirected graphs, every edge is bidirectional. Adding just one direction would make it directed. You must add both A→B and B→A in the adjacency list."
            },
            {
              question: "If a server is disconnected from the network source, what will BFS/DFS report for it?",
              options: ["Distance = 0", "Distance = -1 or unreachable", "It gets visited automatically", "Distance = infinity always"],
              correctAnswer: 1,
              explanation: "Disconnected nodes are never reached by BFS/DFS starting from the source. They remain unvisited, and their distance is typically reported as -1 or marked as unreachable."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={8}
        />
      </section>
    </div>
  );
};

export default Module5_8;
