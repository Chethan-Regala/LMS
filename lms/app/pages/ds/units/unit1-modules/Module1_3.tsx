'use client';
import React, { useState, useEffect } from 'react';
import Quiz from '../../components/Quiz';

const RecursionAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { size: 'n', work: 'Problem(n)', color: 'blue' },
    { size: 'n-1', work: 'Problem(n-1)', color: 'emerald' },
    { size: 'n-2', work: 'Problem(n-2)', color: 'purple' },
    { size: '1', work: 'Base Case', color: 'orange' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 4), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-2xl shadow-inner my-6">
      <div className="text-center mb-6 font-bold text-xl uppercase tracking-widest text-blue-800">Recursive Breakdown</div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-28 h-28 flex flex-col items-center justify-center rounded-2xl font-bold text-white shadow-lg transition-all duration-500 ${i === step ? `bg-${s.color}-600 scale-110 ring-4 ring-white` : `bg-${s.color}-400 opacity-50`
              }`}>
              <div className="text-sm">{s.work}</div>
              <div className="text-xs mt-1">size: {s.size}</div>
            </div>
            {i < steps.length - 1 && <div className="text-3xl mx-2 text-blue-300">→</div>}
          </div>
        ))}
      </div>
      <p className="text-center mt-6 p-3 bg-white rounded-xl font-bold text-gray-700 shadow-sm border border-blue-100">
        Active Step: <span className="text-blue-600">{steps[step].work}</span>
      </p>
    </div>
  );
};

const RecursionTreeVisualization: React.FC = () => {
  const [level, setLevel] = useState(0);
  const maxLevel = 3;

  useEffect(() => {
    const timer = setInterval(() => setLevel(l => (l + 1) % (maxLevel + 1)), 2500);
    return () => clearInterval(timer);
  }, []);

  const renderNode = (depth: number, position: number, isActive: boolean) => (
    <div
      key={`${depth}-${position}`}
      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-white shadow-md transition-all duration-700 ${isActive ? 'bg-red-600 scale-110 ring-4 ring-red-100' : 'bg-red-300 opacity-40'
        }`}
      style={{
        position: 'absolute',
        left: `${50 + (position - (Math.pow(2, depth) - 1) / 2) * (180 / Math.pow(2, depth))}%`,
        top: `${depth * 70 + 40}px`,
        transform: 'translateX(-50%)'
      }}
    >
      T({4 - depth})
    </div>
  );

  return (
    <div className="border-4 border-red-500 bg-red-50 p-6 rounded-2xl shadow-xl my-8 overflow-hidden" style={{ height: '350px', position: 'relative' }}>
      <div className="text-center mb-4 font-bold text-xl text-red-800 uppercase tracking-wider">Recursion Tree Growth</div>
      {Array.from({ length: level + 1 }, (_, depth) =>
        Array.from({ length: Math.pow(2, depth) }, (_, pos) =>
          renderNode(depth, pos, depth === level)
        )
      )}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-full px-6 shadow-sm border border-red-100">
        <p className="font-bold text-red-600">Depth Level: {level + 1}</p>
      </div>
    </div>
  );
};

const GrowthPatternAnimation: React.FC = () => {
  const [pattern, setPattern] = useState(0);
  const patterns = [
    { name: 'Linear Growth', bars: [1, 2, 3, 4, 5, 6], color: 'emerald', label: 'O(n)' },
    { name: 'Logarithmic Growth', bars: [1, 2, 2.5, 3, 3.2, 3.5], color: 'blue', label: 'O(log n)' },
    { name: 'Exponential Growth', bars: [0.5, 1, 2, 4, 8, 16], color: 'rose', label: 'O(2^n)' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setPattern(p => (p + 1) % 3), 3500);
    return () => clearInterval(timer);
  }, []);

  const current = patterns[pattern];

  return (
    <div className={`border-4 bg-white p-6 rounded-2xl shadow-lg my-8 transition-all duration-1000 ${pattern === 0 ? 'border-emerald-500' : pattern === 1 ? 'border-blue-500' : 'border-rose-500'
      }`}>
      <div className="text-center mb-6">
        <div className={`font-black text-2xl uppercase tracking-tighter ${pattern === 0 ? 'text-emerald-600' : pattern === 1 ? 'text-blue-600' : 'text-rose-600'
          }`}>{current.name}</div>
        <div className="text-sm font-bold text-gray-400 mt-1">{current.label} Pattern</div>
      </div>
      <div className="flex items-end justify-center gap-3 h-40">
        {current.bars.map((height, i) => (
          <div
            key={i}
            className={`w-10 rounded-t-xl transition-all duration-1000 shadow-sm ${pattern === 0 ? 'bg-emerald-500' : pattern === 1 ? 'bg-blue-500' : 'bg-rose-500'
              }`}
            style={{ height: `${height * 10}px` }}
          />
        ))}
      </div>
    </div>
  );
};

const MasterTheoremVisual: React.FC = () => {
  const [example, setExample] = useState(0);
  const examples = [
    { name: 'Binary Search', split: 1, work: 'O(1)', result: 'O(log n)', color: 'blue' },
    { name: 'Merge Sort', split: 2, work: 'O(n)', result: 'O(n log n)', color: 'emerald' },
    { name: 'Matrix Mult', split: 8, work: 'O(n²)', result: 'O(n³)', color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setExample(e => (e + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);

  const current = examples[example];

  return (
    <div className={`border-4 bg-white p-6 rounded-2xl shadow-xl my-8 transition-colors duration-500 ${example === 0 ? 'border-blue-500' : example === 1 ? 'border-emerald-500' : 'border-purple-500'
      }`}>
      <div className="text-center mb-8 font-black text-2xl uppercase text-gray-800">{current.name}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-xl border-b-4 border-gray-200">
          <div className="text-xs font-bold text-gray-400 uppercase mb-1">Subproblems</div>
          <div className={`text-4xl font-black ${example === 0 ? 'text-blue-600' : example === 1 ? 'text-emerald-600' : 'text-purple-600'
            }`}>{current.split}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border-b-4 border-gray-200">
          <div className="text-xs font-bold text-gray-400 uppercase mb-1">Work per Level</div>
          <div className={`text-2xl font-black ${example === 0 ? 'text-blue-600' : example === 1 ? 'text-emerald-600' : 'text-purple-600'
            }`}>{current.work}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border-b-4 border-gray-200">
          <div className="text-xs font-bold text-gray-400 uppercase mb-1">Total Complexity</div>
          <div className={`text-2xl font-black ${example === 0 ? 'text-blue-600' : example === 1 ? 'text-emerald-600' : 'text-purple-600'
            }`}>{current.result}</div>
        </div>
      </div>
    </div>
  );
};

const Module1_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.3</div>
        <div className="lesson-title-main">
          <h1>Foundational Mathematics for DSA - II</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Building Recursive Intuition</h3>
        <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
          <p className="text-center font-bold text-orange-800 text-lg">
            How do we understand programs that solve problems by breaking them into smaller versions of themselves?
          </p>
        </div>
        <p>
          Hi everyone, welcome to the second lesson on foundational mathematics. In this session, we dive into the fascinating world of <strong>Recursion</strong>.
        </p>
        <div className="bg-rose-50 p-6 rounded-xl border-2 border-rose-200 my-8 shadow-sm">
          <h4 className="font-black text-rose-800 uppercase tracking-tighter mb-2">⚠️ Important Disclaimer</h4>
          <p className="text-rose-700 text-sm leading-relaxed">The goal of this lesson is to build <strong>intuition</strong> about how recursive programs grow and behave. We will use simple visual tools to understand how work increases — not to formally analyze or optimize them yet.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>From Simple Programs to Recursive Thinking</h3>
        <p>In the previous lesson, you worked with step-by-step processes. Now, we level up to problems that solve themselves by repeating their own logic on smaller chunks of data.</p>
        <div className="image-container flex justify-center my-8">
          <img src="https://cdn-media-1.freecodecamp.org/images/1%2AQrQ5uFKIhK3jQSFYeRBIRg.png" alt="Recursion Concept" className="rounded-2xl shadow-lg border border-gray-100" />
        </div>
        <RecursionAnimation />
      </section>


      <section className="content-section">
        <h3>What Is a Recurrence Relation?</h3>
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8 font-medium text-blue-900">
          <p>
            A recurrence relation is a mathematical way to describe: "If I know how much work is needed for a smaller input, how can I describe the work for a bigger input?"
          </p>
        </div>
        <p>Example for a problem of size <strong>n</strong> that reduces to size <strong>n-1</strong>:</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-2xl font-mono text-xl text-center shadow-2xl my-6 border-t-8 border-gray-700">
          T(n) = T(n - 1) + O(1)
        </div>
      </section>

      <section className="content-section">
        <h3>Understanding Growth Patterns</h3>
        <p>Before learning formal Time Complexity, it helps to think in simple terms: Does the work grow slowly, steadily, or explosively?</p>
        <GrowthPatternAnimation />
      </section>

      <section className="content-section">
        <h3>Recursion Trees: Seeing the Problem Grow</h3>
        <p>A recursion tree is a powerful visual aid to see how a function expands, how many subproblems are created, and how work spreads across levels.</p>
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200206162306/Untitled-Diagram311.jpg" alt="Tree 1" className="rounded-xl border shadow-sm" />
          <img src="https://texample.net/files/merge-sort-recursion-tree.png" alt="Tree 2" className="rounded-xl border shadow-sm" />
        </div>
        <RecursionTreeVisualization />
      </section>

      <section className="content-section">
        <h3>Introduction to the Master Theorem</h3>
        <p>When recursive problems split into multiple smaller parts, we use a shortcut called the <strong>Master Theorem</strong> to quickly identify their complexity pattern.</p>
        <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 my-8">
          <div className="video-embed mb-4">
            <div className="video-container shadow-xl rounded-xl">
              <iframe width="407" height="360" src="https://www.youtube.com/embed/SDnnDZgxYiI" title="Master Method" allowFullScreen></iframe>
            </div>
          </div>
          <p className="text-center text-amber-800 font-bold">Watch to recognize common recursive patterns!</p>
        </div>
        <MasterTheoremVisual />
      </section>

      <section className="content-section">
        <h3>Pattern Recognition Summary</h3>
        <div className="overflow-hidden rounded-2xl border-2 border-gray-100 shadow-sm my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 text-left">Algorithm</th>
                <th className="p-4 text-left">Recursive Pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold">Binary Search</td>
                <td className="p-4 text-gray-600 italic">Problem size halves each time</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold">Merge Sort</td>
                <td className="p-4 text-gray-600 italic">Splits into two equal parts</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold">Quick Sort</td>
                <td className="p-4 text-gray-600 italic">Splits vary based on pivot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Quiz
        title="Module 1.3 Quiz: Recursion Foundations"
        questions={[
          {
            question: "What is the primary function of a 'Recurrence Relation'?",
            options: ["To solve the problem directly", "To describe how a problem reduces itself into smaller subproblems", "To measure the exact memory used by a function", "To prevent infinite loops"],
            correctAnswer: 1,
            explanation: "Recurrence relations like T(n) = T(n/2) + O(1) mathematically model how a problem is broken down."
          },
          {
            question: "In a 'Recursion Tree', what does each node represent?",
            options: ["A single variable", "A loop index", "A recursive function call (subproblem)", "A memory address"],
            correctAnswer: 2,
            explanation: "Each node in the tree represents a specific call to the recursive function with its own input size."
          },
          {
            question: "If an algorithm splits a problem of size 'n' into two equal subproblems of size 'n/2', which theorem provides a shortcut for analysis?",
            options: ["Pythagorean Theorem", "Master Theorem", "Central Limit Theorem", "Bayes' Theorem"],
            correctAnswer: 1,
            explanation: "The Master Theorem is a powerful shortcut for determining the complexity of divide-and-conquer recurrences."
          },
          {
            question: "Which pattern describes 'Exponential Growth'?",
            options: ["Work stays constant regardless of n", "Work doubles for every addition to n", "Work grows in a straight line with n", "Work grows based on the square of n"],
            correctAnswer: 1,
            explanation: "Exponential growth (e.g., O(2^n)) is very fast, meaning the work becomes massive even for small increases in input size."
          },
          {
            question: "What is the 'Base Case' in recursion?",
            options: ["The largest possible input", "The condition that stops the recursion", "The first line of the function", "The complexity class of the algorithm"],
            correctAnswer: 1,
            explanation: "The base case is essential to prevent infinite recursion by providing a simple, non-recursive solution for the smallest input."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={3}
      />
    </div>
  );
};

export default Module1_3;
