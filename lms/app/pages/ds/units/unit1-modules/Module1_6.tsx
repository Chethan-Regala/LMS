'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.6</div>
        <div className="lesson-title-main">
          <h1>Time and Space Complexity</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Why Efficiency Matters</h3>
        <p>
          In our previous lessons, we explored foundational mathematics like divisors, GCD, and concepts such as counting digits. These helped us build a solid base for solving problems. But solving a problem is just the first step—<strong>how efficiently</strong> we solve it is equally important.
        </p>
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed italic">
            "Have you ever wondered why some apps load in a blink while others take ages? This difference often comes down to how efficiently their algorithms are designed."
          </p>
        </div>
        <p>
          Think about looking for a friend's name in a contact list. If the list is sorted, you can find the name quickly. But if it's unsorted, you might have to check every entry one by one!
        </p>
      </section>

      <section className="content-section">
        <h3>1. Time Complexity</h3>
        <p>
          Time complexity describes how the <strong>running time</strong> of an algorithm changes based on the length of the input. It is not a direct measurement of seconds, but rather a count of the number of operations.
        </p>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md my-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Depends on the size of the input data.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Helps evaluate algorithm performance independently of hardware.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Represents growth rate, not absolute time.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>2. Space Complexity</h3>
        <p>
          Space complexity refers to the amount of memory an algorithm requires to execute. It accounts for both the memory needed to store input data and any <strong>auxiliary memory</strong> used during the algorithm's operation.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 mb-2">Input Space</h4>
            <p className="text-sm text-gray-600">Memory needed to store the initial input data provided to the algorithm.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h4 className="font-bold text-purple-800 mb-2">Auxiliary Space</h4>
            <p className="text-sm text-gray-600">Extra or temporary memory used by the algorithm to solve the problem.</p>
          </div>
        </div>
        <div className="image-container flex justify-center my-6">
          <img src="https://kq-storage.kalvium.community/tcsc.png" alt="Time vs Space Complexity" className="rounded-xl shadow-lg border border-gray-100" />
        </div>
      </section>

      <section className="content-section">
        <h3>Course Learning</h3>
        <p>Watch this video to understand the fundamental concepts of complexity analysis and the notations used to represent them.</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl rounded-2xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/FPu9Uld7W-E" title="Time and Space Complexity" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <Quiz
        title="Module 1.6 Quiz: Complexity Basics"
        questions={[
          {
            question: "What does 'Time Complexity' primarily measure?",
            options: ["The exact number of seconds a program takes", "How the number of operations increases with input size", "The size of the source code file", "The speed of the CPU"],
            correctAnswer: 1,
            explanation: "Time complexity focuses on the rate of growth in operations relative to the input size (n), ensuring the analysis is hardware-independent."
          },
          {
            question: "If an algorithm creates a new array of size 'n' to store intermediate results, what kind of space is this called?",
            options: ["Input Space", "Auxiliary Space", "Primary Space", "Stack Space"],
            correctAnswer: 1,
            explanation: "Extra memory used by the algorithm for its internal logic (beyond the input itself) is known as Auxiliary Space."
          },
          {
            question: "Why is absolute time (in seconds) not used to define complexity?",
            options: ["It is too hard to calculate", "It varies depending on the hardware and operating system", "Time doesn't matter in DSA", "Seconds are not a scientific unit"],
            correctAnswer: 1,
            explanation: "The same code runs faster on a supercomputer than a laptop. Complexity analysis must be platform-independent."
          },
          {
            question: "In the contact list analogy, which scenario is more efficient for finding a name?",
            options: ["Checking entries one by one in an unsorted list", "Searching a sorted list (skipping to the right page)", "Printing the whole list first", "Buying a new phone"],
            correctAnswer: 1,
            explanation: "Searching a sorted list (logarithmic complexity) is far more efficient than checking every entry (linear complexity)."
          },
          {
            question: "Which components make up total 'Space Complexity'?",
            options: ["Only the input data", "Only temporary variables", "Input Space + Auxiliary Space", "CPU Cache + RAM"],
            correctAnswer: 2,
            explanation: "Space complexity is the total memory used, which includes the space for inputs plus any extra variables used during execution."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={6}
      />
    </div>
  );
};

export default Module1_6;