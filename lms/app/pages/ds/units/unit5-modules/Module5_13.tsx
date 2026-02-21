'use client';
import React from 'react';

const Module5_13: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.13</div>
        <div className="lesson-title-main">
          <h1>Assignment | Detect Cycle in a Graph</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          Imagine a grid where each cell has a character written on it. Your task is to check whether you can start from a cell, move through adjacent cells with the same character, and come back to the starting cell without cheating 😄
        </p>
        <p className="mt-4">In simple words:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Same letters only</li>
          <li>Move up, down, left, or right</li>
          <li>Path length must be at least 4</li>
          <li>You cannot immediately go back to where you came from</li>
        </ul>
        <p className="mt-4">If such a loop exists → cycle found</p>
      </section>

      <section className="content-section">
        <h3>How to Think About the Problem</h3>
        <p>This problem is secretly about:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Graphs</li>
          <li>DFS (Depth First Search)</li>
          <li>Tracking visited cells</li>
          <li>Avoiding immediate backtracking</li>
        </ul>
        <p className="mt-4">Each cell is like a node, and valid moves form edges.</p>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <details className="bg-gray-50 p-4 rounded mt-4">
          <summary className="cursor-pointer font-semibold">Click to Expand</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Understand the grid as a graph</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Each cell is a node</li>
                <li>Adjacent same-character cells are connected</li>
                <li>We only move in 4 directions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 2: Use a visited matrix</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Keep track of cells already visited</li>
                <li>This helps detect if we return to a previously visited cell</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 3: Use DFS from every unvisited cell</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Start DFS from each cell that hasn't been visited</li>
                <li>Pass the previous cell to avoid immediate backtracking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 4: Detect a cycle</h4>
              <p>If you reach a cell that:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Has the same character</li>
                <li>Is already visited</li>
                <li>Is NOT the parent cell</li>
              </ul>
              <p className="mt-2">➡️ Then a cycle exists</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 5: Final decision</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>If any DFS finds a cycle → return true</li>
                <li>If the grid is fully explored → return false</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        
        <h4 className="font-semibold mt-4">LeetCode</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>
            <a 
              href="https://leetcode.com/problems/detect-cycles-in-2d-grid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Detect Cycles in 2D Grid
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/number-of-islands/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Number of Islands
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/flood-fill/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Flood Fill
            </a>
          </li>
        </ul>

        <h4 className="font-semibold mt-6">HackerRank</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/connected-cell-in-a-grid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Connected Cell in a Grid
            </a>
          </li>
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              DFS: Connected Components
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional Reference Material</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              DFS Explained Simply
            </a>
          </li>
          <li>
            <a 
              href="https://www.geeksforgeeks.org/detect-cycle-in-a-graph/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Cycle Detection in Graphs
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">Final Words for You</p>
          <p className="mt-2">
            You've got this. This problem may look tricky, but once you break it down, it's just DFS with discipline. Take up the assignment with confidence. Even if you don't get it in the first go, trying is already a win 🌟
          </p>
          <p className="mt-2">Happy coding!</p>
        </div>
      </section>
    </div>
  );
};

export default Module5_13;
