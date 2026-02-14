'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.12</div>
        <div className="lesson-title-main">
          <h1>Mini Project: System Resource Monitor &amp; Process Analyzer</h1>
        </div>
      </div>

      <section className="content-section">
        <h2>Final Lesson: Put Your OS Knowledge into Action!</h2>
        <p>You've completed a long journey through Operating Systems, now let's bring everything together in a fun mini project!</p>
      </section>

      <div className="flex justify-center my-4">
        <img src="https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif" alt="Rocket Launch" className="rounded-lg shadow-lg" />
      </div>

      <section className="content-section">
        <h3>Quick Recap: What You've Learned So Far</h3>
        <p>In this course, you explored many essential OS concepts. Here is a quick recap before your final mini project:</p>

        <ul className="list-none space-y-2 my-4">
          <li>🔹 What Operating Systems do and how they manage hardware</li>
          <li>🔹 Processes &amp; Threads - how programs run inside the OS</li>
          <li>🔹 CPU Scheduling Algorithms (FCFS, SJF, Round Robin, Priority)</li>
          <li>🔹 Process Synchronization &amp; classic problems</li>
          <li>🔹 Deadlocks &amp; recovery strategies</li>
          <li>🔹 Memory Management (Paging, Segmentation, Fragmentation etc.)</li>
          <li>🔹 Storage Management &amp; File systems</li>
          <li>🔹 Linux basics: commands, navigation, files, permissions</li>
        </ul>

        <p className="mt-4">Each of these concepts is used in real operating systems. Now, you will apply some of them in a small but meaningful project!</p>
      </section>

      <section className="content-section">
        <h3>Before We Start: Why This Project Matters</h3>
        <p className="mb-3">Every time you open a browser, run a game, or even move your mouse, your Operating System is working behind the scenes. You've spent this entire course learning how all these internal components function.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold text-blue-900">But here's a secret: you understand an OS deeply only when you observe it in action.</p>
          <p className="text-blue-800 mt-2">This mini project gives you that exact experience, seeing your computer's brain working in real time!</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Real World Use: Why Engineers Build These Tools</h3>
        <p className="mb-3">Companies use monitoring tools for many reasons:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>To catch high CPU usage before systems crash</li>
          <li>To find memory leaks in applications</li>
          <li>To understand performance patterns</li>
          <li>To debug slow programs</li>
          <li>To analyze how servers behave under load</li>
        </ul>

        <p className="mt-4">By building your own simplified monitor, you're learning how DevOps engineers, system administrators, and backend developers understand their systems.</p>

        <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg mt-4">
          <p className="font-semibold text-green-900">And the best part?</p>
          <p className="text-green-800">This is your first step into real-world OS-level engineering.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Mini Project: System Resource Monitor</h3>
        <p className="mb-3">This final project brings together your understanding of:</p>

        <ul className="list-none space-y-2 my-4">
          <li>✔ Processes</li>
          <li>✔ Monitoring tools</li>
          <li>✔ Memory &amp; CPU behavior</li>
          <li>✔ Linux commands</li>
          <li>✔ Visualization</li>
        </ul>

        <p className="mb-3">You will build a small script that observes how your system works — just like a simplified version of Task Manager or top command.</p>

        <div className="text-center my-4 text-2xl font-bold text-purple-600">
          😺✨ You can do it!
        </div>
      </section>

      <section className="content-section">
        <h3>Project Breakdown (What You Will Do)</h3>

        <div className="space-y-6 mt-4">
          <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-purple-900 mb-2">🔹 Step 1: Capture System Information</h4>
            <p className="mb-2">You will write a simple script to display:</p>
            <ul className="list-disc pl-6">
              <li>OS Name</li>
              <li>Processor Info</li>
              <li>Total RAM</li>
              <li>Current System Time</li>
            </ul>
          </div>

          <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-blue-900 mb-2">🔹 Step 2: Monitor Running Processes</h4>
            <p className="mb-2">You will list top 5 programs currently running with:</p>
            <ul className="list-disc pl-6">
              <li>PID</li>
              <li>CPU usage</li>
              <li>Memory usage</li>
            </ul>
          </div>

          <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-green-900 mb-2">🔹 Step 3: CPU &amp; Memory Graph</h4>
            <p className="mb-2">You will collect CPU and memory usage every second and plot:</p>
            <ul className="list-disc pl-6">
              <li>📈 CPU Usage Trend</li>
              <li>📉 Memory Usage Trend</li>
            </ul>
            <p className="mt-2">This shows you how system resources behave in real time.</p>
          </div>

          <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-orange-900 mb-2">🔹 Step 4: Final Report</h4>
            <p className="mb-2">Add:</p>
            <ul className="list-disc pl-6">
              <li>Graphs</li>
              <li>Screenshots</li>
              <li>Observations</li>
              <li>Summary of what you understood</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Final Checklist</h3>
        <p className="mb-3">This project is simple, beginner-friendly, and built using everything you learned.</p>
        <p className="mb-3">It will help you understand how operating systems manage resources in real time.</p>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-4 border-purple-500 p-6 rounded-lg my-4 text-center">
          <p className="text-lg font-semibold mb-2">Take your time. Explore. Experiment.</p>
          <p className="text-lg font-semibold">And most importantly, enjoy seeing OS concepts come alive!</p>
        </div>

        <div className="text-center mt-6 mb-12">
          <p className="text-xl font-bold text-blue-900">You've come a long way, now finish strong! 🚀</p>
        </div>

        <Quiz
          title="Module 5.12 Quiz: Final Review"
          questions={[
            {
              question: "What is the primary purpose of building a 'System Resource Monitor'?",
              options: ["To play games faster", "To observe how the OS manages CPU and Memory in real-time", "To replace the main OS", "To delete temporary files automatically"],
              correctAnswer: 1,
              explanation: "Visualizing resource usage helps you understand the practical application of OS concepts like CPU scheduling and Memory management."
            },
            {
              question: "In a process monitor like 'top' or Task Manager, what does 'PID' stand for?",
              options: ["Process Internal Data", "Program Interface Driver", "Process Identifier", "Priority Index Degree"],
              correctAnswer: 2,
              explanation: "PID is a unique number assigned by the OS to identify each running process."
            },
            {
              question: "Which system resource tends to increase when you open many browser tabs simultaneously?",
              options: ["Hard Drive RPM", "Memory (RAM) Usage", "Keyboard Latency", "Screen Resolution"],
              correctAnswer: 1,
              explanation: "Each tab is typically a separate process that requires allocated memory to store page data."
            },
            {
              question: "Why do DevOps engineers monitor CPU usage trends?",
              options: ["To change the wallpaper color", "To identify performance bottlenecks and prevent crashes", "To increase the monitor's refresh rate", "To reduce electricity costs"],
              correctAnswer: 1,
              explanation: "Monitoring trends helps predict when a system might become overloaded and fail."
            },
            {
              question: "You've completed Unit 5! Which core concept did we cover in this unit?",
              options: ["Web Design", "Storage Management & Linux", "Machine Learning", "Digital Marketing"],
              correctAnswer: 1,
              explanation: "Unit 5 focused on File Systems, RAID, Virtualization, and Linux operations."
            }
          ]}
          subject="OS"
          unitId={5}
          moduleId={12}
        />
      </section>
    </div>
  );
};

export default Module5_12;
