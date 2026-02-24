'use client';
import React from 'react';

const Module1_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.2</div>
        <div className="lesson-title-main">
          <h1>🔍 Additional Forms of Proof</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Understand and apply proof by contradiction (reductio ad absurdum) to prove statements in automata theory and formal languages</li>
            <li>Master proof by contrapositive and distinguish it from direct proof and contradiction techniques</li>
            <li>Apply proof by construction to demonstrate the existence of automata, regular expressions, and language properties</li>
            <li>Utilize proof by counterexample to disprove false claims about languages, automata, and computational properties</li>
            <li>Evaluate which proof technique is most appropriate for different types of statements in theory of computation</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're a detective trying to solve a complex case. You can't always prove someone is guilty by finding direct evidence—sometimes you need to prove that they couldn't possibly be innocent. This is exactly what additional proof techniques allow us to do in Theory of Computation. While mathematical induction is powerful for proving properties that hold across all natural numbers, there are many theorems in computer science—especially concerning automata, languages, and computability—that require different approaches.
        </p>
        <p>
          In theoretical computer science, we often need to prove whether certain problems are solvable, whether languages have specific properties, or whether one computational model is more powerful than another. Direct proof isn't always feasible or elegant. Additional forms of proof—contradiction, contrapositive, construction, and counterexample—give us a complete toolkit to rigorously prove or disprove any claim. These techniques are fundamental to understanding the limits of computation, proving decidability and undecidability results, and demonstrating the equivalence or non-equivalence of different computational models.
        </p>
        <p>
          For students pursuing computer science, mastering these proof techniques is essential not just for exams, but for research, algorithm design, and technical interviews at top tech companies like Google, Microsoft, and Amazon. These companies regularly ask questions requiring proof by contradiction (e.g., "Prove that certain problems are NP-complete") or construction (e.g., "Design an automaton that recognizes this language"). Understanding these methods will elevate your problem-solving skills from memorizing algorithms to truly understanding computational foundations.
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Cryptography:</strong> Proof by contradiction is used to prove that certain encryption schemes are secure (e.g., RSA security relies on contradiction-based proofs)</li>
          <li><strong>Compiler Design:</strong> Proof by construction is essential for showing that parsers correctly recognize language syntax</li>
          <li><strong>Algorithm Complexity:</strong> Proof by contradiction establishes lower bounds for computational problems (e.g., proving sorting requires Ω(n log n) comparisons)</li>
          <li><strong>AI & Machine Learning:</strong> Counterexamples are used to identify limitations in neural network architectures and learning algorithms</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>📖 Deep Dive: Understanding the Concept</h3>

        <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
        <p>
          <strong>What are Additional Forms of Proof?</strong> In mathematics and theoretical computer science, a proof is a logical argument that establishes the truth of a mathematical statement beyond any doubt. While direct proof (assuming hypotheses and deriving conclusions through logical steps) and mathematical induction (proving base case and inductive step) are fundamental, they cannot handle all types of statements efficiently. Additional forms of proof provide alternative logical pathways to establish truth when direct approaches are impractical or impossible.
        </p>
        <p>
          These alternative proof techniques emerged from classical Greek logic and were formalized by mathematicians like Euclid (300 BCE) who used contradiction extensively in "Elements," and modern logicians who developed formal proof theory. In computer science, these techniques became indispensable when Alan Turing and Alonzo Church proved fundamental limits of computation in the 1930s—many of their groundbreaking results relied on proof by contradiction and construction.
        </p>
        <p>
          Why do these proof techniques exist? Different types of mathematical statements have different logical structures. Some statements are easier to prove by assuming they're false and deriving an impossibility (contradiction), others by proving the contrapositive, and still others by explicitly constructing an example. Without these techniques, many fundamental results in computability theory (like the undecidability of the Halting Problem) and complexity theory (like NP-completeness results) would be impossible to prove.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">The Four Major Additional Proof Forms:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Proof by Contradiction (Reductio ad Absurdum):</strong> Assume the statement is false, derive a logical impossibility, conclude the statement must be true</li>
            <li><strong>Proof by Contrapositive:</strong> Instead of proving "If P then Q," prove "If not Q then not P" (logically equivalent)</li>
            <li><strong>Proof by Construction:</strong> Prove existence by explicitly constructing an example that satisfies the required properties</li>
            <li><strong>Proof by Counterexample:</strong> Disprove universal claims by finding a single example where the claim fails</li>
          </ul>
        </div>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Proposition:</strong> A declarative statement that is either true or false (but not both)</li>
          <li><strong>Hypothesis:</strong> The "if" part of a conditional statement; assumptions we accept as true</li>
          <li><strong>Conclusion:</strong> The "then" part of a conditional statement; what we aim to prove</li>
          <li><strong>Contradiction:</strong> A statement that is logically impossible; both P and ¬P (not P) cannot be simultaneously true</li>
          <li><strong>Contrapositive:</strong> For statement "P → Q," the contrapositive is "¬Q → ¬P" (logically equivalent)</li>
          <li><strong>Converse:</strong> For statement "P → Q," the converse is "Q → P" (NOT logically equivalent—common mistake!)</li>
          <li><strong>Counterexample:</strong> A specific instance that makes a universal claim false</li>
          <li><strong>Constructive Proof:</strong> Explicitly builds/constructs an object proving existence</li>
        </ul>

        <h4 className="mt-6 font-semibold">How It Works: The Mechanism Explained</h4>

        <div className="mt-4 space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h5 className="font-semibold text-lg">🔴 Proof by Contradiction (Reductio ad Absurdum)</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To prove a statement P is true, we assume P is false (¬P) and show that this assumption leads to a logical impossibility—a contradiction. Since our reasoning is valid, the only error must be in our assumption, forcing us to conclude that P must be true. Think of it like a chess endgame: you assume your opponent has a defense, then prove systematically that every possible move leads to checkmate, forcing the conclusion that no defense exists.
            </p>

            <p className="mt-3"><strong>Step-by-Step Process:</strong></p>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li><strong>State what you want to prove:</strong> Clearly identify the proposition P</li>
              <li><strong>Assume the negation:</strong> Assume ¬P is true (the opposite of what you want to prove)</li>
              <li><strong>Derive logical consequences:</strong> Using valid logical rules and known facts, derive implications from ¬P</li>
              <li><strong>Reach a contradiction:</strong> Continue until you derive something impossible (e.g., "1 = 0" or "n is both even and odd")</li>
              <li><strong>Conclude the original statement:</strong> Since ¬P leads to impossibility, P must be true</li>
            </ol>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Classic Example: √2 is Irrational</p>
              <p className="mt-2"><strong>Claim:</strong> √2 cannot be expressed as a fraction p/q where p and q are integers.</p>
              <ol className="list-decimal ml-6 mt-2 space-y-1 text-sm">
                <li>Assume √2 is rational, so √2 = p/q where p and q are in lowest terms (no common factors)</li>
                <li>Square both sides: 2 = p²/q², so p² = 2q²</li>
                <li>p² is even (it's 2 times something), so p must be even. Write p = 2k</li>
                <li>Substitute: (2k)² = 2q², so 4k² = 2q², meaning q² = 2k²</li>
                <li>q² is even, so q is even. But we now have both p and q are even, meaning they share factor 2—contradicting our assumption they're in lowest terms!</li>
              </ol>
              <p className="mt-2"><strong>Conclusion:</strong> Our assumption that √2 is rational led to contradiction, so √2 must be irrational. ∎</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h5 className="font-semibold text-lg">🔵 Proof by Contrapositive</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To prove "If P then Q" (P → Q), we instead prove "If not Q then not P" (¬Q → ¬P). These statements are logically equivalent, but sometimes the contrapositive is much easier to prove. Imagine proving "All students who pass the exam studied hard." Instead of tracking all students who studied and checking if they passed, you could prove the contrapositive: "Any student who didn't study hard didn't pass"—often easier to verify!
            </p>

            <p className="mt-3"><strong>Why It Works:</strong> The logical equivalence (P → Q) ≡ (¬Q → ¬P) is a fundamental law of logic. Think about it: if "rain implies wet ground," then "dry ground implies no rain" must also be true. The contrapositive preserves truth but shifts the proof burden, often making complex statements simpler.</p>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Example: If n² is even, then n is even</p>
              <p className="mt-2">Direct proof would be hard: Starting from "n² is even" to conclude "n is even" requires complicated reasoning.</p>
              <p className="mt-2"><strong>Contrapositive approach:</strong> Prove "If n is odd, then n² is odd" (much easier!)</p>
              <ol className="list-decimal ml-6 mt-2 space-y-1 text-sm">
                <li>Assume: n is odd, so n = 2k + 1 for some integer k</li>
                <li>Calculate: n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1</li>
                <li>Conclude: n² = 2m + 1 where m = 2k² + 2k, so n² is odd</li>
              </ol>
              <p className="mt-2"><strong>Result:</strong> We proved the contrapositive, so the original statement is true! ∎</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h5 className="font-semibold text-lg">🟢 Proof by Construction</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To prove that something exists, we don't just claim it exists—we build it explicitly. This is like an engineer proving a bridge can be built by actually designing the blueprint with exact specifications. In automata theory, constructive proofs are essential: we prove a language is regular by constructing a finite automaton that recognizes it; we prove two languages can be combined by constructing the union/intersection automaton.
            </p>

            <p className="mt-3"><strong>When to Use Construction:</strong> Existence claims in computer science (∃x such that P(x)) are best proven constructively because the construction itself is often useful beyond the proof—it becomes an algorithm, a design pattern, or a computational model others can use.</p>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Example: Constructing DFA for Language L = {'{'}w | w contains "01"{'}'}</p>
              <p className="mt-2"><strong>Claim:</strong> There exists a DFA that accepts all binary strings containing substring "01".</p>
              <p className="mt-2"><strong>Proof by Construction:</strong> We explicitly build the DFA:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>States: q₀ (start), q₁ (saw 0), q₂ (saw 01 - accept state)</li>
                <li>Transitions: δ(q₀, 0) = q₁, δ(q₀, 1) = q₀, δ(q₁, 0) = q₁, δ(q₁, 1) = q₂, δ(q₂, 0) = q₂, δ(q₂, 1) = q₂</li>
                <li>Verification: String "001" → q₀ →⁰ q₁ →⁰ q₁ →¹ q₂ (accepted ✓)</li>
              </ul>
              <p className="mt-2"><strong>Conclusion:</strong> We constructed the DFA explicitly, proving such an automaton exists. ∎</p>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold text-center mb-4">Constructed DFA Visualization</p>
              <div className="flex justify-center items-center">
                <svg width="500" height="200" viewBox="0 0 500 200" className="border border-gray-300 rounded">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                    </marker>
                  </defs>

                  {/* States */}
                  <circle cx="80" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="80" y="95" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
                  <text x="80" y="110" textAnchor="middle" fontSize="10">Start</text>

                  <circle cx="250" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="250" y="95" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>
                  <text x="250" y="110" textAnchor="middle" fontSize="10">Saw '0'</text>

                  <circle cx="420" cy="100" r="30" fill="#dcfce7" stroke="#22c55e" strokeWidth="3" />
                  <circle cx="420" cy="100" r="25" fill="none" stroke="#22c55e" strokeWidth="2" />
                  <text x="420" y="95" textAnchor="middle" fontSize="14" fontWeight="bold">q₂</text>
                  <text x="420" y="110" textAnchor="middle" fontSize="10">Saw '01'</text>

                  {/* Start arrow */}
                  <line x1="20" y1="100" x2="50" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Transitions */}
                  {/* q0 to q1 on 0 */}
                  <line x1="110" y1="100" x2="220" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="165" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

                  {/* q0 self-loop on 1 */}
                  <path d="M 80 70 Q 80 30, 100 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="90" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

                  {/* q1 to q2 on 1 */}
                  <line x1="280" y1="100" x2="390" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="335" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

                  {/* q1 self-loop on 0 */}
                  <path d="M 250 70 Q 250 30, 270 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="260" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

                  {/* q2 self-loop on 0,1 */}
                  <path d="M 420 70 Q 420 30, 440 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="430" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">0,1</text>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">Figure 4: DFA constructed to recognize strings containing "01"</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h5 className="font-semibold text-lg">🔴 Proof by Counterexample</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To disprove a universal claim "For all x, P(x) is true," we only need to find one single example where P(x) is false. This is the logical principle behind software testing: one failing test case proves the program has a bug. In automata theory, counterexamples are crucial for showing that certain languages are not regular, or that claimed properties don't hold.
            </p>

            <p className="mt-3"><strong>When to Use Counterexamples:</strong> This technique is exclusively for disproving universal claims. You cannot use counterexamples to prove universal statements—only to disprove them.</p>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Example: Disproving "All prime numbers are odd"</p>
              <p className="mt-2"><strong>Claim:</strong> For all prime numbers p, p is odd.</p>
              <p className="mt-2"><strong>Counterexample:</strong> Consider p = 2. The number 2 is prime (divisible only by 1 and 2), but 2 is even, not odd.</p>
              <p className="mt-2"><strong>Conclusion:</strong> The claim is false. One counterexample is sufficient to disprove a universal statement. ∎</p>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Automata Example: Disproving "All regular languages are finite"</p>
              <p className="mt-2"><strong>Claim:</strong> All regular languages contain finitely many strings.</p>
              <p className="mt-2"><strong>Counterexample:</strong> Consider L = {'{'}0ⁿ | n ≥ 0{'}'} = {'{'}ε, 0, 00, 000, ...{'}'}. This language is regular (recognized by a simple DFA), but contains infinitely many strings.</p>
              <p className="mt-2"><strong>Conclusion:</strong> The claim is false. Regular languages can be infinite. ∎</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">🔧 Key Components & Architecture</h3>
        <p className="mb-4">Understanding when to use each proof technique is crucial for success in theory of computation. Here's a detailed breakdown of each component:</p>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold text-lg">Component 1: Proof by Contradiction</h4>
            <p className="mt-2 text-sm">
              This technique is most powerful when the statement to prove involves impossibility, uniqueness, or irrationality. The architecture involves: (1) Clear statement of what we want to prove, (2) Explicit negation of the statement, (3) Chain of logical deductions from the negation, (4) Identification of the contradiction (often with previously established facts), and (5) Conclusion that the original statement must be true. In automata theory, contradiction is essential for proving undecidability results (e.g., the Halting Problem is undecidable) and for showing certain languages cannot be recognized by finite automata. The power comes from being able to reason about impossibility without needing to construct explicit examples.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold text-lg">Component 2: Proof by Contrapositive</h4>
            <p className="mt-2 text-sm">
              The contrapositive is specifically designed for conditional statements (if-then propositions). Its architecture leverages logical equivalence: instead of proving P → Q directly, we prove ¬Q → ¬P, which is guaranteed to have the same truth value. This is particularly useful when the negations of P or Q are simpler to work with than P or Q themselves. In computational complexity, contrapositive proofs are common: instead of proving "if problem A is in P, then B is in P," we prove "if B is not in P, then A is not in P," which can be more straightforward when we already know properties of B.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-lg">Component 3: Proof by Construction</h4>
            <p className="mt-2 text-sm">
              Constructive proofs are the most practical in computer science because they provide algorithms and designs, not just existence claims. The architecture involves: (1) Understanding the requirements and constraints, (2) Designing the object (automaton, algorithm, function) step-by-step, (3) Proving that the construction satisfies all required properties, and (4) Often analyzing the construction's complexity or efficiency. In automata theory, constructive proofs are ubiquitous: proving closure properties of regular languages (if L₁ and L₂ are regular, then L₁ ∪ L₂ is regular) requires constructing the union automaton. The construction itself becomes a reusable technique.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold text-lg">Component 4: Proof by Counterexample</h4>
            <p className="mt-2 text-sm">
              Counterexamples are the simplest yet most decisive proof technique for disproving universal claims. The architecture is minimal: (1) Identify the universal claim, (2) Find or construct a single instance that violates it, (3) Verify that the instance indeed violates the claim. In theory of computation, counterexamples are critical during the exploration phase: when investigating whether a property holds for all automata or languages, a single counterexample can save hours of futile proof attempts. This technique teaches the importance of testing edge cases and boundary conditions.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 border-l-4 border-gray-400 p-4">
          <h4 className="font-semibold text-lg">Real-World Implementation</h4>

          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">In Computer Science Research:</p>
              <p>Modern research papers in theoretical computer science heavily rely on these proof techniques. The famous P vs NP problem, if solved, will almost certainly use proof by contradiction (proving either P = NP by showing ¬(P = NP) leads to contradiction, or P ≠ NP similarly). The Cook-Levin theorem (proving SAT is NP-complete) uses a constructive proof by building a reduction from any NP problem to SAT. Complexity theorists use contrapositive reasoning regularly: "if this problem has a polynomial algorithm, then so does this known-hard problem" is proven via contrapositive.</p>
            </div>

            <div>
              <p className="font-semibold">In Software Engineering:</p>
              <p>Testing frameworks embody proof by counterexample: every failing test case is a counterexample disproving "this code is correct for all inputs." Formal verification tools like Coq and Isabelle automate proof by construction and contradiction to verify that software meets specifications. Compilers use constructive proofs when optimizing code—they must construct the optimized program and prove it's equivalent to the original.</p>
            </div>

            <div>
              <p className="font-semibold">In Cryptography:</p>
              <p>Security proofs extensively use contradiction: to prove a cryptosystem is secure, we assume an attacker can break it, then show this implies breaking a known-hard problem (like factoring large numbers), which is considered impossible. This contradiction-based approach underpins modern cryptography, including RSA, elliptic curve cryptography, and blockchain security.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">⚠️ Common Misconceptions</h3>

        <div className="space-y-4">
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #1: "Contrapositive and converse are the same thing"</p>
            <p className="mt-2"><strong>Reality:</strong> For statement P → Q, the contrapositive is ¬Q → ¬P (logically equivalent), but the converse is Q → P (NOT equivalent!). Example: "If it rains, the ground is wet" (true). Contrapositive: "If the ground is not wet, it didn't rain" (true). Converse: "If the ground is wet, it rained" (false—could be a sprinkler!).</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #2: "Proof by contradiction and contrapositive are the same"</p>
            <p className="mt-2"><strong>Reality:</strong> Contrapositive is for proving P → Q by proving ¬Q → ¬P. Contradiction assumes P ∧ ¬Q and derives impossibility. Contrapositive is cleaner when applicable, but contradiction is more general.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #3: "One counterexample proves a statement true"</p>
            <p className="mt-2"><strong>Reality:</strong> Counterexamples can ONLY disprove universal statements—they cannot prove anything true. Finding one white swan doesn't prove all swans are white. To prove a universal statement, you need a general proof covering all cases.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #4: "Proof by construction always means writing code"</p>
            <p className="mt-2"><strong>Reality:</strong> Constructive proof means providing an explicit method or example, not necessarily code. Drawing a state diagram is construction. The key is specifying every detail explicitly—someone else could follow your construction.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">⚙️ Worked Examples</h3>

        <div className="space-y-8">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-lg">Worked Example 1: Proof by Contradiction - Language Non-Regularity</h4>
            <p className="mt-2 font-semibold">📝 Problem: Prove that L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is not regular.</p>

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">Step 1: Assume the negation</p>
              <p className="text-sm mt-1">Assume L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} IS regular.</p>

              <p className="font-semibold mt-3">Step 2: Apply Pumping Lemma</p>
              <p className="text-sm mt-1">Since L is regular, there exists pumping length p where any string s ∈ L with |s| ≥ p can be split as s = xyz with: |xy| ≤ p, |y| &gt; 0, and xyⁱz ∈ L for all i ≥ 0.</p>

              <p className="font-semibold mt-3">Step 3: Choose strategic string</p>
              <p className="text-sm mt-1">Select s = 0ᵖ1ᵖ. Clearly s ∈ L and |s| = 2p ≥ p.</p>

              <p className="font-semibold mt-3">Step 4: Analyze decomposition</p>
              <p className="text-sm mt-1">Since |xy| ≤ p and first p characters are 0s, both x and y consist entirely of 0s. So y = 0ᵏ for some k &gt; 0.</p>

              <p className="font-semibold mt-3">Step 5: Pump the string</p>
              <p className="text-sm mt-1">Consider xy²z. Since y has k zeros, xy²z has p + k zeros and p ones. But p + k ≠ p, so xy²z has unequal 0s and 1s.</p>

              <p className="font-semibold mt-3">Step 6: Contradiction!</p>
              <p className="text-sm mt-1">xy²z must be in L (by Pumping Lemma), but xy²z has unequal 0s and 1s, so xy²z ∉ L. Contradiction!</p>

              <p className="font-semibold mt-3">✅ Conclusion</p>
              <p className="text-sm mt-1">Our assumption led to impossibility. Therefore, L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is NOT regular. ∎</p>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-lg">Worked Example 2: Proof by Contrapositive</h4>
            <p className="mt-2 font-semibold">📝 Problem: If L₁ ∪ L₂ is finite, then both L₁ and L₂ are finite.</p>

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">Step 1: Identify conditional structure</p>
              <p className="text-sm mt-1">P: "L₁ ∪ L₂ is finite" → Q: "Both L₁ and L₂ are finite"</p>

              <p className="font-semibold mt-3">Step 2: Form contrapositive</p>
              <p className="text-sm mt-1">¬Q → ¬P: "If at least one of L₁ or L₂ is infinite, then L₁ ∪ L₂ is infinite"</p>

              <p className="font-semibold mt-3">Step 3: Prove contrapositive</p>
              <p className="text-sm mt-1">Assume L₁ is infinite. Since L₁ ⊆ L₁ ∪ L₂, and L₁ contains infinitely many strings, L₁ ∪ L₂ must also contain infinitely many strings. Therefore, L₁ ∪ L₂ is infinite.</p>

              <p className="font-semibold mt-3">✅ Conclusion</p>
              <p className="text-sm mt-1">We proved the contrapositive. By logical equivalence, the original statement is true. ∎</p>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-lg">Worked Example 3: Proof by Construction - Closure Under Union</h4>
            <p className="mt-2 font-semibold">📝 Problem Statement</p>
            <p className="mt-1"><strong>Claim:</strong> The class of regular languages is closed under union. That is, if L₁ and L₂ are regular languages, then L₁ ∪ L₂ is also regular.</p>
            <p className="mt-1 text-sm"><strong>Context:</strong> Closure properties are fundamental in automata theory. We'll prove this by constructing a DFA for L₁ ∪ L₂ from DFAs for L₁ and L₂.</p>

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">🔍 Step-by-Step Solution</p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Step 1: Setup and assumptions</p>
                  <ul className="list-disc ml-6 mt-1">
                    <li>Let M₁ = (Q₁, Σ, δ₁, q₁, F₁) be a DFA recognizing L₁</li>
                    <li>Let M₂ = (Q₂, Σ, δ₂, q₂, F₂) be a DFA recognizing L₂</li>
                    <li>We'll construct M = (Q, Σ, δ, q₀, F) that recognizes L₁ ∪ L₂</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Construct the state set</p>
                  <p className="mt-1">Q = Q₁ × Q₂ (Cartesian product of state sets)</p>
                  <p className="mt-1">Each state in M is a pair (p, q) where p ∈ Q₁ and q ∈ Q₂</p>
                  <p className="mt-1 italic">Intuition: M simulates both M₁ and M₂ simultaneously, tracking both computations in parallel</p>
                </div>

                <div>
                  <p className="font-semibold">Step 3: Define the start state</p>
                  <p className="mt-1">q₀ = (q₁, q₂) (pair of start states from M₁ and M₂)</p>
                </div>

                <div>
                  <p className="font-semibold">Step 4: Construct the transition function</p>
                  <p className="mt-1">For state (p, q) ∈ Q and symbol a ∈ Σ:</p>
                  <p className="mt-1">δ((p, q), a) = (δ₁(p, a), δ₂(q, a))</p>
                  <p className="mt-1 italic">Meaning: When reading symbol a in combined state (p, q), transition to the state where M₁ goes to δ₁(p, a) and M₂ goes to δ₂(q, a)</p>
                </div>

                <div>
                  <p className="font-semibold">Step 5: Define accepting states</p>
                  <p className="mt-1">F = {'{'}(p, q) | p ∈ F₁ OR q ∈ F₂{'}'}</p>
                  <p className="mt-1 italic">Key insight: Accept if either M₁ accepts OR M₂ accepts (this captures union semantics)</p>
                  <p className="mt-1">Formally: F = (F₁ × Q₂) ∪ (Q₁ × F₂)</p>
                </div>

                <div>
                  <p className="font-semibold">Step 6: Verify correctness</p>
                  <p className="mt-1">For any string w:</p>
                  <ul className="list-disc ml-6 mt-1">
                    <li>M processes w, ending in state (p, q)</li>
                    <li>This means M₁ ends in state p, and M₂ ends in state q</li>
                    <li>M accepts w ⟺ (p, q) ∈ F ⟺ p ∈ F₁ OR q ∈ F₂</li>
                    <li>⟺ M₁ accepts w OR M₂ accepts w ⟺ w ∈ L₁ OR w ∈ L₂</li>
                    <li>⟺ w ∈ L₁ ∪ L₂</li>
                  </ul>
                  <p className="mt-1">Therefore, L(M) = L₁ ∪ L₂</p>
                </div>

                <div>
                  <p className="font-semibold">Step 7: Conclusion</p>
                  <p className="mt-1">We have explicitly constructed a DFA M that recognizes L₁ ∪ L₂. Since we constructed a DFA (which defines a regular language), L₁ ∪ L₂ is regular.</p>
                </div>
              </div>

              <div className="mt-4 bg-green-50 p-3 rounded">
                <p className="font-semibold">✅ Final Answer</p>
                <p className="mt-1 text-sm">Regular languages are closed under union. The proof is constructive—we built the union DFA explicitly using the product construction.</p>
                <p className="mt-1 text-sm"><strong>Construction details:</strong> States: Q₁ × Q₂, Start: (q₁, q₂), Accept: (F₁ × Q₂) ∪ (Q₁ × F₂), Transitions: component-wise</p>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded">
                <p className="font-semibold">💡 Key Insights</p>
                <ul className="list-disc ml-6 mt-1 text-sm">
                  <li><strong>Product construction is powerful:</strong> This technique works for intersection too (just change accepting states to F₁ × F₂)</li>
                  <li><strong>Parallel simulation:</strong> The key idea is simulating both automata simultaneously</li>
                  <li><strong>State explosion:</strong> If M₁ has n states and M₂ has m states, M has n·m states—can be exponentially large</li>
                  <li><strong>Generalization:</strong> This construction extends to any finite number of languages (not just two)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold text-center mb-4">Product Construction Visualization</p>
              <div className="flex justify-center items-center">
                <svg width="600" height="300" viewBox="0 0 600 300" className="border border-gray-300 rounded">
                  <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                    </marker>
                  </defs>

                  <text x="80" y="30" fontSize="14" fontWeight="bold">M₁ (Recognizes L₁)</text>
                  <circle cx="50" cy="70" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="50" y="75" textAnchor="middle" fontSize="12">q₁</text>
                  <circle cx="120" cy="70" r="20" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="120" cy="70" r="16" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                  <text x="120" y="75" textAnchor="middle" fontSize="12">f₁</text>
                  <line x1="70" y1="70" x2="100" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
                  <text x="85" y="65" textAnchor="middle" fontSize="10">a</text>

                  <text x="230" y="30" fontSize="14" fontWeight="bold">M₂ (Recognizes L₂)</text>
                  <circle cx="200" cy="70" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="200" y="75" textAnchor="middle" fontSize="12">q₂</text>
                  <circle cx="270" cy="70" r="20" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="270" cy="70" r="16" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                  <text x="270" y="75" textAnchor="middle" fontSize="12">f₂</text>
                  <line x1="220" y1="70" x2="250" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
                  <text x="235" y="65" textAnchor="middle" fontSize="10">b</text>

                  <text x="200" y="140" fontSize="14" fontWeight="bold">M (Product Construction - Recognizes L₁ ∪ L₂)</text>

                  <circle cx="100" cy="200" r="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="100" y="200" textAnchor="middle" fontSize="10">(q₁,q₂)</text>

                  <circle cx="250" cy="200" r="25" fill="#fef3c7" stroke="#eab308" strokeWidth="2" />
                  <circle cx="250" cy="200" r="21" fill="none" stroke="#eab308" strokeWidth="1.5" />
                  <text x="250" y="200" textAnchor="middle" fontSize="10">(q₁,f₂)</text>

                  <circle cx="400" cy="200" r="25" fill="#fef3c7" stroke="#eab308" strokeWidth="2" />
                  <circle cx="400" cy="200" r="21" fill="none" stroke="#eab308" strokeWidth="1.5" />
                  <text x="400" y="200" textAnchor="middle" fontSize="10">(f₁,q₂)</text>

                  <circle cx="550" cy="200" r="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="550" cy="200" r="21" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                  <text x="550" y="200" textAnchor="middle" fontSize="10">(f₁,f₂)</text>

                  <line x1="125" y1="200" x2="225" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="175" y="195" textAnchor="middle" fontSize="10">b</text>

                  <line x1="275" y1="200" x2="375" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="325" y="195" textAnchor="middle" fontSize="10">a</text>

                  <line x1="425" y1="200" x2="525" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="475" y="195" textAnchor="middle" fontSize="10">b</text>

                  <path d="M 100 175 Q 175 160, 250 175" fill="none" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="175" y="160" textAnchor="middle" fontSize="10">a</text>

                  <text x="300" y="270" fontSize="11" fill="#059669" fontWeight="bold">States with f₁ or f₂ are accepting (union!)</text>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">Figure 7: Product construction for union - states combine components, accept if either component accepts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📚 Problem-Solving Practice</h3>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-lg">📘 Easy Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove that if n is an integer and n² is divisible by 4, then n is even. Use proof by contrapositive.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Step 1:</strong> P: "n² is divisible by 4", Q: "n is even"</p>
                <p><strong>Step 2:</strong> Contrapositive: "If n is odd, then n² is not divisible by 4"</p>
                <p><strong>Step 3:</strong> Assume n is odd. Then n = 2k + 1 for some integer k.</p>
                <p><strong>Step 4:</strong> n² = (2k + 1)² = 4k² + 4k + 1 = 4(k² + k) + 1</p>
                <p><strong>Step 5:</strong> n² = 4m + 1 where m = k² + k. This means n² leaves remainder 1 when divided by 4.</p>
                <p><strong>Final Answer:</strong> The statement is proven via contrapositive. ∎</p>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-semibold text-lg">📙 Medium Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove or disprove: "If L₁ and L₂ are regular languages over the same alphabet Σ, and L₁ ∩ L₂ = ∅ (empty), then L₁ and L₂ must be finite languages."</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Approach:</strong> Disprove with counterexample.</p>
                <p><strong>Counterexample:</strong> Let Σ = {'{'}0, 1{'}'}. Define L₁ = {'{'}w | w contains even number of 0s{'}'} and L₂ = {'{'}w | w contains odd number of 0s{'}'}</p>
                <p><strong>Verification:</strong> Both are regular (2-state DFAs), L₁ ∩ L₂ = ∅, but both are infinite.</p>
                <p><strong>Final Answer:</strong> The claim is FALSE. ∎</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-lg">📕 Hard Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Use proof by contradiction to prove that L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is NOT regular.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-red-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Step 1:</strong> Assume L is regular.</p>
                <p><strong>Step 2:</strong> By Pumping Lemma, ∃p such that any s ∈ L with |s| ≥ p can be written as xyz with |xy| ≤ p, |y| &gt; 0, xyⁱz ∈ L.</p>
                <p><strong>Step 3:</strong> Choose s = 0ᵖ1ᵖ0ᵖ1ᵖ. This is in L (s = ww where w = 0ᵖ1ᵖ).</p>
                <p><strong>Step 4:</strong> Since |xy| ≤ p, y consists only of 0s from first block. So y = 0ᵏ for k &gt; 0.</p>
                <p><strong>Step 5:</strong> xy²z adds k zeros to first block: 0ᵖ⁺ᵏ1ᵖ0ᵖ1ᵖ. For this to equal ww, we'd need w = 0⁽ᵖ⁺ᵏ⁾/²1ᵖ/²0ᵖ/²1ᵖ/², but the structure doesn't match.</p>
                <p><strong>Step 6:</strong> Contradiction! xy²z ∈ L by Pumping Lemma, but xy²z ∉ L by structure.</p>
                <p><strong>Final Answer:</strong> L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is NOT regular. ∎</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📊 Comparison & Analysis</h3>
        <p className="mb-4">Understanding when to apply each proof technique is crucial for efficient problem-solving.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Aspect</th>
                <th className="border border-gray-300 p-2">Contradiction</th>
                <th className="border border-gray-300 p-2">Contrapositive</th>
                <th className="border border-gray-300 p-2">Construction</th>
                <th className="border border-gray-300 p-2">Counterexample</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Best Use Case</td>
                <td className="border border-gray-300 p-2">Non-regularity, undecidability, impossibility claims</td>
                <td className="border border-gray-300 p-2">Conditionals where negations are simpler</td>
                <td className="border border-gray-300 p-2">Closure properties, building automata, existence proofs</td>
                <td className="border border-gray-300 p-2">Disproving universal claims</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Advantages</td>
                <td className="border border-gray-300 p-2">✓ Works for any statement<br />✓ Powerful for impossibility</td>
                <td className="border border-gray-300 p-2">✓ Often simpler than direct<br />✓ Logically equivalent</td>
                <td className="border border-gray-300 p-2">✓ Provides algorithm<br />✓ Practical and implementable</td>
                <td className="border border-gray-300 p-2">✓ Most efficient disproof<br />✓ Only needs one example</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Disadvantages</td>
                <td className="border border-gray-300 p-2">✗ Can be complex<br />✗ May not provide insight</td>
                <td className="border border-gray-300 p-2">✗ Only for conditionals<br />✗ Students confuse with converse</td>
                <td className="border border-gray-300 p-2">✗ May be difficult to find<br />✗ Time-consuming</td>
                <td className="border border-gray-300 p-2">✗ Only disproves<br />✗ Finding it can be hard</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Logical Structure</td>
                <td className="border border-gray-300 p-2">Assume ¬P, derive Q ∧ ¬Q</td>
                <td className="border border-gray-300 p-2">Prove ¬Q → ¬P instead of P → Q</td>
                <td className="border border-gray-300 p-2">Build explicit x satisfying P(x)</td>
                <td className="border border-gray-300 p-2">Find one x where ¬P(x)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🎯 Decision Guide</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
            <li><strong>Choose Contradiction:</strong> For impossibility, uniqueness, or when direct proof is unclear</li>
            <li><strong>Choose Contrapositive:</strong> For conditionals P → Q when ¬P or ¬Q are simpler</li>
            <li><strong>Choose Construction:</strong> For existence claims, especially when the construction is valuable</li>
            <li><strong>Choose Counterexample:</strong> To disprove universal claims (∀x P(x))</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">⚠️ Common Pitfalls & How to Avoid Them</h3>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #1: Confusing Contrapositive with Converse</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> Write Q → P thinking it's the contrapositive.</p>
            <p className="text-sm mt-1"><strong>Why it's wrong:</strong> Converse is NOT logically equivalent. "If it rains, ground is wet" ≠ "If ground is wet, it rained."</p>
            <p className="text-sm mt-1"><strong>✅ How to avoid:</strong> Always write (P → Q) ⟺ (¬Q → ¬P). Negate BOTH parts and SWAP positions.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #2: Assuming Contradiction Too Early</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> Derive something "weird" and immediately claim contradiction.</p>
            <p className="text-sm mt-1"><strong>Why it's wrong:</strong> Contradiction must be logical impossibility (X ∧ ¬X), not just unexpected results.</p>
            <p className="text-sm mt-1"><strong>✅ How to avoid:</strong> Explicitly state both contradictory facts: "We have X, but also ¬X, which is impossible."</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #3: Using Examples to Prove Universal Statements</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> Show several examples satisfy property P, conclude ∀x P(x) is proven.</p>
            <p className="text-sm mt-1"><strong>Why it's wrong:</strong> Examples don't cover all cases. One counterexample can disprove despite many supporting examples.</p>
            <p className="text-sm mt-1"><strong>✅ How to avoid:</strong> Use universal proof techniques (direct, induction, contradiction). Remember: examples support but don't prove.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #4: Incomplete Constructions</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> Give vague description like "build a DFA that tracks the property."</p>
            <p className="text-sm mt-1"><strong>Why it's wrong:</strong> Construction requires complete specification of all components.</p>
            <p className="text-sm mt-1"><strong>✅ How to avoid:</strong> Explicitly state Q, Σ, δ, q₀, F. Prove correctness with verification.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📄 Quick Reference Cheat Sheet</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🔑 Key Definitions</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Contradiction:</strong> Assume ¬P, derive impossibility, conclude P</li>
              <li><strong>Contrapositive:</strong> Prove ¬Q → ¬P instead of P → Q</li>
              <li><strong>Construction:</strong> Build explicit example proving existence</li>
              <li><strong>Counterexample:</strong> Find one x where ¬P(x) to disprove ∀x P(x)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">📐 Logical Equivalences</h4>
            <ul className="text-sm space-y-1">
              <li>(P → Q) ≡ (¬Q → ¬P) ✓</li>
              <li>(P → Q) ≢ (Q → P) [converse] ✗</li>
              <li>¬(P ∧ Q) ≡ (¬P ∨ ¬Q)</li>
              <li>¬(P ∨ Q) ≡ (¬P ∧ ¬Q)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚙️ Strategy Selection</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Conditional (P → Q):</strong> Try contrapositive</li>
              <li><strong>Existence (∃x):</strong> Use construction</li>
              <li><strong>Universal (∀x) to disprove:</strong> Find counterexample</li>
              <li><strong>Impossibility:</strong> Use contradiction</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Confusing contrapositive with converse</li>
              <li>❌ Claiming contradiction without impossibility</li>
              <li>❌ Using examples to prove universal claims</li>
              <li>❌ Incomplete constructions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">🛠️ Hands-On Lab Exercise</h3>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded">
          <h4 className="font-semibold text-lg">Multi-Technique Proof Challenge</h4>
          <p className="mt-2 text-sm">⏱️ Estimated Time: 60-75 minutes</p>

          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">📋 Objective</h5>
              <p className="text-sm mt-1">Apply all four proof techniques to analyze properties of regular languages and automata. This comprehensive exercise will test your ability to choose and execute the appropriate proof method.</p>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">📝 Problems</h5>
              <div className="text-sm mt-2 space-y-3">
                <div>
                  <p className="font-semibold">Problem 1: Proof by Contradiction</p>
                  <p>Prove that L = {'{'}0ⁱ1ʲ | i &gt; j{'}'} is NOT regular using contradiction with Pumping Lemma.</p>
                  <p className="text-gray-600 italic">Hint: Consider string 0ᵖ⁺¹1ᵖ</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 2: Proof by Contrapositive</p>
                  <p>Prove: "If a DFA M with n states accepts at least one string of length ≥ n, then M accepts infinitely many strings."</p>
                  <p className="text-gray-600 italic">Hint: Form the contrapositive first</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 3: Proof by Construction</p>
                  <p>Prove regular languages are closed under intersection by constructing a DFA for L₁ ∩ L₂.</p>
                  <p className="text-gray-600 italic">Hint: Use product construction with modified accepting states</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 4: Proof by Counterexample</p>
                  <p>Disprove: "If L₁ ⊆ L₂ and L₂ is regular, then L₁ is regular."</p>
                  <p className="text-gray-600 italic">Hint: Consider L₂ = {'{'}0,1{'}'}* and L₁ = {'{'}0ⁿ1ⁿ{'}'}.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">✅ Success Criteria</h5>
              <ul className="text-sm mt-2 list-disc ml-6 space-y-1">
                <li>Correct identification and application of proof techniques</li>
                <li>Clear logical structure with explicit assumptions</li>
                <li>Complete constructions with all necessary components</li>
                <li>Proper verification of constructions and counterexamples</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">🎓 Grading Rubric (100 points)</h5>
              <ul className="text-sm mt-2 space-y-1">
                <li>Problem 1 (Contradiction): 25 points</li>
                <li>Problem 2 (Contrapositive): 20 points</li>
                <li>Problem 3 (Construction): 25 points</li>
                <li>Problem 4 (Counterexample): 15 points</li>
                <li>Technique Selection & Reflection: 15 points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Problem-Solving Practice</h3>

        <div className="space-y-6 mt-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-lg">📘 Easy Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove that if n is an integer and n² is divisible by 4, then n is even. Use proof by contrapositive.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p><strong>Step 1:</strong> Identify the conditional structure. P: "n² is divisible by 4", Q: "n is even"</p>
                <p><strong>Step 2:</strong> Form the contrapositive: ¬Q → ¬P, which is "If n is odd, then n² is not divisible by 4"</p>
                <p><strong>Step 3:</strong> Assume n is odd. Then n = 2k + 1 for some integer k.</p>
                <p><strong>Step 4:</strong> Calculate n² = (2k + 1)² = 4k² + 4k + 1 = 4(k² + k) + 1</p>
                <p><strong>Step 5:</strong> n² = 4m + 1 where m = k² + k. This means n² leaves remainder 1 when divided by 4, so n² is NOT divisible by 4.</p>
                <p><strong>Step 6:</strong> We proved the contrapositive, so the original statement is true.</p>
                <p className="font-semibold mt-2">Final Answer: The statement is proven via contrapositive. If n² is divisible by 4, then n must be even.</p>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-semibold text-lg">📙 Medium Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove or disprove: "If L₁ and L₂ are regular languages over the same alphabet Σ, and L₁ ∩ L₂ = ∅ (empty), then L₁ and L₂ must be finite languages."</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p><strong>Approach:</strong> This is a universal claim that we should attempt to disprove with a counterexample.</p>
                <p><strong>Counterexample:</strong> Let Σ = {'{'}0, 1{'}'}. Define L₁ = {'{'}w | w contains an even number of 0s{'}'} and L₂ = {'{'}w | w contains an odd number of 0s{'}'}</p>
                <p><strong>Verification - Both are regular:</strong> L₁ and L₂ are both regular (can be recognized by simple 2-state DFAs)</p>
                <p><strong>Verification - Disjoint:</strong> L₁ ∩ L₂ = ∅ because a string cannot simultaneously have both even and odd number of 0s</p>
                <p><strong>Verification - Infinite:</strong> Both L₁ and L₂ are infinite. For example, L₁ contains ε, 00, 0000, ... (infinitely many strings)</p>
                <p><strong>Conclusion:</strong> We found regular languages that are disjoint but both infinite, disproving the claim.</p>
                <p className="font-semibold mt-2">Final Answer: The claim is FALSE. Counterexample: L₁ = {'{'}even number of 0s{'}'}, L₂ = {'{'}odd number of 0s{'}'}. Both regular, disjoint, but infinite.</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-lg">📕 Hard Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Use proof by contradiction to prove that the language L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} (strings that are concatenations of a string with itself, like "0101" or "11111111") is NOT regular.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-red-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p><strong>Approach:</strong> Assume L is regular and apply the Pumping Lemma to derive a contradiction.</p>
                <p><strong>Step 1:</strong> Assume L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is regular.</p>
                <p><strong>Step 2:</strong> By the Pumping Lemma, there exists a pumping length p such that any string s ∈ L with |s| ≥ p can be written as s = xyz where |xy| ≤ p, |y| &gt; 0, and xyⁱz ∈ L for all i ≥ 0.</p>
                <p><strong>Step 3:</strong> Choose s = 0ᵖ 1ᵖ 0ᵖ 1ᵖ (p zeros, p ones, p zeros, p ones). This is in L because s = ww where w = 0ᵖ 1ᵖ. Also |s| = 4p ≥ p.</p>
                <p><strong>Step 4:</strong> Since |xy| ≤ p and s starts with p zeros, both x and y consist only of 0s from the first block. So y = 0ᵏ for some 1 ≤ k ≤ p.</p>
                <p><strong>Step 5:</strong> Consider xy²z. This adds k more 0s to the first block, giving 0ᵖ⁺ᵏ 1ᵖ 0ᵖ 1ᵖ. For this to be in L, it must equal ww for some w.</p>
                <p><strong>Step 6:</strong> More rigorously: If xy²z = ww, then |xy²z| = 4p + k, so |w| = (4p + k)/2 = 2p + k/2. The first 2p + k/2 characters would need to equal the last 2p + k/2 characters. But the first part has p+k zeros at the start, while the corresponding position in the second half has only p zeros. Contradiction!</p>
                <p><strong>Step 7:</strong> Our assumption that L is regular led to contradiction. Therefore, L is NOT regular.</p>
                <p className="font-semibold mt-2">Final Answer: The language L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is NOT regular, proven by contradiction using the Pumping Lemma.</p>
              </div>
            </details>
          </div>
        </div>

        <h4 className="mt-8 font-semibold">Short Answer Questions</h4>

        <div className="space-y-6 mt-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="font-semibold">Question 1:</p>
            <p className="mt-2">Explain the difference between proof by contradiction and proof by contrapositive, including when each is most appropriate to use.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Sample Answer</summary>
              <div className="mt-3 text-sm space-y-2">
                <p>Proof by contrapositive is specifically for conditional statements (P → Q) and proves the logically equivalent statement ¬Q → ¬P instead. It's most appropriate when the negations of the hypothesis or conclusion are easier to work with than the original statements.</p>
                <p>Proof by contradiction is more general and works for any type of statement: you assume the negation of what you want to prove and derive a logical impossibility. It's most appropriate for impossibility claims, uniqueness proofs, or when you cannot find a direct path from hypotheses to conclusion.</p>
                <p>The key distinction is that contrapositive maintains the conditional structure and proves an equivalent statement directly, while contradiction proves the original statement by showing its negation is impossible. Contrapositive is typically cleaner when applicable, but contradiction is more versatile and can handle non-conditional statements.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="font-semibold">Question 2:</p>
            <p className="mt-2">Why is proof by counterexample insufficient to prove a statement true, even if you find many examples supporting it? Give a concrete example to illustrate.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Sample Answer</summary>
              <div className="mt-3 text-sm space-y-2">
                <p>Proof by counterexample can only disprove universal claims, not prove them, because of the logical asymmetry in universal quantification. A universal statement "for all x, P(x)" asserts that P holds for infinitely many (or at least many) values, so checking finite examples—even millions—leaves infinitely many unchecked cases.</p>
                <p>A classic example is the conjecture "all numbers of the form 2⁽²ⁿ⁾ + 1 are prime" (Fermat numbers). For n = 0, 1, 2, 3, 4, we get 3, 5, 17, 257, 65537—all prime! This held for every tested case for centuries. But when n = 5, we get 2³² + 1 = 4,294,967,297 = 641 × 6,700,417, which is composite. This single counterexample disproved the conjecture that seemed true for all tested cases.</p>
                <p>This illustrates why examples support but don't prove: they can never cover all cases, while a single counterexample definitively disproves universality.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="font-semibold">Question 3:</p>
            <p className="mt-2">Describe a scenario in automata theory where proof by construction is not just sufficient but actually more valuable than a non-constructive existence proof.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Sample Answer</summary>
              <div className="mt-3 text-sm space-y-2">
                <p>In automata theory, proving closure properties of regular languages through construction is far more valuable than non-constructive proofs. For example, when proving "regular languages are closed under concatenation," a constructive proof explicitly builds an NFA for L₁·L₂ from NFAs for L₁ and L₂.</p>
                <p>This construction becomes a reusable algorithm: compiler designers can implement this exact construction to handle concatenation in regular expressions. Students can apply this construction to solve problems. The proof itself becomes a tool, not just a logical argument.</p>
                <p>In contrast, a non-constructive proof might use the Myhill-Nerode theorem to argue concatenation preserves regularity without building the automaton. While valid, this provides no practical method to obtain the concatenation automaton. In computer science, where proofs often correspond to algorithms, constructive proofs are typically preferred because they provide both theoretical understanding and practical implementation.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice & Apply Your Knowledge</h3>
        <p>Test your understanding with these interactive questions. Answer each question by clicking on your choice, then check to see if you're correct!</p>

        <h4 className="mt-6 font-semibold">Quick Concept Checks (Interactive MCQs)</h4>

        <div className="space-y-6 mt-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Question 1 of 5</p>
            <p className="font-semibold mb-4">You want to prove: "If a language L is recognized by a DFA with n states, then L is regular." Which proof technique is most appropriate?</p>
            <div className="space-y-2">
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">A) Proof by contradiction</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">B) Proof by contrapositive</div>
              <div className="p-3 border rounded hover:bg-green-50 cursor-pointer bg-green-100 border-green-500">C) Direct proof (using definition)</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">D) Proof by counterexample</div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-semibold">Check Answer</summary>
              <div className="mt-2 p-3 bg-green-50 border-l-4 border-green-500">
                <p className="font-semibold text-green-800">Correct Answer: C</p>
                <p className="text-sm mt-2">This is a straightforward application of the definition of regular languages. By definition, a language is regular if and only if it is recognized by some DFA. Since we're given that L is recognized by a DFA with n states, we can directly conclude that L is regular. This is a direct proof using the definition—no need for contradiction, contrapositive, or counterexample.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Question 2 of 5</p>
            <p className="font-semibold mb-4">Which of the following is the contrapositive of "If a language L is regular, then L has a pumping length p"?</p>
            <div className="space-y-2">
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">A) If L has a pumping length p, then L is regular (converse)</div>
              <div className="p-3 border rounded hover:bg-green-50 cursor-pointer bg-green-100 border-green-500">B) If L does not have a pumping length p, then L is not regular</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">C) If L is not regular, then L does not have a pumping length p</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">D) If L is regular, then L does not have a pumping length p</div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-semibold">Check Answer</summary>
              <div className="mt-2 p-3 bg-green-50 border-l-4 border-green-500">
                <p className="font-semibold text-green-800">Correct Answer: B</p>
                <p className="text-sm mt-2">The contrapositive of "If P then Q" is "If not Q then not P." Here, P = "L is regular" and Q = "L has a pumping length p." So the contrapositive is: "If L does not have a pumping length p, then L is not regular." Note that option A is the converse (which is NOT logically equivalent), and option C reverses the negations incorrectly. The contrapositive is always logically equivalent to the original statement.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Question 3 of 5</p>
            <p className="font-semibold mb-4">You want to disprove the claim: "All context-free languages are regular." What is the most efficient approach?</p>
            <div className="space-y-2">
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">A) Proof by contradiction</div>
              <div className="p-3 border rounded hover:bg-green-50 cursor-pointer bg-green-100 border-green-500">B) Proof by counterexample</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">C) Proof by construction</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">D) Proof by contrapositive</div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-semibold">Check Answer</summary>
              <div className="mt-2 p-3 bg-green-50 border-l-4 border-green-500">
                <p className="font-semibold text-green-800">Correct Answer: B</p>
                <p className="text-sm mt-2">To disprove a universal claim ("All X are Y"), the most efficient approach is to find a single counterexample. We need just one context-free language that is not regular. For example, L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is context-free (can be recognized by a PDA) but not regular (fails the pumping lemma). This single counterexample disproves the entire claim. Contradiction or contrapositive would be unnecessarily complex for disproving a universal statement.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Question 4 of 5</p>
            <p className="font-semibold mb-4">To prove "There exists a DFA with 3 states that recognizes the language L = {'{'}w | w has an even number of 1s{'}'}", which proof technique should you use?</p>
            <div className="space-y-2">
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">A) Proof by contradiction</div>
              <div className="p-3 border rounded hover:bg-green-50 cursor-pointer bg-green-100 border-green-500">B) Proof by construction</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">C) Proof by contrapositive</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">D) Mathematical induction</div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-semibold">Check Answer</summary>
              <div className="mt-2 p-3 bg-green-50 border-l-4 border-green-500">
                <p className="font-semibold text-green-800">Correct Answer: B</p>
                <p className="text-sm mt-2">This is an existence claim ("There exists..."), which is best proven by construction. We explicitly construct a DFA with 3 states: q₀ (start, even count, accepting), q₁ (odd count, non-accepting), and q₂ (trap/dead state if needed, though actually 2 states suffice). We define transitions: from q₀, on '1' go to q₁, on '0' stay at q₀; from q₁, on '1' go to q₀, on '0' stay at q₁. By constructing this specific DFA and verifying it works, we prove existence. Contradiction would be indirect and unnecessary here.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Question 5 of 5</p>
            <p className="font-semibold mb-4">Consider the statement: "If a DFA M has n states, then M recognizes infinitely many strings or recognizes finitely many strings." Which statement is true about this?</p>
            <div className="space-y-2">
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">A) This requires proof by contradiction because it involves infinity</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">B) This is false and can be disproven with a counterexample</div>
              <div className="p-3 border rounded hover:bg-green-50 cursor-pointer bg-green-100 border-green-500">C) This is a tautology (always true) and requires no proof</div>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">D) This requires proof by construction to build examples of both cases</div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-semibold">Check Answer</summary>
              <div className="mt-2 p-3 bg-green-50 border-l-4 border-green-500">
                <p className="font-semibold text-green-800">Correct Answer: C</p>
                <p className="text-sm mt-2">This statement is a tautology—it's true by the law of excluded middle. For any DFA M, the language L(M) it recognizes is either finite or infinite; there's no third option. The statement "P or not P" (in this case, "infinitely many or finitely many") is always true regardless of the specific DFA. This is a logical truth that requires no proof. It's like saying "Either it's raining or it's not raining"—trivially true by definition of logical disjunction.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module1_2;
