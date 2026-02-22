'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.4</div>
        <div className="lesson-title-main">
          <h1>Assignment | Infix to Prefix Conversion</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          For this assignment, your objective is to develop a program that converts an infix expression to a prefix expression, utilizing a stack for the process.
        </p>

        <p className="mb-4">
          To familiarize yourself with the methodology behind this conversion, please refer to the video provided:
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4pIc9UBHJtk" title="Infix to Prefix Conversion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <p className="mb-6">
          Please try converting Prefix to Infix as practice before the assessment.
        </p>

        <p className="mb-6 font-semibold text-lg">
          Please start the assignment and code now!
        </p>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-4">
          For additional practice, you can visit the following leetcode links given below. This part is optional and you can continue to the next lesson without solving these problems.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><a href="https://leetcode.com/problems/basic-calculator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Problem-1: Basic Calculator</a></li>
          <li><a href="https://leetcode.com/problems/basic-calculator-ii/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Problem-2: Basic Calculator II</a></li>
          <li><a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Problem-3: Evaluate Reverse Polish Notation</a></li>
        </ul>

        <Quiz
          title="Module 3.4 Quiz: Infix to Prefix Conversion"
          questions={[
            {
              question: "What is the primary characteristic of Prefix notation?",
              options: ["Operators are placed between operands", "Operators are placed after operands", "Operators are placed before operands", "Parentheses are always used"],
              correctAnswer: 2,
              explanation: "In prefix notation (also called Polish notation), the operator precedes its operands."
            },
            {
              question: "What is the common first step when using a modified Shunting-yard algorithm to convert Infix to Prefix?",
              options: ["Remove all operands", "Reverse the infix expression", "Evaluate the expression", "Sort the operators"],
              correctAnswer: 1,
              explanation: "Reversing the expression (and swapping parentheses) allows you to use a logic very similar to infix-to-postfix."
            },
            {
              question: "When reversing the infix expression for prefix conversion, what should happen to the parentheses?",
              options: ["They should be ignored", "They should be removed", " '(' should be treated as ')' and vice-versa", "They should stay in their original positions"],
              correctAnswer: 2,
              explanation: "To maintain correct grouping logic in the reversed string, opening brackets must become closing brackets and vice-versa."
            },
            {
              question: "After obtaining the intermediate result from the reversed infix string, what is the final step to get the Prefix expression?",
              options: ["Reverse the intermediate result", "Add parentheses", "Divide by two", "Uppercase all letters"],
              correctAnswer: 0,
              explanation: "Since the input was reversed, the resulting string must be reversed one last time to produce the correct prefix order."
            },
            {
              question: "Is Postfix more common than Prefix in modern computer architecture and compilers?",
              options: ["Yes, Postfix is much more common for stack-based evaluation", "No, Prefix is the standard for all machines", "They are equally rare", "Only for mobile devices"],
              correctAnswer: 0,
              explanation: "Postfix (RPN) is generally more common in compiler design and stack-based calculator implementations."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={4}
        />
      </section>
    </div>
  );
};

export default Module3_4;
