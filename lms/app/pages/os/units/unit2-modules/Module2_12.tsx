'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_12: React.FC = () => {
  const rrImplQuiz = [
    {
      question: "Which scheduling algorithm is the Round Robin (RR) algorithm a preemptive version of?",
      options: ["Shortest Job First (SJF)", "First-Come First-Serve (FCFS)", "Priority Scheduling", "Multilevel Queue"],
      correctAnswer: 1,
      explanation: "RR is essentially FCFS with preemption based on a time quantum."
    },
    {
      question: "What happens if a process does NOT finish its task within the assigned time quantum?",
      options: ["It is terminated immediately.", "It is moved to the disk for storage.", "It is put back in the ready queue to wait for its next turn.", "It continues running until it finishes."],
      correctAnswer: 2,
      explanation: "If a process exceeds its time slice, it is preempted and added to the end of the ready queue."
    },
    {
      question: "What is a major characteristic of Round Robin that ensures fairness?",
      options: ["It gives the longest jobs priority.", "Every process gets an equal share of CPU time.", "It never uses context switching.", "It allows processes to choose their own time quantum."],
      correctAnswer: 1,
      explanation: "RR ensures that no single process can dominate the CPU, giving every process an equal opportunity to execute."
    },
    {
      question: "Which of the following is a disadvantage of a very small time quantum in RR implementation?",
      options: ["Starvation increases.", "Throughput becomes extremely high.", "System overhead from frequent context switching increases.", "Turnaround time always decreases."],
      correctAnswer: 2,
      explanation: "A small quantum leads to many interruptions, which means more time spent on context switches rather than work."
    },
    {
      question: "In the context of RR, what does the Gantt chart represent?",
      options: ["The hardware architecture of the CPU.", "A visual representation of the order and time processes use the CPU.", "The memory layout of the operating system.", "The list of all files on the hard drive."],
      correctAnswer: 1,
      explanation: "A Gantt chart is a bar chart that illustrates the schedule of processes over time."
    }
  ];
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.12</div>
        <div className="lesson-title-main">
          <h1>Round Robin - Implementation</h1>
        </div>
      </div>

      <section className="content-section">
        <p>In this assignment, you will be implementing the Round Robin Algorithm.</p>
        <p>Before diving into the implementation of the Round Robin Scheduling Algorithm, let&apos;s explore its working principles and step-by-step process. Understanding these concepts will provide a solid foundation for implementing the algorithm effectively.</p>
        <p>Round Robin(RR) is a CPU scheduling method where each process gets a fixed time slot to execute. It&apos;s like taking turns to use the CPU in a cycle. This method is a preemptive version of the First-Come, First-Serve algorithm, meaning a process can be stopped before it finishes if its time is up.</p>
        <p>In Round Robin scheduling, a fixed amount of time, called the time quantum, is given to each process. If a process finishes its task within this time, it ends. If not, it goes back to the ready queue and waits for its next turn.</p>

        <h3>Characteristics of Round Robin Scheduling</h3>
        <ul>
          <li>Simple and easy to implement.</li>
          <li><strong>Fair:</strong> All processes get an equal share of CPU time, so no process is left waiting too long.</li>
          <li><strong>Preemptive:</strong> A process can be interrupted after its time quantum, even if it hasn&apos;t finished.</li>
        </ul>

        <h3>Advantages</h3>
        <ul>
          <li>Each process gets an equal share of CPU time.</li>
          <li><strong>Time-sharing:</strong> New processes are added to the end of the queue, and each gets a turn to use the CPU after a certain amount of time.</li>
          <li><strong>Prevents starvation:</strong> No process can be ignored for too long.</li>
        </ul>

        <h3>Disadvantages</h3>
        <ul>
          <li><strong>Longer waiting times:</strong> Since processes have to wait for their turn, this can increase waiting time.</li>
          <li><strong>Low throughput:</strong> The CPU isn&apos;t used as efficiently as it could be, especially if the time quantum is small.</li>
          <li><strong>Context switching:</strong> Switching between processes takes time and can slow things down.</li>
          <li><strong>Large Gantt charts:</strong> If the time quantum is too small, the Gantt chart becomes very long, making scheduling time-consuming.</li>
        </ul>

        <h3>Bonus Content</h3>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://data-flair.training/blogs/round-robin-scheduling-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Round Robin Scheduling Algorithm - DataFlair</a></li>
          <li><a href="https://cactusware.com/blog/round-robin-scheduling-algorithms" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Optimising Game Scheduling With Round-Robin Algorithms</a></li>
        </ul>

        <Quiz
          title="Module 2.12 Quiz: Round Robin Implementation"
          questions={rrImplQuiz}
          subject="OS"
          unitId={2}
          moduleId={12}
        />
        <p>It&apos;s assignment time!!!</p>
      </section>
    </div>
  );
};

export default Module2_12;
