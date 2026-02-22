'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

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

        <Quiz
          title="Module 3.13 Quiz: Designing Linked Lists"
          questions={[
            {
              question: "When implementing 'Insert at Beginning', what should the new node's 'next' pointer point to?",
              options: ["NULL", "The current Head", "Itself", "The Tail element"],
              correctAnswer: 1,
              explanation: "To maintain the chain, the new element must link to the existing start of the list before becoming the new head."
            },
            {
              question: "What is the time complexity of 'Insert at End' in a standard Singly Linked List (without a tail pointer)?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
              correctAnswer: 2,
              explanation: "Without a direct reference to the last node (tail), you must traverse the entire list to find the end."
            },
            {
              question: "In the code for 'Insert at specific position', why do we usually traverse to the (n-1)-th node?",
              options: ["To find the value of the next node", "Because we need to update the link of the node that will PRECEDE the new node", "To delete the list", "To check if the list is circular"],
              correctAnswer: 1,
              explanation: "To insert at position n, you must change the 'next' pointer of the node at position n-1 to point to your new node."
            },
            {
              question: "What should happen if the search function reaches a node where its 'next' pointer is NULL, but the key hasn't been found?",
              options: ["It should restart from the head", "It should return 'Not Found' (or false)", "It should create a new node", "It should trigger an infinite loop"],
              correctAnswer: 1,
              explanation: "NULL marks the end of the list; if you reach it without finding the data, the element does not exist."
            },
            {
              question: "Why is 'Delete a node' more complex in a Singly Linked List compared to a Doubly Linked List?",
              options: ["You cannot delete from the start", "You need a reference to the PREVIOUS node to bridge the gap left by the deleted node", "Deletion takes O(1) in Singly", "Nodes in Singly have no data"],
              correctAnswer: 1,
              explanation: "In a singly list, once you are AT the node you want to delete, you have no direct way to go back to the previous node to update its pointer. You must find the previous node via traversal."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={13}
        />
      </section>
    </div>
  );
};

export default Module3_13;
