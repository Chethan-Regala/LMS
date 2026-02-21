'use client';
import React from 'react';

const Module4_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.5</div>
        <div className="lesson-title-main">
          <h1>Introduction to Binary Trees</h1>
        </div>
      </div>

      <section className="content-section">
        <p>
          Remember the concept you've learned from the previous lesson? Do you recall the properties of Trees and Forests?
        </p>
        <p>
          In this lesson, we're going to explore a specific type of tree that's used extensively in computer science: the Binary Tree. Imagine you're building a family tree where each parent can have at most two children. Binary trees have a similar structure. So let's uncover the magic behind it, and explore.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold">
            A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>What is a binary tree?</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>A binary tree is a special type of tree where each node can have at most two children: a left child and a right child.</li>
          <li>Think of it like a family tree where each parent can have at most two children.</li>
          <li>The topmost node in the binary tree is called the root.</li>
        </ul>

        <h4 className="font-semibold mt-4">Example</h4>
        <p>Here's an example of a binary tree:</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`      1
     / \\
    2   3
   / \\
  4   5`}</pre>
        </div>
        <p>In this example:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>1 is the root node.</li>
          <li>2 and 3 are children of 1.</li>
          <li>4 and 5 are children of 2.</li>
        </ul>
        <p className="mt-4">
          Make sure you read out loud and speak with a nearby peer. Ask yourself to find out what is the left child node and what is the right child node.
        </p>
      </section>

      <section className="content-section">
        <h3>What are the properties of binary trees?</h3>
        <p>There are several important properties of binary trees that are essential to understand:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Maximum number of nodes at level l:</strong> 2^l, where l is the level number, the level number starts from 0.</li>
          <li><strong>Maximum number of nodes in a binary tree of height h:</strong> 2^(h+1) – 1, where h is the height of the tree, the height of the tree starts from 0.</li>
          <li><strong>In a binary tree with N nodes, the minimum possible height or the number of levels is:</strong> log2(n+1) - 1</li>
          <li><strong>A binary tree that has 'l' leaves, the number of nodes with degree 2 is at least l-1</strong></li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Types of Binary Trees</h3>
        <p>There are also different types of binary trees:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Full Binary Tree:</strong> A binary tree in which each node has exactly 0 or 2 children.</li>
          <li><strong>Complete Binary Tree:</strong> A binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.</li>
          <li><strong>Perfect Binary Tree:</strong> A binary tree in which all interior nodes have two children and all leaves are at the same level.</li>
        </ul>

        <h4 className="font-semibold mt-4">Analogy</h4>
        <p>Think of these types of trees like arranging chairs in a hall:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Full Binary Tree:</strong> Every chair either has two people sitting next to it or no one.</li>
          <li><strong>Complete Binary Tree:</strong> You fill the hall row by row from left to right, and if the last row isn't full, all the chairs are on the left side.</li>
          <li><strong>Perfect Binary Tree:</strong> Every chair is filled, and each row is completely full.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Visual representation of tree types</h3>

        <h4 className="font-semibold mt-4">Full Binary Tree</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Every node has either 0 or 2 children.</li>
          <li>All internal nodes have exactly two children.</li>
          <li>Also called a Proper Binary Tree.</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20251006165209323580/420046797.webp"
            alt="Full Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">Complete Binary Tree</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>All levels are completely filled except possibly the last.</li>
          <li>Last level nodes are filled from the left side.</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20251006165209642181/420046800.webp"
            alt="Complete Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">Perfect Binary Tree</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>All internal nodes have 2 children</li>
          <li>All leaf nodes are at the same level.</li>
          <li>Leaf nodes = Internal nodes + 1</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20251006165209703112/420046801.webp"
            alt="Perfect Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">Balanced Binary Tree</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Tree height is O(log n).</li>
          <li>For every node, height(left) - height(right) ≤ 1.</li>
          <li>Example: AVL Tree.</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20251006165210031995/420046805.webp"
            alt="Balanced Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">Degenerate Binary Tree</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Every internal node has only one child.</li>
          <li>Performance-wise same as a linked list.</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20251006165209378885/420046798.webp"
            alt="Degenerate Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">Skewed Binary Tree</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>A degenerate tree where nodes are only on one side.</li>
          <li>Two types: Left-skewed and Right-skewed.</li>
        </ul>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20251006170451984835/420046799.webp"
            alt="Skewed Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>Why is a binary tree important?</h3>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fbinary%20tree%20importance.png"
            alt="Why Binary Trees are Important"
            className="max-w-2xl rounded-lg shadow-md"
          />
        </div>

        <h4 className="font-semibold mt-4">Analogy</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Think of a regular tree as a general store where items are placed randomly on shelves. It might take you a while to find what you're looking for.</li>
          <li>A binary search tree is like a sorted library where books are arranged alphabetically. It's much faster to find a specific book.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Time and space complexity analysis compared to a regular tree</h3>
        <p>
          When considering the efficiency of binary trees, it's important to compare them with general trees in terms of time and space complexity:
        </p>
        <p className="mt-4"><strong>Time Complexity:</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Search:</strong> In a balanced binary search tree, the search time is O(log n), whereas, in a general tree, it can be O(n) in the worst case.</li>
          <li><strong>Insertion/Deletion:</strong> Similar to search, balanced binary trees offer O(log n) time complexity, while general trees can degrade to O(n).</li>
        </ul>
        <p className="mt-4"><strong>Space Complexity:</strong></p>
        <p>
          The space complexity for both binary trees and general trees is O(n), where n is the number of nodes. However, binary trees have a fixed structure, which can make memory allocation and management more predictable.
        </p>
      </section>

      <section className="content-section">
        <h3>Syntax to declare a Node of Binary Tree in different languages:</h3>
        <p><strong>C++:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Node structure
class Node {
public:
    int data;
    Node* left, * right;

    Node(int key) {
        data = key;
        left = nullptr;
        right = nullptr;
    }
};`}</pre>
        </div>

        <p className="mt-4"><strong>Java:</strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Node structure
class Node {
    int key;
    Node left, right;
    public Node(int item)
    {
        key = item;
        left = right = null;
    }
}`}</pre>
        </div>
      </section>

      <section className="content-section">
        <h3>Creating a Binary Tree</h3>
        <p>
          In this example, we will explore how to create a Binary Tree with four nodes 2, 3, 4, 5.
        </p>
        <div className="flex flex-col items-center my-6">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fbinary%20tree%20example.webp"
            alt="Creating a Binary Tree"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>

        <p className="mt-4"><strong>C++: </strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`#include <iostream>
using namespace std;

// Node structure
class Node {
public:
    int data;
    Node* left, * right;

    Node(int key) {
        data = key;
        left = nullptr;
        right = nullptr;
    }
};

int main(){
    // Initilize and allocate memory for tree nodes
    Node* firstNode = new Node(2);
    Node* secondNode = new Node(3);
    Node* thirdNode = new Node(4);
    Node* fourthNode = new Node(5);

    // Connect binary tree nodes
    firstNode->left = secondNode;
    firstNode->right = thirdNode;
    secondNode->left = fourthNode;
    return 0;
}`}</pre>
        </div>

        <p className="mt-4"><strong>Java: </strong></p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`// Node structure
class Node {
    int data;
    Node left, right;
    Node(int d) {
        data = d;
        left = null;
        right = null;
    }
}

class Solution {
    public static void main(String[] args) {
        // Initialize and allocate memory for tree nodes
        Node firstNode = new Node(2);
        Node secondNode = new Node(3);
        Node thirdNode = new Node(4);
        Node fourthNode = new Node(5);

        // Connect binary tree nodes
        firstNode.left = secondNode;
        firstNode.right = thirdNode;
        secondNode.left = fourthNode;

    }
}`}</pre>
        </div>

        <p className="mt-4">
          In the above code, we have created four tree nodes firstNode, secondNode, thirdNode and fourthNode with values 2, 3, 4 and 5 respectively, and then established links between those nodes wrt the given tree structure.
        </p>
      </section>

      <section className="content-section">
        <h3>What are the traversal methods?</h3>
        <p>
          Tree traversal is the process of visiting each node in the tree exactly once.
        </p>
        <p>The following are the different traversal methods for a binary tree:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>In-Order Traversal:</strong> Visit the left subtree, then the root, and then the right subtree.</li>
          <li><strong>Pre-Order Traversal:</strong> Visit the root, then the left subtree, and then the right subtree.</li>
          <li><strong>Post-Order Traversal:</strong> Visit the left subtree, then the right subtree, and then the root.</li>
          <li><strong>Level-Order Traversal:</strong> Visit all nodes level by level from left to right.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Activity.</h3>
        <p><strong>Instructions:</strong></p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Click on the default node (0) provided in the visualizer, and you will be able to see a + button just below the root node (0) on either side.</li>
          <li>Click on any one of the + buttons to add another node. Values will be added by the system, so no need to worry about assigning values.</li>
          <li>To delete a specific node, click on that node and click the red Delete node button.</li>
          <li>Once you are done adding the desired number of nodes, click on the Cancel button in the top right corner to exit edit mode.</li>
          <li>You can select the desired traversal type from the dropdown provided in the top left corner of the screen.</li>
        </ol>

        <p className="mt-4"><strong>What you need to do?</strong></p>
        <p>Create a tree</p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
          <pre>{`     1
    / \\
   2   3
  / \\   \\
 4   5   6`}</pre>
        </div>
        <ul className="list-disc ml-6 space-y-2">
          <li>Perform Inorder Traversal</li>
          <li>Perform Preorder traversal</li>
          <li>Perform Post-order</li>
          <li>Observe how each of the traversals takes place and how the final output gets affected by that.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module4_5;
