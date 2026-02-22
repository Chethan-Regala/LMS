'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Stacks</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          welcome back to the lesson stacks and queues.
        </p>

        <p className="mb-6">
          Imagine you're managing a busy restaurant. You need a system to efficiently handle customer orders, ensuring that the last order received is the first one prepared.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://i.imgflip.com/553i2x.jpg" alt="Restaurant Stack" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">Credits: imgflip</p>
        </div>

        <p className="mb-6">
          This is similar to how a stack works in computer science, a fundamental data structure used in numerous applications. So let's uncover the magic behind it, and explore
        </p>

        <p className="mb-6">
          A stack is a linear data structure that follows the LIFO (Last-In, First-Out) principle. Think of it like a stack of plates – you always remove the top plate first.
        </p>

        <h3 className="text-xl font-semibold mb-4">Introduction to Stacks</h3>
        <p className="mb-6">
          A stack is a fundamental data structure that follows the LIFO (last-in, first-out) principle. Imagine a stack of books; the last book you placed on top is the first one you'll take off.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://png.pngtree.com/png-clipart/20241213/original/pngtree-stack-of-books-image-png-image_17810565.png" alt="Stack of Books" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">Credits: PNGtree</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Understanding LIFO</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>lifo (last-in, first-out) means the last element added to the stack is the first one to be removed.</li>
          <li>visualize a stack of plates: you always take the top plate, which was the last one placed on the stack.</li>
          <li>this principle governs how elements are accessed and manipulated in a stack.</li>
        </ul>

        <div className="mb-6">
          <p className="font-semibold mb-2">analogy: web browser history</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>when you browse the internet, each page you visit is added to a stack.</li>
            <li>clicking the "back" button removes the last visited page from the stack, taking you to the previous page.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Types of Stacks</h3>
        <p className="mb-4">
          Stacks can be classified into two main types based on their size:
        </p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">fixed-size stacks (also known as static stacks):</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>have a predetermined maximum capacity defined at the time of creation.</li>
              <li>The size remains constant throughout the stack's lifetime.</li>
              <li>example: an array-based stack with a fixed array size.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">dynamic-size stacks (also known as dynamic stacks):</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>can grow or shrink in size as elements are added or removed.</li>
              <li>typically implemented using linked lists or dynamic arrays.</li>
              <li>example: a stack implemented with a linked list, where nodes can be added or removed as needed.</li>
            </ul>
          </div>
        </div>

        <p className="mb-6 italic text-gray-700">
          Let's discuss this in pairs. Can you think of scenarios where fixed-size stacks might be preferable to dynamic-size stacks, and vice versa?
        </p>

        <h3 className="text-xl font-semibold mb-4">Operations</h3>
        <p className="mb-4">
          The primary operations associated with stacks are:
        </p>

        <div className="mb-6 space-y-4">
          <div className="flex flex-col items-center">
            <p className="font-semibold mb-2 self-start">push: adds an element to the top of the stack. Imagine adding a new plate to the top of a stack of plates.</p>
            <img src="https://homework.study.com/cimages/multimages/16/stack_push_operation2294814496370743228.jpg" alt="Push Operation" className="mt-2 w-full max-w-lg h-auto rounded-lg shadow-md" />
            <p className="text-sm text-gray-600 mt-2">Credits: Study.com</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold mb-2 self-start">pop: removes the element from the top of the stack. Imagine removing the top plate from a stack of plates.</p>
            <img src="https://homework.study.com/cimages/multimages/16/stack_pop_operation1510464500785197077.jpg" alt="Pop Operation" className="mt-2 w-full max-w-lg h-auto rounded-lg shadow-md" />
            <p className="text-sm text-gray-600 mt-2">Credits: Study.com</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold mb-2 self-start">peek (or top): retrieves the element at the top of the stack without removing it. Imagine looking at the top plate on a stack of plates without taking it off.</p>
            <img src="https://miro.medium.com/1*YhoVsNJLcYskqnaxdccE6g.png" alt="Peek Operation" className="mt-2 w-full max-w-lg h-auto rounded-lg shadow-md" />
            <p className="text-sm text-gray-600 mt-2">Credits: Medium</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold mb-2 self-start">isEmpty: checks if the stack is empty. Imagine checking if there are any plates on the stack.</p>
            <img src="https://www.masaischool.com/blog/content/images/wordpress/2022/04/Empty-Stack-1024x1024.png" alt="isEmpty Operation" className="mt-2 w-full max-w-lg h-auto rounded-lg shadow-md" />
            <p className="text-sm text-gray-600 mt-2">Credits: Masai</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold mb-2 self-start">size: returns the number of elements in the stack. Imagine counting how many plates are on the stack.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWq1oN9XA281DPu41ETi0zB9s-HTrUE7cZg&s" alt="Size Operation" className="mt-2 w-full max-w-lg h-auto rounded-lg shadow-md" />
            <p className="text-sm text-gray-600 mt-2">Credits: How.dev</p>
          </div>
        </div>

        <p className="mb-6">
          These operations allow you to manage data in a LIFO manner efficiently.
        </p>

        <h3 className="text-xl font-semibold mb-4">Try this out!</h3>
        <p className="mb-4">
          Use the visualizer provided below to see a visual demonstration of how data is pushed and popped from a stack
        </p>

        <p className="mb-4 font-semibold">Instruction:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>In the "Enter element" field, start by typing the first element that you want to push. (Eg, number: 23)</li>
          <li>Push 2 3 more elements in the stack.</li>
          <li>Try popping one of the elements using the "Pop" Button</li>
          <li>Try popping all elements in the stack and see what happens.</li>
        </ul>

        <p className="mb-6">
          Did you try popping the element after the stack was empty? What was the result? Pretty sure you saw an error saying the stack was empty, well, this condition is called underflow, let's try to explore this concept now.
        </p>

        <h3 className="text-xl font-semibold mb-4">Overflow and underflow</h3>
        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">overflow:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>occurs when you try to push an element onto a stack that is already full (in the case of fixed-size stacks).</li>
              <li>It's like trying to add a plate to a stack that has reached its maximum height.</li>
              <li>Attempting to push onto a full stack results in an error or exception.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">underflow:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>occurs when you try to pop an element from an empty stack.</li>
              <li>It's like trying to take a plate from an empty stack.</li>
              <li>Attempting to pop from an empty stack also results in an error or exception.</li>
            </ul>
          </div>
        </div>

        <p className="mb-6">
          These conditions must be handled to ensure the stack operates correctly.
        </p>

        <p className="mb-6 italic text-gray-700">
          peer discussion: Can you describe a situation where you might encounter a stack overflow or underflow error in a real-world scenario?
        </p>

        <h3 className="text-xl font-semibold mb-4">Implementation using arrays</h3>
        <p className="mb-4">
          Implementing a stack using an array involves using an array to store the stack's elements. The top of the stack is typically represented by an index in the array.
        </p>

        <p className="mb-4">
          Let's look at a simple code example:
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`class Stack:
    constructor(capacity):
        this.capacity = capacity
        this.stack = new Array(capacity) // Initialize array of given capacity
        this.top = -1 // Index of the top element; -1 indicates empty stack

    method isEmpty():
        return this.top == -1 // True if top is -1, meaning stack is empty

    method isFull():
        return this.top == this.capacity - 1 // True if top is at the last index, meaning stack is full

    method push(item):
        if this.isFull():
            print "Stack Overflow!"
            return // Exit if stack is full

        this.top = this.top + 1 // Increment top index
        this.stack[this.top] = item // Add the new item to the top of the stack
        print "Pushed " + item + " to stack"

    method pop():
        if this.isEmpty():
            print "Stack Underflow!"
            return null // Return null if stack is empty

        poppedItem = this.stack[this.top] // Get the top item
        this.top = this.top - 1 // Decrement top index
        print "Popped " + poppedItem + " from stack"
        return poppedItem // Return the popped item

    method peek():
        if this.isEmpty():
            print "Stack is empty!"
            return null // Return null if stack is empty

        return this.stack[this.top] // Return the top item without removing it

// Example Usage:
s = new Stack(3) // Create a stack with capacity 3

s.push(1)   // Pushed 1 to stack
s.push(2)   // Pushed 2 to stack
s.push(3)   // Pushed 3 to stack
s.push(4)   // Stack Overflow!

print s.pop()  // Popped 3 from stack
print s.pop()  // Popped 2 from stack
print s.peek() // 1`}</code>
        </pre>

        <p className="mb-4 font-semibold">what this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>the stack class is initialized with a fixed capacity.</li>
          <li>push adds an item to the top, pop removes the top item, and peek shows the top item.</li>
          <li>it manages the top index to keep track of the current top of the stack.</li>
        </ul>

        <p className="mb-6">
          implementing stacks using arrays is straightforward but has a limitation of fixed size. how would you overcome this limitation? let's move into our next approach.
        </p>

        <h3 className="text-xl font-semibold mb-4">Implementation using linked lists</h3>
        <p className="mb-4">
          implementing a stack using a linked list involves creating a linked list where each node stores an element. the top of the stack is the head of the linked list.
        </p>

        <p className="mb-4">
          here's a simple code example:
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`class Node:
    constructor(data):
        this.data = data
        this.next = null

class Stack:
    constructor():
        this.head = null

    method isEmpty():
        return this.head is null

    method push(data):
        newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        print "pushed " + data + " to stack"

    method pop():
        if this.isEmpty():
            print "stack underflow!"
            return null
        popped = this.head.data
        this.head = this.head.next
        print "popped " + popped + " from stack"
        return popped

    method peek():
        if this.isEmpty():
            print "stack is empty!"
            return null
        return this.head.data

// Example Usage:
s = new Stack()

s.push(1)
s.push(2)
s.push(3)

print s.pop()
print s.pop()
print s.peek()`}</code>
        </pre>

        <p className="mb-4 font-semibold">what this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>each element is a node in the linked list.</li>
          <li>push adds a new node at the beginning (head) of the list.</li>
          <li>pop removes the head node.</li>
          <li>linked list implementation allows dynamic sizing, avoiding the overflow issue.</li>
        </ul>

        <p className="mb-6">
          stacks using linked lists are dynamically sized and efficient for managing data. let's work in pairs to compare the advantages and disadvantages of implementing stacks using arrays versus linked lists.
        </p>

        <p className="mb-4">
          Watch this video to explore more about stacks
        </p>

        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F1F2imiOJfk" title="Introduction to Stacks" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>
        <div className="mb-6 flex flex-col items-center">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FIntroduction%20to%20stacks%2FApplications%20of%20stack%20-%20visual%20selection.png" alt="Applications of Stack" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Real-world example: text editor undo/redo</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>every action you perform in a text editor is pushed onto a stack.</li>
          <li>when you click "undo," the last action is popped from the stack, reverting the text to its previous state.</li>
          <li>"redo" pushes the action back onto the stack.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Algorithms that use stacks</h3>
        <p className="mb-4">
          many algorithms rely on stacks to solve complex problems:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>depth-first search (dfs):</strong> stacks are used to keep track of vertices to visit in a graph.</li>
          <li><strong>tower of hanoi:</strong> stacks are used to simulate the movement of disks between pegs.</li>
          <li><strong>expression parsing:</strong> stacks are used to parse and evaluate arithmetic expressions.</li>
        </ul>

        <p className="mb-6">
          let's discuss as a group how stacks simplify these algorithms compared to other data structures.
        </p>

        <p className="mb-6">
          Now, for a quick task to reinforce what we've covered today, consider a simple scenario: You have a stack of integers. Write down the steps to reverse the order of the elements in the stack using only the basic stack operations (push, pop, peek, isEmpty). Then, discuss your approach with a nearby peer.
        </p>

        <Quiz
          title="Module 3.1 Quiz: Introduction to Stacks"
          questions={[
            {
              question: "What is the defining principle of a Stack data structure?",
              options: ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Random Access", "Priority-based Access"],
              correctAnswer: 1,
              explanation: "Stacks follow the LIFO principle, where the last element added is the first one to be removed."
            },
            {
              question: "Which operation is used to add an element to the top of the stack?",
              options: ["pop", "peek", "push", "isEmpty"],
              correctAnswer: 2,
              explanation: "The 'push' operation adds a new element to the top of the stack."
            },
            {
              question: "What happens when you attempt to perform a 'pop' operation on an empty stack?",
              options: ["Stack Overflow", "Stack Underflow", "Memory Leak", "Infinite Loop"],
              correctAnswer: 1,
              explanation: "Popping from an empty stack is called underflow and typically results in an error or exception."
            },
            {
              question: "In a fixed-size array implementation, what condition defines 'Stack Overflow'?",
              options: ["When the top index is -1", "When the top index is equal to capacity - 1", "When the stack is empty", "When memory is exhausted"],
              correctAnswer: 1,
              explanation: "Overflow occurs in static stacks when you try to push into an already full array (top reached max capacity)."
            },
            {
              question: "Which of the following is a common real-world application of a Stack?",
              options: ["Printing jobs in a queue", "Web browser 'Back' button history", "Finding the shortest path in a map", "Storing contacts in a phone book alphabetically"],
              correctAnswer: 1,
              explanation: "Browser history uses a stack to keep track of visited pages so you can return to the last-visited page first."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={1}
        />
      </section>
    </div>
  );
};

export default Module3_1;
