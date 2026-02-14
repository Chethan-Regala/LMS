import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_3: React.FC = () => {
  const bestFitQuiz = [
    {
      question: "What is the primary characteristic of the 'Best Fit' allocation strategy?",
      options: ["It picks the first block that fits.", "It picks the largest available block.", "It picks the smallest block that is large enough to hold the process.", "It picks a random block."],
      correctAnswer: 2,
      explanation: "Best Fit aims to minimize wasted space by finding the 'tightest' fit for a process, although it requires checking every available block."
    },
    {
      question: "Why is Best Fit generally slower than First Fit?",
      options: ["Because it uses more RAM.", "Because it must scan the entire list of free blocks to find the smallest suitable one.", "Because it requires a faster CPU.", "Because it deletes files during the search."],
      correctAnswer: 1,
      explanation: "While First Fit stops as soon as it finds any adequate hole, Best Fit must check every hole to ensure it has found the absolute best match."
    },
    {
      question: "For a process of 20 KB, which block will Best Fit choose among these options: 50 KB, 30 KB, 100 KB, 22 KB?",
      options: ["50 KB", "30 KB", "100 KB", "22 KB"],
      correctAnswer: 3,
      explanation: "22 KB is the smallest available block that can still accommodate the 20 KB process, leaving only 2 KB of leftover space."
    },
    {
      question: "What is a long-term disadvantage of the Best Fit algorithm?",
      options: ["It makes the computer run out of power faster.", "It creates many tiny, unusable holes (external fragmentation) over time.", "It only works for large processes.", "It makes the OS unstable."],
      correctAnswer: 1,
      explanation: "By always picking the tightest fit, Best Fit often leaves behind very small fragments of memory that are too tiny for most future processes to use."
    },
    {
      question: "In the 'Real-World Analogy' provided, what does the small car represent?",
      options: ["The Operating System.", "A memory block.", "A process.", "The hard drive."],
      correctAnswer: 2,
      explanation: "The car represents a process looking for a memory slot (parking space) that fits its size exactly."
    }
  ];
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.3</div>
        <div className="lesson-title-main">
          <h1>Partition Allocation Techniques (Best Fit)</h1>
        </div>
      </div>

      <section className="content-section">
        <p>In this lesson, we will explore the memory allocation technique called Best Fit and understand how it helps the OS place processes efficiently in free memory blocks. This strategy is widely used in dynamic partitioning systems where memory blocks have variable sizes.</p>

        <h3>Partition Allocation Algorithms</h3>
        <p>Operating Systems use various strategies to decide where a process should be placed in memory. These strategies scan the available free blocks and choose a suitable one.</p>
        <ul>
          <li>Best Fit</li>
          <li>Worst Fit</li>
          <li>First Fit</li>
          <li>Next Fit</li>
          <li>Quick Fit</li>
        </ul>
        <p>In this lesson, we will focus entirely on Best Fit.</p>

        <h3>Best Fit</h3>
        <p>Best Fit is a memory allocation strategy that aims to minimize internal fragmentation by choosing the block that most closely matches the process&apos;s required size.</p>
        <p>It scans the entire list of free memory blocks and selects the smallest block that is large enough to hold the process.</p>
        <p>Watch how a process moves through memory blocks and chooses the smallest suitable one.</p>

        <div className="bg-gray-50 rounded-2xl p-4 md:p-8 my-6">
          <div className="text-center mb-6">
            <div className="inline-block border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800 shadow-md">Process (18 KB)</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="border-4 border-gray-400 bg-gray-100 p-4 rounded-2xl font-bold text-gray-700 text-center relative overflow-hidden group">
              45 KB
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-400"></div>
            </div>
            <div className="border-4 border-emerald-500 bg-emerald-50 p-4 rounded-2xl font-bold text-gray-800 text-center relative shadow-lg scale-105">
              20 KB ✓
              <p className="text-[10px] text-emerald-600 mt-1 uppercase tracking-wider font-extrabold">Best Fit!</p>
            </div>
            <div className="border-4 border-gray-400 bg-gray-100 p-4 rounded-2xl font-bold text-gray-700 text-center">
              100 KB
            </div>
            <div className="border-4 border-gray-400 bg-gray-100 p-4 rounded-2xl font-bold text-gray-700 text-center">
              35 KB
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 font-medium">The process scans every block... and finally chooses the 20 KB block since it is the smallest that fits.</p>
        </div>

        <h3>How Best Fit Works</h3>
        <ol>
          <li>Scan all free blocks in memory to check which ones can fit the process.</li>
          <li>Among the suitable blocks, choose the block with the least leftover space after allocation.</li>
          <li>Split the chosen block into:
            <ul>
              <li>one part allocated to the process</li>
              <li>one leftover part (if any) added back to free memory</li>
            </ul>
          </li>
          <li>If no block is large enough → allocation fails.</li>
        </ol>

        <h3>Internal Fragmentation in Best Fit</h3>
        <p>Best Fit minimizes leftover space, but small unusable holes may still form. Over time, these holes accumulate, increasing memory fragmentation.</p>

        <h3>Advantages of Best Fit</h3>
        <ul>
          <li>Allocates blocks that leave the least unused space.</li>
          <li>Reduces internal fragmentation compared to First Fit or Worst Fit.</li>
          <li>Makes efficient use of available memory for small processes.</li>
        </ul>

        <h3>Disadvantages of Best Fit</h3>
        <ul>
          <li>Requires scanning the entire memory list (slower).</li>
          <li>Leads to external fragmentation over time due to many small holes.</li>
          <li>Performance decreases as memory becomes fragmented.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">Real-World Analogy</p>
          <p className="mt-2">Think of a parking lot with many free spaces. A small car arrives, and instead of choosing the first available spot, it searches for the smallest spot it can fit into. This ensures large spaces remain free for bigger cars.</p>
        </div>

        <h3>Why Use Best Fit?</h3>
        <p>Modern systems often use variations of Best Fit because it keeps memory cleaner for longer, especially when dealing with many small processes. Cloud systems, VM hypervisors, embedded systems, and real-time OSes often benefit from such optimal placement.</p>

        <h3>When Best Fit Performs Best</h3>
        <ul>
          <li>Workloads with lots of small processes.</li>
          <li>Systems where memory usage needs to be tightly optimized.</li>
          <li>Scenarios where fragmentation cleanup (compaction) is enabled.</li>
        </ul>
        <p>Best Fit is excellent at saving space but slow when memory is highly fragmented. This is why some systems combine Best Fit with compaction.</p>

        <h3>Implementation Reference</h3>
        <p>You can view a working implementation of the Best Fit algorithm here:</p>
        <p><a href="https://www.geeksforgeeks.org/program-best-fit-algorithm-memory-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Best Fit Implementation – GeeksforGeeks</a></p>

        <h3>Additional Links (Optional)</h3>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/best-fit-allocation-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Best-Fit Allocation – GFG</a></li>
          <li><a href="https://medium.com/@contiguous-memory-allocation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Contiguous Memory Allocation – Medium</a></li>
          <li><a href="https://prepinsta.com/operating-systems/best-fit-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Best Fit Algorithm – PrepInsta</a></li>
        </ul>

        <Quiz
          title="Module 4.3 Quiz: Best Fit Strategy"
          questions={bestFitQuiz}
          subject="OS"
          unitId={4}
          moduleId={3}
        />

        <p className="mt-4">With a strong understanding of Best Fit, you are now ready to analyze and compare allocation strategies like First Fit, Worst Fit, and Next Fit in the upcoming lessons.</p>
        <p>Now, let&apos;s try to implement the best fit algorithm in the assignment below.</p>
      </section>
    </div>
  );
};

export default Module4_3;
