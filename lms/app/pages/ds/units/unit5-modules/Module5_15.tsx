'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_15: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.15</div>
        <div className="lesson-title-main">
          <h1>Hands-on | Task Dependency Manager</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">Hands-on Session</p>
          <p className="mt-2 text-lg">Task Dependency Manager</p>
          <p className="mt-2">Analyze whether a system with dependencies can be completed without getting stuck.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Why This Session Exists at This Point in the Course</h3>
        <p>
          At this stage of the course, the focus shifts from writing correct code to reasoning about whether a system can function at all.
        </p>
        <p className="mt-4">So far, you have learned how to:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Represent problems using graphs</li>
          <li>Understand direction and constraints</li>
          <li>Detect cycles and structural issues</li>
        </ul>
        <p className="mt-4">
          This session brings those ideas together into a single, practical decision-making problem.
        </p>
        <p className="mt-4">
          No new concepts are introduced here — instead, you are expected to apply what you already know in a more disciplined way.
        </p>
      </section>

      <section className="content-section">
        <h3>From Coding to Reasoning About Systems</h3>
        <p>Earlier problems asked you to:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Traverse a graph</li>
          <li>Detect specific patterns</li>
          <li>Compute an output</li>
        </ul>
        <p className="mt-4">This problem asks something different:</p>
        <p className="mt-2 font-semibold ml-6 italic">Is the system itself logically possible?</p>
        <p className="mt-4">You are no longer thinking in terms of steps or execution.</p>
        <p className="mt-2">You are analyzing whether the given constraints allow any valid execution at all.</p>
        <p className="mt-4">This kind of reasoning is fundamental when working with real systems.</p>
      </section>

      <section className="content-section">
        <h3>Core Structural Insight</h3>
        <p>The entire problem reduces to one key property:</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold text-lg">Does the directed graph contain a cycle?</p>
        </div>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>A cycle represents circular dependency</li>
          <li>Circular dependency means no task in the cycle can start</li>
          <li>If even one such cycle exists, the system cannot be completed</li>
        </ul>
        <p className="mt-4">This is a structural failure, not an implementation issue.</p>
      </section>

      <section className="content-section">
        <h3>Decision Problem vs Construction Problem</h3>
        <p>It is important to recognize what you are solving here.</p>
        <p className="mt-4">This is a decision problem:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Output is simply true or false</li>
          <li>You are deciding whether a valid solution exists</li>
        </ul>
        <p className="mt-4">You are not required to:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Produce an execution order</li>
          <li>Simulate task completion</li>
          <li>Optimize performance</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Common Misconception to Avoid</h3>
        <p>A frequent mistake is assuming:</p>
        <p className="mt-2 ml-6 italic">"If I can start somewhere, I should be able to finish."</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">This is not always true.</p>
          <p className="mt-2">
            Some systems allow partial progress but eventually become blocked due to hidden circular dependencies.
          </p>
        </div>
        <p className="mt-4">
          This session trains you to detect such failure states before execution begins.
        </p>
      </section>

      <section className="content-section">
        <h3>Why This Lesson Sits Near the End of the Course</h3>
        <p>This lesson is placed here intentionally.</p>
        <p className="mt-4">By now, you are expected to:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>Recognize graph structures without being told</li>
          <li>Apply cycle detection purposefully</li>
          <li>Make correctness decisions based on structure alone</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Key Takeaway</p>
          <p className="mt-2">
            If you can reason through this problem clearly, it shows you have internalized the core ideas of the course.
          </p>
        </div>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 5.15 Quiz: Task Dependency Manager"
          questions={[
            {
              question: "In the Task Dependency Manager problem, what does a DIRECTED CYCLE represent?",
              options: ["An optimized task order", "A circular dependency where tasks block each other permanently", "A completed task loop", "A valid execution order"],
              correctAnswer: 1,
              explanation: "A directed cycle (e.g., A depends on B, B depends on C, C depends on A) creates a circular dependency. No task can start because each waits for another in the cycle."
            },
            {
              question: "This problem is fundamentally asking:",
              options: ["What is the maximum number of tasks?", "Can all tasks be completed? (Is the dependency graph acyclic?)", "What is the shortest task chain?", "How to sort tasks alphabetically?"],
              correctAnswer: 1,
              explanation: "The core question is whether the directed graph of task dependencies has any cycle. If no cycle exists (DAG), all tasks can be completed. A single cycle blocks the entire system."
            },
            {
              question: "A directed graph with no cycles is called a:",
              options: ["Complete Graph", "Bipartite Graph", "Directed Acyclic Graph (DAG)", "Undirected Tree"],
              correctAnswer: 2,
              explanation: "A Directed Acyclic Graph (DAG) is a directed graph with no directed cycles. Dependency managers, build systems, and topological sort all require the input to be a DAG."
            },
            {
              question: "Which algorithm is typically used to detect a cycle in a DIRECTED graph?",
              options: ["BFS with a distance array", "DFS with a 'currently in stack' flag for each node", "Dijkstra's algorithm", "Kruskal's algorithm"],
              correctAnswer: 1,
              explanation: "DFS with a 'recursion stack' (or coloring: white/gray/black) detects back edges in directed graphs. A back edge from a node to an ancestor indicates a cycle."
            },
            {
              question: "If the Task Dependency Manager determines the system CAN be completed, what is the output?",
              options: ["The full execution schedule", "true (a valid order exists)", "The number of tasks", "The longest task chain"],
              correctAnswer: 1,
              explanation: "This is a decision problem with a boolean output. If no cycle exists, the answer is true (the system can be completed). The problem does not require you to produce the actual order."
            }
          ]}
          subject="DS"
          unitId={5}
          moduleId={15}
        />
      </section>
    </div>
  );
};

export default Module5_15;
