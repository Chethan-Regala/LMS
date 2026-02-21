'use client';
import React from 'react';

const Module5_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.14</div>
        <div className="lesson-title-main">
          <h1>Assignment | Social Network Clique Finder</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi There!</p>
        <p className="mt-4">
          In the last session, you worked on detecting cycles in a graph. That helped you answer an important question:
        </p>
        <p className="mt-2 italic">"Does this graph loop back on itself?"</p>
        <p className="mt-4">So far, most of our graph problems have focused on movement and reachability:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Can we reach a node?</li>
          <li>Can we come back to the same node?</li>
          <li>Is there a loop?</li>
        </ul>
        <p className="mt-4">Today, we shift gears.</p>
        <p className="mt-4">Instead of asking how we move in a graph, we'll ask:</p>
        <p className="mt-2 font-semibold">How tightly connected is a group of nodes?</p>
        <p className="mt-4">That's where the Clique Problem comes in.</p>
      </section>

      <section className="content-section">
        <h3>What Is Today's Focus?</h3>
        <p>
          Today's assignment introduces the Clique Problem, one of the most well-known problems in graph theory and algorithms.
        </p>
        <p className="mt-4">At a high level, this problem helps answer:</p>
        <p className="mt-2 italic">"Is there a group of vertices where everyone is directly connected to everyone else?"</p>
        <p className="mt-4">Think of it like:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>A group of friends where everyone knows everyone</li>
          <li>A team where each member works directly with every other member</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Basic Concept</h3>
        <p>Let's keep it simple.</p>
        
        <h4 className="font-semibold mt-4">What is a Clique?</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>A clique is a set of vertices in an undirected graph</li>
          <li>Every pair of vertices in that set has an edge between them</li>
        </ul>
        <p className="mt-4">In short, a clique is a fully connected group of nodes.</p>
      </section>

      <section className="content-section">
        <h3>Example</h3>
        <p>If you have vertices:</p>
        <p className="mt-2 ml-6">A, B, C</p>
        <p className="mt-4">And edges:</p>
        <p className="mt-2 ml-6">A-B, B-C, A-C</p>
        <p className="mt-4">Then {'{'}A, B, C{'}'} forms a clique of size 3, because:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>A is connected to B and C</li>
          <li>B is connected to A and C</li>
          <li>C is connected to A and B</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Important:</p>
          <p className="mt-2">If even one edge is missing, it is not a clique.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>The Clique Problem</h3>
        <p>
          There are multiple versions of this problem. Today, we focus on the decision version, because it's clear and practical.
        </p>
        
        <h4 className="font-semibold mt-4">Problem Statement</h4>
        <p className="mt-2">Given:</p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>An undirected graph</li>
          <li>A number k</li>
        </ul>
        <p className="mt-4">Question:</p>
        <p className="mt-2 ml-6 italic">Does this graph contain a clique of size k or more?</p>
        <p className="mt-4">Example:</p>
        <p className="mt-2 ml-6">If k = 3, you are checking whether any 3 vertices form a fully connected group.</p>
      </section>

      <section className="content-section">
        <h3>Why This Problem Is Important</h3>
        <p>You don't need deep complexity theory today, but one key idea matters:</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">The Clique Problem is computationally hard</p>
          <p className="mt-2">It belongs to a class of problems called NP-Complete</p>
        </div>
        <p className="mt-4">What this means in practice:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Small graphs → manageable</li>
          <li>Large graphs → brute force becomes very slow</li>
        </ul>
        <p className="mt-4">This problem forces us to think carefully about algorithm design.</p>
        <p className="mt-4">
          This is exactly why it's useful for building problem-solving intuition in algorithms.
        </p>
      </section>

      <section className="content-section">
        <h3>In-Class Assignment Flow</h3>
        <p>During the class, you will:</p>
        
        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Click to Expand</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">1. Understand the input graph</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Vertices</li>
                <li>Edges</li>
                <li>Value of k</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">2. Identify all possible vertex subsets</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Focus only on subsets of size k</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">3. Check connectivity</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>For each subset, verify whether every pair of vertices has an edge</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">4. Decide</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>If at least one such subset exists → clique found</li>
                <li>Otherwise → no clique of size k</li>
              </ul>
            </div>
          </div>
        </details>

        <p className="mt-4">The goal is not optimization today. The goal is:</p>
        <p className="mt-2 font-semibold ml-6">Understanding the logic behind clique detection.</p>
      </section>

      <section className="content-section">
        <h3>How This Connects to the Real World</h3>
        <p>You'll see this idea show up in:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Social networks (tight friend groups)</li>
          <li>Collaboration graphs</li>
          <li>Dependency analysis</li>
          <li>Pattern detection in large networks</li>
        </ul>
        <p className="mt-4">
          Even though today's graph examples are small, the concept scales to very real problems.
        </p>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">Looking Ahead</p>
          <p className="mt-2">
            Today's session focuses on groups with complete connectivity. The next lesson will shift to dependencies and ordering using directed graphs and real-world scheduling logic. This progression builds a foundation for system design problems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Module5_14;
