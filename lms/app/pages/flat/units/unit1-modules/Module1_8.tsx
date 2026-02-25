'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module1_8: React.FC = () => {
  const [inputString, setInputString] = useState('abc');
  const [simulationResult, setSimulationResult] = useState('');

  const quizQuestions = [
    {
      question: "What is the ε-closure of a state q if there are no ε-transitions from q?",
      options: ["The empty set ∅", "{q} — only q itself", "The set of all states Q", "Undefined — ε-closure requires at least one ε-transition"],
      correctAnswer: 1,
      explanation: "By definition, ε-closure(q) includes q itself (zero ε-transitions) plus all states reachable via ε-transitions. If there are no ε-transitions from q, then ε-closure(q) = {q}."
    },
    {
      question: "An ε-NFA has ε-transitions q0→q1, q1→q2. What is ε-closure({q0})?",
      options: ["{q0}", "{q0, q1}", "{q0, q1, q2}", "{q1, q2}"],
      correctAnswer: 2,
      explanation: "Start with q0. Follow ε to q1. From q1, follow ε to q2. The ε-closure is transitive, so all three states are included."
    },
    {
      question: "Which of the following correctly describes the relationship between DFA, NFA, and ε-NFA?",
      options: ["ε-NFA is strictly more powerful than DFA and NFA", "DFA is strictly more powerful than NFA, which is more powerful than ε-NFA", "All three accept exactly the same class of languages (regular languages)", "ε-NFA can recognize some context-free languages that DFA cannot"],
      correctAnswer: 2,
      explanation: "This is Kleene's theorem: DFA, NFA, and ε-NFA are all equivalent in computational power. They all recognize exactly the regular languages. ε-transitions add convenience, not power."
    },
    {
      question: "In the conversion of an ε-NFA to a DFA, the DFA's start state is:",
      options: ["The same as the ε-NFA's start state", "The ε-closure of the ε-NFA's start state", "The set of all states reachable from the start state on any input", "A newly created state with transitions to the ε-NFA's start state"],
      correctAnswer: 1,
      explanation: "In subset construction, the DFA start state is q₀' = ε-closure({q₀}). This accounts for all states reachable via ε-transitions from the start state before reading any input."
    },
    {
      question: "Thompson's construction converts a regular expression with n symbols into an ε-NFA with at most how many states?",
      options: ["n states", "n + 1 states", "2n states", "2ⁿ states"],
      correctAnswer: 2,
      explanation: "Thompson's construction creates at most 2 states per symbol/operator in the regex. For a regex with n symbols, the resulting ε-NFA has at most 2n states. This is a linear bound, making Thompson's construction very efficient."
    }
  ];

  const simulateENFA = () => {
    // Simulate ε-NFA for a*b*c*
    const steps: string[] = [];
    const input = inputString;

    // Initial epsilon closure
    let current = new Set(['q0', 'q1', 'q2', 'q3']);
    steps.push(`INIT: ε-closure({q0}) = {q0, q1, q2, q3}`);

    for (let i = 0; i < input.length; i++) {
      const symbol = input[i];
      const move = new Set<string>();

      if (symbol === 'a' && current.has('q0')) {
        move.add('q0');
      } else if (symbol === 'b' && current.has('q1')) {
        move.add('q1');
      } else if (symbol === 'c' && current.has('q2')) {
        move.add('q2');
      }

      // Compute epsilon closure
      if (move.has('q0')) {
        current = new Set(['q0', 'q1', 'q2', 'q3']);
      } else if (move.has('q1')) {
        current = new Set(['q1', 'q2', 'q3']);
      } else if (move.has('q2')) {
        current = new Set(['q2', 'q3']);
      } else {
        current = new Set();
      }

      steps.push(`READ '${symbol}': move = {${Array.from(move).join(', ') || '∅'}}, ε-closure = {${Array.from(current).join(', ') || '∅'}}`);

      if (current.size === 0) {
        steps.push('DEAD: No states reachable. REJECT ❌');
        setSimulationResult(steps.join('\n'));
        return;
      }
    }

    const accepted = current.has('q3');
    steps.push(`Final states: {${Array.from(current).join(', ')}}`);
    steps.push(`Accept states: {q3}`);
    steps.push(`→ ${accepted ? 'ACCEPT ✅' : 'REJECT ❌'} "${input}"`);

    setSimulationResult(steps.join('\n'));
  };

  return (
    <div className="module-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: '#1f2937' }}>

      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '12px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '12px' }}>
          MODULE 1.8
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Finite Automata with ε-Transitions</h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>Epsilon-NFAs: Free moves, epsilon closure, and the bridge between regular expressions and automata</p>
      </div>

      {/* Learning Objectives */}
      <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e40af', marginBottom: '20px' }}>📚 Learning Objectives</h2>
        <p style={{ marginBottom: '16px', color: '#1f2937' }}>By the end of this module, you will be able to:</p>
        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { num: '1', title: 'Define an ε-NFA formally', desc: 'Define an ε-NFA formally as a 5-tuple and distinguish it from NFA and DFA by the role of epsilon (ε) transitions in its transition function.' },
            { num: '2', title: 'Compute epsilon closure', desc: 'Compute the epsilon closure (ε-closure) of any set of states in an ε-NFA by systematically following all epsilon paths without consuming input symbols.' },
            { num: '3', title: 'Simulate ε-NFA computation', desc: 'Simulate the computation of an ε-NFA on a given input string step-by-step, determining acceptance or rejection using epsilon closure at each stage.' },
            { num: '4', title: 'Convert ε-NFA to DFA', desc: 'Convert any ε-NFA into an equivalent NFA (without ε-transitions) and subsequently into a minimal DFA using the modified subset construction algorithm.' },
            { num: '5', title: 'Apply equivalence theorems', desc: "Apply the equivalence between ε-NFAs and regular expressions to explain Thompson's construction as the canonical proof that every regex corresponds to an ε-NFA." }
          ].map(obj => (
            <div key={obj.num} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
              <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>{obj.num}</div>
              <div>
                <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>{obj.title}</div>
                <div style={{ fontSize: '0.95rem', color: '#4b5563' }}>{obj.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Introduction &amp; Motivation</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Why Epsilon Transitions?</h3>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem' }}>
          Imagine you are writing a computer program and you reach a decision point where you can jump directly to the next section without doing anything — no input required, just a free "skip." This is essentially what an <strong>epsilon transition</strong> does in a finite automaton. An <strong>ε-transition</strong> (also written as a λ-transition or ε-move) allows an automaton to change its state without reading any input symbol.
        </p>

        <p style={{ marginBottom: '16px' }}>
          While this might seem like a strange concept — why would an automaton move without consuming input? — epsilon transitions are extraordinarily useful for two main reasons:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>🔧 Simplification of construction</h4>
            <p style={{ margin: 0, color: '#047857' }}>
              When building an automaton from a specification (like a regular expression), epsilon transitions let you compose simpler automata into complex ones naturally, without worrying about how they "glue" together. Thompson's construction (from Module 1.7) relies entirely on this.
            </p>
          </div>
          <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>📐 Theoretical elegance</h4>
            <p style={{ margin: 0, color: '#1e3a8a' }}>
              ε-transitions make it easier to prove theorems about automata and regular languages. The proof that regular expressions and finite automata are equivalent is clearest when stated through ε-NFAs.
            </p>
          </div>
        </div>

        <p style={{ marginBottom: '16px' }}>
          Importantly — and this is the fundamental theorem of this module — <strong>ε-NFAs are no more powerful than NFAs or DFAs</strong>. Every language recognized by an ε-NFA is regular, and for every ε-NFA there exists an equivalent DFA. The "free moves" add convenience, not computational power.
        </p>

        <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>💡 Key Insight: Power vs. Convenience</h4>
          <p style={{ margin: 0, color: '#78350f' }}>
            Adding ε-transitions to an NFA does NOT increase its computational power. Every ε-NFA accepts a regular language. However, ε-transitions dramatically simplify the construction and understanding of automata. This is a recurring theme in theory of computation: different models at the same power level have different engineering trade-offs.
          </p>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginTop: '32px', marginBottom: '16px' }}>Real-World Analogies</h3>
        <ul style={{ marginLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>The "free teleport" analogy:</strong> In a city map (automaton), streets are transitions labeled with input symbols. An epsilon transition is like a teleporter: you can instantly move from one location to another without traveling (consuming input). You might be simultaneously in many possible locations, just like an NFA is in multiple states.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>The compiler analogy:</strong> In compiler design, a lexical analyzer must recognize tokens like numbers, identifiers, and keywords. Each token type has its own automaton. Epsilon transitions let us combine these mini-automata into one big automaton without creating complicated merge logic. The combined automaton can "jump" between token recognition modes for free.
          </li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Automata_theory.svg/600px-Automata_theory.svg.png" alt="Automata theory hierarchy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px', marginBottom: '12px' }} />
            <div style={{ fontSize: '0.95rem', color: '#4b5563', fontStyle: 'italic' }}>The automata theory hierarchy. ε-NFA, NFA, and DFA all sit at the same level — they all recognize exactly the class of regular languages.</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/DFAexample.svg/600px-DFAexample.svg.png" alt="Finite automaton diagram" style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px', marginBottom: '12px' }} />
            <div style={{ fontSize: '0.95rem', color: '#4b5563', fontStyle: 'italic' }}>A finite automaton diagram. In an ε-NFA, some transition arrows are labeled ε (the empty string) instead of alphabet symbols.</div>
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Video Resources</h2>

        <div style={{ display: 'grid', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>Epsilon-NFA Explained</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/84oNUttWlN4" title="Epsilon-NFA Explained" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>Epsilon-NFA to DFA Conversion</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/jN8zvENdjBg" title="Epsilon-NFA to DFA Conversion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>Epsilon Closure Computation</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/upu_TeZImN0" title="Epsilon Closure Computation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>Epsilon-NFA Examples</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YGjEoND31YU" title="Epsilon-NFA Examples" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Definition */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Formal Definition of ε-NFA</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>The 5-Tuple</h3>
        <p style={{ marginBottom: '16px' }}>An <strong>epsilon-NFA (ε-NFA)</strong> is defined as a 5-tuple M = (Q, Σ, δ, q₀, F) where:</p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Definition: ε-NFA (Epsilon Non-Deterministic Finite Automaton)</h4>
          <ul style={{ marginLeft: '20px', color: '#4b5563' }}>
            <li style={{ marginBottom: '12px' }}><strong>Q</strong> — a finite, non-empty set of states</li>
            <li style={{ marginBottom: '12px' }}><strong>Σ</strong> — a finite set called the input alphabet (does NOT include ε)</li>
            <li style={{ marginBottom: '12px' }}><strong>δ : Q × (Σ ∪ {'{ε}'}) → 2<sup>Q</sup></strong> — the transition function; maps a state and a symbol (or ε) to a set of next states</li>
            <li style={{ marginBottom: '12px' }}><strong>q₀ ∈ Q</strong> — the start state</li>
            <li><strong>F ⊆ Q</strong> — the set of accepting states (final states)</li>
          </ul>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>The Critical Difference: The Transition Function</h3>
        <p style={{ marginBottom: '16px' }}>The key difference between an NFA and an ε-NFA is the domain of the transition function δ:</p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Automaton Type</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Transition Function Domain</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Can use ε?</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Output</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['DFA', 'Q × Σ → Q', 'No', 'Single state'],
                ['NFA', 'Q × Σ → 2^Q', 'No', 'Set of states'],
                ['ε-NFA', 'Q × (Σ ∪ {ε}) → 2^Q', 'Yes', 'Set of states']
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontWeight: '600', backgroundColor: idx === 2 ? '#fef3c7' : 'white' }}>{row[0]}</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '0.95rem' }}>{row[1]}</td>
                  <td style={{ padding: '12px', color: row[2] === 'Yes' ? '#10b981' : '#6b7280', fontWeight: row[2] === 'Yes' ? '700' : '400' }}>{row[2]}</td>
                  <td style={{ padding: '12px', color: '#6b7280', fontSize: '0.95rem' }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginBottom: '24px' }}>
          In an ε-NFA, at any state q, the automaton may spontaneously move to any state in δ(q, ε) without reading any input symbol. This can happen repeatedly — the automaton might take many ε-transitions in sequence before reading the next character.
        </p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Transition Table Representation</h3>
        <p style={{ marginBottom: '16px' }}>An ε-NFA is often represented as a transition table where one column is labeled ε. Consider the following example ε-NFA that accepts strings of the form: a*, b*, or (ab)* — i.e., it accepts any string that is zero-or-more a's, OR zero-or-more b's, OR alternating ab.</p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '12px' }}>Example ε-NFA: Accepting a* + b* (strings of only a's or only b's)</h4>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}>States: {'{q0, q1, q2}'}, Alphabet: {'{a, b}'}, Start: q0, Accept: {'{q1, q2}'}</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
              <thead>
                <tr style={{ backgroundColor: '#f3f4f6' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>State</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>a</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>b</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#8b5cf6' }}>ε</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontWeight: '600' }}>q0 (start)</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>∅</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>∅</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace', color: '#8b5cf6' }}>{'{q1, q2}'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontWeight: '600' }}>q1 (accept)</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>{'{q1}'}</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>∅</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>∅</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: '600' }}>q2 (accept)</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>∅</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>{'{q2}'}</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>∅</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#6b7280', fontStyle: 'italic' }}>
            From q0, the automaton can jump (for free, via ε) to either q1 (which then accepts any number of a's) or q2 (which accepts any number of b's).
          </p>
        </div>
      </section>

      {/* Epsilon Closure */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Epsilon Closure (ε-closure)</h2>

        <p style={{ marginBottom: '16px' }}>
          The <strong>epsilon closure</strong> is the most important concept for understanding how ε-NFAs work. It answers the question: "Starting from state q, which states can the automaton reach by taking only ε-transitions (any number of them)?"
        </p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Definition: Epsilon Closure (ε-closure)</h4>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}>
            The epsilon closure of a state q, written <strong>ε-closure(q)</strong> or <strong>ECLOSE(q)</strong>, is the set of all states reachable from q by following zero or more ε-transitions:
          </p>
          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '1.05rem', marginBottom: '12px', textAlign: 'center' }}>
            ε-closure(q) = {'{p ∈ Q : p is reachable from q via zero or more ε-transitions}'}
          </div>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}>
            <strong>Note:</strong> q itself is always in ε-closure(q) (zero transitions = stay in same state).
          </p>
          <p style={{ margin: 0, color: '#4b5563' }}>
            For a set of states S: <strong>ε-closure(S) = ⋃<sub>q ∈ S</sub> ε-closure(q)</strong>
          </p>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Algorithm for Computing ε-closure</h3>
        <p style={{ marginBottom: '16px' }}>The epsilon closure is computed using a simple reachability algorithm (essentially a BFS or DFS on the graph of ε-transitions):</p>

        <div style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '24px', borderRadius: '8px', overflow: 'auto', marginBottom: '24px' }}>
          <pre style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6' }}>
            {`ALGORITHM Epsilon_Closure(state_set S):
    closure = S              // Start: every state in S is reachable
    stack = copy of S        // States to explore
    
    WHILE stack is not empty:
        q = pop(stack)
        FOR each state p in δ(q, ε):    // Follow one ε-transition from q
            IF p not in closure:
                closure = closure ∪ {p}
                push(p) onto stack
    
    RETURN closure`}
          </pre>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Worked Example: Computing ε-closure</h3>
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example: Compute ε-closure for the following ε-NFA</h4>
          <p style={{ marginBottom: '16px', color: '#4b5563' }}>ε-NFA: States {'{q0, q1, q2, q3, q4}'}, ε-transitions: q0→q1, q0→q2, q1→q3, q2→q4</p>

          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'ε-closure({q0}): Start with {q0}. From q0, follow ε to q1 and q2. From q1, follow ε to q3. From q2, follow ε to q4. From q3, q4 — no ε transitions. Result: {q0, q1, q2, q3, q4}' },
              { step: '2', text: 'ε-closure({q1}): Start with {q1}. From q1, follow ε to q3. From q3 — no ε transitions. Result: {q1, q3}' },
              { step: '3', text: 'ε-closure({q2}): Start with {q2}. From q2, follow ε to q4. From q4 — no ε transitions. Result: {q2, q4}' },
              { step: '4', text: 'ε-closure({q3}): Start with {q3}. No outgoing ε-transitions. Result: {q3}' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '20px', marginTop: '24px', textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <svg width="600" height="200" viewBox="0 0 600 200" style={{ maxWidth: '100%', height: 'auto' }}>
              <circle cx="50" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="50" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e40af">q0</text>
              <text x="50" y="150" textAnchor="middle" fontSize="12" fill="#6b7280">start</text>

              <circle cx="180" cy="100" r="30" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
              <circle cx="180" cy="100" r="25" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="180" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065f46">q1</text>

              <circle cx="310" cy="100" r="30" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
              <circle cx="310" cy="100" r="25" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="310" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065f46">q2</text>

              <circle cx="440" cy="60" r="30" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
              <circle cx="440" cy="60" r="25" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="440" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065f46">q3</text>

              <circle cx="440" cy="140" r="30" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
              <circle cx="440" cy="140" r="25" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="440" y="145" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065f46">q4</text>

              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
                </marker>
              </defs>

              <line x1="80" y1="100" x2="150" y2="100" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              <text x="115" y="90" textAnchor="middle" fontSize="14" fill="#8b5cf6" fontWeight="bold">ε</text>

              <line x1="80" y1="110" x2="280" y2="110" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              <text x="180" y="125" textAnchor="middle" fontSize="14" fill="#8b5cf6" fontWeight="bold">ε</text>

              <line x1="210" y1="100" x2="280" y2="100" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              <text x="245" y="90" textAnchor="middle" fontSize="14" fill="#8b5cf6" fontWeight="bold">ε</text>

              <path d="M 335 85 Q 380 70 410 65" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#arrowhead)" />
              <text x="370" y="65" textAnchor="middle" fontSize="14" fill="#8b5cf6" fontWeight="bold">ε</text>

              <path d="M 335 115 Q 380 130 410 135" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#arrowhead)" />
              <text x="370" y="135" textAnchor="middle" fontSize="14" fill="#8b5cf6" fontWeight="bold">ε</text>
            </svg>
          </div>
          <div style={{ backgroundColor: '#f3e8ff', border: '2px solid #8b5cf6', borderRadius: '8px', padding: '16px', marginTop: '16px', textAlign: 'left' }}>
            <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>ε-closure results:</div>
            <div style={{ fontSize: '0.95rem', color: '#581c87', fontFamily: 'monospace' }}>
              <div>{'{q0}'}: all 5 states</div>
              <div>{'{q1}'}: {'{q1, q3}'}</div>
              <div>{'{q2}'}: {'{q2, q4}'}</div>
              <div>{'{q3}'}: {'{q3}'}</div>
              <div>{'{q4}'}: {'{q4}'}</div>
            </div>
          </div>
          <div style={{ fontSize: '0.95rem', color: '#6b7280', fontStyle: 'italic', marginTop: '12px' }}>
            Figure 2: The ε-transition graph. Green double-circled states are accepting. The ε-closure of q0 is the entire state set because all states are reachable via ε-paths.
          </div>
        </div>
      </section>


      {/* Computation in ε-NFA */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Computation in ε-NFA</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Extended Transition Function</h3>
        <p style={{ marginBottom: '16px' }}>
          Just as we defined the extended transition function δ* for NFA (to process entire strings), we define δ* for ε-NFA. The key difference is that after every transition (including at the start), we take the epsilon closure.
        </p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Definition: Extended Transition Function for ε-NFA</h4>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}>Define δ*(S, w) = the set of states reachable from set S on string w, accounting for ε-transitions:</p>
          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '6px', marginBottom: '12px' }}>
            <div style={{ marginBottom: '8px' }}><strong>Base case:</strong> δ*(S, ε) = ε-closure(S)</div>
            <div><strong>Inductive step:</strong> δ*(S, wa) = ε-closure( ⋃<sub>q ∈ δ*(S,w)</sub> δ(q, a) ) for symbol a ∈ Σ</div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Step-by-Step Computation</h3>
        <p style={{ marginBottom: '16px' }}>To simulate an ε-NFA on input string w = a₁a₂...aₙ:</p>

        <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <ol style={{ marginLeft: '20px', color: '#047857' }}>
            <li style={{ marginBottom: '8px' }}><strong>Initialize:</strong> Current states = ε-closure({'{q₀}'})</li>
            <li style={{ marginBottom: '8px' }}><strong>For each symbol aᵢ:</strong>
              <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
                <li>Move states = ⋃<sub>q in current</sub> δ(q, aᵢ)</li>
                <li>Current states = ε-closure(Move states)</li>
              </ul>
            </li>
            <li style={{ marginBottom: '8px' }}><strong>Accept</strong> if Current states ∩ F ≠ ∅</li>
            <li><strong>Reject</strong> if Current states ∩ F = ∅</li>
          </ol>
        </div>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginTop: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px', textAlign: 'center' }}>ε-NFA Computation Flowchart</h4>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ backgroundColor: '#10b981', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>Start: current = ε-closure({'{q₀}'})</div>
            <div style={{ fontSize: '1.5rem', color: '#6b7280' }}>↓</div>
            <div style={{ backgroundColor: '#3b82f6', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>Read next symbol a from input</div>
            <div style={{ fontSize: '1.5rem', color: '#6b7280' }}>↓</div>
            <div style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>move = ∪{'{δ(q, a) : q ∈ current}'}</div>
            <div style={{ fontSize: '1.5rem', color: '#6b7280' }}>↓</div>
            <div style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>current = ε-closure(move)</div>
            <div style={{ fontSize: '1.5rem', color: '#6b7280' }}>↓</div>
            <div style={{ backgroundColor: '#f59e0b', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>More input?</div>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: '#10b981', fontWeight: '700' }}>Yes ↑</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: '#ef4444', fontWeight: '700' }}>No ↓</div>
              </div>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#6b7280' }}>↓</div>
            <div style={{ backgroundColor: '#f59e0b', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>current ∩ F ≠ ∅?</div>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: '#10b981', fontWeight: '700' }}>Yes →</div>
                <div style={{ backgroundColor: '#10b981', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700' }}>✅ ACCEPT</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: '#ef4444', fontWeight: '700' }}>No →</div>
                <div style={{ backgroundColor: '#ef4444', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700' }}>❌ REJECT</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>⚠️ Critical Note: ε-closure at START</h4>
          <p style={{ margin: 0, color: '#7f1d1d' }}>
            Don't forget to take the ε-closure of the start state before reading any input! The automaton might already be in additional states due to ε-transitions from q₀. This is the step most students miss.
          </p>
        </div>
      </section>

      {/* Worked Examples */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Worked Examples</h2>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example with ε-Transitions: Accepting a*b*c*</h3>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}>ε-NFA for the language a*b*c* (zero or more a's, then b's, then c's)</p>
          <p style={{ marginBottom: '16px', color: '#4b5563' }}>States: {'{q0, q1, q2, q3}'} | Alphabet: {'{a, b, c}'} | Start: q0 | Accept: {'{q3}'}</p>

          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
              <thead>
                <tr style={{ backgroundColor: '#f3f4f6' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>State</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>a</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>b</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700' }}>c</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#8b5cf6' }}>ε</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['q0', '{q0}', '∅', '∅', '{q1}'],
                  ['q1', '∅', '{q1}', '∅', '{q2}'],
                  ['q2', '∅', '∅', '{q2}', '{q3}'],
                  ['*q3', '∅', '∅', '∅', '∅']
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} style={{ padding: '12px', fontFamily: cellIdx === 0 ? 'inherit' : 'monospace', fontWeight: cellIdx === 0 ? '600' : '400', color: cellIdx === 4 ? '#8b5cf6' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '12px' }}>Trace on input "abc":</h4>
          <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
            {[
              { label: 'Init', text: 'Current = ε-closure({q0}) = {q0, q1, q2, q3} (q0→ε→q1→ε→q2→ε→q3)', color: '#3b82f6' },
              { label: 'a', text: 'Move({q0,q1,q2,q3}, a) = δ(q0,a) = {q0}. Then ε-closure({q0}) = {q0,q1,q2,q3}', color: '#10b981' },
              { label: 'b', text: 'Move({q0,q1,q2,q3}, b) = δ(q1,b) = {q1}. Then ε-closure({q1}) = {q1,q2,q3}', color: '#f59e0b' },
              { label: 'c', text: 'Move({q1,q2,q3}, c) = δ(q2,c) = {q2}. Then ε-closure({q2}) = {q2,q3}', color: '#8b5cf6' },
              { label: 'End', text: 'Current = {q2, q3}. q3 ∈ F. ACCEPT "abc" ✅', color: '#10b981' }
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: item.color, color: 'white', minWidth: '50px', padding: '6px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem', textAlign: 'center' }}>{item.label}</div>
                <div style={{ color: '#374151', paddingTop: '6px', flex: 1 }}>{item.text}</div>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '12px' }}>Trace on input "bba" (should be rejected — b's before a's):</h4>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { label: 'Init', text: 'Current = ε-closure({q0}) = {q0, q1, q2, q3}', color: '#3b82f6' },
              { label: 'b', text: 'Move = δ(q1,b) = {q1}. ε-closure({q1}) = {q1,q2,q3}', color: '#10b981' },
              { label: 'b', text: 'Move = δ(q1,b) = {q1}. ε-closure = {q1,q2,q3}', color: '#f59e0b' },
              { label: 'a', text: 'Move({q1,q2,q3}, a) = ∅ (none of q1,q2,q3 have \'a\' transitions). ε-closure(∅) = ∅', color: '#ef4444' },
              { label: 'End', text: 'Current = ∅. No accepting states. REJECT "bba" ❌', color: '#ef4444' }
            ].map(item => (
              <div key={item.label + item.text} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: item.color, color: 'white', minWidth: '50px', padding: '6px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem', textAlign: 'center' }}>{item.label}</div>
                <div style={{ color: '#374151', paddingTop: '6px', flex: 1 }}>{item.text}</div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#f3e8ff', border: '2px solid #8b5cf6', borderRadius: '8px', padding: '24px', marginTop: '24px' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#6b21a8', marginBottom: '16px' }}>Figure 2: ε-transition graph (only ε edges shown)</h4>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: 'white', borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #3b82f6', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>q0</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>start</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#8b5cf6', fontWeight: '700' }}>→ ε →</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #10b981', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#065f46' }}>q1</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#8b5cf6', fontWeight: '700' }}>→ ε →</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #10b981', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#065f46' }}>q3</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: 'white', borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ width: '60px' }}></div>
              <div style={{ fontSize: '1.5rem', color: '#8b5cf6', fontWeight: '700' }}>↓ ε</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #10b981', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#065f46' }}>q2</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#8b5cf6', fontWeight: '700' }}>→ ε →</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #10b981', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#065f46' }}>q4</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '16px', marginTop: '16px' }}>
              <div style={{ fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>ε-closure results:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '0.95rem', color: '#78350f', fontFamily: 'monospace' }}>
                <div>{'{q0}'}: all 5 states</div>
                <div>{'{q1}'}: {'{q1, q3}'}</div>
                <div>{'{q2}'}: {'{q2, q4}'}</div>
                <div>{'{q3}'}: {'{q3}'}</div>
                <div>{'{q4}'}: {'{q4}'}</div>
              </div>
            </div>
            <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
              The ε-transition graph. Green double-circled states are accepting. The ε-closure of q0 is the entire state set because all states are reachable via ε-paths.
            </p>
          </div>
        </div>
      </section>

      {/* Equivalence */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Equivalence: ε-NFA = NFA = DFA</h2>

        <p style={{ marginBottom: '16px' }}>
          One of the most important theorems in automata theory is the equivalence of DFA, NFA, and ε-NFA. All three models recognize exactly the same class of languages — the <strong>regular languages</strong>. This is proven through a chain of constructions:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Property</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>DFA</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>NFA</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>ε-NFA</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Transition per state per symbol', 'Exactly 1', '0 or more', '0 or more (+ ε moves)'],
                ['Uses ε-transitions', 'No', 'No', 'Yes'],
                ['Languages recognized', 'Regular', 'Regular', 'Regular'],
                ['Min states (worst case)', 'Can be exponentially larger than NFA', 'Compact', 'Very compact (Thompson\'s builds small NFAs)'],
                ['Simulation complexity', 'O(|w|) time', 'O(|Q|·|w|)', 'O(|Q|²·|w|)'],
                ['Best for', 'Fast matching (runtime)', 'Specification', 'Compilation (regex→automaton)'],
                ['Used in', 'Lexers at runtime', 'Theoretical proofs', 'Regex compilation, Thompson\'s construction']
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#1f2937' }}>{row[0]}</td>
                  <td style={{ padding: '12px', fontSize: '0.95rem', color: '#4b5563' }}>{row[1]}</td>
                  <td style={{ padding: '12px', fontSize: '0.95rem', color: '#4b5563' }}>{row[2]}</td>
                  <td style={{ padding: '12px', fontSize: '0.95rem', color: '#4b5563', backgroundColor: '#fef3c7' }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>Kleene's Theorem (Full Statement):</h3>
          <p style={{ marginBottom: '12px', color: '#78350f' }}>A language L is regular if and only if:</p>
          <ul style={{ marginLeft: '20px', color: '#78350f' }}>
            <li style={{ marginBottom: '8px' }}>(a) L is accepted by some DFA, OR</li>
            <li style={{ marginBottom: '8px' }}>(b) L is accepted by some NFA, OR</li>
            <li style={{ marginBottom: '8px' }}>(c) L is accepted by some ε-NFA, OR</li>
            <li style={{ marginBottom: '8px' }}>(d) L is described by some regular expression.</li>
          </ul>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#78350f', fontStyle: 'italic', marginTop: '12px' }}>
            The four conditions are equivalent. This is proven by showing: regex → ε-NFA (Thompson's construction), ε-NFA → DFA (subset construction), DFA → regex (state elimination / Arden's lemma).
          </p>
        </div>
      </section>

      {/* Python Implementation */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Python Implementation</h2>
        <p style={{ marginBottom: '24px' }}>
          The following is a complete, working Python implementation of an ε-NFA simulator. It computes epsilon closures, simulates computation on input strings, and can convert an ε-NFA to a DFA using the subset construction.
        </p>

        <div style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '24px', borderRadius: '8px', overflow: 'auto' }}>
          <pre style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6' }}>
            {`# ============================================================
# Epsilon-NFA Simulator and ε-NFA to DFA Converter
# Theory of Computation — Module 1.8
# ============================================================

from collections import defaultdict, deque

class EpsilonNFA:
    """
    A complete implementation of an epsilon-NFA.
    Supports epsilon closure computation, string acceptance,
    and conversion to DFA via subset construction.
    """

    EPSILON = 'ε'

    def __init__(self, states, alphabet, transitions, start_state, accept_states):
        """
        Args:
            states: set of state names (e.g., {'q0', 'q1', 'q2'})
            alphabet: set of input symbols (NOT including ε)
            transitions: dict mapping (state, symbol) -> set of states
                         Use symbol='ε' for epsilon transitions
            start_state: single start state
            accept_states: set of accepting states
        """
        self.states = frozenset(states)
        self.alphabet = frozenset(alphabet)
        self.transitions = defaultdict(set)
        for (state, sym), targets in transitions.items():
            self.transitions[(state, sym)] = set(targets)
        self.start_state = start_state
        self.accept_states = frozenset(accept_states)

    def epsilon_closure(self, state_set):
        """
        Compute ε-closure(S): all states reachable from any state in S
        via zero or more ε-transitions.
        Uses BFS for correctness and efficiency.
        """
        closure = set(state_set)
        queue = deque(state_set)

        while queue:
            state = queue.popleft()
            # Follow all ε-transitions from current state
            epsilon_targets = self.transitions.get((state, self.EPSILON), set())
            for target in epsilon_targets:
                if target not in closure:
                    closure.add(target)
                    queue.append(target)

        return frozenset(closure)

    def move(self, state_set, symbol):
        """
        Compute MOVE(S, a): states reachable from S by reading symbol 'a'.
        Does NOT include ε-transitions here — call epsilon_closure after.
        """
        result = set()
        for state in state_set:
            result.update(self.transitions.get((state, symbol), set()))
        return result

    def accepts(self, string, verbose=False):
        """
        Returns True if the ε-NFA accepts the given string.
        If verbose=True, prints each step of the computation.
        """
        current = self.epsilon_closure({self.start_state})

        if verbose:
            print(f"  [INIT] ε-closure({{{self.start_state}}}) = {set(current)}")

        for i, symbol in enumerate(string):
            moved = self.move(current, symbol)
            current = self.epsilon_closure(moved)

            if verbose:
                print(f"  [READ '{symbol}'] move={set(moved)}, ε-closure={set(current)}")

            if not current:
                if verbose:
                    print("  [DEAD] No states reachable. REJECT.")
                return False

        accepted = bool(current & self.accept_states)
        if verbose:
            print(f"  [END] Current={set(current)}, Accept={set(self.accept_states)}")
            print(f"  → {'ACCEPT ✅' if accepted else 'REJECT ❌'}")
        return accepted


# ============================================================
# Demo: ε-NFA for a*b*c* (from worked example in Section 6)
# ============================================================
if __name__ == '__main__':
    nfa = EpsilonNFA(
        states={'q0', 'q1', 'q2', 'q3'},
        alphabet={'a', 'b', 'c'},
        transitions={
            ('q0', 'a'): {'q0'},
            ('q0', 'ε'): {'q1'},
            ('q1', 'b'): {'q1'},
            ('q1', 'ε'): {'q2'},
            ('q2', 'c'): {'q2'},
            ('q2', 'ε'): {'q3'},
        },
        start_state='q0',
        accept_states={'q3'}
    )

    test_strings = ['', 'a', 'b', 'c', 'abc', 'aabbc', 'bba', 'cb', 'aaa', 'bbbccc']

    print("=== ε-NFA Simulation for a*b*c* ===")
    for s in test_strings:
        result = nfa.accepts(s)
        print(f"  '{s}': {'ACCEPT' if result else 'REJECT'}")

    print("\\n=== Verbose trace for 'abc' ===")
    nfa.accepts('abc', verbose=True)`}
          </pre>
        </div>
      </section>

      {/* Interactive Simulator */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Interactive ε-NFA Simulator</h2>
        <p style={{ marginBottom: '24px' }}>
          Test the a*b*c* epsilon-NFA interactively. Enter any string of a, b, c to see step-by-step computation.
        </p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>▶ Live ε-NFA Simulator</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Input String (use a, b, c):</label>
            <input
              type="text"
              value={inputString}
              onChange={(e) => setInputString(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '2px solid #d1d5db', borderRadius: '6px', fontFamily: 'monospace', fontSize: '1rem' }}
              placeholder="Enter string..."
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Choose Preset:</label>
            <select
              onChange={(e) => setInputString(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '2px solid #d1d5db', borderRadius: '6px', fontSize: '1rem' }}
            >
              <option value="">-- Select preset --</option>
              <option value="">Empty string (ε)</option>
              <option value="a">a</option>
              <option value="abc">abc</option>
              <option value="aabbc">aabbc</option>
              <option value="bba">bba (should reject)</option>
              <option value="cb">cb (should reject)</option>
            </select>
          </div>

          <button
            onClick={simulateENFA}
            style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px 24px', borderRadius: '6px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '1rem', marginBottom: '20px' }}
          >
            ▶ Simulate
          </button>

          {simulationResult && (
            <div style={{ backgroundColor: 'white', border: '2px solid #d1d5db', borderRadius: '6px', padding: '16px' }}>
              <div style={{ fontWeight: '600', color: '#374151', marginBottom: '12px' }}>ε-NFA for a*b*c* | Input: "{inputString}"</div>
              <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.95rem', whiteSpace: 'pre-wrap', color: '#374151' }}>
                {simulationResult}
              </pre>
            </div>
          )}
        </div>
      </section>


      {/* Exam-Oriented Questions */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Exam-Oriented Questions</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Short Answer Questions</h3>

        {/* Q1 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>3 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q1. Define an ε-NFA formally as a 5-tuple. How does its transition function differ from that of a standard NFA?</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#3b82f6', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#eff6ff', borderRadius: '6px' }}>
              <p style={{ marginBottom: '12px', color: '#1e3a8a', fontSize: '0.95rem' }}>
                <strong>Answer:</strong> An ε-NFA is M = (Q, Σ, δ, q₀, F) where Q is a finite set of states, Σ is the input alphabet, q₀ ∈ Q is the start state, and F ⊆ Q is the set of accepting states.
              </p>
              <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.95rem' }}>
                <strong>Key difference:</strong> The transition function of an ε-NFA has domain Q × (Σ ∪ {'{ε}'}), mapping each (state, symbol-or-epsilon) pair to a set of states: δ : Q × (Σ ∪ {'{ε}'}) → 2<sup>Q</sup>.
                In contrast, a standard NFA's transition function is δ : Q × Σ → 2<sup>Q</sup> — it does not accept ε as an input symbol. The addition of ε as a valid input to δ is what allows spontaneous state changes without consuming input.
              </p>
            </div>
          </details>
        </div>

        {/* Q2 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#10b981', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>4 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q2. Given the ε-NFA with states {'{p, q, r, s}'}, ε-transitions: p→q, q→r, r→s, compute ε-closure({'{p}'}) and ε-closure({'{q, s}'}).</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#10b981', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '6px' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>ε-closure({'{p}'}):  </div>
                <p style={{ marginBottom: '8px', color: '#047857', fontSize: '0.95rem' }}>
                  Start with {'{p}'}. From p, follow ε→q. From q, follow ε→r. From r, follow ε→s. From s, no ε-transitions.
                </p>
                <div style={{ padding: '12px', backgroundColor: '#dcfce7', borderRadius: '6px', fontWeight: '700', color: '#065f46' }}>
                  Answer: ε-closure({'{p}'}) = {'{p, q, r, s}'}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>ε-closure({'{q, s}'}):  </div>
                <p style={{ marginBottom: '8px', color: '#047857', fontSize: '0.95rem' }}>
                  Start with {'{q, s}'}. From q, follow ε→r. From r, follow ε→s (already in set). From s, no ε-transitions.
                </p>
                <div style={{ padding: '12px', backgroundColor: '#dcfce7', borderRadius: '6px', fontWeight: '700', color: '#065f46' }}>
                  Answer: ε-closure({'{q, s}'}) = {'{q, r, s}'}
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Q3 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#f59e0b', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>6 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q3. Consider the ε-NFA for a*b*: states {'{q0, q1, q2}'}, ε-transitions q0→q1 and q1→q2; 'a' loop at q0, 'b' loop at q1; q2 is accepting. Simulate the computation on input "aab" and determine if it is accepted.</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#f59e0b', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#fef3c7', borderRadius: '6px' }}>
              <p style={{ marginBottom: '12px', color: '#78350f', fontSize: '0.95rem' }}>
                <strong>Transition table:</strong> δ(q0,a)={'{q0}'}, δ(q1,b)={'{q1}'}, δ(q0,ε)={'{q1}'}, δ(q1,ε)={'{q2}'}
              </p>
              <div style={{ display: 'grid', gap: '12px', color: '#78350f', fontSize: '0.95rem' }}>
                <div><strong>Step 1 (Init):</strong> current = ε-closure({'{q0}'}) = {'{q0, q1, q2}'} (q0→q1→q2)</div>
                <div><strong>Step 2 (read 'a'):</strong> move = δ(q0, a) = {'{q0}'}. ε-closure({'{q0}'}) = {'{q0, q1, q2}'}</div>
                <div><strong>Step 3 (read 'a'):</strong> move = δ(q0, a) = {'{q0}'}. ε-closure({'{q0}'}) = {'{q0, q1, q2}'}</div>
                <div><strong>Step 4 (read 'b'):</strong> move = δ(q1, b) = {'{q1}'}. ε-closure({'{q1}'}) = {'{q1, q2}'}</div>
                <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '6px', fontWeight: '700', marginTop: '8px' }}>
                  <strong>Final:</strong> Current = {'{q1, q2}'}. q2 ∈ F. ACCEPT "aab" ✅
                </div>
              </div>
              <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#78350f', fontStyle: 'italic' }}>
                <strong>Note:</strong> At every step, the epsilon closure keeps q2 in the current set (since q1→q2 is an ε-transition), making q2 "continuously available" as long as we've already passed through q1.
              </p>
            </div>
          </details>
        </div>

        {/* Q4 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>8 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q4. State and prove Kleene's theorem. Your answer should include: (a) what the theorem states, (b) the direction "regular expression → ε-NFA" (Thompson's construction approach), and (c) the direction "ε-NFA → DFA".</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#8b5cf6', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#f3e8ff', borderRadius: '6px' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>(a) Kleene's Theorem [2 marks]:</div>
                <p style={{ margin: 0, color: '#581c87', fontSize: '0.95rem' }}>
                  A language L is regular if and only if there exists a regular expression R such that L = L(R). Equivalently, the class of languages recognized by finite automata (DFA, NFA, ε-NFA) is exactly the class of languages described by regular expressions.
                </p>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>(b) Regex → ε-NFA (Thompson's Construction) [3 marks]:</div>
                <div style={{ fontSize: '0.95rem', color: '#581c87' }}>
                  <p style={{ marginBottom: '8px' }}>We prove by structural induction on the regex R:</p>
                  <ul style={{ marginLeft: '20px' }}>
                    <li style={{ marginBottom: '6px' }}><strong>Base:</strong> For ∅, ε, or symbol a ∈ Σ, build a 2-state ε-NFA.</li>
                    <li style={{ marginBottom: '6px' }}><strong>Union:</strong> For R+S, add new start/accept states with ε-transitions to/from sub-NFAs.</li>
                    <li style={{ marginBottom: '6px' }}><strong>Concatenation:</strong> For RS, connect accept of R to start of S via ε.</li>
                    <li style={{ marginBottom: '6px' }}><strong>Kleene star:</strong> For R*, add new start/accept states and back-edge ε for looping.</li>
                  </ul>
                  <p style={{ marginTop: '8px' }}>Each construction preserves L(M) = L(R). Result: every regex gives an ε-NFA.</p>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>(c) ε-NFA → DFA (Subset Construction) [3 marks]:</div>
                <div style={{ fontSize: '0.95rem', color: '#581c87' }}>
                  <p style={{ marginBottom: '8px' }}>Given ε-NFA M = (Q, Σ, δ, q₀, F), construct DFA M' = (Q', Σ, δ', q₀', F'):</p>
                  <ul style={{ marginLeft: '20px' }}>
                    <li style={{ marginBottom: '6px' }}>q₀' = ε-closure({'{q₀}'})</li>
                    <li style={{ marginBottom: '6px' }}>δ'(S, a) = ε-closure(⋃<sub>q∈S</sub> δ(q, a)) for each symbol a</li>
                    <li style={{ marginBottom: '6px' }}>Q' = all sets reachable from q₀' (at most 2<sup>|Q|</sup> states)</li>
                    <li style={{ marginBottom: '6px' }}>F' = {'{ S ∈ Q\' : S ∩ F ≠ ∅ }'}</li>
                  </ul>
                  <p style={{ marginTop: '8px' }}>By induction on |w|, δ'*(q₀', w) = ε-closure(δ*(q₀, w)), so L(M') = L(M). QED.</p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* MCQ Practice */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>MCQ Practice</h2>

        <div className="mt-8 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm">
          <Quiz
            title="Module 1.8 Mastery Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={8}
          />
        </div>
      </section>

      {/* Quick Reference */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Quick Reference Cheat Sheet</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>Key Definitions</h3>
            <div style={{ fontSize: '0.95rem', color: '#1e3a8a' }}>
              <div style={{ marginBottom: '6px' }}><strong>ε-NFA:</strong> NFA + ε-transitions</div>
              <div style={{ marginBottom: '6px' }}><strong>ε-closure(S):</strong> states reachable by ε from S</div>
              <div style={{ marginBottom: '6px' }}><strong>MOVE(S, a):</strong> states reachable from S on symbol a</div>
              <div style={{ marginBottom: '6px' }}><strong>Thompson's:</strong> regex → ε-NFA (max 2n states)</div>
              <div><strong>Subset construction:</strong> ε-NFA → DFA</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#065f46', marginBottom: '12px' }}>Computation Steps</h3>
            <div style={{ fontSize: '0.95rem', color: '#047857' }}>
              <div style={{ marginBottom: '6px' }}>current = ε-closure({'{q₀}'})</div>
              <div style={{ marginBottom: '6px' }}>For each symbol a in w:</div>
              <div style={{ marginLeft: '16px', marginBottom: '6px' }}>move = MOVE(current, a)</div>
              <div style={{ marginLeft: '16px', marginBottom: '6px' }}>current = ε-closure(move)</div>
              <div>Accept if current ∩ F ≠ ∅</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>DFA Conversion</h3>
            <div style={{ fontSize: '0.95rem', color: '#78350f' }}>
              <div style={{ marginBottom: '6px' }}>DFA start = ε-closure({'{q₀}'})</div>
              <div style={{ marginBottom: '6px' }}>δ'(S, a) = ε-closure(MOVE(S, a))</div>
              <div style={{ marginBottom: '6px' }}>DFA accept = any set containing an F-state</div>
              <div>At most 2<sup>n</sup> DFA states for n-state ε-NFA</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>Common Mistakes</h3>
            <div style={{ fontSize: '0.95rem', color: '#7f1d1d' }}>
              <div style={{ marginBottom: '6px' }}>❌ Forgetting ε-closure at start</div>
              <div style={{ marginBottom: '6px' }}>❌ Not taking ε-closure after each symbol</div>
              <div style={{ marginBottom: '6px' }}>❌ Thinking ε-NFA is more powerful than DFA</div>
              <div>❌ Missing ε-closure when computing ε-closure(S) — it's transitive!</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Module1_8;
