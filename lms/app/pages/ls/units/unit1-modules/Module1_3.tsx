'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_3: React.FC = () => {
  const module3Quiz = [
    {
      question: "What is a phoneme?",
      options: [
        "A specific speech sound",
        "An abstract sound unit that can distinguish meaning",
        "A letter of the alphabet",
        "A word"
      ],
      correctAnswer: 1,
      explanation: "A phoneme is an abstract mental representation of a sound that can distinguish meaning in a language. For example, /p/ and /b/ are different phonemes in English because they distinguish 'pat' from 'bat'. It's not the physical sound itself, but the mental category."
    },
    {
      question: "What are allophones?",
      options: [
        "Different phonemes",
        "Phonetic variants of the same phoneme",
        "Foreign sounds",
        "Silent letters"
      ],
      correctAnswer: 1,
      explanation: "Allophones are different pronunciations of the same phoneme that don't change word meaning. For example, the aspirated [pʰ] in 'pin' and unaspirated [p] in 'spin' are allophones of the phoneme /p/ - they sound different but don't create different words."
    },
    {
      question: "What is assimilation in phonology?",
      options: [
        "Sounds becoming more similar",
        "Sounds becoming less similar",
        "Sound deletion",
        "Sound insertion"
      ],
      correctAnswer: 0,
      explanation: "Assimilation is when sounds become more similar to neighboring sounds to make pronunciation easier. For example, 'input' is pronounced [ɪmpʊt] where /n/ becomes [m] to match the following bilabial /p/. This makes speech more fluid."
    },
    {
      question: "What are the three parts of syllable structure?",
      options: [
        "Beginning, middle, end",
        "Onset, nucleus, coda",
        "Consonant, vowel, consonant",
        "Prefix, root, suffix"
      ],
      correctAnswer: 1,
      explanation: "Syllables have three parts: Onset (initial consonant(s), optional), Nucleus (vowel or syllabic consonant, required), and Coda (final consonant(s), optional). In 'cat': /k/ is onset, /æ/ is nucleus, /t/ is coda."
    },
    {
      question: "What is prosody in phonology?",
      options: [
        "Sound patterns",
        "Stress, tone, and intonation patterns",
        "Vowel systems",
        "Consonant clusters"
      ],
      correctAnswer: 1,
      explanation: "Prosody refers to suprasegmental features like stress (syllable prominence), tone (pitch patterns that distinguish meaning), and intonation (pitch patterns across phrases). These features operate above individual sounds and affect meaning and emotion."
    }
  ];

  return (
    <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Phonology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Phonology</h3>
              <p>Phonology is the study of sound systems in languages, examining how sounds function and pattern within particular linguistic systems. Unlike phonetics (which studies physical sounds), phonology studies abstract sound patterns.</p>
              
           
                <iframe width="560" height="315" src="https://www.youtube.com/embed/imH7hdOgxrU?si=JaT_sZx0WLvZdIdz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                  style={{width: '550px', height: '325px'}}
                ></iframe>
          

              <h4>Basic Phonological Concepts</h4>
              
              <h5>Phoneme</h5>
              <ul>
                <li><strong>Definition:</strong> Abstract sound unit that distinguishes meaning in a language</li>
                <li><strong>Mental representation:</strong> Exists in speakers' minds, not physical reality</li>
                <li><strong>Example:</strong> /p/ and /b/ are different phonemes in English ("pit" vs. "bit")</li>
                <li><strong>Language-specific:</strong> What counts as a phoneme varies by language</li>
                <li><strong>Notation:</strong> Written between slashes /p/</li>
              </ul>

              <h5>Allophone</h5>
              <ul>
                <li><strong>Definition:</strong> Phonetic variants of the same phoneme</li>
                <li><strong>Do not change meaning:</strong> Different pronunciations of same sound</li>
                <li><strong>Example:</strong> Aspirated [pʰ] in "pin" vs. unaspirated [p] in "spin"</li>
                <li><strong>Predictable:</strong> Distribution determined by phonological rules</li>
                <li><strong>Notation:</strong> Written in square brackets [pʰ]</li>
              </ul>

              <h5>Minimal Pairs</h5>
              <ul>
                <li><strong>Definition:</strong> Words differing by only one sound in the same position</li>
                <li><strong>Purpose:</strong> Used to identify phonemes</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>cat/bat (initial consonant)</li>
                    <li>ship/sheep (vowel)</li>
                    <li>light/right (initial consonant)</li>
                    <li>pin/bin/tin/din/sin (multiple minimal pairs)</li>
                  </ul>
                </li>
                <li><strong>Prove phonemic contrast:</strong> Show sounds are different phonemes</li>
              </ul>

              <h5>Complementary Distribution</h5>
              <ul>
                <li><strong>Definition:</strong> Allophones occur in mutually exclusive environments</li>
                <li><strong>Never in same context:</strong> Predictable where each appears</li>
                <li><strong>Example:</strong> [pʰ] only word-initially, [p] after /s/</li>
              </ul>

              <h5>Free Variation</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds that can be interchanged without changing meaning</li>
                <li><strong>Example:</strong> Flapped [r] vs. trilled [r] in some Spanish dialects</li>
              </ul>

              <h5>Distinctive Features</h5>
              <ul>
                <li><strong>Binary oppositions:</strong> [+voice] vs. [-voice]</li>
                <li><strong>Describe sounds:</strong> [+nasal], [+continuant], etc.</li>
                <li><strong>Minimal feature differences:</strong> /p/ and /b/ differ only in [voice]</li>
              </ul>

              <div className="example-box">
                <h5>Phoneme vs. Allophone Example</h5>
                <p>English /p/ phoneme has multiple allophones:</p>
                <ul>
                  <li>[pʰ] aspirated in "pin" (word-initial)</li>
                  <li>[p] unaspirated in "spin" (after /s/)</li>
                  <li>[pʺ] unreleased in "stop" (word-final)</li>
                  <li>All are the same phoneme /p/ but pronounced differently</li>
                </ul>
              </div>

              <h4>Phonological Processes</h4>
              
              <h5>Assimilation</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds become more similar to neighboring sounds</li>
                <li><strong>Nasal assimilation:</strong> "impossible" [ɪmpɑsəbl] - /n/ becomes [m] before /p/</li>
                <li><strong>Voicing assimilation:</strong> "cats" [kæts] vs. "dogs" [dɔgz]</li>
                <li><strong>Place assimilation:</strong> "input" - /n/ becomes [m] before bilabial</li>
                <li><strong>Purpose:</strong> Makes articulation easier and faster</li>
              </ul>

              <h5>Dissimilation</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds become less similar</li>
                <li><strong>Less common:</strong> Than assimilation</li>
                <li><strong>Example:</strong> "fifths" often pronounced without second [f]</li>
                <li><strong>Historical:</strong> Latin "peregrinus" → "pilgrim" (r...r → l...r)</li>
              </ul>

              <h5>Deletion/Elision</h5>
              <ul>
                <li><strong>Definition:</strong> Sound is removed</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"handbag" → [hænbæg] (d deleted)</li>
                    <li>"camera" → [kæmrə] (schwa deleted)</li>
                    <li>"probably" → [prɑbli] (schwa deleted)</li>
                  </ul>
                </li>
                <li><strong>Common in fast speech:</strong> Casual pronunciation</li>
              </ul>

              <h5>Insertion/Epenthesis</h5>
              <ul>
                <li><strong>Definition:</strong> Sound is added</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"warmth" → [wɔrmpθ] (p inserted)</li>
                    <li>"athlete" → [æθəlit] (schwa inserted)</li>
                    <li>"film" → [fɪləm] (schwa inserted)</li>
                  </ul>
                </li>
                <li><strong>Purpose:</strong> Breaks up difficult consonant clusters</li>
              </ul>

              <h5>Metathesis</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds switch positions</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"ask" → "aks" in some dialects</li>
                    <li>"comfortable" → "comfterble"</li>
                  </ul>
                </li>
                <li><strong>Historical:</strong> Old English "brid" → Modern English "bird"</li>
              </ul>

              <h5>Lenition (Weakening)</h5>
              <ul>
                <li><strong>Definition:</strong> Sound becomes weaker or less constricted</li>
                <li><strong>Example:</strong> Spanish "hablado" [aβlaðo] - stops become fricatives</li>
              </ul>

              <h4>Syllable Structure</h4>
              
              <h5>Components</h5>
              <ul>
                <li><strong>Onset:</strong> Initial consonant(s) - optional ("cat" = /k/)</li>
                <li><strong>Nucleus:</strong> Vowel or syllabic consonant - obligatory ("cat" = /æ/)</li>
                <li><strong>Coda:</strong> Final consonant(s) - optional ("cat" = /t/)</li>
                <li><strong>Rhyme:</strong> Nucleus + Coda together</li>
              </ul>

              <h5>Syllable Types</h5>
              <ul>
                <li><strong>Open syllable:</strong> Ends in vowel (CV) - "go" [goʊ]</li>
                <li><strong>Closed syllable:</strong> Ends in consonant (CVC) - "cat" [kæt]</li>
                <li><strong>Heavy syllable:</strong> Long vowel or coda - "beat", "cat"</li>
                <li><strong>Light syllable:</strong> Short vowel, no coda - "ba" in "baby"</li>
              </ul>

              <h5>Sonority Hierarchy</h5>
              <ul>
                <li><strong>Principle:</strong> Sounds arranged by sonority (resonance)</li>
                <li><strong>Hierarchy:</strong> Vowels &gt; Glides &gt; Liquids &gt; Nasals &gt; Fricatives &gt; Stops</li>
                <li><strong>Syllable peak:</strong> Most sonorous element (usually vowel)</li>
              </ul>

              <h5>Phonotactics</h5>
              <ul>
                <li><strong>Definition:</strong> Rules for permissible sound combinations</li>
                <li><strong>English examples:</strong>
                  <ul>
                    <li>Can start with /str/ ("street") but not /tsr/</li>
                    <li>Can end with /ŋk/ ("sink") but not /ŋg/</li>
                  </ul>
                </li>
                <li><strong>Language-specific:</strong> Varies across languages</li>
              </ul>

              <h4>Prosodic Features</h4>
              
              <h5>Stress</h5>
              <ul>
                <li><strong>Definition:</strong> Prominence given to syllables</li>
                <li><strong>Distinguishes meaning:</strong> REcord (noun) vs. reCORD (verb)</li>
                <li><strong>Marked by:</strong> Increased loudness, length, pitch</li>
                <li><strong>Primary and secondary:</strong> Different levels of stress</li>
              </ul>

              <h5>Tone</h5>
              <ul>
                <li><strong>Definition:</strong> Pitch patterns that distinguish meaning</li>
                <li><strong>Tonal languages:</strong> Mandarin Chinese, Thai, Yoruba, Vietnamese</li>
                <li><strong>Types:</strong> Level tones (high, mid, low), contour tones (rising, falling)</li>
                <li><strong>Example:</strong> Mandarin "ma" - high tone = "mother", rising = "hemp"</li>
              </ul>

              <h5>Intonation</h5>
              <ul>
                <li><strong>Definition:</strong> Pitch patterns across phrases/sentences</li>
                <li><strong>Functions:</strong> Indicates questions, statements, emotions</li>
                <li><strong>Rising intonation:</strong> Yes/no questions ("You're coming?↗")</li>
                <li><strong>Falling intonation:</strong> Statements ("I'm coming.↘")</li>
              </ul>

              <h5>Length/Duration</h5>
              <ul>
                <li><strong>Phonemic length:</strong> Long vs. short sounds distinguish meaning</li>
                <li><strong>Example:</strong> Finnish "tuli" (fire) vs. "tuuli" (wind)</li>
              </ul>

              <h5>Rhythm</h5>
              <ul>
                <li><strong>Stress-timed:</strong> English, German (stressed syllables at regular intervals)</li>
                <li><strong>Syllable-timed:</strong> Spanish, French (syllables at regular intervals)</li>
                <li><strong>Mora-timed:</strong> Japanese (morae at regular intervals)</li>
              </ul>

              <div className="example-box">
                <h5>Phonological Rules</h5>
                <p>Phonological rules describe systematic sound patterns:</p>
                <ul>
                  <li><strong>Rule format:</strong> A → B / C_D (A becomes B in context C_D)</li>
                  <li><strong>Example:</strong> Vowels → [+nasal] / _[+nasal] (vowels nasalized before nasal consonants)</li>
                  <li><strong>Productive:</strong> Apply to new words automatically</li>
                  <li><strong>Predictable:</strong> Follow consistent patterns</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 1.3 Quiz: Phonology" questions={module3Quiz} subject="LS" unitId={1} moduleId={3} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.phon.ox.ac.uk/" target="_blank" rel="noopener noreferrer">Oxford Phonetics Laboratory</a></li>
                <li><a href="https://linguistics.stackexchange.com/" target="_blank" rel="noopener noreferrer">Linguistics Stack Exchange</a></li>
                <li><a href="https://www.sil.org/linguistics/phonology" target="_blank" rel="noopener noreferrer">SIL - Phonology Resources</a></li>
              </ul>
            </div>

            
          </div>
  );
};

export default Module1_3;