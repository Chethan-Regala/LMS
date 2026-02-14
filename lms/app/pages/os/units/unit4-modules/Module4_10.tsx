import React, { useState, useEffect } from 'react';
import Quiz from '../../components/Quiz';

const Module4_10: React.FC = () => {
  const fifoQuiz = [
    {
      question: "What is the primary logic of the FIFO page replacement algorithm?",
      options: ["It replaces the page that was used most recently.", "It replaces the page that has been in memory for the longest time.", "It replaces the page that is least likely to be used again.", "It replaces the smallest page."],
      correctAnswer: 1,
      explanation: "FIFO (First-In-First-Out) uses a simple queue to keep track of the order pages entered RAM, evicting the 'oldest' one first."
    },
    {
      question: "Which of the following is a major disadvantage of FIFO?",
      options: ["It is too complex to implement.", "It requires a lot of extra CPU power.", "It may evict a heavily used page just because it arrived earlier.", "It only works with 3 frames of RAM."],
      correctAnswer: 2,
      explanation: "FIFO doesn't care how often a page is being hit; it only cares about when it arrived. A very popular page might be evicted if it's been in RAM a long time."
    },
    {
      question: "What is 'Belady's Anomaly'?",
      options: ["A bug where the computer shuts down unexpectedly.", "A situation where increasing the number of physical frames increases the number of page faults.", "A condition where pages are too small to be used.", "A strategy for speeding up the hard drive."],
      correctAnswer: 1,
      explanation: "Counter-intuitively, for certain reference strings under FIFO, giving the system MORE RAM (frames) actually results in MORE page faults."
    },
    {
      question: "For a system with 3 empty frames and a reference string '1, 2, 3, 4', which page is evicted when '4' arrives?",
      options: ["1", "2", "3", "None"],
      correctAnswer: 0,
      explanation: "Page '1' was the first to enter, so it sits at the head of the FIFO queue and is the first to be replaced."
    },
    {
      question: "Which data structure is most commonly used to implement FIFO?",
      options: ["Stack", "Linked List", "Queue", "Binary Tree"],
      correctAnswer: 2,
      explanation: "A queue perfectly models First-In-First-Out behavior, where new items are added to the tail and evicted items are removed from the head."
    }
  ];
  const [step, setStep] = useState(0);
  const references = [7, 0, 1, 2, 0, 3, 0, 4];
  const frames = 3;
  const steps = [
    { ref: 7, queue: [7], faults: 1, hit: false },
    { ref: 0, queue: [7, 0], faults: 2, hit: false },
    { ref: 1, queue: [7, 0, 1], faults: 3, hit: false },
    { ref: 2, queue: [0, 1, 2], faults: 4, hit: false, evicted: 7 },
    { ref: 0, queue: [0, 1, 2], faults: 4, hit: true },
    { ref: 3, queue: [1, 2, 3], faults: 5, hit: false, evicted: 0 },
    { ref: 0, queue: [2, 3, 0], faults: 6, hit: false, evicted: 1 },
    { ref: 4, queue: [3, 0, 4], faults: 7, hit: false, evicted: 2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = steps[step];

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.10</div>
        <div className="lesson-title-main">
          <h1>Page Replacement Algorithm: FIFO</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">❓ Question</p>
          <p className="mt-2">When all memory frames are full and a new page arrives, how does the operating system decide which page must be removed? This decision is made using page replacement algorithms.</p>
        </div>

        <h3>Page Replacement Algorithms and FIFO</h3>
        <p>Page replacement algorithms determine which page to remove from memory when a new page must be loaded but all frames are occupied. The goal is to minimize the number of page faults (times the system must load pages from disk), since page faults are expensive in terms of time.</p>
        <p><strong>FIFO (First-In, First-Out)</strong> is one of the simplest page replacement policies. It treats pages in memory as entries in a queue: the page that was loaded earliest is the first candidate for eviction when space is needed.</p>
        <p>The FIFO policy does not consider how often or how recently a page was used. It only uses insertion order. This simplicity makes FIFO easy to implement, but it can produce suboptimal behavior for some access patterns.</p>
        <p>Now you will learn the fundamentals of page replacement algorithms and the FIFO algorithm in detail.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/FWoMSiMep80" title="Lec28 Page replacement Introduction| FIFO page replacement algorithm with example| Operating System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <p>Memory is divided into fixed-size frames and a process&apos;s address space is divided into pages of the same size. When a process accesses a page that is not currently in memory, the CPU triggers a page fault. The OS must load the requested page into a physical frame. If there is no free frame, the OS uses a page replacement algorithm to select a victim page to evict.</p>
        <p>A good page replacement algorithm tries to minimize page faults by choosing a victim that is least likely to be needed soon. Different algorithms use different heuristics: FIFO uses arrival order, Least Recently Used (LRU) uses recency, and Optimal (Belady&apos;s optimal) uses future knowledge (theoretical).</p>

        <h3>Why replacement policy matters</h3>
        <p>Page faults cause disk I/O which is orders of magnitude slower than RAM access. Excessive page faults lead to thrashing, where the system spends most of its time swapping pages in and out rather than executing useful work. The replacement policy directly affects the rate of page faults under various reference patterns.</p>

        <h3>How FIFO Works (Operational Steps)</h3>
        <ol>
          <li><strong>Step 1:</strong> New page request causes a page fault if not in frames.</li>
          <li><strong>Step 2:</strong> If a free frame exists, load page into it; otherwise select the page at queue head as victim.</li>
          <li><strong>Step 3:</strong> Evict victim page, write back if dirty, and enqueue the new page at the tail.</li>
        </ol>

        <h3>Complexity analysis</h3>
        <p>Time complexity per reference depends on membership check for &quot;p in frames&quot;. With a hash set or boolean array for the address space, this can be O(1) average, making each step O(1) and the entire simulation O(n) for n references. Space complexity is O(F) for the queue and O(A) or O(F) for the membership/map (A is address space or use a hash map for only loaded pages).</p>

        <h3>FIFO Example (step-by-step with reasoning)</h3>
        <p><strong>Reference string:</strong> 7 0 1 2 0 3 0 4</p>
        <p><strong>Frames:</strong> 3</p>

        <div className="bg-gray-50 rounded-2xl p-4 md:p-8 my-6">
          <div className="text-center mb-6">
            <div className="inline-block border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800 shadow-lg">
              Next Request: <span className="text-blue-600 ml-2">{current.ref}</span>
              <span className={`ml-4 px-3 py-1 rounded-full text-xs uppercase tracking-widest ${current.hit ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                {current.hit ? 'HIT' : 'FAULT'}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {current.queue.map((page, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="border-4 border-emerald-500 bg-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl font-black text-xl md:text-2xl text-gray-800 shadow-md">
                  {page}
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-2 uppercase">Frame {idx}</span>
              </div>
            ))}
          </div>
          {current.evicted !== undefined && (
            <div className="bg-red-50 border-2 border-red-200 p-3 rounded-xl max-w-xs mx-auto mb-4 animate-bounce">
              <p className="text-center text-xs text-red-600 font-extrabold uppercase">👋 Evicted: Page {current.evicted}</p>
            </div>
          )}
          <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Total Faults</p>
              <p className="text-2xl font-black text-gray-800">{current.faults}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Frame Limit</p>
              <p className="text-2xl font-black text-gray-800">{frames}</p>
            </div>
          </div>
        </div>

        <h4>Walkthrough:</h4>
        <ol>
          <li>Request 7. Frames empty. Load 7. Fault count = 1. Queue = [7].</li>
          <li>Request 0. Free frame. Load 0. Fault count = 2. Queue = [7,0].</li>
          <li>Request 1. Free frame. Load 1. Fault count = 3. Queue = [7,0,1].</li>
          <li>Request 2. No free frame. Dequeue 7 (oldest), evict 7, load 2. Fault count = 4. Queue = [0,1,2].</li>
          <li>Request 0. 0 is present. Hit. Fault count = 4. Queue unchanged.</li>
          <li>Request 3. Evict 0 (head of queue), load 3. Fault count = 5. Queue = [1,2,3].</li>
          <li>Request 0. Evict 1, load 0. Fault count = 6. Queue = [2,3,0].</li>
          <li>Request 4. Evict 2, load 4. Fault count = 7. Queue = [3,0,4].</li>
        </ol>
        <p><strong>Total page faults = 7.</strong></p>

        <h3>Belady&apos;s Anomaly</h3>
        <p>Belady&apos;s Anomaly is a phenomenon where increasing the number of frames leads to an increase in page faults for some reference strings under certain algorithms, most notably FIFO. This is counterintuitive: more memory should not make performance worse, but because FIFO uses only arrival order, it can evict pages that would otherwise be useful, and increasing frames can change the eviction sequence unfavorably.</p>
        <p><strong>Example illustrating the anomaly:</strong> For some reference string R, with F frames FIFO produces X faults; with F+1 frames FIFO produces Y faults where Y &gt; X. The exact string is constructed to force FIFO&apos;s queue ordering to behave poorly when capacity increases. The key point is that FIFO&apos;s eviction decision ignores usage patterns, so the sequence of evictions changes with different capacities.</p>

        <h4>Why FIFO is susceptible</h4>
        <ul>
          <li>FIFO only tracks insertion order and not recency or frequency of use.</li>
          <li>When frame count changes, the insertion/eviction timeline shifts; pages that would have been retained with fewer frames may be evicted earlier when more frames are available, causing more faults later.</li>
          <li>Algorithms that use recency (LRU) or frequency information are not subject to Belady&apos;s anomaly in the same way.</li>
        </ul>

        <h3>Pros and cons of FIFO</h3>
        <h4>Pros</h4>
        <ul>
          <li>Simple to implement using a queue.</li>
          <li>Deterministic behavior and low overhead.</li>
        </ul>

        <h4>Cons</h4>
        <ul>
          <li>Can evict pages that are still heavily used.</li>
          <li>Subject to Belady&apos;s anomaly: more frames can sometimes increase faults.</li>
          <li>Not adaptive to actual access patterns.</li>
        </ul>

        <h3>Comparison to other algorithms</h3>
        <p>LRU (Least Recently Used) evicts the page that has not been used for the longest time, which often performs better than FIFO on typical workloads because it approximates the working set. The Optimal algorithm evicts the page that will not be used for the longest time in the future; it gives the lower bound on faults but is not implementable in practice because it requires future knowledge.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/lfOOkEZLG-w" title="Lec30 Belady&#39;s Anomaly in FIFO page replacement algorithm with example | Operating System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <Quiz
          title="Module 4.10 Quiz: FIFO Page Replacement"
          questions={fifoQuiz}
          subject="OS"
          unitId={4}
          moduleId={10}
        />
      </section>
    </div>
  );
};

export default Module4_10;
