'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module1_7: React.FC = () => {
  const [regexPattern, setRegexPattern] = useState('[a-zA-Z]+');
  const [testText, setTestText] = useState('The quick brown fox jumps over the lazy dog. Phone: 123-456-7890. Email: test@example.com');
  const [flags, setFlags] = useState({ g: true, i: false, m: false });
  const [matches, setMatches] = useState<string[]>([]);
  const [highlightedText, setHighlightedText] = useState('');

  const quizQuestions = [
    {
      question: "Which of the following strings is NOT in the language described by the regular expression a(b + c)*d?",
      options: ["\"ad\"", "\"abcd\"", "\"abd\"", "\"aad\""],
      correctAnswer: 3,
      explanation: "The regex a(b + c)*d requires: 'a' at start, then zero or more 'b' or 'c', then 'd' at end. \"aad\" has two 'a's at the start, which violates the pattern."
    },
    {
      question: "The regular expression (0 + 1)*1(0 + 1)* over {0,1} describes the set of all binary strings that:",
      options: ["End with 1", "Start with 1", "Contain at least one 1", "Contain exactly one 1"],
      correctAnswer: 2,
      explanation: "The pattern (0 + 1)* allows any prefix, then requires a mandatory '1', then (0 + 1)* allows any suffix. This ensures at least one '1' appears somewhere in the string."
    },
    {
      question: "Which regular expression describes the set of all strings over {a, b} that have even length?",
      options: ["(ab)*", "((a+b)(a+b))*", "(a+b)*(a+b)", "(aa + bb + ab + ba)*"],
      correctAnswer: 1,
      explanation: "Even length means pairs of characters. (a+b)(a+b) matches any 2-character string, and the outer * repeats this zero or more times, giving strings of length 0, 2, 4, 6, etc."
    },
    {
      question: "According to Thompson's construction, the NFA for a regular expression R* (Kleene star) requires adding:",
      options: ["Only a new start state with an ε-transition to the NFA for R", "New start and accept states, with ε-transitions allowing both skipping R and looping back", "A direct loop from the accept state of R back to itself", "No new states; just a back-edge on the existing accept state"],
      correctAnswer: 1,
      explanation: "Thompson's construction for R* adds: (1) new_start --ε--> R_start, (2) new_start --ε--> new_accept (to accept ε), (3) R_accept --ε--> new_accept, (4) R_accept --ε--> R_start (loop)."
    },
    {
      question: "Arden's Lemma states that if L = PL + Q (with ε ∉ L(P)), then the unique solution is:",
      options: ["L = P*Q*", "L = PQ*", "L = P*Q", "L = (PQ)*"],
      correctAnswer: 2,
      explanation: "Arden's Lemma: if L = PL + Q and ε ∉ L(P), then L = P*Q. This is analogous to solving X = aX + b → X = a*b in algebra."
    }
  ];

  const testRegex = () => {
    try {
      const flagStr = (flags.g ? 'g' : '') + (flags.i ? 'i' : '') + (flags.m ? 'm' : '');
      const regex = new RegExp(regexPattern, flagStr);
      const foundMatches = testText.match(regex) || [];
      setMatches(foundMatches);

      let highlighted = testText;
      if (foundMatches.length > 0) {
        foundMatches.forEach(match => {
          highlighted = highlighted.replace(new RegExp(match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
            `<mark style="background-color: #fef08a; padding: 2px 4px; border-radius: 3px;">${match}</mark>`);
        });
      }
      setHighlightedText(highlighted);
    } catch (e) {
      setMatches([]);
      setHighlightedText('Invalid regular expression');
    }
  };

  return (
    <div className="module-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: '#1f2937' }}>

      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '12px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '12px' }}>
          MODULE 1.7
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Regular Expressions</h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>Declarative pattern matching and the algebraic foundation of regular languages</p>
      </div>

      {/* Learning Objectives */}
      <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e40af', marginBottom: '20px' }}>📚 Learning Objectives</h2>
        <p style={{ marginBottom: '16px', color: '#1f2937' }}>Upon completing this module, students will be able to:</p>
        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { num: '1', title: 'Define Regular Expressions Formally', desc: 'State the inductive definition of a regular expression over an alphabet Σ and identify base cases and inductive steps.' },
            { num: '2', title: 'Apply Core Operations', desc: 'Construct regular expressions using union (+), concatenation (juxtaposition), and Kleene star (*) to describe given languages.' },
            { num: '3', title: 'Convert Between Models', desc: "Transform a regular expression into an equivalent NFA (Thompson's Construction) and vice versa, proving equivalence with finite automata." },
            { num: '4', title: 'Apply Algebraic Laws', desc: 'Simplify and manipulate regular expressions using identities such as commutativity of union, associativity, and Kleene star properties.' },
            { num: '5', title: 'Solve Real-World Problems', desc: 'Design regular expressions for lexical analysis, input validation, and text processing tasks encountered in software development.' }
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
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Introduction to Regular Expressions</h2>

        <p style={{ marginBottom: '16px', fontSize: '1.05rem' }}>
          Regular expressions (regex or regexp) are one of the most powerful and elegant ideas in computer science. At their heart, a regular expression is a <strong>finite symbolic description</strong> of a (potentially infinite) set of strings. Where a finite automaton describes a language procedurally — telling you step by step how to recognize a string — a regular expression describes a language <strong>declaratively</strong>, as a mathematical formula.
        </p>

        <p style={{ marginBottom: '16px', fontSize: '1.05rem' }}>
          The theory of regular expressions was developed by mathematician <strong>Stephen Cole Kleene</strong> in the 1950s as part of his work on the theory of nerve nets and finite automata. Kleene proved the fundamental theorem that links regular expressions, NFAs, and DFAs: they are all <strong>equivalent in expressive power</strong>. That is, every language that can be described by a regular expression can be recognized by some finite automaton, and vice versa. These languages are called <strong>regular languages</strong>.
        </p>

        <div style={{ backgroundColor: '#f0f9ff', border: '2px solid #0ea5e9', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0369a1', marginBottom: '12px' }}>💡 Why Regular Expressions Matter</h3>
          <p style={{ margin: 0, color: '#0c4a6e' }}>
            Regular expressions appear in virtually every programming language and operating system: Python's re module, JavaScript's built-in regex, grep in Unix, lexical analyzers (like lex/flex), database query systems, and security tools. Understanding the theory behind them gives you deep insight into both their power and their limitations.
          </p>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginTop: '32px', marginBottom: '16px' }}>Intuitive Meaning</h3>
        <p style={{ marginBottom: '16px' }}>
          Think of a regular expression as a <strong>blueprint or template</strong> for strings. The regex <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>ab*c</code> describes all strings that begin with 'a', end with 'c', and have zero or more 'b' characters in between: "ac", "abc", "abbc", "abbbc", and so on — an infinite set, described by three symbols.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
          <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>📊 Regular Expression → Automaton</div>
            <div style={{ fontSize: '0.95rem', color: '#78350f' }}>A regular expression corresponds to a finite automaton — the fundamental Kleene theorem.</div>
          </div>
          <div style={{ backgroundColor: '#e0e7ff', border: '2px solid #6366f1', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontWeight: '700', color: '#3730a3', marginBottom: '8px' }}>🔺 Chomsky Hierarchy</div>
            <div style={{ fontSize: '0.95rem', color: '#4338ca' }}>Regular languages (Type-3) sit at the bottom — the most restricted, but also the most computationally efficient class.</div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginTop: '32px', marginBottom: '16px' }}>Historical Context</h3>
        <p style={{ marginBottom: '16px' }}>
          Regular expressions were introduced by Kleene in 1951 to describe McCulloch–Pitts neural nets. <strong>Ken Thompson</strong> later implemented them in the QED text editor in the 1960s, which led directly to their integration in the Unix tool <strong>grep</strong> (Global Regular Expression Print). The POSIX standard later formalized extended regular expressions (ERE), and today virtually every computing language includes regex support.
        </p>
        <p style={{ marginBottom: '16px' }}>
          The power of regular expressions lies in three primitive operations: <strong>union</strong> (choosing between alternatives), <strong>concatenation</strong> (sequential composition), and <strong>Kleene closure</strong> (repetition). These three operations, when applied to basic symbols, can describe any regular language.
        </p>
      </section>

      {/* Video Resources */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Video Resources</h2>

        <div style={{ display: 'grid', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>Regular Expressions Explained</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/upu_TeZImN0" title="Regular Expressions Explained" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>Regular Expressions and Finite Automata</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YGjEoND31YU" title="Regular Expressions and Finite Automata" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Definition */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Formal Definition &amp; Syntax</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Inductive Definition</h3>
        <p style={{ marginBottom: '16px' }}>Let Σ be a finite alphabet. A <strong>regular expression</strong> over Σ is defined inductively as follows:</p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Definition: Regular Expression (Formal)</h4>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Basis (Atomic Regular Expressions):</div>
            <ul style={{ marginLeft: '20px', color: '#4b5563' }}>
              <li style={{ marginBottom: '8px' }}><strong>∅</strong> is a regular expression, denoting the empty language (no strings).</li>
              <li style={{ marginBottom: '8px' }}><strong>ε</strong> is a regular expression, denoting the language {'{ε}'} (the set containing only the empty string).</li>
              <li style={{ marginBottom: '8px' }}>For each symbol <strong>a ∈ Σ</strong>, <strong>a</strong> is a regular expression, denoting the language {'{a}'} (the set containing the single-character string "a").</li>
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Inductive Step: If R and S are regular expressions, then:</div>
            <ul style={{ marginLeft: '20px', color: '#4b5563' }}>
              <li style={{ marginBottom: '8px' }}><strong>(R + S)</strong> is a regular expression denoting L(R) ∪ L(S) — <em>Union</em></li>
              <li style={{ marginBottom: '8px' }}><strong>(RS)</strong> is a regular expression denoting L(R) · L(S) — <em>Concatenation</em></li>
              <li style={{ marginBottom: '8px' }}><strong>(R*)</strong> is a regular expression denoting L(R)* — <em>Kleene closure</em></li>
              <li style={{ marginBottom: '8px' }}><strong>(R)</strong> is a regular expression denoting L(R) — <em>Parenthesisation</em></li>
            </ul>
          </div>

          <p style={{ marginTop: '16px', fontStyle: 'italic', color: '#6b7280' }}>Nothing else is a regular expression.</p>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginTop: '32px', marginBottom: '16px' }}>Language of a Regular Expression</h3>
        <p style={{ marginBottom: '16px' }}>We write <strong>L(R)</strong> to denote the language described by regular expression R. For example:</p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Regular Expression R</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Language L(R)</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Example Strings</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['∅', '∅ (empty set)', 'none'],
                ['ε', '{ε}', '""'],
                ['a', '{"a"}', '"a"'],
                ['a + b', '{"a", "b"}', '"a", "b"'],
                ['ab', '{"ab"}', '"ab"'],
                ['a*', '{ε, "a", "aa", "aaa", ...}', '"", "a", "aa", ...'],
                ['(a+b)*', 'Σ* (all strings over {a,b})', '"", "a", "b", "ab", "ba", ...'],
                ['a*b*', '{aⁱbʲ : i,j ≥ 0}', '"", "a", "b", "ab", "aab", ...'],
                ['(ab)*', '{(ab)ⁿ : n ≥ 0}', '"", "ab", "abab", ...'],
                ['a⁺', '{aⁿ : n ≥ 1}', '"a", "aa", "aaa", ...']
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', backgroundColor: '#fef3c7' }}>{row[0]}</td>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>{row[1]}</td>
                  <td style={{ padding: '12px', color: '#6b7280', fontSize: '0.95rem' }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginTop: '32px', marginBottom: '16px' }}>Operator Precedence</h3>
        <p style={{ marginBottom: '16px' }}>To avoid excessive parentheses, we use the following precedence rules (highest to lowest):</p>

        <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>Precedence (High to Low):</h4>
          <ol style={{ marginLeft: '20px', color: '#7f1d1d' }}>
            <li style={{ marginBottom: '8px' }}><strong>Kleene Star (*)</strong> — highest precedence, applies to the immediately preceding expression</li>
            <li style={{ marginBottom: '8px' }}><strong>Concatenation</strong> (juxtaposition) — applied left to right</li>
            <li style={{ marginBottom: '8px' }}><strong>Union (+)</strong> — lowest precedence</li>
          </ol>
          <p style={{ marginTop: '12px', fontStyle: 'italic', color: '#7f1d1d' }}>
            Example: <code style={{ backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>ab* + c</code> means <code style={{ backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>(a(b*)) + c</code>, not <code style={{ backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>a(b+c)*</code> or anything else.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '24px' }}>
          <div style={{ backgroundColor: '#dbeafe', border: '2px solid #3b82f6', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>*</div>
            <div style={{ fontWeight: '700', color: '#1e40af', marginBottom: '4px' }}>Kleene Star</div>
            <div style={{ fontSize: '0.875rem', color: '#1e3a8a' }}>Highest</div>
          </div>
          <div style={{ backgroundColor: '#e0e7ff', border: '2px solid #6366f1', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>·</div>
            <div style={{ fontWeight: '700', color: '#4338ca', marginBottom: '4px' }}>Concatenation</div>
            <div style={{ fontSize: '0.875rem', color: '#3730a3' }}>Middle</div>
          </div>
          <div style={{ backgroundColor: '#f3e8ff', border: '2px solid #a855f7', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>+</div>
            <div style={{ fontWeight: '700', color: '#7e22ce', marginBottom: '4px' }}>Union</div>
            <div style={{ fontSize: '0.875rem', color: '#6b21a8' }}>Lowest</div>
          </div>
        </div>
      </section>

      {/* Core Operations */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Core Operations</h2>

        <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
          {[
            { symbol: '+', title: 'Union (Alternation)', desc: 'R + S matches any string in L(R) OR L(S). Also written as R | S.', color: '#ef4444' },
            { symbol: '·', title: 'Concatenation', desc: 'RS matches any string formed by a string from L(R) followed by one from L(S).', color: '#3b82f6' },
            { symbol: '*', title: 'Kleene Star (Closure)', desc: 'R* matches ε, or any number of strings from L(R) concatenated together (including zero).', color: '#8b5cf6' },
            { symbol: '+', title: 'Kleene Plus', desc: 'R⁺ means RR* — one or more repetitions of R. (Derived, not primitive.)', color: '#10b981' },
            { symbol: '?', title: 'Optional', desc: 'R? means R + ε — zero or one occurrence of R. (Derived, not primitive.)', color: '#f59e0b' },
            { symbol: '( )', title: 'Grouping', desc: 'Parentheses override precedence and group sub-expressions for clarity.', color: '#6b7280' }
          ].map((op, idx) => (
            <div key={idx} style={{ backgroundColor: '#f9fafb', border: `2px solid ${op.color}`, borderRadius: '8px', padding: '16px', display: 'flex', gap: '16px', alignItems: 'start' }}>
              <div style={{ backgroundColor: op.color, color: 'white', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700', flexShrink: 0 }}>{op.symbol}</div>
              <div>
                <div style={{ fontWeight: '700', color: '#1f2937', marginBottom: '4px', fontSize: '1.125rem' }}>{op.title}</div>
                <div style={{ color: '#4b5563', fontSize: '0.95rem' }}>{op.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Union in Detail</h3>
        <p style={{ marginBottom: '16px' }}>
          The <strong>union</strong> (or alternation) of two regular expressions R and S, written <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>R + S</code> (or <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>R | S</code>), is the set of strings that are in either L(R) or L(S), or both. Formally:
        </p>
        <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px', marginBottom: '16px', fontFamily: 'monospace', fontSize: '1.05rem' }}>
          L(R + S) = L(R) ∪ L(S)
        </div>
        <p style={{ marginBottom: '24px' }}>
          <strong>Example:</strong> The regular expression <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>cat + dog</code> describes the language {'{'}&#34;cat&#34;, &#34;dog&#34;{'}'}. The expression <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>0 + 1 + 2 + ... + 9</code> describes any single decimal digit.
        </p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Concatenation in Detail</h3>
        <p style={{ marginBottom: '16px' }}>
          The <strong>concatenation</strong> of R and S, written <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>RS</code> (or <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>R · S</code>), is the set of all strings formed by taking a string from L(R) and appending a string from L(S):
        </p>
        <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px', marginBottom: '16px', fontFamily: 'monospace', fontSize: '1.05rem' }}>
          L(RS) = L(R) · L(S) = {'{xy : x ∈ L(R), y ∈ L(S)}'}
        </div>
        <p style={{ marginBottom: '24px' }}>
          <strong>Example:</strong> <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>(a + b)(c + d)</code> gives {'{'}&#34;ac&#34;, &#34;ad&#34;, &#34;bc&#34;, &#34;bd&#34;{'}'} — every possible pairing of one character from {'{a,b}'} with one from {'{c,d}'}.
        </p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Kleene Star in Detail</h3>
        <p style={{ marginBottom: '16px' }}>
          The <strong>Kleene star</strong> (or Kleene closure) of R, written <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>R*</code>, is the set of all strings formed by concatenating zero or more strings from L(R):
        </p>
        <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px', marginBottom: '16px', fontFamily: 'monospace', fontSize: '0.95rem' }}>
          L(R*) = L(R)⁰ ∪ L(R)¹ ∪ L(R)² ∪ ... = ⋃<sub>i≥0</sub> L(R)ⁱ<br />
          where L(R)⁰ = {'{ε}'}, L(R)ⁱ⁺¹ = L(R)ⁱ · L(R)
        </div>
        <p style={{ marginBottom: '16px' }}>
          The Kleene star always includes <strong>ε</strong> (the empty string), because concatenating zero copies yields the empty string. This is a common source of confusion: <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>a*</code> does match the empty string!
        </p>

        <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>⚠️ Common Mistake: Kleene Star and Empty String</h4>
          <p style={{ margin: 0, color: '#7f1d1d' }}>
            Students often forget that <strong>R*</strong> always matches ε. If you want "one or more" repetitions, use <strong>R⁺</strong> (Kleene plus), which is equivalent to RR* and does not match the empty string.
          </p>
        </div>

        <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '20px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>Language of a* = {'{ε, a, aa, aaa, ...}'}</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginTop: '12px' }}>
            {['ε', 'a', 'aa', 'aaa', '...'].map((str, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', border: '1px solid #d97706', borderRadius: '6px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '1.125rem', marginBottom: '4px', color: '#92400e' }}>{str}</div>
                <div style={{ fontSize: '0.75rem', color: '#78350f' }}>a{idx === 0 ? '⁰' : idx === 4 ? '...' : `${idx === 1 ? '¹' : idx === 2 ? '²' : '³'}`} ({idx === 0 ? '0' : idx === 4 ? '...' : idx} {idx === 1 ? 'copy' : 'copies'})</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#78350f', fontStyle: 'italic' }}>
            The Kleene star of 'a' generates all strings of zero or more a's, including the empty string ε.
          </p>
        </div>
      </section>

      {/* Worked Examples */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Worked Examples &amp; Pattern Construction</h2>
        <p style={{ marginBottom: '24px' }}>Building regular expressions requires practice. The key skill is translating an English description of a language into the symbolic form of a regex. Below are systematic worked examples.</p>

        {/* Example 1 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example 1: Strings over {'{a, b}'} ending in 'b'</h3>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}><strong>L = {'{w ∈ {a,b}* : w ends with \'b\'}'}</strong></p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'Any string over {a,b} is described by (a + b)*.' },
              { step: '2', text: 'We need the string to end with \'b\', so we append a mandatory \'b\'.' },
              { step: '3', text: 'Answer: (a + b)*b' },
              { step: '4', text: 'Matches: "b", "ab", "aab", "bab", "abb", ... Does not match: "a", "ba", ""' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Example 2 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example 2: Strings containing exactly two a's</h3>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}><strong>L = {'{w ∈ {a,b}* : w contains exactly two a\'s}'}</strong></p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'We need exactly two \'a\' characters, surrounded by any number of \'b\'s.' },
              { step: '2', text: 'Between, before, and after the a\'s, we can have zero or more b\'s: b*.' },
              { step: '3', text: 'Answer: b*ab*ab*' },
              { step: '4', text: 'Matches: "aa", "baa", "aab", "bab", "babb", "baab", "bbabbabb", ... Does not match: "a", "aaa", "bba"' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#10b981', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Example 3 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example 3: Strings of even length over {'{a, b}'}</h3>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}><strong>L = {'{w ∈ {a,b}* : |w| is even}'}</strong></p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'An even-length string consists of pairs of characters.' },
              { step: '2', text: 'Each pair can be any two characters: (a+b)(a+b) = one pair.' },
              { step: '3', text: 'Zero or more pairs gives: Answer: ((a+b)(a+b))*' },
              { step: '4', text: 'Matches: "", "aa", "ab", "ba", "bb", "aaaa", "abab", ... Does not match: "a", "aba", "b"' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#8b5cf6', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Example 4 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example 4: Binary strings divisible by 3</h3>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}><strong>Binary strings whose numeric value is divisible by 3</strong></p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'Build a DFA with 3 states (remainders 0, 1, 2 mod 3). State q0 is start and accept.' },
              { step: '2', text: 'Transitions: from q0: 0→q0, 1→q1. From q1: 0→q2, 1→q0. From q2: 0→q1, 1→q2.' },
              { step: '3', text: 'Converting this DFA to a regex using Arden\'s lemma gives: Answer: 0* + (0*10*1(0 + 10*1)*10*) (simplified form)' },
              { step: '4', text: 'Matches: "0" (=0), "11" (=3), "110" (=6), "1001" (=9), ...' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Example 5 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example 5: Email Address Validation (Simplified)</h3>
          <p style={{ marginBottom: '12px', color: '#4b5563' }}><strong>Simplified email pattern</strong></p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'Email has format: username@domain.tld' },
              { step: '2', text: 'Username: one or more alphanumeric chars or dots/underscores: [a-zA-Z0-9._]+' },
              { step: '3', text: 'Domain: [a-zA-Z0-9]+, then literal dot, then TLD: [a-zA-Z]{2,4}' },
              { step: '4', text: 'Answer: [a-zA-Z0-9._]+ @ [a-zA-Z0-9]+ \\. [a-zA-Z]{2,4}' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#ef4444', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thompson's Construction */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Regular Expressions to NFA: Thompson's Construction</h2>
        <p style={{ marginBottom: '16px' }}>
          One direction of the Kleene theorem is proven by <strong>Thompson's Construction</strong> (1968). Given any regular expression, we systematically build an NFA (with ε-transitions) that accepts exactly the same language. The construction is inductive, mirroring the inductive definition of regular expressions.
        </p>

        <div style={{ backgroundColor: '#dbeafe', border: '2px solid #3b82f6', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>Key Property of Thompson's NFAs:</h3>
          <p style={{ margin: 0, color: '#1e3a8a' }}>Each NFA fragment has exactly one start state and one accept state. This makes composition via ε-transitions clean and predictable.</p>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Base Cases</h3>
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#065f46', marginBottom: '12px' }}>RE = ε</h4>
            <div style={{ fontFamily: 'monospace', color: '#047857', marginBottom: '8px' }}>q0 --ε--&gt; q1</div>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#065f46' }}>NFA for ε: Single ε-transition from start to accept state.</p>
          </div>
          <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>RE = a (single symbol)</h4>
            <div style={{ fontFamily: 'monospace', color: '#1e40af', marginBottom: '8px' }}>q0 --a--&gt; q1</div>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#1e3a8a' }}>NFA for single symbol: One transition labeled with the symbol.</p>
          </div>
          <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>RE = ∅</h4>
            <div style={{ fontFamily: 'monospace', color: '#991b1b', marginBottom: '8px' }}>q0 (no transitions, no accept state)</div>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#7f1d1d' }}>NFA for ∅: Start state with no outgoing transitions and no accept state.</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Inductive Cases</h3>

        <details style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', cursor: 'pointer', marginBottom: '12px' }}>Inductive Case 1: Union (R + S)</summary>
          <div style={{ marginTop: '16px' }}>
            <p style={{ marginBottom: '12px', color: '#4b5563' }}>Create a new start state with ε-transitions to both R's start and S's start. Create a new accept state with ε-transitions from both R's accept and S's accept.</p>
            <div style={{ backgroundColor: '#fef3c7', padding: '16px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.95rem', color: '#78350f' }}>
              new_start --ε--&gt; R_start<br />
              new_start --ε--&gt; S_start<br />
              R_accept --ε--&gt; new_accept<br />
              S_accept --ε--&gt; new_accept
            </div>
          </div>
        </details>

        <details style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', cursor: 'pointer', marginBottom: '12px' }}>Inductive Case 2: Concatenation (RS)</summary>
          <div style={{ marginTop: '16px' }}>
            <p style={{ marginBottom: '12px', color: '#4b5563' }}>Connect R's accept state to S's start state with an ε-transition. R's start becomes the overall start, S's accept becomes the overall accept.</p>
            <div style={{ backgroundColor: '#dbeafe', padding: '16px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.95rem', color: '#1e3a8a' }}>
              R_start ... R_accept --ε--&gt; S_start ... S_accept
            </div>
          </div>
        </details>

        <details style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
          <summary style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', cursor: 'pointer', marginBottom: '12px' }}>Inductive Case 3: Kleene Star (R*)</summary>
          <div style={{ marginTop: '16px' }}>
            <p style={{ marginBottom: '12px', color: '#4b5563' }}>Create new start and accept states. Add ε-transitions: new_start to R_start, new_start to new_accept (for ε), R_accept to new_accept, and R_accept back to R_start (for repetition).</p>
            <div style={{ backgroundColor: '#f3e8ff', padding: '16px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.95rem', color: '#6b21a8' }}>
              new_start --ε--&gt; R_start<br />
              new_start --ε--&gt; new_accept<br />
              R_accept --ε--&gt; new_accept<br />
              R_accept --ε--&gt; R_start
            </div>
          </div>
        </details>
      </section>

      {/* Arden's Lemma */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>NFA/DFA to Regular Expression: Arden's Lemma</h2>
        <p style={{ marginBottom: '16px' }}>
          The other direction — converting a finite automaton back into a regular expression — uses <strong>Arden's Lemma</strong> (also called the state elimination method or equation method). This converts the automaton into a system of linear equations and solves it.
        </p>

        <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>Arden's Lemma</h3>
          <p style={{ marginBottom: '12px', color: '#78350f' }}>If <strong>L = PL + Q</strong>, where P does not contain ε, then the unique solution is:</p>
          <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '1.25rem', textAlign: 'center', color: '#92400e', fontWeight: '700' }}>
            L = P*Q
          </div>
          <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#78350f', fontStyle: 'italic' }}>
            This is the fundamental equation for solving regular expression systems. Think of it as the "regular language" analogue of the algebraic solution to X = aX + b ⇒ X = a*b.
          </p>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>State Elimination Method</h3>
        <p style={{ marginBottom: '16px' }}>
          The state elimination method converts a DFA/NFA to a regular expression by systematically eliminating internal states one by one, updating the transition labels to be regular expressions that capture the eliminated state's contribution.
        </p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Example: DFA with 2 states over {'{a, b}'}, accepts strings ending in 'a'</h4>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { step: '1', text: 'States: q0 (start), q1 (accept). Transitions: q0 --a--> q1, q0 --b--> q0, q1 --a--> q1, q1 --b--> q0.' },
              { step: '2', text: 'Write equations: L(q0) = bL(q0) + aL(q1) + ε, L(q1) = aL(q1) + bL(q0).' },
              { step: '3', text: 'Apply Arden\'s Lemma to L(q1): L(q1) = a*bL(q0).' },
              { step: '4', text: 'Substitute into L(q0): L(q0) = bL(q0) + aa*bL(q0) + ε = (b + aa*b)L(q0) + ε.' },
              { step: '5', text: 'Apply Arden\'s: L(q0) = (b + aa*b)*.' },
              { step: '6', text: 'Final Answer: (a + b)*a — any string over {a,b} ending with \'a\'.' }
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: '700', flexShrink: 0 }}>{item.step}</div>
                <div style={{ color: '#374151', paddingTop: '2px' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algebraic Laws */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Algebraic Laws &amp; Identities</h2>
        <p style={{ marginBottom: '24px' }}>
          Regular expressions satisfy a rich set of algebraic laws. These laws are essential for simplifying expressions and proving equivalences. Unlike ordinary algebra, however, regular expression algebra has some surprising properties — for instance, union is commutative but concatenation is not.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Identity</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Law</th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #d1d5db', fontWeight: '700', color: '#1f2937' }}>Name</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['R + S = S + R', 'L(R) ∪ L(S) = L(S) ∪ L(R)', 'Commutativity of Union'],
                ['(R+S)+T = R+(S+T)', 'Associative', 'Associativity of Union'],
                ['(RS)T = R(ST)', 'Associative', 'Associativity of Concatenation'],
                ['R+∅ = R', '∅ is identity for +', 'Identity of Union'],
                ['R∅ = ∅', '∅ is annihilator for ·', 'Annihilation'],
                ['εR = Rε = R', 'ε is identity for ·', 'Identity of Concatenation'],
                ['R+R = R', 'Idempotent', 'Idempotency of Union'],
                ['R(S+T) = RS + RT', 'Left distributive', 'Distributivity'],
                ['(R+S)T = RT + ST', 'Right distributive', 'Distributivity'],
                ['(R*)* = R*', 'Idempotent star', 'Kleene Star Idempotency'],
                ['∅* = ε', 'Zero reps', 'Special Case'],
                ['ε* = ε', 'Identity', 'Special Case'],
                ['R⁺ = RR*', 'Kleene Plus', 'Derived Operator'],
                ['R? = R + ε', 'Optional', 'Derived Operator'],
                ['(R+S)* = (R*S*)* = (R*+S*)*', 'Star over union', 'Star of Union']
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', backgroundColor: '#fef3c7', fontSize: '0.95rem' }}>{row[0]}</td>
                  <td style={{ padding: '12px', fontSize: '0.95rem', color: '#4b5563' }}>{row[1]}</td>
                  <td style={{ padding: '12px', fontSize: '0.95rem', color: '#6b7280' }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>⚠️ What Doesn't Hold in Regular Algebra:</h3>
          <ul style={{ marginLeft: '20px', color: '#7f1d1d' }}>
            <li style={{ marginBottom: '8px' }}>Concatenation is <strong>NOT</strong> commutative: ab ≠ ba in general</li>
            <li style={{ marginBottom: '8px' }}>There is <strong>NO</strong> subtraction or complement operation in basic regular expressions</li>
            <li>The equation R* = 1 + RR* holds, but R* = R + RR* does NOT in general</li>
          </ul>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#374151', marginBottom: '16px' }}>Topic Complexity Overview</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { topic: 'Syntax/Definition', percent: 95, color: '#10b981' },
              { topic: 'Pattern Building', percent: 80, color: '#3b82f6' },
              { topic: 'Thompson\'s NFA', percent: 70, color: '#8b5cf6' },
              { topic: 'Arden\'s Lemma', percent: 65, color: '#f59e0b' },
              { topic: 'Algebraic Laws', percent: 75, color: '#ef4444' }
            ].map(item => (
              <div key={item.topic}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', color: '#374151' }}>{item.topic}</span>
                  <span style={{ fontWeight: '700', color: item.color }}>{item.percent}%</span>
                </div>
                <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.percent}%`, height: '100%', backgroundColor: item.color, transition: 'width 0.3s ease' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Real-World Applications</h2>

        <div style={{ display: 'grid', gap: '24px' }}>
          <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#065f46', marginBottom: '12px' }}>🔧 Lexical Analysis (Compilers)</h3>
            <p style={{ marginBottom: '12px', color: '#047857' }}>
              The first phase of a compiler is lexical analysis (lexing or tokenization), which converts raw source code text into a stream of tokens. Tokens — keywords, identifiers, literals, operators — are described by regular expressions. Tools like <strong>lex</strong> and <strong>flex</strong> take a specification file full of regular expressions and automatically generate a fast lexer by converting the regex to a minimized DFA.
            </p>
            <pre style={{ backgroundColor: '#dcfce7', padding: '16px', borderRadius: '6px', overflow: 'auto', fontSize: '0.875rem', color: '#14532d' }}>
              {`/* Example lex/flex rules (simplified) */
letter [a-zA-Z]
digit [0-9]
identifier {letter}({letter}|{digit}|_)*
integer {digit}+
float {digit}+\\.{digit}+([eE][+-]?{digit}+)?
string \\"[^\\"]*\\"
keyword "if"|"else"|"while"|"for"|"return"`}
            </pre>
          </div>

          <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>🔍 Pattern Matching and Search</h3>
            <p style={{ marginBottom: '0', color: '#1e3a8a' }}>
              The Unix tool <strong>grep</strong> (Global Regular Expression Print) uses NFAs to search for patterns in files. Modern implementations like <strong>ripgrep</strong> use sophisticated NFA/DFA conversion algorithms for blazing-fast search over millions of lines of code. Regular expressions in grep, sed, and awk are the backbone of Unix text processing.
            </p>
          </div>

          <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>✅ Input Validation</h3>
            <p style={{ marginBottom: '12px', color: '#78350f' }}>
              Regular expressions are the standard tool for validating input formats: email addresses, phone numbers, postal codes, IP addresses, credit card numbers, URLs, and passwords. Every modern web framework — Django, Rails, Laravel, Express — has built-in regex validation support.
            </p>
            <pre style={{ backgroundColor: '#fef9c3', padding: '16px', borderRadius: '6px', overflow: 'auto', fontSize: '0.875rem', color: '#713f12' }}>
              {`# Common validation patterns
IP_ADDRESS = r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'
EMAIL = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
PHONE_US = r'^\\+?1?\\s*\\(?(\\d{3})\\)?[\\s.-]?(\\d{3})[\\s.-]?(\\d{4})$'
DATE_ISO = r'^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$'
ZIP_US = r'^\\d{5}(-\\d{4})?$'`}
            </pre>
          </div>

          <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>🔒 Security and Intrusion Detection</h3>
            <p style={{ marginBottom: '0', color: '#7f1d1d' }}>
              Network security tools use regular expressions to detect attack signatures in network traffic. <strong>Snort</strong> and <strong>Suricata</strong> (Intrusion Detection Systems) use regex-like patterns called rules to identify malicious payloads. Web Application Firewalls (WAFs) use regex to detect SQL injection and XSS attempts.
            </p>
          </div>

          <div style={{ backgroundColor: '#f3e8ff', border: '2px solid #a855f7', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#6b21a8', marginBottom: '12px' }}>🧬 DNA Sequence Analysis</h3>
            <p style={{ marginBottom: '0', color: '#581c87' }}>
              In bioinformatics, regular expressions describe patterns in DNA and protein sequences. The <strong>PROSITE</strong> database uses a specialized regex-like notation to describe protein sequence motifs. For example, the C2H2 zinc finger domain signature is described by a pattern like <code style={{ backgroundColor: '#e9d5ff', padding: '2px 6px', borderRadius: '4px' }}>C-x(2,4)-C-x(3)-[LIVMFYWC]-x(8)-H-x(3,5)-H</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Python Implementation */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Python Implementation</h2>
        <p style={{ marginBottom: '24px' }}>
          Python's built-in <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>re</code> module provides a full regular expression engine. Below is a comprehensive implementation demonstrating the theory concepts: regex matching, building an NFA simulation via Thompson's construction, and demonstrating the equivalence between regex and automata.
        </p>

        <div style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '24px', borderRadius: '8px', overflow: 'auto', marginBottom: '24px' }}>
          <pre style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6' }}>
            {`import re

# =========================================================
# Regular Expression Operations in Python
# Theory of Computation — Regular Languages
# =========================================================

def demonstrate_regex_operations():
    """Demonstrates the three fundamental regex operations."""
    text = "The quick brown fox jumps over the lazy dog"

    # 1. Union (alternation): matches 'cat' OR 'dog'
    pattern_union = re.compile(r'cat|dog')
    print("Union 'cat|dog':", pattern_union.findall(text))
    # Output: ['dog']

    # 2. Concatenation: matches 'quick' followed by space and 'brown'
    pattern_concat = re.compile(r'quick brown')
    print("Concat 'quick brown':", pattern_concat.findall(text))
    # Output: ['quick brown']

    # 3. Kleene star: matches 'o' followed by zero or more 'o's
    pattern_star = re.compile(r'[a-z]+')
    words = pattern_star.findall(text)
    print("All words:", words[:5], "...")

def regex_match_examples():
    """Examples of matching common patterns."""
    examples = [
        (r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', "test@example.com", "Email"),
        (r'^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$', "2024-03-15", "ISO Date"),
        (r'^\\+?(\\d[\\s-]?){10,14}$', "+1 800 555 0100", "Phone"),
        (r'^(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)){3}$', "192.168.1.1", "IPv4"),
    ]
    for pattern, string, name in examples:
        match = re.match(pattern, string)
        print(f"{name}: '{string}' -> {'MATCH' if match else 'NO MATCH'}")

class SimpleNFA:
    """
    A simple NFA implementation via Python's re module.
    Demonstrates that Python's regex engine IS an NFA simulator.
    """
    def __init__(self, pattern):
        self.pattern = pattern
        self.regex = re.compile(pattern)

    def accepts(self, string):
        """Returns True if the regex matches the full string."""
        return bool(self.regex.fullmatch(string))

    def find_all(self, text):
        """Finds all non-overlapping matches in text."""
        return self.regex.findall(text)

    def find_positions(self, text):
        """Returns (start, end, match) tuples for all matches."""
        return [(m.start(), m.end(), m.group()) for m in self.regex.finditer(text)]

class RegexToNFA:
    """
    Implements Thompson's Construction algorithm.
    Builds NFA states and transitions from a regular expression.
    (Simplified version for educational purposes.)
    """
    def __init__(self):
        self.state_count = 0
        self.transitions = {}
        self.epsilon = 'ε'

    def new_state(self):
        """Create a new unique state."""
        s = f'q{self.state_count}'
        self.state_count += 1
        return s

    def add_transition(self, from_state, symbol, to_state):
        if (from_state, symbol) not in self.transitions:
            self.transitions[(from_state, symbol)] = []
        self.transitions[(from_state, symbol)].append(to_state)

    def build_symbol(self, symbol):
        """Base case: NFA for a single symbol."""
        start = self.new_state()
        accept = self.new_state()
        self.add_transition(start, symbol, accept)
        return start, accept

    def build_epsilon(self):
        """Base case: NFA for epsilon."""
        start = self.new_state()
        accept = self.new_state()
        self.add_transition(start, self.epsilon, accept)
        return start, accept

    def build_union(self, nfa_r, nfa_s):
        """Inductive case: NFA for R + S."""
        r_start, r_accept = nfa_r
        s_start, s_accept = nfa_s
        new_start = self.new_state()
        new_accept = self.new_state()
        self.add_transition(new_start, self.epsilon, r_start)
        self.add_transition(new_start, self.epsilon, s_start)
        self.add_transition(r_accept, self.epsilon, new_accept)
        self.add_transition(s_accept, self.epsilon, new_accept)
        return new_start, new_accept

    def build_concat(self, nfa_r, nfa_s):
        """Inductive case: NFA for RS."""
        r_start, r_accept = nfa_r
        s_start, s_accept = nfa_s
        self.add_transition(r_accept, self.epsilon, s_start)
        return r_start, s_accept

    def build_star(self, nfa_r):
        """Inductive case: NFA for R*."""
        r_start, r_accept = nfa_r
        new_start = self.new_state()
        new_accept = self.new_state()
        self.add_transition(new_start, self.epsilon, r_start)
        self.add_transition(new_start, self.epsilon, new_accept)
        self.add_transition(r_accept, self.epsilon, new_accept)
        self.add_transition(r_accept, self.epsilon, r_start)
        return new_start, new_accept

# =========================================================
# Demo: Build NFA for regex (a+b)*abb using Thompson's
# =========================================================
def build_nfa_for_a_plus_b_star_abb():
    builder = RegexToNFA()

    # Build NFA for 'a'
    nfa_a = builder.build_symbol('a')
    # Build NFA for 'b'
    nfa_b = builder.build_symbol('b')
    # Union: a + b
    nfa_aOrB = builder.build_union(nfa_a, nfa_b)
    # Kleene star: (a+b)*
    nfa_star = builder.build_star(nfa_aOrB)
    # Build 'a', 'b', 'b' for the suffix 'abb'
    nfa_a2 = builder.build_symbol('a')
    nfa_b2 = builder.build_symbol('b')
    nfa_b3 = builder.build_symbol('b')
    # Concatenate: (a+b)* . a . b . b
    nfa_final = builder.build_concat(
        builder.build_concat(
            builder.build_concat(nfa_star, nfa_a2), nfa_b2
        ), nfa_b3
    )
    start, accept = nfa_final
    print(f"NFA for (a+b)*abb:")
    print(f"  Start state: {start}")
    print(f"  Accept state: {accept}")
    print(f"  Total states: {builder.state_count}")
    print(f"  Transitions: {len(builder.transitions)}")

if __name__ == '__main__':
    demonstrate_regex_operations()
    regex_match_examples()
    build_nfa_for_a_plus_b_star_abb()`}
          </pre>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Advanced Pattern Techniques</h3>
        <div style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '24px', borderRadius: '8px', overflow: 'auto' }}>
          <pre style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6' }}>
            {`import re

# =========================================================
# Advanced Regex Techniques
# =========================================================

# Non-capturing groups: (?:...)
# Groups characters without capturing
pattern_nc = re.compile(r'(?:ab)+')
print(pattern_nc.findall("ababab"))  # ['ababab']

# Named groups: (?P<name>...)
date_re = re.compile(r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})')
m = date_re.search("Date: 2024-03-15")
if m:
    print(m.group('year'), m.group('month'), m.group('day'))

# Lookahead assertion: (?=...)
# Match 'foo' only if followed by 'bar'
pattern_la = re.compile(r'foo(?=bar)')
print(pattern_la.findall("foobar foobaz"))  # ['foo'] (only the first)

# Lookbehind assertion: (?<=...)
# Match 'bar' only if preceded by 'foo'
pattern_lb = re.compile(r'(?<=foo)bar')
print(pattern_lb.findall("foobar bazbar"))  # ['bar'] (only after foo)

# Substitution with backreferences
text = "2024-03-15"
reformatted = re.sub(r'(\\d{4})-(\\d{2})-(\\d{2})', r'\\3/\\2/\\1', text)
print(reformatted)  # 15/03/2024

# Greedy vs. Non-Greedy
html = "<b>bold</b> and <i>italic</i>"
greedy = re.findall(r'<.*>', html)     # Greedy: matches whole string
non_greedy = re.findall(r'<.*?>', html)  # Non-greedy: matches each tag
print("Greedy:", greedy)
print("Non-greedy:", non_greedy)`}
          </pre>
        </div>
      </section>

      {/* Interactive Regex Tester */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Interactive Regular Expression Tester</h2>
        <p style={{ marginBottom: '24px' }}>
          Use this interactive tool to test regular expressions against text. Type a pattern and some test text to see matches highlighted in real time. This uses JavaScript's built-in regex engine, which closely follows POSIX ERE semantics.
        </p>

        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '16px' }}>Live Regex Tester</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Regular Expression Pattern:</label>
            <input
              type="text"
              value={regexPattern}
              onChange={(e) => setRegexPattern(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '2px solid #d1d5db', borderRadius: '6px', fontFamily: 'monospace', fontSize: '1rem' }}
              placeholder="Enter regex pattern..."
            />
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="checkbox" checked={flags.g} onChange={(e) => setFlags({ ...flags, g: e.target.checked })} />
                <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Global (g)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="checkbox" checked={flags.i} onChange={(e) => setFlags({ ...flags, i: e.target.checked })} />
                <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Case-insensitive (i)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="checkbox" checked={flags.m} onChange={(e) => setFlags({ ...flags, m: e.target.checked })} />
                <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Multiline (m)</span>
              </label>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Test Text:</label>
            <textarea
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '2px solid #d1d5db', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.95rem', minHeight: '100px' }}
              placeholder="Enter test text..."
            />
          </div>

          <button
            onClick={testRegex}
            style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px 24px', borderRadius: '6px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}
          >
            ▶ Test Regex
          </button>

          <div style={{ marginTop: '20px' }}>
            <div style={{ fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Result:</div>
            <div
              style={{ backgroundColor: 'white', border: '2px solid #d1d5db', borderRadius: '6px', padding: '16px', minHeight: '80px', fontFamily: 'monospace', fontSize: '0.95rem' }}
              dangerouslySetInnerHTML={{ __html: highlightedText || testText }}
            />
            <div style={{ marginTop: '8px', fontSize: '0.95rem', color: '#6b7280' }}>
              Matches: <strong style={{ color: '#3b82f6' }}>{matches.length} {matches.length === 1 ? 'match' : 'matches'}</strong>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#374151', marginBottom: '12px' }}>Quick Pattern Reference</h4>
          <p style={{ marginBottom: '12px', color: '#6b7280' }}>Click any pattern below to load it into the tester:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { name: 'Integers', pattern: '[0-9]+' },
              { name: 'Email', pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}' },
              { name: 'Capitalized Words', pattern: '[A-Z][a-z]+' },
              { name: 'IP Address', pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b' },
              { name: 'URL', pattern: 'https?://[^\\s]+' },
              { name: 'Hex Color', pattern: '#[0-9A-Fa-f]{6}' }
            ].map(item => (
              <button
                key={item.name}
                onClick={() => setRegexPattern(item.pattern)}
                style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '6px', padding: '10px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '600', color: '#1e40af', textAlign: 'left' }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MCQ Practice */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>MCQ Practice</h2>
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>Test your understanding of regular expressions with these practice questions!</p>

        <div className="mt-8 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm">
          <Quiz
            title="Module 1.7 Mastery Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={7}
          />
        </div>
      </section>

      {/* Exam-Oriented Questions */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Exam-Oriented Questions</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Section A: Short Answer</h3>

        {/* Q1 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>2 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q1. Write a regular expression for the set of all binary strings that start with '1' and end with '0'.</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#3b82f6', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#eff6ff', borderRadius: '6px' }}>
              <div style={{ fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>Answer: <code style={{ backgroundColor: '#dbeafe', padding: '2px 8px', borderRadius: '4px' }}>1(0+1)*0</code></div>
              <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.95rem' }}>
                <strong>Explanation:</strong> The string must begin with '1' (mandatory first character), followed by zero or more characters from {'{0,1}'} (any binary content in the middle), and must end with '0' (mandatory last character). Note: this DOES match "10" (1, then empty middle, then 0). The minimum-length match is "10". For strings of length 1 (just "1" or "0"), neither matches since both start and end constraints cannot be satisfied simultaneously by a single character.
              </p>
            </div>
          </details>
        </div>

        {/* Q2 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#10b981', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>3 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q2. Give a regular expression for the language of all strings over {'{a, b}'} that do NOT contain the substring "aa".</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#10b981', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '6px' }}>
              <div style={{ fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>Answer: <code style={{ backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '4px' }}>b*(ab+)*a?</code> or equivalently <code style={{ backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '4px' }}>(b + ab)*a?</code></div>
              <p style={{ margin: 0, color: '#047857', fontSize: '0.95rem' }}>
                <strong>Explanation:</strong> To avoid "aa", any occurrence of 'a' must be immediately followed by 'b' or be the last character. We can have any number of b's at the start (b*), then any number of "ab" groups ((ab+)*), then optionally a final 'a' (a?). This generates all strings without consecutive a's. The rewriting as (b + ab)*a? is cleaner: at each step we can add any number of b's or an a followed immediately by b, then optionally end with a single a.
              </p>
            </div>
          </details>
        </div>

        {/* Q3 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#f59e0b', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>4 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q3. Convert the NFA with states {'{q0, q1, q2}'}, start state q0, accept state q2, and transitions: q0 --a--&gt; q1, q1 --b--&gt; q2, q1 --a--&gt; q1, to a regular expression using state elimination.</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#f59e0b', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#fef3c7', borderRadius: '6px' }}>
              <div style={{ fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>Step-by-step answer:</div>
              <div style={{ display: 'grid', gap: '12px', color: '#78350f', fontSize: '0.95rem' }}>
                <div><strong>1.</strong> Write language equations:<br />
                  <code style={{ backgroundColor: '#fef9c3', padding: '2px 6px', borderRadius: '4px', marginLeft: '20px' }}>L(q0) = aL(q1)</code><br />
                  <code style={{ backgroundColor: '#fef9c3', padding: '2px 6px', borderRadius: '4px', marginLeft: '20px' }}>L(q1) = aL(q1) + bL(q2)</code><br />
                  <code style={{ backgroundColor: '#fef9c3', padding: '2px 6px', borderRadius: '4px', marginLeft: '20px' }}>L(q2) = ε</code> (accept state)
                </div>
                <div><strong>2.</strong> Substitute L(q2) = ε into L(q1):<br />
                  <code style={{ backgroundColor: '#fef9c3', padding: '2px 6px', borderRadius: '4px', marginLeft: '20px' }}>L(q1) = aL(q1) + b</code>
                </div>
                <div><strong>3.</strong> Apply Arden's Lemma to L(q1): L = PL + Q where P = a, Q = b:<br />
                  <code style={{ backgroundColor: '#fef9c3', padding: '2px 6px', borderRadius: '4px', marginLeft: '20px' }}>L(q1) = a*b</code>
                </div>
                <div><strong>4.</strong> Substitute back into L(q0):<br />
                  <code style={{ backgroundColor: '#fef9c3', padding: '2px 6px', borderRadius: '4px', marginLeft: '20px' }}>L(q0) = a · a*b = aa*b = a⁺b</code>
                </div>
              </div>
              <div style={{ marginTop: '12px', padding: '12px', backgroundColor: 'white', borderRadius: '6px', fontWeight: '700', color: '#92400e' }}>
                Final Answer: <code style={{ backgroundColor: '#fef9c3', padding: '2px 8px', borderRadius: '4px' }}>a⁺b</code> (one or more a's followed by exactly one b)<br />
                <span style={{ fontSize: '0.875rem', fontWeight: '400' }}>Example matches: "ab", "aab", "aaab", ...</span>
              </div>
            </div>
          </details>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>Section B: Long Answer</h3>

        {/* Q4 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>8 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q4. (a) State Kleene's theorem. (b) Using Thompson's construction, build an NFA for the regular expression ab* + b. (c) What language does this NFA accept?</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#8b5cf6', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#f3e8ff', borderRadius: '6px' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>(a) Kleene's Theorem [2 marks]:</div>
                <p style={{ margin: 0, color: '#581c87', fontSize: '0.95rem' }}>
                  A language L is a regular language if and only if there exists a regular expression R such that L = L(R). Equivalently, the class of regular languages is exactly the class of languages accepted by finite automata (DFA/NFA). This establishes the equivalence between three models: regular expressions, NFAs, and DFAs.
                </p>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>(b) Thompson's Construction for ab* + b [4 marks]:</div>
                <div style={{ fontSize: '0.95rem', color: '#581c87' }}>
                  <div><strong>Step 1:</strong> NFA for 'a': q0 --a--&gt; q1</div>
                  <div><strong>Step 2:</strong> NFA for 'b': q2 --b--&gt; q3</div>
                  <div><strong>Step 3:</strong> NFA for b*: new start qS' --ε--&gt; q2, q3 --ε--&gt; new accept qA', qS' --ε--&gt; qA', q3 --ε--&gt; q2 (loop)</div>
                  <div><strong>Step 4:</strong> Concatenate 'a' and b*: q1 --ε--&gt; qS'</div>
                  <div><strong>Step 5:</strong> NFA for 'b' (second): q4 --b--&gt; q5</div>
                  <div><strong>Step 6:</strong> Union: new start qS --ε--&gt; q0, qS --ε--&gt; q4; new accept qA; qA' --ε--&gt; qA, q5 --ε--&gt; qA</div>
                  <div style={{ marginTop: '8px', fontWeight: '600' }}>Total states: 10 (ε-NFA from Thompson's)</div>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: '700', color: '#6b21a8', marginBottom: '8px' }}>(c) Language [2 marks]:</div>
                <div style={{ fontSize: '0.95rem', color: '#581c87' }}>
                  L(ab* + b) = L(ab*) ∪ L(b)<br />
                  = {'{ab'}ⁿ : n ≥ 0{'}'} ∪ {'{'}&#34;b&#34;{'}'}<br />
                  = {'{'}&#34;a&#34;, &#34;ab&#34;, &#34;abb&#34;, &#34;abbb&#34;, ..., &#34;b&#34;{'}'}<br />
                  <strong>In words:</strong> all strings of the form "a" followed by zero or more "b"s, plus the single string "b".
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Q5 */}
        <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '0.875rem' }}>6 marks</span>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Q5. Prove or disprove: The language L = {'{aⁿbⁿ : n ≥ 0}'} is regular by attempting to construct a regular expression for it.</h4>
          </div>
          <details style={{ marginTop: '16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', color: '#ef4444', fontSize: '0.95rem' }}>Show Model Answer</summary>
            <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#fef2f2', borderRadius: '6px' }}>
              <div style={{ fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>Answer: L is NOT regular [6 marks].</div>
              <div style={{ color: '#7f1d1d', fontSize: '0.95rem' }}>
                <div style={{ fontWeight: '700', marginBottom: '8px' }}>Proof using Pumping Lemma:</div>
                <div style={{ marginBottom: '8px' }}>Assume for contradiction that L = {'{aⁿbⁿ}'} is regular. Then there exists a pumping length p ≥ 1.</div>
                <div style={{ marginBottom: '8px' }}>Choose the string s = aᵖbᵖ ∈ L, with |s| = 2p ≥ p.</div>
                <div style={{ marginBottom: '8px' }}>By the Pumping Lemma, we can write s = xyz where:</div>
                <ul style={{ marginLeft: '20px', marginBottom: '8px' }}>
                  <li>|xy| ≤ p (so x and y are entirely within the a-prefix)</li>
                  <li>|y| ≥ 1 (y is non-empty)</li>
                  <li>xyⁱz ∈ L for all i ≥ 0</li>
                </ul>
                <div style={{ marginBottom: '8px' }}>Since |xy| ≤ p and the first p characters of s are all a's, y must consist entirely of a's. Let y = aᵏ for some k ≥ 1.</div>
                <div style={{ marginBottom: '8px' }}>Now pump up: xy²z = aᵖ⁺ᵏbᵖ. This has more a's than b's, so it is NOT in L.</div>
                <div style={{ marginBottom: '8px' }}>This contradicts the Pumping Lemma, so our assumption was wrong.</div>
                <div style={{ fontWeight: '700', marginTop: '12px', padding: '12px', backgroundColor: 'white', borderRadius: '6px' }}>
                  Conclusion: L = {'{aⁿbⁿ}'} is NOT a regular language, and therefore NO regular expression can describe it. It requires a pushdown automaton (context-free grammar).
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Quick Reference */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '20px', borderBottom: '3px solid #3b82f6', paddingBottom: '8px' }}>Quick Reference Cheat Sheet</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>Core Operations</h3>
            <div style={{ fontSize: '0.95rem', color: '#1e3a8a' }}>
              <div style={{ marginBottom: '6px' }}><strong>Union:</strong> R + S</div>
              <div style={{ marginBottom: '6px' }}><strong>Concatenation:</strong> RS</div>
              <div style={{ marginBottom: '6px' }}><strong>Kleene Star:</strong> R*</div>
              <div style={{ marginBottom: '6px' }}><strong>Kleene Plus:</strong> R⁺ = RR*</div>
              <div><strong>Optional:</strong> R? = R + ε</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#065f46', marginBottom: '12px' }}>Key Identities</h3>
            <div style={{ fontSize: '0.95rem', color: '#047857', fontFamily: 'monospace' }}>
              <div style={{ marginBottom: '6px' }}>R + ∅ = R</div>
              <div style={{ marginBottom: '6px' }}>R∅ = ∅</div>
              <div style={{ marginBottom: '6px' }}>εR = Rε = R</div>
              <div style={{ marginBottom: '6px' }}>(R*)* = R*</div>
              <div>∅* = ε* = ε</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>Precedence</h3>
            <div style={{ fontSize: '0.95rem', color: '#78350f' }}>
              <div style={{ marginBottom: '6px' }}>1. <strong>Kleene Star (*)</strong> — highest</div>
              <div style={{ marginBottom: '6px' }}>2. <strong>Concatenation</strong> — middle</div>
              <div>3. <strong>Union (+)</strong> — lowest</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#991b1b', marginBottom: '12px' }}>Common Mistakes</h3>
            <div style={{ fontSize: '0.95rem', color: '#7f1d1d' }}>
              <div style={{ marginBottom: '6px' }}>✗ Forgetting R* includes ε</div>
              <div style={{ marginBottom: '6px' }}>✗ Assuming ab ≠ ba</div>
              <div>✗ Confusing R* with R⁺</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Module1_7;
