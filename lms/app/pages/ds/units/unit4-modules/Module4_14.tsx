'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.14</div>
        <div className="lesson-title-main">
          <h1>Clash of Codes #3 | Trees and Hash Maps</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-gray-100 p-4 rounded my-4">
          <p className="font-semibold text-center">Clash of Codes</p>
          <p className="text-center">Session 3 — Guess the Output</p>
          <p className="text-center">Duration: 30s per question</p>
          <p className="text-center">Teams: 6–8 students each</p>
          <p className="text-center">Focus: Traversals, Recursion, Hash Maps</p>
        </div>
        <p>Hi there, welcome to the third Clash of Codes of this course.</p>
        <p>
          So far in this module, you've explored tree traversals such as Inorder, Preorder, Postorder, and Level Order, along with recursive thinking and traversal patterns. You have also learned about binary tree operations, the behavior of hash maps, and how to solve the Two-Sum problem using hash maps. Additionally, you examined how run-time order, recursion stack flow, and the arrangement of data structures influence the final results.
        </p>
        <p>
          In this Clash of Codes, you will apply all this knowledge, but this time under speed, pressure, and a bit of deception.
        </p>
      </section>

      <section className="content-section">
        <h3>Session Objective</h3>
        <p>
          You will trace code quickly, identify how traversal or recursion flows, and predict outputs accurately, even when small twists are hidden inside the snippet.
        </p>
      </section>

      <section className="content-section">
        <h3>Why this session?</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Programming Ability Indicator:</strong> Understanding code output is a strong indicator of real programming ability.</li>
          <li><strong>Interview Preparation:</strong> This session helps build confidence and mental speed for interview-style coding questions.</li>
          <li><strong>Technical Communication:</strong> Explaining code output concisely improves communication and technical clarity in professional settings.</li>
          <li><strong>Session Benefits:</strong> Reinforces key DSA concepts like recursion, tree traversals, and hash maps in a fun and interactive way.</li>
          <li><strong>Session Impact:</strong> Builds confidence and mental sharpness for tackling more advanced DSA topics like complex binary tree operations and hashing logic.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>What Is "Guess the Output"?</h3>
        <p>This is a PPT-driven team competition.</p>
        <p className="mt-4">You will see:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Small C++ code snippets</li>
          <li>Tree diagrams</li>
          <li>Hash Map behaviors</li>
          <li>Recursion sequences</li>
          <li>Slight tweaks in traversal order</li>
          <li>Tiny code changes that cause big output differences</li>
        </ul>
        <p className="mt-4">
          Your job is to guess the exact output within 30 seconds.
        </p>
      </section>

      <section className="content-section">
        <h3>But! there's a "twist"?</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Sometimes the code looks like one traversal but actually behaves like another.</li>
          <li>Sometimes two snippets differ by just one line — but the outputs become completely different.</li>
          <li>Sometimes the input tree looks like it will trick your intuition.</li>
          <li>Sometimes recursion expands in ways that are not immediately obvious.</li>
        </ul>
        <p className="mt-4 font-semibold">Welcome to the mind game.</p>
      </section>

      <section className="content-section">
        <h3>Team Setup</h3>
        <p>This activity works for any class size.</p>
        <p>Your mentor will form teams of 6–8 students each.</p>
        <p className="mt-4">Depending on the total strength:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>3 teams (if class ≤ 20)</li>
          <li>4 teams (if class 20–35)</li>
          <li>5 teams (if class &gt; 35)</li>
        </ul>
        <p className="mt-4">Each team acts as one unit for answering.</p>
        <p className="mt-4">Choose:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>A spokesperson</li>
          <li>A note-taker</li>
          <li>Signals for coordination</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>How Each Round Works</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li>The mentor shows a slide (tree diagram + C++ snippet).</li>
          <li>One team is called (round-robin order).</li>
          <li>The team gets 30 seconds to answer:
            <ul className="list-disc ml-6 mt-2">
              <li>The final output</li>
              <li>One-line reasoning</li>
            </ul>
          </li>
          <li>If correct → team earns points.</li>
          <li>If wrong → question becomes open for steal.
            <ul className="list-disc ml-6 mt-2">
              <li>Any team may raise their hand.</li>
              <li>First team gets one chance.</li>
            </ul>
          </li>
        </ol>
        <p className="mt-4">No coding. No notes. Only reasoning.</p>
      </section>

      <section className="content-section">
        <h3>Waves of Difficulty</h3>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FClash%20of%20Codes%2FSession%20wave%20info%20-%20COC.png"
            alt="Waves of Difficulty"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>Steal Rules</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>If the assigned team fails, any other team may raise a hand.</li>
          <li>Mentor chooses one team to answer.</li>
          <li>If correct → the team gets the same points as the primary team.</li>
          <li>If incorrect → no negative marking.</li>
        </ul>
        <p className="mt-4">
          Steals usually change the scoreboard dramatically — stay alert even on other teams' turns.
        </p>
      </section>

      <section className="content-section">
        <h3>Answer Requirements</h3>
        <p>Each answer must include:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>✔️ The output (exact sequence, correct spacing/order)</li>
          <li>✔️ One-line reasoning</li>
        </ul>
        <p className="mt-4">
          <strong>Example:</strong> "Output: 4 2 5 1 3 — because inorder = Left, Node, Right."
        </p>
        <p className="mt-4">
          No long explanations needed due to time pressure.
        </p>
      </section>

      <section className="content-section">
        <h3>Scoring Summary</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Wave</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Points</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Steal Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Easy</td>
                <td className="border border-gray-300 px-4 py-2">10</td>
                <td className="border border-gray-300 px-4 py-2">10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Medium</td>
                <td className="border border-gray-300 px-4 py-2">15</td>
                <td className="border border-gray-300 px-4 py-2">15</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Hard</td>
                <td className="border border-gray-300 px-4 py-2">20</td>
                <td className="border border-gray-300 px-4 py-2">20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Bonus</td>
                <td className="border border-gray-300 px-4 py-2">10</td>
                <td className="border border-gray-300 px-4 py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            Scores are only for the in-class leaderboard and do NOT affect your LMS grades.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Skills You Will Strengthen</h3>
        <p>By the end of this session, you'll be sharper at:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Tracing tree traversal flows mentally</li>
          <li>Predicting recursion output correctly</li>
          <li>Recognizing how line-order affects execution</li>
          <li>Identifying subtle logic traps quickly</li>
          <li>Working as a team under pressure</li>
          <li>Articulating concise technical reasoning</li>
        </ul>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            This Clash of Codes marks the final activity of the Trees & Hash Maps module. You have now practiced tree traversals, binary tree manipulations, recursive reasoning, hash map operations, and edge cases, as well as output prediction and debugging logic.
          </p>
        </div>
        <p>
          In the next module, you will move into more advanced and applied topics, building on this strong foundation.
        </p>
        <p>
          Stay sharp; everything you learned today will be important going forward.
        </p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.14 Quiz: Trees and Hash Maps Review"
          questions={[
            {
              question: "Given a tree where inorder gives [4, 2, 5, 1, 3], which node is the root?",
              options: ["4", "2", "1", "5"],
              correctAnswer: 2,
              explanation: "In inorder traversal (Left → Root → Right), the root sits in the middle. For [4, 2, 5, 1, 3] the middle value is 1 (or whichever the original tree's root was, but in this standard example, 1 is the root)."
            },
            {
              question: "Which traversal of the tree below gives: 1, 2, 3, 4, 5, 6?\n    1\n   / \\\n  2   3\n / \\ / \\\n4  5 6  (missing)",
              options: ["Inorder", "Preorder", "Postorder", "Level Order"],
              correctAnswer: 3,
              explanation: "Level Order (BFS) visits nodes level by level from left to right: 1, then 2 and 3, then 4, 5, 6 — giving 1 2 3 4 5 6."
            },
            {
              question: "A HashMap has keys [1, 11, 21] with table size 10. What bucket do all three map to (using key % 10)?",
              options: ["0", "1", "2", "3"],
              correctAnswer: 1,
              explanation: "1 % 10 = 1, 11 % 10 = 1, 21 % 10 = 1. All three keys hash to bucket index 1, causing a collision that is resolved via chaining."
            },
            {
              question: "In the Two Sum problem with nums = [3, 2, 4] and target = 6, what are the correct indices?",
              options: ["[0, 1]", "[0, 2]", "[1, 2]", "[1, 1]"],
              correctAnswer: 2,
              explanation: "nums[1] + nums[2] = 2 + 4 = 6. So the answer is [1, 2]."
            },
            {
              question: "After inserting [5, 3, 7, 1] into a BST in that order, what does inorder traversal produce?",
              options: ["5 3 7 1", "1 3 5 7", "7 5 3 1", "5 7 3 1"],
              correctAnswer: 1,
              explanation: "BST inorder traversal always produces sorted (ascending) output regardless of insertion order: 1, 3, 5, 7."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={14}
        />
      </section>
    </div>
  );
};

export default Module4_14;
