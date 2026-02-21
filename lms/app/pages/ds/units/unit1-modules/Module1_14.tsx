'use client';
import React from 'react';

const Module1_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.14</div>
        <div className="lesson-title-main">
          <h1>Longest Common Prefix</h1>
        </div>
      </div>

      <section className="content-section">
        <p>Welcome to this lesson of Practice problems on Problem solving.</p>
        <p>Let's look at the problem to solve in this lesson.</p>
      </section>

      <section className="content-section">
        <h3>Problem statement</h3>
        <p>Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".</p>
        
        <h4>Input 1:</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>[flower, flight, flow]</p>
        </div>
        
        <h4>Output:</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>fl</p>
        </div>
        
        <h4>Input 2:</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>[race, dog, car]</p>
        </div>
        
        <h4>Output:</h4>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>""</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Approach</h3>
        <p>In this assignment, we will be using a built in function called "sort()". This function will sort the string array alphabetically. For example,</p>
        
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>arr = [flower, flow, flight, flew]</p>
        </div>
        
        <p>After sorting,</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
          <p>arr = [flew, flight, flow, flower]</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Check this out</h3>
        <p>Define a function that does the following.</p>
        
        <ul>
          <li>Sort the array using sort().</li>
          <li>Initialize two string variables, s1 and s2, to the first and last strings of the sorted array, respectively. These will be used to compare the characters of the strings and find the common prefix.</li>
          <li>Initialize an empty string variable ans to store the longest common prefix that will be found.</li>
          <li>A variable i is initialized to 0. The loop runs until i remains less than the length of both s1 and s2 strings.</li>
          <li>Inside the loop, the function compares the ith character of s1 and s2. If they are equal, it means that the character is present in the common prefix. So, add the character to the ans string. If the characters are not equal, it means that the common prefix has ended, so the loop breaks out.</li>
          <li>The loop increments the i variable after each comparison to move to the next character. After the loop ends, the function returns the longest common prefix found so far, stored in the ans variable.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_14;