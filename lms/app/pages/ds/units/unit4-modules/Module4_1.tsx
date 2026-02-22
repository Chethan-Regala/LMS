'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Trees</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In the last module, you worked with linear data structures and learned how they help in organizing and processing data step by step. You explored stacks, queues, and deques, and practiced converting expressions between infix, postfix, and prefix forms. You also solved problems on balancing symbols, worked through the Tower of Hanoi, and learned how singly linked lists function. Along the way, you built and reversed linked lists, used the slow–fast pointer technique to detect cycles, and applied these ideas in a GPS navigation activity before taking part in the coding contest.
        </p>
        <p>
          In this module, you'll move from linear structures to hierarchical ones. You'll be introduced to trees, what they are, how they are organized, and why they're so widely used. You'll understand roots, nodes, children, and levels, and start building the foundation needed for working with different types of trees in the upcoming lessons. With that said, let's start today's session.
        </p>
        <p>
          Imagine a network of roads where every location is connected, yet there's never a loop that takes you back to where you started. Or think of a family lineage where every person traces back to exactly one origin, and no one is repeated.
        </p>
        <p>
          Such patterns show up in computer file systems, tournament structures, decision-making algorithms, and even the way your favorite social media organizes connections.
        </p>
        <p className="font-semibold">
          But what underlying structure makes all of this possible?
        </p>
        <p>
          That's the mystery we're about to uncover, one branch at a time.
        </p>
      </section>

      <section className="content-section">
        <h3>What is a tree?</h3>
        <p>
          Think of a family tree, there's one clear route from any child to their ancestor, and no one appears in two different places that could form a loop. Every new branch grows outward, never curling back to reconnect in a cycle.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Ffamily_tree.jpg"
            alt="Family tree illustration"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          Alright, so we know a single, connected structure is a tree. But what are the fundamental rules that make a tree a tree? Just like a square has to have four equal sides and four right angles, trees have their own set of strict properties. Let's dive into those now.
        </p>
        <p>
          But before diving into the properties, you should know what are the important tree terminologies.
        </p>
      </section>

      <section className="content-section">
        <h3>Essential tree terminologies:</h3>
        <div className="flex flex-col items-center my-6">
        </div>
        <p>
          We've explored a tree, a single connected structure with no cycles, where every node is reachable from any other through exactly one path. But what if we have several such separate structures, each standing on its own, without any connection between them?
        </p>
      </section>

      <section className="content-section">
        <h3>How does a tree compare to a forest?</h3>
        <p>
          Just as many individual trees together form a forest in nature, in graph theory, a forest is a collection of disjoint trees, each with its own branches, yet growing separately.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/Discrete+Maths/tree+graph+forest.png"
            alt="Tree vs Forest comparison"
            className="max-w-2xl rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-600 mt-2">Image Credits: Cambridge University</p>
        </div>
        <p>
          Play this fun simulator to learn more about trees and forests.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">A forest is a collection of separate trees.</p>
        </div>
        <p>
          To understand forests better, we first need to explore the properties and theorems of trees, the rules that define their structure and make them so useful in problem-solving.
        </p>
      </section>

      <section className="content-section">
        <h3>What are the properties of trees</h3>
        <h3>Basic properties:</h3>
        <p>
          Think of a tree like a perfect Google Maps route network between towns:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>You have n towns marked on the map. Google Maps creates exactly n−1 roads so every town can be reached from any other without detours.</li>
          <li>If one road is closed (removed from the map), Google Maps will say "No route available" for some destinations — the network becomes disconnected.</li>
          <li>If an extra road is added, Google Maps will show two possible ways to get somewhere — meaning you've created a loop (cycle), which breaks the rule of a tree.</li>
        </ul>
        <p>
          In tree terms, Google Maps has built the most efficient route system — no unnecessary roads, but still fully connected.
        </p>
        <p>This analogy shows that:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Minimum connections</strong> → n−1 edges for n nodes.</li>
          <li><strong>Removing a connection</strong> breaks the network.</li>
          <li><strong>Adding a connection</strong> creates a loop (cycle).</li>
        </ol>
        <p>Now, let's move on to some of the rules that a tree has to follow.</p>
      </section>

      <section className="content-section">
        <h3>Rule 1: Unique Paths</h3>
        <p>
          In a tree T, for any two distinct vertices u and v, there exists exactly one simple path connecting u and v.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Discrete%20Maths%2FUniquie%20path.png"
            alt="Unique path between two vertices in a tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h3>Rule 2: Edge Count</h3>
        <p>
          A tree with n vertices always has exactly n−1 edges.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Discrete%20Maths%2FTheorem%202.png"
            alt="Tree with 5 vertices and 4 edges"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h3>Rule 3: Leaf Count</h3>
        <p>
          Every tree with at least two vertices has at least two vertices of degree 1 (leaf nodes).
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Discrete%20Maths%2FTheorem%203.png"
            alt="Tree with two leaf nodes of degree 1"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <p>
          We've seen key theorems that define trees clearly. "But what if a structure has |E| = |V| – 1 and still isn't a tree? Let's explore how that can happen.
        </p>
        <div className="bg-gray-100 p-4 rounded my-4">
          <p><strong>|V|</strong> = Vertices and <strong>|E|</strong> = Edges</p>
        </div>
        <p>
          These terminologies are used mostly with graph data structures, which you will learn about in the upcoming modules. For now, A graph is a non-linear data structure consisting of a set of vertices (or nodes) and a set of edges that connect pairs of vertices. It is used to model and represent relationships between objects, where each vertex represents an object and each edge represents a connection or relationship between two objects. Examples include a social network, where people are vertices and friendships are edges, or a map, where cities are vertices and roads are edges.
        </p>
        <p>
          Now, let's look at when a structure satisfies |E| = |V| – 1 but still isn't a tree.
        </p>
        <p>
          Okay, imagine you have a puzzle with just the right number of pieces, but some pieces are missing in the middle. Even if it looks like everything is almost there, it's not one complete picture.
        </p>
        <p>
          This is exactly what happens when a structure satisfies |E| = |V| - 1 but is not connected, there are disconnected parts, so it's not a tree!
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/Discrete+Maths/not+a+graph.jpg"
            alt="Structure with |E| = |V| - 1 but not a tree"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          This diagram illustrates when a structure can have |E| = |V| - 1 but not be a tree. Let us understand using the sequence shown:
        </p>
        <p>
          The image shows three panels demonstrating a structure with pink vertices and black edges/arrows:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Left panel:</strong> Shows 3 vertices, with 2 self-loops (edges that start and end at the same vertex).</li>
          <li><strong>Middle panel:</strong> Shows 1 disconnected vertex with no edges.</li>
          <li><strong>Right panel:</strong> Shows 3 vertices with 2 edges connecting them.</li>
        </ul>
        <p>Let's focus on the left panel as it demonstrates our key concept.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>|V| = 3 vertices</li>
          <li>|E| = 2 self-loops</li>
          <li>So |E| = |V| - 1</li>
        </ul>
        <p>However, this structure is not a tree because:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>It has self-loops (which trees cannot have).</li>
          <li>The vertices are disconnected from each other (trees must be connected).</li>
        </ul>
        <p>
          This is a perfect counterexample showing that just satisfying the |E| = |V| - 1 condition isn't enough to guarantee a tree; the structure must also be connected and free of cycles or self-loops.
        </p>
      </section>

      <section className="content-section">
        <h3>Let's understand this topic in depth with the help of a video:</h3>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/zEQZpTizgLo" title="[Discrete Mathematics] Trees" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          Understanding why some structures with |E| = |V| - 1 aren't trees leads us to explore special types of trees, like rooted trees and chain letters, which help organize and represent data hierarchically. These concepts may sound mathematical, but they are crucial when building software that uses these data structures. Following all the rules and properties means that the final software will be a robust one, that doesn't fail in any edge cases.
        </p>
      </section>

      <section className="content-section">
        <h3>How Trees Are Stored in Memory</h3>
        <p>
          A computer doesn't have a magical canvas to draw on; it only has memory, which is organized sequentially. To store a tree, we need clever ways to represent the relationships between nodes. Here are the three most common methods:
        </p>

        <h3>1. Adjacency List (The Social Network Approach)</h3>
        <p>
          <strong>The Idea:</strong> Imagine a contact list where, for each person, you list their direct friends. In graph terms, for each node, we list the nodes it's directly connected to.
        </p>
        <p><strong>How it looks:</strong> For a tree where node 'A' connects to 'B' and 'C', and 'B' connects to 'D', the list would be:</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>
            A: [B, C]
            B: [A, D]
            C: [A]
            D: [B]
          </pre>
        </div>
        <p>
          <strong>Why it's great for trees:</strong> It's very memory-efficient because you only store the connections that actually exist, and we know trees have very few edges.
        </p>

        <h3>2. Adjacency Matrix (The Mileage Chart Approach)</h3>
        <p>
          <strong>The Idea:</strong> We create a grid, or matrix, with every node listed on both the rows and the columns. We put a '1' if there's an edge between two nodes and a '0' if there isn't.
        </p>
        <p>
          <strong>Why it's not great for trees:</strong> Trees have very few edges (n-1), so this matrix would be filled almost entirely with zeros. It's a waste of space for structures that aren't densely connected.
        </p>

        <h3>3. Node-Based with Pointers (The Family Tree Approach)</h3>
        <p>
          <strong>The Idea:</strong> This is the most intuitive method, especially for hierarchical trees. Each node is an object in memory that holds its own data, plus "pointers" or references that point to the memory addresses of its children.
        </p>
        <p><strong>How it works:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>The Node A object would contain a list of memory addresses for Node B and Node C.</li>
          <li>This structure is the foundation for how things like your computer's file system or the HTML of a webpage are actually built and managed in memory.</li>
        </ul>
        <p>
          This last method, the node-based approach, is perfect for the most common type of tree in computer science.
        </p>
        <p>
          Now that we see how a tree can be physically represented, let's focus on why trees matter so much.
        </p>
      </section>

      <section className="content-section">
        <h3>Why Trees Matter: Real-World Applications</h3>
        <p>
          Understanding trees isn't just an academic exercise. It's fundamental to how we solve problems with efficiency and organization.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FReal%20life%20application%20of%20trees.png"
            alt="Real-world applications of trees"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>A tree is a connected graph with no cycles, having exactly n-1 edges for n nodes.</li>
          <li>In a tree, there is a unique path between any two nodes, ensuring no loops.</li>
          <li>A forest is a collection of disjoint trees — separate groups without connections.</li>
          <li>A rooted tree has one special node called the root, from which every other node descends uniquely.</li>
          <li>The chain letter model is a real-life example of a rooted tree, where one person sends letters to multiple people, branching out like a tree.</li>
        </ul>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.1 Quiz: Introduction to Trees"
          questions={[
            {
              question: "In a tree with n nodes, how many edges does it have?",
              options: ["n", "n+1", "n-1", "2n"],
              correctAnswer: 2,
              explanation: "A fundamental property of trees: every tree with n nodes has exactly n−1 edges. Removing any edge disconnects it; adding one creates a cycle."
            },
            {
              question: "What is a forest in graph theory?",
              options: ["A tree with more than 10 nodes", "A collection of disjoint (separate) trees", "A tree where every node has exactly two children", "A tree with only leaf nodes"],
              correctAnswer: 1,
              explanation: "A forest is simply a set of separate trees that are not connected to each other — just like individual trees in a real forest."
            },
            {
              question: "Which memory representation is MOST efficient for storing a sparse tree?",
              options: ["Adjacency Matrix", "Adjacency List", "2D Array", "Flat Array"],
              correctAnswer: 1,
              explanation: "Adjacency lists only store existing connections, making them memory-efficient. A matrix stores all possible connections (mostly zeros) and wastes space for sparse trees."
            },
            {
              question: "In a tree, what is guaranteed about the path between any two nodes?",
              options: ["There are multiple paths", "There is exactly one unique simple path", "There is no path", "The path is always the shortest"],
              correctAnswer: 1,
              explanation: "Rule 1 of trees — for any two distinct vertices u and v, there is exactly one simple path connecting them. Multiple paths would create a cycle."
            },
            {
              question: "A structure has |E| = |V| - 1 but is NOT a tree. What could be wrong?",
              options: ["It has too many nodes", "It is disconnected or has self-loops", "It has too many leaf nodes", "It has a root node"],
              correctAnswer: 1,
              explanation: "Having n-1 edges is necessary but not sufficient for a tree. The structure must also be connected and free of cycles and self-loops."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={1}
        />
      </section>
    </div>
  );
};

export default Module4_1;
