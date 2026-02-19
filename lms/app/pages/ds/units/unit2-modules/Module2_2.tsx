'use client';
import React from 'react';

const Module2_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.2</div>
        <div className="lesson-title-main">
          <h1>Deep Dive into Recursion</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          Welcome back! In our previous lesson, we took our first steps into the world of recursion, exploring its basic mechanics like base cases and recursive calls—much like learning to ride a bike by understanding balance and pedaling. But just as a beginner rider needs to master turns, speeds, and terrain to go further, recursion has different "styles" or types that determine how efficiently and safely you navigate complex problems.
        </p>

        <div className="mb-6">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2Fdeep_dive%20-%20DSA.webp" alt="Recursion animation" />
          <p className="text-sm text-gray-600 mt-2">Credits: Giphy</p>
        </div>

        <p className="mb-6">
          This lesson is your advanced training session: a deep dive into the types of recursion. Think of it as upgrading from a tricycle to a mountain bike—now you can tackle steeper hills without tipping over!
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why are we learning this now?</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Recursion isn't one-size-fits-all</strong>—choosing the wrong type can lead to slow code, memory crashes, or endless loops. Mastering these types builds your intuition for elegant solutions in DSA.</li>
          <li><strong>Practical Power:</strong> Direct recursion shines in tree traversals (like scanning directories), while tail recursion optimizes space for large inputs—saving your program from stack overflow disasters.</li>
          <li><strong>Avoid Pitfalls:</strong> Indirect recursion models real interactions (e.g., social networks), but misuse it and debugging becomes a nightmare. We'll show you how to spot when iteration is better.</li>
          <li><strong>Foundation for Patterns:</strong> These concepts directly feed into upcoming lessons like subsequence patterns and sorting algorithms, where recursion is the engine driving efficiency.</li>
        </ul>

        <p className="mb-6">
          <strong>Fun fact:</strong> Recursion was popularized by John McCarthy in the 1950s for Lisp, but ancient mathematicians like Euclid used recursive thinking for GCD without computers! It's timeless, and now it's your turn to wield it like a pro.
        </p>

        <p className="mb-6">
          Have you ever wondered why some programs run out of memory on big tasks, while others breeze through? It's often recursion's "stack" at play—much like stacking books too high until they topple. Let's unpack the types to keep your code stable and speedy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Types of Recursion</h2>
        <p className="mb-6">
          We're focusing on the four key types of recursion: Direct, Indirect, Tail, and Non-Tail. You'll learn when to use each, when to steer clear, and their time/space complexities. These aren't just abstract ideas—they're the tools that power real-world algorithms like sorting massive datasets or traversing file systems.
        </p>

        <h3 className="text-xl font-semibold mb-4">Direct Recursion</h3>
        <div className="mb-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/matryoshka-russian-doll.gif" alt="Direct Recursion" />
          <p className="text-sm text-gray-600 mt-2">Image Credit: Tenor</p>
        </div>

        <p className="mb-4">
          Imagine a set of Russian nesting dolls. Each doll contains a smaller one inside, just like a function calling itself in direct recursion. You keep opening each doll until you reach the smallest one, which represents the base case.
        </p>

        <p className="mb-4">
          Direct recursion occurs when a function calls itself within its own definition, breaking a problem into smaller subproblems. This continues until a base case is reached, preventing infinite recursion and stack overflow.
        </p>

        <p className="mb-4">
          It is useful for problems with a natural recursive structure, such as factorials, Fibonacci sequences, and tree or graph traversal (e.g., depth-first search). It also works well in divide-and-conquer algorithms like quicksort and mergesort.
        </p>

        <p className="mb-4">
          Direct recursion should be avoided when a simple loop is more efficient, as it adds extra time and space overhead. It is also unsuitable for deep recursion, which may cause stack overflow, and for performance-critical applications where iterative solutions are preferred.
        </p>

        <p className="mb-2"><strong>Time Complexity:</strong> It depends on the number of recursive calls and the work done in each call. It can range from O(log n) (e.g., binary search) to O(n) (e.g., linear traversal) to O(2ⁿ) (e.g., inefficient Fibonacci solutions).</p>

        <p className="mb-6"><strong>Space Complexity:</strong> It depends on the depth of recursion and memory usage per call. It can range from O(1) (when optimized) to O(log n) (e.g., balanced recursion) to O(n) (e.g., deep recursion with large input).</p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Here's a pseudo code on Direct Recursion &amp; its explanation</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`FUNCTION factorial(n):
  IF n == 0:
    RETURN 1  // Base case: 0! = 1
  ELSE:
    RETURN n * factorial(n - 1) // Recursive call

//Example usage:
INPUT number
result = factorial(number)
OUTPUT result`}</code>
          </pre>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Defines a function factorial(n) that calculates the factorial of n.</li>
            <li>Base case: If n == 0, return 1 (since 0! = 1).</li>
            <li>Recursive step: If n &gt; 0, return n * factorial(n - 1).</li>
            <li>User Input: Takes a number from the user.</li>
            <li>Calculates &amp; Outputs Result: Calls factorial(number) and displays the result.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Indirect Recursion</h3>
        <div className="mb-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/whisper.jpg" alt="Indirect Recursion" />
          <p className="text-sm text-gray-600 mt-2">Image Credit: Visual Stock</p>
        </div>

        <p className="mb-4">
          Imagine a group of friends whispering a secret to each other—Priya whispers to Rahul, Rahul whispers to Anjali, Anjali whispers to Vikram, and eventually, the secret comes back to Priya. This continuous cycle of whispering is similar to indirect recursion, where functions call each other in a loop until a base case is met.
        </p>

        <p className="mb-4">
          Indirect recursion occurs when a function calls another function, which then calls another, eventually leading back to the original function. Instead of calling itself directly, the function relies on intermediaries to complete the recursive process.
        </p>

        <p className="mb-4">
          It is useful when functions naturally depend on each other, such as in mutual dependencies, complex state transitions, parsing algorithms, and certain game logic where components interact recursively.
        </p>

        <p className="mb-4">
          Indirect recursion should be avoided if a simpler iterative or direct recursive solution exists, as it adds complexity. Debugging can be difficult due to multiple function calls, making execution flow hard to trace. It also increases memory usage, posing a higher risk of infinite loops and stack overflow.
        </p>

        <p className="mb-2"><strong>Time Complexity:</strong> It depends on the number of recursive calls and the work done in each function. It can range from O(log n) (e.g., efficient recursive chains) to O(n) (e.g., linear mutual recursion) to O(2ⁿ) (e.g., highly inefficient indirect recursion).</p>

        <p className="mb-6"><strong>Space Complexity:</strong> It depends on the depth of the recursive chain and memory usage per function call. It can range from O(1) (if optimized) to O(log n) (e.g., balanced mutual recursion) to O(n) (e.g., deep recursive chains with large input).</p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Here's a pseudo code on Indirect Recursion &amp; its explanation</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`FUNCTION function_a(n):
    IF n > 0:
        PRINT "Function A:", n
        CALL function_b(n - 1)

FUNCTION function_b(n):
    IF n > 0:
        PRINT "Function B:", n
        CALL function_c(n - 1)

FUNCTION function_c(n):
    IF n > 0:
        PRINT "Function C:", n
        CALL function_a(n - 1)

CALL function_a(3)`}</code>
          </pre>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Function A (function_a(n)) calls Function B (function_b(n - 1)) if n &gt; 0.</li>
            <li>Function B (function_b(n)) calls Function C (function_c(n - 1)) if n &gt; 0.</li>
            <li>Function C (function_c(n)) calls Function A (function_a(n - 1)), forming a cycle.</li>
            <li>Execution: Starts with function_a(3), continues through B and C, and stops when n = 0.</li>
            <li>Unwinding: When n = 0, recursion stops, and functions return one by one until function_a(3) completes.</li>
          </ul>
        </div>

        <p className="mb-4">
          Alternatively, you can watch the video below to learn about Direct and Indirect Recursion!
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kepBmgvWNDw?start=22&end=542" title="Direct and Indirect Recursion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm text-gray-600 mt-2">Note: The video is set to start at 22 seconds and end at 9 minutes and 2 seconds.</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Tail Recursion</h3>
        <div className="mb-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/running-usain-bolt.gif" alt="Tail Recursion" />
          <p className="text-sm text-gray-600 mt-2">Image Credit: Tenor</p>
        </div>

        <p className="mb-4">
          Imagine a relay race. Each runner, after completing their leg, hands off the baton to the next runner. The current runner's job is completely finished after the baton is passed. The final result depends only on the last runner. This is similar to tail recursion, where the recursive call is the last operation performed in the function.
        </p>

        <p className="mb-4">
          Tail recursion is a form of recursion where the recursive call is the very last operation performed in the function. In other words, there are no further computations after the recursive call returns.
        </p>

        <p className="mb-4">
          Tail recursion is useful when optimization matters, as it reduces stack usage. Avoid it if the compiler doesn't optimize tail calls, as it won't improve efficiency. It can make code harder to understand if forced into a tail-recursive form.
        </p>

        <p className="mb-2"><strong>Time Complexity:</strong> It generally mirrors its iterative counterpart, often resulting in O(n) or O(log n) depending on the algorithm. It is directly influenced by the number of recursive calls and the computational work performed within each call.</p>

        <p className="mb-6"><strong>Space Complexity:</strong> If the compiler optimizes the tail call, the space complexity becomes O(1) (constant), as the stack frame is reused, Otherwise it's O(n).</p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Here's a pseudo code on Tail Recursion &amp; its explanation</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`FUNCTION count_down(n, accumulator):
  IF n < 0:
    RETURN accumulator // Base case: end reached
  ELSE:
    PRINT n // Action before recursive call
    RETURN count_down(n - 1, accumulator + 1) // Tail recursive call

// Initial call:
INPUT start_number
result = count_down(start_number, 0) // Start with accumulator = 0
OUTPUT result`}</code>
          </pre>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Function: count_down(n, accumulator) counts down from n to 0.</li>
            <li>Base Case: If n &lt; 0, recursion stops and returns accumulator.</li>
            <li>Recursive Step: Prints n, then calls count_down(n - 1, accumulator + 1).</li>
            <li>Tail Recursion: The recursive call is the last operation, optimizing memory usage.</li>
            <li>Execution: Starts with count_down(start_number, 0), prints numbers, and returns the total count.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Non tail Recursion</h3>
        <div className="mb-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/istockphoto-178494824-612x612.png" alt="Non-tail Recursion" />
          <p className="text-sm text-gray-600 mt-2">Image Credit: istock</p>
        </div>

        <p className="mb-4">
          Imagine stacking plates one on top of another. You can't remove the bottom plate until you've removed all the plates above it. Similarly, in non-tail recursion, the function must complete its current operation before the previous recursive calls can finish.
        </p>

        <p className="mb-4">
          Non-tail recursion occurs when there are operations performed after the recursive call returns. The function must maintain the state of each recursive call on the stack until the base case is reached and the calls start unwinding.
        </p>

        <p className="mb-4">
          Use it when the problem naturally fits recursion, making the logic clearer. It improves code readability as it closely follows problem structure. It is preferred when tail call optimization isn't available, keeping implementation simple.
        </p>

        <p className="mb-4">
          Avoid it for deep recursion, as it can cause stack overflow. It's not ideal for performance-critical applications, where stack overhead matters. When optimization is crucial, tail recursion or iteration may be better.
        </p>

        <p className="mb-2"><strong>Time Complexity:</strong> It is determined by the cumulative work done across all recursive calls, which can range from O(n) to O(2^n) or O(n log n) depending on the algorithm.</p>

        <p className="mb-6"><strong>Space Complexity:</strong> It is O(n), where n is the depth of the recursion, due to the call stack. Each recursive call adds a new stack frame.</p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Here's a pseudo code on Non tail Recursion &amp; its explanation</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`FUNCTION non_tail_factorial(n):
  IF n == 0:
    RETURN 1  // Base case: 0! = 1
  ELSE:
    result = non_tail_factorial(n - 1) // Recursive call
    RETURN n * result // Operation after recursive call

// Initial call:
INPUT number
final_result = non_tail_factorial(number)
OUTPUT final_result`}</code>
          </pre>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Function non_tail_factorial(n) computes n! recursively.</li>
            <li>Base Case: If n == 0, returns 1.</li>
            <li>Recursive Step: Calls non_tail_factorial(n - 1) and stores the result.</li>
            <li>Non-Tail Recursion: Performs multiplication (n * result) after the recursive call, keeping pending operations.</li>
            <li>Execution: Builds a stack of pending multiplications, which are resolved as the recursion unwinds, leading to the final result.</li>
          </ul>
        </div>

        <p className="mb-4">
          Alternatively, you can watch the video below to learn about Tail and Non tailed Recursion!
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HIt_GPuD7wk?start=24&end=758" title="Tail and Non-tail Recursion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm text-gray-600 mt-2">Note: The video is set to start at 24 seconds and end at 12 minutes and 38 seconds.</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Recursion Visualizer</h2>
        <p className="mb-4 font-semibold">Here are the steps to use CodeChef Code Visualizer:</p>

        <ol className="list-decimal ml-6 mb-6 space-y-3">
          <li>Go to the CodeChef website.</li>
          <li>
            <strong>Look in the Code Editor Area:</strong> The option to select the programming language is located in a dropdown menu at the top-left corner of the code editor (or IDE) window. It will display the currently selected language (C++ in this case).
          </li>
          <li><strong>Code Area:</strong> Type or paste the code you want to visualize into the main code editor area.</li>
        </ol>

        <p className="mb-4 font-semibold">Recursive function to calculate the nth Fibonacci number</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`#include <iostream>

// Recursive function to calculate the nth Fibonacci number
int fibonacci(int n) {
    // Base cases:
    // The 0th Fibonacci number is 0
    // The 1st Fibonacci number is 1
    if (n <= 1) {
        return n;
    }
    // Recursive case:
    // The nth Fibonacci number is the sum of the (n-1)th and (n-2)th Fibonacci numbers
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main() {
    int n = 5;

    if (n < 0) {
        std::cout << "Fibonacci numbers are defined for non-negative integers." << std::endl;
    } else {
        int result = fibonacci(n);
        std::cout << "The " << n << "th Fibonacci number is: " << result << std::endl;
    }

    return 0;
}`}</code>
        </pre>

        <ol className="list-decimal ml-6 mb-6 space-y-3" start={4}>
          <li>Locate the Visualizer Button: Look for a button near the "Run" or "Compile" button that is specifically labeled "Visualize Code" or simply "Visualizer."</li>
          <li>Click the Button: Click on the "Visualize Code" button. This will usually open the code and its visualization in a new, dedicated window or a new section on the page.</li>
        </ol>

        <p className="mb-4 font-semibold">Analyze the Flow</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Click "Next Step" repeatedly to watch the code execute one line at a time.</li>
          <li>
            <strong>Observe the Right Side:</strong> As you step forward, pay close attention to the Variables/Objects section. This is where you can visually see:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Variables being created.</li>
              <li>Variables changing their values.</li>
              <li>Function calls stacking up and local variables being created within a function's scope.</li>
              <li>How data is stored in memory (especially useful for understanding lists, objects, and pointers/references).</li>
            </ul>
          </li>
        </ul>

        <p className="mb-6">
          It's time for a quiz to test your understanding so far!
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/mmdeepdive.png" alt="Quiz time" />
        </div>

        <h2 className="text-2xl font-semibold mb-4">So, what's next?</h2>
        <p className="mb-4">
          Now that you've mastered the types of recursion—from direct nesting dolls to tail relay races—we're ready to roll up our sleeves and apply them to real structures. In our next lesson, we'll simulate traversing a file system, using recursion to explore folders within folders and print them with elegant indentation, just like your computer's file explorer does behind the scenes.
        </p>

        <p className="mb-4 font-semibold">We'll tackle bigger questions:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>How do you recursively dive into unknown depths without crashing the stack, turning a flat list into a visual tree?</li>
          <li>Why is this direct recursion pattern a game-changer for handling hierarchical data, like scanning millions of files in a backup tool?</li>
          <li>What happens when the directory gets super deep—how do you balance efficiency and avoid overflow pitfalls we discussed?</li>
        </ul>

        <p className="mb-6">
          You've unpacked the recursion toolkit. Now, let's put it to work in a hands-on adventure. Let's move on to the next lesson!
        </p>

        <h2 className="text-2xl font-semibold mb-4">Bonus Content</h2>
        <p className="mb-4">
          This section is optional and learners who want to explore further or need alternate resources to prepare can utilize the following references.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://www.youtube.com/watch?v=kepBmgvWNDw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Check out this YouTube video to explore the four types of recursion discussed in this lesson.
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=kepBmgvWNDw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Watch this YouTube video for an explanation of Direct and Indirect Recursion.
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=HIt_GPuD7wk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              This YouTube video covers Tail and Non-Tail Recursion.
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/types-of-recursions/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              You can also check out this article to explore the types of recursion through Java code implementation.
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_2;
