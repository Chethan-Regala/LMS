'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.5</div>
        <div className="lesson-title-main">
          <h1>Fizz Buzz</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>FizzBuzz – LeetCode Problem #412</h3>
        <p>
          If you've ever explored coding challenges, you've probably come across FizzBuzz, one of the simplest yet most classic problems in programming. It's often used to check your understanding of loops, conditional statements, and basic logic building.
        </p>
        <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            Generate a list of strings from 1 to n, where:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-emerald-900">
            <li>Divisible by 3 → <span className="font-bold">"Fizz"</span></li>
            <li>Divisible by 5 → <span className="font-bold">"Buzz"</span></li>
            <li>Divisible by both 3 and 5 → <span className="font-bold">"FizzBuzz"</span></li>
          </ul>
        </div>
        <div className="image-container flex justify-center my-6">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Thinking Process" className="rounded-xl shadow-lg h-48" />
        </div>
      </section>

      <section className="content-section">
        <h3>Logic Visualization</h3>
        <p>Watch this visual walkthrough of the logic and common pitfalls with conditional ordering.</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl rounded-2xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/QPZ0pIK_wsc" title="FizzBuzz Explanation" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-800">Condition Ordering</h4>
              <p className="text-gray-600 text-sm">Always check for divisibility by <span className="font-bold">both (15)</span> first, otherwise the separate conditions for 3 or 5 will trigger early.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-800">Iteration</h4>
              <p className="text-gray-600 text-sm">Loop through numbers from 1 to n. Use the modulo operator <code className="bg-gray-100 px-1 rounded text-rose-500">%</code> to check remainders.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-800">Storage</h4>
              <p className="text-gray-600 text-sm">Convert numbers to strings before adding them to your result list/vector.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/fizz-buzz/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">412. Fizz Buzz</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
          <a href="https://leetcode.com/problems/add-digits/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">258. Add Digits</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.5 Quiz: Fizz Buzz"
        questions={[
          {
            question: "Why must you check if a number is divisible by 15 (both 3 and 5) *before* checking if it's divisible by 3?",
            options: ["It saves memory", "To ensure 'FizzBuzz' is printed instead of just 'Fizz' for such numbers", "Because 15 is larger than 3", "It's a requirement of the C++ compiler"],
            correctAnswer: 1,
            explanation: "In an if-else structure, the first true condition executes. If you check %3 first, numbers like 15 will print 'Fizz' and skip the 'FizzBuzz' check."
          },
          {
            question: "What is the result for n = 5 in the FizzBuzz sequence?",
            options: ["['1', '2', 'Fizz', '4', 'Buzz']", "['1', '2', '3', '4', '5']", "['Fizz', 'Buzz']", "['1', '2', 'Buzz', '4', 'Fizz']"],
            correctAnswer: 0,
            explanation: "1, 2 are normal, 3 is %3 (Fizz), 4 is normal, 5 is %5 (Buzz)."
          },
          {
            question: "What is the Time Complexity of generating the FizzBuzz sequence for 'n' numbers?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctAnswer: 2,
            explanation: "We iterate through the list exactly once, making the work proportional to 'n'."
          },
          {
            question: "Which operator is used to determine if a number 'x' is divisible by 'y'?",
            options: ["x / y", "x * y", "x % y == 0", "x ^ y"],
            correctAnswer: 2,
            explanation: "The modulo operator (%) returns the remainder. If (x % y) is 0, then x is divisible by y."
          },
          {
            question: "What is the Space Complexity of the solution if you store the results in a list of strings?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 1,
            explanation: "We store 'n' strings in memory, so the space used grows linearly with the input size 'n'."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={5}
      />
    </div>
  );
};

export default Module1_5;