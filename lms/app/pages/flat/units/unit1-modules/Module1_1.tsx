'use client';
import React from 'react';

const Module1_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.1</div>
        <div className="lesson-title-main">
          <h1>📐 Introduction to Formal Proof</h1>
          <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-1: Automata Methods and Finite Automata | Level: Expert Comprehensive Module</p>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Understand the fundamental concepts and necessity of formal mathematical proofs in theoretical computer science</li>
            <li>Master various proof techniques including direct proof, proof by contradiction, proof by contrapositive, and mathematical induction</li>
            <li>Apply deductive reasoning and logical inference rules to construct rigorous mathematical arguments</li>
            <li>Analyze and construct formal proofs for properties of automata, languages, and computational systems</li>
            <li>Develop proficiency in proving theorems about sets, relations, functions, and recursive structures relevant to theory of computation</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>1. Introduction to Formal Proof</h3>
        <p>
          In the realm of theoretical computer science and mathematics, a formal proof represents the gold standard of certainty and verification. 
          Unlike informal reasoning or empirical testing, formal proofs provide absolute, irrefutable evidence that a statement is true within a given logical framework. 
          This concept is particularly crucial in theory of computation, where we must establish the correctness of algorithms, prove properties of computational models, 
          determine the capabilities and limitations of computing machines, and establish relationships between different complexity classes.
        </p>
        <p className="mt-4">
          The need for formal proof arises from several fundamental requirements in computer science. First, unlike physical sciences where empirical observation can validate theories, 
          many computational properties cannot be verified through exhaustive testing—consider proving that an algorithm works for all infinite inputs, or demonstrating that certain 
          computational problems are inherently unsolvable. Second, when dealing with critical systems (aerospace, medical devices, financial systems), we cannot rely on probabilistic 
          correctness; we need mathematical certainty. Third, formal proofs allow us to understand not just that something works, but why it works, leading to deeper insights and generalizations.
        </p>
      </section>

      <section className="content-section">
        <h3>1.1 Historical Evolution of Formal Proof</h3>
        <p>
          The development of formal proof methods has a rich history spanning over two millennia. The ancient Greek mathematician Euclid (circa 300 BCE) established the axiomatic method 
          in his work "Elements," which became the paradigm for rigorous mathematical reasoning. Euclid started with a small set of self-evident axioms and postulates, then used logical 
          deduction to prove increasingly complex geometric theorems. This approach remained the standard for mathematical rigor for over 2000 years.
        </p>
        <p className="mt-4">
          The 19th century witnessed a crisis in mathematics when paradoxes emerged in naive set theory and questions arose about the foundations of calculus and analysis. 
          Mathematicians like Georg Cantor, Richard Dedekind, and Karl Weierstrass worked to place mathematics on firmer logical foundations. This period saw the rigorous definition 
          of real numbers, limits, continuity, and the development of formal set theory.
        </p>
        <p className="mt-4">
          The early 20th century brought revolutionary changes with the work of David Hilbert, Bertrand Russell, and Alfred North Whitehead. Hilbert's program aimed to formalize all 
          of mathematics using a finite set of axioms and prove mathematics itself to be consistent and complete. Russell and Whitehead's "Principia Mathematica" (1910-1913) attempted 
          to derive all mathematics from logical axioms. However, Kurt Gödel's incompleteness theorems (1931) showed fundamental limitations: any consistent formal system strong enough 
          to express arithmetic must contain true statements that cannot be proved within the system.
        </p>
        <p className="mt-4">
          For computer science, the groundbreaking work came with Alan Turing's 1936 paper "On Computable Numbers," which used formal mathematical proofs to establish fundamental limits 
          of computation. Turing proved the undecidability of the halting problem, demonstrating that certain computational questions are provably unsolvable. This established formal proof 
          as an essential tool in theoretical computer science, leading to the development of automata theory, formal languages, computational complexity theory, and algorithm verification.
        </p>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">📘 Formal Definition: Proof</p>
          <p className="mt-2">
            A proof is a finite sequence of statements (S₁, S₂, S₃, ..., Sₙ) where each statement Sᵢ is either:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>An axiom:</strong> A statement accepted as true without proof (e.g., "For all sets A, A = A")</li>
            <li><strong>A premise:</strong> A hypothesis assumed true for the sake of argument</li>
            <li><strong>A logical consequence:</strong> Derived from previous statements using valid inference rules</li>
          </ul>
          <p className="mt-2">The final statement Sₙ is called the conclusion or theorem. The proof establishes that the conclusion necessarily follows from the axioms and premises through valid logical reasoning.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>1.2 Components of Mathematical Proof Systems</h3>
        <p>Every formal proof system consists of four essential components that work together to enable rigorous mathematical reasoning:</p>
        
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold">1. Language and Syntax</h4>
            <p className="ml-4">A formal system requires a precisely defined language with unambiguous syntax. This includes a finite alphabet of symbols (logical connectives like ∧, ∨, ¬, →; quantifiers like ∀, ∃; variables, constants, function symbols, and relation symbols), formation rules that specify which sequences of symbols constitute valid formulas (well-formed formulas or wffs), and a clear distinction between object language (statements about mathematical objects) and metalanguage (statements about the formal system itself).</p>
          </div>
          
          <div>
            <h4 className="font-semibold">2. Axioms</h4>
            <p className="ml-4">These are fundamental statements accepted as true without proof, forming the foundation of the system. Different mathematical domains have different axiom systems—Peano axioms for natural numbers, Zermelo-Fraenkel axioms for set theory, group axioms for abstract algebra. In theory of computation, we use axioms defining properties of strings, languages, and automata. The choice of axioms profoundly affects what can be proved; ideally, axioms should be consistent (not leading to contradictions), independent (no axiom derivable from others), and complete (sufficient to prove or disprove every statement in the domain).</p>
          </div>
          
          <div>
            <h4 className="font-semibold">3. Inference Rules</h4>
            <p className="ml-4">These are logical rules that allow deriving new statements from existing ones. Fundamental rules include Modus Ponens (from P and P → Q, conclude Q), Modus Tollens (from ¬Q and P → Q, conclude ¬P), Universal Instantiation (from ∀x P(x), conclude P(a) for any specific a), and Existential Generalization (from P(a), conclude ∃x P(x)). Each inference rule must be truth-preserving: if the premises are true, the conclusion must be true.</p>
          </div>
          
          <div>
            <h4 className="font-semibold">4. Proof Procedures</h4>
            <p className="ml-4">These are systematic methods for constructing proofs. Forward reasoning starts from axioms and known facts, applying inference rules to derive new facts until reaching the desired conclusion. Backward reasoning starts from the goal and works backward to find premises that would imply it. Resolution and unification methods, used in automated theorem proving, combine forward and backward reasoning. Natural deduction systems provide a framework closely matching human mathematical reasoning, while sequent calculus offers a more formal computational approach.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>2. Fundamental Proof Techniques</h3>
        <p>Mathematical proofs in theory of computation employ several standard techniques, each suited to different types of statements. Mastering these techniques is essential for analyzing automata, proving language properties, and establishing computational complexity results.</p>
      </section>

      <section className="content-section">
        <h3>2.1 Direct Proof</h3>
        <p>
          A direct proof establishes the truth of a statement P → Q by assuming P is true and using axioms, definitions, and previously proven theorems to show that Q must also be true. This is the most straightforward and commonly used proof technique. The structure follows a clear logical path from hypothesis to conclusion through a chain of valid implications.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 1: Closure Under Union</p>
          <p className="mt-2"><strong>Statement:</strong> If L₁ and L₂ are regular languages, then L₁ ∪ L₂ is also a regular language.</p>
          <p className="mt-2"><strong>✓ Proof (Direct):</strong></p>
          <p className="mt-2"><strong>Given:</strong> L₁ and L₂ are regular languages.</p>
          <p className="mt-2"><strong>To Prove:</strong> L₁ ∪ L₂ is regular.</p>
          <p className="mt-2"><strong>Proof Construction:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>Since L₁ is regular, there exists a DFA M₁ = (Q₁, Σ, δ₁, q₁, F₁) that accepts L₁</li>
            <li>Since L₂ is regular, there exists a DFA M₂ = (Q₂, Σ, δ₂, q₂, F₂) that accepts L₂</li>
            <li>We construct a new DFA M = (Q, Σ, δ, q₀, F) where:
              <ul className="list-disc ml-6 mt-1">
                <li>Q = Q₁ × Q₂ (Cartesian product of state sets)</li>
                <li>q₀ = (q₁, q₂) (pair of initial states)</li>
                <li>F = {'{'}(p, q) | p in F₁ or q in F₂{'}'} (accept if either component accepts)</li>
                <li>δ((p, q), a) = (δ₁(p, a), δ₂(q, a)) for all p in Q₁, q in Q₂, a in Σ</li>
              </ul>
            </li>
            <li>M simulates both M₁ and M₂ in parallel, accepting if either machine accepts</li>
            <li>A string w is accepted by M if and only if w in L₁ or w in L₂, which means L(M) = L₁ ∪ L₂</li>
            <li>Since we constructed a DFA that accepts L₁ ∪ L₂, this union is regular. ∎</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>2.2 Proof by Contradiction (Reductio ad Absurdum)</h3>
        <p>
          In a proof by contradiction, we prove statement P by assuming ¬P (not P) is true and then deriving a logical contradiction—a statement that is clearly false or contradicts known facts. Since our assumption leads to an impossibility, the assumption must be false, therefore P must be true. This technique is particularly powerful for proving impossibility results and non-existence statements.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 2: Non-Regularity</p>
          <p className="mt-2"><strong>Statement:</strong> The language L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is not regular.</p>
          <p className="mt-2"><strong>Proof (By Contradiction using Pumping Lemma):</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>Assume L is regular</li>
            <li>By Pumping Lemma, there exists pumping length p</li>
            <li>Choose s = 0ᵖ1ᵖ (clearly s ∈ L)</li>
            <li>By Pumping Lemma, s = xyz where |xy| ≤ p, |y| &gt; 0</li>
            <li>y must consist only of 0s</li>
            <li>Consider xy²z = 0ᵖ⁺ᵏ1ᵖ where k &gt; 0</li>
            <li>This has more 0s than 1s, so xy²z ∉ L</li>
            <li>Contradiction! Therefore L is not regular ∎</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>2.3 Proof by Contrapositive</h3>
        <p>
          To prove P → Q using the contrapositive method, we instead prove ¬Q → ¬P. These two statements are logically equivalent, so proving one proves the other. This technique is particularly useful when the contrapositive is easier to work with than the original statement.
        </p>
        <p className="mt-4">
          The logical equivalence can be verified using truth tables: P → Q is false only when P is true and Q is false. Similarly, ¬Q → ¬P is false only when ¬Q is true and ¬P is false, which means Q is false and P is true—the same condition. In all other cases, both statements are true, confirming their equivalence.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 3: Square Root Implication</p>
          <p className="mt-2"><strong>Statement:</strong> If n² is even, then n is even.</p>
          <p className="mt-2"><strong>Proof (By Contrapositive):</strong></p>
          <p className="mt-2">Contrapositive: If n is odd, then n² is odd</p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>Assume n is odd</li>
            <li>Then n = 2k + 1 for some integer k</li>
            <li>n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1</li>
            <li>This is odd by definition</li>
            <li>Contrapositive proven, therefore original statement is true ∎</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>2.4 Proof by Mathematical Induction</h3>
        <p>
          Mathematical induction is a powerful technique for proving statements about natural numbers or recursively defined structures. It works like a domino effect: prove the first domino falls (base case), prove that if any domino falls, the next one must fall (inductive step), and conclude all dominos fall (all cases are true).
        </p>
        <p className="mt-4">
          The principle of mathematical induction is founded on the well-ordering principle of natural numbers: every non-empty set of natural numbers has a least element. This ensures that induction is a valid proof technique. There are several variants of induction, each suited to different problem types.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">📘 Structure of Inductive Proof</p>
          <p className="mt-2"><strong>Standard Induction:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li><strong>Base Case:</strong> Prove P(0) or P(1) is true</li>
            <li><strong>Inductive Hypothesis:</strong> Assume P(k) is true for arbitrary k ≥ base</li>
            <li><strong>Inductive Step:</strong> Prove P(k+1) is true using the assumption P(k)</li>
            <li><strong>Conclusion:</strong> By induction, P(n) is true for all n ≥ base</li>
          </ol>
          <p className="mt-4"><strong>Strong Induction:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li><strong>Base Case:</strong> Prove P(0), P(1), ..., P(m) for necessary base cases</li>
            <li><strong>Inductive Hypothesis:</strong> Assume P(i) is true for all i ≤ k</li>
            <li><strong>Inductive Step:</strong> Prove P(k+1) using any or all of P(0), P(1), ..., P(k)</li>
            <li><strong>Conclusion:</strong> By strong induction, P(n) is true for all n ≥ 0</li>
          </ol>
        </div>
        
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 4: Sum Formula</p>
          <p className="mt-2"><strong>Statement:</strong> For all n ≥ 1, the sum 1 + 2 + 3 + ... + n = n(n+1)/2</p>
          <p className="mt-2"><strong>✓ Proof (By Mathematical Induction):</strong></p>
          <p className="mt-2">Let P(n): 1 + 2 + 3 + ... + n = n(n+1)/2</p>
          <p className="mt-2"><strong>Base Case (n=1):</strong></p>
          <div className="ml-4">
            <p>Left side: 1</p>
            <p>Right side: 1(1+1)/2 = 1(2)/2 = 1</p>
            <p>P(1) is true. ✓</p>
          </div>
          <p className="mt-2"><strong>Inductive Hypothesis:</strong> Assume P(k) is true for some k ≥ 1, i.e., 1 + 2 + ... + k = k(k+1)/2</p>
          <p className="mt-2"><strong>Inductive Step:</strong> Prove P(k+1) is true:</p>
          <div className="ml-4 mt-2">
            <p>Consider the sum: 1 + 2 + 3 + ... + k + (k+1)</p>
            <p>= [1 + 2 + 3 + ... + k] + (k+1)</p>
            <p>= k(k+1)/2 + (k+1) [by inductive hypothesis]</p>
            <p>= k(k+1)/2 + 2(k+1)/2 [common denominator]</p>
            <p>= [k(k+1) + 2(k+1)]/2</p>
            <p>= [(k+1)(k+2)]/2</p>
            <p>= (k+1)[(k+1)+1]/2</p>
            <p>This is exactly P(k+1)! ✓</p>
          </div>
          <p className="mt-2"><strong>Conclusion:</strong> By the principle of mathematical induction, P(n) is true for all n ≥ 1. ∎</p>
        </div>
      </section>

      <section className="content-section">
        <h3>2.5 Strong Induction and Structural Induction</h3>
        <p>
          Strong induction (also called complete induction) differs from ordinary induction in the inductive hypothesis. Instead of assuming only P(k), we assume P(0), P(1), P(2), ..., P(k) are all true, then prove P(k+1). This stronger assumption is particularly useful when establishing P(k+1) requires information about multiple previous cases, not just the immediately preceding one.
        </p>
        <p className="mt-4">
          Structural induction extends induction to recursively defined structures like trees, lists, or formal language expressions. Instead of inducting on natural numbers, we induct on the structure itself. The base cases correspond to the base elements of the recursive definition, and the inductive step handles the recursive construction rules.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 5: Strong Induction - Fundamental Theorem of Arithmetic</p>
          <p className="mt-2"><strong>Theorem:</strong> Every integer n ≥ 2 can be expressed as a product of primes.</p>
          <p className="mt-2"><strong>Proof by Strong Induction:</strong></p>
          <p className="mt-2"><strong>Base Case (n=2):</strong> 2 is prime, so it's trivially a product of primes (itself). ✓</p>
          <p className="mt-2"><strong>Strong Inductive Hypothesis:</strong> Assume all integers from 2 to k can be expressed as products of primes.</p>
          <p className="mt-2"><strong>Inductive Step:</strong> Prove k+1 can be expressed as a product of primes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Case 1:</strong> If k+1 is prime, it's already a product of primes (itself). ✓</li>
            <li><strong>Case 2:</strong> If k+1 is composite, then k+1 = a × b where 2 ≤ a, b &lt; k+1.</li>
            <li>By strong inductive hypothesis (since a, b ≤ k), both a and b can be expressed as products of primes.</li>
            <li>Therefore k+1 = a × b = (product of primes) × (product of primes) = product of primes. ✓</li>
          </ul>
          <p className="mt-2"><strong>Conclusion:</strong> By strong induction, every integer ≥ 2 is a product of primes. ✓</p>
          <p className="mt-2 text-sm italic">Note: This required strong induction because k+1 might factor into numbers much smaller than k, not just k and 1.</p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 6: Structural Induction - Regular Expression Length</p>
          <p className="mt-2"><strong>Theorem:</strong> For any regular expression R, all strings in L(R) have length at least 0.</p>
          <p className="mt-2"><strong>Proof by Structural Induction on Regular Expressions:</strong></p>
          <p className="mt-2"><strong>Base Cases:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>R = ∅: L(∅) = {'{}'}, empty language, statement is vacuously true. ✓</li>
            <li>R = ε: L(ε) = {'{'}ε{'}'}, and |ε| = 0 ≥ 0. ✓</li>
            <li>R = a (symbol): L(a) = {'{'}a{'}'}, and |a| = 1 ≥ 0. ✓</li>
          </ul>
          <p className="mt-2"><strong>Inductive Hypothesis:</strong> Assume property holds for regular expressions R₁ and R₂.</p>
          <p className="mt-2"><strong>Inductive Cases:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>R = R₁ ∪ R₂: Any string in L(R) is in L(R₁) or L(R₂). By hypothesis, it has length ≥ 0. ✓</li>
            <li>R = R₁ · R₂: Any string w in L(R) is w = xy where x in L(R₁), y in L(R₂). By hypothesis, |x| ≥ 0 and |y| ≥ 0, so |w| = |x| + |y| ≥ 0. ✓</li>
            <li>R = R₁*: Any string w in L(R₁*) is w = w₁w₂...wₖ where each wᵢ in L(R₁). By hypothesis, each |wᵢ| ≥ 0, so |w| = Σ|wᵢ| ≥ 0. ✓</li>
          </ul>
          <p className="mt-2"><strong>Conclusion:</strong> By structural induction, all strings generated by any regular expression have non-negative length. ✓</p>
        </div>
      </section>

      <section className="content-section">
        <h3>3. Logical Foundations and Inference Rules</h3>
        <p>Formal proofs rely on a foundation of propositional and predicate logic. Understanding logical connectives, quantifiers, and inference rules is essential for constructing rigorous proofs in theoretical computer science.</p>
        
        <h4 className="mt-4 font-semibold">3.1 Propositional Logic</h4>
        <p>Propositional logic deals with propositions—statements that are either true or false—and logical connectives that combine them. The fundamental connectives are:</p>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Connective</th>
                <th className="border border-gray-300 px-4 py-2">Symbol</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Truth Condition</th>
                <th className="border border-gray-300 px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Negation</td>
                <td className="border border-gray-300 px-4 py-2">¬P</td>
                <td className="border border-gray-300 px-4 py-2">NOT</td>
                <td className="border border-gray-300 px-4 py-2">True when P is false</td>
                <td className="border border-gray-300 px-4 py-2">¬(n is even) means n is odd</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Conjunction</td>
                <td className="border border-gray-300 px-4 py-2">P ∧ Q</td>
                <td className="border border-gray-300 px-4 py-2">AND</td>
                <td className="border border-gray-300 px-4 py-2">True when both are true</td>
                <td className="border border-gray-300 px-4 py-2">(n &gt; 0) ∧ (n &lt; 10)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Disjunction</td>
                <td className="border border-gray-300 px-4 py-2">P ∨ Q</td>
                <td className="border border-gray-300 px-4 py-2">OR</td>
                <td className="border border-gray-300 px-4 py-2">True when at least one is true</td>
                <td className="border border-gray-300 px-4 py-2">(n is prime) ∨ (n is even)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Implication</td>
                <td className="border border-gray-300 px-4 py-2">P → Q</td>
                <td className="border border-gray-300 px-4 py-2">IF-THEN</td>
                <td className="border border-gray-300 px-4 py-2">False only when P true and Q false</td>
                <td className="border border-gray-300 px-4 py-2">(x &gt; 5) → (x &gt; 0)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Biconditional</td>
                <td className="border border-gray-300 px-4 py-2">P ↔ Q</td>
                <td className="border border-gray-300 px-4 py-2">IFF</td>
                <td className="border border-gray-300 px-4 py-2">True when P and Q have same truth value</td>
                <td className="border border-gray-300 px-4 py-2">(n is even) ↔ (n mod 2 = 0)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">3.2 Predicate Logic and Quantifiers</h4>
        <p>Predicate logic (first-order logic) extends propositional logic with predicates, variables, and quantifiers. A predicate is a function that returns true or false, like P(x) = "x is prime". Quantifiers allow us to make statements about collections of objects:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li><strong>Universal Quantifier (∀):</strong> "For all" - ∀x P(x) means P(x) is true for every x in the domain.</li>
          <li><strong>Existential Quantifier (∃):</strong> "There exists" - ∃x P(x) means P(x) is true for at least one x in the domain.</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 7: Quantifier Usage in Automata</p>
          <p className="mt-2"><strong>Statement in English:</strong> "Every regular language can be accepted by some DFA."</p>
          <p className="mt-2"><strong>Formal Representation:</strong> ∀L [(L is regular) → ∃M [(M is a DFA) ∧ (L(M) = L)]]</p>
          <p className="mt-2"><strong>Breaking it down:</strong></p>
          <ul className="list-disc ml-6 mt-2">
            <li>∀L - For every language L</li>
            <li>L is regular → ... - If L is regular, then...</li>
            <li>∃M - There exists a machine M</li>
            <li>(M is a DFA) ∧ (L(M) = L) - M is a DFA and M accepts exactly L</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">📘 Quantifier Rules</p>
          <p className="mt-2"><strong>Negation of Quantifiers (Crucial for proof by contradiction):</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>¬(∀x P(x)) ≡ ∃x ¬P(x) - "Not all satisfy P" means "some don't satisfy P"</li>
            <li>¬(∃x P(x)) ≡ ∀x ¬P(x) - "None exist satisfying P" means "all fail to satisfy P"</li>
          </ul>
          <p className="mt-2"><strong>Other Rules:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Universal Instantiation:</strong> From ∀x P(x), we can conclude P(c) for any specific c.</li>
            <li><strong>Existential Generalization:</strong> From P(c) for some specific c, we can conclude ∃x P(x).</li>
            <li><strong>Quantifier Order Matters:</strong> ∀x ∃y P(x,y) ≠ ∃y ∀x P(x,y)</li>
          </ul>
          <p className="mt-2"><strong>Examples:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>∀x ∃y (x &lt; y) is true (for any number, there's a larger one)</li>
            <li>∃y ∀x (x &lt; y) is false (no single number is larger than all)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>Important Logical Equivalences</h3>
        <p className="mt-2">These equivalences are frequently used in proof construction:</p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li><strong>De Morgan's Laws:</strong> ¬(P ∧ Q) ≡ ¬P ∨ ¬Q; ¬(P ∨ Q) ≡ ¬P ∧ ¬Q</li>
          <li><strong>Implication Laws:</strong> P → Q ≡ ¬P ∨ Q; P → Q ≡ ¬Q → ¬P (contrapositive); ¬(P → Q) ≡ P ∧ ¬Q</li>
          <li><strong>Biconditional:</strong> P ↔ Q ≡ (P → Q) ∧ (Q → P)</li>
          <li><strong>Associative Laws:</strong> (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R); (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)</li>
          <li><strong>Distributive Laws:</strong> P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R); P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)</li>
        </ul>
      </section>

      <section className="content-section">
        <h4 className="font-semibold">3.3 Fundamental Inference Rules</h4>
        <p>Inference rules are the building blocks of logical reasoning. They specify valid ways to derive new statements from existing ones.</p>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Rule Name</th>
                <th className="border border-gray-300 px-4 py-2">Premises</th>
                <th className="border border-gray-300 px-4 py-2">Conclusion</th>
                <th className="border border-gray-300 px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Modus Ponens</td>
                <td className="border border-gray-300 px-4 py-2">P, P → Q</td>
                <td className="border border-gray-300 px-4 py-2">Q</td>
                <td className="border border-gray-300 px-4 py-2">L is regular; Regular → has DFA; ∴ L has DFA</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Modus Tollens</td>
                <td className="border border-gray-300 px-4 py-2">¬Q, P → Q</td>
                <td className="border border-gray-300 px-4 py-2">¬P</td>
                <td className="border border-gray-300 px-4 py-2">L has no DFA; Regular → has DFA; ∴ L not regular</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Hypothetical Syllogism</td>
                <td className="border border-gray-300 px-4 py-2">P → Q, Q → R</td>
                <td className="border border-gray-300 px-4 py-2">P → R</td>
                <td className="border border-gray-300 px-4 py-2">Regular → has DFA; has DFA → decidable; ∴ Regular → decidable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Disjunctive Syllogism</td>
                <td className="border border-gray-300 px-4 py-2">P ∨ Q, ¬P</td>
                <td className="border border-gray-300 px-4 py-2">Q</td>
                <td className="border border-gray-300 px-4 py-2">L is regular or context-free; L not regular; ∴ L is context-free</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Addition</td>
                <td className="border border-gray-300 px-4 py-2">P</td>
                <td className="border border-gray-300 px-4 py-2">P ∨ Q</td>
                <td className="border border-gray-300 px-4 py-2">L₁ is regular; ∴ L₁ is regular or infinite</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Simplification</td>
                <td className="border border-gray-300 px-4 py-2">P ∧ Q</td>
                <td className="border border-gray-300 px-4 py-2">P</td>
                <td className="border border-gray-300 px-4 py-2">M is deterministic and complete; ∴ M is deterministic</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Conjunction</td>
                <td className="border border-gray-300 px-4 py-2">P, Q</td>
                <td className="border border-gray-300 px-4 py-2">P ∧ Q</td>
                <td className="border border-gray-300 px-4 py-2">L₁ is regular; L₂ is regular; ∴ Both are regular</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Resolution</td>
                <td className="border border-gray-300 px-4 py-2">P ∨ Q, ¬P ∨ R</td>
                <td className="border border-gray-300 px-4 py-2">Q ∨ R</td>
                <td className="border border-gray-300 px-4 py-2">Finite or infinite; not finite or decidable; ∴ infinite or decidable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 8: Chaining Inference Rules</p>
          <p className="mt-2"><strong>Given Facts:</strong></p>
          <ol className="list-decimal ml-6 mt-2">
            <li>If a language is regular, it is context-free. (Regular → CF)</li>
            <li>If a language is context-free, it is recursive. (CF → Recursive)</li>
            <li>Language L is regular. (Regular(L))</li>
          </ol>
          <p className="mt-2"><strong>Prove:</strong> L is recursive.</p>
          <p className="mt-2"><strong>Proof:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Regular(L) [Given fact 3]</li>
            <li>Regular → CF [Given fact 1]</li>
            <li>CF(L) [From 1, 2 by Modus Ponens]</li>
            <li>CF → Recursive [Given fact 2]</li>
            <li>Recursive(L) [From 3, 4 by Modus Ponens] ✓</li>
          </ol>
          <p className="mt-2"><strong>Alternative using Hypothetical Syllogism:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Regular → CF [Given]</li>
            <li>CF → Recursive [Given]</li>
            <li>Regular → Recursive [From 1, 2 by Hypothetical Syllogism]</li>
            <li>Regular(L) [Given]</li>
            <li>Recursive(L) [From 3, 4 by Modus Ponens] ✓</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>4. Proofs Involving Sets, Relations, and Functions</h3>
        <p>Set theory forms the foundation of mathematics and theoretical computer science. Formal languages are sets of strings, and automata theory heavily relies on set operations and relations.</p>

        <h4 className="mt-4 font-semibold">4.1 Set Operations and Proofs</h4>
        <p>Basic set operations include union (A ∪ B), intersection (A ∩ B), difference (A - B), complement (Ā), Cartesian product (A × B), and power set (P(A)). Proving set equality typically requires showing mutual subset inclusion: to prove A = B, show A ⊆ B and B ⊆ A.</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 5: Distributive Law for Sets</p>
          <p className="mt-2"><strong>Statement:</strong> For any sets A, B, C: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
          <p className="mt-2"><strong>✓ Proof (Element-wise):</strong></p>
          <p className="mt-2"><strong>Part 1:</strong> Show A ∩ (B ∪ C) ⊆ (A ∩ B) ∪ (A ∩ C)</p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Let x in A ∩ (B ∪ C)</li>
            <li>Then x in A and x in (B ∪ C) [definition of intersection]</li>
            <li>Since x in (B ∪ C), either x in B or x in C [definition of union]</li>
            <li>Case 1: If x in B, then x in A and x in B, so x in (A ∩ B), thus x in (A ∩ B) ∪ (A ∩ C)</li>
            <li>Case 2: If x in C, then x in A and x in C, so x in (A ∩ C), thus x in (A ∩ B) ∪ (A ∩ C)</li>
            <li>In both cases, x in (A ∩ B) ∪ (A ∩ C). ✓</li>
          </ol>
          <p className="mt-2"><strong>Part 2:</strong> Show (A ∩ B) ∪ (A ∩ C) ⊆ A ∩ (B ∪ C)</p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Let x in (A ∩ B) ∪ (A ∩ C)</li>
            <li>Then x in (A ∩ B) or x in (A ∩ C) [definition of union]</li>
            <li>Case 1: If x in (A ∩ B), then x in A and x in B, so x in A and x in (B ∪ C), thus x in A ∩ (B ∪ C)</li>
            <li>Case 2: If x in (A ∩ C), then x in A and x in C, so x in A and x in (B ∪ C), thus x in A ∩ (B ∪ C)</li>
            <li>In both cases, x in A ∩ (B ∪ C). ✓</li>
          </ol>
          <p className="mt-2"><strong>Conclusion:</strong> Since both subset inclusions hold, the sets are equal. ∎</p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 9: De Morgan's Law for Sets</p>
          <p className="mt-2"><strong>Theorem:</strong> For sets A and B: (A ∪ B)' = A' ∩ B' (where ' denotes complement)</p>
          <p className="mt-2"><strong>Proof:</strong></p>
          <p className="mt-2"><strong>Part 1:</strong> (A ∪ B)' ⊆ A' ∩ B'</p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Let x in (A ∪ B)'</li>
            <li>Then x not in (A ∪ B) [definition of complement]</li>
            <li>So x not in A and x not in B [negation of union]</li>
            <li>Therefore x in A' and x in B'</li>
            <li>Thus x in A' ∩ B' ✓</li>
          </ol>
          <p className="mt-2"><strong>Part 2:</strong> A' ∩ B' ⊆ (A ∪ B)'</p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Let x in A' ∩ B'</li>
            <li>Then x in A' and x in B'</li>
            <li>So x not in A and x not in B</li>
            <li>Therefore x not in (A ∪ B)</li>
            <li>Thus x in (A ∪ B)' ✓</li>
          </ol>
          <p className="mt-2"><strong>Conclusion:</strong> (A ∪ B)' = A' ∩ B' ✓</p>
        </div>

        <h4 className="mt-6 font-semibold">4.2 Relations and Their Properties</h4>
        <p>A relation R from set A to set B is a subset of A × B. When A = B, we call it a relation on A. Relations formalize concepts like "less than," "divides," or "is reachable from" in automata.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">📘 Properties of Relations on Set A</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Reflexive:</strong> ∀a in A, (a,a) in R. Every element relates to itself.</li>
            <li><strong>Symmetric:</strong> ∀a,b in A, if (a,b) in R then (b,a) in R. Relation goes both ways.</li>
            <li><strong>Antisymmetric:</strong> ∀a,b in A, if (a,b) in R and (b,a) in R then a = b. Different elements don't relate both ways.</li>
            <li><strong>Transitive:</strong> ∀a,b,c in A, if (a,b) in R and (b,c) in R then (a,c) in R. Relation chains.</li>
          </ul>
          <p className="mt-2"><strong>Special Relations:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Equivalence Relation:</strong> Reflexive, Symmetric, and Transitive (examples: equality, congruence mod n)</li>
            <li><strong>Partial Order:</strong> Reflexive, Antisymmetric, and Transitive (examples: ≤, subset relation ⊆)</li>
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 10: Proving Transitivity</p>
          <p className="mt-2"><strong>Define:</strong> On integers, relation R where aRb if a ≤ b.</p>
          <p className="mt-2"><strong>Prove:</strong> R is transitive.</p>
          <p className="mt-2"><strong>Proof:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Assume aRb and bRc for integers a, b, c.</li>
            <li>By definition of R, this means a ≤ b and b ≤ c.</li>
            <li>By transitivity of ≤ on integers (a property of the standard ordering), a ≤ c.</li>
            <li>By definition of R, this means aRc.</li>
            <li>Since this holds for arbitrary a, b, c, R is transitive. ∎</li>
          </ol>
        </div>

        <h4 className="mt-6 font-semibold">4.3 Functions and Their Properties</h4>
        <p>A function f: A → B is a special relation where each element of A relates to exactly one element of B. Functions are fundamental in defining automata transitions, language mappings, and computational reductions.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">📘 Types of Functions</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Injective (One-to-One):</strong> ∀a₁,a₂ in A, if f(a₁) = f(a₂) then a₁ = a₂. Different inputs → different outputs.</li>
            <li><strong>Surjective (Onto):</strong> ∀b in B, ∃a in A such that f(a) = b. Every output has an input.</li>
            <li><strong>Bijective:</strong> Both injective and surjective. Perfect one-to-one correspondence.</li>
          </ul>
          <p className="mt-2"><strong>Importance in Theory of Computation:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Bijections establish equivalence between sets (same cardinality)</li>
            <li>Injections from A to B show |A| ≤ |B|</li>
            <li>Reductions in complexity theory are computable functions</li>
            <li>Transition functions δ in automata are functions</li>
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 6: Composition of Injective Functions</p>
          <p className="mt-2"><strong>Statement:</strong> If f: A → B and g: B → C are both injective, then g∘f: A → C is injective.</p>
          <p className="mt-2"><strong>✓ Proof (Direct):</strong></p>
          <p className="mt-2"><strong>Given:</strong> f: A → B is injective, g: B → C is injective.</p>
          <p className="mt-2"><strong>To Prove:</strong> g∘f is injective, i.e., ∀a₁,a₂ in A, if (g∘f)(a₁) = (g∘f)(a₂) then a₁ = a₂.</p>
          <p className="mt-2"><strong>Proof:</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Assume (g∘f)(a₁) = (g∘f)(a₂) for some a₁, a₂ in A.</li>
            <li>By definition of composition: g(f(a₁)) = g(f(a₂)).</li>
            <li>Since g is injective: if g(x) = g(y) then x = y.</li>
            <li>Applying this with x = f(a₁) and y = f(a₂): f(a₁) = f(a₂).</li>
            <li>Since f is injective: if f(x) = f(y) then x = y.</li>
            <li>Applying this with x = a₁ and y = a₂: a₁ = a₂.</li>
            <li>Therefore, g∘f is injective. ∎</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>5. Advanced Proof Techniques in Theory of Computation</h3>
        
        <h4 className="mt-4 font-semibold">5.1 Proof by Construction (Constructive Proof)</h4>
        <p>A constructive proof not only proves that something exists but actually provides a method to construct it. This is particularly important in computer science where we often need algorithms, not just existence proofs. Constructive proofs are more informative than existence proofs because they give explicit examples or algorithms.</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 11: Constructive Proof - NFA to DFA Conversion</p>
          <p className="mt-2"><strong>Theorem:</strong> For every NFA N, there exists a DFA D such that L(N) = L(D).</p>
          <p className="mt-2"><strong>Constructive Proof:</strong> We don't just prove existence; we provide the construction algorithm.</p>
          <p className="mt-2"><strong>Given:</strong> NFA N = (Q, Σ, δ, q₀, F)</p>
          <p className="mt-2"><strong>Construction:</strong> Build DFA D = (Q', Σ, δ', q'₀, F') where:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Q' = P(Q) (power set of Q - all possible subsets of N's states)</li>
            <li>q'₀ = {'{'}q₀{'}'} (singleton set containing N's start state)</li>
            <li>F' = {'{'}S in Q' | S ∩ F ≠ ∅{'}'} (sets containing at least one accept state of N)</li>
            <li>δ'(S, a) = ⋃q∈S δ(q, a) (union of all transitions from states in S)</li>
          </ul>
          <p className="mt-2"><strong>Example:</strong> Given NFA with Q = {'{'}q₀, q₁{'}'}:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>D has states: ∅, {'{'}q₀{'}'}, {'{'}q₁{'}'}, {'{'}q₀,q₁{'}'}</li>
            <li>If N has δ(q₀, a) = {'{'}q₀, q₁{'}'} and δ(q₁, a) = {'{'}q₁{'}'}, then</li>
            <li>D has δ'({'{'}q₀{'}'}, a) = δ(q₀, a) = {'{'}q₀, q₁{'}'}</li>
            <li>D has δ'({'{'}q₀,q₁{'}'}, a) = δ(q₀, a) ∪ δ(q₁, a) = {'{'}q₀, q₁{'}'} ∪ {'{'}q₁{'}'} = {'{'}q₀, q₁{'}'}</li>
          </ul>
          <p className="mt-2">This construction explicitly builds the DFA. ✓</p>
        </div>

        <h4 className="mt-6 font-semibold">5.2 Proof by Diagonalization</h4>
        <p>Diagonalization is a technique invented by Georg Cantor to prove that some infinities are larger than others. In theoretical computer science, it's used to prove undecidability results and show that certain functions are non-computable. The technique constructs an object that differs from every object in a given list along the "diagonal."</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 12: Diagonalization - Uncountability of Real Numbers</p>
          <p className="mt-2"><strong>Theorem:</strong> The set of real numbers between 0 and 1 is uncountable.</p>
          <p className="mt-2"><strong>Proof by Diagonalization (Cantor's Method):</strong></p>
          <p className="mt-2"><strong>Assume (for contradiction):</strong> The reals in [0,1] are countable, so we can list them:</p>
          <div className="ml-4 mt-2">
            <p>r₁ = 0.d₁₁d₁₂d₁₃d₁₄...</p>
            <p>r₂ = 0.d₂₁d₂₂d₂₃d₂₄...</p>
            <p>r₃ = 0.d₃₁d₃₂d₃₃d₃₄...</p>
            <p>r₄ = 0.d₄₁d₄₂d₄₃d₄₄...</p>
            <p>...</p>
          </div>
          <p className="mt-2"><strong>Construct:</strong> A real number x = 0.x₁x₂x₃x₄... where:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>xᵢ = 5 if dᵢᵢ ≠ 5</li>
            <li>xᵢ = 6 if dᵢᵢ = 5</li>
          </ul>
          <p className="mt-2"><strong>Analysis:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>x ≠ r₁ because x₁ ≠ d₁₁ (they differ in 1st decimal place)</li>
            <li>x ≠ r₂ because x₂ ≠ d₂₂ (they differ in 2nd decimal place)</li>
            <li>x ≠ rₙ because xₙ ≠ dₙₙ (they differ in nth decimal place)</li>
            <li>x differs from every number in our "complete" list!</li>
          </ul>
          <p className="mt-2"><strong>Contradiction:</strong> We claimed to list all reals, but x is not in the list.</p>
          <p className="mt-2"><strong>Conclusion:</strong> The reals in [0,1] are uncountable. ∎</p>
          <p className="mt-2 text-sm italic">Importance: This technique is used to prove the undecidability of the halting problem in Theory of Computation.</p>
        </div>

        <h4 className="mt-6 font-semibold">5.3 Pigeonhole Principle</h4>
        <p>The Pigeonhole Principle states: if n items are put into m containers with n &gt; m, then at least one container must contain more than one item. This simple principle is surprisingly powerful in formal proofs, especially in automata theory for proving languages are not regular.</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">🔷 Theorem 7: Pigeonhole Application</p>
          <p className="mt-2"><strong>Statement:</strong> If a DFA with k states accepts an infinite language, it must accept some string of length between k and 2k-1.</p>
          <p className="mt-2"><strong>✓ Proof (Using Pigeonhole Principle):</strong></p>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Since L(M) is infinite, there exist arbitrarily long accepted strings.</li>
            <li>Consider an accepted string w of length ≥ k. As M processes w, it visits |w|+1 states (including initial state).</li>
            <li>If |w| ≥ k, then M visits at least k+1 states while processing w.</li>
            <li>But M has only k states! (Pigeonhole: k+1 pigeons, k holes)</li>
            <li>Therefore, some state q must be visited at least twice.</li>
            <li>Write w = xyz where x takes M from q₀ to q, y is the loop from q to q, z takes M from q to an accept state.</li>
            <li>Then xz is also accepted (we can skip the loop), and |xz| &lt; |w|.</li>
            <li>Repeating this process, we find an accepted string of length &lt; k, or we find an accepted string of length in [k, 2k-1] that cannot be shortened further. ∎</li>
          </ol>
        </div>

        <h4 className="mt-6 font-semibold">5.4 Proof by Contradiction in Undecidability</h4>
        <p>Many fundamental results in theory of computation use proof by contradiction to establish undecidability. The canonical example is Turing's proof of the undecidability of the halting problem.</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">💡 Example 13: Halting Problem is Undecidable (Simplified)</p>
          <p className="mt-2"><strong>Theorem:</strong> There is no algorithm that determines whether an arbitrary program halts on arbitrary input.</p>
          <p className="mt-2"><strong>Proof Sketch by Contradiction:</strong></p>
          <p className="mt-2"><strong>Assume:</strong> There exists a program HALT(P, x) that returns true if program P halts on input x, false otherwise.</p>
          <p className="mt-2"><strong>Construct:</strong> A new program PARADOX:</p>
          <div className="bg-white p-3 rounded mt-2">
            <pre className="text-sm">
PARADOX(P):
    if HALT(P, P) == true:
        loop forever  // don't halt
    else:
        return  // halt
            </pre>
          </div>
          <p className="mt-2"><strong>Question:</strong> What does PARADOX(PARADOX) do?</p>
          <p className="mt-2"><strong>Case 1:</strong> If HALT(PARADOX, PARADOX) returns true (meaning PARADOX halts on itself):</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Then PARADOX enters infinite loop (doesn't halt)</li>
            <li>Contradiction! HALT said it halts, but it doesn't.</li>
          </ul>
          <p className="mt-2"><strong>Case 2:</strong> If HALT(PARADOX, PARADOX) returns false (meaning PARADOX doesn't halt on itself):</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Then PARADOX returns (halts)</li>
            <li>Contradiction! HALT said it doesn't halt, but it does.</li>
          </ul>
          <p className="mt-2"><strong>Conclusion:</strong> Both cases lead to contradictions, so our assumption must be false. No such HALT program can exist. ∎</p>
          <p className="mt-2 text-sm italic">This uses diagonalization: PARADOX is defined to do the opposite of what HALT predicts, similar to Cantor's diagonal construction.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>7. Learning Resources & Practice Platforms</h3>
        
        <h4 className="mt-4 font-semibold">7.1 Tutorial Platforms</h4>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li><strong>🌐 GeeksforGeeks:</strong> Best for comprehensive tutorials - Search: "formal proof techniques", "automata proofs"</li>
          <li><strong>📚 JavaTpoint:</strong> Best for step-by-step explanations - Automata Theory, Discrete Mathematics</li>
          <li><strong>📖 TutorialsPoint:</strong> Best for quick reference - Automata Theory, Discrete Math</li>
          <li><strong>🎓 MIT OpenCourseWare:</strong> Best for academic-level content - 18.404J Theory of Computation</li>
          <li><strong>📺 YouTube - Neso Academy:</strong> Best for video lectures with animations</li>
          <li><strong>📺 YouTube - Easy Engineering:</strong> Best for clear visual explanations</li>
        </ul>

        <h4 className="mt-6 font-semibold">7.2 Interactive Practice Platforms</h4>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li><strong>💻 JFLAP:</strong> Interactive automata simulation - Build and test DFAs, NFAs</li>
          <li><strong>🧮 ProofWiki:</strong> Database of formal proofs - ProofWiki.org</li>
          <li><strong>📝 Brilliant.org:</strong> Interactive problem-solving - Logic Course</li>
        </ul>

        <h4 className="mt-6 font-semibold">7.3 Coding Practice Problems</h4>
        <div className="space-y-3 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-3">
            <p className="font-semibold">Problem 1: String Pattern Verification (Easy)</p>
            <p className="text-sm mt-1">Challenge: Verify if a string belongs to language {'{'}0ⁿ1ⁿ | n ≥ 0{'}'}. Write a program and prove its correctness.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use proof by cases. Show your algorithm correctly identifies strings in the language and rejects strings not in the language.</p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-3">
            <p className="font-semibold">Problem 2: Prime Number Proof (Easy)</p>
            <p className="text-sm mt-1">Challenge: Implement primality testing. Prove: "If n &gt; 1 is not divisible by any number from 2 to √n, then n is prime."</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use proof by contradiction. Assume n is composite and derive a contradiction.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p className="font-semibold">Problem 3: Subset Sum Property (Medium)</p>
            <p className="text-sm mt-1">Challenge: Prove: "If a set has n elements, it has 2ⁿ subsets." Implement a function to generate all subsets.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use mathematical induction. Base case n=1, inductive step from n to n+1.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p className="font-semibold">Problem 4: Graph Reachability (Medium)</p>
            <p className="text-sm mt-1">Challenge: Implement DFS/BFS. Prove: "If there's a path from A to B and from B to C, there's a path from A to C."</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Direct proof using path concatenation. Show the transitive property of reachability.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p className="font-semibold">Problem 5: Recursive Sum Formula (Medium)</p>
            <p className="text-sm mt-1">Challenge: Prove and implement: 1 + 2 + 3 + ... + n = n(n+1)/2 using recursion.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Prove correctness by mathematical induction matching your recursive implementation.</p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3">
            <p className="font-semibold">Problem 6: DFA State Minimization (Hard)</p>
            <p className="text-sm mt-1">Challenge: Implement DFA minimization algorithm. Prove: "The minimal DFA is unique up to state renaming."</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use equivalence relations and partitioning. Prove the algorithm terminates and produces minimal DFA.</p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3">
            <p className="font-semibold">Problem 7: Regular Expression Matching (Hard)</p>
            <p className="text-sm mt-1">Challenge: LeetCode #10 - Implement regex matching. Prove your algorithm's correctness.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use structural induction on the regex pattern. Prove each case (literal, *, concatenation) is handled correctly.</p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3">
            <p className="font-semibold">Problem 8: Pumping Lemma Application (Hard)</p>
            <p className="text-sm mt-1">Challenge: Write a program that attempts to verify if L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is regular. Prove it cannot succeed.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use proof by contradiction with the Pumping Lemma. Show why algorithmic verification must fail.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p className="font-semibold">Problem 9: Closure Properties (Medium)</p>
            <p className="text-sm mt-1">Challenge: Given two DFAs, construct a DFA for their union. Prove L(M₁) ∪ L(M₂) = L(M).</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Constructive proof using product construction. Prove by showing string acceptance equivalence.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p className="font-semibold">Problem 10: Contradiction in Logic (Medium)</p>
            <p className="text-sm mt-1">Challenge: Implement a simple SAT solver. Use it to prove statements by showing their negation is unsatisfiable.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Proof by contradiction automated. If ¬P is unsatisfiable, then P must be a tautology.</p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-3">
            <p className="font-semibold">Problem 11: Fibonacci Proof (Easy)</p>
            <p className="text-sm mt-1">Challenge: Prove by strong induction: Every Fibonacci number &gt; 1 is expressible as a product of primes.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Strong induction needed because Fᵢ depends on Fᵢ₋₁ and Fᵢ₋₂.</p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3">
            <p className="font-semibold">Problem 12: Halting Problem Simulation (Hard)</p>
            <p className="text-sm mt-1">Challenge: Write a program that claims to solve the halting problem. Then construct a program that makes it fail.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Implement the diagonal argument. Your contradiction constructor proves halting undecidability.</p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-3">
            <p className="font-semibold">Problem 13: Set Equality Proof (Easy)</p>
            <p className="text-sm mt-1">Challenge: Implement set operations. Prove programmatically: (A ∩ B) ∪ (A ∩ C) = A ∩ (B ∪ C)</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Generate test sets and verify both sides produce identical results. Formal proof uses element-wise membership.</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p className="font-semibold">Problem 14: Transitive Closure (Medium)</p>
            <p className="text-sm mt-1">Challenge: Implement Warshall's algorithm. Prove it correctly computes transitive closure.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Use loop invariant and mathematical induction on k (number of intermediate vertices considered).</p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3">
            <p className="font-semibold">Problem 15: NFA to DFA Correctness (Hard)</p>
            <p className="text-sm mt-1">Challenge: Implement subset construction (NFA→DFA). Prove L(NFA) = L(DFA) for your construction.</p>
            <p className="text-sm mt-1"><strong>Hint:</strong> Constructive proof with induction on string length. Show state correspondence is maintained.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>8. Quick Reference Cheat Sheet</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Statement Type</th>
                <th className="border border-gray-300 px-4 py-2">Recommended Technique</th>
                <th className="border border-gray-300 px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">P → Q (implication)</td>
                <td className="border border-gray-300 px-4 py-2">Direct Proof or Contrapositive</td>
                <td className="border border-gray-300 px-4 py-2">"If L is regular, then L is decidable"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">∀n in ℕ, P(n)</td>
                <td className="border border-gray-300 px-4 py-2">Mathematical Induction</td>
                <td className="border border-gray-300 px-4 py-2">"For all n, 2ⁿ &gt; n"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Something doesn't exist</td>
                <td className="border border-gray-300 px-4 py-2">Proof by Contradiction</td>
                <td className="border border-gray-300 px-4 py-2">"No DFA accepts {'{'}0ⁿ1ⁿ{'}'}"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Something exists</td>
                <td className="border border-gray-300 px-4 py-2">Constructive Proof</td>
                <td className="border border-gray-300 px-4 py-2">"Every NFA has equivalent DFA"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">A = B (set equality)</td>
                <td className="border border-gray-300 px-4 py-2">Mutual Subset Inclusion</td>
                <td className="border border-gray-300 px-4 py-2">"A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Recursive structures</td>
                <td className="border border-gray-300 px-4 py-2">Structural Induction</td>
                <td className="border border-gray-300 px-4 py-2">"Every regex has finite description"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Undecidability</td>
                <td className="border border-gray-300 px-4 py-2">Diagonalization or Reduction</td>
                <td className="border border-gray-300 px-4 py-2">"Halting problem is undecidable"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <p className="font-semibold">🔑 Key Logical Equivalences</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Implication:</strong> P → Q ≡ ¬P ∨ Q ≡ ¬Q → ¬P</li>
            <li><strong>De Morgan:</strong> ¬(P ∧ Q) ≡ ¬P ∨ ¬Q; ¬(P ∨ Q) ≡ ¬P ∧ ¬Q</li>
            <li><strong>Quantifiers:</strong> ¬(∀x P(x)) ≡ ∃x ¬P(x); ¬(∃x P(x)) ≡ ∀x ¬P(x)</li>
            <li><strong>Distribution:</strong> P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">📋 Proof Writing Checklist</p>
          <ul className="list-none mt-2 space-y-1">
            <li>✓ Clearly state what you're proving</li>
            <li>✓ Identify and state all assumptions/hypotheses</li>
            <li>✓ Choose appropriate proof technique</li>
            <li>✓ Define all notation and variables</li>
            <li>✓ Write in complete sentences, not just equations</li>
            <li>✓ Justify each step with a reason</li>
            <li>✓ Mark end of proof with ∎ or QED</li>
            <li>✓ Review for logical gaps or unjustified leaps</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>9. Video Lectures</h3>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li>
            <a 
              href="https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Introduction to Proof Techniques - MIT OpenCourseWare
            </a>
          </li>
          <li>
            <a 
              href="https://www.khanacademy.org/math/algebra-home/alg-series-and-induction" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mathematical Induction - Khan Academy
            </a>
          </li>
          <li>
            <a 
              href="https://www.youtube.com/watch?v=wblW_M_HVQ8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Proof by Contradiction - Neso Academy
            </a>
          </li>
          <li>
            <a 
              href="https://www.geeksforgeeks.org/mathematical-logic-proofs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Formal Proofs in Theory of Computation - GeeksforGeeks
            </a>
          </li>
        </ul>

        <div className="mt-6 space-y-4">
          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/GyFVgJZ0hIs?si=B69Wx97MutvuF1P9" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/wblW_M_HVQ8?si=BgZEOujC_tvSnY_7" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/sRDwsfNDXak?si=xw76G0-pVwFjIalT" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/O3NU5dLDU2Q?si=EN4FRCKoKRjyOPiw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>10. Code Implementations</h3>
        
        <h4 className="mt-4 font-semibold">10.1 Proof Verification System (Python)</h4>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
          <pre className="text-sm">
{`# Formal Proof Verification System
# Implements basic logical inference rules and proof checking

from typing import List, Set, Tuple
from dataclasses import dataclass

# Proposition representation
@dataclass
class Proposition:
    """Represents a logical proposition"""
    statement: str

    def __str__(self) -> str:
        return self.statement

    def __eq__(self, other) -> bool:
        return self.statement == other.statement

    def __hash__(self) -> int:
        return hash(self.statement)

# Implication representation
@dataclass
class Implication:
    """Represents P → Q"""
    antecedent: Proposition  # P
    consequent: Proposition  # Q

    def __str__(self) -> str:
        return f"({self.antecedent} → {self.consequent})"

# Proof system class
class ProofSystem:
    """Implements basic inference rules for formal proofs"""

    def __init__(self):
        self.axioms: Set[Proposition] = set()
        self.implications: List[Implication] = []
        self.proven: Set[Proposition] = set()
        self.proof_steps: List[str] = []

    def add_axiom(self, statement: str) -> None:
        """Add an axiom (accepted without proof)"""
        prop = Proposition(statement)
        self.axioms.add(prop)
        self.proven.add(prop)
        self.proof_steps.append(f"Axiom: {statement}")
        print(f"✓ Added axiom: {statement}")

    def add_implication(self, antecedent: str, consequent: str) -> None:
        """Add an implication rule P → Q"""
        impl = Implication(Proposition(antecedent), Proposition(consequent))
        self.implications.append(impl)
        self.proof_steps.append(f"Rule: {impl}")
        print(f"✓ Added rule: {impl}")

    def modus_ponens(self, p: str, p_implies_q: Tuple[str, str]) -> bool:
        """
        Apply Modus Ponens: From P and P → Q, deduce Q
        Returns True if successful, False otherwise
        """
        prop_p = Proposition(p)
        antecedent, consequent = p_implies_q

        # Check if P is already proven
        if prop_p not in self.proven:
            print(f"✗ Cannot apply Modus Ponens: '{p}' not yet proven")
            return False

        # Check if P → Q exists in implications
        impl = Implication(Proposition(antecedent), Proposition(consequent))
        if impl not in self.implications:
            print(f"✗ Implication {impl} does not exist")
            return False

        # Check if antecedent matches P
        if antecedent != p:
            print(f"✗ Antecedent mismatch")
            return False

        # Apply Modus Ponens - deduce Q
        prop_q = Proposition(consequent)
        self.proven.add(prop_q)
        step = f"Modus Ponens: From '{p}' and '{impl}', deduce '{consequent}'"
        self.proof_steps.append(step)
        print(f"✓ {step}")
        return True

    def hypothetical_syllogism(self, impl1: Tuple[str, str],
                                   impl2: Tuple[str, str]) -> bool:
        """
        Apply Hypothetical Syllogism: From P → Q and Q → R, deduce P → R
        """
        p, q1 = impl1
        q2, r = impl2

        if q1 != q2:
            print(f"✗ Cannot chain implications")
            return False

        # Create new implication P → R
        new_impl = Implication(Proposition(p), Proposition(r))
        self.implications.append(new_impl)
        step = f"Hypothetical Syllogism: From '({p} → {q1})' and '({q2} → {r})', deduce '({p} → {r})'"
        self.proof_steps.append(step)
        print(f"✓ {step}")
        return True

    def is_proven(self, statement: str) -> bool:
        """Check if a statement has been proven"""
        return Proposition(statement) in self.proven

    def print_proof(self) -> None:
        """Print the complete proof"""
        print("\n========== COMPLETE PROOF ==========")
        for i, step in enumerate(self.proof_steps, 1):
            print(f"{i}. {step}")
        print("====================================\n")

# Example: Proving language hierarchy
def language_hierarchy_proof():
    """Prove: If L is regular, then L is recursive"""
    print("\n📐 PROOF: Regular Languages are Recursive\n")

    proof = ProofSystem()

    # Add axioms and rules
    proof.add_axiom("L is regular")
    proof.add_implication("L is regular", "L is context-free")
    proof.add_implication("L is context-free", "L is recursive")

    # Apply inference rules
    print("\nApplying inference rules:\n")
    proof.modus_ponens("L is regular", ("L is regular", "L is context-free"))
    proof.modus_ponens("L is context-free", ("L is context-free", "L is recursive"))

    # Check conclusion
    if proof.is_proven("L is recursive"):
        print("\n✓ CONCLUSION: Successfully proved 'L is recursive' ∎")
    else:
        print("\n✗ Failed to prove conclusion")

    proof.print_proof()

# Run the proof
if __name__ == "__main__":
    language_hierarchy_proof()`}
          </pre>
        </div>

        <h4 className="mt-6 font-semibold">10.2 Mathematical Induction Verifier</h4>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
          <pre className="text-sm">
{`# Mathematical Induction Proof Verifier
# Verifies inductive proofs programmatically

from typing import Callable

class InductionProver:
    """Verifies mathematical induction proofs"""

    @staticmethod
    def verify_base_case(predicate: Callable[[int], bool],
                           base: int) -> bool:
        """Verify the base case P(base)"""
        result = predicate(base)
        print(f"Base Case P({base}): {'✓ True' if result else '✗ False'}")
        return result

    @staticmethod
    def verify_inductive_step(predicate: Callable[[int], bool],
                               k_values: range) -> bool:
        """
        Verify inductive step: If P(k) is true, then P(k+1) is true
        Tests this for multiple values of k
        """
        print("\nInductive Step Verification:")
        all_valid = True

        for k in k_values:
            pk = predicate(k)
            pk_plus_1 = predicate(k + 1)

            # Check implication: P(k) → P(k+1)
            implication = (not pk) or pk_plus_1
            status = "✓" if implication else "✗"

            print(f"  k={k}: P({k})={pk}, P({k+1})={pk_plus_1}, P(k)→P(k+1): {status}")
            all_valid = all_valid and implication

        return all_valid

# Example 1: Prove sum formula 1+2+...+n = n(n+1)/2
def sum_formula_example():
    print("\n📐 PROOF: 1 + 2 + 3 + ... + n = n(n+1)/2\n")

    def predicate(n: int) -> bool:
        """P(n): Sum of 1 to n equals n(n+1)/2"""
        actual_sum = sum(range(1, n + 1))
        formula_result = n * (n + 1) // 2
        return actual_sum == formula_result

    prover = InductionProver()

    # Verify base case
    base_valid = prover.verify_base_case(predicate, 1)

    # Verify inductive step for k = 1 to 10
    inductive_valid = prover.verify_inductive_step(predicate, range(1, 11))

    if base_valid and inductive_valid:
        print("\n✓ PROOF COMPLETE: By mathematical induction, formula holds for all n ≥ 1 ∎")
    else:
        print("\n✗ Proof incomplete or invalid")

# Run example
if __name__ == "__main__":
    sum_formula_example()`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Module1_1;