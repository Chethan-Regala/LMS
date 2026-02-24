'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Lab1_4: React.FC = () => {
    useEffect(() => {
        const handleCollapsible = () => {
            const collapsibles = document.querySelectorAll('.collapsible');
            collapsibles.forEach((button) => {
                const handleClick = function (this: HTMLElement) {
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

    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    return (
        <div className="lab-container">
            <style jsx>{`
        .lab-container {
          background-color: #050505;
          color: #e0e0e0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          min-height: 100vh;
          padding: 40px 20px;
          line-height: 1.6;
        }

        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
          padding: 60px 40px;
          background: linear-gradient(145deg, #111111, #000000);
          border-radius: 24px;
          border: 1px solid #222;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%);
          z-index: 0;
        }

        .header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(to right, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .header p {
          font-size: 1.2rem;
          color: #888;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .badge-grid {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
          position: relative;
          z-index: 1;
        }

        .badge {
          padding: 8px 16px;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 100px;
          font-size: 0.9rem;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-card {
          background: #0d0d0d;
          border: 1px solid #1a1a1a;
          border-radius: 20px;
          margin-bottom: 30px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .section-card:hover {
          border-color: #333;
          transform: translateY(-4px);
        }

        .section-header {
          padding: 25px 35px;
          background: #111;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .section-icon {
          width: 40px;
          height: 40px;
          background: #1a1a1a;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #3498db;
        }

        .section-title h2 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        .section-content {
          padding: 35px;
          border-top: 1px solid #1a1a1a;
        }

        .ipa-word-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .ipa-card {
          background: #141414;
          padding: 20px;
          border-radius: 15px;
          border: 1px solid #222;
          text-align: center;
        }

        .ipa-card .word {
          font-size: 0.9rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .ipa-card .transcription {
          font-size: 1.8rem;
          font-family: 'Gentium Plus', serif;
          color: #3498db;
          font-weight: 500;
        }

        .analysis-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .analysis-table th {
          text-align: left;
          padding: 15px;
          color: #888;
          font-size: 0.8rem;
          text-transform: uppercase;
          border-bottom: 1px solid #222;
        }

        .analysis-table td {
          padding: 15px;
          border-bottom: 1px solid #1a1a1a;
          font-size: 1rem;
        }

        .phoneme {
          font-family: 'Gentium Plus', serif;
          color: #e74c3c;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .comparison-column h3 {
          font-size: 1.1rem;
          color: #3498db;
          margin-bottom: 20px;
        }

        .tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          padding: 6px 14px;
          background: #1a1a1a;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #ccc;
          border: 1px solid #333;
        }

        .allophone-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px;
          background: #111;
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .allophone-symbol {
          font-size: 2rem;
          color: #2ecc71;
          background: #1a1a1a;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .allophone-info h4 {
          margin: 0 0 5px 0;
          color: #fff;
        }

        .allophone-info p {
          margin: 0;
          color: #888;
          font-size: 0.9rem;
        }

        .footer-note {
          text-align: center;
          margin-top: 60px;
          color: #444;
          font-size: 0.8rem;
        }

        .minimal-pairs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .minimal-pair-card {
          background: #141414;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #222;
        }

        .minimal-pair-card h4 {
          color: #f1c40f;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .minimal-pair-content {
          font-size: 0.95rem;
          color: #aaa;
        }

        strong { color: #fff; }

        @media (max-width: 768px) {
          .comparison-grid { grid-template-columns: 1fr; }
          .header h1 { font-size: 2.5rem; }
        }
      `}</style>

            <div className="content-wrapper">
                <motion.div
                    className="header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Phonetic Lab</h1>
                    <p>Practical transcription, articulatory analysis, and cross-linguistic phonetic comparison.</p>
                    <div className="badge-grid">
                        <div className="badge"><span>⏱️</span> 60 Minutes</div>
                        <div className="badge"><span>🎯</span> Unit 1.2</div>
                        <div className="badge"><span>✅</span> Lab Exercise</div>
                    </div>
                </motion.div>

                {/* Section 1: IPA Transcription */}
                <motion.div
                    className="section-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="section-header">
                        <div className="section-title">
                            <div className="section-icon">🔡</div>
                            <h2>IPA Transcription Practice</h2>
                        </div>
                    </div>
                    <div className="section-content">
                        <p style={{ marginBottom: '25px', color: '#888' }}>
                            Transcribing English words into the International Phonetic Alphabet (IPA) based on standard American English pronunciation.
                        </p>
                        <div className="ipa-word-grid">
                            {[
                                { w: "cat", i: "[kæt]" },
                                { w: "thought", i: "[θɔːt]" },
                                { w: "sheep", i: "[ʃiːp]" },
                                { w: "ship", i: "[ʃɪp]" },
                                { w: "judge", i: "[dʒʌdʒ]" },
                                { w: "thing", i: "[θɪŋ]" },
                                { w: "sing", i: "[sɪŋ]" },
                                { w: "church", i: "[tʃɜːrtʃ]" },
                                { w: "water", i: "[ˈwɑːɾɚ]" },
                                { w: "strengths", i: "[stɹɛŋkθs]" }
                            ].map((item, idx) => (
                                <div key={idx} className="ipa-card">
                                    <div className="word">{item.w}</div>
                                    <div className="transcription">{item.i}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Section 2: Articulatory Analysis */}
                <motion.div
                    className="section-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="section-header">
                        <div className="section-title">
                            <div className="section-icon">👅</div>
                            <h2>Articulatory Analysis: "strengths"</h2>
                        </div>
                    </div>
                    <div className="section-content">
                        <table className="analysis-table">
                            <thead>
                                <tr>
                                    <th>Sound</th>
                                    <th>Place</th>
                                    <th>Manner</th>
                                    <th>Voicing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="phoneme">[s]</td>
                                    <td>Alveolar</td>
                                    <td>Fricative</td>
                                    <td>Voiceless</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[t]</td>
                                    <td>Alveolar</td>
                                    <td>Plosive</td>
                                    <td>Voiceless</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[ɹ]</td>
                                    <td>Postalveolar</td>
                                    <td>Approximant</td>
                                    <td>Voiced</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[ɛ]</td>
                                    <td>Front (Vowel)</td>
                                    <td>Mid-Open</td>
                                    <td>Voiced</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[ŋ]</td>
                                    <td>Velar</td>
                                    <td>Nasal</td>
                                    <td>Voiced</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[k]</td>
                                    <td>Velar</td>
                                    <td>Plosive</td>
                                    <td>Voiceless</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[θ]</td>
                                    <td>Dental</td>
                                    <td>Fricative</td>
                                    <td>Voiceless</td>
                                </tr>
                                <tr>
                                    <td className="phoneme">[s]</td>
                                    <td>Alveolar</td>
                                    <td>Fricative</td>
                                    <td>Voiceless</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Section 3: Minimal Pairs */}
                <motion.div
                    className="section-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="section-header">
                        <div className="section-title">
                            <div className="section-icon">👂</div>
                            <h2>Minimal Pairs Self-Analysis</h2>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="minimal-pairs-grid">
                            <div className="minimal-pair-card">
                                <h4>pat - bat - mat</h4>
                                <div className="minimal-pair-content">
                                    Differ by initial consonant voicing and manner. <strong>[p]</strong> is voiceless plosive, <strong>[b]</strong> is voiced plosive, and <strong>[m]</strong> is a voiced nasal.
                                </div>
                            </div>
                            <div className="minimal-pair-card">
                                <h4>seat - sheet - cheat</h4>
                                <div className="minimal-pair-content">
                                    Differ by initial sound place and manner. <strong>[s]</strong> is alveolar fricative, <strong>[ʃ]</strong> is postalveolar fricative, and <strong>[tʃ]</strong> is a postalveolar affricate.
                                </div>
                            </div>
                            <div className="minimal-pair-card">
                                <h4>fan - van - than</h4>
                                <div className="minimal-pair-content">
                                    Differ by voicing and place. <strong>[f]</strong> is voiceless labiodental, <strong>[v]</strong> is voiced labiodental, and <strong>[ð]</strong> is a voiced dental fricative.
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 4: Cross-Language Comparison */}
                <motion.div
                    className="section-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="section-header">
                        <div className="section-title">
                            <div className="section-icon">🌍</div>
                            <h2>English vs. Spanish Comparison</h2>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="comparison-grid">
                            <div className="comparison-column">
                                <h3>Common Phonemes</h3>
                                <div className="tag-container">
                                    {['p', 't', 'k', 'b', 'd', 'g', 'm', 'n', 'f', 's', 'l', 'i', 'u', 'e', 'o'].map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                            <div className="comparison-column">
                                <h3>English Exclusives</h3>
                                <div className="tag-container">
                                    {['θ', 'ð', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'ɹ', 'ʌ', 'æ', 'ʊ', 'ə'].map(s => <span key={s} className="tag" style={{ borderColor: '#e74c3c' }}>{s}</span>)}
                                </div>
                            </div>
                            <div className="comparison-column">
                                <h3>Spanish Exclusives</h3>
                                <div className="tag-container">
                                    {['ɲ', 'ʎ', 'x', 'r (trill)'].map(s => <span key={s} className="tag" style={{ borderColor: '#2ecc71' }}>{s}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 5: Allophone Hunt */}
                <motion.div
                    className="section-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="section-header">
                        <div className="section-title">
                            <div className="section-icon">🔬</div>
                            <h2>Allophone Hunt: The /t/ Family</h2>
                        </div>
                    </div>
                    <div className="section-content">
                        {[
                            { s: "[tʰ]", w: "Top", d: "Aspirated: Occurs word-initially before a stressed vowel." },
                            { s: "[t]", w: "Stop", d: "Unaspirated: Occurs after /s/ in the same syllable." },
                            { s: "[ɾ]", w: "Butter", d: "Flap: Occurs between two vowels, the second being unstressed." },
                            { s: "[ʔ]", w: "Mountain", d: "Glottal Stop: Occurs before a syllabic nasal in many dialects." },
                            { s: "[t̚]", w: "Cat", d: "Unreleased: Often occurs at the end of a word or before another consonant." }
                        ].map((item, idx) => (
                            <div key={idx} className="allophone-item">
                                <div className="allophone-symbol">{item.s}</div>
                                <div className="allophone-info">
                                    <h4>{item.w}</h4>
                                    <p>{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="footer-note">
                    © 2026 Linguistics Learning Systems • Unit 1: Phonetics & Phonology • Lab 1.4
                </div>
            </div>
        </div>
    );
};

export default Lab1_4;
