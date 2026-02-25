'use client';
import Quiz from '../../components/Quiz';

const Module1_5: React.FC = () => {
  const quizQuestions = [
    {
      question: "What is the fundamental difference between an NFA and a DFA?",
      options: ["NFAs can recognize more languages than DFAs", "NFAs can have multiple transitions for the same state-symbol pair, while DFAs have exactly one", "NFAs run faster than DFAs in practice", "NFAs cannot have accepting states"],
      correctAnswer: 1,
      explanation: "The key difference is in the transition function. In a DFA, δ: Q × Σ → Q maps to exactly one state. In an NFA, δ: Q × Σ → P(Q) maps to a set of states (power set). Both recognize the same class of languages (regular languages), so NFAs are not more powerful. DFAs are typically faster in practice due to deterministic execution."
    },
    {
      question: "In an NFA, what happens when the transition function δ(q, a) = ∅ (empty set)?",
      options: ["The entire NFA immediately rejects the input string", "That particular computation path dies, but other parallel paths may continue", "The NFA moves to a special error state", "The NFA automatically accepts the string"],
      correctAnswer: 1,
      explanation: "NFAs explore multiple computation paths in parallel. When δ(q, a) = ∅, only that specific path terminates (dies). Other parallel paths continue processing the input. The NFA accepts if at least one path reaches an accepting state. This is a crucial aspect of nondeterministic computation."
    },
    {
      question: "What is the purpose of epsilon (ε) transitions in an NFA?",
      options: ["To consume empty strings from the input", "To make the NFA more powerful than DFAs", "To allow state transitions without consuming any input symbol, simplifying NFA design", "To represent syntax errors in the input"],
      correctAnswer: 2,
      explanation: "Epsilon transitions allow the NFA to change states spontaneously without reading any input symbol. They don't make NFAs more powerful (ε-NFAs, NFAs, and DFAs all recognize regular languages), but they greatly simplify automaton design, especially when combining automata for union, concatenation, and Kleene star operations in regex-to-NFA conversion."
    },
    {
      question: "If an NFA has n states, what is the maximum number of states the equivalent DFA might have after subset construction?",
      options: ["n states (same as NFA)", "n² states", "2ⁿ states (exponential)", "n! states (factorial)"],
      correctAnswer: 2,
      explanation: "During subset construction, each DFA state corresponds to a subset of NFA states. Since an n-element set has 2ⁿ subsets (the power set), the DFA can have up to 2ⁿ states. This exponential blowup is why NFAs are often preferred for representation despite DFAs being faster to execute. In practice, many DFA states may be unreachable, so the actual number is often much smaller."
    },
    {
      question: "In the context of NFA simulation, what does \"epsilon closure\" of a state set S mean?",
      options: ["The set of states that can reach S via ε-transitions", "All states reachable from S via zero or more ε-transitions, including S itself", "The set of accepting states reachable from S", "The states in S with ε-transitions removed"],
      correctAnswer: 1,
      explanation: "The ε-closure (or epsilon closure) of a state set S is the set of all states reachable from any state in S by following zero or more ε-transitions. This includes all states in S itself. Computing ε-closure is essential for NFA simulation and subset construction algorithms. It's typically computed using depth-first search (DFS) or breadth-first search (BFS) following only ε-edges."
    }
  ];

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.5</div>
        <div className="lesson-title-main">
          <h1>🔀 Nondeterministic Finite Automata (NFA)</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 What You'll Master - Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Define and construct Nondeterministic Finite Automata (NFA) for given regular languages and recognize valid strings using multiple computation paths</li>
            <li>Differentiate between deterministic and nondeterministic computation models, analyzing their computational power and practical applications</li>
            <li>Apply the subset construction algorithm to convert any NFA to an equivalent DFA, demonstrating formal equivalence between these models</li>
            <li>Design and implement NFAs with epsilon (ε) transitions, understanding their role in simplifying automata construction</li>
            <li>Analyze the time and space complexity of NFA-based pattern matching and evaluate real-world applications in compilers and text processing</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're searching for a specific pattern in a massive text file—perhaps looking for email addresses, phone numbers, or programming syntax errors. Your search engine needs to be smart enough to handle multiple possible matches simultaneously, exploring different paths through the text at the same time. This is exactly what a Nondeterministic Finite Automaton does: it can pursue multiple computational paths in parallel, making it incredibly powerful for pattern recognition.
        </p>
        <p className="mt-2">
          In the real world, NFAs are the theoretical foundation behind regular expressions (regex), which you use every time you search in a text editor, validate form inputs on websites, or write pattern matching code. When you write a regex like (a|b)*c, you're essentially describing an NFA that can match any combination of 'a's and 'b's followed by a 'c'. Compilers use NFAs in their lexical analysis phase to tokenize source code, breaking down complex programs into meaningful symbols. Network intrusion detection systems use NFA-based algorithms to scan millions of packets per second, looking for malicious patterns.
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Regular Expression Engines:</strong> grep, sed, Perl, Python's re module all use NFA-based pattern matching</li>
          <li><strong>Lexical Analyzers:</strong> Flex, Lex tools generate NFAs for tokenizing programming languages</li>
          <li><strong>Network Security:</strong> Snort IDS uses NFAs to detect intrusion patterns in network traffic</li>
          <li><strong>DNA Sequence Analysis:</strong> Bioinformatics tools use NFAs to search for genetic patterns</li>
          <li><strong>Text Editors:</strong> Vim, Emacs, VS Code use NFAs for search and replace operations</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Video Resources</h3>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold mb-2">String Matching with Finite Automata</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/egXhe55dAIk?si=-893BNbi4dIHIAW9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">KMP Algorithm Explained</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/84oNUttWlN4?si=-Ow7TlZmE2i9332i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Pattern Matching Algorithms</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ehy0jGIYRtE?si=fsEnJ0imU5erqZez" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Advanced String Matching Techniques</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/--CSVsFIDng?si=3f2NHd6pa6t52K7e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📖 Deep Dive: Understanding the Concept</h3>

        <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
        <p>
          A <strong>Nondeterministic Finite Automaton (NFA)</strong> is a theoretical computational model that recognizes regular languages through a mechanism fundamentally different from deterministic finite automata. Unlike a DFA where each state has exactly one transition for each input symbol, an NFA can have multiple transitions for the same input symbol from a single state, or even no transition at all.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Formal 5-Tuple Definition:</p>
          <p className="mt-2 text-center text-lg">M = (Q, Σ, δ, q₀, F)</p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
            <li><strong>Q</strong> is a finite set of states</li>
            <li><strong>Σ</strong> is a finite input alphabet</li>
            <li><strong>δ: Q × Σ → P(Q)</strong> is the transition function that maps to a set of states (power set of Q)</li>
            <li><strong>q₀ ∈ Q</strong> is the initial state</li>
            <li><strong>F ⊆ Q</strong> is the set of accepting (final) states</li>
          </ul>
        </div>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
            <h4 className="text-center font-bold text-lg mb-4">NFA Example: Multiple Transitions</h4>
            <svg width="700" height="300" viewBox="0 0 700 300" className="mx-auto">
              <defs>
                <marker id="arrowNFA" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>

              {/* State q0 */}
              <circle cx="100" cy="150" r="35" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="100" y="158" textAnchor="middle" fontSize="16" fontWeight="bold">q₀</text>
              <polygon points="30,150 60,145 60,155" fill="#16a34a" />

              {/* State q1 */}
              <circle cx="300" cy="80" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="300" y="88" textAnchor="middle" fontSize="16" fontWeight="bold">q₁</text>

              {/* State q2 */}
              <circle cx="300" cy="220" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="300" y="228" textAnchor="middle" fontSize="16" fontWeight="bold">q₂</text>

              {/* State q3 (Accept) */}
              <circle cx="500" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="500" cy="150" r="42" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="500" y="158" textAnchor="middle" fontSize="16" fontWeight="bold">q₃</text>

              {/* Transitions from q0 */}
              <path d="M 135 135 Q 200 100 265 90" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="200" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">a</text>

              <path d="M 135 165 Q 200 200 265 210" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="200" y="200" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">a</text>

              {/* Self loop on q0 */}
              <path d="M 85 115 Q 70 90 100 90 Q 130 90 115 115" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="100" y="75" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">b</text>

              {/* Transitions from q1 to q3 */}
              <path d="M 335 90 Q 400 110 465 135" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="400" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">b</text>

              {/* Transitions from q2 to q3 */}
              <path d="M 335 210 Q 400 190 465 165" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="400" y="200" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">b</text>

              {/* Epsilon transition from q1 to q2 */}
              <line x1="300" y1="115" x2="300" y2="185" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowNFA)" />
              <text x="320" y="155" fontSize="14" fontWeight="bold" fill="#9333ea">ε</text>

              {/* Annotation box */}
              <rect x="520" y="30" width="160" height="100" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="600" y="55" textAnchor="middle" fontSize="12" fontWeight="bold">Nondeterminism:</text>
              <text x="600" y="75" textAnchor="middle" fontSize="11">From q₀ on 'a':</text>
              <text x="600" y="90" textAnchor="middle" fontSize="11">→ q₁ OR q₂</text>
              <text x="600" y="110" textAnchor="middle" fontSize="11" fill="#9333ea">ε-transition: q₁→q₂</text>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4">Example NFA showing nondeterministic choices and epsilon transition</p>
          </div>
        </div>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Nondeterminism:</strong> The ability of an automaton to have multiple possible next states for a given current state and input symbol</li>
          <li><strong>Epsilon (ε) Transition:</strong> A transition that can be taken without consuming any input symbol</li>
          <li><strong>Computation Path:</strong> A sequence of state transitions from the start state while processing an input string</li>
          <li><strong>Accepting Computation:</strong> A computation path that ends in an accepting state after consuming the entire input</li>
          <li><strong>Power Set Construction:</strong> The algorithm used to convert an NFA to an equivalent DFA</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>How It Works: The Mechanism Explained</h3>

        <div className="space-y-4 mt-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">Step 1: Initialization</h4>
            <p className="text-sm mt-2">The NFA begins in its initial state q₀, with the entire input string waiting to be processed.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">Step 2: Reading Input and Branching</h4>
            <p className="text-sm mt-2">When the NFA reads an input symbol, it can simultaneously transition to multiple states. The computation token splits into multiple tokens, one following each possible path.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Step 3: Parallel Path Exploration</h4>
            <p className="text-sm mt-2">As each token continues reading input, some may reach dead ends and are discarded. Other tokens continue their journey through the automaton.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">Step 4: Acceptance Decision</h4>
            <p className="text-sm mt-2">After the entire input string has been consumed, if at least one path has ended in an accepting state, the NFA accepts the string.</p>
          </div>
        </div>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl">
            <h4 className="text-center font-bold text-lg mb-4">Computation Tree - All Possible NFA Paths</h4>
            <svg width="800" height="500" viewBox="0 0 800 500" className="mx-auto">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>

              {/* Root - Start State */}
              <circle cx="400" cy="40" r="30" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="400" y="48" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
              <text x="400" y="90" textAnchor="middle" fontSize="11" fill="#666">Input: "ab"</text>

              {/* Level 1 - After reading 'a' */}
              <text x="50" y="140" fontSize="12" fontWeight="bold" fill="#3b82f6">Read 'a':</text>

              <line x1="400" y1="70" x2="250" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="310" y="105" fontSize="11" fill="#3b82f6">a</text>
              <circle cx="250" cy="170" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="250" y="178" textAnchor="middle" fontSize="13" fontWeight="bold">q₁</text>

              <line x1="400" y1="70" x2="400" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="410" y="105" fontSize="11" fill="#3b82f6">a</text>
              <circle cx="400" cy="170" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="400" y="178" textAnchor="middle" fontSize="13" fontWeight="bold">q₂</text>

              <line x1="400" y1="70" x2="550" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="490" y="105" fontSize="11" fill="#3b82f6">a</text>
              <circle cx="550" cy="170" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="550" y="178" textAnchor="middle" fontSize="13" fontWeight="bold">q₃</text>

              {/* Level 2 - After reading 'b' */}
              <text x="50" y="270" fontSize="12" fontWeight="bold" fill="#3b82f6">Read 'b':</text>

              {/* From q₁ */}
              <line x1="250" y1="198" x2="150" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="190" y="235" fontSize="11" fill="#3b82f6">b</text>
              <circle cx="150" cy="300" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="150" y="308" textAnchor="middle" fontSize="13" fontWeight="bold">q₁</text>

              <line x1="250" y1="198" x2="250" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="260" y="235" fontSize="11" fill="#3b82f6">b</text>
              <circle cx="250" cy="300" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="250" cy="300" r="34" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="250" y="308" textAnchor="middle" fontSize="13" fontWeight="bold">q₄</text>
              <text x="250" y="345" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">ACCEPT ✓</text>

              {/* From q₂ */}
              <line x1="400" y1="198" x2="350" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="365" y="235" fontSize="11" fill="#3b82f6">b</text>
              <circle cx="350" cy="300" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="308" textAnchor="middle" fontSize="13" fontWeight="bold">q₂</text>

              <line x1="400" y1="198" x2="450" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="435" y="235" fontSize="11" fill="#3b82f6">b</text>
              <circle cx="450" cy="300" r="28" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="450" y="308" textAnchor="middle" fontSize="13" fontWeight="bold">∅</text>
              <text x="450" y="345" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">Dead End ✗</text>

              {/* From q₃ */}
              <line x1="550" y1="198" x2="550" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="560" y="235" fontSize="11" fill="#3b82f6">b</text>
              <circle cx="550" cy="300" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="550" y="308" textAnchor="middle" fontSize="13" fontWeight="bold">q₁</text>

              <line x1="550" y1="198" x2="650" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="610" y="235" fontSize="11" fill="#3b82f6">b</text>
              <circle cx="650" cy="300" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="650" cy="300" r="34" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="650" y="308" textAnchor="middle" fontSize="13" fontWeight="bold">q₄</text>
              <text x="650" y="345" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">ACCEPT ✓</text>

              {/* Legend */}
              <rect x="50" y="400" width="700" height="80" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" rx="5" />
              <text x="70" y="425" fontSize="13" fontWeight="bold">Legend:</text>

              <circle cx="90" cy="450" r="15" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="115" y="455" fontSize="11">Start State</text>

              <circle cx="230" cy="450" r="15" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="255" y="455" fontSize="11">Intermediate State</text>

              <circle cx="410" cy="450" r="15" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="410" cy="450" r="20" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="440" y="455" fontSize="11">Accept State (Final)</text>

              <circle cx="600" cy="450" r="15" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="625" y="455" fontSize="11">Dead End (No transition)</text>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4">Figure 3: Computation tree showing all possible paths an NFA can take when processing input</p>
          </div>
        </div>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
            <h4 className="text-center font-bold text-lg mb-4">NFA String Processing Flow</h4>
            <svg width="700" height="900" viewBox="0 0 700 900" className="mx-auto">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>

              {/* Start */}
              <ellipse cx="350" cy="40" rx="120" ry="30" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="350" y="48" textAnchor="middle" fontSize="14" fontWeight="bold">Start: Place token at q₀</text>

              {/* Arrow to Read Input */}
              <line x1="350" y1="70" x2="350" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Read Input */}
              <rect x="270" y="100" width="160" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="130" textAnchor="middle" fontSize="13">Read next input symbol a</text>

              {/* Arrow to Consult */}
              <line x1="350" y1="150" x2="350" y2="180" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Consult Transition */}
              <rect x="250" y="180" width="200" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="210" textAnchor="middle" fontSize="13">Consult δ(current_state, a)</text>

              {/* Arrow to Multiple States Decision */}
              <line x1="350" y1="230" x2="350" y2="270" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Multiple States Decision */}
              <path d="M 350 270 L 450 320 L 350 370 L 250 320 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="318" textAnchor="middle" fontSize="12">Multiple next</text>
              <text x="350" y="333" textAnchor="middle" fontSize="12">states?</text>

              {/* Yes - Clone Token */}
              <line x1="450" y1="320" x2="550" y2="320" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="480" y="315" fontSize="12" fontWeight="bold" fill="#16a34a">Yes</text>
              <rect x="550" y="295" width="130" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="615" y="318" textAnchor="middle" fontSize="11">Clone token for</text>
              <text x="615" y="333" textAnchor="middle" fontSize="11">each possible state</text>
              <line x1="615" y1="345" x2="615" y2="420" stroke="#3b82f6" strokeWidth="2" />
              <line x1="615" y1="420" x2="350" y2="420" stroke="#3b82f6" strokeWidth="2" />
              <line x1="350" y1="420" x2="350" y2="450" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* No - Valid Transition Decision */}
              <line x1="350" y1="370" x2="350" y2="450" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="360" y="410" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>

              {/* Valid Transition Decision */}
              <path d="M 350 450 L 450 500 L 350 550 L 250 500 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="498" textAnchor="middle" fontSize="12">Any valid</text>
              <text x="350" y="513" textAnchor="middle" fontSize="12">transition?</text>

              {/* Yes - Move Token */}
              <line x1="450" y1="500" x2="550" y2="500" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="480" y="495" fontSize="12" fontWeight="bold" fill="#16a34a">Yes</text>
              <rect x="550" y="475" width="130" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="615" y="498" textAnchor="middle" fontSize="11">Move token to</text>
              <text x="615" y="513" textAnchor="middle" fontSize="11">next state</text>
              <line x1="615" y1="525" x2="615" y2="600" stroke="#3b82f6" strokeWidth="2" />
              <line x1="615" y1="600" x2="350" y2="600" stroke="#3b82f6" strokeWidth="2" />
              <line x1="350" y1="600" x2="350" y2="630" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* No - Discard Token */}
              <line x1="250" y1="500" x2="150" y2="500" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="220" y="495" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>
              <rect x="20" y="475" width="130" height="50" rx="5" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="85" y="498" textAnchor="middle" fontSize="11">Discard this token</text>
              <text x="85" y="513" textAnchor="middle" fontSize="11">- Dead end</text>
              <line x1="85" y1="525" x2="85" y2="680" stroke="#3b82f6" strokeWidth="2" />
              <line x1="85" y1="680" x2="250" y2="680" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* More Input Decision */}
              <path d="M 350 630 L 450 680 L 350 730 L 250 680 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="685" textAnchor="middle" fontSize="12">More input?</text>

              {/* Yes - Loop Back */}
              <line x1="250" y1="680" x2="150" y2="680" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="680" x2="150" y2="125" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="125" x2="270" y2="125" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="140" y="675" fontSize="12" fontWeight="bold" fill="#16a34a">Yes</text>

              {/* No - Tokens Remaining Decision */}
              <line x1="350" y1="730" x2="350" y2="770" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="360" y="755" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>

              {/* Tokens Remaining Decision */}
              <path d="M 350 770 L 450 820 L 350 870 L 250 820 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="818" textAnchor="middle" fontSize="11">Any token in</text>
              <text x="350" y="833" textAnchor="middle" fontSize="11">accept state?</text>

              {/* Yes - Accept */}
              <line x1="450" y1="820" x2="550" y2="820" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="480" y="815" fontSize="12" fontWeight="bold" fill="#16a34a">Yes</text>
              <ellipse cx="615" cy="820" rx="65" ry="30" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="615" y="820" textAnchor="middle" fontSize="12" fontWeight="bold">ACCEPT</text>
              <text x="615" y="835" textAnchor="middle" fontSize="12" fontWeight="bold">STRING ✓</text>

              {/* No - Reject */}
              <line x1="250" y1="820" x2="150" y2="820" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="220" y="815" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>
              <ellipse cx="85" cy="820" rx="65" ry="30" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="85" y="820" textAnchor="middle" fontSize="12" fontWeight="bold">REJECT</text>
              <text x="85" y="835" textAnchor="middle" fontSize="12" fontWeight="bold">STRING ✗</text>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4">Figure 4: Complete flowchart of NFA string processing algorithm</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>⚠️ Common Misconceptions</h3>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #1: NFAs are more powerful than DFAs</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> NFAs and DFAs are computationally equivalent. They recognize exactly the same class of languages—the regular languages.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #2: NFAs execute all paths in parallel physically</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> The "parallel paths" interpretation is a conceptual model. In practice, NFAs are simulated using algorithms that track the set of currently active states.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #3: Empty set transitions mean "reject immediately"</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> When a particular computation path encounters δ(q, a) = ∅, only that specific path terminates. Other parallel paths continue executing.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #4: Epsilon transitions consume input symbols</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> Epsilon transitions don't consume any input. They're spontaneous state changes that occur without reading input.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>⚙️ NFA Simulation Algorithm</h3>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-4 mt-4">
          <p className="font-semibold">Algorithm Overview</p>
          <p className="text-sm mt-2">The standard algorithm for simulating an NFA processes an input string by maintaining a set of currently active states.</p>
          <p className="text-sm mt-2"><strong>Time Complexity:</strong> O(n × |Q|²) where n is input length and |Q| is number of states</p>
          <p className="text-sm mt-2"><strong>Space Complexity:</strong> O(|Q|) to store the set of current states</p>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded">
          <p className="font-semibold">Key Steps:</p>
          <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
            <li>Initialize with ε-closure of start state</li>
            <li>For each input symbol, compute next states</li>
            <li>Apply ε-closure to results</li>
            <li>Check if any final state is reachable</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>💻 Code Implementation</h3>
        <p className="mb-4">Complete NFA simulator in Python with epsilon transitions:</p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`class NFA:
    def __init__(self, states, alphabet, transitions, start_state, accept_states):
        self.states = set(states)
        self.alphabet = set(alphabet)
        self.transitions = transitions
        self.start_state = start_state
        self.accept_states = set(accept_states)
        self.epsilon = 'ε'
    
    def epsilon_closure(self, states):
        closure = set(states)
        stack = list(states)
        while stack:
            current = stack.pop()
            if (current, self.epsilon) in self.transitions:
                for next_state in self.transitions[(current, self.epsilon)]:
                    if next_state not in closure:
                        closure.add(next_state)
                        stack.append(next_state)
        return closure
    
    def move(self, states, symbol):
        next_states = set()
        for state in states:
            if (state, symbol) in self.transitions:
                next_states.update(self.transitions[(state, symbol)])
        return next_states
    
    def accepts(self, input_string):
        current_states = self.epsilon_closure({self.start_state})
        for symbol in input_string:
            next_states = self.move(current_states, symbol)
            current_states = self.epsilon_closure(next_states)
            if not current_states:
                return False
        return bool(current_states & self.accept_states)`}</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h3>📚 Problem-Solving Practice</h3>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-lg">📘 Easy Problem: Design Basic NFA</h4>
            <p className="mt-2"><strong>Problem:</strong> Design an NFA with minimum states that accepts all strings over Σ = {'{'}0, 1{'}'} containing at least one '1'.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong> We need only 2 states:</p>
                <ul className="list-disc ml-6">
                  <li>q₀ (start, non-accepting): haven't seen a '1' yet</li>
                  <li>q₁ (accepting): seen at least one '1'</li>
                </ul>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 text-xs">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-2">State</th>
                        <th className="border border-gray-300 p-2">Input '0'</th>
                        <th className="border border-gray-300 p-2">Input '1'</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">→q₀</td>
                        <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">*q₁</td>
                        <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2"><strong>Explanation:</strong> From q₀, stay at q₀ on '0', move to q₁ on '1'. From q₁, stay at q₁ on any input. Accepts "1", "01", "101" but rejects "" and "000".</p>
                <p className="mt-2"><strong>Final Answer:</strong> 2-state NFA with states {'{'}q₀, q₁{'}'}</p>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-semibold text-lg">📙 Medium Problem: NFA with Complex Pattern</h4>
            <p className="mt-2"><strong>Problem:</strong> Construct an NFA that accepts all strings over Σ = {'{'}a, b{'}'} where the third symbol from the end is 'a'.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong> Use nondeterminism to "guess" when we're 3 symbols from the end.</p>
                <p><strong>States:</strong></p>
                <ul className="list-disc ml-6">
                  <li>q₀: start state, haven't committed to position yet</li>
                  <li>q₁: just saw 'a', guess this might be 3rd from end</li>
                  <li>q₂: one symbol after the guessed 'a'</li>
                  <li>q₃: two symbols after the guessed 'a' (accepting)</li>
                </ul>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 text-xs">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-2">State</th>
                        <th className="border border-gray-300 p-2">Input 'a'</th>
                        <th className="border border-gray-300 p-2">Input 'b'</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">→q₀</td>
                        <td className="border border-gray-300 p-2 bg-yellow-100">{'{'}q₀, q₁{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">q₁</td>
                        <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">q₂</td>
                        <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">*q₃</td>
                        <td className="border border-gray-300 p-2">∅</td>
                        <td className="border border-gray-300 p-2">∅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2"><strong>Example trace for "bbaab":</strong> q₀ →b q₀ →b q₀ →a {'{'}q₀,q₁{'}'} →a {'{'}q₀,q₁,q₂{'}'} →b {'{'}q₀,q₃{'}'} → ACCEPT ✓</p>
                <p className="mt-2"><strong>Final Answer:</strong> 4-state NFA. Nondeterminism allows guessing when we're 3 symbols from the end.</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-lg">📕 Hard Problem: NFA to DFA Conversion</h4>
            <p className="mt-2"><strong>Problem:</strong> Convert an ε-NFA to DFA using subset construction.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-red-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Approach:</strong> Use subset construction algorithm:</p>
                <ol className="list-decimal ml-6">
                  <li>Start with ε-closure({'{'}q₀{'}'})</li>
                  <li>For each unprocessed DFA state, compute transitions on each symbol</li>
                  <li>Apply ε-closure to results to get new DFA states</li>
                  <li>Repeat until no new states are discovered</li>
                  <li>DFA accepting states are those containing any NFA accepting state</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📊 Comparison & Analysis: NFA vs DFA</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Aspect</th>
                <th className="border border-gray-300 p-2">NFA</th>
                <th className="border border-gray-300 p-2">DFA</th>
                <th className="border border-gray-300 p-2">ε-NFA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Transition Function</td>
                <td className="border border-gray-300 p-2">δ: Q × Σ → P(Q)</td>
                <td className="border border-gray-300 p-2">δ: Q × Σ → Q</td>
                <td className="border border-gray-300 p-2">δ: Q × (Σ ∪ {'{'}ε{'}'}) → P(Q)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Advantages</td>
                <td className="border border-gray-300 p-2">✓ Fewer states<br />✓ Easier to design<br />✓ Natural for regex</td>
                <td className="border border-gray-300 p-2">✓ Faster execution<br />✓ Simple table lookup<br />✓ O(n) runtime</td>
                <td className="border border-gray-300 p-2">✓ Most compact<br />✓ Easy to combine<br />✓ Direct regex conversion</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Time Complexity</td>
                <td className="border border-gray-300 p-2">O(m × |Q|²)</td>
                <td className="border border-gray-300 p-2">O(m)</td>
                <td className="border border-gray-300 p-2">O(m × |Q|²)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Computational Power</td>
                <td className="border border-gray-300 p-2 text-center" colSpan={3}>ALL EQUIVALENT - Recognize Regular Languages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🎯 When to Choose What?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-sm">
            <div>
              <p className="font-semibold text-blue-600">Choose NFA when:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Designing automaton manually</li>
                <li>Pattern has complex alternations</li>
                <li>Building intermediate representation</li>
                <li>Memory more constrained than time</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-green-600">Choose DFA when:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Execution speed is critical</li>
                <li>Need predictable performance</li>
                <li>Implementing in hardware</li>
                <li>Pattern used repeatedly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📄 Quick Reference Cheat Sheet</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🔑 Key Definitions</h4>
            <ul className="text-sm space-y-1">
              <li><strong>NFA:</strong> 5-tuple (Q, Σ, δ, q₀, F) where δ: Q × Σ → P(Q)</li>
              <li><strong>Nondeterminism:</strong> Multiple possible next states</li>
              <li><strong>ε-transition:</strong> State change without input</li>
              <li><strong>Acceptance:</strong> ∃ path to accepting state</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">📐 Important Algorithms</h4>
            <ul className="text-sm space-y-1">
              <li><strong>ε-closure(S):</strong> DFS/BFS from S following ε-edges</li>
              <li><strong>move(S, a):</strong> ∪{'{'}'δ(q,a) | q ∈ S{'}'}</li>
              <li><strong>NFA Simulation:</strong> S₀ = ε-closure({'{'}q₀{'}'})</li>
              <li><strong>Subset Construction:</strong> DFA state = NFA state set</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⏱️ Complexity Reference</h4>
            <ul className="text-sm space-y-1">
              <li><strong>NFA Simulation:</strong> O(m × |Q|²) time, O(|Q|) space</li>
              <li><strong>Subset Construction:</strong> O(|Σ| × 2^|Q|) time</li>
              <li><strong>DFA states:</strong> up to 2^|Q|</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Thinking NFAs are more powerful than DFAs</li>
              <li>❌ Forgetting ε-closure at initialization</li>
              <li>❌ Rejecting when one path dies</li>
              <li>❌ Thinking ε-transitions consume input</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>🚀 Advanced Topics & Resources</h3>

        <div className="space-y-4">
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">NFA Minimization and State Reduction</h4>
            <p className="text-sm mt-2">Unlike DFAs, NFAs don't have a unique minimal form. However, techniques exist to reduce NFA size while preserving the recognized language. Research includes bisimulation-based minimization and lookahead-based reduction.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">Alternating Finite Automata (AFAs)</h4>
            <p className="text-sm mt-2">AFAs extend NFAs with both existential AND universal nondeterminism. They appear in model checking, temporal logic verification, and tree automata theory.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">Two-Way NFAs and Reversal-Bounded Automata</h4>
            <p className="text-sm mt-2">Two-way NFAs can move their read head both left and right on the input tape. Surprisingly, they still recognize only regular languages but can be exponentially more efficient in terms of state count.</p>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded">
          <h4 className="font-semibold">📚 Recommended Resources</h4>
          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            <li><strong>Books:</strong> "Introduction to the Theory of Computation" by Michael Sipser</li>
            <li><strong>Online Tools:</strong> JFLAP - Interactive NFA simulation and visualization</li>
            <li><strong>Practice:</strong> GeeksforGeeks NFA problems with detailed solutions</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>💼 Interview Preparation</h3>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold">Common Interview Questions:</h4>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-2">
              <li>Design an NFA for a given pattern and explain the nondeterministic choices</li>
              <li>Convert NFA to DFA and analyze state count differences</li>
              <li>Explain how regex engines use NFAs internally</li>
              <li>Discuss trade-offs between NFA and DFA for pattern matching</li>
              <li>Implement NFA simulation algorithm with complexity analysis</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold">Key Points to Remember:</h4>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>NFAs and DFAs are computationally equivalent</li>
              <li>NFAs can be exponentially more concise</li>
              <li>Subset construction converts NFA to DFA</li>
              <li>Real systems use hybrid NFA/DFA approaches (lazy DFA construction)</li>
              <li>Thompson's NFA construction is used in regex engines</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice & Apply Your Knowledge</h3>
        <p>Test your understanding with these interactive questions. Click on your choice for each question, then check your answer to see if you're correct!</p>

        <h4 className="mt-6 font-semibold">Quick Concept Checks (Interactive MCQs)</h4>

        <div className="mt-8 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm">
          <Quiz
            title="Module 1.5 Mastery Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={5}
          />
        </div>
      </section>
    </div>
  );
};

export default Module1_5;
