'use client';
import Quiz from '../../components/Quiz';

const Module1_4: React.FC = () => {
  const quizQuestions = [
    {
      question: "What does the \"D\" in DFA stand for, and what does it mean practically?",
      options: ["Distributed - the automaton runs on multiple processors", "Deterministic - for each state and input, there's exactly one next state", "Dynamic - the number of states can change during execution", "Discrete - it processes symbols one at a time"],
      correctAnswer: 1,
      explanation: "\"Deterministic\" means that for every state and input symbol combination, there is exactly one uniquely determined next state. This is in contrast to Nondeterministic Finite Automata (NFA) where multiple next states are possible."
    },
    {
      question: "In the formal 5-tuple M = (Q, Σ, δ, q₀, F), what does the transition function δ map?",
      options: ["Q → Q (state to state)", "Q × Σ → Q (state and symbol to state)", "Σ → Q (symbol to state)", "Q × Σ → 2^Q (state and symbol to set of states)"],
      correctAnswer: 1,
      explanation: "The transition function δ takes two inputs: a current state (from Q) and an input symbol (from Σ), and produces exactly one next state (from Q). This is written as δ: Q × Σ → Q."
    },
    {
      question: "A DFA accepts a string w if and only if:",
      options: ["The DFA visits an accept state at any point during processing", "After processing all of w, the DFA ends in a state that belongs to F", "The DFA never visits a non-accept state while processing w", "The length of w equals the number of states in the DFA"],
      correctAnswer: 1,
      explanation: "A DFA accepts a string if and only if, after reading the entire input string, it ends in a state that is in the set of accept states F. It doesn't matter which states were visited during processing."
    },
    {
      question: "How many transitions must be defined for each state in a DFA with alphabet Σ = {a, b, c}?",
      options: ["At least one transition per state", "At most three transitions per state", "Exactly three transitions per state (one for each symbol)", "Any number of transitions (it's flexible)"],
      correctAnswer: 2,
      explanation: "In a DFA, the transition function must be total and deterministic. This means for every state and every symbol in the alphabet, there must be exactly one defined transition. With alphabet {a, b, c}, each state must have exactly 3 outgoing transitions."
    },
    {
      question: "Consider a DFA that accepts strings over {0, 1} with an even number of 0s. Which string will be ACCEPTED?",
      options: ["011", "1100", "000", "101"],
      correctAnswer: 1,
      explanation: "We count the 0s: A) \"011\" has 1 zero (odd), B) \"1100\" has 2 zeros (even) - CORRECT, C) \"000\" has 3 zeros (odd), D) \"101\" has 1 zero (odd). Thus, only B is accepted."
    },
    {
      question: "What is the minimum number of states needed for a DFA that accepts strings ending with \"ab\" over alphabet {a, b}?",
      options: ["2 states", "3 states", "4 states", "5 states"],
      correctAnswer: 1,
      explanation: "We need 3 states: q₀ (start/no progress), q₁ (just read 'a', need 'b' next), and q₂ (just read \"ab\", accept state)."
    },
    {
      question: "If a DFA has 4 states and alphabet {0, 1}, how many transitions are there in total?",
      options: ["4 transitions", "6 transitions", "8 transitions", "16 transitions"],
      correctAnswer: 2,
      explanation: "Since the transition function must be total, every state must have exactly one transition for each symbol. 4 states × 2 symbols = 8 transitions."
    },
    {
      question: "Which of the following languages CANNOT be recognized by any DFA?",
      options: ["Strings with equal number of 0s and 1s", "Strings with alternating 0s and 1s (like 010101)", "Strings ending with \"00\"", "Strings of the form 0ⁿ1ⁿ (with specific n upper bound)"],
      correctAnswer: 0,
      explanation: "Strings with an equal number of 0s and 1s require counting an unbounded number of symbols, which requires infinite memory. DFAs have only finite states (memory) and thus cannot recognize this language."
    }
  ];

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.4</div>
        <div className="lesson-title-main">
          <h1>🤖 Deterministic Finite Automata (DFA)</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 What You'll Master - Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Define and formally describe a Deterministic Finite Automaton using the 5-tuple notation (Q, Σ, δ, q₀, F)</li>
            <li>Design DFAs to recognize specific regular languages and string patterns from problem descriptions</li>
            <li>Trace string processing through DFA state transitions and determine acceptance or rejection</li>
            <li>Convert between different DFA representations: state diagrams, transition tables, and formal definitions</li>
            <li>Prove correctness of DFA designs and analyze their computational properties and limitations</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're building a text editor that needs to recognize email addresses, or a compiler that must validate variable names in code. How does a computer actually decide if a string of characters matches a specific pattern? Enter the Deterministic Finite Automaton (DFA)—one of the most fundamental computational models in computer science!
        </p>
        <p>
          A DFA is like a smart machine that reads input symbols one by one and makes decisions based on its current state. Think of it as a sophisticated traffic light system: depending on where you are (your state) and what happens next (your input), you transition to a new state. Eventually, you either end up in a "good" state (accept) or a "bad" state (reject).
        </p>
        <p>
          DFAs are the theoretical foundation behind regular expressions, lexical analyzers in compilers, network protocol validators, and even the pattern matching you use every day in text editors and search engines. Every time you use grep, regex in Python, or search with wildcards, you're leveraging the power of finite automata!
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Compilers & Interpreters:</strong> Lexical analyzers use DFAs to tokenize source code (identifying keywords, identifiers, numbers)</li>
          <li><strong>Text Processing:</strong> Pattern matching engines in grep, sed, and text editors use finite automata</li>
          <li><strong>Network Protocols:</strong> Protocol validators ensure messages follow correct format (HTTP, TCP/IP)</li>
          <li><strong>Digital Circuit Design:</strong> Sequential circuits are modeled as finite state machines</li>
          <li><strong>Bioinformatics:</strong> DNA sequence pattern matching uses automata-based algorithms</li>
          <li><strong>Game AI:</strong> Character behavior and game state management using state machines</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Video Resources</h3>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold mb-2">Introduction to Deterministic Finite Automata</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fu0j32S3pBE?si=e5yFVF3EZBhAfhCv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">DFA Design and Construction</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/L5iCGi3dW-Y?si=iMZrzI_6Kn8Fxrhd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">DFA Examples and Applications</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/7zOBE8lKhis?si=zFwhg8r4Qfj-Mrxs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📖 Deep Dive: Understanding DFA</h3>

        <h4 className="mt-4 font-semibold">Formal Definition</h4>
        <p>
          <strong>What is a DFA?</strong> A Deterministic Finite Automaton is a mathematical model of computation that consists of:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>A finite set of states</strong> - The machine can be in exactly one state at any time</li>
          <li><strong>An input alphabet</strong> - The set of valid input symbols</li>
          <li><strong>A transition function</strong> - Rules that specify the next state based on current state and input</li>
          <li><strong>A start state</strong> - Where the machine begins</li>
          <li><strong>Accept states</strong> - States that indicate the input is accepted</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Formal 5-Tuple Notation:</p>
          <p className="mt-2 text-center text-lg">M = (Q, Σ, δ, q₀, F)</p>
        </div>

        <h4 className="mt-6 font-semibold">📌 5-Tuple Components:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Q</strong> = Finite set of states</li>
          <li><strong>Σ</strong> = Input alphabet (finite set of symbols)</li>
          <li><strong>δ</strong> = Transition function: Q × Σ → Q</li>
          <li><strong>q₀</strong> = Start state (q₀ ∈ Q)</li>
          <li><strong>F</strong> = Set of accept/final states (F ⊆ Q)</li>
        </ul>

        <h4 className="mt-6 font-semibold">🔍 Key Terminology:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Deterministic:</strong> For each state and input symbol, there is exactly ONE possible next state (no ambiguity)</li>
          <li><strong>State:</strong> A configuration of the machine representing what it "remembers" about the input so far</li>
          <li><strong>Transition:</strong> Movement from one state to another based on an input symbol</li>
          <li><strong>Accept/Final State:</strong> States where the machine accepts the input (drawn with double circles)</li>
          <li><strong>Language:</strong> The set of all strings that a DFA accepts, denoted L(M)</li>
          <li><strong>δ* (Extended Transition Function):</strong> Processes entire strings, not just single symbols</li>
        </ul>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">How DFA Works: Step-by-Step</h3>

        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">Step 1: Initialization</h4>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Start in the initial state q₀</li>
              <li>Read input string from left to right</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">Step 2: Process Each Symbol</h4>
            <p className="text-sm mt-2">For current state q and input symbol a:</p>
            <ul className="list-disc ml-6 mt-1 text-sm">
              <li>Look up δ(q, a) to find next state</li>
              <li>Transition to that new state</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Step 3: Continue Until End</h4>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Repeat step 2 for each symbol</li>
              <li>Process entire input string</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">Step 4: Accept or Reject</h4>
            <p className="text-sm mt-2">After reading all symbols:</p>
            <ul className="list-disc ml-6 mt-1 text-sm">
              <li>✅ ACCEPT if final state is in F</li>
              <li>❌ REJECT if final state is not in F</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-3xl">
            <h4 className="text-center font-bold text-lg mb-4">DFA Execution Flow</h4>
            <svg width="600" height="650" viewBox="0 0 600 650" className="mx-auto">
              <defs>
                <marker id="arrowDFA" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>

              {/* Input String */}
              <rect x="225" y="30" width="150" height="50" rx="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="300" y="60" textAnchor="middle" fontSize="14" fontWeight="bold">Input String</text>

              {/* Arrow */}
              <line x1="300" y1="80" x2="300" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />

              {/* Start at q0 */}
              <rect x="225" y="110" width="150" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="300" y="140" textAnchor="middle" fontSize="13">Start at q₀</text>

              {/* Arrow */}
              <line x1="300" y1="160" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />

              {/* More symbols? Decision */}
              <path d="M 300 200 L 400 250 L 300 300 L 200 250 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="300" y="248" textAnchor="middle" fontSize="12">More</text>
              <text x="300" y="263" textAnchor="middle" fontSize="12">symbols?</text>

              {/* YES - Read next symbol */}
              <line x1="400" y1="250" x2="480" y2="250" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />
              <text x="425" y="245" fontSize="12" fontWeight="bold" fill="#16a34a">YES</text>

              <rect x="480" y="225" width="100" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="530" y="248" textAnchor="middle" fontSize="11">Read next</text>
              <text x="530" y="263" textAnchor="middle" fontSize="11">symbol a</text>

              {/* Arrow down */}
              <line x1="530" y1="275" x2="530" y2="320" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />

              {/* Transition function */}
              <rect x="480" y="320" width="100" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="530" y="340" textAnchor="middle" fontSize="11">δ(current, a)</text>
              <text x="530" y="355" textAnchor="middle" fontSize="11">= next</text>

              {/* Arrow down */}
              <line x1="530" y1="370" x2="530" y2="410" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />

              {/* Move to next state */}
              <rect x="480" y="410" width="100" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="530" y="433" textAnchor="middle" fontSize="11">Move to</text>
              <text x="530" y="448" textAnchor="middle" fontSize="11">next state</text>

              {/* Arrow back to decision */}
              <line x1="480" y1="435" x2="420" y2="435" stroke="#3b82f6" strokeWidth="2" />
              <line x1="420" y1="435" x2="420" y2="250" stroke="#3b82f6" strokeWidth="2" />
              <line x1="420" y1="250" x2="400" y2="250" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />

              {/* NO - Check accept state */}
              <line x1="300" y1="300" x2="300" y2="350" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />
              <text x="310" y="330" fontSize="12" fontWeight="bold" fill="#dc2626">NO</text>

              {/* Current state in F? Decision */}
              <path d="M 300 350 L 400 400 L 300 450 L 200 400 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="300" y="395" textAnchor="middle" fontSize="11">Current</text>
              <text x="300" y="410" textAnchor="middle" fontSize="11">state ∈ F?</text>

              {/* YES - ACCEPT */}
              <line x1="400" y1="400" x2="480" y2="400" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />
              <text x="425" y="395" fontSize="12" fontWeight="bold" fill="#16a34a">YES</text>

              <ellipse cx="530" cy="400" rx="50" ry="30" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="530" y="400" textAnchor="middle" fontSize="13" fontWeight="bold">✅ ACCEPT</text>

              {/* NO - REJECT */}
              <line x1="200" y1="400" x2="120" y2="400" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDFA)" />
              <text x="175" y="395" fontSize="12" fontWeight="bold" fill="#dc2626">NO</text>

              <ellipse cx="70" cy="400" rx="50" ry="30" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="70" y="400" textAnchor="middle" fontSize="13" fontWeight="bold">❌ REJECT</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Example 1: DFA for Strings Ending with "01"</h3>

        <div className="bg-gray-50 p-4 rounded">
          <p className="font-semibold">📝 Problem: Design a DFA that accepts strings over {'{'}0, 1{'}'} ending with "01"</p>
          <p className="mt-2"><strong>Language:</strong> L = {'{'}w | w ends with "01"{'}'}</p>

          <div className="mt-4">
            <p className="font-semibold">Examples:</p>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div>
                <p className="text-green-600">✅ "01" - Accepted</p>
                <p className="text-green-600">✅ "001" - Accepted</p>
                <p className="text-green-600">✅ "1101" - Accepted</p>
                <p className="text-green-600">✅ "000001" - Accepted</p>
              </div>
              <div>
                <p className="text-red-600">❌ "0" - Rejected</p>
                <p className="text-red-600">❌ "10" - Rejected</p>
                <p className="text-red-600">❌ "110" - Rejected</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold">State Meanings:</p>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li><strong>q₀:</strong> Start state / no progress toward "01"</li>
              <li><strong>q₁:</strong> Just read '0', need '1' next</li>
              <li><strong>q₂:</strong> Just read '01' (ACCEPT STATE)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded mt-4 border border-gray-300">
          <p className="font-semibold text-center mb-4">State Diagram</p>
          <div className="flex justify-center">
            <svg width="500" height="200" viewBox="0 0 500 200">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>

              <circle cx="80" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="80" y="105" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
              <line x1="20" y1="100" x2="50" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <circle cx="250" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="250" y="105" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>

              <circle cx="420" cy="100" r="30" fill="#dcfce7" stroke="#22c55e" strokeWidth="3" />
              <circle cx="420" cy="100" r="25" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="420" y="105" textAnchor="middle" fontSize="14" fontWeight="bold">q₂</text>

              <line x1="110" y1="100" x2="220" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="165" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <line x1="280" y1="100" x2="390" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="335" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 80 70 Q 80 30, 100 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="90" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 250 70 Q 250 30, 270 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="260" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <path d="M 420 130 Q 420 170, 400 140" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="430" y="160" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 390 110 Q 335 130, 280 110" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="335" y="135" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>
            </svg>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Transition Table:</p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">State</th>
                  <th className="border border-gray-300 p-2">Input: 0</th>
                  <th className="border border-gray-300 p-2">Input: 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">→ q₀</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">q₀</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">*q₂</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">*q₂ (Accept)</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">q₀</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-1">* indicates accept state</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">🔍 Trace Example: Input "1101"</p>
          <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
            <li>Start: q₀, Input: "1101"</li>
            <li>Read '1': δ(q₀, 1) = q₀ → Stay at q₀</li>
            <li>Read '1': δ(q₀, 1) = q₀ → Stay at q₀</li>
            <li>Read '0': δ(q₀, 0) = q₁ → Move to q₁</li>
            <li>Read '1': δ(q₁, 1) = q₂ → Move to q₂</li>
            <li>End at q₂ which is in F → ✅ ACCEPTED!</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Example 2: DFA for Even Number of 0s</h3>

        <div className="bg-gray-50 p-4 rounded">
          <p className="font-semibold">📝 Problem: Design a DFA that accepts strings with an even number of 0s</p>
          <p className="mt-2"><strong>Language:</strong> L = {'{'}w | w has even number of 0s{'}'}</p>

          <div className="mt-4">
            <p className="font-semibold">Examples:</p>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div>
                <p className="text-green-600">✅ "" (empty) - 0 zeros (even)</p>
                <p className="text-green-600">✅ "11" - 0 zeros</p>
                <p className="text-green-600">✅ "00" - 2 zeros</p>
                <p className="text-green-600">✅ "1010" - 2 zeros</p>
              </div>
              <div>
                <p className="text-red-600">❌ "0" - 1 zero (odd)</p>
                <p className="text-red-600">❌ "101" - 1 zero</p>
                <p className="text-red-600">❌ "000" - 3 zeros</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Formal Definition:</p>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Q = {'{'}q₀, q₁{'}'}</li>
              <li>Σ = {'{'}0, 1{'}'}</li>
              <li>δ: see transition table</li>
              <li>Start: q₀</li>
              <li>F = {'{'}q₀{'}'}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded mt-4 border border-gray-300">
          <p className="font-semibold text-center mb-4">State Diagram</p>
          <div className="flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
              <defs>
                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>

              <circle cx="120" cy="100" r="35" fill="#dcfce7" stroke="#22c55e" strokeWidth="3" />
              <circle cx="120" cy="100" r="30" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="120" y="100" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
              <text x="120" y="115" textAnchor="middle" fontSize="10">Even</text>
              <line x1="40" y1="100" x2="85" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />

              <circle cx="280" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="280" y="100" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>
              <text x="280" y="115" textAnchor="middle" fontSize="10">Odd</text>

              <path d="M 155 95 Q 200 70, 245 95" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
              <text x="200" y="75" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <path d="M 245 105 Q 200 130, 155 105" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
              <text x="200" y="145" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <path d="M 120 70 Q 120 40, 140 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
              <text x="130" y="35" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 280 70 Q 280 40, 300 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
              <text x="290" y="35" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>
            </svg>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Transition Table:</p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">State</th>
                  <th className="border border-gray-300 p-2">Input: 0</th>
                  <th className="border border-gray-300 p-2">Input: 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">→ *q₀ (Even)</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">q₀</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">q₁ (Odd)</td>
                  <td className="border border-gray-300 p-2">q₀</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-1">Simple 2-state DFA</p>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">✏️ DFA Design Strategies</h3>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold text-lg">Step-by-Step Design Process</h4>

          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="font-semibold">Step 1: Understand the Language</p>
              <ul className="list-disc ml-6 mt-1">
                <li>Clearly define what strings should be accepted</li>
                <li>Write out positive and negative examples</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Step 2: Identify What to "Remember"</p>
              <ul className="list-disc ml-6 mt-1">
                <li>Determine what information about the input matters</li>
                <li>Each distinct "memory" becomes a state</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Step 3: Define States</p>
              <ul className="list-disc ml-6 mt-1">
                <li>Create states for each relevant configuration</li>
                <li>Mark start state and accept states</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Step 4: Draw Transitions</p>
              <ul className="list-disc ml-6 mt-1">
                <li>For each state and each symbol in Σ:</li>
                <li>Draw exactly ONE outgoing transition</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Step 5: Verify with Examples</p>
              <ul className="list-disc ml-6 mt-1">
                <li>Test with accepted strings → should reach accept state</li>
                <li>Test with rejected strings → should reach non-accept state</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">⚠️ Common Design Mistakes:</h4>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>Missing transitions (every state needs transition for EVERY symbol)</li>
              <li>Too many states (keep it minimal)</li>
              <li>Forgetting the empty string case</li>
              <li>Confusing accept vs. non-accept states</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">✅ Design Tips:</h4>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>Start simple, add states only when needed</li>
              <li>Use meaningful state names</li>
              <li>A "dead" or "trap" state can catch rejected strings</li>
              <li>Verify EVERY transition is defined</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Example 3: DFA for Divisibility by 3</h3>

        <div className="bg-gray-50 p-4 rounded">
          <p className="font-semibold">📝 Problem: Design a DFA that accepts binary strings representing numbers divisible by 3</p>
          <p className="mt-2"><strong>Language:</strong> Binary numbers where decimal value mod 3 = 0</p>

          <div className="mt-4">
            <p className="font-semibold">Key Insight: Track remainder when divided by 3</p>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li><strong>State q₀:</strong> remainder = 0 (divisible!)</li>
              <li><strong>State q₁:</strong> remainder = 1</li>
              <li><strong>State q₂:</strong> remainder = 2</li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Transition Logic:</p>
            <p className="text-sm mt-2">When reading bit b in state with remainder r:</p>
            <p className="text-sm mt-1 font-mono bg-white p-2 rounded">new_remainder = (2 × r + b) mod 3</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Examples:</p>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div>
                <p className="text-green-600">✅ "0" → 0 (0 mod 3 = 0)</p>
                <p className="text-green-600">✅ "11" → 3 (3 mod 3 = 0)</p>
                <p className="text-green-600">✅ "110" → 6 (6 mod 3 = 0)</p>
                <p className="text-green-600">✅ "1001" → 9 (9 mod 3 = 0)</p>
              </div>
              <div>
                <p className="text-red-600">❌ "1" → 1 (1 mod 3 = 1)</p>
                <p className="text-red-600">❌ "10" → 2 (2 mod 3 = 2)</p>
                <p className="text-red-600">❌ "100" → 4 (4 mod 3 = 1)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded mt-4 border border-gray-300">
          <p className="font-semibold text-center mb-4">State Diagram</p>
          <div className="flex justify-center">
            <svg width="500" height="300" viewBox="0 0 500 300">
              <defs>
                <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>

              <circle cx="250" cy="80" r="35" fill="#dcfce7" stroke="#22c55e" strokeWidth="3" />
              <circle cx="250" cy="80" r="30" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="250" y="80" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
              <text x="250" y="95" textAnchor="middle" fontSize="10">rem=0</text>
              <line x1="250" y1="30" x2="250" y2="45" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />

              <circle cx="100" cy="220" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="100" y="220" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>
              <text x="100" y="235" textAnchor="middle" fontSize="10">rem=1</text>

              <circle cx="400" cy="220" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="400" y="220" textAnchor="middle" fontSize="14" fontWeight="bold">q₂</text>
              <text x="400" y="235" textAnchor="middle" fontSize="10">rem=2</text>

              <path d="M 230 100 Q 150 150, 115 195" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="160" y="140" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 270 100 Q 350 150, 385 195" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="340" y="140" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <path d="M 130 220 Q 200 220, 220 100" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="180" y="210" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 370 220 Q 300 220, 280 100" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="320" y="210" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <path d="M 130 210 Q 200 180, 270 210" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="200" y="185" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

              <path d="M 270 230 Q 200 260, 130 230" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="200" y="270" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

              <path d="M 250 50 Q 250 20, 270 40" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)" />
              <text x="260" y="15" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>
            </svg>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Transition Table:</p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">State (Remainder)</th>
                  <th className="border border-gray-300 p-2">Input: 0</th>
                  <th className="border border-gray-300 p-2">Input: 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">→ *q₀ (rem = 0)</td>
                  <td className="border border-gray-300 p-2">q₀</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">q₁ (rem = 1)</td>
                  <td className="border border-gray-300 p-2">q₂</td>
                  <td className="border border-gray-300 p-2">q₀</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">q₂ (rem = 2)</td>
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">q₂</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">🔍 Trace: Input "110" (binary for 6)</p>
          <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
            <li>Start: q₀ (rem=0), Input: "110"</li>
            <li>Read '1': (2×0+1) mod 3 = 1 → q₁</li>
            <li>Read '1': (2×1+1) mod 3 = 0 → q₀</li>
            <li>Read '0': (2×0+0) mod 3 = 0 → q₀</li>
            <li>End at q₀ (accept state) → ✅ ACCEPTED! (6 is divisible by 3)</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">💻 DFA Implementation in Python</h3>
        <p className="mb-4">Let's implement a DFA simulator in Python! This program creates a DFA class that can process strings and determine acceptance.</p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 mb-4">
          <h4 className="font-semibold">Features:</h4>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Define DFA with 5-tuple specification</li>
            <li>Process input strings step-by-step</li>
            <li>Trace execution path</li>
            <li>Determine acceptance/rejection</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`class DFA:
    """
    Deterministic Finite Automaton Implementation
    M = (Q, Σ, δ, q0, F)
    """
    def __init__(self, states, alphabet, transitions, start_state, accept_states):
        """
        Initialize DFA with 5-tuple
        Args:
            states: set of state names
            alphabet: set of input symbols
            transitions: dict of {(state, symbol): next_state}
            start_state: initial state
            accept_states: set of accepting states
        """
        self.states = states
        self.alphabet = alphabet
        self.transitions = transitions
        self.start_state = start_state
        self.accept_states = accept_states
        self._validate()
    
    def _validate(self):
        """Ensure transition function is total"""
        for state in self.states:
            for symbol in self.alphabet:
                if (state, symbol) not in self.transitions:
                    raise ValueError(f"Missing transition: δ({state}, {symbol})")
    
    def process(self, input_string, trace=False):
        """
        Process input string through DFA
        Returns: tuple: (accepted: bool, path: list of states)
        """
        current_state = self.start_state
        path = [current_state]
        
        if trace:
            print(f"Input: '{input_string}'")
            print(f"Start state: {current_state}\n")
        
        for i, symbol in enumerate(input_string):
            if symbol not in self.alphabet:
                raise ValueError(f"Symbol '{symbol}' not in alphabet")
            
            next_state = self.transitions[(current_state, symbol)]
            if trace:
                print(f"Step {i+1}: δ({current_state}, '{symbol}') = {next_state}")
            
            current_state = next_state
            path.append(current_state)
        
        accepted = current_state in self.accept_states
        
        if trace:
            print(f"\nFinal state: {current_state}")
            print(f"Result: {'✅ ACCEPTED' if accepted else '❌ REJECTED'}")
        
        return accepted, path

# Example: DFA for strings ending with "01"
def create_ends_with_01_dfa():
    states = {'q0', 'q1', 'q2'}
    alphabet = {'0', '1'}
    transitions = {
        ('q0', '0'): 'q1',
        ('q0', '1'): 'q0',
        ('q1', '0'): 'q1',
        ('q1', '1'): 'q2',
        ('q2', '0'): 'q1',
        ('q2', '1'): 'q0'
    }
    start = 'q0'
    accept = {'q2'}
    return DFA(states, alphabet, transitions, start, accept)

# Usage
dfa = create_ends_with_01_dfa()
accepted, path = dfa.process("1101", trace=True)`}</code>
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
          <h4 className="font-semibold">✅ Key Implementation Points:</h4>
          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            <li>The _validate() method ensures the transition function is complete</li>
            <li>The process() method implements δ* (extended transition function)</li>
            <li>Trace mode shows step-by-step execution for debugging</li>
            <li>Easy to create different DFAs by specifying the 5-tuple</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📄 Quick Reference Cheat Sheet</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🔑 5-Tuple Definition</h4>
            <p className="text-center text-lg font-mono my-2">M = (Q, Σ, δ, q₀, F)</p>
            <ul className="text-sm space-y-1">
              <li><strong>Q:</strong> Finite set of states</li>
              <li><strong>Σ:</strong> Input alphabet</li>
              <li><strong>δ:</strong> Q × Σ → Q (transition function)</li>
              <li><strong>q₀:</strong> Start state (q₀ ∈ Q)</li>
              <li><strong>F:</strong> Accept states (F ⊆ Q)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">✅ Acceptance Criteria</h4>
            <p className="text-sm mt-2">DFA accepts string w if:</p>
            <p className="text-center text-lg font-mono my-2">δ*(q₀, w) ∈ F</p>
            <p className="text-sm">After processing all of w, the final state must be in F</p>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚙️ Key Properties</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Exactly ONE transition per (state, symbol)</li>
              <li>✓ Transition function must be TOTAL</li>
              <li>✓ No ε (epsilon) transitions</li>
              <li>✓ Finite memory (states only)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🎨 State Diagram Notation</h4>
            <ul className="text-sm space-y-1">
              <li><strong>→</strong> : Start state indicator</li>
              <li><strong>◯:</strong> Single circle = normal state</li>
              <li><strong>◯◯:</strong> Double circle = accept state</li>
              <li><strong>a:</strong> Label on arrow = input symbol</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Missing transitions</li>
              <li>❌ Multiple transitions for same (q,a)</li>
              <li>❌ Forgetting to mark accept states</li>
              <li>❌ Not validating with test strings</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">💡 Design Tips</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Start with examples</li>
              <li>✓ Identify what to "remember"</li>
              <li>✓ Each memory = one state</li>
              <li>✓ Draw before formalizing</li>
              <li>✓ Test with accept/reject strings</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold text-lg">🆚 DFA vs NFA</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <p className="font-semibold text-blue-600">DFA:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Exactly one transition per (q,a)</li>
                <li>• No ε-transitions</li>
                <li>• Easier to implement</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-purple-600">NFA:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• 0+ transitions per (q,a)</li>
                <li>• Can have ε-transitions</li>
                <li>• More compact representation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Test Your Understanding: MCQs</h3>
        <p>Answer these interactive questions to check your understanding of DFAs!</p>

        <div className="mt-8 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm">
          <Quiz
            title="Module 1.4: DFA Mastery Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={4}
          />
        </div>
      </section>
    </div>
  );
};

export default Module1_4;
