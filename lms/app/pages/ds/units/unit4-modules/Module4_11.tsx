'use client';
import React from 'react';

const Module4_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.11</div>
        <div className="lesson-title-main">
          <h1>Assignment | Design HashMap</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Hi there, welcome to your first assignment on HashMaps. In this assignment, you'll build your own HashMap without using any built-in hash table libraries. Remember the formula that we saw in the introductory lesson?</p>
        <p className="mt-4">A HashMap is just a key → value lookup:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>You give it a key (like 1)</li>
          <li>It instantly gives you the stored value (like 42)</li>
        </ul>
        <p className="mt-4">Here you must support:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>put(key, value)</strong> – add or update</li>
          <li><strong>get(key)</strong> – return value or -1 if not found</li>
          <li><strong>remove(key)</strong> – delete the key and its value</li>
        </ul>
        <p className="mt-4">
          The goal is to understand how HashMaps actually work inside: arrays, buckets, simple hash function, and how to handle collisions.
        </p>
      </section>

      <section className="content-section">
        <h3>Watch this video to understand the problem and how to solve it.</h3>
        <div className="flex justify-center my-6">
          <iframe
            src="https://drive.google.com/file/d/1vtxKNsW9TpGd-pyH-FzcF-j9wZ3Jb2HL/preview"
            width="560"
            height="315"
            allow="autoplay"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-step approach</h3>
        <details className="bg-gray-50 p-4 rounded my-4">
          <summary className="font-semibold cursor-pointer">Click here: Step-by-step plan to solve "Design HashMap"</summary>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Fix the basic idea</h4>
              <p>We want to store pairs (key, value) and be able to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Insert/update (put)</li>
                <li>Read (get)</li>
                <li>Delete (remove) in average O(1) time.</li>
              </ul>
              <p className="mt-2">We'll do this with:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>An array of buckets (e.g. size = 10,000)</li>
                <li>Each bucket holds a small list of pairs that share the same hash index.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Choose the data structure</h4>
              <p>Inside MyHashMap:</p>
              <p className="mt-2">Decide a bucket size, for example:</p>
              <div className="bg-gray-100 p-4 rounded overflow-x-auto my-2">
                <pre>{`static const int SIZE = 10000;`}</pre>
              </div>
              <p>Create an array / vector of buckets. Each bucket can be:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>a vector&lt;pair&lt;int,int&gt;&gt; (C++), or</li>
                <li>a List&lt;int[]&gt; / ArrayList&lt;Node&gt; (Java)</li>
              </ul>
              <p className="mt-2">So conceptually:</p>
              <div className="bg-gray-100 p-4 rounded overflow-x-auto my-2">
                <pre>{`buckets[0] -> list of (key, value)
buckets[1] -> list of (key, value)
...
buckets[SIZE-1] -> list of (key, value)`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Hash function</h4>
              <p>Use a simple hash function to map key → index:</p>
              <div className="bg-gray-100 p-4 rounded overflow-x-auto my-2">
                <pre>{`index = key % SIZE`}</pre>
              </div>
              <p>This tells us which bucket to use.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 4: Implement put(key, value)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Compute index = key % SIZE</li>
                <li>Go through buckets[index]:
                  <ul className="list-disc ml-6 mt-2">
                    <li>If you find a pair with key already there → update its value</li>
                    <li>If not found → push a new (key, value) into this bucket.</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-2">This handles:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>insert (when key is new)</li>
                <li>update (when key exists)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Step 5: Implement get(key)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Compute index = key % SIZE</li>
                <li>Go through buckets[index]:
                  <ul className="list-disc ml-6 mt-2">
                    <li>If you find key, return its value</li>
                    <li>If you reach the end and don't find it → return -1</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold">Step 6: Implement remove(key)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Compute index = key % SIZE</li>
                <li>Go through buckets[index]:
                  <ul className="list-disc ml-6 mt-2">
                    <li>If you find a pair with key, erase/remove it from the list and stop.</li>
                    <li>If the key doesn't exist, do nothing.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold">Step 7: Check complexity</h4>
              <p>If keys are spread nicely:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>put, get, remove ≈ O(1) average</li>
                <li>Worst case (all keys in one bucket) is O(n), but that's rare for this problem.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Step 8: Test with the sample</h4>
              <p>Use the given example:</p>
              <div className="bg-gray-100 p-4 rounded overflow-x-auto my-2">
                <pre>{`MyHashMap myHashMap = new MyHashMap();
put(1,1) → [[1,1]]
put(2,2) → [[1,1],[2,2]]
get(1)   → 1
get(3)   → -1
put(2,1) → [[1,1],[2,1]]
get(2)   → 1
remove(2) → [[1,1]]
get(2)   → -1`}</pre>
              </div>
              <p>If all outputs match, your logic is correct.</p>
            </div>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Practice problems</h3>
        <h4 className="font-semibold mt-4">LeetCode:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://leetcode.com/problems/design-hashmap/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode | 706. Design HashMap (The exact problem you're doing)
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/design-hashset/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode | 705. Design HashSet
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/problems/design-linked-list/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode | 707. Design Linked List
            </a>
          </li>
        </ul>

        <h4 className="font-semibold mt-4">HackerRank:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Day 8: Dictionaries and Maps – build a simple phonebook using a map; great beginner exercise. (hackerrank.com)
            </a>
          </li>
          <li>
            <a 
              href="https://www.hackerrank.com/challenges/icecream-parlor/problem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ice Cream Parlor (Hash Tables: Ice Cream Parlor) – classic "two sum using hashmap" style problem. (hackerrank.com)
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional reference material</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a 
              href="https://algo.monster/liteproblems/706" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AlgoMonster – 706. Design HashMap (In-Depth Explanation) – clean breakdown with code in multiple languages. AlgoMonster
            </a>
          </li>
          <li>
            <a 
              href="https://medium.com/@AlexanderObregon/daily-leetcode-problems-706-design-hashmap-9c8e3e5e5e5e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Medium article: "Daily LeetCode Problems – 706. Design HashMap" – step-by-step explanation using chaining. Medium
            </a>
          </li>
          <li>
            <a 
              href="https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-does-a-HashMap-work-in-Java" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Java HashMap internal working tutorials – deeper dive into how real Java HashMap works internally (buckets, collisions, etc.). theserverside.com
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            You're not just solving one LeetCode problem; you're learning how one of the most powerful data structures in coding actually works. Give this assessment an honest try, even if you feel unsure. Struggling here is exactly how you become strong later.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Module4_11;
