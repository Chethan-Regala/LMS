'use client';
import React, { useEffect } from 'react';

const Module2_1: React.FC = () => {
  useEffect(() => {
    const handleCollapsible = () => {
      const collapsibles = document.querySelectorAll('.collapsible');
      collapsibles.forEach((button) => {
        const handleClick = function(this: HTMLElement) {
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
    <>
      <style jsx>{`
        body { font-family: 'Segoe UI', sans-serif; line-height: 1.8; color: #2c3e50; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; font-size: 16px; }
        .container { max-width: 1400px; margin: 0 auto; background: white; padding: 50px; border-radius: 15px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 10px; margin-bottom: 40px; }
        .header h1 { font-size: 2.5em; margin-bottom: 15px; }
        .breadcrumb { font-size: 1.1em; opacity: 0.9; margin-bottom: 20px; }
        .meta-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 25px; }
        .meta-card { background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; display: flex; align-items: center; gap: 12px; }
        .meta-icon { font-size: 2em; }
        .meta-content strong { display: block; font-size: 0.9em; opacity: 0.8; }
        .meta-content span { font-size: 1.1em; font-weight: 600; }
        .section { margin-bottom: 50px; scroll-margin-top: 20px; }
        .section-title { color: #2c3e50; font-size: 2em; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 3px solid #3498db; display: flex; align-items: center; gap: 15px; }
        .section-icon { font-size: 1.2em; }
        .subsection-title { color: #34495e; font-size: 1.5em; margin: 30px 0 15px 0; padding-left: 15px; border-left: 4px solid #3498db; }
        .objectives-box { background: linear-gradient(135deg, #667eea15, #764ba215); padding: 30px; border-left: 5px solid #667eea; border-radius: 10px; margin: 25px 0; }
        .objectives-box h3 { color: #667eea; font-size: 1.5em; margin-bottom: 15px; }
        .objectives-list { list-style: none; counter-reset: objectives; }
        .objectives-list li { counter-increment: objectives; margin-bottom: 12px; padding-left: 45px; position: relative; line-height: 1.6; }
        .objectives-list li::before { content: counter(objectives); position: absolute; left: 0; top: 0; background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9em; }
        .alert { padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 5px solid; }
        .alert-info { background: #d1ecf1; border-color: #17a2b8; color: #0c5460; }
        .alert-success { background: #d4edda; border-color: #28a745; color: #155724; }
        .alert strong { display: block; margin-bottom: 8px; font-size: 1.1em; }
        p { margin-bottom: 15px; text-align: justify; line-height: 1.9; }
        .term { color: #667eea; font-weight: 600; }
        .diagram-container { background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0; text-align: center; }
        .diagram-caption { margin-top: 15px; font-style: italic; color: #6c757d; font-size: 0.95em; }
        .image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin: 25px 0; }
        .image-card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .content-image { width: 100%; height: auto; display: block; }
        .image-caption { padding: 15px; background: #f8f9fa; font-size: 0.9em; color: #6c757d; text-align: center; }
        .footer { margin-top: 60px; padding-top: 30px; border-top: 3px solid #e9ecef; text-align: center; color: #6c757d; }
        .footer-links { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 20px 0; }
        .footer-link { color: #667eea; text-decoration: none; padding: 10px 20px; background: #f8f9fa; border-radius: 5px; transition: all 0.3s ease; display: inline-block; }
        .footer-link:hover { background: #667eea; color: white; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        .collapsible { background: #667eea; color: white; cursor: pointer; padding: 12px 20px; width: 100%; border: none; text-align: left; outline: none; font-size: 1em; border-radius: 5px; margin-top: 10px; font-weight: 600; transition: background 0.3s ease; }
        .collapsible:hover { background: #764ba2; }
        .collapsible.active { background: #764ba2; }
        .collapsible-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
        .collapsible-content-inner { padding: 20px; background: #f8f9fa; border-radius: 5px; margin-top: 10px; }
      `}</style>
      
      <div className="container">
        {/* ==================== HEADER ==================== */}
        <div className="header">
          <div className="breadcrumb">
            📚 Principles and Practices of Human Communication &gt; UNIT-2: Syntax and Semantics
          </div>
          <h1>Syntax and Syntactic Structures</h1>
          <div className="meta-info">
            <div className="meta-card">
              <div className="meta-icon">⏱️</div>
              <div className="meta-content">
                <strong>Estimated Time</strong>
                <span>80-100 minutes</span>
              </div>
            </div>
            <div className="meta-card">
              <div className="meta-icon">📊</div>
              <div className="meta-content">
                <strong>Difficulty</strong>
                <span>Intermediate to Advanced</span>
              </div>
            </div>
            <div className="meta-card">
              <div className="meta-icon">🎯</div>
              <div className="meta-content">
                <strong>Prerequisites</strong>
                <span>Morphology, Parts of Speech</span>
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

        {/* ==================== SECTION 1: OVERVIEW & MOTIVATION ==================== */}
        <div className="section" id="overview">
          <h2 className="section-title">
            <span className="section-icon">🎯</span>
            What You&apos;ll Master
          </h2>
          <div className="objectives-box">
            <h3>Learning Objectives</h3>
            <ul className="objectives-list">
              <li>Define syntax and explain its role in linguistic analysis, distinguishing it from morphology and semantics as the study of sentence structure and word arrangement rules.</li>
              <li>Identify constituents in sentences using substitution, movement, and coordination tests with 85% accuracy across various sentence types.</li>
              <li>Draw and interpret phrase structure trees (tree diagrams) representing the hierarchical organization of sentences into phrases and constituents.</li>
              <li>Apply phrase structure rules to generate grammatical sentences and analyze the syntactic structure of English sentences at the undergraduate level.</li>
              <li>Recognize and analyze different syntactic categories (NP, VP, PP, AP, AdvP) and understand how they combine to form well-formed sentences.</li>
            </ul>
          </div>

          <h3 className="subsection-title">🔥 Why This Topic Matters</h3>
          <p>
            Imagine you&apos;re reading a sentence like &quot;The old man the boat.&quot; At first glance, the words seem familiar and simple. Yet this sentence is a classic example of a grammatical ambiguity that has puzzled linguists for decades. Is &quot;man&quot; a noun (an old person who owns the boat) or a verb (to operate the boat)? Understanding syntax helps us decode such puzzles and reveals the hidden structure beneath the surface of language.
          </p>
          <p>
            Syntax is the study of how words combine to form sentences—the rules that govern sentence structure in every human language. While morphology deals with word formation and semantics with meaning, syntax occupies the crucial domain of sentence construction. Every time you produce or comprehend a sentence, your brain is unconsciously applying syntactic rules. When you recognize that &quot;The cat sat on the mat&quot; is grammatical but &quot;Sat cat the mat on the&quot; is not, you&apos;re using your syntactic knowledge.
          </p>
          <p>
            For students of communication and linguistics, syntax is essential because it explains how humans can produce and understand an infinite number of sentences using finite rules. It underlies language acquisition in children, informs second language teaching methodologies, and powers natural language processing systems. Whether you&apos;re analyzing poetry, teaching English, developing AI chatbots, or studying language disorders, syntax provides the analytical framework for understanding how sentences work.
          </p>

          <div className="alert alert-success">
            <strong>💡 Real-World Applications:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Natural Language Processing:</strong> Search engines, voice assistants (Siri, Alexa), and machine translation systems rely on syntactic parsers to understand sentence structure.</li>
              <li><strong>Language Teaching:</strong> ESL instructors use syntactic analysis to explain sentence patterns and help learners produce grammatically correct sentences.</li>
              <li><strong>Speech Therapy:</strong> Pathologists analyze syntactic abilities in clients with aphasia and other language disorders to design targeted interventions.</li>
              <li><strong>Computational Linguistics:</strong> Grammar checkers, text editors, and AI writing assistants use syntactic rules to identify and correct errors.</li>
            </ul>
          </div>

          {/* Visual: Syntax Tree Example */}
          <div className="diagram-container">
            <h4>Visual Representation: Sentence Structure Hierarchy</h4>
            <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="400" fill="#f8f9fa" />
              <text x="400" y="30" textAnchor="middle" fill="#2c3e50" fontSize="18" fontWeight="bold">&quot;The cat sleeps on the mat&quot;</text>
              <circle cx="400" cy="60" r="20" fill="#667eea" stroke="#2980b9" strokeWidth="2" />
              <text x="400" y="67" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S</text>
              <line x1="400" y1="80" x2="250" y2="130" stroke="#34495e" strokeWidth="2" />
              <line x1="400" y1="80" x2="550" y2="130" stroke="#34495e" strokeWidth="2" />
              <circle cx="250" cy="150" r="20" fill="#3498db" stroke="#2980b9" strokeWidth="2" />
              <text x="250" y="157" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">NP</text>
              <circle cx="550" cy="150" r="20" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" />
              <text x="550" y="157" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">VP</text>
              <line x1="250" y1="170" x2="200" y2="220" stroke="#34495e" strokeWidth="2" />
              <line x1="250" y1="170" x2="300" y2="220" stroke="#34495e" strokeWidth="2" />
              <rect x="170" y="220" width="60" height="35" fill="#9b59b6" stroke="#8e44ad" strokeWidth="2" rx="5" />
              <text x="200" y="242" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Det</text>
              <rect x="270" y="220" width="60" height="35" fill="#9b59b6" stroke="#8e44ad" strokeWidth="2" rx="5" />
              <text x="300" y="242" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">N</text>
              <text x="200" y="290" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">the</text>
              <text x="300" y="290" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">cat</text>
              <line x1="200" y1="255" x2="200" y2="275" stroke="#34495e" strokeWidth="2" />
              <line x1="300" y1="255" x2="300" y2="275" stroke="#34495e" strokeWidth="2" />
              <line x1="550" y1="170" x2="480" y2="220" stroke="#34495e" strokeWidth="2" />
              <line x1="550" y1="170" x2="620" y2="220" stroke="#34495e" strokeWidth="2" />
              <rect x="450" y="220" width="60" height="35" fill="#27ae60" stroke="#229954" strokeWidth="2" rx="5" />
              <text x="480" y="242" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">V</text>
              <rect x="590" y="220" width="60" height="35" fill="#f39c12" stroke="#e67e22" strokeWidth="2" rx="5" />
              <text x="620" y="242" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PP</text>
              <text x="480" y="290" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">sleeps</text>
              <line x1="480" y1="255" x2="480" y2="275" stroke="#34495e" strokeWidth="2" />
              <line x1="620" y1="255" x2="580" y2="290" stroke="#34495e" strokeWidth="2" />
              <line x1="620" y1="255" x2="660" y2="290" stroke="#34495e" strokeWidth="2" />
              <rect x="550" y="290" width="60" height="35" fill="#16a085" stroke="#138d75" strokeWidth="2" rx="5" />
              <text x="580" y="312" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">P</text>
              <rect x="630" y="290" width="60" height="35" fill="#3498db" stroke="#2980b9" strokeWidth="2" rx="5" />
              <text x="660" y="312" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">NP</text>
              <text x="580" y="360" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">on</text>
              <line x1="580" y1="325" x2="580" y2="345" stroke="#34495e" strokeWidth="2" />
              <line x1="660" y1="325" x2="640" y2="345" stroke="#34495e" strokeWidth="2" />
              <line x1="660" y1="325" x2="680" y2="345" stroke="#34495e" strokeWidth="2" />
              <text x="640" y="370" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="bold">the</text>
              <text x="680" y="370" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="bold">mat</text>
              <rect x="50" y="330" width="200" height="60" fill="#fff" stroke="#ddd" strokeWidth="1" rx="5" />
              <text x="60" y="350" fill="#2c3e50" fontSize="10" fontWeight="bold">Legend:</text>
              <circle cx="80" cy="365" r="8" fill="#667eea" />
              <text x="95" y="370" fill="#666" fontSize="9">Sentence</text>
              <circle cx="80" cy="380" r="8" fill="#3498db" />
              <text x="95" y="385" fill="#666" fontSize="9">Noun Phrase</text>
            </svg>
            <p className="diagram-caption">Figure 1: Phrase structure tree showing hierarchical organization of &quot;The cat sleeps on the mat&quot;</p>
          </div>
        </div>

        {/* ==================== SECTION 2: UNDERSTANDING THE CONCEPT ==================== */}
        <div className="section" id="theory">
          <h2 className="section-title">
            <span className="section-icon">📖</span>
            Deep Dive: Understanding Syntax
          </h2>
          
          <h3 className="subsection-title">Definition &amp; Fundamentals</h3>
          <p>
            <strong>Syntax</strong> (from Greek <em>syn-</em> = &quot;together&quot; + <em>taxis</em> = &quot;arrangement&quot;) is the branch of linguistics that studies how words are arranged to form phrases, clauses, and sentences. While morphology examines the internal structure of words, syntax investigates the rules that govern how these words combine to create meaningful utterances. Every language has its own syntactic rules—English puts adjectives before nouns (&quot;the red car&quot;), while French often places them after (&quot;la voiture rouge&quot;).
          </p>
          <p>
            A fundamental insight of modern linguistics is that sentences are not simply strings of words arranged in linear order. Instead, they have <strong>hierarchical structure</strong>—words group together into phrases, which in turn combine to form larger units. Consider the sentence &quot;The student of physics studied hard.&quot; The words &quot;the student of physics&quot; function as a single unit (the subject), and &quot;studied hard&quot; functions as another unit (the predicate). This grouping is not arbitrary; it reflects how speakers mentally organize language.
          </p>
          <p>
            Syntax exists because human languages need systematic ways to express complex thoughts. Without syntactic rules, communication would be chaotic—we could produce word salads like &quot;student the physics studied hard of&quot; that native speakers would find uninterpretable. The study of syntax reveals the hidden patterns that make language productive (we can create infinite sentences from finite rules) and learnable (children acquire these rules naturally without explicit instruction).
          </p>

          <div className="alert alert-info">
            <strong>📌 Key Terminology:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><span className="term">Constituent</span>: A group of words that functions as a single unit within a sentence&apos;s hierarchical structure.</li>
              <li><span className="term">Phrase</span>: A constituent consisting of a head word and its modifiers (e.g., Noun Phrase, Verb Phrase).</li>
              <li><span className="term">Phrase Structure Rule</span>: A rule that specifies how phrases can be formed and combined (e.g., S → NP VP).</li>
              <li><span className="term">Tree Diagram</span>: A visual representation of syntactic structure showing hierarchical relationships between constituents.</li>
              <li><span className="term">Grammaticality Judgment</span>: A native speaker&apos;s intuitive sense of whether a sentence is well-formed in their language.</li>
            </ul>
          </div>

          {/* Visual: Constituent Structure */}
          <div className="image-grid">
            <div className="image-card">
              <img src="https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/7ba509bfb42fe1945a9d2b743cb320c9e7697a9c.png" alt="Constituent Structure Diagram" className="content-image" />
              <p className="image-caption">Constituent structure analysis showing different tree representations</p>
            </div>
            <div className="image-card">
              <img src="https://kimi-web-img.moonshot.cn/img/64.media.tumblr.com/e2488bd423c38c210dbba9b75ccdd46dba89b580.png" alt="Simple Syntax Tree" className="content-image" />
              <p className="image-caption">Basic phrase structure tree for &quot;The cat plays piano&quot;</p>
            </div>
          </div>

          <h3 className="subsection-title">How It Works: Constituency and Syntactic Tests</h3>
          <p>
            How do linguists determine which words group together as constituents? Native speakers have intuitions about sentence structure, but linguists need systematic methods to verify these intuitions. <strong>Constituency tests</strong> are diagnostic tools that reveal the hidden structure of sentences by showing which groups of words behave as units.
          </p>
          
          <p><strong>1. Substitution (Replacement) Test</strong></p>
          <p>
            If a group of words can be replaced by a single word without changing the grammaticality or core meaning of the sentence, that group is a constituent. For example, in &quot;The tired doctor slept,&quot; we can replace &quot;the tired doctor&quot; with the pronoun &quot;she&quot;: &quot;She slept.&quot; This shows that &quot;the tired doctor&quot; is a constituent—a Noun Phrase (NP). Similarly, verb phrases can be replaced with &quot;do&quot; or &quot;do so&quot;: &quot;The tired doctor slept, and the nurse did so too.&quot;
          </p>

          <p><strong>2. Movement Test</strong></p>
          <p>
            Constituents can often be moved to different positions in a sentence while preserving grammaticality. In &quot;The students saw a movie after class,&quot; we can move &quot;after class&quot; to the front: &quot;After class, the students saw a movie.&quot; This movement is possible because &quot;after class&quot; is a constituent (a Prepositional Phrase). Non-constituents cannot be moved this way—&quot;*After the, the students saw a movie class&quot; is ungrammatical.
          </p>

          <p><strong>3. Coordination Test</strong></p>
          <p>
            Only constituents of the same type can be joined by coordinating conjunctions like &quot;and&quot; or &quot;or.&quot; In &quot;[The tired doctor] and [the sleepy nurse] worked all night,&quot; both bracketed groups are NPs, so they can be coordinated. This test must be used cautiously, as some non-constituents can also be coordinated in certain contexts.
          </p>

          <p><strong>4. Cleft Test</strong></p>
          <p>
            The cleft construction &quot;It is/was ___ that ___&quot; isolates constituents. &quot;It was the tired doctor that slept&quot; is grammatical because &quot;the tired doctor&quot; is a constituent. &quot;*It was the tired that doctor slept&quot; is ungrammatical because &quot;the tired&quot; is not a constituent.
          </p>

          <p>
            <strong>Analogy for Understanding:</strong> Think of constituents like nested boxes. When you receive a gift in a box, inside which is another box, inside which is another box containing the actual gift—each box is a &quot;constituent&quot; of the whole package. You can move the entire outer box, replace it with a different container, or describe it as a single unit (&quot;the gift box&quot;). Similarly, in syntax, constituents are nested units that can be manipulated as wholes.
          </p>

          <h3 className="subsection-title">Key Components: Phrase Structure and Tree Diagrams</h3>
          <p><strong>1. Phrase Structure Rules</strong></p>
          <p>
            Phrase structure rules (PSRs) are formal statements that specify how phrases can be formed in a language. These rules are the &quot;grammar&quot; that generates all grammatical sentences. Common PSRs in English include:
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>S → NP VP</strong> (A sentence consists of a Noun Phrase followed by a Verb Phrase)</li>
            <li><strong>NP → (Det) (AdjP) N (PP)</strong> (A Noun Phrase can have a determiner, adjective phrase, noun, and prepositional phrase)</li>
            <li><strong>VP → V (NP) (PP) (AdvP)</strong> (A Verb Phrase has a verb plus optional complements)</li>
            <li><strong>PP → P NP</strong> (A Prepositional Phrase has a preposition followed by a Noun Phrase)</li>
          </ul>
          <p>
            Parentheses indicate optional elements. These rules are recursive—they can apply repeatedly to generate sentences of any length.
          </p>

          <p><strong>2. Syntactic Categories (Parts of Speech)</strong></p>
          <p>Words belong to categories that determine how they can combine:</p>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Nouns (N)</strong>: name entities (cat, happiness, John)</li>
            <li><strong>Verbs (V)</strong>: express actions or states (run, sleep, believe)</li>
            <li><strong>Adjectives (Adj)</strong>: modify nouns (happy, red, tall)</li>
            <li><strong>Adverbs (Adv)</strong>: modify verbs, adjectives, or other adverbs (quickly, very, often)</li>
            <li><strong>Prepositions (P)</strong>: show relationships (in, on, at, with)</li>
            <li><strong>Determiners (Det)</strong>: specify nouns (the, a, this, some)</li>
          </ul>

          <p><strong>3. Phrasal Categories</strong></p>
          <p>Words combine into phrases, each headed by a word of a particular category:</p>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Noun Phrase (NP)</strong>: &quot;the tall student,&quot; &quot;my book,&quot; &quot;John&quot;</li>
            <li><strong>Verb Phrase (VP)</strong>: &quot;sleeps,&quot; &quot;kicked the ball,&quot; &quot;gave Mary a gift&quot;</li>
            <li><strong>Prepositional Phrase (PP)</strong>: &quot;in the room,&quot; &quot;with a smile,&quot; &quot;at school&quot;</li>
            <li><strong>Adjective Phrase (AdjP)</strong>: &quot;very happy,&quot; &quot;quite tall,&quot; &quot;fond of music&quot;</li>
            <li><strong>Adverb Phrase (AdvP)</strong>: &quot;very quickly,&quot; &quot;quite often&quot;</li>
          </ul>

          <p><strong>4. Tree Diagrams</strong></p>
          <p>
            Tree diagrams visually represent the hierarchical structure of sentences. Each node represents a syntactic category, and branches show how constituents combine. The top node is S (Sentence), which branches into NP and VP, which in turn branch into smaller constituents until reaching the actual words (terminal nodes) at the bottom.
          </p>

          {/* Visual: Phrase Structure Rules */}
          <div className="diagram-container">
            <h4>Phrase Structure Rules and Tree Generation</h4>
            <svg width="900" height="500" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="900" height="500" fill="#f8f9fa" />
              <text x="450" y="25" textAnchor="middle" fill="#2c3e50" fontSize="16" fontWeight="bold">Common Phrase Structure Rules in English</text>
              <rect x="50" y="50" width="380" height="90" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" rx="5" />
              <text x="240" y="75" textAnchor="middle" fill="#1565c0" fontSize="14" fontWeight="bold">S → NP VP</text>
              <text x="240" y="95" textAnchor="middle" fill="#333" fontSize="11">Sentence → Noun Phrase + Verb Phrase</text>
              <text x="240" y="115" textAnchor="middle" fill="#666" fontSize="10">&quot;The cat sleeps&quot;</text>
              <rect x="470" y="50" width="380" height="90" fill="#e8f5e9" stroke="#43a047" strokeWidth="2" rx="5" />
              <text x="660" y="75" textAnchor="middle" fill="#2e7d32" fontSize="14" fontWeight="bold">NP → (Det) N</text>
              <text x="660" y="95" textAnchor="middle" fill="#333" fontSize="11">Noun Phrase → (Determiner) + Noun</text>
              <text x="660" y="115" textAnchor="middle" fill="#666" fontSize="10">&quot;the cat,&quot; &quot;John,&quot; &quot;books&quot;</text>
              <rect x="50" y="160" width="380" height="90" fill="#fff3e0" stroke="#fb8c00" strokeWidth="2" rx="5" />
              <text x="240" y="185" textAnchor="middle" fill="#ef6c00" fontSize="14" fontWeight="bold">VP → V (NP) (PP)</text>
              <text x="240" y="205" textAnchor="middle" fill="#333" fontSize="11">Verb Phrase → Verb + (NP) + (PP)</text>
              <text x="240" y="225" textAnchor="middle" fill="#666" fontSize="10">&quot;chased the mouse,&quot; &quot;slept&quot;</text>
              <rect x="470" y="160" width="380" height="90" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="2" rx="5" />
              <text x="660" y="185" textAnchor="middle" fill="#7b1fa2" fontSize="14" fontWeight="bold">PP → P NP</text>
              <text x="660" y="205" textAnchor="middle" fill="#333" fontSize="11">Prepositional Phrase → Prep + NP</text>
              <text x="660" y="225" textAnchor="middle" fill="#666" fontSize="10">&quot;in the house,&quot; &quot;with a friend&quot;</text>
              <text x="450" y="290" textAnchor="middle" fill="#2c3e50" fontSize="14" fontWeight="bold">Example: &quot;The student reads books&quot;</text>
              <circle cx="450" cy="320" r="18" fill="#667eea" stroke="#2980b9" strokeWidth="2" />
              <text x="450" y="326" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">S</text>
              <line x1="450" y1="338" x2="350" y2="370" stroke="#34495e" strokeWidth="2" />
              <line x1="450" y1="338" x2="550" y2="370" stroke="#34495e" strokeWidth="2" />
              <circle cx="350" cy="385" r="18" fill="#3498db" stroke="#2980b9" strokeWidth="2" />
              <text x="350" y="391" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">NP</text>
              <circle cx="550" cy="385" r="18" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" />
              <text x="550" y="391" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">VP</text>
              <line x1="350" y1="403" x2="310" y2="435" stroke="#34495e" strokeWidth="2" />
              <line x1="350" y1="403" x2="390" y2="435" stroke="#34495e" strokeWidth="2" />
              <rect x="290" y="435" width="40" height="25" fill="#9b59b6" stroke="#8e44ad" strokeWidth="1" rx="3" />
              <text x="310" y="452" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Det</text>
              <rect x="370" y="435" width="40" height="25" fill="#9b59b6" stroke="#8e44ad" strokeWidth="1" rx="3" />
              <text x="390" y="452" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">N</text>
              <text x="310" y="485" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="bold">the</text>
              <text x="390" y="485" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="bold">student</text>
              <line x1="550" y1="403" x2="510" y2="435" stroke="#34495e" strokeWidth="2" />
              <line x1="550" y1="403" x2="590" y2="435" stroke="#34495e" strokeWidth="2" />
              <rect x="490" y="435" width="40" height="25" fill="#27ae60" stroke="#229954" strokeWidth="1" rx="3" />
              <text x="510" y="452" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">V</text>
              <rect x="570" y="435" width="40" height="25" fill="#3498db" stroke="#2980b9" strokeWidth="1" rx="3" />
              <text x="590" y="452" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">NP</text>
              <text x="510" y="485" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="bold">reads</text>
              <text x="590" y="485" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="bold">books</text>
            </svg>
            <p className="diagram-caption">Figure 3: Common phrase structure rules and their application in tree generation</p>
          </div>

          <h3 className="subsection-title">Real-World Implementation: Syntax Across Languages</h3>
          <p>
            Different languages have different syntactic rules, though all human languages share certain universal properties. Understanding cross-linguistic variation is crucial for language teaching, translation, and computational linguistics.
          </p>
          <p>
            <strong>Word Order Variation:</strong> English is an SVO (Subject-Verb-Object) language: &quot;The dog (S) chased (V) the cat (O).&quot; Japanese is SOV: &quot;Inu-ga (S) neko-o (O) oikaketa (V).&quot; Irish is VSO: &quot;Chonaic (V) an madra (S) an cat (O).&quot; These differences reflect different parameter settings in Universal Grammar.
          </p>
          <p>
            <strong>Head Direction:</strong> In English, heads typically precede their complements (head-initial): &quot;eat [VP apples],&quot; &quot;in [PP the house].&quot; In Japanese, heads follow their complements (head-final): &quot;[VP ringo-o taberu],&quot; &quot;[PP ie-ni].&quot; This parameter affects how phrases are structured in each language.
          </p>
          <p>
            <strong>Null Subjects:</strong> English requires explicit subjects (&quot;It is raining&quot;), but languages like Spanish and Italian allow null subjects: &quot;Llueve&quot; (rains) is perfectly grammatical without an explicit subject. This reflects a parameter setting that licenses empty categories in subject position.
          </p>

          <h3 className="subsection-title">⚠️ Common Misconceptions</h3>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>Misconception #1:</strong> &quot;Syntax is just about word order.&quot;
            <p>
              <strong>Reality:</strong> Syntax is about hierarchical structure, not just linear order. Two sentences can have the same word order but different structures (&quot;Flying planes can be dangerous&quot; has two syntactic structures with different meanings).
            </p>
          </div>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>Misconception #2:</strong> &quot;If a sentence makes sense, it&apos;s grammatical.&quot;
            <p>
              <strong>Reality:</strong> Grammaticality is about following syntactic rules, not about meaning. &quot;Colorless green ideas sleep furiously&quot; is perfectly grammatical but semantically anomalous. Conversely, some meaningful utterances may be ungrammatical.
            </p>
          </div>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>Misconception #3:</strong> &quot;All languages have the same syntactic structure.&quot;
            <p>
              <strong>Reality:</strong> Languages vary significantly in their syntactic rules. While there are universal principles, parameters like word order, head direction, and null subject licensing differ across languages.
            </p>
          </div>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>Misconception #4:</strong> &quot;Tree diagrams are just decorative.&quot;
            <p>
              <strong>Reality:</strong> Tree diagrams represent actual mental structures that speakers use when producing and comprehending language. They make precise predictions about constituency, movement, and interpretation.
            </p>
          </div>
        </div>

        {/* ==================== SECTION 3: VIDEO LEARNING ==================== */}
        <div className="section" id="videos">
          <h2 className="section-title">
            <span className="section-icon">🎥</span>
            Learn Through Videos
          </h2>
          <p>
            Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.
          </p>
          <div className="video-grid">
            {/* Video 1: Crash Course Syntax */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/B1r1grQiLdk" allowFullScreen={true} title="Syntax - Morphosyntax" />
              </div>
              <div className="video-info">
                <div className="video-title">
                  📚 Syntax - Morphosyntax: Crash Course Linguistics #3
                </div>
                <div className="video-description" style={{ fontSize: '0.85em', color: '#6c757d', marginTop: '5px' }}>
                  CrashCourse • 10:32 • 360K+ views
                </div>
                <div className="video-description" style={{ marginTop: '8px', fontSize: '0.9em' }}>
                  What you&apos;ll learn: Introduction to syntax and morphosyntax, how words combine into sentences, grammatical categories, and the relationship between morphology and syntax.
                </div>
              </div>
            </div>
            {/* Video 2: Crash Course Trees */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/n1zpnN-6pZQ" allowFullScreen={true} title="Syntax - Trees" />
              </div>
              <div className="video-info">
                <div className="video-title">
                  🎬 Syntax - Trees: Crash Course Linguistics #4
                </div>
                <div className="video-description" style={{ fontSize: '0.85em', color: '#6c757d', marginTop: '5px' }}>
                  CrashCourse • 10:42 • 310K+ views
                </div>
                <div className="video-description" style={{ marginTop: '8px', fontSize: '0.9em' }}>
                  What you&apos;ll learn: Tree structure diagrams, phrase structure rules, how to represent grammatical structures visually, and the hierarchical organization of sentences.
                </div>
              </div>
            </div>
            {/* Video 3: TrevTutor Complete Syntax */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/0nBzlNFwgs4" allowFullScreen={true} title="Introduction to Linguistics" />
              </div>
              <div className="video-info">
                <div className="video-title">
                  💻 Introduction to Linguistics: The Complete Crash Course
                </div>
                <div className="video-description" style={{ fontSize: '0.85em', color: '#6c757d', marginTop: '5px' }}>
                  TrevTutor • 5:33:36 • 170K+ views
                </div>
                <div className="video-description" style={{ marginTop: '8px', fontSize: '0.9em' }}>
                  What you&apos;ll learn: Comprehensive course covering all aspects of linguistics including extensive syntax sections on constituency, tree drawing, phrase structure rules, and more.
                </div>
              </div>
            </div>
            {/* Video 4: MIT OpenCourseWare */}
            <div className="video-card">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/Mvy5hjAWeZw" allowFullScreen={true} title="MIT Morphology Lecture" />
              </div>
              <div className="video-info">
                <div className="video-title">
                  🎓 Lecture 2: Morphology, Part 1 (includes syntax basics)
                </div>
                <div className="video-description" style={{ fontSize: '0.85em', color: '#6c757d', marginTop: '5px' }}>
                  MIT OpenCourseWare • 1:16:16 • 190K+ views
                </div>
                <div className="video-description" style={{ marginTop: '8px', fontSize: '0.9em' }}>
                  What you&apos;ll learn: University-level lecture on morphological and syntactic analysis, constituency tests, and problem-solving techniques.
                </div>
              </div>
            </div>
          </div>
          <div className="alert alert-info">
            <strong>📺 Additional Resources:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>
                <strong>Interactive Tree Builder:</strong> Search for &quot;syntax tree generator&quot; or &quot;phrase structure tree tool&quot; online
              </li>
              <li>
                <strong>Practice Problems:</strong> Search for &quot;syntax problem sets&quot; from university linguistics courses
              </li>
              <li>
                <strong>Online Tutorials:</strong> Check the &quot;All Things Linguistic&quot; blog for syntax tree drawing guides
              </li>
            </ul>
          </div>
        </div>

        {/* ==================== SECTION 4: ALGORITHM & WORKED EXAMPLES ==================== */}
        <div className="section" id="algorithm">
          <h2 className="section-title">
            <span className="section-icon">⚙️</span>
            See It In Action: Constituency Analysis
          </h2>
          <h3 className="subsection-title">The Constituency Analysis Procedure</h3>
          <p>
            Analyzing sentence structure requires a systematic approach. This procedure guides you through identifying constituents and constructing tree diagrams.
          </p>
          <div className="code-container" style={{ background: '#282c34', borderRadius: '8px', padding: '20px', margin: '20px 0', overflow: 'auto' }}>
            <div className="code-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#61dafb' }}>
              <span style={{ fontWeight: 'bold' }}>Constituency Analysis Procedure</span>
              <span className="code-language" style={{ fontSize: '0.9em', opacity: 0.8 }}>Algorithm</span>
            </div>
            <div className="code-block" style={{ fontFamily: 'monospace', fontSize: '0.9em', lineHeight: '1.6' }}>
              <code style={{ color: '#abb2bf' }}>
                <span style={{ color: '#5c6370' }}>// ============================================</span><br/>
                <span style={{ color: '#5c6370' }}>// CONSTITUENCY ANALYSIS ALGORITHM</span><br/>
                <span style={{ color: '#5c6370' }}>// Input: A sentence to analyze</span><br/>
                <span style={{ color: '#5c6370' }}>// Output: Tree diagram showing constituent structure</span><br/>
                <span style={{ color: '#5c6370' }}>// ============================================</span><br/>
                <span style={{ color: '#c678dd' }}>ALGORITHM</span> <span style={{ color: '#61dafb' }}>AnalyzeSentence</span>(sentence)<br/>
                <span style={{ color: '#c678dd' }}>BEGIN</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#5c6370' }}>// Step 1: Label each word with its part of speech</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>FOR EACH</span> word <span style={{ color: '#c678dd' }}>in</span> sentence <span style={{ color: '#c678dd' }}>DO</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;assign_part_of_speech(word)<br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>END FOR</span><br/>
                <br/>
                &nbsp;&nbsp;<span style={{ color: '#5c6370' }}>// Step 2: Identify the main subject (NP) and predicate (VP)</span><br/>
                &nbsp;&nbsp;subject = find_subject_NP(sentence)<br/>
                &nbsp;&nbsp;predicate = find_predicate_VP(sentence)<br/>
                <br/>
                &nbsp;&nbsp;<span style={{ color: '#5c6370' }}>// Step 3: Apply constituency tests to verify groupings</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>FOR EACH</span> potential_constituent <span style={{ color: '#c678dd' }}>DO</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>IF</span> passes_substitution_test(potential_constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>OR</span> passes_movement_test(potential_constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>OR</span> passes_cleft_test(potential_constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>THEN</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mark_as_constituent(potential_constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>END IF</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>END FOR</span><br/>
                <br/>
                &nbsp;&nbsp;<span style={{ color: '#5c6370' }}>// Step 4: Identify phrases within constituents</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>FOR EACH</span> constituent <span style={{ color: '#c678dd' }}>DO</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>IF</span> constituent contains noun_head <span style={{ color: '#c678dd' }}>THEN</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label_as_NP(constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>ELSE IF</span> constituent contains verb_head <span style={{ color: '#c678dd' }}>THEN</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label_as_VP(constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>ELSE IF</span> constituent contains preposition_head <span style={{ color: '#c678dd' }}>THEN</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label_as_PP(constituent)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>END IF</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>END FOR</span><br/>
                <br/>
                &nbsp;&nbsp;<span style={{ color: '#5c6370' }}>// Step 5: Build tree from top down</span><br/>
                &nbsp;&nbsp;create_root_node(S)<br/>
                &nbsp;&nbsp;attach_NP_as_left_child(subject)<br/>
                &nbsp;&nbsp;attach_VP_as_right_child(predicate)<br/>
                <br/>
                &nbsp;&nbsp;<span style={{ color: '#5c6370' }}>// Step 6: Expand phrases recursively</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>FOR EACH</span> phrase <span style={{ color: '#c678dd' }}>DO</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;expand_phrase(phrase)<br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>END FOR</span><br/>
                <br/>
                &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>RETURN</span> tree_diagram<br/>
                <span style={{ color: '#c678dd' }}>END</span>
              </code>
            </div>
          </div>
          <div className="alert alert-info">
            <strong>⏱️ Complexity Analysis:</strong><br/>
            <strong>Time Complexity:</strong> O(n²) where n = number of words (due to nested phrase analysis)<br/>
            <strong>Space Complexity:</strong> O(n) for tree representation<br/>
            <strong>Best Case:</strong> O(n) for simple sentences with minimal embedding<br/>
            <strong>Worst Case:</strong> O(n²) for heavily embedded sentences with multiple clauses
          </div>

          <h3 className="subsection-title">Worked Example 1: Basic Sentence Analysis</h3>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>📝 Problem Statement</h4>
            <p>
              Draw a phrase structure tree for the sentence: &quot;The student reads books.&quot; Identify all constituents and apply at least two constituency tests to verify your analysis.
            </p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 1: Label parts of speech</strong>
                <p>The (Det) student (N) reads (V) books (N)</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 2: Identify subject and predicate</strong>
                <p>Subject: &quot;The student&quot; (NP)</p>
                <p>Predicate: &quot;reads books&quot; (VP)</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 3: Apply constituency tests</strong>
                <p><strong>Substitution test for NP:</strong> &quot;The student&quot; → &quot;She&quot; (&quot;She reads books.&quot; ✓)</p>
                <p><strong>Substitution test for VP:</strong> &quot;reads books&quot; → &quot;does so&quot; (&quot;The student does so.&quot; ✓)</p>
                <p><strong>Cleft test:</strong> &quot;It is the student that reads books.&quot; ✓</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 4: Identify phrase structure</strong>
                <p>NP: Det + N (&quot;The student&quot;)</p>
                <p>VP: V + NP (&quot;reads books&quot;)</p>
                <p>Inner NP: N (&quot;books&quot;)</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 5: Construct tree</strong>
                <p>S branches to NP and VP</p>
                <p>NP branches to Det (&quot;the&quot;) and N (&quot;student&quot;)</p>
                <p>VP branches to V (&quot;reads&quot;) and NP (&quot;books&quot;)</p>
                <p>Inner NP branches to N (&quot;books&quot;)</p>
              </div>
            </div>
            <div className="diagram-container">
              <h4>Tree Diagram</h4>
              <svg width="600" height="350" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="600" height="350" fill="#f8f9fa" />
                <circle cx="300" cy="40" r="20" fill="#667eea" stroke="#2980b9" strokeWidth="2" />
                <text x="300" y="47" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S</text>
                <line x1="300" y1="60" x2="200" y2="100" stroke="#34495e" strokeWidth="2" />
                <line x1="300" y1="60" x2="400" y2="100" stroke="#34495e" strokeWidth="2" />
                <circle cx="200" cy="120" r="20" fill="#3498db" stroke="#2980b9" strokeWidth="2" />
                <text x="200" y="127" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">NP</text>
                <circle cx="400" cy="120" r="20" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" />
                <text x="400" y="127" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">VP</text>
                <line x1="200" y1="140" x2="150" y2="180" stroke="#34495e" strokeWidth="2" />
                <line x1="200" y1="140" x2="250" y2="180" stroke="#34495e" strokeWidth="2" />
                <rect x="120" y="180" width="60" height="30" fill="#9b59b6" stroke="#8e44ad" strokeWidth="2" rx="5" />
                <text x="150" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Det</text>
                <rect x="220" y="180" width="60" height="30" fill="#9b59b6" stroke="#8e44ad" strokeWidth="2" rx="5" />
                <text x="250" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">N</text>
                <text x="150" y="250" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">the</text>
                <text x="250" y="250" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">student</text>
                <line x1="150" y1="210" x2="150" y2="235" stroke="#34495e" strokeWidth="2" />
                <line x1="250" y1="210" x2="250" y2="235" stroke="#34495e" strokeWidth="2" />
                <line x1="400" y1="140" x2="350" y2="180" stroke="#34495e" strokeWidth="2" />
                <line x1="400" y1="140" x2="450" y2="180" stroke="#34495e" strokeWidth="2" />
                <rect x="320" y="180" width="60" height="30" fill="#27ae60" stroke="#229954" strokeWidth="2" rx="5" />
                <text x="350" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">V</text>
                <rect x="420" y="180" width="60" height="30" fill="#3498db" stroke="#2980b9" strokeWidth="2" rx="5" />
                <text x="450" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">NP</text>
                <text x="350" y="250" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">reads</text>
                <line x1="350" y1="210" x2="350" y2="235" stroke="#34495e" strokeWidth="2" />
                <line x1="450" y1="210" x2="450" y2="240" stroke="#34495e" strokeWidth="2" />
                <rect x="420" y="240" width="60" height="30" fill="#9b59b6" stroke="#8e44ad" strokeWidth="2" rx="5" />
                <text x="450" y="260" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">N</text>
                <line x1="450" y1="270" x2="450" y2="295" stroke="#34495e" strokeWidth="2" />
                <text x="450" y="315" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="bold">books</text>
              </svg>
              <p className="diagram-caption">Figure 5: Complete tree diagram for &quot;The student reads books&quot;</p>
            </div>
            <h4>✅ Final Answer</h4>
            <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
              <p><strong>Constituents identified:</strong></p>
              <ul style={{ marginLeft: '20px' }}>
                <li>S: &quot;The student reads books&quot; (entire sentence)</li>
                <li>NP: &quot;The student&quot; (subject)</li>
                <li>VP: &quot;reads books&quot; (predicate)</li>
                <li>Det: &quot;the&quot;</li>
                <li>N: &quot;student&quot;</li>
                <li>V: &quot;reads&quot;</li>
                <li>NP: &quot;books&quot; (object)</li>
                <li>N: &quot;books&quot;</li>
              </ul>
              <p><strong>Phrase structure rules used:</strong> S → NP VP, NP → Det N, VP → V NP</p>
            </div>
            <h4>💡 Key Insights</h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>The substitution test confirms &quot;The student&quot; is a constituent because it can be replaced by &quot;she&quot;</li>
              <li>The verb &quot;reads&quot; requires an object NP to form a complete VP</li>
              <li>&quot;Books&quot; functions as both an NP (constituent) and an N (head of that NP)</li>
              <li>The tree shows hierarchical structure: S dominates NP and VP, which dominate smaller constituents</li>
            </ul>
          </div>

          <h3 className="subsection-title">Worked Example 2: Complex Sentence with Prepositional Phrases</h3>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>📝 Problem Statement</h4>
            <p>
              Draw a phrase structure tree for the sentence: &quot;The cat sat on the mat in the kitchen.&quot; Identify all constituents and explain the hierarchical relationships.
            </p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 1: Label parts of speech</strong>
                <p>The (Det) cat (N) sat (V) on (P) the (Det) mat (N) in (P) the (Det) kitchen (N)</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 2: Identify constituents using tests</strong>
                <p><strong>&quot;The cat&quot;:</strong> Substitution → &quot;It sat...&quot; ✓ (NP)</p>
                <p><strong>&quot;sat on the mat in the kitchen&quot;:</strong> Substitution → &quot;did so&quot; ✓ (VP)</p>
                <p><strong>&quot;on the mat&quot;:</strong> Movement → &quot;On the mat, the cat sat...&quot; ✓ (PP)</p>
                <p><strong>&quot;in the kitchen&quot;:</strong> Movement → &quot;In the kitchen, the cat sat...&quot; ✓ (PP)</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 3: Analyze phrase structure</strong>
                <p>NP (subject): Det + N = &quot;The cat&quot;</p>
                <p>VP: V + PP + PP = &quot;sat on the mat in the kitchen&quot;</p>
                <p>PP1: P + NP = &quot;on the mat&quot; (NP = Det + N)</p>
                <p>PP2: P + NP = &quot;in the kitchen&quot; (NP = Det + N)</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Step 4: Build tree diagram</strong>
                <p>S → NP + VP</p>
                <p>NP → Det (&quot;The&quot;) + N (&quot;cat&quot;)</p>
                <p>VP → V (&quot;sat&quot;) + PP (&quot;on the mat&quot;) + PP (&quot;in the kitchen&quot;)</p>
                <p>Each PP → P + NP, and each NP → Det + N</p>
              </div>
            </div>
            <h4>✅ Final Answer</h4>
            <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
              <p><strong>Tree structure:</strong></p>
              <ul style={{ marginLeft: '20px' }}>
                <li>S dominates NP (subject) and VP (predicate)</li>
                <li>NP: Det(&quot;The&quot;) + N(&quot;cat&quot;)</li>
                <li>VP: V(&quot;sat&quot;) + PP(&quot;on the mat&quot;) + PP(&quot;in the kitchen&quot;)</li>
                <li>PP1: P(&quot;on&quot;) + NP(Det(&quot;the&quot;) + N(&quot;mat&quot;))</li>
                <li>PP2: P(&quot;in&quot;) + NP(Det(&quot;the&quot;) + N(&quot;kitchen&quot;))</li>
              </ul>
              <p><strong>Key observation:</strong> Multiple PPs can attach to the same VP, showing how sentences can be expanded.</p>
            </div>
            <h4>💡 Key Insights</h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>Prepositional phrases can stack within a VP to add more information</li>
              <li>Each PP has its own internal structure: Preposition + NP</li>
              <li>The order of PPs can sometimes be changed (&quot;in the kitchen on the mat&quot;), showing they&apos;re separate constituents</li>
              <li>Complex sentences are built by recursively applying phrase structure rules</li>
            </ul>
          </div>

          <h3 className="subsection-title">Worked Example 3: Ambiguous Structure</h3>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>📝 Problem Statement</h4>
            <p>
              The sentence &quot;I saw the man with the telescope&quot; is syntactically ambiguous. Draw two different tree diagrams showing the two possible interpretations, and explain how the meaning changes.
            </p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Interpretation 1: I used the telescope to see the man</strong>
                <p>Here, &quot;with the telescope&quot; modifies the verb &quot;saw&quot; (how I saw)</p>
                <p>Structure: [I [saw [the man] [with the telescope]]]</p>
                <p>The PP attaches to VP, modifying the action of seeing</p>
              </div>
              <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>
                <strong>Interpretation 2: I saw the man who had the telescope</strong>
                <p>Here, &quot;with the telescope&quot; modifies &quot;the man&quot; (which man)</p>
                <p>Structure: [I [saw [the man [with the telescope]]]]</p>
                <p>The PP attaches to NP, modifying the noun &quot;man&quot;</p>
              </div>
            </div>
            <h4>✅ Final Answer</h4>
            <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
              <p><strong>Two distinct syntactic structures yield two meanings:</strong></p>
              <p><strong>Structure 1 (VP attachment):</strong> PP modifies the verb</p>
              <p><strong>Structure 2 (NP attachment):</strong> PP modifies the noun</p>
              <p>This is a classic example of <strong>structural ambiguity</strong>—the same linear string of words has two different hierarchical structures.</p>
            </div>
            <div className="alert alert-warning" style={{ background: '#fff3cd', borderColor: '#ffc107', color: '#856404', padding: '15px', borderRadius: '5px', borderLeft: '4px solid #ffc107', marginTop: '15px' }}>
              <strong>⚠️ Common Mistake:</strong>
              <p>Many students only see one interpretation of ambiguous sentences. Always check if PPs can attach to different nodes in the tree. When a PP follows an NP, ask: Does it modify the verb (how the action was done) or the noun (which one)?</p>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 5: COMPARISON & ANALYSIS ==================== */}
        <div className="section" id="comparison">
          <h2 className="section-title">
            <span className="section-icon">📊</span>
            Comparison &amp; Analysis
          </h2>
          <p>
            Understanding the differences between syntactic categories and their properties is essential for accurate syntactic analysis. This comparison table highlights the key distinctions.
          </p>
          <div className="comparison-table" style={{ overflowX: 'auto', margin: '25px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Feature</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Noun Phrase (NP)</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Verb Phrase (VP)</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Prepositional Phrase (PP)</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Adjective Phrase (AdjP)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Head</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Noun (N)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Verb (V)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Preposition (P)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Adjective (Adj)</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Typical Structure</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>(Det) (AdjP) N (PP)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>V (NP) (PP) (AdvP)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>P NP</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>(Adv) Adj</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Substitution Test</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> Pronoun (he, she, it, they)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> &quot;do&quot; / &quot;do so&quot;</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> &quot;there&quot; / &quot;then&quot;</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#dc3545', fontWeight: 'bold' }}>✗</span> No clear substitute</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Function in Sentence</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Subject, Object, Complement</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Predicate (required)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Modifier (location, time, etc.)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Modifier (of N or V)</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Examples</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;the tall student,&quot; &quot;John,&quot; &quot;books&quot;</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;sleeps,&quot; &quot;kicked the ball,&quot; &quot;gave Mary a gift&quot;</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;in the room,&quot; &quot;with a smile,&quot; &quot;at school&quot;</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;very happy,&quot; &quot;quite tall,&quot; &quot;fond of music&quot;</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Can be Complex?</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> Yes (multiple modifiers)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> Yes (multiple complements)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> Yes (NP can be complex)</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> Yes (degree modifiers)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="subsection-title">Word Order Across Languages</h3>
          <div className="comparison-table" style={{ overflowX: 'auto', margin: '25px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Language Type</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Example Languages</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Basic Word Order</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Characteristics</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>SVO</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>English, Spanish, Mandarin</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Subject-Verb-Object</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;The dog chased the cat.&quot; Most common word order globally (~35% of languages)</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>SOV</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Japanese, Korean, Hindi</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Subject-Object-Verb</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;The dog the cat chased.&quot; Second most common (~40% of languages)</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>VSO</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Irish, Arabic, Welsh</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Verb-Subject-Object</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;Chased the dog the cat.&quot; Less common (~10% of languages)</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>VOS</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Malagasy, Fijian</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Verb-Object-Subject</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>&quot;Chased the cat the dog.&quot; Rare (~5% of languages)</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}><strong>Free Word Order</strong></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Russian, Latin, Greek</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Flexible</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Word order determined by pragmatics; case marking preserves meaning</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="alert alert-info">
            <strong>Key Insight:</strong>
            <p>
              While word order varies across languages, all languages have systematic ways to indicate who did what to whom. Languages with freer word order typically use case marking (nominative, accusative) to show grammatical roles, while languages with fixed word order rely on position.
            </p>
          </div>
        </div>

        <h3 className="subsection-title">Problem-Solving Practice</h3>
        <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
          <h4>📘 Easy Problem</h4>
          <p>
            <strong>Problem:</strong> Apply the substitution test to determine if &quot;the happy child&quot; is a constituent in the sentence &quot;The happy child plays outside.&quot;
          </p>
          <button className="collapsible">Show Solution</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <h4>Solution:</h4>
              <div className="example-steps">
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Original: &quot;The happy child plays outside.&quot;</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Substitution: Replace &quot;the happy child&quot; with pronoun &quot;he&quot; or &quot;she&quot;</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Result: &quot;She plays outside.&quot; ✓ Grammatical!</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Conclusion: &quot;The happy child&quot; is a constituent (NP)</div>
              </div>
              <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                <strong>Final Answer:</strong> Yes, &quot;the happy child&quot; is a constituent because it can be replaced by a pronoun without changing grammaticality.
              </div>
            </div>
          </div>
        </div>

        <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
          <h4>📙 Medium Problem</h4>
          <p>
            <strong>Problem:</strong> Draw a tree diagram for &quot;The dog with the red collar chased the cat.&quot; Identify all phrases and their heads.
          </p>
          <button className="collapsible">Show Solution</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <h4>Solution:</h4>
              <div className="example-steps">
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>S → NP (subject) + VP (predicate)</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Subject NP: &quot;The dog with the red collar&quot; = Det + N + PP</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>PP: &quot;with the red collar&quot; = P + NP</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Inner NP: &quot;the red collar&quot; = Det + Adj + N</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>VP: &quot;chased the cat&quot; = V + NP</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Object NP: &quot;the cat&quot; = Det + N</div>
              </div>
              <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                <strong>Heads identified:</strong><br/>
                NP heads: dog, collar, cat<br/>
                VP head: chased<br/>
                PP head: with
              </div>
            </div>
          </div>
        </div>

        <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
          <h4>📕 Hard Problem</h4>
          <p>
            <strong>Problem:</strong> Explain why &quot;*The student of physics with the red pen&quot; is ungrammatical as a complete sentence, but &quot;The student of physics with the red pen passed the exam&quot; is grammatical. What does this tell us about constituency?
          </p>
          <button className="collapsible">Show Solution</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <h4>Solution:</h4>
              <div className="example-steps">
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>&quot;The student of physics with the red pen&quot; is only an NP—a subject without a predicate</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>A complete sentence (S) requires both an NP subject AND a VP predicate</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>Adding &quot;passed the exam&quot; provides the VP, making a complete S</div>
                <div className="step" style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #667eea' }}>This shows that constituents have distributional properties: NPs can be subjects, VPs can be predicates</div>
              </div>
              <div style={{ background: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                <strong>Key insight:</strong> Constituency is about distribution—what positions a group of words can occupy. An NP alone cannot form a sentence; it needs to combine with a VP following the rule S → NP VP.
              </div>
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Short Answer Questions</h3>
        <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
          <h4>Question 1:</h4>
          <p>Explain the difference between a word&apos;s category (part of speech) and a phrase&apos;s category. Give an example.</p>
          <button className="collapsible">Show Sample Answer</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <p>
                A <strong>word&apos;s category</strong> (part of speech) is the lexical class of an individual word—noun, verb, adjective, etc. A <strong>phrase&apos;s category</strong> is determined by the category of its head word. For example, in &quot;the tall student,&quot; &quot;student&quot; is a noun (word category), and the entire phrase &quot;the tall student&quot; is a Noun Phrase (phrase category) because &quot;student&quot; is the head.
              </p>
              <p>
                Similarly, in &quot;reads books quickly,&quot; &quot;reads&quot; is a verb (word category), and the entire phrase &quot;reads books quickly&quot; is a Verb Phrase (phrase category) because &quot;reads&quot; is the head.
              </p>
            </div>
          </div>
        </div>

        <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
          <h4>Question 2:</h4>
          <p>Why is the movement test considered evidence for constituency? Provide an example.</p>
          <button className="collapsible">Show Sample Answer</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <p>
                The <strong>movement test</strong> is evidence for constituency because only constituents can be moved as units to different positions in a sentence while preserving grammaticality. If a group of words is not a constituent, moving them together will create an ungrammatical sentence.
              </p>
              <p>
                <strong>Example:</strong> In &quot;The children will stop at the corner,&quot; we can move &quot;at the corner&quot; to the front: &quot;At the corner, the children will stop.&quot; This movement is possible because &quot;at the corner&quot; is a constituent (PP). However, we cannot move &quot;at the&quot; together: &quot;*At the, the children will stop corner&quot; is ungrammatical because &quot;at the&quot; is not a constituent.
              </p>
            </div>
          </div>
        </div>

        <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
          <h4>Question 3:</h4>
          <p>What is the difference between SVO and SOV word order? Give an example of each.</p>
          <button className="collapsible">Show Sample Answer</button>
          <div className="collapsible-content">
            <div className="collapsible-content-inner">
              <p>
                <strong>SVO (Subject-Verb-Object)</strong> languages place the verb between the subject and object. <strong>Example (English):</strong> &quot;The dog (S) chased (V) the cat (O).&quot;
              </p>
              <p>
                <strong>SOV (Subject-Object-Verb)</strong> languages place the object before the verb. <strong>Example (Japanese):</strong> &quot;Inu-ga (S) neko-o (O) oikaketa (V)&quot; = &quot;Dog subject cat object chased&quot; = &quot;The dog chased the cat.&quot;
              </p>
              <p>
                The difference reflects a parameter setting in Universal Grammar that varies across languages but follows systematic patterns.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 7: HANDS-ON LAB ==================== */}
        <div className="lab-exercise" style={{ background: 'linear-gradient(135deg, #667eea15, #764ba215)', padding: '30px', borderRadius: '10px', margin: '30px 0', border: '2px solid #667eea' }}>
          <h3 style={{ color: '#667eea', fontSize: '1.8em', marginBottom: '20px' }}>🛠️ Hands-On Lab Exercise</h3>
          <h2 style={{ fontSize: '1.5em', marginBottom: '20px' }}>Syntactic Analysis Workshop</h2>
          <div className="lab-objective" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <strong>📋 Objective:</strong>
            <p>
              In this lab, you will practice analyzing sentences from various sources (literature, news articles, academic texts) to identify their constituent structure. You will draw phrase structure trees and apply constituency tests to verify your analysis.
            </p>
          </div>
          <div className="lab-objective" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <strong>⏱️ Estimated Time:</strong> 45-60 minutes
          </div>
          <div className="lab-objective" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <strong>🎯 Learning Goals:</strong>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Accurately identify constituents using multiple tests</li>
              <li>Draw correct phrase structure trees</li>
              <li>Apply phrase structure rules to generate grammatical sentences</li>
              <li>Recognize structural ambiguity in sentences</li>
            </ul>
          </div>
          <div className="lab-steps" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <h4>📝 Instructions:</h4>
            <ol style={{ marginLeft: '20px' }}>
              <li>
                <strong>Collect Your Data</strong>
                <p>Find 5 sentences from a book, newspaper, or online article. Choose sentences of varying complexity (some simple, some with multiple phrases).</p>
              </li>
              <li>
                <strong>Label Parts of Speech</strong>
                <p>For each sentence, label every word with its part of speech (Det, N, V, Adj, Adv, P).</p>
              </li>
              <li>
                <strong>Apply Constituency Tests</strong>
                <p>For each sentence, apply at least two constituency tests (substitution, movement, cleft) to identify major constituents.</p>
              </li>
              <li>
                <strong>Draw Tree Diagrams</strong>
                <p>Draw a complete phrase structure tree for each sentence, showing all phrases and their hierarchical relationships.</p>
              </li>
              <li>
                <strong>Write Phrase Structure Rules</strong>
                <p>List the phrase structure rules you used to generate each tree.</p>
              </li>
              <li>
                <strong>Identify Ambiguities</strong>
                <p>Check if any of your sentences are structurally ambiguous. If so, draw both trees and explain the different meanings.</p>
              </li>
            </ol>
          </div>
          <div className="lab-objective" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <strong>📦 Sample Sentences to Analyze:</strong>
            <p>If you cannot find your own sentences, analyze these:</p>
            <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>The old man walked slowly down the street.</li>
              <li>My friend gave the book to the student.</li>
              <li>The professor of linguistics with the gray beard taught the class.</li>
              <li>She put the flowers in the vase on the table.</li>
              <li>The cat that chased the mouse slept on the mat.</li>
            </ol>
          </div>
          <div className="lab-objective" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <strong>✅ Expected Output:</strong>
            <p>A completed worksheet showing:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>5 analyzed sentences with POS labels</li>
              <li>Constituency test results for each sentence</li>
              <li>5 complete tree diagrams</li>
              <li>List of phrase structure rules used</li>
              <li>Identification of any ambiguous structures</li>
            </ul>
          </div>
          <div className="lab-objective" style={{ background: 'white', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <strong>🎓 Grading Rubric:</strong>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Correct POS labeling: 20 points</li>
              <li>Accurate constituency identification: 25 points</li>
              <li>Correct tree diagrams: 30 points</li>
              <li>Proper phrase structure rules: 15 points</li>
              <li>Identification of ambiguities: 10 points</li>
            </ul>
          </div>
        </div>

        {/* ==================== SECTION 9: COMMON PITFALLS ==================== */}
        <div className="section" id="pitfalls">
          <h2 className="section-title">
            <span className="section-icon">⚠️</span>
            Common Pitfalls &amp; How to Avoid Them
          </h2>
          <p>
            Learn from common mistakes students make when learning syntax. Understanding these pitfalls will help you avoid them in exams and practical applications.
          </p>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>🚫 Pitfall #1: Confusing Linear Order with Hierarchical Structure</strong>
            <p><strong>What students do wrong:</strong> Assume that words adjacent in the linear string must be in the same constituent.</p>
            <p><strong>Why it&apos;s wrong:</strong> Syntax is about hierarchical structure, not linear adjacency. Words that are next to each other may belong to different constituents.</p>
            <p><strong>Consequences:</strong> Incorrect tree diagrams, failure to recognize true constituent boundaries.</p>
            <p><strong>✅ How to avoid it:</strong> Always apply constituency tests. Don&apos;t assume—verify with substitution, movement, or cleft tests.</p>
            <p><strong>Example:</strong> In &quot;The student of physics studied,&quot; &quot;physics&quot; and &quot;studied&quot; are adjacent but in different constituents (NP vs. VP).</p>
          </div>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>🚫 Pitfall #2: Forgetting to Include All Words in the Tree</strong>
            <p><strong>What students do wrong:</strong> Draw trees that don&apos;t account for every word in the sentence.</p>
            <p><strong>Why it&apos;s wrong:</strong> Every word must be represented in the tree as a terminal node. Leaving words out means the tree is incomplete.</p>
            <p><strong>Consequences:</strong> Incomplete analysis, loss of important structural information.</p>
            <p><strong>✅ How to avoid it:</strong> Count the words in your sentence before drawing, and verify each word appears as a terminal node.</p>
            <p><strong>Example:</strong> In &quot;The cat sat on the mat,&quot; make sure all 6 words (the, cat, sat, on, the, mat) appear at the bottom of your tree.</p>
          </div>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>🚫 Pitfall #3: Attaching PPs to the Wrong Node</strong>
            <p><strong>What students do wrong:</strong> Automatically attach all PPs to the VP without considering if they modify an NP.</p>
            <p><strong>Why it&apos;s wrong:</strong> PPs can modify either verbs (VP attachment) or nouns (NP attachment), creating different meanings.</p>
            <p><strong>Consequences:</strong> Failure to recognize structural ambiguity, incorrect interpretation of sentences.</p>
            <p><strong>✅ How to avoid it:</strong> Ask: Does this PP tell us HOW something was done (VP) or WHICH ONE (NP)?</p>
            <p><strong>Example:</strong> &quot;I saw the man with the telescope&quot; has two structures depending on PP attachment.</p>
          </div>
          <div className="alert alert-danger" style={{ background: '#f8d7da', borderColor: '#dc3545', color: '#721c24' }}>
            <strong>🚫 Pitfall #4: Confusing Word Categories with Phrase Categories</strong>
            <p><strong>What students do wrong:</strong> Label phrases with word categories (e.g., calling an NP &quot;N&quot;).</p>
            <p><strong>Why it&apos;s wrong:</strong> Words and phrases are different levels of structure. An NP contains an N as its head, but the phrase itself is an NP.</p>
            <p><strong>Consequences:</strong> Incorrect tree labeling, confusion about hierarchical levels.</p>
            <p><strong>✅ How to avoid it:</strong> Remember: terminal nodes = word categories (N, V, Adj), non-terminal nodes = phrase categories (NP, VP, PP).</p>
            <p><strong>Example:</strong> In &quot;the cat,&quot; &quot;cat&quot; is N, but &quot;the cat&quot; is NP.</p>
          </div>
          <div className="alert alert-warning" style={{ background: '#fff3cd', borderColor: '#ffc107', color: '#856404' }}>
            <strong>💡 Exam Tips:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Always verify with constituency tests</strong>—don&apos;t just guess where constituents end</li>
              <li><strong>Check that every word is in your tree</strong>—count before and after drawing</li>
              <li><strong>Label all nodes clearly</strong>—both phrase categories and word categories</li>
              <li><strong>Watch for structural ambiguity</strong>—especially with PPs following NPs</li>
              <li><strong>Remember phrase structure rules</strong>—S → NP VP, NP → (Det) (Adj) N, etc.</li>
            </ul>
          </div>
        </div>

        {/* ==================== SECTION 10: QUICK REFERENCE ==================== */}
        <div className="quick-ref" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', margin: '30px 0' }}>
          <h2 className="section-title">
            <span className="section-icon">📄</span>
            Quick Reference Cheat Sheet
          </h2>
          <p>Save this page for quick review! Here&apos;s everything you need to remember at a glance.</p>
          <div className="quick-ref-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '25px' }}>
            <div className="quick-ref-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>🔑 Key Definitions</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Syntax:</strong> Study of sentence structure</li>
                <li><strong>Constituent:</strong> Group of words functioning as a unit</li>
                <li><strong>Phrase:</strong> Constituent with a head word</li>
                <li><strong>Head:</strong> Central word determining phrase category</li>
                <li><strong>Tree Diagram:</strong> Visual representation of structure</li>
              </ul>
            </div>
            <div className="quick-ref-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>📐 Constituency Tests</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Substitution:</strong> Replace with single word</li>
                <li><strong>Movement:</strong> Move to new position</li>
                <li><strong>Cleft:</strong> &quot;It is ___ that ___&quot;</li>
                <li><strong>Coordination:</strong> Join with &quot;and&quot;/&quot;or&quot;</li>
              </ul>
            </div>
            <div className="quick-ref-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>⚙️ Phrase Structure Rules</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>S → NP VP</strong></li>
                <li><strong>NP → (Det) (AdjP) N (PP)</strong></li>
                <li><strong>VP → V (NP) (PP) (AdvP)</strong></li>
                <li><strong>PP → P NP</strong></li>
                <li><strong>AdjP → (Adv) Adj</strong></li>
              </ul>
            </div>
            <div className="quick-ref-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>✅ Phrase Categories</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>NP:</strong> Noun Phrase (Det + N)</li>
                <li><strong>VP:</strong> Verb Phrase (V + complements)</li>
                <li><strong>PP:</strong> Prepositional Phrase (P + NP)</li>
                <li><strong>AdjP:</strong> Adjective Phrase (Adj + modifiers)</li>
                <li><strong>AdvP:</strong> Adverb Phrase (Adv + modifiers)</li>
              </ul>
            </div>
            <div className="quick-ref-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>⚠️ Common Mistakes</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li>❌ Confusing linear and hierarchical structure</li>
                <li>❌ Forgetting words in the tree</li>
                <li>❌ Attaching PPs to wrong nodes</li>
                <li>❌ Confusing word/phrase categories</li>
              </ul>
            </div>
            <div className="quick-ref-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>🌍 Word Order Types</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>SVO:</strong> English, Spanish</li>
                <li><strong>SOV:</strong> Japanese, Hindi</li>
                <li><strong>VSO:</strong> Irish, Arabic</li>
                <li><strong>Free:</strong> Russian, Latin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 11: GO DEEPER ==================== */}
        <div className="section" id="further">
          <h2 className="section-title">
            <span className="section-icon">🚀</span>
            Go Deeper: Advanced Topics &amp; Resources
          </h2>
          <h3 className="subsection-title">Advanced Concepts</h3>
          <p>Ready to go beyond the basics? Here are related advanced topics:</p>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>🔬 Advanced Topic 1: X-Bar Theory</h4>
            <p>
              X-Bar Theory is a more refined model of phrase structure that captures cross-linguistic generalizations. It posits that all phrases have a uniform structure with three levels: the head (X), the intermediate level (X&apos;), and the maximal projection (XP). This theory explains why phrases in all languages share similar properties and provides a framework for understanding movement operations.
            </p>
            <p><strong>Learn more:</strong> Search for &quot;X-Bar Theory syntax&quot; or read &quot;The Syntax of English&quot; by Andrew Radford</p>
          </div>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>🔬 Advanced Topic 2: Transformational Grammar</h4>
            <p>
              Transformational Grammar, developed by Noam Chomsky, proposes that sentences have a deep structure that is transformed into surface structure through movement operations. This explains phenomena like question formation (&quot;What did you see?&quot; = &quot;You saw what&quot; + movement) and passive constructions. Understanding transformations is essential for advanced syntactic analysis.
            </p>
            <p><strong>Learn more:</strong> Read Chomsky&apos;s &quot;Syntactic Structures&quot; or &quot;Aspects of the Theory of Syntax&quot;</p>
          </div>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>🔬 Advanced Topic 3: Minimalist Program</h4>
            <p>
              The Minimalist Program is Chomsky&apos;s most recent framework, which seeks to simplify syntactic theory by reducing the number of theoretical constructs. It proposes that syntax is driven by feature-checking operations and that movement occurs to satisfy interface conditions between syntax and other cognitive systems.
            </p>
            <p><strong>Learn more:</strong> Read &quot;The Minimalist Program&quot; by Noam Chomsky</p>
          </div>
          <h3 className="subsection-title">📚 Recommended Resources</h3>
          <div className="alert alert-info">
            <strong>Books:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>&quot;English Syntax: An Introduction&quot;</strong> by Andrew Radford - Excellent undergraduate textbook</li>
              <li><strong>&quot;Syntax: A Generative Introduction&quot;</strong> by Andrew Carnie - Comprehensive introduction</li>
              <li><strong>&quot;The Grammar Book&quot;</strong> by Celce-Murcia and Larsen-Freeman - For language teachers</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Research Papers:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>&quot;Syntactic Structures&quot; by Noam Chomsky (1957) - Foundational work</li>
              <li>&quot;Remarks on Nominalization&quot; by Noam Chomsky (1970) - X-Bar Theory</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Online Courses:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Coursera:</strong> &quot;Introduction to Linguistics&quot; by University of Leiden</li>
              <li><strong>YouTube:</strong> Crash Course Linguistics full playlist</li>
              <li><strong>MIT OpenCourseWare:</strong> 24.900 Introduction to Linguistics</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Interactive Tools:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Syntax Tree Generator:</strong> Search online for &quot;syntax tree maker&quot;</li>
              <li><strong>All Things Linguistic:</strong> Blog with syntax resources</li>
            </ul>
          </div>
          <h3 className="subsection-title">💼 Interview Preparation</h3>
          <p>This topic is commonly tested in linguistics program interviews. Here are typical questions:</p>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>Interview Question 1:</h4>
            <p>&quot;How would you explain constituency to someone who has never studied linguistics?&quot;</p>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>How to approach:</strong> Use analogies and concrete examples.</p>
                <p><strong>Key points to mention:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Constituents are like building blocks that group together</li>
                  <li>Use the substitution test as a concrete example</li>
                  <li>&quot;The happy student&quot; → &quot;She&quot; (you can replace the whole group with one word)</li>
                  <li>Constituents can be moved: &quot;On Tuesday, I will go&quot; vs. &quot;I will go on Tuesday&quot;</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>Interview Question 2:</h4>
            <p>&quot;What is the difference between syntax and morphology?&quot;</p>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>Sample answer:</strong></p>
                <p>
                  Morphology studies the internal structure of words—how morphemes combine to form words (e.g., &quot;un-happy-ness&quot;). Syntax studies how words combine to form sentences—the rules governing sentence structure (e.g., &quot;The unhappy student slept&quot;). Morphology is about word formation; syntax is about sentence formation. They&apos;re connected because the categories identified in morphology (nouns, verbs, etc.) are the building blocks that syntax arranges into sentences.
                </p>
              </div>
            </div>
          </div>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>Interview Question 3:</h4>
            <p>&quot;Why do linguists use tree diagrams? What do they represent?&quot;</p>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>Sample answer:</strong></p>
                <p>
                  Tree diagrams represent the hierarchical structure of sentences that native speakers unconsciously know. They show which words group together as constituents and how phrases are embedded within other phrases. Trees make precise predictions about grammaticality, movement, and interpretation. For example, a tree diagram can show why &quot;Flying planes can be dangerous&quot; is ambiguous—two different tree structures yield two different meanings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 12: EXAM PRACTICE ==================== */}
        <div className="section" id="exam">
          <h2 className="section-title">
            <span className="section-icon">📝</span>
            University Exam Practice
          </h2>
          <p>
            Practice with these university-style exam questions. These reflect the format and difficulty of actual linguistics exams.
          </p>
          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>Question 1: Short Answer (5 marks) - [Time: 7 minutes]</h4>
            <p>
              Define the term &quot;constituent&quot; and explain how the substitution test can be used to identify constituents. Provide one example.
            </p>
            <button className="collapsible">Show Marking Scheme &amp; Model Answer</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Correct definition of constituent: 2 marks</li>
                  <li>Clear explanation of substitution test: 2 marks</li>
                  <li>Appropriate example: 1 mark</li>
                </ul>
                <h4>Model Answer:</h4>
                <p>
                  A <strong>constituent</strong> is a group of words that functions as a single unit within the hierarchical structure of a sentence (2 marks). The <strong>substitution test</strong> identifies constituents by replacing a group of words with a single word; if the result is grammatical, the original group is a constituent (2 marks). For example, in &quot;The student reads books,&quot; &quot;the student&quot; can be replaced by &quot;she&quot; (&quot;She reads books&quot;), showing it is a constituent (1 mark).
                </p>
              </div>
            </div>
          </div>

          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>Question 2: Problem Solving (10 marks) - [Time: 15 minutes]</h4>
            <p>
              Draw a complete phrase structure tree for the sentence: &quot;The professor of linguistics gave a lecture to the students.&quot; Label all constituents and identify the head of each phrase.
            </p>
            <button className="collapsible">Show Marking Scheme &amp; Complete Solution</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Correct top-level structure (S → NP VP): 2 marks</li>
                  <li>Correct subject NP structure: 2 marks</li>
                  <li>Correct VP structure with complements: 3 marks</li>
                  <li>Correct labeling of all nodes: 2 marks</li>
                  <li>Correct identification of heads: 1 mark</li>
                </ul>
                <h4>Complete Solution:</h4>
                <p><strong>Tree Structure:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>S branches to NP (subject) and VP (predicate)</li>
                  <li>Subject NP: &quot;The professor of linguistics&quot; = Det + N + PP</li>
                  <li>PP: &quot;of linguistics&quot; = P + NP (Det + N)</li>
                  <li>VP: &quot;gave a lecture to the students&quot; = V + NP + PP</li>
                  <li>Object NP: &quot;a lecture&quot; = Det + N</li>
                  <li>PP: &quot;to the students&quot; = P + NP (Det + N)</li>
                </ul>
                <p><strong>Heads:</strong> professor (NP), gave (VP), of (PP1), lecture (NP2), to (PP2), students (NP3)</p>
              </div>
            </div>
          </div>

          <div className="example-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', margin: '20px 0', border: '2px solid #dee2e6' }}>
            <h4>Question 3: Analytical/Comparison (15 marks) - [Time: 20 minutes]</h4>
            <p>
              The sentence &quot;She saw the man with the binoculars&quot; is ambiguous. Draw two different tree diagrams showing the two possible structures, and explain how the meaning changes in each case.
            </p>
            <button className="collapsible">Show Marking Scheme &amp; Model Answer</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>First tree diagram (VP attachment): 4 marks</li>
                  <li>Second tree diagram (NP attachment): 4 marks</li>
                  <li>Explanation of first meaning: 3 marks</li>
                  <li>Explanation of second meaning: 3 marks</li>
                  <li>Clear discussion of structural ambiguity: 1 mark</li>
                </ul>
                <h4>Model Answer:</h4>
                <p><strong>Structure 1: VP Attachment</strong> (4 marks)</p>
                <p>
                  The PP &quot;with the binoculars&quot; attaches to the VP node, modifying the verb &quot;saw.&quot; The tree shows: S → NP (She) + VP (V (saw) + NP (the man) + PP (with the binoculars)).
                </p>
                <p><strong>Meaning:</strong> She used binoculars to see the man (3 marks).</p>
                <p><strong>Structure 2: NP Attachment</strong> (4 marks)</p>
                <p>
                  The PP &quot;with the binoculars&quot; attaches to the NP &quot;the man.&quot; The tree shows: S → NP (She) + VP (V (saw) + NP (Det (the) + N (man) + PP (with the binoculars))).
                </p>
                <p><strong>Meaning:</strong> She saw the man who was holding binoculars (3 marks).</p>
                <p>
                  <strong>Structural Ambiguity:</strong> The same linear string of words has two different hierarchical structures, yielding two different meanings. This demonstrates that syntax is about hierarchical structure, not just word order (1 mark).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <h3>🎓 Congratulations on Completing This Module!</h3>
          <p>You&apos;ve covered all aspects of Syntax and Syntactic Structures. Make sure to practice regularly and review the quick reference sheet.</p>
          <div className="footer-links">
            <a href="#overview" className="footer-link">↑ Back to Top</a>
            <a href="#theory" className="footer-link">📖 Review Theory</a>
            <a href="#algorithm" className="footer-link">🎯 More Practice</a>
            <a href="#exam" className="footer-link">✅ Retake Quiz</a>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.9em' }}>
            Part of Principles and Practices of Human Communication | UNIT-2: Syntax and Semantics<br/>
            Generated learning material for self-paced study
          </p>
        </div>
      </div>
    </>
  );
};

export default Module2_1;
