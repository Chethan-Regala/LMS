'use client';
import React from 'react';

const Module1_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.8</div>
        <div className="lesson-title-main">
          <h1>Revisiting Arrays and Strings</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hey Kalvians, Welcome! to the lesson Revisiting Arrays!</p>
        <p>
          This lesson might seem very substantial because we have given examples for both the languages i.e, C++ and Java, so you can choose the language you prefer and follow along the examples of that same language throughout the session.
        </p>
        <p>
          Arrays: the OG data structure that holds your data like a clingy best friend — always nearby, always indexed. They store multiple elements of the same data type in back-to-back memory locations like roommates who never leave. Need fast access? Just yell their index number.
        </p>
      </section>

      <section className="content-section">
        <h3>Why Arrays Matter</h3>
        <p>Arrays are foundational because they:</p>
        <ul>
          <li>Arrays are like that loyal assistant who always knows where your stuff is (as long as you give them the right index).</li>
          <li>Access in constant time — faster than your pizza delivery.</li>
          <li>Organize your data like your mom organizes the kitchen.</li>
          <li>Form the foundation for fancier structures like lists, heaps, and whatever else computer scientists dream up at 3 AM.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Array Declaration and Initialization</h3>
        
        <h4>C++</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>int arr[5]; // Declaration</p>
          <p>int arr2[5] = {'{1, 2, 3, 4, 5}'}; // Initialization</p>
        </div>
        <p>Explanation:</p>
        <ul>
          <li>arr[5] declares an array of 5 integers with default (garbage) values.</li>
          <li>arr2[5] = {'{1, 2, 3, 4, 5}'} initializes the array with 5 values in the given order.</li>
        </ul>

        <h4>Java</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>int[] arr = new int[5]; // Declaration</p>
          <p>int[] arr2 = {'{1, 2, 3, 4, 5}'}; // Initialization</p>
        </div>
        <p>Explanation:</p>
        <ul>
          <li>new int[5] creates an array of 5 integers initialized to 0.</li>
          <li>{'{1, 2, 3, 4, 5}'} initializes the array at declaration time with specified values.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Accessing Array Elements</h3>
        
        <h4>C++</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>cout &lt;&lt; arr2[2]; // Outputs: 3</p>
        </div>
        <p>Explanation: arr2[2] accesses the 3rd element (0-based index), which is 3, and prints it.</p>

        <h4>Java</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>System.out.println(arr2[2]); // Outputs: 3</p>
        </div>
        <p>Explanation: Same as in C++. Accesses the 3rd element of the array and prints its value.</p>
      </section>

      <section className="content-section">
        <h3>Array Traversal</h3>
        
        <h4>C++</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>for (int i = 0; i &lt; 5; i++) {'{'}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; arr2[i] &lt;&lt; " ";</p>
          <p>{'}'}</p>
        </div>
        <p>Explanation: This loop iterates from 0 to 4, printing each element of the array one by one.</p>

        <h4>Java</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>for (int i = 0; i &lt; 5; i++) {'{'}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(arr2[i] + " ");</p>
          <p>{'}'}</p>
        </div>
        <p>Explanation: Same structure. Uses a for-loop to print each element in order with spaces in between.</p>
      </section>

      <section className="content-section">
        <h3>Insertion Operation</h3>
        
        <h4>C++</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>// Insert 10 at index 2</p>
          <p>int index = 2, value = 10;</p>
          <p>for (int i = 4; i &gt; index; i--) {'{'}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;arr2[i] = arr2[i - 1];</p>
          <p>{'}'}</p>
          <p>arr2[index] = value;</p>
        </div>
        <p>Explanation:</p>
        <ul>
          <li>Shifts all elements from index 2 to the right by one position.</li>
          <li>Then, it places 10 at index 2.</li>
          <li>Note: Requires free space in the array (no overflow handling here).</li>
        </ul>

        <h4>Java</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>int index = 2, value = 10;</p>
          <p>for (int i = 4; i &gt; index; i--) {'{'}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;arr2[i] = arr2[i - 1];</p>
          <p>{'}'}</p>
          <p>arr2[index] = value;</p>
        </div>
        <p>Explanation: Same logic: creates space at the desired index by shifting elements and then inserts the new value.</p>
      </section>

      <section className="content-section">
        <h3>Deletion Operation</h3>
        
        <h4>C++</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>// Delete from index 2</p>
          <p>int index = 2;</p>
          <p>for (int i = index; i &lt; 4; i++) {'{'}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;arr2[i] = arr2[i + 1];</p>
          <p>{'}'}</p>
          <p>arr2[4] = 0; // Optional cleanup</p>
        </div>
        <p>Explanation:</p>
        <ul>
          <li>Shifts elements from index 3 onward to the left.</li>
          <li>Optional: sets the last element to 0 to indicate deletion.</li>
        </ul>

        <h4>Java</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>int index = 2;</p>
          <p>for (int i = index; i &lt; 4; i++) {'{'}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;arr2[i] = arr2[i + 1];</p>
          <p>{'}'}</p>
          <p>arr2[4] = 0;</p>
        </div>
        <p>Explanation: Same process as in C++, removes the element by overwriting and shifts the rest.</p>
      </section>

      <section className="content-section">
        <h3>Multidimensional Arrays</h3>
        
        <h4>C++</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>int matrix[2][3] = {'{{'}{'{1, 2, 3}'}, {'{4, 5, 6}'}{'}}'};</p>
        </div>
        <p>Explanation: Declares a 2D array (2 rows and 3 columns) and initializes it with 6 values.</p>
        <p>Access example:</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>cout &lt;&lt; matrix[1][2]; // 6</p>
        </div>
        <p>Accesses row 1, column 2 — which holds value 6.</p>

        <h4>Java</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>int[][] matrix = {'{{'}{'{1, 2, 3}'}, {'{4, 5, 6}'}{'}}'};</p>
        </div>
        <p>Explanation: Declares a 2D array in Java using nested curly braces.</p>
        <p>Access example:</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>System.out.println(matrix[1][2]); // 6</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Real-World Applications of Arrays</h3>
        <ul>
          <li>Medical records: Like having a chart with vitals for every patient, every day.</li>
          <li>Games: Store scores, lives, and how many coins Mario grabbed.</li>
          <li>Images: Grids of colored dots — a.k.a. pixels.</li>
          <li>Finance: Stock prices, because math is money.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Common Mistakes and Debugging Tips</h3>
        <ul>
          <li><strong>Out-of-Bounds Error:</strong> Accessing index beyond array size causes crashes.</li>
          <li><strong>Uninitialized Access:</strong> May yield garbage values in C++.</li>
          <li><strong>Off-by-One Errors:</strong> Ensure loop bounds are correct (&lt; vs &lt;=).</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Complexity Analysis of Operations on Array</h3>
        <p>As we have already covered the time and space complexities, let's now review the time complexities of array operations as outlined in the provided tables.</p>
        <div>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/dsa_array_time.png" alt="Array Complexity Analysis" />
          <br />
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Data+Structures+and+Algorithms/dsa_array_space.png" alt="" />
        </div>
      </section>

      <section className="content-section">
        <p>Now that you have refreshed your understanding of arrays, we will delve into various problem-solving techniques associated with their usage in the next lesson.</p>
      </section>
    </div>
  );
};

export default Module1_8;