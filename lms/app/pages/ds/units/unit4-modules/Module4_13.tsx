'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module4_13: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.13</div>
        <div className="lesson-title-main">
          <h1>Hands-on | Semantic Keyword Analyzer</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Welcome to today's hands-on session.</p>
        <p>
          This is not a regular theory lesson, today, you will be building a core engine that is used inside real systems every single day.
        </p>
        <p>
          You will design and implement a Semantic Keyword Analyzer, a fast, optimized module that groups related keywords together. This type of logic is used in:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Search engines (Google, Bing, etc.)</li>
          <li>Document clustering</li>
          <li>Auto-suggest systems</li>
          <li>Spam detection</li>
          <li>SEO keyword grouping</li>
          <li>File similarity detection</li>
        </ul>
        <p className="mt-4">
          By the end of this session, you will have built a real mini-system powered by HashMaps for high-speed processing.
        </p>
      </section>

      <section className="content-section">
        <p>Before we jump into the system, here's what you've learned so far, and why it matters:</p>
        <p className="mt-4"><strong>You learned:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Arrays & data traversal</li>
          <li>Trees and Binary Trees</li>
          <li>Tree inversion</li>
          <li>HashMaps and HashSets</li>
          <li>Designing your own HashMap</li>
          <li>Fast lookup and grouping logic</li>
        </ul>
        <p className="mt-4">
          All these concepts lead directly into today's project, where you'll use these skills to design a fast, scalable text-processing engine.
        </p>
      </section>

      <section className="content-section">
        <h3>Today's Objective: Build a Semantic Keyword Analyzer</h3>
        <p><strong>Your task today:</strong></p>
        <p>
          Group all keywords that are "structurally similar," even if written in different orders.
        </p>
        <p className="mt-4"><strong>Example:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>eat, tea, ate → Same group</li>
          <li>listen, silent → Same group</li>
        </ul>
        <p className="mt-4">This is essentially the real logic behind:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>grouping search terms</li>
          <li>clustering similar tags</li>
          <li>identifying related queries</li>
        </ul>
        <p className="mt-4">
          Technically, this is the Group Anagrams problem — but today we treat it like a system design task, not a coding exercise.
        </p>
      </section>

      <section className="content-section">
        <h3>Technical Requirements (Project Specification)</h3>
        <h4 className="font-semibold mt-4">Constraints:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Must handle large datasets efficiently</li>
          <li>Must avoid comparing every word with every other word</li>
          <li>Must use HashMap for O(1) lookup</li>
          <li>Must produce correct groups</li>
          <li>Must run fast on thousands of entries</li>
        </ul>
        <h4 className="font-semibold mt-4">Not allowed:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Brute-force O(n²) comparison</li>
          <li>Sorting inside nested loops</li>
          <li>Repetitive scanning</li>
        </ul>
        <p className="mt-4">This is a performance-focused task.</p>
      </section>

      <section className="content-section">
        <h3>System Blueprint (Architecture Overview)</h3>
        <p>How do real systems group similar keywords?</p>
        <p>
          They convert each keyword into a signature. A signature is a form that stays the same for all anagrams.
        </p>
        <p className="mt-4"><strong>Example:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`"eat" → "aet"
"tea" → "aet"
"ate" → "aet"`}</pre>
        </div>
        <p>So the idea is simple:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Key:</strong> sorted version of the word</li>
          <li><strong>Value:</strong> list of words matching that signature</li>
        </ul>
        <p className="mt-4">This is the internal structure of your Semantic Keyword Analyzer.</p>
        <p className="mt-4">Here's a simple blueprint illustration:</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`            ┌───────────────┐
            │   "aet"       │  ← signature
            └──────┬────────┘
                   │
     ┌─────────────┴──────────────┐
     │ eat   │ tea   │ ate        │  ← grouped keywords
     └─────────────────────────────┘`}</pre>
        </div>
        <p>This blueprint mimics how search engines cluster similar queries.</p>
      </section>

      <section className="content-section">
        <h3>Engineering Approach (Optimized Method)</h3>
        <p>To achieve high performance, follow this exact approach:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Create a HashMap</strong></li>
          <li><strong>For every word:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Convert it to a signature (sort the letters)</li>
              <li>Use the signature as the map key</li>
              <li>Append the word to the group stored as the map value</li>
            </ul>
          </li>
          <li><strong>Return all grouped word lists</strong></li>
        </ol>
        <p className="mt-4">This gives:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>🔥 O(n log n) for all sorting combined</li>
          <li>🔥 O(1) lookup using HashMap</li>
          <li>🔥 Massive performance gain over naive O(n²)</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Real-World Applications</h3>
        <p>The same technique powers:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Search query clustering</li>
          <li>SEO keyword grouping</li>
          <li>Detecting duplicate file names</li>
          <li>Tag suggestion engines</li>
          <li>Auto-complete prediction systems</li>
          <li>Spam text similarity detection</li>
        </ul>
        <p className="mt-4">This makes your project industry-relevant.</p>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <h4 className="font-semibold mt-4">LeetCode</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="https://leetcode.com/problems/group-anagrams/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Group Anagrams (base problem) https://leetcode.com/problems/group-anagrams/
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problems/valid-anagram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Valid Anagram https://leetcode.com/problems/valid-anagram/
            </a>
          </li>
        </ul>

        <h4 className="font-semibold mt-4">HackerRank</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="https://www.hackerrank.com/challenges/ctci-ransom-note"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hash Tables – Ransom Note https://www.hackerrank.com/challenges/ctci-ransom-note
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/challenges/icecream-parlor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ice Cream Parlor https://www.hackerrank.com/challenges/icecream-parlor
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional Reference Material</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="https://www.geeksforgeeks.org/hashmap-in-cpp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              HashMap usage guide: https://www.geeksforgeeks.org/hashmap-in-cpp/
            </a>
          </li>
          <li>
            <a
              href="https://www.programiz.com/dsa/hash-table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Signature-based grouping explanation: https://www.programiz.com/dsa/hash-table
            </a>
          </li>
          <li>
            <a
              href="https://monkeylearn.com/text-similarity/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Intro to text similarity: https://monkeylearn.com/text-similarity/
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p>
            You didn't just solve a coding problem — you built the core engine of a semantic-analysis system used in real applications.
          </p>
        </div>
        <p>
          This is real engineering. Keep building, keep exploring.
        </p>
      </section>

      <section className="content-section">
        <Quiz
          title="Module 4.13 Quiz: Semantic Keyword Analyzer"
          questions={[
            {
              question: "In the Semantic Keyword Analyzer, what is a 'signature' used for?",
              options: ["To store the original word unchanged", "A canonical form (e.g., sorted letters) shared by all anagrams of a word", "The length of the word", "The first letter of the word"],
              correctAnswer: 1,
              explanation: "A signature is a normalized key (like alphabetically sorted letters) that is identical for all anagrams. Words sharing a signature belong to the same group."
            },
            {
              question: "What is the signature for 'eat', 'tea', and 'ate'?",
              options: ["eat", "aet", "tea", "ate"],
              correctAnswer: 1,
              explanation: "Sorting the letters of eat, tea, or ate all produce 'aet'. This shared signature groups them together as anagrams."
            },
            {
              question: "Why is the brute-force O(n²) approach prohibited in this system?",
              options: ["It uses too many variables", "It is too slow for large datasets with thousands of keywords", "It sorts the wrong way", "It doesn't work with HashMaps"],
              correctAnswer: 1,
              explanation: "Comparing every word with every other word is O(n²), which becomes extremely slow for large keyword sets. The signature + HashMap approach runs in O(n log k) where k is the max word length."
            },
            {
              question: "In the HashMap used by the Semantic Analyzer, what is stored as the VALUE?",
              options: ["The signature string", "A list/group of all words matching that signature", "The index of first occurrence", "The length of each word"],
              correctAnswer: 1,
              explanation: "The HashMap maps each signature (key) to a list (value) of all original words that share that signature, accumulating the group."
            },
            {
              question: "Which real-world application uses the same group-anagrams logic as the Semantic Keyword Analyzer?",
              options: ["Dijkstra's shortest path", "Binary search in a sorted array", "Search engine query clustering and SEO keyword grouping", "Merge sort"],
              correctAnswer: 2,
              explanation: "Grouping semantically related search terms, clustering similar tags, and SEO keyword grouping all use the same signature-based HashMap technique."
            }
          ]}
          subject="DS"
          unitId={4}
          moduleId={13}
        />
      </section>
    </div>
  );
};

export default Module4_13;
