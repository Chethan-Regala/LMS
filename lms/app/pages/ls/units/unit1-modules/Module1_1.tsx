'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Module1_1.css';
import mermaid from 'mermaid';
import Quiz from '../../components/Quiz';

const module1Quiz = [
  {
    question: "What is the primary goal of linguistics as a scientific discipline?",
    options: [
      "To prescribe correct grammar rules for formal writing and speech",
      "To scientifically describe and explain how language is structured and used",
      "To rank languages from most to least complex",
      "To preserve endangered languages only"
    ],
    correctAnswer: 1,
    explanation: "Linguistics is a descriptive science — it observes, analyzes, and explains how language actually works, without judging it."
  },
  {
    question: "Which sub-field of linguistics studies the sound patterns and phoneme system of a language?",
    options: ["Morphology", "Semantics", "Phonology", "Pragmatics"],
    correctAnswer: 2,
    explanation: "Phonology studies how sounds are organized and patterned within a language system (abstract/mental)."
  },
  {
    question: "The word 'unbreakable' contains how many morphemes?",
    options: [
      "1 morpheme (it is a single word)",
      "2 morphemes (un + breakable)",
      "3 morphemes (un + break + able)",
      "4 morphemes (u + n + break + able)"
    ],
    correctAnswer: 2,
    explanation: "un- (prefix) + break (root) + -able (suffix) = 3 morphemes."
  },
  {
    question: "Which linguist proposed the concept of Universal Grammar and the Language Acquisition Device (LAD)?",
    options: [
      "Ferdinand de Saussure",
      "Edward Sapir",
      "Noam Chomsky",
      "Benjamin Lee Whorf"
    ],
    correctAnswer: 2,
    explanation: "Noam Chomsky proposed the LAD and Universal Grammar."
  },
  {
    question: "When someone says 'Can you open the window?' they are making a request, not literally asking about your ability. Which sub-field studies this?",
    options: ["Semantics", "Syntax", "Phonetics", "Pragmatics"],
    correctAnswer: 3,
    explanation: "Pragmatics studies meaning in context and speaker intent."
  },
  {
    question: "Minimal pairs in phonology are defined as:",
    options: [
      "Two words that sound completely different from each other",
      "Two words that differ by exactly one phoneme and have different meanings",
      "Two words with the same spelling but different pronunciations",
      "Words that are synonyms in a language"
    ],
    correctAnswer: 1,
    explanation: "Minimal pairs prove that two sounds are distinct phonemes (e.g., 'pit' vs 'bit')."
  },
  {
    question: "Code-switching — switching between languages in conversation — is primarily studied under which sub-field?",
    options: ["Psycholinguistics", "Phonetics", "Sociolinguistics", "Morphology"],
    correctAnswer: 2,
    explanation: "Code-switching relates language to social factors, making it sociolinguistics."
  },
  {
    question: "Which of the following sentences is syntactically grammatical but semantically meaningless?",
    options: [
      "\"The happy child laughed.\"",
      "\"Colorless green ideas sleep furiously.\"",
      "\"Cat the quickly ran.\"",
      "\"Dog bark big.\""
    ],
    correctAnswer: 1,
    explanation: "Chomsky's 'Colorless green ideas sleep furiously' is syntactically perfect but semantically nonsensical."
  },
  {
    question: "True or False — Linguistics is only concerned with written language and does not study spoken or signed languages.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Linguistics covers spoken, written, and signed languages."
  },
  {
    question: "True or False — In linguistics, the relationship between a word and its meaning is natural and inherent.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. This is the 'arbitrariness' of the sign; there is no natural connection."
  }
];

interface Module1_1Props {
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Module1_1: React.FC<Module1_1Props> = ({ setCurrentModule, onBack }) => {
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Segoe UI, sans-serif',
      look: 'classic',
    });

    const renderMermaid = async () => {
      if (!mermaidRef.current) return;
      try {
        const id = `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`;
        const content = `
graph TD
    A["🗣️ A Language Sample<br/>(word, sentence, or text)"] --> B["Phonological Analysis<br/>What sounds are present? What patterns?"]
    B --> C["Morphological Analysis<br/>What morphemes? What word structure?"]
    C --> D["Syntactic Analysis<br/>What is the sentence structure? Parse tree?"]
    D --> E["Semantic Analysis<br/>What is the literal meaning?"]
    E --> F["Pragmatic Analysis<br/>What does the speaker mean in this context?"]
    F --> G["Sociolinguistic Analysis<br/>What does this reveal about the speaker's social identity?"]
    G --> H["✅ Complete Linguistic Profile"]

    style A fill:#667eea,color:#fff
    style H fill:#28a745,color:#fff
    style B fill:#e74c3c,color:#fff
    style C fill:#f39c12,color:#fff
    style D fill:#2ecc71,color:#fff
    style E fill:#3498db,color:#fff
    style F fill:#9b59b6,color:#fff
    style G fill:#1abc9c,color:#fff
        `.trim();

        const { svg } = await mermaid.render(id, content);
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid rendering failed:', error);
      }
    };

    renderMermaid();
  }, []);

  const toggleCollapsible = (id: string) => {
    setOpenCollapsible(openCollapsible === id ? null : id);
  };

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.1</div>
        <div className="lesson-title-main">
          <h1>Overview of Linguistics and its Sub-fields</h1>
        </div>
      </div>
      <section className="content-section">
        {/* SECTION 1: LEARNING OBJECTIVES */}
        <div className="section" id="objectives">
          <h2 className="section-title">
            <span>🎯</span> What You'll Master
          </h2>
          <div className="objectives-box">
            <h3>Learning Objectives</h3>
            <ul className="objectives-list">
              <li>
                Define linguistics as a scientific discipline and distinguish it
                from prescriptive grammar using at least three concrete examples
                from everyday language use.
              </li>
              <li>
                Identify, name, and explain all eight major sub-fields of
                linguistics — phonetics, phonology, morphology, syntax, semantics,
                pragmatics, sociolinguistics, and psycholinguistics — with a clear
                definition and example for each.
              </li>
              <li>
                Apply linguistic analysis to a given sentence by examining it at
                phonological, morphological, syntactic, and semantic levels
                simultaneously.
              </li>
              <li>
                Compare and contrast at least three pairs of closely related
                sub-fields (e.g., phonetics vs. phonology; semantics vs. pragmatics;
                sociolinguistics vs. psycholinguistics) using appropriate technical
                terminology.
              </li>
              <li>
                Recognize and explain at least four real-world applications of
                linguistics across domains such as language teaching, NLP, forensic
                linguistics, and clinical communication.
              </li>
            </ul>
          </div>
          <h3 className="subsection-title">🔥 Why This Topic Matters</h3>
          <p>
            Imagine waking up one morning and losing the ability to understand any
            language — not just reading or writing, but even recognizing speech.
            This is the reality for patients with certain brain injuries, and it is
            linguists who help us understand why it happens and how to treat it.
            Language is the most fundamental tool of human communication, yet most
            of us take it completely for granted. Linguistics is the scientific
            discipline that pulls back the curtain on this everyday miracle.
          </p>
          <p>
            Understanding linguistics is essential for anyone studying
            communication, education, psychology, artificial intelligence, or law.
            When you know how languages are structured — how sounds combine into
            words, words into sentences, and sentences into meaning — you become a
            sharper thinker, a better communicator, and a more empathetic listener.
            Voice assistants like Siri and Alexa are built on linguistic principles.
            Courtrooms use forensic linguists to analyze threatening letters.
            Teachers use linguistic insights to help struggling readers.
          </p>
          <div className="alert alert-success">
            <strong>💡 Real-World Applications:</strong>
            <ul style={{ marginTop: 10, marginLeft: 20 }}>
              <li>
                🤖 <strong>NLP &amp; AI:</strong> ChatGPT, Google Translate, and
                Alexa are built on computational linguistics principles
              </li>
              <li>
                ⚖️ <strong>Forensic Linguistics:</strong> Used in courts to analyze
                ransom notes, threatening messages, and authorship disputes
              </li>
              <li>
                👶 <strong>Language Acquisition:</strong> Helps educators support
                children with dyslexia, autism, and speech delays
              </li>
              <li>
                🌍 <strong>Translation:</strong> Professional translators rely on
                semantic and pragmatic knowledge to avoid mistranslations
              </li>
              <li>
                🏥 <strong>Clinical Linguistics:</strong> Speech-language therapists
                use phonetics and morphology to treat communication disorders
              </li>
            </ul>
          </div>
        </div>
        {/* SECTION 2: THEORY */}
        <div className="section" id="theory">
          <h2 className="section-title">
            <span>📖</span> Deep Dive: What is Linguistics?
          </h2>
          <div style={{ overflow: "hidden" }}>
            <div className="image-float">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ferdinand_de_Saussure_by_Jullien.jpg/220px-Ferdinand_de_Saussure_by_Jullien.jpg"
                alt="Ferdinand de Saussure"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div className="caption">
                Ferdinand de Saussure (1857–1913), father of modern linguistics
              </div>
            </div>
            <h3 className="subsection-title">Definition &amp; Scope</h3>
            <p>
              <span className="term">Linguistics</span> is the{" "}
              <strong>scientific study of language</strong> — its structure, its
              use, its history, and its role in human cognition and society. Unlike
              your school English teacher who corrected your grammar ("Don't say
              'ain't'!"), a linguist does not judge language as right or wrong.
              Instead, a linguist <em>observes</em>, <em>describes</em>, and{" "}
              <em>explains</em> how language actually works in the real world.
            </p>
            <p>
              This distinction is crucial: linguistics is{" "}
              <span className="highlight">descriptive, not prescriptive</span>. It
              describes how people actually speak and write, rather than dictating
              how they should. When linguists study African-American Vernacular
              English (AAVE) or Indian English, they are not grading these varieties
              — they are recognizing them as fully systematic, rule-governed
              dialects worthy of scientific analysis.
            </p>
            <p>
              Linguistics investigates questions such as: How do babies acquire
              their first language without explicit instruction? Why do languages
              change over time? How does the human brain process a sentence? Can
              language shape the way we think? What do all human languages have in
              common? These questions span biology, psychology, sociology,
              philosophy, and computer science — making linguistics one of the most
              interdisciplinary fields in academia.
            </p>
          </div>
          <div className="alert alert-info">
            <strong>📌 Key Terminology:</strong>
            <ul style={{ marginTop: 10, marginLeft: 20 }}>
              <li>
                <span className="term">Descriptive linguistics:</span> Objectively
                analyzing and describing how language is actually used by its
                speakers
              </li>
              <li>
                <span className="term">Prescriptive linguistics:</span> Setting
                rules for how language "should" be used (grammar books, style
                guides)
              </li>
              <li>
                <span className="term">Langue vs. Parole:</span> Saussure's
                distinction between the language system (langue) and actual speech
                (parole)
              </li>
              <li>
                <span className="term">Competence vs. Performance:</span> Chomsky's
                distinction between knowing a language and actually using it
              </li>
              <li>
                <span className="term">Language universals:</span> Features found in
                all or most of the world's ~7,000 languages
              </li>
              <li>
                <span className="term">Arbitrariness of sign:</span> Saussure's
                principle that there is no natural connection between a word and its
                meaning
              </li>
            </ul>
          </div>
          <h3 className="subsection-title">A Brief History of Linguistics</h3>
          <p>
            The scientific study of language has roots stretching back over 2,500
            years. The Indian grammarian <strong>Panini</strong> (~400 BCE) wrote an
            extraordinarily precise analysis of Sanskrit grammar — one that
            anticipated many modern linguistic concepts. In the 19th century,
            European scholars discovered that many languages (Sanskrit, Latin,
            Greek, Persian, English) share a common ancestor —{" "}
            <strong>Proto-Indo-European</strong> — and developed methods for
            reconstructing ancient languages. This historical-comparative
            linguistics was the first truly scientific approach to language.
          </p>
          <p>
            The Swiss linguist <strong>Ferdinand de Saussure</strong> (1857–1913)
            revolutionized linguistics by shifting focus from history to structure.
            His posthumously published <em>Course in General Linguistics</em> (1916)
            introduced the concepts of the linguistic sign, langue vs. parole, and
            synchronic vs. diachronic analysis. Saussure is considered the "father
            of modern linguistics."
          </p>
          <div className="linguist-grid">
            <div className="linguist-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ferdinand_de_Saussure_by_Jullien.jpg/220px-Ferdinand_de_Saussure_by_Jullien.jpg"
                alt="Saussure"
                onError={(e) => e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="50" fill="%23667eea"/><text x="50" y="55" font-size="30" text-anchor="middle" fill="white">FS</text></svg>'}
              />
              <h5>Ferdinand de Saussure</h5>
              <p>
                Father of structural linguistics. Introduced the linguistic sign
                concept.
              </p>
            </div>
            <div className="linguist-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Noam_Chomsky_portrait_2015.jpg/220px-Noam_Chomsky_portrait_2015.jpg"
                alt="Chomsky"
                onError={(e) => e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="50" fill="%232ecc71"/><text x="50" y="55" font-size="30" text-anchor="middle" fill="white">NC</text></svg>'}
              />
              <h5>Noam Chomsky</h5>
              <p>
                Proposed Universal Grammar and the Language Acquisition Device
                (LAD).
              </p>
            </div>
            <div className="linguist-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/EdwardSapir.jpg/200px-EdwardSapir.jpg"
                alt="Sapir"
                onError={(e) => e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="50" fill="%23e74c3c"/><text x="50" y="55" font-size="30" text-anchor="middle" fill="white">ES</text></svg>'}
              />
              <h5>Edward Sapir</h5>
              <p>Developed the Sapir-Whorf hypothesis: language shapes thought.</p>
            </div>
            <div className="linguist-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Panini.jpg/200px-Panini.jpg"
                alt="Panini"
                onError={(e) => e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="50" fill="%23f39c12"/><text x="50" y="55" font-size="30" text-anchor="middle" fill="white">P</text></svg>'}
              />
              <h5>Panini (~400 BCE)</h5>
              <p>
                Ancient Indian grammarian. Wrote the world's first systematic
                grammar.
              </p>
            </div>
          </div>
          <p>
            In the 20th century, <strong>Noam Chomsky</strong> transformed
            linguistics again by arguing that all humans are born with an innate
            capacity for language — a <em>Language Acquisition Device</em> — and
            that all languages share a common underlying structure called{" "}
            <strong>Universal Grammar</strong>. This nativist view sparked decades
            of debate and research that continues today.
          </p>
        </div>
        {/* SECTION 3: SUB-FIELDS */}
        <div className="section" id="subfields">
          <h2 className="section-title">
            <span>🔬</span> The Eight Sub-fields of Linguistics
          </h2>
          <p>
            Linguistics is not a single, monolithic field. It branches into several
            specialized sub-disciplines, each focusing on a different level or
            aspect of language. Think of linguistics as a tree: the trunk is
            language itself, and each major branch is a sub-field that studies one
            dimension of that language.
          </p>
          {/* SVG Linguistics Tree Diagram */}
          <div className="diagram-container" id="diagrams">
            <h4>🌳 The Linguistics Family Tree</h4>
            <svg
              width={900}
              height={500}
              viewBox="0 0 900 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width={900} height={500} fill="#f8f9fa" rx={10} />
              {/* Trunk: Central node */}
              <ellipse cx={450} cy={60} rx={100} ry={35} fill="#2c3e50" />
              <text
                x={450}
                y={55}
                textAnchor="middle"
                fill="white"
                fontSize={16}
                fontWeight="bold"
              >
                LINGUISTICS
              </text>
              <text x={450} y={72} textAnchor="middle" fill="#ecf0f1" fontSize={11}>
                Scientific Study of Language
              </text>
              {/* Lines to sub-fields */}
              <line
                x1={450}
                y1={95}
                x2={90}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={200}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={315}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={430}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={545}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={660}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={775}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={450}
                y1={95}
                x2={860}
                y2={180}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              {/* Phonetics */}
              <rect x={30} y={175} width={120} height={55} fill="#e74c3c" rx={8} />
              <text
                x={90}
                y={198}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                Phonetics
              </text>
              <text x={90} y={215} textAnchor="middle" fill="#ffd" fontSize={10}>
                Speech Sounds
              </text>
              {/* Phonology */}
              <rect x={145} y={175} width={120} height={55} fill="#e67e22" rx={8} />
              <text
                x={205}
                y={198}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                Phonology
              </text>
              <text x={205} y={215} textAnchor="middle" fill="#ffd" fontSize={10}>
                Sound Patterns
              </text>
              {/* Morphology */}
              <rect x={260} y={175} width={120} height={55} fill="#f1c40f" rx={8} />
              <text
                x={320}
                y={198}
                textAnchor="middle"
                fill="#333"
                fontSize={13}
                fontWeight="bold"
              >
                Morphology
              </text>
              <text x={320} y={215} textAnchor="middle" fill="#555" fontSize={10}>
                Word Structure
              </text>
              {/* Syntax */}
              <rect x={375} y={175} width={120} height={55} fill="#2ecc71" rx={8} />
              <text
                x={435}
                y={198}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                Syntax
              </text>
              <text x={435} y={215} textAnchor="middle" fill="#dfd" fontSize={10}>
                Sentence Structure
              </text>
              {/* Semantics */}
              <rect x={490} y={175} width={120} height={55} fill="#3498db" rx={8} />
              <text
                x={550}
                y={198}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                Semantics
              </text>
              <text x={550} y={215} textAnchor="middle" fill="#ddf" fontSize={10}>
                Meaning
              </text>
              {/* Pragmatics */}
              <rect x={605} y={175} width={120} height={55} fill="#9b59b6" rx={8} />
              <text
                x={665}
                y={198}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                Pragmatics
              </text>
              <text x={665} y={215} textAnchor="middle" fill="#edf" fontSize={10}>
                Meaning in Context
              </text>
              {/* Sociolinguistics */}
              <rect x={720} y={175} width={130} height={55} fill="#1abc9c" rx={8} />
              <text
                x={785}
                y={198}
                textAnchor="middle"
                fill="white"
                fontSize={12}
                fontWeight="bold"
              >
                Sociolinguistics
              </text>
              <text x={785} y={215} textAnchor="middle" fill="#dff" fontSize={10}>
                Language &amp; Society
              </text>
              {/* Psycholinguistics */}
              <rect x={820} y={285} width={75} height={55} fill="#e91e63" rx={8} />
              <text
                x={857}
                y={308}
                textAnchor="middle"
                fill="white"
                fontSize={10}
                fontWeight="bold"
              >
                Psycho-
              </text>
              <text
                x={857}
                y={320}
                textAnchor="middle"
                fill="white"
                fontSize={10}
                fontWeight="bold"
              >
                linguistics
              </text>
              <text x={857} y={332} textAnchor="middle" fill="#fdd" fontSize={9}>
                Mind &amp; Lang.
              </text>
              <line
                x1={860}
                y1={230}
                x2={857}
                y2={285}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              {/* Sub-labels row 2 */}
              <text
                x={90}
                y={250}
                textAnchor="middle"
                fill="#e74c3c"
                fontSize={10}
                fontStyle="italic"
              >
                /p/ /b/ /t/ /d/
              </text>
              <text
                x={205}
                y={250}
                textAnchor="middle"
                fill="#e67e22"
                fontSize={10}
                fontStyle="italic"
              >
                minimal pairs
              </text>
              <text
                x={320}
                y={250}
                textAnchor="middle"
                fill="#c0a000"
                fontSize={10}
                fontStyle="italic"
              >
                un+break+able
              </text>
              <text
                x={435}
                y={250}
                textAnchor="middle"
                fill="#27ae60"
                fontSize={10}
                fontStyle="italic"
              >
                NP + VP
              </text>
              <text
                x={550}
                y={250}
                textAnchor="middle"
                fill="#2980b9"
                fontSize={10}
                fontStyle="italic"
              >
                denotation
              </text>
              <text
                x={665}
                y={250}
                textAnchor="middle"
                fill="#8e44ad"
                fontSize={10}
                fontStyle="italic"
              >
                speech acts
              </text>
              <text
                x={785}
                y={250}
                textAnchor="middle"
                fill="#16a085"
                fontSize={10}
                fontStyle="italic"
              >
                dialects
              </text>
              {/* Bottom legend */}
              <text
                x={450}
                y={440}
                textAnchor="middle"
                fill="#7f8c8d"
                fontSize={13}
                fontStyle="italic"
              >
                Each branch studies a different level or dimension of human language
              </text>
            </svg>
            <p className="diagram-caption">
              Figure 1: The major sub-fields of linguistics, each focusing on a
              distinct aspect of language structure or use
            </p>
          </div>
          {/* PHONETICS */}
          <div className="subfield-card phonetics">
            <h4>🔴 1. Phonetics — The Study of Speech Sounds</h4>
            <p>
              <strong>Phonetics</strong> is the scientific study of the physical
              sounds of human speech. Phoneticians analyze how sounds are produced
              by the vocal tract (
              <span className="term">articulatory phonetics</span>), how they travel
              through the air as sound waves (
              <span className="term">acoustic phonetics</span>), and how they are
              perceived by the listener's ear and brain (
              <span className="term">auditory phonetics</span>).
            </p>
            <p>
              Phonetics deals with actual, concrete sounds — called{" "}
              <span className="term">phones</span> — irrespective of meaning. The
              International Phonetic Alphabet (IPA) provides a universal symbol
              system for transcribing any sound in any language. For example, the
              English word "ship" is transcribed as /ʃɪp/ in IPA. Phonetics is
              crucial for language learning, speech therapy, voice acting, and
              accent training.
            </p>
            <p>
              <strong>Examples:</strong> The /p/ sound in "pin" is produced by
              pressing both lips together and releasing a puff of air (bilabial
              plosive). The /f/ sound in "fan" is made by placing the upper teeth on
              the lower lip (labiodental fricative). Even slight changes in tongue
              position create entirely different sounds.
            </p>
            <div className="diagram-container" style={{ margin: "15px 0" }}>
              <h5>IPA Chart (International Phonetic Alphabet)</h5>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/IPA_chart_2020.svg/800px-IPA_chart_2020.svg.png"
                alt="IPA Chart"
                style={{ maxWidth: "100%", borderRadius: 8 }}
                onError={(e) => e.currentTarget.alt = 'IPA Chart - Search for IPA chart on Wikipedia'}
              />
              <p className="diagram-caption">
                The International Phonetic Alphabet — a standardized system for
                transcribing speech sounds in any language
              </p>
            </div>
          </div>
          {/* PHONOLOGY */}
          <div className="subfield-card phonology">
            <h4>🟠 2. Phonology — The Study of Sound Patterns</h4>
            <p>
              <span className="term">Phonology</span> studies how sounds function
              and are organized within a specific language system. While phonetics
              asks "what sounds can humans produce?", phonology asks "which sounds
              matter in this language, and what rules govern them?" The key unit of
              phonology is the <span className="term">phoneme</span> — an abstract,
              meaning-distinguishing sound unit.
            </p>
            <p>
              Phonologists study <span className="term">minimal pairs</span> — pairs
              of words that differ by only one sound and have different meanings.
              For example, in English, "cat" /kæt/ and "bat" /bæt/ are a minimal
              pair — the only difference is /k/ vs. /b/, showing these are separate
              phonemes. Phonology also studies syllable structure, stress patterns,
              tone, and intonation.
            </p>
            <p>
              <strong>Example:</strong> In English, the sounds [p] and [pʰ]
              (aspirated p) are allophones of the same phoneme /p/ — "spin" has
              unaspirated [p], while "pin" has aspirated [pʰ]. English speakers
              don't notice the difference. But in Thai and Hindi, this difference is
              phonemic — it changes meaning!
            </p>
          </div>
          {/* MORPHOLOGY */}
          <div className="subfield-card morphology">
            <h4>🟡 3. Morphology — The Study of Word Structure</h4>
            <p>
              <span className="term">Morphology</span> is the study of the internal
              structure of words and how words are formed. The fundamental unit of
              morphology is the <span className="term">morpheme</span> — the
              smallest unit of meaning or grammatical function. Morphemes can be
              free (stand-alone words like "cat", "run") or bound (must attach to
              another morpheme, like "-ing", "un-", "-ness").
            </p>
            <p>
              Morphology explains how complex words are built from simpler parts:
              prefixes, roots, and suffixes. It also studies inflection (grammatical
              changes like "walk → walked → walking") and derivation (creating new
              words: "happy → unhappy → unhappiness"). Understanding morphology
              helps with vocabulary building, language learning, spelling, and
              lexicography.
            </p>
            <p>
              <strong>Example breakdown of "unbreakable":</strong>
            </p>
            <div style={{ textAlign: "center", margin: "15px 0" }}>
              <div className="morpheme-box">
                <div className="morpheme morpheme-prefix">
                  un-
                  <span className="morpheme-label">
                    Prefix
                    <br />
                    "not"
                  </span>
                </div>
                <div className="morpheme morpheme-root">
                  break
                  <span className="morpheme-label">
                    Root
                    <br />
                    "to break"
                  </span>
                </div>
                <div className="morpheme morpheme-suffix">
                  -able
                  <span className="morpheme-label">
                    Suffix
                    <br />
                    "capable of"
                  </span>
                </div>
              </div>
              <p style={{ marginTop: 10, fontSize: "0.9em", color: "#666" }}>
                un + break + able = "not capable of being broken" — 3 morphemes, 1
                word
              </p>
            </div>
          </div>
          {/* SYNTAX */}
          <div className="subfield-card syntax">
            <h4>🟢 4. Syntax — The Study of Sentence Structure</h4>
            <p>
              <span className="term">Syntax</span> is the study of how words are
              combined to form phrases, clauses, and sentences. Every language has
              rules — called <span className="term">phrase structure rules</span> or{" "}
              <span className="term">grammar</span> — that determine which word
              orders are grammatical. Syntax explains why "The cat chased the mouse"
              is grammatical in English but "Cat the mouse the chased" is not.
            </p>
            <p>
              Syntacticians use <span className="term">parse trees</span> (or syntax
              trees) to visually represent the hierarchical structure of sentences.
              Every sentence can be broken into a Noun Phrase (NP) and a Verb Phrase
              (VP). Chomsky's <em>Transformational Grammar</em> proposed that
              sentences have a <strong>deep structure</strong> (underlying meaning)
              and a <strong>surface structure</strong> (what we actually say),
              connected by transformations.
            </p>
            <p>
              <strong>Example:</strong> "Colorless green ideas sleep furiously"
              (Chomsky, 1957) is syntactically grammatical (NP + V + adverb) but
              semantically meaningless — proving that syntax and semantics are
              separate systems.
            </p>
          </div>
          {/* SEMANTICS */}
          <div className="subfield-card semantics">
            <h4>🔵 5. Semantics — The Study of Meaning</h4>
            <p>
              <span className="term">Semantics</span> is the branch of linguistics
              concerned with meaning — the meaning of words, phrases, sentences, and
              larger units of language. Semanticists study{" "}
              <span className="term">denotation</span> (literal, dictionary meaning)
              and <span className="term">connotation</span> (emotional or cultural
              associations). They also analyze relationships between words: synonyms
              (big/large), antonyms (hot/cold), hyponyms (rose is a hyponym of
              flower), and homonyms (bank: financial institution vs. riverbank).
            </p>
            <p>
              Semantics distinguishes between{" "}
              <span className="term">lexical semantics</span> (word meanings) and{" "}
              <span className="term">compositional semantics</span> (how meanings
              combine in phrases and sentences). The principle of compositionality
              states that the meaning of a complex expression is determined by the
              meanings of its parts and the rules for combining them.
            </p>
            <p>
              <strong>Example:</strong> "The dog bit the man" and "The man bit the
              dog" contain exactly the same words, but have completely different
              meanings because of the syntactic arrangement — showing how syntax and
              semantics interact.
            </p>
          </div>
          {/* PRAGMATICS */}
          <div className="subfield-card pragmatics">
            <h4>🟣 6. Pragmatics — Meaning in Context</h4>
            <p>
              <span className="term">Pragmatics</span> studies how context shapes
              the interpretation of language — how we mean more than we literally
              say. While semantics asks "what does this sentence literally mean?",
              pragmatics asks "what does the speaker mean by saying this, in this
              situation?" The same sentence can mean very different things depending
              on context, tone, and social relationship.
            </p>
            <p>
              Key concepts in pragmatics include{" "}
              <span className="term">speech acts</span> (J.L. Austin's theory that
              utterances perform actions: promises, warnings, requests),{" "}
              <span className="term">Gricean maxims</span> (Paul Grice's cooperative
              principle: be truthful, relevant, clear, and informative), and{" "}
              <span className="term">implicature</span> (what is implied but not
              stated).
            </p>
            <p>
              <strong>Example:</strong> If someone asks "Can you pass the salt?"
              they are not asking about your ability to pass salt (semantics) — they
              are making a polite request (pragmatics). If a student says "I have an
              exam tomorrow" to explain why they can't attend a party, that is an
              implicature — the statement implies a refusal without explicitly
              refusing.
            </p>
          </div>
          {/* SOCIOLINGUISTICS */}
          <div className="subfield-card sociolinguistics">
            <h4>🩵 7. Sociolinguistics — Language and Society</h4>
            <p>
              <span className="term">Sociolinguistics</span> investigates the
              relationship between language and society — how social factors like
              age, gender, ethnicity, class, geography, and culture influence
              language variation and change. No two people speak exactly alike;
              sociolinguists study these variations systematically.
            </p>
            <p>
              Key concepts include <span className="term">dialects</span> (regional
              or social varieties of a language),{" "}
              <span className="term">code-switching</span> (switching between
              languages or dialects depending on context),{" "}
              <span className="term">diglossia</span> (using two varieties of a
              language for different social functions), and{" "}
              <span className="term">language change</span> (how and why languages
              evolve over time). William Labov's study of New York City speech
              (1966) is a landmark sociolinguistic work.
            </p>
            <p>
              <strong>Example:</strong> A bilingual Indian professional might switch
              between Hindi and English within a single conversation at work
              (code-switching). A British speaker from Yorkshire uses different
              vowel sounds than a speaker from London — this is dialect variation.
              Both are studied by sociolinguists.
            </p>
          </div>
          {/* PSYCHOLINGUISTICS */}
          <div className="subfield-card psycholinguistics">
            <h4>🩷 8. Psycholinguistics — Language and the Mind</h4>
            <p>
              <span className="term">Psycholinguistics</span> explores the
              psychological and neurobiological factors that enable humans to
              acquire, produce, understand, and remember language. It bridges
              linguistics and cognitive psychology. Psycholinguists study how
              children acquire their mother tongue (first language acquisition), how
              adults learn second languages, how the brain processes sentences in
              real time, and what happens when language breaks down due to brain
              injury.
            </p>
            <p>
              Key findings include: children acquire language remarkably rapidly and
              uniformly (supporting Chomsky's nativist hypothesis);{" "}
              <span className="term">Broca's area</span> (left frontal lobe) is
              critical for speech production;{" "}
              <span className="term">Wernicke's area</span> (left temporal lobe) is
              critical for language comprehension. Damage to these areas causes
              different types of aphasia.
            </p>
            <p>
              <strong>Example:</strong> A child who has never been taught a grammar
              rule will still correctly use it. Children around the world go through
              the same stages of language development (babbling → one-word stage →
              two-word stage → full sentences) regardless of which language they are
              learning — evidence for a universal language acquisition mechanism.
            </p>
          </div>
          <h3 className="subsection-title">Applied Linguistics</h3>
          <p>
            Beyond pure theoretical research, linguistics has a rich applied
            dimension. <span className="term">Applied linguistics</span> uses
            linguistic knowledge to solve real-world problems in education,
            technology, healthcare, and law. Major areas include:
          </p>
          <ul style={{ marginLeft: 25, marginBottom: 15, lineHeight: 2 }}>
            <li>
              <strong>Language Teaching (SLA):</strong> Using knowledge of language
              acquisition to design better teaching methods
            </li>
            <li>
              <strong>Computational Linguistics / NLP:</strong> Building computer
              systems that understand and generate human language (machine
              translation, chatbots, speech recognition)
            </li>
            <li>
              <strong>Forensic Linguistics:</strong> Analyzing language evidence in
              legal contexts (authorship identification, language of threat,
              contract interpretation)
            </li>
            <li>
              <strong>Clinical Linguistics:</strong> Diagnosing and treating
              communication disorders (aphasia, dyslexia, stuttering, autism
              spectrum communication)
            </li>
            <li>
              <strong>Lexicography:</strong> Compiling dictionaries and thesauri
              based on corpus data
            </li>
            <li>
              <strong>Translation &amp; Interpretation:</strong> Using semantic and
              pragmatic knowledge to transfer meaning across languages
            </li>
          </ul>
        </div>
        {/* SECTION 4: VIDEOS */}
        <div className="section" id="videos">
          <h2 className="section-title">
            <span>🎥</span> Learn Through Videos
          </h2>
          <p>
            Watch these carefully curated videos to reinforce your understanding
            with expert explanations and visual demonstrations.
          </p>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/3yLXNzDUH58"
                  allowFullScreen
                  title="What is Linguistics?"
                />
              </div>
              <div className="video-info">
                <div className="video-title">
                  📚 What is Linguistics? — Introduction
                </div>
                <div className="video-description">
                  A clear introduction to linguistics as a scientific discipline,
                  covering core concepts and why it matters.
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/xVnMFCHfFiY"
                  allowFullScreen
                  title="Branches of Linguistics"
                />
              </div>
              <div className="video-info">
                <div className="video-title">
                  🔬 Branches of Linguistics Explained
                </div>
                <div className="video-description">
                  Covers all major sub-fields of linguistics with clear definitions
                  and real-world examples for each branch.
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/DWCOCpCKKyE"
                  allowFullScreen
                  title="Linguistics Sub-fields Overview"
                />
              </div>
              <div className="video-info">
                <div className="video-title">
                  🌐 Overview of Linguistics Sub-fields
                </div>
                <div className="video-description">
                  An animated overview covering phonetics, phonology, morphology,
                  syntax, semantics, and pragmatics with visual aids.
                </div>
              </div>
            </div>
          </div>
          <div className="alert alert-info">
            <strong>📺 Additional Resources:</strong>
            <ul style={{ marginTop: 10, marginLeft: 20 }}>
              <li>
                <strong>YouTube Channels:</strong> Crash Course Linguistics,
                NativLang, The Ling Space, Tom Scott (linguistics videos)
              </li>
              <li>
                <strong>Interactive:</strong> Search "IPA chart interactive" for a
                clickable IPA chart with audio samples
              </li>
              <li>
                <strong>Apps:</strong> Duolingo (applied linguistics in language
                learning), Speechling (pronunciation/phonetics)
              </li>
            </ul>
          </div>
        </div>
        {/* SECTION 5: MERMAID DIAGRAMS */}
        <div className="section">
          <h2 className="section-title">
            <span>📊</span> Visual Concept Maps
          </h2>
          <div className="diagram-container">
            <h4>How to Analyze Language at Multiple Levels</h4>
            <div className="flex justify-center my-6 overflow-hidden">
              <div className="mermaid" ref={mermaidRef} />
            </div>
            <p className="diagram-caption">
              Figure 2: Multi-level linguistic analysis — how linguists examine
              language at each layer
            </p>
          </div>
          <div className="diagram-container">
            <h4>Syntax Tree: "The cat sat on the mat"</h4>
            <svg
              width={700}
              height={320}
              viewBox="0 0 700 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={700} height={320} fill="#f8f9fa" rx={10} />
              {/* S node */}
              <ellipse cx={350} cy={35} rx={30} ry={20} fill="#2c3e50" />
              <text
                x={350}
                y={40}
                textAnchor="middle"
                fill="white"
                fontSize={14}
                fontWeight="bold"
              >
                S
              </text>
              {/* Lines from S */}
              <line
                x1={325}
                y1={50}
                x2={175}
                y2={100}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              <line
                x1={375}
                y1={50}
                x2={525}
                y2={100}
                stroke="#2c3e50"
                strokeWidth={2}
              />
              {/* NP node */}
              <ellipse cx={175} cy={115} rx={30} ry={20} fill="#e74c3c" />
              <text
                x={175}
                y={120}
                textAnchor="middle"
                fill="white"
                fontSize={14}
                fontWeight="bold"
              >
                NP
              </text>
              {/* VP node */}
              <ellipse cx={525} cy={115} rx={30} ry={20} fill="#3498db" />
              <text
                x={525}
                y={120}
                textAnchor="middle"
                fill="white"
                fontSize={14}
                fontWeight="bold"
              >
                VP
              </text>
              {/* Lines from NP */}
              <line
                x1={152}
                y1={130}
                x2={105}
                y2={175}
                stroke="#e74c3c"
                strokeWidth={2}
              />
              <line
                x1={198}
                y1={130}
                x2={245}
                y2={175}
                stroke="#e74c3c"
                strokeWidth={2}
              />
              {/* DET */}
              <ellipse cx={105} cy={190} rx={30} ry={20} fill="#e67e22" />
              <text
                x={105}
                y={195}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                DET
              </text>
              {/* N */}
              <ellipse cx={245} cy={190} rx={25} ry={20} fill="#e67e22" />
              <text
                x={245}
                y={195}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                N
              </text>
              {/* Lines from VP */}
              <line
                x1={502}
                y1={130}
                x2={440}
                y2={175}
                stroke="#3498db"
                strokeWidth={2}
              />
              <line
                x1={548}
                y1={130}
                x2={610}
                y2={175}
                stroke="#3498db"
                strokeWidth={2}
              />
              {/* V */}
              <ellipse cx={440} cy={190} rx={25} ry={20} fill="#2ecc71" />
              <text
                x={440}
                y={195}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                V
              </text>
              {/* PP */}
              <ellipse cx={610} cy={190} rx={30} ry={20} fill="#9b59b6" />
              <text
                x={610}
                y={195}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight="bold"
              >
                PP
              </text>
              {/* Lines from PP */}
              <line
                x1={585}
                y1={205}
                x2={545}
                y2={248}
                stroke="#9b59b6"
                strokeWidth={2}
              />
              <line
                x1={635}
                y1={205}
                x2={675}
                y2={248}
                stroke="#9b59b6"
                strokeWidth={2}
              />
              {/* P and NP2 */}
              <ellipse cx={545} cy={263} rx={25} ry={18} fill="#1abc9c" />
              <text
                x={545}
                y={268}
                textAnchor="middle"
                fill="white"
                fontSize={12}
                fontWeight="bold"
              >
                P
              </text>
              <ellipse cx={675} cy={263} rx={28} ry={18} fill="#e74c3c" />
              <text
                x={675}
                y={268}
                textAnchor="middle"
                fill="white"
                fontSize={12}
                fontWeight="bold"
              >
                NP
              </text>
              {/* Leaf words */}
              <line
                x1={105}
                y1={210}
                x2={105}
                y2={248}
                stroke="#555"
                strokeWidth="1.5"
              />
              <line
                x1={245}
                y1={210}
                x2={245}
                y2={248}
                stroke="#555"
                strokeWidth="1.5"
              />
              <line
                x1={440}
                y1={210}
                x2={440}
                y2={248}
                stroke="#555"
                strokeWidth="1.5"
              />
              <line
                x1={545}
                y1={281}
                x2={545}
                y2={298}
                stroke="#555"
                strokeWidth="1.5"
              />
              <line
                x1={675}
                y1={281}
                x2={675}
                y2={298}
                stroke="#555"
                strokeWidth="1.5"
              />
              {/* NP2 children */}
              <rect x={30} y={248} width={40} height={25} fill="#fff3cd" rx={4} />
              <text
                x={50}
                y={265}
                textAnchor="middle"
                fill="#2c3e50"
                fontSize={12}
                fontWeight="bold"
              >
                The
              </text>
              <rect x={215} y={248} width={40} height={25} fill="#fff3cd" rx={4} />
              <text
                x={235}
                y={265}
                textAnchor="middle"
                fill="#2c3e50"
                fontSize={12}
                fontWeight="bold"
              >
                cat
              </text>
              <rect x={415} y={248} width={40} height={25} fill="#fff3cd" rx={4} />
              <text
                x={435}
                y={265}
                textAnchor="middle"
                fill="#2c3e50"
                fontSize={12}
                fontWeight="bold"
              >
                sat
              </text>
              <rect x={522} y={298} width={40} height={22} fill="#fff3cd" rx={4} />
              <text
                x={542}
                y={314}
                textAnchor="middle"
                fill="#2c3e50"
                fontSize={12}
                fontWeight="bold"
              >
                on
              </text>
              <rect x={640} y={298} width={75} height={22} fill="#fff3cd" rx={4} />
              <text
                x={677}
                y={314}
                textAnchor="middle"
                fill="#2c3e50"
                fontSize={12}
                fontWeight="bold"
              >
                the mat
              </text>
            </svg>
            <p className="diagram-caption">
              Figure 3: Syntax tree (parse tree) for "The cat sat on the mat"
              showing hierarchical sentence structure
            </p>
          </div>
        </div>

        {/* SECTION 7: WORKED EXAMPLES */}
        <div className="section" id="examples">
          <h2 className="section-title">
            <span>⚙️</span> Worked Examples
          </h2>
          {/* Example 1 */}
          <div className="example-box">
            <h4>📝 Example 1: Morphological Analysis of "Unhappiness"</h4>
            <p>
              <strong>Task:</strong> Identify all morphemes in the word
              "unhappiness" and describe each one.
            </p>
            <div className="example-steps">
              <div className="step">
                <strong>Step 1 — Identify the root:</strong> The root is{" "}
                <code>happy</code> — an adjective meaning "feeling pleasure or
                contentment." It is a free morpheme (can stand alone).
              </div>
              <div className="step">
                <strong>Step 2 — Identify suffixes:</strong> Adding{" "}
                <code>-ness</code> (a derivational suffix) to an adjective creates a
                noun: <em>happiness</em> = the state of being happy.
              </div>
              <div className="step">
                <strong>Step 3 — Identify prefixes:</strong> Adding <code>un-</code>{" "}
                (a derivational prefix meaning "not") negates the meaning:{" "}
                <em>unhappiness</em> = the state of not being happy.
              </div>
              <div className="step">
                <strong>Step 4 — Count morphemes:</strong> un + happy + ness ={" "}
                <strong>3 morphemes</strong> total.
              </div>
              <div className="step">
                <strong>Step 5 — Classify morphemes:</strong> <code>un-</code> =
                bound, derivational, prefix. <code>happy</code> = free, root.{" "}
                <code>-ness</code> = bound, derivational, suffix.
              </div>
            </div>
            <div style={{ textAlign: "center", margin: "15px 0" }}>
              <div className="morpheme-box">
                <div className="morpheme morpheme-prefix">
                  un-
                  <span className="morpheme-label">
                    Prefix
                    <br />
                    Bound
                    <br />
                    "not"
                  </span>
                </div>
                <div className="morpheme morpheme-root">
                  happy
                  <span className="morpheme-label">
                    Root
                    <br />
                    Free
                    <br />
                    "joyful"
                  </span>
                </div>
                <div className="morpheme morpheme-suffix">
                  -ness
                  <span className="morpheme-label">
                    Suffix
                    <br />
                    Bound
                    <br />
                    "state of"
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#d4edda",
                padding: 15,
                borderRadius: 8,
                borderLeft: "4px solid #28a745"
              }}
            >
              <strong>✅ Final Answer:</strong> "Unhappiness" contains 3 morphemes:{" "}
              <code>un-</code> (prefix, negation) + <code>happy</code> (root
              adjective) + <code>-ness</code> (nominalizing suffix). The word is a
              derived noun formed through prefixation and suffixation.
            </div>
          </div>
          {/* Example 2 */}
          <div className="example-box">
            <h4>
              📝 Example 2: Multi-Level Linguistic Analysis of "The birds are
              singing"
            </h4>
            <p>
              <strong>Task:</strong> Analyze the sentence "The birds are singing" at
              five linguistic levels.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Analysis</th>
                  <th>Key Concepts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Phonological</strong>
                  </td>
                  <td>/ðə bɜːrdz ɑːr ˈsɪŋɪŋ/</td>
                  <td>
                    IPA transcription; /ð/ voiced dental fricative; /ŋ/ velar nasal
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Morphological</strong>
                  </td>
                  <td>The + bird + -s + are + sing + -ing</td>
                  <td>bird+s = plural inflection; sing+ing = present participle</td>
                </tr>
                <tr>
                  <td>
                    <strong>Syntactic</strong>
                  </td>
                  <td>[NP The birds] [VP are singing]</td>
                  <td>
                    Subject NP + Predicate VP; present progressive tense structure
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Semantic</strong>
                  </td>
                  <td>Multiple birds, currently producing melodic sounds</td>
                  <td>
                    Collective action; present continuous aspect; "birds" = hyponym
                    of "animal"
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Pragmatic</strong>
                  </td>
                  <td>Context-dependent: observation, complaint, poetry, signal</td>
                  <td>Depends on speaker intent, relationship, and setting</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                background: "#d4edda",
                padding: 15,
                borderRadius: 8,
                borderLeft: "4px solid #28a745",
                marginTop: 15
              }}
            >
              <strong>✅ Key Insight:</strong> The same sentence can be analyzed
              from multiple independent angles. Each sub-field reveals a different
              layer of linguistic structure, and these layers interact to produce
              the full meaning of an utterance.
            </div>
          </div>
          {/* Example 3 */}
          <div className="example-box">
            <h4>
              📝 Example 3 (Edge Case): Syntactic Ambiguity — "I saw the man with
              the telescope"
            </h4>
            <p>
              <strong>Task:</strong> Show how this sentence has two different
              syntactic structures, producing two different meanings.
            </p>
            <div className="example-steps">
              <div className="step">
                <strong>Interpretation 1:</strong> "I used the telescope to see the
                man" — The PP "with the telescope" modifies the verb "saw" (it is
                part of the VP). Structure: [I] [saw [the man] [with the telescope]]
              </div>
              <div className="step">
                <strong>Interpretation 2:</strong> "I saw the man who had the
                telescope" — The PP "with the telescope" modifies "the man" (it is
                part of the NP). Structure: [I] [saw [the man with the telescope]]
              </div>
              <div className="step">
                <strong>Why this is important:</strong> This is syntactic ambiguity
                — the sentence has one surface form but two underlying deep
                structures (Chomsky's distinction). Context or intonation normally
                resolves the ambiguity in real speech.
              </div>
            </div>
            <div className="alert alert-warning" style={{ marginTop: 10 }}>
              <strong>⚠️ Exam Tip:</strong> Ambiguous sentences are a favorite exam
              topic. Always check if a sentence could have multiple parse trees
              before committing to one analysis.
            </div>
          </div>
        </div>
        {/* SECTION 8: LAB EXERCISE */}
        <div className="lab-exercise" id="lab">
          <h3>🛠️ Hands-On Lab: The Linguistic Detective</h3>
          <h2>Analyze a Sentence at All Five Linguistic Levels</h2>
          <div className="lab-objective">
            <strong>📋 Objective:</strong>
            <p>
              Apply your knowledge of linguistics sub-fields to perform a complete
              linguistic analysis of the sentence:{" "}
              <em>"She quickly writes beautiful letters."</em>
            </p>
          </div>
          <div className="lab-objective">
            <strong>⏱️ Estimated Time:</strong> 25–35 minutes
          </div>
          <div className="lab-steps">
            <h4>📝 Instructions:</h4>
            <ol>
              <li>
                <strong>Phonological Level:</strong> Write the IPA transcription of
                the sentence. Identify at least 3 phonemes and describe their
                place/manner of articulation.
              </li>
              <li>
                <strong>Morphological Level:</strong> Break each word into its
                morphemes. Classify each morpheme as free/bound and
                root/prefix/suffix. Count the total number of morphemes in the
                sentence.
              </li>
              <li>
                <strong>Syntactic Level:</strong> Draw a phrase structure tree.
                Label NP, VP, and any sub-phrases. Identify the subject and
                predicate.
              </li>
              <li>
                <strong>Semantic Level:</strong> Identify the semantic roles (who is
                the agent? what is the theme?). Note any examples of polysemy,
                synonymy, or antonymy in the sentence.
              </li>
              <li>
                <strong>Pragmatic Level:</strong> Write three different contexts
                where this sentence might be said. In each context, how might the
                implied meaning differ from the literal meaning?
              </li>
              <li>
                <strong>Sub-field Connection:</strong> Write 2–3 sentences
                explaining which sub-field you found most challenging and why.
              </li>
              <li>
                <strong>Extension (Optional):</strong> Replace one word in the
                sentence and explain how this changes the analysis at two or more
                linguistic levels.
              </li>
            </ol>
          </div>
          <div className="lab-objective">
            <strong>✅ Expected Outcome:</strong>
            <p>
              A complete written analysis document covering all 5 linguistic levels,
              with correctly labeled morphemes, a syntactic tree, and pragmatic
              context examples. You should find approximately 8 morphemes total in
              the sentence.
            </p>
          </div>
          <div className="lab-objective">
            <strong>🎓 Grading Rubric (25 marks):</strong>
            <ul style={{ marginLeft: 20, marginTop: 8 }}>
              <li>Phonological analysis: 5 marks</li>
              <li>Morphological analysis (correct morpheme count): 5 marks</li>
              <li>Syntactic tree (correctly labeled): 5 marks</li>
              <li>Semantic role analysis: 5 marks</li>
              <li>Pragmatic context examples: 5 marks</li>
            </ul>
          </div>
        </div>
        {/* SECTION 9: COMPARISON TABLE */}
        <div className="section" id="comparison">
          <h2 className="section-title">
            <span>📊</span> Comparison of All Eight Sub-fields
          </h2>
          <table>
            <thead>
              <tr>
                <th>Sub-field</th>
                <th>What It Studies</th>
                <th>Key Unit</th>
                <th>Classic Example</th>
                <th>Real-World Application</th>
                <th>Key Scholar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong style={{ color: "#e74c3c" }}>Phonetics</strong>
                </td>
                <td>Physical speech sounds — production, acoustics, perception</td>
                <td>Phone [p]</td>
                <td>/p/ vs. /b/ articulation</td>
                <td>Speech therapy, voice technology, accent coaching</td>
                <td>Peter Ladefoged</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#e67e22" }}>Phonology</strong>
                </td>
                <td>Sound systems and patterns within a language</td>
                <td>Phoneme /p/</td>
                <td>Minimal pairs: "cat" vs. "bat"</td>
                <td>Second language pronunciation, spelling rules</td>
                <td>N. Trubetzkoy</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#c0a000" }}>Morphology</strong>
                </td>
                <td>Word structure and formation</td>
                <td>Morpheme</td>
                <td>un+break+able</td>
                <td>Vocabulary building, dictionary making, NLP tokenization</td>
                <td>John McCarthy</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#27ae60" }}>Syntax</strong>
                </td>
                <td>Sentence structure and grammar</td>
                <td>Phrase / Clause</td>
                <td>NP + VP sentence structure</td>
                <td>Grammar checkers, parsing engines, language teaching</td>
                <td>Noam Chomsky</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#2980b9" }}>Semantics</strong>
                </td>
                <td>Literal meaning of words and sentences</td>
                <td>Lexeme</td>
                <td>"big" = synonymous with "large"</td>
                <td>
                  Thesaurus design, machine translation, word sense disambiguation
                </td>
                <td>Gottlob Frege</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#8e44ad" }}>Pragmatics</strong>
                </td>
                <td>Meaning in context; speaker intent</td>
                <td>Utterance</td>
                <td>Indirect speech acts</td>
                <td>Chatbot design, politeness in cross-cultural communication</td>
                <td>Paul Grice, J.L. Austin</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#16a085" }}>Sociolinguistics</strong>
                </td>
                <td>Language variation related to social factors</td>
                <td>Dialect / Idiolect</td>
                <td>Code-switching in bilingual communities</td>
                <td>Language policy, education equity, multilingual AI</td>
                <td>William Labov</td>
              </tr>
              <tr>
                <td>
                  <strong style={{ color: "#c2185b" }}>Psycholinguistics</strong>
                </td>
                <td>Language and the human mind/brain</td>
                <td>Mental lexicon</td>
                <td>Children's language acquisition stages</td>
                <td>
                  Dyslexia treatment, aphasia rehabilitation, language learning apps
                </td>
                <td>Noam Chomsky, Steven Pinker</td>
              </tr>
            </tbody>
          </table>
          <div className="alert alert-info">
            <strong>💡 Key Distinctions to Remember:</strong>
            <ul style={{ marginTop: 10, marginLeft: 20 }}>
              <li>
                <strong>Phonetics vs. Phonology:</strong> Phonetics = physical
                sounds (science of acoustics). Phonology = mental/abstract sound
                system (which sounds matter in a language).
              </li>
              <li>
                <strong>Semantics vs. Pragmatics:</strong> Semantics = what a
                sentence literally means. Pragmatics = what the speaker means by
                saying it in that context.
              </li>
              <li>
                <strong>Sociolinguistics vs. Psycholinguistics:</strong> Socio =
                language and society (external factors). Psycho = language and the
                mind (internal cognitive factors).
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 11: PITFALLS */}
        <div className="section" id="pitfalls">
          <h2 className="section-title">
            <span>⚠️</span> Common Pitfalls &amp; How to Avoid Them
          </h2>
          <div className="alert alert-danger">
            <strong>
              🚫 Pitfall 1: Confusing Linguistics with Prescriptive Grammar
            </strong>
            <p>
              <strong>What students do wrong:</strong> Thinking that linguistics is
              about correcting people's grammar and teaching "proper" language.
            </p>
            <p>
              <strong>Reality:</strong> Linguistics is descriptive — it studies how
              language is actually used, not how it "should" be used. A linguist
              would analyze "I ain't done nothing" as a valid grammatical double
              negative, not as an error.
            </p>
            <p>
              <strong>✅ Remember:</strong> In linguistics, "wrong" = ungrammatical
              by native speakers' intuitions, not by school rules.
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall 2: Mixing Up Phonetics and Phonology</strong>
            <p>
              <strong>What students do wrong:</strong> Using "phonetics" and
              "phonology" interchangeably, or thinking they study the same thing.
            </p>
            <p>
              <strong>Reality:</strong> Phonetics = physical, observable sounds
              (acoustics, articulation). Phonology = abstract, mental sound system
              (phonemes, patterns, rules). You can think of it as: phonetics is
              hardware, phonology is software.
            </p>
            <p>
              <strong>✅ Memory trick:</strong> PhonETICS = physical. PhonOLOGY =
              mental/mental rules.
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall 3: Confusing Semantics and Pragmatics</strong>
            <p>
              <strong>What students do wrong:</strong> Thinking semantics and
              pragmatics both deal with "meaning" and are therefore the same thing.
            </p>
            <p>
              <strong>Reality:</strong> Semantics = literal, context-free meaning.
              Pragmatics = meaning in context, speaker intent. "It's cold in here"
              literally describes temperature (semantics) but may be a request to
              close the window (pragmatics).
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall 4: Forgetting that Morphemes ≠ Syllables</strong>
            <p>
              <strong>What students do wrong:</strong> Counting syllables when asked
              to identify morphemes, or assuming one syllable = one morpheme.
            </p>
            <p>
              <strong>Reality:</strong> "Walked" has 1 syllable but 2 morphemes
              (walk + -ed). "Beautiful" has 3 syllables but 2 morphemes (beauty →
              beautiful via suffix -ful). Always look for meaning units, not sound
              units.
            </p>
          </div>
          <div className="alert alert-danger">
            <strong>
              🚫 Pitfall 5: Thinking Some Languages are "Better" or "More Complex"
            </strong>
            <p>
              <strong>What students do wrong:</strong> Assuming English is more
              logical than other languages, or that certain dialects are "broken"
              versions of standard languages.
            </p>
            <p>
              <strong>Reality:</strong> All human languages are equally complex and
              fully capable of expressing any thought. Every dialect is a
              rule-governed linguistic system. Linguists call this the principle of{" "}
              <em>linguistic equality</em>.
            </p>
          </div>
          <div className="alert alert-warning">
            <strong>💡 Top 5 Exam Tips:</strong>
            <ul style={{ marginTop: 10, marginLeft: 20 }}>
              <li>
                Always define your terms precisely before giving examples —
                examiners reward technical vocabulary.
              </li>
              <li>
                When asked to compare sub-fields, use a table format — it shows
                clarity of thought and earns full marks.
              </li>
              <li>
                For morpheme analysis, remember: count meaning units, not syllables
                or letters.
              </li>
              <li>
                In pragmatics questions, always mention context and speaker intent —
                the literal meaning alone is only half the answer.
              </li>
              <li>
                If asked about Chomsky or Saussure, mention their specific
                contributions (not just their names) to earn full marks.
              </li>
            </ul>
          </div>
        </div>
        {/* SECTION 12: QUICK REFERENCE */}
        <div className="quick-ref" id="quickref">
          <h2 style={{ color: "#e65100", marginBottom: 20 }}>
            📄 Quick Reference Cheat Sheet
          </h2>
          <div className="quick-ref-grid">
            <div className="quick-ref-card">
              <h4>🔑 What is Linguistics?</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>Scientific, descriptive study of language</li>
                <li>Studies spoken, written &amp; signed language</li>
                <li>Examines structure, meaning, use, and variation</li>
                <li>Key principle: no language is superior to another</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🔴 Phonetics &amp; 🟠 Phonology</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>
                  <strong>Phonetics:</strong> Physical sounds, IPA, articulation
                </li>
                <li>
                  <strong>Phonology:</strong> Sound systems, phonemes, minimal pairs
                </li>
                <li>Phone [p] vs. Phoneme /p/</li>
                <li>Key: Phonology is language-specific; phonetics is universal</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🟡 Morphology</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>Studies word structure; unit = morpheme</li>
                <li>Free morphemes: stand alone (cat, run, big)</li>
                <li>Bound morphemes: must attach (un-, -ing, -ness)</li>
                <li>Inflection vs. Derivation</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🟢 Syntax &amp; 🔵 Semantics</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>
                  <strong>Syntax:</strong> Sentence structure; parse trees; NP+VP
                </li>
                <li>
                  <strong>Semantics:</strong> Literal meaning; denotation &amp;
                  connotation
                </li>
                <li>Synonyms, antonyms, homonyms, hyponyms</li>
                <li>Chomsky: syntax and semantics are separate!</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🟣 Pragmatics</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>Meaning in context; speaker intent</li>
                <li>Speech acts (Austin/Searle)</li>
                <li>Grice's Cooperative Principle (maxims)</li>
                <li>Implicature = implied but not stated meaning</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🩵 Socio- &amp; 🩷 Psycholinguistics</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>
                  <strong>Socio:</strong> Language &amp; society; dialects;
                  code-switching
                </li>
                <li>
                  <strong>Psycho:</strong> Language &amp; the mind; acquisition;
                  Broca's area
                </li>
                <li>
                  Key: Socio = external social factors; Psycho = internal cognitive
                  factors
                </li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🧠 Key Linguists</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>
                  <strong>Panini (~400 BCE):</strong> First systematic grammar
                </li>
                <li>
                  <strong>Saussure (1857–1913):</strong> Structural linguistics,
                  langue/parole
                </li>
                <li>
                  <strong>Chomsky (b.1928):</strong> Universal Grammar, LAD
                </li>
                <li>
                  <strong>Sapir &amp; Whorf:</strong> Linguistic relativity
                </li>
                <li>
                  <strong>Labov (b.1927):</strong> Sociolinguistics, language
                  variation
                </li>
                <li>
                  <strong>Grice (1913–1988):</strong> Cooperative Principle,
                  implicature
                </li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>⚠️ Don't Confuse!</h4>
              <ul style={{ marginLeft: 15, lineHeight: "1.9" }}>
                <li>❌ Phonetics ≠ Phonology</li>
                <li>❌ Semantics ≠ Pragmatics</li>
                <li>❌ Morpheme ≠ Syllable</li>
                <li>❌ Linguistics ≠ Grammar prescription</li>
                <li>❌ Sociolinguistics ≠ Psycholinguistics</li>
              </ul>
            </div>
          </div>
        </div>
        {/* SECTION 13: EXAM PRACTICE */}
        <div className="section" id="exam">
          <h2 className="section-title">
            <span>📝</span> University Exam Practice
          </h2>
          <div className="example-box">
            <h4>Question 1: Short Answer (5 marks) — Time: 7 minutes</h4>
            <p>
              <strong>
                Q: Define linguistics and explain, with examples, why it is
                considered a scientific discipline rather than a prescriptive study
                of grammar.
              </strong>
            </p>
            <button className={`collapsible ${openCollapsible === 'q1' ? 'active' : ''}`} onClick={() => toggleCollapsible('q1')}>
              Show Marking Scheme &amp; Model Answer
            </button>
            <div className="collapsible-content" style={{ maxHeight: openCollapsible === 'q1' ? '2000px' : '0' }}>
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: 20 }}>
                  <li>Clear definition of linguistics: 1 mark</li>
                  <li>Explaining "descriptive" approach with example: 1 mark</li>
                  <li>Contrast with prescriptive grammar: 1 mark</li>
                  <li>
                    At least one example of linguistic analysis (not grammar
                    correction): 1 mark
                  </li>
                  <li>
                    Reference to a key concept (e.g., language universals,
                    scientific methodology): 1 mark
                  </li>
                </ul>
                <h4>Model Answer:</h4>
                <p>
                  Linguistics is the scientific study of language — encompassing its
                  structure, use, variation, and change across all human languages.
                  It is scientific because it follows empirical methods: linguists
                  observe actual language use, form hypotheses, collect data, and
                  test theories systematically. Unlike prescriptive grammar, which
                  prescribes how people <em>should</em> speak (e.g., "never split an
                  infinitive"), linguistics is <strong>descriptive</strong> — it
                  analyzes how people <em>actually</em> speak, without value
                  judgments. For example, while a grammar teacher might correct "He
                  don't know nothing" as incorrect, a linguist would recognize this
                  as a grammatical double-negative construction common in many
                  English dialects, with a fully systematic rule system. Linguistics
                  also investigates language universals — features shared by all
                  languages — proving that language study goes far beyond any single
                  language's grammar rules.
                </p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Question 2: Problem Solving (10 marks) — Time: 15 minutes</h4>
            <p>
              <strong>
                Q: Perform a complete morphological analysis of the following words.
                For each word, identify all morphemes, classify them as free or
                bound, and state the type (prefix, root, suffix). Words: (a)
                "dishonestly" (b) "teachers" (c) "predetermined"
              </strong>
            </p>
            <button className={`collapsible ${openCollapsible === 'q2' ? 'active' : ''}`} onClick={() => toggleCollapsible('q2')}>
              Show Marking Scheme &amp; Complete Solution
            </button>
            <div className="collapsible-content" style={{ maxHeight: openCollapsible === 'q2' ? '3000px' : '0' }}>
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: 20 }}>
                  <li>
                    Each word correctly identified morphemes: 2 marks each (×3 = 6
                    marks)
                  </li>
                  <li>Correct free/bound classification: 2 marks</li>
                  <li>Clear table presentation: 2 marks</li>
                </ul>
                <h4>Complete Solution:</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Word</th>
                      <th>Morpheme</th>
                      <th>Type</th>
                      <th>Free/Bound</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={4}>
                        <strong>dishonestly</strong>
                      </td>
                      <td>dis-</td>
                      <td>Prefix</td>
                      <td>Bound</td>
                      <td>"not, opposite of"</td>
                    </tr>
                    <tr>
                      <td>honest</td>
                      <td>Root</td>
                      <td>Free</td>
                      <td>"truthful"</td>
                    </tr>
                    <tr>
                      <td>-ly</td>
                      <td>Suffix</td>
                      <td>Bound</td>
                      <td>"in a manner of" (adverb maker)</td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <em>Total: 3 morphemes | dis+honest+ly</em>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={3}>
                        <strong>teachers</strong>
                      </td>
                      <td>teach</td>
                      <td>Root</td>
                      <td>Free</td>
                      <td>"to instruct"</td>
                    </tr>
                    <tr>
                      <td>-er</td>
                      <td>Suffix</td>
                      <td>Bound</td>
                      <td>"one who does" (agentive noun)</td>
                    </tr>
                    <tr>
                      <td>-s</td>
                      <td>Suffix</td>
                      <td>Bound</td>
                      <td>Plural inflection</td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <em>Total: 3 morphemes | teach+er+s</em>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={4}>
                        <strong>predetermined</strong>
                      </td>
                      <td>pre-</td>
                      <td>Prefix</td>
                      <td>Bound</td>
                      <td>"before"</td>
                    </tr>
                    <tr>
                      <td>determine</td>
                      <td>Root</td>
                      <td>Free</td>
                      <td>"to decide"</td>
                    </tr>
                    <tr>
                      <td>-ed</td>
                      <td>Suffix</td>
                      <td>Bound</td>
                      <td>Past tense inflection</td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <em>Total: 3 morphemes | pre+determine+ed</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Question 3: Analytical/Comparison (15 marks) — Time: 20 minutes</h4>
            <p>
              <strong>
                Q: Compare and contrast phonetics and phonology. Your answer should
                include: definitions, key differences, concepts specific to each,
                and the relationship between the two sub-fields. Use examples
                throughout.
              </strong>
            </p>
            <button className={`collapsible ${openCollapsible === 'q3' ? 'active' : ''}`} onClick={() => toggleCollapsible('q3')}>
              Show Marking Scheme &amp; Model Answer
            </button>
            <div className="collapsible-content" style={{ maxHeight: openCollapsible === 'q3' ? '3000px' : '0' }}>
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: 20 }}>
                  <li>Definition of phonetics with example: 3 marks</li>
                  <li>Definition of phonology with example: 3 marks</li>
                  <li>
                    Clear comparison of key differences (at least 3 points): 4 marks
                  </li>
                  <li>
                    Specific concepts (IPA, minimal pairs, phonemes, allophones): 3
                    marks
                  </li>
                  <li>Explanation of how they relate/interact: 2 marks</li>
                </ul>
                <h4>Model Answer:</h4>
                <p>
                  <strong>Phonetics</strong> is the scientific study of speech
                  sounds — how they are produced by the human vocal tract
                  (articulatory phonetics), how they travel as sound waves (acoustic
                  phonetics), and how they are perceived by listeners (auditory
                  phonetics). Phonetics deals with physical, concrete sounds called{" "}
                  <em>phones</em>, transcribed using the International Phonetic
                  Alphabet (IPA). For example, the English word "pin" is transcribed
                  as [pʰɪn] — the superscript "h" indicates aspiration, a physical
                  quality of the /p/ sound in this position.
                </p>
                <p>
                  <strong>Phonology</strong>, in contrast, studies the abstract,
                  mental system of sounds within a specific language — which sounds
                  are phonemically distinct, what patterns they follow, and what
                  rules govern their combinations. The core unit is the{" "}
                  <em>phoneme</em> — an abstract category that distinguishes
                  meaning. The tool for establishing phonemes is the{" "}
                  <strong>minimal pair</strong>: "cat" /kæt/ and "bat" /bæt/ differ
                  only in initial consonant, proving /k/ and /b/ are separate
                  phonemes in English.
                </p>
                <p>
                  The key difference is scope and abstraction: phonetics is
                  universal (studying all possible human sounds), while phonology is
                  language-specific (studying the sound rules of a particular
                  language). Phonetics is concrete and measurable; phonology is
                  abstract and mental. In English, [p] and [pʰ] are allophones of
                  the same phoneme /p/ (phonology) — but they are distinct phones
                  (phonetics). In Thai, this same distinction is phonemic — it
                  changes word meaning. The two fields are deeply connected:
                  phonetics provides the raw material (sounds) that phonology
                  organizes into systems. Effective linguistic analysis requires
                  both perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FINAL MASTERY QUIZ */}
        <div className="section" id="quiz">
          <h2 className="section-title">
            <span>✅</span> Section Mastery Quiz
          </h2>
          <Quiz 
            title="Linguistics Overview Mastery Quiz" 
            questions={module1Quiz} 
            subject="LS" 
            unitId={1} 
            moduleId={1} 
          />
        </div>

        {/* FOOTER */}
        <div className="footer">
          <h3>🎓 Congratulations on Completing This Module!</h3>
          <p>
            You've covered the full landscape of linguistics — from phonetics to
            psycholinguistics. Review regularly and apply these concepts in your
            daily communication.
          </p>
          <div className="footer-links">
            <a href="#objectives" className="footer-link">
              ↑ Back to Top
            </a>
            <a href="#theory" className="footer-link">
              📖 Review Theory
            </a>
            <a href="#practice" className="footer-link">
              🎯 More Practice
            </a>
            <a href="#quiz" className="footer-link">
              ✅ Retake Quiz
            </a>
            <a href="#quickref" className="footer-link">
              📄 Quick Reference
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: "0.9em" }}>
            Principles and Practices of Human Communication | UNIT-1: Introduction
            to Language and Linguistics
            <br />
            Generated interactive learning material for self-paced study
          </p>
        </div>
      </section>
    </div>
  );
};

export default Module1_1;
