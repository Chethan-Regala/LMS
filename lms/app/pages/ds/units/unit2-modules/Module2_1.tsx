'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module2_1: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Recursion</h1>
        </div>
      </div>
      <section className="content-section">
        <p className="mb-4">
          Hey there, great to see you back! You've made amazing progress so far, you've explored the core ideas of Data Structures and Algorithms, built a strong mathematical foundation, and understood how to evaluate your code through time and space complexity. You even revisited arrays and strings, and wrapped up with the Sieve of Eratosthenes, a clever algorithm that shows the real power of logic and efficiency working together.
        </p>

        <p className="mb-4">
          Now that you've mastered how to think logically and analyze code performance, it's time to shift gears, from just following steps to creating solutions that almost "think" for themselves.
        </p>

        <p className="mb-6">
          That's where recursion comes in. Many real-world problems can be simplified by breaking them into smaller, similar subproblems, and recursion helps us do exactly that. Whether it's navigating through data structures like trees and graphs or solving mathematical puzzles, recursion becomes your secret weapon for elegant, modular, and powerful solutions.
        </p>

        <p className="mb-6">
          So, let's dive in and learn how to make functions call themselves, and in the process, learn to think a bit more like a computer does!
        </p>

        <div className="mb-6">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Recursion animation" />
          <p className="text-sm text-gray-600 mt-2">Credits: Giphy</p>
        </div>

        <p className="mb-4 font-semibold">Imagine the following scenarios:</p>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li>
            Imagine you're in the final level of a treasure hunt, facing a challenge with a series of nested boxes—each box contains another box inside. How would you approach solving the problem of opening these nested boxes to uncover the hidden treasure?
          </li>
          <li>
            Have you ever looked at a series of mirrors facing each other, reflecting the same image infinitely? Did you notice how the same scene repeats within itself, creating an endless chain?
          </li>
          <li>
            This fascinating phenomenon is similar to the concept of recursion in computer science. But how does this infinite-like repetition help solve real-world problems efficiently?
          </li>
        </ul>

        <p className="mb-4 font-semibold">In this lesson, we'll explore:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>What is Recursion?</li>
          <li>Types of recursion</li>
          <li>Time complexity</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Recursion</h3>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP+-+Revision/PSUP-recursion-1.webp" alt="" />
        <p className="mb-6">
          Recursion is a programming technique where a function calls itself to solve smaller instances of a problem. It's like breaking down a big task into smaller, manageable tasks that follow the same logic.
        </p>

        <p className="mb-4">
          Now, let's explore the example below to understand how the recursive and Iterative approach works through the example given below!
        </p>

        <p className="mb-4">
          Let's say you want to find a key in a box — what are the approaches you could take to solve this problem?
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP+-+Revision/PSUP-revision-recursion-2.webp" alt="" />
          <p className="text-sm text-gray-600 mt-2">Image Credits: Grokkings Algorithms Book</p>
        </div>

        <p className="mb-6">
          Let's explore recursion with step-by-step breakdowns. Ready to start?
        </p>

        <p className="mb-4">
          Wondering what recursion is. Take a look at the video given below.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IJDJ0kBx2LM?start=67&end=1321" title="Introduction to Recursion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm text-gray-600 mt-2">Note: This video is set to automatically start at 1 minute and 7 seconds and end at 22 minutes and 1 second.</p>
        </div>

        <p className="mb-6">
          Recursion can take different forms depending on how and where the recursive function calls itself. Understanding these types helps in choosing the right approach for solving a problem efficiently.
        </p>
        <br />

        <h3 className="text-2xl font-semibold mb-4">Types of Recursion</h3>
        <p className="mb-4">
          Recursion is an essential concept that occurs when a function calls itself to solve smaller instances of a problem. Depending on how functions interact during these calls, recursion can be categorized into Direct Recursion and Indirect Recursion. Let's explore each type, their subtypes, and examples.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Calculating time complexity for recursive functions</h2>
        <p className="mb-4">
          Understanding the efficiency of recursive functions is crucial for writing performant code. A key aspect of this is determining the time complexity, which tells us how the runtime of the function scales with the input size. Let's explore how to analyze the time complexity of recursive functions.
        </p>

        <p className="mb-4">
          Take a look at the video given below to understand this.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ncpTxqK35PI?end=557" title="Time Complexity of Recursive Functions" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm text-gray-600 mt-2">Note: This video is set to automatically end at 9 minutes and 17 seconds.</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">How to Check if a Problem is Solvable Using Recursion?</h2>
        <p className="mb-4">
          Imagine you're solving a jigsaw puzzle. Would you start by completing one piece at a time or dump the whole box onto the table and hope it assembles itself? Solving a problem with recursion is like tackling that puzzle piece by piece. Here's how you can decide if recursion is the right tool for the job:
        </p>

        <div className="mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <span className="transform transition-transform duration-300" style={{ display: 'inline-block', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              ▶
            </span>
            Click to expand the checklist
          </button>

          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: isExpanded ? '1500px' : '0',
              opacity: isExpanded ? 1 : 0
            }}
          >
            <div className="space-y-6 mt-4">
              <div>
                <p className="font-semibold mb-2">Can the problem be divided into smaller subproblems?</p>
                <p className="mb-2">Ask yourself: If I solve a smaller version of this, will it help solve the whole thing?</p>
                <p className="mb-2">Example: Calculating the factorial of a number.</p>
                <p className="mb-2">Factorial of n is just n * factorial(n-1). See how it breaks down naturally? Think about the Fibonacci sequence. Each term depends on the sum of the two before it. That's a perfect candidate for recursion!</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Is there a base case?</p>
                <p className="mb-2">How will I know I'm done?</p>
                <p className="mb-2">Base cases are essential in recursion, acting as stopping conditions to prevent infinite loops. They define the simplest scenarios, providing direct solutions that the recursion can unwind from.</p>
                <p className="mb-2">Example: In the Tower of Hanoi, when only one disk remains, no more recursion is needed. Identify the base case in your favorite recursive example — it's the moment the problem becomes trivially solvable!</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Do subproblems follow the same logic as the main problem?</p>
                <p className="mb-2">Can I apply the same recipe to smaller parts? If yes, recursion might be a great fit.</p>
                <p className="mb-2">Example: Sorting with QuickSort. Pick a pivot, divide into smaller arrays, and sort each recursively. Visualize sorting a smaller stack of cards. Does the same logic apply?</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-4">
          Now Let us Look at the mind map of this lesson so that you get a visual understanding.
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/Problem%20solving%20using%20Programming%2FIntro_to_rec.svg" alt="Recursion mind map" />
        </div>

        <h2 className="text-2xl font-semibold mb-4">So, What's Next?</h2>
        <p className="mb-4">
          You've just unlocked the door to recursion — you know what it is, how it mirrors real-life patterns like nested boxes or infinite mirrors, and when it makes sense to use it. But here's the thing: recursion isn't one-size-fits-all.
        </p>

        <p className="mb-4">
          In our next lesson, <strong>Deep Dive into Recursion</strong>, we'll peel back the layers and explore recursion in much greater detail.
        </p>

        <p className="mb-4 font-semibold">We'll tackle questions like:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>What's the difference between direct recursion and indirect recursion, and when should you use each?</li>
          <li>How does tail recursion help optimize memory usage, and why do some compilers love it while others ignore it?</li>
          <li>What is non-tail recursion, and why does it sometimes eat up extra space on the call stack?</li>
          <li>How do these different forms of recursion affect time and space complexity in real-world algorithms like sorting and tree traversal?</li>
        </ul>

        <p className="mb-4">
          Think of this as going from learning the rules of chess to strategizing like a grandmaster. You know what recursion is — now it's time to understand how it really plays out in programs, what its strengths are, and where it can trip you up.
        </p>

        <p className="mb-6">
          You've built the foundation. Next, let's dive deeper and master the different types of recursion — the essential toolkit for everything from sorting algorithms to graph traversals to backtracking problems.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Bonus Content</h2>
        <p className="mb-4">
          This section is optional and learners who want to explore further or need alternate resources to prepare can utilize the following references.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://medium.com/@daniel.oliver.king/getting-started-with-recursion-f89f57c5b60e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Medium link - Getting started with recursion
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=WbWYqtdKNww" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              MIT Lecture on Introduction to recursion
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=IJDJ0kBx2LM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Solve Problems using Recursion - Youtube
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dxyYP3BSdcQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Time and space complexity analysis of recursive programs - using factorial | Youtube
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <p className="mb-4">
          For additional practice, you can visit the following leetcode links given below. This part is optional and you can continue to the next lesson without solving these problems.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://leetcode.com/problems/fibonacci-number/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Problem-1
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Problem-2
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/powx-n/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Problem-3
            </a>
          </li>
        </ul>

        <p className="mb-4 font-semibold">
          You will be using recursion to solve sorting algorithms in the upcoming assignments. Buckle up!!
        </p>

        <Quiz
          title="Module 2.1 Quiz: Recursion Foundations"
          questions={[
            {
              question: "What is the defining characteristic of a recursive function?",
              options: ["It uses a 'for' loop", "It calls itself", "It always returns a string", "It runs in O(1) time"],
              correctAnswer: 1,
              explanation: "Recursion happens when a function calls itself to solve smaller instances of the same problem."
            },
            {
              question: "In the nested boxes analogy, what represents the hidden treasure?",
              options: ["The function call", "The base case (the smallest box containing the key)", "The loop variable", "The stack overflow"],
              correctAnswer: 1,
              explanation: "The base case is the condition where the problem becomes trivially solvable and the recursion stops."
            },
            {
              question: "What happens if a recursive function lacks a base case?",
              options: ["It runs faster", "It creates an infinite loop/Stack Overflow", "It returns 'undefined'", "It automatically converts to a loop"],
              correctAnswer: 1,
              explanation: "Without a stopping condition (base case), the function will keep calling itself until the computer runs out of memory (Stack Overflow)."
            },
            {
              question: "According to the lesson, the Factorial of 'n' can be defined as...",
              options: ["n + (n-1)", "n * factorial(n-1)", "n^2", "factorial(n) / n"],
              correctAnswer: 1,
              explanation: "Factorial is a natural recursive problem where n! = n * (n-1)!"
            },
            {
              question: "Which of these is a real-world application of stacks/recursion mentioned in the bonus sections?",
              options: ["Cooking a recipe", "Web browser 'Back' button history", "Driving a car", "Watching television"],
              correctAnswer: 1,
              explanation: "Browser history and 'Undo' operations are classic examples of LIFO structures managed through stacks, often implemented recursively."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={1}
        />
      </section>
    </div>
  );
};


export default Module2_1;
