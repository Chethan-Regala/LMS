'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.10</div>
        <div className="lesson-title-main">
          <h1>Next Greater Element I</h1>
        </div>
      </div>

      <section className="content-section">

        <p className="mb-6 text-lg">
          Hey there! 👋 Welcome to the LeetCode milestone.
        </p>

        <p className="mb-6">
          Here's your quick, simple guide for this milestone.
        </p>

        <p className="mb-6">
          The goal is to help you grow your coding skills and your online tech presence, all through one small activity.
        </p>

        <h3 className="text-xl font-semibold mb-4">What You'll Do (and Why It Helps You)</h3>
        <ol className="list-decimal ml-6 mb-6 space-y-3">
          <li><strong>Solve one LeetCode problem</strong>
            <p className="mt-1">Because real problem-solving builds confidence and strengthens your logic over time — even one problem makes a difference.</p>
          </li>
          <li><strong>Take a screenshot of your Accepted solution</strong>
            <p className="mt-1">Just a quick way for us to confirm you've completed the milestone.</p>
          </li>
          <li><strong>Use the LeetHub extension to auto-push your solution to GitHub [Optional]</strong>
            <p className="mt-1">This keeps your GitHub active without any extra effort. A greener GitHub = stronger portfolio = better impression during internships and placements.</p>
          </li>
          <li><strong>(Optional) Share your progress on LinkedIn [Optional]</strong>
            <p className="mt-1">A small post shows consistency and helps you build visibility. Recruiters love seeing growth.</p>
          </li>
        </ol>

        <h3 className="text-xl font-semibold mb-4">How to Complete It (Simple Steps)</h3>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Step 1: Open the LeetCode problem</p>
            <p>Read it slowly, check the examples, and try a simple approach first. You don't need the smartest solution — just the correct one.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 2: Get the green "Accepted"</p>
            <p>Once you do, take a quick screenshot.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 3: Install the LeetHub Chrome extension [Optional]</p>
            <p>Sign in with GitHub → Let it create a repo → Now every time you solve a problem, your code appears on GitHub automatically. Zero manual work.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 4: Check your GitHub repository [Optional]</p>
            <p>Make sure your latest solution is there. If yes — great! You've now added to your portfolio.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 5: Share on LinkedIn [Optional]</p>
            <p className="mb-2">A simple post like:</p>
            <div className="bg-gray-100 p-4 rounded italic">
              "Solved today's LeetCode milestone and learned &lt;concept&gt;. Loving the auto-push to GitHub via LeetHub!"
            </div>
            <p className="mt-2">This builds your visibility over time.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Your Submission</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Screenshot of your Accepted LeetCode submission</li>
          <li>GitHub repo link (auto-updated by LeetHub)</li>
          <li>(Optional) LinkedIn post link/screenshot</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Remember:</p>
          <p>This milestone isn't about perfection. It's about showing up, practicing, and building small habits that compound into something big — stronger skills, a better GitHub, and a more confident you.</p>
        </div>

        <p className="mb-6 text-lg font-semibold text-center">
          You've got this. 🚀
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.giphy.com/media/media/v1.Y2lkPTc5MGI3NjExM3o3YWJLaE9wdTBOd2VuSDNPJmVwPXYxX2dpZnNfc2VhcmNoJmN0PWc/3o7abKhOpu0NwenH3O/giphy.webp" alt="You Got This" className="w-full max-w-md h-auto rounded-lg shadow-md" />
        </div>

        <Quiz
          title="Module 3.10 Quiz: Next Greater Element Challenge"
          questions={[
            {
              question: "What does the 'Next Greater Element' for a number 'x' refer to?",
              options: ["The largest number in the entire array", "The first element to its right that is strictly greater than 'x'", "The element immediately following it", "x + 1"],
              correctAnswer: 1,
              explanation: "The problem asks for the first larger value found as you scan to the right from the current position."
            },
            {
              question: "Which data structure pattern is most efficient for solving 'Next Greater Element' in O(n) time?",
              options: ["Monotonic Stack", "Binary Search Tree", "Max-Heap", "Circular Queue"],
              correctAnswer: 0,
              explanation: "A monotonic stack keeps elements in a specific order (e.g., decreasing) to quickly find the next larger value for multiple elements in one pass."
            },
            {
              question: "In the stack-based approach, what happens when the current array element is GREATER than the element at the top of the stack?",
              options: ["Push the current element and continue", "The top element's 'next greater' is found; pop it and repeat the check", "Discard the current element", "Clear the entire stack"],
              correctAnswer: 1,
              explanation: "When we find a larger element, it serves as the 'next greater' for the element on the stack. We pop it and check the new top."
            },
            {
              question: "If no greater element is found to the right, what is the standard output for that position?",
              options: ["0", "Infinity", "The element itself", "-1"],
              correctAnswer: 3,
              explanation: "According to the standard problem definition, we return -1 if no larger element exists to the right."
            },
            {
              question: "What is the time complexity of the optimized stack solution compared to a brute-force approach?",
              options: ["O(n) vs O(n^2)", "O(log n) vs O(n)", "O(n log n) vs O(n^2)", "Both are O(n)"],
              correctAnswer: 0,
              explanation: "The stack approach ensures each element is pushed and popped at most once, achieving linear time complexity."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={10}
        />
      </section>
    </div>
  );
};

export default Module3_10;
