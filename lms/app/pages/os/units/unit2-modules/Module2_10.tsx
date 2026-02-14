'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_10: React.FC = () => {
  const priorityImplQuiz = [
    {
      question: "Which of the following can be used to decide the priority of a process in an implementation?",
      options: ["Memory requirements", "Time requirements", "Ratio of average I/O to CPU burst time", "All of the above"],
      correctAnswer: 3,
      explanation: "Priority can be determined based on various factors including resources, time constraints, or the nature of the task (I/O vs CPU bound)."
    },
    {
      question: "When implementing non-preemptive priority scheduling, what happens when a task starts running?",
      options: ["It can be interrupted by any other task.", "It can only be interrupted by a higher-priority task.", "It runs until it finishes completely.", "It runs for a fixed time quantum and then stops."],
      correctAnswer: 2,
      explanation: "In non-preemptive scheduling, once the CPU has been allocated to a process, the process keeps the CPU until it releases it, either by terminating or by switching to the waiting state."
    },
    {
      question: "What is 'Priority Inversion'?",
      options: ["When a low-priority process is terminated by the OS.", "When a high-priority process is delayed because a low-priority process holds a needed resource.", "When a process's priority is decreased by the aging mechanism.", "When the scheduler reverses all priority levels."],
      correctAnswer: 1,
      explanation: "Priority inversion is a scenario where a higher-priority task is blocked by a lower-priority task that has exclusive access to a resource needed by the higher-priority task."
    },
    {
      question: "In the implementation steps, what is the first thing you should do if tasks arrive at different times?",
      options: ["Execute them in LIFO order.", "Sort them by their arrival time.", "Execute the longest task first.", "Ignore the arrival time and use only priority."],
      correctAnswer: 1,
      explanation: "Sorting by arrival time ensures you are considering processes as they actually become available for scheduling."
    },
    {
      question: "How does 'Aging' solve the problem of starvation?",
      options: ["By deleting old processes.", "By gradually decreasing the priority of new processes.", "By gradually increasing the priority of long-waiting processes.", "By giving every process the same priority."],
      correctAnswer: 2,
      explanation: "Aging ensures that even low-priority tasks eventually gain enough priority to be executed by the CPU."
    }
  ];
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.10</div>
        <div className="lesson-title-main">
          <h1>Priority Scheduling - Implementation</h1>
        </div>
      </div>

      <section className="content-section">
        <p>In this assignment, you will be implementing the Priority Scheduling Algorithm.</p>
        <p>Before diving into the implementation of the Priority Scheduling Algorithm, let&apos;s explore its working principles and step-by-step process. Understanding these concepts will provide a solid foundation for implementing the algorithm effectively.</p>
        <p>Priority scheduling is one of the most common scheduling algorithms in batch systems. Each process is assigned a priority. The process with the highest priority is to be executed first and so on. Processes with the same priority are executed on a first-come first served basis. Priority can be decided based on memory requirements, time requirements or any other resource requirement. Also priority can be decided on the ratio of average I/O to average CPU burst time.</p>

        <h2>Implementation</h2>
        <details className="bg-gray-100 border-2 border-gray-800 rounded-lg p-4 cursor-pointer">
          <summary className="font-semibold text-lg">Here&apos;s how you can implement Priority Scheduling Algorithm</summary>
          <ol className="mt-4 space-y-2">
            <li>Get a list of tasks (processes), each with a number showing how important it is (priority) and how long it takes to run (burst time).</li>
            <li>If tasks arrive at different times, sort them by when they arrive first.</li>
            <li>Pick the most important task (highest priority) that&apos;s ready to run. If some tasks have the same priority, pick the one that arrived first.</li>
            <li>Run that task. If it&apos;s preemptive priority scheduling, a more important task can interrupt it. If it&apos;s non-preemptive, let it finish completely.</li>
            <li>Repeat steps 3 and 4 until all tasks are done.</li>
            <li>Calculate how long each task waited and how long it took to finish overall.</li>
          </ol>
        </details>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded my-6">
          <p><strong>Note:</strong> A major problem with priority scheduling is indefinite blocking or starvation. A solution to the problem of indefinite blockage of the low-priority process is aging.</p>
          <p className="mt-2">Aging is a technique of gradually increasing the priority of processes that wait in the system for a long period of time.</p>
        </div>

        <h3>Advantages</h3>
        <ul>
          <li>Priority-based scheduling ensures important tasks are completed first, helping critical processes finish quickly.</li>
          <li>It is especially useful in systems where tasks need to be done within strict time limits, like in real-time applications.</li>
        </ul>

        <h3>Disadvantages</h3>
        <ul>
          <li><strong>Priority inversion:</strong> Priority inversion occurs when a low-priority process holds a resource that a high-priority process requires. This can cause delays in the execution of high-priority processes.</li>
          <li><strong>Starvation:</strong> If the system is heavily loaded(too many) with high-priority processes, low-priority processes may never get a chance to execute.</li>
        </ul>

        <h2>Bonus Content</h2>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/preemptive-priority-cpu-scheduling-algortithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Preemptive Priority CPU Scheduling Algorithm - GeeksforGeeks</a></li>
          <li><a href="https://www.naukri.com/code360/library/non-preemptive-priority-based-scheduling" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Non-Preemptive Priority Based Scheduling - Coding Ninjas</a></li>
        </ul>

        <Quiz
          title="Module 2.10 Quiz: Priority Scheduling Implementation"
          questions={priorityImplQuiz}
          subject="OS"
          unitId={2}
          moduleId={10}
        />
        <p>Well Done! You have successfully completed this lesson.</p>
      </section>
    </div>
  );
};

export default Module2_10;
