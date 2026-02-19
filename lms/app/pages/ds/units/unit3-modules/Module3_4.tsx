'use client';
import React from 'react';

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
      </section>
    </div>
  );
};

export default Module3_4;
