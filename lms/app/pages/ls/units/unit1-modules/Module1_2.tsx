import React, { useEffect } from 'react';

const Module1_2: React.FC = () => {
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
          scroll-margin-top: 20px;
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
        .alert-info {
          background: #d1ecf1;
          border-color: #17a2b8;
          color: #0c5460;
        }
        .alert-warning {
          background: #fff3cd;
          border-color: #ffc107;
          color: #856404;
        }
        .alert-success {
          background: #d4edda;
          border-color: #28a745;
          color: #155724;
        }
        .alert strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.1em;
        }
        p {
          margin-bottom: 15px;
          text-align: justify;
          line-height: 1.9;
        }
        .term {
          color: #667eea;
          font-weight: 600;
        }
        .highlight {
          background: #fff3cd;
          padding: 2px 6px;
          border-radius: 3px;
          font-weight: 600;
        }
        .example-box {
          background: #f0f8ff;
          border: 2px solid #2196f3;
          border-radius: 10px;
          padding: 25px;
          margin: 25px 0;
        }
        .example-box h4 {
          color: #1976d2;
          font-size: 1.3em;
          margin-bottom: 15px;
        }
        .example-steps {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin: 15px 0;
        }
        .step {
          margin-bottom: 15px;
          padding-left: 30px;
          position: relative;
        }
        .step::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #2196f3;
          font-weight: bold;
          font-size: 1.2em;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        table thead {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }
        table th {
          padding: 15px;
          text-align: left;
          font-weight: 600;
        }
        table td {
          padding: 12px 15px;
          border-bottom: 1px solid #e9ecef;
          vertical-align: top;
        }
        table tr:nth-child(even) {
          background: #f8f9fa;
        }
        table tr:hover {
          background: #e3f2fd;
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
        .footer-link:hover {
          color: #764ba2;
        }
        .why-matters {
          background: linear-gradient(135deg, #ff6b6b15, #ee5a5215);
          padding: 30px;
          border-left: 5px solid #ff6b6b;
          border-radius: 10px;
          margin: 25px 0;
        }
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }
        .application-item {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .application-item h4 {
          color: #667eea;
          margin-bottom: 10px;
        }
        .diagram-container {
          text-align: center;
          margin: 30px 0;
          padding: 25px;
          background: #f8f9fa;
          border-radius: 10px;
          border: 2px solid #e9ecef;
        }
        .diagram-caption {
          margin-top: 15px;
          font-style: italic;
          color: #6c757d;
          font-size: 0.95em;
        }
        .content-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          margin: 15px 0;
        }
        .misconceptions-section {
          margin: 40px 0;
          padding: 30px;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 5px solid #ffc107;
        }
        .misconceptions-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5em;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 25px;
        }
        .misconception-item {
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 4px solid #dc3545;
        }
        .misconception-title {
          font-weight: bold;
          color: #721c24;
          margin-bottom: 10px;
        }
        .reality-title {
          font-weight: bold;
          color: #721c24;
          margin: 15px 0 10px 0;
        }
        .misconception-text {
          color: #721c24;
          line-height: 1.6;
        }
        .resources-section {
          background: #d1ecf1;
          border-left: 5px solid #17a2b8;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
        }
        .resources-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          color: #0c5460;
          margin-bottom: 15px;
          font-size: 1.1em;
        }
        .resource-item {
          margin-bottom: 15px;
        }
        .resource-item h4 {
          color: #0c5460;
          margin-bottom: 5px;
          font-size: 1em;
        }
        .resource-item p {
          color: #0c5460;
          margin: 0;
          font-size: 0.9em;
        }
        .collapsible {
          background: #667eea;
          color: white;
          cursor: pointer;
          padding: 12px 20px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          font-size: 1em;
          border-radius: 5px;
          margin-top: 10px;
          font-weight: 600;
        }
        .collapsible:hover {
          background: #764ba2;
        }
        .collapsible.active {
          background: #764ba2;
        }
        .collapsible-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .collapsible-content-inner {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 5px;
          margin-top: 10px;
        }
        .lab-exercise {
          background: linear-gradient(135deg, #28a74515, #20c99715);
          padding: 30px;
          border-left: 5px solid #28a745;
          border-radius: 10px;
          margin: 40px 0;
        }
        .lab-exercise h3 {
          color: #28a745;
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
          padding: 20px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 4px solid #28a745;
        }
        .lab-steps {
          background: white;
          padding: 25px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .lab-steps ol {
          counter-reset: lab-counter;
          list-style: none;
          padding-left: 0;
        }
        .lab-steps ol > li {
          counter-increment: lab-counter;
          margin-bottom: 25px;
          padding-left: 50px;
          position: relative;
        }
        .lab-steps ol > li::before {
          content: counter(lab-counter);
          position: absolute;
          left: 0;
          top: 0;
          background: #28a745;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .alert-danger {
          background: #f8d7da;
          border-color: #dc3545;
          color: #721c24;
        }
        .quick-ref {
          background: linear-gradient(135deg, #17a2b815, #00bcd415);
          padding: 30px;
          border-radius: 10px;
          margin: 40px 0;
        }
        .quick-ref-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 25px 0;
        }
        .quick-ref-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #17a2b8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .quick-ref-card h4 {
          color: #17a2b8;
          margin-bottom: 15px;
        }
        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }
          .header h1 {
            font-size: 1.8em;
          }
        }
      `}</style>
      <div className="container">
        <div className="header">
          <div className="breadcrumb">
            📚 Principles and Practices of Human Communication &gt; UNIT-1: Introduction to Language and Linguistics
          </div>
          <h1>🔊 Phonetics and Phonology</h1>
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
                <span>Intermediate</span>
              </div>
            </div>
            <div className="meta-card">
              <div className="meta-icon">🎯</div>
              <div className="meta-content">
                <strong>Prerequisites</strong>
                <span>Introduction to Linguistics, Basic Anatomy of Speech</span>
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
              <li>Define and distinguish between phonetics (the physical study of speech sounds) and phonology (the systematic organization of sounds in language)</li>
              <li>Identify and classify consonants using the three parameters: place of articulation, manner of articulation, and voicing</li>
              <li>Describe vowel production using tongue height, tongue position (front/back), and lip rounding</li>
              <li>Read and interpret the International Phonetic Alphabet (IPA) chart for English sounds</li>
              <li>Explain the concepts of phonemes and allophones with appropriate examples from English and other languages</li>
            </ul>
          </div>
        </div>

        <div className="section" id="misconceptions">
          <div className="misconceptions-section">
            <div className="misconceptions-title">
              <span>⚠️</span> Common Misconceptions
            </div>
            
            <div className="misconception-item">
              <div className="misconception-title">
                Misconception #1: "Phonetics and phonology are basically the same thing."
              </div>
              <div className="reality-title">Reality:</div>
              <div className="misconception-text">
                While related, they address different questions. Phonetics studies the physical properties of speech sounds (how they&apos;re produced, transmitted, and perceived), while phonology studies how sounds function within language systems. Phonetics is universal; phonology is language-specific.
              </div>
            </div>

            <div className="misconception-item">
              <div className="misconception-title">
                Misconception #2: "Each letter represents one sound."
              </div>
              <div className="reality-title">Reality:</div>
              <div className="misconception-text">
                English spelling is notoriously inconsistent. The letter "c" can represent [k] (cat), [s] (cell), or [ʃ] (ocean). Conversely, the sound [k] can be spelled as "c," "k," "ck," or "ch" (chemist). The IPA was created specifically to overcome this problem by providing one symbol for each sound.
              </div>
            </div>

            <div className="misconception-item">
              <div className="misconception-title">
                Misconception #3: "If two sounds are physically different, they must be different phonemes."
              </div>
              <div className="reality-title">Reality:</div>
              <div className="misconception-text">
                Many physically different sounds are allophones of the same phoneme. English speakers don&apos;t distinguish between aspirated [pʰ] and unaspirated [p]—they&apos;re the "same" sound in the mental grammar, even though they&apos;re acoustically distinct.
              </div>
            </div>

            <div className="misconception-item">
              <div className="misconception-title">
                Misconception #4: "Everyone pronounces words the same way."
              </div>
              <div className="reality-title">Reality:</div>
              <div className="misconception-text">
                There&apos;s enormous variation in pronunciation across dialects, regions, and individual speakers. Phonology describes the abstract system underlying this variation, while phonetics captures the actual physical variation in production.
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="videos">
          <h2 className="section-title">
            <span>🎥</span> Learn Through Videos
          </h2>
          <p style={{ color: '#6c757d', marginBottom: '25px' }}>
            Watch these carefully selected videos to reinforce your understanding with visual explanations, animations, and expert demonstrations.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: '25px 0' }}>
            <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e9ecef' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#333' }}>
                {/* Place your first video embed code here */}
                <iframe width="419" height="237" src="https://www.youtube.com/embed/80d2CEeMyQQ" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div style={{ padding: '15px', background: 'white' }}>
                <div style={{ fontWeight: 600, color: '#2c3e50', marginBottom: '8px', fontSize: '1em' }}>📚 Phonetics and Phonology: Introduction</div>
                <div style={{ fontSize: '0.85em', color: '#6c757d', marginBottom: '10px' }}>Jonas Wagner • 4:42 • 240K views</div>
                <div style={{ fontSize: '0.9em', color: '#6c757d', lineHeight: 1.4 }}>
                  What you'll learn: The fundamental distinction between phonetics (physical sounds) and phonology (mental sound systems), with clear examples from multiple languages.
                </div>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e9ecef' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#333' }}>
                {/* Place your second video embed code here */}
                <iframe width="419" height="237" src="https://www.youtube.com/embed/imH7hdOgxrU" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div style={{ padding: '15px', background: 'white' }}>
                <div style={{ fontWeight: 600, color: '#2c3e50', marginBottom: '8px', fontSize: '1em' }}>🎬 Phonology: Crash Course Linguistics #10</div>
                <div style={{ fontSize: '0.85em', color: '#6c757d', marginBottom: '10px' }}>CrashCourse • 12:06 • 370K views</div>
                <div style={{ fontSize: '0.9em', color: '#6c757d', lineHeight: 1.4 }}>
                  What you'll learn: Phonemes, allophones, phonological processes (assimilation, dissimilation, metathesis), and how sounds change in predictable environments.
                </div>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e9ecef' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#333' }}>
                {/* Place your third video embed code here */}
                <iframe width="419" height="237" src="https://www.youtube.com/embed/tpR5GdKXpGc" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div style={{ padding: '15px', background: 'white' }}>
                <div style={{ fontWeight: 600, color: '#2c3e50', marginBottom: '8px', fontSize: '1em' }}>💻 Vowel Pronunciation Tutorial • IPA</div>
                <div style={{ fontSize: '0.85em', color: '#6c757d', marginBottom: '10px' }}>polyMATHY • 41:38 • 180K views</div>
                <div style={{ fontSize: '0.9em', color: '#6c757d', lineHeight: 1.4 }}>
                  What you'll learn: Complete guide to IPA vowel symbols, tongue position (height, backness, rounding), and practical pronunciation training for multiple languages.
                </div>
              </div>
            </div>
          </div>

          <div className="resources-section">
            <div className="resources-title">
              <span>📺</span> Additional Resources:
            </div>
            <div className="resource-item">
              <h4>Interactive IPA Chart:</h4>
              <p>Visit ipachart.com to hear every IPA sound</p>
            </div>
            <div className="resource-item">
              <h4>Speech Analysis Tools:</h4>
              <p>Download Praat (free software) to visualize your own speech</p>
            </div>
            <div className="resource-item">
              <h4>Online Transcription Practice:</h4>
              <p>Try toPhonetics.com for automatic IPA transcription</p>
            </div>
          </div>
        </div>

        <div className="section" id="examples">
          <h2 className="section-title">
            <span className="section-icon">⚙️</span>
            See It In Action: Worked Examples
          </h2>
          <h3 className="subsection-title">Example 1: Classifying English Consonants</h3>
          <div className="example-box">
            <h4>📝 Problem Statement</h4>
            <p>Classify the following English consonants using the three parameters (place, manner, voicing): [p], [v], [ŋ], [tʃ], [l]</p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step">
                <strong>[p] as in "pat"</strong><br />
                Place: Bilabial (both lips)<br />
                Manner: Plosive/Stop (complete blockage then release)<br />
                Voicing: Voiceless (vocal cords not vibrating)<br />
                <strong>Classification:</strong> Voiceless bilabial plosive
              </div>
              <div className="step">
                <strong>[v] as in "vat"</strong><br />
                Place: Labiodental (lower lip + upper teeth)<br />
                Manner: Fricative (close approximation creating friction)<br />
                Voicing: Voiced (vocal cords vibrating)<br />
                <strong>Classification:</strong> Voiced labiodental fricative
              </div>
              <div className="step">
                <strong>[ŋ] as in "sing"</strong><br />
                Place: Velar (tongue body + soft palate)<br />
                Manner: Nasal (airflow through nasal cavity)<br />
                Voicing: Voiced (all nasals are voiced)<br />
                <strong>Classification:</strong> Voiced velar nasal
              </div>
              <div className="step">
                <strong>[tʃ] as in "chip"</strong><br />
                Place: Postalveolar (tongue blade + area behind alveolar ridge)<br />
                Manner: Affricate (stop + fricative combination)<br />
                Voicing: Voiceless<br />
                <strong>Classification:</strong> Voiceless postalveolar affricate
              </div>
              <div className="step">
                <strong>[l] as in "leg"</strong><br />
                Place: Alveolar (tongue tip + alveolar ridge)<br />
                Manner: Approximant (close but no turbulence)<br />
                Voicing: Voiced<br />
                <strong>Classification:</strong> Voiced alveolar lateral approximant
              </div>
            </div>
            <h4>💡 Key Insights</h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>Every consonant can be precisely described using just three parameters</li>
              <li>The IPA symbol often hints at its classification (e.g., [tʃ] shows it&apos;s a combination of [t] + [ʃ])</li>
              <li>Some sounds have unique characteristics: [l] is "lateral" because air flows around the sides of the tongue</li>
            </ul>
          </div>

          <h3 className="subsection-title">Example 2: Identifying Allophones</h3>
          <div className="example-box">
            <h4>📝 Problem Statement</h4>
            <p>Consider the English phoneme /t/. Identify the allophones in the following words and explain the phonological rule governing their distribution: "top" [tʰɑp], "stop" [stɑp], "cat" [kæt], "butter" [bʌɾɚ] (in American English)</p>
            <h4>🔍 Step-by-Step Solution</h4>
            <div className="example-steps">
              <div className="step">
                <strong>"top" [tʰɑp]</strong><br />
                Allophone: [tʰ] (aspirated alveolar plosive)<br />
                Environment: Word-initial position before a stressed vowel<br />
                Rule: /t/ → [tʰ] / #___V (where V = stressed vowel)
              </div>
              <div className="step">
                <strong>"stop" [stɑp]</strong><br />
                Allophone: [t] (unaspirated alveolar plosive)<br />
                Environment: After /s/ in the same syllable<br />
                Rule: /t/ → [t] / s___
              </div>
              <div className="step">
                <strong>"cat" [kæt]</strong><br />
                Allophone: [t] or [t̚] (unreleased)<br />
                Environment: Word-final position before a pause<br />
                Rule: /t/ → [t̚] / ___# (where # = word boundary/pause)
              </div>
              <div className="step">
                <strong>"butter" [bʌɾɚ] (American English)</strong><br />
                Allophone: [ɾ] (alveolar tap/flap)<br />
                Environment: Between two vowels, when the first is stressed<br />
                Rule: /t/ → [ɾ] / V̩___V (where V̩ = stressed vowel)
              </div>
            </div>
            <h4>✅ Summary of /t/ Allophones in English</h4>
            <table>
              <thead>
                <tr>
                  <th>Allophone</th>
                  <th>Environment</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[tʰ]</td>
                  <td>Word-initial, stressed syllable</td>
                  <td>top, tea, take</td>
                </tr>
                <tr>
                  <td>[t]</td>
                  <td>After /s/</td>
                  <td>stop, stick, star</td>
                </tr>
                <tr>
                  <td>[t̚]</td>
                  <td>Word-final before pause</td>
                  <td>cat, hat, sit</td>
                </tr>
                <tr>
                  <td>[ɾ]</td>
                  <td>Intervocalic (AmE)</td>
                  <td>butter, water, city</td>
                </tr>
                <tr>
                  <td>[ʔ]</td>
                  <td>Before syllabic /n/ (some dialects)</td>
                  <td>button [bʌʔn̩], mountain</td>
                </tr>
              </tbody>
            </table>
            <div className="alert alert-warning">
              <strong>⚠️ Important Note:</strong> These allophones are in complementary distribution—you&apos;ll never find [tʰ] after /s/, and you&apos;ll never find [t] (unaspirated) at the beginning of a stressed syllable. Native speakers perceive them all as "the same sound" (the phoneme /t/). This is why English speakers have difficulty hearing the difference between English /p/ and Hindi /p/ vs. /pʰ/ (which ARE separate phonemes in Hindi).
            </div>
          </div>

          <h3 className="subsection-title">Example 3: Vowel Classification</h3>
          <div className="example-box">
            <h4>📝 Problem Statement</h4>
            <p>Classify the following English vowels using tongue height, tongue position, and lip rounding: [i], [u], [æ], [ɑ], [ə]</p>
            <h4>🔍 Solution</h4>
            <table>
              <thead>
                <tr>
                  <th>Vowel</th>
                  <th>Example</th>
                  <th>Height</th>
                  <th>Position</th>
                  <th>Rounding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[i]</td>
                  <td>beat</td>
                  <td>High</td>
                  <td>Front</td>
                  <td>Unrounded</td>
                </tr>
                <tr>
                  <td>[u]</td>
                  <td>boot</td>
                  <td>High</td>
                  <td>Back</td>
                  <td>Rounded</td>
                </tr>
                <tr>
                  <td>[æ]</td>
                  <td>bat</td>
                  <td>Low</td>
                  <td>Front</td>
                  <td>Unrounded</td>
                </tr>
                <tr>
                  <td>[ɑ]</td>
                  <td>hot</td>
                  <td>Low</td>
                  <td>Back</td>
                  <td>Unrounded</td>
                </tr>
                <tr>
                  <td>[ə]</td>
                  <td>about</td>
                  <td>Mid</td>
                  <td>Central</td>
                  <td>Unrounded</td>
                </tr>
              </tbody>
            </table>
            <h4>💡 Key Insights</h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>[i] and [u] are both high vowels but differ in position (front vs. back) and rounding</li>
              <li>[æ] and [ɑ] are both low vowels but differ in position (front vs. back)</li>
              <li>[ə] (schwa) is the most neutral vowel—mid height, central position, unrounded</li>
              <li>English back vowels are typically rounded; front vowels are typically unrounded</li>
            </ul>
          </div>
        </div>

        <div className="section" id="comparison">
          <h2 className="section-title">
            <span className="section-icon">📊</span>
            Comparison &amp; Analysis
          </h2>
          <p>Understanding the distinction between phonetics and phonology is fundamental to the study of linguistics. While these fields are closely related and often work together, they approach speech sounds from different perspectives.</p>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Phonetics</th>
                  <th>Phonology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Definition</strong></td>
                  <td>Study of speech sounds as physical entities</td>
                  <td>Study of sound systems and patterns in languages</td>
                </tr>
                <tr>
                  <td><strong>Focus</strong></td>
                  <td>How sounds are produced, transmitted, and perceived</td>
                  <td>How sounds function within language systems</td>
                </tr>
                <tr>
                  <td><strong>Scope</strong></td>
                  <td>Universal (all possible human speech sounds)</td>
                  <td>Language-specific (sound system of particular languages)</td>
                </tr>
                <tr>
                  <td><strong>Key Questions</strong></td>
                  <td>"How is this sound made?" "What are its acoustic properties?"</td>
                  <td>"What sounds contrast meaning?" "What are the patterns?"</td>
                </tr>
                <tr>
                  <td><strong>Methods</strong></td>
                  <td>Instrumental analysis, articulatory description, acoustic measurement</td>
                  <td>Pattern analysis, distribution studies, speaker intuitions</td>
                </tr>
                <tr>
                  <td><strong>Units of Analysis</strong></td>
                  <td>Phones (physical sounds in square brackets [p])</td>
                  <td>Phonemes (mental categories in slashes /p/)</td>
                </tr>
                <tr>
                  <td><strong>Relationship</strong></td>
                  <td colSpan={2} style={{ textAlign: 'center' }}>Phonetics provides the physical data; Phonology explains how that data is organized in the mind</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="subsection-title">Branches of Phonetics</h3>
          <p>Phonetics itself is divided into three main branches, each studying speech sounds from a different perspective:</p>
          <div className="alert alert-info">
            <strong>1. Articulatory Phonetics</strong> - Studies how speech sounds are produced by the vocal organs (tongue, lips, larynx, etc.). This is the most commonly taught branch because it&apos;s easiest to relate to our own experience of speaking.
          </div>
          <div className="alert alert-info">
            <strong>2. Acoustic Phonetics</strong> - Studies the physical properties of speech sounds as they travel through the air—frequency, amplitude, duration. Uses spectrograms and other visual representations to analyze sounds.
          </div>
          <div className="alert alert-info">
            <strong>3. Auditory Phonetics</strong> - Studies how speech sounds are perceived by the human ear and processed by the brain. Concerned with psychoacoustics and speech perception.
          </div>
        </div>

        <div className="section" id="practice">
          <h3 className="subsection-title">Problem-Solving Practice</h3>
          <div className="example-box">
            <h4>📘 Easy Problem</h4>
            <p><strong>Problem:</strong> Transcribe the word "think" in IPA, then identify the place, manner, and voicing of the initial consonant.</p>
            <button className="collapsible">Show Solution</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Solution:</h4>
                <div className="example-steps">
                  <div className="step">IPA Transcription: [θɪŋk]</div>
                  <div className="step">
                    Initial consonant [θ] (as in "think"):<br />
                    • Place: Dental/Interdental (tongue tip between teeth)<br />
                    • Manner: Fricative (close approximation creating friction)<br />
                    • Voicing: Voiceless (no vocal cord vibration)<br />
                    • <strong>Classification:</strong> Voiceless dental fricative
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example-box">
            <h4>📙 Medium Problem</h4>
            <p><strong>Problem:</strong> Explain why "spin" and "pin" demonstrate that [p] and [pʰ] are allophones of the same phoneme in English, not separate phonemes.</p>
            <button className="collapsible">Show Solution</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Solution:</h4>
                <p>The words "spin" [spɪn] and "pin" [pʰɪn] demonstrate complementary distribution:</p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>[p] (unaspirated) occurs after /s/ in the same syllable</li>
                  <li>[pʰ] (aspirated) occurs at the beginning of a stressed syllable</li>
                  <li>They never appear in the same position—you can&apos;t have [spʰɪn] or [pɪn] (with unaspirated p) in English</li>
                  <li>Native speakers perceive them as "the same sound" (the phoneme /p/)</li>
                  <li>They don&apos;t contrast meaning—swapping them doesn&apos;t create different words, just sounds "foreign"</li>
                </ul>
                <p>If they were separate phonemes, swapping them would create minimal pairs with different meanings (like /p/ and /b/ in "pat" vs. "bat").</p>
              </div>
            </div>
          </div>

          <div className="example-box">
            <h4>📕 Hard Problem</h4>
            <p><strong>Problem:</strong> Korean has the following voiceless stops: [p], [pʰ], and [p̚] (unreleased). These three sounds can all appear in the same position (word-initially) and distinguish meaning. For example: /pal/ "foot," /pʰal/ "arm," /p̚al/ "eight." What does this tell us about Korean phonology compared to English?</p>
            <button className="collapsible">Show Solution</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Solution:</h4>
                <p>This tells us that in Korean, aspiration and release are <strong>phonemic</strong>—they distinguish meaning. Korean has three separate phonemes where English has only one:</p>
                <table style={{ margin: '15px 0' }}>
                  <thead>
                    <tr>
                      <th>Sound</th>
                      <th>English</th>
                      <th>Korean</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>[p]</td>
                      <td>Allophone of /p/</td>
                      <td>Separate phoneme /p/</td>
                    </tr>
                    <tr>
                      <td>[pʰ]</td>
                      <td>Allophone of /p/</td>
                      <td>Separate phoneme /pʰ/</td>
                    </tr>
                    <tr>
                      <td>[p̚]</td>
                      <td>Allophone of /p/</td>
                      <td>Separate phoneme /p̚/</td>
                    </tr>
                  </tbody>
                </table>
                <p>This is why Korean speakers learning English may have difficulty with English /p/, and why English speakers learning Korean must learn to hear and produce distinctions they never needed before. It demonstrates that the same physical sounds can function very differently in different language systems.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-exercise">
          <h3>🛠️ Hands-On Lab Exercise</h3>
          <h2>Phonetic Transcription and Analysis</h2>
          <div className="lab-objective">
            <strong>📋 Objective:</strong>
            <p>You will transcribe English words into IPA, analyze your own speech production, and compare phonemic inventories across languages. This exercise develops practical skills in phonetic analysis and transcription.</p>
          </div>
          <div className="lab-objective">
            <strong>⏱️ Estimated Time:</strong> 45-60 minutes
          </div>
          <div className="lab-objective">
            <strong>🎯 Learning Goals:</strong>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Accurately transcribe English words using IPA symbols</li>
              <li>Identify the physical articulation of speech sounds in your own production</li>
              <li>Recognize phonemic vs. phonetic differences across languages</li>
              <li>Use online resources for phonetic analysis</li>
            </ul>
          </div>
          <div className="lab-steps">
            <h4>📝 Instructions:</h4>
            <ol>
              <li>
                <strong>Basic Transcription Practice</strong>
                <p>Transcribe the following words into IPA. Use the IPA chart and refer to the vowel quadrilateral. Check your answers using an online IPA transcription tool.</p>
                <p><em>Words: cat, thought, sheep, ship, judge, thing, sing, church, water (American English)</em></p>
              </li>
              <li>
                <strong>Articulation Awareness Exercise</strong>
                <p>For each consonant in the word "strengths" [stɹɛŋkθs], identify:</p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Place of articulation</li>
                  <li>Manner of articulation</li>
                  <li>Voicing</li>
                </ul>
                <p>Place your fingers on your throat and feel the difference between [s] and [z], [t] and [d], [k] and [g].</p>
              </li>
              <li>
                <strong>Mirrored Speech Analysis</strong>
                <p>Record yourself saying these minimal pairs. Listen to the recordings and try to identify the specific sounds that differ:</p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>pat - bat - mat</li>
                  <li>seat - sheet - cheat</li>
                  <li>fan - van - than</li>
                </ul>
              </li>
              <li>
                <strong>Cross-Language Comparison</strong>
                <p>Research the phonemic inventory of a language other than English (Spanish, Mandarin, or Arabic are good choices). Compare:</p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Which sounds exist in both languages?</li>
                  <li>Which sounds exist in English but not the other language?</li>
                  <li>Which sounds exist in the other language but not English?</li>
                </ul>
              </li>
              <li>
                <strong>Allophone Hunt</strong>
                <p>Find five examples of words where the letter "t" represents different allophones of /t/ (e.g., "top" [tʰ], "stop" [t], "butter" [ɾ], "mountain" [ʔ]). Transcribe each word and identify the allophone.</p>
              </li>
            </ol>
          </div>
          <div className="lab-objective">
            <strong>✅ Expected Output:</strong>
            <p>A completed worksheet with:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>10+ words transcribed in IPA</li>
              <li>Articulatory analysis of "strengths"</li>
              <li>Recording and self-analysis of minimal pairs</li>
              <li>Cross-language comparison chart</li>
              <li>5 examples of /t/ allophones with transcriptions</li>
            </ul>
          </div>
          <div className="lab-objective">
            <strong>🎓 Grading Rubric:</strong>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>IPA Transcription Accuracy: 25 points</li>
              <li>Articulation Analysis: 20 points</li>
              <li>Recording &amp; Self-Analysis: 20 points</li>
              <li>Cross-Language Comparison: 20 points</li>
              <li>Allophone Identification: 15 points</li>
            </ul>
          </div>
        </div>

        <div className="section" id="pitfalls">
          <h2 className="section-title">
            <span className="section-icon">⚠️</span>
            Common Pitfalls &amp; How to Avoid Them
          </h2>
          <p>Learn from common mistakes students make when learning phonetics and phonology. Understanding these pitfalls will help you avoid them in exams and practical applications.</p>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #1: Confusing phoneme and phone notation</strong>
            <p><strong>What students do wrong:</strong> Write [p] when they mean /p/ or vice versa; use the wrong brackets.</p>
            <p><strong>Why it&apos;s wrong:</strong> Square brackets [p] indicate a physical phone (actual sound production). Slashes /p/ indicate a mental phoneme (abstract category). Mixing them up shows confusion about the fundamental distinction.</p>
            <p><strong>✅ How to avoid it:</strong> Remember: "Squares are Specific" (physical, specific sounds) and "Slashes are System" (abstract system categories). Always ask: "Am I talking about a physical sound or a mental category?"</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #2: Thinking allophonic differences are "wrong" pronunciation</strong>
            <p><strong>What students do wrong:</strong> Assume that because [pʰ] and [p] sound different, one must be "correct" and one "incorrect."</p>
            <p><strong>Why it&apos;s wrong:</strong> Allophones are predictable, rule-governed variations. Both [pʰ] in "pin" and [p] in "spin" are correct English pronunciations—they&apos;re just allophones of /p/ in different environments.</p>
            <p><strong>✅ How to avoid it:</strong> Understand that variation is systematic and natural. The goal is to identify patterns, not judge pronunciation. Allophonic variation exists in every language and every speaker.</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #3: Assuming sounds that are spelled differently are different phonemes</strong>
            <p><strong>What students do wrong:</strong> Think that "c" in "cat" and "k" in "kite" represent different phonemes because they&apos;re spelled differently.</p>
            <p><strong>Why it&apos;s wrong:</strong> English spelling is not phonemic. Both "c" and "k" can represent the phoneme /k/. Spelling is historical and often arbitrary; phonemes are about sound contrasts in the language system.</p>
            <p><strong>✅ How to avoid it:</strong> Focus on pronunciation, not spelling. Use minimal pairs to test whether two sounds are separate phonemes. Ask: "Does swapping these sounds change the meaning of the word?"</p>
          </div>
          <div className="alert alert-danger">
            <strong>🚫 Pitfall #4: Confusing manner of articulation categories</strong>
            <p><strong>What students do wrong:</strong> Mix up fricatives and affricates, or nasals and plosives.</p>
            <p><strong>Why it&apos;s wrong:</strong> Each manner category has distinct articulatory characteristics. Fricatives involve close approximation creating friction; affricates are stop + fricative combinations. Nasals involve airflow through the nose; plosives involve complete blockage.</p>
            <p><strong>✅ How to avoid it:</strong> Practice feeling the difference in your own mouth. For fricatives, you can sustain the sound ([sssss]). For plosives, there&apos;s a complete stop then release ([p] is instantaneous). For nasals, air comes out your nose (try pinching your nose while saying [m]—you can&apos;t!).</p>
          </div>
          <div className="alert alert-warning">
            <strong>💡 Exam Tips:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Always use correct notation:</strong> Phones in [brackets], phonemes in /slashes/</li>
              <li><strong>Check all three parameters for consonants:</strong> Place, manner, AND voicing</li>
              <li><strong>For vowels, remember height + position + rounding</strong></li>
              <li><strong>When identifying allophones, describe the environment:</strong> What comes before? What comes after?</li>
              <li><strong>Use minimal pairs to prove phonemic contrast:</strong> If swapping sounds changes meaning, they&apos;re separate phonemes</li>
            </ul>
          </div>
        </div>

        <div className="quick-ref">
          <h2 className="section-title">
            <span className="section-icon">📄</span>
            Quick Reference Cheat Sheet
          </h2>
          <p>Save this page for quick review! Here&apos;s everything you need to remember at a glance.</p>
          <div className="quick-ref-grid">
            <div className="quick-ref-card">
              <h4>🔑 Key Definitions</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Phonetics:</strong> Study of speech sounds as physical entities</li>
                <li><strong>Phonology:</strong> Study of sound systems in languages</li>
                <li><strong>Phone:</strong> Physical speech sound [p]</li>
                <li><strong>Phoneme:</strong> Mental sound category /p/</li>
                <li><strong>Allophone:</strong> Predictable variant of a phoneme</li>
                <li><strong>IPA:</strong> International Phonetic Alphabet</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>📐 Consonant Parameters</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Place:</strong> Bilabial, Labiodental, Dental, Alveolar, Postalveolar, Palatal, Velar, Glottal</li>
                <li><strong>Manner:</strong> Plosive, Fricative, Affricate, Nasal, Approximant</li>
                <li><strong>Voicing:</strong> Voiced (vocal cords vibrate) vs. Voiceless</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>🔊 Vowel Parameters</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Height:</strong> High [i, u], Mid [e, o, ə], Low [æ, ɑ]</li>
                <li><strong>Position:</strong> Front [i, e, æ], Central [ə], Back [u, o, ɑ]</li>
                <li><strong>Rounding:</strong> Rounded [u, o] vs. Unrounded [i, e, æ, ɑ, ə]</li>
                <li><strong>Schwa [ə]:</strong> Mid central unrounded</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>✅ English Consonants by Place</h4>
              <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
                <li><strong>Bilabial:</strong> [p], [b], [m]</li>
                <li><strong>Labiodental:</strong> [f], [v]</li>
                <li><strong>Dental:</strong> [θ], [ð]</li>
                <li><strong>Alveolar:</strong> [t], [d], [s], [z], [n], [l]</li>
                <li><strong>Postalveolar:</strong> [ʃ], [ʒ], [tʃ], [dʒ]</li>
                <li><strong>Palatal:</strong> [j]</li>
                <li><strong>Velar:</strong> [k], [g], [ŋ]</li>
                <li><strong>Glottal:</strong> [h], [ʔ]</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>⚠️ Common Notation</h4>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>[p]</strong> = phone (physical sound)</li>
                <li><strong>/p/</strong> = phoneme (mental category)</li>
                <li><strong>[pʰ]</strong> = aspirated p</li>
                <li><strong>[p̚]</strong> = unreleased p</li>
                <li><strong>[ɾ]</strong> = alveolar tap/flap</li>
                <li><strong>[ə]</strong> = schwa (unstressed vowel)</li>
              </ul>
            </div>
            <div className="quick-ref-card">
              <h4>📝 Test for Minimal Pairs</h4>
              <p>Two words form a minimal pair if:</p>
              <ul style={{ marginLeft: '20px' }}>
                <li>They have the same number of sounds</li>
                <li>They differ in exactly ONE position</li>
                <li>The difference changes the meaning</li>
              </ul>
              <p><em>Example: pat /pæt/ vs. bat /bæt/ ✓</em></p>
            </div>
          </div>
        </div>

        <div className="section" id="further">
          <h2 className="section-title">
            <span className="section-icon">🚀</span>
            Go Deeper: Advanced Topics &amp; Resources
          </h2>
          <h3 className="subsection-title">Advanced Concepts</h3>
          <div className="example-box">
            <h4>🔬 Advanced Topic 1: Distinctive Features</h4>
            <p>Distinctive features theory analyzes sounds as bundles of binary features (±voiced, ±nasal, ±continuant, etc.). This allows for more precise analysis of phonological patterns and sound relationships. For example, /p/ and /b/ differ only in [±voiced]; they share all other features.</p>
            <p><strong>Learn more:</strong> Search "distinctive features phonology" or read Chapter 4 of "A Course in Phonetics" by Ladefoged &amp; Johnson</p>
          </div>
          <div className="example-box">
            <h4>🔬 Advanced Topic 2: Optimality Theory</h4>
            <p>Optimality Theory (OT) is a modern phonological framework that explains sound patterns through ranked constraints. Rather than rules, OT uses universal constraints that can be violated in language-specific rankings. This explains why different languages make different "choices" in their phonological systems.</p>
            <p><strong>Learn more:</strong> Search "Optimality Theory phonology primer" or read "Optimality Theory: Constraint Interaction in Generative Grammar" by Prince &amp; Smolensky</p>
          </div>
          <div className="example-box">
            <h4>🔬 Advanced Topic 3: Acoustic Phonetics</h4>
            <p>Acoustic phonetics uses spectrograms to visualize speech sounds. Formants (resonant frequencies of the vocal tract) distinguish vowels, while consonants have characteristic acoustic signatures. Software like Praat allows you to analyze your own speech and see the physical realization of phonological categories.</p>
            <p><strong>Learn more:</strong> Download Praat (free) from praat.org and explore the spectrogram function</p>
          </div>
          <h3 className="subsection-title">📚 Recommended Resources</h3>
          <div className="alert alert-info">
            <strong>Books:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>"A Course in Phonetics"</strong> by Peter Ladefoged &amp; Keith Johnson - The standard undergraduate textbook</li>
              <li><strong>"The Sounds of Language"</strong> by Henry Rogers - Accessible introduction with exercises</li>
              <li><strong>"Phonology: A Coursebook"</strong> by Roca &amp; Johnson - Comprehensive phonology text</li>
            </ul>
            <strong style={{ display: 'block', marginTop: '15px' }}>Online Resources:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li><strong>Interactive IPA Chart:</strong> <a href="https://www.ipachart.com/" target="_blank">ipachart.com</a> - Click to hear every sound</li>
              <li><strong>Phonetics Resources:</strong> <a href="https://www.phon.ucl.ac.uk/" target="_blank">UCL Phonetics</a> - Extensive resources and recordings</li>
              <li><strong>Praat Software:</strong> <a href="https://www.fon.hum.uva.nl/praat/" target="_blank">praat.org</a> - Free speech analysis software</li>
              <li><strong>IPA Translator:</strong> <a href="https://tophonetics.com/" target="_blank">tophonetics.com</a> - Automatic IPA transcription</li>
            </ul>
          </div>
          <h3 className="subsection-title">💼 Interview Preparation</h3>
          <div className="example-box">
            <h4>Interview Question 1: "What&apos;s the difference between a phoneme and an allophone?"</h4>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>How to approach:</strong> Give clear definitions, then provide a concrete example from English.</p>
                <p><strong>Sample answer:</strong> "A phoneme is a mental category of sounds that speakers treat as the same—it&apos;s an abstract unit that can distinguish meaning. An allophone is a specific, predictable variant of a phoneme that occurs in particular contexts. For example, in English, /p/ is a phoneme that has multiple allophones: [pʰ] in &apos;pin,&apos; [p] in &apos;spin,&apos; and [ɾ] in &apos;butter&apos; for American English speakers. These are all physically different sounds, but native speakers perceive them as &apos;the same sound&apos;—the phoneme /p/. They&apos;re in complementary distribution, meaning each appears in a specific environment and they don&apos;t contrast meaning."</p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Interview Question 2: "How would you explain the IPA to a non-linguist?"</h4>
            <button className="collapsible">Show Approach</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <p><strong>Sample answer:</strong> "The International Phonetic Alphabet, or IPA, is like a universal spelling system for sounds. Regular spelling is inconsistent—the letter &apos;c&apos; can sound like &apos;k&apos; in &apos;cat,&apos; &apos;s&apos; in &apos;cell,&apos; or &apos;sh&apos; in &apos;ocean.&apos; The IPA solves this by giving each sound exactly one symbol. So every time you see [k], you know it&apos;s the same sound, regardless of which language you&apos;re studying. It&apos;s used by linguists, language teachers, speech therapists, and singers to accurately represent pronunciation. For example, the word &apos;phonetics&apos; in IPA is [fəˈnɛtɪks]—you can see exactly how each sound should be pronounced."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="exam">
          <h2 className="section-title">
            <span className="section-icon">📝</span>
            University Exam Practice
          </h2>
          <p>Practice with these university-style exam questions. These reflect the format and difficulty of actual exams.</p>
          <div className="example-box">
            <h4>Question 1: Short Answer (5 marks) - [Time: 7 minutes]</h4>
            <p><strong>Define the terms PHONEME and ALLOPHONE. Explain the relationship between them with an example from English.</strong></p>
            <button className="collapsible">Show Marking Scheme &amp; Model Answer</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Definition of phoneme: 1 mark</li>
                  <li>Definition of allophone: 1 mark</li>
                  <li>Explanation of relationship: 1 mark</li>
                  <li>Appropriate English example: 1 mark</li>
                  <li>Clear explanation of example: 1 mark</li>
                </ul>
                <h4>Model Answer:</h4>
                <p>A <strong>phoneme</strong> is a mental category of sounds that speakers of a language treat as "the same" sound. It is an abstract unit that can distinguish meaning between words. Phonemes are written between slashes (e.g., /p/).</p>
                <p>An <strong>allophone</strong> is a specific, predictable variant of a phoneme that occurs in particular phonetic environments. Allophones are the physical realizations of phonemes and are written between square brackets (e.g., [p], [pʰ]).</p>
                <p>The relationship between them is that allophones are the various physical manifestations of a single phoneme. They are in complementary distribution, meaning each allophone appears in a specific environment and they never contrast meaning.</p>
                <p><strong>Example from English:</strong> The phoneme /p/ has multiple allophones. [pʰ] (aspirated) appears at the beginning of stressed syllables ("pin" [pʰɪn]), while [p] (unaspirated) appears after /s/ ("spin" [spɪn]). These are physically different sounds, but English speakers perceive them as the same phoneme /p/ because they don&apos;t distinguish meaning.</p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Question 2: Problem Solving (10 marks) - [Time: 15 minutes]</h4>
            <p><strong>Consider the following data from English:</strong></p>
            <ul style={{ marginLeft: '20px' }}>
              <li>[pʰɪn] "pin"</li>
              <li>[spɪn] "spin"</li>
              <li>[pʰæt] "pat"</li>
              <li>[spæt] "spat"</li>
              <li>[lɪp] "lip"</li>
              <li>[lɪp̚] "lip" (unreleased)</li>
            </ul>
            <p><strong>a) Identify the allophones of /p/ in the data above. (3 marks)</strong></p>
            <p><strong>b) Describe the phonological rule that determines the distribution of these allophones. (4 marks)</strong></p>
            <p><strong>c) Explain why [p] and [pʰ] are allophones of the same phoneme in English but separate phonemes in Hindi. (3 marks)</strong></p>
            <button className="collapsible">Show Marking Scheme &amp; Complete Solution</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Part a) Correct identification of allophones: 3 marks</li>
                  <li>Part b) Accurate rule description with environments: 4 marks</li>
                  <li>Part c) Clear explanation of language-specific phonology: 3 marks</li>
                </ul>
                <h4>Complete Solution:</h4>
                <p><strong>a) Allophones of /p/:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>[pʰ] - aspirated voiceless bilabial plosive</li>
                  <li>[p] - unaspirated voiceless bilabial plosive</li>
                  <li>[p̚] - unreleased voiceless bilabial plosive</li>
                </ul>
                <p><strong>b) Phonological rules:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li>/p/ → [pʰ] / #___V (word-initially before a stressed vowel)</li>
                  <li>/p/ → [p] / s___ (after /s/ in the same syllable)</li>
                  <li>/p/ → [p̚] / ___# (word-finally before a pause)</li>
                </ul>
                <p><strong>c) Explanation:</strong></p>
                <p>In English, [p] and [pʰ] are allophones of the same phoneme because they are in complementary distribution—they never appear in the same position. [pʰ] appears word-initially before stressed vowels; [p] appears after /s/. Native speakers perceive them as "the same sound" and cannot hear the difference without training. Swapping them doesn&apos;t change word meaning (just sounds "foreign").</p>
                <p>In Hindi, [p] and [pʰ] are separate phonemes because they can appear in the same position and distinguish meaning. For example, /pal/ means "take care of" while /pʰal/ means "fruit." They form minimal pairs, proving they are distinct phonemes in the Hindi sound system.</p>
                <p>This demonstrates that the same physical sounds can function differently in different languages—what is phonemic (contrastive) in one language may be allophonic (non-contrastive) in another.</p>
              </div>
            </div>
          </div>
          <div className="example-box">
            <h4>Question 3: Analytical/Comparison (15 marks) - [Time: 20 minutes]</h4>
            <p><strong>Compare and contrast PHONETICS and PHONOLOGY. Discuss their relationship, key differences in focus and methodology, and explain why both are necessary for a complete understanding of human speech. Provide specific examples to support your answer.</strong></p>
            <button className="collapsible">Show Marking Scheme &amp; Model Answer</button>
            <div className="collapsible-content">
              <div className="collapsible-content-inner">
                <h4>Marking Scheme:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  <li>Clear definitions of both fields: 2 marks</li>
                  <li>Accurate comparison of focus/scope: 3 marks</li>
                  <li>Explanation of methodology differences: 3 marks</li>
                  <li>Discussion of their relationship: 3 marks</li>
                  <li>Relevant examples: 2 marks</li>
                  <li>Coherent structure and conclusion: 2 marks</li>
                </ul>
                <h4>Model Answer:</h4>
                <p><strong>Introduction:</strong> Phonetics and phonology are two closely related subfields of linguistics that study speech sounds from different perspectives. While phonetics examines the physical properties of sounds, phonology investigates how those sounds function within language systems.</p>
                <p><strong>Phonetics</strong> is the scientific study of speech sounds as physical phenomena. It examines how sounds are produced by the vocal organs (articulatory phonetics), how they travel as acoustic waves (acoustic phonetics), and how they are perceived by the ear and brain (auditory phonetics). Phonetics is universal—it describes all possible human speech sounds regardless of language. For example, phonetics can describe exactly how [p] is produced: both lips close to block airflow, then release with a burst. This description applies to any language.</p>
                <p><strong>Phonology</strong>, in contrast, studies how speech sounds are organized and function within specific languages. It investigates which sounds distinguish meaning (phonemes), how sounds pattern and combine, and what rules govern their distribution. Phonology is language-specific. For example, English phonology treats [p] and [pʰ] as variants of the same phoneme /p/, while Hindi phonology treats them as separate phonemes that contrast meaning.</p>
                <p><strong>Key Differences:</strong></p>
                <ul style={{ marginLeft: '20px' }}>
                  <li><strong>Scope:</strong> Phonetics is universal; phonology is language-specific</li>
                  <li><strong>Focus:</strong> Phonetics asks "How is this sound made?"; phonology asks "How does this sound function in the system?"</li>
                  <li><strong>Methods:</strong> Phonetics uses instrumental analysis and physical measurement; phonology uses pattern analysis and speaker intuitions</li>
                  <li><strong>Units:</strong> Phonetics studies phones [p]; phonology studies phonemes /p/</li>
                </ul>
                <p><strong>Relationship:</strong> Phonetics and phonology are complementary. Phonetics provides the physical data that phonology explains. Without phonetics, phonology would have no empirical basis; without phonology, phonetics would be a mere catalog of sounds without understanding their linguistic function. Together, they provide a complete picture: phonetics tells us what speakers physically produce, and phonology tells us how those productions are mentally organized.</p>
                <p><strong>Conclusion:</strong> Both fields are essential for understanding human speech. Phonetics provides the "how" of speech production; phonology provides the "why" of sound patterns. A complete linguist needs both: phonetics to accurately describe speech, phonology to explain its systematic nature.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <h3>🎓 Congratulations on Completing This Module!</h3>
          <p>You&apos;ve covered all aspects of Phonetics and Phonology. Make sure to practice regularly and review the quick reference sheet.</p>
          <div className="footer-links">
            <a href="#objectives" className="footer-link">↑ Back to Top</a>
            <a href="#theory" className="footer-link">📖 Review Theory</a>
            <a href="#practice" className="footer-link">🎯 More Practice</a>
            <a href="#quiz" className="footer-link">✅ Retake Quiz</a>
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

export default Module1_2;