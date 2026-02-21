'use client';
import React from 'react';

const Module5_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Binary Search Trees (BSTs)</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          In this lesson, you will be learning a special type of tree- Binary Search Tree, which is commonly known as BST.
        </p>
      </section>

      <section className="content-section">
        <h3>What is a BST?</h3>
        <p>
          Imagine a Binary Search Tree (BST) as a well-organized phone directory. When you look up a name, you don't start at the beginning and flip through every page—you open the book in the middle, decide whether the name comes before or after the middle entry, and then narrow your search accordingly. In a BST, each node acts like a page in the directory: the left branch holds entries (or values) that come before the current node (i.e., are smaller), and the right branch holds entries that come after (i.e., are larger). This structured approach lets you quickly zero in on the desired value, just like efficiently finding a name in a sorted phone book.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/java+oops+crash+course/binary+search+tree+diagram.png"
            alt="Binary Search Tree"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p className="font-semibold">Visual representation of a Binary Search Tree</p>
        <p className="mt-4"><strong>Node Structure:</strong> Each node in a BST contains three parts:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Data:</strong> The value stored in the node.</li>
          <li><strong>Left Child:</strong> A pointer/reference to the left child node.</li>
          <li><strong>Right Child:</strong> A pointer/reference to the right child node.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Properties of a Binary Search Tree:</h3>
        <p>
          At its core, a Binary Search Tree is a type of binary tree with a specific organizational principle. Each node in the tree contains a key, and the nodes are organized in such a way that for every node:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>All nodes in the left subtree have keys smaller than the node's key.</li>
          <li>All nodes in the right subtree have keys greater than the node's key. This elegant property enables efficient searching, insertion, and deletion operations.</li>
          <li>An BST in data structure does not contain duplicate values. Each value must be unique to maintain the order property.</li>
          <li>Each subtree of a BST is also a BST. This means the left and right children of any node are roots of their own Binary Search Trees.</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/java+oops+crash+course/BST+visual+representation+1.png"
            alt="BST Properties"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          When you're looking for a specific key, you don't have to examine every node; instead, you can quickly navigate through the tree based on the comparison of keys. This approach is far more efficient than searching through an unsorted array or a linked list.
        </p>
        <p>
          Consider a scenario where you're searching for a particular book in a well-organized library. The librarian provides you with a systematic way to narrow down your search, leading you directly to the book you're seeking. Similarly, the structure of a binary search tree guides algorithms to efficiently locate the desired data.
        </p>
      </section>

      <section className="content-section">
        <h3>Why is a Binary Search Tree required?</h3>
        <p>
          The two major factors that make a binary search tree an optimum solution to any real-world problems are Speed and Accuracy.
        </p>
        <p>
          Due to the fact that the binary search is in a branch-like format with parent-child relations, the algorithm knows in which location of the tree the elements need to be searched. This decreases the number of key-value comparisons the program has to make to locate the desired element.
        </p>
        <p>
          Additionally, in case the element to be searched is greater or less than the parent node, the node knows which tree side to search for. The reason is that the left sub-tree is always less than the parent node, and the right sub-tree always has values greater than the parent node.
        </p>
        <p>
          BST is commonly utilized to implement complex searches, robust game logics, auto-complete activities, and graphics. The algorithm efficiently supports operations like search, insert, and delete.
        </p>
      </section>

      <section className="content-section">
        <h3>Advantages and disadvantages of BST</h3>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/java+oops+crash+course/adv+dis+adv+bst.png"
            alt="Advantages and Disadvantages of BST"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          Binary Search Trees offer efficient operations (O(log n) for balanced trees), ordered data, and dynamic resizing. However, unbalanced trees lead to O(n) performance, balancing is complex, and deletion can be intricate. Space and traversal overhead are also concerns.
        </p>
        <p className="mt-4">Take a look at this video to get an understanding of what a BST is.</p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/p7-9UvDQZ3w" title="L39. Introduction to Binary Search Tree | BST" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Search in a BST</h3>
        <p>
          Searching in a Binary Search Tree is an efficient method for finding a specific value in a sorted, hierarchical structure. The BST property—that all values in the left subtree are less than the node and those in the right subtree are greater—enables the search process to quickly narrow down the location of the desired value.
        </p>
        <h4 className="font-semibold mt-4">How It Works:</h4>
        <p>
          Before you even start comparing the values and start the search operation, one crucial step you have to perform is to check if the BST is empty or not, because If the tree is empty, the search will immediately return null or an indication that the value was not found. After confirming the tree is not empty, you would then
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Start at the Root:</strong> Begin by comparing the target value with the root node's value.</li>
          <li><strong>Decision Process:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>If the target equals the node's value, you've found your element.</li>
              <li>If the target is less than the node's value, move to the left child.</li>
              <li>If the target is greater, move to the right child.</li>
            </ul>
          </li>
          <li><strong>Repeat:</strong> Continue this comparison and traversal until you either find the target or reach a null pointer, indicating the target is not present in the tree.</li>
        </ol>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/java+oops+crash+course/Binary_search_tree_example.gif"
            alt="BST Search Process"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p><strong>Binary Search Tree (BST) Search:</strong></p>
        <p>
          The search starts at the root node (21). It follows the BST property: Left subtree contains smaller values, and right subtree contains larger values. The search efficiently navigates the tree by eliminating half of the possible elements at each step. When the desired value (e.g., 27) is found, the search stops. Linear Search in a Sorted Array
        </p>
        <p>
          The search starts from the first element (5). It checks each element one by one sequentially. This process is slower compared to BST search since it does not eliminate large portions of the data at once.
        </p>
        <p className="mt-4"><strong>Key point to note:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li>BST search reduces the search space at every step, typically achieving O(log n) time complexity.</li>
          <li>The recursive nature of the search function simplifies the code.</li>
          <li>Understanding BST search lays the foundation for implementing other operations like insertion and deletion.</li>
        </ul>
        <p className="mt-4">Let's learn how to perform searching in a BST by watching the video given below.</p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/KcNt6v_56cc" title="L40. Search in a Binary Search Tree | BST | C++ | Java" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Inserting a node in a BST</h3>
        <p>
          The key principle behind BSTs is maintaining a sorted order. When inserting a new node, we need to ensure this order is preserved. This means smaller values go to the left, and larger values to the right of a given node.
        </p>
        <p className="mt-4">To insert a node in a binary tree, we do the following:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>If a tree is empty, the first node becomes the root, and you are done.</li>
          <li>Compare the root/parent's value; if it's higher, go right, if it's lower go left. If it's the same, then the value already exists, so that you can increase the duplicate count (multiplicity).</li>
          <li>Repeat #2 until we find an empty slot to insert the new node.</li>
        </ol>
        <h4 className="font-semibold mt-4">Example</h4>
        <p>
          Let's say we have a BST containing the values 5, 3, and 8, and we want to insert the value 6.
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>We start at the root (5). 6 is larger than 5, so we move to the right child (8).</li>
          <li>6 is smaller than 8, so we move to the left child (which is currently empty).</li>
          <li>We've found an empty spot, so we create a new node with the value 6 and insert it as the left child of 8.</li>
        </ol>
        <p className="mt-4">Now, let's look at the animation and understand how it is done.</p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/java+oops+crash+course/BST-insertion-animation.gif"
            alt="BST Insert Animation"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          The animation shows the insertion of 10 into an existing Binary Search Tree (BST). The insertion follows the BST property:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Left subtree contains smaller values</li>
          <li>Right subtree contains larger values</li>
        </ul>
        <h4 className="font-semibold mt-4">Steps to Insert 10:</h4>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Start at the Root (6).</strong> Since 10 &gt; 6, move to the right subtree.</li>
          <li><strong>Compare with Node 8.</strong> Since 10 &gt; 8, move to the right subtree.</li>
          <li><strong>Compare with Node 9.</strong> Since 10 &gt; 9, move to the right subtree.</li>
          <li><strong>Insert as the Right Child of 9.</strong> The right subtree of 9 is empty, so 10 is inserted here.</li>
        </ol>
        <p className="mt-4">
          This maintains the BST property, ensuring efficient search and insertion operations.
        </p>
        <p className="mt-4">
          You might already know how to perform an insertion in a binary tree. Now, you will learn how to perform the insert operation in a BST.
        </p>
        <div className="flex justify-center my-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/FiFiNvM29ps" title="L43. Insert a given Node in Binary Search Tree | BST | C++ | Java" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Deleting a node in a BST</h3>
        <p>
          Deleting a node from a Binary Search Tree (BST) is a bit more complex than insertion because we need to maintain the sorted order of the tree while handling different scenarios.
        </p>
        <h4 className="font-semibold mt-4">Scenarios:</h4>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Deleting a Leaf Node:</strong> This is the simplest case. We just remove the node, and its parent's pointer is set to NULL.</li>
          <li><strong>Deleting a Node with One Child:</strong> We replace the node with its child, effectively "promoting" the child to its parent's position.</li>
          <li><strong>Deleting a Node with Two Children:</strong> This is the trickiest scenario. We need to find a suitable replacement node that maintains the BST's sorted order. There are two common</li>
        </ol>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/java+oops+crash+course/bst-remove.gif"
            alt="BST Delete Animation"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>
        <p>
          The animation demonstrates the deletion of node 0012 from a Binary Search Tree (BST). The deletion follows three possible cases in BST:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Node has no children (leaf node)</li>
          <li>Node has one child</li>
          <li>Node has two children</li>
        </ul>
        <h4 className="font-semibold mt-4">Steps to Delete 0012:</h4>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Start at the Root (0030).</strong> Since 0012 &lt; 0030, move left.</li>
          <li><strong>Move to Node 0010.</strong> Since 0012 &gt; 0010, move right.</li>
          <li><strong>Move to Node 0015.</strong> Since 0012 &lt; 0015, move left.</li>
          <li><strong>Find Node 0012.</strong> Node 0012 is found as a leaf node (no children).</li>
          <li><strong>Delete Node 0012.</strong> Since 0012 has no children, simply remove it from the tree.</li>
        </ol>
        <h4 className="font-semibold mt-4">Final Result:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>The BST structure remains valid.</li>
          <li>The deletion is straightforward as 0012 was a leaf node.</li>
          <li>The parent node (0015) no longer has a left child.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module5_1;
