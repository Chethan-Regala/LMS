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
    Info,
    Layers,
    Zap,
    BarChart,
    Target,
    Trophy,
    Award
} from 'lucide-react';

const Module2_6: React.FC = () => {
    // MCQ State
    const [mcqAnswers, setMcqAnswers] = useState<Record<number, number | null>>({});
    const [mcqResults, setMcqResults] = useState<Record<number, boolean | null>>({});

    // Toggle state for solutions
    const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

    // Quiz State
    const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
    const [quizResults, setQuizResults] = useState<Record<number, boolean | null>>({});

    const checkMcq = (qId: number, selected: number, correct: number) => {
        setMcqAnswers({ ...mcqAnswers, [qId]: selected });
        setMcqResults({ ...mcqResults, [qId]: selected === correct });
    };

    const toggleSolution = (id: string) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const checkQuiz = (qId: number, selected: number, correct: number) => {
        setQuizAnswers({ ...quizAnswers, [qId]: selected });
        setQuizResults({ ...quizResults, [qId]: selected === correct });
    };

    return (
        <div className="module-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* 1. Header */}
            <div className="lesson-header mb-12">
                <div className="flex items-center gap-6 mb-4">
                    <div className="lesson-number-badge font-black text-2xl h-16 w-16 bg-white text-indigo-600 border-2 border-indigo-600 rounded-2xl flex items-center justify-center shadow-indigo-100 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform cursor-default">2.6</div>
                    <div className="lesson-title-main">
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-2 underline decoration-indigo-500/30 decoration-8 underline-offset-8">Minimization of Finite Automata</h1>
                        <p className="text-slate-500 font-medium">Subject: Theory of Computation | Unit-2: Regular Languages | Level: Expert Comprehensive</p>
                    </div>
                </div>
            </div>

            {/* Learning Objectives */}
            <section className="content-section mb-16">
                <div className="bg-indigo-50 border-l-8 border-indigo-600 p-8 rounded-r-3xl shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Target className="w-40 h-40 text-indigo-900" />
                    </div>
                    <p className="font-black text-indigo-900 mb-6 flex items-center gap-3 uppercase tracking-widest text-sm">
                        <span className="bg-indigo-600 p-1.5 rounded-lg text-white"><CheckCircle className="w-5 h-5" /></span> What You'll Master
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { id: 1, title: "State Equivalence", desc: "Apply the table-filling algorithm to determine state equivalence and minimize DFAs by merging indistinguishable states." },
                            { id: 2, title: "Myhill-Nerode Theorem", desc: "State and apply the Myhill-Nerode theorem to prove regularity and determine minimal state counts." },
                            { id: 3, title: "Quotient Construction", desc: "Construct the quotient DFA from equivalence classes and prove its uniqueness up to isomorphism." },
                            { id: 4, title: "Equivalence Testing", desc: "Prove that two DFAs are equivalent using distinguishability arguments and product construction." },
                            { id: 5, title: "Algorithm Analysis", desc: "Analyze time/space complexity of minimization (O(n²|Σ|)) and apply to real-world pattern matching." }
                        ].map(obj => (
                            <li key={obj.id} className="flex gap-4 items-start bg-white/50 p-4 rounded-2xl border border-indigo-100/50 hover:bg-white transition-colors">
                                <span className="bg-indigo-600 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{obj.id}</span>
                                <div>
                                    <p className="text-sm font-black text-indigo-950 mb-1 leading-tight">{obj.title}</p>
                                    <p className="text-[11px] text-indigo-800/70 leading-relaxed font-medium">{obj.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why This Topic Matters */}
            <section className="content-section mb-16">
                <div className="bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-10 rounded-[3rem] text-slate-900 border-2 border-indigo-100 shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-8 flex items-center gap-4 text-indigo-700">
                            Why This Topic Matters
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                            <p className="text-sm">
                                Imagine you're designing a lexical analyzer for a compiler that recognizes keywords, identifiers, and operators. Your initial DFA might have 50 states, but after careful analysis, you discover that 20 of those states are redundant—they behave identically for all possible inputs. By eliminating these redundant states, you reduce memory usage by 40% and improve processing speed significantly.
                            </p>
                            <p className="text-sm">
                                DFA minimization is not just an academic exercise—it's a <strong>fundamental optimization technique</strong>. In hardware design, minimizing a finite state machine reduces flip-flops. In software, it reduces the memory footprint of pattern matching (grep, regex engines).
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {[
                                { title: "Compilers", icon: <Terminal />, desc: "token recognition" },
                                { title: "Network IDS", icon: <Layers />, desc: "pattern matching" },
                                { title: "Hardware", icon: <Cpu />, desc: "FPGA design" },
                                { title: "Regex Engines", icon: <Code />, desc: "optimizing Grep" }
                            ].map((app, i) => (
                                <div key={i} className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-indigo-100 hover:shadow-md transition-all text-center">
                                    <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 text-indigo-600">{app.icon}</div>
                                    <p className="text-xs font-black uppercase text-indigo-700 mb-1">{app.title}</p>
                                    <p className="text-[10px] text-slate-500 italic">{app.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive: Theory */}
            <section className="content-section mb-16">
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                    <BookOpen className="w-10 h-10 text-indigo-600" />
                    Deep Dive: Equivalence & Minimization
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] shadow-sm relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform"></div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2 relative z-10">State Equivalence</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6 relative z-10 italic">
                                "Two states p and q in a DFA are equivalent (indistinguishable) if for every input string w, the transitions from both lead to either both accepting or both non-accepting states."
                            </p>
                            <div className="bg-indigo-50 text-indigo-700 p-6 rounded-2xl font-mono text-xs border border-indigo-100 shadow-inner relative z-10">
                                <p className="text-indigo-400 mb-2 uppercase text-[10px] tracking-widest font-black">Formal Definition</p>
                                <p className="text-lg">δ̂(p, w) ∈ F ⟺ δ̂(q, w) ∈ F</p>
                            </div>
                        </div>

                        <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-[2.5rem] shadow-sm">
                            <h4 className="text-[10px] font-black uppercase text-amber-700 mb-4 tracking-widest flex items-center gap-2">
                                <Info className="w-4 h-4" /> 📌 Key Terminology
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "Equivalent States", d: "Behave identically on all input strings." },
                                    { t: "Distinguishable", d: "A string exists leading to different outcomes." },
                                    { t: "Minimal DFA", d: "The smallest machine with no redundant states." },
                                    { t: "Quotient DFA", d: "Formed by merging equivalence classes." },
                                    { t: "Unreachable", d: "States that cannot be reached from q₀." },
                                    { t: "Isomorphism", d: "Unique machine structure up to renaming." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                        <ChevronRight className="w-3 h-3 text-amber-600 mt-1 shrink-0" />
                                        <div>
                                            <p className="text-[11px] font-black text-amber-900 leading-none mb-1">{item.t}</p>
                                            <p className="text-[10px] text-amber-800/70 leading-tight">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl w-full flex flex-col items-center shadow-xl relative mt-4">
                            <div className="absolute top-4 left-4 bg-indigo-100 text-indigo-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">Concept: Equivalence</div>
                            <div className="flex gap-16 items-center mt-12 mb-12">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full border-4 border-indigo-600 flex items-center justify-center font-black bg-white shadow-lg shadow-indigo-100 text-indigo-600">p</div>
                                    <p className="text-[10px] font-bold uppercase text-slate-400 tracking-tighter">State p</p>
                                </div>
                                <div className="flex flex-col items-center relative gap-2">
                                    <div className="text-3xl font-black text-slate-200">≡</div>
                                    <div className="w-20 h-0.5 bg-slate-200"></div>
                                    <span className="absolute -bottom-4 text-[9px] font-black text-indigo-500 bg-white px-2 uppercase italic tracking-widest">Equality of Outcome</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500 flex items-center justify-center font-black bg-white shadow-lg shadow-indigo-100 text-indigo-500">q</div>
                                    <p className="text-[10px] font-bold uppercase text-slate-400 tracking-tighter">State q</p>
                                </div>
                            </div>
                            <div className="text-center space-y-2 border-t pt-6 w-full mt-4">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-3">Figure 1: Comparison Logic</p>
                                <div className="flex justify-center gap-8">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-2 px-4 rounded-xl border">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div> w → ACCEPT
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-2 px-4 rounded-xl border">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div> w → REJECT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table Filling Algorithm */}
            <section className="content-section mb-16">
                <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-12 text-slate-900 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

                    <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h3 className="text-3xl font-black text-indigo-700 uppercase tracking-tight mb-4 flex items-center gap-4">
                                    <Terminal className="w-10 h-10" /> The Table-Filling Algorithm
                                </h3>
                                <p className="text-slate-500 text-sm italic font-medium leading-relaxed border-l-4 border-indigo-600 pl-6 py-2 bg-indigo-50/50 rounded-r-xl">
                                    "The core idea: Systematically identify distinguishable state pairs. Initially, identify Final/Non-Final pairs. Then iteratively expand based on transitions."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { s: "Step 1", t: "Remove Unreachable", d: "BFS/DFS from start state to eliminate dead weight." },
                                    { s: "Step 2", t: "Initialize Table", d: "Mark pairs (p, q) where exactly one is in F." },
                                    { s: "Step 3", t: "Iterate Marking", d: "If (δ(p,a), δ(q,a)) is marked, then p and q are marked." },
                                    { s: "Step 4", t: "Merge Classes", d: "Unmarked pairs are equivalent. Merge into super-states." }
                                ].map((step, i) => (
                                    <div key={i} className="bg-indigo-50/30 border border-indigo-100 p-5 rounded-2xl group/item hover:bg-white transition-all shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">{step.s}</span>
                                            <Zap className="w-3 h-3 text-indigo-600 opacity-0 group-hover/item:opacity-100" />
                                        </div>
                                        <p className="text-sm font-bold text-slate-900 mb-2 leading-none uppercase">{step.t}</p>
                                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{step.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-[400px] shrink-0">
                            <div className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden h-full">
                                <div className="absolute top-4 left-4 bg-indigo-100 text-indigo-600 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Visualizing the Loop</div>
                                <div className="flex flex-col items-center gap-6 mt-12 py-4">
                                    {[
                                        { l: "Init Table: (F, Non-F)", c: "indigo" },
                                        { l: "Loop: Check Unmarked (p,q)", c: "blue" },
                                        { l: "Check δ(p,a) and δ(q,a)", c: "amber" },
                                        { l: "If Successor Marked → Mark (p,q)", l2: "Repeat until stable", c: "emerald" }
                                    ].map((box, i) => (
                                        <React.Fragment key={i}>
                                            <div className="bg-indigo-50/50 border-2 border-indigo-100 p-4 rounded-xl w-full text-center group hover:border-indigo-600 transition-all">
                                                <p className="text-[10px] font-bold text-slate-900">{box.l}</p>
                                                {box.l2 && <p className="text-[9px] text-indigo-400 font-medium italic mt-1">{box.l2}</p>}
                                            </div>
                                            {i < 3 && <div className="w-0.5 h-6 bg-white/10"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mt-8 text-center italic">Figure 2: Iterative Refinement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Myhill-Nerode Theorem */}
            <section className="content-section mb-16">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-1 shadow-2xl overflow-hidden group">
                    <div className="bg-white rounded-[1.4rem] p-10 overflow-hidden relative">
                        <div className="absolute right-0 top-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                            <BarChart className="w-48 h-48 text-indigo-900" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4 relative z-10">
                            <span className="bg-indigo-600 p-2 rounded-xl text-white"><Layers className="w-8 h-8" /></span>
                            The Myhill-Nerode Theorem
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-slate-600 text-sm leading-relaxed border-l-4 border-slate-200 pl-6 italic font-medium">
                                    "One of the most elegant result in automata theory. It provides a complete characterization of regular languages and establishes the theoretical foundation for minimization."
                                </p>
                                <div className="bg-slate-50 p-8 rounded-3xl border shadow-inner">
                                    <p className="text-[10px] font-black uppercase text-indigo-600 mb-4 tracking-widest">📐 Formal Statement</p>
                                    <p className="text-sm font-bold text-slate-800 leading-relaxed space-y-4">
                                        For a language L ⊆ Σ*, the following are equivalent:
                                    </p>
                                    <ul className="mt-4 space-y-3">
                                        {[
                                            "L is regular (recognized by some DFA).",
                                            "The set of equivalence classes of the relation ≡L is finite.",
                                            "There exists a unique minimal DFA with exactly |Σ*/≡L| states."
                                        ].map((pt, i) => (
                                            <li key={i} className="flex gap-4 text-[11px] font-medium text-slate-700">
                                                <div className="bg-indigo-100 text-indigo-600 font-black h-5 w-5 rounded flex items-center justify-center shrink-0 uppercase">{String.fromCharCode(97 + i)}</div>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-indigo-100 text-indigo-900 p-6 rounded-3xl shadow-sm border border-indigo-200">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4 font-mono">≡L RELATION</h4>
                                    <p className="text-[11px] leading-relaxed text-indigo-800 italic mb-4">"x ≡L y iff for all z ∈ Σ*, xz ∈ L ⟺ yz ∈ L"</p>
                                    <p className="text-[10px] font-medium leading-relaxed text-indigo-700/70">Two strings are equivalent if they can be followed by the exact same suffixes to stay within L.</p>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 text-center">
                                    <p className="text-[10px] font-black uppercase text-indigo-600 mb-2">Key Insight</p>
                                    <p className="text-[11px] font-bold text-indigo-900 leading-relaxed">Number of equivalence classes = States in minimal DFA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Worked Example 1 */}
            <section className="content-section mb-16">
                <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                    <PlayCircle className="w-8 h-8 text-emerald-500" />
                    Worked Example 1: Basic Minimization
                </h2>
                <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow relative">
                    <div className="bg-indigo-50 p-4 px-10 flex justify-between items-center text-indigo-900 border-b border-indigo-100">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Step-by-Step Analysis</span>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        </div>
                    </div>
                    <div className="p-10 space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="md:col-span-1 bg-slate-50 p-6 rounded-3xl border">
                                <p className="text-[10px] font-black uppercase text-indigo-600 mb-4 tracking-widest">DFA SPECIFICATION</p>
                                <div className="space-y-4 font-mono text-xs">
                                    <div className="flex justify-between border-b pb-1"><span>States</span> <span>{'{A,B,C,D,E,F}'}</span></div>
                                    <div className="flex justify-between border-b pb-1"><span>Σ</span> <span>{'{0,1}'}</span></div>
                                    <div className="flex justify-between border-b pb-1"><span>Start</span> <span>A</span></div>
                                    <div className="flex justify-between border-b pb-1"><span>Finals</span> <span className="text-emerald-600">{'{C,E}'}</span></div>
                                </div>
                                <div className="mt-8">
                                    <p className="text-[9px] font-black text-slate-400 mb-2 tracking-widest uppercase">Transition Matrix</p>
                                    <table className="w-full text-[10px] border-collapse">
                                        <thead><tr className="border-b"><th>S</th><th>0</th><th>1</th></tr></thead>
                                        <tbody className="text-center font-bold">
                                            <tr className="border-b py-1"><td>A</td><td>B</td><td>C</td></tr>
                                            <tr className="border-b"><td>B</td><td>A</td><td>D</td></tr>
                                            <tr className="border-b bg-emerald-50"><td>C*</td><td>E</td><td>F</td></tr>
                                            <tr className="border-b"><td>D</td><td>E</td><td>F</td></tr>
                                            <tr className="border-b bg-emerald-50"><td>E*</td><td>E</td><td>F</td></tr>
                                            <tr className="border-b"><td>F</td><td>F</td><td>F</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-6">
                                <div className="bg-indigo-50 p-8 rounded-3xl text-indigo-950 border border-indigo-100/50 shadow-sm">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-indigo-700 mb-6 flex justify-between">
                                        Algorithm Execution Trace
                                        <BarChart className="w-4 h-4 opacity-40" />
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="flex gap-6">
                                            <div className="text-2xl font-black text-indigo-200">01</div>
                                            <div>
                                                <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">Base Case (ε-String Marking)</p>
                                                <p className="text-[11px] text-indigo-800/70 leading-relaxed font-medium">Mark all pairs where one is Final (C, E) and the other is not. <br /> Result: (A,C), (A,E), (B,C), (B,E), (D,C), (D,E)... are all <strong>marked</strong>.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 border-t border-indigo-100/50 pt-6">
                                            <div className="text-2xl font-black text-indigo-200">02</div>
                                            <div>
                                                <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">First Pass (Length-1 Distinguishability)</p>
                                                <p className="text-[11px] text-indigo-800/70 leading-relaxed font-medium italic underline decoration-indigo-400/30">Analyzing Pair (A,B):</p>
                                                <div className="text-[10px] bg-white p-3 rounded-xl mt-2 font-mono text-indigo-600 border border-indigo-100 shadow-sm">
                                                    δ(A,1)=C (Final), δ(B,1)=D (Non-Final) → <span className="text-emerald-600 font-black tracking-widest">Marked!</span> <br />
                                                    <span className="text-slate-400">Conclusion: A is distinguishable from B via string '1'.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 border-t border-indigo-100/50 pt-6">
                                            <div className="text-2xl font-black text-indigo-200">03</div>
                                            <div>
                                                <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">Equivalence Discovery</p>
                                                <p className="text-[11px] text-indigo-800/70 leading-relaxed font-medium">Analyzing Pair (C,E): both lead to E on '0' and F on '1'. Since their outcomes are identical state transitions, <strong>they will never be marked.</strong></p>
                                                <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mt-3 text-[10px] font-black border border-emerald-200 uppercase tracking-[0.2em] flex items-center gap-2">
                                                    <CheckCircle className="w-3 h-3" /> RESULT: C ≡ E (Merged State)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border-2 border-dashed border-slate-200 text-center">
                            <h5 className="text-[10px] font-black uppercase text-slate-400 mb-6 tracking-[0.5em]">Minimized Machine Result</h5>
                            <div className="flex flex-wrap justify-center gap-12 items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-4 border-slate-200 flex items-center justify-center font-black text-xs text-slate-400">6</div>
                                    <p className="text-[10px] font-bold uppercase tracking-tighter">Original States</p>
                                </div>
                                <div className="text-2xl font-black text-indigo-200">➔</div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-4 border-indigo-600 flex items-center justify-center font-black text-xs text-indigo-600">5</div>
                                    <p className="text-[10px] font-bold uppercase tracking-tighter text-indigo-600">Minimized States</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-500 italic mt-6">C and E merged into a single state [CE]. F serves as a dead state.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code Block */}
            <section className="content-section mb-16">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-4">
                            <Code className="w-10 h-10 text-indigo-600" />
                            Python Implementation
                        </h2>
                        <p className="text-xs text-slate-400 font-bold tracking-widest mt-2 uppercase">PRODUCTION READY TABLE-FILLING LOGIC</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">Validated: Python 3.10+</span>
                </div>

                <div className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-xl relative group border-2 border-slate-200">
                    <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-indigo-400 text-9xl -mr-16 -mt-16 select-none group-hover:opacity-10 transition-opacity">Py</div>
                    <div className="bg-white p-4 px-10 flex justify-between items-center border-b border-slate-100 backdrop-blur-xl">
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <span className="ml-4 text-[10px] text-slate-400 font-mono font-bold tracking-widest">dfa_minimizer.py</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[8px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">O(n²|Σ|)</span>
                        </div>
                    </div>
                    <div className="p-10 font-mono text-[11px] text-slate-700 leading-relaxed max-h-[600px] overflow-y-auto no-scrollbar scroll-smooth bg-white/50">
                        <div className="space-y-1">
                            {/* Class Def */}
                            <p><span className="text-indigo-600 font-bold">def</span> <span className="text-emerald-600 font-bold">minimize_dfa</span>(dfa):</p>
                            <p className="pl-6 text-slate-400 italic"># 1. Initialize Table (n x n)</p>
                            <p className="pl-6">n = len(dfa.states)</p>
                            <p className="pl-6">table = [[<span className="text-indigo-600">False</span>] * n <span className="text-indigo-600">for</span> _ <span className="text-indigo-600">in</span> range(n)]</p>

                            <p className="pl-6 mt-6 text-slate-400 italic"># 2. Base Case: Mark Final-NonFinal pairs</p>
                            <p className="pl-6"><span className="text-indigo-600">for</span> i <span className="text-indigo-600">in</span> range(n):</p>
                            <p className="pl-12"><span className="text-indigo-600">for</span> j <span className="text-indigo-600">in</span> range(i + 1, n):</p>
                            <p className="pl-18"><span className="text-indigo-600">if</span> (dfa.is_final(i) != dfa.is_final(j)):</p>
                            <p className="pl-24">table[i][j] = <span className="text-indigo-600">True</span></p>

                            <p className="pl-6 mt-6 text-slate-400 italic"># 3. Iterative Refinement</p>
                            <p className="pl-6">changed = <span className="text-indigo-600 text-bold font-bold uppercase italic">True</span></p>
                            <p className="pl-6"><span className="text-indigo-600">while</span> changed:</p>
                            <p className="pl-12">changed = <span className="text-indigo-600">False</span></p>
                            <p className="pl-12"><span className="text-indigo-600">for</span> i <span className="text-indigo-600">in</span> range(n):</p>
                            <p className="pl-18"><span className="text-indigo-600">for</span> j <span className="text-indigo-600">in</span> range(i + 1, n):</p>
                            <p className="pl-24"><span className="text-indigo-600">if not</span> table[i][j]:</p>
                            <p className="pl-30"><span className="text-indigo-600">for</span> symbol <span className="text-indigo-600">in</span> dfa.alphabet:</p>
                            <p className="pl-36">p_next = dfa.transition(i, symbol)</p>
                            <p className="pl-36">q_next = dfa.transition(j, symbol)</p>
                            <p className="pl-36"><span className="text-indigo-600">if</span> table[p_next][q_next]:</p>
                            <p className="pl-42 text-emerald-600 font-bold">table[i][j] = True</p>
                            <p className="pl-42 text-emerald-600 font-bold">changed = True</p>
                            <p className="pl-42 text-indigo-600">break</p>

                            <p className="pl-6 mt-6 text-slate-400 italic"># 4. Result: Unmarked pairs represent equivalent states</p>
                            <p className="pl-6"><span className="text-indigo-600">return</span> identify_classes(table)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples 2 & 3 Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Example 2: Non-regularity */}
                <div className="bg-white border-2 border-slate-100 p-8 rounded-[3rem] shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="bg-red-600 text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">Example 2</span>
                        <h4 className="text-xl font-bold text-slate-900 border-b-2 border-red-200">Proving Non-Regularity</h4>
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-6 italic leading-relaxed">
                        "Prove L = {'{0ⁿ1ⁿ : n ≥ 0}'} is not regular using Myhill-Nerode."
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="bg-red-100 text-red-600 font-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1">1</div>
                            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">Consider strings of type <strong>0ⁱ</strong>. For any i ≠ j, take extension <strong>z = 1ⁱ</strong>.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-red-100 text-red-600 font-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1">2</div>
                            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">0ⁱ·1ⁱ = 0ⁱ1ⁱ ∈ L, while 0ʲ·1ⁱ = 0ʲ1ⁱ ∉ L. Thus 1ⁱ distinguishes 0ⁱ from 0ʲ.</p>
                        </div>
                        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl text-[10px] font-black text-red-700 text-center uppercase tracking-widest">
                            Infinitely many classes ➔ Not Regular
                        </div>
                    </div>
                </div>

                {/* Example 3: Equivalence Testing */}
                <div className="bg-white border-2 border-slate-100 p-8 rounded-[3rem] shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="bg-blue-600 text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">Example 3</span>
                        <h4 className="text-xl font-bold text-slate-900 border-b-2 border-blue-200">DFA Equivalence Testing</h4>
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-6 italic leading-relaxed">
                        "Test if M₁ (2 states) and M₂ (3 states) recognize the same language."
                    </p>
                    <div className="bg-slate-50 rounded-2xl p-6 border shadow-inner">
                        <h5 className="text-[9px] font-black uppercase text-indigo-600 mb-4 tracking-widest">Product Trace</h5>
                        <div className="space-y-3">
                            {[
                                { p: "(p₀, q₀)", d: "Init state: Non-final (M₁) / Non-final (M₂) ✅" },
                                { p: "δ((p₀,q₀), 1)", d: "Moves to (p₁, q₁) - BOTH Accepting states ✅" },
                                { p: "δ((p₁,q₁), 0)", d: "Moves to (p₁, q₂) - BOTH Accepting states ✅" }
                            ].map((trace, i) => (
                                <div key={i} className="flex gap-4 items-center bg-white/50 p-2 rounded-xl border">
                                    <span className="text-[10px] font-mono font-black text-blue-600 w-16 shrink-0">{trace.p}</span>
                                    <span className="text-[10px] text-slate-500 font-medium italic">{trace.d}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-3 bg-blue-600 rounded-xl text-white text-center text-[10px] font-black uppercase tracking-widest">
                            Result: DFAs are Equivalent
                        </div>
                    </div>
                </div>
            </div>

            {/* Common Pitfalls Section */}
            <section className="content-section mb-16">
                <div className="bg-rose-50 border-2 border-rose-100 rounded-[3rem] p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <AlertTriangle className="w-40 h-40 text-rose-300" />
                    </div>
                    <h2 className="text-2xl font-black text-rose-900 mb-10 flex items-center gap-4 uppercase tracking-tight">
                        Common Pitfalls & How to Avoid
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {[
                            { q: "NFA is NOT DFA", a: "Uniqueness and the table-filling algorithm apply only to DFAs. Minimizing NFAs is PSPACE-complete." },
                            { q: "Unreachable States", a: "Failing to remove unreachable states creates spurious classes. Always run BFS/DFS from q₀ first." },
                            { q: "Premature Convergence", a: "Iterate the table-filling until NO new marks are added in a complete pass. Single passes often fail." },
                            { q: "Isomorphism Concept", a: "Two DFAs with matching structure but different labels are essentially the same (isomorphic)." }
                        ].map((m, i) => (
                            <div key={i} className="flex gap-4 bg-white/40 backdrop-blur border border-rose-200 p-6 rounded-2xl group hover:bg-white transition-all">
                                <span className="text-2xl font-black text-rose-200 group-hover:text-rose-400 transition-colors">0{i + 1}</span>
                                <div>
                                    <p className="text-xs font-black text-rose-950 mb-1 uppercase tracking-widest">{m.q}</p>
                                    <p className="text-[10px] text-rose-800 leading-relaxed font-medium italic opacity-70 border-l-2 border-rose-200 pl-4">{m.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive MCQs */}
            <section className="content-section mb-16">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-black text-slate-900 uppercase">Interactive Concept Check</h2>
                    <span className="bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">5 Questions</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { id: 1, q: "Two states p and q are equivalent if and only if:", o: ["Both are final states", "Both are reachable states", "For every string w, results match (accept/reject)", "They have same transitions on one symbol"], c: 2 },
                        { id: 2, q: "Minimum states needed equals:", o: ["States in NFA", "Equivalence classes of ≡L", "States in DFA + 1", "String length"], c: 1 },
                        { id: 3, q: "Initial marking in table-filling is for:", o: ["(Start, Final) pairs", "(Final, Non-Final) pairs", "Unreachable pairs", "Identical states"], c: 1 },
                        { id: 4, q: "Time Complexity of minimization is:", o: ["O(n log n)", "O(n²|Σ|)", "O(n³)", "Exponential"], c: 1 },
                        { id: 5, q: "DFA minimization uniqueness:", o: ["Not unique", "Unique up to state renaming (isomorphism)", "Unique including labels", "Only for finite languages"], c: 1 }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-2 h-full bg-slate-100 group-hover:bg-indigo-500 transition-colors"></div>
                            <p className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Question 0{item.id}</p>
                            <p className="text-sm font-bold mb-6 text-slate-800 leading-relaxed font-serif italic">{item.q}</p>
                            <div className="grid grid-cols-1 gap-2">
                                {item.o.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => checkMcq(item.id, idx, item.c)}
                                        className={`text-left p-4 rounded-xl border-2 transition-all font-medium text-xs ${mcqAnswers[item.id] === idx ? (idx === item.c ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold' : 'bg-rose-50 border-rose-500 text-rose-950') : 'bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{opt}</span>
                                            {mcqAnswers[item.id] === idx && (idx === item.c ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-rose-600" />)}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Videos Section */}
            <section className="content-section mb-16 px-4">
                <h2 className="text-3xl font-black mb-10 border-b-4 pb-4 border-indigo-600/30 flex justify-between items-end uppercase text-slate-900">
                    Learn Through Videos
                    <PlayCircle className="w-10 h-10 text-indigo-600 mb-1" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { id: "84oNUttWlN4", title: "DFA Minimization - Table Filling", author: "Neso Academy", dur: "15:20", desc: "Complete walkthrough with visual table step-by-step." },
                        { id: "jN8zvENdjBg", title: "Myhill-Nerode Foundation", author: "Gate Smashers", dur: "12:45", desc: "Deep theoretical insight into equivalence classes." },
                        { id: "upu_TeZImN0", title: "Minimization Examples", author: "Jenny's Lectures", dur: "18:10", desc: "Practical problem solving for university & competitive exams." }
                    ].map(v => (
                        <div key={v.id} className="bg-white border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full border-b-8 border-b-indigo-500">
                            <div className="aspect-video bg-slate-100 relative">
                                <iframe className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" src={`https://www.youtube.com/embed/${v.id}`} allowFullScreen></iframe>
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-slate-900 flex items-center gap-2 shadow-sm">
                                    <PlayCircle className="w-3 h-3 text-red-500" /> {v.dur}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 font-mono">{v.author}</p>
                                <h4 className="text-base font-black text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{v.title}</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-6 italic">{v.desc}</p>
                                <div className="mt-auto pt-4 border-t border-slate-50">
                                    <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors flex items-center gap-2">
                                        Mark as Watched <CheckCircle className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Mastery Quiz */}
            <section className="content-section mb-16">
                <div className="bg-indigo-50 border-2 border-indigo-100 rounded-[4rem] p-12 text-slate-900 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-indigo-500/5 -skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10 text-center mb-16">
                        <h2 className="text-4xl font-black uppercase tracking-[0.2em] mb-4 text-indigo-900 text-shadow-sm">Section Mastery Quiz</h2>
                        <div className="h-1.5 w-32 bg-indigo-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest">Target: 7/10 to Unlock Next Module</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {[
                            { id: 1, q: "In the quotient DFA construction, if states p and q are equivalent, then for all initial symbols 'a':", o: ["δ(p,a) = δ(q,a)", "δ(p,a) ≡ δ(q,a)", "p = q", "Acceptance is same"], c: 1 },
                            { id: 2, q: "Which is a valid distinguishing string?", o: ["w where outcomes match", "w where exactly one state Accepts", "The empty string ε always", "w where both states Reject"], c: 1 },
                            { id: 3, q: "Every DFA has a unique minimal form:", o: ["True", "False"], c: 0 },
                            { id: 4, q: "If two DFAs have the same number of states, they must recognize same language:", o: ["True", "False"], c: 1 },
                            { id: 5, q: "Infinitely many ≡L classes proves non-regularity:", o: ["True", "False"], c: 0 },
                            { id: 6, q: "States {p,q} are equivalent if they are both in F OR both in Q-F for ALL strings w:", o: ["True", "False"], c: 0 },
                            { id: 7, q: "Lexical analyzers use minimized DFAs to reduce:", o: ["State explosion", "Memory Footprint", "Computational Complexity", "All of above"], c: 3 },
                            { id: 8, q: "Isomorphism refers to uniqueness up to:", o: ["Structure and Labels", "Physical Layout", "State Renaming", "Initial State position"], c: 2 },
                            { id: 9, q: "NFA minimization is PSPACE-complete:", o: ["True", "False"], c: 0 },
                            { id: 10, q: "Total equivalence classes for L = {0ⁿ1ⁿ} is:", o: ["Finite", "Zero", "Infinite", "1"], c: 2 }
                        ].map((q, idx) => (
                            <div key={idx} className="bg-white border-2 border-indigo-100 p-10 rounded-[2.5rem] group hover:bg-indigo-50/30 transition-all shadow-sm">
                                <p className="text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-widest">Assessment {q.id}</p>
                                <p className="text-xl font-bold mb-8 group-hover:text-indigo-600 transition-colors leading-relaxed font-serif italic text-slate-800">{q.q}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {q.o.map((opt, i) => (
                                        <button
                                            key={idx + '-' + i}
                                            onClick={() => checkQuiz(q.id, i, q.c)}
                                            className={`text-left p-4 rounded-2xl border-2 transition-all text-xs font-bold ${quizAnswers[q.id] === i ? (i === q.c ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-[1.02]' : 'bg-rose-50 border-rose-200 text-rose-700') : 'bg-white border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/50 text-slate-600'}`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                                {quizResults[q.id] !== undefined && (
                                    <div className={`mt-6 p-4 rounded-xl border-l-4 font-black text-[10px] uppercase tracking-widest ${quizResults[q.id] ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-rose-500/10 border-rose-500 text-rose-400'}`}>
                                        {quizResults[q.id] ? "✨ MASTERED: Optimal Logic" : "❌ COLLISION: Review Distinguishability"}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="bg-indigo-600 p-8 rounded-[2rem] text-center shadow-xl relative overflow-hidden group mt-12">
                            <div className="absolute inset-0 bg-white/10 group-hover:scale-110 transition-transform duration-700"></div>
                            <h4 className="text-xl font-black uppercase mb-2 relative z-10 tracking-[0.2em] text-white">All Systems Nominal</h4>
                            <p className="text-xs text-indigo-100 font-medium opacity-80 relative z-10">You've reached the theoretical minimum. Proceed to Summary.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison & Analysis */}
            <section className="content-section mb-16">
                <div className="bg-white border-2 border-slate-100 rounded-[3rem] overflow-hidden shadow-xl">
                    <div className="bg-slate-50 p-8 px-12 text-slate-900 border-b border-slate-100 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-widest text-indigo-700 font-serif italic">Comparison & Analysis</h2>
                            <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-tighter">Algorithm Performance & Practicality</p>
                        </div>
                        <Table className="w-10 h-10 text-indigo-600 opacity-20" />
                    </div>
                    <div className="p-10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-slate-200">
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Aspect</th>
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-indigo-600">Table-Filling</th>
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-emerald-600">Partition Refinement</th>
                                        <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-rose-600">Brzozowski's</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { aspect: "Time Complexity", c1: "O(n² × |Σ|)", c2: "O(n log n)", c3: "O(2ⁿ) worst case" },
                                        { aspect: "Space Complexity", c1: "O(n²)", c2: "O(n)", c3: "O(n)" },
                                        { aspect: "Implementation", c1: "✓ Simple & Intuitive", c2: "✗ Complex", c3: "✓ Very Simple" },
                                        { aspect: "Best For", c1: "Teaching, small DFAs", c2: "Large DFAs, Production", c3: "Theoretical Insight" },
                                        { aspect: "Key Idea", c1: "Mark distinguishable pairs", c2: "Iterative refinement", c3: "Reverse, Det, Repeat" },
                                        { aspect: "Practical Use", c1: "Educational (JFLAP)", c2: "Compilers (lex/flex)", c3: "Rarely in practice" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white transition-colors">
                                            <td className="py-4 px-6 text-xs font-black text-slate-900 uppercase tracking-tighter">{row.aspect}</td>
                                            <td className="py-4 px-6 text-xs font-medium text-slate-600 italic">{row.c1}</td>
                                            <td className="py-4 px-6 text-xs font-bold text-slate-700">{row.c2}</td>
                                            <td className="py-4 px-6 text-xs font-medium text-slate-500">{row.c3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-4 items-start">
                            <div className="bg-indigo-600 p-2 rounded-lg text-white">
                                <Zap className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-indigo-900 uppercase mb-1">Expert Takeaway</p>
                                <p className="text-xs text-indigo-800/70 leading-relaxed italic">While Table-Filling is the standard for university exams due to its clear state-by-state marking process, industry-grade tools like <strong>Flex</strong> use Hopcroft's algorithm to handle automata with thousands of states efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interview & Exam Excellence */}
            <section className="content-section mb-16">
                <div className="flex items-center gap-4 mb-10">
                    <div className="bg-amber-500 p-3 rounded-2xl text-white shadow-lg shadow-amber-200">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase">Interview & Exam Excellence</h2>
                        <p className="text-slate-500 font-medium">Master the most frequently asked professional and academic questions.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Interview Prep */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 px-2">
                            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                            💼 Interview Preparation
                        </h3>

                        {[
                            {
                                id: "int-1",
                                q: "Design a minimal DFA for strings ending in '01'",
                                approach: "States represent the suffix seen so far: q₀ (no relevant suffix), q₁ (ends in 0), q₂ (ends in 01, accepting).",
                                trans: [
                                    "From q₀: 0→q₁, 1→q₀",
                                    "From q₁: 0→q₁, 1→q₂",
                                    "From q₂: 0→q₁, 1→q₀"
                                ],
                                verify: "All 3 states are distinguishable (q₀ by ε, q₁ by 1, q₂ by ε)."
                            },
                            {
                                id: "int-2",
                                q: "Prove that minimal DFA is unique",
                                approach: "Use Myhill-Nerode. The equivalence classes of ≡L are uniquely determined by L. Each minimal DFA must have exactly one state per equivalence class, with transitions determined by the equivalence relation.",
                                insight: "Any two minimal DFAs have a bijection between states preserving structure—hence isomorphic."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
                                <p className="text-sm font-bold text-slate-900 mb-4">Question {idx + 1}: {item.q}</p>
                                <button
                                    onClick={() => toggleSolution(item.id)}
                                    className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4 flex items-center gap-2 hover:text-indigo-800 transition-colors"
                                >
                                    {showSolution[item.id] ? "Hide Approach" : "Show Approach"}
                                </button>
                                {showSolution[item.id] && (
                                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">How to approach:</p>
                                            <p className="text-xs text-slate-600 leading-relaxed italic">{item.approach}</p>
                                        </div>
                                        {item.trans && (
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Transitions:</p>
                                                <ul className="text-xs text-slate-600 font-mono space-y-1">
                                                    {item.trans.map((t, i) => <li key={i}>{t}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                        {item.verify && (
                                            <div className="pt-2 border-t border-slate-200">
                                                <p className="text-[10px] font-black uppercase text-emerald-600 mb-1 tracking-widest">Verify minimality:</p>
                                                <p className="text-xs text-slate-600">{item.verify}</p>
                                            </div>
                                        )}
                                        {item.insight && (
                                            <div className="pt-2 border-t border-slate-200">
                                                <p className="text-[10px] font-black uppercase text-blue-600 mb-1 tracking-widest">Key insight:</p>
                                                <p className="text-xs text-slate-600">{item.insight}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Exam Practice */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 px-2">
                            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                            📝 University Exam Practice
                        </h3>

                        {[
                            {
                                id: "exam-1",
                                q: "Question 1: Short Answer (5 marks)",
                                text: "\"Define state equivalence in a DFA and explain why the relation is an equivalence relation.\"",
                                scheme: [
                                    "Correct definition of state equivalence: 2 marks",
                                    "Reflexivity explanation: 1 mark",
                                    "Symmetry explanation: 1 mark",
                                    "Transitivity explanation: 1 mark"
                                ],
                                answer: [
                                    "Definition: States p and q are equivalent (p ≡ q) if for all strings w ∈ Σ*, δ̂(p,w) ∈ F ⟺ δ̂(q,w) ∈ F. That is, they accept/reject the same set of suffixes.",
                                    "Reflexive: p ≡ p since δ̂(p,w) ∈ F ⟺ δ̂(p,w) ∈ F is always true.",
                                    "Symmetric: If p ≡ q, then δ̂(p,w) ∈ F ⟺ δ̂(q,w) ∈ F, which is equivalent to δ̂(q,w) ∈ F ⟺ δ̂(p,w) ∈ F, so q ≡ p.",
                                    "Transitive: If p ≡ q and q ≡ r, then for all w: δ̂(p,w) ∈ F ⟺ δ̂(q,w) ∈ F ⟺ δ̂(r,w) ∈ F, so p ≡ r."
                                ]
                            },
                            {
                                id: "exam-2",
                                q: "Question 2: Problem Solving (10 marks)",
                                text: "\"Minimize the following DFA using the table-filling algorithm. Show all steps of your work.\"",
                                subtext: "States: {A, B, C, D, E}, Initial: A, Final: {C, E}. Transitions: δ(A,0)=B, δ(A,1)=C, δ(B,0)=A, δ(B,1)=D, δ(C,0)=E, δ(C,1)=E, δ(D,0)=E, δ(D,1)=E, δ(E,0)=E, δ(E,1)=E",
                                scheme: [
                                    "Initial marking (Final-NonFinal): 2 marks",
                                    "First pass through table: 3 marks",
                                    "Second pass (if needed): 2 marks",
                                    "Correct identification of equivalent states: 2 marks",
                                    "Correct minimized DFA: 1 mark"
                                ],
                                answer: [
                                    "Initial marking: Mark (A,C), (A,E), (B,C), (B,E), (D,C), (D,E) - all Final-NonFinal pairs.",
                                    "First pass: (A,B): δ(A,0)=B, δ(B,0)=A (unmarked); δ(A,1)=C, δ(B,1)=D. (C,D): C∈F, D∉F → marked. So mark (A,B).",
                                    "(A,D): δ(A,0)=B, δ(D,0)=E. (B,E) marked. Mark (A,D).",
                                    "(B,D): δ(B,0)=A, δ(D,0)=E. (A,E) marked. Mark (B,D).",
                                    "(C,E): δ(C,0)=E, δ(E,0)=E; δ(C,1)=E, δ(E,1)=E. Unmarked!",
                                    "Result: C ≡ E. Merge to get 4-state minimized DFA."
                                ]
                            },
                            {
                                id: "exam-3",
                                q: "Question 3: Proof (15 marks)",
                                text: "\"State and prove the Myhill-Nerode theorem. Use it to prove that L = {aⁿbⁿ : n ≥ 0} is not regular.\"",
                                scheme: [
                                    "Correct statement of theorem: 3 marks",
                                    "Proof sketch (→ direction): 4 marks",
                                    "Proof sketch (← direction): 4 marks",
                                    "Correct application to {aⁿbⁿ}: 4 marks"
                                ],
                                answer: [
                                    "Theorem: L is regular ⟺ ≡L has finitely many equivalence classes.",
                                    "Proof (→): If L is regular, some DFA M recognizes it. States of minimal DFA correspond to equivalence classes of ≡L, so finitely many classes.",
                                    "Proof (←): If ≡L has k equivalence classes, construct DFA with k states (one per class). Transitions and final states are well-defined.",
                                    "Application: For L = {aⁿbⁿ}, consider S = {aⁿ : n ≥ 0}. For i ≠ j, aⁱ and aʲ are distinguished by bⁱ (aⁱbⁱ ∈ L but aʲbⁱ ∉ L). Infinitely many classes → L not regular."
                                ]
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
                                <p className="text-xs font-black text-indigo-600 mb-2 uppercase tracking-widest">{item.q}</p>
                                <p className="text-sm font-bold text-slate-800 mb-4 leading-relaxed font-serif italic">{item.text}</p>
                                {item.subtext && <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-3 rounded-xl border border-dashed">{item.subtext}</p>}
                                <button
                                    onClick={() => toggleSolution(item.id)}
                                    className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4 flex items-center gap-2 hover:text-emerald-800 transition-colors"
                                >
                                    {showSolution[item.id] ? "Hide Marking Scheme & Answer" : "Show Marking Scheme & Model Answer"}
                                </button>
                                {showSolution[item.id] && (
                                    <div className="space-y-4">
                                        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                                            <p className="text-[10px] font-black uppercase text-emerald-800 mb-3 tracking-widest">Marking Scheme:</p>
                                            <ul className="text-xs text-emerald-900/70 space-y-1">
                                                {item.scheme.map((s, i) => <li key={i} className="flex gap-2"><span>-</span> {s}</li>)}
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-2xl p-5 border-2 border-indigo-100 shadow-xl ring-4 ring-indigo-50">
                                            <p className="text-[10px] font-black uppercase text-indigo-600 mb-3 tracking-widest">Model Answer:</p>
                                            <div className="text-xs text-slate-700 font-medium space-y-3 leading-relaxed">
                                                {item.answer.map((a, i) => <p key={i}>{a}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced Challenge Problems */}
            <section className="content-section mb-16">
                <div className="flex items-center gap-4 mb-10">
                    <div className="bg-rose-600 p-3 rounded-2xl text-white shadow-lg shadow-rose-200">
                        <Award className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase">Advanced Challenge Problems</h2>
                        <p className="text-slate-500 font-medium">Solve these high-difficulty problems to achieve true mastery.</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            id: "challenge-1",
                            category: "Non-Regularity Proof",
                            title: "Myhill-Nerode & Non-Regular Languages",
                            q: "Use the Myhill-Nerode theorem to show that L = {ww : w ∈ {0,1}*} is not regular.",
                            steps: [
                                "Consider the set of strings S = {0ⁿ1 : n ≥ 0} = {1, 01, 001, 0001, ...}.",
                                "For any i ≠ j, we show 0ⁱ1 and 0ʲ1 are distinguishable. Take z = 0ⁱ1.",
                                "Then 0ⁱ1 · 0ⁱ1 = 0ⁱ10ⁱ1 ∈ L (it's of the form ww with w = 0ⁱ1).",
                                "But 0ʲ1 · 0ⁱ1 = 0ʲ10ⁱ1 ∉ L (since j ≠ i, this cannot be written as ww).",
                                "Therefore, each string 0ⁿ1 is in a different equivalence class, giving infinitely many classes.",
                                "By Myhill-Nerode, L is not regular."
                            ],
                            insight: "We found an infinite set of pairwise distinguishable strings, proving non-regularity."
                        },
                        {
                            id: "challenge-2",
                            category: "Theoretical Bound",
                            title: "Minimal DFA Bounds",
                            q: "Prove that if two DFAs M₁ and M₂ with n₁ and n₂ states respectively recognize the same language, then there exists a DFA with at most min(n₁, n₂) states that recognizes that language.",
                            steps: [
                                "By the Myhill-Nerode theorem, there exists a unique (up to isomorphism) minimal DFA M for the language L.",
                                "Let M have k states. By definition of minimality, k ≤ n₁ and k ≤ n₂ (otherwise M₁ or M₂ would have fewer states than the minimal DFA, contradiction).",
                                "Therefore k ≤ min(n₁, n₂).",
                                "The minimal DFA M has at most min(n₁, n₂) states and recognizes L."
                            ],
                            insight: "The minimal DFA serves as the upper bound on states needed."
                        },
                        {
                            id: "challenge-3",
                            category: "Combinatorial State Count",
                            title: "Divisibility Constraints & Cross Product",
                            q: "Find the minimum number of states for a DFA recognizing L = {w ∈ {0,1}* : number of 0s is divisible by 2 and number of 1s is divisible by 3}.",
                            steps: [
                                "A DFA for 'number of 0s mod 2' requires 2 states (q₀, q₁).",
                                "A DFA for 'number of 1s mod 3' requires 3 states (p₀, p₁, p₂).",
                                "The combined DFA (intersection) is formed using the product construction, with states as pairs (qᵢ, pⱼ).",
                                "The number of states in the product DFA is 2 × 3 = 6.",
                                "Since the languages are independent and the moduli are coprime, these 6 states are pairwise distinguishable."
                            ],
                            insight: "State count for independent properties is the product of their individual minimal states."
                        },
                        {
                            id: "challenge-4",
                            category: "Formal Proof",
                            title: "Quotient Construction & Isomorphism",
                            q: "Prove that the quotient construction L/≡ gives the unique minimal DFA.",
                            steps: [
                                "Myhill-Nerode states that every regular language L has a finite number of equivalence classes under ≡L.",
                                "The quotient construction creates one state for each equivalence class [x].",
                                "Transitions [x] → [xa] are well-defined because if x ≡L y, then xa ≡L ya.",
                                "Any DFA recognizing L must have at least as many states as there are equivalence classes (Myhill-Nerode).",
                                "Since the quotient DFA has exactly one state per class, it is minimal."
                            ],
                            insight: "The states of the minimal DFA are essentially the 'irreducible memory' of the language."
                        }
                    ].map((prob, idx) => (
                        <div key={idx} className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-indigo-100/50 transition-all border-b-8 border-b-rose-100">
                            <div className="bg-slate-50 p-4 px-10 flex justify-between items-center text-slate-900 border-b border-slate-100">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">{prob.category}</p>
                                <span className="bg-rose-50 text-rose-600 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shrink-0 border border-rose-100 font-sans">HARD PROBLEM</span>
                            </div>
                            <div className="p-8">
                                <h4 className="text-lg font-black text-slate-900 mb-4">{prob.title}</h4>
                                <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-xl mb-6">
                                    <p className="text-sm font-bold text-rose-900 leading-relaxed italic font-serif leading-7">{prob.q}</p>
                                </div>
                                <button
                                    onClick={() => toggleSolution(prob.id)}
                                    className="text-[11px] font-black uppercase tracking-widest text-indigo-600 mb-6 flex items-center gap-2 hover:text-indigo-800 transition-colors"
                                >
                                    {showSolution[prob.id] ? "Hide Solution" : "Show Full Solution"}
                                </button>
                                {showSolution[prob.id] && (
                                    <div className="space-y-6">
                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                            <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Step-by-Step Proof:</p>
                                            <ul className="space-y-4">
                                                {prob.steps.map((step, i) => (
                                                    <li key={i} className="flex gap-4 items-start">
                                                        <span className="bg-indigo-600 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-indigo-100">{i + 1}</span>
                                                        <p className="text-xs text-slate-700 leading-relaxed font-medium">{step}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-xl flex items-center gap-4">
                                            <div className="bg-emerald-500 p-2 rounded-lg text-white shrink-0">
                                                <Info className="w-4 h-4" />
                                            </div>
                                            <p className="text-xs font-black text-emerald-900 italic tracking-tight">Key Insight: {prob.insight}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Reference Cheat Sheet */}
            <section className="content-section mb-16">
                <div className="bg-white border-2 border-indigo-100 shadow-2xl rounded-[3rem] overflow-hidden">
                    <div className="bg-indigo-50 p-6 px-10 text-indigo-900 flex items-center justify-between border-b border-indigo-100">
                        <h3 className="font-extrabold uppercase tracking-[0.3em] text-sm flex items-center gap-3 italic">
                            <BookOpen className="w-5 h-5 text-indigo-600" />
                            Quick Reference Cheat Sheet
                        </h3>
                        <div className="flex gap-4">
                            {['PDF', 'PRINT'].map(btn => (
                                <span key={btn} className="bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">{btn}</span>
                            ))}
                        </div>
                    </div>
                    <div className="p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-6">
                                <h4 className="font-black text-indigo-600 text-[11px] uppercase tracking-tighter border-b pb-2">Definitions</h4>
                                <ul className="space-y-3 text-[11px] font-medium leading-relaxed italic text-slate-500">
                                    <li><strong>Equivalent:</strong> δ̂(p,w) ∈ F ⇔ δ̂(q,w) ∈ F</li>
                                    <li><strong>Distinguishable:</strong> Outcome differs for some w.</li>
                                    <li><strong>Quotient:</strong> Grouping equivalent states.</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="font-black text-indigo-600 text-[11px] uppercase tracking-tighter border-b pb-2">Algorithm Quick Steps</h4>
                                <ul className="space-y-3 text-[11px] font-bold text-slate-700">
                                    <li>1. Remove Unreachable (BFS)</li>
                                    <li>2. Mark (F, Non-F) pairs</li>
                                    <li>3. Propagate marks iteratively</li>
                                    <li>4. Merge unmarked into super-states</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group border-2 border-dashed border-indigo-200 hover:border-indigo-600 transition-colors">
                                <BookOpen className="w-12 h-12 text-indigo-600 mb-4 animate-bounce" />
                                <p className="text-[11px] font-black uppercase text-slate-900 tracking-widest leading-none mb-2">Module 2.6 complete</p>
                                <p className="text-[9px] text-indigo-400 uppercase font-black tracking-widest leading-none">Minimization Mastered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-20 border-t text-center opacity-30 mt-20">
                <p className="text-[11px] font-black uppercase tracking-[2em] text-slate-900">Unit 2.6 | State Minimization | End</p>
            </div>
        </div>
    );
};

export default Module2_6;
