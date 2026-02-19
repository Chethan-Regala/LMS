'use client';
import React, { useState, useEffect } from 'react';

const MathAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const concepts = ['Count Digits', 'Reverse Numbers', 'Palindromes', 'Armstrong Numbers'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="flex justify-center items-center gap-4">
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
          active === 0 ? 'bg-blue-600 scale-110' : 'bg-blue-400'
        }`}>
          Count
        </div>
        <div className="text-3xl">→</div>
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
          active === 1 ? 'bg-green-600 scale-110' : 'bg-green-400'
        }`}>
          Reverse
        </div>
        <div className="text-3xl">→</div>
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
          active === 2 ? 'bg-purple-600 scale-110' : 'bg-purple-400'
        }`}>
          Palindrome
        </div>
        <div className="text-3xl">→</div>
        <div className={`w-32 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
          active === 3 ? 'bg-orange-600 scale-110' : 'bg-orange-400'
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
    { name: 'Summations', blocks: [1, 2, 3, 4, 5], active: 4, color: 'green' },
    { name: 'GCD', blocks: [12, 18, 6], active: 2, color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setMethod(m => (m + 1) % 3), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = methods[method];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-6 rounded-lg`}>
      <div className="text-center mb-4 font-bold text-lg">{current.name}</div>
      <div className="flex justify-center gap-2">
        {current.blocks.map((b, i) => (
          <div key={i} className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            i === current.active ? `bg-${current.color}-600` : `bg-${current.color}-300`
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
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-orange-800">
            How do we build the mental framework for algorithmic problem-solving?
          </p>
        </div>
        <p>
          Welcome back! During our orientation, we discussed building a strong foundation for our DSA journey, much like a runner hitting the gym for core exercises before a marathon.
        </p>
        <p>Consider this lesson your first session in that gym. Your very first "core workout" for algorithmic thinking 💡</p>
        <p>The problems we're about to tackle counting digits, reversing a number, and checking for palindromes might seem like simple math puzzles. But they are much more than that. They are the perfect, bite-sized exercises for developing your algorithmic thinking muscle.</p>
        <div className="flex justify-center my-4">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Credits: Giphy" />
        </div>
      </section>

      <section className="content-section">
        <h3>Why do we start here?</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
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
        <p>You know what odd and even numbers are, and you understand the properties of prime numbers, right? These are all mathematical concepts that you use every day.</p>
        <p>These basic math concepts form the foundation for many tasks in programming, especially when working with algorithms and data structures.</p>
      </section>

      <section className="content-section">
        <h3>Core Concepts We'll Master</h3>
        <p>In this lesson we will dive into:</p>
        <ul>
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
        <p>Watch the video(Fixed time is already set) to see these concepts come to life with practical examples and clear explanations.</p>
        <div className="flex justify-center my-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1xNbjMdbjug?start=115&end=1580" title="Number Concepts" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="text-sm text-gray-600"><strong>Note:</strong> The above video is set to start at 1 minute and 55 seconds and end at 26 minutes and 20 seconds.</p>
        
        <p>Curious about what makes a number prime and how to efficiently identify them? Discover the secrets of prime numbers and their properties explained in a simple yet powerful way.</p>
        <p>Watch the video from 39:50 to 44:40 to master this essential concept with practical insights!</p>
        <div className="flex justify-center my-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1xNbjMdbjug?start=2390&end=2680" title="Prime Numbers" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="text-sm text-gray-600"><strong>Note:</strong> The above video is set to start at 39 minutes and 50 seconds and end at 44 minutes and 40 seconds.</p>
        <p>Based on the learning so far try to answer this</p>
      </section>

      <section className="content-section">
        <h3>Quick Summary</h3>
        <ul>
          <li><strong>Extraction of Digits:</strong> Breaking a number into its individual digits (e.g., 123 → 1, 2, 3).</li>
          <li><strong>Modulo (%):</strong> Finding the remainder when one number is divided by another (e.g., 7 % 3 = 1).</li>
          <li><strong>Count Digits:</strong> Counting the total number of digits in a number (e.g., 4567 has 4 digits).</li>
          <li><strong>Reverse Number:</strong> Reversing the order of digits (e.g., 123 → 321).</li>
          <li><strong>Palindrome Number:</strong> A number that reads the same backward and forward (e.g., 121 is a palindrome).</li>
          <li><strong>Armstrong Number:</strong> A number equal to the sum of its own digits raised to the power of the number of digits (e.g., 153 → 1³ + 5³ + 3³ = 153).</li>
          <li><strong>Check Prime:</strong> Verifying if a number is divisible only by 1 and itself (e.g., 11 is prime, 15 is not).</li>
        </ul>
        <p>Fantastic work! You've successfully completed your first set of exercises. You now know how to take a single number, break it apart, and analyze its properties. You've built the foundational logic for manipulating individual data points.</p>
        <p>Before we analyze algorithm efficiency, let's quickly learn the math that makes this possible.</p>
      </section>

      <section className="content-section">
        <h3>Math Essentials for Algorithmic Thinking</h3>
        <p>Before diving deeper into algorithms, let's understand the math tools that make them efficient. Don't worry, we'll keep it simple and visual.</p>
        
        <h4>1. Logarithms (Divide & Conquer)</h4>
        <p>Imagine you're searching for a word in a dictionary. Do you flip one page at a time? ❌ That would take forever.</p>
        <p>Instead, you open the book in the middle, decide left or right, and repeat. ✅</p>
        <p className="text-center">16 items ➡️ 8 items ➡️ 4 items ➡️ 2 items ➡️ 1 item ✅</p>
        <p>Each step halves the work. That's why Binary Search takes only log₂(n) steps instead of n.</p>

        <h4>2. Series & Summations (Counting Work)</h4>
        <p>When analyzing loops, we often add up all the work done.</p>
        <p>Example: Printing numbers from 1 to 5.</p>
        <p className="text-center">1 2 3 4 5</p>
        <p>Total work = 1 + 2 + 3 + 4 + 5 = 15.</p>
        <p>In general, 1 + 2 + 3 + … + n = n(n+1)/2.</p>
        <p>This formula helps us calculate loop costs quickly.</p>

        <h4>3. GCD (Greatest Common Divisor)</h4>
        <p>Suppose you have 12 apples and 18 oranges, and you want to pack equal baskets without leftovers.</p>
        <p>What's the largest basket size you can make?</p>
        <p>👉 6, since GCD(12, 18) = 6.</p>
        <p>12 🍎 Divisible by 6</p>
        <p>18 🍊 Divisible by 6</p>
        <p>The Euclidean Algorithm finds GCD very fast using repeated division.</p>
        <p>This concept is widely used in cryptography and modular arithmetic.</p>
        
        <AlgorithmAnimation />
      </section>

      <section className="content-section">
        <h3>So, what's next?</h3>
        <p>Now that we can handle one number, we're going to level up. In our next lesson, Foundational Mathematics for DSA - II, we'll move from analyzing a single number to understanding the relationships between numbers and performing calculations on a much larger scale, far more efficiently.</p>
        <p>We'll ask bigger questions:</p>
        <ul>
          <li>Instead of checking if one number is prime, how could we find all prime numbers up to a million without our program taking all day?</li>
          <li>How do you find the Greatest Common Divisor (GCD) of two large numbers without slow, brute-force checks?</li>
          <li>What happens when you need to calculate a massive power, like 2^1000, where the result is too big for even a long long?</li>
        </ul>
        <p>You've built the foundation. Now, let's build on top of it. Let's move on to the next lesson</p>
      </section>

      <section className="content-section">
        <h3>Additional reference</h3>
        <ul>
          <li><a href="#" className="text-blue-600 hover:underline">Maths for DSA: A Complete Guide</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Medium Article: Relevant Mathematical Concepts for DSA</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">W3resource: Math Essentials for DSA</a></li>
        </ul>
      </section>

      <img src="https://kq-storage.kalvium.community/dsamath1mp.png" alt="" />

      <section className="content-section">
        <p>Here is a mind map on the key points covered in this lesson.</p>
      </section>
    </div>
  );
};

export default Module1_2;