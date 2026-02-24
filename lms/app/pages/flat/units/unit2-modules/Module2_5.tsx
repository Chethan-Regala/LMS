'use client';
import React, { useState } from 'react';
import {
    CheckCircle,
    HelpCircle,
    BookOpen,
    Cpu,
    PlayCircle,
    AlertTriangle,
    Code,
    Layout,
    Table,
    Terminal,
    ChevronRight,
    Info
} from 'lucide-react';

const Module2_5: React.FC = () => {
    // MCQ State
    const [mcqAnswers, setMcqAnswers] = useState<Record<number, number | null>>({});
    const [mcqResults, setMcqResults] = useState<Record<number, boolean | null>>({});

    // Toggle state for solutions/model answers
    const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

    // Quiz State
    const [quizAnswers, setQuizAnswers] = useState<Record<number, string | null>>({});
    const [quizResults, setQuizResults] = useState<Record<number, boolean | null>>({});

    const checkMcq = (qId: number, selected: number, correct: number) => {
        setMcqAnswers({ ...mcqAnswers, [qId]: selected });
        setMcqResults({ ...mcqResults, [qId]: selected === correct });
    };

    const toggleSolution = (id: string) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const setQuizAnswer = (qId: number, answer: string) => {
        setQuizAnswers({ ...quizAnswers, [qId]: answer });
    };

    const checkQuiz = (qId: number, correct: string) => {
        setQuizResults({ ...quizResults, [qId]: quizAnswers[qId] === correct });
    };

    return (
        <div className="module-content">
            {/* 1. Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge font-bold">2.5</div>
                <div className="lesson-title-main">
                    <h1>Decision Properties of Regular Languages</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages | Level: Expert Comprehensive</p>
                </div>
            </div>

            {/* Learning Objectives */}
            <section className="content-section">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <p className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <span className="text-xl">🎯</span> What You'll Master
                    </p>
                    <ul className="space-y-3">
                        {[
                            { id: 1, title: "Membership Testing", desc: "Apply decision algorithms to determine if a given string belongs to a regular language." },
                            { id: 2, title: "Emptiness and Finiteness", desc: "Design and analyze algorithms to test whether a regular language is empty, finite, or infinite." },
                            { id: 3, title: "Equivalence Testing", desc: "Implement procedures to check equivalence between two regular languages using minimization and state comparison techniques." },
                            { id: 4, title: "Containment and Equality", desc: "Evaluate containment relationships and subset testing between regular languages." },
                            { id: 5, title: "DFA Minimization", desc: "Construct minimized DFAs using state equivalence and partition refinement algorithms." }
                        ].map(obj => (
                            <li key={obj.id} className="flex gap-4 items-start">
                                <div className="bg-blue-600 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{obj.id}</div>
                                <div>
                                    <p className="text-sm font-bold text-blue-950 mb-0.5">{obj.title}</p>
                                    <p className="text-xs text-blue-800/70 leading-relaxed">{obj.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why This Topic Matters */}
            <section className="content-section">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm mb-8">
                    <h2 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🔥</span> Why This Topic Matters
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        Imagine you're a compiler designer building a lexical analyzer that needs to recognize valid tokens in a programming language. How do you verify that your finite automaton correctly accepts all valid identifiers and rejects invalid ones? Or consider you're developing a network protocol that must validate packet formats against a specification—how can you algorithmically prove that your implementation matches the specification exactly?
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        Decision properties of regular languages provide the theoretical foundation and practical algorithms to answer these critical questions. They allow us to mechanically verify properties of regular languages without guesswork or exhaustive testing.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: "Compiler Design", desc: "Lexical analyzer verification and token validation (Lex, Flex tools)" },
                            { title: "Formal Verification", desc: "Proving correctness of hardware circuits and communication protocols" },
                            { title: "Software Testing", desc: "Generating test cases that cover all states in a specification" },
                            { title: "Network Security", desc: "Verifying firewall rules and intrusion detection patterns" }
                        ].map((app, i) => (
                            <div key={i} className="bg-white/60 p-4 rounded-lg border border-orange-100">
                                <p className="font-bold text-orange-800 text-xs mb-1">{app.title}</p>
                                <p className="text-[11px] text-gray-600">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive: Decision Properties */}
            <section className="content-section">
                <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <Layout className="w-8 h-8 text-indigo-600" />
                    Deep Dive: Decision Properties
                </h2>

                <div className="space-y-6">
                    <div className="bg-white border rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Definition & Fundamentals</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Decision properties are algorithmic procedures that answer yes/no questions about formal languages. For regular languages, these decision problems are particularly important because they are <strong>decidable</strong>—meaning there exist algorithms that always terminate with a correct answer.
                        </p>
                        <div className="bg-indigo-50 p-4 rounded-xl text-xs space-y-3 font-medium border-l-4 border-indigo-400">
                            <p>Think of decision properties as <strong>diagnostic tools</strong>. Just as a doctor uses various tests, we use decision algorithms to diagnose properties of languages. The key insight is that because regular languages have multiple equivalent representations, we can choose the most convenient representation for each problem.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border">
                            <h4 className="font-black text-xs uppercase text-slate-500 mb-4 tracking-widest flex items-center gap-2">
                                <Terminal className="w-4 h-4" /> fundamental decision problems
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { term: "Membership", desc: "Given a string w and language L, is w ∈ L?" },
                                    { term: "Emptiness", desc: "Is L = ∅ (does the language contain any strings)?" },
                                    { term: "Finiteness", desc: "Is L finite or infinite?" },
                                    { term: "Equivalence", desc: "Given L₁ and L₂, is L₁ = L₂?" },
                                    { term: "Containment", desc: "Is L₁ ⊆ L₂?" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <ChevronRight className="w-3 h-3 text-indigo-500" />
                                        <span className="text-xs text-gray-700"><strong>{item.term}:</strong> {item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border">
                            <h4 className="font-black text-xs uppercase text-slate-500 mb-4 tracking-widest flex items-center gap-2">
                                <Info className="w-4 h-4" /> 📌 key terminology
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { term: "Decidable Problem", desc: "Algorithm exists that always halts with correct yes/no answer." },
                                    { term: "Reachable State", desc: "State that can be reached from the start state." },
                                    { term: "Product Automaton", desc: "DFA that simulates two DFAs simultaneously." },
                                    { term: "State Equivalence", desc: "Two states that cannot be distinguished by any input string." },
                                    { term: "Myhill-Nerode Theorem", desc: "Characterizes regular languages via equivalence classes." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                        <p className="text-xs text-gray-700"><strong>{item.term}:</strong> {item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decision Problems Hierarchy Visual */}
            <section className="content-section">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Table className="w-5 h-5 text-indigo-500" />
                    Decision Problems Hierarchy
                </h3>
                <div className="bg-white border rounded-3xl p-8 flex flex-col items-center justify-center relative shadow-sm overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50/50 opacity-30"></div>

                    <div className="relative z-10 w-full max-w-2xl">
                        <div className="bg-indigo-600 text-white p-3 rounded-xl text-center font-black text-sm uppercase tracking-widest mb-10 w-64 mx-auto shadow-lg">
                            Decision Properties
                        </div>

                        <div className="grid grid-cols-5 gap-4">
                            {[
                                { name: "Membership", sub: "Simulate DFA" },
                                { name: "Emptiness", sub: "Reachability" },
                                { name: "Finiteness", sub: "Cycle Detection" },
                                { name: "Equivalence", sub: "Minimization" },
                                { name: "Containment", sub: "L1 ∩ L2' = ∅" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="h-10 w-0.5 bg-indigo-100 mb-0"></div>
                                    <div className="bg-white border-2 border-indigo-100 p-3 rounded-xl text-center w-full min-h-[80px] flex flex-col justify-center shadow-sm">
                                        <p className="text-[10px] font-black text-indigo-600 mb-1">{item.name}</p>
                                        <p className="text-[9px] text-gray-400 leading-tight">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="mt-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Figure 1: Decision problems for regular languages and their solution approaches</p>
                </div>
            </section>

            {/* 1. Membership Problem */}
            <section className="content-section">
                <div className="bg-white border-2 border-indigo-50 rounded-3xl overflow-hidden shadow-sm">
                    <div className="bg-indigo-600 p-4 px-8 text-white flex justify-between items-center">
                        <h3 className="text-lg font-black uppercase tracking-widest">01. The Membership Problem</h3>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">Time: O(|w|)</span>
                    </div>
                    <div className="p-8 space-y-6">
                        <p className="text-sm text-gray-600 leading-relaxed">
                            The Membership Problem asks: Given a DFA <strong>D</strong> and a string <strong>w</strong>, does <strong>D</strong> accept <strong>w</strong>? This is the most fundamental decision problem.
                        </p>
                        <div className="flex gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="bg-slate-50 p-4 rounded-xl border">
                                    <p className="text-xs font-bold text-slate-800 mb-2">Algorithm Strategy:</p>
                                    <p className="text-xs text-gray-600 leading-relaxed italic">
                                        Simulate the DFA on input w starting from initial state. For each symbol in w, follow transitions. Check if final state is accepting.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-xs text-green-800 italic">
                                    <strong>Efficiency:</strong> Linear time O(|w|) is optimal as we must examine each character once.
                                </div>
                            </div>
                            <div className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 text-slate-700 font-mono text-[10px] leading-relaxed relative shadow-inner">
                                <div className="absolute top-2 right-4 text-indigo-500 font-black tracking-widest opacity-60">PSEUDOCODE</div>
                                <p className="text-indigo-600 font-bold mb-2">function Membership(D, w):</p>
                                <p className="pl-4">state = D.start</p>
                                <p className="pl-4">for each char c in w:</p>
                                <p className="pl-8">if exists(state, c):</p>
                                <p className="pl-12">state = delta(state, c)</p>
                                <p className="pl-8">else: return false</p>
                                <p className="pl-4 mt-2 font-bold text-indigo-600">return state in F</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Emptiness Problem */}
            <section className="content-section">
                <div className="bg-white border-2 border-emerald-50 rounded-3xl overflow-hidden shadow-sm">
                    <div className="bg-emerald-600 p-4 px-8 text-white flex justify-between items-center">
                        <h3 className="text-lg font-black uppercase tracking-widest">02. The Emptiness Problem</h3>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">Strategy: Reachability</span>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    Is L = ∅? This reduces to a <strong>directed graph reachability</strong> problem. A language is empty if no path exists from start to any final state.
                                </p>
                                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                                    <p className="text-[10px] font-black text-emerald-800 uppercase mb-3 text-center">Implementation Steps</p>
                                    <ol className="text-xs space-y-3 text-emerald-900 font-medium">
                                        <li className="flex gap-2"><span>1.</span> Perform BFS/DFS from start state</li>
                                        <li className="flex gap-2"><span>2.</span> Keep track of visited states</li>
                                        <li className="flex gap-2"><span>3.</span> If any state in F is visited ➔ Not Empty</li>
                                        <li className="flex gap-2"><span>4.</span> If traversal ends without F ➔ Empty</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 text-slate-700 font-mono text-[10px] leading-relaxed relative shadow-inner">
                                <div className="absolute top-2 right-4 text-emerald-600 font-black tracking-widest opacity-60">GRAPH TRAVERSAL</div>
                                <p className="text-emerald-700 font-bold mb-2">function IsEmpty(D):</p>
                                <p className="pl-4">visited = {'{D.start}'}</p>
                                <p className="pl-4">queue = [D.start]</p>
                                <p className="pl-4">while queue not empty:</p>
                                <p className="pl-8">curr = queue.pop()</p>
                                <p className="pl-8">if curr in D.F: return <span className="text-rose-600 font-bold">false</span></p>
                                <p className="pl-8">for next in adj(curr):</p>
                                <p className="pl-12">if next not in visited:</p>
                                <p className="pl-16">visited.add(next)</p>
                                <p className="pl-16">queue.push(next)</p>
                                <p className="pl-4 mt-2 font-bold text-emerald-700">return <span className="text-emerald-600 font-bold">true</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Finiteness Problem */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
                    <HelpCircle className="w-6 h-6 text-orange-500" />
                    03. The Finiteness Problem
                </h3>
                <div className="bg-white border rounded-3xl p-8 shadow-sm">
                    <p className="text-sm text-gray-600 mb-8">
                        A language is <strong>infinite</strong> if the DFA contains a <strong>cycle</strong> on a path from the start state to an accepting state.
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-wrap justify-center gap-4 relative z-10 w-full mb-10">
                            {[
                                { step: "Start", result: "Reachable?" },
                                { step: "Yes", result: "Reach Accept?" },
                                { step: "Yes", result: "Has Cycle?" },
                                { step: "Yes", result: "INFINITE", highlight: true },
                                { step: "No", result: "FINITE", secondary: true }
                            ].map((s, i) => (
                                <React.Fragment key={i}>
                                    <div className={`p-4 rounded-xl border-2 flex flex-col items-center min-w-[120px] ${s.highlight ? 'bg-red-600 border-red-500 text-white shadow-lg scale-110' : s.secondary ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-white border-slate-100'}`}>
                                        <p className="text-[10px] font-black uppercase opacity-60 mb-1">{s.step}</p>
                                        <p className="text-xs font-bold whitespace-nowrap">{s.result}</p>
                                    </div>
                                    {i < 3 && <div className="self-center text-slate-300 font-bold">➔</div>}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Figure 2: Decision flow for finiteness problem</p>
                    </div>
                </div>
            </section>

            {/* Table Filling Algorithm (Minimization) */}
            <section className="content-section">
                <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-12 text-slate-900 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="flex justify-between items-start relative z-10 mb-10">
                        <div>
                            <h3 className="text-3xl font-black uppercase tracking-[0.2em] mb-2 text-indigo-700">DFA Minimization</h3>
                            <p className="text-xs text-indigo-500 font-bold font-mono uppercase tracking-widest opacity-60">The Table-Filling Algorithm (Myhill-Nerode)</p>
                        </div>
                        <div className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest shadow-lg shadow-indigo-100 italic">Complexity: O(|Q|² × |Σ|)</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
                        <div className="space-y-6">
                            <p className="text-sm text-slate-500 leading-relaxed italic border-l-4 border-indigo-600 pl-6 py-2 bg-indigo-50/50 rounded-r-xl font-medium">
                                "Two states p and q are distinguishable if there exists a string w such that exactly one of δ(p, w) and δ(q, w) is an accepting state."
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { step: "01", title: "Initialize", desc: "Mark all pairs (accepting, non-accepting) as distinguishable." },
                                    { step: "02", title: "Iterate", desc: "For each unmarked pair (p, q), if any symbol leads to a marked pair, mark (p, q)." },
                                    { step: "03", title: "Converge", desc: "Repeat until no new marks can be made. Unmarked pairs are equivalent." },
                                    { step: "04", title: "Merge", desc: "Construct a new DFA where each set of equivalent states is a single state." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-indigo-50/30 border border-indigo-100 p-5 rounded-2xl group/item hover:bg-white transition-all shadow-sm">
                                        <div className="text-xl font-black text-indigo-600/30 group-hover/item:text-indigo-600 transition-colors mb-2">{item.step}</div>
                                        <div>
                                            <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">{item.title}</p>
                                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-[2.5rem] p-8 border-2 border-slate-200 font-mono text-[10px] leading-relaxed shadow-inner">
                            <p className="text-indigo-600 mb-6 font-black tracking-[0.3em] uppercase border-b pb-2">Algorithm Definition</p>
                            <p className="text-indigo-700 font-bold border-l-2 border-indigo-200 pl-4 py-1 mb-2 bg-indigo-50/50">function <span className="text-rose-600">Minimize</span>(DFA D):</p>
                            <div className="space-y-1">
                                <p className="pl-4 text-slate-400 italic"># Phase 1: Distinguishable Base Case</p>
                                <p className="pl-4">for each pair (p, q) in Q:</p>
                                <p className="pl-8">if p in F <span className="text-indigo-600 font-bold">XOR</span> q in F:</p>
                                <p className="pl-12 opacity-80 decoration-indigo-400/30 underline underline-offset-4 font-black">table[p][q] = DISTINGUISHABLE</p>

                                <p className="pl-4 mt-6 text-slate-400 italic"># Phase 2: Refinement Loop</p>
                                <p className="pl-4">while <span className="text-emerald-600 font-bold italic">changed</span>:</p>
                                <p className="pl-8">changed = <span className="text-rose-600">false</span></p>
                                <p className="pl-8">for each unmarked (p, q):</p>
                                <p className="pl-12">for each symbol a in σ:</p>
                                <p className="pl-16">p_next = δ(p, a)</p>
                                <p className="pl-16">q_next = δ(q, a)</p>
                                <p className="pl-16">if table[p_next][q_next] == <span className="font-black text-indigo-600 uppercase tracking-tighter">DIST</span>:</p>
                                <p className="pl-20 py-0.5 px-2 bg-emerald-50 text-emerald-700 rounded-lg inline-block">table[p][q] = DIST</p>
                                <p className="pl-20 text-emerald-600 font-bold">changed = true</p>

                                <p className="pl-4 mt-8 text-indigo-600 font-black border-t pt-4">return <span className="italic uppercase decoration-2 underline">QuotientConstruction</span>(D, table)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Misconceptions */}
            <section className="content-section">
                <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8">
                    <h3 className="text-lg font-black text-red-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                        Common Misconceptions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { q: "Equivalence vs. Size", a: "Two DFAs are equivalent if they recognize the same language, regardless of state count. Only minimized forms are unique structure-wise." },
                            { q: "Cycles vs. Infinity", a: "Cycles only make a language infinite if they lead to an accepting state. 'Dead' cycles don't affect finiteness." },
                            { q: "Complement Regularity", a: "Regular languages are fully closed under complement. Swapping Final/Non-Final in a DFA always works." },
                            { q: "Minimality Uniqueness", a: "Minimal DFAs are unique up to state renaming (isomorphism) but not unique in physical state labeling." }
                        ].map((m, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="text-2xl font-black text-red-200">?</span>
                                <div>
                                    <p className="text-xs font-bold text-red-900 mb-1">{m.q}</p>
                                    <p className="text-[10px] text-red-700 leading-relaxed italic opacity-80">{m.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="content-section">
                <h2 className="text-3xl font-black mb-10 border-b-4 pb-4 border-slate-200 flex justify-between items-end uppercase text-slate-900">
                    Learn Through Videos
                    <PlayCircle className="w-10 h-10 text-indigo-600 mb-1" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { id: "84oNUttWlN4", ch: "Neso Academy", dur: "15m", title: "Decision Properties Overview", desc: "Covers membership, emptiness, finiteness, and equivalence." },
                        { id: "jN8zvENdjBg", ch: "Gate Smashers", dur: "12m", title: "DFA Minimization Algorithm", desc: "Step-by-step table-filling algorithm with worked examples." },
                        { id: "upu_TeZImN0", ch: "Computer Science", dur: "18m", title: "Myhill-Nerode Theorem", desc: "Foundation of state equivalence and DFA minimality." },
                        { id: "nB8_6k1uC_Q", ch: "Abdul Bari", dur: "14m", title: "Equivalence of Languages", desc: "Product construction method and practicality." }
                    ].map(v => (
                        <div key={v.id} className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border-b-8 border-b-indigo-500">
                            <div className="aspect-video bg-slate-100 relative">
                                <iframe className="w-full h-full opacity-90 group-hover:opacity-100" src={`https://www.youtube.com/embed/${v.id}`} allowFullScreen></iframe>
                                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[8px] font-black text-slate-900 shadow-sm">{v.dur}</div>
                            </div>
                            <div className="p-6">
                                <p className="text-[8px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-2">{v.ch}</p>
                                <h4 className="text-sm font-black text-slate-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">{v.title}</h4>
                                <p className="text-[10px] text-slate-500 leading-relaxed font-medium italic">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Worked Examples Section */}
            <section className="content-section bg-slate-50 p-8 rounded-[3rem] border border-slate-100 mt-12">
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                    See It In Action: Worked Examples
                </h2>

                <div className="space-y-12">
                    {/* Example 1 */}
                    <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black tracking-[0.3em] flex justify-between items-center group border-b border-slate-100">
                            <span className="text-indigo-600 font-serif italic">EXAMPLE 1: MEMBERSHIP</span>
                            <span className="text-slate-400 group-hover:translate-x-1 transition-transform">DFA SIMULATION</span>
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="flex-1 space-y-4">
                                    <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Problem Statement</p>
                                    <p className="text-sm text-gray-800 leading-relaxed italic">
                                        "Given string w = 'abba' and a DFA where: <br />
                                        delta(q0,a)=q1, delta(q0,b)=q0, delta(q1,a)=q1, delta(q1,b)=q2, delta(q2,a)=q1, delta(q2,b)=q0. <br />
                                        Initial: q0, Accepting: {'{q2}'}. Is w accepted?"
                                    </p>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">Execution Trace</p>
                                    {[
                                        { s: "Initial", r: "q0" },
                                        { s: "Read 'a'", r: "q1" },
                                        { s: "Read 'b'", r: "q2" },
                                        { s: "Read 'b'", r: "q0" },
                                        { s: "Read 'a'", r: "q1" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between items-center bg-slate-50 p-2 px-4 rounded-xl border border-slate-100">
                                            <span className="text-[10px] text-slate-500 font-bold">{row.s}</span>
                                            <span className="text-xs font-mono font-black text-indigo-600">{row.r}</span>
                                        </div>
                                    ))}
                                    <div className="bg-red-50 p-3 rounded-xl border border-red-100 text-[10px] font-black text-red-600 text-center uppercase">
                                        REJECT: Final state q1 not in {'{q2}'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Example 2: Emptiness */}
                    <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black tracking-[0.3em] flex justify-between items-center border-b border-slate-100">
                            <span className="text-emerald-600 font-serif italic">EXAMPLE 2: EMPTINESS</span>
                            <span className="text-slate-400">REACHABILITY</span>
                        </div>
                        <div className="p-8 space-y-4">
                            <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Problem Statement</p>
                            <p className="text-sm text-gray-800 italic">"Does a DFA with accepting state q2 reachable from q0 via 'ab' have an empty language?"</p>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex gap-6 items-center">
                                <div className="w-12 h-12 bg-white rounded-full border-2 border-emerald-500 flex items-center justify-center font-black text-emerald-600 shadow-sm">q0</div>
                                <div className="flex-1 h-0.5 bg-emerald-200 relative">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black text-emerald-500">ab</span>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-double border-emerald-500 flex items-center justify-center font-black text-emerald-600 shadow-sm">q2</div>
                                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                    <p className="text-[10px] font-black mb-1">RESULT</p>
                                    <p className="text-emerald-600 font-black uppercase text-xs">NOT EMPTY</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimization Table-Filling Example */}
                    <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-slate-50 p-4 px-8 text-slate-500 text-[10px] font-black tracking-[0.3em] flex justify-between items-center border-b border-slate-100">
                            <span className="text-indigo-600 font-serif italic">EXAMPLE 3: MINIMIZATION</span>
                            <span className="text-slate-400">TABLE-FILLING</span>
                        </div>
                        <div className="p-8">
                            <p className="text-xs text-gray-500 mb-6 italic leading-relaxed">
                                Summary: We start by marking pairs of (Accepting, Non-Accepting). Then iteratively check if any input leads to a marked pair. If all pairs get marked, the DFA is already minimal.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {["(A,D) Initial", "(A,F) Initial", "(B,E) propagate via '0'", "(D,F) propagate via '1'"].map((label, i) => (
                                    <div key={i} className="bg-slate-100 p-2 px-4 rounded-lg border text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                                        {label}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-900 text-center shadow-inner">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2">Conclusion</p>
                                <p className="text-xs font-black leading-relaxed italic">No unmarked pairs remain ➔ All states are distinguishable ➔ Original DFA is Minimal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Python Implementation Section */}
            <section className="content-section mt-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black text-gray-900 uppercase flex items-center gap-4">
                        <Code className="w-8 h-8 text-indigo-600" />
                        Algorithm Implementation
                    </h2>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">PRODUCTION READY CODE</span>
                </div>

                <div className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-xl relative border-2 border-slate-200">
                    <div className="bg-slate-100 p-4 px-8 text-slate-400 text-[10px] font-black flex justify-between border-b border-slate-200">
                        <span className="flex items-center gap-2 italic text-indigo-600">
                            dfa_algorithms.py
                        </span>
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        </div>
                    </div>
                    <div className="p-10 font-mono text-[11px] text-slate-700 leading-6 max-h-[500px] overflow-y-auto no-scrollbar">
                        <p className="text-gray-500 italic mb-4"># Complete implementation of DFA decision algorithms</p>
                        <p className="text-indigo-400 mb-4">from collections import deque</p>

                        <div className="space-y-1">
                            <p><span className="text-indigo-600">class</span> <span className="text-slate-900 font-black decoration-indigo-500/30 underline decoration-4 underline-offset-4">DFA</span>:</p>
                            <p className="pl-4"><span className="text-indigo-600">def</span> <span className="text-emerald-600 font-bold">__init__</span>(self, states, alphabet, transitions, start, accepting):</p>
                            <p className="pl-8 text-gray-400"># Transition structure: Dictionary {'{(state, symbol): next_state}'}</p>
                            <p className="pl-8">self.states = states</p>
                            <p className="pl-8">self.delta = transitions</p>
                            <p className="pl-8">self.start = start</p>
                            <p className="pl-8">self.F = set(accepting)</p>

                            <p className="pl-4 mt-6 text-emerald-400 italic"># 1. Membership Problem - O(|w|)</p>
                            <p className="pl-4"><span className="text-indigo-400">def</span> <span className="text-emerald-400">membership</span>(self, w):</p>
                            <p className="pl-8">curr = self.start</p>
                            <p className="pl-8"><span className="text-indigo-400">for</span> symb <span className="text-indigo-400">in</span> w:</p>
                            <p className="pl-12">curr = self.delta.get((curr, symb))</p>
                            <p className="pl-12"><span className="text-indigo-400">if not</span> curr: <span className="text-indigo-400">return False</span></p>
                            <p className="pl-8"><span className="text-indigo-400">return</span> curr <span className="text-indigo-400">in</span> self.F</p>

                            <p className="pl-4 mt-6 text-emerald-400 italic"># 2. Emptiness Problem - Reachability Analysis</p>
                            <p className="pl-4"><span className="text-indigo-400">def</span> <span className="text-emerald-400">is_empty</span>(self):</p>
                            <p className="pl-8">visited, queue = {'{self.start}'}, deque([self.start])</p>
                            <p className="pl-8"><span className="text-indigo-400">while</span> queue:</p>
                            <p className="pl-12">u = queue.popleft()</p>
                            <p className="pl-12"><span className="text-indigo-400">if</span> u <span className="text-indigo-400">in</span> self.F: <span className="text-indigo-400">return False</span></p>
                            <p className="pl-12"><span className="text-indigo-400">for</span> symb <span className="text-indigo-400">in</span> self.alphabet:</p>
                            <p className="pl-16">v = self.delta.get((u, symb))</p>
                            <p className="pl-16"><span className="text-indigo-400">if</span> v <span className="text-indigo-400">and</span> v <span className="text-indigo-400">not in</span> visited:</p>
                            <p className="pl-20">visited.add(v)</p>
                            <p className="pl-20">queue.append(v)</p>
                            <p className="pl-8"><span className="text-indigo-400">return True</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Practice & Questions */}
            <section className="content-section">
                <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-500" />
                    Quick Concept Checks
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { id: 1, q: "What is the time complexity of the membership problem for a DFA?", o: ["O(|Q| × |Σ|)", "O(|w|) linear in string length", "O(|Q|²)", "O(2^|Q|)"], c: 1 },
                        { id: 2, q: "A DFA's language is infinite if and only if:", o: ["It has more than 5 states", "It has any cycle", "Cycle on path from start to accept state", "Accepts ε"], c: 2 },
                        { id: 3, q: "To test if L1 ⊆ L2 for regular languages, we check:", o: ["L1 = L2", "L1 ∩ L2' = ∅", "State count comparison", "Initial state match"], c: 1 },
                        { id: 4, q: "Table-filling algorithm complexity is:", o: ["O(|Q|)", "O(|Q|² × |Σ|)", "O(|Q|³)", "Exponential"], c: 1 }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border p-6 rounded-3xl hover:shadow-md transition-shadow">
                            <p className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Question {item.id}</p>
                            <p className="text-sm font-bold mb-6 text-slate-800 leading-relaxed">{item.q}</p>
                            <div className="grid grid-cols-1 gap-2">
                                {item.o.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => checkMcq(item.id, idx, item.c)}
                                        className={`text-left p-3 rounded-xl border text-xs transition-all ${mcqAnswers[item.id] === idx ? (idx === item.c ? 'bg-green-100 border-green-500 text-green-900 font-bold' : 'bg-red-100 border-red-500 text-red-900') : 'bg-white hover:border-indigo-400 hover:bg-indigo-50/10'}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{opt}</span>
                                            {mcqAnswers[item.id] === idx && (idx === item.c ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />)}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem Solving Practice */}
            <section className="content-section">
                <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-slate-400">Problem-Solving Practice</h3>
                <div className="space-y-4">
                    {[
                        {
                            id: 'prob-easy', level: 'Easy', q: "Given a DFA where the only accepting state is unreachable from the initial state, what is the language?",
                            a: "The language is empty: L(D) = ∅. Since no accepting state can be reached by any string, the DFA never accepts, signifying an empty language."
                        },
                        {
                            id: 'prob-med', level: 'Medium', q: "A DFA has cycle δ(D,0)=D. D is accepting and reachable from start. Is the language infinite?",
                            a: "Yes. Since there is a cycle (D,0) on a state D that is reachable from start and IS an accepting state, the language can contain strings with any number of '0's (ending at D), making it infinite."
                        },
                        {
                            id: 'prob-hard', level: 'Hard', q: "What is the complexity of Equivalence testing using minimizing the product automaton?",
                            a: "Building the product automaton takes O(|Q1| × |Q2|) states. Testing emptiness on this takes O(|Q1|×|Q2| × |Σ|). Minimization is generally faster in practice if the DFAs are small, but the product construction is robust for all cases."
                        }
                    ].map(p => (
                        <div key={p.id} className="bg-white border rounded-2xl overflow-hidden">
                            <div className="p-4 px-6 flex justify-between items-center bg-slate-50 border-b">
                                <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${p.level === 'Easy' ? 'bg-green-100 text-green-700' : p.level === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{p.level}</span>
                                <button onClick={() => toggleSolution(p.id)} className="text-[10px] font-black uppercase text-indigo-600 hover:underline tracking-widest">
                                    {showSolution[p.id] ? "Hide Solution" : "View Solution"}
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-bold text-gray-800 mb-4 leading-relaxed">{p.q}</p>
                                {showSolution[p.id] && (
                                    <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-950 font-medium italic">
                                        {p.a}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Mastery Quiz */}
            <section className="content-section bg-slate-50 border-2 border-slate-200 p-12 rounded-[3.5rem] text-slate-900 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-4xl font-black uppercase tracking-[0.2em] mb-4 text-slate-800">Section Mastery Quiz</h2>
                    <p className="text-xs text-indigo-600 font-black uppercase tracking-widest bg-indigo-50 px-6 py-2 rounded-full inline-block">Test your knowledge with 5 advanced questions | Passing: 70%</p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {[
                        { id: 6, q: "Which of the following decision problems for regular languages is NOT decidable?", o: ["Membership", "Emptiness", "Equivalence", "None of the above (all are decidable)"], c: "None of the above (all are decidable)" },
                        { id: 7, q: "In table-filling minimization, when do we mark (p,q) as distinguishable?", o: ["Both are accepting", "Exists symbol 'a' such that (delta(p,a), delta(q,a)) is marked", "p is start state", "Alphabet mismatch"], c: "Exists symbol 'a' such that (delta(p,a), delta(q,a)) is marked" },
                        { id: 8, q: "The minimal DFA for a regular language is:", o: ["Unique excluding state names", "Unique including state names", "Infinite in structure", "Depends on NFA original size"], c: "Unique excluding state names" },
                        { id: 9, q: "Regular languages are closed under complement. To get L' from DFA for L:", o: ["Swap Start and Final", "Swap Final and Non-Final", "Reverse all edges", "Add ε loops"], c: "Swap Final and Non-Final" },
                        { id: 10, q: "Time complexity to test if L(D) is finite:", o: ["O(|w|)", "O(|Q| × |Σ|)", "O(|Q|²)", "O(2^|Q|)"], c: "O(|Q| × |Σ|)" }
                    ].map((q, idx) => (
                        <div key={idx} className="bg-white border-2 border-slate-100 p-10 rounded-[2.5rem] group hover:border-indigo-200 transition-all shadow-sm">
                            <p className="text-[10px] font-black text-indigo-400 mb-3 uppercase tracking-widest">Assessment {q.id}</p>
                            <p className="text-lg font-bold mb-8 text-slate-800 group-hover:text-indigo-900 transition-colors leading-relaxed">{q.q}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {q.o.map((opt, i) => (
                                    <button
                                        key={idx + '-' + i}
                                        onClick={() => setQuizAnswer(q.id, opt)}
                                        className={`text-left p-5 rounded-2xl border-2 transition-all text-[11px] font-bold ${quizAnswers[q.id] === opt ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl translate-y-[-2px]' : 'bg-slate-50 border-slate-50 hover:bg-white hover:border-indigo-100 text-slate-600'}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => checkQuiz(q.id, q.c)}
                                className="mt-8 bg-indigo-500 hover:bg-indigo-400 text-white font-black uppercase text-[10px] px-8 py-3 rounded-xl tracking-[0.2em] transition-all shadow-lg active:scale-95"
                            >
                                Validate Answer
                            </button>
                            {quizResults[q.id] !== undefined && (
                                <div className={`mt-4 p-4 rounded-xl border-l-4 font-bold text-xs ${quizResults[q.id] ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-red-500/10 border-red-500 text-red-400'}`}>
                                    {quizResults[q.id] ? "✨ MASTERED: Correct!" : "❌ REVIEW NEEDED: Incorrect logic."}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="p-8 bg-indigo-600 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5 group-hover:scale-110 transition-transform duration-500"></div>
                        <h4 className="text-xl font-black uppercase mb-2 relative z-10">Consolidate Your Learning</h4>
                        <p className="text-xs text-indigo-100 font-medium opacity-80 relative z-10">Review the cheat sheet below for final exam preparations.</p>
                    </div>
                </div>
            </section>

            {/* Quick Reference Cheat Sheet */}
            <section className="content-section">
                <div className="bg-white border shadow-sm rounded-3xl overflow-hidden">
                    <div className="bg-slate-800 p-4 px-8 text-white flex items-center justify-between">
                        <h3 className="font-black uppercase tracking-widest text-sm">📄 Quick Reference Cheat Sheet</h3>
                        <div className="flex gap-2">
                            {['PDF', 'PRINT', 'SVG'].map(btn => (
                                <span key={btn} className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold cursor-pointer hover:bg-white/20">{btn}</span>
                            ))}
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-black text-indigo-600 text-[10px] uppercase mb-4 tracking-tighter">Algorithm Complexities</h4>
                                <ul className="space-y-3 font-mono text-[11px] font-bold">
                                    <li className="flex justify-between border-b border-slate-50 pb-2"><span>Membership</span> <span className="text-indigo-500">O(|w|)</span></li>
                                    <li className="flex justify-between border-b border-slate-50 pb-2"><span>Emptiness</span> <span className="text-indigo-500">O(|Q|×|Σ|)</span></li>
                                    <li className="flex justify-between border-b border-slate-50 pb-2"><span>Finiteness</span> <span className="text-indigo-500">O(|Q|×|Σ|)</span></li>
                                    <li className="flex justify-between border-b border-slate-50 pb-2"><span>Minimization</span> <span className="text-indigo-500">O(|Q|²×|Σ|)</span></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-black text-indigo-600 text-[10px] uppercase mb-4 tracking-tighter">Decision Summary</h4>
                                <ul className="space-y-3 text-[11px] font-medium leading-relaxed italic text-gray-400">
                                    <li><strong>Infinity:</strong> Path to Final State + Cycle</li>
                                    <li><strong>Equivalence:</strong> Minimized isomorphism test</li>
                                    <li><strong>Containment:</strong> Intersection with complement</li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                                <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
                                <p className="text-[10px] font-black uppercase text-indigo-900 tracking-widest">Chapter 02.5 complete</p>
                                <p className="text-[9px] text-indigo-400 mt-1 uppercase font-bold">Theory of Computation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-16 py-8 border-t text-center opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[1em]">Unit 2.5 | Module Complete</p>
            </div>
        </div>
    );
};

export default Module2_5;
