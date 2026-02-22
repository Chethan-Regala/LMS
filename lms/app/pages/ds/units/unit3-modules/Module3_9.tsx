'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.9</div>
        <div className="lesson-title-main">
          <h1>Valid Parentheses</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDN3ZGZoYnZ5dGJ3OHNxYnZ5dGJ3OHNxYnZ5dGJ3OHNxYnZ5dGJ3OHNx/3o7btPCcdNniyf0ArS/giphy.gif" alt="Welcome" className="w-full max-w-md h-auto rounded-lg shadow-md" />
        </div>

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

        <div className="mb-6 flex flex-col items-center">
          <img src="https://miro.medium.com/max/1400/1*QZRBNPeZCD_SEtvjxmVJug.png" alt="LeetCode GitHub Integration" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
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
          title="Module 3.9 Quiz: Milestone Check-in"
          questions={[
            {
              question: "What is the primary objective of this LeetCode milestone?",
              options: ["To find the shortest possible solution", "To build coding habits and professional visibility", "To compete with other students on speed", "To learn new programming languages"],
              correctAnswer: 1,
              explanation: "The milestone focuses on strengthening logic through practice and building a portfolio using tools like GitHub and LinkedIn."
            },
            {
              question: "What does the 'Accepted' status on LeetCode signify?",
              options: ["Your code is stylish", "Your solution passed all hidden test cases and performance constraints", "You have finished the course", "Your code was reviewed by a human"],
              correctAnswer: 1,
              explanation: "Accepted means the code is logically correct and efficient enough to pass all the platform's tests."
            },
            {
              question: "How does the LeetHub extension (optional) help with your GitHub profile?",
              options: ["It deletes old files", "It automatically pushes your accepted solutions to a GitHub repository", "It writes documentation for you", "It makes your code run faster"],
              correctAnswer: 1,
              explanation: "LeetHub synchronizes your LeetCode activity with GitHub, helping recruiters see your consistent coding practice."
            },
            {
              question: "Which of the following is a mandatory part of the submission for this module?",
              options: ["A video of you coding", "A screenshot of your Accepted solution", "Your resume", "A 500-word essay"],
              correctAnswer: 1,
              explanation: "A screenshot of the Accepted status is required to verify completion of the exercise."
            },
            {
              question: "If you get a 'Time Limit Exceeded' (TLE) error, what should you do?",
              options: ["Give up", "Refresh the page", "Optimize the logic (e.g., look for unnecessary loops) and try again", "Buy a faster computer"],
              correctAnswer: 2,
              explanation: "TLE means your algorithm is too slow for the input size. You need to rethink the approach (e.g., using a more efficient data structure like a Stack)."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={9}
        />
      </section>
    </div>
  );
};

export default Module3_9;
