import Quiz from '../../components/Quiz';

const Module1_3: React.FC = () => {
  const quizQuestions = [
    {
      question: "Which part of an inductive proof assumes the property holds for an arbitrary value k?",
      options: ["Base Case", "Inductive Hypothesis", "Inductive Step", "Conclusion"],
      correctAnswer: 1,
      explanation: "The Inductive Hypothesis is the assumption that P(k) is true, which is then used to prove P(k+1)."
    },
    {
      question: "In strong induction, how does the inductive hypothesis differ from weak (standard) induction?",
      options: [
        "It assumes P(k+1) is true",
        "It assumes P(i) is true for all i from the base case up to k",
        "It doesn't require a base case",
        "It only works for even numbers"
      ],
      correctAnswer: 1,
      explanation: "Strong induction assumes the property holds for ALL values from the base case up to k, providing a stronger foundation for the inductive step."
    },
    {
      question: "Structural induction is specialized for proving properties of:",
      options: ["Continuous real functions", "Recursively defined structures (strings, trees, REs)", "Finite state machines only", "Prime numbers"],
      correctAnswer: 1,
      explanation: "Structural induction is used to prove properties of objects defined by recursive rules, matching the structure of the definition itself."
    },
    {
      question: "What is the 'domino effect' analogy most commonly used to describe?",
      options: ["Proof by Contradiction", "Direct Proof", "Mathematical Induction", "Diagonalization"],
      correctAnswer: 2,
      explanation: "Induction is like dominoes: the base case knocks down the first one, and the inductive step ensures that if one falls, the next one follows."
    },
    {
      question: "If you need to prove a property of a binary tree, which induction method is most appropriate?",
      options: ["Weak Induction on height", "Strong Induction on number of nodes", "Structural Induction", "All of the above"],
      correctAnswer: 3,
      explanation: "While structural induction is the most natural fit, many properties of trees can also be proven using weak or strong induction on metrics like height or node count."
    }
  ];
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.3</div>
        <div className="lesson-title-main">
          <h1>📊 Inductive Proofs</h1>
          <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-1: Automata Methods and Finite Automata | Level: Expert Comprehensive Module</p>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Understand the fundamental structure and logic behind mathematical induction as a proof technique</li>
            <li>Apply the base case and inductive step methodology to prove properties of recursive structures and algorithms</li>
            <li>Distinguish between weak induction, strong induction, and structural induction and select the appropriate method for different problems</li>
            <li>Construct rigorous inductive proofs for properties of strings, languages, and automata in formal language theory</li>
            <li>Evaluate and debug faulty inductive proofs by identifying common logical errors and gaps in reasoning</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're standing at the base of an infinite staircase, and someone asks you to prove that you can climb every single step.
          Sounds impossible, right? But here's the clever trick: if you can prove that (1) you can step onto the first step, and (2) whenever
          you're on any step, you can always reach the next one, then logically, you can climb the entire infinite staircase! This is the
          beautiful essence of mathematical induction—a cornerstone technique that powers proofs throughout computer science, especially in
          Theory of Computation.
        </p>
        <p>
          In the realm of automata theory and formal languages, inductive proofs are absolutely essential. When we design finite automata,
          regular expressions, or context-free grammars, we constantly deal with recursive definitions—structures that are defined in terms
          of themselves. How do we prove that a regular expression correctly matches all strings of a certain pattern? How do we verify that
          a recursive algorithm always terminates correctly? How do we demonstrate that two automata are equivalent? The answer: inductive proofs.
        </p>
        <p>
          This technique isn't just academic exercise—it's a practical tool used by software engineers to verify correctness of recursive
          algorithms, by compiler designers to prove properties of parsing algorithms, and by systems programmers to ensure protocols behave
          correctly under all conditions. Companies like Google, Microsoft, and Amazon rely on formally verified systems where inductive proofs
          guarantee that critical software components work as intended. In technical interviews at top tech companies, the ability to construct
          and explain inductive proofs demonstrates deep analytical thinking and mathematical maturity.
        </p>
        <p>
          Understanding induction also builds your logical reasoning skills that transfer to debugging, algorithm design, and system architecture.
          When you master induction, you develop the ability to think about infinite cases through finite reasoning—a superpower in computer science.
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul>
          <li><strong>Compiler Verification:</strong> Proving parsers correctly handle all valid programs in a programming language</li>
          <li><strong>Protocol Correctness:</strong> Demonstrating network protocols maintain invariants across all possible message sequences</li>
          <li><strong>Algorithm Analysis:</strong> Establishing time and space complexity bounds for recursive algorithms</li>
          <li><strong>Cryptography:</strong> Proving security properties hold for all possible inputs in encryption systems</li>
          <li><strong>Database Systems:</strong> Verifying transaction processing maintains consistency across all operation sequences</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>📖 Deep Dive: Understanding the Concept</h3>

        <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
        <p>
          <strong>What is Mathematical Induction?</strong> At its core, mathematical induction is a proof technique used to establish that a
          statement or property P(n) holds true for all natural numbers n (or all elements in some well-ordered set). Think of it as a systematic
          domino effect: if you can knock down the first domino and prove that knocking down any domino will always knock down the next one, then
          all dominoes will fall.
        </p>
        <p>
          More formally, mathematical induction consists of two essential components: the <strong>base case</strong> and the <strong>inductive step</strong>.
          The base case establishes that the property holds for the smallest value (typically n = 0 or n = 1). The inductive step proves that if the
          property holds for an arbitrary value n = k (called the inductive hypothesis), then it must also hold for n = k + 1. Together, these two
          steps create a logical chain that extends infinitely.
        </p>
        <p>
          <strong>Why Does Induction Exist?</strong> Before induction was formalized in the 16th century, mathematicians struggled with proving
          statements about infinite sets. You can't simply check every natural number—that would take forever! Induction provides an elegant solution:
          by proving a pattern in how truth propagates from one case to the next, we can reason about infinitely many cases using only finite logic.
          Without induction, entire branches of mathematics and computer science—including the theory of computation—would be severely limited. We
          couldn't prove properties of recursive functions, couldn't verify loop invariants in programs, and couldn't establish correctness of many
          fundamental algorithms.
        </p>
        <p>
          <strong>Historical Context:</strong> The principle of mathematical induction has roots in ancient mathematics, but was first rigorously
          formalized by Francesco Maurolico in 1575 and later refined by Blaise Pascal and Jakob Bernoulli in the 17th century. The modern formulation
          we use today was crystallized by Giuseppe Peano in his axioms for arithmetic (1889), where induction became one of the fundamental axioms
          defining the natural numbers.
        </p>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <ul>
          <li><strong>Base Case:</strong> The initial step proving the property holds for the smallest value (usually n = 0 or n = 1)</li>
          <li><strong>Inductive Hypothesis:</strong> The assumption that the property P(k) holds for some arbitrary value k</li>
          <li><strong>Inductive Step:</strong> The proof that P(k) → P(k+1), showing if it's true for k, it's true for k+1</li>
          <li><strong>Well-Ordering Principle:</strong> Every non-empty set of natural numbers has a smallest element (foundation for induction)</li>
          <li><strong>Strong Induction:</strong> A variant where we assume P(0), P(1), ..., P(k) all hold to prove P(k+1)</li>
          <li><strong>Structural Induction:</strong> Induction applied to recursively-defined structures like trees, lists, or strings</li>
        </ul>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
            <h4 className="text-center font-bold text-lg mb-4">Process Flow: Constructing an Inductive Proof</h4>
            <svg width="700" height="950" viewBox="0 0 700 950" className="mx-auto">
              <defs>
                <marker id="arrowInduction" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>

              {/* Start */}
              <ellipse cx="350" cy="40" rx="120" ry="30" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="350" y="48" textAnchor="middle" fontSize="13" fontWeight="bold">Start: Statement to Prove</text>

              <line x1="350" y1="70" x2="350" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* Define Property */}
              <rect x="275" y="100" width="150" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="130" textAnchor="middle" fontSize="12">Define Property P(n)</text>

              <line x1="350" y1="150" x2="350" y2="180" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* Identify Domain */}
              <rect x="260" y="180" width="180" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="210" textAnchor="middle" fontSize="12">Identify Domain: n ≥ n₀</text>

              <line x1="350" y1="230" x2="350" y2="270" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* Base Case Check */}
              <path d="M 350 270 L 450 320 L 350 370 L 250 320 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="318" textAnchor="middle" fontSize="11">Base Case:</text>
              <text x="350" y="333" textAnchor="middle" fontSize="11">Check P(n₀)</text>

              {/* FALSE - Proof Fails */}
              <line x1="250" y1="320" x2="150" y2="320" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />
              <text x="210" y="315" fontSize="11" fontWeight="bold" fill="#dc2626">FALSE</text>

              <ellipse cx="80" cy="320" rx="70" ry="30" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="80" y="325" textAnchor="middle" fontSize="11" fontWeight="bold">❌ Proof Fails</text>

              {/* TRUE - Base Case Proven */}
              <line x1="350" y1="370" x2="350" y2="420" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />
              <text x="360" y="400" fontSize="11" fontWeight="bold" fill="#16a34a">TRUE</text>

              <rect x="250" y="420" width="200" height="50" rx="5" fill="#d1fae5" stroke="#16a34a" strokeWidth="2" />
              <text x="350" y="450" textAnchor="middle" fontSize="11" fontWeight="bold">✓ Base Case Proven</text>

              <line x1="350" y1="470" x2="350" y2="510" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* State Inductive Hypothesis */}
              <rect x="230" y="510" width="240" height="50" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="530" textAnchor="middle" fontSize="11">State Inductive Hypothesis:</text>
              <text x="350" y="545" textAnchor="middle" fontSize="11" fontWeight="bold">Assume P(k)</text>

              <line x1="350" y1="560" x2="350" y2="600" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* Prove Inductive Step */}
              <rect x="230" y="600" width="240" height="50" rx="5" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" />
              <text x="350" y="620" textAnchor="middle" fontSize="11">Prove Inductive Step:</text>
              <text x="350" y="635" textAnchor="middle" fontSize="11" fontWeight="bold">P(k) → P(k+1)</text>

              <line x1="350" y1="650" x2="350" y2="700" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* Can we derive? */}
              <path d="M 350 700 L 470 760 L 350 820 L 230 760 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="350" y="750" textAnchor="middle" fontSize="10">Can we derive</text>
              <text x="350" y="765" textAnchor="middle" fontSize="10">P(k+1) from P(k)?</text>

              {/* NO - Proof Fails */}
              <line x1="230" y1="760" x2="120" y2="760" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />
              <text x="190" y="755" fontSize="11" fontWeight="bold" fill="#dc2626">NO</text>

              <rect x="20" y="735" width="100" height="50" rx="5" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="70" y="753" textAnchor="middle" fontSize="9">❌ Proof Fails or</text>
              <text x="70" y="768" textAnchor="middle" fontSize="9">Try Different</text>
              <text x="70" y="783" textAnchor="middle" fontSize="9">Approach</text>

              {/* YES - Inductive Step Proven */}
              <line x1="350" y1="820" x2="350" y2="860" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />
              <text x="360" y="845" fontSize="11" fontWeight="bold" fill="#16a34a">YES</text>

              <rect x="230" y="860" width="240" height="50" rx="5" fill="#d1fae5" stroke="#16a34a" strokeWidth="2" />
              <text x="350" y="890" textAnchor="middle" fontSize="11" fontWeight="bold">✓ Inductive Step Proven</text>

              <line x1="470" y1="885" x2="550" y2="885" stroke="#3b82f6" strokeWidth="2" />
              <line x1="550" y1="885" x2="550" y2="950" stroke="#3b82f6" strokeWidth="2" />
              <line x1="550" y1="950" x2="470" y2="950" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* Conclusion */}
              <rect x="230" y="925" width="240" height="50" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="945" textAnchor="middle" fontSize="10">Conclusion:</text>
              <text x="350" y="960" textAnchor="middle" fontSize="10" fontWeight="bold">P(n) true for all n ≥ n₀</text>

              <line x1="230" y1="950" x2="150" y2="950" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="950" x2="150" y2="1020" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="1020" x2="230" y2="1020" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowInduction)" />

              {/* End */}
              <ellipse cx="350" cy="1020" rx="120" ry="30" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              <text x="350" y="1028" textAnchor="middle" fontSize="13" fontWeight="bold">End: Proof Complete</text>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4">Figure 2: Complete flowchart for constructing an inductive proof</p>
          </div>
        </div>

        <div className="visual-diagram" style={{ background: '#f8f9fa', padding: '30px', margin: '30px 0', borderRadius: '8px' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>Visual Representation of Mathematical Induction</h4>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: '#e3f2fd', borderRadius: '8px', margin: '10px', flex: '1', minWidth: '200px' }}>
              <strong>BASE CASE</strong><br />
              Prove P(0) or P(1)<br />is TRUE
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#fff3e0', borderRadius: '8px', margin: '10px', flex: '1', minWidth: '200px' }}>
              <strong>INDUCTIVE<br />HYPOTHESIS</strong><br />
              Assume P(k) is TRUE
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#f3e5f5', borderRadius: '8px', margin: '10px', flex: '1', minWidth: '200px' }}>
              <strong>INDUCTIVE<br />STEP</strong><br />
              Prove P(k) → P(k+1)
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#e8f5e9', borderRadius: '8px', margin: '10px', flex: '1', minWidth: '200px' }}>
              <strong>CONCLUSION</strong><br />
              P(n) TRUE for<br />ALL n ≥ 0
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <strong>The Logical Chain</strong><br />
            P(0) is true → P(0) implies P(1) → P(1) implies P(2) → P(2) implies P(3) → ...
          </div>
        </div>

        <h4 className="mt-6 font-semibold">How It Works: The Mechanism Explained</h4>
        <p>Let's break down exactly how induction works step-by-step, using both formal logic and intuitive understanding:</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6">
          <h5 className="font-semibold text-center mb-4">Complete Induction Proof Flowchart</h5>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 w-80 text-center">
              <strong>Begin Proof by Induction</strong>
            </div>
            <div className="text-2xl">↓</div>
            <div className="bg-white border-2 border-gray-400 rounded-lg p-3 w-80 text-center">
              Define: What is P(n)?
            </div>
            <div className="text-2xl">↓</div>
            <div className="bg-white border-2 border-gray-400 rounded-lg p-3 w-80 text-center">
              Specify Domain: n ≥ n₀
            </div>
            <div className="text-2xl">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-3 w-80 text-center">
              <strong>BASE CASE: Verify P(n₀)</strong>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="text-sm text-red-600 font-semibold">FALSE</div>
                <div className="text-2xl">↓</div>
                <div className="bg-red-100 border-2 border-red-500 rounded-lg p-3 w-56 text-center">
                  ❌ Statement is FALSE
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-gray-200 border-2 border-gray-500 rounded-lg p-3 w-56 text-center text-sm">
                  End: Cannot prove false statement
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sm text-green-600 font-semibold">TRUE</div>
                <div className="text-2xl">↓</div>
                <div className="bg-green-100 border-2 border-green-500 rounded-lg p-3 w-56 text-center">
                  ✓ Base case proven
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-3 w-56 text-center">
                  <strong>HYPOTHESIS:</strong> Assume P(k) for arbitrary k ≥ n₀
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-3 w-56 text-center">
                  <strong>GOAL:</strong> Prove P(k+1)
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-white border-2 border-gray-400 rounded-lg p-3 w-56 text-center text-sm">
                  Start with LHS of P(k+1)
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-white border-2 border-gray-400 rounded-lg p-3 w-56 text-center text-sm">
                  Apply algebraic manipulation
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-white border-2 border-gray-400 rounded-lg p-3 w-56 text-center text-sm">
                  Insert inductive hypothesis P(k)
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-white border-2 border-gray-400 rounded-lg p-3 w-56 text-center text-sm">
                  Simplify using P(k) = true
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 w-56 text-center text-sm">
                  Does it equal RHS of P(k+1)?
                </div>
                <div className="flex items-center justify-center space-x-4 mt-3">
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-red-600 font-semibold">NO</div>
                    <div className="text-xl">↓</div>
                    <div className="bg-red-100 border-2 border-red-500 rounded-lg p-2 w-40 text-center text-xs">
                      ❌ Proof fails - try different approach
                    </div>
                    <div className="text-xl">↓</div>
                    <div className="bg-gray-200 border-2 border-gray-500 rounded-lg p-2 w-40 text-center text-xs">
                      End: Need different method
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-green-600 font-semibold">YES</div>
                    <div className="text-xl">↓</div>
                    <div className="bg-green-100 border-2 border-green-500 rounded-lg p-2 w-40 text-center text-xs">
                      ✓ Inductive step proven: P(k) ⟹ P(k+1)
                    </div>
                    <div className="text-xl">↓</div>
                    <div className="bg-green-200 border-2 border-green-600 rounded-lg p-2 w-40 text-center text-xs font-semibold">
                      CONCLUSION: By mathematical induction...
                    </div>
                    <div className="text-xl">↓</div>
                    <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-2 w-40 text-center text-xs font-semibold">
                      ✓ P(n) true for all n ≥ n₀ ∎
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4">
          <strong>Step 1: Identify the Property to Prove</strong> - First, clearly state what you want to prove. This is typically a predicate P(n)
          that depends on a natural number n. For example, "The sum of the first n positive integers equals n(n+1)/2" can be written as P(n):
          1 + 2 + 3 + ... + n = n(n+1)/2. Being precise about what you're proving is crucial—vague statements lead to invalid proofs.
        </p>

        <p>
          <strong>Step 2: Establish the Base Case</strong> - This is where you verify that P(n) holds for the smallest value in your domain, typically
          n = 0 or n = 1. For our sum example, we'd check P(1): Does 1 = 1(1+1)/2? Yes, 1 = 1. The base case anchors your entire proof—think of it as
          planting the first domino firmly in place. Without a valid base case, your entire proof collapses, no matter how elegant the inductive step
          might be.
        </p>

        <p>
          <strong>Step 3: State the Inductive Hypothesis</strong> - Now comes the clever part. You assume that P(k) is true for some arbitrary but fixed
          value k ≥ base case. This isn't cheating—you're not assuming what you want to prove! You're saying "Let's suppose the property works for some
          number k. What can we deduce?" This assumption is temporary and strategic. In our example, we assume that 1 + 2 + 3 + ... + k = k(k+1)/2 for
          some specific k.
        </p>

        <p>
          <strong>Step 4: Prove the Inductive Step</strong> - Here's where the magic happens. Using the inductive hypothesis, you must prove that P(k+1)
          is also true. Think of this as proving: "If domino k falls, then domino k+1 must fall too." For our sum example, we need to show that
          1 + 2 + 3 + ... + k + (k+1) = (k+1)(k+2)/2. We start with the left side, use our inductive hypothesis to replace 1 + 2 + ... + k with k(k+1)/2,
          then algebraically manipulate until we get (k+1)(k+2)/2. The key insight: we build the k+1 case directly from the k case.
        </p>

        <p>
          <strong>Step 5: Conclude</strong> - Once you've established both the base case and the inductive step, you can confidently conclude that P(n)
          holds for all n ≥ base value. The logical reasoning is airtight: P(1) is true (base case), P(1) implies P(2) (inductive step with k=1), P(2)
          implies P(3) (inductive step with k=2), and so on, creating an unbreakable chain extending to infinity.
        </p>

        <p>
          <strong>The Climbing Analogy:</strong> Think of induction like climbing an infinite ladder. The base case is proving you can step on the first
          rung. The inductive step is proving that if you're standing on any rung k, you can always reach rung k+1. Together, these two facts guarantee
          you can climb arbitrarily high—you can reach any rung n, no matter how large!
        </p>

        <h4 className="mt-6 font-semibold">Key Components & Architecture</h4>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6">
          <h5 className="font-semibold text-center mb-6">System Architecture: Components of an Inductive Proof</h5>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
              <h6 className="font-bold text-center mb-2">BASE CASE</h6>
              <ul className="text-sm space-y-1">
                <li>✓ Verify P(n₀) directly</li>
                <li>✓ No assumptions needed</li>
                <li>✓ Must be TRUE</li>
              </ul>
              <p className="text-xs mt-2 text-center italic">Anchors entire proof</p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
              <h6 className="font-bold text-center mb-2">INDUCTIVE HYPOTHESIS</h6>
              <ul className="text-sm space-y-1">
                <li>✓ Assume P(k) is TRUE</li>
                <li>✓ For arbitrary k ≥ n₀</li>
                <li>✓ Strategic assumption</li>
              </ul>
              <p className="text-xs mt-2 text-center italic">Bridge to next case</p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-4">
              <h6 className="font-bold text-center mb-2">INDUCTIVE STEP</h6>
              <ul className="text-sm space-y-1">
                <li>✓ Prove P(k) → P(k+1)</li>
                <li>✓ Use hypothesis P(k)</li>
                <li>✓ Derive P(k+1)</li>
              </ul>
              <p className="text-xs mt-2 text-center italic">Engine of the proof</p>
            </div>

            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4">
              <h6 className="font-bold text-center mb-2">CONCLUSION</h6>
              <p className="text-sm text-center mt-4">P(n) TRUE<br />for ALL<br />n ≥ n₀</p>
              <p className="text-xs mt-2 text-center italic">QED</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-2 mb-8 text-sm">
            <span className="bg-blue-100 px-3 py-1 rounded">BASE CASE</span>
            <span>→ provides →</span>
            <span className="bg-yellow-100 px-3 py-1 rounded">HYPOTHESIS</span>
            <span>→ uses →</span>
            <span className="bg-purple-100 px-3 py-1 rounded">INDUCTIVE STEP</span>
            <span>→ yields →</span>
            <span className="bg-green-100 px-3 py-1 rounded">CONCLUSION</span>
          </div>

          <h6 className="font-semibold text-center mb-4">Mathematical Formulation</h6>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <p className="font-semibold mb-2">Base Case</p>
              <p className="text-sm">Show:</p>
              <p className="text-sm font-mono">P(n₀) = TRUE</p>
              <p className="text-xs mt-2 italic">(Direct verification)</p>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <p className="font-semibold mb-2">Hypothesis</p>
              <p className="text-sm">Assume:</p>
              <p className="text-sm font-mono">P(k) = TRUE</p>
              <p className="text-xs mt-2 italic">(for some k ≥ n₀)</p>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <p className="font-semibold mb-2">Inductive Step</p>
              <p className="text-sm">Prove:</p>
              <p className="text-sm font-mono">P(k) ⟹ P(k+1)</p>
              <p className="text-xs mt-2 italic">(Logical implication)</p>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <p className="font-semibold mb-2">Conclusion</p>
              <p className="text-sm">Therefore:</p>
              <p className="text-sm font-mono">∀n ≥ n₀, P(n) = TRUE</p>
              <p className="text-xs mt-2 italic">(For all n in domain)</p>
            </div>
          </div>
        </div>

        <p className="mt-4"><strong>Component 1: The Base Case</strong></p>
        <p>
          The base case is the foundational pillar of any inductive proof. It serves as the starting point from which all subsequent truths are derived.
          Without a valid base case, the entire logical structure collapses. When establishing a base case, you must directly verify that the property P(n)
          holds for the smallest value in your domain—typically n = 0, n = 1, or some other specified minimum. This isn't just a formality; it's a genuine
          verification step. Common mistakes include assuming the base case is "obvious" without checking, or selecting the wrong base value. In automata
          theory, base cases often correspond to the simplest structures: the empty string ε for string proofs, a single-node tree for tree algorithms, or
          minimal automata with one state.
        </p>

        <p className="mt-4"><strong>Component 2: The Inductive Hypothesis</strong></p>
        <p>
          The inductive hypothesis is perhaps the most conceptually challenging component for beginners. You temporarily assume that P(k) holds for an
          arbitrary but fixed value k in your domain. This assumption feels counterintuitive—aren't we trying to prove P(n) for all n? Yes, but the
          hypothesis isn't circular reasoning. Think of it as a strategic assumption: "Suppose we already know the property works up to some point k. Can
          we leverage that knowledge to extend it to k+1?" The hypothesis must be stated clearly and explicitly in your proof. In strong induction (discussed
          later), we assume P(0), P(1), ..., P(k) all hold simultaneously, giving us more power for certain proofs. The inductive hypothesis is your bridge
          from known cases to unknown ones.
        </p>

        <p className="mt-4"><strong>Component 3: The Inductive Step</strong></p>
        <p>
          The inductive step is the heart of your proof—the engine that powers the logical chain. Here, you must demonstrate that P(k) → P(k+1): if the
          property holds for k, it necessarily holds for k+1. This step requires mathematical rigor and creativity. You'll typically start with what you
          want to prove (P(k+1)), strategically insert your inductive hypothesis (P(k)), and through algebraic manipulation, logical deduction, or construction,
          show they're equivalent. The inductive step must be universally valid—it must work for any value of k in your domain, not just specific examples.
          In automata proofs, the inductive step often involves extending a string by one character, adding a transition to an automaton, or building larger
          structures from smaller proven components.
        </p>

        <p className="mt-4"><strong>Component 4: The Conclusion (Tying It Together)</strong></p>
        <p>
          Once the base case and inductive step are established, the conclusion follows by the principle of mathematical induction itself. You explicitly
          state: "By mathematical induction, P(n) holds for all n ≥ base value." This isn't just ceremonial—it's invoking a fundamental axiom of arithmetic
          (the induction axiom from Peano's axioms). The conclusion makes explicit what was proven implicitly through the logical structure. In formal write-ups,
          always include this concluding statement; it demonstrates you understand the logical foundation of your proof and aren't just mechanically following steps.
        </p>

        <h4 className="mt-6 font-semibold">Real-World Implementation</h4>

        <p>
          <strong>Implementation in Formal Verification Tools:</strong> Modern software verification systems like Coq, Isabelle, and Lean implement automated
          inductive proof assistants. These tools are used by companies like Amazon (for AWS cryptography verification) and Microsoft (for verified operating
          system components). When you define a recursive function in Coq, the system automatically checks that your inductive proof of termination is valid.
          The CompCert verified C compiler, used in safety-critical systems like aerospace and medical devices, relies heavily on thousands of inductive proofs
          to guarantee that compiled code behaves identically to source code.
        </p>

        <p>
          <strong>Linux Kernel and Operating Systems:</strong> While the Linux kernel isn't formally verified, kernel developers use inductive reasoning when
          designing recursive algorithms and data structures. For example, proving that a balanced tree remains balanced after insertions uses structural induction.
          The seL4 microkernel, the world's first formally verified operating system kernel, contains hundreds of inductive proofs establishing security properties
          and correctness guarantees. These proofs ensure that no sequence of system calls can violate security policies—a property verified through induction over
          all possible execution traces.
        </p>

        <p>
          <strong>Programming Language Theory:</strong> When language designers create new programming languages, they prove type soundness using induction on
          derivation trees. The proof establishes that "well-typed programs don't go wrong"—they don't crash with type errors at runtime. This fundamental property
          is proven inductively over the structure of programs. Languages like Rust, whose safety guarantees prevent memory errors without garbage collection, rely
          on similar inductive proofs in their formal semantics.
        </p>

        <div className="code-example" style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4 style={{ color: '#4ec9b0', marginTop: 0 }}>💻 Example: In Formal Verification with Coq</h4>
          <p style={{ color: '#d4d4d4' }}>In the Coq proof assistant, you might prove a simple inductive property about list lengths. Here's how it looks in practice:</p>
          <pre style={{ background: '#252526', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
            <code>{`Theorem length_append : forall (A : Type) (l1 l2 : list A),
  length (l1 ++ l2) = length l1 + length l2.
Proof.
  (* Base case: empty list *)
  intros A l1 l2. induction l1 as [| h t IH].
  - (* l1 = [] *)
    simpl. reflexivity.
  - (* Inductive step: l1 = h :: t, assume IH for t *)
    simpl. rewrite IH. reflexivity.
Qed.`}</code>
          </pre>
          <p style={{ color: '#d4d4d4' }}>This Coq proof uses structural induction on the list l1, proving that appending two lists preserves the sum of their lengths. The system verifies every step mechanically.</p>
        </div>

        <div className="code-example" style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4 style={{ color: '#4ec9b0', marginTop: 0 }}>💻 Example: In Compiler Design</h4>
          <p style={{ color: '#d4d4d4' }}>When building a parser for a programming language, we prove correctness through induction on the structure of parse trees. For a simple expression grammar, we might prove: "For any parse tree T derived from the grammar, evaluate(T) produces a valid result."</p>
          <p style={{ color: '#d4d4d4' }}><strong>Base case:</strong> Leaf nodes (literals like numbers) evaluate correctly.</p>
          <p style={{ color: '#d4d4d4' }}><strong>Inductive step:</strong> If left and right subtrees evaluate correctly, then their parent (an operation node) evaluates correctly by applying the operation to the child results.</p>
          <p style={{ color: '#d4d4d4' }}>This inductive proof guarantees that any valid expression in your language will be evaluated correctly, no matter how complex.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>⚠️ Common Misconceptions</h3>

        <div className="mt-4 space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Misconception #1: "The inductive hypothesis is circular reasoning"</h4>
            <p><strong>What students think:</strong> "We're trying to prove P(n) for all n, but in the inductive step we assume P(k). Isn't that assuming what we want to prove?"</p>
            <p><strong>Reality:</strong> No! The inductive hypothesis is not circular because we only assume P(k) for a specific k to prove P(k+1). We're not assuming P(n) for all n—we're building a logical chain link by link. Think of it like climbing: assuming you're on rung k to prove you can reach k+1 doesn't assume you're on all rungs. The base case proves you start climbing, and the inductive step proves you can always continue.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Misconception #2: "Showing it works for a few cases is enough"</h4>
            <p><strong>What students do wrong:</strong> They verify P(0), P(1), P(2), P(3), maybe even P(100), and conclude "it's true for all n."</p>
            <p><strong>Reality:</strong> No amount of examples—even millions—proves a universal statement. Consider the polynomial n² - n + 41: it produces primes for n = 0, 1, 2, ..., 39 (40 consecutive values!), but fails at n = 40 (which gives 1681 = 41²). Only a proper inductive proof with base case + inductive step proves infinitely many cases. Examples can suggest conjectures but never replace rigorous proof.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Misconception #3: "The base case doesn't matter much"</h4>
            <p><strong>What students do wrong:</strong> They rush through or even skip the base case verification, focusing only on the "interesting" inductive step.</p>
            <p><strong>Reality:</strong> Without a valid base case, your proof proves nothing! Consider trying to prove the false statement "All horses are the same color" using faulty induction. With a broken base case, you could "prove" anything. The base case is your anchor to reality—it ensures your logical chain connects to something actually true. Always verify it carefully and explicitly.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Misconception #4: "Induction only works for summation formulas"</h4>
            <p><strong>What students believe:</strong> Induction is just for proving formulas like 1 + 2 + ... + n = n(n+1)/2.</p>
            <p><strong>Reality:</strong> Induction is far more powerful! It works for:</p>
            <ul>
              <li>Proving properties of algorithms (correctness, termination)</li>
              <li>Establishing divisibility and number theory results</li>
              <li>Verifying properties of recursively-defined structures (trees, graphs, strings)</li>
              <li>Proving inequalities and bounds</li>
              <li>Establishing automata equivalences in formal language theory</li>
            </ul>
            <p>In theory of computation, we use structural induction on strings, parse trees, and automata constantly. It's one of the most versatile proof techniques in all of mathematics and computer science.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📺 Learn Through Videos</h3>
        <p>
          Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.
          These videos cover induction from multiple perspectives, helping solidify your grasp of this essential proof technique.
        </p>

        <div className="video-grid" style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
          <div className="video-item">
            <h3>📚 Mathematical Induction - Fundamentals</h3>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/wblW_M_HVQ8"
              title="Khan Academy - Mathematical Induction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p><strong>Khan Academy - 11:42 - Comprehensive Introduction</strong></p>
            <p>What you'll learn: The basic concept of induction with clear examples, including proving summation formulas and understanding the domino effect analogy.</p>
          </div>

          <div className="video-item">
            <h3>🎬 Strong Induction Explained</h3>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/6O1s3_GsSHo"
              title="Trefor Bazett - Strong Induction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p><strong>Trefor Bazett - 12:15 - Advanced Technique</strong></p>
            <p>What you'll learn: How strong induction differs from weak induction, when to use it, and examples like proving properties of Fibonacci numbers and divisibility.</p>
          </div>

          <div className="video-item">
            <h3>💻 Induction in Theory of Computation</h3>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/bJOuzqu3MUQ"
              title="Neso Academy - Induction in TOC"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p><strong>Neso Academy - 14:33 - TOC Applications</strong></p>
            <p>What you'll learn: How induction is specifically used in automata theory, proving properties of languages, and structural induction on strings and parse trees.</p>
          </div>

          <div className="video-item">
            <h3>📝 Worked Examples - Step by Step</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wblW_M_HVQ8?si=nGFYjwtyMlYGQD4m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p><strong>Professor Dave Explains - 10:22 - Multiple Proofs</strong></p>
            <p>What you'll learn: Five complete inductive proofs worked from start to finish, demonstrating proper formatting and common techniques for different types of problems.</p>
          </div>
        </div>

        <h4 className="mt-4 font-semibold">📺 Additional Resources:</h4>
        <ul>
          <li><strong>Interactive Visualizations:</strong> Visit MathisFun - Mathematical Induction for interactive step-through examples</li>
          <li><strong>Practice Problems:</strong> Brilliant.org has an excellent interactive course on proof by induction with immediate feedback</li>
          <li><strong>Academic Lectures:</strong> Search "MIT 6.042J Mathematical Induction" for full university-level lectures with rigorous treatment</li>
          <li><strong>For Theory of Computation:</strong> Michael Sipser's lectures on YouTube cover induction in the context of automata beautifully</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>⚙️ See It In Action: Algorithm & Examples</h3>

        <h4 className="mt-4 font-semibold">The Induction Algorithm Template</h4>
        <p>
          While induction is a proof technique rather than a computational algorithm, there's a systematic template you should follow when
          constructing inductive proofs. This template ensures you don't miss critical steps and helps organize your logical reasoning.
          Let's break down the standard approach:
        </p>

        <div className="code-example" style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4 style={{ color: '#4ec9b0', marginTop: 0 }}>Standard Induction Proof Template</h4>
          <pre style={{ background: '#252526', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
            <code>{`// ============================================
// MATHEMATICAL INDUCTION PROOF TEMPLATE
// ============================================

THEOREM: State what you want to prove: P(n) for all n ≥ n₀

PROOF BY INDUCTION:

// ===== STEP 1: BASE CASE =====
BASE CASE (n = n₀):
  Show that P(n₀) is true
  // Direct verification - plug in n₀ and verify both sides equal
  LHS = [left hand side with n = n₀]
  RHS = [right hand side with n = n₀]
  Verify: LHS = RHS ✓
  ∴ Base case holds. ✓

// ===== STEP 2: INDUCTIVE HYPOTHESIS =====
INDUCTIVE HYPOTHESIS:
  Assume that P(k) is true for some arbitrary k ≥ n₀
  // Write out exactly what P(k) says
  That is, assume: [write P(k) explicitly]

// ===== STEP 3: INDUCTIVE STEP =====
INDUCTIVE STEP:
  We must prove: P(k+1) is true
  // Write out what P(k+1) says
  That is, we must show: [write P(k+1) explicitly]
  
  Starting with LHS of P(k+1):
    [expression for P(k+1)]
  
  Algebraic manipulation:
    = [step 1 of simplification]
    = [step 2 - try to expose P(k) structure]
    = [P(k) part] + [additional terms]
  
  By inductive hypothesis, [P(k) part] = [value from hypothesis]
  
  Continuing:
    = [substitute using hypothesis]
    = [algebraic simplification]
    = [further simplification]
    = RHS of P(k+1) ✓
  
  ∴ P(k) ⟹ P(k+1) holds. ✓

// ===== STEP 4: CONCLUSION =====
CONCLUSION:
  By the principle of mathematical induction,
  P(n) is true for all n ≥ n₀. ∎ (QED)`}</code>
          </pre>
        </div>

        <h4 className="mt-6 font-semibold">Worked Example 1: Proving a Summation Formula</h4>
        <div className="example-box" style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4>📝 Problem Statement</h4>
          <p><strong>Prove:</strong> For all n ≥ 1, the sum of the first n positive integers equals n(n+1)/2</p>
          <p><strong>Formally:</strong> ∀n ≥ 1,    1 + 2 + 3 + ... + n = n(n+1)/2</p>
          <p style={{ fontStyle: 'italic' }}>This is probably the most famous induction proof and an excellent template for learning the technique!</p>
        </div>

        <div className="solution" style={{ background: '#fff', padding: '20px', borderRadius: '8px', margin: '20px 0', border: '2px solid #4CAF50' }}>
          <h4>🔍 Complete Step-by-Step Solution</h4>

          <p><strong>Step 1: Identify P(n)</strong></p>
          <p>Let P(n) be the statement: 1 + 2 + 3 + ... + n = n(n+1)/2</p>
          <p>We want to prove P(n) is true for all integers n ≥ 1.</p>

          <p><strong>Step 2: BASE CASE (n = 1)</strong></p>
          <p>We must verify P(1): Does 1 = 1(1+1)/2 ?</p>
          <p>LHS: 1</p>
          <p>RHS: 1(1+1)/2 = 1(2)/2 = 2/2 = 1</p>
          <p><strong>Conclusion:</strong> LHS = RHS ✓   Base case holds!</p>

          <p><strong>Step 3: INDUCTIVE HYPOTHESIS</strong></p>
          <p>Assume P(k) is true for some arbitrary integer k ≥ 1.</p>
          <p>That is, assume: 1 + 2 + 3 + ... + k = k(k+1)/2</p>
          <p style={{ fontStyle: 'italic' }}>(We will use this assumption to prove P(k+1))</p>

          <p><strong>Step 4: INDUCTIVE STEP - Prove P(k+1)</strong></p>
          <p>We must show: 1 + 2 + 3 + ... + k + (k+1) = (k+1)(k+2)/2</p>
          <p>Starting with LHS of P(k+1):</p>
          <div style={{ marginLeft: '20px' }}>
            <p>1 + 2 + 3 + ... + k + (k+1)</p>
            <p>Regroup the first k terms:</p>
            <p>= [1 + 2 + 3 + ... + k] + (k+1)</p>
            <p>Apply inductive hypothesis (the bracketed part equals k(k+1)/2):</p>
            <p>= k(k+1)/2 + (k+1)</p>
            <p>Factor out (k+1):</p>
            <p>= (k+1)[k/2 + 1]</p>
            <p>Simplify the bracket:</p>
            <p>= (k+1)[k/2 + 2/2]</p>
            <p>= (k+1)[(k + 2)/2]</p>
            <p>= (k+1)(k+2)/2</p>
          </div>
          <p><strong>This is exactly the RHS of P(k+1)! ✓</strong></p>
          <p><strong>Conclusion:</strong> P(k) ⟹ P(k+1) is proven. ✓</p>

          <p><strong>Step 5: CONCLUSION</strong></p>
          <p>By the principle of mathematical induction, P(n) holds for all integers n ≥ 1.</p>
          <p><strong>Therefore:</strong> 1 + 2 + 3 + ... + n = n(n+1)/2 for all n ≥ 1. ∎</p>
        </div>

        <div className="insights" style={{ background: '#fffbea', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4>💡 Key Insights</h4>
          <ul>
            <li><strong>The grouping trick:</strong> We separated [1+2+...+k] to expose the inductive hypothesis—this is a common and powerful technique</li>
            <li><strong>Factoring is your friend:</strong> Factoring out (k+1) allowed us to simplify into exactly the form we needed</li>
            <li><strong>Target the goal:</strong> We knew we wanted (k+1)(k+2)/2, so every algebraic step aimed toward that form</li>
            <li><strong>This formula has history:</strong> Legend says young Gauss discovered this as a child when asked to sum 1 to 100!</li>
          </ul>
        </div>

        <h4 className="mt-6 font-semibold">Worked Example 2: Proving a Divisibility Property</h4>
        <div className="example-box" style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4>📝 Problem Statement</h4>
          <p><strong>Prove:</strong> For all n ≥ 1, the expression n³ - n is divisible by 6</p>
          <p><strong>Formally:</strong> ∀n ≥ 1,    6 | (n³ - n)</p>
          <p style={{ fontStyle: 'italic' }}>Note: "a | b" means "a divides b" or "b is divisible by a"</p>
        </div>

        <div className="solution" style={{ background: '#fff', padding: '20px', borderRadius: '8px', margin: '20px 0', border: '2px solid #4CAF50' }}>
          <h4>🔍 Complete Step-by-Step Solution</h4>

          <p><strong>Step 1: Define P(n)</strong></p>
          <p>Let P(n) be the statement: 6 | (n³ - n), meaning n³ - n = 6k for some integer k</p>

          <p><strong>Step 2: BASE CASE (n = 1)</strong></p>
          <p>Check if 6 | (1³ - 1)</p>
          <p>1³ - 1 = 1 - 1 = 0 = 6(0)</p>
          <p><strong>Yes! 0 is divisible by 6. ✓ Base case holds.</strong></p>

          <p><strong>Step 3: INDUCTIVE HYPOTHESIS</strong></p>
          <p>Assume P(k) is true: 6 | (k³ - k)</p>
          <p>That is, assume k³ - k = 6m for some integer m</p>

          <p><strong>Step 4: INDUCTIVE STEP - Prove P(k+1)</strong></p>
          <p>We must show: 6 | ((k+1)³ - (k+1))</p>
          <p>Expand (k+1)³:</p>
          <div style={{ marginLeft: '20px' }}>
            <p>(k+1)³ - (k+1) = (k³ + 3k² + 3k + 1) - (k + 1)</p>
            <p>= k³ + 3k² + 3k + 1 - k - 1</p>
            <p>= k³ + 3k² + 2k</p>
            <p>Rearrange to expose k³ - k:</p>
            <p>= (k³ - k) + 3k² + 3k</p>
            <p>= (k³ - k) + 3k(k + 1)</p>
            <p>Apply inductive hypothesis: k³ - k = 6m</p>
            <p>= 6m + 3k(k + 1)</p>
            <p><strong>Key observation:</strong> k(k+1) is always even (product of consecutive integers)</p>
            <p>So k(k+1) = 2j for some integer j</p>
            <p>Substitute:</p>
            <p>= 6m + 3(2j)</p>
            <p>= 6m + 6j</p>
            <p>= 6(m + j)</p>
          </div>
          <p><strong>Since m+j is an integer, this proves 6 | ((k+1)³ - (k+1)) ✓</strong></p>

          <p><strong>Step 5: CONCLUSION</strong></p>
          <p>By mathematical induction, 6 | (n³ - n) for all n ≥ 1. ∎</p>
        </div>

        <div className="insights" style={{ background: '#fffbea', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4>💡 Key Insights</h4>
          <ul>
            <li><strong>Strategic rearrangement:</strong> We rewrote (k+1)³ - (k+1) to expose k³ - k, allowing us to use the hypothesis</li>
            <li><strong>Number theory fact:</strong> The product of consecutive integers k(k+1) is always even—crucial for our proof</li>
            <li><strong>Divisibility proofs:</strong> Often involve showing something equals 6m (or generally, dm) for some integer m</li>
            <li><strong>Alternative insight:</strong> n³ - n = n(n²-1) = n(n-1)(n+1), a product of 3 consecutive integers, which must contain a multiple of 2 and a multiple of 3, hence divisible by 6!</li>
          </ul>
        </div>

        <h4 className="mt-6 font-semibold">Worked Example 3: Strong Induction - Fundamental Theorem of Arithmetic</h4>
        <div className="example-box" style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4>📝 Problem Statement</h4>
          <p><strong>Prove:</strong> Every integer n ≥ 2 can be expressed as a product of prime numbers</p>
          <p style={{ fontStyle: 'italic' }}>Note: This example demonstrates strong induction, where we assume P(2), P(3), ..., P(k) all hold to prove P(k+1)</p>
        </div>

        <div className="solution" style={{ background: '#fff', padding: '20px', borderRadius: '8px', margin: '20px 0', border: '2px solid #9C27B0' }}>
          <h4>🔍 Complete Step-by-Step Solution</h4>

          <p><strong>Step 1: Define P(n)</strong></p>
          <p>Let P(n) be the statement: n can be written as a product of primes</p>
          <p style={{ fontStyle: 'italic' }}>(By convention, if n itself is prime, it's considered a "product" of one prime)</p>

          <p><strong>Step 2: BASE CASE (n = 2)</strong></p>
          <p>Is 2 expressible as a product of primes?</p>
          <p><strong>Yes! 2 is itself prime, so 2 = 2 (product of one prime). ✓</strong></p>

          <p><strong>Step 3: STRONG INDUCTIVE HYPOTHESIS</strong></p>
          <p>Assume: P(m) is true for all m where 2 ≤ m ≤ k</p>
          <p>That is, every integer from 2 up to k can be expressed as a product of primes</p>
          <p style={{ fontStyle: 'italic' }}>(This is the key difference from weak induction—we assume it holds for ALL previous cases, not just k)</p>

          <p><strong>Step 4: INDUCTIVE STEP - Prove P(k+1)</strong></p>
          <p>We must show: k+1 can be expressed as a product of primes</p>

          <div style={{ marginLeft: '20px' }}>
            <p><strong>Case 1: If k+1 is prime</strong></p>
            <p>Then k+1 is already a product of primes (itself). ✓</p>

            <p><strong>Case 2: If k+1 is composite (not prime)</strong></p>
            <p>Then k+1 has divisors other than 1 and itself.</p>
            <p>So we can write: k+1 = a × b where 2 ≤ a, b &lt; k+1</p>
            <p><strong>Key observation:</strong> Since a, b &lt; k+1, we have a, b ≤ k</p>
            <p>Since a, b ≥ 2, both a and b are in the range [2, k]</p>
            <p>Apply strong inductive hypothesis:</p>
            <p>• P(a) is true, so a is a product of primes: a = p₁ × p₂ × ... × pᵣ</p>
            <p>• P(b) is true, so b is a product of primes: b = q₁ × q₂ × ... × qₛ</p>
            <p>Therefore:</p>
            <p>k+1 = a × b = (p₁ × p₂ × ... × pᵣ) × (q₁ × q₂ × ... × qₛ)</p>
            <p><strong>This is a product of primes! ✓</strong></p>
          </div>

          <p><strong>Both cases covered, so P(k+1) holds. ✓</strong></p>

          <p><strong>Step 5: CONCLUSION</strong></p>
          <p>By strong mathematical induction, every integer n ≥ 2 can be expressed as a product of primes. ∎</p>
          <p style={{ fontStyle: 'italic' }}>(This is the existence part of the Fundamental Theorem of Arithmetic; uniqueness requires a separate proof)</p>
        </div>

        <div className="warning-box" style={{ background: '#fff3cd', padding: '20px', borderRadius: '8px', margin: '20px 0', border: '2px solid #ff9800' }}>
          <h4>⚠️ Why Strong Induction Was Necessary:</h4>
          <p>
            In this proof, when k+1 was composite, we wrote k+1 = a × b. But we only knew that a, b &lt; k+1, NOT that they equal k.
            They could be much smaller (like k+1 = 100 = 4 × 25, where a=4 is way smaller than k=99).
          </p>
          <p>
            With weak induction, we'd only know P(k) holds. But we needed P(a) and P(b) for potentially much smaller values.
            Strong induction gives us P(m) for ALL m ≤ k, which is exactly what we needed!
          </p>
          <p><strong>Rule of thumb:</strong> Use strong induction when the k+1 case depends on multiple earlier cases, not just the k case.</p>
        </div>

        <div className="insights" style={{ background: '#fffbea', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h4>💡 Key Insights</h4>
          <ul>
            <li><strong>Case analysis:</strong> We split into prime vs. composite cases—always consider all possibilities</li>
            <li><strong>Strong induction power:</strong> We could reference ANY earlier case from 2 to k, not just k itself</li>
            <li><strong>Recursive structure:</strong> The proof works by breaking k+1 into smaller pieces, proving those pieces have the property, then combining</li>
            <li><strong>Real-world importance:</strong> This theorem underlies RSA cryptography, which secures most of the internet!</li>
          </ul>
        </div>
      </section>

      {/* Module Quiz */}
      <section className="content-section">
        <h2 className="text-2xl font-bold mb-6">Module 1.3 Mastery Quiz</h2>
        <div className="bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
          <Quiz
            title="Inductive Proofs Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={3}
          />
        </div>
      </section>

      <div className="mt-16 py-8 border-t text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[1em]">Unit 1.3 | Module Complete</p>
      </div>
    </div>
  );
};

export default Module1_3;
