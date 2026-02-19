'use client';
import React, { useState } from 'react';

const Module1_16: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.16</div>
        <div className="lesson-title-main">
          <h1>Count Primes</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-2xl font-semibold mb-4">Count Primes – LeetCode Problem #204</h3>
        
        <p className="mb-4">
          Understanding prime numbers is one of the first stepping stones toward mastering number theory and algorithmic thinking. In this problem, you'll implement an efficient way to count how many prime numbers exist strictly less than a given integer n.
        </p>

        <p className="mb-4">
          This isn't just a coding challenge, it's a great opportunity to strengthen your grasp on the Sieve of Eratosthenes, one of the most elegant and widely used algorithms in computational mathematics.
        </p>

        <p className="mb-6">
          It's also a LeetCode problem, meaning you can solve it right here and then use the same logic directly on LeetCode to improve your LeetCode profile while learning key DSA concepts side by side.
        </p>

        <div className="mb-6">
          <img src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif" alt="" />
        </div>

        <p className="mb-6">
          Now that we've lightened the mood, let's see how this problem actually works.
        </p>

        <h3 className="text-xl font-semibold mb-4">Watch this short explanation before you start coding</h3>
        <p className="mb-6">
          A quick walkthrough of how to efficiently count primes using the Sieve of Eratosthenes.
        </p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/klcIklsWzrY" title="Sieve of Eratosthenes | Journey into cryptography | Computer Science | Khan Academy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Approach</h2>
        <p className="mb-4">
          Here's a simple way to think through the problem.
        </p>

        <div className="mb-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-semibold mb-2 text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <span className="transform transition-transform duration-300" style={{ display: 'inline-block', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              ▶
            </span>
            Click to expand the step-by-step guide
          </button>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isExpanded ? '1000px' : '0',
              opacity: isExpanded ? 1 : 0
            }}
          >
            <div className="space-y-4 mt-4">
              <div>
                <p className="font-semibold">Understand the Problem</p>
                <p>You're asked to return the number of prime numbers strictly less than n.</p>
              </div>

              <div>
                <p className="font-semibold">Brute Force Idea</p>
                <p>For every number from 2 to n-1, check if it's prime by dividing it by all smaller numbers. This approach works but is too slow for large n.</p>
              </div>

              <div>
                <p className="font-semibold">Optimized Approach – Sieve of Eratosthenes</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Create a boolean array isPrime of size n and mark all numbers as true.</li>
                  <li>Set isPrime[0] and isPrime[1] to false since 0 and 1 aren't prime.</li>
                  <li>For every number i starting from 2, if i is still marked as prime, mark all multiples of i as not prime.</li>
                  <li>Continue this process up to sqrt(n).</li>
                  <li>Finally, count all true values in the array — that's your number of primes.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Time Complexity: O(n log log n)</p>
              </div>

              <div>
                <p className="font-semibold">Space Complexity: O(n)</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <p className="mb-4">
          To strengthen your understanding, try these additional problems:
        </p>

        <div className="mb-4">
          <p className="font-semibold mb-2">LeetCode:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <a href="https://leetcode.com/problems/count-primes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Leetcode 204 | Count Primes
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/problems/ugly-number/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LeetCode 263 | Ugly Number
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">HackerRank:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <a href="https://www.hackerrank.com/challenges/prime-checker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Prime Number Checker
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/challenges/kaprekar-numbers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Modified Kaprekar Numbers
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Module1_16;
