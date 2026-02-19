'use client';
import React from 'react';

const Module1_1: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8 border-b pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold">1.1</div>
          <h1 className="text-3xl font-bold text-gray-800">Introduction to DSA & Orientation</h1>
        </div>
      </div>
      
      <section className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p className="mb-4 text-gray-700 leading-relaxed">Hello everyone, and welcome! We're thrilled to see you all here. Before we dive into what this course is all about, let's get on our feet and try something fun. Your mentor will be conducting a small, fun activity for you all. We'll meet after that.</p>
        <p className="text-gray-700 leading-relaxed">Hope you enjoyed the activity. Now, let's get into knowing more about the course.</p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">From "It Works" to "It's a Work of Art"</h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
          <p className="mb-4 text-gray-700 leading-relaxed">Ever faced a coding problem that felt impossible, where your solution worked, but was just too slow? You keep trying, but it still times out, and you can't figure out how others solve it so quickly. That feeling is exactly why we're here.</p>
          <p className="text-gray-700 leading-relaxed">In this course, you'll learn to think like the engineers at Google, Netflix, and Amazon. The same logic behind Google Maps' routes or Amazon's search results comes from mastering Data Structures and Algorithms. You won't just learn to code; you'll learn to spot patterns, plan smarter solutions, and understand the trade-offs. By the end, you'll be able to explain not just what works, but why it works best.</p>
        </div>
      </section>
      <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fboy_thinking.png" alt="" />
      <br />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">Why This Course Is Different</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Beyond Theory, Into Practice</h3>
            <p className="text-gray-700 leading-relaxed">We don't just teach you the concepts; we make you build them. From implementing your own Linked List to designing a HashMap from scratch, you'll gain a deep, practical understanding that prepares you for real-world engineering challenges.</p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Structured for Mastery</h3>
            <p className="text-gray-700 leading-relaxed">Our learning path is a carefully designed journey. Each module builds on the last, with hands-on projects like a GPS Navigator and a Task Dependency Manager that allow you to integrate and apply multiple concepts at once.</p>
          </div>
          
          <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Integrated LeetCode Profile Building</h3>
            <p className="text-gray-700 leading-relaxed">We actively guide you in solving problems on LeetCode. This isn't just for practice; it's about building a tangible, impressive profile that you can showcase to recruiters, proving your skills before you even walk into an interview.</p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Visualize to Understand</h3>
            <p className="text-gray-700 leading-relaxed">Complex algorithms can be hard to grasp. That's why we use visualization tools like Visual Algo and DS Visualizer to help you see how data moves and structures change, making abstract concepts concrete and intuitive.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">What You Will Achieve: Our Course Outcomes</h3>
        <p>By the end of our 70 hours together, you will be able to:</p>
        <br />
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FDSA_courses_outcomes.png" alt="" />
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Master fundamental data structures and algorithms
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Solve complex coding problems efficiently
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Build a strong LeetCode profile
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Think like engineers at top tech companies
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">The Tools for Success: Our Learning Methodology</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed italic text-lg">"We have a specific and effective way of learning here, designed to build a deep, fundamental understanding of DSA."</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-800 mb-3">Languages: C++ or Java Only</h3>
            <p className="text-gray-700 leading-relaxed">A quick but very important note: this course exclusively uses C++ and Java. Python is not permitted. This is a deliberate choice. We want you to learn DSA from its core. Python has many built-in libraries and functions that can solve complex problems in one line, but that hides the underlying logic. By building these structures from scratch in C++ or Java, you'll understand how they work, not just that they work. This foundational knowledge is irreplaceable.</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">Collaboration: Pair Programming</h3>
            <p className="text-gray-700 leading-relaxed">Some of our most important practical sessions will involve pair programming. You'll team up with a partner. One person will be the Driver—the one at the keyboard, writing the code. The other will be the Navigator—the one thinking about the bigger picture, suggesting strategies, and catching potential bugs. The Navigator's job is to guide the problem-solving process. Once a solution is complete, the Navigator can take the same code and submit it, as both of you will have contributed equally to the solution.</p>
          </div>
        </div>
        <br />
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fdriver_navigator_pair_programming.png" alt="" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Your Journey Through DSA: A Module-by-Module Roadmap</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">Here's a look at the path you'll be taking with us. We've structured it milestone by milestone to build your skills logically and effectively.</p>
        </div>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FDSA_module_flow.png" alt="" />
        <br />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Practice, Assessments, and Mastering the Craft</h2>
        <div className="bg-teal-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed font-medium">Learning DSA is like training for a sport. You need practice, and you need to be challenged.</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Assignments & CAs</h3>
            <p className="text-gray-700 leading-relaxed">A quick heads-up: the CAs (Continuous Assessments) will be significantly harder than the normal progress quizzes. They are designed to make you think. To help you prepare, we will provide a Module Practice Assessment before each CA, which will mimic the actual test environment and difficulty. Prepare well for them!</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-3">LeetCode & Optional Practice</h3>
            <p className="text-gray-700 leading-relaxed">Throughout the course, we will provide many optional assignments and LeetCode milestones. The goal is to help you build your LeetCode profile while you learn. A strong LeetCode profile is a fantastic asset for interviews. We also have dedicated Hands-on sessions where we will solve a LeetCode problem live in class, showing you the exact thought process from problem to solution.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Types of Questions You'll Encounter</h2>
        <div className="bg-slate-50 p-6 rounded-lg">
          <p className="mb-6 text-gray-700 leading-relaxed">To ensure a well-rounded evaluation of your skills, our assignments and assessments will include a variety of formats:</p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-800">Programming Questions:</strong>
                <span className="text-gray-700"> These are the core of our assessments. You will be asked to write code from scratch and submit a single, functional file in C++ or Java that solves a given problem.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-800">MCQ Questions:</strong>
                <span className="text-gray-700"> Multiple-choice questions will test your conceptual understanding, your knowledge of time/space complexity, and your ability to trace algorithms.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-800">File Upload Questions:</strong>
                <span className="text-gray-700"> For certain assignments, like a written analysis of algorithm complexity, you may be required to upload documents or other files as your submission.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-800">Subjective Questions:</strong>
                <span className="text-gray-700"> These questions will require you to explain your thought process, justify your choice of a particular data structure, or analyze trade-offs, testing your communication and critical thinking skills.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-800">Reading Comprehension Questions:</strong>
                <span className="text-gray-700"> You will be provided with a passage or comprehension related to programming or logical reasoning, followed by multiple-choice questions that assess your analytical and interpretative skills.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fleetcode_profile_page.webp" alt="" />
      <br />

      <section>
        <p>Before you wrap up this session, we would highly recommend watching this introductory video on Data structures and algorithms.</p>
        <br />
        <iframe width="407" height="360" src="https://www.youtube.com/embed/iZmDcfTtcNg" title="What are Data Structures?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <br />
        <p>Alright, feels like you have reached the end of this session. In the next session, you will be surprised by the topic, so hold your horses.</p>
        <br />
        <p>This course is a journey from being a coder to becoming a problem-solver and an engineer. It will be challenging, but it will also be incredibly rewarding. It will change the way you think and the way you write code forever.</p>
        <br />
        <p>Are you ready to begin?</p>
      </section>
    </div>
  );
};

export default Module1_1;