'use client';
import React from 'react';

const Module1_15: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.15</div>
        <div className="lesson-title-main">
          <h1>Assignment | Sieve of Eratosthenes</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          <strong>Welcome to your first pair programming session!</strong>
        </p>
        
        <p className="mb-4">
          In the previous session, you revisited arrays and strings, exploring how data can be stored, accessed, and manipulated efficiently. Now, it's time to put that understanding into action. In this assignment, we'll use arrays to implement one of the most elegant algorithms in number theory, the Sieve of Eratosthenes.
        </p>

        <p className="mb-4">
          This will help you see how simple array operations can power efficient solutions to complex mathematical problems like finding prime numbers.
        </p>

        <p className="mb-4">
          You'll explore one of the most efficient algorithms to find all prime numbers less than or equal to a given number n, the legendary Sieve of Eratosthenes!
        </p>

        <p className="mb-6">
          This technique isn't just about identifying primes, it's a brilliant example of preprocessing and optimization in algorithm design. Many competitive programmers, data scientists, and backend developers rely on this trick when working with prime-related problems at scale.
        </p>
        <img src="https://kq-storage.kalvium.community/seiveof.png" alt="" />

        <h3 className="text-2xl font-semibold mb-4">What You'll Do</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>You'll implement the Sieve of Eratosthenes from scratch.</li>
          <li>Learn how it systematically eliminates non-prime numbers by marking multiples of each number starting from 2.</li>
          <li>Understand why it's more efficient than checking each number individually.</li>
          <li>Grasp the core idea of how space-time tradeoff works in real-world algorithms.</li>
        </ul>

        <p className="mb-4">
          Don't worry if this sounds tricky! This assignment includes a live code-along session with your technical mentor, who will walk you through it step-by-step. Just bring your laptop, a clear mind, and some caffeine if needed.
        </p>

        <p className="mb-6">
          [Optional] You can watch this video to understand the concept even better.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/g5Fuxn_AvSk" title="L6. Sieve of Eratosthenes | Maths Playlist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <p className="mb-6 italic text-gray-600">
          Efficient algorithms can be oddly satisfying — like watching this gif on loop.
        </p>

        
      </section>
    </div>
  );
};

export default Module1_15;
