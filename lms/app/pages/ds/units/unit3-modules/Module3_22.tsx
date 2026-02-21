'use client';
import React from 'react';

const Module3_22: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.22</div>
        <div className="lesson-title-main">
          <h1>Clash of Codes #2 | Stacks, Queues & Linked Lists</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="mb-6 flex flex-col items-center">
          <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Debugging" className="w-full max-w-md h-auto rounded-lg shadow-md" />
        </div>

        <p className="mb-6">
          Welcome to your 2nd Clash of Codes session of this course. In our previous Clash of Codes session, you designed and defended your own algorithmic approaches. You learned to think critically about why a certain approach works best.
        </p>

        <p className="mb-6">
          This time, we're switching perspectives. You'll become debug detectives, tracing through pre-written programs that seem right — but secretly hide multiple logical and structural flaws.
        </p>

        <p className="mb-6">
          This activity will push your understanding of Stacks, Queues, and Linked Lists, testing how deeply you can reason about data flow and algorithm behavior.
        </p>

        <h3 className="text-xl font-semibold mb-4">Session Objective</h3>
        <p className="mb-3">Your mission is to:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Detect multiple bugs hidden in each program.</li>
          <li>Explain why those bugs exist and how they affect the logic.</li>
          <li>Suggest fixes using reasoning.</li>
          <li>Focus on logical analysis, teamwork, and explanation clarity.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Session Context</h3>
        <p className="mb-4">
          You've now explored recursion, sorting, stacks, queues, and linked lists. In this session, we'll combine those ideas in a challenge designed to sharpen:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Debugging and tracing ability</li>
          <li>Team collaboration under time pressure</li>
          <li>Clear verbal reasoning and communication</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Session Flow</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Activity</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0–5 min</td>
                <td className="border border-gray-300 px-4 py-2">Kickoff & Rules</td>
                <td className="border border-gray-300 px-4 py-2">Mentor explains session goals, format, and judging.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">5–10 min</td>
                <td className="border border-gray-300 px-4 py-2">Distribute Debug Challenges</td>
                <td className="border border-gray-300 px-4 py-2">Teams receive the same set of 3 multi-bug code snippets (C++).</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">10–35 min</td>
                <td className="border border-gray-300 px-4 py-2">Debugging Time</td>
                <td className="border border-gray-300 px-4 py-2">Teams identify bugs, their causes, and write fixes on the provided answer sheet.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">35–45 min</td>
                <td className="border border-gray-300 px-4 py-2">Defense Round</td>
                <td className="border border-gray-300 px-4 py-2">Each team presents findings for one snippet (randomly assigned) in under 3 minutes.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">45–50 min</td>
                <td className="border border-gray-300 px-4 py-2">Reveal & Wrap-Up</td>
                <td className="border border-gray-300 px-4 py-2">Discusses correct versions and announces the winning team.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">50–60 min</td>
                <td className="border border-gray-300 px-4 py-2">Decompress and Q and A</td>
                <td className="border border-gray-300 px-4 py-2">Free time to relax and ask doubts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">How to Deliver Your Results</h3>
        <p className="mb-3">Write your findings directly on the team answer sheet.</p>
        <p className="mb-3">For each snippet, list:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-1">
          <li>Bug description.</li>
          <li>Why it happens.</li>
          <li>Your suggested fix.</li>
        </ol>
        <p className="mb-6">
          During defense, one spokesperson presents while others may add supporting points. No slides or code editors are needed; just focus on logical clarity and structured reasoning.
        </p>

        <h3 className="text-xl font-semibold mb-4">The Challenges</h3>
        <p className="mb-6">
          Each code block below hides 5–6 bugs. Your task is to identify them, explain their impact, and suggest fixes.
        </p>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Snippet 1 — "Bracket Balancer Breakdown" (Stack)</h3>
          <p className="mb-4">
            <strong>Context:</strong> The following code attempts to check if brackets in an expression are balanced using a stack. However, several logical errors prevent it from working correctly. Your task is to find 5 bugs that cause incorrect results or runtime issues.
          </p>

          <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
            <code>{`bool isBalanced(string expr) {
    stack<char> st;
    for (int i = 0; i <= expr.length(); i++) {
        char ch = expr[i];
        if (ch == '(' || ch == '{' || ch == '[')
            st.pop();
        else if (ch == ')' || ch == '}' || ch == ']') {
            if (st.empty()) return true;
            char top = st.top();
            if ((ch == ')' && top == '(') || 
                (ch == '}' && top == '{') ||
                (ch == ']' && top == '['))
                st.pop();
        }
    }
    return st.empty();
}`}</code>
          </pre>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Snippet 2 — "The Unstable Queue" (Circular Queue)</h3>
          <p className="mb-4">
            <strong>Context:</strong> This code is intended to implement a circular queue with enqueue functionality. However, logical flaws lead to data overwrites, incorrect index handling, and missing checks. Find at least 5 issues that prevent it from working correctly.
          </p>

          <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
            <code>{`class CircularQueue {
    int* arr;
    int front, rear, size;

public:
    CircularQueue(int s) {
        size = s;
        arr = new int[size];
        front = rear = 0;
    }

    void enqueue(int val) {
        if ((rear + 1) % size == front)
            cout << "Queue Overflow";
        rear = (rear + 1) % size;
        arr[rear] = val;
        if (front == 0) front++;
    }
};`}</code>
          </pre>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Snippet 3 — "The Reversal Riddle" (Linked List)</h3>
          <p className="mb-4">
            <strong>Context:</strong> This function tries to reverse a linked list and then find its middle node. However, pointer updates and loop conditions make it fail. Identify 6 bugs that break the intended logic.
          </p>

          <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
            <code>{`struct Node {
    int val;
    Node* next;
};

Node* reverseAndFindMid(Node* head) {
    Node* prev = NULL, *curr = head;
    while (curr->next != NULL) {
        Node* temp = curr->next;
        curr->next = prev;
        prev = curr->next;
        curr = temp;
    }
    Node* slow = prev, *fast = prev;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold mb-2">Pro Tip:</p>
          <p>When debugging, trace through the code with a simple example on paper. Draw the data structure state at each step. This visual approach often reveals bugs that are hard to spot by just reading the code!</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="font-semibold mb-2">Judging Criteria:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Number of bugs correctly identified</li>
            <li>Quality of explanation (why the bug exists)</li>
            <li>Correctness of suggested fixes</li>
            <li>Clarity of presentation during defense</li>
            <li>Team collaboration and reasoning</li>
          </ul>
        </div>

        <p className="mb-6 text-center font-semibold text-lg">
          Good luck, debug detectives! 🔍
        </p>
      </section>
    </div>
  );
};

export default Module3_22;
