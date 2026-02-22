'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.11</div>
        <div className="lesson-title-main">
          <h1>Tower of Hanoi</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this lesson, we will unravel the mysteries of the Tower of Hanoi, a classic problem that is fundamental to understanding recursion and data structures.
        </p>

        <p className="mb-4">By the end of this lesson, you will:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Understand the Tower of Hanoi problem and its elegant recursive solution.</li>
          <li>Learn the step-by-step thought process for solving it.</li>
          <li>Recognize how Stacks can be used for an iterative solution.</li>
          <li>Analyze the time complexity and see how it's calculated.</li>
          <li>Identify real-world applications of this concept.</li>
        </ul>

        <p className="mb-6">
          Imagine you are a monk in an ancient temple, where you must move a stack of golden disks from one rod to another, following strict rules:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Only one disk can be moved at a time.</li>
          <li>A larger disk cannot be placed on a smaller disk.</li>
          <li>All disks must be moved from the source rod to the destination rod, possibly using a third, auxiliary rod.</li>
        </ul>

        <p className="mb-6">
          This legendary Tower of Hanoi puzzle is not just an ancient game—it's a cornerstone for learning recursion in computer science!
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg" alt="Tower of Hanoi" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-4">
          Watch this short video if you haven't heard of this game before.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YstLjLCGmgg" title="Tower of Hanoi Introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">The Setup</h3>
        <p className="mb-3">You have three rods:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Source (A):</strong> Holds all disks initially.</li>
          <li><strong>Auxiliary (B):</strong> Used for temporary holding.</li>
          <li><strong>Destination (C):</strong> Where all disks must be moved.</li>
        </ul>
        <p className="mb-4">You have 'n' disks of varying sizes, stacked from largest (bottom) to smallest (top).</p>
        <p className="mb-6"><strong>Goal:</strong> Move all 'n' disks from Rod A to Rod C, using Rod B as needed.</p>

        <h3 className="text-xl font-semibold mb-4">Thinking Recursively: The Core Insight</h3>
        <p className="mb-6">
          How do we solve a complex problem? By breaking it down into smaller, similar problems! This is the essence of recursion.
        </p>

        <p className="mb-6">
          Let's not think about moving 'n' disks right away. Let's start with a simpler goal.
        </p>

        <p className="mb-4 font-semibold">The Main Task: Move 'n' disks from Source (A) to Destination (C).</p>
        <p className="mb-6">
          To achieve this, we can define three steps. If we want to move the largest disk (disk 'n') from A to C, we first need to get all the smaller disks out of the way.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Ftower%20of%20hanoi%20solution%20steps.png" alt="Tower of Hanoi Steps" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          Notice something magical? Step 1 and Step 3 are the exact same problem, just with fewer disks and different rod assignments! This is a recursive relationship.
        </p>

        <h3 className="text-xl font-semibold mb-4">The Recursive Pseudocode</h3>
        <p className="mb-4">
          This logic can be translated into a simple, elegant algorithm.
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`function solve_hanoi(n, source, destination, auxiliary):
  // Base Case: If there is only one disk, move it directly.
  if n == 1:
    print("Move disk 1 from", source, "to", destination)
    return

  // Recursive Step 1: Move n-1 disks from source to auxiliary.
  solve_hanoi(n-1, source, auxiliary, destination)

  // Step 2: Move the nth disk from source to destination.
  print("Move disk", n, "from", source, "to", destination)

  // Recursive Step 3: Move n-1 disks from auxiliary to destination.
  solve_hanoi(n-1, auxiliary, destination, source)`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Example: Solving for 3 Disks</h3>
        <p className="mb-4">
          Let's trace the pseudocode with 3 disks, moving from A to C.
        </p>

        <p className="mb-3 font-semibold">solve_hanoi(3, A, C, B)</p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Calls solve_hanoi(2, A, B, C) to move the top 2 disks to B.
            <ul className="list-disc ml-6 mt-1">
              <li>This calls solve_hanoi(1, A, C, B).</li>
              <li>Move Disk 1 from A to C. (Base case)</li>
              <li>Move Disk 2 from A to B.</li>
              <li>This calls solve_hanoi(1, C, B, A).</li>
              <li>Move Disk 1 from C to B. (Base case)</li>
            </ul>
          </li>
          <li>Now the top 2 disks are on rod B. Time for the main function's next step.</li>
          <li>Move Disk 3 from A to C.</li>
          <li>Finally, it calls solve_hanoi(2, B, C, A) to move the 2 disks from B onto C.
            <ul className="list-disc ml-6 mt-1">
              <li>This calls solve_hanoi(1, B, A, C).</li>
              <li>Move Disk 1 from B to A. (Base case)</li>
              <li>Move Disk 2 from B to C.</li>
              <li>This calls solve_hanoi(1, A, C, B).</li>
              <li>Move Disk 1 from A to C. (Base case)</li>
            </ul>
          </li>
        </ol>

        <p className="mb-6 font-semibold">Total Moves: 7.</p>

        <p className="mb-4">
          Now is a great time to test this yourself! Try solving the 3-disk problem in the game below and see if your moves match the ones listed above.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.mathsisfun.com/games/towerofhanoi.html" title="Tower of Hanoi Game" frameBorder="0" className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">The Iterative Approach using Stacks</h3>
        <p className="mb-6">
          Recursion is elegant, but it uses the computer's internal "function call stack." What if we wanted to manage the process ourselves, without recursion? We can use an explicit Stack data structure to simulate the rods.
        </p>

        <p className="mb-6">
          This approach feels more like a direct simulation of the game. The core idea is to make the only legal move possible at each step.
        </p>

        <p className="mb-3 font-semibold">The Iterative Approach</p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Calculate the total number of moves required: total_moves = 2ⁿ - 1.</li>
          <li>If 'n' is even, swap the destination and auxiliary rods.</li>
          <li>Create three stacks: source, auxiliary, destination, and push the initial disks onto the source stack (from n down to 1).</li>
          <li>Loop from 1 to total_moves:
            <ul className="list-disc ml-6 mt-1">
              <li>If the move number is odd (1, 3, 5...): Make the only legal move involving the source and destination rods.</li>
              <li>If the move number is even (2, 4, 6...): Make the only legal move involving the source and auxiliary rods.</li>
            </ul>
          </li>
        </ol>

        <p className="mb-6">
          Note: A "legal move" between two rods means taking the top disk from one and placing it on the other, but only if the receiving rod is empty or its top disk is larger.
        </p>

        <p className="mb-4">
          This is just one of several iterative algorithms, but it demonstrates how stacks can be used to track the state of the rods and solve the problem step-by-step.
        </p>

        <p className="mb-4">
          Watch this video to see a visualization of how to solve the problem iteratively.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/q6RicK1FCUs" title="Tower of Hanoi Iterative" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Time Complexity and Efficiency</h3>
        <p className="mb-6">
          Where does the formula (2ⁿ - 1) come from? Let's look at our recursive function.
        </p>

        <p className="mb-3">Let T(n) be the number of moves for 'n' disks.</p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>To move 'n' disks, we must first move 'n-1' disks: T(n-1)</li>
          <li>Then we move the largest disk: 1</li>
          <li>Finally, we move the 'n-1' disks again: T(n-1)</li>
        </ul>

        <p className="mb-4">So, the recurrence relation is: <strong>T(n) = 2 * T(n-1) + 1</strong></p>
        <p className="mb-4">And our base case is <strong>T(1) = 1</strong>.</p>

        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>{`T(2) = 2 * T(1) + 1 = 2*1 + 1 = 3
T(3) = 2 * T(2) + 1 = 2*3 + 1 = 7
T(4) = 2 * T(3) + 1 = 2*7 + 1 = 15`}</code>
        </pre>

        <p className="mb-6">
          This pattern always resolves to 2ⁿ - 1. This is an exponential time complexity, O(2ⁿ), meaning the number of moves grows very rapidly as 'n' increases.
        </p>

        <h3 className="text-xl font-semibold mb-4">Real-World Applications</h3>
        <p className="mb-4">
          While you may not be moving golden disks, the principles here are widely applicable.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Understanding Recursion:</strong> This is the textbook example for teaching recursive thinking.</li>
          <li><strong>Data Backup Rotations:</strong> The logic for cycling through backup media (like tapes or hard drives) can follow a similar pattern, ensuring data is moved efficiently.</li>
          <li><strong>Problem-Solving Strategy:</strong> It's a perfect illustration of the "divide and conquer" strategy used in many efficient algorithms.</li>
        </ul>

        <p className="mb-6">
          You have now explored the recursive and iterative logic for solving the Tower of Hanoi. The next step is to put this knowledge into practice.
        </p>

        <p className="mb-6">
          For your upcoming assignment, you will be required to implement a solution to this problem. Refer back to the pseudocode and the step-by-step examples in this lesson. They will be your guide to building a functional and efficient program. Good luck!
        </p>

        <Quiz
          title="Module 3.11 Quiz: Tower of Hanoi"
          questions={[
            {
              question: "What is the minimum number of moves required to move 'n' disks from the source to the destination rod?",
              options: ["n^2", "2n + 1", "2^n - 1", "n!"],
              correctAnswer: 2,
              explanation: "The recurrence T(n) = 2T(n-1) + 1 resolves to the exponential formula 2^n - 1."
            },
            {
              question: "Which of the following is an absolute rule in the Tower of Hanoi puzzle?",
              options: ["A larger disk can never be placed on a smaller disk", "You must use all three rods for every move", "Only the bottom disk can be moved first", "Disks must be moved in pairs"],
              correctAnswer: 0,
              explanation: "The core constraint of the puzzle is that a disk can only be placed on an empty rod or on a disk that is strictly larger than itself."
            },
            {
              question: "What is the Time Complexity of the recursive Tower of Hanoi algorithm?",
              options: ["O(n)", "O(n^2)", "O(2^n)", "O(log n)"],
              correctAnswer: 2,
              explanation: "Since the number of moves doubles (plus one) for each additional disk, the complexity is exponential."
            },
            {
              question: "In the recursive step 'move n-1 disks from source to auxiliary', what is the role of the 'destination' rod?",
              options: ["It is not used at all", "It acts as the temporary auxiliary for that specific sub-problem", "It is the target of that sub-problem", "It is ignored until the very end"],
              correctAnswer: 1,
              explanation: "In recursion, the roles of rods (Source, Auxiliary, Destination) swap depending on which sub-set of disks is being moved."
            },
            {
              question: "How many moves are required to solve the puzzle with 4 disks?",
              options: ["7", "15", "16", "31"],
              correctAnswer: 1,
              explanation: "Using the formula 2^4 - 1, we get 16 - 1 = 15 moves."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={11}
        />
      </section>
    </div>
  );
};

export default Module3_11;
