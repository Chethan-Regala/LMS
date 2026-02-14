'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.6</div>
        <div className="lesson-title-main">
          <h1>Operations on Processes and Interprocess Communication</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="content-section">
        <p>
          In this lesson, you’ll learn how operating systems manage processes
          and how these processes talk to each other to work efficiently.
        </p>

        <div className="info-box">
          <p>
            Just like a well-coordinated team, processes need a way to be
            created, deleted, and synchronized to ensure everything runs
            smoothly on your computer.
          </p>
        </div>
      </section>

      {/* Operations on Processes */}
      <section className="content-section">
        <h3>Operations on Processes</h3>
        <p>
          The operating system performs several key operations on processes.
          Two major ones are:
        </p>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_process_operations.png" alt="" />
        <ul>
          <li><strong>Process Creation:</strong> When a process creates a new
            one, the creating process is called the <strong>parent</strong>,
            and the new one is the <strong>child</strong>. Each process is
            assigned a unique ID called a <strong>PID</strong> (Process
            Identifier).</li>
          <li><strong>Process Termination:</strong> A process finishes its
            task and asks the OS to delete it using the
            &quot;exit()&quot; system call. Sometimes, a parent process
            can terminate its child using an &quot;abort()&quot; call if it
            is no longer needed.</li>
        </ul>

        <p><strong>Interactive Diagram: Process Creation</strong></p>
        <div className="process-creation-anim">
          <div className="process-box parent">
            Parent Process (PID: 125)
            <div className="eye"></div>
          </div>
          <div className="connector"></div>
          <div className="process-box child">
            Child Process (PID: 126)
            <div className="eye"></div>
          </div>
        </div>

        <h5>What this diagram covers:</h5>
        <p>A simple visualization of how a parent process spawns a child process, with each having its own unique identity.</p>

        <p>
          Processes in the system may be either independent or cooperating.
          Processes can terminate themselves by calling exit() or be
          terminated by parent or OS using abort().
        </p>
      </section>

      {/* Interprocess Communication (IPC) */}
      <section className="content-section">
        <h3>Interprocess Communication (IPC)</h3>
        <p>
          Sometimes, processes need to work together. IPC is the mechanism
          used by processes to communicate and synchronize their actions.
          There are two main models for IPC:
        </p>

        <div className="card-grid">
          <div className="ipc-card">
            <h4>1. Shared Memory</h4>
            <p>Processes share a common region of memory to exchange data. This is very fast but requires careful management to avoid conflicts.</p>
          </div>
          <div className="ipc-card">
            <h4>2. Message Passing</h4>
            <p>Processes communicate by sending and receiving messages through the OS kernel. This is easier to use but slightly slower than shared memory.</p>
          </div>
        </div>

        <p><strong>Animated Scenario: IPC Models</strong></p>
        <div className="ipc-anim">
          <div className="ipc-box">
            <div className="node">P1</div>
            <div className="shared-mem">SHARED MEMORY</div>
            <div className="node">P2</div>
          </div>
        </div>

        <p>
          Processes communicate via Shared memory or Message passing.
          Message passing involves Send and Receive operations.
        </p>
      </section>

      {/* Real World Scenario */}
      <section className="content-section">
        <h3>Real-World Scenario: Online Shopping and IPC</h3>
        <div className="info-box success">
          <p>
            Think of an <strong>online shopping platform</strong>. When you
            place an order:
            <br />
            <strong>Process A (Web Interface):</strong> Collects your item list.
            <br />
            <strong>Process B (Inventory System):</strong> Checks if items are in stock.
            <br />
            <strong>Process C (Payment Gateway):</strong> Processes the transaction.
          </p>
          <p>
            These three processes are **cooperating**. They use **IPC** to
            exchange your order details. Without IPC, they wouldn’t know
            what the other is doing, and you’d never get your shipment!
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="content-section">
        <h3>Summary</h3>
        <ul>
          <li><strong>Process Creation:</strong> Parent processes can create child processes, each with unique PIDs.</li>
          <li><strong>Process Termination:</strong> Processes end using exit() or abort() by the parent.</li>
          <li><strong>IPC:</strong> Allows processes to share information via shared memory or message passing.</li>
        </ul>
      </section>

      <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Operations+on+processes+and+interprocess+Communication.svg" alt="" />

      <section className="content-section">
        <h3>Mind Map</h3>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_operations_on_processes_ipc_mindmap.png" alt="" />
      </section>

      {/* Bonus content */}
      <section className="content-section">
        <h3>Bonus Content</h3>
        <p>This section is optional, and learners who want to explore further or need alternate resources to prepare can utilize the following references.</p>

        <ul>
          <li>
            <a href="https://www.studytonight.com/operating-system/operations-on-process" target="_blank" rel="noopener noreferrer">
              Operations on Process - Studytonight
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/inter-process-communication-ipc/" target="_blank" rel="noopener noreferrer">
              Inter-process Communication (IPC) - GeeksforGeeks
            </a>
          </li>
          <li>
            <a href="https://www.tutorialspoint.com/operating_system/os_processes.htm" target="_blank" rel="noopener noreferrer">
              Operating System - Processes - TutorialsPoint
            </a>
          </li>
        </ul>

        <Quiz
          title="Module 1.10 Quiz: Process Operations and IPC"
          questions={[
            {
              question: "When a process creates a new process, the creating process is called ______ and the new one is ______.",
              options: ["Master, Slave", "Parent, Child", "Host, Guest", "Primary, Secondary"],
              correctAnswer: 1,
              explanation: "In an OS process hierarchy, the creating process is the parent and the newly created one is the child."
            },
            {
              question: "What is a Process ID (PID)?",
              options: ["A password for the process", "A unique numerical identifier assigned by the OS to each process", "The name of the program", "The amount of memory used"],
              correctAnswer: 1,
              explanation: "The PID is a unique number that identifies a specific process within the operating system."
            },
            {
              question: "Which IPC model is generally faster for communication on the same machine?",
              options: ["Message Passing", "Shared Memory", "Email", "System Calls"],
              correctAnswer: 1,
              explanation: "Shared memory is typically faster because it allows direct memory access without involving the kernel for every piece of data exchanged."
            },
            {
              question: "In the 'Message Passing' model, which component is responsible for delivering the messages?",
              options: ["The Application", "The Hardware", "The OS Kernel", "The User"],
              correctAnswer: 2,
              explanation: "In message passing, processes send messages to the kernel, which then delivers them to the destination process."
            },
            {
              question: "What happens to a child process if its parent process is terminated in many systems?",
              options: ["It becomes the parent", "It is also terminated (cascading termination)", "It gains admin privileges", "Nothing happens"],
              correctAnswer: 1,
              explanation: "In many OS designs, children cannot exist without their parents, so terminating a parent leads to the termination of all its descendants."
            }
          ]}
          subject="OS"
          unitId={1}
          moduleId={6}
        />
      </section>

      <style jsx>{`
        .process-creation-anim {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin: 20px 0;
        }
        .process-box {
          width: 140px;
          height: 100px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          text-align: center;
          position: relative;
        }
        .parent { background: #4a90e2; }
        .child { background: #7ed321; animation: popIn 1s infinite alternate; }
        .connector {
          width: 40px;
          height: 4px;
          background: #ccc;
          position: relative;
        }
        @keyframes popIn {
          from { transform: scale(0.9); opacity: 0.8; }
          to { transform: scale(1.1); opacity: 1; }
        }

        .ipc-anim {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }
        .ipc-box {
          display: flex;
          align-items: center;
          gap: 20px;
          border: 2px dashed #999;
          padding: 20px;
          border-radius: 12px;
        }
        .node {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #f5a623;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }
        .shared-mem {
          width: 120px;
          height: 40px;
          background: #eee;
          border: 1px solid #ccc;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #666;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }
        .ipc-card {
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fafafa;
        }
        .info-box {
          padding: 16px;
          background: #eef1f6;
          border-radius: 8px;
        }
        .success { background: #e8f5e9; }
      `}</style>
    </div>
  );
};

export default Module1_10;
