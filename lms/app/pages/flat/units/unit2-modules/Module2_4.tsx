'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module2_4: React.FC = () => {
    // Navigation/Toggle states
    const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

    const toggleSolution = (id: string) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="module-content">
            {/* 1. Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.4</div>
                <div className="lesson-title-main">
                    <h1>Closure Properties of Regular Languages</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages | Level: Expert Comprehensive</p>
                </div>
            </div>

            {/* 2. Why This Topic Matters */}
            <section className="content-section">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm mb-8">
                    <h2 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🔥</span> Why This Topic Matters
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        Imagine you're building a complex pattern-matching system for a search engine. You need to combine multiple search patterns: finding documents that contain either "AI" OR "machine learning" (union), documents that contain BOTH "neural networks" AND "deep learning" (intersection), or documents that do NOT contain "spam" (complement). Without knowing whether these combinations preserve the "regular" nature of your patterns, you couldn't guarantee your system would work efficiently.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        Closure properties are the mathematical foundation that tells us: "If you start with regular languages and apply these specific operations, your result will ALWAYS be regular." This is incredibly powerful because it means we can build complex language recognizers by combining simple ones, knowing our final system will still be implementable using finite automata.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
                            <p className="font-bold text-orange-800 text-xs mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span> Compiler Design
                            </p>
                            <p className="text-[11px] text-gray-600">Lexical analyzers combine token patterns using union operations (e.g., identifiers OR keywords OR operators)</p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
                            <p className="font-bold text-orange-800 text-xs mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span> Network Security
                            </p>
                            <p className="text-[11px] text-gray-600">Snort/Wireshark combine attack signatures using intersection to detect multi-condition threats</p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
                            <p className="font-bold text-orange-800 text-xs mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span> Text Processing
                            </p>
                            <p className="text-[11px] text-gray-600">Grep and Sed use closure properties to optimize complex regular expression matching</p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
                            <p className="font-bold text-orange-800 text-xs mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span> Hardware Verification
                            </p>
                            <p className="text-[11px] text-gray-600">Model checking tools use these properties to verify circuit behavior</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Learning Objectives */}
            <section className="content-section">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <p className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <span className="text-xl">🎯</span> Learning Objectives
                    </p>
                    <ul className="space-y-3">
                        {[
                            { id: 1, title: "Understand Closure Properties", desc: "Gain a profound understanding of the closure property concept and its significance." },
                            { id: 2, title: "Identify Key Closure Operations", desc: "Successfully list and explain the fundamental operations that preserve the regularity of languages (union, intersection, etc.)." },
                            { id: 3, title: "Master Proof Strategies", desc: "Demonstrate professional mastery in proving closure properties using DFA/NFA constructions and algebra." },
                            { id: 4, title: "Apply Algorithms", desc: "Efficiently apply product construction and epsilon-NFA algorithms to solve actual computational problems." },
                            { id: 5, title: "Analyze Efficiency", desc: "Analyze the computational complexity and state-space explosion of various closure constructions." }
                        ].map(obj => (
                            <li key={obj.id} className="flex gap-4">
                                <div className="bg-blue-600 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{obj.id}</div>
                                <div>
                                    <p className="text-sm font-bold text-blue-950 leading-none mb-1">{obj.title}</p>
                                    <p className="text-xs text-blue-800/70">{obj.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 4. Deep Dive: Definitions */}
            <section className="content-section">
                <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg flex items-center justify-center text-xs shadow-sm">📖</span>
                    Deep Dive: Understanding Closure Properties
                </h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Definition & Fundamentals</h3>
                        <div className="bg-white border-2 border-indigo-100 p-8 rounded-[2.5rem] text-slate-900 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity"></div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-indigo-400">📌 Formal Definition</p>
                            <p className="text-sm font-bold italic mb-6 leading-relaxed border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50/50 rounded-r-xl">
                                <strong>Closure Property:</strong> A set S is said to be closed under an operation op if applying op to any elements of S always produces a result that is also in S.
                            </p>
                            <div className="bg-slate-50 border border-indigo-50 p-6 rounded-2xl text-[11px] space-y-3 font-medium text-slate-600 leading-relaxed shadow-inner">
                                <p>Think of closure properties like a <strong>"safety guarantee"</strong> in programming. Just as type safety ensures operations on integers produce integers, closure properties ensure operations on regular languages produce regular languages.</p>
                                <p>Without closure properties, every time we combined two patterns, we'd have to prove from scratch that the result was still regular. With closure properties, we have a toolkit of proven operations, allowing us to build complex systems with confidence.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Key Terminology</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {[
                                { term: "Union (L₁ ∪ L₂)", desc: "Strings in L₁ OR in L₂" },
                                { term: "Intersection (L₁ ∩ L₂)", desc: "Strings in BOTH L₁ AND L₂" },
                                { term: "Complement (L̄)", desc: "Strings NOT in L" },
                                { term: "Concatenation (L₁L₂)", desc: "L₁ followed by L₂" },
                                { term: "Kleene Star (L*)", desc: "Zero or more strings from L" },
                                { term: "Homomorphism (h(L))", desc: "Symbol-to-string substitution" },
                                { term: "Reversal (Lᴿ)", desc: "All strings in L reversed" }
                            ].map(item => (
                                <div key={item.term} className="bg-gray-50 p-3 border rounded-xl hover:shadow-sm transition-all border-l-4 border-l-blue-400">
                                    <p className="text-[11px] font-bold text-gray-900">{item.term}</p>
                                    <p className="text-[10px] text-gray-500 mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Visual Representation */}
            <section className="content-section">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Visual Representation: Closure Properties Overview</h3>
                <div className="bg-white border rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Diagram Background Elements */}
                    <div className="absolute inset-0 bg-slate-50 opacity-30"></div>

                    <p className="relative text-[10px] font-black uppercase text-gray-400 mb-10 tracking-[0.4em]">Figure 1: Regular Language Safety Guarantee</p>

                    <div className="relative flex flex-wrap justify-center gap-4 max-w-2xl">
                        {[
                            { sym: "∪", label: "Union" },
                            { sym: "∩", label: "Intersection" },
                            { sym: "L̄", label: "Complement" },
                            { sym: "·", label: "Concatenate" },
                            { sym: "L*", label: "Kleene Star" },
                            { sym: "Lᴿ", label: "Reversal" },
                            { sym: "h(L)", label: "Homomorphism" }
                        ].map(item => (
                            <div key={item.label} className="flex flex-col items-center gap-2 group">
                                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-xl font-black text-gray-800 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 group-hover:scale-110 transition-all cursor-default">
                                    {item.sym}
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 group-hover:text-blue-500 uppercase tracking-tighter">{item.label}</span>
                            </div>
                        ))}

                        {/* Resulting in Regular */}
                        <div className="w-full flex justify-center mt-12">
                            <div className="bg-green-600 text-white px-8 py-3 rounded-2xl flex flex-col items-center shadow-lg border-2 border-green-400">
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Result</p>
                                <p className="text-sm font-black uppercase tracking-widest">Regular Language</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How it Works */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-4 border-b pb-2 border-slate-200">How It Works: The Mechanism Explained</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Closure properties work because of the fundamental connection between regular languages and finite automata. This approach is like building with <strong>LEGO blocks</strong>: if each block is a regular language (representable by a finite automaton), we can combine them in specific ways and still get something that can be represented by a finite automaton.
                </p>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] p-12 text-slate-900 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 mb-10 pb-4 border-b border-indigo-100 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Proof Strategy Flowchart
                    </h4>

                    <div className="flex flex-col gap-6 items-center relative z-10">
                        {/* Flow nodes */}
                        <div className="bg-white border-2 border-slate-100 min-w-[280px] p-5 rounded-2xl shadow-sm flex items-center gap-4 group/item hover:border-indigo-200 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-indigo-100 italic">1</div>
                            <p className="text-xs font-black text-slate-800 tracking-tight">Assume L₁, L₂ are regular languages</p>
                        </div>

                        <div className="w-0.5 h-8 bg-indigo-100"></div>

                        <div className="bg-white border-2 border-slate-100 min-w-[280px] p-5 rounded-2xl shadow-sm flex items-center gap-4 group/item hover:border-indigo-200 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-indigo-100 italic">2</div>
                            <p className="text-xs font-black text-slate-800 tracking-tight">Get DFAs M₁, M₂ for languages</p>
                        </div>

                        <div className="w-0.5 h-8 bg-indigo-100"></div>

                        <div className="flex gap-4 overflow-x-auto w-full justify-center py-4 no-scrollbar">
                            {[
                                { op: "Union/Intersection", step: "Product Construction (Q₁ × Q₂)" },
                                { op: "Complement", step: "State Swapping (Final ↔ Non-Final)" },
                                { op: "Concatenation", step: "Connect Final to Start via ε" },
                                { op: "Kleene Star", step: "Add Loopback ε-Transitions" }
                            ].map((x, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl min-w-[140px] text-center">
                                    <p className="text-[8px] uppercase tracking-widest text-indigo-300 font-black mb-2">{x.op}</p>
                                    <p className="text-[10px] font-medium leading-tight">{x.step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="w-0.5 h-6 bg-white/10"></div>

                        <div className="bg-green-600/20 backdrop-blur min-w-[220px] p-4 rounded-xl border border-green-500/40 flex items-center gap-4 text-green-300">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-xs shrink-0">✔</div>
                            <p className="text-[11px] font-bold italic">Conclusion: Resulting machine is finite ➔ Regular!</p>
                        </div>
                    </div>

                    <p className="text-[9px] text-white/20 font-mono mt-10 text-center uppercase tracking-widest">Figure 2: Formal Proof Pipeline for Closure Theorems</p>
                </div>
            </section>

            {/* 7. Key Components */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-6">Key Components & Construction Techniques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 border p-6 rounded-2xl relative">
                        <span className="absolute top-4 right-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">TECHNIQUE 01</span>
                        <h4 className="font-bold text-gray-900 border-b pb-2 mb-4">Product Construction</h4>
                        <p className="text-xs text-gray-600 leading-relaxed italic mb-4">"The Swiss Army knife of closure property proofs."</p>
                        <p className="text-[11px] text-gray-700">
                            Simulates two DFAs <strong>M₁ and M₂</strong> in parallel by letting states be pairs <strong>(p, q)</strong>.
                            Allows for proving <strong>Intersection, Union, and Difference</strong> by modifying the accepting condition.
                        </p>
                    </div>

                    <div className="bg-gray-50 border p-6 rounded-2xl relative">
                        <span className="absolute top-4 right-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">TECHNIQUE 02</span>
                        <h4 className="font-bold text-gray-900 border-b pb-2 mb-4">State Swapping</h4>
                        <p className="text-xs text-gray-600 leading-relaxed italic mb-4">Used exclusively for Complement closure.</p>
                        <p className="text-[11px] text-gray-700">
                            By swapping final and non-final states in a DFA, you construct a machine that accepts a string if and only if the original DFA rejects it.
                        </p>
                        <div className="mt-4 p-2 bg-red-100/50 rounded text-[10px] text-red-600 font-bold italic">
                            ⚠️ Note: Works ONLY for DFAs, not NFAs!
                        </div>
                    </div>

                    <div className="bg-gray-50 border p-6 rounded-2xl relative">
                        <span className="absolute top-4 right-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">TECHNIQUE 03</span>
                        <h4 className="font-bold text-gray-900 border-b pb-2 mb-4">ε-Transitions</h4>
                        <p className="text-xs text-gray-600 leading-relaxed italic mb-4">Glue for Union, Concat, and Kleene Star.</p>
                        <p className="text-[11px] text-gray-700">
                            Allows machines to move between states without consuming input. Essential for connecting modular automata pieces without creating exponential state blowup in the NFA stage.
                        </p>
                    </div>

                    <div className="bg-gray-50 border p-6 rounded-2xl relative">
                        <span className="absolute top-4 right-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">TECHNIQUE 04</span>
                        <h4 className="font-bold text-gray-900 border-b pb-2 mb-4">Algebraic Substitution</h4>
                        <p className="text-xs text-gray-600 leading-relaxed italic mb-4">Approach via Regular Expressions.</p>
                        <p className="text-[11px] text-gray-700">
                            Proving closure by modifying the regular expression itself (e.g., L₁ ∪ L₂ = R₁ + R₂). Used for Homomorphism and Inverse-Homomorphism proofs.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Construction Diagram */}
            <section className="content-section">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Product Construction Architecture</h3>
                <div className="bg-slate-50 border rounded-3xl p-10 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full">
                        <div className="flex flex-col gap-4">
                            <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md text-center">
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-60">DFA M₁</p>
                                <p className="text-xs font-bold font-mono">States: Q₁</p>
                            </div>
                            <div className="bg-indigo-600 text-white p-4 rounded-xl shadow-md text-center">
                                <p className="text-[8px] font-black uppercase tracking-widest opacity-60">DFA M₂</p>
                                <p className="text-xs font-bold font-mono">States: Q₂</p>
                            </div>
                        </div>

                        <div className="text-slate-300 flex flex-col items-center">
                            <div className="w-12 h-1 overflow-visible border-y-2 border-r-2 border-slate-300"></div>
                            <div className="text-[10px] font-black uppercase tracking-widest my-2">COMBINE</div>
                        </div>

                        <div className="bg-white border-2 border-slate-900 p-8 rounded-3xl shadow-2xl flex flex-col items-center relative">
                            <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[8px] font-black px-2 py-0.5 rounded">FINAL MACHINE</div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-slate-400">States in Product DFA</p>
                            <div className="bg-slate-100 font-mono text-sm p-4 rounded-xl border shadow-inner">
                                Q₁ × Q₂ = {'{(q_a, p_b) | q_a ∈ Q₁, p_b ∈ Q₂}'}
                            </div>
                            <p className="text-[9px] text-gray-400 mt-4 italic">Transition δ((q,p), a) = (δ₁(q,a), δ₂(p,a))</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-10 italic">Figure 3: Product Construction Logic - Parallel Processing in a Single System</p>
                </div>
            </section>

            {/* 9. Real World Example */}
            <section className="content-section">
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] overflow-hidden shadow-xl">
                    <div className="bg-white p-6 px-10 text-slate-500 text-[10px] font-black tracking-[0.3em] flex justify-between items-center border-b border-slate-100 uppercase">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"></div>💻 Case Study</span>
                        <span className="text-indigo-600 font-serif italic">GNU GREP INFRASTRUCTURE</span>
                    </div>
                    <div className="p-10">
                        <p className="text-slate-500 text-sm italic mb-10 leading-relaxed border-l-4 border-indigo-600 pl-6 py-2 bg-indigo-50/50 rounded-r-xl font-medium">
                            "The efficiency of grep comes from theoretical foundations—knowing that the result of complex operations is always a DFA guarantees linear-time matching."
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: "PARSING", desc: "Regex is parsed into an NFA using Thompson's construction" },
                                { step: "2", title: "UNION", desc: "Closure properties used to combine patterns for grep -E '(a|b)'" },
                                { step: "3", title: "SUBSET", desc: "Convert NFA to DFA for high-speed constant time matching" },
                                { step: "4", title: "MINIMIZE", desc: "Final DFA minimized to reduce the engine's memory footprint" }
                            ].map(x => (
                                <div key={x.step} className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 group hover:border-indigo-300 transition-all shadow-sm">
                                    <p className="text-3xl font-black text-indigo-600 mb-2 opacity-20 group-hover:opacity-100 tracking-tighter shrink-0">{x.step}</p>
                                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{x.title}</p>
                                    <p className="text-[9px] text-slate-500 leading-tight font-medium opacity-80">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Misconceptions */}
            <section className="content-section">
                <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8">
                    <h3 className="text-lg font-black text-red-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                        <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm shrink-0">⚠️</span>
                        Common Misconceptions & Pitfalls
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { q: "Misconception: Regularity is universal.", a: "Infinite unions of regular languages may NOT be regular. Power set operations also don't preserve regularity." },
                            { q: "NFA Complement simplicity.", a: "Simply swapping states in an NFA doesn't work! You MUST convert to DFA first due to non-determinism logic." },
                            { q: "Product construction uniformity.", a: "Union and Intersection use identical state transitions but COMPLETELY different final state logic." },
                            { q: "Inverse Homomorphism complexity.", a: "Inverse homomorphism is slightly more complex to prove than direct homomorphism but remains closed." }
                        ].map((m, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 text-red-200 font-black text-xl italic underline mb-1">P{i + 1}</div>
                                <div>
                                    <p className="text-xs font-bold text-red-900 mb-1 leading-tight">{m.q}</p>
                                    <p className="text-[10px] text-red-700 leading-normal opacity-80 italic">{m.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Proofs 1-8 */}
            <section className="content-section mt-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Detailed Closure Proofs</h2>
                <p className="text-sm text-slate-500 mb-12">Rigorous mathematical foundations for each regularity theorem</p>

                <div className="space-y-16">
                    {/* 1. Union */}
                    <div className="relative">
                        <div className="flex items-center gap-6 mb-8">
                            <span className="bg-indigo-600 text-white text-[10px] font-black h-8 w-24 rounded-full flex items-center justify-center uppercase tracking-widest shadow-lg shadow-indigo-100 italic shrink-0">Property 01</span>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Closure Under Union</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-2xl border shadow-sm border-l-4 border-l-indigo-600">
                                    <p className="text-[10px] font-black text-indigo-600 uppercase mb-4 tracking-widest">📐 Theorem: Union Closure</p>
                                    <p className="text-sm font-bold text-slate-900 leading-relaxed mb-4 italic">"If L₁ and L₂ are regular languages over alphabet Σ, then L₁ ∪ L₂ is also regular."</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Proof Strategy: Construct an NFA that branches to either M₁ or M₂ using ε-moves from a new start state.
                                    </p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-[11px] leading-relaxed italic text-indigo-950/70">
                                    <strong>Algebraic Shortcut:</strong> If L₁=L(R₁) and L₂=L(R₂), then L₁∪L₂ is simply the language of the regular expression <strong>(R₁+R₂)</strong>. Zero complex logic required.
                                </div>
                            </div>

                            <div className="bg-white border-2 border-slate-100 p-6 rounded-2xl flex flex-col items-center">
                                <p className="text-[9px] font-black text-gray-400 uppercase mb-8 self-start">Figure 4: NFA Construction for Union</p>
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center font-black text-sm bg-indigo-50 shadow-lg">q₀</div>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center">
                                            <span className="text-[10px] font-bold text-slate-400 mr-2">ε</span>
                                            <div className="w-16 h-8 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-[10px] font-black">NFA M₁</div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-[10px] font-bold text-slate-400 mr-2">ε</span>
                                            <div className="w-16 h-8 bg-slate-100 border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-[10px] font-black">NFA M₂</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Intersection */}
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-indigo-600 shadow-lg shadow-indigo-100 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic shrink-0">Property 02</span>
                            <h3 className="text-2xl font-bold">Closure Under Intersection</h3>
                        </div>

                        <div className="bg-white border rounded-3xl p-8 space-y-6 shadow-sm border-t-8 border-t-blue-500">
                            <p className="text-sm font-bold text-slate-800 leading-relaxed">
                                L₁ ∩ L₂ is regular. Unlike Union, Intersection cannot be trivially proved using regular expression symbols like `|`.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                                    <p className="text-[10px] font-black text-blue-600 uppercase mb-2 tracking-widest">Proof 1: De Morgan Approach</p>
                                    <p className="text-xs font-mono font-bold text-blue-900 block mb-2">L₁ ∩ L₂ = ¬(¬L₁ ∪ ¬L₂)</p>
                                    <p className="text-[10px] text-blue-800 opacity-70">Requires closure under Complement and Union. Since both are proven, Intersection is implicitly closed.</p>
                                </div>
                                <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100">
                                    <p className="text-[10px] font-black text-teal-600 uppercase mb-2 tracking-widest">Proof 2: Product DFA</p>
                                    <p className="text-[10px] text-teal-800 mb-2">Build states Q₁ × Q₂. Final states are pairs (f₁, f₂) where <strong>both</strong> original machines accept.</p>
                                    <p className="text-[10px] text-teal-600 font-bold italic underline">F_new = F₁ × F₂</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Complement */}
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-indigo-600 shadow-lg shadow-indigo-100 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic shrink-0">Property 03</span>
                            <h3 className="text-2xl font-bold">Closure Under Complement</h3>
                        </div>
                        <div className="bg-indigo-50 border-2 border-indigo-100 p-8 rounded-[3rem] shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <div className="space-y-4 max-w-sm shrink-0 uppercase tracking-widest relative z-10">
                                <p className="text-[9px] text-indigo-400 font-black tracking-[0.4em]">Methodology</p>
                                <h4 className="text-xl font-black text-indigo-900 font-serif italic">DFA State Swapping</h4>
                                <div className="w-12 h-1 bg-indigo-600"></div>
                                <p className="text-xs text-indigo-800/60 normal-case tracking-normal leading-relaxed italic font-medium">"A string is in L̄ if and only if it's NOT in L."</p>
                            </div>
                            <div className="bg-white border-2 border-indigo-100 p-6 rounded-3xl w-full flex items-center justify-between relative z-10 shadow-sm">
                                <div className="text-center font-mono">
                                    <p className="text-[10px] text-slate-400 mb-2">Original State q</p>
                                    <div className="w-12 h-12 bg-indigo-600 rounded-full mx-auto border-4 border-indigo-100 shadow-lg shadow-indigo-100"></div>
                                    <p className="text-xs font-black text-slate-900 mt-2 italic">f ∈ F</p>
                                </div>
                                <div className="text-xl font-black text-indigo-400 animate-pulse">➔</div>
                                <div className="text-center font-mono">
                                    <p className="text-[10px] text-slate-400 mb-2">Complemented q'</p>
                                    <div className="w-12 h-12 bg-white border-4 border-slate-200 rounded-full mx-auto shadow-sm"></div>
                                    <p className="text-xs font-black text-slate-500 mt-2 italic">f ∉ F'</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Concatenation & 5. Kleene Star */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                            <span className="bg-emerald-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase absolute top-4 right-4">Property 04</span>
                            <h4 className="text-xl font-black text-slate-900 mb-4">Concatenation (L₁L₂)</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6">Connect all final states of M₁ to the start state of M₂ via <strong>ε-transitions</strong>. New accepting states are strictly from M₂.</p>
                            <p className="text-sm font-mono font-bold text-emerald-700 bg-emerald-50 p-2 rounded">δ(f, ε) = {'{q₀₂}'} for all f ∈ F₁</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                            <span className="bg-amber-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase absolute top-4 right-4">Property 05</span>
                            <h4 className="text-xl font-black text-slate-900 mb-4">Kleene Star (L*)</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6">Introduce a new start state that is also an accepting state (accepts ε). Add ε-moves from original final states back to the start.</p>
                            <p className="text-sm font-mono font-bold text-amber-700 bg-amber-50 p-2 rounded">q' is new start in F'</p>
                        </div>
                    </div>

                    {/* 6, 7, 8 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border">
                            <h5 className="font-black text-xs uppercase text-slate-400 mb-3 tracking-widest">06. Reversal (Lᴿ)</h5>
                            <p className="text-[10px] leading-relaxed text-slate-600">Reverse all transition edges in the NFA and swap start/final roles. Requires a new single start point connected by ε to all original final states.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border">
                            <h5 className="font-black text-xs uppercase text-slate-400 mb-3 tracking-widest">07. Homomorphism h(L)</h5>
                            <p className="text-[10px] leading-relaxed text-slate-600">Proved by replacing each symbol <em>a</em> in the regular expression with the string <em>h(a)</em>. Since regular expressions are closed under concat and union, h(L) is regular.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border">
                            <h5 className="font-black text-xs uppercase text-slate-400 mb-3 tracking-widest">08. Inverse Hom h⁻¹(L)</h5>
                            <p className="text-[10px] leading-relaxed text-slate-600 italic">Advanced Theorem: Construct a DFA that simulates entire strings for each symbol transition.</p>
                            <p className="text-[10px] font-mono mt-2 font-bold text-indigo-700">δ'(q, a) = δ*(q, h(a))</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary Table */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-6">Summary of Closure Properties</h3>
                <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
                    <table className="w-full text-[11px] text-left">
                        <thead className="bg-slate-50 text-slate-400 border-b-2 border-slate-100 font-black uppercase tracking-widest text-[9px]">
                            <tr>
                                <th className="p-4 border-r border-slate-100">Operation</th>
                                <th className="p-4 border-r border-slate-100">Notation</th>
                                <th className="p-4 border-r border-slate-100">Proof Method</th>
                                <th className="p-4">Final Accept States (M_new)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-4 border-r font-black">Union</td><td className="p-4 border-r font-mono">L₁ ∪ L₂</td><td className="p-4 border-r">NFA with ε</td><td className="p-4 font-bold text-indigo-600">F₁ ∪ F₂</td></tr>
                            <tr><td className="p-4 border-r font-black bg-slate-50">Intersection</td><td className="p-4 border-r font-mono bg-slate-50">L₁ ∩ L₂</td><td className="p-4 border-r bg-slate-50">Product DFA</td><td className="p-4 font-bold text-indigo-600 bg-slate-50">F₁ × F₂</td></tr>
                            <tr><td className="p-4 border-r font-black">Complement</td><td className="p-4 border-r font-mono">L̄</td><td className="p-4 border-r">State Swap</td><td className="p-4 font-bold text-red-600">Q - F</td></tr>
                            <tr><td className="p-4 border-r font-black bg-slate-50">Concatenation</td><td className="p-4 border-r font-mono">L₁L₂</td><td className="p-4 border-r bg-slate-50">ε Linking</td><td className="p-4 font-bold text-indigo-600 bg-slate-50">F₂</td></tr>
                            <tr><td className="p-4 border-r font-black">Kleene Star</td><td className="p-4 border-r font-mono">L*</td><td className="p-4 border-r">ε Loopback</td><td className="p-4 font-bold text-indigo-600">q₀_new</td></tr>
                            <tr><td className="p-4 border-r font-black bg-slate-50">Inverse Hom</td><td className="p-4 border-r font-mono bg-slate-50">h⁻¹(L)</td><td className="p-4 border-r bg-slate-50">DFA Simulation</td><td className="p-4 font-bold text-indigo-600 bg-slate-50">F</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Algorithm: Product Construction */}
            <section className="content-section">
                <h3 className="text-2xl font-black mb-6">⚙️ Algorithm: Product Construction</h3>
                <p className="text-sm text-gray-500 mb-8 italic">The backbone of intersection and union for finite automata.</p>

                <div className="bg-slate-50 p-10 rounded-[3rem] font-mono text-xs text-slate-700 shadow-xl border-2 border-slate-200 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                        <svg width="240" height="240" viewBox="0 0 100 100" fill="currentColor" className="text-indigo-200">
                            <rect x="10" y="10" width="80" height="80" rx="4" />
                            <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>

                    <p className="text-[10px] font-black text-indigo-600 mb-8 border-b border-indigo-100 pb-2 flex justify-between items-center uppercase tracking-[0.2em]">
                        <span>PRODUCT_CONSTRUCTION(M1, M2)</span>
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-[8px] italic font-mono shadow-lg shadow-indigo-100">Complexity: O(|Q1|×|Q2|)</span>
                    </p>

                    <div className="space-y-1">
                        <p><span className="text-indigo-600 font-black italic">BEGIN</span></p>
                        <p className="pl-4 text-slate-400 font-sans italic">// 1. Cartesian Product of States</p>
                        <p className="pl-4 font-black">Q ← {'{}'}</p>
                        <p className="pl-4">FOR each p IN M1.Q DO</p>
                        <p className="pl-8">FOR each q IN M2.Q DO Q ← Q ∪ {'{(p, q)}'}</p>

                        <p className="pl-4 mt-6 text-slate-400 font-sans italic">// 2. Transitions</p>
                        <p className="pl-4">FOR each (p, q) IN Q DO</p>
                        <p className="pl-8">FOR each symbol 'a' IN Σ DO</p>
                        <p className="pl-12 font-bold text-slate-900 bg-white/50 inline-block px-1">δ((p, q), a) ← (M1.δ(p, a), M2.δ(q, a))</p>

                        <p className="pl-4 mt-6 text-slate-400 font-sans italic">// 3. Accepting States (INTERSECTION)</p>
                        <p className="pl-4 font-black">F ← {'{}'}</p>
                        <p className="pl-4 text-emerald-600 font-bold bg-emerald-50/50 p-2 rounded-xl mt-2 border border-emerald-100 border-dashed">
                            FOR each (p, q) IN Q DO <br />
                            &nbsp;&nbsp;&nbsp;IF p ∈ M1.F AND q ∈ M2.F THEN F ← F ∪ {'{(p, q)}'}
                        </p>

                        <p className="mt-4"><span className="text-indigo-600 font-black italic">END</span></p>
                    </div>
                </div>

                <div className="bg-indigo-900/5 p-8 rounded-3xl border border-indigo-100 mt-8">
                    <h4 className="font-bold text-indigo-900 mb-4 uppercase tracking-tighter text-sm">Product Construction Strategy</h4>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col items-center flex-1 w-full shrink-0">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black mb-4">M1</div>
                            <div className="text-[10px] text-center text-gray-400 font-bold mb-1">STATE q</div>
                            <div className="w-1 h-8 bg-indigo-50"></div>
                            <div className="text-[10px] text-center text-indigo-600 font-bold mt-1">δ₁(q,a) = q'</div>
                        </div>
                        <div className="text-3xl font-black text-indigo-200">⊕</div>
                        <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col items-center flex-1 w-full shrink-0">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-black mb-4">M2</div>
                            <div className="text-[10px] text-center text-gray-400 font-bold mb-1">STATE p</div>
                            <div className="w-1 h-8 bg-teal-50"></div>
                            <div className="text-[10px] text-center text-teal-600 font-bold mt-1">δ₂(p,a) = p'</div>
                        </div>
                        <div className="text-3xl font-black text-indigo-200">=</div>
                        <div className="bg-white border-2 border-indigo-100 p-8 rounded-3xl shadow-xl flex flex-col items-center flex-1 w-full shrink-0 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-full -mr-8 -mt-8"></div>
                            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black mb-4 shadow-lg shadow-indigo-100">PROD</div>
                            <div className="text-[9px] text-center text-slate-400 font-black mb-1">PAIR (q,p)</div>
                            <div className="w-0.5 h-8 bg-indigo-100"></div>
                            <div className="text-[10px] text-center text-indigo-700 font-black mt-2 underline decoration-indigo-200 decoration-2 underline-offset-4">δ((q,p),a) = (q',p')</div>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-gray-400 font-mono mt-8 uppercase tracking-widest">Figure 5: Parallel Simulation Logic in Product Automata</p>
                </div>
            </section>

            <section className="content-section">
                <h2 className="text-3xl font-black mb-10 border-b-4 pb-4 border-slate-200 flex justify-between items-end uppercase text-slate-900">
                    Learn Through Videos
                    <span className="text-[10px] font-black text-indigo-500 tracking-[0.3em] mb-1">UNIT 2.4 RESOURCES</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { id: "84oNUttWlN4", title: "Closure Properties Overview", author: "Neso Academy", dur: "12m", desc: "Comprehensive explanation of all closure properties with visual DFA constructions." },
                        { id: "jN8zvENdjBg", title: "Product Construction", author: "Gate Smashers", dur: "15m", desc: "Step-by-step construction of product automata with solved examples." },
                        { id: "upu_TeZImN0", title: "Homomorphism Proofs", author: "Jenny's Lectures", dur: "18m", desc: "Advanced closure properties with mathematical proofs and examples." }
                    ].map(v => (
                        <div key={v.id} className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border-b-8 border-b-indigo-500">
                            <div className="aspect-video bg-slate-100 relative">
                                <iframe className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" src={`https://www.youtube.com/embed/${v.id}`} allowFullScreen></iframe>
                                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-black text-slate-900 shadow-sm">{v.dur}</div>
                            </div>
                            <div className="p-6">
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">{v.author}</p>
                                <h4 className="font-bold text-slate-900 mb-4">{v.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Module Quiz */}
            <section className="content-section">
                <h2 className="text-2xl font-bold mb-6">Module 2.4 Mastery Quiz</h2>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <Quiz
                        title="Closure Properties Quiz"
                        questions={[
                            {
                                question: "Regular languages are closed under which of the following operations?",
                                options: ["Union, intersection, and complement", "Union and intersection only", "Complement only", "None of the above"],
                                correctAnswer: 0,
                                explanation: "Regular languages are closed under union, intersection, complement, concatenation, and Kleene star among other operations."
                            },
                            {
                                question: "What technique is used to prove closure under intersection?",
                                options: ["Subset construction", "Product (cross-product) construction", "Pumping Lemma", "Myhill-Nerode theorem"],
                                correctAnswer: 1,
                                explanation: "The product construction creates a new DFA whose states are pairs from both DFAs, simulating both simultaneously."
                            },
                            {
                                question: "If L1 and L2 are regular, is L1 ∩ L2 always regular?",
                                options: ["Yes, always", "Only if L1 = L2", "Only for finite languages", "No, never"],
                                correctAnswer: 0,
                                explanation: "Regular languages are closed under intersection. The product construction proves this."
                            },
                            {
                                question: "How is closure under complement proven for regular languages?",
                                options: ["By reversing the DFA transitions", "By swapping accepting and non-accepting states in a complete DFA", "By applying the Pumping Lemma", "By constructing an NFA"],
                                correctAnswer: 1,
                                explanation: "To complement a DFA, ensure it is complete (has transitions for all symbols from every state), then swap accepting and non-accepting states."
                            },
                            {
                                question: "Which closure property allows us to derive intersection from union and complement?",
                                options: ["Distributive law", "De Morgan's law", "Associative law", "Idempotent law"],
                                correctAnswer: 1,
                                explanation: "De Morgan's law: L1 ∩ L2 = complement(complement(L1) ∪ complement(L2)), allowing intersection to be derived from union and complement."
                            }
                        ]}
                        subject="FLAT"
                        unitId={2}
                        moduleId={4}
                    />
                </div>
            </section>

            <div className="mt-16 py-8 border-t text-center opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[1em]">Unit 2.4 | Module Complete</p>
            </div>

        </div>
    );
};

export default Module2_4;
