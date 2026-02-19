'use client';
import React from 'react';

const Module3_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.5</div>
        <div className="lesson-title-main">
          <h1>Evaluate Reverse Polish Notation</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Evaluate Reverse Polish Notation – LeetCode Problem #150</h3>
        
        <p className="mb-6">
          If you've ever used a classic HP calculator or wondered how computers actually process complex mathematical expressions like (3 + 4) * 5, you're about to find out! Evaluate Reverse Polish Notation (RPN) is a classic problem that moves beyond basic logic and introduces you to one of the most important data structures in computer science: the Stack.
        </p>

        <p className="mb-6">
          In this problem, you are given an array of strings representing an arithmetic expression in postfix notation. Your job is to calculate the total value. In RPN:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>The operators follow their operands. For example, instead of 2 + 1, you see ["2", "1", "+"].</li>
          <li>There are no parentheses needed because the order of operations is always clear!</li>
        </ul>

        <p className="mb-6">
          Mastering this problem is a major milestone because it teaches you how to manage Last-In, First-Out (LIFO) data flow—a concept used in everything from "Undo" buttons to browser history.
        </p>

        <p className="mb-6">
          Let's dive into how we can solve this using a stack-based approach.
        </p>

        <h3 className="text-xl font-semibold mb-4">Watch this before coding</h3>
        <p className="mb-4">
          Here's a clear breakdown of how the Stack data structure handles RPN and why it is the most efficient way to solve this challenge.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qN8LPIcY6K4" title="Evaluate Reverse Polish Notation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach</h3>
        
        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Understand the Data Structure</p>
            <p>We use a Stack because we need to keep track of numbers and apply operators to the most recently seen values.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">The Logic</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Iterate through the list of strings.</li>
              <li>If the string is a number: Push it onto the stack.</li>
              <li>If the string is an operator (+, -, *, /):
                <ul className="list-circle ml-6 mt-1">
                  <li>Pop the top two numbers from the stack.</li>
                  <li>The first pop is your second operand, and the second pop is your first operand.</li>
                  <li>Apply the operator and push the result back onto the stack.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Implementation Steps</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Initialize an empty integer stack.</li>
              <li>Loop through each token.</li>
              <li>Use if-else or a switch to handle the four operators.</li>
              <li>At the very end, the stack will contain exactly one value: your final answer.</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold mb-2">Time Complexity: O(n)</p>
            <p>We process each token in the input array exactly once.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Space Complexity: O(n)</p>
            <p>In the worst case (e.g., all numbers followed by all operators), the stack will store most of the numbers.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-4">
          Ready to test your stack skills? Try these related problems:
        </p>

        <p className="mb-2 font-semibold">LeetCode:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">150. Evaluate Reverse Polish Notation</a></li>
          <li><a href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">20. Valid Parentheses</a></li>
          <li><a href="https://leetcode.com/problems/min-stack/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">155. Min Stack</a></li>
        </ul>

        <p className="mb-2 font-semibold">HackerRank:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Maximum Element (Stack Practice)</li>
          <li>Balanced Brackets</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Additional Reference Material</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GeeksforGeeks – Stack Data Structure</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reverse Polish Notation – Why we use it?</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Where It's Asked</h3>
        <p className="mb-6">
          RPN Evaluation is a favorite among top-tier tech companies for testing data structure fluency: <strong>Microsoft, LinkedIn, Amazon, Google, and Oracle</strong>
        </p>

        <p className="mb-6">
          It's a perfect problem to demonstrate that you know how to choose the right tool for the job. Using a stack makes a complex-looking math problem surprisingly simple to code!
        </p>

        <p className="mb-6">
          Don't let the "Polish Notation" name intimidate you—it's just a different way of looking at math. Once you get the stack logic down, you'll see why this is such an elegant solution. Happy coding!
        </p>
      </section>
    </div>
  );
};

export default Module3_5;
