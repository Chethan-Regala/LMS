'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.7</div>
        <div className="lesson-title-main">
          <h1>Shared Memory and Message Passing Systems</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="content-section">
        <p>
          In this lesson, you will learn about Shared Memory and Message Passing, two key
          mechanisms for inter-process communication (IPC) in operating systems.
        </p>

        <p className="intro-text">
          Imagine a busy restaurant where the kitchen staff (chefs) and the waiters need to
          work together to serve customers efficiently. If they can't communicate properly,
          orders might be delayed or mixed up. Understanding Shared Memory and Message Passing
          helps us learn how processes communicate, just like how a well-organized restaurant
          ensures smooth operations.
        </p>

        <img
          src="https://storage.googleapis.com/kq-storage.kalvium.community/philosophy%2F7636733.png"
          alt=""
        />
      </section>

      {/* Shared Memory Systems */}
      <section className="content-section">
        <h3>Shared Memory Systems</h3>

        <p>
          Shared memory is one of the fastest and most efficient mechanisms for inter-process
          communication (IPC) in operating systems.
          <br />
          In this approach, multiple processes can access a common memory space to exchange
          information directly.
          <br />
          This eliminates the need for heavy data transfer mechanisms like message queues or
          pipes. However, synchronization mechanisms like semaphores or mutexes are necessary
          to avoid conflicts when multiple processes access the shared memory simultaneously.
        </p>

        <div className="shared-mem-anim">
          <div className="proc-box">Process A</div>

          <div className="shared-box">
            Shared Memory

            <span className="ball b1" />
            <span className="ball b2" />
            <span className="ball b3" />
          </div>

          <div className="right-procs">
            <div className="proc-box">Process B</div>
            <div className="proc-box">Process C</div>
          </div>
        </div>

        <ul>
          <p><strong>In this animation:</strong></p>
          <li>Red balls represent data being read/written in the shared memory.</li>
          <li>Multiple processes (A, B, C) can access the shared memory simultaneously.</li>
          <li>Proper synchronization is required to avoid conflicts (not shown in animation).</li>
        </ul>

        <h3>How Shared Memory Works</h3>

        <p>
          Imagine you and your friends are working in a shared office space. Each person has
          their own workspace, but there's a large communal whiteboard in the middle of the
          office that everyone can use.
        </p>

        <p>Alright, let's dive right in.</p>

        <p>
          When shared memory is established, the operating system provides a block of memory
          that multiple processes can map into their own address spaces. These processes can
          then directly read from and write to this memory, enabling fast and seamless
          communication.
        </p>

        <div className="shared-mem-rw">
          {/* Process A */}
          <div className="proc-col">
            <div className="proc blue">Process A</div>
            <div className="proc-caption">Creates &amp; writes data</div>
          </div>

          {/* Shared memory */}
          <div className="shared-core">
            <div className="shared-title">Shared Memory</div>

            <span className="data red" />
            <span className="data green" />
          </div>

          {/* Process B */}
          <div className="proc-col">
            <div className="proc greenBox">Process B</div>
            <div className="proc-caption">Reads data</div>
          </div>

          {/* Process C */}
          <div className="proc-col">
            <div className="proc orangeBox">Process C</div>
            <div className="proc-caption">Reads data</div>
          </div>
        </div>

        <div className="key-points">
          <h3>Key Points:</h3>
          <ul>
            <li>Processes must explicitly create and attach to shared memory</li>
            <li>Shared memory resides in the creator process but can be attached by others</li>
            <li>All attached processes can read/write simultaneously</li>
            <li>OS normally prevents unauthorized memory access</li>
          </ul>
        </div>

        <p>
          1. Interprocess communication via shared memory requires cooperating processes to
          create a specific region of memory to be shared.
          <br />
          2. The shared-memory region typically resides in the address space of the process
          that creates the shared segment.
          <br />
          3. Any other process that wants to use this shared memory must attach it to its own
          address space.
        </p>

        <p>
          4. Under normal circumstances, the operating system prevents one process from
          accessing another process's memory.
          <br />
          5. Shared memory requires that two or more processes agree to override this
          restriction, allowing them to access the same memory segment.
        </p>
      </section>

      {/* Types of Buffers */}
      <section className="content-section">
        <h3>Types of Buffers</h3>

        <p>
          A buffer acts as a temporary holding area that stores data being transferred between
          the producer and consumer processes.<br /> Buffers help in managing differences in the
          speed of data production and consumption.
        </p>

        <div className="example-box">
          <p>
            <strong>Example:</strong>  Imagine a baker (producer) making pastries and a waiter (consumer) serving them to customers. The counter (buffer) between them holds the pastries until the waiter is ready to pick them up. If the counter is small, the baker must wait when it's full — this represents a bounded buffer. If the counter is endless, the baker can keep adding pastries — this represents an unbounded buffer.
          </p>
        </div>

        <h3>1. Bounded Buffer</h3>
        <ul>
          <li>This type of buffer has a fixed size</li>
          <li>
            Once the buffer is full, the producer must wait until the consumer removes some items.
            This ensures no data overflow but may slow down the producer when the buffer limit is reached.
          </li>
          <li>
            This ensures no data overflow but may slow down the producer when the buffer limit
            is reached
          </li>
        </ul>

        <h3>2. Unbounded Buffer</h3>
        <ul>
          <li>This buffer has no fixed limit on the number of items it can hold</li>
          <li>The producer can continue producing without waiting</li>
          <li>
            However, this requires more memory and can lead to inefficiency if not managed
            properly
          </li>
        </ul>

        <p>
          Buffers, therefore, act as a synchronization point — balancing the speed of data
          flow between fast producers and slower consumers.
        </p>
      </section>

      {/* Producer Consumer */}
      <section className="content-section">
        <div className="buffer-wrapper">
          {/* Bounded Buffer */}
          <div className="buffer-card bounded-card">
            <h3 className="buffer-title blue">Bounded Buffer</h3>

            <div className="buffer-box bounded-box">
              <span className="block b1" />
              <span className="block b2" />
              <span className="block b3" />
              <span className="block b4" />
              <span className="block b5" />
            </div>

            <p className="buffer-caption">
              The buffer has a <strong>fixed capacity</strong> — once full, new items must wait.
            </p>
          </div>

          {/* Unbounded Buffer */}
          <div className="buffer-card unbounded-card">
            <h3 className="buffer-title orange">Unbounded Buffer</h3>

            <div className="buffer-box unbounded-box">
              <span className="ublock u1" />
              <span className="ublock u2" />
              <span className="ublock u3" />
              <span className="ublock u4" />
              <span className="ublock u5" />
              <span className="ublock u6" />
              <span className="ublock u7" />
            </div>

            <p className="buffer-caption">
              The buffer can <strong>grow dynamically</strong> — producers never wait, but
              memory usage increases.
            </p>
          </div>
        </div>

        <p className="note">
          Notice how in the <strong>bounded buffer</strong>, items fill a limited space,
          while in the <strong>unbounded buffer</strong>, data blocks keep expanding without
          restriction.
        </p>

        <p>We will look into an example now.</p>

        <h3>Producer Consumer Problem</h3>

        <p>
          A producer process produces information that is consumed by a consumer process.
        </p>

        <ul className="pc-list">
          <li>One solution to the producer-consumer problem uses shared memory.</li>
          <li>
            To allow producer and consumer processes to run concurrently, we must have
            available a buffer of items that can be filled by the producer and emptied by
            the consumer.
          </li>
          <li>
            This buffer will reside in a region of memory that is shared by the producer and
            consumer processes.
          </li>
          <li>
            A producer can produce one item while the consumer is consuming another item.
          </li>
          <li>
            The producer and consumer must be synchronized, so that the consumer does not try
            to consume an item that has not yet been produced.
          </li>
        </ul>
      </section>

      <section className="content-section">
        {/* Producer – Shared Buffer – Consumer animation */}
        <div className="pc-anim">
          {/* Producer */}
          <div className="pc-node producer">
            Producer
            <span>Produces items</span>
          </div>

          {/* Shared Buffer */}
          <div className="shared-buffer">
            <div className="buffer-title">Shared buffer</div>

            {/* items inside buffer */}
            <span className="buf-item bi1" />
            <span className="buf-item bi2" />
            <span className="buf-item bi3" />

            {/* incoming from producer */}
            <span className="flow in1" />
            <span className="flow in2" />

            {/* outgoing to consumer */}
            <span className="flow out1" />
          </div>

          {/* Consumer */}
          <div className="pc-node consumer">
            Consumer
            <span>Consumes items</span>
          </div>
        </div>

        {/* Text below animation */}
        <p className="below-text">
          Apart from shared memory, programs can also communicate through message passing,
          which is the next concept we will explore.
        </p>
      </section>

      {/* Message Passing Systems */}
      <section className="content-section">
        <h3>Message Passing Systems</h3>

        <p>
          Imagine you and your friends are working in separate offices within a larger
          building. Each office is isolated from the others, and you can't directly interact
          with your friends' workspaces unless you use a specific method to communicate.
        </p>
        <p>Let's jump into the concept now.</p>

        <p>
          Message passing is a method of communication used in operating systems where
          processes exchange information through messages rather than sharing memory. This
          approach is particularly useful in distributed systems or when processes do not
          share the same address space.
        </p>

        <div className="mp-wrapper">
          {/* Process A */}
          <div className="mp-process left">
            Process A
            <span>Sends messages</span>
          </div>

          {/* Kernel */}
          <div className="mp-kernel">
            Kernel (Messenger)

            {/* Red packets */}
            <span className="packet red r1" />
            <span className="packet red r2" />
            <span className="packet red r3" />

            {/* Green packets */}
            <span className="packet green g1" />
            <span className="packet green g2" />
            <span className="packet green g3" />
          </div>

          {/* Process B */}
          <div className="mp-process right">
            Process B
            <span>Receives messages</span>
          </div>
        </div>

        <h3>How Message Passing Works</h3>

        <p>Message passing involves two key operations:</p>

        <ul>
          <li>
            <strong>Send:</strong> A process sends a message to another process
          </li>
          <li>
            <strong>Receive:</strong> The receiving process fetches the message from its
            mailbox or queue
          </li>
        </ul>

        <p>The messages typically contain:</p>

        <ul>
          <li>
            <strong>Data:</strong> Information the sender wants to communicate
          </li>
          <li>
            <strong>Metadata:</strong> Information like the sender's address, priority, and
            message type
          </li>
        </ul>

        <div className="info-box">
          <p><strong>Message Size:</strong></p>
          <ul>
            <li>
              <strong>Fixed size:</strong> The system-level implementation is straightforward,
              but it makes the task of programming more difficult
            </li>
            <li>
              <strong>Variable size:</strong> Requires a more complex system-level
              implementation, but the programming task becomes simpler
            </li>
          </ul>
        </div>

        <p>
          A communication link must be established between two processes. There are several
          issues related to features like:
        </p>

        <ul>
          <li>
            <strong>Naming:</strong> Processes need a way to identify and communicate with each
            other
          </li>
          <li>
            <strong>Synchronization:</strong> Ensures that the sender and receiver coordinate
            properly so that no data is lost or processed incorrectly
          </li>
          <li>
            <strong>Buffering:</strong> Refers to how messages are stored while waiting to be
            transferred between processes
          </li>
        </ul>
        <p>Now, let's explore each one of them.</p>
      </section>

      <section className="content-section">
        <h3>1. Naming</h3>

        <p>
          Here we have direct and indirect communication. Let's look into each one of them.
        </p>

        <h3>1. Direct Communication</h3>

        <p>
          Each process that wants to communicate must explicitly name the recipient
          or sender of the communication. This process can be described with the
          following operations:
        </p>

        <div className="code-box">
          <p><code>send (P, message)</code> - Send a message to process P.</p>
          <p><code>receive (Q, message)</code> - Receive a message from process Q.</p>
        </div>

        <p>A communication link in this scheme has the following properties:</p>

        <ul>
          <li>
            A link is established automatically between every pair of processes that want to communicate.
            The processes need to know only each other's identity to communicate.
          </li>
          <li>A link is associated with exactly two processes.</li>
          <li>Between each pair of processes, there exists exactly one link.</li>
        </ul>

        <p>
          This scheme exhibits symmetry in addressing; that is, both the sender process
          and the receiver process must name the other to communicate.
        </p>

        <h4>Another Variant of Direct Communication</h4>

        <p>
          Here, only the sender names the recipient; the recipient is not required
          to name the sender. This scheme employs asymmetry in addressing.
        </p>

        <div className="code-box">
          <p><code>send (P, message)</code> - Send a message to process P.</p>
          <p>
            <code>receive (id, message)</code> - Receive a message from any process;
            the variable id is set to the name of the process with which communication has taken place.
          </p>
        </div>

        <p>
          The disadvantage in both of these schemes (symmetric and asymmetric)
          is the limited modularity of the resulting process definitions.
        </p>

        <h3>2. Indirect Communication</h3>

        <p>
          Processes send and receive messages via an intermediate mailbox or port.
          A mailbox can be viewed abstractly as an object into which messages can be
          placed by processes and from which messages can be removed. Each mailbox
          has unique identification. Two methods can communicate only if the processes
          have a shared mailbox.
        </p>

        <div className="code-box">
          <p><code>send(A, message)</code> — Send a message to mailbox A.</p>
          <p><code>receive(A, message)</code> — Receive a message from mailbox A.</p>
        </div>

        <p>A communication link in this scheme has the following properties:</p>

        <ul>
          <li>
            A link is established between a pair of processes only if both members
            of the pair have a shared mailbox.
          </li>
          <li>A link may be associated with more than two processes.</li>
          <li>
            Between each pair of communicating processes, there may be several
            different links, with each link corresponding to one mailbox.
          </li>
        </ul>

        <p>
          Now that we've covered naming and how processes identify and communicate
          with each other, let's move on to the next key aspect, <strong>Synchronization</strong>.
        </p>

        <h3>2. Synchronization</h3>

        <p>
          Message passing may be either blocking or nonblocking also known as
          synchronous and asynchronous.
        </p>

        <ul>
          <li>
            <strong>**Blocking send:</strong> The sending process is blocked until the
            message is received by the receiving process or by the mailbox.
          </li>
          <li>
            <strong>Nonblocking send:</strong> The sending process sends the message
            and resumes operation.
          </li>
          <li>
            <strong>Blocking receive:</strong> The receiver blocks until a message is available.
          </li>
          <li>
            <strong>Non-Blocking receive:</strong> The receiver retrieves either a
            valid message or a null.
          </li>
        </ul>

        <p>Now, let's get into buffering.</p>

        <h3>3. Buffering</h3>

        <p>
          Whether communication is direct or indirect, messages exchanged by
          communicating processes reside in a temporary queue. Basically, such
          queues can be implemented in three ways.
        </p>

        <p>
          In operating systems, buffering plays an essential role in message
          communication between processes. It provides a temporary holding place
          where messages are stored before they are delivered to the receiving process.
        </p>

        <p>
          The size and behavior of this buffer determine how the sender and receiver
          interact with each other.
        </p>

        <div className="example-box">
          Think of it like an online order system: when too many customers place
          orders (messages), the system queues them up until a delivery partner
          (receiver) is available to process each one. Similarly, in IPC, a buffer
          prevents message loss and synchronizes communication.
        </div>

        <h3>1. Zero Capacity Buffer (No Queue)</h3>
        <ul>
          <p>In this case, the buffer cannot hold any message.<br />
            The sender must wait until the receiver is ready to receive the message immediately.<br />
            This is called rendezvous communication, meaning both sender and receiver must be active simultaneously.</p>
        </ul>

        <h3>2. Bounded Capacity Buffer (Finite Queue)</h3>
        <ul>
          <p>Here, the buffer has a limited size.<br />
            The sender can send messages up to the buffer’s capacity.<br />
            When the buffer is full, the sender must wait until the receiver removes a message from it, freeing up space.</p>
        </ul>

        <h3>3. Unbounded Capacity Buffer (Infinite Queue)</h3>
        <ul>
          <p>In this case, the buffer size is assumed to be unlimited.<br />
            The sender never has to wait; it can keep sending messages continuously.<br />
            The receiver takes messages from the queue at its own pace.<br />
            While this prevents blocking, it may lead to excessive memory usage if messages accumulate too fast.</p>
        </ul>

        <p>
          Buffers help maintain synchronization and smooth data flow between processes.<br />
          The choice of buffer type depends on the system’s resource constraints and
          the level of synchronization required.
        </p>
      </section>

      <section className="buffer-capacity-section">
        <div className="capacity-wrapper">
          {/* Zero Capacity */}
          <div className="capacity-card zero">
            <h3>Zero Capacity</h3>
            <div className="capacity-box zero-box">
              <span className="zero-dot" />
            </div>
          </div>

          {/* Bounded Capacity */}
          <div className="capacity-card bounded">
            <h3>Bounded Capacity</h3>
            <div className="capacity-box bounded-box">
              <span className="dot b1" />
              <span className="dot b2" />
              <span className="dot b3" />
              <span className="dot b4" />
            </div>
          </div>

          {/* Unbounded Capacity */}
          <div className="capacity-card unbounded">
            <h3>Unbounded Capacity</h3>
            <div className="capacity-box unbounded-box">
              <span className="dot u1" />
              <span className="dot u2" />
              <span className="dot u3" />
              <span className="dot u4" />
              <span className="dot u5" />
              <span className="dot u6" />
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="content-section">
        <h2>Summary</h2>

        <p>
          These three buffering methods demonstrate how operating systems manage message
          queues — from tightly synchronized systems (zero capacity) to flexible and scalable
          systems (unbounded capacity).
        </p>

        <p>And that wraps up the lesson!</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_fileswrap3.gif" alt="" />
      </section>

      <section className="content-section">
        <h3>Mind Map</h3>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Shared+memory+and+Message+passing+Systems.svg" alt="" />
      </section>

      {/* Bonus */}
      <section className="content-section">
        <h3>Bonus Content</h3>
        <p>For learners who want to explore the topics covered, here are some additional resources:</p>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <p>We will add soon</p>
      </section>

      <Quiz
        title="Module 1.11 Quiz: IPC Systems"
        questions={[
          {
            question: "What is the main advantage of Shared Memory over Message Passing?",
            options: ["It is easier to program", "It is faster for large data transfers on the same machine", "It doesn't need synchronization", "It works better over a network"],
            correctAnswer: 1,
            explanation: "Shared memory allows direct access to data without constant kernel involvement, making it very efficient for local IPC."
          },
          {
            question: "In the Producer-Consumer problem, a 'Bounded Buffer' means:",
            options: ["The buffer can grow forever", "The buffer has a fixed size and the producer must wait if it's full", "The buffer is only for integers", "The buffer is deleted after use"],
            correctAnswer: 1,
            explanation: "A bounded buffer has a limit (N items); producers are blocked if they try to add to a full buffer."
          },
          {
            question: "What is 'Rendezvous' communication?",
            options: ["Communication via a shared file", "Direct communication with a zero-capacity buffer (both must be ready)", "Communication between a Parent and a Child process only", "Sending messages to an unknown recipient"],
            correctAnswer: 1,
            explanation: "Rendezvous occurs when there is no buffer (zero capacity), requiring the sender and receiver to synchronize at the exact moment of transfer."
          },
          {
            question: "What is the difference between Direct and Indirect Communication in message passing?",
            options: ["Direct names the process, Indirect uses a mailbox/port", "Direct uses memory, Indirect uses a disk", "Direct is faster, Indirect is more secure", "There is no difference"],
            correctAnswer: 0,
            explanation: "Direct communication requires specific IDs (e.g., send to Process B), while indirect communication sends messages to a shared mailbox."
          },
          {
            question: "Which type of 'receive' operation allows a process to continue even if no message is available?",
            options: ["Blocking receive", "Non-blocking receive", "Sync receive", "Direct receive"],
            correctAnswer: 1,
            explanation: "A non-blocking receive (asynchronous) returns either a message or a null value immediately, without waiting."
          }
        ]}
        subject="OS"
        unitId={1}
        moduleId={7}
      />

      <style jsx>{`
        .shared-mem-anim {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          margin: 24px 0 36px;
          flex-wrap: wrap;
        }

        .proc-box {
          width: 120px;
          height: 80px;
          border-radius: 10px;
          background: #8fd3ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          color: #133c5c;
        }

        .right-procs {
          display: flex;
          gap: 16px;
        }

        .shared-box {
          width: 260px;
          height: 90px;
          border-radius: 10px;
          border: 2px dashed #ff9800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          position: relative;
          background: #fff;
          color: #1f3b5b;
        }

        .ball {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ff3d00;
        }

        .b1 { animation: move1 2.8s linear infinite; }
        .b2 { animation: move2 3s linear infinite; }
        .b3 { animation: move3 3.2s linear infinite; }

        @keyframes move1 {
          0%   { left: 10%; top: 30%; }
          50%  { left: 70%; top: 25%; }
          100% { left: 10%; top: 30%; }
        }

        @keyframes move2 {
          0%   { left: 35%; top: 60%; }
          50%  { left: 75%; top: 55%; }
          100% { left: 35%; top: 60%; }
        }

        @keyframes move3 {
          0%   { left: 60%; top: 40%; }
          50%  { left: 20%; top: 45%; }
          100% { left: 60%; top: 40%; }
        }

        .shared-mem-rw {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          margin: 32px 0 24px;
          flex-wrap: wrap;
        }

        .proc-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .proc {
          width: 120px;
          height: 120px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
        }

        .blue { background: #4fc3f7; }
        .greenBox { background: #81c784; }
        .orangeBox { background: #ffb74d; }

        .proc-caption {
          font-size: 14px;
          color: #333;
          text-align: center;
        }

        .shared-core {
          width: 260px;
          height: 140px;
          border-radius: 16px;
          border: 4px solid #ffa000;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #fff;
          box-shadow: 0 0 0 6px rgba(255,160,0,0.15);
        }

        .shared-title {
          font-weight: 600;
          color: #ff9800;
          font-size: 16px;
        }

        .data {
          position: absolute;
          width: 32px;
          height: 20px;
          border-radius: 6px;
          opacity: 0.9;
        }

        .red {
          background: #ff8a65;
          animation: moveRed 2.6s ease-in-out infinite;
        }

        .green {
          background: #81c784;
          animation: moveGreen 2.6s ease-in-out infinite;
        }

        @keyframes moveRed {
          0%   { left: 20%; top: 18%; }
          50%  { left: 60%; top: 20%; }
          100% { left: 20%; top: 18%; }
        }

        @keyframes moveGreen {
          0%   { left: 55%; top: 65%; }
          50%  { left: 30%; top: 60%; }
          100% { left: 55%; top: 65%; }
        }

        .buffer-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin: 20px 0 22px;
        }

        .buffer-card {
          padding: 22px;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          text-align: center;
        }

        .bounded-card { background: #e8f5ff; }
        .unbounded-card { background: #fff6dd; }

        .buffer-title { margin-bottom: 12px; font-weight: 700; }
        .buffer-title.blue { color: #0b47d1; }
        .buffer-title.orange { color: #ff6f00; }

        .buffer-box {
          height: 70px;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-start;
          overflow: hidden;
        }

        .bounded-box { border: 3px solid #1e88ff; background: #cfe8ff; }
        .unbounded-box { border: 3px solid #ffa000; background: #ffeab5; }

        .block {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background: #5aa9f6;
          opacity: 0;
          animation: boundedFill 5s infinite;
        }

        .b1 { animation-delay: 0s; }
        .b2 { animation-delay: 0.5s; }
        .b3 { animation-delay: 1s; }
        .b4 { animation-delay: 1.5s; }
        .b5 { animation-delay: 2s; }

        @keyframes boundedFill {
          0% { opacity: 0; transform: scale(0.7); }
          15% { opacity: 1; transform: scale(1); }
          70% { opacity: 1; }
          100% { opacity: 0; transform: scale(0.7); }
        }

        .ublock {
          width: 34px;
          height: 34px;
          border-radius: 6px;
          background: #ffb74d;
          animation: unboundedGrow 4s infinite;
          transform-origin: left center;
        }

        .u1 { animation-delay: 0s; }
        .u2 { animation-delay: 0.4s; }
        .u3 { animation-delay: 0.8s; }
        .u4 { animation-delay: 1.2s; }
        .u5 { animation-delay: 1.6s; }
        .u6 { animation-delay: 2s; }
        .u7 { animation-delay: 2.4s; }

        @keyframes unboundedGrow {
          0%   { opacity: 0; transform: translateX(-10px) scale(0.6); }
          20%  { opacity: 1; transform: translateX(0) scale(1); }
          80%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(12px) scale(0.6); }
        }

        .pc-anim {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          margin: 26px 0 14px;
          flex-wrap: wrap;
        }

        .pc-node {
          width: 140px;
          height: 140px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          gap: 8px;
          text-align: center;
        }

        .pc-node span { font-weight: 400; font-size: 14px; opacity: 0.95; }
        .producer { background: #4fc3f7; }
        .consumer { background: #81c784; }

        .shared-buffer {
          position: relative;
          width: 320px;
          height: 140px;
          border: 4px solid #ffa000;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #ff8f00;
          box-shadow: 0 0 18px rgba(255,160,0,0.35);
          background: #fff;
          overflow: hidden;
        }

        .buf-item {
          position: absolute;
          width: 32px;
          height: 20px;
          border-radius: 6px;
          animation: floatItem 3.5s ease-in-out infinite;
          opacity: 0.9;
        }

        .bi1 { background: #ff8a65; top: 28px; left: 90px; animation-delay: 0s; }
        .bi2 { background: #66bb6a; top: 58px; left: 140px; animation-delay: 0.8s; }
        .bi3 { background: #ff7043; top: 82px; left: 120px; animation-delay: 1.6s; }

        @keyframes floatItem { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        .flow {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 6px;
          background: #ff7043;
          opacity: 0;
        }

        .in1 { left: -18px; top: 40px; animation: moveIn 3.2s linear infinite; }
        .in2 { left: -18px; top: 78px; animation: moveIn 3.2s linear infinite; animation-delay: 1.6s; }
        .out1 { right: -18px; top: 64px; background: #81c784; animation: moveOut 3.2s linear infinite; animation-delay: 0.8s; }

        @keyframes moveIn {
          0% { opacity: 0; transform: translateX(0); }
          10% { opacity: 1; }
          45% { opacity: 1; transform: translateX(150px); }
          60% { opacity: 0; transform: translateX(150px); }
          100% { opacity: 0; transform: translateX(150px); }
        }

        @keyframes moveOut {
          0% { opacity: 0; transform: translateX(0); }
          10% { opacity: 1; }
          45% { opacity: 1; transform: translateX(150px); }
          60% { opacity: 0; transform: translateX(150px); }
          100% { opacity: 0; transform: translateX(150px); }
        }

        .mp-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin: 40px 0;
          flex-wrap: wrap;
        }

        .mp-process {
          width: 170px;
          height: 170px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #fff;
          text-align: center;
        }

        .mp-process span { margin-top: 12px; font-size: 14px; font-weight: 400; }
        .left { background: #55acd6; }
        .right { background: #7fb97f; }

        .mp-kernel {
          position: relative;
          width: 380px;
          height: 170px;
          border-radius: 20px;
          border: 4px solid #ff9800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #ff9800;
          background: #f4f4f4;
          box-shadow: 0 0 25px rgba(255,152,0,0.35);
          overflow: hidden;
        }

        .packet { position: absolute; width: 42px; height: 20px; border-radius: 6px; opacity: 0.95; }
        .red { background: #ef5350; animation: redMeet 3.5s ease-in-out infinite; }
        .r1 { top: 50px; } .r2 { top: 80px; animation-delay: 0.4s; } .r3 { top: 110px; animation-delay: 0.8s; }
        .green { background: #66bb6a; animation: greenMeet 3.5s ease-in-out infinite; }
        .g1 { top: 60px; } .g2 { top: 90px; animation-delay: 0.4s; } .g3 { top: 120px; animation-delay: 0.8s; }

        @keyframes redMeet { 0% { left: 20px; } 50% { left: 160px; } 100% { left: 20px; } }
        @keyframes greenMeet { 0% { right: 20px; } 50% { right: 160px; } 100% { right: 20px; } }

        .capacity-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .capacity-card {
          padding: 24px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .capacity-box {
          height: 90px;
          border-radius: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          overflow: hidden;
        }

        .zero-box { border: 2px solid #1976d2; background: #bcd3ea; }
        .bounded-box { border: 2px solid #ff9800; background: #f3e7b0; }
        .unbounded-box { border: 2px solid #9c27b0; background: #d8b6e3; }

        .zero-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #1565c0;
          animation: zeroMove 2.5s ease-in-out infinite;
        }

        @keyframes zeroMove { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(120px); } }

        .dot { width: 22px; height: 22px; border-radius: 50%; position: relative; }
        .b1, .b2, .b3, .b4 { background: #fbc02d; animation: wave 2.5s ease-in-out infinite; }
        .b2 { animation-delay: 0.2s; } .b3 { animation-delay: 0.4s; } .b4 { animation-delay: 0.6s; }
        .u1, .u2, .u3, .u4, .u5, .u6 { background: #ab47bc; animation: wave 2.5s ease-in-out infinite; }
        .u2 { animation-delay: 0.15s; } .u3 { animation-delay: 0.3s; } .u4 { animation-delay: 0.45s; } .u5 { animation-delay: 0.6s; } .u6 { animation-delay: 0.75s; }

        @keyframes wave { 0%, 100% { transform: translateY(0); } 25% { transform: translateY(-8px); } 50% { transform: translateY(6px); } 75% { transform: translateY(-4px); } }
      `}</style>
    </div>
  );
};

export default Module1_11;
