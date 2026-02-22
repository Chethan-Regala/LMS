'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

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

      <section className="content-section">
        <Quiz
          title="Module 5.13 Quiz: Detect Cycle in a Graph (2D Grid)"
          questions={[
            {
              question: "In the 2D grid cycle detection problem, what constitutes a valid 'edge' between two cells?",
              options: ["Any two cells in the grid", "Two adjacent cells (up/down/left/right) with the SAME character", "Two cells with different characters", "Diagonal neighbors with matching characters"],
              correctAnswer: 1,
              explanation: "Only horizontally or vertically adjacent cells with the same character are connected. This creates the graph structure where a cycle means a loop of same-character cells."
            },
            {
              question: "What minimum path length is required to be considered a valid cycle in this problem?",
              options: ["2", "3", "4", "5"],
              correctAnswer: 2,
              explanation: "A valid cycle must have a path length of at least 4 to avoid trivially going back and forth on the same edge (A→B→A is length 2 but is not a true cycle)."
            },
            {
              question: "Why must you track the PREVIOUS cell (parent) in the 2D grid DFS?",
              options: ["To find the cycle length", "To avoid immediately backtracking to the cell you just came from (false cycle)", "To count grid dimensions", "To compare character values"],
              correctAnswer: 1,
              explanation: "Without tracking the previous cell, moving from cell A to cell B and back to A would look like a cycle. The parent check ensures we only flag cycles from truly different paths."
            },
            {
              question: "If DFS from any unvisited cell returns true in the 2D grid problem, what does that mean?",
              options: ["The grid has all identical characters", "A cycle exists somewhere in the grid", "The grid is fully traversed", "No cycle was found"],
              correctAnswer: 1,
              explanation: "Each DFS call explores one connected component. If any DFS call returns true, it means that component contains a cycle, so the overall answer is true."
            },
            {
              question: "What does the visited matrix in the 2D grid cycle detection algorithm track?",
              options: ["Grid character values", "Edge weights", "Which cells have already been explored by DFS", "The cycle length"],
              correctAnswer: 2,
              explanation: "The visited matrix (same dimensions as the grid) marks cells as true once DFS explores them. When DFS reaches an already-visited cell (that isn't the parent), a cycle is confirmed."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={13}
        />
      </section>
    </div>
  );
};

export default Module5_13;
