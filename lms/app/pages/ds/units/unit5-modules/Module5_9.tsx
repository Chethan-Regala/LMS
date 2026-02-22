'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.9</div>
        <div className="lesson-title-main">
          <h1>Find if Path Exists in Graph</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In many real-world systems, we often need to know whether one point can reach another. For example, can a user navigate from one webpage to another, or can data travel between two computers in a network? Graphs help us model such connections.
        </p>
        <p className="mt-4">
          In this lesson, we focus on a simple but powerful question: Does a path exist between two nodes in a graph?
        </p>
      </section>

      <section className="content-section">
        <h3>Let's Recap: What Is a Graph?</h3>
        <p>
          A graph is a collection of nodes (vertices) connected by edges. Graphs can represent roads between cities, friendships in social networks, or links between web pages.
        </p>
        <p className="mt-4">
          Each edge shows a possible connection between two nodes.
        </p>
      </section>

      <section className="content-section">
        <h3>Problem Statement</h3>
        <p>You are given:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>n nodes labeled from 0 to n-1</li>
          <li>A list of edges representing connections</li>
          <li>A source node</li>
          <li>A destination node</li>
        </ul>
        <p className="mt-4">
          Your task is to determine whether there is any path from the source to the destination.
        </p>
      </section>

      <section className="content-section">
        <h3>Key Idea</h3>
        <p>
          If you can reach the destination while exploring the graph, then a valid path exists.
        </p>
        <p className="mt-4">To explore a graph, we commonly use:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Breadth First Search (BFS)</li>
          <li>Depth First Search (DFS)</li>
        </ul>
        <p className="mt-4">
          Both approaches systematically visit connected nodes while avoiding infinite loops.
        </p>
      </section>

      <section className="content-section">
        <h3>High Level Approach</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Convert edges to adjacency list</li>
          <li>Start traversal from source</li>
          <li>Visit nodes using BFS/DFS</li>
          <li>Return true if destination reached</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Why BFS Works</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Explores level by level</li>
          <li>Guarantees reachability</li>
          <li>Simple queue implementation</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Implementation</h3>

        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">C++ Solution</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
            <pre>{`bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
    if (source == destination) return true;
    
    vector<vector<int>> graph(n);
    for (auto& e : edges) {
        graph[e[0]].push_back(e[1]);
        graph[e[1]].push_back(e[0]);
    }
    
    vector<bool> visited(n, false);
    queue<int> q;
    q.push(source);
    visited[source] = true;
    
    while (!q.empty()) {
        int curr = q.front();
        q.pop();
        
        if (curr == destination) return true;
        
        for (int neighbor : graph[curr]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    
    return false;
}`}</pre>
          </div>
        </details>

        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Java Solution</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
            <pre>{`public boolean validPath(int n, int[][] edges, int source, int destination) {
    if (source == destination) return true;
    
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        graph.add(new ArrayList<>());
    }
    
    for (int[] e : edges) {
        graph.get(e[0]).add(e[1]);
        graph.get(e[1]).add(e[0]);
    }
    
    boolean[] visited = new boolean[n];
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(source);
    visited[source] = true;
    
    while (!queue.isEmpty()) {
        int curr = queue.poll();
        
        if (curr == destination) return true;
        
        for (int neighbor : graph.get(curr)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
    
    return false;
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Edge Cases</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Source is destination</li>
          <li>Graph has no edges</li>
          <li>Disconnected components</li>
          <li>Large node volume</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Real-World Applications</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Network connectivity checks</li>
          <li>Route validation in maps</li>
          <li>Access control and permissions</li>
          <li>Dependency resolution in software systems</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Graphs model connections between entities</li>
          <li>Path existence checks graph connectivity</li>
          <li>BFS and DFS are reliable traversal techniques</li>
          <li>This problem builds the foundation for advanced graph algorithms</li>
        </ul>
      </section>
      <iframe width="407" height="360" src="https://www.youtube.com/embed/knLFe7hEp3Y" title="Find if Path Exists in Graph - Leetcode 1971 - Graphs (Python)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <section className="content-section">
        <h3>Practice Problem</h3>
        <p>
          <a
            href="https://leetcode.com/problems/find-if-path-exists-in-graph/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LeetCode 1971: Find if Path Exists in Graph
          </a>
        </p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.9 Quiz: Find if Path Exists in Graph"
          questions={[
            {
              question: "If source == destination in the path existence problem, what should you return immediately?",
              options: ["false", "null", "true", "Run BFS first"],
              correctAnswer: 2,
              explanation: "A node is trivially reachable from itself. Returning true immediately as a base case avoids unnecessary traversal and is an important edge case."
            },
            {
              question: "What is the first step before running BFS/DFS in the path existence problem?",
              options: ["Sort all edges", "Build an adjacency list from the edge list", "Count total nodes", "Find all leaf nodes"],
              correctAnswer: 1,
              explanation: "The input is given as an edge list. You must first convert it to an adjacency list so that you can efficiently look up neighbors of any given node during traversal."
            },
            {
              question: "In the BFS path-finding solution, what does reaching the destination node during traversal mean?",
              options: ["The graph has a cycle", "A path exists between source and destination", "The path is the shortest possible", "All nodes have been visited"],
              correctAnswer: 1,
              explanation: "If BFS or DFS reaches the destination node, it means a valid path exists from source to destination in the graph."
            },
            {
              question: "Which edge case must be handled in path existence problems?",
              options: ["Negative weights", "No edges in the graph", "Floating point node values", "Nodes with self-loops only"],
              correctAnswer: 1,
              explanation: "If there are no edges, no paths exist between any two different nodes (unless source == destination). Returning false for this case is essential."
            },
            {
              question: "Path existence in a graph is a real-world analogy for which of the following?",
              options: ["Sorting database records", "Checking if two computers can communicate in a network", "Finding prime numbers", "Calculating factorial"],
              correctAnswer: 1,
              explanation: "Graph path existence directly models network connectivity: can packets travel from one machine to another? This underlies routing algorithms and access control systems."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={9}
        />
      </section>
    </div>
  );
};

export default Module5_9;
