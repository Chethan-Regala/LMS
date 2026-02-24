'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_2: React.FC = () => {
  const module2Quiz = [
    {
      question: "What is the International Phonetic Alphabet (IPA) used for?",
      options: [
        "Learning foreign languages",
        "Representing speech sounds precisely",
        "Writing poetry",
        "Teaching grammar"
      ],
      correctAnswer: 1,
      explanation: "The IPA provides a standardized way to represent speech sounds from all languages using one symbol per sound. This eliminates the ambiguity of regular spelling systems where the same letter can represent different sounds (like 'ough' in English)."
    },
    {
      question: "Which branch of phonetics studies sound production?",
      options: [
        "Acoustic Phonetics",
        "Auditory Phonetics",
        "Articulatory Phonetics",
        "Experimental Phonetics"
      ],
      correctAnswer: 2,
      explanation: "Articulatory phonetics studies how speech sounds are produced by the vocal organs (lungs, vocal cords, tongue, lips, etc.). Acoustic phonetics studies sound waves, and auditory phonetics studies how we perceive sounds."
    },
    {
      question: "What are the three main components of consonant classification?",
      options: [
        "Height, backness, roundedness",
        "Place, manner, voicing",
        "Stress, tone, intonation",
        "Onset, nucleus, coda"
      ],
      correctAnswer: 1,
      explanation: "Consonants are classified by: Place (where in the mouth), Manner (how air flows), and Voicing (whether vocal cords vibrate). Height, backness, and roundedness describe vowels. Stress, tone, and intonation are prosodic features."
    },
    {
      question: "Which vowel feature refers to tongue position from front to back?",
      options: ["Height", "Backness", "Roundedness", "Length"],
      correctAnswer: 1,
      explanation: "Backness refers to how far forward or back the tongue is positioned. Height refers to how high or low the tongue is, roundedness refers to lip shape, and length refers to vowel duration."
    },
    {
      question: "What does 'voicing' refer to in phonetics?",
      options: [
        "Speaking loudly",
        "Vocal fold vibration",
        "Articulation place",
        "Sound duration"
      ],
      correctAnswer: 1,
      explanation: "Voicing refers to whether the vocal folds (vocal cords) vibrate during sound production. Voiced sounds like /b/, /d/, /g/ have vibration; voiceless sounds like /p/, /t/, /k/ don't. You can feel this by putting your hand on your throat."
    }
  ];

  return (
    <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Phonetics</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Phonetics?</h3>
              <p>Have you ever wondered how we actually make the sounds when we speak? Or why "p" and "b" sound similar but different? Phonetics is the study of speech sounds - how we produce them, what they sound like physically, and how we hear them.</p>
              
              <p><strong>Think of it this way:</strong> When you say "pat" and "bat", your mouth does almost the same thing. The only difference? Your vocal cords vibrate for "b" but not for "p". Try it - put your hand on your throat and feel the difference!</p>
              
             
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ugppjNn8uIE?si=kTCEuvmkZnpyclin" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
             style={{width: '550px', height: '325px'}}></iframe>

              <h4>Three Ways to Study Speech Sounds</h4>
              
              <h5>1. Articulatory Phonetics - How We Make Sounds</h5>
              <ul>
                <li><strong>What it studies:</strong> The physical process of producing speech</li>
                <li><strong>Your speech organs:</strong>
                  <ul>
                    <li>Lungs (provide air)</li>
                    <li>Vocal cords (vibrate to make voice)</li>
                    <li>Tongue (most flexible articulator)</li>
                    <li>Lips, teeth, roof of mouth (shape the sounds)</li>
                  </ul>
                </li>
                <li><strong>Try this:</strong> Say "k" and "t". Notice how "k" is made in the back of your mouth, but "t" is made at the front?</li>
              </ul>

              <h5>2. Acoustic Phonetics - What Sounds Look Like</h5>
              <ul>
                <li><strong>What it studies:</strong> Sound waves and their physical properties</li>
                <li><strong>Key concepts:</strong>
                  <ul>
                    <li>Frequency = how high or low a sound is (pitch)</li>
                    <li>Amplitude = how loud a sound is</li>
                    <li>Duration = how long a sound lasts</li>
                  </ul>
                </li>
                <li><strong>Cool fact:</strong> Scientists can see your voice! They use spectrograms (like pictures of sound waves)</li>
              </ul>

              <h5>3. Auditory Phonetics - How We Hear Sounds</h5>
              <ul>
                <li><strong>What it studies:</strong> How our ears and brain process speech</li>
                <li><strong>Interesting fact:</strong> Your brain automatically groups similar sounds together, which is why you can understand different accents</li>
              </ul>

              <div className="example-box">
                <h5>The International Phonetic Alphabet (IPA)</h5>
                <p>English spelling is confusing! "Tough", "through", and "though" all have "ough" but sound different. The IPA solves this:</p>
                <ul>
                  <li><strong>One symbol = one sound</strong> (unlike English spelling)</li>
                  <li>"ship" = [ʃɪp] and "sheep" = [ʃip] - you can see the vowel difference!</li>
                  <li>Used by linguists worldwide</li>
                  <li>Covers sounds from ALL languages</li>
                </ul>
              </div>

              <h4>Understanding Consonants</h4>
              <p>Consonants are sounds where air is blocked or restricted. We classify them by THREE features:</p>
              
              <h5>Feature 1: WHERE in your mouth (Place of Articulation)</h5>
              <ul>
                <li><strong>Bilabial (both lips):</strong> p, b, m
                  <ul><li>Try it: "pat", "bat", "mat" - your lips come together</li></ul>
                </li>
                <li><strong>Labiodental (lip + teeth):</strong> f, v
                  <ul><li>Try it: "fat", "vat" - your top teeth touch your bottom lip</li></ul>
                </li>
                <li><strong>Alveolar (tongue + ridge behind teeth):</strong> t, d, s, z, n, l
                  <ul><li>Try it: "tap" - your tongue touches the bumpy ridge behind your teeth</li></ul>
                </li>
                <li><strong>Velar (tongue + soft palate):</strong> k, g
                  <ul><li>Try it: "cat", "gap" - made in the back of your mouth</li></ul>
                </li>
              </ul>

              <h5>Feature 2: HOW air flows (Manner of Articulation)</h5>
              <ul>
                <li><strong>Stops:</strong> Air completely blocked then released (p, t, k, b, d, g)
                  <ul><li>Like popping a balloon!</li></ul>
                </li>
                <li><strong>Fricatives:</strong> Air squeezed through narrow gap (f, s, sh, h, v, z)
                  <ul><li>Makes a hissing or buzzing sound</li></ul>
                </li>
                <li><strong>Nasals:</strong> Air goes through your nose (m, n, ng)
                  <ul><li>Try saying "m" while pinching your nose - you can't!</li></ul>
                </li>
                <li><strong>Liquids:</strong> Air flows around tongue (l, r)
                  <ul><li>These are the "smooth" consonants</li></ul>
                </li>
              </ul>

              <h5>Feature 3: Voice or No Voice (Voicing)</h5>
              <ul>
                <li><strong>Voiced:</strong> Vocal cords vibrate (b, d, g, v, z)
                  <ul><li>Put your hand on your throat - you'll feel buzzing!</li></ul>
                </li>
                <li><strong>Voiceless:</strong> No vibration (p, t, k, f, s)
                  <ul><li>Just air, no buzzing</li></ul>
                </li>
                <li><strong>Pairs:</strong> p/b, t/d, k/g, f/v, s/z - same mouth position, different voicing!</li>
              </ul>

              <h4>Understanding Vowels</h4>
              <p>Vowels are sounds where air flows freely. We classify them by tongue position:</p>
              
              <h5>Feature 1: Tongue Height (How high is your tongue?)</h5>
              <ul>
                <li><strong>High vowels:</strong> "beet" [i], "boot" [u]
                  <ul><li>Tongue is close to the roof of your mouth</li></ul>
                </li>
                <li><strong>Mid vowels:</strong> "bait" [e], "boat" [o]
                  <ul><li>Tongue is in the middle</li></ul>
                </li>
                <li><strong>Low vowels:</strong> "bat" [æ], "bot" [ɑ]
                  <ul><li>Tongue is low, mouth is open</li></ul>
                </li>
              </ul>

              <h5>Feature 2: Tongue Position (Front or Back?)</h5>
              <ul>
                <li><strong>Front vowels:</strong> "beet" [i], "bit" [ɪ]
                  <ul><li>Tongue pushed forward</li></ul>
                </li>
                <li><strong>Back vowels:</strong> "boot" [u], "boat" [o]
                  <ul><li>Tongue pulled back</li></ul>
                </li>
                <li><strong>Central vowels:</strong> "but" [ʌ], "about" [ə]
                  <ul><li>Tongue in neutral position</li></ul>
                </li>
              </ul>

              <h5>Feature 3: Lip Rounding</h5>
              <ul>
                <li><strong>Rounded:</strong> "boot" [u], "boat" [o]
                  <ul><li>Lips form a circle</li></ul>
                </li>
                <li><strong>Unrounded:</strong> "beet" [i], "bat" [æ]
                  <ul><li>Lips spread or neutral</li></ul>
                </li>
              </ul>

              <h5>Special Vowels</h5>
              <ul>
                <li><strong>Diphthongs:</strong> Two vowel sounds glide together
                  <ul>
                    <li>"boy" = [ɔɪ] (starts with "o", ends with "i")</li>
                    <li>"cow" = [aʊ] (starts with "a", ends with "u")</li>
                  </ul>
                </li>
              </ul>

              <div className="phonetic-analysis">
                <h5>Articulatory Analysis Framework</h5>
                <p>Systematic approach to analyzing speech sound production:</p>
                
                <div className="analysis-table">
                  <h6>Consonant Classification Matrix</h6>
                  <table>
                    <thead>
                      <tr><th>Sound</th><th>Place</th><th>Manner</th><th>Voicing</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>/p/</td><td>Bilabial</td><td>Stop</td><td>Voiceless</td><td>"pat" [pʰæt]</td></tr>
                      <tr><td>/b/</td><td>Bilabial</td><td>Stop</td><td>Voiced</td><td>"bat" [bæt]</td></tr>
                      <tr><td>/f/</td><td>Labiodental</td><td>Fricative</td><td>Voiceless</td><td>"fat" [fæt]</td></tr>
                      <tr><td>/v/</td><td>Labiodental</td><td>Fricative</td><td>Voiced</td><td>"vat" [væt]</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="vowel-space">
                  <h6>Vowel Classification System</h6>
                  <div className="vowel-chart">
                    <div className="vowel-row">
                      <span className="vowel-label">High:</span>
                      <span className="vowel-item">/i/ "beat"</span>
                      <span className="vowel-item">/ɪ/ "bit"</span>
                      <span className="vowel-item">/u/ "boot"</span>
                      <span className="vowel-item">/ʊ/ "book"</span>
                    </div>
                    <div className="vowel-row">
                      <span className="vowel-label">Mid:</span>
                      <span className="vowel-item">/e/ "bait"</span>
                      <span className="vowel-item">/ɛ/ "bet"</span>
                      <span className="vowel-item">/o/ "boat"</span>
                      <span className="vowel-item">/ɔ/ "bought"</span>
                    </div>
                    <div className="vowel-row">
                      <span className="vowel-label">Low:</span>
                      <span className="vowel-item">/æ/ "bat"</span>
                      <span className="vowel-item">/ɑ/ "bot"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="transcription-practice">
                <h5>IPA Transcription Analysis</h5>
                <p>Systematic phonetic transcription demonstrates sound-symbol correspondence:</p>
                <div className="transcription-examples">
                  <div className="transcription-pair">
                    <span className="orthography">"thought"</span>
                    <span className="ipa">[θɔt]</span>
                    <span className="analysis">Shows /θ/ fricative, /ɔ/ back vowel</span>
                  </div>
                  <div className="transcription-pair">
                    <span className="orthography">"psychology"</span>
                    <span className="ipa">[saɪˈkɑlədʒi]</span>
                    <span className="analysis">Demonstrates silent letters, stress placement</span>
                  </div>
                  <div className="transcription-pair">
                    <span className="orthography">"strength"</span>
                    <span className="ipa">[strɛŋkθ]</span>
                    <span className="analysis">Complex consonant clusters, velar nasal</span>
                  </div>
                </div>
              </div>

              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2pxrDWjEBoE?si=LnLs5_dL82hCKELO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{width: '550px', height: '325px'}}></iframe>
            
            </section>

            <Quiz title="Module 1.2 Quiz: Phonetics" questions={module2Quiz} subject="LS" unitId={1} moduleId={2} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.internationalphoneticassociation.org/" target="_blank" rel="noopener noreferrer">International Phonetic Association</a></li>
                <li><a href="https://www.ipachart.com/" target="_blank" rel="noopener noreferrer">Interactive IPA Chart</a></li>
                <li><a href="https://www.phonetics.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA Phonetics Lab</a></li>
              </ul>
            </div>

            
          </div>
  );
};

export default Module1_2;