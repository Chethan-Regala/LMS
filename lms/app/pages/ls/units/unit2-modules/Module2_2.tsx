'use client';
import React from 'react';

const Module2_2: React.FC = () => {
  return (
    <>
      <style jsx>{`
        body { font-family: 'Segoe UI', sans-serif; line-height: 1.8; color: #2c3e50; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; font-size: 16px; }
        .container { max-width: 1400px; margin: 0 auto; background: white; padding: 50px; border-radius: 15px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 10px; margin-bottom: 40px; }
        .header h1 { font-size: 2.5em; margin-bottom: 15px; }
        .subtitle { font-size: 1.1em; opacity: 0.9; margin-bottom: 20px; }
        .meta-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 25px; }
        .meta-item { background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; }
        .meta-item span { display: block; font-size: 0.9em; opacity: 0.8; margin-bottom: 5px; }
        .section { margin-bottom: 50px; scroll-margin-top: 20px; }
        .section h2 { color: #2c3e50; font-size: 2em; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 3px solid #3498db; display: flex; align-items: center; gap: 15px; }
        .icon { font-size: 1.2em; }
        .learning-objectives { background: white; padding: 20px; border-radius: 8px; }
        .learning-objectives ul { list-style: none; counter-reset: objectives; margin-top: 15px; }
        .learning-objectives li { counter-increment: objectives; margin-bottom: 15px; padding-left: 10px; position: relative; line-height: 1.7; }
        .theory-content { line-height: 1.9; }
        .theory-content h3 { color: #2c3e50; font-size: 1.8em; margin-top: 40px; margin-bottom: 20px; }
        .theory-content h4 { color: #34495e; font-size: 1.4em; margin-top: 30px; margin-bottom: 15px; }
        .theory-content p { margin-bottom: 20px; text-align: justify; }
        .definition-box { background: #e3f2fd; border-left: 5px solid #2196f3; padding: 20px; margin: 25px 0; border-radius: 5px; }
        .example-box { background: #fff3e0; border-left: 5px solid #ff9800; padding: 20px; margin: 25px 0; border-radius: 5px; }
        .highlight-box { background: #f3e5f5; border-left: 5px solid #9c27b0; padding: 20px; margin: 25px 0; border-radius: 5px; }
        .image-container { text-align: center; margin: 30px 0; }
        .image-caption { margin-top: 15px; font-style: italic; color: #666; font-size: 0.95em; }
        .svg-diagram { max-width: 100%; height: auto; }
        .relation-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0; }
        .relation-card { background: #f8f9fa; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .relation-card h4 { color: #667eea; margin-bottom: 10px; }
        .relation-card .example { background: white; padding: 10px; border-radius: 5px; margin-top: 10px; font-size: 0.9em; }
        .diagram-container { background: #f8f9fa; padding: 30px; border-radius: 10px; margin: 30px 0; }
        .diagram-title { font-weight: bold; font-size: 1.1em; color: #2c3e50; margin-bottom: 20px; text-align: center; }
        .video-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin: 25px 0; }
        .video-card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; }
        .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        .video-info { padding: 20px; }
        .video-info h4 { color: #667eea; margin-bottom: 10px; font-size: 1.2em; }
        .video-info p { color: #666; font-size: 0.95em; line-height: 1.6; }
        .quick-reference { background: white; padding: 25px; border-radius: 10px; }
        .quick-reference h3 { color: #667eea; margin-bottom: 20px; text-align: center; }
        .quick-reference table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        .quick-reference th, .quick-reference td { padding: 12px; border: 1px solid #ddd; text-align: left; }
        .quick-reference th { background: #667eea; color: white; font-weight: bold; }
        .quick-reference tr:nth-child(even) { background: #f9f9f9; }
        .exam-section { background: #f8f9fa; padding: 25px; border-radius: 10px; }
        .exam-question { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #667eea; }
        .exam-question h4 { color: #2c3e50; margin-bottom: 15px; }
        .marks { float: right; background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9em; }
        .toggle-answer { background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 15px; }
        .toggle-answer:hover { background: #764ba2; }
        .model-answer { display: none; background: #e8f5e9; padding: 20px; margin-top: 15px; border-radius: 5px; border-left: 4px solid #4caf50; }
        .summary-section { background: #f8f9fa; padding: 25px; border-radius: 10px; }
        .summary-section h3 { color: #667eea; margin-bottom: 25px; text-align: center; font-size: 1.5em; }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .summary-card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .summary-card h4 { color: #2c3e50; margin-bottom: 15px; font-size: 1.2em; }
        .summary-card ul { list-style: none; padding: 0; }
        .summary-card li { padding: 8px 0; border-bottom: 1px solid #eee; }
        .summary-card li:last-child { border-bottom: none; }
      `}</style>
      <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>📚 Semantics and Semantic Structures</h1>
        <div className="subtitle">
          UNIT-2: Syntax and Semantics | Principles and Practices of Human Communication
        </div>
        <div className="meta-info">
          <div className="meta-item">
            <span>📖 Topic:</span>
            Semantics and Semantic Structures
          </div>
          <div className="meta-item">
            <span>⏱️ Duration:</span>
            4-5 Hours
          </div>
          <div className="meta-item">
            <span>🎯 Level:</span>
            Undergraduate
          </div>
          <div className="meta-item">
            <span>📊 Marks Weightage:</span>
            15-20%
          </div>
        </div>
      </div>
      {/* Learning Objectives Section */}
      <div className="section">
        <h2>
          <span className="icon">🎯</span>
          Learning Objectives
        </h2>
        <div className="learning-objectives">
          <p style={{ marginBottom: '15px', fontWeight: 'bold', color: '#2a5298' }}>
            By the end of this module, you will be able to:
          </p>
          <ul>
            <li>
              <strong>LO1:</strong>
              Define semantics and distinguish between different types of meaning (lexical, grammatical, and contextual) with appropriate examples from English and other languages.
            </li>
            <li>
              <strong>LO2:</strong>
              Identify and analyze semantic relations including synonymy, antonymy, hyponymy, meronymy, and polysemy in lexical items with 90% accuracy.
            </li>
            <li>
              <strong>LO3:</strong>
              Apply componential analysis to decompose word meanings into semantic features and explain how semantic components distinguish between related lexical items.
            </li>
            <li>
              <strong>LO4:</strong>
              Analyze sentences using semantic roles (thematic roles) such as Agent, Patient, Theme, Experiencer, and Instrument to understand argument structure.
            </li>
            <li>
              <strong>LO5:</strong>
              Explain truth-conditional semantics and evaluate how sentence meaning relates to truth conditions and states of affairs in the world.
            </li>
          </ul>
        </div>
      </div>
      {/* Theory Content Section */}
      <div className="section">
        <h2><span className="icon">📖</span>Theory Content</h2>
        <div className="theory-content">
          <h3>1. Introduction to Semantics</h3>
          <p><strong>Semantics</strong> is the branch of linguistics concerned with the study of meaning in language. It explores how words, phrases, sentences, and discourses convey meaning, and how speakers use language to represent the world around them. The term "semantics" comes from the Greek word "semantikos," meaning "significant" or "meaningful."</p>
          <div className="definition-box">
            <strong>Definition:</strong> Semantics is the systematic study of meaning in language, investigating the relationship between linguistic expressions (words, phrases, sentences) and what they represent in the external world or in the minds of speakers.
          </div>
          <p>The study of semantics addresses fundamental questions such as: What is meaning? How do words relate to the world? How do we understand sentences we've never heard before? These questions have occupied philosophers and linguists for centuries, leading to various theoretical approaches including referential theory, conceptualist theory, and truth-conditional semantics.</p>
          <div className="image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ogden_semiotic_triangle.svg/800px-Ogden_semiotic_triangle.svg.png" alt="Ogden's Semantic Triangle" className="svg-diagram" style={{ maxWidth: '500px' }} />
            <div className="image-caption">Figure 1: Ogden's Semantic Triangle showing the relationship between Symbol (word), Thought/Reference (concept), and Referent (object in the world)</div>
          </div>
          <h3>2. Types of Meaning</h3>
          <p>Linguists distinguish between several types of meaning in language. Understanding these distinctions is crucial for analyzing how communication works at different levels.</p>
          <h4>2.1 Lexical Meaning</h4>
          <p><strong>Lexical meaning</strong> refers to the meaning of individual words (lexemes) as they are stored in our mental lexicon. This is the inherent, dictionary-like meaning of words that allows us to understand and use vocabulary appropriately. Lexical meaning is often further divided into:</p>
          <ul style={{ marginLeft: '30px', marginBottom: '15px' }}>
            <li><strong>Denotation (referential meaning):</strong> The literal, dictionary definition of a word—the set of entities it refers to in the world. For example, the denotation of "dog" is the set of all dogs in the world.</li>
            <li><strong>Connotation (associative meaning):</strong> The emotional, cultural, or social associations that a word carries beyond its literal meaning. For example, "home" connotes warmth, safety, and family, not just "a place where one lives."</li>
          </ul>
          <h4>2.2 Grammatical Meaning</h4>
          <p><strong>Grammatical meaning</strong> (also called structural meaning) is the meaning conveyed by grammatical elements such as inflections, word order, and function words. It includes tense markers (past, present, future), number (singular, plural), case, aspect, and grammatical relations like subject and object. For example, the -ed ending in English verbs carries the grammatical meaning of past tense.</p>
          <div className="example-box">
            <strong>Examples of Grammatical Meaning:</strong><br />
            • "walk<strong>ed</strong>" = past tense (action completed in the past)<br />
            • "book<strong>s</strong>" = plural (more than one book)<br />
            • "<strong>the</strong> book" = definite (specific, known referent)
          </div>
          <h3>3. Semantic Relations</h3>
          <p>Words in a language do not exist in isolation; they are related to each other in systematic ways. <strong>Semantic relations</strong> (also called sense relations or lexical relations) describe the various relationships between word meanings. Understanding these relations is essential for vocabulary acquisition, dictionary compilation, and natural language processing.</p>
          <div className="relation-grid">
            <div className="relation-card">
              <h4>🔹 Synonymy</h4>
              <p>Words that have the same or nearly the same meaning in at least some contexts.</p>
              <div className="example"><strong>Examples:</strong> big/large, begin/commence, happy/joyful, buy/purchase</div>
            </div>
            <div className="relation-card">
              <h4>🔹 Antonymy</h4>
              <p>Words that have opposite meanings. Types include gradable (hot/cold), complementary (alive/dead), and relational (buy/sell).</p>
              <div className="example"><strong>Examples:</strong> tall/short, open/closed, husband/wife, above/below</div>
            </div>
            <div className="relation-card">
              <h4>🔹 Hyponymy</h4>
              <p>A hierarchical relationship where one word (hyponym) is a type of another word (hypernym/superordinate).</p>
              <div className="example"><strong>Examples:</strong> rose/flower, dog/animal, sedan/vehicle, oak/tree</div>
            </div>
            <div className="relation-card">
              <h4>🔹 Meronymy</h4>
              <p>A part-whole relationship where one word denotes a part of what another word denotes.</p>
              <div className="example"><strong>Examples:</strong> wheel/car, finger/hand, chapter/book, leaf/tree</div>
            </div>
            <div className="relation-card">
              <h4>🔹 Polysemy</h4>
              <p>When a single word has multiple related meanings or senses.</p>
              <div className="example"><strong>Examples:</strong> "head" (body part, leader, top of a list), "run" (move fast, operate, flow)</div>
            </div>
            <div className="relation-card">
              <h4>🔹 Homonymy</h4>
              <p>Words that are pronounced the same (homophones) or spelled the same (homographs) but have unrelated meanings.</p>
              <div className="example"><strong>Examples:</strong> bank (river)/bank (financial), bat (animal)/bat (sports equipment)</div>
            </div>
          </div>
          <h3>4. Componential Analysis</h3>
          <p><strong>Componential analysis</strong> (also called semantic feature analysis or semantic decomposition) is a method of analyzing word meaning by breaking it down into smaller, universal semantic components or features. This approach treats word meanings as composed of atomic semantic units that can be represented using binary features (positive [+] or negative [-]).</p>
          <div className="definition-box">
            <strong>Definition:</strong> Componential analysis is a theoretical approach in semantics that analyzes the meaning of words into their smallest semantic components (features), typically represented as binary oppositions like [±ANIMATE], [±HUMAN], [±MALE], etc.
          </div>
          <p>The method was developed by structural linguists in the 1950s and 1960s, influenced by the work of anthropologists like Franz Boas and Roman Jakobson. It provides a way to systematically distinguish between related words and predict semantic patterns across languages.</p>
          <div className="highlight-box">
            <strong>Common Semantic Features:</strong><br />
            • [±ANIMATE] – living vs. non-living<br />
            • [±HUMAN] – human vs. non-human<br />
            • [±MALE] – male vs. female<br />
            • [±ADULT] – adult vs. young<br />
            • [±COUNT] – countable vs. uncountable<br />
            • [±CONCRETE] – physical vs. abstract
          </div>
          <div className="diagram-container">
            <div className="diagram-title">Figure 3: Componential Analysis Matrix</div>
            <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '80%' }}>
              <tbody>
                <tr style={{ background: '#667eea', color: 'white' }}>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>Word</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>[ANIMATE]</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>[HUMAN]</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>[MALE]</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>[ADULT]</th>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>man</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>woman</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>boy</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>girl</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>dog</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>+</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>±</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>±</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>table</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>−</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>5. Semantic Roles (Thematic Roles)</h3>
          <p><strong>Semantic roles</strong> (also called thematic roles or theta roles) describe the semantic relationship between a predicate (typically a verb) and its arguments (typically noun phrases). They represent the underlying semantic functions that participants play in events or states described by sentences, independent of their syntactic positions.</p>
          <div className="definition-box">
            <strong>Definition:</strong> Semantic roles are abstract semantic relations that arguments bear to their predicates. They capture the common semantic properties of noun phrases with respect to the action or state described by the verb, regardless of their grammatical function (subject, object, etc.).
          </div>
          <p>The concept of semantic roles was developed by linguists like Charles Fillmore (Case Grammar, 1968) and Jeffrey Gruber, and later integrated into Government and Binding Theory by Noam Chomsky. Semantic roles help explain why certain sentences are grammatical while others are not, and how sentences with different syntactic structures can have similar meanings.</p>
          <div className="highlight-box">
            <strong>Major Semantic Roles:</strong><br /><br />
            <strong>AGENT:</strong> The entity that performs the action intentionally. (e.g., "<em>John</em> kicked the ball.")<br /><br />
            <strong>PATIENT:</strong> The entity that undergoes the action and experiences a change of state. (e.g., "John kicked <em>the ball</em>.")<br /><br />
            <strong>THEME:</strong> The entity that is moved or affected by the action but doesn't necessarily change state. (e.g., "John sent <em>a letter</em> to Mary.")<br /><br />
            <strong>EXPERIENCER:</strong> The entity that experiences a psychological state or perception. (e.g., "<em>Mary</em> saw the movie.")<br /><br />
            <strong>BENEFICIARY:</strong> The entity for whose benefit the action is performed. (e.g., "John bought a gift <em>for Mary</em>.")<br /><br />
            <strong>INSTRUMENT:</strong> The means by which the action is performed. (e.g., "John cut the rope <em>with a knife</em>.")<br /><br />
            <strong>LOCATION:</strong> The place where the action occurs. (e.g., "The book is <em>on the table</em>.")<br /><br />
            <strong>GOAL:</strong> The endpoint or destination of movement. (e.g., "John went <em>to Paris</em>.")<br /><br />
            <strong>SOURCE:</strong> The starting point or origin of movement. (e.g., "John came <em>from London</em>.")
          </div>
          <div className="example-box">
            <strong>Semantic Role Analysis Examples:</strong><br /><br />
            1. "<strong>The chef</strong> cooked <strong>a delicious meal</strong> <strong>for the guests</strong>."<br />
            • AGENT: The chef<br />
            • THEME: a delicious meal<br />
            • BENEFICIARY: for the guests<br /><br />
            2. "<strong>The dog</strong> chased <strong>the cat</strong> <strong>into the garden</strong>."<br />
            • AGENT: The dog<br />
            • THEME: the cat<br />
            • GOAL: into the garden<br /><br />
            3. "<strong>Sarah</strong> received <strong>a letter</strong> <strong>from her friend</strong>."<br />
            • EXPERIENCER: Sarah<br />
            • THEME: a letter<br />
            • SOURCE: from her friend
          </div>
          <h3>6. Truth-Conditional Semantics</h3>
          <p><strong>Truth-conditional semantics</strong> (also called formal semantics or model-theoretic semantics) is an approach to semantics that defines the meaning of a sentence in terms of the conditions under which it would be true. This approach, pioneered by philosopher Richard Montague in the 1970s, applies tools from formal logic and mathematics to natural language semantics.</p>
          <div className="definition-box">
            <strong>Core Principle:</strong> To know the meaning of a sentence is to know what the world would have to be like for that sentence to be true. The meaning of a sentence = its truth conditions.
          </div>
          <p>In truth-conditional semantics, the meaning of a declarative sentence is identified with its truth conditions—the state of affairs in the world that would make the sentence true or false. For example, the sentence "Snow is white" is true if and only if snow is indeed white in the actual world. This approach treats meaning as a mapping from expressions to their extensions (what they refer to) in a model or possible world.</p>
          <div className="highlight-box">
            <strong>Truth Conditions Examples:</strong><br /><br />
            • "The cat is on the mat" is TRUE if and only if there exists a cat and there exists a mat, and the cat is positioned on top of the mat.<br /><br />
            • "All birds can fly" is TRUE if and only if for every entity that is a bird, that entity has the ability to fly.<br /><br />
            • "John loves Mary" is TRUE if and only if the individual named John stands in the relation of loving to the individual named Mary.
          </div>
          <p>Truth-conditional semantics has been highly influential in linguistics and philosophy of language. It provides a rigorous formal framework for analyzing quantifiers, modality, tense, and other complex linguistic phenomena. However, critics note that this approach struggles with non-declarative sentences (questions, commands), metaphors, and expressions of subjective attitude.</p>
          <div className="example-box">
            <strong>Entailment and Presupposition:</strong><br /><br />
            Two important concepts in truth-conditional semantics are:<br /><br />
            <strong>Entailment:</strong> Sentence A entails Sentence B if whenever A is true, B must also be true.<br />
            • "John killed the wasp" entails "The wasp died."<br /><br />
            <strong>Presupposition:</strong> Sentence A presupposes Sentence B if B must be true for A to have a truth value.<br />
            • "John stopped smoking" presupposes "John used to smoke."
          </div>
        </div>
      </div>
      {/* Video Resources Section */}
      <div className="section">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
          <span className="text-2xl">🎥</span>
          Video Resources
        </h2>
        <p className="mb-8 text-gray-600">
          Watch these educational videos to deepen your understanding of semantics and semantic structures:
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6geQjY8b7sA?si=xB2lNEspaXJ0WEYo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <div className="video-info">
              <h4>Introduction to Semantics</h4>
              <p>This video provides a comprehensive overview of semantics, covering key concepts like meaning, reference, and sense relations in linguistics.</p>
            </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZSeen8-9v0?si=T8LdNbsLnM_71HRR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="video-info">
              <h4>Semantic Relations Explained</h4>
              <p>Learn about synonymy, antonymy, hyponymy, and other semantic relations with clear examples and visual explanations.</p>
            </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTUwds7SjL8?si=lVSBjv1QoEoWP8Vb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <div className="video-info">
              <h4>Semantic Roles in Syntax</h4>
              <p>An in-depth explanation of thematic roles including Agent, Patient, Theme, Experiencer, and their role in sentence structure.</p>
            </div>
        
        
      </div>
      
      {/* Visual Diagrams Section */}
      <div className="section">
        <h2><span className="icon">📊</span>Visual Diagrams & Infographics</h2>
        <div className="diagram-container">
          <div className="diagram-title">Figure 6: Semantic Relations Network</div>
          <div style={{ background: '#fffbea', border: '2px solid #ddd', padding: '30px', borderRadius: '10px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', color: '#666' }}>Lexical Relations</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#667eea', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', minWidth: '120px', textAlign: 'center' }}>Synonymy</div>
                <div style={{ flex: 1, height: '2px', background: '#333' }}></div>
                <div style={{ background: '#e8eaf6', border: '2px solid #667eea', padding: '10px 20px', borderRadius: '5px', minWidth: '150px', textAlign: 'center' }}>big, large, huge</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#764ba2', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', minWidth: '120px', textAlign: 'center' }}>Antonymy</div>
                <div style={{ flex: 1, height: '2px', background: '#333' }}></div>
                <div style={{ background: '#f3e5f5', border: '2px solid #764ba2', padding: '10px 20px', borderRadius: '5px', minWidth: '150px', textAlign: 'center' }}>hot ↔ cold</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#f39c12', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', minWidth: '120px', textAlign: 'center' }}>Hyponymy</div>
                <div style={{ flex: 1, height: '2px', background: '#333' }}></div>
                <div style={{ background: '#fff3e0', border: '2px solid #f39c12', padding: '10px 20px', borderRadius: '5px', minWidth: '150px', textAlign: 'center' }}>dog ⊂ animal</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#4caf50', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', minWidth: '120px', textAlign: 'center' }}>Meronymy</div>
                <div style={{ flex: 1, height: '2px', background: '#333' }}></div>
                <div style={{ background: '#e8f5e9', border: '2px solid #4caf50', padding: '10px 20px', borderRadius: '5px', minWidth: '150px', textAlign: 'center' }}>wheel ⊂ car</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#e74c3c', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', minWidth: '120px', textAlign: 'center' }}>Polysemy</div>
                <div style={{ flex: 1, height: '2px', background: '#333' }}></div>
                <div style={{ background: '#ffebee', border: '2px solid #e74c3c', padding: '10px 20px', borderRadius: '5px', minWidth: '150px', textAlign: 'center' }}>head: body/leader</div>
              </div>
            </div>
          </div>
        </div>
        <div className="diagram-container">
          <div className="diagram-title">Figure 7: Semantic Roles Classification</div>
          <div style={{ position: 'relative', height: '600px', marginTop: '20px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '140px', height: '140px', borderRadius: '50%', background: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1em', zIndex: 10 }}>Semantic Roles</div>
            
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{ background: '#ffeb3b', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px', textAlign: 'center' }}>Agent</div>
              <div style={{ background: '#fff9c4', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em', whiteSpace: 'nowrap' }}>Intentional actor</div>
              <div style={{ width: '2px', height: '80px', background: '#ffeb3b', margin: '0 auto' }}></div>
            </div>
            
            <div style={{ position: 'absolute', top: '15%', right: '15%' }}>
              <div style={{ background: '#ffeb3b', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em', marginBottom: '5px' }}>Performs action</div>
              <div style={{ width: '100px', height: '2px', background: '#ffeb3b', transform: 'rotate(-45deg)', transformOrigin: 'left' }}></div>
            </div>
            
            <div style={{ position: 'absolute', top: '35%', right: '5%' }}>
              <div style={{ background: '#ff6b6b', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px' }}>Location</div>
              <div style={{ background: '#ffcccb', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Where action occurs</div>
              <div style={{ width: '120px', height: '2px', background: '#ff6b6b', position: 'absolute', right: '100%', top: '50%' }}></div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '25%', right: '8%' }}>
              <div style={{ background: '#4ecdc4', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px' }}>Source</div>
              <div style={{ background: '#c7f0ed', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Origin point</div>
              <div style={{ width: '100px', height: '2px', background: '#4ecdc4', transform: 'rotate(45deg)', transformOrigin: 'left', position: 'absolute', right: '100%' }}></div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{ width: '2px', height: '80px', background: '#95e1d3', margin: '0 auto' }}></div>
              <div style={{ background: '#95e1d3', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px', textAlign: 'center' }}>Patient</div>
              <div style={{ background: '#d4f1e8', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Affected entity</div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '25%', left: '8%' }}>
              <div style={{ background: '#a29bfe', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px' }}>Theme</div>
              <div style={{ background: '#dfe6e9', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Transferred object</div>
              <div style={{ width: '100px', height: '2px', background: '#a29bfe', transform: 'rotate(-45deg)', transformOrigin: 'right', position: 'absolute', left: '100%' }}></div>
            </div>
            
            <div style={{ position: 'absolute', top: '35%', left: '5%' }}>
              <div style={{ background: '#fd79a8', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px' }}>Experiencer</div>
              <div style={{ background: '#ffeaa7', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Feels/perceives</div>
              <div style={{ width: '120px', height: '2px', background: '#fd79a8', position: 'absolute', left: '100%', top: '50%' }}></div>
            </div>
            
            <div style={{ position: 'absolute', top: '15%', left: '15%' }}>
              <div style={{ background: '#fab1a0', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em', marginBottom: '5px' }}>Psychological state</div>
              <div style={{ width: '100px', height: '2px', background: '#fab1a0', transform: 'rotate(45deg)', transformOrigin: 'right' }}></div>
            </div>
            
            <div style={{ position: 'absolute', top: '50%', left: '2%', transform: 'translateY(-50%)' }}>
              <div style={{ background: '#ff9ff3', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px' }}>Instrument</div>
              <div style={{ background: '#ffeef8', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Tool used</div>
            </div>
            
            <div style={{ position: 'absolute', top: '50%', right: '2%', transform: 'translateY(-50%)' }}>
              <div style={{ background: '#74b9ff', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '5px' }}>Goal</div>
              <div style={{ background: '#dfe6e9', padding: '5px 10px', borderRadius: '5px', fontSize: '0.85em' }}>Destination</div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="https://www.researchgate.net/profile/Jean-Mark-Gawron/publication/228062947/figure/fig1/AS:302045017933826@1449029693367/Semantic-map-of-tense-aspect-and-mood-categories.png" alt="Semantic Categories Map" style={{ maxWidth: '700px' }} />
          <div className="image-caption">Figure 8: Semantic Map of Linguistic Categories showing relationships between tense, aspect, and mood</div>
        </div>
      </div>

      {/* Quick Reference Cheat Sheet */}
      <div className="section">
        <h2><span className="icon">📋</span>Quick Reference Cheat Sheet</h2>
        <div className="quick-reference">
          <h3>Essential Semantics Concepts at a Glance</h3>
          <table>
            <tbody>
              <tr>
                <th>Concept</th>
                <th>Definition</th>
                <th>Key Example</th>
              </tr>
              <tr>
                <td><strong>Semantics</strong></td>
                <td>Study of meaning in language</td>
                <td>Analyzing what "freedom" means</td>
              </tr>
              <tr>
                <td><strong>Denotation</strong></td>
                <td>Literal, dictionary meaning</td>
                <td>"Dog" = canine animal</td>
              </tr>
              <tr>
                <td><strong>Connotation</strong></td>
                <td>Emotional/cultural associations</td>
                <td>"Dog" = loyalty, friendship</td>
              </tr>
              <tr>
                <td><strong>Synonymy</strong></td>
                <td>Same/similar meaning</td>
                <td>big = large</td>
              </tr>
              <tr>
                <td><strong>Antonymy</strong></td>
                <td>Opposite meaning</td>
                <td>hot ↔ cold</td>
              </tr>
              <tr>
                <td><strong>Hyponymy</strong></td>
                <td>Type-of relationship</td>
                <td>rose ⊂ flower</td>
              </tr>
              <tr>
                <td><strong>Meronymy</strong></td>
                <td>Part-whole relationship</td>
                <td>wheel ⊂ car</td>
              </tr>
              <tr>
                <td><strong>Polysemy</strong></td>
                <td>Multiple related meanings</td>
                <td>head: body part/leader</td>
              </tr>
              <tr>
                <td><strong>Agent</strong></td>
                <td>Performs action intentionally</td>
                <td>"John" in "John kicked"</td>
              </tr>
              <tr>
                <td><strong>Patient</strong></td>
                <td>Undergoes action</td>
                <td>"ball" in "kicked the ball"</td>
              </tr>
              <tr>
                <td><strong>Theme</strong></td>
                <td>Moved or affected</td>
                <td>"letter" in "sent a letter"</td>
              </tr>
              <tr>
                <td><strong>Experiencer</strong></td>
                <td>Feels/perceives</td>
                <td>"Mary" in "Mary saw"</td>
              </tr>
              <tr>
                <td><strong>Truth Conditions</strong></td>
                <td>Conditions for truth</td>
                <td>"Snow is white" = snow is white</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exam Practice Section */}
      <div className="section">
        <h2><span className="icon">📝</span>Exam Practice Questions</h2>
        <div className="exam-section">
          <p style={{ marginBottom: '20px' }}><strong>Instructions:</strong> Practice answering these exam-style questions. Click "Show Model Answer" to see the expected response and marking scheme.</p>
          
          <div className="exam-question">
            <h4>Question 1: Short Answer<span className="marks">5 Marks</span></h4>
            <p>Define semantics and distinguish between denotation and connotation with appropriate examples.</p>
            <button className="toggle-answer" onClick={() => document.getElementById('answer1').style.display = document.getElementById('answer1').style.display === 'none' ? 'block' : 'none'}>Show Model Answer</button>
            <div className="model-answer" id="answer1">
              <strong>Model Answer:</strong><br /><br />
              <strong>Definition of Semantics (2 marks):</strong><br />
              Semantics is the branch of linguistics concerned with the study of meaning in language. It investigates how words, phrases, and sentences convey meaning and how linguistic expressions relate to the world they describe.<br /><br />
              <strong>Denotation (1.5 marks):</strong><br />
              Denotation refers to the literal, dictionary definition of a word—the objective, referential meaning that identifies what the word points to in the external world. Example: The denotation of "snake" is a legless reptile of the suborder Serpentes.<br /><br />
              <strong>Connotation (1.5 marks):</strong><br />
              Connotation refers to the emotional, cultural, and associative meanings that a word carries beyond its literal definition. Example: "Snake" connotes deceit, danger, or evil in many cultures, as seen in phrases like "a snake in the grass."
            </div>
          </div>

          <div className="exam-question">
            <h4>Question 2: Analysis<span className="marks">8 Marks</span></h4>
            <p>Identify and explain the semantic relations in the following sets of words:</p>
            <p style={{ marginLeft: '20px' }}>
              (a) begin / commence / start<br />
              (b) alive / dead<br />
              (c) flower / rose / tulip<br />
              (d) wheel / car / engine
            </p>
            <button className="toggle-answer" onClick={() => document.getElementById('answer2').style.display = document.getElementById('answer2').style.display === 'none' ? 'block' : 'none'}>Show Model Answer</button>
            <div className="model-answer" id="answer2">
              <strong>Model Answer:</strong><br /><br />
              <strong>(a) begin / commence / start (2 marks):</strong><br />
              These words exhibit <strong>synonymy</strong>—they have the same or nearly identical meanings. "Begin" and "start" are common synonyms used in everyday language, while "commence" is a more formal synonym typically used in official or ceremonial contexts.<br /><br />
              <strong>(b) alive / dead (2 marks):</strong><br />
              These words exhibit <strong>complementary antonymy</strong> (contradictory antonymy). They represent absolute opposites with no middle ground—something is either alive or dead; there is no intermediate state. This is different from gradable antonyms like hot/cold.<br /><br />
              <strong>(c) flower / rose / tulip (2 marks):</strong><br />
              This set demonstrates <strong>hyponymy</strong>. "Flower" is the hypernym (superordinate), while "rose" and "tulip" are co-hyponyms (subordinates) that are specific types of flowers. The relationship can be represented as: rose ⊂ flower, tulip ⊂ flower.<br /><br />
              <strong>(d) wheel / car / engine (2 marks):</strong><br />
              This set illustrates <strong>meronymy</strong> (part-whole relationship). "Car" is the whole (meronym), while "wheel" and "engine" are parts (meronyms) of the car. The relationship is: wheel ⊂ car, engine ⊂ car (read as "wheel is a part of car").
            </div>
          </div>

          <div className="exam-question">
            <h4>Question 3: Application<span className="marks">10 Marks</span></h4>
            <p>Analyze the following sentences using componential analysis and semantic roles:</p>
            <p style={{ marginLeft: '20px' }}>
              (a) "The teacher gave a book to the student."<br />
              (b) "The baby broke the vase with a spoon."
            </p>
            <p>For each sentence, identify: (i) semantic features of key nouns, and (ii) semantic roles of all noun phrases.</p>
            <button className="toggle-answer" onClick={() => document.getElementById('answer3').style.display = document.getElementById('answer3').style.display === 'none' ? 'block' : 'none'}>Show Model Answer</button>
            <div className="model-answer" id="answer3">
              <strong>Model Answer:</strong><br /><br />
              <strong>Sentence (a): "The teacher gave a book to the student." (5 marks)</strong><br /><br />
              <em>(i) Componential Analysis (2 marks):</em><br />
              • teacher: [+ANIMATE], [+HUMAN], [+ADULT], [±MALE]<br />
              • book: [−ANIMATE], [−HUMAN], [+CONCRETE], [+COUNT]<br />
              • student: [+ANIMATE], [+HUMAN], [±ADULT], [±MALE]<br /><br />
              <em>(ii) Semantic Roles (3 marks):</em><br />
              • "The teacher" = <strong>AGENT</strong> (intentionally performs the action of giving)<br />
              • "a book" = <strong>THEME</strong> (the object transferred from one entity to another)<br />
              • "the student" = <strong>GOAL/BENEFICIARY</strong> (the recipient who receives the theme)<br /><br />
              <strong>Sentence (b): "The baby broke the vase with a spoon." (5 marks)</strong><br /><br />
              <em>(i) Componential Analysis (2 marks):</em><br />
              • baby: [+ANIMATE], [+HUMAN], [−ADULT], [±MALE]<br />
              • vase: [−ANIMATE], [−HUMAN], [+CONCRETE], [+COUNT]<br />
              • spoon: [−ANIMATE], [−HUMAN], [+CONCRETE], [+COUNT], [+INSTRUMENT]<br /><br />
              <em>(ii) Semantic Roles (3 marks):</em><br />
              • "The baby" = <strong>AGENT</strong> (performs the action, though perhaps unintentionally)<br />
              • "the vase" = <strong>PATIENT</strong> (undergoes the action and changes state from whole to broken)<br />
              • "a spoon" = <strong>INSTRUMENT</strong> (the tool used to perform the action)
            </div>
          </div>

          <div className="exam-question">
            <h4>Question 4: Essay<span className="marks">15 Marks</span></h4>
            <p>"Truth-conditional semantics provides the most rigorous framework for analyzing sentence meaning, but it has significant limitations." Discuss this statement with reference to the principles of truth-conditional semantics and at least three limitations of this approach.</p>
            <button className="toggle-answer" onClick={() => document.getElementById('answer4').style.display = document.getElementById('answer4').style.display === 'none' ? 'block' : 'none'}>Show Model Answer</button>
            <div className="model-answer" id="answer4">
              <strong>Model Answer:</strong><br /><br />
              <strong>Introduction (2 marks):</strong><br />
              Truth-conditional semantics, developed primarily by Richard Montague in the 1970s, is a formal approach that defines sentence meaning in terms of truth conditions. This essay discusses both the strengths that make it a rigorous framework and the limitations that constrain its applicability.<br /><br />
              <strong>Principles of Truth-Conditional Semantics (5 marks):</strong><br /><br />
              1. <strong>Core Principle:</strong> The meaning of a declarative sentence is identified with its truth conditions—the state of affairs that would make the sentence true or false. To know the meaning is to know under what conditions the sentence would be true.<br /><br />
              2. <strong>Compositionality:</strong> The meaning of a complex expression is determined by the meanings of its parts and how they are combined. This allows for the systematic analysis of infinite sentences using finite rules.<br /><br />
              3. <strong>Formal Representation:</strong> Truth-conditional semantics uses tools from formal logic (predicate calculus, set theory) to represent meaning precisely. Sentences are translated into logical forms that can be evaluated in models.<br /><br />
              4. <strong>Entailment Relations:</strong> The framework explains semantic relationships between sentences, particularly entailment (if A is true, B must be true) and presupposition.<br /><br />
              <strong>Limitations (6 marks):</strong><br /><br />
              1. <strong>Non-Declarative Sentences:</strong> Truth-conditional semantics struggles with questions, commands, and exclamations. A question like "What time is it?" cannot be analyzed in terms of truth conditions—it doesn't assert anything that can be true or false.<br /><br />
              2. <strong>Non-Literal Language:</strong> Metaphors, idioms, and figurative language pose significant challenges. "It's raining cats and dogs" cannot be analyzed literally in terms of truth conditions without producing absurd results.<br /><br />
              3. <strong>Subjectivity and Speaker Meaning:</strong> The approach focuses on sentence meaning (literal meaning) rather than speaker meaning (what the speaker intends to communicate). It cannot account for pragmatic factors like irony, sarcasm, or implicature.<br /><br />
              4. <strong>Vague and Fuzzy Concepts:</strong> Many natural language concepts have fuzzy boundaries (e.g., "bald," "heap"). Truth-conditional semantics requires precise truth conditions, which may not exist for such concepts (the sorites paradox).<br /><br />
              <strong>Conclusion (2 marks):</strong><br />
              While truth-conditional semantics provides an elegant and rigorous formal framework for analyzing literal, declarative sentence meaning, its limitations in handling non-declarative sentences, figurative language, and pragmatic factors mean it must be supplemented with other approaches like speech act theory and pragmatics for a complete account of linguistic meaning.
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="section">
        <h2><span className="icon">🎓</span>Module Summary</h2>
        <div className="summary-section">
          <h3>Key Takeaways from Semantics and Semantic Structures</h3>
          <div className="summary-grid">
            <div className="summary-card">
              <h4>📖 Core Concepts</h4>
              <ul>
                <li>Semantics studies meaning in language at all levels</li>
                <li>Meaning includes denotation (literal) and connotation (associative)</li>
                <li>The Semantic Triangle links words, concepts, and referents</li>
                <li>Grammatical meaning comes from structure and inflection</li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>🔗 Semantic Relations</h4>
              <ul>
                <li><strong>Synonymy:</strong> Same meaning (big/large)</li>
                <li><strong>Antonymy:</strong> Opposite meaning (hot/cold)</li>
                <li><strong>Hyponymy:</strong> Type-of relation (dog/animal)</li>
                <li><strong>Meronymy:</strong> Part-whole relation (wheel/car)</li>
                <li><strong>Polysemy:</strong> Multiple related meanings</li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>🔬 Componential Analysis</h4>
              <ul>
                <li>Breaks word meaning into semantic features</li>
                <li>Uses binary features [±ANIMATE], [±HUMAN], etc.</li>
                <li>Distinguishes related words systematically</li>
                <li>Reveals cross-linguistic patterns</li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>👤 Semantic Roles</h4>
              <ul>
                <li><strong>Agent:</strong> Performs action intentionally</li>
                <li><strong>Patient:</strong> Undergoes change</li>
                <li><strong>Theme:</strong> Moved or transferred</li>
                <li><strong>Experiencer:</strong> Feels or perceives</li>
                <li><strong>Instrument:</strong> Tool used</li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>✅ Truth-Conditional Semantics</h4>
              <ul>
                <li>Meaning = truth conditions</li>
                <li>Sentence is understood by knowing when it's true</li>
                <li>Uses formal logic for precise analysis</li>
                <li>Explains entailment and presupposition</li>
              </ul>
            </div>
            <div className="summary-card">
              <h4>📚 Exam Tips</h4>
              <ul>
                <li>Always provide examples for definitions</li>
                <li>Distinguish between types of antonymy</li>
                <li>Practice semantic role identification</li>
                <li>Understand both strengths AND limitations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="section" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', color: 'white', padding: '40px', borderRadius: '10px' }}>
        <h3>🎓 End of Module: Semantics and Semantic Structures</h3>
        <p style={{ margin: '15px 0' }}>Complete all MCQs and practice questions to reinforce your understanding.</p>
        <p style={{ opacity: '0.8' }}>Next Module: Pragmatics and Discourse Analysis →</p>
      </div>
      </div>
    </>
  );
};

export default Module2_2;
