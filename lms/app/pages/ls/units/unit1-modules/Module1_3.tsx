import React, { useEffect } from 'react';

const Module1_3: React.FC = () => {
  useEffect(() => {
    const handleCollapsible = () => {
      const collapsibles = document.querySelectorAll('.collapsible');
      collapsibles.forEach((button) => {
        button.removeEventListener('click', handleClick);
        button.addEventListener('click', handleClick);
      });
    };

    const handleClick = function(e: Event) {
      const button = e.currentTarget as HTMLElement;
      button.classList.toggle('active');
      const content = button.nextElementSibling as HTMLElement;
      if (content && content.classList.contains('collapsible-content')) {
        if (content.style.maxHeight) {
          content.style.maxHeight = '';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    };

    handleCollapsible();
    const timer = setTimeout(handleCollapsible, 100);
    const timer2 = setTimeout(handleCollapsible, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      document.querySelectorAll('.collapsible').forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.8;
          color: #2c3e50;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-size: 16px;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          background: white;
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          border-radius: 10px;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 2.5em;
          margin-bottom: 15px;
        }
        .breadcrumb {
          font-size: 1.1em;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        .meta-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }
        .meta-card {
          background: rgba(255,255,255,0.15);
          padding: 15px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .meta-icon {
          font-size: 2em;
        }
        .meta-content strong {
          display: block;
          font-size: 0.9em;
          opacity: 0.8;
        }
        .meta-content span {
          font-size: 1.1em;
          font-weight: 600;
        }
        .section {
          margin-bottom: 50px;
        }
        .section-title {
          color: #2c3e50;
          font-size: 2em;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 3px solid #3498db;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .subsection-title {
          color: #34495e;
          font-size: 1.5em;
          margin: 30px 0 15px 0;
          padding-left: 15px;
          border-left: 4px solid #3498db;
        }
        .objectives-box {
          background: linear-gradient(135deg, #667eea15, #764ba215);
          padding: 30px;
          border-left: 5px solid #667eea;
          border-radius: 10px;
          margin: 25px 0;
        }
        .objectives-box h3 {
          color: #667eea;
          font-size: 1.5em;
          margin-bottom: 15px;
        }
        .objectives-list {
          list-style: none;
          counter-reset: objectives;
        }
        .objectives-list li {
          counter-increment: objectives;
          margin-bottom: 12px;
          padding-left: 45px;
          position: relative;
          line-height: 1.6;
        }
        .objectives-list li::before {
          content: counter(objectives);
          position: absolute;
          left: 0;
          top: 0;
          background: #667eea;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9em;
        }
        .alert {
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 5px solid;
        }
        .alert-success {
          background: #d4edda;
          border-color: #28a745;
          color: #155724;
        }
        .alert-info {
          background: #d1ecf1;
          border-color: #17a2b8;
          color: #0c5460;
        }
        .alert-danger {
          background: #f8d7da;
          border-color: #dc3545;
          color: #721c24;
        }
        .alert strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.1em;
        }
        .term {
          color: #667eea;
          font-weight: 600;
        }
        .diagram-container {
          margin: 30px 0;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          border: 2px solid #e9ecef;
        }
        .diagram-container h4 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
        }
        .diagram-caption {
          text-align: center;
          font-style: italic;
          color: #6c757d;
          font-size: 0.95em;
          margin-top: 15px;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin: 30px 0;
        }
        .image-card {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 10px;
          border: 2px solid #e9ecef;
        }
        .content-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }
        .image-caption {
          text-align: center;
          font-style: italic;
          color: #6c757d;
          font-size: 0.9em;
          margin-top: 10px;
        }
        .example-box {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 10px;
          border-left: 5px solid #667eea;
          margin: 25px 0;
        }
        .example-box h4 {
          color: #667eea;
          margin-bottom: 15px;
        }
        .example-steps {
          margin: 15px 0;
        }
        .step {
          background: white;
          padding: 12px 15px;
          margin: 10px 0;
          border-radius: 5px;
          border-left: 3px solid #3498db;
        }
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 30px;
          margin: 30px 0;
        }
        .video-card {
          background: #f8f9fa;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #e9ecef;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .video-info {
          padding: 20px;
        }
        .video-title {
          font-size: 1.2em;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        .video-description {
          color: #6c757d;
          font-size: 0.95em;
          line-height: 1.6;
        }
        p {
          margin-bottom: 15px;
          text-align: justify;
          line-height: 1.9;
        }
        .footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 3px solid #e9ecef;
          text-align: center;
          color: #6c757d;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 15px;
          flex-wrap: wrap;
        }
        .footer-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }
        .collapsible {
          background-color: #667eea;
          color: white;
          cursor: pointer;
          padding: 15px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          font-size: 1em;
          font-weight: 600;
          border-radius: 5px;
          margin-top: 10px;
          transition: background-color 0.3s ease;
        }
        .collapsible:hover {
          background-color: #764ba2;
        }
        .collapsible.active {
          background-color: #764ba2;
        }
        .collapsible-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .collapsible-content-inner {
          padding: 20px;
          background: #f8f9fa;
          border-left: 4px solid #667eea;
          border-radius: 0 0 5px 5px;
        }
        .lab-exercise {
          background: linear-gradient(135deg, #667eea15, #764ba215);
          padding: 30px;
          border-radius: 10px;
          margin: 40px 0;
          border: 2px solid #667eea;
        }
        .lab-exercise h3 {
          color: #667eea;
          font-size: 1.8em;
          margin-bottom: 10px;
        }
        .lab-exercise h2 {
          color: #2c3e50;
          font-size: 1.5em;
          margin-bottom: 20px;
        }
        .lab-objective {
          background: white;
          padding: 15px;
          margin: 15px 0;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .lab-steps {
          background: white;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
        }
        .lab-steps ol {
          margin-left: 20px;
        }
        .lab-steps li {
          margin-bottom: 15px;
        }
        .lab-steps li strong {
          color: #667eea;
          display: block;
          margin-bottom: 5px;
        }
      `}</style>
      <div className="container">
        <div className="header">
          <div className="breadcrumb">
            📚 Principles and Practices of Human Communication &gt; UNIT-1: Introduction to Language and Linguistics
          </div>
          <h1>📝 Morphology: The Study of Word Structure</h1>
          <div className="meta-info">
            <div className="meta-card">
              <div className="meta-icon">⏱️</div>
              <div className="meta-content">
                <strong>Estimated Time</strong>
                <span>75-90 minutes</span>
              </div>
            </div>
            <div className="meta-card">
              <div className="meta-icon">📊</div>
              <div className="meta-content">
                <strong>Difficulty</strong>
                <span>Beginner to Intermediate</span>
              </div>
            </div>
            <div className="meta-card">
              <div className="meta-icon">🎯</div>
              <div className="meta-content">
                <strong>Prerequisites</strong>
                <span>Phonetics, Basic Linguistics</span>
              </div>
            </div>
            <div className="meta-card">
              <div className="meta-icon">✅</div>
              <div className="meta-content">
                <strong>Pass Score</strong>
                <span>70% or higher</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="objectives">
          <h2 className="section-title">
            <span>🎯</span> What You&apos;ll Master
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
        </div>

        <div className="section" id="overview">
          <h3 className="subsection-title">🔥 Why This Topic Matters</h3>
          <p>
            Imagine you&apos;re reading a book and encounter the word &quot;antidisestablishmentarianism.&quot; At first glance, it looks impossibly long and complex. But what if I told you this 28-letter word is actually built from just six smaller, meaningful pieces? This is the magic of morphology—the study of how words are constructed from smaller units of meaning.
          </p>
          <p>
            Morphology is everywhere in our daily lives. When you add an &quot;-s&quot; to make a noun plural, when you add &quot;-ed&quot; to show past tense, or when you transform &quot;happy&quot; into &quot;unhappiness,&quot; you&apos;re using morphological rules. Understanding morphology helps you decode unfamiliar words, appreciate the systematic nature of language, and recognize patterns across different languages.
          </p>
          <div className="alert alert-success">
            <strong>💡 Real-World Applications:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Language Teaching:</strong> ESL instructors use morphological analysis to help learners decode unfamiliar vocabulary by recognizing prefixes, suffixes, and roots.</li>
              <li><strong>Speech Therapy:</strong> Pathologists analyze morpheme acquisition in children to identify language development delays.</li>
              <li><strong>Computational Linguistics:</strong> Natural language processing systems use morphological parsers to understand word forms in search engines and AI.</li>
              <li><strong>Lexicography:</strong> Dictionary compilers rely on morphological principles to organize entries and define word families.</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '30px 0', padding: '25px', background: '#f8f9fa', borderRadius: '10px', border: '2px solid #e9ecef' }}>
          <h4>Visual Representation: Breaking Down a Complex Word</h4>
          <svg width="900" height="350" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="900" height="350" fill="#f8f9fa" />
            <text x="450" y="30" textAnchor="middle" fill="#2c3e50" fontSize="18" fontWeight="bold">
              antidisestablishmentarianism
            </text>
            <rect x="50" y="50" width="800" height="50" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" rx="5" />
            <text x="450" y="82" textAnchor="middle" fill="#1565c0" fontSize="16" fontFamily="monospace">
              anti + dis + establish + ment + arian + ism
            </text>
            <rect x="50" y="120" width="100" height="60" fill="#ffebee" stroke="#e53935" strokeWidth="2" rx="5" />
            <text x="100" y="145" textAnchor="middle" fill="#c62828" fontSize="14" fontWeight="bold">
              anti-
            </text>
            <text x="100" y="165" textAnchor="middle" fill="#c62828" fontSize="11">
              (against)
            </text>
            <rect x="160" y="120" width="100" height="60" fill="#fff3e0" stroke="#fb8c00" strokeWidth="2" rx="5" />
            <text x="210" y="145" textAnchor="middle" fill="#ef6c00" fontSize="14" fontWeight="bold">
              dis-
            </text>
            <text x="210" y="165" textAnchor="middle" fill="#ef6c00" fontSize="11">
              (remove)
            </text>
            <rect x="270" y="120" width="140" height="60" fill="#e8f5e9" stroke="#43a047" strokeWidth="2" rx="5" />
            <text x="340" y="145" textAnchor="middle" fill="#2e7d32" fontSize="14" fontWeight="bold">
              establish
            </text>
            <text x="340" y="165" textAnchor="middle" fill="#2e7d32" fontSize="11">
              (root: to set up)
            </text>
            <rect x="420" y="120" width="100" height="60" fill="#e3f2fd" stroke="#1e88e5" strokeWidth="2" rx="5" />
            <text x="470" y="145" textAnchor="middle" fill="#1565c0" fontSize="14" fontWeight="bold">
              -ment
            </text>
            <text x="470" y="165" textAnchor="middle" fill="#1565c0" fontSize="11">
              (noun-forming)
            </text>
            <rect x="530" y="120" width="100" height="60" fill="#f3e5f5" stroke="#8e24aa" strokeWidth="2" rx="5" />
            <text x="580" y="145" textAnchor="middle" fill="#6a1b9a" fontSize="14" fontWeight="bold">
              -arian
            </text>
            <text x="580" y="165" textAnchor="middle" fill="#6a1b9a" fontSize="11">
              (person)
            </text>
            <rect x="640" y="120" width="100" height="60" fill="#e0f2f1" stroke="#00897b" strokeWidth="2" rx="5" />
            <text x="690" y="145" textAnchor="middle" fill="#00695c" fontSize="14" fontWeight="bold">
              -ism
            </text>
            <text x="690" y="165" textAnchor="middle" fill="#00695c" fontSize="11">
              (doctrine)
            </text>
            <line x1="100" y1="180" x2="100" y2="200" stroke="#666" strokeWidth="2" />
            <line x1="210" y1="180" x2="210" y2="200" stroke="#666" strokeWidth="2" />
            <line x1="340" y1="180" x2="340" y2="200" stroke="#666" strokeWidth="2" />
            <line x1="470" y1="180" x2="470" y2="200" stroke="#666" strokeWidth="2" />
            <line x1="580" y1="180" x2="580" y2="200" stroke="#666" strokeWidth="2" />
            <line x1="690" y1="180" x2="690" y2="200" stroke="#666" strokeWidth="2" />
            <line x1="100" y1="200" x2="690" y2="200" stroke="#666" strokeWidth="2" />
            <text x="155" y="225" textAnchor="middle" fill="#555" fontSize="12">
              PREFIXES
            </text>
            <text x="405" y="225" textAnchor="middle" fill="#555" fontSize="12">
              ROOT
            </text>
            <text x="610" y="225" textAnchor="middle" fill="#555" fontSize="12">
              SUFFIXES
            </text>
            <rect x="150" y="250" width="600" height="70" fill="#fffde7" stroke="#fbc02d" strokeWidth="2" rx="5" />
            <text x="450" y="275" textAnchor="middle" fill="#f57f17" fontSize="14" fontWeight="bold">
              Complete Meaning:
            </text>
            <text x="450" y="300" textAnchor="middle" fill="#f57f17" fontSize="13">
              &quot;The doctrine/opposition of those against removing the established church&quot;
            </text>
          </svg>
          <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6c757d', fontSize: '0.95em' }}>
            Figure 1: Morphological decomposition of &quot;antidisestablishmentarianism&quot; showing how six morphemes combine to create meaning
          </p>
        </div>

        <div className="section" id="theory">
          <h2 className="section-title">
            <span className="section-icon">
              📖
            </span>
            Deep Dive: Understanding Morphology
          </h2>
          <h3 className="subsection-title">
            Definition &amp; Fundamentals
          </h3>
          <p>
            <strong>
              Morphology
            </strong>
            (from Greek
            <em>
              morphe
            </em>
            = &quot;form&quot; +
            <em>
              logos
            </em>
            = &quot;study&quot;) is the branch of linguistics that studies the internal structure of words and how words are formed from smaller meaningful units called
            <strong>
              morphemes
            </strong>
            . While phonology deals with sounds and syntax deals with sentence structure, morphology occupies the crucial middle ground, examining how meaningful units combine to create the words we use every day.
          </p>
          <p>
            A
            <strong>
              morpheme
            </strong>
            is defined as the smallest unit of language that carries meaning. Unlike syllables, which are purely phonological units, morphemes are the building blocks of meaning. The word &quot;cats&quot; has two syllables (cat-s) but also two morphemes: &quot;cat&quot; (the root meaning a feline animal) and &quot;-s&quot; (the plural marker indicating more than one). Neither &quot;ca&quot; nor &quot;ts&quot; carries independent meaning, so they are not morphemes—they&apos;re just syllable divisions.
          </p>
          <p>
            Morphology exists because languages need to expand their vocabulary efficiently. Instead of creating entirely new words for every concept, languages use morphological processes to build new words from existing components. This systematic approach allows speakers to understand unfamiliar words by recognizing familiar parts. When you first hear &quot;unfriendliness,&quot; you can deduce its meaning by recognizing &quot;un-&quot; (not), &quot;friend&quot; (companion), &quot;-ly&quot; (characteristic of), and &quot;-ness&quot; (state of being).
          </p>
          <div className="alert alert-info">
            <strong>
              📌 Key Terminology:
            </strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>
                <span className="term">
                  Morpheme
                </span>
                : The smallest meaningful unit in a language; cannot be divided into smaller meaningful parts.
              </li>
              <li>
                <span className="term">
                  Root/Stem
                </span>
                : The core morpheme that carries the primary lexical meaning of a word; the part to which affixes attach.
              </li>
              <li>
                <span className="term">
                  Affix
                </span>
                : A bound morpheme attached to a root or stem, including prefixes (before), suffixes (after), infixes (within), and circumfixes (around).
              </li>
              <li>
                <span className="term">
                  Allomorph
                </span>
                : A variant form of a morpheme that appears in specific phonological or morphological contexts (e.g., /s/, /z/, and /ɪz/ are allomorphs of the plural morpheme).
              </li>
              <li>
                <span className="term">
                  Morphological Rule
                </span>
                : A systematic pattern governing how morphemes combine to form words in a particular language.
              </li>
            </ul>
          </div>
          {/* Visual: Types of Morphemes */}
          <div className="diagram-container">
            <h4>
              Classification of Morphemes
            </h4>
            <div className="mermaid">
              graph TD
    A[Morphemes] --&gt; B[Free Morphemes]
    A --&gt; C[Bound Morphemes]
    B --&gt; D[Lexical Morphemes
      &lt;br /&gt;
      Content Words]
    B --&gt; E[Functional Morphemes
      &lt;br /&gt;
      Function Words]
    C --&gt; F[Derivational Affixes
      &lt;br /&gt;
      Change word class/meaning]
    C --&gt; G[Inflectional Affixes
      &lt;br /&gt;
      Grammatical information]
    D --&gt; H[cat, run, happy,
      &lt;br /&gt;
      book, blue]
    E --&gt; I[the, a, and, but,
      &lt;br /&gt;
      in, on, at]
    F --&gt; J[un-, re-, -ness,
      &lt;br /&gt;
      -ly, -tion]
    G --&gt; K[-s plural, -ed past,
      &lt;br /&gt;
      -ing progressive,
      &lt;br /&gt;
      -er comparative]
    
    style A fill:#667eea,color:#fff
    style B fill:#3498db,color:#fff
    style C fill:#e74c3c,color:#fff
    style D fill:#2ecc71,color:#fff
    style E fill:#2ecc71,color:#fff
    style F fill:#f39c12,color:#fff
    style G fill:#f39c12,color:#fff
            </div>
            <p className="diagram-caption">
              Figure 2: Hierarchical classification of morphemes in English
            </p>
          </div>
          <h3 className="subsection-title">
            How It Works: The Mechanism of Word Formation
          </h3>
          <p>
            Word formation in morphology follows systematic patterns that speakers internalize as part of their linguistic competence. The process begins with identifying the root morpheme—the semantic core of the word. From there, speakers apply morphological rules to add affixes in a specific order, creating increasingly complex words.
          </p>
          <p>
            Consider the word &quot;unhappiness.&quot; The formation process follows a hierarchical structure:
          </p>
          <p>
            <strong>
              Step 1: Root Selection
            </strong>
            - We start with the root &quot;happy,&quot; an adjective describing a positive emotional state.
          </p>
          <p>
            <strong>
              Step 2: First Affixation
            </strong>
            - We add the prefix &quot;un-&quot; to create &quot;unhappy.&quot; This derivational prefix changes the meaning to its opposite (not happy) while maintaining the adjective category.
          </p>
          <p>
            <strong>
              Step 3: Second Affixation
            </strong>
            - We add the suffix &quot;-ness&quot; to create &quot;unhappiness.&quot; This derivational suffix changes the word class from adjective to noun, creating an abstract noun meaning &quot;the state of being unhappy.&quot;
          </p>
          <p>
            The order matters significantly. We cannot say &quot;happinessun&quot; or &quot;nessunhappy&quot; because English morphological rules specify that prefixes attach before suffixes, and certain affixes must attach directly to specific word classes. This hierarchical structure can be represented in a morphological tree, showing that &quot;un-&quot; attaches to &quot;happy&quot; first, and then &quot;-ness&quot; attaches to the resulting word &quot;unhappy.&quot;
          </p>
          <p>
            <strong>
              Analogy for Understanding:
            </strong>
            Think of word formation like building with LEGO blocks. The root is your base piece—the foundation. Affixes are specialized pieces that attach to the base in specific ways. You can&apos;t just attach pieces randomly; they must connect properly. A prefix is like adding a piece to the front of your structure, while a suffix attaches to the back. The order of attachment matters—just as you can&apos;t put the roof on a house before building the walls, you can&apos;t add certain affixes before others are in place.
          </p>
          {/* Visual: Morphological Tree */}
          <div className="diagram-container">
            <h4>
              Morphological Tree Structure
            </h4>
            <svg width="700" height="400" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect x="0" y="0" width="700" height="400" fill="#f8f9fa" />
              {/* Tree for "unhappiness" */}
              <text x="350" y="30" textAnchor="middle" fill="#2c3e50" fontSize="18" fontWeight="bold">
                unhappiness
              </text>
              {/* Top level N */}
              <circle cx="350" cy="60" r="20" fill="#667eea" stroke="#2980b9" strokeWidth="2" />
              <text x="350" y="67" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                N
              </text>
              {/* Lines from N */}
              <line x1="350" y1="80" x2="250" y2="140" stroke="#34495e" strokeWidth="2" />
              <line x1="350" y1="80" x2="450" y2="140" stroke="#34495e" strokeWidth="2" />
              {/* Left branch: unhappy (Adj) */}
              <circle cx="250" cy="160" r="25" fill="#3498db" stroke="#2980b9" strokeWidth="2" />
              <text x="250" y="167" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                Adj
              </text>
              {/* Right branch: ness */}
              <rect x="420" y="140" width="60" height="40" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" rx="5" />
              <text x="450" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                -ness
              </text>
              {/* Lines from Adj */}
              <line x1="250" y1="185" x2="180" y2="250" stroke="#34495e" strokeWidth="2" />
              <line x1="250" y1="185" x2="320" y2="250" stroke="#34495e" strokeWidth="2" />
              {/* Left: un- prefix */}
              <rect x="140" y="250" width="80" height="40" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" rx="5" />
              <text x="180" y="275" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                un-
              </text>
              {/* Right: happy root */}
              <rect x="280" y="250" width="80" height="40" fill="#2ecc71" stroke="#27ae60" strokeWidth="2" rx="5" />
              <text x="320" y="275" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                happy
              </text>
              {/* Labels */}
              <text x="180" y="320" textAnchor="middle" fill="#666" fontSize="12">
                (prefix: not)
              </text>
              <text x="320" y="320" textAnchor="middle" fill="#666" fontSize="12">
                (root: joyful)
              </text>
              <text x="450" y="210" textAnchor="middle" fill="#666" fontSize="12">
                (suffix: state of)
              </text>
              {/* Legend */}
              <rect x="50" y="340" width="600" height="50" fill="#fff" stroke="#ddd" strokeWidth="1" rx="5" />
              <text x="70" y="360" fill="#2c3e50" fontSize="12" fontWeight="bold">
                Legend:
              </text>
              <circle cx="150" cy="365" r="10" fill="#667eea" />
              <text x="170" y="370" fill="#666" fontSize="11">
                Noun category
              </text>
              <circle cx="280" cy="365" r="10" fill="#3498db" />
              <text x="300" y="370" fill="#666" fontSize="11">
                Adjective category
              </text>
              <rect x="400" y="355" width="20" height="20" fill="#e74c3c" rx="3" />
              <text x="430" y="370" fill="#666" fontSize="11">
                Affix (bound morpheme)
              </text>
              <rect x="530" y="355" width="20" height="20" fill="#2ecc71" rx="3" />
              <text x="560" y="370" fill="#666" fontSize="11">
                Root (free morpheme)
              </text>
            </svg>
            <p className="diagram-caption">
              Figure 3: Morphological tree showing the hierarchical structure of &quot;unhappiness&quot;
            </p>
          </div>
          <h3 className="subsection-title">
            Key Components: Types of Morphemes
          </h3>
          <p>
            <strong>
              1. Free Morphemes
            </strong>
          </p>
          <p>
            Free morphemes can stand alone as independent words. They carry complete meaning without needing to attach to other morphemes. English has thousands of free morphemes, including content words like &quot;book,&quot; &quot;run,&quot; &quot;blue,&quot; and &quot;think.&quot; Free morphemes divide into two subcategories:
            <strong>
              lexical morphemes
            </strong>
            (content words that carry the main meaning—nouns, verbs, adjectives, adverbs) and
            <strong>
              functional morphemes
            </strong>
            (grammatical words that provide structure—articles, prepositions, conjunctions, pronouns). For example, &quot;the,&quot; &quot;and,&quot; &quot;in,&quot; and &quot;she&quot; are all free morphemes because they can function as independent words, even though they don&apos;t carry rich semantic content.
          </p>
          <p>
            <strong>
              2. Bound Morphemes
            </strong>
          </p>
          <p>
            Bound morphemes cannot stand alone as independent words. They must attach to other morphemes to convey meaning. All affixes (prefixes, suffixes, infixes, circumfixes) are bound morphemes. The plural &quot;-s,&quot; past tense &quot;-ed,&quot; comparative &quot;-er,&quot; and prefixes like &quot;un-,&quot; &quot;re-,&quot; and &quot;pre-&quot; are all bound because saying just &quot;-s&quot; or &quot;un-&quot; alone doesn&apos;t communicate a complete concept. Some languages also have
            <strong>
              bound roots
            </strong>
            —roots that cannot stand alone. In English, &quot;ceive&quot; (as in &quot;receive,&quot; &quot;perceive,&quot; &quot;conceive&quot;) is a bound root from Latin that never appears independently.
          </p>
          <p>
            <strong>
              3. Derivational Morphemes
            </strong>
          </p>
          <p>
            Derivational morphemes create new words by changing either the meaning, the word class (part of speech), or both. When you add &quot;-ness&quot; to &quot;happy&quot; (adjective), you create &quot;happiness&quot; (noun)—the word class changes. When you add &quot;un-&quot; to &quot;happy,&quot; you create &quot;unhappy&quot; with the opposite meaning, but it remains an adjective. Derivational affixes typically apply before inflectional affixes, and they often have more specific, less predictable meanings than inflectional affixes. Each derivational affix can only attach to specific word classes: &quot;-ness&quot; attaches to adjectives, &quot;-ly&quot; can attach to adjectives or nouns, and &quot;un-&quot; primarily attaches to adjectives.
          </p>
          <p>
            <strong>
              4. Inflectional Morphemes
            </strong>
          </p>
          <p>
            Inflectional morphemes do not change the word class or create new words; they only add grammatical information required by the syntactic context. English has only eight inflectional morphemes: plural &quot;-s&quot; (cats), possessive &quot;-&apos;s&quot; (cat&apos;s), third person singular present &quot;-s&quot; (runs), past tense &quot;-ed&quot; (walked), progressive &quot;-ing&quot; (walking), past participle &quot;-en&quot; (eaten), comparative &quot;-er&quot; (faster), and superlative &quot;-est&quot; (fastest). Unlike derivational morphemes, inflectional morphemes are very regular in meaning and application, and they always appear at the very end of a word (after any derivational affixes).
          </p>
          {/* Visual: Inflectional vs Derivational */}
          <div className="image-grid">
            <div className="image-card">
              <img src="https://kimi-web-img.moonshot.cn/img/jenniferfindley.com/3dd57c85de77216c039ee12dbdc0449f3b560c23.png" alt="Inflectional and Derivational Morphemes Chart" className="content-image" />
              <p className="image-caption">
                Inflectional vs. Derivational Morphemes Comparison
              </p>
            </div>
            <div className="image-card">
              <img src="https://kimi-web-img.moonshot.cn/img/semanticsmorphology.weebly.com/6dff67f75925074410741ea864d31d5dfef1d57c.png" alt="English Inflectional Morphemes Table" className="content-image" />
              <p className="image-caption">
                English Inflectional Morphemes with Examples
              </p>
            </div>
          </div>
          <h3 className="subsection-title">
            Real-World Implementation: Morphology Across Languages
          </h3>
          <p>
            Different languages employ morphology to varying degrees. Linguists classify languages based on their morphological complexity:
          </p>
          <p>
            <strong>
              Isolating/Analytic Languages
            </strong>
            (like Mandarin Chinese and Vietnamese) use very few morphemes per word. Words typically remain in their root form, and grammatical relationships are shown through word order and separate particles rather than affixation. A Mandarin sentence might use separate words for &quot;I,&quot; &quot;eat,&quot; &quot;rice,&quot; and &quot;finished&quot; rather than inflecting a verb for tense.
          </p>
          <p>
            <strong>
              Fusional Languages
            </strong>
            (like Spanish, Russian, and Arabic) pack multiple grammatical meanings into single morphemes. A Spanish verb ending like &quot;-aron&quot; in &quot;hablaron&quot; (they spoke) simultaneously encodes past tense, third person, plural, and indicative mood—all in one suffix.
          </p>
          <p>
            <strong>
              Agglutinative Languages
            </strong>
            (like Turkish, Finnish, and Japanese) string together many morphemes, each with a single, clear meaning. Turkish is famous for extremely long words like &quot;Çekoslovakyalilastiramadiklarimizdanmissiniz&quot; (&quot;You are apparently one of those whom we could not make Czechoslovakian&quot;), where each morpheme adds one discrete meaning.
          </p>
          <p>
            <strong>
              Polysynthetic Languages
            </strong>
            (like Inuktitut and Mohawk) can express entire sentences in single words by incorporating nouns, verbs, and affixes together. An Inuktitut word might mean &quot;He wants to get a big boat,&quot; with morphemes for &quot;boat,&quot; &quot;big,&quot; &quot;get,&quot; &quot;want,&quot; and subject agreement all combined.
          </p>
          <div className="example-box">
            <h4>
              💻 Example: Morphological Analysis in Action
            </h4>
            <p>
              <strong>
                Word:
              </strong>
              &quot;unfriendliness&quot;
            </p>
            <p>
              <strong>
                Step-by-step breakdown:
              </strong>
            </p>
            <div className="example-steps">
              <div className="step">
                Identify the root: &quot;friend&quot; (noun, meaning companion)
              </div>
              <div className="step">
                Add derivational suffix &quot;-ly&quot;: &quot;friendly&quot; (adjective, meaning having the characteristics of a friend)
              </div>
              <div className="step">
                Add derivational prefix &quot;un-&quot;: &quot;unfriendly&quot; (adjective, meaning not friendly)
              </div>
              <div className="step">
                Add derivational suffix &quot;-ness&quot;: &quot;unfriendliness&quot; (noun, meaning the state of being unfriendly)
              </div>
            </div>
            <p>
              <strong>
                Result:
              </strong>
              4 morphemes total (1 root + 3 affixes), word class changed from noun → adjective → adjective → noun
            </p>
          </div>
          <h3 className="subsection-title">
            ⚠️ Common Misconceptions
          </h3>
          <div className="alert alert-danger">
            <strong>
              Misconception #1:
            </strong>
            &quot;Morphemes are the same as syllables.&quot;
            <p>
              <strong>
                Reality:
              </strong>
              Morphemes are units of
              <em>
                meaning
              </em>
              , while syllables are units of
              <em>
                sound
              </em>
              . The word &quot;cats&quot; has one syllable but two morphemes (cat + -s). Conversely, &quot;banana&quot; has three syllables (ba-na-na) but only one morpheme.
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>
              Misconception #2:
            </strong>
            &quot;All prefixes and suffixes are the same type.&quot;
            <p>
              <strong>
                Reality:
              </strong>
              Affixes serve different functions. Derivational affixes create new words and can change word class (happy → happiness), while inflectional affixes only add grammatical information and never change word class (cat → cats).
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>
              Misconception #3:
            </strong>
            &quot;Longer words always have more morphemes.&quot;
            <p>
              <strong>
                Reality:
              </strong>
              Word length doesn&apos;t determine morpheme count. &quot;Antidisestablishmentarianism&quot; has 6 morphemes despite being 28 letters, while &quot;strengths&quot; has only 2 morphemes (strong + -th + -s = actually 3: strong + -th + -s) despite being 8 letters.
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>
              Misconception #4:
            </strong>
            &quot;Every word must contain at least one bound morpheme.&quot;
            <p>
              <strong>
                Reality:
              </strong>
              Many words consist entirely of free morphemes. Simple words like &quot;cat,&quot; &quot;run,&quot; &quot;blue,&quot; and &quot;book&quot; are single free morphemes with no bound morphemes attached.
            </p>
          </div>
        </div>

        <div className="section" id="videos">
          <h2 className="section-title">
            <span className="section-icon">
              🎥
            </span>
            Learn Through Videos
          </h2>
          <p>
            Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.
          </p>
          <div className="video-grid">
            {/* Video 1: Crash Course Morphology */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/93sK4jTGrss" allowFullScreen={true} />
              </div>
              <div className="video-info">
                <div className="video-title">
                  📚 Morphology: Crash Course Linguistics #2
                </div>
                <div className="video-description">
                  CrashCourse • 10:49 • 690K+ views
                </div>
                <div className="video-description" style={{ marginTop: '5px' }}>
                  What you&apos;ll learn: Comprehensive overview of morphemes, bound vs. free morphemes, infixes, circumfixes, fusional morphology, and suppletion. Engaging animations and clear explanations.
                </div>
              </div>
            </div>
            {/* Video 2: Evan Ashworth Morphology */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/mv7t6Q0uebY" allowFullScreen={true} />
              </div>
              <div className="video-info">
                <div className="video-title">
                  🎬 Morphology (Part 1)
                </div>
                <div className="video-description">
                  Evan Ashworth • 14:19 • 460K+ views
                </div>
                <div className="video-description" style={{ marginTop: '5px' }}>
                  What you&apos;ll learn: Introduction to morphemes, free vs. bound morphemes, lexical vs. functional morphemes, derivational vs. inflectional morphemes with detailed examples.
                </div>
              </div>
            </div>
            {/* Video 3: MIT OpenCourseWare */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/Mvy5hjAWeZw" allowFullScreen={true} />
              </div>
              <div className="video-info">
                <div className="video-title">
                  💻 Lecture 2: Morphology, Part 1
                </div>
                <div className="video-description">
                  MIT OpenCourseWare • 1:16:16 • 190K+ views
                </div>
                <div className="video-description" style={{ marginTop: '5px' }}>
                  What you&apos;ll learn: University-level lecture covering morphological analysis, allomorphy, morphophonemics, and problem-solving techniques. Perfect for deeper understanding.
                </div>
              </div>
            </div>
            {/* Video 4: Language Science */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/MAwSrc6qMTQ" allowFullScreen={true} />
              </div>
              <div className="video-info">
                <div className="video-title">
                  🎓 Introduction to Linguistics: Morphology 1
                </div>
                <div className="video-description">
                  Language Science • 28:32 • 35K+ views
                </div>
                <div className="video-description" style={{ marginTop: '5px' }}>
                  What you&apos;ll learn: Academic lecture on morphological concepts, word formation processes, and practical analysis techniques with worked examples.
                </div>
              </div>
            </div>
          </div>
          <div className="alert alert-info">
            <strong>
              📺 Additional Resources:
            </strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>
                <strong>
                  Online Simulators:
                </strong>
                Visit the &quot;All About Morphology&quot; website for interactive morpheme identification exercises
              </li>
              <li>
                <strong>
                  Interactive Tutorials:
                </strong>
                Check out the SIL International Glossary of Linguistic Terms for comprehensive definitions
              </li>
              <li>
                <strong>
                  Practice Problems:
                </strong>
                Search for &quot;morphology problem sets&quot; from university linguistics courses (MIT, UCLA, Stanford)
              </li>
            </ul>
          </div>
        </div>

        <div className="section" id="algorithm">
          <h2 className="section-title">
            <span className="section-icon">⚙️</span>
            See It In Action: Morphological Analysis
          </h2>
          <h3 className="subsection-title">The Morphological Analysis Algorithm</h3>
          <p>
            Morphological analysis follows a systematic procedure for breaking down words into their constituent morphemes. This algorithm can be applied to any word in any language to identify its morphological structure.
          </p>
          <div className="example-box">
            <h4>Morphological Analysis Procedure</h4>
            <pre style={{ background: '#2c3e50', color: '#ecf0f1', padding: '20px', borderRadius: '8px', overflow: 'auto', fontSize: '0.9em', lineHeight: '1.6' }}>
{`// ============================================
// MORPHOLOGICAL ANALYSIS ALGORITHM
// Input: A word to analyze
// Output: List of morphemes with their types
// ============================================
ALGORITHM AnalyzeWord(word)
BEGIN
  // Step 1: Check if word is already in dictionary as simple word
  IF word is a simple root word THEN
    RETURN [word: FREE ROOT]
  END IF

  // Step 2: Identify and strip inflectional suffixes (outermost layer)
  inflectional_suffixes = ["-s", "-es", "-ed", "-ing", "-er", "-est", "-en"]
  FOR EACH suffix in inflectional_suffixes DO
    IF word ends_with suffix THEN
      stem = remove_suffix(word, suffix)
      morphemes.add(suffix: INFLECTIONAL)
      word = stem
      BREAK
    END IF
  END FOR

  // Step 3: Identify derivational suffixes (working inward)
  derivational_suffixes = ["-ness", "-ly", "-tion", "-able", "-ful", "-less", "-ment"]
  WHILE word matches any derivational_suffix DO
    suffix = find_matching_suffix(word)
    stem = remove_suffix(word, suffix)
    morphemes.add(suffix: DERIVATIONAL)
    word = stem
  END WHILE

  // Step 4: Identify prefixes (working from beginning)
  prefixes = ["un-", "re-", "pre-", "dis-", "mis-", "over-", "under-"]
  WHILE word starts_with any prefix DO
    prefix = find_matching_prefix(word)
    stem = remove_prefix(word, prefix)
    morphemes.add(prefix: DERIVATIONAL PREFIX)
    word = stem
  END WHILE

  // Step 5: What remains is the root
  IF word is a recognizable root THEN
    morphemes.add(word: FREE ROOT)
  ELSE IF word is a bound root THEN
    morphemes.add(word: BOUND ROOT)
  ELSE
    morphemes.add(word: UNKNOWN - consult etymology)
  END IF

  // Step 6: Return morphemes in order (prefixes + root + suffixes)
  RETURN morphemes
END`}
            </pre>
          </div>
          <div className="alert alert-info">
            <strong>⏱️ Complexity Analysis:</strong><br />
            <strong>Time Complexity:</strong> O(n × m) where n = word length, m = number of affixes to check<br />
            <strong>Space Complexity:</strong> O(k) where k = number of morphemes found<br />
            <strong>Best Case:</strong> O(1) for simple root words already in dictionary<br />
            <strong>Worst Case:</strong> O(n²) for words with multiple nested affixes requiring recursive analysis
          </div>

          <h3 className="subsection-title">Worked Example 1: Basic Analysis</h3>
          <div className="example-box">
            <h4>📝 Problem Statement</h4>
            <p>Analyze the word "unhappiness" into its constituent morphemes. Identify each morpheme&apos;s type (free/bound, derivational/inflectional) and explain the hierarchical structure.</p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step"><strong>Step 1: Check for inflectional suffixes</strong><p>The word ends with "-ness," which is not an inflectional suffix. Inflectional suffixes in English are: -s, -es, -ed, -ing, -er, -est, -en. No inflectional suffix found.</p></div>
              <div className="step"><strong>Step 2: Identify derivational suffixes (working from the end)</strong><p>"-ness" is a derivational suffix that forms nouns from adjectives. Remove "-ness" → stem is "unhappy."</p></div>
              <div className="step"><strong>Step 3: Continue with remaining word "unhappy"</strong><p>"unhappy" ends with "-y," which is part of the root, not a suffix. Check for prefixes: "un-" is a derivational prefix meaning "not." Remove "un-" → stem is "happy."</p></div>
              <div className="step"><strong>Step 4: Identify the root</strong><p>"happy" is a free lexical morpheme (adjective) that can stand alone as a word.</p></div>
              <div className="step"><strong>Step 5: Compile results</strong><p>Morphemes in order: "un-" (bound derivational prefix) + "happy" (free lexical root) + "-ness" (bound derivational suffix)</p></div>
            </div>
            <h4>✅ Final Answer</h4>
            <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
              <p><strong>Total morphemes: 3</strong></p>
              <p>1. <strong>un-</strong> (bound derivational prefix: "not")</p>
              <p>2. <strong>happy</strong> (free lexical root: adjective meaning "joyful")</p>
              <p>3. <strong>-ness</strong> (bound derivational suffix: creates abstract noun)</p>
              <p><strong>Word class transformation:</strong> Adjective → Noun</p>
            </div>
          </div>

          <h3 className="subsection-title">Worked Example 2: Complex Analysis with Inflection</h3>
          <div className="example-box">
            <h4>📝 Problem Statement</h4>
            <p>Analyze the word "nationalizations" into its constituent morphemes. Identify each morpheme&apos;s type and determine whether it is inflectional or derivational.</p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step"><strong>Step 1: Check for inflectional suffixes (always outermost)</strong><p>The word ends with "-s." This is the plural inflectional suffix. Remove "-s" → stem is "nationalization."</p></div>
              <div className="step"><strong>Step 2: Identify derivational suffixes</strong><p>"nationalization" ends with "-tion" (actually "-ation" or "-ion"), a derivational suffix that forms nouns from verbs. Remove "-tion" → stem is "nationalize."</p></div>
              <div className="step"><strong>Step 3: Continue identifying derivational suffixes</strong><p>"nationalize" ends with "-ize," a derivational suffix that forms verbs from adjectives/nouns. Remove "-ize" → stem is "national."</p></div>
              <div className="step"><strong>Step 4: Identify remaining derivational suffix</strong><p>"national" ends with "-al," a derivational suffix that forms adjectives from nouns. Remove "-al" → stem is "nation."</p></div>
              <div className="step"><strong>Step 5: Identify the root</strong><p>"nation" is a free lexical morpheme (noun) that can stand alone as a word.</p></div>
            </div>
            <h4>✅ Final Answer</h4>
            <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
              <p><strong>Total morphemes: 5</strong></p>
              <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#28a745', color: 'white' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Morpheme</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Type</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Category</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>nation</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Free</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Root</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Core meaning (noun)</td></tr>
                  <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>-al</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Bound</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Derivational</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Forms adjective</td></tr>
                  <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>-ize</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Bound</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Derivational</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Forms verb</td></tr>
                  <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>-tion</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Bound</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Derivational</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Forms noun</td></tr>
                  <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>-s</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Bound</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Inflectional</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Plural marker</td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: '10px' }}><strong>Word class transformation:</strong> Noun → Adjective → Verb → Noun (plural)</p>
            </div>
          </div>
        </div>

        <div className="section" id="comparison">
          <h2 className="section-title">
            <span className="section-icon">📊</span>
            Comparison &amp; Analysis
          </h2>
          <p>
            Understanding the differences between types of morphemes is crucial for accurate morphological analysis. This comparison table highlights the key distinctions you need to master.
          </p>
          <div style={{ overflowX: 'auto', margin: '20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
              <thead>
                <tr style={{ background: '#667eea', color: 'white' }}>
                  <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Free Morphemes</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Bound Morphemes</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Derivational Affixes</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Inflectional Affixes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Definition</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Can stand alone as words</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Must attach to other morphemes</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Create new words with new meanings</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Add grammatical information only</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Examples</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>cat, run, happy, blue, book</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>-s, -ed, un-, -ness, -ly</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>un-, re-, -ness, -ly, -tion, -able</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>-s (plural), -ed (past), -ing, -er, -est</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Changes Word Class?</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>N/A</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>N/A</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><span style={{ color: '#28a745' }}>✓</span> Often changes word class<br />(happy Adj → happiness N)</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><span style={{ color: '#dc3545' }}>✗</span> Never changes word class<br />(cat N → cats N)</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Position in Word</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Can be root or standalone</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Always attached to root/stem</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Closer to root (inner layer)</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Outermost layer (last to attach)</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Number in English</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Thousands</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Hundreds</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Approximately 100+ common ones</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Only 8 total</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Productivity</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>N/A</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>N/A</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Varies; some very productive (-ness), others limited</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Highly productive; apply to almost all words in category</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Creates New Word?</strong></td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>N/A</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>N/A</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><span style={{ color: '#28a745' }}>✓</span> Yes, creates new dictionary entry</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}><span style={{ color: '#dc3545' }}>✗</span> No, same word, different grammatical form</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="subsection-title">When to Use What?</h3>
          <div className="alert alert-info">
            <strong>Decision Guide for Morphological Analysis:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Start with inflectional morphemes:</strong> Always check for plural -s, past tense -ed, comparative -er, etc. first. These are always at the outermost layer.</li>
              <li><strong>Work inward for derivational suffixes:</strong> After removing inflectional suffixes, check for derivational suffixes like -ness, -ly, -tion working from the end toward the root.</li>
              <li><strong>Check for prefixes last:</strong> Prefixes attach at the beginning, so identify them after stripping suffixes.</li>
              <li><strong>What remains is the root:</strong> After removing all affixes, the remaining element should be a recognizable root (free or bound).</li>
            </ul>
          </div>
        </div>

        <div className="diagram-container" style={{ marginTop: '40px' }}>
          <h4>Morphological Typology: Languages of the World</h4>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            {/* Polysynthetic */}
            <div style={{ background: '#f3e5f5', border: '3px solid #9c27b0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '15px', color: '#6a1b9a' }}>Polysynthetic</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ background: 'white', border: '2px solid #9c27b0', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Entire sentence in one word</div>
                <div style={{ background: 'white', border: '2px solid #9c27b0', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Many incorporated elements</div>
                <div style={{ background: 'white', border: '2px solid #9c27b0', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Extremely long words</div>
              </div>
            </div>
            {/* Fusional */}
            <div style={{ background: '#fff3e0', border: '3px solid #ff9800', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '15px', color: '#e65100' }}>Fusional</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ background: 'white', border: '2px solid #ff9800', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Single morpheme = Multiple meanings</div>
                <div style={{ background: 'white', border: '2px solid #ff9800', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Complex inflectional systems</div>
                <div style={{ background: 'white', border: '2px solid #ff9800', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Difficult to segment</div>
              </div>
            </div>
            {/* Agglutinative */}
            <div style={{ background: '#e8f5e9', border: '3px solid #4caf50', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '15px', color: '#2e7d32' }}>Agglutinative</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ background: 'white', border: '2px solid #4caf50', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Many morphemes per word</div>
                <div style={{ background: 'white', border: '2px solid #4caf50', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Each morpheme = One meaning</div>
                <div style={{ background: 'white', border: '2px solid #4caf50', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Clear boundaries between morphemes</div>
              </div>
            </div>
            {/* Isolating/Analytic */}
            <div style={{ background: '#e3f2fd', border: '3px solid #2196f3', borderRadius: '8px', padding: '20px' }}>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '15px', color: '#1565c0' }}>Isolating/Analytic</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ background: 'white', border: '2px solid #2196f3', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>One word = One morpheme</div>
                <div style={{ background: 'white', border: '2px solid #2196f3', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Word order crucial</div>
                <div style={{ background: 'white', border: '2px solid #2196f3', borderRadius: '5px', padding: '10px 15px', fontSize: '0.9em' }}>Few or no affixes</div>
              </div>
            </div>
          </div>
          <p className="diagram-caption">Figure 6: Four major morphological types of languages</p>
        </div>

        <h3 className="subsection-title">Problem-Solving Practice</h3>
        <div className="example-box">
          <h4>📘 Easy Problem</h4>
          <p><strong>Problem:</strong> Break down the word "unfriendly" into its morphemes. Identify the type of each morpheme and the order of affixation.</p>
          <button className="collapsible">Show Solution</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <h4>Solution:</h4>
              <div className="example-steps">
                <div className="step">Identify the root: "friend" (free lexical morpheme, noun)</div>
                <div className="step">Add "-ly" (bound derivational suffix) → "friendly" (adjective)</div>
                <div className="step">Add "un-" (bound derivational prefix) → "unfriendly" (adjective)</div>
              </div>
              <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                <strong>Final Answer:</strong> 3 morphemes total: un- (prefix) + friend (root) + -ly (suffix). Both affixes are derivational. Word class: Noun → Adjective → Adjective.
              </div>
            </div>
          </div>
        </div>

        <div className="example-box">
          <h4>📙 Medium Problem</h4>
          <p><strong>Problem:</strong> Analyze "deinstitutionalization" into its constituent morphemes. How many morphemes are present? What is the word class at each stage of derivation?</p>
          <button className="collapsible">Show Solution</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <h4>Solution:</h4>
              <div className="example-steps">
                <div className="step">Root: "institute" (verb: to establish)</div>
                <div className="step">Add "-tion" → "institution" (noun: an established organization)</div>
                <div className="step">Add "-al" → "institutional" (adjective: relating to an institution)</div>
                <div className="step">Add "-ize" → "institutionalize" (verb: to make institutional)</div>
                <div className="step">Add "de-" → "deinstitutionalize" (verb: to remove from institutional setting)</div>
                <div className="step">Add "-tion" → "deinstitutionalization" (noun: the process of deinstitutionalizing)</div>
              </div>
              <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                <strong>Final Answer:</strong> 6 morphemes: de- + institute + -tion + -al + -ize + -tion. Word class changes: V → N → Adj → V → V → N.
              </div>
            </div>
          </div>
        </div>

        <div className="example-box">
          <h4>📕 Hard Problem</h4>
          <p><strong>Problem:</strong> The word "blackberry" can be analyzed in two different ways. Provide both analyses and explain the difference in meaning between them.</p>
          <button className="collapsible">Show Solution</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <h4>Solution:</h4>
              <p><strong>Analysis 1: Compound Word (most common)</strong></p>
              <div className="example-steps">
                <div className="step">"black" (free morpheme, adjective) + "berry" (free morpheme, noun)</div>
                <div className="step">This is a compound noun referring to a specific type of dark-colored berry</div>
                <div className="step">Both elements are free morphemes that can stand alone</div>
              </div>
              <p><strong>Analysis 2: Proper Noun (brand name)</strong></p>
              <div className="example-steps">
                <div className="step">When capitalized as "BlackBerry," this is a proper noun (brand name for smartphones)</div>
                <div className="step">As a brand name, it functions as a single, unanalyzable unit</div>
                <div className="step">The morphological structure is irrelevant to its meaning as a trademark</div>
              </div>
              <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                <strong>Key Insight:</strong> The same string of letters can have different morphological analyses depending on context. Lowercase "blackberry" = compound of two free morphemes. Capitalized "BlackBerry" = proper noun with no internal morphological structure relevant to its meaning.
              </div>
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Short Answer Questions</h3>
        <div className="example-box">
          <h4>Question 1:</h4>
          <p>Explain the difference between a morpheme and a syllable, providing specific examples to illustrate your answer.</p>
          <button className="collapsible">Show Sample Answer</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <p>A morpheme is the smallest unit of <strong>meaning</strong> in a language, while a syllable is a unit of <strong>sound</strong> (pronunciation). These are completely different concepts from different levels of linguistic analysis.</p>
              <p><strong>Example 1:</strong> The word "cats" has one syllable (the vowel sound /æ/ forms one syllable nucleus) but two morphemes: "cat" (meaning feline animal) and "-s" (meaning plural). The syllable division is /kæts/ (one syllable), but the morpheme division is cat + -s.</p>
              <p><strong>Example 2:</strong> The word "banana" has three syllables (ba-na-na) based on its three vowel sounds, but only one morpheme because the entire word carries a single meaning and cannot be broken into smaller meaningful parts.</p>
              <p><strong>Key distinction:</strong> Morphemes are about meaning and can be identified by asking "does this part have a meaning I can identify?" Syllables are about pronunciation and can be identified by counting vowel sounds.</p>
            </div>
          </div>
        </div>

        <div className="example-box">
          <h4>Question 2:</h4>
          <p>Why do linguists say that English has only eight inflectional morphemes? List them and explain why other suffixes like "-ly" and "-ness" are not considered inflectional.</p>
          <button className="collapsible">Show Sample Answer</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <p>Linguists identify only eight inflectional morphemes in English because these are the only suffixes that:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>Add purely grammatical information (not new lexical meaning)</li>
                <li>Never change the word class (part of speech)</li>
                <li>Are completely productive (apply to all words in a category)</li>
                <li>Appear at the outermost layer of word structure</li>
              </ul>
              <p><strong>The Eight English Inflectional Morphemes:</strong></p>
              <ol style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>-s (plural): cat → cats</li>
                <li>-&apos;s (possessive): cat → cat&apos;s</li>
                <li>-s (3rd person singular present): walk → walks</li>
                <li>-ed (past tense): walk → walked</li>
                <li>-ing (progressive): walk → walking</li>
                <li>-en (past participle): eat → eaten</li>
                <li>-er (comparative): fast → faster</li>
                <li>-est (superlative): fast → fastest</li>
              </ol>
              <p><strong>Why "-ly" and "-ness" are derivational:</strong></p>
              <p>"-ly" changes adjectives to adverbs (quick → quickly), changing word class. "-ness" changes adjectives to nouns (happy → happiness), also changing word class and creating a new word with new meaning. These are derivational because they create new dictionary entries, not just grammatical variants of the same word.</p>
            </div>
          </div>
        </div>

        <div className="example-box">
          <h4>Question 3:</h4>
          <p>Describe the hierarchical structure of the word "unbelievably" using a morphological tree diagram and explain the order of affixation.</p>
          <button className="collapsible">Show Sample Answer</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <p>The word "unbelievably" has the following structure:</p>
              <div style={{ background: '#f8f9fa', padding: '15px', margin: '15px 0', borderRadius: '5px' }}>
                <pre style={{ fontFamily: 'monospace', lineHeight: '1.5' }}>{`       Adv
        |
   +----+----+
   |         |
  Adj       -ly
   |
 +--+--+
 |     |
un-  N/Adj
      |
   +--+--+
   |     |
believe -able`}</pre>
              </div>
              <p><strong>Order of Affixation:</strong></p>
              <ol style={{ marginLeft: '20px' }}>
                <li>Start with root: "believe" (verb)</li>
                <li>Add "-able" → "believable" (adjective, meaning "able to be believed")</li>
                <li>Add "un-" → "unbelievable" (adjective, meaning "not able to be believed")</li>
                <li>Add "-ly" → "unbelievably" (adverb, meaning "in an unbelievable manner")</li>
              </ol>
              <p>The prefix "un-" attaches to the adjective "believable," not directly to the root "believe." This is shown in the tree where "un-" branches from the Adj node, which itself contains "believe" + "-able."</p>
            </div>
          </div>
        </div>

        <div className="lab-exercise">
          <h3>🛠️ Hands-On Lab Exercise</h3>
          <h2>Morphological Analysis Workshop</h2>
          <div className="lab-objective">
            <strong>📋 Objective:</strong>
            <p>In this lab, you will practice analyzing words from various sources (newspaper articles, academic texts, social media) to identify their constituent morphemes. You will create morphological trees and explain the hierarchical structure of complex words.</p>
          </div>
          <div className="lab-objective">
            <strong>⏱️ Estimated Time:</strong> 45-60 minutes
          </div>
          <div className="lab-objective">
            <strong>🎯 Learning Goals:</strong>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Accurately identify and classify morphemes in unfamiliar words</li>
              <li>Create proper morphological tree diagrams</li>
              <li>Distinguish between derivational and inflectional affixes</li>
              <li>Recognize allomorphs and cranberry morphs</li>
            </ul>
          </div>
          <div className="lab-steps">
            <h4>📝 Instructions:</h4>
            <ol>
              <li><strong>Collect Your Data</strong><p>Find a paragraph from a newspaper article or academic text. Select 10 words that appear to have multiple morphemes (avoid simple words like "cat," "run," "book").</p></li>
              <li><strong>Initial Analysis</strong><p>For each word, write down your initial guess about how many morphemes it contains and what they might be.</p></li>
              <li><strong>Systematic Breakdown</strong><p>Apply the morphological analysis algorithm: (a) strip inflectional suffixes first, (b) identify derivational suffixes working inward, (c) identify prefixes, (d) identify the root.</p></li>
              <li><strong>Classification</strong><p>For each morpheme you identify, classify it as: free/bound, root/affix, derivational/inflectional (if affix).</p></li>
              <li><strong>Tree Construction</strong><p>Draw a morphological tree for at least 3 of your most complex words, showing the hierarchical structure and order of affixation.</p></li>
              <li><strong>Reflection</strong><p>Write a brief paragraph answering: Which words were easiest to analyze? Which were most difficult? Did you encounter any cranberry morphs or allomorphs?</p></li>
            </ol>
          </div>
          <div className="lab-objective">
            <strong>📦 Sample Words to Analyze:</strong>
            <p>If you cannot find your own text, analyze these words:</p>
            <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>internationalization</li>
              <li>uncharacteristically</li>
              <li>misunderstanding</li>
              <li>biodegradability</li>
              <li>counterproductive</li>
              <li>disproportionately</li>
              <li>incomprehensibility</li>
              <li>multidisciplinary</li>
              <li>overgeneralization</li>
              <li>unpredictability</li>
            </ol>
          </div>
          <div className="lab-objective">
            <strong>✅ Expected Output:</strong>
            <p>A completed worksheet showing:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>10 analyzed words with morpheme breakdowns</li>
              <li>Classification for each morpheme</li>
              <li>3 morphological tree diagrams</li>
              <li>1 reflection paragraph (150-200 words)</li>
            </ul>
          </div>
          <div className="lab-objective">
            <strong>🎓 Grading Rubric:</strong>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Accuracy of morpheme identification: 40 points</li>
              <li>Correct classification of morphemes: 20 points</li>
              <li>Quality of tree diagrams: 20 points</li>
              <li>Thoughtful reflection: 10 points</li>
              <li>Presentation and organization: 10 points</li>
            </ul>
          </div>
        </div>

        <div className="section" id="pitfalls">
          <h2 className="section-title">
            <span className="section-icon">⚠️</span>
            Common Pitfalls &amp; How to Avoid Them
          </h2>
          <p>Learn from common mistakes students make when learning morphology. Understanding these pitfalls will help you avoid them in exams and practical applications.</p>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #1: Confusing Syllables with Morphemes</strong>
            <p><strong>What students do wrong:</strong> Count syllables instead of meaningful units. For example, thinking "banana" has 3 morphemes because it has 3 syllables (ba-na-na).</p>
            <p><strong>Why it&apos;s wrong:</strong> Syllables are units of sound/pronunciation; morphemes are units of meaning. A word can have many syllables but only one morpheme.</p>
            <p><strong>Consequences:</strong> Incorrect morpheme counts, failure to identify actual morphological structure.</p>
            <p><strong>✅ How to avoid it:</strong> Always ask "Does this part have a meaning I can identify?" If you can&apos;t assign a meaning to a segment, it&apos;s not a separate morpheme.</p>
            <p><strong>Example:</strong> "Watermelon" has 4 syllables (wa-ter-me-lon) but only 2 morphemes (water + melon).</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #2: Treating All Affixes as the Same Type</strong>
            <p><strong>What students do wrong:</strong> Failing to distinguish between derivational and inflectional affixes, or assuming all prefixes/suffixes work the same way.</p>
            <p><strong>Why it&apos;s wrong:</strong> Derivational and inflectional morphemes have different functions, positions, and properties. Confusing them leads to incorrect analysis.</p>
            <p><strong>Consequences:</strong> Wrong classification, failure to understand word formation processes.</p>
            <p><strong>✅ How to avoid it:</strong> Memorize the eight English inflectional morphemes (-s plural, -&apos;s possessive, -s 3rd person, -ed past, -ing progressive, -en past participle, -er comparative, -est superlative). Everything else is likely derivational.</p>
            <p><strong>Remember:</strong> Inflectional morphemes are always at the outermost layer and never change word class.</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #3: Forgetting the Order of Affixation</strong>
            <p><strong>What students do wrong:</strong> Listing morphemes in alphabetical or random order instead of hierarchical order.</p>
            <p><strong>Why it&apos;s wrong:</strong> The order of affixation matters for understanding word structure. Some affixes attach to stems that already have other affixes.</p>
            <p><strong>Consequences:</strong> Incorrect morphological trees, failure to understand how complex words are built.</p>
            <p><strong>✅ How to avoid it:</strong> Always work from the outside in: inflectional suffixes first, then derivational suffixes, then prefixes. What remains is the root.</p>
            <p><strong>Example:</strong> In "unhappiness," "-ness" attaches to "unhappy," not directly to "happy." The tree structure shows this hierarchy.</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #4: Assigning Meaning to Cranberry Morphs</strong>
            <p><strong>What students do wrong:</strong> Trying to find meaning in cranberry morphs like "cran-" or "luke-" or treating them as productive morphemes.</p>
            <p><strong>Why it&apos;s wrong:</strong> Cranberry morphs have no identifiable meaning for modern speakers and appear in only one word.</p>
            <p><strong>Consequences:</strong> Incorrect analysis, invented etymologies.</p>
            <p><strong>✅ How to avoid it:</strong> If a morpheme appears in only one word and you can&apos;t define it, it&apos;s likely a cranberry morph. Don&apos;t force a meaning.</p>
            <p><strong>Common cranberry morphs:</strong> "cran-" (cranberry), "luke-" (lukewarm), "-ceive" (receive, conceive, perceive).</p>
          </div>
          <div className="alert alert-warning">
            <strong>💡 Exam Tips:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Always start with inflectional morphemes</strong> when analyzing a word—they&apos;re at the outermost layer.</li>
              <li><strong>Check if the remaining stem is a real word</strong> after removing affixes—if yes, it&apos;s likely a free root.</li>
              <li><strong>Count the morphemes in "antidisestablishmentarianism"</strong> as a practice question—it&apos;s a classic exam favorite.</li>
              <li><strong>Remember: English has only 8 inflectional morphemes</strong>—if it&apos;s not one of those, it&apos;s derivational.</li>
              <li><strong>Draw tree diagrams clearly</strong> showing the hierarchical structure, not just a flat list.</li>
            </ul>
          </div>
        </div>

        <div className="section" id="cheatsheet">
          <h2 className="section-title">
            <span className="section-icon">📄</span>
            Quick Reference Cheat Sheet
          </h2>
          <p>
            Save this page for quick review! Here&apos;s everything you need to remember at a glance.
          </p>
          
          <div className="example-box" style={{ background: 'linear-gradient(135deg, #667eea15, #764ba215)' }}>
            <h4>🔑 Key Definitions</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Morpheme:</strong> Smallest unit of meaning</li>
              <li><strong>Free morpheme:</strong> Can stand alone as a word</li>
              <li><strong>Bound morpheme:</strong> Must attach to other morphemes</li>
              <li><strong>Root:</strong> Core morpheme carrying main meaning</li>
              <li><strong>Affix:</strong> Bound morpheme attached to root</li>
              <li><strong>Allomorph:</strong> Variant form of a morpheme</li>
            </ul>
          </div>

          <div className="example-box" style={{ background: '#fff3e0', borderLeft: '5px solid #ff9800' }}>
            <h4>📐 The 8 Inflectional Morphemes</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>-s</strong> (plural): cats</li>
              <li><strong>-&apos;s</strong> (possessive): cat&apos;s</li>
              <li><strong>-s</strong> (3rd person): walks</li>
              <li><strong>-ed</strong> (past): walked</li>
              <li><strong>-ing</strong> (progressive): walking</li>
              <li><strong>-en</strong> (past participle): eaten</li>
              <li><strong>-er</strong> (comparative): faster</li>
              <li><strong>-est</strong> (superlative): fastest</li>
            </ul>
          </div>

          <div className="example-box" style={{ background: '#e8f5e9', borderLeft: '5px solid #4caf50' }}>
            <h4>⚙️ Analysis Algorithm</h4>
            <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
              <li>Strip inflectional suffixes (outermost)</li>
              <li>Identify derivational suffixes (inward)</li>
              <li>Identify prefixes (beginning)</li>
              <li>What remains is the root</li>
              <li>Classify each morpheme</li>
              <li>Draw hierarchical tree</li>
            </ol>
          </div>

          <div className="example-box" style={{ background: '#e3f2fd', borderLeft: '5px solid #2196f3' }}>
            <h4>✅ Derivational vs. Inflectional</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
              <div>
                <h5 style={{ color: '#1565c0', marginBottom: '10px' }}>Derivational:</h5>
                <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                  <li>Creates new words</li>
                  <li>May change word class</li>
                  <li>Closer to root</li>
                </ul>
              </div>
              <div>
                <h5 style={{ color: '#1565c0', marginBottom: '10px' }}>Inflectional:</h5>
                <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                  <li>Same word, different form</li>
                  <li>Never changes word class</li>
                  <li>Outermost layer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="example-box" style={{ background: '#ffebee', borderLeft: '5px solid #e53935' }}>
            <h4>⚠️ Common Cranberry Morphs</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>&quot;cran-&quot;</strong> (cranberry)</li>
              <li><strong>&quot;luke-&quot;</strong> (lukewarm)</li>
              <li><strong>&quot;-ceive&quot;</strong> (receive, conceive)</li>
              <li><strong>&quot;kith-&quot;</strong> (kith and kin)</li>
              <li><strong>&quot;-kempt&quot;</strong> (unkempt)</li>
            </ul>
          </div>

          <div className="example-box" style={{ background: '#f3e5f5', borderLeft: '5px solid #9c27b0' }}>
            <h4>🌍 Language Types</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Isolating:</strong> One morpheme per word (Chinese)</li>
              <li><strong>Agglutinative:</strong> Many morphemes, clear boundaries (Turkish)</li>
              <li><strong>Fusional:</strong> One morpheme, multiple meanings (Spanish)</li>
              <li><strong>Polysynthetic:</strong> Sentence in one word (Inuktitut)</li>
            </ul>
          </div>
        </div>

        <div className="section" id="further">
          <h2 className="section-title">
            <span className="section-icon">🚀</span>
            Go Deeper: Advanced Topics &amp; Resources
          </h2>
          <h3 className="subsection-title">Advanced Concepts</h3>
          <p>Ready to go beyond the basics? Here are related advanced topics:</p>
          <div className="example-box">
            <h4>🔬 Advanced Topic 1: Morphophonemics and Allomorphy</h4>
            <p>Morphophonemics studies how morphemes change their phonological form depending on their environment. The English plural morpheme has three allomorphs: /s/ (cats), /z/ (dogs), and /ɪz/ (boxes). Understanding these patterns requires knowledge of phonological rules like voicing assimilation and syllable structure constraints.</p>
            <p><strong>Learn more:</strong> Search for "English plural allomorphy" or "morphophonological rules"</p>
          </div>
          <div className="example-box">
            <h4>🔬 Advanced Topic 2: Optimality Theory in Morphology</h4>
            <p>Optimality Theory (OT) applies to morphology as well as phonology. OT-morphology explains how languages select the optimal allomorph in a given context through ranked constraints. This framework helps explain why certain morpheme combinations are preferred over others.</p>
            <p><strong>Learn more:</strong> Read "Optimality Theory" by Prince and Smolensky; search for "OT morphology"</p>
          </div>
          <div className="example-box">
            <h4>🔬 Advanced Topic 3: Distributed Morphology</h4>
            <p>Distributed Morphology (DM) is a theoretical framework that posits a single generative engine for both syntax and morphology. In DM, morphemes are abstract features that are spelled out as phonological forms post-syntactically. This theory blurs the traditional boundary between syntax and morphology.</p>
            <p><strong>Learn more:</strong> Read Halle and Marantz&apos;s foundational papers on Distributed Morphology</p>
          </div>
          <h3 className="subsection-title">📚 Recommended Resources</h3>
          <div className="alert alert-info">
            <strong>Books:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>"The Structure of English Words"</strong> by Stanley E. Payne - Comprehensive introduction to English morphology</li>
              <li><strong>"Morphology"</strong> by Peter Matthews - Classic textbook on morphological theory</li>
              <li><strong>"English Words and Their Structure"</strong> by Donka Minkova and Robert Stockwell - Focus on English word formation</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Research Papers:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>"The English Inflectional Suffixes" - Key paper on English inflectional morphology</li>
              <li>"Distributed Morphology and the Pieces of Inflection" by Halle &amp; Marantz</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Online Courses:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Coursera:</strong> "Introduction to Linguistics" (various universities)</li>
              <li><strong>MIT OpenCourseWare:</strong> 24.900 Introduction to Linguistics (free)</li>
              <li><strong>YouTube:</strong> Crash Course Linguistics full playlist</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Interactive Tools:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>All About Morphology:</strong> Interactive exercises and quizzes</li>
              <li><strong>VisuWords:</strong> Visual dictionary showing word relationships</li>
              <li><strong>Wordnik:</strong> Comprehensive word resource with etymology</li>
            </ul>
          </div>
          <h3 className="subsection-title">💼 Interview Preparation</h3>
          <p>This topic is commonly tested in linguistics program interviews and language teaching certifications. Here are typical questions:</p>
          <div className="example-box">
            <h4>Interview Question 1:</h4>
            <p>"How would you explain the difference between derivational and inflectional morphology to a non-linguist?"</p>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>How to approach:</strong> Use concrete examples and analogies. Avoid jargon.</p>
                <p><strong>Key points to mention:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Derivational = creating new words (like building new LEGO structures)</li>
                  <li>Inflectional = changing form of same word for grammar (like changing the color of the same LEGO piece)</li>
                  <li>Example: "happy" → "happiness" (new word, derivational) vs. "cat" → "cats" (same word, just plural, inflectional)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Interview Question 2:</h4>
            <p>"Analyze the word &apos;uncharacteristically&apos; and explain the order of morpheme attachment."</p>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>Sample answer:</strong></p>
                <p>The word has 5 morphemes: un- + character + -istic + -al + -ly</p>
                <p><strong>Order of attachment:</strong></p>
                <ol style={{ marginLeft: '20px' }}>
                  <li>Root: "character" (noun)</li>
                  <li>Add "-istic" → "characteristic" (adjective)</li>
                  <li>Add "-al" → "characteristical" (adjective)</li>
                  <li>Add "un-" → "uncharacteristical" (adjective, negated)</li>
                  <li>Add "-ly" → "uncharacteristically" (adverb)</li>
                </ol>
                <p>The hierarchical tree shows "-ly" attaching at the highest level to the adjective "uncharacteristical."</p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Interview Question 3:</h4>
            <p>"Why is it important for language teachers to understand morphology?"</p>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>Key points:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Helps students decode unfamiliar vocabulary by recognizing word parts</li>
                  <li>Enables teaching of word families (happy, unhappy, happiness, happily)</li>
                  <li>Supports spelling instruction (understanding why "happiness" drops the &apos;y&apos;)</li>
                  <li>Aids in teaching grammar (understanding how -ed marks past tense)</li>
                  <li>Particularly valuable for academic vocabulary instruction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="exam">
          <h2 className="section-title">
            <span className="section-icon">📝</span>
            University Exam Practice
          </h2>
          <p>Practice with these university-style exam questions. These reflect the format and difficulty of actual linguistics exams.</p>
          <div className="example-box">
            <h4>Question 1: Short Answer (5 marks) - [Time: 7 minutes]</h4>
            <p>Define the term "morpheme" and explain how morphemes differ from syllables. Provide two examples to illustrate your answer.</p>
            <button className="collapsible">Show Marking Scheme &amp; Model Answer</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Correct definition of morpheme: 1 mark</li>
                  <li>Clear distinction between morphemes and syllables: 2 marks</li>
                  <li>First appropriate example: 1 mark</li>
                  <li>Second appropriate example: 1 mark</li>
                </ul>
                <h4>Model Answer:</h4>
                <p>A <strong>morpheme</strong> is the smallest unit of language that carries meaning (1 mark). While morphemes are units of <em>meaning</em>, syllables are units of <em>sound</em> or pronunciation (1 mark). A word can have multiple syllables but only one morpheme, or multiple morphemes in a single syllable (1 mark).</p>
                <p><strong>Example 1:</strong> The word "cats" has one syllable but two morphemes: "cat" (meaning feline) and "-s" (meaning plural) (1 mark).</p>
                <p><strong>Example 2:</strong> The word "banana" has three syllables (ba-na-na) but only one morpheme because no smaller part carries independent meaning (1 mark).</p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Question 2: Problem Solving (10 marks) - [Time: 15 minutes]</h4>
            <p>Analyze the following words into their constituent morphemes. For each morpheme, identify whether it is free or bound, and whether it is derivational or inflectional (if applicable).</p>
            <p><strong>Words to analyze:</strong></p>
            <ol style={{ marginLeft: '20px' }}>
              <li>internationalization</li>
              <li>unhappier</li>
              <li>bookstores</li>
            </ol>
            <button className="collapsible">Show Marking Scheme &amp; Complete Solution</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme (per word):</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Correct morpheme identification: 2 marks</li>
                  <li>Correct classification (free/bound): 1 mark</li>
                  <li>Correct classification (derivational/inflectional): 1 mark</li>
                  <li>Partial credit for partially correct answers</li>
                </ul>
                <h4>Complete Solution:</h4>
                <p><strong>1. internationalization (6 morphemes)</strong></p>
                <p>inter- (bound, derivational) + nation (free, root) + -al (bound, derivational) + -ize (bound, derivational) + -tion (bound, derivational) + -s (bound, inflectional)</p>
                <p><strong>2. unhappier (3 morphemes)</strong></p>
                <p>un- (bound, derivational) + happy (free, root) + -er (bound, inflectional comparative)</p>
                <p><strong>3. bookstores (3 morphemes)</strong></p>
                <p>book (free, root) + store (free, root) + -s (bound, inflectional plural)</p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Question 3: Analytical/Comparison (15 marks) - [Time: 20 minutes]</h4>
            <p>Compare and contrast derivational and inflectional morphemes in English. Your answer should include:</p>
            <ul style={{ marginLeft: '20px' }}>
              <li>Definitions of each type</li>
              <li>At least three differences between them</li>
              <li>Examples illustrating each difference</li>
              <li>A discussion of why this distinction matters for linguistic analysis</li>
            </ul>
            <button className="collapsible">Show Marking Scheme &amp; Model Answer</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Clear definitions: 2 marks</li>
                  <li>Difference 1 with examples: 3 marks</li>
                  <li>Difference 2 with examples: 3 marks</li>
                  <li>Difference 3 with examples: 3 marks</li>
                  <li>Discussion of significance: 3 marks</li>
                  <li>Organization and clarity: 1 mark</li>
                </ul>
                <h4>Model Answer:</h4>
                <p><strong>Definitions:</strong></p>
                <p><strong>Derivational morphemes</strong> are affixes that create new words by changing the meaning, word class, or both (1 mark). <strong>Inflectional morphemes</strong> are affixes that add grammatical information without changing word class or creating new words (1 mark).</p>
                <p><strong>Difference 1: Word Class Change</strong> (3 marks)</p>
                <p>Derivational morphemes often change word class, while inflectional morphemes never do. For example, adding "-ness" to "happy" (adjective) creates "happiness" (noun)—the word class changes. In contrast, adding "-s" to "cat" (noun) creates "cats" (still a noun)—the word class remains the same.</p>
                <p><strong>Difference 2: Position in Word</strong> (3 marks)</p>
                <p>Inflectional morphemes always appear at the outermost layer of a word, while derivational morphemes appear closer to the root. In "nationalizations," the derivational suffixes "-al," "-ize," and "-tion" attach before the inflectional "-s." You cannot have "nationsalize"—the order is fixed by morphological rules.</p>
                <p><strong>Difference 3: Number and Productivity</strong> (3 marks)</p>
                <p>English has only eight inflectional morphemes, all highly productive and applicable to entire word classes. In contrast, there are hundreds of derivational morphemes with varying productivity. The plural "-s" applies to virtually all count nouns, while derivational affixes like "-th" (warm → warmth) have limited applicability.</p>
                <p><strong>Significance for Linguistic Analysis</strong> (3 marks)</p>
                <p>This distinction matters because it reveals the modular nature of word formation. Derivational morphology expands the lexicon by creating new words, while inflectional morphology adapts existing words to grammatical contexts. This separation helps linguists understand how languages balance creativity (making new words) with systematicity (applying grammatical rules consistently). It also explains why dictionaries list derivational forms as separate entries but treat inflected forms as variants of the same word.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <h3>🎓 Congratulations on Completing This Module!</h3>
          <p>You&apos;ve covered the fundamentals of Morphology. Continue practicing to master word structure analysis.</p>
          <div className="footer-links">
            <a href="#objectives" className="footer-link">↑ Back to Top</a>
            <a href="#overview" className="footer-link">📖 Review Overview</a>
            <a href="#videos" className="footer-link">🎥 Watch Videos</a>
          </div>
          <p style={{ marginTop: 20, fontSize: "0.9em" }}>
            Part of Principles and Practices of Human Communication | UNIT-1: Introduction to Language and Linguistics
            <br />
            Generated learning material for self-paced study
          </p>
        </div>
      </div>
    </>
  );
};

export default Module1_3;
