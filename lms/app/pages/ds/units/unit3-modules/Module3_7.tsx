'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.7</div>
        <div className="lesson-title-main">
          <h1>Basic Calculator</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Basic Calculator – LeetCode Problem #224</h3>

        <p className="mb-6">
          If Reverse Polish Notation was the introduction to stacks, Basic Calculator is the final boss of string parsing. This problem takes you from simply following a post-fix order to handling the chaos of standard math: parentheses, unary operators (like negative numbers), and infix notation.
        </p>

        <p className="mb-6">
          In this challenge, you must implement a calculator to evaluate a simple expression string containing:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Positive and negative signs (+, -)</li>
          <li>Open and closed parentheses ( )</li>
          <li>Non-negative integers and empty spaces</li>
        </ul>

        <p className="mb-6">
          The real trick here is managing the scope. When you hit a (, you essentially start a "sub-problem," and when you hit a ), you need to merge that result back into the main calculation.
        </p>

        <p className="mb-6">
          Let's break down how to maintain your "mental state" while traversing the string.
        </p>

        <h3 className="text-xl font-semibold mb-4">Watch this before coding</h3>
        <p className="mb-4">
          This video explains the most efficient way to handle signs and parentheses without needing complex recursion or a full expression tree.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/081AqOuasw0" title="Basic Calculator" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://assets.leetcode.com/uploads/2020/10/01/calculator.jpg" alt="Basic Calculator Example" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Step-by-Step Approach</h3>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Variables to Track</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>result:</strong> The running sum of the current scope.</li>
              <li><strong>sign:</strong> The current operator (represented as 1 for plus and -1 for minus).</li>
              <li><strong>stack:</strong> Stores the result and sign from the previous scope when we encounter a (.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">The Logic</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Numbers:</strong> If you see a digit, parse the full number (it might be multiple characters like "123"). Multiply it by the current sign and add it to result.</li>
              <li><strong>Plus/Minus:</strong> Update the sign variable.</li>
              <li><strong>Left Parenthesis (:</strong> This is a "save point." Push the current result and then the sign onto the stack. Reset result to 0 and sign to 1 to start fresh inside the brackets.</li>
              <li><strong>Right Parenthesis ):</strong> The sub-problem is over. Multiply the current result by the sign popped from the stack, then add the previous result popped from the stack.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Time Complexity:</p>
            <p>Each character in the string is visited exactly once.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Space Complexity:</p>
            <p>In the worst case of nested parentheses (e.g., ((((1+1))))), the stack depth grows linearly with the input.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-4">
          Ready to level up? Try these variations on the calculator theme:
        </p>

        <p className="mb-2 font-semibold">LeetCode:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><a href="https://leetcode.com/problems/basic-calculator-ii/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">227. Basic Calculator II (Adds multiplication and division)</a></li>
          <li><a href="https://leetcode.com/problems/basic-calculator-iii/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">772. Basic Calculator III (The ultimate version with all operators)</a></li>
          <li><a href="https://leetcode.com/problems/basic-calculator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">224. Basic Calculator</a></li>
        </ul>

        <p className="mb-2 font-semibold">HackerRank:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Arithmetic Expressions</li>
          <li>Simple Text Editor (Great for stack-based undo/redo logic)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Additional Reference Material</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://en.wikipedia.org/wiki/Shunting_yard_algorithm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Shunting-Yard Algorithm – Wikipedia (The classic algorithm for parsing infix notation)</a></li>
          <li>The Stack Class in Java/C++/Python</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Where It's Asked</h3>
        <p className="mb-6">
          This problem is a favorite for Senior Software Engineer interviews because it tests your ability to handle "Edge Cases" (like spaces and multiple signs) and state management: <strong>Facebook (Meta), Uber, Airbnb, Pinterest, and Bloomberg</strong>
        </p>

        <p className="mb-6">
          Solving this shows an interviewer that you can decompose a complex, nested problem into a clean, iterative solution using the right data structures.
        </p>

        <p className="mb-6">
          Don't let the nested parentheses get you down! Just remember: every ( is just a new beginning. Keep track of your signs, and the math will take care of itself.
        </p>

        <Quiz
          title="Module 3.7 Quiz: Math Expression Parsing"
          questions={[
            {
              question: "When evaluating an expression with parentheses using the iterative approach, what is the role of the Stack?",
              options: ["To store every single character", "To save the 'context' (current result and sign) when entering a sub-problem defined by '('", "To sort the numbers", "To reverse the string"],
              correctAnswer: 1,
              explanation: "The stack acts as a memory to store the work-in-progress result and a pending operator so we can start fresh inside a parenthesis group."
            },
            {
              question: "How is a subtraction operation typically handled in the 'Basic Calculator' algorithm logic?",
              options: ["By deleting the next number", "By setting a 'sign' variable to -1 and adding the next value as (sign * value)", "By waiting until the end of the string", "By using a second stack for operators"],
              correctAnswer: 1,
              explanation: "Treating 'A - B' as 'A + (-1 * B)' allows us to use a simple running sum for the result."
            },
            {
              question: "What happens when the parser encounters a closing parenthesis ')'?",
              options: ["The program ends", "The current result is reset to zero", "The current result is combined with the 'context' (sign and previous sum) popped from the stack", "All numbers are deleted"],
              correctAnswer: 2,
              explanation: "Meeting ')' signifies the end of a scope; we must multiply the current sub-result by the scope's sign and add it to the outer sum."
            },
            {
              question: "What is the time complexity for evaluating an expression string of length 'n' using this stack approach?",
              options: ["O(n^2)", "O(log n)", "O(n)", "O(1)"],
              correctAnswer: 2,
              explanation: "Every character is processed exactly once as we iterate through the string."
            },
            {
              question: "Why is it important to handle spaces (' ') in the input string?",
              options: ["Spaces add to the final result", "Spaces are invalid and should crash the program", "Spaces should be ignored to prevent parsing errors", "Spaces represent the number zero"],
              correctAnswer: 2,
              explanation: "Expression strings often contain stylistic spaces; the algorithm must skip them to focus on meaningful tokens (digits, operators, brackets)."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={7}
        />
      </section>
    </div>
  );
};

export default Module3_7;
