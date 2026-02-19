'use client';
import React from 'react';

const Module3_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.2</div>
        <div className="lesson-title-main">
          <h1>Introduction to Queues & Deques</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          Hey Kalvians! Welcome back to the lesson Queues and Deques.
        </p>

        <p className="mb-6">
          Think about waiting in line at a movie theater or a coffee shop.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.licdn.com/dms/image/v2/C5112AQHuTouTze72Hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1562154901121?e=2147483647&v=beta&t=UYPc_wRHjCLR31gxOGtdzBsfdN1sCpCZoZVAMPGsYjE" alt="Queue at Theater" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          The first person in line is the first one to be served. This is the basic idea behind a queue, a fundamental data structure in computer science, used extensively in managing ordered data. So let's uncover the magic behind it, and explore.
        </p>

        <p className="mb-6">
          A queue is a linear data structure that follows the FIFO (First-In, First-Out) principle, where the first element added to the queue is the first one to be removed.
        </p>

        <p className="mb-6">
          Let's kick things off with understanding what a Queue is exactly.
        </p>

        <h3 className="text-xl font-semibold mb-4">Introduction to Queues</h3>
        <p className="mb-6">
          A queue is a data structure that follows the fifo (first-in, first-out) principle. Imagine a line of people waiting for a service; the person who arrived first is the first to be served. This ensures fairness and order in processing elements.
        </p>

        <h3 className="text-xl font-semibold mb-4">Understanding FIFO</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>fifo (first-in, first-out) means the first element added to the queue is the first one to be removed.</li>
          <li>visualize a queue of customers at a bank; the first customer in line is the first to be served by the teller.</li>
          <li>this principle ensures that elements are processed in the order they were added.</li>
        </ul>

        <div className="mb-6">
          <p className="font-semibold mb-2">analogy: printer queue</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>when you send multiple print jobs to a printer, they are added to a queue.</li>
            <li>the printer processes the jobs in the order they were received, ensuring that the first job sent is printed first.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Types of Queues</h3>
        <p className="mb-4">
          Queues can be classified into several types, each with its specific characteristics and use cases:
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FTypes%20of%20Queues%20-%20DSA.png" alt="Types of Queues" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6 italic text-gray-700">
          Group discussion: can you think of examples where each type of queue might be used in a real-world application?
        </p>

        <h3 className="text-xl font-semibold mb-4">Basic Queue Operations</h3>
        <p className="mb-4">
          the primary operations associated with queues are:
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fqueue%20opeartions%20-%20DSA.png" alt="Queue Operations" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          These operations allow you to efficiently manage data in a FIFO manner.
        </p>

        <h3 className="text-xl font-semibold mb-4">Array Implementations of Queues</h3>
        <p className="mb-4">
          implementing a queue using an array involves using an array to store the queue's elements.
        </p>
        <p className="mb-4">
          two pointers, front and rear, are used to keep track of the front and rear of the queue.
        </p>
        <p className="mb-4">
          let's look at a simple pseudocode example:
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`class Queue:
    constructor(capacity):
        this.capacity = capacity
        this.queue = new Array(capacity)  // Initialize array of given capacity
        this.front = this.rear = -1    // front and rear index
        this.size = 0

    is_empty():
        return this.size == 0

    is_full():
        return this.size == this.capacity

    enqueue(item):
        if this.is_full():
            print("Queue Overflow!")
            return

        if this.front == -1:
            this.front = 0
        this.rear = (this.rear + 1) % this.capacity
        this.queue[this.rear] = item
        this.size += 1
        print(f"Enqueued {item} to queue")

    dequeue():
        if this.is_empty():
            print("Queue Underflow!")
            return None

        item = this.queue[this.front]
        this.front = (this.front + 1) % this.capacity
        this.size -= 1
        print(f"Dequeued {item} from queue")
        return item

    peek():
        if this.is_empty():
            print("Queue is empty!")
            return None
        return this.queue[this.front]

// Example Usage:
q = new Queue(3)  // Create a queue with capacity 3

q.enqueue(1)   // Enqueued 1 to queue
q.enqueue(2)   // Enqueued 2 to queue
q.enqueue(3)   // Enqueued 3 to queue
q.enqueue(4)   // Queue Overflow!

print(q.dequeue())  // Dequeued 1 from queue
print(q.dequeue())  // Dequeued 2 from queue
print(q.peek())    // 3`}</code>
        </pre>

        <p className="mb-4 font-semibold">what this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>the queue class is initialized with a fixed capacity.</li>
          <li>enqueue adds an item to the rear, dequeue removes the front item, and peek shows the front item.</li>
          <li>it manages the front and rear indices to keep track of the current boundaries of the queue.</li>
        </ul>

        <p className="mb-6">
          implementing queues using arrays is efficient but has a limitation of fixed size. how would you overcome this limitation? let's explore the next approach.
        </p>

        <h3 className="text-xl font-semibold mb-4">Linked List Implementation of Queues</h3>
        <p className="mb-4">
          implementing a queue using a linked list involves creating a linked list where each node stores an element.
        </p>
        <p className="mb-4">
          the front of the queue is the head of the linked list, and the rear is the tail.
        </p>
        <p className="mb-4">
          here's a simple pseudocode example:
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`class Node:
    constructor(data):
        this.data = data
        this.next = null

class Queue:
    constructor():
        this.front = null
        this.rear = null
        this.size = 0

    is_empty():
        return this.size == 0

    enqueue(data):
        new_node = new Node(data)
        if this.rear is null:
            this.front = this.rear = new_node
        else:
            this.rear.next = new_node
            this.rear = new_node
        this.size = this.size + 1
        print(f"Enqueued {data} to queue")

    dequeue():
        if this.is_empty():
            print("Queue Underflow!")
            return null
        item = this.front.data
        this.front = this.front.next
        this.size = this.size - 1
        if this.front is null:
            this.rear = null
        print(f"Dequeued {item} from queue")
        return item

    peek():
        if this.is_empty():
            print("Queue is empty!")
            return null
        return this.front.data

// Example Usage:
q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

print(q.dequeue())
print(q.dequeue())
print(q.peek())`}</code>
        </pre>

        <p className="mb-4 font-semibold">What this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>each element is a node in the linked list.</li>
          <li>enqueue adds a new node at the end (tail) of the list.</li>
          <li>dequeue removes the head node.</li>
          <li>linked list implementation allows dynamic sizing, avoiding the overflow issue.</li>
        </ul>

        <p className="mb-6">
          queues using linked lists are dynamically sized and efficient for managing data.
          let's work in pairs to compare the advantages and disadvantages of implementing queues using arrays versus linked lists.
        </p>

        <h3 className="text-xl font-semibold mb-4">Deque (Double-Ended Queue)</h3>
        <p className="mb-4">
          A deque (double-ended queue) is a versatile data structure that allows elements to be added or removed from both ends.
        </p>
        <p className="mb-4">
          It combines the features of both stacks and queues.
        </p>
        <p className="mb-6">
          analogy: imagine a two-way street where cars can enter or exit from either end.
        </p>

        <p className="mb-4 font-semibold">operations:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>add_front (or push_front): adds an element to the front of the deque.</li>
          <li>add_rear (or push_back): adds an element to the rear of the deque.</li>
          <li>remove_front (or pop_front): removes the element from the front of the deque.</li>
          <li>remove_rear (or pop_back): removes the element from the rear of the deque.</li>
          <li>peek_front (or get_front): retrieves the element at the front without removing it.</li>
          <li>peek_rear (or get_rear): retrieves the element at the rear without removing it.</li>
          <li>isEmpty: checks if the deque is empty.</li>
          <li>size: returns the number of elements in the deque.</li>
        </ul>

        <p className="mb-4 font-semibold">implementation:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Deques can be implemented using both arrays and linked lists.</li>
          <li>Array-based deques may use a circular buffer to efficiently manage front and rear pointers.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Applications of Queues and Deques</h3>
        <p className="mb-4">
          Queues and deques have various applications in computer science and real-world scenarios:
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FApplications%20of%20Queues%20and%20Deques%20-%20DSA.png" alt="Applications of Queues" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Algorithms that Use Queues</h3>
        <p className="mb-4">
          Many algorithms rely on queues to solve complex problems:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>breadth-first search (bfs):</strong> Queues are used to keep track of vertices to visit in a graph.</li>
          <li><strong>shortest path algorithms:</strong> Algorithms like dijkstra's and bellman-ford use priority queues to find the shortest paths in a graph.</li>
          <li><strong>cache management:</strong> Queues are used in cache replacement policies (e.g., lru (least recently used)) to determine which items to evict.</li>
        </ul>

        <p className="mb-6">
          let's discuss as a group how queues simplify these algorithms compared to other data structures.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://cdn.programiz.com/sites/tutorial2program/files/queue-implementation.png" alt="Queue Implementation" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          Now, for a quick task to reinforce what we've covered today, consider a scenario: You are tasked with managing a print queue. Write down the steps to add print jobs, process them in order, and handle priority jobs using the queue operations we discussed. Then, discuss your approach with a nearby peer.
        </p>
      </section>
    </div>
  );
};

export default Module3_2;
