'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_2: React.FC = () => {
  const module2Quiz = [
    {
      question: "What is the main concern of semantics in linguistics?",
      options: [
        "Sound production mechanisms",
        "Sentence formation rules",
        "Meaning and interpretation of linguistic expressions",
        "Language variation across communities"
      ],
      correctAnswer: 2, explanation: ""
    },
    {
      question: "Which semantic relation exists between 'dog' and 'animal'?",
      options: ["Synonymy", "Antonymy", "Hyponymy", "Meronymy"],
      correctAnswer: 2, explanation: ""
    },
    {
      question: "What does the compositionality principle state?",
      options: [
        "Meaning of whole is derived from parts",
        "Meaning comes from context only",
        "Words have fixed meanings",
        "Grammar determines meaning entirely"
      ],
      correctAnswer: 0, explanation: ""
    },
    {
      question: "What are synonyms?",
      options: [
        "Words with opposite meanings",
        "Words with similar meanings",
        "Words that sound the same",
        "Words from the same category"
      ],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "What is polysemy?",
      options: [
        "Multiple words, one meaning",
        "One word, multiple related meanings",
        "Words that sound identical",
        "Words with no meaning"
      ],
      correctAnswer: 1, explanation: ""
    }
  ];

  return (
    <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Semantics and Semantic Structures</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Semantics?</h3>
              <p>Ever wonder why "bank" can mean a financial institution OR the side of a river? Or why "I'm fine" can mean you're okay OR you're actually upset? That's semantics - the study of meaning in language!</p>
              
              <p><strong>Simple definition:</strong> Semantics is about what words and sentences MEAN, not just what they look like or sound like.</p>
              
              
                <iframe 
                  src="https://www.youtube.com/embed/6geQjY8b7sA?si=m65NZ_9EzFu-hJzK" 
                  title="Introduction to Semantics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
            

              <h4>Types of Meaning</h4>
              
              <h5>1. Lexical Meaning - Word Meaning</h5>
              <ul>
                <li><strong>What it is:</strong> The dictionary definition of a word</li>
                <li><strong>Example:</strong> "dog" = a four-legged domestic animal</li>
                <li><strong>Stays relatively stable</strong> across contexts</li>
              </ul>

              <h5>2. Compositional Meaning - Sentence Meaning</h5>
              <ul>
                <li><strong>What it is:</strong> Meaning built from combining words</li>
                <li><strong>Example:</strong> "big" + "dog" = large canine</li>
                <li><strong>The whole = sum of parts</strong> (usually!)</li>
              </ul>

              <div className="example-box">
                <h5>Compositionality Principle</h5>
                <p>The meaning of a sentence comes from:</p>
                <ul>
                  <li>The meanings of individual words</li>
                  <li>How those words are combined</li>
                </ul>
                <p><strong>Example:</strong> "The cat chased the mouse"</p>
                <ul>
                  <li>We know what "cat", "chased", and "mouse" mean</li>
                  <li>We combine them using syntax rules</li>
                  <li>Result: We understand the whole sentence!</li>
                </ul>
              </div>

              <h4>Semantic Relations - How Words Relate</h4>
              
              <h5>1. Synonymy - Same Meaning</h5>
              <ul>
                <li><strong>Definition:</strong> Words with similar/same meanings</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>big / large</li>
                    <li>happy / joyful</li>
                    <li>start / begin</li>
                  </ul>
                </li>
                <li><strong>Note:</strong> Perfect synonyms are rare! Usually slight differences exist</li>
              </ul>

              <h5>2. Antonymy - Opposite Meaning</h5>
              <ul>
                <li><strong>Definition:</strong> Words with opposite meanings</li>
                <li><strong>Types:</strong>
                  <ul>
                    <li><strong>Gradable:</strong> hot/cold (can be very hot, quite cold)</li>
                    <li><strong>Complementary:</strong> alive/dead (no middle ground)</li>
                    <li><strong>Relational:</strong> parent/child (defined by relationship)</li>
                  </ul>
                </li>
              </ul>

              <h5>3. Hyponymy - Category Relations</h5>
              <ul>
                <li><strong>Definition:</strong> "Is a type of" relationship</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"dog" is a hyponym of "animal" (dog IS A TYPE OF animal)</li>
                    <li>"rose" is a hyponym of "flower"</li>
                    <li>"car" is a hyponym of "vehicle"</li>
                  </ul>
                </li>
                <li><strong>Hypernym:</strong> The general category (animal, flower, vehicle)</li>
                <li><strong>Hyponym:</strong> The specific type (dog, rose, car)</li>
              </ul>

              <h5>4. Meronymy - Part-Whole Relations</h5>
              <ul>
                <li><strong>Definition:</strong> "Is a part of" relationship</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"wheel" is a meronym of "car" (wheel IS PART OF car)</li>
                    <li>"finger" is a meronym of "hand"</li>
                    <li>"chapter" is a meronym of "book"</li>
                  </ul>
                </li>
              </ul>

              <div className="example-box">
                <h5>Practice: Identify the Relation</h5>
                <ul>
                  <li><strong>happy / sad:</strong> Antonymy (opposites)</li>
                  <li><strong>car / vehicle:</strong> Hyponymy (car is a type of vehicle)</li>
                  <li><strong>door / house:</strong> Meronymy (door is part of house)</li>
                  <li><strong>begin / start:</strong> Synonymy (same meaning)</li>
                </ul>
              </div>

              <h4>Polysemy vs Homonymy</h4>
              
              <h5>Polysemy - One Word, Related Meanings</h5>
              <ul>
                <li><strong>Definition:</strong> One word with multiple RELATED meanings</li>
                <li><strong>Example: "head"</strong>
                  <ul>
                    <li>Body part ("my head hurts")</li>
                    <li>Leader ("head of department")</li>
                    <li>Top part ("head of the bed")</li>
                  </ul>
                </li>
                <li><strong>All meanings connected</strong> to the original sense</li>
              </ul>

              <h5>Homonymy - Same Sound, Unrelated Meanings</h5>
              <ul>
                <li><strong>Definition:</strong> Words that sound the same but have UNRELATED meanings</li>
                <li><strong>Example: "bank"</strong>
                  <ul>
                    <li>Financial institution</li>
                    <li>Side of a river</li>
                  </ul>
                </li>
                <li><strong>Example: "bat"</strong>
                  <ul>
                    <li>Flying mammal</li>
                    <li>Sports equipment</li>
                  </ul>
                </li>
                <li><strong>Meanings are NOT connected</strong> - just coincidence!</li>
              </ul>

              <h4>Sense vs Reference</h4>
              
              <h5>Sense - The Concept</h5>
              <ul>
                <li><strong>What it is:</strong> The mental concept or meaning</li>
                <li><strong>Example:</strong> "dog" = four-legged domestic canine</li>
                <li><strong>Abstract and general</strong></li>
              </ul>

              <h5>Reference - The Real Thing</h5>
              <ul>
                <li><strong>What it is:</strong> The actual object in the world</li>
                <li><strong>Example:</strong> "my dog Buddy" = specific dog</li>
                <li><strong>Concrete and specific</strong></li>
              </ul>

              <div className="example-box">
                <h5>Sense vs Reference Example</h5>
                <p>Consider: "The President of the United States"</p>
                <ul>
                  <li><strong>Sense:</strong> The leader of the US government (concept)</li>
                  <li><strong>Reference:</strong> Changes over time (different people)</li>
                  <li>Same sense, different reference in 2020 vs 2024!</li>
                </ul>
              </div>

              <h4>Semantic Features</h4>
              <p>Words can be broken down into smaller meaning components:</p>
              
              <ul>
                <li><strong>"man":</strong> [+human] [+adult] [+male]</li>
                <li><strong>"woman":</strong> [+human] [+adult] [-male]</li>
                <li><strong>"boy":</strong> [+human] [-adult] [+male]</li>
                <li><strong>"dog":</strong> [-human] [+animate] [+four-legged]</li>
              </ul>

              <p>This helps explain why some combinations make sense and others don't:</p>
              <ul>
                <li>"The man is pregnant" (odd - men don't have [+can be pregnant])</li>
                <li>"The rock is sleeping" (odd - rocks aren't [+animate])</li>
              </ul>

              <h4>Thematic Roles - Who Does What</h4>
              <p>In a sentence, nouns play different roles:</p>
              
              <ul>
                <li><strong>Agent:</strong> The doer ("John kicked the ball")</li>
                <li><strong>Patient/Theme:</strong> What's affected ("John kicked the ball")</li>
                <li><strong>Experiencer:</strong> Who experiences ("Mary heard the noise")</li>
                <li><strong>Instrument:</strong> Tool used ("She cut it with a knife")</li>
                <li><strong>Location:</strong> Where it happens ("They met in Paris")</li>
                <li><strong>Goal:</strong> Destination ("He went to school")</li>
              </ul>

              <h4>Entailment and Presupposition</h4>
              
              <h5>Entailment - Logical Consequence</h5>
              <ul>
                <li><strong>Definition:</strong> If A is true, B must be true</li>
                <li><strong>Example:</strong> "John killed the spider" entails "The spider died"</li>
                <li><strong>Can't be:</strong> "John killed the spider, but it didn't die"</li>
              </ul>

              <h5>Presupposition - Background Assumption</h5>
              <ul>
                <li><strong>Definition:</strong> What must be true for the sentence to make sense</li>
                <li><strong>Example:</strong> "John stopped smoking"</li>
                <li><strong>Presupposes:</strong> John used to smoke</li>
                <li><strong>Stays true even in negative:</strong> "John didn't stop smoking" still presupposes he smoked</li>
              </ul>
            </section>

            <Quiz title="Module 2.2 Quiz" questions={module2Quiz} subject="LS" unitId={2} moduleId={2} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://plato.stanford.edu/entries/semantics/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia - Semantics</a></li>
                <li><a href="https://www.linguisticsociety.org/resource/semantics" target="_blank" rel="noopener noreferrer">Linguistic Society - Semantics</a></li>
                <li><a href="https://www.thoughtco.com/semantics-linguistics-1692080" target="_blank" rel="noopener noreferrer">Introduction to Semantics</a></li>
              </ul>
            </div>

            
          </div>
  );
};

export default Module2_2;