'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';
import {
    Target, Shield, Brain, Layout, BookOpen, Info, Zap, Trophy,
    Award, Terminal, HelpCircle, FileText, CheckCircle2,
    MessageSquare, AlertCircle, PlayCircle, BookCheck,
    ChevronDown, ChevronUp, CheckCircle, Search, Terminal as TerminalIcon,
    Table, Book, Beaker, GraduationCap, Database
} from 'lucide-react';

const Module2_3: React.FC = () => {
    // Navigation/Toggle states
    const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

    const toggleSolution = (id: string) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 bg-white text-slate-900 font-sans selection:bg-indigo-100">
            {/* Header Area */}
            <header className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-indigo-100 italic">Module 2.3</span>
                    <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                    PROVING LANGUAGES <br />
                    <span className="text-indigo-600 italic">NOT TO BE REGULAR</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed italic">
                    Master the Pumping Lemma, Closure Properties, and the Myhill-Nerode theorem to establish the fundamental boundaries of finite automata.
                </p>
            </header>

            {/* What You'll Master Section */}
            <section className="mb-24">
                <div className="bg-slate-50 rounded-[3rem] p-12 border-2 border-slate-100 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900 leading-none italic">📋 LEARNING OBJECTIVES</h2>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Theoretical Computation Mastery</p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "State the Pumping Lemma", desc: "Define regularity conditions and constraints with mathematical precision." },
                                { title: "Adversarial Game Proofs", desc: "Construct rigorous non-regularity arguments using the 2-player game framework." },
                                { title: "Closure Property Analysis", desc: "Use indirect proof techniques to show non-regularity via intersection/complement." },
                                { title: "Myhill–Nerode Theorem", desc: "Demonstrate non-regularity via infinitely many distinguishable equivalence classes." }
                            ].map((obj, i) => (
                                <div key={i} className="flex gap-4 group/item">
                                    <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 group-hover/item:border-indigo-300 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="font-black text-sm text-slate-800 mb-1">{obj.title}</p>
                                        <p className="text-xs text-slate-500 leading-relaxed italic">{obj.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Topic Matters Section */}
            <section className="mb-24 px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shadow-lg shadow-amber-50">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-black uppercase tracking-tighter">WHY THIS <br />TOPIC MATTERS</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium italic pr-12">
                            Imagine you are a security engineer and someone hands you a specification saying: "Our authentication system uses a finite automaton to validate inputs." Should you trust it?
                        </p>
                        <div className="space-y-4">
                            <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 group hover:bg-amber-50 transition-colors">
                                <p className="text-sm font-bold text-amber-900 leading-relaxed">
                                    "If you know that such languages are not regular, you immediately know the claim is false — no DFA or NFA can do the job, no matter how many states it has."
                                </p>
                            </div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest pl-2">
                                — Core Principle of Decidability
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        {[
                            { icon: Search, title: "Compiler Design", desc: "Justifying why lexers cannot handle nested structures like balanced braces." },
                            { icon: Shield, title: "Security Analysis", desc: "Proving when input validation exceeds regex capabilities." },
                            { icon: Layout, title: "Protocol Verification", desc: "Showing properties requiring PDAs or Turing Machines." },
                            { icon: Database, title: "Database Theory", desc: "Establishing query bounds for regular language patterns." }
                        ].map((app, i) => (
                            <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                <app.icon className="w-6 h-6 text-indigo-400 mb-4" />
                                <p className="text-[10px] font-black uppercase text-indigo-600 mb-2 tracking-widest">{app.title}</p>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="mb-24">
                <div className="bg-slate-50 border-2 border-slate-100 rounded-[4rem] p-16 text-slate-900 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-500 opacity-5 rounded-full -mr-64 -mt-64 blur-[100px] group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-10">
                                <BookOpen className="w-8 h-8 text-indigo-600" />
                                <h2 className="text-4xl font-black uppercase tracking-tighter italic font-serif">Deep Dive: The Limits of Regularity</h2>
                            </div>
                            <div className="space-y-8 text-lg font-medium leading-relaxed opacity-90 italic">
                                <p>
                                    A language is regular if it can be recognized by a DFA. The key intuition is that a DFA has <span className="text-indigo-600 underline decoration-2 underline-offset-4">finite memory</span>: its entire state is encoded in its current position.
                                </p>
                                <p>
                                    When we say a language is NOT regular, we mean: no DFA of any finite size can recognize it. Not 10 states, not 10 million. This profound negative result is where theoretical CS reveals its power.
                                </p>
                            </div>

                            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Pigeonhole Principle</h4>
                                    <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl">
                                        <p className="text-xs italic leading-relaxed text-slate-600">
                                            "After k+1 steps reading 'a', some state qᵢ must repeat. The DFA 'forgets' the exact count and becomes trapped in a loop."
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4 flex flex-col justify-end">
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black border-2 ${i === 3 ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' : 'border-slate-200 text-slate-400'}`}>q{i}</div>
                                        ))}
                                    </div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">DFA State Traversal Simulation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proof Methods Table */}
            <section className="mb-24">
                <h3 className="text-3xl font-black mb-10 border-b-4 pb-4 border-slate-100 flex justify-between items-end italic uppercase text-slate-800">
                    Overview of Proof Methods
                    <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] mb-1">Methodology Analysis</span>
                </h3>
                <div className="overflow-x-auto rounded-[2rem] border-2 border-slate-50 shadow-sm overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-[10px] uppercase font-black tracking-widest text-slate-400 border-b">
                            <tr>
                                <th className="p-8">Method</th>
                                <th className="p-8">When to Use</th>
                                <th className="p-8">Difficulty</th>
                                <th className="p-8">Key Insight</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 italic">
                            {[
                                { method: "Pumping Lemma", use: "General cases, default first attempt", diff: "Medium", insight: "Long strings MUST be 'pumpable'" },
                                { method: "Closure Properties", use: "Known regular operations on L", diff: "Easy–Medium", insight: "Regular class is closed" },
                                { method: "Myhill–Nerode", use: "Sufficient & Necessary proof", diff: "Hard", insight: "Infinite strings = Infinite states" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-8 font-black text-slate-900">{row.method}</td>
                                    <td className="p-8 text-xs text-slate-500 font-medium">{row.use}</td>
                                    <td className="p-8">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${row.diff === 'Hard' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>{row.diff}</span>
                                    </td>
                                    <td className="p-8 text-xs text-slate-600 font-bold group-hover:text-indigo-600 transition-colors tracking-tight">{row.insight}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Pumping Lemma Hero Block */}
            <section className="mb-24">
                <div className="bg-indigo-600 rounded-[4rem] p-16 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-200 mb-6 italic">The Main Weapon</h3>
                            <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter">THE PUMPING <br />LEMMA</h2>
                            <div className="space-y-6 text-xl italic font-serif opacity-90 leading-relaxed bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
                                "If L is a regular language, then there exists an integer <span className="font-sans font-black text-indigo-300">p ≥ 1</span> such that every string <span className="font-sans font-black text-indigo-300">s ∈ L</span> with <span className="font-sans font-black text-indigo-300">|s| ≥ p</span> can be written as <span className="font-sans font-black text-indigo-300 italic">s = xyz</span> satisfying..."
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: "(1) |y| ≥ 1", desc: "Segment y is non-empty" },
                                    { label: "(2) |xy| ≤ p", desc: "xy lies within the pumping length" },
                                    { label: "(3) ∀ i ≥ 0, xyⁱz ∈ L", desc: "Multiple copies of y stay in the language" }
                                ].map((cond, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group/cond hover:bg-white/10 transition-all cursor-default overflow-hidden relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-400 opacity-20 group-hover/cond:opacity-100 transition-opacity"></div>
                                        <span className="font-black text-xl italic tracking-tighter">{cond.label}</span>
                                        <span className="text-xs font-medium opacity-60 group-hover/cond:opacity-100 italic transition-opacity">{cond.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-amber-500/20 rounded-2xl border border-amber-500/30 flex gap-4">
                                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                                <p className="text-[11px] font-bold text-amber-200 italic leading-relaxed uppercase tracking-tight">
                                    The pumping lemma is a NECESSARY condition, not a sufficient one. Some non-regular languages satisfy it!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adversarial Game Frame */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <Terminal className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic">The Adversarial Game Framework</h2>
                </div>
                <div className="bg-slate-50 border-2 border-slate-100 rounded-[4rem] p-16 text-slate-800 shadow-xl relative overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        {/* Adversary Role */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shadow-lg shadow-rose-50">
                                    <Shield className="w-6 h-6 rotate-180" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase text-rose-600 leading-none">THE ADVERSARY</h4>
                                    <p className="text-[10px] font-black text-slate-400 tracking-widest mt-1">THE "HARD" MOVES</p>
                                </div>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Moves 1: Adversary chooses pumping length p (unknown to us)",
                                    "Moves 2: Adversary splits s = xyz (picks the split to block our proof)"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4 items-start group/li">
                                        <span className="bg-rose-600 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-rose-200 group-hover/li:scale-110 transition-transform italic">{i + 1}</span>
                                        <p className="text-sm font-bold text-slate-700 italic leading-relaxed uppercase tracking-tight">{step}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 italic text-xs text-rose-800 shadow-inner">
                                "The adversary is clever. They will pick p and the xyz split specifically to make your string s difficult to pump."
                            </div>
                        </div>

                        {/* Your Role */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg shadow-indigo-50">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase text-indigo-600 leading-none">YOUR MOVE</h4>
                                    <p className="text-[10px] font-black text-slate-400 tracking-widest mt-1">THE STRATEGIC COUNTER</p>
                                </div>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Move 1: You choose string s ∈ L with |s| ≥ p (must work for ANY p)",
                                    "Move 2: You choose exponent i ≥ 0 where xyⁱz ∉ L (just need ONE i)"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4 items-start group/li">
                                        <span className="bg-indigo-600 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-indigo-200 group-hover/li:scale-110 transition-transform italic">{i + 1}</span>
                                        <p className="text-sm font-bold text-slate-700 italic leading-relaxed uppercase tracking-tight">{step}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 italic text-xs text-indigo-800 shadow-inner">
                                "To win (prove non-regularity), you must show that NO MATTER what p and split the adversary picks, you find an i that leaves the language."
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-16 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                            <p className="text-sm font-black uppercase text-slate-900 tracking-tighter leading-none italic">WIN CONDITION: L is NOT regular</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-white px-4 py-2 border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">GAME START</span>
                            <span className="bg-white px-4 py-2 border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">XYZ DECOMP</span>
                            <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100 italic cursor-pointer hover:bg-indigo-700 transition-colors">START PROOF</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proof Template */}
            <section className="mb-24">
                <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity"></div>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3 space-y-4">
                            <h2 className="text-2xl font-black uppercase tracking-[0.2em] italic underline decoration-indigo-200 decoration-8 underline-offset-[-2px] mb-8">Universal Proof Template</h2>
                            <p className="text-xs text-slate-500 font-medium italic leading-relaxed pr-8">
                                Use this standard structure for university exams and GATE to ensure maximum marks and logical clarity.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest shadow-inner">
                                STEP 1: ASSUME <br />
                                STEP 2: CHOOSE s <br />
                                STEP 3: ANALYZE ALL SPLITS <br />
                                STEP 4: SHOW CONTRADICTION <br />
                                STEP 5: QED
                            </div>
                        </div>
                        <div className="lg:w-2/3 bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] p-10 text-indigo-900 font-mono text-[11px] leading-relaxed shadow-inner relative group overflow-hidden">
                            <div className="absolute top-4 right-8 bg-indigo-500/10 text-indigo-600 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all cursor-default overflow-hidden">PROOF_TEMPLATE.TXT</div>
                            <pre className="relative z-10 whitespace-pre-wrap">
                                {`1. Assume for contradiction that L is regular. 
   By Pumping Lemma, there exists a pumping length p >= 1.

2. Choose string s = [EXPR IN TERMS OF P].
   Note: s must be in L and |s| >= p.

3. For ANY split s = xyz satisfying:
   - |y| >= 1
   - |xy| <= p
   
   Identify the structure of y based on |xy| <= p.

4. For this split, choose i = [0 or 2].
   Show that xyⁱz ∉ L. 
   (Calculate exact number of characters to break symmetry/balance)

5. CONTRADICTION: Condition (3) fails. 
   Therefore, L is NOT regular. □`}
                            </pre>
                            <div className="absolute bottom-6 right-8 text-indigo-500/20 font-serif italic text-4xl">∎ Q.E.D.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Worked Examples */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <BookCheck className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic">Worked Examples — Classic Proofs</h2>
                </div>

                <div className="space-y-12">
                    {[
                        {
                            id: "ex-1",
                            title: "L = {aⁿbⁿ | n ≥ 0} [The Classic]",
                            q: "Prove that strings with equal a's followed by equal b's is not regular.",
                            s: "s = aᵖbᵖ",
                            logic: "Condition |xy| ≤ p forces y to consist entirely of 'a's. If we pump with i=2, we get more 'a's than 'b's.",
                            insight: "Pumping adds extra a's but not extra b's, destroying the balance.",
                            color: "indigo"
                        },
                        {
                            id: "ex-2",
                            title: "L = {aⁿ | n is a perfect square}",
                            q: "Prove that a language where lengths follow a quadratic sequence is not regular.",
                            s: "s = aᵖ²",
                            logic: "If s = xyz, and |y| = k where 1 ≤ k ≤ p, then xy²z has length p²+k, which is strictly between p² and (p+1)².",
                            insight: "The gaps between squares grow; pumping a fixed length can't 'land' precisely on the next square.",
                            color: "emerald"
                        }
                    ].map((ex, i) => (
                        <div key={ex.id} className="bg-white border-2 border-slate-100 rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                            <div className="bg-slate-50 p-6 px-12 flex justify-between items-center border-b border-slate-100">
                                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight italic font-serif leading-none">{ex.title}</h3>
                                <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-${ex.color}-600 bg-${ex.color}-100 tracking-widest italic`}>Worked Solution</div>
                            </div>
                            <div className="p-12 text-slate-700 space-y-8">
                                <div className="flex gap-4 items-start">
                                    <MessageSquare className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                                    <p className="text-lg font-bold italic leading-relaxed text-slate-800">{ex.q}</p>
                                </div>

                                <button
                                    onClick={() => toggleSolution(ex.id)}
                                    className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 flex items-center gap-2 hover:translate-x-1 transition-transform"
                                >
                                    {showSolution[ex.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    {showSolution[ex.id] ? "HIDE FULL MATHEMATICAL PROOF" : "VIEW FULL MATHEMATICAL PROOF"}
                                </button>

                                {showSolution[ex.id] && (
                                    <div className="space-y-6 pt-4 border-t border-slate-50">
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest tracking-[0.5em]">Decomposition Analysis</p>
                                            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                                                <div className="bg-white px-6 py-4 rounded-xl border-2 border-indigo-100 shadow-sm font-mono text-sm text-indigo-600 font-bold">
                                                    Chosen s: {ex.s}
                                                </div>
                                                <div className="hidden md:block w-32 h-px bg-slate-200 relative">
                                                    <div className="absolute -top-1 right-0 w-2 h-2 bg-slate-200 rotate-45"></div>
                                                </div>
                                                <div className="bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-xl text-slate-700 font-mono text-[11px] italic leading-relaxed max-w-sm">
                                                    {ex.logic}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 italic">
                                            <Info className="w-5 h-5 text-indigo-400 mt-1" />
                                            <p className="text-xs font-bold text-indigo-900 leading-relaxed uppercase tracking-tight">Key Insight: {ex.insight}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery of Non-Regular Languages */}
            <section className="mb-24">
                <h3 className="text-3xl font-black mb-10 border-b-4 pb-4 border-slate-100 flex justify-between items-end italic uppercase text-slate-800">
                    Non-Regular Languages Gallery
                    <Table className="w-8 h-8 text-slate-400 mb-1" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { lang: "{ww | w ∈ {a,b}*}", name: "Copy Language", reason: "Needs unbounded memory of first half", method: "Pumping Lemma" },
                        { lang: "{aⁿ | n is prime}", name: "Primes", reason: "No simple periodic pattern", method: "Pumping i=m+1" },
                        { lang: "{w | #a = #b}", name: "Equal Counts", reason: "Symmetry/Balance requires counting", method: "Closure Props" },
                        { lang: "{wwᴿ | w ∈ Σ*}", name: "Palindromes", reason: "Unbounded LIFO matching", method: "Pumping Lemma" },
                        { lang: "{aⁿbⁿcⁿ | n ≥ 0}", name: "Triple Sync", reason: "Two-way matching exceeds FA power", method: "Pumping Lemma" },
                        { lang: "{parentheses}", name: "Nesting", reason: "Unbounded stack dependency", method: "Myhill-Nerode" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border-2 border-slate-50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border-b-8 border-b-indigo-500 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rounded-full -mr-8 -mt-8 group-hover:bg-indigo-50 transition-colors"></div>
                            <p className="text-[10px] font-black text-indigo-600 mb-1 uppercase tracking-widest">{item.name}</p>
                            <h4 className="text-lg font-black text-slate-900 mb-6 font-mono tracking-tighter">{item.lang}</h4>
                            <div className="space-y-3 pb-4 mb-4 border-b border-slate-50">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Core Challenge:</p>
                                <p className="text-[11px] text-slate-500 font-medium italic leading-relaxed">{item.reason}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-100 px-3 py-0.5 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-tighter group-hover:bg-indigo-600 group-hover:text-white transition-all italic">{item.method}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Lab Exercise Section */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <Beaker className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic">Lab Exercise: Pumping Checker</h2>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] p-12 text-slate-800 shadow-xl relative overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 space-y-6">
                            <h3 className="text-2xl font-black uppercase italic leading-none">BUILDING A <br />PROOF-CHECKER</h3>
                            <p className="text-[10px] font-black tracking-[0.3em] text-indigo-400 uppercase">Computational Automata</p>
                            <div className="h-px bg-white/10 w-full"></div>
                            <p className="text-xs text-white/60 font-medium italic leading-relaxed">
                                Write a program to automate the "Your Move" part of the pumping lemma game—finding the witness i that breaks membership for every split.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-[10px] font-black text-indigo-300">
                                    <TerminalIcon className="w-4 h-4" /> 3 Languages to Implement
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-black text-indigo-300">
                                    <Search className="w-4 h-4" /> Comprehensive i-Testing
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-black text-indigo-300">
                                    <Layout className="w-4 h-4 text-emerald-400" /> Auto-Report Generation
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-inner group-hover:border-indigo-500/20 transition-all transition-duration-500">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                                </div>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest font-mono">pumping_lemma.py</span>
                            </div>
                            <pre className="text-indigo-900 font-mono text-[11px] leading-relaxed relative z-10 overflow-x-auto whitespace-pre">
                                {`def is_in_an_bn(s):
    n = len(s) // 2
    return s == 'a'*n + 'b'*n

def verify_pumping(lang_fn, x, y, z, p):
    # Try i=0 up to 2p+5 to find a witness
    for i in range(2 * p + 5):
        s_pumped = x + (y * i) + z
        if not lang_fn(s_pumped):
            return i, s_pumped
    return None

# ENUMERATE ALL ADVERSARY SPLITS
# for x,y,z in all_valid_splits(s, p):
#    witness = verify_pumping(lang, x, y, z, p)`}
                            </pre>
                            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                                <div className="text-[9px] text-slate-300 font-black uppercase tracking-widest leading-none">Status: Ready for Deployment</div>
                                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/10 italic hover:bg-indigo-500 transition-colors">Run Simulator</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Resources Area */}
            <section className="mb-24">
                <h3 className="text-3xl font-black mb-10 border-b-4 pb-4 border-slate-100 flex justify-between items-end uppercase text-slate-800 italic leading-none">
                    Digital Learning Resources
                    <PlayCircle className="w-10 h-10 text-indigo-600 opacity-20" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { id: "84oNUttWlN4", title: "Pumping Lemma Mastery", author: "Neso Academy", dur: "15:20", desc: "Global standard for understanding the Pumping Lemma logic." },
                        { id: "jN8zvENdjBg", title: "Myhill–Nerode Deep Dive", author: "Gate Smashers", dur: "12:45", desc: "Rigorous explanation of distinguishable strings for university exams." },
                        { id: "upu_TeZImN0", title: "Proof Examples Lab", author: "Jenny's Lectures", dur: "18:10", desc: "Solving classic problems like perfect squares and copy languages." }
                    ].map(v => (
                        <div key={v.id} className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border-b-8 border-b-indigo-500">
                            <div className="aspect-video bg-slate-100 relative">
                                <iframe className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" src={`https://www.youtube.com/embed/${v.id}`} allowFullScreen></iframe>
                                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-slate-900 shadow-xl flex items-center gap-2">
                                    <PlayCircle className="w-3 h-3 text-red-600" /> {v.dur}
                                </div>
                            </div>
                            <div className="p-10">
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 font-mono shrink-0">{v.author}</p>
                                <h4 className="text-lg font-black text-slate-900 mb-4 leading-[1.1] group-hover:text-indigo-600 transition-colors">{v.title}</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-6 italic">{v.desc}</p>
                                <div className="pt-6 border-t border-slate-50">
                                    <button className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase hover:text-indigo-600 transition-colors flex items-center gap-2 italic">Mark as Watched <CheckCircle className="w-3 h-3 text-emerald-500" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Module Quiz */}
            <section className="mb-24">
                <h2 className="text-2xl font-bold mb-6">Module 2.3 Mastery Quiz</h2>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <Quiz
                        title="Pumping Lemma Quiz"
                        questions={[
                            {
                                question: "What is the pumping length p intuitively equal to in a DFA?",
                                options: ["Shortest string length", "Number of states in minimal DFA", "Alphabet size", "Diameter of the graph"],
                                correctAnswer: 1,
                                explanation: "The pumping length p relates to the number of states in the DFA. If a string is longer than p, it must revisit a state, creating a 'pumpable' loop."
                            },
                            {
                                question: "For L = {aᵖ | p is prime}, which i value breaks the prime length for s=aᵐ?",
                                options: ["i=0", "i=2", "i=m+1", "i=1"],
                                correctAnswer: 2,
                                explanation: "Setting i=m+1 gives |xyᵐ⁺¹z| = |xz| + (m+1)|y| = m + m|y| = m(1+|y|), which is composite (not prime) since both factors > 1."
                            },
                            {
                                question: "Which of these is NOT regular?",
                                options: ["(a+b)*", "a*b*", "{aⁿbᵐ | n,m ≥ 1}", "{aⁿbⁿ | n ≥ 0}"],
                                correctAnswer: 3,
                                explanation: "{aⁿbⁿ | n ≥ 0} requires matching equal counts of a's and b's, which needs infinite memory — impossible for finite automata."
                            },
                            {
                                question: "The Pumping Lemma conditions require all of these EXCEPT:",
                                options: ["|y| ≥ 1", "|xy| ≤ p", "xyⁱz ∈ L for all i ≥ 0", "|xz| ≤ p"],
                                correctAnswer: 3,
                                explanation: "The three conditions are: |y| ≥ 1, |xy| ≤ p, and xyⁱz ∈ L for all i ≥ 0. The condition |xz| ≤ p is NOT part of the lemma."
                            },
                            {
                                question: "Myhill-Nerode gives what kind of condition for regularity?",
                                options: ["Necessary only", "Sufficient only", "Necessary and Sufficient", "Approximate"],
                                correctAnswer: 2,
                                explanation: "The Myhill-Nerode theorem provides a necessary AND sufficient condition: a language is regular iff it has finitely many equivalence classes."
                            }
                        ]}
                        subject="FLAT"
                        unitId={2}
                        moduleId={3}
                    />
                </div>
            </section>

            {/* Quick Reference Cheat Sheet Grid */}
            <section className="mb-24">
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] p-12 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-10 w-24 h-24 bg-indigo-500 opacity-10 rounded-full blur-2xl"></div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 flex items-center gap-3 italic">
                        <Book className="w-6 h-6 text-indigo-600" />
                        Quick Reference Cheat Sheet
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Pumping Lemma", items: ["|y| ≥ 1 (must be non-empty)", "|xy| ≤ p (within start block)", "∀i: xyⁱz ∈ L (stays in language)"] },
                            { title: "Distinguishable Strings", items: ["x and y are distinguishable if:", "∃z such that xz ∈ L XOR yz ∈ L", "Used in Myhill-Nerode theorem"] },
                            { title: "Classic Non-Regular", items: ["{aⁿbⁿ}", "{aⁿ | n=k²}", "{aᵖ | p is prime}", "Palindromes, Duplicate words"] }
                        ].map((card, i) => (
                            <div key={i} className="space-y-4">
                                <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest border-l-4 border-indigo-600 pl-4">{card.title}</h4>
                                <ul className="space-y-3">
                                    {card.items.map((item, j) => (
                                        <li key={j} className="text-xs text-slate-500 italic font-medium leading-relaxed opacity-80 flex gap-2">
                                            <span className="text-indigo-400">»</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exam Excellence Section */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <GraduationCap className="w-10 h-10 text-indigo-600" />
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">University Exam Excellence</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white border-2 border-slate-200 p-10 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 font-black text-[9px] text-slate-200 uppercase tracking-widest">Q1 - 5 Marks</div>
                        <h4 className="text-lg font-black text-slate-900 mb-4 font-serif italic mb-8 border-b pb-4 border-slate-50">"State the Pumping Lemma for regular languages. What is its primary use in formal language theory?"</h4>
                        <button
                            onClick={() => toggleSolution('exam-1')}
                            className="text-[10px] font-black text-indigo-600 uppercase tracking-widest tracking-[0.4em] flex items-center gap-2 hover:translate-x-1 transition-all italic"
                        >
                            Show Model Answer
                        </button>
                        {showSolution['exam-1'] && (
                            <div className="mt-8 p-8 bg-indigo-50/50 rounded-2xl border-2 border-indigo-100 text-xs italic font-medium leading-[1.8] text-slate-700 shadow-inner">
                                <strong>Answer:</strong> The pumping lemma states that if L is a regular language, there exists a pumping length p such that any string s with length ≥ p can be split into xyz where...
                                its primary use is to prove a language is <strong>NOT</strong> regular by contradiction (contrapositive application).
                            </div>
                        )}
                    </div>
                    <div className="bg-white border-2 border-slate-200 p-10 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 font-black text-[9px] text-slate-200 uppercase tracking-widest">Q2 - 10 Marks</div>
                        <h4 className="text-lg font-black text-slate-900 mb-4 font-serif italic mb-8 border-b pb-4 border-slate-50">"Compare Pumping Lemma and Myhill-Nerode. When would you prefer the latter?"</h4>
                        <button
                            onClick={() => toggleSolution('exam-2')}
                            className="text-[10px] font-black text-indigo-600 uppercase tracking-widest tracking-[0.4em] flex items-center gap-2 hover:translate-x-1 transition-all italic"
                        >
                            Show Complete Solution
                        </button>
                        {showSolution['exam-2'] && (
                            <div className="mt-8 p-8 bg-indigo-50/50 rounded-2xl border-2 border-indigo-100 text-xs italic font-medium leading-[1.8] text-slate-700 shadow-inner">
                                <strong>Key Comparison:</strong> The Pumping Lemma is a necessary condition, while Myhill-Nerode is both <strong>necessary and sufficient</strong>. Myhill-Nerode is preferred for languages that satisfy the pumping lemma but are still not regular (e.g., {'L = {aⁿbⁿcⁿ ∪ {aⁱbʲ | i ≠ j}}'}).
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Final Progress Footer */}
            <footer className="mt-20 py-20 border-t border-slate-100">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl rotate-45 transform hover:rotate-0 transition-transform duration-700">
                        <Trophy className="w-8 h-8 -rotate-45 group-hover:rotate-0" />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-[1em]">Unit 2 | Module 2.3 COMPLETE</p>
                    <h4 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase mb-2 leading-none">THEORETICAL BOUNDARIES <span className="text-indigo-600 underline">MASTERED</span></h4>
                    <p className="text-xs text-slate-500 font-medium italic opacity-60">You have successfully reduced the infinite to the finite.</p>
                </div>
            </footer>
        </div>
    );
};

export default Module2_3;
