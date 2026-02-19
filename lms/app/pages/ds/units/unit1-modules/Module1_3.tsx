'use client';
import React, { useState, useEffect } from 'react';

const RecursionAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { size: 'n', work: 'Problem(n)', color: 'blue' },
    { size: 'n-1', work: 'Problem(n-1)', color: 'green' },
    { size: 'n-2', work: 'Problem(n-2)', color: 'purple' },
    { size: '1', work: 'Base Case', color: 'orange' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 4), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-lg">Recursive Breakdown</div>
      <div className="flex justify-center items-center gap-4">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-24 h-24 flex flex-col items-center justify-center rounded-lg font-bold text-white transition-all ${
              i === step ? `bg-${s.color}-600 scale-110` : `bg-${s.color}-400`
            }`}>
              <div className="text-sm">{s.work}</div>
              <div className="text-xs">({s.size})</div>
            </div>
            {i < steps.length - 1 && <div className="text-2xl mx-2">→</div>}
          </div>
        ))}
      </div>
      <p className="text-center mt-4 font-semibold text-gray-700">
        Step {step + 1}: {steps[step].work}
      </p>
    </div>
  );
};

const RecursionTreeVisualization: React.FC = () => {
  const [level, setLevel] = useState(0);
  const maxLevel = 3;

  useEffect(() => {
    const timer = setInterval(() => setLevel(l => (l + 1) % (maxLevel + 1)), 2000);
    return () => clearInterval(timer);
  }, []);

  const renderNode = (depth: number, position: number, isActive: boolean) => (
    <div 
      key={`${depth}-${position}`}
      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white transition-all ${
        isActive ? 'bg-red-600 scale-110' : 'bg-red-400'
      }`}
      style={{
        position: 'absolute',
        left: `${50 + (position - Math.pow(2, depth) / 2) * 60}%`,
        top: `${depth * 80 + 20}px`,
        transform: 'translateX(-50%)'
      }}
    >
      T({4 - depth})
    </div>
  );

  return (
    <div className="border-4 border-red-500 bg-red-50 p-6 rounded-lg" style={{ height: '300px', position: 'relative' }}>
      <div className="text-center mb-4 font-bold text-lg">Recursion Tree Growth</div>
      {Array.from({ length: level + 1 }, (_, depth) =>
        Array.from({ length: Math.pow(2, depth) }, (_, pos) =>
          renderNode(depth, pos, depth === level)
        )
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="font-semibold text-gray-700">Level {level + 1}</p>
      </div>
    </div>
  );
};

const GrowthPatternAnimation: React.FC = () => {
  const [pattern, setPattern] = useState(0);
  const patterns = [
    { name: 'Linear Growth', bars: [1, 2, 3, 4, 5], color: 'green', label: 'O(n)' },
    { name: 'Logarithmic Growth', bars: [1, 2, 2, 3, 3], color: 'blue', label: 'O(log n)' },
    { name: 'Exponential Growth', bars: [1, 2, 4, 8, 16], color: 'red', label: 'O(2^n)' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setPattern(p => (p + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);

  const current = patterns[pattern];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-6 rounded-lg`}>
      <div className="text-center mb-4">
        <div className="font-bold text-lg">{current.name}</div>
        <div className="text-sm text-gray-600">{current.label}</div>
      </div>
      <div className="flex items-end justify-center gap-2 h-32">
        {current.bars.map((height, i) => (
          <div
            key={i}
            className={`w-8 bg-${current.color}-600 rounded-t transition-all duration-1000`}
            style={{ height: `${height * 15}px` }}
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
    { name: 'Merge Sort', split: 2, work: 'O(n)', result: 'O(n log n)', color: 'green' },
    { name: 'Matrix Mult', split: 8, work: 'O(n²)', result: 'O(n³)', color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setExample(e => (e + 1) % 3), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = examples[example];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-6 rounded-lg`}>
      <div className="text-center mb-4 font-bold text-lg">{current.name}</div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-3 rounded">
          <div className="font-semibold">Subproblems</div>
          <div className={`text-2xl font-bold text-${current.color}-600`}>{current.split}</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="font-semibold">Work per Level</div>
          <div className={`text-lg font-bold text-${current.color}-600`}>{current.work}</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="font-semibold">Total Complexity</div>
          <div className={`text-lg font-bold text-${current.color}-600`}>{current.result}</div>
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
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-orange-800">
            How do we understand programs that solve problems by breaking them into smaller versions of themselves?
          </p>
        </div>
        <p>
          Hi everyone, welcome to the second lesson on foundational mathematics. Before we proceed further, please read the disclaimer below.
        </p>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg mb-4">
          <p className="font-semibold text-red-800">Disclaimer:</p>
          <p>The goal of this lesson is to build intuition about how recursive programs grow and behave.</p>
          <p>We will use simple mathematical expressions and visual tools to understand how work increases in recursive algorithms — not to formally analyze or optimize them.</p>
          <p>Detailed definitions, rules, and comparisons related to Time and Space Complexity will be covered in the upcoming lessons.</p>
        </div>
        <p>With that said, let's proceed with the lesson.</p>
      </section>

      <section className="content-section">
        <h3>From Simple Programs to Recursive Thinking</h3>
        <p>In the previous lesson, you worked with mathematical operations such as:</p>
        <ul>
          <li>extracting digits,</li>
          <li>reversing numbers,</li>
          <li>checking palindromes,</li>
          <li>identifying prime numbers.</li>
        </ul>
        <p>All these problems had one thing in common: 👉 they followed a step-by-step process.</p>
        <p>Now, we move one step ahead.</p>
        <p>Instead of solving a problem step by step, we'll explore problems that:</p>
        <ul>
          <li>break themselves into smaller versions, and</li>
          <li>solve those smaller parts repeatedly.</li>
        </ul>
        <p>This idea is called <strong>recursion</strong>.</p>
        <div className="flex justify-center my-4">
          <img src="https://cdn-media-1.freecodecamp.org/images/1%2AQrQ5uFKIhK3jQSFYeRBIRg.png" alt="Basic flow of a recursive function" />
        </div>
        <RecursionAnimation />
      <br />
      <h4>Basic flow of a recursive function</h4>
      <img src="https://miro.medium.com/1%2Ao8UJRH7lJCNEpLTjvCUhgA.png" alt="" />
      </section>


      <section className="content-section">
        <h3>What Is a Recurrence Relation?</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p>
            A recurrence relation is a mathematical way to describe: "If I know how much work is needed for a smaller input, how can I describe the work for a bigger input?"
          </p>
        </div>
        <ul>
          <li>A recurrence relation does not solve the problem.</li>
          <li>It only describes how the problem reduces itself.</li>
        </ul>
        
        <h4>Example</h4>
        <p>If a program:</p>
        <ul>
          <li>solves a problem of size n</li>
          <li>by solving a problem of size n-1</li>
          <li>and doing a small amount of extra work</li>
        </ul>
        <p>we can describe it as:</p>
        <p className="text-center font-mono text-lg bg-gray-100 p-2 rounded">T(n) = T(n - 1) + some extra work</p>
        <p>At this point:</p>
        <ul>
          <li>We are not measuring efficiency</li>
          <li>We are only observing growth behavior</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Understanding Growth Without Formal Complexity</h3>
        <p>Before learning formal Time Complexity, it helps to think in simple terms:</p>
        <ul>
          <li>Does the work grow slowly?</li>
          <li>Does it grow steadily?</li>
          <li>Does it grow very fast?</li>
        </ul>
        <p>In this lesson, symbols like O(n) or O(log n) are used only as labels for growth patterns — not as formal mathematical tools.</p>
        <GrowthPatternAnimation />
      </section>

      <section className="content-section">
        <h3>Recursion Trees: Seeing the Problem Grow</h3>
        <p>A recursion tree is a visual way to:</p>
        <ul>
          <li>see how a recursive function expands,</li>
          <li>understand how many subproblems are created,</li>
          <li>observe how work spreads across levels.</li>
        </ul>
        <div className="flex justify-center my-4">
          <img src="https://www.cs.cornell.edu/courses/cs3110/2012sp/lectures/lec20-master/images/lec19-diagram3.png" alt="Recursion Tree" />
          <br />
        </div>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200206162306/Untitled-Diagram311.jpg" alt="" />
          <br />
          <img src="https://texample.net/files/merge-sort-recursion-tree.png" alt="" />
        <RecursionTreeVisualization />
        <p>At this stage, recursion trees are used only for visual understanding — to see how calls branch and repeat.</p>
      </section>

      <section className="content-section">
        <h3>🔍 Expanding a Simple Recurrence (Intuitively)</h3>
        <p>Consider this recurrence:</p>
        <p className="text-center font-mono text-lg bg-gray-100 p-2 rounded">T(n) = T(n - 1) + constant work</p>
        <p>If we expand it step by step:</p>
        <div className="bg-gray-100 p-4 rounded font-mono">
          <p>T(n) = T(n - 2) + constant + constant</p>
          <p>T(n) = T(n - 3) + constant + constant + constant</p>
        </div>
        <p>Eventually:</p>
        <ul>
          <li>the problem reaches size 1,</li>
          <li>and the number of steps grows steadily.</li>
        </ul>
        <p>👉 This tells us the work grows in a straight, predictable manner.</p>
        <p>No formulas needed — just observation.</p>
      </section>

      <section className="content-section">
        <h3>Introduction to the Master Theorem</h3>
        <p>Some recursive problems:</p>
        <ul>
          <li>split into multiple smaller problems</li>
          <li>instead of just one.</li>
        </ul>
        <p>For such patterns, mathematicians created a shortcut called the <strong>Master Theorem</strong>.</p>
        <div className="border-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg mb-4">
          <p>In this lesson, the Master Theorem is introduced only to help you recognize common recursive patterns.</p>
          <iframe width="407" height="360" src="https://www.youtube.com/embed/SDnnDZgxYiI" title="Recurrence Relations:  Master Method" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="font-semibold">You are not expected to memorize cases or apply it independently yet.</p>
        </div>
        <MasterTheoremVisual />
      </section>

      <section className="content-section">
        <h3>📌 Real-World Examples (Pattern Recognition Only)</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Algorithm</th>
                <th className="border border-gray-300 p-2">What to Notice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Binary Search</td>
                <td className="border border-gray-300 p-2">Problem size halves each time</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Merge Sort</td>
                <td className="border border-gray-300 p-2">Problem splits into two equal parts</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Quick Sort</td>
                <td className="border border-gray-300 p-2">Same idea, but split varies</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Matrix Multiplication</td>
                <td className="border border-gray-300 p-2">Fewer recursive calls → faster growth</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>We focus on: 👉 How the problem breaks 👉 How recursion behaves</p>
        <p>Not on formal comparison.</p>
      </section>

      <section className="content-section">
        <h3>🧾 Summary</h3>
        <ul>
          <li>Recurrence relations describe recursive behavior.</li>
          <li>Recursion trees help visualize problem expansion.</li>
          <li>Growth patterns can be understood intuitively.</li>
          <li>Formal efficiency analysis comes next.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>What's Next?</h3>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg">
          <h4>Coming Up: Time and Space Complexity</h4>
          <p>In the next lesson, you'll learn how to formally measure and compare algorithm efficiency using Time and Space Complexity.</p>
        </div>
      </section>
    </div>
  );
};

export default Module1_3;