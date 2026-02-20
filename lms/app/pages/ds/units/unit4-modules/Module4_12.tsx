'use client';
import React from 'react';

const Module4_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.12</div>
        <div className="lesson-title-main">
          <h1>Assignment | Two Sum using Hash Map</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In the previous lesson, we learned how to design our own HashMap and understood how key–value storage helps us find things faster. Now, let's use the same power of hashing to solve one of the most famous coding interview questions: Two Sum.
        </p>
        <p>
          We are given a list of numbers and a target number. Your task is simple: Find two different numbers in the list that add up to the target, and return their indices.
        </p>
        <p>
          This problem is one of the best examples of how HashMaps help us convert slow searching into super-fast searching.
        </p>
      </section>

      <section className="content-section">
        <h3>Video Explanation</h3>
        <p>Here's a beginner-friendly explanation of the Two Sum problem for your reference:</p>
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KLlXCFG5TnA?end=415"
            title="Two Sum - Leetcode 1 - HashMap - Python"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 text-center">Note: This video is triggered to stop automatically at 6:55.</p>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to expand the steps</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Create a HashMap</h4>
              <p>This map will store each number and its index as we scan the array.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Loop through each number</h4>
              <p>At each number, calculate the value needed to reach the target:</p>
              <div className="bg-gray-100 p-4 rounded overflow-x-auto my-2">
                <pre>{`diff = target – nums[i]`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Check if this diff is already in the map</h4>
              <p>If yes → we found our pair → return their indices.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 4: If not found, store the current number in the map</h4>
              <p>This helps future numbers check against it.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 5: Continue until a solution is found</h4>
              <p>Problem guarantees exactly one valid answer.</p>
            </div>

            <div>
              <h4 className="font-semibold">Result</h4>
              <p>Return the two indices inside [ ].</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <h4 className="font-semibold mt-4">LeetCode</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://leetcode.com/problems/two-sum/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Two Sum → https://leetcode.com/problems/two-sum/
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Two Sum II → https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/subarray-sum-equals-k/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Subarray Sum Equals K → https://leetcode.com/problems/subarray-sum-equals-k/
            </a>
          </li>
        </ul>

        <h4 className="font-semibold mt-4">HackerRank</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/ctci-ransom-note" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hash Tables – Ransom Note → https://www.hackerrank.com/challenges/ctci-ransom-note
            </a>
          </li>
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/icecream-parlor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ice Cream Parlor (similar to Two Sum) → https://www.hackerrank.com/challenges/icecream-parlor
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional Reference Material</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://www.geeksforgeeks.org/hashing-data-structure/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hashing basics: https://www.geeksforgeeks.org/hashing-data-structure/
            </a>
          </li>
          <li>
            <a 
              href="https://www.programiz.com/dsa/hash-table" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Understanding Time Complexity of Maps: https://www.programiz.com/dsa/hash-table
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Instructions</h3>
        <p>
          In this session, students will participate in a pair programming exercise. Each pair is required to collaboratively solve the given problem using a single system. Once the solution is successfully implemented and verified, the second member may use that solution for their individual assignment submission.
        </p>
        <p className="mt-4"><strong>Guidelines:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Form pairs before the session begins.</li>
          <li>Work together on one system per pair to develop and test the solution.</li>
          <li>In case a student is unable to find a partner, they should pair up with the mentor for this activity.</li>
          <li>Use of Large Language Models (LLMs) such as ChatGPT, Gemini, or similar tools is strictly prohibited.</li>
          <li>You may refer to Google or official documentation only for understanding syntax or language-specific concepts.</li>
        </ul>
        <p className="mt-4">
          The objective of this activity is to encourage collaboration, logical thinking, and peer learning while maintaining academic integrity.
        </p>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            You completed one of the most asked interview problems. Keep practicing, you're building real confidence step by step.
          </p>
        </div>
        <p>
          Now that you know how to use HashMaps for fast lookups, it's time to explore something exciting: Can a computer understand what a user really means, even without exact keywords?
        </p>
      </section>
    </div>
  );
};

export default Module4_12;
