'use client';
import React from 'react';

const Module5_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.6</div>
        <div className="lesson-title-main">
          <h1>Introduction to Graphs and Representation</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi There!</p>
        <p>
          In the previous lesson, we explored Trees, which are fantastic for organizing data hierarchically, like the file system on your computer or a family tree. In a tree, everything flows downwards from a root; a parent can have children, but children don't point back to parents, and there are no loops.
        </p>
        <p>
          But wait, does the real world always look like a tree? Think about a social network. If you follow a friend, and they follow you back, that's a two-way connection. Or think about a city map: you can drive around a block and end up exactly where you started. This forms a cycle. Trees cannot handle cycles or complex interconnectivity. This is where we need a more powerful data structure.
        </p>
        <p>
          So let's uncover the magic behind it, and explore the world of Graphs.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">
            Graph: A graph is a non-linear data structure consisting of a collection of vertices (also called nodes) and edges that connect these vertices. Unlike trees, graphs can have cycles and disconnected parts.
          </p>
        </div>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fgraph%20mapping-gif.gif"
            alt="Graph Structure"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>Why do we need graphs?</h3>
        <p>
          Imagine you are building a navigation app like Google Maps. You have cities (locations) and roads (connections) between them.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>If you used a tree, you would have a starting city (root), and roads branching out. But what if there is a road connecting two different branches? Or a road that leads back to the start? A tree structure would break.</li>
          <li>Graphs solve this because they don't follow a strict hierarchy. They are designed to represent networks.</li>
        </ul>
        <h4 className="font-semibold mt-4">Real-life examples:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Social Networks:</strong> Each person is a vertex, and friendship is an edge.</li>
          <li><strong>World Wide Web:</strong> Web pages are vertices, and hyperlinks are edges.</li>
          <li><strong>Circuit Design:</strong> Components are vertices, and wires are edges.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>What creates a graph?</h3>
        <p>To talk about graphs, we need to know the language. A graph (G) is a pair (V, E).</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Vertex (V):</strong> This is the fundamental unit. It represents the data object (like a City, a Person, or a Webpage). In visual diagrams, these are the circles.</li>
          <li><strong>Edge (E):</strong> This is the line connecting two vertices. It represents the relationship (like a Road, a Friendship, or a Link).</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Types of graphs</h3>
        <p>Not all connections are the same. Let's look at the three main flavors of graphs.</p>

        <h4 className="font-semibold mt-4">1. Undirected graph</h4>
        <p>
          Imagine a friendship on Facebook. If person A is friends with person B, then person B is automatically friends with person A. The relationship is two-way.
        </p>
        <p>
          In an undirected graph, edges have no direction. The line between nodes is just a plain line.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fundirected%20graph.png"
            alt="Undirected Graph"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">2. Directed graph (Digraph)</h4>
        <p>
          Imagine Instagram. You (A) follow a celebrity (B), but they don't follow you back. The relationship is one-way.
        </p>
        <p>
          In a directed graph, edges have arrows pointing from one node to another.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FDirected_graph_no_background.svg.png"
            alt="Directed Graph"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">3. Weighted graph</h4>
        <p>
          Imagine a flight map. Flying from New York to London takes 7 hours, but New York to Boston takes 1 hour. The connections have a "cost" or "weight."
        </p>
        <p>
          In a weighted graph, every edge has a value associated with it (distance, cost, time).
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fweighted%20graph.png"
            alt="Weighted Graph"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <p>
          Now, let's see how you can write a function to create a graph. We need a function to connect two nodes, say Node u and Node v.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Since this is an undirected graph, if we connect u to v, we must also connect v back to u.</li>
          <li>We simply access the list for u and add v to it, and vice versa.</li>
        </ul>
        <p className="mt-4"><strong>C++ Code:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Function to add an edge between vertex u and vertex v
void addEdge(vector<vector<int>> &adj, int u, int v) {
    adj[u].push_back(v); // Add v to u's list
    adj[v].push_back(u); // Add u to v's list (Remove this line for Directed Graph)
}`}</pre>
        </div>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see Java Code</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`// Function to add an edge into the graph
static void addEdge(ArrayList<ArrayList<Integer>> adj, int u, int v) {
    adj.get(u).add(v); // Add v to u's list
    adj.get(v).add(u); // Add u to v's list
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>How is a graph stored in memory?</h3>
        <p>
          We can draw graphs easily on paper, but computer memory is linear. How do we store these complex connections? There are two main ways.
        </p>

        <h4 className="font-semibold mt-4">1. Adjacency matrix</h4>
        <p>Think of this as a 2D grid or a table.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>We create a table where both rows and columns represent the vertices.</li>
          <li>If there is a connection between Vertex A and Vertex B, we put a 1 in the cell where they intersect. If not, we put a 0.</li>
          <li><strong>Pros:</strong> It is very fast to check if a specific connection exists.</li>
          <li><strong>Cons:</strong> It takes up a lot of space, even if there are very few edges. This is bad for "sparse" graphs.</li>
        </ul>
        <p className="mt-4"><strong>Example of an Adjacency matrix:</strong></p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FAdjacency-Matrix-for-undirected-directed-weighted%20graph.jpg"
            alt="Adjacency Matrix"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>1. Implementing Adjacency Matrix</h3>
        <p>
          In an adjacency matrix, we use a 2D table (grid) to represent the graph. If there is a connection, we mark the cell with 1; otherwise, it remains 0.
        </p>
        
        <h4 className="font-semibold mt-4">Step 1: Defining the structure</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>We need a grid with V rows and V columns.</li>
          <li>We initialize the entire grid with 0 (meaning no connections initially).</li>
        </ul>
        <p className="mt-4"><strong>C++ Code:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`#include <iostream>
#include <vector>
using namespace std;

// We use a vector of vectors to create a dynamic 2D grid
// format: vector<vector<int>> matrixName(rows, vector<int>(cols, initialValue));`}</pre>
        </div>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see Java Code</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`// In Java, we use a simple 2D integer array
// int[][] matrix;`}</pre>
          </div>
        </details>

        <h4 className="font-semibold mt-4">Step 2: Adding connections (Edges)</h4>
        <p>To connect Node u and Node v:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Go to row u, column v and set it to 1.</li>
          <li>Since it is undirected, also go to row v, column u and set it to 1.</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`void addEdge(vector<vector<int>> &matrix, int u, int v) {
    matrix[u][v] = 1; // Mark connection from u to v
    matrix[v][u] = 1; // Mark connection from v to u
}`}</pre>
        </div>

        <h4 className="font-semibold mt-4">Step 3: Putting it all together</h4>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see C++ code</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`int main() {
    int V = 3; // 3 Vertices (0, 1, 2)
    
    // Create a 3x3 matrix filled with 0s
    vector<vector<int>> matrix(V, vector<int>(V, 0));

    // Adding an edge between Node 0 and Node 1
    addEdge(matrix, 0, 1);

    // Check if Node 0 and Node 1 are connected (Should print 1)
    cout << "Connection between 0 and 1: " << matrix[0][1];
    
    return 0;
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">2. Adjacency list</h4>
        <p>Think of this like your phone's contact list.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>We create an array (or list) for every vertex.</li>
          <li>Each vertex stores a list of only the people it is connected to.</li>
          <li>If Vertex A is connected to B and C, the list for A looks like: A -&gt; [B, C].</li>
          <li><strong>Pros:</strong> It saves a lot of memory because we only store connections that actually exist. This is the most common way to represent graphs in coding interviews.</li>
          <li><strong>Cons:</strong> It takes slightly longer to check if an edge exists because you have to search through the list.</li>
        </ul>
        <p className="mt-4"><strong>Example of an Adjacency List:</strong></p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FAdjacency-List-for%20directed%3Aundirected%20graph.jpg"
            alt="Adjacency List"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>2. Implementing Adjacency List</h3>
        <p>
          This is the most popular method because it saves space. Instead of a big grid, we use a list of lists.
        </p>

        <h4 className="font-semibold mt-4">Step 1: Defining the structure</h4>
        <p>
          We create an array (or vector) where each index represents a node, and that index holds a list of its neighbors.
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`#include <iostream>
#include <vector>
using namespace std;

// We use a vector where each element is another vector containing integers
// vector<vector<int>> adj;`}</pre>
        </div>

        <h4 className="font-semibold mt-4">Step 2: Adding connections (Edges)</h4>
        <p>To connect Node u and Node v:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Go to the list for u and add v to it.</li>
          <li>Go to the list for v and add u to it.</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`void addEdge(vector<vector<int>> &adj, int u, int v) {
    adj[u].push_back(v); // Add v to u's list
    adj[v].push_back(u); // Add u to v's list
}`}</pre>
        </div>

        <h4 className="font-semibold mt-4">Step 3: Putting it all together</h4>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see C++ code</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`int main() {
    int V = 3; // 3 Vertices
    vector<vector<int>> adj(V); // Create list with 3 empty slots

    // Adding an edge between Node 0 and Node 1
    addEdge(adj, 0, 1);

    // Print neighbors of Node 0
    cout << "Neighbors of Node 0: ";
    for (int neighbor : adj[0]) {
        cout << neighbor << " ";
    }
    
    return 0;
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Coding a graph</h3>
        <p>
          Let's look at how to implement a simple Adjacency List using C++. This is the preferred method for most problem-solving scenarios.
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Graph {
public:
    unordered_map<int, vector<int>> graph;

    void add_edge(int u, int v) {
        if (graph.find(u) == graph.end())
            graph[u] = vector<int>();

        if (graph.find(v) == graph.end())
            graph[v] = vector<int>();

        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    void print_graph() {
        for (auto vertex : graph) {
            cout << vertex.first << " -> ";
            cout << "[";
            for (int i = 0; i < vertex.second.size(); i++) {
                cout << vertex.second[i];
                if (i != vertex.second.size() - 1) cout << ", ";
            }
            cout << "]" << endl;
        }
    }
};

int main() {
    Graph g;
    g.add_edge(0, 1);
    g.add_edge(0, 2);
    g.add_edge(1, 2);

    cout << "Adjacency List of the Graph:" << endl;
    g.print_graph();

    return 0;
}`}</pre>
        </div>
        <p className="mt-4"><strong>What this code does:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>We created a Graph class using a dictionary.</li>
          <li>The add_edge function takes two nodes (u and v) and connects them. Since we simulated an undirected graph, we added v to u's list AND u to v's list.</li>
          <li>Finally, we print the list to see the connections.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Graph vs. Tree</h3>
        <p>
          It is important to understand that every tree is a graph, but not every graph is a tree.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tree</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Graph</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Cycles</td>
                <td className="border border-gray-300 px-4 py-2">No cycles allowed (Acyclic).</td>
                <td className="border border-gray-300 px-4 py-2">Can have cycles.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Connectivity</td>
                <td className="border border-gray-300 px-4 py-2">All nodes must be connected.</td>
                <td className="border border-gray-300 px-4 py-2">Can be disconnected (islands of nodes).</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Root</td>
                <td className="border border-gray-300 px-4 py-2">Has one unique root node.</td>
                <td className="border border-gray-300 px-4 py-2">No concept of a root node.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Edges</td>
                <td className="border border-gray-300 px-4 py-2">N nodes have exactly N-1 edges.</td>
                <td className="border border-gray-300 px-4 py-2">No limit on the number of edges.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">Let's take a quick knowledge review.</p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://i.imgur.com/placeholder-review.png"
            alt="Knowledge Review"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <p>
          Now that we have built a graph, how do we explore it? In a tree, we had Pre-order, In-order, and Post-order. In graphs, since there is no root, we use two powerful techniques:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>BFS (Breadth-First Search):</strong> Explores the graph layer by layer, like dropping a stone in water and watching the ripples expand.</li>
          <li><strong>DFS (Depth-First Search):</strong> Explores as deep as possible along each branch before backtracking, like solving a maze by following a wall.</li>
        </ul>
        <p className="mt-4">
          We will dive deep into these algorithms in the next lesson!
        </p>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Graphs represent complex relationships with Vertices (nodes) and Edges (connections).</li>
          <li>Graphs can solve problems that trees cannot, specifically those involving cycles or many-to-many relationships.</li>
          <li>We explored three types: Undirected (two-way), Directed (one-way), and Weighted (cost-associated).</li>
          <li>We represent graphs in memory using an Adjacency Matrix (good for dense graphs) or an Adjacency List (memory-efficient, good for sparse graphs).</li>
          <li>Next up, we will learn how to "walk" through these graphs using BFS and DFS.</li>
        </ul>
      </section>
      <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FMindmaps%2FIntroduction%20to%20Graphs%20and%20Representation%20-%20Mindmap.png" alt="Mind map" />
    </div>
  );
};

export default Module5_6;
