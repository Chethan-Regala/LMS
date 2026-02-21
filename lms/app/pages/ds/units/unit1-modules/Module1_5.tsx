'use client';
import React from 'react';

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
        <p>In this task, you'll generate a list of numbers from 1 to n, but with a twist:</p>
        <ul>
          <li>Replace numbers divisible by 3 with "Fizz",</li>
          <li>Numbers divisible by 5 with "Buzz",</li>
          <li>And numbers divisible by both 3 and 5 with "FizzBuzz".</li>
        </ul>
        <p>
          It might sound like a beginner-level challenge, but don't underestimate it! FizzBuzz is a gateway problem. Solving it helps you think logically and structure your conditions cleanly.
        </p>
        <p>
          And the best part? You can practice this problem right here and also on LeetCode, strengthening both your logic and your LeetCode profile at the same time.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="funny fizzbuzz gif" />
        </div>
        <p>Let's quickly look at how we can approach it.</p>
      </section>

      <section className="content-section">
        <h3>Watch this before coding</h3>
        <p>Here's a short video that visually walks you through the logic and common mistakes developers make with FizzBuzz.</p>
        <div className="flex justify-center my-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QPZ0pIK_wsc" title="FizzBuzz Explanation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <details className="border border-gray-300 rounded p-4">
          <summary className="font-semibold cursor-pointer">Click to expand the step-by-step explanation</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4>Understand the Problem</h4>
              <p>You need to print all numbers from 1 to n, but with special words replacing some of them based on divisibility rules.</p>
            </div>
            
            <div>
              <h4>The Logic</h4>
              <ul>
                <li>If the number is divisible by both 3 and 5 → output "FizzBuzz".</li>
                <li>Else if divisible by only 3 → output "Fizz".</li>
                <li>Else if divisible by only 5 → output "Buzz".</li>
                <li>Else → output the number itself.</li>
              </ul>
            </div>

            <div>
              <h4>Implementation Steps</h4>
              <ul>
                <li>Create an empty vector (or list) of strings.</li>
                <li>Loop through numbers from 1 to n.</li>
                <li>Apply the above conditions.</li>
                <li>Store each result in the vector.</li>
              </ul>
            </div>

            <div>
              <p><strong>Time Complexity:</strong> O(n) You're looping once from 1 to n.</p>
              <p><strong>Space Complexity:</strong> O(n) The vector stores n string values.</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <p>Once you're done, try these related problems to build stronger logical flow:</p>
        
        <h4>LeetCode:</h4>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">412. Fizz Buzz</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">728. Self Dividing Numbers</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">258. Add Digits</a></li>
        </ul>

        <h4>HackerRank:</h4>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">FizzBuzz Challenge</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Conditional Statements Practice</a></li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional Reference Material</h3>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">GeeksforGeeks – FizzBuzz in C++</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Wster University - Understanding Modulo and Divisibility</a></li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Where It's Asked</h3>
        <p>FizzBuzz is famously used in interviews by companies like: Google, Amazon, Microsoft, Meta, and Atlassian</p>
        <p>It's often an ice-breaker or warm-up question to test your basic problem-solving, loop control, and clean coding habits.</p>
      </section>

      <section className="content-section">
        <p>Every coder starts somewhere, and this problem is a great place to begin! Take this challenge with confidence — write your logic clearly, test it, and see your program come to life. Each solved problem like this builds the foundation for tackling tougher coding interviews ahead.</p>
      </section>
    </div>
  );
};

export default Module1_5;