'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

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
        <h3>Moving Beyond Basics</h3>
        <p>
          In the previous lesson, we explored the concept of complexity. But how do we actually express it mathematically? This lead us to the world of <strong>Asymptotic Notations</strong>.
        </p>
        <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed italic">
            "What if I told you that there are algorithms with the same Big O time complexity, but one is much faster than the other? How could that be possible?"
          </p>
        </div>
        <p>
          We'll begin with the essential tools for analyzing algorithms: Asymptotic Notations, such as Big O, Big Omega, and Big Theta.
        </p>
      </section>

      <section className="content-section">
        <h3>The Three Pillars of Notation</h3>

        <div className="space-y-8 my-8">
          <div className="bg-white border-2 border-rose-100 rounded-3xl p-6 shadow-sm">
            <h4 className="font-black text-rose-600 text-xl mb-3">1. Big O Notation (O) - The Upper Bound</h4>
            <p className="text-gray-600 text-sm mb-4">Represents the <strong>worst-case scenario</strong>. It ensures the algorithm will never take more time than this limit.</p>
            <div className="image-container flex justify-center bg-gray-50 rounded-xl p-4">
              <img src="https://kq-storage.kalvium.community/bigo.png" alt="Big O" className="h-40" />
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 shadow-sm">
            <h4 className="font-black text-blue-600 text-xl mb-3">2. Big Omega Notation (Ω) - The Lower Bound</h4>
            <p className="text-gray-600 text-sm mb-4">Represents the <strong>best-case scenario</strong>. It guarantees the algorithm will take at least this much time.</p>
            <div className="image-container flex justify-center bg-gray-50 rounded-xl p-4">
              <img src="https://kq-storage.kalvium.community/bigomega.png" alt="Big Omega" className="h-40" />
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-sm">
            <h4 className="font-black text-emerald-600 text-xl mb-3">3. Big Theta Notation (Θ) - The Tight Bound</h4>
            <p className="text-gray-600 text-sm mb-4">Represents the <strong>exact bound</strong>. It describes a situation where the best and worst cases are functionally the same.</p>
            <div className="image-container flex justify-center bg-gray-50 rounded-xl p-4">
              <img src="https://kq-storage.kalvium.community/bigtheta.png" alt="Big Theta" className="h-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practical Learning</h3>
        <p>Watch these videos to understand how to apply Big O notation to actual code examples and how logarithmic complexity works.</p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="video-embed">
            <div className="video-container shadow-xl rounded-xl overflow-hidden">
              <iframe src="https://www.youtube.com/embed/XMUe3zFhM5c" title="Big O in 6 Min" allowFullScreen></iframe>
            </div>
          </div>
          <div className="video-embed">
            <div className="video-container shadow-xl rounded-xl overflow-hidden">
              <iframe src="https://www.youtube.com/embed/CB8JPjg_3cM" title="Code Examples" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Logarithmic Time Complexity</h3>
        <p>Understanding log(n) is crucial because it represents some of the most efficient algorithms in existence, like Binary Search.</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl rounded-2xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/M4ubFru2O80" title="Logarithms in DSA" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Summary Mind Map</h3>
        <div className="image-container flex justify-center my-8">
          <img src="https://kq-storage.kalvium.community/deepdivetc.png" alt="Complexity Mindmap" className="rounded-xl shadow-lg border border-gray-100" />
        </div>
      </section>

      <Quiz
        title="Module 1.7 Quiz: Asymptotic Notation"
        questions={[
          {
            question: "Which notation is used to describe the 'Worst Case' scenario of an algorithm?",
            options: ["Big Omega (Ω)", "Big Theta (Θ)", "Big O (O)", "Little o (o)"],
            correctAnswer: 2,
            explanation: "Big O notation provides the upper bound, ensuring that the algorithm will perform no worse than the specified limit."
          },
          {
            question: "What does Big Theta (Θ) notation represent?",
            options: ["Worst case only", "Best case only", "A tight bound where upper and lower bounds meet", "A random selection of time"],
            correctAnswer: 2,
            explanation: "Big Theta describes a precise rate of growth by bounding the function from both above and below."
          },
          {
            question: "If an algorithm's work is halved at every step, what is its likely Time Complexity?",
            options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
            correctAnswer: 2,
            explanation: "Repeatedly halving the input size (like in Binary Search) leads to logarithmic growth, O(log n)."
          },
          {
            question: "What is O(1) commonly called?",
            options: ["Linear Time", "Exponential Time", "Constant Time", "Infinite Time"],
            correctAnswer: 2,
            explanation: "O(1) means the execution time is constant and does not change regardless of the input size."
          },
          {
            question: "Which of these growth rates is the SLOWEST (Fastest for the computer)?",
            options: ["O(n^2)", "O(2^n)", "O(n)", "O(log n)"],
            correctAnswer: 3,
            explanation: "O(log n) grows much slower than O(n), O(n^2), or O(2^n), making it the most efficient of the options provided."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={7}
      />
    </div>
  );
};

export default Module1_7;
