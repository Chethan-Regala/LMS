'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

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
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed italic">
            "This is a LeetCode problem, which means you can practice and submit your solution here while also strengthening your LeetCode profile. Solving it here helps you learn recursion, logic, and binary representation."
          </p>
        </div>
        <div className="image-container flex justify-center my-6">
          <img src="https://media1.tenor.com/m/dlJSiLUJNmsAAAAC/math-calculate.gif" alt="Power of Two" className="rounded-xl shadow-lg h-48" />
        </div>
      </section>

      <section className="content-section">
        <h3>A quick walkthrough before you start coding</h3>
        <p>Here's a short explainer on how to check if a number is a power of two, including recursive and bitwise methods.</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl rounded-2xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/4Xyhb72LCX4" title="Power of Two Explanation" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-800">Key Observations</h4>
              <p className="text-gray-600 text-sm">Powers of two are always positive. In binary form, they have exactly one bit set to 1.</p>
              <div className="bg-gray-50 p-3 rounded-lg font-mono text-xs mt-2 text-blue-600">
                1 → 0001 | 2 → 0010 | 4 → 0100 | 8 → 1000
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-800">Recursive Approach</h4>
              <p className="text-gray-600 text-sm">Base cases: If n ≤ 0 return false, if n == 1 return true. If n is not divisible by 2 return false.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-800">Bitwise Approach (Pro)</h4>
              <p className="text-gray-600 text-sm">A number is a power of two if <code className="bg-gray-100 px-1 rounded text-rose-500">(n & (n - 1)) == 0</code> and n &gt; 0.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/power-of-two/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600">231. Power of Two</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
          <a href="https://leetcode.com/problems/power-of-three/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600">326. Power of Three</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <section className="content-section">
        <p>Keep pushing yourself! Every time you solve a problem like this, you're not just coding; you're building the mental framework of a problem solver.</p>
        <div className="flex justify-center my-6">
          <img src="https://media.tenor.com/kU3yPR_3fAkAAAAj/you-can-do-it-i-believe-in-you.gif" alt="Motivation" className="w-48 transition-transform hover:scale-110" />
        </div>
      </section>

      <Quiz
        title="Module 1.4 Quiz: Power of Two"
        questions={[
          {
            question: "In binary representation, how many '1' bits are present in any power of two (e.g., 2, 4, 8, 16)?",
            options: ["Zero", "Exactly one", "Two or more", "Varies based on the number"],
            correctAnswer: 1,
            explanation: "In binary, powers of two look like 1, 10, 100, 1000, etc. They always have exactly one bit set to 1."
          },
          {
            question: "What is the most efficient bitwise expression to check if a positive integer 'n' is a power of two?",
            options: ["(n | (n - 1)) == 0", "(n & (n + 1)) == 0", "(n & (n - 1)) == 0", "(n ^ (n - 1)) == 0"],
            correctAnswer: 2,
            explanation: "If n is a power of two (like 1000), n-1 will be all ones below it (0111). Their bitwise AND will be exactly zero."
          },
          {
            question: "What should be the result for the input n = 0 when checking for a power of two?",
            options: ["True", "False", "Error", "1"],
            correctAnswer: 1,
            explanation: "Zero is not a power of two. Powers of two (2^x) are always positive integers."
          },
          {
            question: "When using the recursive division method (dividing by 2 repeatedly), what is the time complexity?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 2,
            explanation: "Since the input is halved at each step, the total number of operations is logarithmic relative to the input size."
          },
          {
            question: "If n = 16 (10000 binary), what is the binary representation of (n - 1)?",
            options: ["01111", "10001", "11111", "00000"],
            correctAnswer: 0,
            explanation: "Subtracting 1 from a power of two flips the single '1' bit to '0' and all following '1' bits to '1'."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={4}
      />
    </div>
  );
};

export default Module1_4;
