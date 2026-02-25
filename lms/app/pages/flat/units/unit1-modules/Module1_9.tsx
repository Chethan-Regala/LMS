'use client';
import React, { useState } from 'react';
import {
    Trophy,
    Target,
    BookOpen,
    Zap,
    CheckCircle2,
    ShieldCheck,
    Brain,
    Terminal,
    FileCode,
    Layers,
    Award,
    ArrowRight,
    ClipboardCheck
} from 'lucide-react';
import Quiz from '../../components/Quiz';

const Module1_9: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'review' | 'synthesis' | 'exam'>('review');

    const quizQuestions = [
        {
            question: "Which of the following formalisms can describe exactly the set of regular languages?",
            options: [
                "DFA and NFA only",
                "DFA, NFA, ε-NFA, and Regular Expressions",
                "Context-Free Grammars and DFA",
                "Pushdown Automata and Regular Grammars"
            ],
            correctAnswer: 1,
            explanation: "Kleene's Theorem proves that DFAs, NFAs, ε-NFAs, and Regular Expressions are all equivalent in expressive power, each defining the class of regular languages."
        },
        {
            question: "What is the maximum number of states in a DFA equivalent to an NFA with 'n' states?",
            options: ["n states", "n² states", "2ⁿ states", "n! states"],
            correctAnswer: 2,
            explanation: "Using the Subset Construction (Power Set Construction) algorithm, every subset of NFA states can potentially become a state in the DFA, leading to a maximum of 2ⁿ states."
        },
        {
            question: "Which statement about Moore and Mealy machines is CORRECT?",
            options: [
                "Mealy machines are theoretically more powerful than Moore machines",
                "Moore machine outputs are associated with transitions",
                "Mealy machine outputs depend on both the current state and the input symbol",
                "Moore machines cannot be converted to Mealy machines"
            ],
            correctAnswer: 2,
            explanation: "In a Mealy machine, the output function λ maps (State × Input) → Output. In a Moore machine, it maps State → Output."
        },
        {
            question: "The ε-closure of a state q defined as:",
            options: [
                "The set of final states reachable from q",
                "The set of states reachable from q using exactly one ε-transition",
                "The set of states reachable from q using zero or more ε-transitions",
                "The set of states that can transition to q using ε"
            ],
            correctAnswer: 2,
            explanation: "ε-closure(q) is the set of all states p such that there is a path from q to p consisting only of epsilon transitions (including q itself via zero transitions)."
        },
        {
            question: "If a language L is recognized by a DFA, then L is also:",
            options: [
                "A Context-Free Language",
                "A Regular Language",
                "Describable by a Regular Expression",
                "All of the above"
            ],
            correctAnswer: 3,
            explanation: "If a DFA recognizes L, L is regular by definition. Every regular language is also context-free, and every regular language has a corresponding regular expression."
        },
        {
            question: "Arden's Theorem is primarily used for:",
            options: [
                "Converting an NFA to a DFA",
                "Minimizing a DFA",
                "Solving equations of the form R = Q + RP to find Regular Expressions from Finite Automata",
                "Proving a language is not regular"
            ],
            correctAnswer: 2,
            explanation: "Arden's Theorem (R = Q + RP implies R = QP*) is a powerful algebraic tool for finding the regular expression associated with a state-transition system."
        }
    ];

    const unitReviewData = [
        { title: "1.1 Foundations", desc: "Logic, Proof by Contradiction, Induction, and Pigeonhole Principle.", icon: <ShieldCheck className="w-5 h-5" /> },
        { title: "1.2 & 1.3 DFA/NFA", desc: "Deterministic vs Non-deterministic models and their formal 5-tuple definitions.", icon: <Terminal className="w-5 h-5" /> },
        { title: "1.4 Equivalence", desc: "Subset Construction and why NFA = DFA in power.", icon: <Layers className="w-5 h-5" /> },
        { title: "1.5 Output Machines", desc: "Transducers: Moore (State-based) and Mealy (Transition-based) machines.", icon: <FileCode className="w-5 h-5" /> },
        { title: "1.6 Applications", desc: "String matching algorithms like KMP and pattern recognition.", icon: <Target className="w-5 h-5" /> },
        { title: "1.7 & 1.8 ε-NFA & RE", desc: "Epsilon moves, Regular Expressions, and Thompson's Construction.", icon: <Brain className="w-5 h-5" /> },
    ];

    return (
        <div className="module-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-slate-900 font-sans selection:bg-indigo-100">

            {/* 1. HERO HEADER */}
            <header className="mb-16 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 group transition-all hover:bg-indigo-100">
                            <Trophy className="w-4 h-4 text-indigo-600 animate-bounce" />
                            <span className="text-xs font-black uppercase tracking-widest text-indigo-700 italic">Unit 1 Capstone</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 italic">
                            SYNTHESIS & <br /> <span className="text-indigo-600 underline decoration-indigo-200">FINAL MASTERY</span>
                        </h1>
                        <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                            Consolidate your knowledge of Finite Automata, Regular Expressions, and Theoretical Proofs.
                            This final module serves as the validation of your Unit 1 journey.
                        </p>
                    </div>

                    <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-slate-50 rounded-[3rem] border-2 border-slate-100 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                        <Award className="w-20 h-20 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-500" />
                        <div className="text-center">
                            <div className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</div>
                            <div className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase">Ready for Exam</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. NAVIGATION TABS */}
            <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 pb-2 overflow-x-auto no-scrollbar">
                {[
                    { id: 'review', label: 'Unit Review', icon: <BookOpen className="w-4 h-4" /> },
                    { id: 'synthesis', label: 'Theoretical Synthesis', icon: <Layers className="w-4 h-4" /> },
                    { id: 'exam', label: 'Final Assessment', icon: <ClipboardCheck className="w-4 h-4" /> },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-t-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                                ? 'bg-indigo-600 text-white shadow-lg -translate-y-1'
                                : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                            }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* 3. DYNAMIC CONTENT AREA */}
            <div className="transition-all duration-500">

                {/* REVIEW TAB */}
                {activeTab === 'review' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {unitReviewData.map((item, idx) => (
                                <div key={idx} className="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] hover:border-indigo-200 transition-all hover:shadow-xl group">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 mb-2 italic uppercase tracking-tighter">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-indigo-900 text-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden italic">
                            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2">
                                    <h2 className="text-5xl font-black tracking-tighter leading-none mb-8">
                                        WHY DO WE <br /> <span className="text-indigo-400 italic">STUDY THIS?</span>
                                    </h2>
                                    <p className="text-indigo-100 text-lg leading-relaxed mb-8 font-medium">
                                        Automata Theory isn't just about math; it's about defining what machines can and cannot do.
                                        From the regex engine in your browser to the lexical analyzer in a compiler, everything
                                        traces back to these finite models.
                                    </p>
                                    <button onClick={() => setActiveTab('synthesis')} className="group flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/40">
                                        Explore Synthesis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className="lg:w-1/2 hidden lg:block">
                                    <img
                                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                                        alt="Abstract Computing"
                                        className="w-full h-96 object-cover rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-indigo-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SYNTHESIS TAB */}
                {activeTab === 'synthesis' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
                        <div className="bg-white border-2 border-slate-100 p-12 rounded-[3rem] shadow-sm">
                            <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-8 flex items-center gap-4 text-slate-900">
                                <Layers className="w-8 h-8 text-indigo-600" /> The Hierarchy of Regularity
                            </h2>
                            <div className="prose prose-slate max-w-none italic font-medium text-slate-600">
                                <p className="mb-6">
                                    One of the most profound realizations in Computer Science is the equivalence between seemingly different models.
                                    In Unit 1, we traversed the 5 key pillars of Regular Languages:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <div className="text-indigo-600 font-black mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Procedural View
                                        </div>
                                        <p className="text-sm"><strong>Automata (DFA, NFA):</strong> Define a process or machine state-by-state to recognize strings. It's the "How" of computation.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <div className="text-indigo-600 font-black mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Declarative View
                                        </div>
                                        <p className="text-sm"><strong>Regular Expressions:</strong> Define the pattern structure mathematically. It's the "What" of the language.</p>
                                    </div>
                                </div>
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-3xl my-8">
                                    <h4 className="font-black text-amber-900 mb-2 uppercase text-xs tracking-widest">Crucial Equivalence</h4>
                                    <p className="text-sm text-amber-800 leading-relaxed">
                                        Kleene's Theorem bridges these worlds. It guarantees that if you can write a regex for a language,
                                        you can build an NFA for it (Thompson's construction), and if you have an NFA, you can
                                        mathematically extract its regex (Arden's Method or State Elimination).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <section className="p-8 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden group shadow-2xl">
                                <h3 className="text-2xl font-black italic mb-6 text-indigo-300">Deterministic vs Nondeterministic</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-8 italic">
                                    While NFAs are conceptually more powerful to design (allowing "guesses"), they are computationally
                                    identical to DFAs. The Subset Construction is the bridge, albeit with a potential
                                    <span className="text-white font-black underline decoration-indigo-500"> exponential state explosion (2ⁿ)</span>.
                                </p>
                                <Zap className="absolute -bottom-8 -right-8 w-32 h-32 text-indigo-800 opacity-20 group-hover:scale-125 transition-all" />
                            </section>

                            <section className="p-8 bg-indigo-600 text-white rounded-[3rem] relative overflow-hidden group shadow-2xl">
                                <h3 className="text-2xl font-black italic mb-6 text-indigo-100">Transducers: Output Machines</h3>
                                <p className="text-sm text-slate-100 leading-relaxed mb-8 italic">
                                    FA with output (Moore & Mealy) shift from "Recognizers" to "Processors." Moore machines attach output to states
                                    (Static), while Mealy machines attach them to transitions (Dynamic). Conversion between them ensures
                                    system flexibility in hardware design.
                                </p>
                                <Terminal className="absolute -bottom-8 -right-8 w-32 h-32 text-indigo-400 opacity-20 group-hover:rotate-12 transition-all" />
                            </section>
                        </div>
                    </div>
                )}

                {/* EXAM TAB */}
                {activeTab === 'exam' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-[3rem] p-8 lg:p-12 mb-12 flex flex-col items-center justify-center text-center italic shadow-inner">
                            <Brain className="w-16 h-16 text-indigo-600 mb-6" />
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Comprehensive Assessment</h2>
                            <p className="max-w-xl text-slate-500 font-medium">
                                Test your theoretical and practical mastery across all 8 modules of Unit 1.
                                Complete this assessment to unlock Unit 2.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-[3.5rem] border-4 border-slate-100 shadow-2xl relative z-10 overflow-hidden">
                            <Quiz
                                title="Unit 1 Final Synthesis Assessment"
                                questions={quizQuestions}
                                subject="FLAT"
                                unitId={1}
                                moduleId={9}
                            />
                        </div>

                        <div className="mt-20 py-16 border-t flex flex-col items-center">
                            <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-[1em]">Unit 1 Complete</p>
                            <h4 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">THEORY OF AUTOMATA <span className="text-indigo-600 underline">CERTIFIED</span></h4>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Module1_9;

