'use client';
import React from 'react';

const Module1_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.6</div>
        <div className="lesson-title-main">
          <h1>🔍 Text Search using Finite Automata</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 What You'll Master - Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Design and construct finite automata for efficient pattern matching in text strings, analyzing time complexity of O(n) for text processing</li>
            <li>Implement the Knuth-Morris-Pratt (KMP) algorithm using prefix function computation and compare its performance with naive string matching</li>
            <li>Apply the Aho-Corasick algorithm for multi-pattern searching and construct failure functions for automata-based text search</li>
            <li>Analyze and optimize string matching algorithms, calculating preprocessing time and matching complexity for real-world applications</li>
            <li>Evaluate trade-offs between different text search algorithms (Naive, KMP, Boyer-Moore, Rabin-Karp) based on pattern length and alphabet size</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're using the "Find" feature in a text editor to locate specific words in a 10,000-page document. Or consider how Google searches through billions of web pages in milliseconds to find pages containing your search terms. Behind these everyday experiences lies the fascinating world of text search algorithms—computational methods that efficiently locate patterns within large bodies of text.
        </p>
        <p className="mt-2">
          Text search algorithms built on finite automata represent one of the most elegant applications of theoretical computer science to practical problems. When you press Ctrl+F in your browser or IDE, you're invoking algorithms that trace their lineage back to automata theory. The magic lies in preprocessing the pattern you're searching for—building a finite automaton that can scan through text in linear time without ever needing to backtrack.
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Search Engines:</strong> Google's indexing and searching mechanisms use advanced pattern matching algorithms</li>
          <li><strong>Plagiarism Detection:</strong> Tools like Turnitin use multi-pattern search algorithms to detect copied content</li>
          <li><strong>Bioinformatics:</strong> BLAST algorithm searches DNA/protein databases using automata-based matching</li>
          <li><strong>Network Security:</strong> Intrusion Detection Systems like Snort use Aho-Corasick for detecting malicious patterns</li>
          <li><strong>Text Editors:</strong> IDEs like VS Code use optimized search algorithms for find-and-replace operations</li>
          <li><strong>Antivirus Software:</strong> Virus scanners use multi-pattern matching to detect malware signatures</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Video Resources</h3>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold mb-2">String Matching with Finite Automata</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/egXhe55dAIk?si=-893BNbi4dIHIAW9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">KMP Algorithm Explained</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/84oNUttWlN4?si=-Ow7TlZmE2i9332i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Pattern Matching Algorithms</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ehy0jGIYRtE?si=fsEnJ0imU5erqZez" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Advanced String Matching Techniques</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/--CSVsFIDng?si=3f2NHd6pa6t52K7e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📖 Deep Dive: Understanding Text Search</h3>

        <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
        <p>
          Text search (also called string matching or pattern matching) is the problem of finding all occurrences of a pattern string P of length m within a text string T of length n. The fundamental challenge is efficiency—a naive approach requires O(nm) comparisons in the worst case, which becomes prohibitively slow for large texts.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Key Concepts:</p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
            <li><strong>Text (T):</strong> The input string in which we search for the pattern; T[0..n-1] where n is the text length</li>
            <li><strong>Pattern (P):</strong> The string we're searching for; P[0..m-1] where m is the pattern length</li>
            <li><strong>Match:</strong> An occurrence of the pattern in the text at position i if T[i..i+m-1] = P[0..m-1]</li>
            <li><strong>Prefix Function:</strong> π[i] stores the length of the longest proper prefix of P[0..i] which is also a suffix</li>
            <li><strong>Preprocessing Time:</strong> Time spent building the automaton/prefix table before searching; typically O(m)</li>
            <li><strong>Matching Time:</strong> Time spent scanning the text; optimal algorithms achieve O(n)</li>
          </ul>
        </div>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Failure Function:</strong> Guides the automaton on what state to transition to when a mismatch occurs</li>
          <li><strong>Proper Prefix:</strong> A prefix of a string that is not equal to the string itself</li>
          <li><strong>LPS Array:</strong> Longest Proper Prefix which is also Suffix - used in KMP algorithm</li>
          <li><strong>Backtracking:</strong> Re-examining previously scanned characters; optimal algorithms avoid this</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>How It Works: The Mechanism Explained</h3>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl">
            <h4 className="text-center font-bold text-lg mb-4">Finite Automaton for Pattern "ABABC"</h4>
            <svg width="900" height="300" viewBox="0 0 900 300" className="mx-auto">
              {/* States */}
              <circle cx="50" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="50" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">0</text>
              <text x="50" y="162" textAnchor="middle" fontSize="11">Start</text>

              <circle cx="200" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="200" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">1</text>
              <text x="200" y="162" textAnchor="middle" fontSize="11">"A"</text>

              <circle cx="350" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">2</text>
              <text x="350" y="162" textAnchor="middle" fontSize="11">"AB"</text>

              <circle cx="500" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="500" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">3</text>
              <text x="500" y="162" textAnchor="middle" fontSize="11">"ABA"</text>

              <circle cx="650" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="650" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">4</text>
              <text x="650" y="162" textAnchor="middle" fontSize="11">"ABAB"</text>

              <circle cx="820" cy="150" r="35" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
              <circle cx="820" cy="150" r="30" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="820" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">5</text>
              <text x="820" y="162" textAnchor="middle" fontSize="10">"ABABC"</text>
              <text x="820" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16a34a">MATCH!</text>

              {/* Success transitions (solid arrows) */}
              <line x1="85" y1="150" x2="165" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="125" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">A</text>

              <line x1="235" y1="150" x2="315" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="275" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">B</text>

              <line x1="385" y1="150" x2="465" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="425" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">A</text>

              <line x1="535" y1="150" x2="615" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="575" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">B</text>

              <line x1="685" y1="150" x2="785" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="735" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">C</text>

              {/* Failure transitions (dashed arrows) */}
              <path d="M 200 185 Q 125 230 50 185" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowFailure)" />
              <text x="125" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">B,C</text>

              <path d="M 350 185 Q 275 230 200 185" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowFailure)" />
              <text x="275" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">C</text>

              <path d="M 465 165 Q 425 200 385 165" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowFailure)" />
              <text x="425" y="210" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">C</text>

              {/* Arrow markers */}
              <defs>
                <marker id="arrowSuccess" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#059669" />
                </marker>
                <marker id="arrowFailure" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
                </marker>
              </defs>
            </svg>

            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-semibold mb-2">Legend:</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-green-600"></div>
                  <span>Success transition (matches pattern character)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-red-600 border-dashed" style={{ borderTop: '2px dashed #dc2626', height: '0' }}></div>
                  <span>Failure transition (mismatch, use longest proper suffix)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-green-600"></div>
                  <span>Accepting state (pattern found)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
            <h4 className="text-center font-bold text-lg mb-4">Text Search Algorithm Flow</h4>
            <svg width="800" height="900" viewBox="0 0 800 900" className="mx-auto">
              {/* Start */}
              <ellipse cx="400" cy="30" rx="60" ry="25" fill="#10b981" stroke="#065f46" strokeWidth="2" />
              <text x="400" y="37" textAnchor="middle" fill="white" fontWeight="bold">Start</text>

              {/* Input */}
              <rect x="280" y="70" width="240" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="400" y="90" textAnchor="middle" fontSize="13" fontWeight="bold">Input: Text T length n,</text>
              <text x="400" y="107" textAnchor="middle" fontSize="13" fontWeight="bold">Pattern P length m</text>
              <line x1="400" y1="55" x2="400" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Build Automaton */}
              <rect x="260" y="140" width="280" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="400" y="165" textAnchor="middle" fontSize="13" fontWeight="bold">Build Finite Automaton from Pattern P</text>
              <line x1="400" y1="120" x2="400" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Compute Prefix */}
              <rect x="260" y="200" width="280" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="400" y="225" textAnchor="middle" fontSize="13" fontWeight="bold">Compute Prefix/Failure Function π</text>
              <line x1="400" y1="180" x2="400" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Create States */}
              <rect x="280" y="260" width="240" height="40" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="400" y="285" textAnchor="middle" fontSize="13" fontWeight="bold">Create m+1 states: 0 to m</text>
              <line x1="400" y1="240" x2="400" y2="260" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Compute Transitions */}
              <rect x="240" y="320" width="320" height="50" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="400" y="340" textAnchor="middle" fontSize="12" fontWeight="bold">Compute transition function δ(q,c)</text>
              <text x="400" y="357" textAnchor="middle" fontSize="12" fontWeight="bold">for all states and characters</text>
              <line x1="400" y1="300" x2="400" y2="320" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Initialize */}
              <rect x="260" y="390" width="280" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="400" y="415" textAnchor="middle" fontSize="13" fontWeight="bold">Initialize: state q = 0, position i = 0</text>
              <line x1="400" y1="370" x2="400" y2="390" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Decision: i < n? */}
              <path d="M 400 450 L 480 490 L 400 530 L 320 490 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="400" y="495" textAnchor="middle" fontSize="13" fontWeight="bold">i &lt; n?</text>
              <line x1="400" y1="430" x2="400" y2="450" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Read Character */}
              <rect x="300" y="560" width="200" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="400" y="585" textAnchor="middle" fontSize="13" fontWeight="bold">Read character c = T[i]</text>
              <line x1="400" y1="530" x2="400" y2="560" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="410" y="545" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              {/* Transition */}
              <rect x="320" y="620" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="400" y="645" textAnchor="middle" fontSize="13" fontWeight="bold">q = δ(q, c)</text>
              <line x1="400" y1="600" x2="400" y2="620" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Decision: q == m? */}
              <path d="M 400 680 L 480 720 L 400 760 L 320 720 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="400" y="725" textAnchor="middle" fontSize="13" fontWeight="bold">q == m?</text>
              <line x1="400" y1="660" x2="400" y2="680" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Report Match */}
              <rect x="540" y="700" width="200" height="50" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="640" y="720" textAnchor="middle" fontSize="12" fontWeight="bold">Report match at</text>
              <text x="640" y="737" textAnchor="middle" fontSize="12" fontWeight="bold">position i - m + 1</text>
              <line x1="480" y1="720" x2="540" y2="720" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="510" y="715" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              {/* Use Failure Function */}
              <rect x="540" y="770" width="200" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="640" y="795" textAnchor="middle" fontSize="12" fontWeight="bold">Use failure function to transition q</text>
              <line x1="640" y1="750" x2="640" y2="770" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Increment i */}
              <rect x="320" y="790" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="400" y="815" textAnchor="middle" fontSize="13" fontWeight="bold">i = i + 1</text>
              <line x1="400" y1="760" x2="400" y2="790" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="410" y="775" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              {/* Loop back */}
              <path d="M 320 810 L 200 810 L 200 490 L 320 490" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 640 810 L 680 810 L 680 490 L 480 490" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Output */}
              <rect x="300" y="550" width="200" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="400" y="575" textAnchor="middle" fontSize="13" fontWeight="bold">Output: All match positions</text>
              <line x1="320" y1="490" x2="300" y2="570" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="300" y="530" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              {/* End */}
              <ellipse cx="400" cy="870" rx="60" ry="25" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="400" y="877" textAnchor="middle" fill="white" fontWeight="bold">End</text>
              <line x1="400" y1="590" x2="400" y2="845" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4 italic">Figure 5: Complete flowchart of automata-based string matching algorithm</p>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">Step 1: Preprocessing the Pattern</h4>
            <p className="text-sm mt-2">Before searching begins, we build the automaton from the pattern. For pattern P of length m, we create m+1 states representing "we've successfully matched the first i characters of the pattern."</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">Step 2: Computing Transitions</h4>
            <p className="text-sm mt-2">Determine what state to go to from state q on character c. If P[q] = c, we advance to state q+1. Otherwise, we use the prefix/failure function to find the longest prefix that matches.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Step 3: Scanning the Text</h4>
            <p className="text-sm mt-2">Once the automaton is built, we start in state 0 and read the text character by character. Each character is examined exactly once, giving us O(n) matching time.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">Step 4: Reporting Matches</h4>
            <p className="text-sm mt-2">When we reach the accepting state, we report the match position and continue searching using the failure function to find overlapping matches.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>⚙️ The KMP Algorithm</h3>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
            <h4 className="text-center font-bold text-lg mb-4">KMP Algorithm Flowchart</h4>
            <svg width="700" height="1000" viewBox="0 0 700 1000" className="mx-auto">
              {/* Start */}
              <ellipse cx="350" cy="30" rx="80" ry="25" fill="#10b981" stroke="#065f46" strokeWidth="2" />
              <text x="350" y="37" textAnchor="middle" fill="white" fontWeight="bold">Start KMP</text>

              {/* Input */}
              <rect x="260" y="70" width="180" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="95" textAnchor="middle" fontSize="13" fontWeight="bold">Input: T[n], P[m]</text>
              <line x1="350" y1="55" x2="350" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Compute Prefix */}
              <rect x="230" y="130" width="240" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="350" y="155" textAnchor="middle" fontSize="13" fontWeight="bold">Compute Prefix Function π</text>
              <line x1="350" y1="110" x2="350" y2="130" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Initialize */}
              <rect x="250" y="190" width="200" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="350" y="215" textAnchor="middle" fontSize="13" fontWeight="bold">Initialize: q=0, i=0</text>
              <line x1="350" y1="170" x2="350" y2="190" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Decision: i < n? */}
              <path d="M 350 250 L 420 290 L 350 330 L 280 290 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="295" textAnchor="middle" fontSize="13" fontWeight="bold">i &lt; n?</text>
              <line x1="350" y1="230" x2="350" y2="250" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Decision: q>0 AND mismatch */}
              <path d="M 350 370 L 430 415 L 350 460 L 270 415 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="410" textAnchor="middle" fontSize="12" fontWeight="bold">q&gt;0 AND</text>
              <text x="350" y="425" textAnchor="middle" fontSize="12" fontWeight="bold">P[q] ≠ T[i]?</text>
              <line x1="350" y1="330" x2="350" y2="370" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="360" y="350" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              {/* q = π[q-1] */}
              <rect x="490" y="395" width="140" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="560" y="420" textAnchor="middle" fontSize="13" fontWeight="bold">q = π[q-1]</text>
              <line x1="430" y1="415" x2="490" y2="415" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="460" y="410" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              {/* Loop back from q = π[q-1] */}
              <path d="M 630 415 L 660 415 L 660 290 L 420 290" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

              {/* Decision: P[q] = T[i]? */}
              <path d="M 350 500 L 420 540 L 350 580 L 280 540 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="545" textAnchor="middle" fontSize="13" fontWeight="bold">P[q] = T[i]?</text>
              <line x1="350" y1="460" x2="350" y2="500" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="360" y="480" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              {/* q = q + 1 */}
              <rect x="280" y="610" width="140" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="635" textAnchor="middle" fontSize="13" fontWeight="bold">q = q + 1</text>
              <line x1="350" y1="580" x2="350" y2="610" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="360" y="595" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              {/* i = i + 1 */}
              <rect x="280" y="680" width="140" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="705" textAnchor="middle" fontSize="13" fontWeight="bold">i = i + 1</text>
              <line x1="350" y1="650" x2="350" y2="680" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Skip path from P[q] != T[i] No */}
              <path d="M 280 540 L 200 540 L 200 700 L 280 700" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
              <text x="210" y="535" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              {/* Decision: q = m? */}
              <path d="M 350 750 L 420 790 L 350 830 L 280 790 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="795" textAnchor="middle" fontSize="13" fontWeight="bold">q = m?</text>
              <line x1="350" y1="720" x2="350" y2="750" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Report match */}
              <rect x="470" y="770" width="180" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="560" y="795" textAnchor="middle" fontSize="12" fontWeight="bold">Report match at i-m+1</text>
              <line x1="420" y1="790" x2="470" y2="790" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="445" y="785" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              {/* q = π[q-1] after match */}
              <rect x="490" y="840" width="140" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="560" y="865" textAnchor="middle" fontSize="13" fontWeight="bold">q = π[q-1]</text>
              <line x1="560" y1="810" x2="560" y2="840" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Loop back to i < n? */}
              <path d="M 350 830 L 350 900 L 100 900 L 100 290 L 280 290" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
              <text x="360" y="850" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              {/* Loop from q = π[q-1] after match */}
              <path d="M 630 860 L 680 860 L 680 290 L 420 290" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

              {/* End */}
              <ellipse cx="350" cy="960" rx="60" ry="25" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="350" y="967" textAnchor="middle" fill="white" fontWeight="bold">End</text>
              <line x1="280" y1="290" x2="200" y2="290" stroke="#374151" strokeWidth="2" />
              <line x1="200" y1="290" x2="200" y2="960" stroke="#374151" strokeWidth="2" />
              <line x1="200" y1="960" x2="290" y2="960" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="210" y="285" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              {/* Arrow marker */}
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4 italic">Figure 8: Complete flowchart of KMP string matching algorithm</p>
          </div>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-4 mt-4">
          <p className="font-semibold">Algorithm Overview</p>
          <p className="text-sm mt-2">The Knuth-Morris-Pratt algorithm preprocesses the pattern to compute a "failure function" (LPS array), then uses this to avoid rescanning characters in the text.</p>
          <p className="text-sm mt-2"><strong>Time Complexity:</strong> O(m + n) where m is pattern length, n is text length</p>
          <p className="text-sm mt-2"><strong>Space Complexity:</strong> O(m) for storing the prefix function array</p>
          <p className="text-sm mt-2"><strong>Key Advantage:</strong> Never backtracks in the text - each character examined at most twice</p>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded">
          <p className="font-semibold">Prefix Function Computation:</p>
          <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
            <li>Initialize π[0] = 0 (base case)</li>
            <li>For each position q from 1 to m-1:</li>
            <li>While mismatch occurs, use failure link: k = π[k-1]</li>
            <li>If characters match, increment k</li>
            <li>Store π[q] = k</li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>🏗️ System Architecture: Complete Overview</h3>

        <div className="flex flex-col items-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-6xl w-full">
            <h4 className="text-center font-bold text-lg mb-4">Complete Architecture of Automata-Based String Matching</h4>
            <svg width="1000" height="700" viewBox="0 0 1000 700" className="mx-auto">
              <rect x="50" y="30" width="200" height="120" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="150" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">Input Components</text>
              <text x="150" y="80" textAnchor="middle" fontSize="11">Pattern P: "ABABC"</text>
              <text x="150" y="100" textAnchor="middle" fontSize="11">Text T: &quot;ABABDABA...&quot;</text>
              <text x="150" y="120" textAnchor="middle" fontSize="11">m = 5, n = large</text>

              <rect x="50" y="180" width="200" height="150" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="150" y="205" textAnchor="middle" fontSize="14" fontWeight="bold">Preprocessing Module</text>
              <text x="150" y="225" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="bold">O(m) Time</text>
              <rect x="60" y="235" width="180" height="40" fill="#fef9e7" stroke="#f59e0b" strokeWidth="1" rx="3" />
              <text x="150" y="252" textAnchor="middle" fontSize="10" fontWeight="bold">Prefix Function Builder</text>
              <text x="150" y="265" textAnchor="middle" fontSize="9">Compute π[i] for all i</text>
              <rect x="60" y="280" width="180" height="40" fill="#fef9e7" stroke="#f59e0b" strokeWidth="1" rx="3" />
              <text x="150" y="297" textAnchor="middle" fontSize="10" fontWeight="bold">Transition Function Builder</text>
              <text x="150" y="310" textAnchor="middle" fontSize="9">Build δ(q,c) table</text>

              <rect x="300" y="30" width="200" height="300" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="400" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">Finite Automaton</text>
              <rect x="310" y="65" width="180" height="50" fill="#f0f4ff" stroke="#6366f1" strokeWidth="1" rx="3" />
              <text x="400" y="82" textAnchor="middle" fontSize="10" fontWeight="bold">DFA Structure</text>
              <text x="400" y="95" textAnchor="middle" fontSize="9">{'States Q = {0, 1, 2, 3, 4, 5}'}</text>
              <text x="400" y="107" textAnchor="middle" fontSize="9">{'q₀ = 0, F = {5}'}</text>
              <rect x="310" y="120" width="180" height="40" fill="#f0f4ff" stroke="#6366f1" strokeWidth="1" rx="3" />
              <text x="400" y="137" textAnchor="middle" fontSize="10" fontWeight="bold">Transition Table δ</text>
              <text x="400" y="150" textAnchor="middle" fontSize="9">State × Alphabet → State</text>
              <rect x="310" y="165" width="180" height="40" fill="#f0f4ff" stroke="#6366f1" strokeWidth="1" rx="3" />
              <text x="400" y="182" textAnchor="middle" fontSize="10" fontWeight="bold">Alphabet Σ</text>
              <text x="400" y="195" textAnchor="middle" fontSize="9">{'{A, B, C, D, ...}'}</text>

              <rect x="300" y="360" width="200" height="200" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="400" y="385" textAnchor="middle" fontSize="14" fontWeight="bold">Matching Engine</text>
              <text x="400" y="405" textAnchor="middle" fontSize="11" fill="#10b981" fontWeight="bold">O(n) Time</text>
              <rect x="310" y="415" width="180" height="35" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="3" />
              <text x="400" y="430" textAnchor="middle" fontSize="10" fontWeight="bold">State Tracker: current q</text>
              <text x="400" y="442" textAnchor="middle" fontSize="9">Maintains automaton state</text>
              <rect x="310" y="455" width="180" height="40" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="3" />
              <text x="400" y="472" textAnchor="middle" fontSize="10" fontWeight="bold">Text Scanner</text>
              <text x="400" y="485" textAnchor="middle" fontSize="9">Read T[i], compute q = δ(q, T[i])</text>
              <rect x="310" y="500" width="180" height="50" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="3" />
              <text x="400" y="517" textAnchor="middle" fontSize="10" fontWeight="bold">Match Reporter</text>
              <text x="400" y="530" textAnchor="middle" fontSize="9">Detection: if q == m then MATCH</text>
              <text x="400" y="542" textAnchor="middle" fontSize="9">Position: Match at i - m + 1</text>

              <rect x="550" y="180" width="200" height="150" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="5" />
              <text x="650" y="205" textAnchor="middle" fontSize="14" fontWeight="bold">Output: All match indices</text>
              <rect x="560" y="220" width="180" height="100" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" rx="3" />
              <text x="650" y="240" textAnchor="middle" fontSize="12" fontWeight="bold">Results</text>
              <text x="650" y="260" textAnchor="middle" fontSize="11">Matches: [7, 15, 23]</text>
              <text x="650" y="280" textAnchor="middle" fontSize="11">Count: 3</text>
              <text x="650" y="300" textAnchor="middle" fontSize="11">Time: O(n) ✓ Optimal</text>

              <rect x="550" y="360" width="200" height="120" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="650" y="385" textAnchor="middle" fontSize="14" fontWeight="bold">Overall Complexity</text>
              <text x="650" y="410" textAnchor="middle" fontSize="11">Preprocessing: O(m)</text>
              <text x="650" y="430" textAnchor="middle" fontSize="11">Matching: O(n)</text>
              <text x="650" y="455" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a">Total: O(m + n)</text>
              <text x="650" y="472" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16a34a">Optimal!</text>

              <rect x="550" y="30" width="200" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="650" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">Text T</text>
              <text x="650" y="75" textAnchor="middle" fontSize="11">&quot;ABABDABAABABC...&quot;</text>
              <text x="650" y="95" textAnchor="middle" fontSize="11">Length: n (large)</text>

              <line x1="150" y1="150" x2="150" y2="180" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="250" y1="255" x2="300" y2="255" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="400" y1="330" x2="400" y2="360" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="500" y1="460" x2="550" y2="255" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="650" y1="110" x2="500" y2="460" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />

              <rect x="800" y="30" width="180" height="200" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" rx="5" />
              <text x="890" y="55" textAnchor="middle" fontSize="13" fontWeight="bold">Legend</text>
              <rect x="810" y="70" width="30" height="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
              <text x="850" y="84" fontSize="10">Input Data</text>
              <rect x="810" y="100" width="30" height="20" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
              <text x="850" y="114" fontSize="10">Preprocessing</text>
              <rect x="810" y="130" width="30" height="20" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" />
              <text x="850" y="144" fontSize="10">Automaton</text>
              <rect x="810" y="160" width="30" height="20" fill="#dcfce7" stroke="#10b981" strokeWidth="1" />
              <text x="850" y="174" fontSize="10">Matching</text>
              <rect x="810" y="190" width="30" height="20" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1" />
              <text x="850" y="204" fontSize="10">Output</text>

              <defs>
                <marker id="arrowArch" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4 italic">Figure 6: Complete system architecture showing preprocessing, automaton structure, matching engine, and output</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>⚠️ Common Misconceptions</h3>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #1: Automata-based search is always faster</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> For very short patterns (m ≤ 3) and small texts, the naive O(nm) algorithm can be faster due to lower constant factors and better cache locality.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #2: KMP directly builds a finite automaton</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> KMP implicitly simulates an automaton but doesn't explicitly build the full transition table. It uses the prefix function and processes transitions on-the-fly.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #3: All O(n) algorithms have same performance</h4>
            <p className="text-sm mt-2"><strong>Reality:</strong> While KMP and automata-based matching have O(n) worst-case time, their practical performance varies. Boyer-Moore often performs best in practice despite O(nm) worst case.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>💻 Code Implementation</h3>
        <p className="mb-4">Complete KMP algorithm implementation in Python:</p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`def compute_prefix_function(pattern):
    m = len(pattern)
    pi = [0] * m
    k = 0
    
    for q in range(1, m):
        while k > 0 and pattern[k] != pattern[q]:
            k = pi[k - 1]
        if pattern[k] == pattern[q]:
            k += 1
        pi[q] = k
    return pi

def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    
    if m == 0 or n < m:
        return []
    
    pi = compute_prefix_function(pattern)
    matches = []
    q = 0
    
    for i in range(n):
        while q > 0 and pattern[q] != text[i]:
            q = pi[q - 1]
        if pattern[q] == text[i]:
            q += 1
        if q == m:
            matches.append(i - m + 1)
            q = pi[q - 1]
    
    return matches`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">✅ Key Implementation Points:</h4>
          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            <li>Prefix function computed in O(m) time using dynamic programming</li>
            <li>Text scanning never backtracks - i only increments</li>
            <li>Failure links (π array) guide state transitions on mismatch</li>
            <li>Finds all occurrences including overlapping matches</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>📚 Worked Example: Building Prefix Function</h3>

        <div className="bg-blue-50 p-4 rounded mt-4">
          <p className="font-semibold">Example: Compute π for pattern "ABABCABAB"</p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">Index i</th>
                  <th className="border border-gray-300 p-2">0</th>
                  <th className="border border-gray-300 p-2">1</th>
                  <th className="border border-gray-300 p-2">2</th>
                  <th className="border border-gray-300 p-2">3</th>
                  <th className="border border-gray-300 p-2">4</th>
                  <th className="border border-gray-300 p-2">5</th>
                  <th className="border border-gray-300 p-2">6</th>
                  <th className="border border-gray-300 p-2">7</th>
                  <th className="border border-gray-300 p-2">8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold">P[i]</td>
                  <td className="border border-gray-300 p-2">A</td>
                  <td className="border border-gray-300 p-2">B</td>
                  <td className="border border-gray-300 p-2">A</td>
                  <td className="border border-gray-300 p-2">B</td>
                  <td className="border border-gray-300 p-2">C</td>
                  <td className="border border-gray-300 p-2">A</td>
                  <td className="border border-gray-300 p-2">B</td>
                  <td className="border border-gray-300 p-2">A</td>
                  <td className="border border-gray-300 p-2">B</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 font-semibold">π[i]</td>
                  <td className="border border-gray-300 p-2">0</td>
                  <td className="border border-gray-300 p-2">0</td>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">0</td>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3"><strong>Interpretation:</strong> At position 8, the longest proper prefix that's also a suffix is "ABAB" with length 4.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>📊 Algorithm Comparison</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Algorithm</th>
                <th className="border border-gray-300 p-2">Preprocessing</th>
                <th className="border border-gray-300 p-2">Matching</th>
                <th className="border border-gray-300 p-2">Space</th>
                <th className="border border-gray-300 p-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Naive</td>
                <td className="border border-gray-300 p-2">O(1)</td>
                <td className="border border-gray-300 p-2">O(nm)</td>
                <td className="border border-gray-300 p-2">O(1)</td>
                <td className="border border-gray-300 p-2">Very short patterns</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">KMP</td>
                <td className="border border-gray-300 p-2">O(m)</td>
                <td className="border border-gray-300 p-2">O(n)</td>
                <td className="border border-gray-300 p-2">O(m)</td>
                <td className="border border-gray-300 p-2">Guaranteed linear time</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Boyer-Moore</td>
                <td className="border border-gray-300 p-2">O(m + |Σ|)</td>
                <td className="border border-gray-300 p-2">O(nm) worst, O(n/m) best</td>
                <td className="border border-gray-300 p-2">O(m + |Σ|)</td>
                <td className="border border-gray-300 p-2">Large alphabets, long patterns</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Rabin-Karp</td>
                <td className="border border-gray-300 p-2">O(m)</td>
                <td className="border border-gray-300 p-2">O(n+m) average</td>
                <td className="border border-gray-300 p-2">O(1)</td>
                <td className="border border-gray-300 p-2">Multiple pattern search</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Aho-Corasick</td>
                <td className="border border-gray-300 p-2">O(Σm)</td>
                <td className="border border-gray-300 p-2">O(n + z)</td>
                <td className="border border-gray-300 p-2">O(Σm)</td>
                <td className="border border-gray-300 p-2">Multiple patterns simultaneously</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>🎯 Real-World Applications</h3>

        <div className="space-y-4">
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">GNU grep Implementation</h4>
            <p className="text-sm mt-2">Uses Boyer-Moore for simple fixed strings, compiles regex patterns to DFA when possible, and falls back to NFA simulation for complex patterns with backreferences.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">Snort IDS (Intrusion Detection)</h4>
            <p className="text-sm mt-2">Uses Aho-Corasick algorithm to search for thousands of attack signatures simultaneously in network packets, enabling line-rate intrusion detection on gigabit networks.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">BLAST (Bioinformatics)</h4>
            <p className="text-sm mt-2">Uses variants of finite automata for DNA sequence matching, achieving billions of base pair comparisons per second for gene identification.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📄 Quick Reference</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🔑 Key Formulas</h4>
            <ul className="text-sm space-y-1">
              <li><strong>KMP Total:</strong> O(m + n)</li>
              <li><strong>Prefix Function:</strong> O(m)</li>
              <li><strong>Matching Phase:</strong> O(n)</li>
              <li><strong>Space:</strong> O(m) for π array</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">✅ When to Use KMP</h4>
            <ul className="text-sm space-y-1">
              <li>Need guaranteed O(n) time</li>
              <li>Pattern has self-similarity</li>
              <li>Searching in streams</li>
              <li>Small alphabet (DNA, binary)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚡ Optimization Tips</h4>
            <ul className="text-sm space-y-1">
              <li>Use Boyer-Moore for large alphabets</li>
              <li>Aho-Corasick for multiple patterns</li>
              <li>Naive for very short patterns</li>
              <li>Consider cache locality</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚠️ Common Pitfalls</h4>
            <ul className="text-sm space-y-1">
              <li>Off-by-one in π computation</li>
              <li>Forgetting to continue after match</li>
              <li>Not handling empty patterns</li>
              <li>Incorrect failure link usage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>🚀 Advanced Topics</h3>

        <div className="space-y-4">
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">Aho-Corasick Algorithm</h4>
            <p className="text-sm mt-2">Extension of KMP for multiple pattern matching. Builds a trie with failure links, enabling simultaneous search of thousands of patterns in O(n + z) time where z is the number of matches.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">Suffix Arrays and Trees</h4>
            <p className="text-sm mt-2">Advanced data structures for pattern matching that preprocess the text instead of the pattern, enabling fast searches for multiple patterns in the same text.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold">Approximate String Matching</h4>
            <p className="text-sm mt-2">Extensions that allow mismatches, insertions, and deletions. Used in spell checkers, DNA alignment, and fuzzy search applications.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📚 Problem-Solving Practice</h3>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-lg">📘 Easy Problem: Basic Prefix Function</h4>
            <p className="mt-2"><strong>Problem:</strong> Compute the prefix function π for the pattern "ACACAG"</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <ul className="list-disc ml-6">
                  <li>Step 1: π[0] = 0 (by definition)</li>
                  <li>Step 2: π[1] = 0 ("AC" has no proper prefix = suffix)</li>
                  <li>Step 3: π[2] = 1 ("ACA" has "A" as both prefix and suffix, length 1)</li>
                  <li>Step 4: π[3] = 2 ("ACAC" has "AC" as both, length 2)</li>
                  <li>Step 5: π[4] = 3 ("ACACA" has "ACA" as both, length 3)</li>
                  <li>Step 6: π[5] = 0 ("ACACAG" has no proper prefix = suffix)</li>
                </ul>
                <p className="mt-2"><strong>Final Answer:</strong> π = [0, 0, 1, 2, 3, 0]</p>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-semibold text-lg">📙 Medium Problem: Trace KMP Execution</h4>
            <p className="mt-2"><strong>Problem:</strong> Trace the KMP algorithm searching for pattern "ABA" in text "ABABA". Show the state of variable q after processing each character.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong> First, compute prefix function: π = [0, 0, 1] for pattern "ABA"</p>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full border-collapse border border-gray-300 text-xs">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-2">i</th>
                        <th className="border border-gray-300 p-2">T[i]</th>
                        <th className="border border-gray-300 p-2">q (before)</th>
                        <th className="border border-gray-300 p-2">Action</th>
                        <th className="border border-gray-300 p-2">q (after)</th>
                        <th className="border border-gray-300 p-2">Match?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">0</td>
                        <td className="border border-gray-300 p-2">A</td>
                        <td className="border border-gray-300 p-2">0</td>
                        <td className="border border-gray-300 p-2">P[0]=A matches T[0]=A</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">B</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">P[1]=B matches T[1]=B</td>
                        <td className="border border-gray-300 p-2">2</td>
                        <td className="border border-gray-300 p-2">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">2</td>
                        <td className="border border-gray-300 p-2">A</td>
                        <td className="border border-gray-300 p-2">2</td>
                        <td className="border border-gray-300 p-2">P[2]=A matches T[2]=A</td>
                        <td className="border border-gray-300 p-2">3</td>
                        <td className="border border-gray-300 p-2 bg-green-100">✓ Match at pos 0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">-</td>
                        <td className="border border-gray-300 p-2">-</td>
                        <td className="border border-gray-300 p-2">3</td>
                        <td className="border border-gray-300 p-2">Use π[2]=1, reset q</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">3</td>
                        <td className="border border-gray-300 p-2">B</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">P[1]=B matches T[3]=B</td>
                        <td className="border border-gray-300 p-2">2</td>
                        <td className="border border-gray-300 p-2">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">4</td>
                        <td className="border border-gray-300 p-2">A</td>
                        <td className="border border-gray-300 p-2">2</td>
                        <td className="border border-gray-300 p-2">P[2]=A matches T[4]=A</td>
                        <td className="border border-gray-300 p-2">3</td>
                        <td className="border border-gray-300 p-2 bg-green-100">✓ Match at pos 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2"><strong>Final Answer:</strong> Matches found at positions 0 and 2</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-lg">📕 Hard Problem: Algorithm Comparison</h4>
            <p className="mt-2"><strong>Problem:</strong> Compare the number of character comparisons made by naive string matching vs KMP when searching for "AAAB" in "AAAAAAAAAB". Show your calculations.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-red-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p>Text: "AAAAAAAAAB" (10 characters), Pattern: "AAAB" (4 characters)</p>
                <p className="mt-2"><strong>Naive Algorithm Analysis:</strong></p>
                <ul className="list-disc ml-6 text-xs">
                  <li>Position 0-5: Each compares 4 chars, mismatch at position 3 = 6 × 4 = 24 comparisons</li>
                  <li>Position 6: Compare AAAB with AAAB - 4 comparisons, MATCH!</li>
                  <li>Total naive comparisons: 7 × 4 = 28 comparisons</li>
                </ul>
                <p className="mt-2"><strong>KMP Algorithm Analysis:</strong></p>
                <ul className="list-disc ml-6 text-xs">
                  <li>Prefix function π = [0, 1, 2, 0]</li>
                  <li>Process each of 10 text characters once = 10 comparisons</li>
                  <li>Additional failure link followings ≈ 6 more comparisons</li>
                  <li>Total KMP comparisons: ~16 comparisons</li>
                </ul>
                <p className="mt-2"><strong>Final Answer:</strong> KMP uses ~16 comparisons vs naive's 28 comparisons, a 43% reduction. The improvement grows with longer texts.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📊 String Matching Algorithms Comparison</h3>
        <p className="mb-4">Different text search algorithms excel in different scenarios. The choice depends on alphabet size, pattern characteristics, text characteristics, and performance requirements.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Aspect</th>
                <th className="border border-gray-300 p-2">KMP</th>
                <th className="border border-gray-300 p-2">Naive</th>
                <th className="border border-gray-300 p-2">Boyer-Moore</th>
                <th className="border border-gray-300 p-2">Rabin-Karp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Core Idea</td>
                <td className="border border-gray-300 p-2">Use prefix function to avoid re-checking</td>
                <td className="border border-gray-300 p-2">Check pattern at every position</td>
                <td className="border border-gray-300 p-2">Scan right-to-left, skip on mismatch</td>
                <td className="border border-gray-300 p-2">Compare hash values</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Preprocessing</td>
                <td className="border border-gray-300 p-2">O(m)</td>
                <td className="border border-gray-300 p-2">O(0)</td>
                <td className="border border-gray-300 p-2">O(m + |Σ|)</td>
                <td className="border border-gray-300 p-2">O(m)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Worst-Case</td>
                <td className="border border-gray-300 p-2">O(n)</td>
                <td className="border border-gray-300 p-2">O(nm)</td>
                <td className="border border-gray-300 p-2">O(nm)</td>
                <td className="border border-gray-300 p-2">O(nm)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Average-Case</td>
                <td className="border border-gray-300 p-2">O(n)</td>
                <td className="border border-gray-300 p-2">O(n)</td>
                <td className="border border-gray-300 p-2">O(n/m) - sublinear!</td>
                <td className="border border-gray-300 p-2">O(n+m)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Best Use Case</td>
                <td className="border border-gray-300 p-2">Streaming data, small alphabets</td>
                <td className="border border-gray-300 p-2">Very short patterns</td>
                <td className="border border-gray-300 p-2">Long patterns, large alphabets</td>
                <td className="border border-gray-300 p-2">Multiple patterns</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🎯 When to Choose What?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-sm">
            <div>
              <p className="font-semibold text-blue-600">Choose KMP when:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Need worst-case O(n) guarantee</li>
                <li>Working with streaming data</li>
                <li>Small alphabet (DNA, binary)</li>
                <li>Pattern has high self-similarity</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-green-600">Choose Boyer-Moore when:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Pattern is long (≥5 chars)</li>
                <li>Large alphabet (English, Unicode)</li>
                <li>Random access to text</li>
                <li>Maximum average-case speed desired</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📄 Quick Reference Cheat Sheet</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🔑 Key Definitions</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Pattern Matching:</strong> Finding occurrences of P in T</li>
              <li><strong>Prefix Function π[i]:</strong> Length of longest proper prefix = suffix</li>
              <li><strong>LPS Array:</strong> Longest Proper Prefix which is also Suffix</li>
              <li><strong>Preprocessing:</strong> Building data structures before searching</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">📐 Important Formulas</h4>
            <ul className="text-sm space-y-1">
              <li><strong>KMP Total Time:</strong> O(m + n)</li>
              <li><strong>Preprocessing:</strong> O(m)</li>
              <li><strong>Matching:</strong> O(n)</li>
              <li><strong>Space:</strong> O(m) for π array</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚙️ KMP Algorithm Steps</h4>
            <ul className="text-sm space-y-1">
              <li>1. Compute prefix function π in O(m)</li>
              <li>2. Initialize q = 0, scan text left-to-right</li>
              <li>3. On mismatch: q = π[q-1] (failure link)</li>
              <li>4. On match: q = q + 1 (advance state)</li>
              <li>5. If q = m: report match, use failure link</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Using π[k] instead of π[k-1] in failure links</li>
              <li>❌ Breaking after first match (misses overlaps)</li>
              <li>❌ Resetting q to 0 after match</li>
              <li>❌ Forgetting preprocessing O(m) in complexity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>💼 Interview Preparation</h3>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold">Common Interview Questions:</h4>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-2">
              <li>Implement KMP algorithm and explain the prefix function</li>
              <li>Compare time complexity of naive vs KMP vs Boyer-Moore</li>
              <li>Design an algorithm to find all occurrences of multiple patterns</li>
              <li>Explain how text editors implement find-and-replace efficiently</li>
              <li>Optimize string matching for specific constraints (small alphabet, short pattern)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold">Key Points to Remember:</h4>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>KMP achieves O(m+n) by never backtracking in text</li>
              <li>Prefix function is the heart of KMP - captures pattern self-similarity</li>
              <li>Different algorithms excel in different scenarios</li>
              <li>Real systems use hybrid approaches based on pattern characteristics</li>
              <li>Automata theory provides elegant framework for understanding string matching</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>🎓 Practice & Apply Your Knowledge</h3>
        <p className="mb-4">Test your understanding with these interactive questions. Click on your choice for each question, then check your answer!</p>

        <h4 className="font-semibold mt-6 mb-4">Quick Concept Checks (Interactive MCQs)</h4>

        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 1 of 10</p>
            <p className="font-semibold mb-4">What is the time complexity of the KMP string matching algorithm for text of length n and pattern of length m?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> O(nm) - same as naive algorithm
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">B</span> O(n + m) - linear in text and pattern length ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> O(n log m) - using binary search optimization
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> O(n) only if pattern has no repeated characters
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: B</strong></p>
              <p className="text-sm mt-1">KMP achieves O(n + m) time complexity: O(m) for preprocessing the pattern to build the prefix function, and O(n) for scanning the text without backtracking.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 2 of 10</p>
            <p className="font-semibold mb-4">For the pattern &quot;ABABC&quot;, what is the value of the prefix function π[3]?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> 0
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">B</span> 1
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">C</span> 2 ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> 3
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: C</strong></p>
              <p className="text-sm mt-1">For &quot;ABABC&quot;, π[3] = 2 because the substring &quot;ABAB&quot; (positions 0-3) has &quot;AB&quot; as the longest proper prefix that is also a suffix, with length 2.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 3 of 10</p>
            <p className="font-semibold mb-4">What is the main advantage of using finite automata for text search compared to naive string matching?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> It uses less memory by not storing the pattern
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">B</span> It never backtracks in the text, examining each character exactly once ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> It can find approximate matches with errors
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> It works faster for short patterns only
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: B</strong></p>
              <p className="text-sm mt-1">The key advantage is that automata-based algorithms scan the text in a single pass without backtracking, examining each character at most once, achieving O(n) matching time.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 4 of 10</p>
            <p className="font-semibold mb-4">In the Aho-Corasick algorithm for multi-pattern matching, what data structure is primarily used?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> Hash table with pattern strings as keys
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">B</span> Trie (prefix tree) with failure links ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> Binary search tree sorted by pattern length
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> Suffix array for text indexing
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: B</strong></p>
              <p className="text-sm mt-1">Aho-Corasick builds a trie from all patterns and adds failure links (similar to KMP's prefix function) to enable efficient multi-pattern matching in O(n + z) time.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 5 of 10</p>
            <p className="font-semibold mb-4">When would you prefer Boyer-Moore algorithm over KMP for text search?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">A</span> When searching long patterns in English text (large alphabet, long patterns) ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">B</span> When the pattern has many repeated characters
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> When searching DNA sequences (small 4-letter alphabet)
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> When worst-case O(n) guarantee is required
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: A</strong></p>
              <p className="text-sm mt-1">Boyer-Moore excels with large alphabets and long patterns because it can skip many characters using the bad character and good suffix rules, achieving sublinear average-case performance O(n/m).</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 6 of 10</p>
            <p className="font-semibold mb-4">What is the fundamental difference between an NFA and a DFA?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> NFAs can recognize more languages than DFAs
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">B</span> NFAs can have multiple transitions for the same state-symbol pair, while DFAs have exactly one ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> NFAs run faster than DFAs in practice
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> NFAs cannot have accepting states
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: B</strong></p>
              <p className="text-sm mt-1">The key difference is that NFAs allow nondeterminism - multiple possible transitions from a state on the same input symbol, while DFAs have exactly one transition per state-symbol pair. Both recognize the same class of languages (regular languages).</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 7 of 10</p>
            <p className="font-semibold mb-4">In an NFA, what happens when the transition function δ(q, a) = ∅ (empty set)?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> The entire NFA immediately rejects the input string
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">B</span> That particular computation path dies, but other parallel paths may continue ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> The NFA moves to a special error state
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> The NFA automatically accepts the string
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: B</strong></p>
              <p className="text-sm mt-1">NFAs explore multiple computation paths in parallel. When one path has no valid transition (empty set), that path dies, but the NFA continues with other active paths. The string is accepted if at least one path reaches an accepting state.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 8 of 10</p>
            <p className="font-semibold mb-4">What is the purpose of epsilon (ε) transitions in an NFA?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> To consume empty strings from the input
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">B</span> To make the NFA more powerful than DFAs
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">C</span> To allow state transitions without consuming any input symbol, simplifying NFA design ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> To represent syntax errors in the input
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: C</strong></p>
              <p className="text-sm mt-1">Epsilon transitions allow the NFA to change states without reading any input symbol. This simplifies NFA construction and makes it easier to combine automata. Despite their convenience, ε-transitions don't add computational power - any ε-NFA can be converted to an equivalent NFA without ε-transitions.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 9 of 10</p>
            <p className="font-semibold mb-4">If an NFA has n states, what is the maximum number of states the equivalent DFA might have after subset construction?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> n states (same as NFA)
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">B</span> n² states
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">C</span> 2ⁿ states (exponential) ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> n! states (factorial)
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: C</strong></p>
              <p className="text-sm mt-1">During subset construction (powerset construction), each DFA state represents a subset of NFA states. With n NFA states, there are 2ⁿ possible subsets, leading to potentially exponential blowup. However, in practice, many DFAs have far fewer states than this theoretical maximum.</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <p className="font-semibold text-gray-600 text-sm mb-2">Question 10 of 10</p>
            <p className="font-semibold mb-4">In the context of NFA simulation, what does &quot;epsilon closure&quot; of a state set S mean?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">A</span> The set of states that can reach S via ε-transitions
              </button>
              <button className="w-full text-left p-3 border-2 border-green-500 bg-green-50 rounded">
                <span className="font-semibold">B</span> All states reachable from S via zero or more ε-transitions, including S itself ✓
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">C</span> The set of accepting states reachable from S
              </button>
              <button className="w-full text-left p-3 border-2 border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition">
                <span className="font-semibold">D</span> The states in S with ε-transitions removed
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500">
              <p className="text-sm"><strong>Correct Answer: B</strong></p>
              <p className="text-sm mt-1">The epsilon closure (or ε-closure) of a state set S includes all states reachable from any state in S by following zero or more ε-transitions. This includes the original states in S. It's a fundamental operation in NFA simulation and NFA-to-DFA conversion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module1_6;
