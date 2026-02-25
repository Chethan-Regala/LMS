'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module2_2: React.FC = () => {
    // Toggle state for solutions/model answers
    const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

    const toggleSolution = (id: string) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="module-content">
            {/* 1. Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge font-bold">2.2</div>
                <div className="lesson-title-main">
                    <h1>Identities & Algebraic Laws of Regular Expressions</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages | Level: Expert Comprehensive</p>
                </div>
            </div>

            {/* Learning Objectives */}
            <section className="content-section">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
                    <p className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">🎯</span> Learning Objectives
                    </p>
                    <ul className="space-y-3">
                        {[
                            { id: 1, title: "Identify and Apply Algebraic Laws", desc: "State and apply the fundamental algebraic laws (associative, commutative, distributive, identity) governing regular expression operations." },
                            { id: 2, title: "Prove Regular Expression Equivalence", desc: "Use algebraic laws to formally prove that two regular expressions denote the same language (L(R₁) = L(R₂))." },
                            { id: 3, title: "Simplify Complex Expressions", desc: "Apply Kleene algebra identities and algebraic laws to simplify complex regular expressions into minimal equivalent forms." },
                            { id: 4, title: "Understand Kleene Algebra Structure", desc: "Explain how regular expressions form an idempotent semiring with star operation (Kleene algebra) and its completeness properties." },
                            { id: 5, title: "Solve Exam Problems", desc: "Solve GATE, UGC-NET, and university exam problems involving algebraic manipulation, equivalence proofs, and expression simplification." }
                        ].map(obj => (
                            <li key={obj.id} className="flex gap-3 items-start">
                                <span className="bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{obj.id}</span>
                                <div>
                                    <p className="text-sm font-bold text-blue-950">{obj.title}</p>
                                    <p className="text-xs text-blue-800/80 leading-relaxed">{obj.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Introduction */}
            <section className="content-section">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 underline decoration-blue-500 decoration-4 underline-offset-8">Introduction: Identities of Regular Expressions</h2>
                <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-xl">💡</span> Why Algebraic Laws Matter
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Regular expressions follow algebraic structures similar to arithmetic, but with crucial differences. Understanding these laws enables us to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Prove equivalence without constructing automata",
                            "Simplify complex patterns for efficient matching",
                            "Optimize compiler regular expression engines",
                            "Reason formally about language properties"
                        ].map((text, i) => (
                            <div key={i} className="bg-white p-3 rounded-lg border flex items-center gap-3 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <p className="text-xs font-semibold text-gray-600">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Theory */}
            <section className="content-section">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Theory: Algebraic Laws for Regular Expressions</h2>
                <p className="text-gray-700 leading-relaxed">
                    Regular expressions form an algebraic structure known as <strong>Kleene Algebra</strong>, named after mathematician Stephen Kleene. This algebra provides a formal framework for manipulating regular expressions using laws similar to those in arithmetic, but adapted for operations on formal languages. Two regular expressions R₁ and R₂ are <strong>equivalent</strong> (written R₁ ≡ R₂) if they denote the same language: <strong>L(R₁) = L(R₂)</strong>.
                </p>

                <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-2xl mt-8">
                    <p className="font-black text-indigo-900 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="text-lg">📘</span> Definition: Kleene Algebra
                    </p>
                    <p className="text-indigo-800 leading-relaxed mb-4 italic">
                        A Kleene algebra is an algebraic structure <strong>(K, +, ·, *, 0, 1)</strong> where:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { sym: "+", name: "Union (choice)" },
                            { sym: "·", name: "Concatenation (sequence)" },
                            { sym: "*", name: "Kleene star (iteration)" },
                            { sym: "0", name: "Empty language (∅)" },
                            { sym: "1", name: "Empty string (ε)" }
                        ].map(item => (
                            <div key={item.sym} className="bg-white/60 p-3 rounded-xl border border-indigo-100 flex items-center gap-3">
                                <span className="text-indigo-600 font-mono font-black text-lg">{item.sym}</span>
                                <span className="text-[11px] font-bold text-indigo-900">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Big Table */}
            <section className="content-section">
                <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-6">Complete Reference: Algebraic Laws</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 uppercase font-black text-[10px] tracking-widest">
                            <tr>
                                <th className="p-4 border">Category</th>
                                <th className="p-4 border">Law / Identity</th>
                                <th className="p-4 border">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-4 border font-bold" rowSpan={2}>Associativity</td><td className="p-4 border font-mono">(R₁ | R₂) | R₃ ≡ R₁ | (R₂ | R₃)</td><td className="p-4 border italic">Union is associative</td></tr>
                            <tr><td className="p-4 border font-mono">(R₁R₂)R₃ ≡ R₁(R₂R₃)</td><td className="p-4 border italic">Concatenation is associative</td></tr>
                            <tr><td className="p-4 border font-bold">Commutativity</td><td className="p-4 border font-mono">R₁ | R₂ ≡ R₂ | R₁</td><td className="p-4 border italic text-red-600 font-bold">Union is commutative (Concat is NOT)</td></tr>
                            <tr><td className="p-4 border font-bold" rowSpan={2}>Identity</td><td className="p-4 border font-mono">R | ∅ ≡ R</td><td className="p-4 border italic">∅ is identity for union</td></tr>
                            <tr><td className="p-4 border font-mono">Rε ≡ εR ≡ R</td><td className="p-4 border italic">ε is identity for concatenation</td></tr>
                            <tr><td className="p-4 border font-bold">Annihilator</td><td className="p-4 border font-mono">R∅ ≡ ∅R ≡ ∅</td><td className="p-4 border italic text-red-700">∅ annihilates concatenation</td></tr>
                            <tr><td className="p-4 border font-bold">Idempotent</td><td className="p-4 border font-mono">R | R ≡ R</td><td className="p-4 border italic">Union is idempotent</td></tr>
                            <tr><td className="p-4 border font-bold" rowSpan={2}>Distributive</td><td className="p-4 border font-mono">R₁(R₂ | R₃) ≡ R₁R₂ | R₁R₃</td><td className="p-4 border italic">Left distributivity</td></tr>
                            <tr><td className="p-4 border font-mono">(R₁ | R₂)R₃ ≡ R₁R₃ | R₂R₃</td><td className="p-4 border italic">Right distributivity</td></tr>
                            <tr><td className="p-4 border font-bold" rowSpan={4}>Kleene Star</td><td className="p-4 border font-mono">∅* ≡ ε</td><td className="p-4 border italic border-l-4 border-l-blue-400 pl-2">Star of empty set is epsilon!</td></tr>
                            <tr><td className="p-4 border font-mono">ε* ≡ ε</td><td className="p-4 border italic">Star of empty string</td></tr>
                            <tr><td className="p-4 border font-mono">(R*)* ≡ R*</td><td className="p-4 border italic">Star is idempotent</td></tr>
                            <tr><td className="p-4 border font-mono">R* ≡ ε | RR*</td><td className="p-4 border italic">Fixpoint equation</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Deep Dive Sections 1-4 */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-6 italic text-blue-600">1. Associativity and Commutativity Laws</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border mb-8">
                    <p className="text-sm mb-4">These fundamental laws describe how the order of operations and operands affects the result. Understanding these is crucial for rearranging expressions during simplification.</p>
                    <div className="space-y-4">
                        <div className="bg-white p-4 border rounded-xl">
                            <p className="text-xs font-black text-gray-400 mb-2 uppercase tracking-widest">Associativity Laws</p>
                            <p className="text-sm italic mb-2">The grouping of operations does not affect the result:</p>
                            <code className="block bg-slate-50 p-3 rounded font-mono text-indigo-700 mb-2">(R₁ | R₂) | R₃ ≡ R₁ | (R₂ | R₃)</code>
                            <code className="block bg-slate-50 p-3 rounded font-mono text-indigo-700">(R₁R₂)R₃ ≡ R₁(R₂R₃)</code>
                            <p className="text-[10px] text-gray-500 mt-2">Just as (2+3)+4 = 2+(3+4) in arithmetic, the union and concatenation of regular expressions are associative.</p>
                        </div>
                        <div className="bg-white p-4 border rounded-xl">
                            <p className="text-xs font-black text-gray-400 mb-2 uppercase tracking-widest">Commutativity of Union</p>
                            <code className="inline-block bg-slate-50 p-3 rounded font-mono text-indigo-700 mb-2">R₁ | R₂ ≡ R₂ | R₁</code>
                            <p className="text-[10px] text-gray-500 italic mt-2"><strong>Note:</strong> Concatenation is NOT commutative (R₁R₂ ≠ R₂R₁ in general).</p>
                        </div>
                    </div>

                    <div className="bg-indigo-50 border-2 border-indigo-100 p-6 rounded-2xl mt-8 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500 opacity-5 rounded-full -mr-8 -mt-8 group-hover:opacity-10 transition-opacity"></div>
                        <p className="text-[10px] font-black uppercase mb-3 text-indigo-600 tracking-widest flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-indigo-600"></div> Example
                        </p>
                        <p className="text-sm italic text-indigo-900/80 mb-3 font-medium leading-relaxed">Consider (a|b)|c and a|(b|c). Both denote the language {'{a, b, c}'}, proving associativity of union.</p>
                        <p className="text-sm font-bold text-indigo-950 border-t border-indigo-100/50 pt-3 flex items-center gap-2">
                            <span className="text-indigo-400">➔</span> For commutativity: <span className="font-mono bg-white px-2 py-0.5 rounded shadow-sm border border-indigo-50">a|b ≡ b|a</span>, both representing {'{a, b}'}.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-6 italic text-blue-600">2. Identity and Annihilator Laws</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-5 border rounded-2xl shadow-sm border-t-4 border-t-indigo-500">
                        <p className="text-xs font-black text-gray-400 uppercase mb-2">Identity (∅ & ε)</p>
                        <p className="font-mono text-sm text-indigo-600 mb-1">R | ∅ ≡ R</p>
                        <p className="font-mono text-sm text-indigo-600">Rε ≡ εR ≡ R</p>
                        <p className="text-[10px] text-gray-500 mt-2">Empty set is identity for union; empty string for concatenation.</p>
                    </div>
                    <div className="bg-white p-5 border rounded-2xl shadow-sm border-t-4 border-t-red-500">
                        <p className="text-xs font-black text-gray-400 uppercase mb-2">Annihilator (∅)</p>
                        <p className="font-mono text-sm text-red-600">R∅ ≡ ∅R ≡ ∅</p>
                        <p className="text-[10px] text-gray-500 mt-2">Concatenating with ∅ results in the empty set.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-6 italic text-blue-600">3. Idempotent and Distributive Laws</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border mb-8 space-y-4">
                    <div className="bg-white p-4 border rounded-xl">
                        <p className="text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">Idempotent Law</p>
                        <code className="text-indigo-700 font-mono font-bold">R | R ≡ R</code>
                    </div>
                    <div className="bg-white p-4 border rounded-xl">
                        <p className="text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">Distributive Laws</p>
                        <code className="block font-mono text-indigo-700 mb-1">R₁(R₂ | R₃) ≡ R₁R₂ | R₁R₃</code>
                        <code className="block font-mono text-indigo-700">(R₁ | R₂)R₃ ≡ R₁R₃ | R₂R₃</code>
                    </div>
                </div>

                <h3 className="text-xl font-black mb-6 italic text-indigo-600">4. Kleene Star Laws</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-indigo-50 border-2 border-indigo-100 p-6 rounded-3xl shadow-sm group hover:scale-105 transition-transform">
                        <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Identity of ∅</p>
                        <code className="text-indigo-700 font-mono font-black text-lg">∅* ≡ ε</code>
                    </div>
                    <div className="bg-indigo-50 border-2 border-indigo-100 p-6 rounded-3xl shadow-sm group hover:scale-105 transition-transform">
                        <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Double Star</p>
                        <code className="text-indigo-700 font-mono font-black text-lg">(R*)* ≡ R*</code>
                    </div>
                    <div className="bg-indigo-50 border-2 border-indigo-100 p-6 rounded-3xl shadow-sm group hover:scale-105 transition-transform">
                        <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Fixpoint</p>
                        <code className="text-indigo-700 font-mono font-black text-lg">R* ≡ ε | RR*</code>
                    </div>
                </div>
            </section>

            {/* Structure Card */}
            <section className="content-section">
                <div className="bg-white border-2 border-slate-200 p-10 rounded-[3rem] text-slate-900 shadow-xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-8 border-b border-slate-100 pb-4">Figure 2: Structure of Kleene Algebra Axioms</p>
                    <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
                        <div className="space-y-6 max-w-sm">
                            <h3 className="text-3xl font-black leading-tight text-indigo-700 uppercase tracking-tighter">Idempotent Semiring Hierarchy</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">The completeness of Kleene Algebra ensures that any true theorem about regular language inclusion can be derived purely from these axioms.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                            {[
                                { title: "Union", desc: "Comm / Assoc / Idem", color: "text-indigo-600", bg: "bg-indigo-50/50" },
                                { title: "Concat", desc: "Assoc / Distrib", color: "text-rose-600", bg: "bg-rose-50/50" },
                                { title: "Identity", desc: "∅ and ε elements", color: "text-emerald-600", bg: "bg-emerald-50/50" },
                                { title: "Iterate", desc: "Star / Fixpoint", color: "text-amber-600", bg: "bg-amber-50/50" }
                            ].map((item, i) => (
                                <div key={i} className={`${item.bg} backdrop-blur-md p-6 rounded-3xl border-2 border-white shadow-sm hover:shadow-md transition-shadow`}>
                                    <p className={`${item.color} font-black text-xl mb-1`}>{item.title}</p>
                                    <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplification */}
            <section className="content-section">
                <h2 className="text-2xl font-bold mb-6">Simplifying Regular Expressions</h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Simplification Strategies</h3>
                    <p className="text-sm text-blue-800 mb-4 italic">Practical techniques for simplifying complex regular expressions using algebraic laws:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            "Apply identity and annihilator laws first",
                            "Use distributivity to factor common subexpressions",
                            "Apply idempotent law to eliminate duplicates",
                            "Simplify nested stars using (R*)* ≡ R*",
                            "Use denesting rule for union under star"
                        ].map((strat, i) => (
                            <li key={i} className="flex gap-3 text-xs font-bold text-blue-700 bg-white/40 p-2 border border-blue-100 rounded-lg">
                                <span className="text-blue-500">●</span> {strat}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* WORKED EXAMPLES 1-4 */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-6 border-b pb-2">Worked Examples</h3>
                <div className="space-y-6">
                    {/* Example 1 */}
                    <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black flex justify-between tracking-[0.3em] uppercase border-b border-slate-100">
                            <span className="text-indigo-600 font-serif italic">EXAMPLE 1: BASIC SIMPLIFICATION</span>
                            <span className="text-slate-400">IDENTITIES</span>
                        </div>
                        <div className="p-6 bg-slate-50">
                            <p className="text-sm font-black mb-6">Simplify: <code className="bg-indigo-100 px-2 py-0.5 rounded text-indigo-800 font-mono">((a|∅)b)*|∅</code></p>
                            <div className="space-y-4 border-l-2 border-indigo-200 pl-6">
                                <div className="font-mono text-sm flex gap-4"><span className="text-gray-400 shrink-0">Step 1</span> <span className="text-gray-800">((a | ∅) b)* | ∅</span></div>
                                <div className="font-mono text-sm flex gap-4"><span className="text-gray-400 shrink-0">Step 2</span> <span className="text-indigo-600 font-black">(ab)* | ∅</span> <span className="text-[10px] text-gray-400 font-sans italic">// Identity: R | ∅ ≡ R</span></div>
                                <div className="font-mono text-sm flex gap-4"><span className="text-gray-400 shrink-0">Step 3</span> <span className="text-green-600 font-black">(ab)*</span> <span className="text-[10px] text-gray-400 font-sans italic">// Identity: R | ∅ ≡ R</span></div>
                            </div>
                            <div className="mt-6 bg-green-900/5 p-3 rounded border border-green-200 text-green-800 text-xs font-bold">
                                Final Answer: (ab)*
                            </div>
                        </div>
                    </div>

                    {/* Example 2 */}
                    <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black flex justify-between tracking-[0.3em] uppercase border-b border-slate-100">
                            <span className="text-indigo-600 font-serif italic">EXAMPLE 2: DISTRIBUTIVE LAW PROOF</span>
                            <span className="text-slate-400">ALGEBRA</span>
                        </div>
                        <div className="p-6 bg-slate-50">
                            <p className="text-sm font-black mb-6">Prove: <code className="bg-indigo-100 px-2 py-0.5 rounded text-indigo-800 font-mono">a(b|c)d ≡ abd|acd</code></p>
                            <div className="space-y-4 border-l-2 border-indigo-200 pl-6 text-sm">
                                <p className="font-mono"><span className="text-gray-400 mr-4">Step 1</span> a(b|c)d</p>
                                <p className="font-mono"><span className="text-gray-400 mr-4">Step 2</span> = (ab | ac)d <span className="text-[10px] text-indigo-500 font-sans font-black ml-2 uppercase">[Left distributivity]</span></p>
                                <p className="font-mono"><span className="text-gray-400 mr-4">Step 3</span> = abd | acd <span className="text-[10px] text-indigo-500 font-sans font-black ml-4 uppercase">[Right distributivity]</span></p>
                                <p className="font-bold text-green-600 border-t pt-2">Both sides denote {'{abd, acd}'} ✓</p>
                            </div>
                        </div>
                    </div>

                    {/* Example 3 */}
                    <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black flex justify-between tracking-[0.3em] uppercase border-b border-slate-100">
                            <span className="text-indigo-600 font-serif italic">EXAMPLE 3: KLEENE STAR SIMPLIFICATION</span>
                            <span className="text-slate-400">ITERATION</span>
                        </div>
                        <div className="p-6 bg-slate-50">
                            <p className="text-sm font-black mb-6">Simplify: <code className="bg-indigo-100 px-2 py-0.5 rounded text-indigo-800 font-mono">((a*)*)*|ε</code></p>
                            <div className="space-y-4 border-l-2 border-indigo-200 pl-6 text-sm">
                                <p className="font-mono text-gray-500">((a*)*)* | ε</p>
                                <p className="font-mono">= (a*)* | ε <span className="text-[10px] text-indigo-500 font-sans font-black ml-2 uppercase">[(R*)* ≡ R*]</span></p>
                                <p className="font-mono">= a* | ε <span className="text-[10px] text-indigo-500 font-sans font-black ml-2 uppercase">[(R*)* ≡ R*]</span></p>
                                <p className="font-mono text-green-700 font-bold">= a* <span className="text-[10px] text-gray-400 font-sans font-normal ml-2 italic">[L(R*) already contains ε]</span></p>
                            </div>
                            <div className="mt-6 bg-green-900/5 p-3 rounded border border-green-200 text-green-800 text-xs font-bold">
                                Final Answer: a*
                            </div>
                        </div>
                    </div>

                    {/* Example 4 */}
                    <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black flex justify-between tracking-[0.3em] uppercase border-b border-slate-100">
                            <span className="text-indigo-600 font-serif italic">EXAMPLE 4: ADVANCED DENESTING RULE</span>
                            <span className="text-slate-400">COMPLEX</span>
                        </div>
                        <div className="p-8 bg-slate-50">
                            <p className="text-sm font-black mb-6 italic text-slate-500">Simplify (a|b)* using the denesting rule</p>
                            <div className="bg-white border-2 border-indigo-100 p-10 rounded-3xl shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                                <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.3em] mb-6 border-b border-indigo-50 pb-2">Denesting Rule: (R₁|R₂)* ≡ R₁*(R₂R₁*)*</p>
                                <div className="space-y-4 font-mono relative z-10">
                                    <p className="text-sm text-slate-400">(a | b)*</p>
                                    <p className="text-3xl font-black text-indigo-700 tracking-tighter">= a*(ba*)*</p>
                                </div>
                                <div className="mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 border-dashed text-[11px] text-indigo-900 font-medium leading-relaxed italic relative z-10">
                                    <strong>Strategic Significance:</strong> This transformation is fundamental in automata theory for reducing non-determinism and optimizing regular expression parsing algorithms.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Lab Exercise */}
            <section className="content-section">
                <h2 className="text-2xl font-black mb-8 border-b-4 pb-4 border-slate-200 uppercase text-slate-900 tracking-tighter">Lab Exercise: Expression Simplification</h2>
                <div className="bg-white border-2 border-slate-200 p-12 rounded-[3.5rem] text-slate-900 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4 relative z-10">Computational Context</p>
                    <h3 className="text-xl font-black mb-4 leading-tight">Objective: Step-by-Step Algebraic Reduction</h3>
                    <p className="text-sm opacity-60 mb-8 leading-relaxed italic">Simplify the following regular expression step by step, citing the algebraic law used at each step:</p>

                    <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-3xl font-mono text-center mb-10 text-xl text-indigo-700 shadow-inner group-hover:bg-white transition-colors">
                        ((a|∅)b)* | (ab)* | ∅
                    </div>

                    <button
                        onClick={() => toggleSolution('lab-final')}
                        className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-colors"
                    >
                        {showSolution['lab-final'] ? 'Hide Proof' : 'Show Solution'}
                    </button>

                    {showSolution['lab-final'] && (
                        <div className="mt-8 space-y-4 font-mono text-sm border-t border-white/10 pt-8">
                            <div className="flex gap-4 items-start"><span className="opacity-40">1.</span> <span className="text-indigo-300 font-black">((a | ∅) b)* | (ab)* | ∅</span></div>
                            <div className="flex gap-4 items-start"><span className="opacity-40">2.</span> <span>(ab)* | (ab)* | ∅</span> <span className="text-[10px] text-gray-500 font-sans ml-auto italic">[Identity: R | ∅ ≡ R]</span></div>
                            <div className="flex gap-4 items-start"><span className="opacity-40">3.</span> <span>(ab)* | (ab)*</span> <span className="text-[10px] text-gray-500 font-sans ml-auto italic">[Identity: R | ∅ ≡ R]</span></div>
                            <div className="flex gap-4 items-start border-t border-white/10 pt-4"><span className="opacity-40">4.</span> <span className="text-green-400">Result: (ab)*</span> <span className="text-[10px] text-gray-500 font-sans ml-auto italic">[Idempotent: R | R ≡ R]</span></div>
                        </div>
                    )}
                </div>
            </section>

            {/* Learning Resources */}
            <section className="content-section">
                <h2 className="text-2xl font-bold mb-6">Additional Learning Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group">
                            <iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://www.youtube.com/embed/upu_TeZImN0" title="Neso Academy Intro" allowFullScreen></iframe>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Regular Expressions Introduction</p>
                            <p className="text-xs text-gray-500">Neso Academy - Foundation concepts for regular expressions</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group">
                            <iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://www.youtube.com/embed/YGjEoND31YU" title="Neso Academy Examples" allowFullScreen></iframe>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Regular Expression Examples</p>
                            <p className="text-xs text-gray-500">Neso Academy - Practical examples and constructions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXAM QUESTIONS */}
            <section className="content-section">
                <h2 className="text-2xl font-black mb-10 border-b-4 border-slate-200 pb-4 uppercase text-slate-900 tracking-tighter">Exam Practice Questions</h2>
                <div className="space-y-12">
                    {[
                        {
                            id: 'q1', m: 5,
                            q: "Question 1: State and prove the distributive laws for regular expressions. Show that R₁(R₂|R₃) ≡ R₁R₂|R₁R₃ by demonstrating both expressions generate the same language.",
                            scheme: "Correct statement of both laws (2M), Proof using language definitions (2M), Example explanation (1M)",
                            sol: "To prove R₁(R₂|R₃) ≡ R₁R₂|R₁R₃, we look at the language definitions:\nL(R₁(R₂|R₃)) = L(R₁) · (L(R₂) ∪ L(R₃))\nBy properties of set union and concatenation concatenation distributes over union:\n= (L(R₁) · L(R₂)) ∪ (L(R₁) · L(R₃))\n= L(R₁R₂) ∪ L(R₁R₃)\n= L(R₁R₂ | R₁R₃)\nThus, R₁(R₂|R₃) ≡ R₁R₂|R₁R₃. Similarly for right distributivity."
                        },
                        {
                            id: 'q2', m: 5,
                            q: "Question 2: Simplify the following regular expression using algebraic laws. Show each step clearly: ((a|b)*|∅)(ε|a)",
                            scheme: "Identity laws (2M), Simplification of star terms (2M), Correct final answer (1M)",
                            sol: "1. ((a | b)* | ∅)(ε | a)\n2. (a | b)*(ε | a)  [Identity: R | ∅ = R]\n3. (a | b)*ε | (a | b)*a [Distributive Law]\n4. (a | b)* | (a | b)*a [Identity: Rε = R]\n5. (a | b)* [Absorption property: (R*)R ⊆ R*, hence R* | R*R = R*]"
                        },
                        {
                            id: 'q3', m: 10,
                            q: "Question 3: Explain what is meant by Kleene Algebra. Discuss the structure, idempotent semiring properties, fixpoint axioms, and completeness for RE equivalence.",
                            scheme: "Definition/Structure (3M), semiring props (3M), fixpoint axioms (2M), completeness (2M)",
                            sol: "Kleene Algebra is an algebraic structure (K, +, ·, *, 0, 1) that is an idempotent semiring with a Kleene star operator. \n- Semiring properties: (+ is assoc/comm, · is assoc, distrib, identities 0 and 1).\n- Idempotence: R + R = R.\n- Star Axioms: R* = 1 + RR* (fixpoint) and recursion axioms.\n- Completeness: Kozen's Theorem (1994) proved that these axioms are sound and complete for regular expression equivalence."
                        }
                    ].map(item => (
                        <div key={item.id} className="relative pl-10 border-l-2 border-slate-100 hover:border-indigo-400 transition-colors py-2">
                            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-white border-4 border-indigo-500 rounded-full shadow-sm"></div>
                            <div className="flex items-center gap-4 mb-3">
                                <h4 className="text-lg font-black text-slate-800 tracking-tight">{item.q}</h4>
                                <span className="bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shrink-0 italic">Marks: {item.m}</span>
                            </div>

                            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-4">
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Marking Scheme</p>
                                <p className="text-xs text-blue-900/70 italic leading-relaxed">{item.scheme}</p>
                            </div>

                            <button
                                onClick={() => toggleSolution(item.id)}
                                className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900 transition-colors tracking-[0.3em]"
                            >
                                {showSolution[item.id] ? 'Hide Answer' : 'Show Answer'}
                            </button>

                            {showSolution[item.id] && (
                                <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-[11px] font-mono leading-relaxed text-slate-700 whitespace-pre-wrap shadow-inner">
                                    {item.sol}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* QUICK REFERENCE CHEAT SHEET */}
            <section className="content-section">
                <h2 className="text-2xl font-bold mb-6">Quick Reference Cheat Sheet</h2>
                <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-black text-amber-900 border-b border-amber-200 pb-2 text-sm uppercase tracking-widest">Basic Laws</h4>
                        <ul className="space-y-2 font-mono text-xs text-amber-800 font-bold">
                            <li>R | ∅ = R</li>
                            <li>Rε = εR = R</li>
                            <li>R∅ = ∅R = ∅</li>
                            <li>R | R = R</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-black text-amber-900 border-b border-amber-200 pb-2 text-sm uppercase tracking-widest">Star Laws</h4>
                        <ul className="space-y-2 font-mono text-xs text-amber-800 font-bold">
                            <li>∅* = ε</li>
                            <li>ε* = ε</li>
                            <li>(R*)* = R*</li>
                            <li>R* = ε | RR*</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-black text-amber-900 border-b border-amber-200 pb-2 text-sm uppercase tracking-widest">Distributive / Denest</h4>
                        <ul className="space-y-2 font-mono text-xs text-amber-800 font-bold">
                            <li>R(S | T) = RS | RT</li>
                            <li>(R | S)T = RT | ST</li>
                            <li>(R | S)* = R*(SR*)*</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Module Quiz */}
            <section className="content-section">
                <h2 className="text-2xl font-bold mb-6">Module 2.2 Mastery Quiz</h2>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <Quiz
                        title="Identities & Algebraic Laws Quiz"
                        questions={[
                            {
                                question: "Which of the following is the identity element for union in regular expressions?",
                                options: ["ε (epsilon)", "∅ (empty set)", "Σ* (all strings)", "The expression itself"],
                                correctAnswer: 1,
                                explanation: "The empty set ∅ is the identity for union: R | ∅ = R for any regular expression R."
                            },
                            {
                                question: "Which algebraic law states that R(S | T) = RS | RT?",
                                options: ["Commutative law", "Distributive law", "Associative law", "Idempotent law"],
                                correctAnswer: 1,
                                explanation: "This is the (left) distributive law of concatenation over union."
                            },
                            {
                                question: "What is the result of ∅* (Kleene star of the empty set)?",
                                options: ["∅", "ε", "Σ*", "Undefined"],
                                correctAnswer: 1,
                                explanation: "∅* = {ε}. The Kleene star always includes the empty string ε, even when applied to the empty set."
                            },
                            {
                                question: "Is concatenation of regular expressions commutative? (i.e., does RS = SR always hold?)",
                                options: ["Yes, always", "No, it is not commutative", "Only for single-character expressions", "Only when R = S"],
                                correctAnswer: 1,
                                explanation: "Concatenation is NOT commutative in general. For example, ab ≠ ba."
                            },
                            {
                                question: "Which property states that (R*)* = R*?",
                                options: ["Distributive property", "Idempotence of star", "Associativity of star", "Closure under star"],
                                correctAnswer: 1,
                                explanation: "This is the idempotence of the Kleene star: applying star twice gives the same result as applying it once."
                            }
                        ]}
                        subject="FLAT"
                        unitId={2}
                        moduleId={2}
                    />
                </div>
            </section>

            <div className="mt-20 py-12 border-t text-center opacity-20">
                <p className="text-[10px] font-black uppercase tracking-[1em]">End of Module 2.2</p>
            </div>
        </div>
    );
};

export default Module2_2;
