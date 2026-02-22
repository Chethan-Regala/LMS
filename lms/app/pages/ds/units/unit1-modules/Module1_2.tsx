'use client';
import React, { useState, useEffect } from 'react';
import Quiz from '../../components/Quiz';

const MathAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const concepts = ['Count Digits', 'Reverse Numbers', 'Palindromes', 'Armstrong Numbers'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg my-6">
      <div className="flex justify-center items-center gap-4">
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${active === 0 ? 'bg-blue-600 scale-110' : 'bg-blue-400 opacity-50'
          }`}>
          Count
        </div>
        <div className="text-3xl">→</div>
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${active === 1 ? 'bg-green-600 scale-110' : 'bg-green-400 opacity-50'
          }`}>
          Reverse
        </div>
        <div className="text-3xl">→</div>
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${active === 2 ? 'bg-purple-600 scale-110' : 'bg-purple-400 opacity-50'
          }`}>
          Palindrome
        </div>
        <div className="text-3xl">→</div>
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${active === 3 ? 'bg-orange-600 scale-110' : 'bg-orange-400 opacity-50'
          }`}>
          Armstrong
        </div>
      </div>
      <p className="text-center mt-4 font-semibold text-gray-700">{concepts[active]}</p>
    </div>
  );
};

const AlgorithmAnimation: React.FC = () => {
  const [method, setMethod] = useState(0);
  const methods = [
    { name: 'Logarithms', blocks: [16, 8, 4, 2, 1], active: 2, color: 'blue' },
    { name: 'Summations', blocks: [1, 2, 3, 4, 5], active: 4, color: 'emerald' },
    { name: 'GCD', blocks: [12, 18, 6], active: 2, color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setMethod(m => (m + 1) % 3), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = methods[method];

  return (
    <div className={`border-4 bg-white p-6 rounded-lg my-6 transition-colors duration-500 ${method === 0 ? 'border-blue-500' : method === 1 ? 'border-emerald-500' : 'border-purple-500'
      }`}>
      <div className="text-center mb-4 font-bold text-lg uppercase tracking-wider">{current.name}</div>
      <div className="flex justify-center gap-2">
        {current.blocks.map((b, i) => (
          <div key={i} className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl font-bold text-white transition-all duration-500 ${i === current.active ? (method === 0 ? 'bg-blue-600 animate-pulse scale-110' : method === 1 ? 'bg-emerald-600 animate-pulse scale-110' : 'bg-purple-600 animate-pulse scale-110') : 'bg-gray-200 text-gray-400'
            }`}>
            {b}
          </div>
        ))}
      </div>
    </div>
  );
};

const Module1_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.2</div>
        <div className="lesson-title-main">
          <h1>Foundational Mathematics for DSA</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Core Workout for Algorithmic Thinking</h3>
        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
          <p className="text-center font-semibold text-orange-800">
            How do we build the mental framework for algorithmic problem-solving?
          </p>
        </div>
        <p>
          Welcome back! During our orientation, we discussed building a strong foundation for our DSA journey, much like a runner hitting the gym for core exercises before a marathon.
        </p>
        <p>Consider this lesson your first session in that gym. Your very first "core workout" for algorithmic thinking 💡</p>
        <p>The problems we're about to tackle—counting digits, reversing a number, and checking for palindromes—might seem like simple math puzzles. But they are much more than that. They are the perfect, bite-sized exercises for developing your algorithmic thinking muscle.</p>
        <div className="image-container flex justify-center my-6">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Thinking Process" className="rounded-xl shadow-lg h-64" />
        </div>
      </section>

      <section className="content-section">
        <h3>Why do we start here?</h3>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6 font-medium text-gray-700">
          <p>
            Because the logic you'll use is universal in programming. Breaking down problems, using basic tools creatively, and thinking in loops - these fundamental patterns are the exact same ones you will use later to traverse a complex Tree, search through a Graph, or manipulate a Linked List.
          </p>
        </div>
        <p>So, let's get our hands dirty, start with the basics, and build the mental framework that will support everything to come.</p>
      </section>

      <section className="content-section">
        <h3>Math in Everyday Life</h3>
        <p>
          Have you ever used math to solve a problem outside of class, like figuring out how many days are left until an event or calculating how much you can save if you buy something on sale? These everyday situations involve basic math, and guess what? Math is just as important in programming and data structures!
        </p>
        <p>You know what odd and even numbers are, and you understand the properties of prime numbers, right? These are all mathematical concepts that you use every day in programming, especially when working with algorithms and data structures.</p>
      </section>

      <section className="content-section">
        <h3>Core Concepts We'll Master</h3>
        <p>In this lesson we will dive into:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Count digits:</strong> Breaking numbers into individual components</li>
          <li><strong>Reverse numbers:</strong> Manipulating digit order</li>
          <li><strong>Identify palindromes:</strong> Pattern recognition</li>
          <li><strong>Understand Armstrong numbers:</strong> Mathematical properties</li>
        </ul>
        <MathAnimation />
      </section>

      <section className="content-section">
        <h3>Video Learning</h3>
        <p>Ready to dive deeper into these fascinating number tricks? Learn how to count digits, reverse numbers, identify palindromes, and understand Armstrong numbers all explained in an engaging and easy-to-follow way!</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/1xNbjMdbjug?start=115&end=1580"
              title="Number Concepts"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2 italic">Note: Video set to play from 1:55 to 26:20.</p>
        </div>

        <p>Curious about what makes a number prime and how to efficiently identify them? master this essential concept with practical insights!</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/1xNbjMdbjug?start=2390&end=2680"
              title="Prime Numbers"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2 italic">Note: Video set to play from 39:50 to 44:40.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Math Essentials for Algorithmic Thinking</h3>
        <p>Before diving deeper into algorithms, let's understand the math tools that make them efficient. Don't worry, we'll keep it simple and visual.</p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">1. Logarithms</h4>
            <p className="text-sm text-gray-600">The power of "Divide & Conquer". Halving the work at each step (Binary Search).</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-2">2. Series & Summations</h4>
            <p className="text-sm text-gray-600">Calculating the total work in loops (1 + 2 + ... + n = n(n+1)/2).</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-2">3. GCD</h4>
            <p className="text-sm text-gray-600">Greatest Common Divisor. Essential for optimization and cryptography.</p>
          </div>
        </div>

        <AlgorithmAnimation />
      </section>

      <section className="content-section">
        <h3>Summary Mind Map</h3>
        <p>Fantastic work! You've successfully completed your first set of exercises. Here is a mind map on the key points covered in this lesson.</p>
        <div className="image-container flex justify-center my-8">
          <img src="https://kq-storage.kalvium.community/dsamath1mp.png" alt="Math for DSA Mindmap" className="rounded-xl shadow-lg border border-gray-100" />
        </div>
      </section>

      <Quiz
        title="Module 1.2 Quiz: Math for DSA"
        questions={[
          {
            question: "When extracting digits from a number, what is the result of '1234 % 10'?",
            options: ["1", "2", "3", "4"],
            correctAnswer: 3,
            explanation: "The modulo operator (%) returns the remainder. 1234 divided by 10 has a remainder of 4, which is the last digit."
          },
          {
            question: "Which operation is used to 'remove' the last digit of an integer in languages like C++ or Java (using integer division)?",
            options: ["n / 10", "n % 10", "n - 10", "sqrt(n)"],
            correctAnswer: 0,
            explanation: "Integer division by 10 truncates the decimal, effectively removing the last digit (e.g., 123 / 10 = 12)."
          },
          {
            question: "What defines a Palindrome number?",
            options: ["A number with all unique digits", "A number that equals the sum of its digits", "A number that reads the same forward and backward", "A number divisible by only 1 and itself"],
            correctAnswer: 2,
            explanation: "Palindromes like 121 or 1331 remain identical when their digits are reversed."
          },
          {
            question: "If searching for a word in a 1000-page dictionary using Binary Search (Halving), approximately how many steps are needed?",
            options: ["500 steps", "100 steps", "10 steps", "1000 steps"],
            correctAnswer: 2,
            explanation: "log2(1000) is approximately 10. Each step halves the remaining pages, making it extremely efficient."
          },
          {
            question: "To check if a number N is prime, what is the most optimized upper limit for checking divisors?",
            options: ["N - 1", "N / 2", "Square root of N", "100"],
            correctAnswer: 2,
            explanation: "If a number has a factor larger than its square root, it must also have a corresponding factor smaller than its square root. Thus, checking up to sqrt(N) is sufficient."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={2}
      />
    </div>
  );
};

export default Module1_2;
