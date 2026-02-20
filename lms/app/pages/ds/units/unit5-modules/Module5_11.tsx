'use client';
import React from 'react';

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
    </div>
  );
};

export default Module5_11;
