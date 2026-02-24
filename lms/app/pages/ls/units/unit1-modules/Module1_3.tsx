'use client';
import React, { useEffect } from 'react';
import Quiz from '../../components/Quiz';
import './Module1_1.css';

const module3Quiz = [
  {
    question: "How many morphemes are in the word 'antidisestablishmentarianism'?",
    options: ["4 morphemes", "5 morphemes", "6 morphemes", "7 morphemes"],
    correctAnswer: 2,
    explanation: "The word breaks down as: anti- (against) + dis- (remove) + establish (root: to set up) + -ment (noun-forming) + -arian (person) + -ism (doctrine). Each of these is a distinct morpheme carrying its own meaning."
  },
  {
    question: "Which of the following is a FREE morpheme?",
    options: ["-ness (as in 'happiness')", "book (as in 'bookstore')", "un- (as in 'unhappy')", "-ceive (as in 'receive')"],
    correctAnswer: 1,
    explanation: "A free morpheme can stand alone as an independent word. 'Book' is a complete word that can function independently, even though it can also appear in compounds like 'bookstore'."
  },
  {
    question: "Which suffix is INFLECTIONAL rather than derivational?",
    options: ["-ness (as in 'kindness')", "-ly (as in 'quickly')", "-s (as in 'cats')", "-tion (as in 'nation')"],
    correctAnswer: 2,
    explanation: "The plural '-s' is one of only eight inflectional morphemes in English. It adds grammatical information (plurality) without changing the word class—'cat' (noun) becomes 'cats' (still a noun)."
  },
  {
    question: "In the word 'nationalizations,' which morpheme attaches LAST (outermost layer)?",
    options: ["-tion", "-ize", "-s", "-al"],
    correctAnswer: 2,
    explanation: "Inflectional morphemes always attach AFTER derivational morphemes. The plural '-s' is inflectional, so it attaches at the very end as the outermost layer."
  },
  {
    question: "What is a 'cranberry morph'?",
    options: ["A morpheme that can only attach to fruit names", "A morpheme that is red in color", "A unique morpheme that appears in only one word", "A morpheme that is always a prefix"],
    correctAnswer: 2,
    explanation: "A cranberry morph (named after 'cran-' in 'cranberry') is a bound morpheme that appears in only one word and has no identifiable independent meaning. 'Cran' doesn't appear in any other English word."
  },
  {
    question: "Which of the following words contains a BOUND ROOT?",
    options: ["happiness", "receive", "bookstore", "running"],
    correctAnswer: 1,
    explanation: "'-ceive' is a bound root from Latin that cannot stand alone. It appears in words like 'receive,' 'conceive,' 'perceive,' and 'deceive' but never as an independent word."
  },
  {
    question: "What is the correct order of morphemes in 'nationalizations' from root to outermost affix?",
    options: [
      "nation + -al + -ize + -tion + -s",
      "nation + -ize + -al + -tion + -s",
      "nation + -s + -al + -ize + -tion",
      "nation + -tion + -al + -ize + -s"
    ],
    correctAnswer: 0,
    explanation: "The order is: nation (root, noun) → national (adjective, with -al) → nationalize (verb, with -ize) → nationalization (noun, with -tion) → nationalizations (plural noun, with -s)."
  },
  {
    question: "Which language type combines MANY morphemes into single words, with each morpheme having ONE clear meaning?",
    options: ["Isolating (e.g., Chinese)", "Agglutinative (e.g., Turkish)", "Fusional (e.g., Spanish)", "Polysynthetic (e.g., Inuktitut)"],
    correctAnswer: 1,
    explanation: "Agglutinative languages like Turkish and Finnish string together many morphemes, each with a single, clear meaning. The morpheme boundaries are clear and each adds one discrete meaning."
  },
  {
    question: "The word 'lukewarm' contains which type of special morpheme?",
    options: ["An allomorph", "A cranberry morph", "A fusional morpheme", "An inflectional suffix"],
    correctAnswer: 1,
    explanation: "'Luke' in 'lukewarm' is a cranberry morph—it appears only in this word and has no identifiable independent meaning for modern English speakers."
  },
  {
    question: "How many morphemes are in 'replaying'?",
    options: ["2 morphemes", "3 morphemes", "4 morphemes", "5 morphemes"],
    correctAnswer: 1,
    explanation: "The breakdown is: re- (prefix, meaning 'again') + play (free root, verb) + -ing (inflectional suffix, progressive aspect). 'Play' is a single morpheme despite having two syllables."
  }
];

const Module1_3: React.FC = () => {
  useEffect(() => {
    const handleCollapsible = () => {
      const collapsibles = document.querySelectorAll('.collapsible');
      collapsibles.forEach((button) => {
        const handleClick = function (this: HTMLElement) {
          this.classList.toggle('active');
          const content = this.nextElementSibling as HTMLElement;
          if (content && content.classList.contains('collapsible-content')) {
            if (content.style.maxHeight) {
              content.style.maxHeight = '';
            } else {
              content.style.maxHeight = content.scrollHeight + 'px';
            }
          }
        };
        button.removeEventListener('click', handleClick as any);
        button.addEventListener('click', handleClick as any);
      });
    };

    handleCollapsible();
    const timer = setTimeout(handleCollapsible, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.3</div>
        <div className="lesson-title-main">
          <h1>Morphology: The Study of Word Structure</h1>
        </div>
      </div>

      <div className="container" style={{ boxShadow: 'none', padding: 0, margin: 0, maxWidth: '100%' }}>
        {/* ==================== SECTION 1: OVERVIEW & MOTIVATION ==================== */}
        <div className="section" id="overview">
          <h2 className="section-title">
            <span className="section-icon">🎯</span> What You'll Master
          </h2>
          <div className="objectives-box">
            <h3>Learning Objectives</h3>
            <ul className="objectives-list">
              <li>Define morphology and explain its significance in linguistic analysis, distinguishing it from other levels of linguistic study such as phonology and syntax.</li>
              <li>Identify and classify morphemes into free vs. bound, and lexical vs. functional categories with 90% accuracy in given word examples.</li>
              <li>Differentiate between inflectional and derivational morphemes, explaining how each type affects word meaning and grammatical function.</li>
              <li>Analyze complex words by breaking them down into their constituent morphemes and constructing morphological trees to represent hierarchical structure.</li>
              <li>Apply morphological analysis skills to identify word formation processes including affixation, compounding, and conversion in English and other languages.</li>
            </ul>
          </div>

          <h3 className="subsection-title">🔥 Why This Topic Matters</h3>
          <p>
            Imagine you're reading a book and encounter the word "antidisestablishmentarianism." At first glance, it looks impossibly long and complex. But what if I told you this 28-letter word is actually built from just six smaller, meaningful pieces? This is the magic of morphology—the study of how words are constructed from smaller units of meaning.
          </p>
          <p>
            Morphology is everywhere in our daily lives. When you add an "-s" to make a noun plural, when you add "-ed" to show past tense, or when you transform "happy" into "unhappiness," you're using morphological rules. Understanding morphology helps you decode unfamiliar words, appreciate the systematic nature of language, and recognize patterns across different languages.
          </p>

          <div className="alert alert-success">
            <strong>💡 Real-World Applications:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Language Teaching:</strong> ESL instructors use morphological analysis to help learners decode unfamiliar vocabulary.</li>
              <li><strong>Speech Therapy:</strong> Pathologists analyze morpheme acquisition in children to identify delays.</li>
              <li><strong>Computational Linguistics:</strong> AI systems use morphological parsers to understand word forms.</li>
            </ul>
          </div>

          <div className="diagram-container">
            <h4>Figure 1: Morphological decomposition of "antidisestablishmentarianism"</h4>
            <svg width="100%" height="350" viewBox="0 0 900 350" preserveAspectRatio="xMidYMid meet">
              <rect x="0" y="0" width="900" height="350" fill="#f8f9fa" rx="10" />
              <text x="450" y="30" textAnchor="middle" fill="#2c3e50" fontSize="18" fontWeight="bold">antidisestablishmentarianism</text>
              <rect x="50" y="50" width="800" height="50" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" rx="5" />
              <text x="450" y="82" textAnchor="middle" fill="#1565c0" fontSize="16" fontFamily="monospace">anti + dis + establish + ment + arian + ism</text>

              <g transform="translate(50, 120)">
                <rect width="100" height="60" fill="#ffebee" stroke="#e53935" strokeWidth="2" rx="5" />
                <text x="50" y="25" textAnchor="middle" fill="#c62828" fontSize="14" fontWeight="bold">anti-</text>
                <text x="50" y="45" textAnchor="middle" fill="#c62828" fontSize="11">(against)</text>
              </g>
              <g transform="translate(160, 120)">
                <rect width="100" height="60" fill="#fff3e0" stroke="#fb8c00" strokeWidth="2" rx="5" />
                <text x="50" y="25" textAnchor="middle" fill="#ef6c00" fontSize="14" fontWeight="bold">dis-</text>
                <text x="50" y="45" textAnchor="middle" fill="#ef6c00" fontSize="11">(remove)</text>
              </g>
              <g transform="translate(270, 120)">
                <rect width="140" height="60" fill="#e8f5e9" stroke="#43a047" strokeWidth="2" rx="5" />
                <text x="70" y="25" textAnchor="middle" fill="#2e7d32" fontSize="14" fontWeight="bold">establish</text>
                <text x="70" y="45" textAnchor="middle" fill="#2e7d32" fontSize="11">(root: to set up)</text>
              </g>
              <g transform="translate(420, 120)">
                <rect width="100" height="60" fill="#e3f2fd" stroke="#1e88e5" strokeWidth="2" rx="5" />
                <text x="50" y="25" textAnchor="middle" fill="#1565c0" fontSize="14" fontWeight="bold">-ment</text>
                <text x="50" y="45" textAnchor="middle" fill="#1565c0" fontSize="11">(noun-forming)</text>
              </g>
              <g transform="translate(530, 120)">
                <rect width="100" height="60" fill="#f3e5f5" stroke="#8e24aa" strokeWidth="2" rx="5" />
                <text x="50" y="25" textAnchor="middle" fill="#6a1b9a" fontSize="14" fontWeight="bold">-arian</text>
                <text x="50" y="45" textAnchor="middle" fill="#6a1b9a" fontSize="11">(person)</text>
              </g>
              <g transform="translate(640, 120)">
                <rect width="100" height="60" fill="#e0f2f1" stroke="#00897b" strokeWidth="2" rx="5" />
                <text x="50" y="25" textAnchor="middle" fill="#00695c" fontSize="14" fontWeight="bold">-ism</text>
                <text x="50" y="45" textAnchor="middle" fill="#00695c" fontSize="11">(doctrine)</text>
              </g>

              <line x1="100" y1="180" x2="100" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="210" y1="180" x2="210" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="340" y1="180" x2="340" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="470" y1="180" x2="470" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="580" y1="180" x2="580" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="690" y1="180" x2="690" y2="200" stroke="#666" strokeWidth="2" />
              <line x1="100" y1="200" x2="690" y2="200" stroke="#666" strokeWidth="2" />
              <text x="155" y="225" textAnchor="middle" fill="#555" fontSize="12">PREFIXES</text>
              <text x="340" y="225" textAnchor="middle" fill="#555" fontSize="12">ROOT</text>
              <text x="610" y="225" textAnchor="middle" fill="#555" fontSize="12">SUFFIXES</text>

              <rect x="150" y="250" width="600" height="70" fill="#fffde7" stroke="#fbc02d" strokeWidth="2" rx="5" />
              <text x="450" y="275" textAnchor="middle" fill="#f57f17" fontSize="14" fontWeight="bold">Complete Meaning:</text>
              <text x="450" y="300" textAnchor="middle" fill="#f57f17" fontSize="13">"The doctrine/opposition of those against removing the established church"</text>
            </svg>
          </div>
        </div>

        {/* ==================== SECTION 2: THEORETICAL FOUNDATION ==================== */}
        <div className="section" id="theory">
          <h2 className="section-title">
            <span className="section-icon">📖</span> Deep Dive: Understanding Morphology
          </h2>
          <p>
            <strong>Morphology</strong> is the branch of linguistics that studies the internal structure of words. A <strong>morpheme</strong> is the smallest meaningful unit in a language.
          </p>

          <div className="alert alert-info">
            <strong>📌 Key Terminology:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><span className="term">Free Morpheme</span>: Can stand alone (e.g., cat, run).</li>
              <li><span className="term">Bound Morpheme</span>: Must attach to another morpheme (e.g., un-, -s).</li>
              <li><span className="term">Derivational</span>: Changes word class (e.g., happy [Adj] → happiness [N]).</li>
              <li><span className="term">Inflectional</span>: Adds grammar info only (e.g., cat → cats).</li>
            </ul>
          </div>

          <div className="diagram-container">
            <h4>Figure 3: Morphological tree structure of "unhappiness"</h4>
            <svg width="100%" height="400" viewBox="0 0 700 400" preserveAspectRatio="xMidYMid meet">
              <rect width="700" height="400" fill="#f8f9fa" rx="10" />
              <circle cx="350" cy="60" r="20" fill="#667eea" stroke="#2980b9" strokeWidth="2" />
              <text x="350" y="67" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">N</text>
              <line x1="350" y1="80" x2="250" y2="140" stroke="#34495e" strokeWidth="2" />
              <line x1="350" y1="80" x2="450" y2="140" stroke="#34495e" strokeWidth="2" />

              <circle cx="250" cy="160" r="25" fill="#3498db" stroke="#2980b9" strokeWidth="2" />
              <text x="250" y="167" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Adj</text>
              <rect x="415" y="140" width="70" height="40" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" rx="5" />
              <text x="450" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">-ness</text>

              <line x1="250" y1="185" x2="180" y2="250" stroke="#34495e" strokeWidth="2" />
              <line x1="250" y1="185" x2="320" y2="250" stroke="#34495e" strokeWidth="2" />

              <rect x="140" y="250" width="80" height="40" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" rx="5" />
              <text x="180" y="275" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">un-</text>
              <rect x="280" y="250" width="80" height="40" fill="#2ecc71" stroke="#27ae60" strokeWidth="2" rx="5" />
              <text x="320" y="275" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">happy</text>
            </svg>
          </div>

          <h3 className="subsection-title">The 8 English Inflectional Morphemes</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Morpheme</th>
                  <th>Function</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>-s</strong></td><td>Plural</td><td>cat → cat<strong>s</strong></td></tr>
                <tr><td><strong>-'s</strong></td><td>Possessive</td><td>Pat<strong>'s</strong> hat</td></tr>
                <tr><td><strong>-s</strong></td><td>3rd Person Singular Presentation</td><td>He walk<strong>s</strong></td></tr>
                <tr><td><strong>-ed</strong></td><td>Past Tense</td><td>He walk<strong>ed</strong></td></tr>
                <tr><td><strong>-ing</strong></td><td>Progressive</td><td>He is walk<strong>ing</strong></td></tr>
                <tr><td><strong>-en</strong></td><td>Past Participle</td><td>He has eat<strong>en</strong></td></tr>
                <tr><td><strong>-er</strong></td><td>Comparative</td><td>fast → fast<strong>er</strong></td></tr>
                <tr><td><strong>-est</strong></td><td>Superlative</td><td>fast → fast<strong>est</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== SECTION 3: WORKED EXAMPLES ==================== */}
        <div className="section" id="examples">
          <h2 className="section-title">
            <span className="section-icon">📝</span> Worked Examples
          </h2>

          <div className="example-box">
            <h4>Worked Example 1: Basic Analysis</h4>
            <div className="example-steps">
              <div className="step"><strong>Word:</strong> "unhappiness"</div>
              <div className="step"><strong>Step 1:</strong> Identify root: "happy" (Adj)</div>
              <div className="step"><strong>Step 2:</strong> Add prefix: "un-" (not happy)</div>
              <div className="step"><strong>Step 3:</strong> Add suffix: "-ness" (state of being)</div>
            </div>
            <p><strong>Result:</strong> 3 morphemes (un- + happy + -ness)</p>
          </div>

          <div className="example-box">
            <h4>Worked Example 2: Complex Analysis</h4>
            <div className="example-steps">
              <div className="step"><strong>Word:</strong> "nationalizations"</div>
              <div className="step"><strong>Breakdown:</strong> nation (root) + -al + -ize + -tion + -s</div>
              <div className="step"><strong>Process:</strong> N → Adj → V → N → N (Plural)</div>
            </div>
            <p><strong>Result:</strong> 5 morphemes</p>
          </div>

          <div className="example-box">
            <h4>Worked Example 3: Cranberry Morph</h4>
            <p><strong>Word:</strong> "cranberry"</p>
            <p><strong>Analysis:</strong> "berry" is a free root, but "cran-" appears only in this word and has no identifiable meaning for modern speakers.</p>
          </div>
        </div>

        {/* ==================== SECTION 4: PRACTICE & LAB ==================== */}
        <div className="section" id="lab">
          <h2 className="section-title">
            <span className="section-icon">🛠️</span> Hands-On Lab Exercise
          </h2>
          <div className="lab-exercise">
            <h3>Morphological Analysis Workshop</h3>
            <p><strong>Objective:</strong> Deconstruct complex words into their constituent morphemes.</p>
            <div className="example-box">
              <p>Analyze these words:</p>
              <ul>
                <li>internationalization</li>
                <li>uncharacteristically</li>
                <li>misunderstanding</li>
                <li>biodegradability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 5: MASTERY QUIZ ==================== */}
        <div className="section" id="quiz">
          <h2 className="section-title">
            <span className="section-icon">✅</span> Section Mastery Quiz
          </h2>
          <Quiz
            title="Morphology Mastery Quiz"
            questions={module3Quiz}
            subject="LS"
            unitId={1}
            moduleId={3}
          />
        </div>

        {/* ==================== SECTION 6: COMMON PITFALLS ==================== */}
        <div className="section" id="pitfalls">
          <h2 className="section-title">
            <span className="section-icon">⚠️</span> Common Pitfalls
          </h2>
          <div className="alert alert-danger">
            <strong>🚫 Confusing Syllables with Morphemes:</strong>
            <p>"Banana" has 3 syllables but only 1 morpheme. Morphemes MUST carry meaning.</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Forgetting the Order:</strong>
            <p>Inflectional morphemes (-s, -ed) ALWAYS attach last, at the outermost layer.</p>
          </div>
        </div>

        {/* ==================== FOOTER ==================== */}
        <div className="footer">
          <h3>🎓 Congratulations on Completing This Module!</h3>
          <p>You've mastered the building blocks of words. Next, we'll explore how these words combine in Syntax.</p>
          <div className="footer-links">
            <a href="#overview" className="footer-link">↑ Back to Top</a>
            <a href="#theory" className="footer-link">📖 Review Theory</a>
            <a href="#quiz" className="footer-link">✅ Retake Quiz</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module1_3;
