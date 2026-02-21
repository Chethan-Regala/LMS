'use client';
import React from 'react';

const Module2_19: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.19</div>
        <div className="lesson-title-main">
          <h1>3 sum</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this assignment, we will solve the 3 sum problem using the two pointer technique we learnt in the previous learning unit.
        </p>

        <h3 className="text-xl font-semibold mb-4">Problem statement</h3>
        <p className="mb-6">
          Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. So, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.
        </p>

        <h3 className="text-xl font-semibold mb-4">Input:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`6
-1 0 1 2 -1-4`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Output:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>[[-1,-1,2],[-1,0,1]]</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Explanation:</h3>
        <p className="mb-6">
          Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of summing up to zero with i!=j!=k
        </p>

        <h3 className="text-xl font-semibold mb-4">Approach</h3>
        <p className="mb-4 font-semibold">
          Check this out
        </p>

        <p className="mb-4">
          Check out the video if you are not very clear with the logic.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jzZsG8n2R9A" title="3 Sum Problem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  );
};

export default Module2_19;
