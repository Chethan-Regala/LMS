'use client';
import React, { useState, useEffect } from 'react';

const Module2_1: React.FC = () => {
    // State for Interactive Playground (Section 12)
    const [regexStr, setRegexStr] = useState('[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}');
    const [testStr, setTestStr] = useState(`Contact us: alice@example.com, bob@company.org, bad@, @invalid
Phone: (555) 867-5309, 800-555-1234
Date: 2024-03-15, invalid: 2024-13-45
IP: 192.168.1.1, 10.0.0.1, 999.999.0.0`);
    const [flags, setFlags] = useState({ g: true, i: true, m: false, s: false });
    const [resultHtml, setResultHtml] = useState<string>('');
    const [matchCount, setMatchCount] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // MCQ State
    const [mcqAnswers, setMcqAnswers] = useState<Record<number, number | null>>({});
    const [mcqResults, setMcqResults] = useState<Record<number, boolean | null>>({});

    // Exam Question State
    const [showModelAnswer, setShowModelAnswer] = useState<Record<number, boolean>>({});

    const loadPattern = (pattern: string, test: string) => {
        setRegexStr(pattern);
        setTestStr(test);
    };

    const checkMcq = (qId: number, selected: number, correct: number) => {
        setMcqAnswers({ ...mcqAnswers, [qId]: selected });
        setMcqResults({ ...mcqResults, [qId]: selected === correct });
    };

    const toggleAnswer = (id: number) => {
        setShowModelAnswer(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        try {
            setError(null);
            const flagStr = (flags.g ? 'g' : '') + (flags.i ? 'i' : '') + (flags.m ? 'm' : '') + (flags.s ? 's' : '');
            const re = new RegExp(regexStr, flagStr);
            let count = 0;

            const escapedText = testStr.replace(/[&<>"']/g, (m) => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            }[m] || m));

            let html = escapedText;
            if (flags.g) {
                html = escapedText.replace(re, (match) => {
                    count++;
                    return `<span class="bg-yellow-300 text-black px-1 rounded font-bold border-b border-yellow-600">${match}</span>`;
                });
            } else {
                const m = testStr.match(re);
                if (m) {
                    count = 1;
                    html = escapedText.replace(re, `<span class="bg-yellow-300 text-black px-1 rounded font-bold border-b border-yellow-600">${m[0]}</span>`);
                }
            }

            setResultHtml(html);
            setMatchCount(count);
        } catch (e: any) {
            setError(e.message);
            setResultHtml(testStr);
            setMatchCount(0);
        }
    }, [regexStr, testStr, flags]);

    return (
        <div className="module-content">
            {/* 1. Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.1</div>
                <div className="lesson-title-main">
                    <h1>🔍 Regular Expressions: Theory & Applications</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages and Context Free Languages | Level: Expert Comprehensive Module</p>
                </div>
            </div>

            {/* 📋 Table of Contents */}
            <section className="content-section">
                <div className="bg-slate-50 border-2 border-slate-200 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity"></div>
                    <p className="font-black text-slate-400 mb-6 border-b border-slate-100 pb-3 uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> 📋 NAVIGATION
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 relative z-10">
                        <ol className="list-decimal ml-6 space-y-2 text-xs text-indigo-600 font-black italic">
                            {["Learning Objectives", "Introduction & Motivation", "Formal Review", "Extended Regex Syntax", "Lexical Analysis", "Text Search & Grep", "Input Validation"].map(t => (
                                <li key={t}><a href={`#${t.toLowerCase().split(' ')[0]}`} className="hover:text-slate-900 transition-colors border-b border-transparent hover:border-indigo-200">{t}</a></li>
                            ))}
                        </ol>
                        <ol className="list-decimal ml-6 space-y-2 text-xs text-indigo-600 font-black italic" start={8}>
                            {["Security & Network", "NLP & Bioinformatics", "Pattern Library", "Python & JS Implementation", "Interactive Playground", "MCQ Practice", "Exam Questions"].map(t => (
                                <li key={t}><a href={`#${t.toLowerCase().split(' ')[0]}`} className="hover:text-slate-900 transition-colors border-b border-transparent hover:border-indigo-200">{t}</a></li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* 1. Learning Objectives */}
            <section className="content-section" id="objectives">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-semibold text-blue-900 mb-2">🎯 Learning Objectives</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-blue-800">
                        <li><strong>Recall & Extend:</strong> State the formal definition of regular expressions and correctly apply extended metacharacter syntax (character classes, quantifiers, anchors, groups) used in POSIX and PCRE standards.</li>
                        <li><strong>Design:</strong> Construct correct regular expressions for real-world pattern-matching problems including email validation, IP addresses, phone numbers, dates, URLs, and log parsing.</li>
                        <li><strong>Apply to Compilation:</strong> Explain how lexical analyzers (lex/flex) use regular expressions to tokenize source code, and trace tokenization of a given source snippet.</li>
                        <li><strong>Apply to Security:</strong> Describe how intrusion detection systems (IDS/WAF) use regex patterns to detect SQL injection, XSS, and other attack signatures in network traffic.</li>
                        <li><strong>Analyze & Evaluate:</strong> Compare greedy vs. lazy quantifiers, identify catastrophic backtracking risks (ReDoS), and optimize regular expressions for correctness and performance.</li>
                    </ul>
                </div>
            </section>

            {/* 2. Introduction & Motivation */}
            <section className="content-section" id="introduction">
                <h3>2. Introduction & Motivation</h3>
                <p>In Unit 1, we studied regular expressions as a purely mathematical tool — a concise notation for describing regular languages, proven equivalent to finite automata by Kleene's theorem. In Unit 2, we shift perspective: regular expressions are one of the most widely deployed technologies in software engineering today.</p>

                <p className="mt-4">The need for robust pattern matching exists in almost every software layer: from OS shells and log analyzers to professional compilers and web application firewalls. Understanding the theoretical limits (what a regular expression can and cannot match) allows engineers to design efficient solutions and avoid common pitfalls like catastrophic backtracking.</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 border-l-4 border-indigo-500 rounded shadow-sm">
                        <p className="text-2xl font-black text-indigo-700">1 Billion+</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Evaluations / Second</p>
                        <p className="text-xs text-gray-600 mt-1 italic leading-tight">Evaluated across distributed grep/search clusters globally at major tech providers.</p>
                    </div>
                    <div className="bg-gray-50 p-4 border-l-4 border-blue-500 rounded shadow-sm">
                        <p className="text-2xl font-black text-blue-700">60%+</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Industrial Codebases</p>
                        <p className="text-xs text-gray-600 mt-1 italic leading-tight">Of Python and JavaScript enterprise projects rely on built-in regex engines for I/O validation.</p>
                    </div>
                </div>

                <div className="mt-8 overflow-x-auto">
                    <p className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">The Regex Standard Ecosystem</p>
                    <table className="w-full text-sm text-left border-collapse border border-gray-200">
                        <thead className="bg-gray-100 font-semibold text-gray-700">
                            <tr>
                                <th className="p-3 border">Standard</th>
                                <th className="p-3 border">Used In</th>
                                <th className="p-3 border">Key Characteristics</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                            <tr><td className="p-3 font-bold border">BRE (Basic)</td><td className="p-3 border">grep, sed, vi</td><td className="p-3 border">Minimal metacharacters; {'\\( \\{'} must be escaped.</td></tr>
                            <tr><td className="p-3 font-bold border">ERE (Extended)</td><td className="p-3 border">grep -E, POSIX</td><td className="p-3 border">Adds +, ?, |, () without escaping.</td></tr>
                            <tr><td className="p-3 font-bold border">PCRE (Perl Comp.)</td><td className="p-3 border">Python, Java, PHP</td><td className="p-3 border">Lookahead, non-capturing groups, backreferences.</td></tr>
                            <tr><td className="p-3 font-bold border">RE2</td><td className="p-3 border">Go, Rust, Google</td><td className="p-3 border">Guarantees O(n) matching; no backreferences allowed.</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 3. Formal Review */}
            <section className="content-section" id="formal">
                <h3>3. Formal Review of Regular Expressions</h3>
                <p>Before diving into syntax extensions, we must review the formal algebraic definition of a regular expression over an alphabet Σ.</p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                    <p className="font-semibold text-blue-900">📘 Formal Definition: Primitive RE</p>
                    <ol className="list-decimal ml-6 mt-2 space-y-1 text-sm text-blue-800">
                        <li><strong>Empty Set:</strong> ∅ is an RE denoting the empty language.</li>
                        <li><strong>Empty String:</strong> ε is an RE denoting set {'{'}ε{'}'}.</li>
                        <li><strong>Symbol:</strong> For each a ∈ Σ, a is an RE denoting set {'{'}a{'}'}.</li>
                        <li><strong>Union:</strong> If R, S are REs, then (R|S) is an RE.</li>
                        <li><strong>Concatenation:</strong> If R, S are REs, then (RS) is an RE.</li>
                        <li><strong>Kleene Star:</strong> If R is an RE, then (R*) is an RE.</li>
                    </ol>
                </div>

                <div className="mt-8">
                    <h4 className="font-semibold">Key Algebraic Identities</h4>
                    <p className="text-sm mb-4 italic">Used to simplify complex patterns into equivalent minimal forms.</p>
                    <div className="bg-gray-50 p-4 border rounded-xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm font-mono italic shadow-inner">
                        <p className="flex justify-between border-b pb-1"><span>R | S = S | R</span> <span className="text-gray-400">Union Commutative</span></p>
                        <p className="flex justify-between border-b pb-1"><span>(R*)* = R*</span> <span className="text-gray-400">Star Idempotent</span></p>
                        <p className="flex justify-between border-b pb-1"><span>R(S | T) = RS | RT</span> <span className="text-gray-400">Distributivity</span></p>
                        <p className="flex justify-between border-b pb-1"><span>∅* = ε</span> <span className="text-gray-400">Identity</span></p>
                        <p className="flex justify-between border-b pb-1"><span>R | ∅ = R</span> <span className="text-gray-400">Union Identity</span></p>
                        <p className="flex justify-between border-b pb-1"><span>L(R) ⊆ L(R*)</span> <span className="text-gray-400">Subset property</span></p>
                    </div>
                </div>
            </section>

            {/* 4. Extended Syntax */}
            <section className="content-section" id="extended">
                <h3>4. Extended Regex Syntax (POSIX & PCRE)</h3>
                <p className="mb-6">Modern engines provide "shorthands" for common patterns. While these are technically *syntactic sugar* (expressible in primitive RE theory), they are essential for practical workflow.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { c: '.', d: 'Any single character (except newline)', ex: 'a.c' },
                        { c: '^ / $', d: 'Start / End of string or line', ex: '^Hello' },
                        { c: '\\b', d: 'Word boundary (transition \\w/\\W)', ex: '\\bcat\\b' },
                        { c: '\\d', d: 'Digit shorthand [0-9]', ex: '\\d+' },
                        { c: '\\w', d: 'Word character [a-zA-Z0-9_]', ex: '\\w+' },
                        { c: '\\s', d: 'Whitespace [ \\t\\n\\r\\f]', ex: '\\s+' },
                        { c: '[abc]', d: 'Explicit character class', ex: '[a-z]' },
                        { c: '{n,m}', d: 'Interval Quantifier (n to m times)', ex: '\\d{2,4}' },
                        { c: '(R)', d: 'Capturing group', ex: '(ab)+' },
                        { c: '(?:R)', d: 'Non-capturing group', ex: '(?:ab)+' },
                        { c: '(?=R)', d: 'Positive Lookahead', ex: '(?= USD)' },
                        { c: '*?', d: 'Lazy Quantifier (Shortest match)', ex: '<.*?>' },
                    ].map((item, i) => (
                        <div key={i} className="p-3 border rounded-lg bg-white flex justify-between items-center shadow-sm hover:border-indigo-200 transition-colors">
                            <span className="font-mono font-bold text-indigo-600 text-sm">{item.c}</span>
                            <span className="text-[10px] text-gray-500 text-right max-w-[120px]">{item.d}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-gray-50 border-l-4 border-gray-400 p-6">
                    <h4 className="font-semibold mb-4">Greedy vs. Lazy Quantifiers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 border rounded shadow-sm">
                            <p className="font-bold text-red-600 font-mono text-xs mb-2 underline">Greedy Method: {`<.*>`}</p>
                            <p className="text-xs text-gray-600 font-mono mb-2">Input: &quot;&lt;b&gt;bold&lt;/b&gt;&quot;</p>
                            <p className="text-xs text-gray-700 bg-red-50 p-1">Match: &lt;b&gt;bold&lt;/b&gt;</p>
                            <p className="text-[10px] text-gray-500 mt-2 italic">Matches everything from first &lt; to last &gt;.</p>
                        </div>
                        <div className="bg-white p-4 border rounded shadow-sm">
                            <p className="font-bold text-green-600 font-mono text-xs mb-2 underline">Lazy Method: {`<.*?>`}</p>
                            <p className="text-xs text-gray-600 font-mono mb-2">Input: &quot;&lt;b&gt;bold&lt;/b&gt;&quot;</p>
                            <p className="text-xs text-gray-700 bg-green-50 p-1">Match: &lt;b&gt; and &lt;/b&gt;</p>
                            <p className="text-[10px] text-gray-500 mt-2 italic">Stops at the first &gt; encountered.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="font-semibold text-red-900 flex items-center gap-2">⚠️ Danger: Catastrophic Backtracking (ReDoS)</p>
                    <p className="text-sm text-red-800 mt-2">
                        Some patterns like <code>^(a+)+$</code> on input <code>&quot;aaaaaaaaaaaaaaaaaaaaaaaa!&quot;</code> cause NFA-based engines to explore 2ⁿ paths.
                        This leads to <strong>Regular Expression Denial of Service (ReDoS)</strong>. Protection involves using DFA-based engines (like RE2) or avoiding nested quantifiers.
                    </p>
                </div>
            </section>

            {/* 5. Lexical Analysis */}
            <section className="content-section" id="compilers">
                <h3>5. Application: Lexical Analysis in Compilers</h3>
                <p>In compilation, regular expressions are used to define the <strong>lexical grammar</strong> of a programming language. The <i>Lexer</i> (or Tokenizer) identifies sequences of characters (lexemes) and categories them into tokens.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                    {[
                        { k: 'Keyword', p: 'if|else|while|return' },
                        { k: 'Identifier', p: '[a-zA-Z_]\\w*' },
                        { k: 'Integer', p: '[0-9]+' },
                        { k: 'Operator', p: '\\+\\+|==|!=|[+\\-*/=]' },
                    ].map((t, i) => (
                        <div key={i} className="p-3 bg-white border rounded-xl flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase mb-1">{t.k}</span>
                            <code className="text-[11px] text-indigo-600 font-mono font-bold break-all">{t.p}</code>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                    <p className="font-semibold">Tokenization Sequence Example</p>
                    <div className="flex flex-col gap-3 mt-3">
                        <div className="flex items-center gap-3 bg-white p-2 border rounded text-sm">
                            <span className="font-bold text-gray-400 w-12">Code:</span>
                            <code className="font-mono bg-blue-50 px-2 rounded">while (count &lt; 10)</code>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-2 border rounded text-sm overflow-x-auto">
                            <span className="font-bold text-gray-400 w-12">Tokens:</span>
                            <div className="flex gap-2 text-[10px] font-mono whitespace-nowrap">
                                <span className="bg-purple-100 border border-purple-200 px-2 py-1 rounded">KEYWORD(while)</span>
                                <span className="bg-gray-100 border px-2 py-1 rounded">LPAREN</span>
                                <span className="bg-indigo-100 border border-indigo-200 px-2 py-1 rounded">ID(count)</span>
                                <span className="bg-red-100 border border-red-200 px-2 py-1 rounded">OP(&lt;)</span>
                                <span className="bg-orange-100 border border-orange-200 px-2 py-1 rounded">INT(10)</span>
                                <span className="bg-gray-100 border px-2 py-1 rounded">RPAREN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Text Search */}
            <section className="content-section" id="search">
                <h3>6. Application: Text Search & Grep</h3>
                <p>The <code>grep</code> utility (Global Regular Expression Print) utilizes NFA/DFA construction to scan large files. Modern alternatives like <code>ripgrep (rg)</code> use hyper-optimized Rust implementations of these concepts.</p>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] mt-8 p-10 shadow-xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-[10px] text-slate-300 uppercase font-black tracking-[0.3em]">bash / terminal</div>
                    <pre className="text-indigo-900 font-mono text-[11px] leading-relaxed relative z-10">
                        {`# 1. Search for potential SQLi signatures in access logs
grep -iE "(union|select|insert|delete).+(from|into|table)" access.log

# 2. Extract unique IP addresses that returned 404 errors
grep "404" access.log | grep -oE "\\d{1,3}(\\.\\d{1,3}){3}" | sort -u

# 3. Find any Python function definition
grep -rE "^def\\s+\\w+\\(.*\\):" ./src`}
                    </pre>
                    <div className="absolute inset-0 bg-white opacity-40 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
                </div>
            </section>

            {/* 7. Input Validation */}
            <section className="content-section" id="validation">
                <h3>7. Application: Input Validation</h3>
                <p>Frontend and backend validation often rely on pre-compiled regex patterns to maintain data integrity before SQL insertion.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <h5 className="font-bold text-gray-700 flex gap-2 items-center mb-2">📧 Email Standard</h5>
                        <code className="bg-gray-100 p-2 block rounded text-[11px] font-mono mb-2">/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{'{'}2,{'}'}$/i</code>
                        <p className="text-[10px] text-gray-500 italic leading-snug">Uses case-insensitive flag and anchoring to ensure full string match.</p>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <h5 className="font-bold text-gray-700 flex gap-2 items-center mb-2">📅 ISO 8601 Date</h5>
                        <code className="bg-gray-100 p-2 block rounded text-[11px] font-mono mb-2">/^\d{'{'}4{'}'}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/</code>
                        <p className="text-[10px] text-gray-500 italic leading-snug">Matches YYYY-MM-DD format with basic logic for months/days.</p>
                    </div>
                </div>
            </section>

            {/* 10. Pattern Library */}
            <section className="content-section" id="patterns">
                <h3>10. Pattern Library — 30+ Real-World Patterns</h3>
                <p className="mb-4">A curated library of production-ready regular expressions. Click any pattern below to load it into the <strong>Interactive Playground</strong> for testing.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 10.1 Web & Network */}
                    <div className="bg-gray-50 border-l-4 border-blue-500 p-4">
                        <h4 className="text-xs font-black text-blue-800 uppercase mb-4 tracking-widest bg-blue-100 px-2 py-1 rounded w-fit">🌐 Web & Network</h4>
                        <div className="space-y-4">
                            {[
                                { n: 'IPv6 Address', r: '^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$', t: '2001:0db8:85a3:0000:0000:8a2e:0370:7334' },
                                { n: 'HTTP Method (Common)', r: '^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)$', t: 'GET' },
                                { n: 'HTTP Status Code', r: '^[1-5]\\d{2}$', t: '404' },
                                { n: 'FQDN (Domain Name)', r: '^(?:[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$', t: 'example.com' }
                            ].map((item, i) => (
                                <div key={i} className="cursor-pointer group bg-white p-2 rounded border border-transparent hover:border-blue-200 transition-all shadow-sm" onClick={() => loadPattern(item.r, item.t)}>
                                    <p className="text-[10px] font-bold text-gray-500 group-hover:text-blue-600 mb-1">{item.n}</p>
                                    <code className="text-[9px] text-gray-400 font-mono break-all leading-tight italic">{item.r}</code>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 10.2 Log Parsing */}
                    <div className="bg-gray-50 border-l-4 border-purple-500 p-4">
                        <h4 className="text-xs font-black text-purple-800 uppercase mb-4 tracking-widest bg-purple-100 px-2 py-1 rounded w-fit">📄 Log Parsing</h4>
                        <div className="space-y-4">
                            {[
                                { n: 'Apache/Nginx Combined', r: '^(\\S+)\\s\\S+\\s(\\S+)\\s\\[([^\\]]+)\\]\\s"(\\S+)\\s(\\S+)\\s\\S+"\\s(\\d{3})\\s(\\d+|-)', t: '192.168.1.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /index.html HTTP/1.1" 200 2326' },
                                { n: 'ISO 8601 Timestamp', r: '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})', t: '2024-03-15T14:30:00Z' },
                                { n: 'Std Syslog Levels', r: '(?:^|\\s)(DEBUG|INFO|WARN(?:ING)?|ERROR|FATAL|CRITICAL)(?:\\s|:)', t: 'ERROR: Connection refused' }
                            ].map((item, i) => (
                                <div key={i} className="cursor-pointer group bg-white p-2 rounded border border-transparent hover:border-purple-200 transition-all shadow-sm" onClick={() => loadPattern(item.r, item.t)}>
                                    <p className="text-[10px] font-bold text-gray-500 group-hover:text-purple-600 mb-1">{item.n}</p>
                                    <code className="text-[9px] text-gray-400 font-mono break-all leading-tight italic">{item.r}</code>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-green-500 p-4">
                        <h4 className="text-xs font-black text-green-800 uppercase mb-4 tracking-widest bg-green-100 px-2 py-1 rounded w-fit">💻 Programming</h4>
                        <div className="space-y-4">
                            {[
                                { n: 'Python Function def', r: '^def\\s+([a-zA-Z_]\\w*)\\s*\\(([^)]*)\\)\\s*(?:->\\s*\\w+\\s*)?:', t: 'def hello(name: str) -> None:' },
                                { n: 'Java/C++ Class', r: '^(?:public|private|protected|abstract|final)?\\s*class\\s+([A-Z]\\w*)', t: 'public class MyClass' },
                                { n: 'SQL SELECT Query', r: '(?i)^\\s*SELECT\\s+(.+?)\\s+FROM\\s+(\\w+)(?:\\s+WHERE\\s+(.+))?$', t: 'SELECT * FROM users' }
                            ].map((item, i) => (
                                <div key={i} className="cursor-pointer group bg-white p-2 rounded border border-transparent hover:border-green-200 transition-all shadow-sm" onClick={() => loadPattern(item.r, item.t)}>
                                    <p className="text-[10px] font-bold text-gray-500 group-hover:text-green-600 mb-1">{item.n}</p>
                                    <code className="text-[9px] text-gray-400 font-mono break-all leading-tight italic">{item.r}</code>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-amber-500 p-4">
                        <h4 className="text-xs font-black text-amber-800 uppercase mb-4 tracking-widest bg-amber-100 px-2 py-1 rounded w-fit">🏦 Documents</h4>
                        <div className="space-y-4">
                            {[
                                { n: 'USD Currency', r: '^\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{2})?$', t: '$1,234.56' },
                                { n: 'Indian PAN Card', r: '^[A-Z]{5}[0-9]{4}[A-Z]$', t: 'ABCDE1234F' },
                                { n: 'IBAN Format', r: '^[A-Z]{2}\\d{2}[A-Z0-9]{1,30}$', t: 'GB29NWBK60161331926819' }
                            ].map((item, i) => (
                                <div key={i} className="cursor-pointer group bg-white p-2 rounded border border-transparent hover:border-amber-200 transition-all shadow-sm" onClick={() => loadPattern(item.r, item.t)}>
                                    <p className="text-[10px] font-bold text-gray-500 group-hover:text-amber-600 mb-1">{item.n}</p>
                                    <code className="text-[9px] text-gray-400 font-mono break-all leading-tight italic">{item.r}</code>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Implementation */}
            <section className="content-section" id="implementation">
                <h3>11. Python & JavaScript Implementation</h3>

                <h4 className="font-semibold text-lg">11.1 Python — Comprehensive Regex Toolkit</h4>
                <p className="text-sm mb-4">Python's <code>re</code> module provides efficient compiled pattern matching with backreferencing and named groups.</p>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl mb-12 relative group">
                    <div className="absolute top-0 right-0 p-6 text-[10px] text-slate-300 uppercase font-black tracking-[0.3em]">PYTHON TOOLKIT</div>
                    <div className="flex bg-white px-8 py-4 border-b border-slate-100 justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> python_toolkit.py</span>
                        <span className="flex gap-1.5 opacity-30"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span><span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span><span className="w-1.5 h-1.5 bg-slate-100 rounded-full"></span></span>
                    </div>
                    <pre className="p-8 px-10 text-[11px] font-mono leading-relaxed text-indigo-900 overflow-x-auto relative z-10">
                        {`import re
from typing import List, Dict

class InputValidator:
    """Production-ready input validation using RE patterns."""
    _patterns = {
        'email':    re.compile(r'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        'ipv4':     re.compile(r'^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$'),
        'pan':      re.compile(r'^[A-Z]{5}[0-9]{4}[A-Z]$'),
    }

    def validate(self, field: str, val: str) -> bool:
        return bool(self._patterns[field].fullmatch(val.strip()))

class Lexer:
    """Simple code tokenizer."""
    SPEC = [
        ('NUM',    r'\\d+'), 
        ('KW',     r'\\b(if|else|while)\\b'),
        ('ID',     r'[a-zA-Z_]\\w*'),
        ('SKIP',   r'[ \\s]+'),
        ('ERR',    r'.'),
    ]
    _master = re.compile('|'.join(f'(?P<{n}>{p})' for n,p in SPEC))

    def scan(self, code: str) -> List[tuple]:
        return [(mo.lastgroup, mo.group()) for mo in self._master.finditer(code) 
                if mo.lastgroup != 'SKIP']`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg">11.2 JavaScript — Browser-Side Regex</h4>
                <p className="text-sm mb-4">JavaScript environments use PCRE-lite engines. Note the <code>.groups</code> property for named capturing.</p>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl relative group">
                    <div className="absolute top-0 right-0 p-6 text-[10px] text-slate-300 uppercase font-black tracking-[0.3em]">JS / BROWSER</div>
                    <div className="flex bg-white px-8 py-4 border-b border-slate-100 justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> frontend.js</span>
                    </div>
                    <pre className="p-8 px-10 text-[11px] font-mono leading-relaxed text-slate-700 overflow-x-auto relative z-10">
                        {`// 1. Template substitution
const render = (template, data) => 
  template.replace(/\\{\\{\\s*(\\w+)\\s*\\}\\}/g, (_, k) => data[k] || '');

// 2. Extraction with Named Groups (ES2018+)
const logLine = '192.168.1.1 - [15/Mar/2024] "GET /api" 200';
const RE = /^(?<ip>\\S+)\\s-\\s\\[(?<date>.*?)\\]\\s"(?<req>.*)"\\s(?<status>\\d+)/;
const data = logLine.match(RE)?.groups;

// 3. Phone Format
const format = s => s.replace(/^(\\d{3})(\\d{3})(\\d{4})$/, '($1) $2-$3');`}
                    </pre>
                </div>
            </section>

            {/* 12. Interactive Tester */}
            <section className="content-section" id="playground">
                <h3 className="text-3xl font-black mb-10 text-slate-900 tracking-tighter uppercase italic">12. Interactive Regex Playground</h3>
                <div className="bg-white border-2 border-slate-200 p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
                        {/* Control Panel */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <label className="block text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-3">Pattern [RE]</label>
                                <input
                                    type="text"
                                    value={regexStr}
                                    onChange={(e) => setRegexStr(e.target.value)}
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl font-mono text-sm text-indigo-900 focus:border-indigo-500 focus:bg-white transition-all shadow-inner outline-none"
                                    placeholder="/your-regex-here/"
                                />
                                {error && <p className="text-rose-500 text-[10px] mt-2 font-black uppercase italic tracking-widest">{error}</p>}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {Object.entries(flags).map(([f, active]) => (
                                    <button
                                        key={f}
                                        onClick={() => setFlags({ ...flags, [f as keyof typeof flags]: !active })}
                                        className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                    >
                                        Flag /{f}/
                                    </button>
                                ))}
                            </div>

                            <div className="bg-indigo-50/50 border-2 border-indigo-100 p-6 rounded-[2rem]">
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">MATCH TELEMETRY</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-black text-indigo-900 tracking-tighter line-height-1">{matchCount}</span>
                                    <span className="text-xs font-black text-indigo-400 uppercase mb-2 tracking-widest">Successful Instantiation(s)</span>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Corpus [The Source Text]</label>
                                <textarea
                                    value={testStr}
                                    onChange={(e) => setTestStr(e.target.value)}
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-6 rounded-[2rem] font-mono text-xs text-slate-600 focus:border-indigo-500 focus:bg-white transition-all h-64 shadow-inner outline-none leading-relaxed"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-10 border-t border-slate-100 relative z-10">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">LIVE RENDERING [DFA SIMULATION]</label>
                        <div
                            className="bg-slate-50 p-8 rounded-[2.5rem] font-mono text-xs text-slate-700 leading-relaxed border-2 border-slate-100 shadow-inner whitespace-pre-wrap overflow-x-auto min-h-[100px]"
                            dangerouslySetInnerHTML={{ __html: resultHtml }}
                        />
                    </div>
                </div>
            </section>
            <div className="w-full lg:w-48 space-y-4">
                <div className="bg-white border p-4 rounded-xl shadow-sm">
                    <h5 className="text-[10px] font-black text-gray-800 uppercase mb-2 border-b pb-1">Quick-Load</h5>
                    <div className="flex flex-col gap-1.5">
                        {[
                            { l: '📧 Email', r: '[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}', t: 'alice@example.com' },
                            { l: '🌐 IPv4', r: '([0-9]{1,3}\\.){3}[0-9]{1,3}', t: '192.168.1.1' },
                            { l: '📅 Date', r: '\\d{4}-\\d{2}-\\d{2}', t: '2024-03-15' },
                            { l: '🚨 SQLi', r: '(?i)(UNION|SELECT|DROP|DELETE)', t: 'SELECT * FROM users' }
                        ].map((p, i) => (
                            <button key={i} onClick={() => loadPattern(p.r, p.t)} className="text-left py-1 text-[10px] font-medium text-indigo-600 hover:bg-indigo-50 px-2 rounded -mx-2 transition-all">
                                {p.l}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <h5 className="text-[10px] font-black text-indigo-600 uppercase mb-4 tracking-widest border-b border-indigo-100 pb-2 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-indigo-600"></div> Reference
                    </h5>
                    <div className="space-y-2 font-mono text-[9px] text-slate-600">
                        <p className="flex justify-between border-b border-slate-100 pb-1"><span>^</span> <span className="text-slate-400 font-sans">Start</span></p>
                        <p className="flex justify-between border-b border-slate-100 pb-1"><span>$</span> <span className="text-slate-400 font-sans">End</span></p>
                        <p className="flex justify-between border-b border-slate-100 pb-1"><span>\\b</span> <span className="text-slate-400 font-sans">Word Bd.</span></p>
                        <p className="flex justify-between border-b border-slate-100 pb-1"><span>\\d</span> <span className="text-slate-400 font-sans">Digit</span></p>
                        <p className="flex justify-between border-b border-slate-100 pb-1"><span>\\w</span> <span className="text-slate-400 font-sans">Word</span></p>
                    </div>
                </div>
            </div>
            {/* 13. MCQ Practice */}
            <section className="content-section bg-slate-50 border-2 border-slate-200 p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden mt-20" id="mcq">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

                <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tighter uppercase italic relative z-10">13. MCQ Practice</h3>
                <p className="text-sm text-slate-500 mb-12 relative z-10 font-medium">Test your mastery of the advanced regex concepts discussed in this module.</p>

                <div className="space-y-8 mt-4 relative z-10">
                    {[
                        {
                            id: 1,
                            q: "Which regex correctly matches a valid IPv4 address ensuring each octet is strictly between 0 and 255?",
                            o: ["\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}", "((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)", "[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+", "(\\d{3}\\.){3}\\d{3}"],
                            c: 1
                        },
                        {
                            id: 2,
                            q: "In a flex/lex lexer, if 'while' matches both a KEYWORD rule and an IDENTIFIER rule, which one takes priority?",
                            o: ["The identifier rule (because it's more generic)", "The rule defined first in the specification file", "Whichever is listed last in the file", "The engine generates a non-determinism error"],
                            c: 1
                        },
                        {
                            id: 3,
                            q: "What is the purpose of the lookahead ^(?=.*[A-Z])(?=.*\\d) in a password validation regex?",
                            o: ["To ensure the password starts with an uppercase letter", "To enforce at least one uppercase letter and one digit exists", "To prevent any uppercase letters from being used", "To limit characters to only digits and uppercase"],
                            c: 1
                        },
                        {
                            id: 4,
                            q: 'Given "<h1>Header</h1>", what does the greedy pattern <.*> match?',
                            o: ["<h1> only", "</h1> only", "The entire string: <h1>Header</h1>", "Each tag separately"],
                            c: 2
                        },
                        {
                            id: 5,
                            q: "Catastrophic backtracking (ReDoS) usually occurs due to:",
                            o: ["Using the global (g) flag on large strings", "Compiling regex inside a loop", "Nested quantifiers on ambiguous patterns", "Memory leaks in the browser engine"],
                            c: 2
                        }
                    ].map((item) => (
                        <div key={item.id} className="bg-white border-2 border-slate-100 p-10 rounded-[2.5rem] group hover:border-indigo-200 transition-all shadow-sm">
                            <p className="text-lg font-bold text-slate-800 mb-8 flex gap-4 group-hover:text-indigo-900 transition-colors leading-relaxed">
                                <span className="bg-slate-100 text-slate-400 text-[10px] w-6 h-6 flex items-center justify-center rounded-full shrink-0 font-black italic">Q{item.id}</span>
                                {item.q}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                {item.o.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => checkMcq(item.id, idx, item.c)}
                                        className={`text-left p-2.5 rounded border text-[11px] font-medium transition-all ${mcqAnswers[item.id] === idx ? (idx === item.c ? 'bg-green-100 border-green-500 text-green-900 font-bold' : 'bg-red-100 border-red-500 text-red-900') : 'bg-white hover:border-indigo-300 hover:bg-slate-50 text-gray-600'}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            {mcqResults[item.id] !== undefined && (
                                <p className={`text-[10px] font-bold uppercase tracking-widest ${mcqResults[item.id] ? 'text-green-600' : 'text-red-500'}`}>
                                    {mcqResults[item.id] ? '✅ Correct Answer' : '❌ Incorrect Selection'}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* 14. Exam Questions */}
            <section className="content-section" id="exam">
                <h3>14. Exam Questions & Quick Reference</h3>
                <p className="mb-6">Common university and professional certification questions regarding regular expressions.</p>
                <div className="space-y-6">
                    {[
                        {
                            id: 101,
                            title: "Q1. Design a regex for emails with restrictive TLD (2-6 letters) and subdomains support.",
                            ans: "^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9\\-]+(\\.[a-zA-Z0-9\\-]+)*\\.[a-zA-Z]{2,6}$",
                            expl: "Breakdown: ^ at start, local part set, @ literal, subdomain group (repetition), and fixed 2-6 char TLD.",
                            p: 3
                        },
                        {
                            id: 102,
                            title: "Q2. Differentiate between greedy and lazy quantifiers with a specific example.",
                            ans: "Greedy (*, +) consumes up to the last occurrence of the next metacharacter. Lazy (*?, +?) stops at the first occurrence.",
                            expl: 'Example: "<b>bold</b>". Greedy <.*> → "<b>bold</b>". Lazy <.*?> → "<b>" and "</b>".',
                            p: 4
                        },
                        {
                            id: 103,
                            title: "Q3. Tokenize 'while current > 0' given rules: (1) if|while (KW), (2) [a-z]+ (ID), (3) [0-9]+ (INT).",
                            ans: '[(KW, "while"), (ID, "current"), (OP, ">"), (INT, "0")]',
                            expl: "The 'while' lexeme matches KW (Rule 1) not ID (Rule 2) because keywords are defined with strictly higher priority in lexicographical specs.",
                            p: 5
                        }
                    ].map(q => (
                        <div key={q.id} className="border-l-4 border-indigo-200 pl-4 py-1">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-gray-900 font-semibold text-sm max-w-xl">{q.title}</p>
                                <span className="text-[9px] font-black text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">[{q.p} MARKS]</span>
                            </div>
                            <button onClick={() => toggleAnswer(q.id)} className="text-[10px] font-black text-indigo-500 hover:text-indigo-700 transition-colors uppercase tracking-widest flex items-center gap-1">
                                {showModelAnswer[q.id] ? '▼ Hide' : '▶ Show'} Model Answer
                            </button>
                            {showModelAnswer[q.id] && (
                                <div className="mt-2 p-4 bg-gray-50 border rounded-lg shadow-inner">
                                    <p className="text-xs font-mono font-bold text-gray-800 bg-white p-2 border rounded-md border-indigo-100 mb-2">{q.ans}</p>
                                    <p className="text-[11px] text-gray-600 italic leading-relaxed">{q.expl}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 py-8 border-t text-center">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em]">Unit 2.1 | Module Completed</p>
                </div>
            </section>

            <div className="mt-16 py-8 border-t text-center opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[1em]">Unit 2.1 | Module Complete</p>
            </div>

        </div>
    );
};

export default Module2_1;
