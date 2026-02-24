'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_3: React.FC = () => {
  const module3Quiz = [
    {
      question: "Which word order type is most common among world languages?",
      options: [
        "SOV (Subject-Object-Verb)",
        "SVO (Subject-Verb-Object)",
        "VSO (Verb-Subject-Object)",
        "VOS (Verb-Object-Subject)"
      ],
      correctAnswer: 0, explanation: ""
    },
    {
      question: "What is an isolating language?",
      options: [
        "Language with complex word structure",
        "Language with one morpheme per word",
        "Language with no grammar",
        "Language spoken in isolation"
      ],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "In language typology, what does 'alignment' refer to?",
      options: [
        "Word order patterns",
        "How languages mark grammatical relations",
        "Sound change processes",
        "Semantic categorization"
      ],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "Which language is an example of SOV word order?",
      options: ["English", "Japanese", "Arabic", "French"],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "What are Greenberg's universals?",
      options: [
        "Universal grammar rules",
        "Cross-linguistic patterns and tendencies",
        "English grammar rules",
        "Phonetic symbols"
      ],
      correctAnswer: 1, explanation: ""
    }
  ];

  return (
    <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Language Typology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Language Typology?</h3>
              <p>Imagine you're a language detective trying to group the world's 7,000+ languages into categories. That's language typology! It's the study of how languages are similar and different in their structure.</p>
              
              <p><strong>Why it matters:</strong> By comparing languages, we discover universal patterns in human language and understand what makes each language unique.</p>
              
              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2_nsXrTr7bA?si=xrL0uUqLktyPz_v-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
             

              <h4>Word Order Typology - How Languages Arrange Words</h4>
              <p>Different languages put Subject (S), Verb (V), and Object (O) in different orders:</p>
              
              <h5>1. SVO - Subject-Verb-Object (42% of languages)</h5>
              <ul>
                <li><strong>Pattern:</strong> Who + Does + What</li>
                <li><strong>Example (English):</strong> "I eat apples"</li>
                <li><strong>Languages:</strong> English, French, Spanish, Mandarin, Russian</li>
                <li><strong>Most common</strong> in European languages</li>
              </ul>

              <h5>2. SOV - Subject-Object-Verb (45% of languages)</h5>
              <ul>
                <li><strong>Pattern:</strong> Who + What + Does</li>
                <li><strong>Example (Japanese):</strong> "I apples eat" (Watashi wa ringo wo taberu)</li>
                <li><strong>Languages:</strong> Japanese, Korean, Turkish, Hindi, Persian</li>
                <li><strong>Actually most common</strong> worldwide!</li>
              </ul>

              <h5>3. VSO - Verb-Subject-Object (9% of languages)</h5>
              <ul>
                <li><strong>Pattern:</strong> Does + Who + What</li>
                <li><strong>Example (Irish):</strong> "Eat I apples"</li>
                <li><strong>Languages:</strong> Irish, Welsh, Arabic, Filipino</li>
                <li><strong>Less common</strong> but still significant</li>
              </ul>

              <h5>4. Other Orders (Very Rare)</h5>
              <ul>
                <li><strong>VOS:</strong> Verb-Object-Subject (Malagasy, Fijian)</li>
                <li><strong>OVS:</strong> Object-Verb-Subject (some Amazonian languages)</li>
                <li><strong>OSV:</strong> Object-Subject-Verb (extremely rare)</li>
              </ul>

              <div className="example-box">
                <h5>Same Sentence, Different Orders</h5>
                <p>"The cat chased the mouse" in different word orders:</p>
                <ul>
                  <li><strong>English (SVO):</strong> The cat chased the mouse</li>
                  <li><strong>Japanese (SOV):</strong> The cat the mouse chased</li>
                  <li><strong>Arabic (VSO):</strong> Chased the cat the mouse</li>
                </ul>
                <p>All mean the same thing, just different arrangements!</p>
              </div>

              <h4>Morphological Typology - How Languages Build Words</h4>
              <p>Remember morphology from Unit 1? Languages differ in how they use morphemes:</p>
              
              <h5>1. Isolating (Analytic) Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> One morpheme = one word</li>
                <li><strong>No inflections:</strong> Words don't change form</li>
                <li><strong>Example (Mandarin):</strong> "wǒ kàn shū" (I see book) - each word is one morpheme</li>
                <li><strong>Languages:</strong> Mandarin, Vietnamese, Thai</li>
                <li><strong>Grammar shown by:</strong> Word order and separate words</li>
              </ul>

              <h5>2. Agglutinating Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Words built by sticking morphemes together</li>
                <li><strong>Clear boundaries:</strong> Easy to see where each morpheme starts/ends</li>
                <li><strong>Example (Turkish):</strong> "evlerimizden" = ev-ler-imiz-den (house-plural-our-from)</li>
                <li><strong>Languages:</strong> Turkish, Finnish, Japanese, Swahili</li>
                <li><strong>Like LEGO:</strong> Each piece has one clear function</li>
              </ul>

              <h5>3. Fusional (Inflectional) Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Morphemes fused together</li>
                <li><strong>One affix = multiple meanings:</strong> Hard to separate</li>
                <li><strong>Example (Spanish):</strong> "hablo" = habl-o (speak-1st.person.singular.present)</li>
                <li><strong>Languages:</strong> Spanish, Russian, Latin, German</li>
                <li><strong>Complex:</strong> One ending shows person, number, tense all at once</li>
              </ul>

              <h5>4. Polysynthetic Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Extremely complex words</li>
                <li><strong>One word = whole sentence:</strong> Incorporates many elements</li>
                <li><strong>Example (Inuktitut):</strong> "tusaatsiarunnanngittualuujunga" (I can't hear very well)</li>
                <li><strong>Languages:</strong> Inuktitut, Mohawk, Yup'ik</li>
                <li><strong>Amazing:</strong> What takes us a sentence, they say in one word!</li>
              </ul>

              <div className="example-box">
                <h5>Comparing Morphological Types</h5>
                <p>"I am going to the houses" in different language types:</p>
                <ul>
                  <li><strong>Isolating (Mandarin):</strong> wǒ qù fángzi (I go house) - 3 separate words</li>
                  <li><strong>Agglutinating (Turkish):</strong> evlere gidiyorum (house-plural-to go-I-present)</li>
                  <li><strong>Fusional (Spanish):</strong> voy a las casas (go-1sg to the-fem-pl house-pl)</li>
                  <li><strong>Polysynthetic:</strong> Might be one very long word!</li>
                </ul>
              </div>

              <h4>Alignment Systems - Marking Subjects and Objects</h4>
              <p>Languages mark who does what in different ways:</p>
              
              <h5>Nominative-Accusative System</h5>
              <ul>
                <li><strong>How it works:</strong> Subject marked same way, object marked differently</li>
                <li><strong>Example (English):</strong>
                  <ul>
                    <li>"He (nominative) sees her (accusative)"</li>
                    <li>"He (nominative) runs"</li>
                  </ul>
                </li>
                <li><strong>Most common:</strong> English, Spanish, Japanese</li>
              </ul>

              <h5>Ergative-Absolutive System</h5>
              <ul>
                <li><strong>How it works:</strong> Object and intransitive subject marked same</li>
                <li><strong>Different from English!</strong> Groups subjects differently</li>
                <li><strong>Languages:</strong> Basque, Georgian, many Australian languages</li>
              </ul>

              <h4>Greenberg's Universals - Patterns Across Languages</h4>
              <p>Linguist Joseph Greenberg found patterns that hold across many languages:</p>
              
              <ul>
                <li><strong>Universal 1:</strong> All languages have vowels and consonants</li>
                <li><strong>Universal 2:</strong> If a language has VSO order, it usually has prepositions (not postpositions)</li>
                <li><strong>Universal 17:</strong> If a language has dominant SOV order, it tends to have postpositions</li>
                <li><strong>Universal 45:</strong> If there are gender distinctions in pronouns, male vs female is always one of them</li>
              </ul>

              <p><strong>Why this matters:</strong> Shows that despite diversity, human languages follow certain patterns!</p>

              <h4>Head-Directionality Parameter</h4>
              <p>Where does the main word (head) go in a phrase?</p>
              
              <ul>
                <li><strong>Head-initial:</strong> Head comes first
                  <ul>
                    <li>English: "eat apples" (verb before object)</li>
                    <li>English: "in the house" (preposition before noun)</li>
                  </ul>
                </li>
                <li><strong>Head-final:</strong> Head comes last
                  <ul>
                    <li>Japanese: "apples eat" (object before verb)</li>
                    <li>Japanese: "house in" (noun before postposition)</li>
                  </ul>
                </li>
              </ul>

              <p><strong>Interesting:</strong> Languages tend to be consistent - if verb comes after object, prepositions often come after nouns too!</p>

              <h4>Why Languages Differ</h4>
              <ul>
                <li><strong>Historical change:</strong> Languages evolve over time</li>
                <li><strong>Language contact:</strong> Borrowing from neighboring languages</li>
                <li><strong>Geographic isolation:</strong> Separated groups develop differently</li>
                <li><strong>Cognitive constraints:</strong> But all fit human brain capabilities</li>
              </ul>

              <div className="example-box">
                <h5>Fun Fact: Language Families</h5>
                <p>Languages that share a common ancestor form families:</p>
                <ul>
                  <li><strong>Indo-European:</strong> English, Spanish, Hindi, Russian (3 billion speakers!)</li>
                  <li><strong>Sino-Tibetan:</strong> Mandarin, Cantonese, Tibetan</li>
                  <li><strong>Niger-Congo:</strong> Swahili, Yoruba, Zulu</li>
                  <li><strong>Austronesian:</strong> Indonesian, Tagalog, Hawaiian</li>
                </ul>
                <p>Languages in the same family often share typological features!</p>
              </div>
            </section>

            <Quiz title="Module 2.3 Quiz" questions={module3Quiz} subject="LS" unitId={2} moduleId={3} />

            
          </div>
  );
};

export default Module2_3;