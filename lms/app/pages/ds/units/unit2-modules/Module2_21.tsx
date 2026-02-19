'use client';
import React from 'react';

const Module2_21: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.21</div>
        <div className="lesson-title-main">
          <h1>Longest Substring Without Repeating Characters</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this assignment, you will learn how to find the longest substring without repeating characters.
        </p>

        <h3 className="text-xl font-semibold mb-4">Problem statement</h3>
        <p className="mb-6">
          Given a string s, find the length of the longest substring without repeating characters.
        </p>

        <h3 className="text-xl font-semibold mb-4">Sample Input:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>s = "abcabcbb"</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Output:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>3</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Explanation:</h3>
        <p className="mb-6">
          The answer is "abc", with the length of 3.
        </p>

        <h3 className="text-xl font-semibold mb-4">Solution</h3>
        <p className="mb-4 font-semibold">
          Hint: Try to solve this problem using sliding window. If a window has unique characters, return it's length.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wiGpQwVHdE0" title="Longest Substring Without Repeating Characters" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-6">
          To solve this problem, you will need knowledge of unordered_sets(for C++) and sets (for python). By using maps in C++, you can store each character and it's frequency. Frequency of each letter is the number of times it occurs in a string. This way you can keep track of frequencies of each character in a window. If the frequency of any character increases more than 1, then shift the window until that character.
        </p>
      </section>
    </div>
  );
};

export default Module2_21;
