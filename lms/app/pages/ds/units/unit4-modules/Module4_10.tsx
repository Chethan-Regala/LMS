'use client';
import React from 'react';

const Module4_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.10</div>
        <div className="lesson-title-main">
          <h1>Introduction to Hash Maps and Hash Tables</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi There!</p>
        <p>
          In our last session, we explored how to invert a Binary Tree. Today, let's shift our focus and explore a new type of data structure that is not based on sequential or hierarchical ordering, but on mapping specific keys to values to achieve lightning-fast retrieval.
        </p>
        <p>Let's start with a problem statement today.</p>
      </section>

      <section className="content-section">
        <h3>The Problem: The University Database</h3>
        <p>
          Imagine you have been hired to build the backend system for your university. You have a list of 10,000 students. Each student has a unique alphanumeric roll number (e.g., "BT2024001") and a corresponding CGPA.
        </p>
        <p>
          Your task is to write a function that, given a roll number, retrieves the student's CGPA.
        </p>
        <p className="mt-4">
          <strong>Attempt 1 (Arrays/Lists):</strong> If you store students in a List, you have to loop through the list to find the roll number. In the worst case, this takes O(n) time. If you have millions of students, this is too slow.
        </p>
        <p className="mt-4">
          <strong>Attempt 2 (Arrays with Indices):</strong> You could try to use the roll number as an index in an array: grades[rollNumber]. But wait—array indices must be integers. You cannot use "BT2024001" as an index.
        </p>
        <p className="mt-4">
          <strong>The Solution:</strong> We need a way to turn that alphanumeric roll number into an index, allowing us to jump directly to the data without searching. This is exactly what a Hash Map allows us to do.
        </p>
      </section>

      <section className="content-section">
        <h3>What is a HashMap?</h3>
        <p>
          A HashMap is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a technique called hashing to compute an index into an array of buckets or slots, from which the desired value can be found.
        </p>
        <h4 className="font-semibold mt-4">Why is it needed?</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Speed:</strong> It provides constant time complexity, O(1), for basic operations (insertion, deletion, and retrieval) on average.</li>
          <li><strong>flexibility:</strong> Unlike arrays, keys don't have to be integers. They can be strings, objects, or any hashable type.</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            💡 <strong>Do you know?</strong> In Python, this structure is called a Dictionary, in C++ it is an unordered_map, and in JavaScript, it is technically an Object or Map. The underlying concept remains the same across all languages!
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Creating a HashMap in C++</h3>
        <p>
          In C++, we use the Standard Template Library (STL). The class is called unordered_map because, unlike a regular map (which uses a tree and is sorted), this one uses hashing and is not sorted.
        </p>
        <p className="mt-4">
          Here, we are initializing a map to store Student Names (Strings) as keys and their Marks (Integers) as values.
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Importing the necessary libraries
#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

// Creating a HashMap (unordered_map)
unordered_map<string, int> studentGrades;`}</pre>
        </div>

        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">How to do this in Java: Click to expand</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`// Importing the necessary class
import java.util.HashMap;

// Creating a HashMap
HashMap<String, Integer> studentGrades = new HashMap<>();    // Yes, it's that simple!`}</pre>
          </div>
        </details>

        <p className="mt-4">
          Let's attempt to conceptualize this idea by examining its theoretical implications. This video will also present a straightforward formula in case you're interested in constructing your own function for generating a HashMap.
        </p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/WEILxTBDy0Y" title="Visualizing a HashMap" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>Now, let's take a look at some of the core operations of HashMaps.</p>
      </section>

      <section className="content-section">
        <h3>Core Operations</h3>
        <p>Once created, we interact with the map using specific STL methods and operators.</p>

        <h4 className="font-semibold mt-4">1. Add (Insert)</h4>
        <p><strong>Context:</strong> We can add elements using the array subscript operator [] or the insert function. The [] operator is easier and more common.</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Method 1: Using [] operator (Syntactic sugar)
studentGrades["Alice"] = 90;

// Method 2: Using insert with a pair
studentGrades.insert({"Bob", 85});`}</pre>
        </div>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">How to do this in Java: Click to expand</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`studentGrades.put("Alice", 90);
studentGrades.put("Bob", 85);`}</pre>
          </div>
        </details>

        <h4 className="font-semibold mt-4">2. Change (Update)</h4>
        <p><strong>Context:</strong> To update Bob's grade, we simply access the key using [] and assign a new value.</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`studentGrades["Bob"] = 92; // Bob's value is now 92`}</pre>
        </div>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">How to do this in Java: Click to expand</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`studentGrades.put("Bob", 92); // Bob's value is now 92`}</pre>
          </div>
        </details>

        <h4 className="font-semibold mt-4">3. Remove (Erase)</h4>
        <p><strong>Context:</strong> Removing a student from the record using their key.</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`studentGrades.erase("Alice");`}</pre>
        </div>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">How to do this in Java: Click to expand</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`studentGrades.remove("Alice");`}</pre>
          </div>
        </details>

        <h4 className="font-semibold mt-4">4. Traverse</h4>
        <p><strong>Context:</strong> We iterate through the map. In C++, every element is a pair where .first is the key and .second is the value.</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Using a range-based for loop (C++11 and later)
for (auto pair : studentGrades) {
    cout << "Student: " << pair.first << ", Grade: " << pair.second << endl;
}`}</pre>
        </div>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">How to do this in Java: Click to expand</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`for (String key : studentGrades.keySet()) {
    System.out.println("Student: " + key + ", Grade: " + studentGrades.get(key));
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <p>Here's a code snippet that you can try running in your IDE and see how the code executes</p>
        
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see the full runnable C++ Code Example</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

int main() {
    // 1. Creation
    unordered_map<string, int> inventory;

    // 2. Adding Elements
    cout << "--- Adding Elements ---" << endl;
    inventory["Apple"] = 50;
    inventory["Banana"] = 30;
    inventory.insert({"Orange", 20});
    
    // Check specific value
    cout << "Current Apple count: " << inventory["Apple"] << endl;

    // 3. Changing Elements
    cout << "\\n--- Updating Elements ---" << endl;
    inventory["Apple"] = 45; // Update Apple
    cout << "Updated Apple count: " << inventory["Apple"] << endl;

    // 4. Removing Elements
    cout << "\\n--- Removing Elements ---" << endl;
    inventory.erase("Orange");
    cout << "Orange removed." << endl;

    // 5. Traversal
    cout << "\\n--- Traversing ---" << endl;
    // 'entry' is a std::pair<const string, int>
    for (const auto& entry : inventory) {
        cout << "Item: " << entry.first << ", Qty: " << entry.second << endl;
    }
    
    // 6. Checking if a key exists
    if (inventory.find("Banana") != inventory.end()) {
        cout << "\\nBanana is in the inventory." << endl;
    }

    return 0;
}`}</pre>
          </div>
        </details>

        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click to see the full runnable Java Code Example</summary>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto mt-4">
            <pre>{`import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    public static void main(String[] args) {
        // 1. Creation
        HashMap<String, Integer> inventory = new HashMap<>();

        // 2. Adding Elements
        System.out.println("--- Adding Elements ---");
        inventory.put("Apple", 50);
        inventory.put("Banana", 30);
        inventory.put("Orange", 20);
        System.out.println("Inventory: " + inventory);

        // 3. Changing Elements
        System.out.println("\\n--- Updating Elements ---");
        inventory.put("Apple", 45); // Update Apple
        System.out.println("Updated Apple count: " + inventory.get("Apple"));

        // 4. Removing Elements
        System.out.println("\\n--- Removing Elements ---");
        inventory.remove("Orange");
        System.out.println("After removing Orange: " + inventory);

        // 5. Traversal
        System.out.println("\\n--- Traversing ---");
        for (Map.Entry<String, Integer> entry : inventory.entrySet()) {
            System.out.println("Item: " + entry.getKey() + ", Qty: " + entry.getValue());
        }
    }
}`}</pre>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Benefits and Downsides</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Benefits</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Downsides</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Fast Lookups:</strong> Access data in O(1) time on average.</td>
                <td className="border border-gray-300 px-4 py-2"><strong>Unordered:</strong> The data is not stored in any specific order (unlike Lists or TreeMaps).</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Flexible Keys:</strong> Use Strings, Objects, etc., as keys.</td>
                <td className="border border-gray-300 px-4 py-2"><strong>Memory Overhead:</strong> Uses more memory than arrays due to the storage of keys, hash codes, and pointers.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Dynamic Size:</strong> Grows and shrinks automatically.</td>
                <td className="border border-gray-300 px-4 py-2"><strong>Worst Case:</strong> Can degrade to O(n) if the hash function is poor (more on this below).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Now that we know how to use it, we must understand how it works under the hood to write efficient software.
        </p>
      </section>

      <section className="content-section">
        <h3>The Internals: Hash Tables</h3>
        <p>
          A Hash Table is the underlying data structure that makes the HashMap work. It consists of an array (often called "buckets").
        </p>
        <h4 className="font-semibold mt-4">How does "Alice" become an index?</h4>
        <p>This is done via a Hash Function.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Input:</strong> Key (e.g., "Alice").</li>
          <li><strong>Process:</strong> Mathematical calculation (e.g., sum of ASCII values % array size).</li>
          <li><strong>Output:</strong> An integer index (e.g., 3).</li>
        </ul>
        <p className="mt-4">The value (90) is then stored at index 3 of the internal array.</p>
        <div className="flex flex-col items-center my-6">
        </div>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/2Ti5yvumFTU" title="Understanding and implementing a Hash Table (in C)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="text-sm text-gray-600 text-center">(Watch the first 5 minutes for a visual explanation of the mapping process, you may watch the entire video in your free time)</p>
        <p className="mt-4">
          Okay! Now let's shift our focus to a problem which you might have already guessed: what happens if we have two identical values? Let's explore how this situation can be tackled.
        </p>
      </section>

      <section className="content-section">
        <h3>The Collision Problem</h3>
        <p>
          What happens if "Alice" hashes to index 3, and "Alex" also hashes to index 3? This is called a Collision.
        </p>
        <p>
          Since two pieces of data cannot sit in the exact same array slot, we need a Collision Resolution Technique. The most common one (and the one Java uses) is Chaining.
        </p>
        <h4 className="font-semibold mt-4">Chaining (LinkedList)</h4>
        <p>Instead of storing the value directly in the slot, the slot stores the head of a Linked List.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>"Alice" maps to index 3 -&gt; Add "Alice" to the list at index 3.</li>
          <li>"Alex" maps to index 3 -&gt; Append "Alex" to the list at index 3.</li>
        </ul>
        <p className="mt-4">
          When you retrieve "Alex", the HashMap goes to index 3, then traverses the small Linked List to find the entry where key equals "Alex".
        </p>
      </section>

      <section className="content-section">
        <h3>Interactive Visualization Activity</h3>
        <p>Let's visualize how collisions are handled using Chaining.</p>
        <p className="mt-4"><strong>Instructions:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Open the <a href="https://www.cs.usfca.edu/~galles/visualization/OpenHash.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hash Table Visualizer</a>.</li>
          <li>Enter the number 15 and click "Insert". Notice where it goes.</li>
          <li>Enter the number 26. (If table size is 11, 15%11=4 and 26%11=4).</li>
          <li>Observe how the visualizer creates a link from 15 to 26. This is a Chain.</li>
        </ol>
      </section>

      <section className="content-section">
        <h3>Load Factor and Resizing</h3>
        <p>
          As we keep adding elements, the buckets fill up, and the chains get longer. If the chains are long, lookup time slows down towards O(n).
        </p>
        <p>
          To prevent this, HashMaps define a Load Factor (default is 0.75 in Java).
        </p>
        <p className="mt-4"><strong>Formula:</strong></p>
        <div className="bg-gray-100 p-4 rounded my-4">
          <p>Load Factor = Number of Elements / Total Buckets</p>
        </div>
        <p>
          <strong>Rehashing:</strong> When the map is 75% full, Java automatically doubles the size of the internal array and redistributes (rehashes) all entries. This is an expensive operation but ensures future lookups remain fast.
        </p>
      </section>

      <section className="content-section">
        <h3>hashMap VS Hashtables</h3>
        <p>In C++, you will often see two types of maps. It is crucial to know the difference for interviews:</p>
        
        <h4 className="font-semibold mt-4">std::unordered_map (The Hash Map):</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Underlying Data Structure:</strong> Hash Table.</li>
          <li><strong>Time Complexity:</strong> Average O(1) for insertion/lookup.</li>
          <li><strong>Order:</strong> Random (Unordered).</li>
          <li><strong>Use case:</strong> When you need maximum speed and don't care about the order of data.</li>
        </ul>

        <h4 className="font-semibold mt-4">std::map (The Tree Map):</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Underlying Data Structure:</strong> Red-Black Tree (Self-balancing BST).</li>
          <li><strong>Time Complexity:</strong> O(log n).</li>
          <li><strong>Order:</strong> Keys are always sorted (e.g., Alphabetical order).</li>
          <li><strong>Use case:</strong> When you need to iterate through data in a specific order (e.g., printing a dictionary alphabetically).</li>
        </ul>

        <p className="mt-4">
          <strong>Legacy Note:</strong> C++ historically had non-standard implementations called hash_map, but since C++11, unordered_map is the standard.
        </p>
      </section>

      <section className="content-section">
        <h3>Time and Space Complexity Analysis</h3>
        <p>Understanding the theoretical costs helps us decide when to use these structures.</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Operation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Average Case</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Worst Case (High Collisions)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Insertion</td>
                <td className="border border-gray-300 px-4 py-2">O(1)</td>
                <td className="border border-gray-300 px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Deletion</td>
                <td className="border border-gray-300 px-4 py-2">O(1)</td>
                <td className="border border-gray-300 px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Search</td>
                <td className="border border-gray-300 px-4 py-2">O(1)</td>
                <td className="border border-gray-300 px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Space</td>
                <td className="border border-gray-300 px-4 py-2">O(n)</td>
                <td className="border border-gray-300 px-4 py-2">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            <strong>Note:</strong> In Java 8 and later, if a bucket's chain grows too large (threshold of 8), the Linked List transforms into a Balanced Tree (Red-Black Tree), improving the worst-case search from O(n) to O(log n).
          </p>
        </div>
      </section>

      <section className="content-section">
        <p>
          Now that we have a data structure that allows for near-instant access to data, we can solve complex problems much faster. Hash maps are one of the most powerful tools in a programmer's arsenal for optimizing algorithms, as we'll see next when we tackle Algorithmic Efficiency and Optimization Patterns
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            <strong>Note:</strong> In the bonus section below, we've provided a link to the official C++ documentation. We highly recommend visiting that link and reviewing the content; it'll be very helpful for you.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Bonus content</h3>
        <p>
          This section is optional and for learners who are more curious to explore further, here are some extra content.
        </p>
        <p>
          To truly master Hash Maps and stand out in interviews, you should explore how they are used in real-world distributed systems and understand the deep C++ specifics.
        </p>
        
        <h4 className="font-semibold mt-4">1. Standard C++ Documentation (cppreference)</h4>
        <p>
          <a 
            href="https://en.cppreference.com/w/cpp/container/unordered_map" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://en.cppreference.com/w/cpp/container/unordered_map
          </a>
        </p>

        <h4 className="font-semibold mt-4">2. Visualgo.net - Hash Table Animation</h4>
        <p>
          <a 
            href="https://visualgo.net/en/hashtable" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://visualgo.net/en/hashtable
          </a>
        </p>
        <p>
          <strong>Activity:</strong> Try the "Quadratic Probing" mode and see how it avoids the "clustering" problem that happens with Linear Probing.
        </p>

        <h4 className="font-semibold mt-4">3. Consistent Hashing - The Key to Scalability</h4>
        <p>
          <a 
            href="https://www.toptal.com/big-data/consistent-hashing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.toptal.com/big-data/consistent-hashing
          </a>
        </p>
      </section>
    </div>
  );
};

export default Module4_10;
