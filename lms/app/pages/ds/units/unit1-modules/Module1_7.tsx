'use client';
import React from 'react';

const Module1_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.7</div>
        <div className="lesson-title-main">
          <h1>Deep Dive into Complexity Analysis</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi there,</p>
        <img src="https://media.tenor.com/4EhUju6UJtEAAAAi/grrr-rawr.gif" alt="" />
        <p>
          In the previous lesson, we explored Big O notation and its significance in understanding the time complexity of algorithms. We touched upon how Big O helps in exressing the upper bound of the number of operations an algorithm performs, enabling us to analyze how the performance of an algorithm scales with increasing input sizes.
        </p>
        <p>What if I told you that there are algorithms with the same Big O time complexity, but one is much faster than the other? How could that be possible?</p>
        <p>
          This question leads us to the concept of constant factors and lower-order terms that affect performance, even when two algorithms share the same Big O notation. In complexity analysis, it's not just about understanding how algorithms behave as input grows, but also how efficiently they handle practical, real-world data.
        </p>
        <p>We'll begin with the essential tools for analyzing algorithms: Asymptotic Notations, such as Big O, Big Omega, and Big Theta.</p>
      </section>

      <section className="content-section">
        <h3>What Are Asymptotic Notations?</h3>
        <p>
          Asymptotic notations are a set of mathematical tools used to describe the behavior of algorithms in terms of their performance as the input size grows towards infinity. They help us express the scalability of an algorithm and give us a way to compare algorithms independent of machine-dependent factors like hardware or compiler optimization.
        </p>
        <p>The three main asymptotic notations are:</p>
      </section>

      <section className="content-section">
        <h3>Big O Notation (O):</h3>
        <p>
          Represents the upper bound of an algorithm's running time. It gives the worst-case scenario, ensuring that the algorithm will never take more time than the specified limit.
        </p>
        <p>
          In the image below, the function g(n) represents an upper bound for f(n), meaning g(n) grows faster or at the same rate as f(n) for large input sizes.
        </p>
        <img src="https://kq-storage.kalvium.community/bigo.png" alt="" />
        <p>
          Example: If an algorithm has a time complexity of O(n^2), it means that the algorithm's execution time will grow at a rate proportional to the square of the input size in the worst case.
        </p>
        <p>Watch this video to understand how the Big O Notation works.</p>
        <div className="flex justify-center my-4">
         <iframe width="407" height="360" src="https://www.youtube.com/embed/XMUe3zFhM5c" title="Learn Big O notation in 6 minutes 📈" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>Now you can look at some code examples to clearly understand Big O Notation.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/CB8JPjg_3cM" title="Big O Notation - Code Examples" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>

      <section className="content-section">
        <h3>Big Omega Notation (Ω):</h3>
        <p>
          Represents the lower bound of an algorithm's running time. It gives the best-case scenario, ensuring that the algorithm will take at least the specified amount of time for any input.
        </p>
        <p>
          In the image below, g(n) is a lower bound for f(n). This means that after a certain value of n, the function f(n) will never fall below g(n).
        </p>
        <img src="https://kq-storage.kalvium.community/bigomega.png" alt="" />
        <p>
          Example: If an algorithm has a time complexity of Ω(n), it means that, in the best case, the algorithm will take at least linear time.
        </p>
      </section>

      <section className="content-section">
        <h3>Big Theta Notation (Θ):</h3>
        <p>
          Represents the tight bound of an algorithm's running time. It gives an exact characterization of the algorithm's performance, stating that the running time will grow at the same rate as the input size, both in the worst and best cases.
        </p>
        <p>
          In the image below, g(n) tightly bounds f(n) from above and below, meaning f(n) grows at the same rate as g(n) for large values of n.
        </p>
        <img src="https://kq-storage.kalvium.community/bigtheta.png" alt="" />
        <p>
          Example: If an algorithm has a time complexity of Θ(nlogn), it means that the algorithm will take time proportional to nlognn for all input sizes, both in the worst and best cases.
        </p>
      </section>

      <section className="content-section">
        <h3>Logarithmic Time complexity</h3>
        <p>Let's spend some time to explore how to calculate logarithmic time complexities.</p>
        <div className="flex justify-center my-4">
         <iframe width="407" height="360" src="https://www.youtube.com/embed/M4ubFru2O80" title="Deeply Understanding Logarithms In Time Complexities &amp; Their Role In Computer Science" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <p>Now that you have understood different complexity analysis</p>
        <p>Solve this</p>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <p>1. Time Complexity Beyond Big O:</p>
        <ul>
          <li><strong>Big O Notation:</strong> Describes the upper bound of an algorithm's runtime.</li>
          <li><strong>Big Omega (Ω):</strong> Represents the best-case scenario or lower bound.</li>
          <li><strong>Big Theta (Θ):</strong> Provides a precise average-case measure when an algorithm's upper and lower bounds coincide.</li>
        </ul>
        <p>2. Types of Big O Notations:</p>
        <ul>
          <li><strong>O(1):</strong> Constant time, independent of input size.</li>
          <li><strong>O(log n):</strong> Logarithmic, reducing input size exponentially in each step.</li>
          <li><strong>O(n):</strong> Linear, processing each input element once.</li>
          <li><strong>O(n²):</strong> Quadratic, comparing every pair of input elements.</li>
          <li><strong>O(2^n):</strong> Exponential, doubling operations with each additional input.</li>
        </ul>
        <p>
          Now that you've explored how to evaluate an algorithm's efficiency in Deep Dive into Complexity Analysis, it's time to see those principles in action. In the next lesson, Revisiting Arrays and Strings, we'll apply what you've learned about time and space complexity to real data structures.
        </p>
        <p>
          You'll analyze how arrays and strings store, access, and manipulate data, and how their internal behavior directly impacts an algorithm's performance.
        </p>
        <p>Here is a mind map on the key points covered in this lesson.</p>
        <img src="https://kq-storage.kalvium.community/deepdivetc.png" alt="" />
      </section>
    </div>
  );
};

export default Module1_7;
