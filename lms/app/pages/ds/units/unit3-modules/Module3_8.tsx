'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.8</div>
        <div className="lesson-title-main">
          <h1>Assignment | Balancing Symbols</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Understanding "Valid Parentheses": A Lesson in Stacks</h3>

        <p className="mb-6">
          Welcome to today's lesson! We'll be tackling a classic coding problem that's a great introduction to a fundamental data structure: the stack. Before we dive in, let's get in the right mindset with a little coding humor.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://i.redd.it/y4x1c1vqiw651.jpg" alt="Coding Humor" className="w-full max-w-md h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-4">
          [Optional] Watch this video that explains this problem in detail
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WTzjTskDFMg" title="Valid Parentheses" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">The Problem: What are "Valid Parentheses"?</h3>
        <p className="mb-6">
          The challenge is to determine if a given string of parentheses is "valid." This means that for every opening bracket (be it (, {'{'}', or [) there must be a corresponding closing bracket of the same type, and they must be closed in the correct order.
        </p>


        <h3 className="text-xl font-semibold mb-4">Let's Break It Down: A Step-by-Step Approach</h3>

        <h3 className="text-lg font-semibold mb-3">The Brute Force Method (And Why We Can Do Better)</h3>
        <p className="mb-4">
          A straightforward, but less efficient, way to solve this is to repeatedly find and remove valid pairs of parentheses, (), [], { } from the string until no more pairs can be found. If the string is empty at the end, the original string was valid.
        </p>

        <p className="mb-3 font-semibold">Here's the thinking process:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Start with the input string.</li>
          <li>Scan the string for any occurrences of (), [], or { }.</li>
          <li>If you find a pair, remove it from the string.</li>
          <li>Repeat this process until you can no longer find any valid pairs.</li>
          <li>After the loop, check if the string is empty.
            <ul className="list-disc ml-6 mt-1">
              <li>If it is, the original string was valid.</li>
              <li>If it's not, the original string was invalid.</li>
            </ul>
          </li>
        </ol>

        <p className="mb-6">
          While this works, it's not the most optimal solution. The repeated searching and replacing can be slow, especially for long strings.
        </p>

        <h3 className="text-lg font-semibold mb-3">The Optimal Solution: Using a Stack</h3>
        <p className="mb-6">
          A more efficient way to solve this is by using a data structure called a stack. A stack follows the "Last-In, First-Out" (LIFO) principle, which is perfect for this problem. Think of it like a stack of plates: you can only add a new plate to the top, and you can only remove the top plate.
        </p>

        <p className="mb-3 font-semibold">Here's how we can use a stack to solve the "Valid Parentheses" problem:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-3">
          <li>Initialize an empty stack. This will be used to keep track of the opening brackets we encounter.</li>
          <li>Iterate through the input string character by character.</li>
          <li>If the character is an opening bracket (parenthesis, curly brace, or square bracket), push it onto the stack.</li>
          <li>If the character is a closing bracket:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>First, check if the stack is empty. If it is, this means we have a closing bracket without a corresponding opening bracket, so the string is invalid.</li>
              <li>If the stack is not empty, pop the top element from the stack.</li>
              <li>Compare the popped element with the current closing bracket.</li>
              <li>If they are a matching pair, continue to the next character.</li>
              <li>If they don't match, the string is invalid.</li>
            </ul>
          </li>
          <li>After iterating through the entire string, check if the stack is empty.
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>If it is, it means every opening bracket had a corresponding closing bracket, and the string is valid.</li>
              <li>If the stack is not empty, it means there are unclosed opening brackets, so the string is invalid.</li>
            </ul>
          </li>
        </ol>

        <Quiz
          title="Module 3.8 Quiz: Balancing Symbols"
          questions={[
            {
              question: "In the 'Valid Parentheses' problem, what do you do when you encounter an opening bracket '(', '[', or '{'?",
              options: ["Pop from the stack", "Push it onto the stack", "Ignore it", "Add it to the result string"],
              correctAnswer: 1,
              explanation: "Opening brackets are pushed onto the stack to keep track of what needs to be closed later."
            },
            {
              question: "If you encounter a closing bracket and the stack is empty, what does this indicate?",
              options: ["The string is halfway valid", "The string is definitely invalid (Underflow)", "You should start a new stack", "The string is perfectly balanced"],
              correctAnswer: 1,
              explanation: "If you have a closing bracket with nothing to match it on the stack, the brackets are unbalanced."
            },
            {
              question: "What is the final condition to confirm the entire string is valid after processing all characters?",
              options: ["The stack should have at least one element", "The stack must be completely empty", "The stack should contain only '('", "The string length must be prime"],
              correctAnswer: 1,
              explanation: "An empty stack at the end means every opening bracket was correctly matched and closed."
            },
            {
              question: "Why is the LIFO (Last-In, First-Out) property of stacks critical here?",
              options: ["It ensures brackets are closed in the reverse order they were opened", "It makes the code run in O(1) time", "It sorts the brackets alphabetically", "It allows us to skip the middle brackets"],
              correctAnswer: 0,
              explanation: "Correct nesting requires that the most recently opened bracket is the first one to be closed."
            },
            {
              question: "What is the time complexity of the stack-based approach for a string of length 'n'?",
              options: ["O(n^2)", "O(log n)", "O(n)", "O(1)"],
              correctAnswer: 2,
              explanation: "We traverse the string once, and each push/pop operation is O(1)."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={8}
        />
      </section>
    </div>
  );
};

export default Module3_8;
