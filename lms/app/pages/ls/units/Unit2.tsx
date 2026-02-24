"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Quiz from '../components/Quiz';
import Module2_1 from './unit2-modules/Module2_1';
import Module2_2 from './unit2-modules/Module2_2';

const Unit2: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentModule, setCurrentModuleState] = useState<number>(1);

  const module1Quiz = [
    { question: "What is the primary focus of syntax in linguistics?", options: ["Study of meaning in language","Study of sound systems","Study of sentence structure and word arrangement","Study of language acquisition"], correctAnswer: 2, explanation: "" },
    { question: "Which of the following is a key component of phrase structure grammar?", options: ["Phonological rules","Rewrite rules and phrase structure trees","Semantic feature analysis","Pragmatic inference"], correctAnswer: 1, explanation: "" },
    { question: "What does the term 'constituency' refer to in syntax?", options: ["The meaning of individual words","Groups of words that function as a unit","The sound patterns of language","The social context of language use"], correctAnswer: 1, explanation: "" },
    { question: "What is recursion in syntax?", options: ["Repeating the same word","Embedding structures within structures","Changing word order","Adding prefixes"], correctAnswer: 1, explanation: "" },
    { question: "Which is a major phrasal category?", options: ["Noun Phrase (NP)","Verb Phrase (VP)","Prepositional Phrase (PP)","All of the above"], correctAnswer: 3, explanation: "" }
  ];

  const module2Quiz = [
    { question: "What is the main concern of semantics in linguistics?", options: ["Sound production mechanisms","Sentence formation rules","Meaning and interpretation of linguistic expressions","Language variation across communities"], correctAnswer: 2, explanation: "" },
    { question: "Which semantic relation exists between 'dog' and 'animal'?", options: ["Synonymy","Antonymy","Hyponymy","Meronymy"], correctAnswer: 2, explanation: "" },
    { question: "What does the compositionality principle state?", options: ["Meaning of whole is derived from parts","Meaning comes from context only","Words have fixed meanings","Grammar determines meaning entirely"], correctAnswer: 0, explanation: "" },
    { question: "What are synonyms?", options: ["Words with opposite meanings","Words with similar meanings","Words that sound the same","Words from the same category"], correctAnswer: 1, explanation: "" },
    { question: "What is polysemy?", options: ["Multiple words, one meaning","One word, multiple related meanings","Words that sound identical","Words with no meaning"], correctAnswer: 1, explanation: "" }
  ];

  const module3Quiz = [
    { question: "Which word order type is most common among world languages?", options: ["SOV (Subject-Object-Verb)","SVO (Subject-Verb-Object)","VSO (Verb-Subject-Object)","VOS (Verb-Object-Subject)"], correctAnswer: 0, explanation: "" },
    { question: "What is an isolating language?", options: ["Language with complex word structure","Language with one morpheme per word","Language with no grammar","Language spoken in isolation"], correctAnswer: 1, explanation: "" },
    { question: "In language typology, what does 'alignment' refer to?", options: ["Word order patterns","How languages mark grammatical relations","Sound change processes","Semantic categorization"], correctAnswer: 1, explanation: "" },
    { question: "Which language is an example of SOV word order?", options: ["English","Japanese","Arabic","French"], correctAnswer: 1, explanation: "" },
    { question: "What are Greenberg's universals?", options: ["Universal grammar rules","Cross-linguistic patterns and tendencies","English grammar rules","Phonetic symbols"], correctAnswer: 1, explanation: "" }
  ];

  const unitQuiz = [
    ...module1Quiz.slice(0, 3),
    ...module2Quiz.slice(0, 3),
    ...module3Quiz.slice(0, 3),
    { question: "What is the difference between syntax and semantics?", options: ["Syntax deals with form, semantics with meaning","Syntax deals with meaning, semantics with form","Both deal with the same aspects","Neither deals with language structure"], correctAnswer: 0, explanation: "" }
  ];

  const parseModuleParam = (param: string | null) => {
    if (!param) return 1;
    const parts = param.split('.');
    if (parts.length === 2 && parts[0] === '2') {
      const idx = parseInt(parts[1], 10);
      if (!isNaN(idx) && idx >= 1 && idx <= 4) return idx;
    }
    const asNum = parseInt(param, 10);
    if (!isNaN(asNum) && asNum >= 1 && asNum <= 4) return asNum;
    return 1;
  };

  useEffect(() => {
    const moduleParam = searchParams?.get('module');
    const idx = parseModuleParam(moduleParam);
    setCurrentModuleState(idx);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const setCurrentModule = (m: number) => {
    setCurrentModuleState(m);
    router.push(`/ls?module=2.${m}`);
  };

  const onBack = () => router.push('/ls');

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module2_1 />;

      case 2:
        return <Module2_2 />;

      case 3:
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/2_nsXrTr7bA?si=xrL0uUqLktyPz_v-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{width: '550px', height: '325px'}}></iframe>
            </section>

            <Quiz title="Module 2.3 Quiz" questions={module3Quiz} subject="LS" unitId={2} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Semantics</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Unit 2 Quiz →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>Unit 2 Comprehensive Assessment</h1>
              </div>
            </div>
            <section className="content-section">
              <h3>Test Your Knowledge of Unit 2</h3>
              <p>This comprehensive quiz covers all topics from Unit 2: Syntax and Semantics.</p>
            </section>

            <Quiz title="Unit 2 Comprehensive Quiz" questions={unitQuiz} subject="LS" unitId={2} moduleId={4} />

            <div className="reference-section">
              <h3>Unit 2 Complete - Additional Resources</h3>
              <ul>
                <li><a href="https://www.cambridge.org/core/books/how-languages-work/" target="_blank" rel="noopener noreferrer">How Languages Work - Carol Genetti</a></li>
                <li><a href="https://ocw.mit.edu/courses/linguistics-and-philosophy/" target="_blank" rel="noopener noreferrer">MIT OpenCourseWare - Linguistics</a></li>
                <li><a href="https://www.youtube.com/c/LingSpace" target="_blank" rel="noopener noreferrer">The Ling Space - YouTube Channel</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Language Typology</button>
              <button onClick={onBack} className="next-module-btn">Back to Overview →</button>
            </div>
          </div>
        );

      default:
        return <div>Module not found</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit2;
