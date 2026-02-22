'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module3_17: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.17</div>
        <div className="lesson-title-main">
          <h1>The Slow & Fast Pointer Pattern</h1>
        </div>
      </div>

      <section className="content-section">

        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.tenor.com/QgC0rQXsYjEAAAAi/penguin-pudgy.gif" alt="Slow and Fast Pointers" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 mt-2">Credits: tenor</p>
        </div>

        <p className="mb-6">
          Remember the two-pointer approach we discussed earlier? In this session, you will build upon those concepts and see how some of the famous linked list problems are solved using the fast and slow pointer pattern.
        </p>

        <p className="mb-6">
          Imagine you're a detective solving a mystery. Sometimes, you need two clues to unlock a bigger secret. In linked lists, "slow and fast pointers" are like those two clues, helping us solve tricky problems like finding hidden loops or the middle element without extra memory.
        </p>

        <p className="mb-6">
          So let's uncover the magic behind it, and explore
        </p>

        <p className="mb-6">
          Slow and fast pointers (also known as the "tortoise and hare" algorithm) are a powerful technique for solving problems related to linked lists, especially when dealing with cycles or specific element locations. But what exactly is a slow and a fast pointer?🤔 Great questions, let's explore that first.
        </p>

        <h3 className="text-xl font-semibold mb-4">What are slow and fast pointers?</h3>
        <p className="mb-4">
          Slow and fast pointers, at their core, involve using two pointers that traverse a linked list at different speeds. It's like a race between a tortoise and a hare!
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>The slow pointer moves one node at a time.</li>
          <li>The fast pointer moves two nodes at a time.</li>
        </ul>
        <p className="mb-6">
          The beauty of this approach lies in its ability to solve problems efficiently, often without needing extra memory.
        </p>

        <h3 className="text-xl font-semibold mb-4">Detecting a cycle (or loop): Floyd's cycle-finding algorithm</h3>
        <p className="mb-6">
          A cycle in a linked list means that at some point, a node points back to a previous node, creating a loop. Imagine a conga line where the last person holds onto the first person's waist!
        </p>

        <p className="mb-4">
          Floyd's cycle-finding algorithm (also known as the "tortoise and hare" algorithm) uses slow and fast pointers to detect cycles.
        </p>

        <p className="mb-4">
          Let's examine how we can solve this programmatically.
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function hasCycle(head):
  slow = head
  fast = head

  while fast != null and fast.next != null:
    slow = slow.next
    fast = fast.next.next

    if slow == fast:
      return true  // cycle detected

  return false  // no cycle`}</code>
        </pre>

        <p className="mb-6">
          <strong>What this code does:</strong> This pseudocode demonstrates the basic algorithm for cycle detection. The while loop continues as long as the fast pointer doesn't reach the end of the list. Inside the loop, the pointers move at different speeds. If they meet, it confirms a cycle.
        </p>

        <p className="mb-4">
          Now that we know how to detect a cycle, let's figure out how to find where it begins.
        </p>

        <h3 className="text-xl font-semibold mb-4">Finding the starting node of a cycle</h3>
        <p className="mb-6">
          Once we've detected a cycle, we can find the starting node of the cycle (the "entrance" to the loop). This involves a clever trick using the meeting point of the slow and fast pointers.
        </p>


        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function findCycleStart(head):
  slow = head
  fast = head

  // detect cycle
  while fast != null and fast.next != null:
    slow = slow.next
    fast = fast.next.next

    if slow == fast:
      break  // cycle detected

  // if no cycle, return null
  if fast == null or fast.next == null:
    return null

  // find cycle start
  slow = head
  while slow != fast:
    slow = slow.next
    fast = fast.next

  return slow  // cycle start found`}</code>
        </pre>

        <p className="mb-6">
          <strong>What this code does:</strong> After detecting the cycle, this code resets the slow pointer to the beginning of the list and moves both pointers one step at a time. The point where they meet is the cycle's starting node.
        </p>

        <p className="mb-4">
          Finding the start of a cycle is pretty neat, right? Now, let's see how slow and fast pointers can help us find the middle of a linked list.
        </p>

        <h3 className="text-xl font-semibold mb-4">Finding the middle element</h3>
        <p className="mb-4">
          Finding the middle element of a linked list is another common problem. We can use slow and fast pointers to do this efficiently.
        </p>
        <p className="mb-6">
          The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. When the fast pointer reaches the end of the list, the slow pointer will be at the middle element.
        </p>

        <p className="mb-3 font-semibold">Here's the algorithm:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-1">
          <li>Initialize two pointers, slow and fast, to the head of the linked list.</li>
          <li>move slow one node at a time, and fast two nodes at a time.</li>
          <li>When fast reaches the end of the list (null), slow will be pointing to the middle node.</li>
        </ol>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function findMiddle(head):
  slow = head
  fast = head

  while fast != null and fast.next != null:
    slow = slow.next
    fast = fast.next.next

  return slow  // middle element`}</code>
        </pre>

        <p className="mb-6">
          <strong>What this code does:</strong> This code efficiently finds the middle element by moving the fast pointer twice as fast as the slow pointer. When the fast pointer reaches the end, the slow pointer is at the middle.
        </p>

        <p className="mb-4">
          Now that we've mastered finding the middle, let's move on to a slightly more complex problem: removing the nth node from the end of a linked list.
        </p>

        <h3 className="text-xl font-semibold mb-4">Removing the nth node from the end</h3>
        <p className="mb-4">
          This problem requires a bit of thinking, but is very solvable with slow and fast pointers.
        </p>
        <p className="mb-6">
          The key idea is to move the fast pointer n nodes ahead of the slow pointer. Then, move both pointers until the fast pointer reaches the end. At this point, the slow pointer will be pointing to the node before the one we want to remove.
        </p>

        <p className="mb-3 font-semibold">Here's the algorithm:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-1">
          <li>Initialize two pointers, slow and fast, to the head of the linked list.</li>
          <li>move the fast pointer n nodes ahead.</li>
          <li>move both slow and fast pointers one node at a time until fast reaches the end of the list.</li>
          <li>now, slow is pointing to the node before the one we want to remove. Adjust the next pointer of slow to skip the nth node.</li>
        </ol>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function removeNthFromEnd(head, n):
  slow = head
  fast = head

  // move fast n nodes ahead
  for i from 1 to n:
    if fast == null:
      return head  // invalid n
    fast = fast.next

  // if fast is null, remove the head
  if fast == null:
    return head.next

  // move slow and fast until fast reaches the end
  while fast.next != null:
    slow = slow.next
    fast = fast.next

  // remove the nth node
  slow.next = slow.next.next

  return head`}</code>
        </pre>

        <p className="mb-6">
          <strong>what this code does:</strong> this code first advances the fast pointer by n positions. Then, it moves both slow and fast pointers until fast reaches the end. Finally, it removes the nth node from the end by adjusting the next pointer of the slow pointer.
        </p>

        <p className="mb-4">
          We're getting really good at this! Let's tackle one more problem: finding the intersection point of two linked lists.
        </p>

        <h3 className="text-xl font-semibold mb-4">Finding the intersection point of two linked lists</h3>
        <p className="mb-6">
          Imagine two roads merging into one. Finding the intersection point of two linked lists is similar – we want to find the node where the two lists merge. We can use slow and fast pointers, along with a bit of cleverness, to solve this problem.
        </p>

        <p className="mb-3 font-semibold">Here's the algorithm:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-1">
          <li>get the lengths of both linked lists (list a and list b).</li>
          <li>Move the pointer of the longer list ahead by the difference in lengths.</li>
          <li>Now, move both pointers one node at a time until they meet. The meeting point is the intersection point.</li>
        </ol>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function getLength(head):
  length = 0
  while head != null:
    length = length + 1
    head = head.next
  return length

function findIntersection(headA, headB):
  lenA = getLength(headA)
  lenB = getLength(headB)

  // move the pointer of the longer list ahead
  if lenA > lenB:
    for i from 1 to lenA - lenB:
      headA = headA.next
  else:
    for i from 1 to lenB - lenA:
      headB = headB.next

  // move both pointers until they meet
  while headA != null and headB != null:
    if headA == headB:
      return headA  // intersection found
    headA = headA.next
    headB = headB.next

  return null  // no intersection`}</code>
        </pre>

        <p className="mb-6">
          <strong>What this code does:</strong> This code first calculates the lengths of both linked lists. Then, it advances the pointer of the longer list to equalize the starting points. Finally, it iterates through both lists until the pointers meet, indicating the intersection point.
        </p>

        <p className="mb-4">
          Wow, we've covered a lot! We've seen how slow and fast pointers can be used to solve a variety of linked list problems.
        </p>

        <h3 className="text-xl font-semibold mb-4">Checking if a linked list is a palindrome</h3>
        <p className="mb-6">
          A palindrome is a sequence that reads the same forwards and backward. Think of words like "madam" or "racecar". To check if a linked list is a palindrome, we can combine slow and fast pointers with the concept of reversing a linked list.
        </p>

        <p className="mb-3 font-semibold">Here's the approach:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-1">
          <li>Use slow and fast pointers to find the middle of the linked list.</li>
          <li>Reverse the second half of the linked list (from the middle to the end).</li>
          <li>Compare the first half of the linked list with the reversed second half. If they are the same, the linked list is a palindrome.</li>
          <li>(optional) Reverse the second half back to its original order.</li>
        </ol>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function isPalindrome(head):
  if head == null or head.next == null:
    return true  // empty or single-node list is a palindrome

  // find the middle
  slow = head
  fast = head
  while fast != null and fast.next != null:
    slow = slow.next
    fast = fast.next.next

  // reverse the second half
  secondHalfHead = slow
  prev = null
  current = secondHalfHead
  while current != null:
    next = current.next
    current.next = prev
    prev = current
    current = next
  secondHalfHead = prev

  // compare the first and reversed second halves
  firstHalfHead = head
  while secondHalfHead != null:
    if firstHalfHead.data != secondHalfHead.data:
      return false  // not a palindrome
    firstHalfHead = firstHalfHead.next
    secondHalfHead = secondHalfHead.next

  return true  // is a palindrome`}</code>
        </pre>

        <p className="mb-6">
          <strong>What this code does:</strong> This code first finds the middle of the linked list. Then, it reverses the second half and compares it with the first half. If they are identical, the linked list is a palindrome.
        </p>

        <p className="mb-6">
          You've now learned a ton about using slow and fast pointers to solve linked list problems!
        </p>

        <p className="mb-4">
          Now, let's put your knowledge to the test.
        </p>

        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>We learned about slow and fast pointers and how they can be used to solve various linked list problems.</li>
          <li>We discussed Floyd's cycle-finding algorithm for detecting cycles in a linked list.</li>
          <li>We implemented algorithms to find the starting node of a cycle and the middle element of a linked list.</li>
          <li>We explored how to remove the nth node from the end and find the intersection point of two linked lists.</li>
          <li>We also learned how to check if a linked list is a palindrome using slow and fast pointers.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Key Takeaway:</p>
          <p>The slow and fast pointer technique (tortoise and hare) is one of the most elegant patterns in computer science. Master this pattern, and you'll have a powerful tool for solving complex linked list problems efficiently!</p>
        </div>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FMindmap%20-%20Fast%20and%20slow%20pointer.png" alt="" />

        <p className="mb-6 text-center font-semibold">
          Keep practicing and you'll master linked lists! 🚀
        </p>

        <Quiz
          title="Module 3.17 Quiz: The Slow & Fast Pointer Pattern"
          questions={[
            {
              question: "In Floyd's Cycle Detection, what is the 'meeting point' condition that confirms a loop?",
              options: ["The fast pointer reaches NULL", "The slow pointer and fast pointer refer to the same node", "The slow pointer finishes before the fast pointer", "The data in the nodes is the same"],
              correctAnswer: 1,
              explanation: "If a loop exists, the faster pointer will eventually lap the slower one and they will meet at some node within the cycle."
            },
            {
              question: "To find the STARTING node of a cycle after detecting it, what is the next logical step?",
              options: ["Reverse the entire list", "Move the slow pointer to the head and move both pointers one step at a time until they meet again", "Move the fast pointer to the end and wait", "Delete the meeting node"],
              correctAnswer: 1,
              explanation: "Math shows that the distance from the head to the loop-start is the same as the distance from the meeting point to the loop-start (counting around the circle)."
            },
            {
              question: "How do you position pointers to find the n-th node from the END in one pass?",
              options: ["Move slow n nodes ahead of fast", "Move fast n nodes ahead of slow, then move both at the same speed", "Move both at the same speed from the start", "Reverse the list twice"],
              correctAnswer: 1,
              explanation: "Maintaining a gap of 'n' nodes between fast and slow ensures that when fast reaches the end, slow is at the correct position from the back."
            },
            {
              question: "Why is the Slow/Fast pointer pattern preferred over using a Hash Set for cycle detection in interviews?",
              options: ["It is easier to understand", "It uses O(1) extra space instead of O(n)", "It always finds the cycle faster", "It works only for singly linked lists"],
              correctAnswer: 1,
              explanation: "Space optimization is a key goal in many algorithm problems; avoid using extra structures when pointers alone can solve the issue."
            },
            {
              question: "When finding the intersection of two lists with lengths L1 and L2, why do we move the longer list's pointer ahead by |L1 - L2|?",
              options: ["To skip the intersection", "To align the remaining distance to the intersection point for both lists", "Because the computer requires equal length inputs", "To find the middle element"],
              correctAnswer: 1,
              explanation: "By aligning the end-points of our search, we ensure that if there is a common node, both pointers will land on it at the exact same step."
            }
          ]}
          subject="DS"
          unitId={3}
          moduleId={17}
        />
      </section>
    </div>
  );
};

export default Module3_17;
