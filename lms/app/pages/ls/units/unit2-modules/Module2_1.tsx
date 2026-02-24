'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_1: React.FC = () => {
  const module1Quiz = [
    {
      question: "What is the primary focus of syntax in linguistics?",
      options: [
        "Study of meaning in language",
        "Study of sound systems",
        "Study of sentence structure and word arrangement",
        "Study of language acquisition"
      ],
      correctAnswer: 2, explanation: ""
    },
    {
      question: "Which of the following is a key component of phrase structure grammar?",
      options: [
        "Phonological rules",
        "Rewrite rules and phrase structure trees",
        "Semantic feature analysis",
        "Pragmatic inference"
      ],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "What does the term 'constituency' refer to in syntax?",
      options: [
        "The meaning of individual words",
        "Groups of words that function as a unit",
        "The sound patterns of language",
        "The social context of language use"
      ],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "What is recursion in syntax?",
      options: [
        "Repeating the same word",
        "Embedding structures within structures",
        "Changing word order",
        "Adding prefixes"
      ],
      correctAnswer: 1, explanation: ""
    },
    {
      question: "Which is a major phrasal category?",
      options: [
        "Noun Phrase (NP)",
        "Verb Phrase (VP)",
        "Prepositional Phrase (PP)",
        "All of the above"
      ],
      correctAnswer: 3, explanation: ""
    }
  ];

  return (
    <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.1</div>
              <div className="lesson-title-main">
                <h1>Syntax and Syntactic Structures</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Syntax?</h3>
              <p>Have you ever wondered why "The cat chased the mouse" makes sense, but "Cat the mouse the chased" doesn't? That's syntax! Syntax is the set of rules that determines how words combine to form grammatical sentences.</p>
              
              <p><strong>Think of it like building with blocks:</strong> You can't just throw blocks together randomly. There are rules about which blocks connect and in what order. Similarly, words must be arranged in specific patterns to make sense.</p>
              
              
                <iframe 
                  src="https://www.youtube.com/embed/tZTGglxxS7A?si=kYXwE5408XcFxEjw" 
                  title="Introduction to Syntax"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
            

              <h4>Why Syntax Matters</h4>
              <ul>
                <li><strong>Word order changes meaning:</strong> "The dog bit the man" vs "The man bit the dog"</li>
                <li><strong>Grammar makes communication clear:</strong> Without rules, we couldn't understand each other</li>
                <li><strong>Every language has syntax:</strong> But the rules differ across languages</li>
              </ul>

              <h4>Basic Building Blocks: Phrases</h4>
              <p>Sentences are made of smaller units called phrases. Think of phrases as teams of words that work together:</p>
              
              <h5>1. Noun Phrase (NP) - The "Thing" Team</h5>
              <ul>
                <li><strong>What it is:</strong> A group of words centered around a noun</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"the big dog" (article + adjective + noun)</li>
                    <li>"my friend" (possessive + noun)</li>
                    <li>"students in the class" (noun + prepositional phrase)</li>
                  </ul>
                </li>
                <li><strong>Job in sentence:</strong> Usually the subject or object</li>
              </ul>

              <h5>2. Verb Phrase (VP) - The "Action" Team</h5>
              <ul>
                <li><strong>What it is:</strong> A group of words centered around a verb</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"runs quickly" (verb + adverb)</li>
                    <li>"ate the pizza" (verb + noun phrase)</li>
                    <li>"is sleeping" (auxiliary + verb)</li>
                  </ul>
                </li>
                <li><strong>Job in sentence:</strong> Tells what the subject does</li>
              </ul>

              <h5>3. Prepositional Phrase (PP) - The "Location/Relation" Team</h5>
              <ul>
                <li><strong>What it is:</strong> Preposition + noun phrase</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"in the house" (location)</li>
                    <li>"after dinner" (time)</li>
                    <li>"with my friend" (accompaniment)</li>
                  </ul>
                </li>
                <li><strong>Job in sentence:</strong> Adds extra information</li>
              </ul>

              <div className="example-box">
                <h5>Sentence Breakdown Example</h5>
                <p>Let's break down: "The happy student read a book in the library"</p>
                <ul>
                  <li><strong>Noun Phrase 1 (Subject):</strong> "The happy student"</li>
                  <li><strong>Verb Phrase:</strong> "read a book in the library"</li>
                  <li><strong>Noun Phrase 2 (Object):</strong> "a book"</li>
                  <li><strong>Prepositional Phrase:</strong> "in the library"</li>
                </ul>
                <p>Structure: NP + VP (which contains another NP and PP)</p>
              </div>

              <h4>Sentence Patterns in English</h4>
              <p>English follows a basic pattern: <strong>Subject + Verb + Object (SVO)</strong></p>
              
              <ul>
                <li><strong>Subject:</strong> Who/what does the action ("The cat")</li>
                <li><strong>Verb:</strong> The action ("chased")</li>
                <li><strong>Object:</strong> Who/what receives the action ("the mouse")</li>
              </ul>

              <h5>Common Sentence Types:</h5>
              <ul>
                <li><strong>Simple:</strong> One subject + one verb
                  <ul><li>Example: "Birds fly."</li></ul>
                </li>
                <li><strong>Compound:</strong> Two simple sentences joined
                  <ul><li>Example: "Birds fly and fish swim."</li></ul>
                </li>
                <li><strong>Complex:</strong> Main clause + dependent clause
                  <ul><li>Example: "Birds fly when the weather is nice."</li></ul>
                </li>
              </ul>

              <h4>Recursion - The Magic of Infinite Sentences</h4>
              <p>Here's something amazing: You can keep adding to sentences forever!</p>
              
              <ul>
                <li>"The cat sat on the mat."</li>
                <li>"The cat that I saw sat on the mat."</li>
                <li>"The cat that I saw yesterday sat on the mat that was red."</li>
                <li>"The cat that I saw yesterday in the park sat on the mat that was red and soft."</li>
              </ul>
              
              <p><strong>This is recursion:</strong> Embedding phrases within phrases, creating potentially infinite sentences!</p>

              <h4>Constituency Tests - Proving Phrases Exist</h4>
              <p>How do we know words form a phrase? We use tests:</p>
              
              <h5>1. Substitution Test</h5>
              <ul>
                <li>Can you replace the group with one word?</li>
                <li>"The big dog" → "It" (Yes! It's a phrase)</li>
              </ul>

              <h5>2. Movement Test</h5>
              <ul>
                <li>Can you move the group together?</li>
                <li>"I saw [the big dog] yesterday" → "Yesterday, I saw [the big dog]"</li>
              </ul>

              <h5>3. Coordination Test</h5>
              <ul>
                <li>Can you join it with "and"?</li>
                <li>"[the big dog] and [the small cat]" (Yes! Both are phrases)</li>
              </ul>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <p>Test if "very quickly" is a phrase in: "She ran very quickly"</p>
                <ul>
                  <li><strong>Substitution:</strong> "She ran fast" ✓</li>
                  <li><strong>Movement:</strong> "Very quickly, she ran" ✓</li>
                  <li><strong>Coordination:</strong> "She ran very quickly and quite slowly" ✓</li>
                  <li><strong>Result:</strong> Yes, it's a phrase!</li>
                </ul>
              </div>

              <h4>Grammatical Relations</h4>
              <ul>
                <li><strong>Subject:</strong> The doer ("John kicked the ball")</li>
                <li><strong>Direct Object:</strong> What's affected ("John kicked the ball")</li>
                <li><strong>Indirect Object:</strong> To/for whom ("John gave Mary the book")</li>
                <li><strong>Complement:</strong> Completes meaning ("She is happy")</li>
              </ul>

              <h4>Why Different Languages, Different Rules?</h4>
              <ul>
                <li><strong>English:</strong> Subject-Verb-Object ("I eat apples")</li>
                <li><strong>Japanese:</strong> Subject-Object-Verb ("I apples eat")</li>
                <li><strong>Arabic:</strong> Verb-Subject-Object ("Eat I apples")</li>
              </ul>
              <p>All are correct in their own languages! Syntax rules vary, but every language has them.</p>
            </section>

            <Quiz title="Module 2.1 Quiz" questions={module1Quiz} subject="LS" unitId={2} moduleId={1} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.thoughtco.com/syntax-grammar-1692182" target="_blank" rel="noopener noreferrer">Introduction to Syntax</a></li>
                <li><a href="https://www.linguisticsociety.org/resource/syntax" target="_blank" rel="noopener noreferrer">Linguistic Society - Syntax Resources</a></li>
                <li><a href="https://plato.stanford.edu/entries/syntax/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia - Syntax</a></li>
              </ul>
            </div>

            
          </div>
  );
};

export default Module2_1;