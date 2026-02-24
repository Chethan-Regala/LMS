'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';
import './Module1_1.css';

const Module1_1: React.FC = () => {
  // Logic for MCQs and Quizzes
  const [selectedOpts, setSelectedOpts] = useState<Record<string, string>>({});
  const [answeredMCQs, setAnsweredMCQs] = useState<Record<string, boolean>>({});
  const [openCollapsibles, setOpenCollapsibles] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers: Record<string, string> = {
    '1': 'B', '2': 'C', '3': 'C', '4': 'C', '5': 'D',
    '6': 'B', '7': 'C', '8': 'B', '9': 'F', '10': 'F'
  };

  const handleSelectOpt = (qId: string, opt: string) => {
    if (answeredMCQs[qId]) return;
    setSelectedOpts(prev => ({ ...prev, [qId]: opt }));
  };

  const handleCheckMCQ = (qId: string) => {
    if (!selectedOpts[qId]) {
      alert('Please select an answer first!');
      return;
    }
    setAnsweredMCQs(prev => ({ ...prev, [qId]: true }));
  };

  const handleToggleCollapsible = (id: string) => {
    setOpenCollapsibles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmitQuiz = () => {
    let currentScore = 0;
    for (let i = 1; i <= 10; i++) {
      if (selectedOpts[i.toString()] === correctAnswers[i.toString()]) {
        currentScore++;
      }
    }
    setScore(currentScore);
    setShowResults(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="ls-module-container">
      <div className="container-main">

        {/* HEADER */}
        <div className="header">
          <div className="breadcrumb">📚 Principles and Practices of Human Communication &gt; UNIT-1: Introduction to Language and Linguistics</div>
          <h1>🌐 Overview of Linguistics and its Sub-fields</h1>
          <div className="meta-info">
            <div className="meta-card"><div className="meta-icon">⏱️</div><div className="meta-content"><strong>Estimated Time</strong><span>75–90 minutes</span></div></div>
            <div className="meta-card"><div className="meta-icon">📊</div><div className="meta-content"><strong>Difficulty</strong><span>Beginner</span></div></div>
            <div className="meta-card"><div className="meta-icon">🎯</div><div className="meta-content"><strong>Prerequisites</strong><span>Basic English Grammar</span></div></div>
            <div className="meta-card"><div className="meta-icon">✅</div><div className="meta-content"><strong>Pass Score</strong><span>70% or higher</span></div></div>
          </div>
        </div>

        {/* STICKY NAVIGATION */}
        <nav className="sticky-nav">
          <a href="#objectives"><span className="nav-number">1</span>Objectives</a>
          <a href="#theory"><span className="nav-number">2</span>Theory</a>
          <a href="#subfields"><span className="nav-number">3</span>Sub-fields</a>
          <a href="#videos"><span className="nav-number">4</span>Videos</a>
          <a href="#diagrams"><span className="nav-number">5</span>Diagrams</a>
          <a href="#practice"><span className="nav-number">6</span>Practice MCQs</a>
          <a href="#examples"><span className="nav-number">7</span>Examples</a>
          <a href="#lab"><span className="nav-number">8</span>Lab</a>
          <a href="#comparison"><span className="nav-number">9</span>Comparison</a>
          <a href="#quiz"><span className="nav-number">10</span>Quiz</a>
          <a href="#pitfalls"><span className="nav-number">11</span>Pitfalls</a>
          <a href="#quickref"><span className="nav-number">12</span>Quick Ref</a>
          <a href="#exam"><span className="nav-number">13</span>Exam Prep</a>
        </nav>

        {/* SECTION 1: LEARNING OBJECTIVES */}
        <div className="section" id="objectives">
          <h2 className="section-title"><span>🎯</span> What You'll Master</h2>
          <div className="objectives-box">
            <h3>Learning Objectives</h3>
            <ul className="objectives-list">
              <li>Define linguistics as a scientific discipline and distinguish it from prescriptive grammar using at least three concrete examples from everyday language use.</li>
              <li>Identify, name, and explain all eight major sub-fields — phonetics, phonology, morphology, syntax, semantics, pragmatics, sociolinguistics, and psycholinguistics — with a clear definition and example for each.</li>
              <li>Apply linguistic analysis to a given sentence by examining it at phonological, morphological, syntactic, and semantic levels simultaneously.</li>
              <li>Compare and contrast at least three pairs of closely related sub-fields (e.g., phonetics vs. phonology; semantics vs. pragmatics; sociolinguistics vs. psycholinguistics) using appropriate technical terminology.</li>
              <li>Recognize and explain at least four real-world applications of linguistics across domains such as language teaching, NLP, forensic linguistics, and clinical communication.</li>
            </ul>
          </div>

          <h3 className="subsection-title">🔥 Why This Topic Matters</h3>
          <p>Imagine waking up one morning and losing the ability to understand any language — not just reading or writing, but even recognizing speech. This is the reality for patients with certain brain injuries, and it is linguists who help us understand why it happens and how to treat it. Language is the most fundamental tool of human communication, yet most of us take it completely for granted. Linguistics is the scientific discipline that pulls back the curtain on this everyday miracle.</p>
          <p>Understanding linguistics is essential for anyone studying communication, education, psychology, artificial intelligence, or law. When you know how languages are structured — how sounds combine into words, words into sentences, and sentences into meaning — you become a sharper thinker, a better communicator, and a more empathetic listener. Voice assistants like Siri and Alexa are built on linguistic principles. Courtrooms use forensic linguists to analyze threatening letters. Teachers use linguistic insights to help struggling readers.</p>
          <div className="alert alert-success">
            <strong>💡 Real-World Applications:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>🤖 <strong>NLP & AI:</strong> ChatGPT, Google Translate, and Alexa are built on computational linguistics principles</li>
              <li>⚖️ <strong>Forensic Linguistics:</strong> Used in courts to analyze ransom notes, threatening messages, and authorship disputes</li>
              <li>👶 <strong>Language Acquisition:</strong> Helps educators support children with dyslexia, autism, and speech delays</li>
              <li>🌍 <strong>Translation:</strong> Professional translators rely on semantic and pragmatic knowledge to avoid mistranslations</li>
              <li>🏥 <strong>Clinical Linguistics:</strong> Speech-language therapists use phonetics and morphology to treat communication disorders</li>
            </ul>
          </div>
        </div>

        {/* SECTION 2: THEORY */}
        <div className="section" id="theory">
          <h2 className="section-title"><span>📖</span> Deep Dive: What is Linguistics?</h2>

          <div style={{ overflow: 'hidden' }}>
            <div className="image-float">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ferdinand_de_Saussure_by_Jullien.jpg/220px-Ferdinand_de_Saussure_by_Jullien.jpg" alt="Ferdinand de Saussure" />
              <div className="caption">Ferdinand de Saussure (1857–1913), father of modern linguistics</div>
            </div>

            <h3 className="subsection-title">Definition & Scope</h3>
            <p><span className="term">Linguistics</span> is the <strong>scientific study of language</strong> — its structure, its use, its history, and its role in human cognition and society. Unlike your school English teacher who corrected your grammar ("Don't say 'ain't'!"), a linguist does not judge language as right or wrong. Instead, a linguist <em>observes</em>, <em>describes</em>, and <em>explains</em> how language actually works in the real world.</p>
            <p>This distinction is crucial: linguistics is <span className="highlight">descriptive, not prescriptive</span>. It describes how people actually speak and write, rather than dictating how they should. When linguists study African-American Vernacular English (AAVE) or Indian English, they are not grading these varieties — they are recognizing them as fully systematic, rule-governed dialects worthy of scientific analysis.</p>
            <p>Linguistics investigates questions such as: How do babies acquire their first language without explicit instruction? Why do languages change over time? How does the human brain process a sentence? Can language shape the way we think? What do all human languages have in common? These questions span biology, psychology, sociology, philosophy, and computer science — making linguistics one of the most interdisciplinary fields in academia.</p>
          </div>

          <div className="alert alert-info">
            <strong>📌 Key Terminology:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><span className="term">Descriptive linguistics:</span> Objectively analyzing and describing how language is actually used by its speakers</li>
              <li><span className="term">Prescriptive linguistics:</span> Setting rules for how language "should" be used (grammar books, style guides)</li>
              <li><span className="term">Langue vs. Parole:</span> Saussure's distinction between the language system (langue) and actual speech (parole)</li>
              <li><span className="term">Competence vs. Performance:</span> Chomsky's distinction between knowing a language and actually using it</li>
              <li><span className="term">Language universals:</span> Features found in all or most of the world's ~7,000 languages</li>
              <li><span className="term">Arbitrariness of sign:</span> Saussure's principle that there is no natural connection between a word and its meaning</li>
            </ul>
          </div>

          <h3 className="subsection-title">A Brief History of Linguistics</h3>
          <p>The scientific study of language has roots stretching back over 2,500 years. The Indian grammarian <strong>Panini</strong> (~400 BCE) wrote an extraordinarily precise analysis of Sanskrit grammar — one that anticipated many modern linguistic concepts. In the 19th century, European scholars discovered that many languages (Sanskrit, Latin, Greek, Persian, English) share a common ancestor — <strong>Proto-Indo-European</strong> — and developed methods for reconstructing ancient languages. This historical-comparative linguistics was the first truly scientific approach to language.</p>
          <p>The Swiss linguist <strong>Ferdinand de Saussure</strong> (1857–1913) revolutionized linguistics by shifting focus from history to structure. His posthumously published <em>Course in General Linguistics</em> (1916) introduced the concepts of the linguistic sign, langue vs. parole, and synchronic vs. diachronic analysis. Saussure is considered the "father of modern linguistics."</p>

          <div className="linguist-grid">
            <div className="linguist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ferdinand_de_Saussure_by_Jullien.jpg/220px-Ferdinand_de_Saussure_by_Jullien.jpg" alt="Saussure" />
              <h5>Ferdinand de Saussure</h5>
              <p>Father of structural linguistics. Introduced the linguistic sign concept.</p>
            </div>
            <div className="linguist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Noam_Chomsky_portrait_2015.jpg/220px-Noam_Chomsky_portrait_2015.jpg" alt="Chomsky" />
              <h5>Noam Chomsky</h5>
              <p>Proposed Universal Grammar and the Language Acquisition Device (LAD).</p>
            </div>
            <div className="linguist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/EdwardSapir.jpg/200px-EdwardSapir.jpg" alt="Sapir" />
              <h5>Edward Sapir</h5>
              <p>Developed the Sapir-Whorf hypothesis: language shapes thought.</p>
            </div>
            <div className="linguist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Panini.jpg/200px-Panini.jpg" alt="Panini" />
              <h5>Panini (~400 BCE)</h5>
              <p>Ancient Indian grammarian. Wrote the world's first systematic grammar.</p>
            </div>
          </div>

          <p>In the 20th century, <strong>Noam Chomsky</strong> transformed linguistics again by arguing that all humans are born with an innate capacity for language — a <em>Language Acquisition Device</em> — and that all languages share a common underlying structure called <strong>Universal Grammar</strong>. This nativist view sparked decades of debate and research that continues today.</p>
        </div>

        {/* SECTION 3: SUB-FIELDS */}
        <div className="section" id="subfields">
          <h2 className="section-title"><span>🔬</span> The Eight Sub-fields of Linguistics</h2>
          <p>Linguistics is not a single, monolithic field. It branches into several specialized sub-disciplines, each focusing on a different level or aspect of language. Think of linguistics as a tree: the trunk is language itself, and each major branch is a sub-field that studies one dimension of that language.</p>

          {/* SVG Linguistics Tree Diagram */}
          <div className="diagram-container" id="diagrams">
            <h4>🌳 The Linguistics Family Tree</h4>
            <svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
              <rect width="900" height="500" fill="#f8f9fa" rx="10" />
              <ellipse cx="450" cy="60" rx="100" ry="35" fill="#2c3e50" />
              <text x="450" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">LINGUISTICS</text>
              <text x="450" y="72" textAnchor="middle" fill="#ecf0f1" fontSize="11">Scientific Study of Language</text>
              <line x1="450" y1="95" x2="90" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="200" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="315" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="430" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="545" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="660" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="775" y2="180" stroke="#2c3e50" strokeWidth="2" />
              <line x1="450" y1="95" x2="860" y2="180" stroke="#2c3e50" strokeWidth="2" />
              {/* Sub-field Rects */}
              <rect x="30" y="175" width="120" height="55" fill="#e74c3c" rx="8" />
              <text x="90" y="198" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Phonetics</text>
              <text x="90" y="215" textAnchor="middle" fill="#ffd" fontSize="10">Speech Sounds</text>

              <rect x="145" y="175" width="120" height="55" fill="#e67e22" rx="8" />
              <text x="205" y="198" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Phonology</text>
              <text x="205" y="215" textAnchor="middle" fill="#ffd" fontSize="10">Sound Patterns</text>

              <rect x="260" y="175" width="120" height="55" fill="#f1c40f" rx="8" />
              <text x="320" y="198" textAnchor="middle" fill="#333" fontSize="13" fontWeight="bold">Morphology</text>
              <text x="320" y="215" textAnchor="middle" fill="#555" fontSize="10">Word Structure</text>

              <rect x="375" y="175" width="120" height="55" fill="#2ecc71" rx="8" />
              <text x="435" y="198" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Syntax</text>
              <text x="435" y="215" textAnchor="middle" fill="#dfd" fontSize="10">Sentence Structure</text>

              <rect x="490" y="175" width="120" height="55" fill="#3498db" rx="8" />
              <text x="550" y="198" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Semantics</text>
              <text x="550" y="215" textAnchor="middle" fill="#ddf" fontSize="10">Meaning</text>

              <rect x="605" y="175" width="120" height="55" fill="#9b59b6" rx="8" />
              <text x="665" y="198" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Pragmatics</text>
              <text x="665" y="215" textAnchor="middle" fill="#edf" fontSize="10">Meaning in Context</text>

              <rect x="720" y="175" width="130" height="55" fill="#1abc9c" rx="8" />
              <text x="785" y="198" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Sociolinguistics</text>
              <text x="785" y="215" textAnchor="middle" fill="#dff" fontSize="10">Language & Society</text>

              <rect x="820" y="285" width="75" height="55" fill="#e91e63" rx="8" />
              <text x="857" y="308" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Psycho-</text>
              <text x="857" y="320" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">linguistics</text>
              <text x="857" y="332" textAnchor="middle" fill="#fdd" fontSize="9">Mind & Lang.</text>
              <line x1="860" y1="230" x2="857" y2="285" stroke="#2c3e50" strokeWidth="2" />

              <text x="450" y="440" textAnchor="middle" fill="#7f8c8d" fontSize="13" fontStyle="italic">Each branch studies a different level or dimension of human language</text>
            </svg>
            <p className="diagram-caption">Figure 1: The major sub-fields of linguistics, each focusing on a distinct aspect of language structure or use</p>
          </div>

          {/* Sub-field Detailed Cards */}
          <div className="subfield-card phonetics">
            <h4>🔴 1. Phonetics — The Study of Speech Sounds</h4>
            <p><strong>Phonetics</strong> is the scientific study of the physical sounds of human speech. Phoneticians analyze how sounds are produced by the vocal tract (<span className="term">articulatory phonetics</span>), how they travel through the air as sound waves (<span className="term">acoustic phonetics</span>), and how they are perceived by the listener's ear and brain (<span className="term">auditory phonetics</span>).</p>
            <p>Phonetics deals with actual, concrete sounds — called <span className="term">phones</span> — irrespective of meaning. The International Phonetic Alphabet (IPA) provides a universal symbol system for transcribing any sound in any language. For example, the English word "ship" is transcribed as /ʃɪp/ in IPA. Phonetics is crucial for language learning, speech therapy, voice acting, and accent training.</p>
            <p><strong>Examples:</strong> The /p/ sound in "pin" is produced by pressing both lips together and releasing a puff of air (bilabial plosive). The /f/ sound in "fan" is made by placing the upper teeth on the lower lip (labiodental fricative). Even slight changes in tongue position create entirely different sounds.</p>
            <div className="diagram-container">
              <h5>IPA Chart (International Phonetic Alphabet)</h5>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/IPA_chart_2020.svg/800px-IPA_chart_2020.svg.png" alt="IPA Chart" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            </div>
          </div>

          <div className="subfield-card phonology">
            <h4>🟠 2. Phonology — The Study of Sound Patterns</h4>
            <p><span className="term">Phonology</span> studies how sounds function and are organized within a specific language system. While phonetics asks "what sounds can humans produce?", phonology asks "which sounds matter in this language, and what rules govern them?" The key unit of phonology is the <span className="term">phoneme</span> — an abstract, meaning-distinguishing sound unit.</p>
            <p>Phonologists study <span className="term">minimal pairs</span> — pairs of words that differ by only one sound and have different meanings. For example, in English, "cat" /kæt/ and "bat" /bæt/ are a minimal pair — the only difference is /k/ vs. /b/, showing these are separate phonemes. Phonology also studies syllable structure, stress patterns, tone, and intonation.</p>
            <p><strong>Example:</strong> In English, the sounds [p] and [pʰ] (aspirated p) are allophones of the same phoneme /p/ — "spin" has unaspirated [p], while "pin" has aspirated [pʰ]. English speakers don't notice the difference. But in Thai and Hindi, this difference is phonemic — it changes meaning!</p>
          </div>

          <div className="subfield-card morphology">
            <h4>🟡 3. Morphology — The Study of Word Structure</h4>
            <p><span className="term">Morphology</span> is the study of the internal structure of words and how words are formed. The fundamental unit of morphology is the <span className="term">morpheme</span> — the smallest unit of meaning or grammatical function. Morphemes can be free (stand-alone words like "cat", "run") or bound (must attach to another morpheme, like "-ing", "un-", "-ness").</p>
            <p>Morphology explains how complex words are built from simpler parts: prefixes, roots, and suffixes. It also studies inflection (grammatical changes like "walk → walked → walking") and derivation (creating new words: "happy → unhappy → unhappiness"). Understanding morphology helps with vocabulary building, language learning, spelling, and lexicography.</p>
            <p><strong>Example breakdown of "unbreakable":</strong></p>
            <div style={{ textAlign: 'center', margin: '15px 0' }}>
              <div className="morpheme-box">
                <div className="morpheme morpheme-prefix">un-<span className="morpheme-label">Prefix<br />"not"</span></div>
                <div className="morpheme morpheme-root">break<span className="morpheme-label">Root<br />"to break"</span></div>
                <div className="morpheme morpheme-suffix">-able<span className="morpheme-label">Suffix<br />"capable of"</span></div>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>un + break + able = "not capable of being broken" — 3 morphemes, 1 word</p>
            </div>
          </div>

          <div className="subfield-card syntax">
            <h4>🟢 4. Syntax — The Study of Sentence Structure</h4>
            <p><span className="term">Syntax</span> is the study of how words are combined to form phrases, clauses, and sentences. Every language has rules — called <span className="term">phrase structure rules</span> or <span className="term">grammar</span> — that determine which word orders are grammatical. Syntax explains why "The cat chased the mouse" is grammatical in English but "Cat the mouse the chased" is not.</p>
            <p>Syntacticians use <span className="term">parse trees</span> (or syntax trees) to visually represent the hierarchical structure of sentences. Every sentence can be broken into a Noun Phrase (NP) and a Verb Phrase (VP). Chomsky's <em>Transformational Grammar</em> proposed that sentences have a <strong>deep structure</strong> (underlying meaning) and a <strong>surface structure</strong> (what we actually say), connected by transformations.</p>
            <p><strong>Example:</strong> "Colorless green ideas sleep furiously" (Chomsky, 1957) is syntactically grammatical (NP + V + adverb) but semantically meaningless — proving that syntax and semantics are separate systems.</p>
          </div>

          <div className="subfield-card semantics">
            <h4>🔵 5. Semantics — The Study of Meaning</h4>
            <p><span className="term">Semantics</span> is the branch of linguistics concerned with meaning — the meaning of words, phrases, sentences, and larger units of language. Semanticists study <span className="term">denotation</span> (literal, dictionary meaning) and <span className="term">connotation</span> (emotional or cultural associations). They also analyze relationships between words: synonyms (big/large), antonyms (hot/cold), hyponyms (rose is a hyponym of flower), and homonyms (bank: financial institution vs. riverbank).</p>
            <p>Semantics distinguishes between <span className="term">lexical semantics</span> (word meanings) and <span className="term">compositional semantics</span> (how meanings combine in phrases and sentences). The principle of compositionality states that the meaning of a complex expression is determined by the meanings of its parts and the rules for combining them.</p>
            <p><strong>Example:</strong> "The dog bit the man" and "The man bit the dog" contain exactly the same words, but have completely different meanings because of the syntactic arrangement — showing how syntax and semantics interact.</p>
          </div>

          <div className="subfield-card pragmatics">
            <h4>🟣 6. Pragmatics — Meaning in Context</h4>
            <p><span className="term">Pragmatics</span> studies how context shapes the interpretation of language — how we mean more than we literally say. While semantics asks "what does this sentence literally mean?", pragmatics asks "what does the speaker mean by saying this, in this situation?" The same sentence can mean very different things depending on context, tone, and social relationship.</p>
            <p>Key concepts in pragmatics include <span className="term">speech acts</span> (J.L. Austin's theory that utterances perform actions: promises, warnings, requests), <span className="term">Gricean maxims</span> (Paul Grice's cooperative principle: be truthful, relevant, clear, and informative), and <span className="term">implicature</span> (what is implied but not stated).</p>
            <p><strong>Example:</strong> If someone asks "Can you pass the salt?" they are not asking about your ability to pass salt (semantics) — they are making a polite request (pragmatics). If a student says "I have an exam tomorrow" to explain why they can't attend a party, that is an implicature — the statement implies a refusal without explicitly refusing.</p>
          </div>

          <div className="subfield-card sociolinguistics">
            <h4>🩵 7. Sociolinguistics — Language and Society</h4>
            <p><span className="term">Sociolinguistics</span> investigates the relationship between language and society — how social factors like age, gender, ethnicity, class, geography, and culture influence language variation and change. No two people speak exactly alike; sociolinguists study these variations systematically.</p>
            <p>Key concepts include <span className="term">dialects</span> (regional or social varieties of a language), <span className="term">code-switching</span> (switching between languages or dialects depending on context), <span className="term">diglossia</span> (using two varieties of a language for different social functions), and <span className="term">language change</span> (how and why languages evolve over time). William Labov's study of New York City speech (1966) is a landmark sociolinguistic work.</p>
            <p><strong>Example:</strong> A bilingual Indian professional might switch between Hindi and English within a single conversation at work (code-switching). A British speaker from Yorkshire uses different vowel sounds than a speaker from London — this is dialect variation. Both are studied by sociolinguists.</p>
          </div>

          <div className="subfield-card psycholinguistics">
            <h4>🩷 8. Psycholinguistics — Language and the Mind</h4>
            <p><span className="term">Psycholinguistics</span> explores the psychological and neurobiological factors that enable humans to acquire, produce, understand, and remember language. It bridges linguistics and cognitive psychology. Psycholinguists study how children acquire their mother tongue (first language acquisition), how adults learn second languages, how the brain processes sentences in real time, and what happens when language breaks down due to brain injury.</p>
            <p>Key findings include: children acquire language remarkably rapidly and uniformly (supporting Chomsky's nativist hypothesis); <span className="term">Broca's area</span> (left frontal lobe) is critical for speech production; <span className="term">Wernicke's area</span> (left temporal lobe) is critical for language comprehension. Damage to these areas causes different types of aphasia.</p>
            <p><strong>Example:</strong> A child who has never been taught a grammar rule will still correctly use it. Children around the world go through the same stages of language development (babbling → one-word stage → two-word stage → full sentences) regardless of which language they are learning — evidence for a universal language acquisition mechanism.</p>
          </div>
        </div>

        {/* SECTION 4: VIDEOS */}
        <div className="section" id="videos">
          <h2 className="section-title"><span>🎥</span> Learn Through Videos</h2>
          <p>Watch these carefully curated videos to reinforce your understanding with expert explanations and visual demonstrations.</p>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-container"><iframe src="https://www.youtube.com/embed/3yLXNzDUH58" allowFullScreen title="What is Linguistics?"></iframe></div>
              <div className="video-info">
                <div className="video-title">📚 What is Linguistics? — Introduction</div>
                <div className="video-description">A clear introduction to linguistics as a scientific discipline, covering core concepts and why it matters.</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-container"><iframe src="https://www.youtube.com/embed/xVnMFCHfFiY" allowFullScreen title="Branches of Linguistics"></iframe></div>
              <div className="video-info">
                <div className="video-title">🔬 Branches of Linguistics Explained</div>
                <div className="video-description">Covers all major sub-fields of linguistics with clear definitions and real-world examples for each branch.</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-container"><iframe src="https://www.youtube.com/embed/DWCOCpCKKyE" allowFullScreen title="Linguistics Sub-fields Overview"></iframe></div>
              <div className="video-info">
                <div className="video-title">🌐 Overview of Linguistics Sub-fields</div>
                <div className="video-description">An animated overview covering phonetics, phonology, morphology, syntax, semantics, and pragmatics with visual aids.</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: MERMAID DIAGRAMS (REPLICATED AS SVG) */}
        <div className="section">
          <h2 className="section-title"><span>📊</span> Visual Concept Maps</h2>
          <div className="diagram-container">
            <h4>How to Analyze Language at Multiple Levels</h4>
            <div style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px' }}>
              {/* Simplified representation of Mermaid flowchart */}
              <p style={{ color: '#667eea', fontWeight: 'bold' }}>🗣️ A Language Sample</p>
              <p>↓</p>
              <p style={{ color: '#e74c3c' }}>Phonological Analysis</p>
              <p>↓</p>
              <p style={{ color: '#f39c12' }}>Morphological Analysis</p>
              <p>↓</p>
              <p style={{ color: '#2ecc71' }}>Syntactic Analysis</p>
              <p>↓</p>
              <p style={{ color: '#3498db' }}>Semantic Analysis</p>
              <p>↓</p>
              <p style={{ color: '#9b59b6' }}>Pragmatic Analysis</p>
              <p>↓</p>
              <p style={{ color: '#1abc9c' }}>Sociolinguistic Analysis</p>
              <p>↓</p>
              <p style={{ color: '#28a745', fontWeight: 'bold' }}>✅ Complete Linguistic Profile</p>
            </div>
          </div>

          <div className="diagram-container">
            <h4>Syntax Tree: "The cat sat on the mat"</h4>
            <svg width="700" height="320" viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="320" fill="#f8f9fa" rx="10" />
              <ellipse cx="350" cy="35" rx="30" ry="20" fill="#2c3e50" />
              <text x="350" y="40" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S</text>
              <line x1="325" y1="50" x2="175" y2="100" stroke="#2c3e50" strokeWidth="2" />
              <line x1="375" y1="50" x2="525" y2="100" stroke="#2c3e50" strokeWidth="2" />
              <ellipse cx="175" cy="115" rx="30" ry="20" fill="#e74c3c" />
              <text x="175" y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">NP</text>
              <ellipse cx="525" cy="115" rx="30" ry="20" fill="#3498db" />
              <text x="525" y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">VP</text>
              <line x1="152" y1="130" x2="105" y2="175" stroke="#e74c3c" strokeWidth="2" />
              <line x1="198" y1="130" x2="245" y2="175" stroke="#e74c3c" strokeWidth="2" />
              <ellipse cx="105" cy="190" rx="30" ry="20" fill="#e67e22" />
              <text x="105" y="195" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">DET</text>
              <ellipse cx="245" cy="190" rx="25" ry="20" fill="#e67e22" />
              <text x="245" y="195" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">N</text>
              <line x1="502" y1="130" x2="440" y2="175" stroke="#3498db" strokeWidth="2" />
              <line x1="548" y1="130" x2="610" y2="175" stroke="#3498db" strokeWidth="2" />
              <ellipse cx="440" cy="190" rx="25" ry="20" fill="#2ecc71" />
              <text x="440" y="195" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">V</text>
              <ellipse cx="610" cy="190" rx="30" ry="20" fill="#9b59b6" />
              <text x="610" y="195" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">PP</text>
            </svg>
            <p className="diagram-caption">Figure 3: Syntax tree (parse tree) for "The cat sat on the mat" showing hierarchical sentence structure</p>
          </div>
        </div>

        {/* SECTION 6: PRACTICE MCQs */}
        <div className="section" id="practice">
          <h2 className="section-title"><span>⚙️</span> Practice Questions (Set 1)</h2>
          <p>Test your knowledge on the basics and sub-fields before moving to the final mastery quiz.</p>
          <Quiz
            title="Practice Set: Basics & Sub-fields"
            subject="LS"
            unitId={1}
            moduleId={1}
            questions={[
              {
                question: "What is the primary difference between a linguist and a prescriptive grammarian?",
                options: [
                  "Linguists only study ancient languages, while grammarians study modern ones",
                  "Linguists describe how language is actually used; grammarians prescribe how it should be used",
                  "Grammarians are scientists; linguists are teachers",
                  "There is no difference"
                ],
                correctAnswer: 1,
                explanation: "Linguistics is a descriptive science. Its goal is to observe and explain language as it naturally occurs, without making value judgments about 'correctness' based on social conventions."
              },
              {
                question: "Which sub-field would analyze the physical puff of air produced when saying the word 'top'?",
                options: ["Syntax", "Semantics", "Phonetics", "Morphology"],
                correctAnswer: 2,
                explanation: "Phonetics deals with the physical, measurable properties of speech sounds, including their articulation and acoustics."
              },
              {
                question: "What is the smallest unit of meaning in a language?",
                options: ["Phoneme", "Morpheme", "Word", "Sentence"],
                correctAnswer: 1,
                explanation: "A morpheme is the smallest unit that carries meaning or grammatical function. For example, 'cats' has two morphemes: 'cat' (animal) and '-s' (plural)."
              },
              {
                question: "If you are studying the rules for combining words into phrases, you are studying:",
                options: ["Phonology", "Pragmatics", "Syntax", "Semantics"],
                correctAnswer: 2,
                explanation: "Syntax is the study of the rules governing sentence structure and word order."
              },
              {
                question: "Which sub-field explains why 'Could you open the window?' is a request rather than a question about ability?",
                options: ["Semantics", "Syntax", "Sociolinguistics", "Pragmatics"],
                correctAnswer: 3,
                explanation: "Pragmatics studies meaning in context and how speaker intent influences interpretation beyond literal words."
              }
            ]}
          />
        </div>

        {/* SECTION 7: WORKED EXAMPLES */}
        <div className="section" id="examples">
          <h2 className="section-title"><span>⚙️</span> Worked Academic Examples</h2>

          <div className="example-box">
            <h4>Example 1: Morphological Analysis</h4>
            <p><strong>Task:</strong> Analyze the morphemes in the word <strong>"reconstruction"</strong>.</p>
            <div className="example-steps">
              <div className="step"><strong>Step 1 (Identify Root):</strong> The core meaning is "construct" (to build). This is a free morpheme.</div>
              <div className="step"><strong>Step 2 (Identify Prefix):</strong> "re-" (meaning "again"). This is a bound morpheme.</div>
              <div className="step"><strong>Step 3 (Identify Suffix):</strong> "-ion" (turns a verb into a noun). This is a bound morpheme.</div>
              <div className="step"><strong>Result:</strong> re- + construct + -ion = 3 morphemes. Classification: Derivational Morphology.</div>
            </div>
          </div>

          <div className="example-box">
            <h4>Example 2: Semantic vs. Pragmatic Analysis</h4>
            <p><strong>Scenario:</strong> A mother says to her child who is playing loud music: "I'm trying to sleep."</p>
            <div className="example-steps">
              <div className="step"><strong>Semantic Meaning (Literal):</strong> The speaker is currently in the process of attempting to enter a state of slumber.</div>
              <div className="step"><strong>Pragmatic Meaning (Contextual):</strong> This is an <em>indirect speech act</em>. The speaker is requesting that the child turn down the music or stop the noise.</div>
              <div className="step"><strong>Key Insight:</strong> Pragmatics requires context (knowing about the loud music and the relationship) to understand the true intent.</div>
            </div>
          </div>
        </div>

        {/* SECTION 8: LAB EXERCISE */}
        <div className="section" id="lab">
          <div className="lab-exercise">
            <h3>🛠️ Lab: The Linguistic Detective</h3>
            <div className="lab-objective">
              <strong>Objective:</strong> Perform a multi-level linguistic analysis on a real-world sentence.
            </div>
            <p><strong>The Sentence:</strong> "The chef quickly cooked a delicious meal."</p>
            <div className="lab-steps">
              <h4>Your Instructions:</h4>
              <ol>
                <li><strong>Phonology:</strong> Identify a pair of words that form a <em>minimal pair</em> in English (e.g., meal/seal).</li>
                <li><strong>Morphology:</strong> Find a word with a derivational suffix and one with an inflectional suffix. ("quickly" and "cooked").</li>
                <li><strong>Syntax:</strong> Identify the <strong>Noun Phrase (NP)</strong> that serves as the subject.</li>
                <li><strong>Semantics:</strong> Find a pair of <em>synonyms</em> for the word "delicious".</li>
                <li><strong>Pragmatics:</strong> Imagine this sentence is said in a restaurant. What might be the <em>implicature</em> if a customer says this to the manager?</li>
              </ol>
            </div>
          </div>
        </div>

        {/* SECTION 9: COMPARISON TABLE */}
        <div className="section" id="comparison">
          <h2 className="section-title"><span>📊</span> Side-by-Side Comparison</h2>
          <p>Use this table as a quick guide to distinguish between often-confused sub-fields.</p>
          <table>
            <thead>
              <tr>
                <th>Sub-field</th>
                <th>Key Unit</th>
                <th>Primary Focus</th>
                <th>Key Question</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Phonetics</strong></td>
                <td>Phone [p]</td>
                <td>Physical sounds</td>
                <td>How is this sound physically made?</td>
              </tr>
              <tr>
                <td><strong>Phonology</strong></td>
                <td>Phoneme /p/</td>
                <td>Sound systems</td>
                <td>Does this sound difference change meaning?</td>
              </tr>
              <tr>
                <td><strong>Morphology</strong></td>
                <td>Morpheme</td>
                <td>Word structure</td>
                <td>What are the meaning-units in this word?</td>
              </tr>
              <tr>
                <td><strong>Syntax</strong></td>
                <td>Phrase/Clause</td>
                <td>Sentence structure</td>
                <td>Are these words in the correct order?</td>
              </tr>
              <tr>
                <td><strong>Semantics</strong></td>
                <td>Lexeme/Sememe</td>
                <td>Literal meaning</td>
                <td>What is the dictionary definition?</td>
              </tr>
              <tr>
                <td><strong>Pragmatics</strong></td>
                <td>Utterance</td>
                <td>Meaning in context</td>
                <td>What does the speaker actually want?</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SECTION 10: MASTERY QUIZ */}
        <div className="section" id="quiz">
          <h2 className="section-title"><span>🎓</span> Final Mastery Quiz</h2>
          <p>Demonstrate your mastery of the module content. Aim for a score of 70% or higher to pass.</p>
          <Quiz
            title="Module 1.1 Mastery Quiz"
            subject="LS"
            unitId={1}
            moduleId={1}
            questions={[
              {
                question: "Minimal pairs (e.g., 'pit' and 'bit') are primarily used in phonology to identify:",
                options: [
                  "Words that have the same origin",
                  "Phonemes (meaning-distinguishing sounds)",
                  "Syllable structures",
                  "Synonyms in a language"
                ],
                correctAnswer: 1,
                explanation: "Minimal pairs prove that two sounds are distinct phonemes. If changing one sound changes the meaning, those sounds are separate phonemes."
              },
              {
                question: "Code-switching — the practice of switching between languages or dialects — is primarily studied by:",
                options: ["Psycholinguistics", "Phonetics", "Sociolinguistics", "Morphology"],
                correctAnswer: 2,
                explanation: "Code-switching is a social behavior influenced by context, audience, and identity, making it a key topic in sociolinguistics."
              },
              {
                question: "The sentence 'Colorless green ideas sleep furiously' is famous in linguistics because it is:",
                options: [
                  "Both grammatically and semantically perfect",
                  "Syntactically grammatical but semantically meaningless",
                  "Syntactically incorrect but semantically clear",
                  "An example of ancient Sanskrit grammar"
                ],
                correctAnswer: 1,
                explanation: "Chomsky used this example to show that our knowledge of sentence structure (syntax) is independent of our knowledge of meaning (semantics)."
              },
              {
                question: "True or False: Linguistics only studies written language.",
                options: ["True", "False"],
                correctAnswer: 1,
                explanation: "False. Linguistics studies all forms: spoken, written, and signed. Spoken and signed languages are considered primary."
              },
              {
                question: "True or False: The relationship between the word 'dog' and the animal it represents is natural and inherent.",
                options: ["True", "False"],
                correctAnswer: 1,
                explanation: "False. This is the principle of arbitrariness. Different languages use entirely different sounds for the same concept (e.g., dog, perro, chien, kutta)."
              }
            ]}
          />
        </div>

        {/* SECTION 11: PITFALLS */}
        <div className="section" id="pitfalls">
          <h2 className="section-title"><span>⚠️</span> Common Pitfalls & How to Avoid Them</h2>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall 1: Confusing Linguistics with Prescriptive Grammar</strong>
            <p>Linguistics is descriptive (how people talk) not prescriptive (giving grades). A linguist analyzes "I ain't got none" as a systematic rule-governed structure, not as an "error".</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall 2: Mixing Up Phonetics and Phonology</strong>
            <p>Phonetics is physical/universal (hardware); Phonology is mental/language-specific (software). Phonetics focuses on the sound itself, Phonology on its role in a system.</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall 3: Forgetting that Morphemes ≠ Syllables</strong>
            <p>"Walked" has 1 syllable but 2 morphemes (walk + -ed). Count meaning units, not beats.</p>
          </div>
        </div>

        {/* SECTION 12: QUICK REFERENCE */}
        <div className="section" id="quickref">
          <div className="quick-ref">
            <h2 style={{ color: '#e65100', marginBottom: '20px' }}>📄 Quick Reference Cheat Sheet</h2>
            <div className="quick-ref-grid">
              <div className="quick-ref-card">
                <h4>🔑 Key Concepts</h4>
                <ul>
                  <li>Scientific & Descriptive</li>
                  <li>Arbitrariness of Sign</li>
                  <li>Universal Grammar</li>
                </ul>
              </div>
              <div className="quick-ref-card">
                <h4>🔬 Core Sub-fields</h4>
                <ul>
                  <li><strong>Phon-</strong>: Sounds & Patterns</li>
                  <li><strong>Morph-</strong>: Word Structure</li>
                  <li><strong>Syntax</strong>: Sentence Structure</li>
                </ul>
              </div>
              <div className="quick-ref-card">
                <h4>🗣️ Meaning fields</h4>
                <ul>
                  <li><strong>Semantics</strong>: Literal meaning</li>
                  <li><strong>Pragmatics</strong>: Contextual meaning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 13: EXAM PRACTICE */}
        <div className="section" id="exam">
          <h2 className="section-title"><span>📝</span> University Exam Practice</h2>
          <div className="example-box">
            <h4>Short Answer: Define Linguistics (5 Marks)</h4>
            <button className="collapsible" onClick={() => handleToggleCollapsible('exam1')}>
              {openCollapsibles['exam1'] ? 'Hide Answer' : 'Show Model Answer'}
            </button>
            <div className="collapsible-content" style={{ maxHeight: openCollapsibles['exam1'] ? '500px' : '0' }}>
              <div className="collapsible-content-inner">
                <p>Linguistics is the scientific study of language. It is scientific because it uses empirical methods to observe, analyze, and form hypotheses about language structure and use. It is <strong>descriptive</strong>, meaning it analyzes how people actually speak without judging correctness based on social rules.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <h3>🎓 Congratulations on Completing Module 1.1!</h3>
          <p>Principles and Practices of Human Communication | UNIT-1</p>
          <div className="footer-links">
            <a href="#objectives" className="footer-link">Back to Top</a>
            <a href="#quiz" className="footer-link">Retake Quiz</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module1_1;
