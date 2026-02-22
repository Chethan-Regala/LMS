'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to DSA & Orientation</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Welcome Aboard!</h3>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
          <p className="mb-4 text-gray-700 leading-relaxed italic">
            "Hello everyone, and welcome! We're thrilled to see you all here. Before we dive into what this course is all about, let's get on our feet and try something fun. Your mentor will be conducting a small, fun activity for you all. We'll meet after that."
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Hope you enjoyed the activity. Now, let's get into knowing more about the course.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>From "It Works" to "It's a Work of Art"</h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6 shadow-sm">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ever faced a coding problem that felt impossible, where your solution worked, but was just too slow? You keep trying, but it still times out, and you can't figure out how others solve it so quickly. That feeling is exactly why we're here.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In this course, you'll learn to think like the engineers at <strong>Google, Netflix, and Amazon</strong>. The same logic behind Google Maps' routes or Amazon's search results comes from mastering Data Structures and Algorithms. You won't just learn to code; you'll learn to spot patterns, plan smarter solutions, and understand the trade-offs. By the end, you'll be able to explain not just what works, but why it works best.
          </p>
        </div>
        <div className="image-container">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fboy_thinking.png" alt="Engineering Mindset" />
          <p className="image-caption">Mastering the logic behind the world's most successful applications.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Why This Course Is Different</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="text-xl font-bold text-green-800 mb-3">Beyond Theory, Into Practice</h4>
            <p className="text-gray-700 leading-relaxed">We don't just teach you the concepts; we make you build them. From implementing your own Linked List to designing a HashMap from scratch, you'll gain deep, practical knowledge.</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Structured for Mastery</h4>
            <p className="text-gray-700 leading-relaxed">Our learning path is a carefully designed journey. Each module builds on the last, with hands-on projects like a <strong>GPS Navigator</strong> and a <strong>Task Dependency Manager</strong>.</p>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <h4 className="text-xl font-bold text-orange-800 mb-3">LeetCode Profile Building</h4>
            <p className="text-gray-700 leading-relaxed">We actively guide you in solving problems on LeetCode. Build a tangible, impressive profile that you can showcase to recruiters before your interview.</p>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h4 className="text-xl font-bold text-purple-800 mb-3">Visualize to Understand</h4>
            <p className="text-gray-700 leading-relaxed">Complex algorithms can be hard to grasp. We use advanced visualization tools to help you see how data moves and structures change in real-time.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>What You Will Achieve: Our Course Outcomes</h3>
        <p>By the end of our 70 hours together, you will be able to:</p>
        <div className="image-container my-6">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FDSA_courses_outcomes.png" alt="Course Outcomes" />
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <ul className="space-y-3 list-none p-0 ml-0">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 shrink-0"></span>
              Master fundamental data structures and algorithms
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 shrink-0"></span>
              Solve complex coding problems efficiently
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 shrink-0"></span>
              Build a strong LeetCode profile
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 shrink-0"></span>
              Think like engineers at top tech companies
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>The Tools for Success: Our Learning Methodology</h3>
        <div className="bg-gray-100 p-6 rounded-lg mb-8 border-l-4 border-gray-400">
          <p className="text-gray-700 leading-relaxed italic text-lg">"We have a specific and effective way of learning here, designed to build a deep, fundamental understanding of DSA."</p>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
            <h4 className="text-xl font-bold text-red-800 mb-3">Languages: C++ or Java Only</h4>
            <p className="text-gray-700 leading-relaxed">This course exclusively uses <strong>C++ and Java</strong>. Python is not permitted. Python hides underlying logic with built-in functions. By building structures from scratch in C++ or Java, you'll understand HOW they work, not just THAT they work.</p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 shadow-sm">
            <h4 className="text-xl font-bold text-indigo-800 mb-3">Collaboration: Pair Programming</h4>
            <p className="text-gray-700 leading-relaxed">Some of our most important practical sessions will involve pair programming. You'll team up with a partner. One person will be the <strong>Driver</strong> (keyboard) and the other will be the <strong>Navigator</strong> (strategy & bug-catching).</p>
          </div>
        </div>
        <div className="image-container mt-8">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fdriver_navigator_pair_programming.png" alt="Pair Programming" />
          <p className="image-caption">The Driver handles the syntax, while the Navigator manages the logic.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Your Journey Through DSA: A Module-by-Module Roadmap</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed">Here's a look at the path you'll be taking with us. We've structured it milestone by milestone to build your skills logically and effectively.</p>
        </div>
        <div className="image-container">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FDSA_module_flow.png" alt="DSA Roadmap" />
        </div>
      </section>

      <section className="content-section">
        <h3>Practice, Assessments, and Mastering the Craft</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h4 className="text-xl font-bold text-orange-800 mb-3">Assignments & CAs</h4>
            <p className="text-gray-700 leading-relaxed">CA (Continuous Assessments) will be significantly harder than normal progress quizzes. We will provide a <strong>Module Practice Assessment</strong> before each CA to help you prepare.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="text-xl font-bold text-green-800 mb-3">LeetCode & Optional Practice</h4>
            <p className="text-gray-700 leading-relaxed">Throughout the course, we will provide optional assignments and LeetCode milestones. A strong LeetCode profile is a fantastic asset for interviews.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Learn to Solve</h3>
        <p>Before you wrap up this orientation, we highly recommend watching this introductory video on Data structures and algorithms.</p>
        <div className="video-embed">
          <div className="video-container shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/iZmDcfTtcNg"
              title="What are Data Structures?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Quiz
        title="Module 1.1 Quiz: Course Orientation"
        questions={[
          {
            question: "Which programming languages are used exclusively in this course for implementing Data Structures?",
            options: ["Python and JavaScript", "C++ and Java", "C# and Ruby", "Go and Rust"],
            correctAnswer: 1,
            explanation: "The course exclusively uses C++ and Java to ensure students learn the underlying logic of data structures without the over-simplification provided by languages like Python."
          },
          {
            question: "What is the primary role of the 'Navigator' in a Pair Programming session?",
            options: ["To type the code at the keyboard", "To stay silent and watch", "To think about strategy, catch bugs, and look at the bigger picture", "To grade the performance of the Driver"],
            correctAnswer: 2,
            explanation: "The Navigator focuses on the overall logic and strategy, catching potential issues while the Driver focuses on writing the actual code."
          },
          {
            question: "Is Python permitted for your core DSA implementations in this course?",
            options: ["Yes, for everything", "No, never", "Only for the final project", "Only with special permission"],
            correctAnswer: 1,
            explanation: "Python is not permitted because its built-in functions often hide the real algorithmic logic we want students to master."
          },
          {
            question: "Why does the course place a heavy emphasis on LeetCode profile building?",
            options: ["To win prizes", "To show the world how fast you can type", "To build a tangible, impressive portfolio for recruiters", "Because LeetCode owns the course"],
            correctAnswer: 2,
            explanation: "A strong LeetCode profile proves your problem-solving skills to recruiters even before an interview begins."
          },
          {
            question: "Which assessment is expected to be significantly harder than the regular progress quizzes?",
            options: ["Assignments", "Continuous Assessments (CAs)", "Video Quizzes", "Interactive Animations"],
            correctAnswer: 1,
            explanation: "CAs are designed to be challenging and rigorous, testing deep comprehension of the module's topics."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={1}
      />
    </div>
  );
};

export default Module1_1;
