'use client';
import React from 'react';

const Module3_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.12</div>
        <div className="lesson-title-main">
          <h1>Introduction to Singly Linked List</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this lesson, we'll learn about what is linked list and what are their types and operations.
        </p>

        <p className="mb-4">
          Let's start with some array basics.
        </p>

        <h3 className="text-xl font-semibold mb-4">Array Basics</h3>
        <p className="mb-6">
          An array is a collection of elements of the same type, stored in a continuous block of memory. Arrays allow easy access to elements using an index, where indexing starts at 0.
        </p>

        <p className="mb-4">
          Memory here means like the elements are arranged in order while declared. They are stored in linear addresses like lets take an example of a street. The houses are named as per order. Say Number 1, Raju Street. In case of arrays it is stored in Number 2, Raju Street .. Number 3, Raju Street and so on. Index is generally the address of the houses.
        </p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://cdn.programiz.com/sites/tutorial2program/files/c-arrays.jpg" alt="Array Memory" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">Image Credits: Programiz</p>
        </div>

        <p className="mb-3 font-semibold">Example in C++:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`int numbers[5] = {10, 20, 30, 40, 50};
cout << numbers[2];  // Output: 30`}</code>
        </pre>

        <p className="mb-3 font-semibold">Key Points:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Arrays have a fixed size that cannot change after declaration.</li>
          <li>They are efficient for accessing elements but resizing or inserting new elements is not easy.</li>
        </ul>

        <p className="mb-4">
          Now, let's try to answer the question of what a linked list is?
        </p>

        <h3 className="text-xl font-semibold mb-4">What are Linked Lists</h3>
        <p className="mb-4">
          A linked list is a data structure where elements (called nodes) are connected using pointers. Each node contains:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Data:</strong> The value stored in the node.</li>
          <li><strong>Pointer:</strong> A reference to the next node in the list.</li>
        </ul>

        <p className="mb-3 font-semibold">Linked List Visualized:</p>

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162542/Linked-List-Data-Structure.png" alt="Linked List Visualization" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
        </div>

        <p className="mb-6">
          A linked list is a collection of elements called nodes, where each node contains data and a pointer to the next node. Unlike arrays, linked lists are not stored in a continuous block of memory. Instead, they are scattered across different memory locations, with each node pointing to the next.
        </p>

        <p className="mb-4">
          Imagine the houses on Raju Street are not in order but scattered across the city.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Each house has a signboard directing you to the next house.</li>
          <li>The first house (the head) starts the chain, and the last house points to NULL, indicating the end.</li>
        </ul>

        <p className="mb-6">
          Unlike arrays, linked lists allow more flexibility in adding and removing nodes, but accessing a specific house takes time as you must follow the directions from the start.
        </p>

        <p className="mb-3 font-semibold">Example in C++:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`class Node {
    int data;
    Node* next;
};`}</code>
        </pre>

        <p className="mb-6">
          Refer this <a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GFG_link</a> to know how exactly to implement linked lists in C++. Some practice on this is very helpful to understand this concept.
        </p>

        <p className="mb-4">
          Now that you know what a linked list is, let's quickly go through what are the good things it has to offer.
        </p>

        <h3 className="text-xl font-semibold mb-4">Advantages of Linked Lists over Arrays</h3>
        <p className="mb-6">
          Linked lists are like houses scattered across a city, with signboards leading to the next house. Unlike arrays, which are all neatly lined up on Raju Naidu Street, linked lists are more flexible. They can grow or shrink during runtime because their size is not fixed. For example, if you suddenly need space for one more house, you don't need to shift all the houses down the street—you simply add a signboard pointing to the new house.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Adding or removing elements is simple since you only need to update the signboards (pointers) instead of moving every house down the line like in an array.</li>
          <li>Linked lists also use memory more efficiently because they allocate space only when needed, so there's no unused extra space like in an oversized array.</li>
        </ul>

        <p className="mb-3 font-semibold">Key Points:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Dynamic Size:</strong> Linked lists can grow or shrink during runtime, unlike arrays that have a fixed size.</li>
          <li><strong>Efficient Insertion/Deletion:</strong> Adding or removing elements in the middle is easier since no shifting is required.</li>
          <li><strong>Better Memory Utilization:</strong> Memory is allocated as needed, avoiding wasted space.</li>
        </ul>

        <p className="mb-6">
          A linked list is more advantageous than an array when frequent insertions and deletions are required. This is because there is excessive shifting in the arrays addresses when performing operations such as insertion and updating.
        </p>

        <h3 className="text-xl font-semibold mb-4">Disadvantages of Linked Lists over Arrays</h3>
        <p className="mb-6">
          However, linked lists are not perfect. Since the houses are scattered, finding a specific house means starting at the first house and following all the signboards until you reach the one you want. This makes access slower than arrays, where you can directly go to the house based on its number. Also, every house needs a signboard (pointer), which takes extra space. And setting up this system of scattered houses with signboards is more complicated than neatly arranging them on Raju Naidu Street.
        </p>

        <p className="mb-3 font-semibold">Key Points:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Access Time:</strong> Accessing an element takes more time since you have to traverse the list from the beginning.</li>
          <li><strong>Memory Usage:</strong> Extra memory is required for storing pointers.</li>
          <li><strong>Complexity:</strong> Linked lists are more complicated to implement compared to arrays.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">How Are Linked Lists Stored in Memory</h3>
        <p className="mb-6">
          Linked lists do not store elements in a continuous block of memory like arrays. Instead, each element, called a node, is scattered across memory, and each node has a pointer (the signboard) that directs to the next node.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>The head node is like the first house on a random street; it starts the chain.</li>
          <li>Each house (node) points to the next house (node), and the final house has no pointer—it points to NULL, indicating the end of the list.</li>
          <li>A pointer in a node stores the memory address of the next node, like the signboard showing where the next house is located.</li>
        </ul>

        <p className="mb-3 font-semibold">Key Points:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Non-contiguous Memory:</strong> Unlike arrays, linked lists don't store elements in continuous memory locations.</li>
          <li>Each node is scattered in memory, and the pointer connects the nodes.</li>
          <li>The head node points to the first element, and each node points to the next until the last node, which points to NULL.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Types of Linked Lists</h3>

        <div className="mb-6 space-y-6">
          <div>
            <p className="font-semibold mb-3">Singly Linked List:</p>
            <p className="mb-3">Each node has data and a pointer to the next node. You can only go forward from one node to the next, like following a one-way street.</p>
            <div className="mb-3 flex flex-col items-center">
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124319/Singly-Linked-List1.png" alt="Singly Linked List" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
            </div>
            <p>Let us take the Raju Street example for Singly Linked List: Each house (node) on Raju Street has a single direction board pointing to the next house, and the last house has no board (points to NULL).</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Doubly Linked List:</p>
            <p className="mb-3">Each node has two pointers—one pointing to the next node and another pointing to the previous node. This allows you to move forward and backward, like a two-way street.</p>
            <div className="mb-3 flex flex-col items-center">
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124412/Doubly-Linked-List.png" alt="Doubly Linked List" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
            </div>
            <p>Let us take the Raju Street example for Doubly Linked List: Each house has two direction boards—one pointing to the next house and one pointing to the previous house—allowing movement forward and backward.</p>
          </div>

          <div>
            <p className="mb-3">
              Visualize Linked List and Doubly Linked List and their operations <a href="https://visualgo.net/en/list" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3">Circular Linked List:</p>
            <p className="mb-3">The last node points back to the first node instead of NULL, forming a loop. It's like a circular street with no end.</p>
            <div className="mb-3 flex flex-col items-center">
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124456/Circular-Linked-List.png" alt="Circular Linked List" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
            </div>
            <p>Let us take the Raju Street example for Circular Linked List: The houses are arranged in a circle; the last house's board points back to the first house, making it a loop.</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Doubly Circular Linked List:</p>
            <p className="mb-3">Combines the features of doubly and circular linked lists. Nodes can go forward, backward, and loop back to the start.</p>
            <div className="mb-3 flex flex-col items-center">
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124527/Doubly-Circular-Linked-List.png" alt="Doubly Circular Linked List" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
            </div>
            <p>Let us take the Raju Street example for Doubly Circular Linked List: Each house has two boards—one pointing to the next house and one to the previous—and the last house connects back to the first, forming a circular loop in both directions.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Operations in Singly Linked List</h3>

        <div className="mb-6 space-y-6">
          <div>
            <p className="font-semibold mb-3">Traversal:</p>
            <p className="mb-3">Visiting all the nodes one by one to read or display their data is called traversal. Imagine starting at the first house and following all the signboards to see each house.</p>
            
            <p className="mb-2 font-semibold">Pseudocode:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-3">
              <code>{`FUNCTION traverse(head):
    current = head
    WHILE current IS NOT NULL:
        PRINT current.data
        current = current.next
END FUNCTION`}</code>
            </pre>

            <p className="mb-2 font-semibold">Explanation:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Start at the head.</li>
              <li>While the current node is not NULL:
                <ul className="list-circle ml-6 mt-1">
                  <li>Print or process the data of the current node.</li>
                  <li>Move to the next node.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Insertion:</p>
            <p className="mb-3">Adding a new node to the list can be done at the beginning, end, or in the middle. It's like placing a new house on the street and updating the signboards to point to it.</p>
            
            <p className="mb-2 font-semibold">Pseudocode for Insertion at Beginning:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-3">
              <code>{`FUNCTION insertAtBeginning(head, value):
    newNode = CREATE_NODE(value)
    newNode.next = head
    head = newNode
    RETURN head
END FUNCTION`}</code>
            </pre>

            <p className="mb-2 font-semibold">Explanation:</p>
            <ul className="list-disc ml-6 mb-3 space-y-1">
              <li>Create a new node with the given value.</li>
              <li>Point the next of the new node to the current head.</li>
              <li>Update the head to the new node.</li>
            </ul>

            <p className="mb-3">In a singly linked list, you insert a new node at the beginning by changing the new node's pointer to the current head and then updating the head to point to the new node.</p>

            <div className="mb-3 flex flex-col items-center">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240726172733/Insertion-at-the-Beginning-of-Singly-Linked-List.webp" alt="Insertion in Linked List" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
            </div>

            <p>When inserting a new node into a linked list, the pointers of adjacent nodes are updated to maintain the list's integrity.</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Deletion:</p>
            <p className="mb-3">Removing a node involves updating the pointers of the previous node to skip the one being removed.</p>
            
            <p className="mb-2 font-semibold">Pseudocode:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-3">
              <code>{`FUNCTION deleteNode(head, key):
    IF head IS NULL:
        RETURN head

    IF head.data == key:
        temp = head
        head = head.next
        DELETE temp
        RETURN head

    current = head
    WHILE current.next IS NOT NULL AND current.next.data != key:
        current = current.next

    IF current.next IS NULL:
        RETURN head  // Key not found

    temp = current.next
    current.next = current.next.next
    DELETE temp
    RETURN head
END FUNCTION`}</code>
            </pre>

            <p className="mb-2 font-semibold">Explanation:</p>
            <ul className="list-disc ml-6 mb-3 space-y-1">
              <li>If the head is NULL, return (list is empty).</li>
              <li>If the head node matches the key:
                <ul className="list-circle ml-6 mt-1">
                  <li>Update the head to head-&gt;next and delete the old head.</li>
                </ul>
              </li>
              <li>Otherwise:
                <ul className="list-circle ml-6 mt-1">
                  <li>Traverse the list until the node before the key node is found.</li>
                  <li>Update the next pointer of the previous node to skip the key node.</li>
                  <li>Delete the key node.</li>
                </ul>
              </li>
            </ul>

            <p className="mb-3">Deleting an element at the beginning of a linked list is generally more efficient than in an array because it only requires updating the head pointer, not shifting subsequent elements.</p>

            <p className="mb-3">The below image shows how to delete a linked list node in between in a linked list.</p>

            <div className="mb-3 flex flex-col items-center">
              <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Revision-Notres/PSUP-linkedlist-Delete-From-Middle-Linked-List.png" alt="Deletion in Linked List" className="w-full max-w-2xl h-auto rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Image Credits: GeeksforGeeks</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Searching:</p>
            <p className="mb-3">Finding a node involves checking each node's data while traversing.</p>
            
            <p className="mb-2 font-semibold">Pseudocode:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-3">
              <code>{`FUNCTION search(head, key):
    current = head
    WHILE current IS NOT NULL:
        IF current.data == key:
            RETURN TRUE
        current = current.next
    RETURN FALSE
END FUNCTION`}</code>
            </pre>

            <p className="mb-2 font-semibold">Explanation:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Start at the head.</li>
              <li>While the current node is not NULL:
                <ul className="list-circle ml-6 mt-1">
                  <li>If the current node's data matches the key, return true.</li>
                  <li>Move to the next node.</li>
                </ul>
              </li>
              <li>If the end is reached without finding the key, return false.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Reversing:</p>
            <p className="mb-3">Reversing a linked list changes the direction of the pointers so that the last node becomes the head.</p>
            
            <p className="mb-2 font-semibold">Pseudocode:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-3">
              <code>{`FUNCTION reverseList(head):
    prev = NULL
    current = head
    WHILE current IS NOT NULL:
        next = current.next
        current.next = prev
        prev = current
        current = next
    RETURN prev  // New head of the reversed list
END FUNCTION`}</code>
            </pre>

            <p className="mb-2 font-semibold">Explanation:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Initialize three pointers: prev as NULL, current as head, and next as NULL.</li>
              <li>While the current node is not NULL:
                <ul className="list-circle ml-6 mt-1">
                  <li>Store current-&gt;next in next.</li>
                  <li>Update current-&gt;next to prev.</li>
                  <li>Move prev to the current node and current to next.</li>
                </ul>
              </li>
              <li>Update the head to prev.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">[Optional content] Watch these videos to expand your knowledge even more.</h3>
        
        <p className="mb-3">Watch this video to gain a basic understanding of what a linked list is.</p>
        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N6dOwBde7-M" title="Linked List Basics" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <p className="mb-3">Types of linked lists - Take a look at the video given below:</p>
        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/R9PTBwOzceo" title="Types of Linked Lists" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <p className="mb-3">Arrays Vs. Linked lists - Watch this video to understand some of the key differences between the usage of arrays and linked lists.</p>
        <div className="mb-6 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lC-yYCOnN8Q" title="Arrays vs Linked Lists" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </div>

        <p className="mb-6">
          You must be clear with the understanding of how singly linked lists work. We will dive deeper in the upcoming lessons.
        </p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FMindmaps%2FIntro%20to%20linked%20list%20-%20mindmap.png" alt="" />
      </section>
    </div>
  );
};

export default Module3_12;
