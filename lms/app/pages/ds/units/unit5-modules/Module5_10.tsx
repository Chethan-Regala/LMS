'use client';
import React from 'react';

const Module5_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.10</div>
        <div className="lesson-title-main">
          <h1>Clone Graph</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          Hey Kalvians! 👋 Welcome back. You've been doing some solid work with graphs, and today we're taking that understanding one step further with a very interesting and practical problem.
        </p>
        <p className="mt-4">
          In the previous lesson, you focused on connectivity—checking whether one node can reach another using graph traversal. You learned how:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Graphs can be explored using BFS or DFS</li>
          <li>Tracking visited nodes is important</li>
          <li>Cycles can exist and must be handled carefully</li>
        </ul>
        <p className="mt-4">
          Now that you know how to move through a graph safely, let's use that skill to recreate an entire graph without breaking any connections.
        </p>
      </section>

      <section className="content-section">
        <h3>Problem Introduction: Clone Graph</h3>
        <p>
          Imagine you are given a complex network—like a social network or a city map 🗺️. You don't want to modify the original network, but you need an exact copy of it.
        </p>
        <p className="mt-4">That's what this problem is about.</p>
        <p className="mt-4">In simple terms:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>You are given one node of a connected, undirected graph</li>
          <li>Each node has a value and a list of neighbors</li>
          <li>Your task is to create a deep copy of the entire graph</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>What is a Deep Copy?</h3>
        <p>A deep copy means:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Every node is new</li>
          <li>Every connection is preserved</li>
          <li>No node from the cloned graph should point to the original graph</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Concept Explainer</h3>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mQeF6bN8hMk"
            title="Clone Graph Explained Using BFS & DFS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <p>This video explains:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Why a simple copy does not work for graphs</li>
          <li>How BFS/DFS helps clone nodes level by level</li>
          <li>How a map helps track already-cloned nodes</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Visual Concept</h3>
        <p>Think of the graph as:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Dots → nodes</li>
          <li>Lines → connections</li>
        </ul>
        <p className="mt-4">
          You walk through the graph, and for every dot you visit, you create a new dot and reconnect it in the same way.
        </p>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        
        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Click to Expand</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Handle the base case</h4>
              <p>If the given node is null, return null. There is nothing to clone.</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 2: Create a map</h4>
              <p>Use a map to store:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Original node → Cloned node</li>
              </ul>
              <p className="mt-2">This ensures each node is cloned only once.</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 3: Start traversal</h4>
              <p>Use BFS or DFS starting from the given node to explore the graph.</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 4: Clone neighbors</h4>
              <p>For every neighbor:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>If it is not cloned, create a new node</li>
                <li>Add the cloned neighbor to the current node's neighbor list</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 5: Return the cloned graph</h4>
              <p>Once traversal is complete, return the cloned version of the starting node.</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Implementation</h3>
        
        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">C++ Solution (DFS)</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
            <pre>{`Node* cloneGraph(Node* node) {
    if (!node) return nullptr;
    
    unordered_map<Node*, Node*> cloned;
    
    function<Node*(Node*)> dfs = [&](Node* curr) {
        if (cloned.count(curr)) return cloned[curr];
        
        cloned[curr] = new Node(curr->val);
        
        for (Node* neighbor : curr->neighbors) {
            cloned[curr]->neighbors.push_back(dfs(neighbor));
        }
        
        return cloned[curr];
    };
    
    return dfs(node);
}`}</pre>
          </div>
        </details>

        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Java Solution (BFS)</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
            <pre>{`public Node cloneGraph(Node node) {
    if (node == null) return null;
    
    Map<Node, Node> cloned = new HashMap<>();
    Queue<Node> queue = new LinkedList<>();
    
    cloned.put(node, new Node(node.val));
    queue.offer(node);
    
    while (!queue.isEmpty()) {
        Node curr = queue.poll();
        
        for (Node neighbor : curr.neighbors) {
            if (!cloned.containsKey(neighbor)) {
                cloned.put(neighbor, new Node(neighbor.val));
                queue.offer(neighbor);
            }
            cloned.get(curr).neighbors.add(cloned.get(neighbor));
        }
    }
    
    return cloned.get(node);
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">💡 Key Insight</p>
          <p className="mt-2">
            This problem may look tricky at first, but once you break it into steps, it becomes very logical. Focus on one node at a time, trust your traversal, and the clone will come together naturally.
          </p>
          <p className="mt-2">
            You're building strong graph fundamentals here—don't skip this one 🚀
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice Problem</h3>
        <p>
          <a 
            href="https://leetcode.com/problems/clone-graph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LeetCode 133: Clone Graph
          </a>
        </p>
      </section>

      <section className="content-section">
        <h3>Next Lesson: Assignment | Number of Islands</h3>
        <p>
          Now that you're comfortable cloning and traversing graphs, it's time to apply the same ideas to a grid-based graph problem.
        </p>
        <p className="mt-4">
          In the next lesson, you'll explore how BFS and DFS help count connected regions—also known as islands.
        </p>
        <p className="mt-4">See you in the next session! 🌊🏝️</p>
      </section>
    </div>
  );
};

export default Module5_10;
