import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_5: React.FC = () => {
  const firstFitQuiz = [
    {
      question: "Which of the following best describes the 'First Fit' strategy?",
      options: ["It searches all blocks and picks the best match.", "It allocates the first free block in the list that is large enough.", "It always uses the largest block.", "It picks a random block every time."],
      correctAnswer: 1,
      explanation: "First Fit is 'greedy' and immediate; it stops searching as soon as it finds any hole that can accommodate the process."
    },
    {
      question: "What is the primary advantage of using First Fit compared to Best Fit?",
      options: ["It prevents all fragmentation.", "It is faster because it often doesn't need to scan the entire memory list.", "It saves battery life.", "It makes the OS look better."],
      correctAnswer: 1,
      explanation: "By stopping at the first valid hole, First Fit minimizes search time, making it very efficient for systems with frequent allocation requests."
    },
    {
      question: "If a 20 KB process encounters these blocks in order: 10 KB, 15 KB, 50 KB, 25 KB, which one will it take using First Fit?",
      options: ["10 KB", "15 KB", "50 KB", "25 KB"],
      correctAnswer: 2,
      explanation: "It skips 10 and 15 because they are too small, and grabs 50 KB because it's the first one it hits that fits (ignoring the potentially 'better' 25 KB fit later)."
    },
    {
      question: "What happens to the 'leftover' space in a block after a process is allocated using First Fit?",
      options: ["It disappears forever.", "It remains part of the process's allocation.", "It is marked as a new, smaller free block for future use.", "It is used to store system error logs."],
      correctAnswer: 2,
      explanation: "Most systems split the block, giving the process what it needs and keeping the remainder in the free-block list."
    },
    {
      question: "A major disadvantage of First Fit is that the beginning of the memory list:",
      options: ["Becomes very crowded with small unusable holes over time.", "Is never used.", "Is always empty.", "Deletes itself."],
      correctAnswer: 0,
      explanation: "Since the search always starts at the beginning, those early blocks get split and reused constantly, leading to high fragmentation at the 'front' of RAM."
    }
  ];
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.5</div>
        <div className="lesson-title-main">
          <h1>Partition Allocation Techniques (First Fit)</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Imagine you walk into a large library with shelves of different sizes. You need a shelf to place a new book, but shelves vary in space. Do you place the book on the first shelf that has enough space? Or do you search the entire library for the perfect shelf?</p>
        <p>Operating Systems deal with a similar challenge when allocating memory to processes. When a new process arrives, the OS must decide: "Which free memory block should I use?"</p>
        <p>To answer this, OS uses different partition allocation algorithms, each with unique trade-offs. In this lesson, we focus on one of the simplest and fastest strategies — First Fit.</p>

        <h3>First Fit</h3>
        <p>The First Fit algorithm is one of the simplest memory allocation strategies. When a process requests memory, First Fit scans the list of free memory blocks and picks the first block that is large enough to satisfy the request.</p>
        <p>It does not try to find the most optimal block — it simply picks the first suitable one. This makes First Fit extremely fast and efficient in many practical situations.</p>

        <h3>How First Fit Works</h3>
        <ol>
          <li>Start searching from the beginning of the free memory list.</li>
          <li>Check if the current block is large enough to hold the process.</li>
          <li>If yes → allocate the block to the process and mark the remaining part as free memory.</li>
          <li>If not → move to the next free block.</li>
          <li>If no block fits → process remains unallocated.</li>
        </ol>

        <h3>Visual Animation: How First Fit Selects a Block</h3>
        <p>Watch how First Fit scans memory from left to right and chooses the first suitable block.</p>
        <p className="font-semibold">Incoming Process Size: 22 KB</p>

        <div className="bg-gray-50 rounded-2xl p-4 md:p-8 my-6">
          <div className="text-center mb-6">
            <div className="inline-block border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800 shadow-md">Process (22 KB)</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="border-4 border-red-400 bg-red-50 p-4 rounded-2xl font-bold text-gray-700 text-center relative overflow-hidden group">
              15 KB ✗
              <div className="absolute inset-0 bg-red-100/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-red-600 font-black">TOO SMALL</span>
              </div>
            </div>
            <div className="border-4 border-emerald-500 bg-emerald-50 p-4 rounded-2xl font-bold text-gray-800 text-center relative shadow-lg scale-105">
              60 KB ✓
              <p className="text-[10px] text-emerald-600 mt-1 uppercase tracking-wider font-extrabold">First Match!</p>
            </div>
            <div className="border-4 border-gray-400 bg-gray-100 p-4 rounded-2xl font-bold text-gray-700 text-center">
              35 KB
            </div>
            <div className="border-4 border-gray-400 bg-gray-100 p-4 rounded-2xl font-bold text-gray-700 text-center">
              80 KB
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 font-medium">First Fit → selects the 60 KB block because it is the first block that can hold 22 KB.</p>
        </div>

        <h3>Detailed Example</h3>
        <p>Suppose memory has the following free blocks:</p>
        <ul>
          <li>15 KB</li>
          <li>60 KB</li>
          <li>35 KB</li>
          <li>80 KB</li>
        </ul>
        <p>A process requests 22 KB. First Fit checks:</p>
        <ul>
          <li>15 KB → too small</li>
          <li>60 KB → sufficient → allocate here</li>
        </ul>
        <p>Remaining 38 KB becomes a new free block.</p>

        <h3>Advantages of First Fit</h3>
        <ul>
          <li>Very fast allocation — it stops searching as soon as it finds a fit.</li>
          <li>Simple implementation — linear scanning, minimal overhead.</li>
          <li>Great for real-time systems where speed is more important than optimization.</li>
          <li>Often performs better than Best Fit in practical usage.</li>
        </ul>

        <h3>Disadvantages of First Fit</h3>
        <ul>
          <li><strong>External fragmentation:</strong> Many small holes get scattered across memory.</li>
          <li><strong>Internal fragmentation:</strong> If the block is slightly larger, leftover memory may be wasted.</li>
          <li><strong>Greedy strategy:</strong> Using early blocks can cause future large processes to fail even if enough space exists later.</li>
          <li><strong>Free list becomes disorganized:</strong> Frequent splitting of early blocks increases fragmentation.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">Real-World Analogy</p>
          <p className="mt-2">Imagine you are trying to park your bike in a long parking lane. Instead of checking all future spaces, you park at the first available spot that fits your bike. This is exactly how First Fit works — fast and immediate.</p>
        </div>

        <h3>Where First Fit Is Used</h3>
        <ul>
          <li>Embedded devices where simplicity is key.</li>
          <li>Real-time scheduling systems requiring quick decisions.</li>
          <li>General-purpose OS memory allocators in combination with other strategies.</li>
          <li>Dynamic allocation where memory requests frequently arrive in unpredictable order.</li>
        </ul>

        <h3>Video Reference</h3>
        <p>For clear visualization and step-by-step explanation, watch this recommended video:</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/RZ6674-mjrQ" title="First Fit algorithm in Memory Management | GeeksforGeeks" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Comparison With Other Algorithms</h3>
        <details className="bg-gray-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Click to view comparison (First Fit vs Best Fit vs Worst Fit)</summary>
          <div className="mt-4">
            <p>Comparison content will be displayed here.</p>
          </div>
        </details>

        <h3>Additional Links (Optional)</h3>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/first-fit-allocation-in-operating-systems/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">First Fit – GFG</a></li>
          <li><a href="https://www.geeksforgeeks.org/program-first-fit-algorithm-memory-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">First Fit Program – GFG</a></li>
          <li><a href="https://medium.com/@memory-allocation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Memory Allocation – Medium</a></li>
        </ul>

        <Quiz
          title="Module 4.5 Quiz: First Fit Strategy"
          questions={firstFitQuiz}
          subject="OS"
          unitId={4}
          moduleId={5}
        />

        <p className="mt-4">With a solid understanding of First Fit, you are now ready to compare its performance with Best Fit, Worst Fit, and Next Fit in memory-intensive scenarios.</p>
        <p>Now let&apos;s try to implement the First Fit algorithm in the upcoming assignment.</p>
      </section>
    </div>
  );
};

export default Module4_5;
