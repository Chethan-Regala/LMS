'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.3</div>
        <div className="lesson-title-main">
          <h1>Assignment | Infix to Postfix Conversion</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          For this assignment, you'll be tasked with coding the conversion of an infix expression to a postfix expression.
        </p>

        <p className="mb-6">
          Converting an infix expression like A+B*C into postfix (also called Reverse Polish Notation) produces ABC*+, which is easier for machines to evaluate because it removes the need for parentheses and precedence checks at evaluation time.
        </p>

        <p className="mb-6">
          This conversion is typically implemented using a stack to hold operators while scanning the expression left-to-right, applying precedence and associativity rules as you go. For a formal explanation of the standard approach, see the <a href="https://www.geeksforgeeks.org/convert-infix-expression-to-postfix-expression/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GeeksforGeeks tutorial</a>.
        </p>

        <p className="mb-4">
          To gain a quick understanding of how this conversion works, please watch the following video:
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vq-nUF0G4fI" title="Infix to Postfix Conversion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <p className="mb-4">
          Here's a step by step approach to get you started with the initial logic
        </p>

        <h3 className="text-xl font-semibold mb-4">Step-by-step approach</h3>
        <ol className="list-decimal ml-6 mb-6 space-y-3">
          <li>First, read the input string and prepare an empty stack for operators and an empty string for the output.</li>
          <li>Then, scan the expression from left to right one character at a time.</li>
          <li>If the current character is an operand (letters or digits), append it directly to the output string.</li>
          <li>If the current character is a left parenthesis '(', push it onto the stack.</li>
          <li>If the current character is a right parenthesis ')', pop operators from the stack and append them to the output until you pop the matching '(' and discard that '('.</li>
          <li>If the current character is an operator (+, -, *, /, ^), then while the top of the stack has an operator with higher precedence, or equal precedence and left-associative, pop it and append to output; after those pops push the current operator onto the stack.</li>
          <li>After the scan finishes, pop all remaining operators from the stack and append them to the output.</li>
          <li>Finally, print the output string; that is your postfix expression.</li>
        </ol>


        <p className="mb-6">
          Quick note about precedence and associativity: Treat ^ as right-associative with highest precedence, * and / as the next highest, and + and - as the lowest. For a formal algorithmic view (the Shunting-yard algorithm by Dijkstra) see the <a href="https://en.wikipedia.org/wiki/Shunting_yard_algorithm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wikipedia page</a>.
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

        <h3 className="text-xl font-semibold mb-4">Additional reference material</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>For a stepwise tutorial with code snippets and examples, read the <a href="https://www.geeksforgeeks.org/convert-infix-expression-to-postfix-expression/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GeeksforGeeks article on converting infix to postfix</a>.</li>
          <li>For another clear written walkthrough and small examples, check the <a href="https://takeuforward.org/data-structure/infix-to-postfix/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TakeUForward write-up on infix-to-postfix</a>.</li>
          <li>For historical context, proofs, and the algorithmic description, read the <a href="https://en.wikipedia.org/wiki/Shunting_yard_algorithm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Shunting-yard article</a>.</li>
        </ul>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.tenor.com/kDOB0xS85HcAAAAi/pengu-pudgy.gif" alt="Infix to Postfix Example" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          Try converting five expressions by hand first (including nested parentheses and the ^ operator), then implement the code and test those same expressions programmatically. After that, solve the LeetCode RPN evaluation problem to reinforce how postfix is executed. You are doing great — take the assessment, trust your stack, and remember that every tough expression becomes simple once you follow the steps. Go for it!
        </p>

        <Quiz
          title="Module 3.3 Quiz: Infix to Postfix Conversion"
          questions={[
            {
              question: "What is Postfix notation also commonly known as?",
              options: ["Polish Notation", "Reverse Polish Notation (RPN)", "Parenthetical Notation", "Stack-based Infix"],
              correctAnswer: 1,
              explanation: "Postfix notation is formally known as Reverse Polish Notation (RPN)."
            },
            {
              question: "When scanning an infix expression, what should you do if the current character is an OPERAND (like 'A' or '5')?",
              options: ["Push it onto the operator stack", "Discard it", "Append it directly to the output string", "Wait for the next operator"],
              correctAnswer: 2,
              explanation: "Operands maintain their relative order in postfix and are added directly to the result string."
            },
            {
              question: "How is a closing parenthesis ')' handled during the conversion process?",
              options: ["It is pushed onto the stack", "Operators are popped from the stack to the output until '(' is reached", "It triggers an error", "It is ignored"],
              correctAnswer: 1,
              explanation: "Closing parentheses act as markers to empty the operator stack for the current sub-expression until the matching opening parenthesis is found."
            },
            {
              question: "Which operator typically has the highest precedence in these expressions?",
              options: ["+", "*", "^ (Exponentiation)", "/"],
              correctAnswer: 2,
              explanation: "Exponentiation (^) usually has higher precedence than multiplication/division and addition/subtraction."
            },
            {
              question: "What is the primary reason for using Postfix notation in computer systems?",
              options: ["It makes the expression shorter", "It eliminates the need for parentheses and precedence rules during evaluation", "It is easier for humans to read", "It reduces memory usage"],
              correctAnswer: 1,
              explanation: "Postfix notation allows a simple stack-based evaluation without complex rules, as the order of operations is unambiguous."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={3}
        />
      </section>
    </div>
  );
};

export default Module3_3;
