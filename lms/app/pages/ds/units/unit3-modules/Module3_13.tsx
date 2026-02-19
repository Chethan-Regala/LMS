'use client';
import React from 'react';

const Module3_13: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.13</div>
        <div className="lesson-title-main">
          <h1>Assignment | Design a Linked List</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this assignment, you will be implementing the singly linked list.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162542/Linked-List-Data-Structure.png" alt="Linked List Design" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">[OPTIONAL CONTENT]</h3>
        <p className="mb-6">
          The videos given below are optional contents and you can directly start the assignment and write code. We advise you to use these resources for reference.
        </p>

        <h3 className="text-lg font-semibold mb-3">Implementation</h3>
        <p className="mb-4">
          Watch this video to know how linked list is implemented in C/C++.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vcQIFT79_50" title="Linked List - Implementation in C/C++" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-lg font-semibold mb-3">Inserting a node at beginning</h3>
        <p className="mb-4">
          Take a look at the video given below to understand how to insert a node at the beginning of a linked list.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cAZ8CyDY56s" title="Linked List in C/C++ - Inserting a node at beginning" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <h3 className="text-lg font-semibold mb-3">Insert a node at nth position</h3>
        <p className="mb-4">
          Take a look at the video given below to understand how to insert a node at a given position in a linked list.
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IbvsNF22Ud0" title="Linked List in C/C++ - Insert a node at nth position" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Assignment Task:</p>
          <p>Now that you have learned about linked lists and their operations, implement a singly linked list with the following functionalities:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Insert at the beginning</li>
            <li>Insert at the end</li>
            <li>Insert at a specific position</li>
            <li>Delete a node</li>
            <li>Search for a value</li>
            <li>Display the linked list</li>
          </ul>
        </div>

        <p className="mb-6 text-center font-semibold">
          Good luck with your implementation! 🚀
        </p>
      </section>
    </div>
  );
};

export default Module3_13;
