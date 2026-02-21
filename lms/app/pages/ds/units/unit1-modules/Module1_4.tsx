'use client';
import React from 'react';

const Module1_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.4</div>
        <div className="lesson-title-main">
          <h1>Power of Two</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Power of Two – LeetCode Problem #231</h3>
        <p>
          Have you ever noticed how often powers of two show up in computer science? From memory allocation to bitwise operations, powers of two form the backbone of how computers process and store information.
        </p>
        <p>
          In this problem, you'll write a function that checks whether a given integer n is a power of two. Sounds simple, right? But there's a twist — you need to handle all kinds of edge cases efficiently, from negative numbers to large values.
        </p>
        <p>
          This is a LeetCode problem, which means you can practice and submit your solution here while also strengthening your LeetCode profile. Solving it here helps you learn recursion, logic, and binary representation — all while adding a high-value problem to your coding portfolio.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://media1.tenor.com/m/dlJSiLUJNmsAAAAC/math-calculate.gif" alt="Power of Two" />
        </div>
        <p>Let's take a look at how you can approach this one step at a time.</p>
      </section>

      <section className="content-section">
        <h3>A quick walkthrough before you start coding</h3>
        <p>Here's a short explainer on how to check if a number is a power of two, including recursive and bitwise methods.</p>
        <div className="flex justify-center my-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4Xyhb72LCX4" title="Power of Two Explanation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <details className="border border-gray-300 rounded p-4">
          <summary className="font-semibold cursor-pointer">Click to expand the step-by-step guide</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4>Understand the Problem</h4>
              <p>You need to determine whether n can be represented as 2^x for some integer x.</p>
            </div>
            
            <div>
              <h4>Key Observations</h4>
              <ul>
                <li>Powers of two are always positive.</li>
                <li>In binary form, a power of two has exactly one bit set to 1. Example:</li>
              </ul>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                <p>1 → 0001</p>
                <p>2 → 0010</p>
                <p>4 → 0100</p>
                <p>8 → 1000</p>
              </div>
            </div>

            <div>
              <h4>Recursive Approach</h4>
              <p>Base cases:</p>
              <ul>
                <li>If n &lt;= 0, return false.</li>
                <li>If n == 1, return true.</li>
                <li>If n is not divisible by 2, return false.</li>
              </ul>
              <p>Otherwise, keep dividing by 2 and check recursively.</p>
            </div>

            <div>
              <h4>Bitwise Approach (Alternative)</h4>
              <ul>
                <li>Use the property: A number is a power of two if (n &amp; (n - 1)) == 0 and n &gt; 0.</li>
                <li>This works because powers of two have only one bit set.</li>
              </ul>
            </div>

            <div>
              <p><strong>Time Complexity:</strong> O(log n)</p>
              <p><strong>Space Complexity:</strong> O(1) (or O(log n) for recursion)</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>Keep your learning momentum going with these:</p>
        
        <h4>LeetCode:</h4>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">231. Power of Two</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">326. Power of Three</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">342. Power of Four</a></li>
        </ul>

        <h4>HackerRank:</h4>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">Recursive Power Calculation</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Bit Manipulation Basics</a></li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional Reference Material</h3>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">Check if a number is power of two | HackerRank</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Binary and Powers of Two | Wikipedia</a></li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Where It's Asked</h3>
        <p>You'll find this problem or similar variations in interviews at: Google, Amazon, Microsoft, Meta, Apple, and NVIDIA</p>
        <p>It's a favorite for testing recursion, bitwise operations, and mathematical reasoning, all essential DSA skills for technical interviews.</p>
      </section>

      <section className="content-section">
        <p>Keep pushing yourself! Every time you solve a problem like this, you're not just coding; you're building the mental framework of a problem solver. Take the challenge, test your understanding, and level up your confidence!</p>
      </section>
      <img src="https://media.tenor.com/kU3yPR_3fAkAAAAj/you-can-do-it-i-believe-in-you.gif" alt="" />
    </div>
  );
};

export default Module1_4;