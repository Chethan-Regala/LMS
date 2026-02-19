'use client';
import React from 'react';

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
        <p>
          In our previous lessons, we explored foundational mathematics like divisors, GCD, and concepts such as counting digits and identifying primes. These helped us build a solid base for solving problems in programming. But solving a problem is just the first step—how efficiently we solve it is equally important.
        </p>
        <p>Have you ever wondered why some apps load in a blink while others take ages?</p>
        <p>
          This difference often comes down to how efficiently their algorithms are designed. Think about looking for a friend's name in a contact list. If the list is sorted, you can find the name quickly (like skipping to the right page in a dictionary). But if it's unsorted, you might have to check every entry one by one!
        </p>
        <p>
          That's where time and space complexity come in. They help us measure and compare how fast or memory-efficient different approaches are, guiding us to write optimized code.
        </p>
        <p>In this lesson, we'll uncover:</p>
        <ul>
          <li>What time and space complexity means.</li>
          <li>Why they matter in programming.</li>
          <li>How to analyze them with simple examples and real-world analogies.</li>
        </ul>
        <p>Ready to make your code faster and smarter? Let's dive in</p>
      </section>

      <section className="content-section">
        <h3>Time Complexity</h3>
        <p>
          Time complexity describes how the running time of an algorithm changes based on the length of the input. It is not a direct measurement of the actual time it takes to execute an algorithm, as external factors such as programming language, operating system, and processing power can affect execution time.
        </p>
        <p>Key points about time complexity:</p>
        <ul>
          <li>It is a type of computational complexity that focuses on the time required to execute an algorithm.</li>
          <li>It depends on the size of the input data being processed.</li>
          <li>It helps define an algorithm's efficiency and evaluate its performance.</li>
          <li>It represents the time taken for each statement to execute as the input size changes.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Space Complexity</h3>
        <p>
          Space complexity refers to the amount of memory an algorithm requires to execute. It accounts for both the memory needed to store input data and any auxiliary memory used during the algorithm's operation.
        </p>
        <p>Key points about space complexity:</p>
        <ul>
          <li>It measures the memory used by a program while executing.</li>
          <li>Space complexity includes both input space and auxiliary space.</li>
          <li><strong>Input space:</strong> Memory needed to store the input data.</li>
          <li><strong>Auxiliary space:</strong> Additional memory required for temporary variables and operations.</li>
          <img src="https://kq-storage.kalvium.community/tcsc.png" alt="" />
          <li>This metric is crucial for understanding an algorithm's memory efficiency and ensuring it runs within the available system resources.</li>
        </ul>
      </section>

      <section className="content-section">
        <p>Watch this video given below to understand what is time and space complexity and various notations used to represent them.</p>
        <div className="flex justify-center my-4">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/FPu9Uld7W-E" title="Time and Space Complexity - Strivers A2Z DSA Course" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <p>This lesson introduced the basics of time complexity and space complexity, key concepts for evaluating and optimizing algorithms:</p>
        <ul>
          <li><strong>Time Complexity:</strong> Measures how the runtime of an algorithm grows with input size, helping assess its efficiency.</li>
          <li><strong>Space Complexity:</strong> Evaluates the memory required for an algorithm, including input and temporary storage.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_6;