'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.11</div>
        <div className="lesson-title-main">
          <h1>Assignment | Number of Islands</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In this assignment, you will be solving a problem to find the number of islands using graphs.
        </p>
      </section>

      <section className="content-section">
        <h3>Optional Content</h3>
        <p>
          Take a look at the video given below if you have any doubts while formulating a logic to the problem. This video can be a good reference to you while building a logic for this problem.
        </p>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pV2kpPD66nE"
            title="Number of Islands - DFS - Leetcode 200"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <p className="mt-4">Happy coding!</p>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>
          For additional practice, you can visit the following leetcode links given below. This part is optional and you can continue to the next lesson without solving these problems.
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a
              href="https://leetcode.com/problems/number-of-islands/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-1: Number of Islands
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/max-area-of-island/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-2: Max Area of Island
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/number-of-closed-islands/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Problem-3: Number of Closed Islands
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.11 Quiz: Number of Islands"
          questions={[
            {
              question: "In the Number of Islands problem, what does each '1' in the grid represent?",
              options: ["Water", "Land", "A visited cell", "An edge"],
              correctAnswer: 1,
              explanation: "In the standard Number of Islands problem, '1' represents a land cell and '0' represents water. Islands are formed by groups of connected land cells."
            },
            {
              question: "What traversal strategy do you use to 'sink' an island (mark all its cells) once you find a land cell?",
              options: ["Binary Search", "BFS or DFS from that cell, marking connected '1's as visited", "Level Order Traversal", "Merge Sort"],
              correctAnswer: 1,
              explanation: "Once a land cell is found, BFS or DFS explores all adjacent connected land cells and marks them visited, effectively 'sinking' the entire island."
            },
            {
              question: "In what directions can you move in the Number of Islands problem (standard version)?",
              options: ["Only diagonally", "Up, Down, Left, Right (4 directions)", "All 8 directions including diagonals", "Only left and right"],
              correctAnswer: 1,
              explanation: "The standard Number of Islands problem only allows movement in 4 cardinal directions: up, down, left, right. Diagonal connections do not count."
            },
            {
              question: "What do you increment each time you find an unvisited land cell ('1') during the grid scan?",
              options: ["The grid size", "The number of edges", "The island count", "The DFS depth"],
              correctAnswer: 2,
              explanation: "Each unvisited land cell you encounter during the scan is the entry point to a new island. Incrementing the island count and then running BFS/DFS to mark it gives the correct total."
            },
            {
              question: "What is the time complexity of the BFS/DFS approach for Number of Islands on an m×n grid?",
              options: ["O(m + n)", "O(m × n)", "O(m² × n²)", "O(log(m × n))"],
              correctAnswer: 1,
              explanation: "Every cell is visited at most once. The total number of cells is m×n. Therefore, the time complexity is O(m×n)."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={11}
        />
      </section>
    </div>
  );
};

export default Module5_11;
