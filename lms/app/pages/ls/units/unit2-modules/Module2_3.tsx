'use client';

import React, { useEffect, useState } from 'react';
import Quiz from '../../components/Quiz';
import mermaid from 'mermaid';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Target,
  Lightbulb,
  Info,
  AlertTriangle,
  CheckCircle,
  Youtube,
  ExternalLink,
  Code,
  Layers,
  Globe,
  Award,
  Clock,
  BarChart,
  ChevronDown,
  ChevronUp,
  FileText,
  Zap,
  HelpCircle,
  FlaskConical
} from 'lucide-react';

const Module2_3: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const mermaidRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Inter, sans-serif'
    });

    const renderDiagram = async () => {
      if (mermaidRef.current) {
        try {
          // Clear any previous rendering
          mermaidRef.current.removeAttribute('data-processed');
          await mermaid.run({
            nodes: [mermaidRef.current],
          });
        } catch (error) {
          console.error("Mermaid execution failed:", error);
        }
      }
    };

    renderDiagram();
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const module3Quiz = [
    {
      question: "Which of the following is the most common word order in the world's languages?",
      options: ["SOV (Subject-Object-Verb)", "VSO (Verb-Subject-Object)", "VOS (Verb-Object-Subject)", "OSV (Object-Subject-Verb)"],
      correctAnswer: 0,
      explanation: "SOV (~45%) is slightly more common than SVO (~42%). Together they account for nearly 90% of all languages."
    },
    {
      question: "According to Greenberg's Universal 2, what correlation exists between adposition type and genitive-noun order?",
      options: [
        "Prepositional languages always have postposed genitives",
        "Prepositional languages tend to have postposed genitives; postpositional languages tend to have preposed genitives",
        "There is no correlation between adposition type and genitive order",
        "All languages have preposed genitives regardless of adposition type"
      ],
      correctAnswer: 1,
      explanation: "Universal 2 states: 'In languages with prepositions, the genitive almost always follows the governing noun, while in languages with postpositions it almost always precedes.'"
    },
    {
      question: "Turkish is an agglutinative language. Which of the following characteristics is typical of agglutinative languages?",
      options: [
        "Each word expresses only one morpheme with no affixation",
        "Single affixes express multiple grammatical categories simultaneously",
        "Multiple affixes are added with clear boundaries, each expressing a single meaning",
        "Entire sentences are expressed in single complex words"
      ],
      correctAnswer: 2,
      explanation: "In agglutinative languages, morphemes are 'glued' together with clear boundaries and transparent meanings."
    },
    {
      question: "A language has VSO word order. According to Greenberg's universals, which of the following features would we expect it to have?",
      options: ["Postpositions", "Prepositions", "Prenominal relative clauses", "Head-final structure"],
      correctAnswer: 1,
      explanation: "Greenberg's Universal 3 states: 'Languages with dominant VSO order are always prepositional.'"
    },
    {
      question: "Which of the following is an example of an implicational universal?",
      options: [
        "'All languages have nouns and verbs.'",
        "'If a language has dominant VSO order, then it is prepositional.'",
        "'English is an SVO language.'",
        "'Mandarin Chinese has four tones.'"
      ],
      correctAnswer: 1,
      explanation: "Implicational universals take the form 'If P, then Q'."
    },
    {
      question: "In a fusional language like Russian, what is characteristic of the morphology?",
      options: [
        "Words consist of single morphemes",
        "A single affix expresses multiple grammatical categories",
        "Many affixes are added with clear, single meanings",
        "Entire sentences are expressed in single words"
      ],
      correctAnswer: 1,
      explanation: "Fusional languages 'fuse' meanings into a single affix (e.g., -y in Russian marking both case and number)."
    },
    {
      question: "Which of the following pairs of languages are typologically similar but genetically unrelated?",
      options: ["English and German", "Japanese and Turkish", "Spanish and French", "Hindi and Sanskrit"],
      correctAnswer: 1,
      explanation: "Japanese and Turkish share SOV word order and agglutinative morphology but belong to entirely different language families."
    },
    {
      question: "According to the head-directionality principle, what do OV languages typically have?",
      options: [
        "Prepositions and postposed genitives",
        "Postpositions and preposed genitives",
        "Prepositions and preposed genitives",
        "Postpositions and postposed genitives"
      ],
      correctAnswer: 1,
      explanation: "OV (Object-Verb) languages are head-final, meaning heads (like adpositions) follow their complements."
    },
    {
      question: "Greenberg's Universal 1 states that in sentences with nominal subject and object:",
      options: [
        "The verb always comes before the subject",
        "The object always comes before the subject",
        "The subject almost always precedes the object",
        "The verb always comes between subject and object"
      ],
      correctAnswer: 2,
      explanation: "Universal 1 explains why S-initial orders (SOV, SVO, VSO) are the most common."
    },
    {
      question: "Mandarin Chinese is best classified as which morphological type?",
      options: ["Isolating (Analytic)", "Agglutinative", "Fusional", "Polysynthetic"],
      correctAnswer: 0,
      explanation: "Mandarin typically has one morpheme per word and minimal bound morphology."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white font-sans text-slate-900 overflow-hidden">
      {/* ==================== HEADER ==================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 rounded-3xl p-8 md:p-12 mb-12 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6 text-indigo-200 text-sm font-bold uppercase tracking-widest">
            <BookOpen size={18} />
            <span>LS UNIT-2: Syntax and Semantics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Language <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-blue-200 italic">Typology</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
            {[
              { icon: <Clock className="text-indigo-300" />, label: "Estimated Time", value: "75-90 minutes" },
              { icon: <BarChart className="text-indigo-300" />, label: "Difficulty", value: "Intermediate" },
              { icon: <Globe className="text-indigo-300" />, label: "Prerequisites", value: "Basic Linguistics, Syntax Fundamentals" },
              { icon: <Award className="text-indigo-300" />, label: "Pass Score", value: "70% or higher" }
            ].map((meta, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  {meta.icon}
                  <span className="text-xs font-black uppercase tracking-tighter opacity-80">{meta.label}</span>
                </div>
                <div className="text-lg font-black">{meta.value}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ==================== SECTION 1: OVERVIEW ==================== */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg ring-4 ring-indigo-50">
            <Target className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            🎯 What You'll Master: Learning Objectives
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-black mb-6 text-indigo-900 border-b border-indigo-100 pb-4 uppercase tracking-widest">Learning Objectives</h3>
            <ul className="space-y-4">
              {[
                "Define language typology and explain its significance in cross-linguistic comparison and linguistic theory",
                "Identify and classify languages according to word order typology (SVO, SOV, VSO, etc.) and morphological typology (isolating, agglutinative, fusional, polysynthetic)",
                "Explain Greenberg's linguistic universals and implicational universals with concrete examples from different languages",
                "Analyze correlations between different word order parameters (e.g., relationship between basic word order and adposition type)",
                "Apply typological knowledge to predict structural features of languages based on their classification"
              ].map((obj, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="shrink-0 w-8 h-8 rounded-xl bg-white border-2 border-indigo-100 flex items-center justify-center font-black text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300 shadow-sm">{i + 1}</div>
                  <p className="text-slate-700 font-medium leading-relaxed pt-1">{obj}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="prose prose-indigo max-w-none">
            <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 italic">
              <Zap className="text-amber-500 fill-amber-500" />
              Why This Topic Matters
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Imagine walking through a bustling international airport where you hear dozens of languages being spoken around you—some sound melodic and flowing, others sharp and staccato; some speakers seem to pack entire sentences into single words, while others use many small words to express the same idea. Have you ever wondered why languages differ so dramatically in their structure, and yet share surprising similarities? The answer lies in language typology.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Language typology is the scientific study of the structural diversity and unity among the world's languages. It seeks to answer fundamental questions: Why do some languages put the verb at the beginning of sentences while others put it at the end? Why do some languages have complex word structures with many affixes, while others use separate words for each grammatical element? And most intriguingly, are there universal patterns that all languages follow, despite their apparent differences?
            </p>
            <p className="text-slate-700 leading-relaxed">
              For students of linguistics, communication studies, language teaching, and translation, understanding language typology is essential. It provides the theoretical framework for comparing languages systematically, predicting learner difficulties in second language acquisition, designing effective translation strategies, and appreciating the full range of human linguistic creativity. Whether you're analyzing why Japanese and Turkish share certain features despite being unrelated, or explaining why English speakers struggle with German word order, typology provides the tools you need.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-3xl p-8 border border-emerald-100 ring-8 ring-emerald-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-emerald-600" size={24} />
            <h4 className="text-lg font-black text-emerald-900 uppercase tracking-widest">Real-World Applications</h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Language Teaching", desc: "Predicts which grammatical structures will be difficult for learners based on their native language typology" },
              { title: "Machine Translation", desc: "Enables better translation algorithms by understanding structural differences between source and target languages" },
              { title: "Historical Linguistics", desc: "Helps reconstruct proto-languages and trace language families through typological features" },
              { title: "Language Documentation", desc: "Provides frameworks for describing endangered languages systematically" },
              { title: "Sign Language Research", desc: "Reveals how visual-gestural languages follow similar typological patterns as spoken languages" }
            ].map((app, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-50 group hover:shadow-md transition-shadow">
                <span className="text-emerald-600 font-black block mb-2">{app.title}</span>
                <p className="text-sm text-slate-600 leading-normal">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: DEEP dive ==================== */}
      <section className="mb-16" id="theory">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg ring-4 ring-blue-50">
            <BookOpen className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight text-center md:text-left">Section 1: Understanding Language Typology</h2>
        </div>

        <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl mb-12">
          <h3 className="text-2xl font-black text-slate-800 mb-6 border-b-2 border-blue-50 pb-2">Definition & Fundamentals</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            <strong>Language typology</strong> is the branch of linguistics that studies, compares, and classifies languages according to their structural features and forms. Unlike genetic classification (which groups languages by historical descent), typological classification organizes languages based on shared <strong>structural characteristics</strong>, regardless of their historical relationships. This is why we call it <span className="text-blue-600 font-bold italic">cross-linguistic typology</span>—it cuts across language families to reveal patterns of similarity and difference.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            The modern study of language typology was revolutionized by the American linguist <strong>Joseph H. Greenberg</strong> (1915–2001), whose seminal 1963 paper "Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements" established the field as we know it today. Greenberg's groundbreaking insight was not merely to catalog the different types of languages, but to discover that certain structural features tend to cluster together in predictable ways—what we now call <strong>linguistic universals</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-10">
            The fundamental premise of typology is that although languages may appear wildly different on the surface, they are constrained by universal principles that limit the range of possible human languages. By studying these patterns, we gain insight into the nature of human language itself—what is possible, what is probable, and what is impossible in the languages humans create and use.
          </p>

          <div className="flex flex-col gap-12 mb-12">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h4 className="flex items-center gap-2 font-black text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter mb-8">📌 Key Terminology</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { term: "Typological Classification", def: "Grouping languages based on shared structural features rather than genetic relationships" },
                  { term: "Linguistic Universal", def: "A pattern that holds true across all or most human languages" },
                  { term: "Implicational Universal", def: "A conditional statement of the form \"If a language has feature X, then it will also have feature Y\"" },
                  { term: "Constituent Order", def: "The arrangement of subject (S), verb (V), and object (O) in a sentence" },
                  { term: "Head", def: "The central element in a phrase that determines the phrase's grammatical category (e.g., the noun in a noun phrase)" }
                ].map((term, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-blue-600 font-black shrink-0">→</span>
                    <p className="text-sm font-medium"><strong className="text-slate-900 block mb-1">{term.term}</strong> <span className="text-slate-600 italic leading-relaxed">{term.def}</span></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-2xl flex flex-col items-center justify-center overflow-x-auto ring-8 ring-slate-50">
              <h4 className="text-2xl font-black text-slate-800 mb-10 text-center tracking-tight">Figure 1: The Major Branches of Language Typology</h4>
              <div ref={mermaidRef} className="mermaid w-full max-w-6xl">
                {`graph TD
    A[Language Typology] --> B[Word Order Typology]
    A --> C[Morphological Typology]
    A --> D[Phonological Typology]
    A --> E[Syntactic Typology]
    
    B --> B1[SVO Languages]
    B --> B2[SOV Languages]
    B --> B3[VSO Languages]
    B --> B4[Others]
    
    C --> C1[Isolating]
    C --> C2[Agglutinative]
    C --> C3[Fusional]
    C --> C4[Polysynthetic]
    
    D --> D1[Tonal]
    D --> D2[Non-tonal]
    
    E --> E1[Prepositional]
    E --> E2[Postpositional]
    
    style A fill:#4f46e5,stroke:#3730a3,color:#fff
    style B fill:#3b82f6,stroke:#2563eb,color:#fff
    style C fill:#10b981,stroke:#059669,color:#fff
    style D fill:#f59e0b,stroke:#d97706,color:#fff
    style E fill:#ef4444,stroke:#dc2626,color:#fff
    
    classDef leaf fill:#f5f3ff,stroke:#ddd6fe,stroke-width:1px,color:#4338ca,font-size:12px
    class B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,E1,E2 leaf`}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-800 mb-8 mt-12 italic border-l-8 border-indigo-600 pl-6">Word Order Typology: The Six Basic Types</h3>
          <p className="text-slate-700 mb-8">
            The fundamental ways languages differ lies in the order of <strong>Subject (S)</strong>, <strong>Verb (V)</strong>, and <strong>Object (O)</strong>. theoretically, there are six orders, but three dominate the human linguistic landscape.
          </p>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#4f46e5] text-white uppercase text-xs font-black tracking-widest">
                <tr>
                  <th className="p-6">Word Order</th>
                  <th className="p-6">Example</th>
                  <th className="p-6">% of Languages</th>
                  <th className="p-6">Example Languages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {[
                  { type: "SOV", ex: "She him loves", pct: "~45%", langs: "Japanese, Korean, Turkish, Hindi, Latin" },
                  { type: "SVO", ex: "She loves him", pct: "~42%", langs: "English, Mandarin, Spanish, Russian, Swahili" },
                  { type: "VSO", ex: "Loves she him", pct: "~9%", langs: "Irish, Welsh, Arabic (classical), Hawaiian" },
                  { type: "VOS", ex: "Loves him she", pct: "~3%", langs: "Malagasy, Fijian, Mayan" },
                  { type: "OVS", ex: "Him loves she", pct: "<1%", langs: "Hixkaryana (Brazil)" },
                  { type: "OSV", ex: "Him she loves", pct: "<1%", langs: "Xavante (Brazil), Nadëb" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-indigo-50/50 transition-colors">
                    <td className="p-6 font-black text-indigo-700">{row.type}</td>
                    <td className="p-6 italic text-slate-500">"{row.ex}"</td>
                    <td className="p-6 font-black">{row.pct}</td>
                    <td className="p-6 text-slate-400 font-bold uppercase text-[10px] tracking-tight">{row.langs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-900 rounded-3xl p-8 text-white shadow-xl mb-12 border-t-8 border-indigo-500">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><Globe className="text-indigo-400" /> Greenberg's Linguistic Universals</h3>
            <p className="text-indigo-100 mb-8 italic">"If a language has feature X, then it will also tend to have feature Y."</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  u: "📚 Greenberg's Universal 1",
                  statement: "In declarative sentences with nominal subject and object, the dominant order is almost always one in which the subject precedes the object.",
                  desc: "This explains why SOV, SVO, and VSO are common, while OSV and OVS are exceedingly rare. Languages tend to put the subject before the object, regardless of where the verb goes."
                },
                {
                  u: "📚 Greenberg's Universal 2",
                  statement: "In languages with prepositions, the genitive almost always follows the governing noun, while in languages with postpositions it almost always precedes.",
                  desc: "English has prepositions ('in the house') and says 'the dog of the man' (genitive follows noun). Japanese has postpositions ('house-in') and says 'man-'s dog' (genitive precedes noun). This correlation is remarkably consistent across languages."
                },
                {
                  u: "📚 Greenberg's Universal 3",
                  statement: "Languages with dominant VSO order are always prepositional.",
                  desc: "This is an absolute universal—no exceptions have been found. Languages like Irish, Welsh, and Classical Arabic place the verb first and use prepositions, never postpositions."
                }
              ].map((uv, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-inner group-hover:bg-white/20 transition-colors">
                  <h4 className="font-black text-indigo-300 mb-2 uppercase text-xs tracking-widest">{uv.u}</h4>
                  <p className="text-sm font-bold text-white mb-2 leading-tight">"{uv.statement}"</p>
                  <p className="text-xs font-medium leading-relaxed opacity-80 italic">{uv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12 flex flex-col items-center">
            <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-6 text-center">Figure 2: Global Distribution of Word Order Types</h4>
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-inner max-w-2xl overflow-hidden">
              <img
                src="https://kimi-web-img.moonshot.cn/img/www.mpg.de/47d6e5c7df16e1c55db3ce72673f8983a137961b.jpg"
                alt="WALS World map showing distribution of word order types"
                className="w-full h-auto rounded-xl hover:scale-110 transition-transform duration-700 cursor-zoom-in"
              />
            </div>
            <p className="mt-6 text-xs text-slate-500 font-medium leading-relaxed max-w-xl text-center italic">
              The World Atlas of Language Structures (WALS) map showing the global distribution of basic word order types. Red dots represent SOV languages, blue dots SVO languages. Source: Max Planck Institute.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-800 mb-8 underline decoration-double decoration-indigo-200 underline-offset-8">Morphological Typology: How Languages Build Words</h3>
          <p className="text-slate-700 mb-10">Classification by morphological structure—how languages construct words from <strong>morphemes</strong>.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Isolating (Analytic) Languages",
                desc: "In isolating languages, words typically consist of single morphemes. Grammatical relationships are expressed through word order and separate function words rather than through affixes. Each word is a distinct, unchangeable unit.",
                ex: "Example - Mandarin Chinese: 我 昨天 看 了 三 本 书 (wǒ zuótiān kàn le sān běn shū) - \"I read three books yesterday.\" Each concept is expressed by a separate word with minimal affixation."
              },
              {
                title: "2. Agglutinative Languages",
                desc: "In agglutinative languages, words are built by stringing together morphemes like beads on a string. Each morpheme has a single, clear meaning, and morpheme boundaries are easy to identify. The meaning of the whole word is the sum of its parts.",
                ex: "Example - Turkish: ev-ler-im-den (house-PL-1SG.POSS-ABL) - \"from my houses\". Each suffix adds one clear meaning: -ler (plural), -im (my), -den (from)."
              },
              {
                title: "3. Fusional (Inflectional) Languages",
                desc: "In fusional languages, a single affix often expresses multiple grammatical categories simultaneously. Morpheme boundaries can be difficult to identify because morphemes are \"fused\" together. The same affix form may have different meanings in different contexts.",
                ex: "Example - Russian: knig-a (book-NOM.SG) vs knig-y (book-GEN.SG / book-ACC.PL). The suffix -y expresses different combinations of case and number depending on the context."
              },
              {
                title: "4. Polysynthetic Languages",
                desc: "In polysynthetic languages, entire sentences can be expressed in single, highly complex words. Verbs typically incorporate their objects and subjects, along with various grammatical markers, creating words that express what would require entire sentences in other languages.",
                ex: "Example - Mohawk (Iroquoian): wa'-k-hy-áhtu-' (FACT-1SG.AGT-3SG.PAT-catch-PFV) - \"I caught it\". Contains factual prefix, agent marker, patient marker, verb root, and perfective suffix."
              }
            ].map((type, i) => (
              <div key={i} className="bg-white border hover:border-indigo-600 transition-all border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl group">
                <h4 className="text-xl font-black text-indigo-700 mb-4 tracking-tighter group-hover:italic transition-all uppercase">{type.title}</h4>
                <p className="text-slate-600 mb-6 text-sm font-medium leading-relaxed">{type.desc}</p>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-xs font-bold text-slate-500 italic relative">
                  <span className="absolute -top-3 left-4 bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] not-italic font-black">EXAMPLE</span>
                  {type.ex}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-12 mb-12 flex flex-col items-center">
            <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-6 text-center">Figure 3: Morphological Typology Comparison</h4>
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-inner max-w-2xl overflow-hidden">
              <img
                src="https://kimi-web-img.moonshot.cn/img/opentextbc.ca/8439d9d2ab3f92c1e1efea8fb39d611bdce82638.png"
                alt="Morphological typology comparison chart"
                className="w-full h-auto rounded-xl hover:scale-110 transition-transform duration-700 cursor-zoom-in"
              />
            </div>
            <p className="mt-6 text-xs text-slate-500 font-medium leading-relaxed max-w-xl text-center italic">
              Visual comparison of how different morphological types express the same meaning. Source: Psychology of Language (Open Textbook Library).
            </p>
          </div>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 border border-rose-100 mb-8">
            <h4 className="flex items-center gap-3 text-rose-900 font-extrabold mb-6 uppercase text-sm tracking-widest">
              <AlertTriangle className="text-rose-600" />
              ⚠️ Common Misconceptions
            </h4>
            <div className="space-y-6">
              {[
                {
                  t: "Language typology is the same as language classification by family.",
                  r: "Typological classification groups languages by shared structural features (e.g., SOV word order), while genetic classification groups them by historical descent (e.g., Romance languages). Japanese and Turkish are typologically similar (both SOV and agglutinative) but genetically unrelated. English and Hindi are genetically related (both Indo-European) but typologically different (SVO vs. SOV)."
                },
                {
                  t: "Languages fit neatly into one typological category.",
                  r: "Most languages are mixed types. English has isolating tendencies (minimal inflection) but also fusional features (irregular plurals like \"mouse/mice\"). Languages exist on continua rather than in discrete categories. The typological labels are idealizations that help us see patterns, not absolute classifications."
                },
                {
                  t: "Linguistic universals mean all languages must follow certain rules.",
                  r: "Most linguistic universals are statistical tendencies, not absolute rules. Greenberg's universals are typically implicational (\"If X, then Y\") and hold true for the majority of languages, but exceptions exist. True absolute universals (with no exceptions) are relatively rare."
                },
                {
                  t: "Word order is the only thing that matters in syntax.",
                  r: "While word order is important, many languages have relatively \"free\" word order where the basic order can be varied for pragmatic purposes (topic, focus). In such languages, case marking (nominative, accusative, etc.) plays a crucial role in identifying grammatical relations. Latin and Russian are classic examples of languages with flexible word order but rich case systems."
                }
              ].map((m, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100/50">
                  <p className="font-black text-rose-700 mb-2 italic text-sm underline decoration-rose-200 underline-offset-4 tracking-tight">Misconception #{i + 1}: "{m.t}"</p>
                  <p className="text-slate-700 font-bold mb-1 text-[10px] uppercase tracking-widest text-rose-400">Reality:</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: VIDEO GALLERY ==================== */}
      <section className="mb-20" id="videos">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-rose-600 p-3 rounded-2xl shadow-lg ring-4 ring-rose-50">
            <Youtube className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Learn Through Videos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: "af2T3nTsGFI", title: "What is Linguistic Typology?", author: "Verkerk", stats: "26:03 • 9.5K Views" },
            { id: "9Ewq-hSD1s0", title: "VLC108 - Language Typology", author: "VLC Campbell", stats: "6:03 • 6.5K Views" },
            { id: "bxARj07jFp0", title: "Long and Short Words", author: "Tom Scott", stats: "4:37 • 1.3M Views" }
          ].map((video, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 overflow-hidden group">
              <div className="aspect-video bg-neutral-100 relative group-hover:scale-105 transition-transform duration-700">
                <iframe src={`https://www.youtube.com/embed/${video.id}`} className="w-full h-full" allowFullScreen></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-black text-slate-800 mb-2 truncate group-hover:text-indigo-600 transition-colors uppercase italic">{video.title}</h4>
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>{video.author}</span>
                  <span>{video.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 4 & 5: WORKED EXAMPLES + LAB ==================== */}
      <section className="mb-20" id="examples">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg ring-4 ring-emerald-50">
            <Layers className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">See It In Action: Worked Examples</h2>
        </div>

        <div className="space-y-8 mb-16">
          {[
            {
              idx: "01",
              title: "Identifying Word Order Type",
              prob: "Classify: Language A (Le chat mange la souris), Language B (Neko-ga nezumi-o taberu), Language C (Dyfal donc dy gath y llygoden).",
              sol: "A: SVO (English type). B: SOV (Japanese type). C: VSO (Welsh/Celtic type).",
              icon: <FileText className="text-indigo-600" />
            },
            {
              idx: "02",
              title: "Applying Implicational Universals",
              prob: "Turkish is SOV with postpositions. Predict: Genitive position, Adjective position, Relative clause position.",
              sol: (
                <div className="space-y-4">
                  <p>SOV/Head-final predicts: GN order, AN order, and RelN order. Verified in Turkish grammar:</p>
                  <table className="w-full text-[10px] border-collapse bg-white/50 rounded-lg overflow-hidden font-bold">
                    <thead className="bg-emerald-600 text-white uppercase italic">
                      <tr>
                        <th className="p-2 border border-emerald-700">Feature</th>
                        <th className="p-2 border border-emerald-700">Prediction</th>
                        <th className="p-2 border border-emerald-700">Example</th>
                      </tr>
                    </thead>
                    <tbody className="text-emerald-950">
                      <tr>
                        <td className="p-2 border border-emerald-100">Gen-N</td>
                        <td className="p-2 border border-emerald-100 italic">GN (Preposed)</td>
                        <td className="p-2 border border-emerald-100">adam-ın kitab-ı</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-emerald-100">Adj-N</td>
                        <td className="p-2 border border-emerald-100 italic">AN (Preposed)</td>
                        <td className="p-2 border border-emerald-100">büyük ev</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-emerald-100">RelN</td>
                        <td className="p-2 border border-emerald-100 italic">RelN (Preposed)</td>
                        <td className="p-2 border border-emerald-100">[okuduğum] kitap</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[10px] text-emerald-700">Turkish follows the consistent OV/head-final pattern perfectly.</p>
                </div>
              ),
              icon: <Globe className="text-emerald-600" />
            },
            {
              idx: "03",
              title: "Morphological Typology Classification",
              prob: "Classify: Vietnamese (Tôi ăn cơm), Finnish (talo-ssa-ni-kin), Latin (am-o, am-as).",
              sol: "Vietnamese: Isolating (separately words). Finnish: Agglutinative (transparent suffixes). Latin: Fusional (fused person/number/tense markers).",
              icon: <Zap className="text-amber-600" />
            }
          ].map((example, i) => (
            <div key={i} className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[10rem] flex items-center justify-center font-black text-5xl text-slate-100 group-hover:text-indigo-50 transition-colors">{example.idx}</div>
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="p-3 bg-slate-50 rounded-2xl">{example.icon}</div>
                <h4 className="text-xl font-black text-slate-900 uppercase italic">Example {i + 1}: {example.title}</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div className="bg-slate-50 p-6 rounded-2xl border-l-8 border-indigo-400">
                  <span className="text-[10px] font-black uppercase text-indigo-400 block mb-2 tracking-[0.2em]">Problem Statement</span>
                  <p className="text-slate-600 font-medium leading-relaxed italic">"{example.prob}"</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border-l-8 border-emerald-400">
                  <span className="text-[10px] font-black uppercase text-emerald-400 block mb-2 tracking-[0.2em]">Step-by-Step Solution</span>
                  <div className="text-slate-800 font-bold leading-relaxed">{example.sol}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== ANALYIS TABLE ==================== */}
        <h3 className="text-2xl font-black text-center text-slate-800 mb-10 tracking-[0.2em] underline decoration-indigo-200 underline-offset-8 uppercase italic">Morphological Comparison Analysis</h3>
        <div className="overflow-x-auto rounded-[2.5rem] border-2 border-slate-100 shadow-2xl mb-20">
          <table className="w-full text-left font-medium">
            <thead className="bg-[#1e1b4b] text-white uppercase text-xs tracking-[0.2em] font-black italic">
              <tr>
                <th className="p-8">Feature</th>
                <th className="p-8">Isolating</th>
                <th className="p-8">Agglutinative</th>
                <th className="p-8">Fusional</th>
                <th className="p-8">Polysynthetic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm italic">
              {[
                { f: "Morphemes / Word", c1: "Usually 1", c2: "Many (2-5+)", c3: "Few (1-3)", c4: "Many (5-10+)" },
                { f: "Boundaries", c1: "N/A (words = morphemes)", c2: "Clear and distinct", c3: "Often fused/unclear", c4: "Clear but complex" },
                { f: "Meaning / Morpheme", c1: "One concept per word", c2: "One grammatical function per morpheme", c3: "Multiple functions per morpheme", c4: "Multiple concepts incorporated" },
                { f: "Examples", c1: "Mandarin Chinese, Vietnamese", c2: "Turkish, Finnish, Hungarian, Japanese", c3: "Latin, Russian, German, Arabic", c4: "Mohawk, Inuktitut, Navajo" },
                { f: "Advantages", c1: "Simple structure, easy word boundaries", c2: "Regular, predictable, transparent", c3: "Compact, efficient", c4: "Extremely expressive, holistic" },
                { f: "Challenges", c1: "Requires more words per sentence", c2: "Words can become very long", c3: "Irregular, must be memorized", c4: "Extremely complex morphology" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-8 font-black text-indigo-900 not-italic uppercase tracking-tighter group-hover:pl-10 transition-all">{row.f}</td>
                  <td className="p-8 text-slate-500 font-bold">{row.c1}</td>
                  <td className="p-8 text-indigo-600 font-bold">{row.c2}</td>
                  <td className="p-8 text-rose-600 font-bold">{row.c3}</td>
                  <td className="p-8 text-emerald-600 font-bold">{row.c4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ==================== VO vs OV PATTERNS ==================== */}
        <h3 className="text-2xl font-black text-center text-slate-800 mb-10 tracking-[0.2em] underline decoration-indigo-200 underline-offset-8 uppercase italic">VO vs. OV Language Patterns</h3>
        <div className="overflow-x-auto rounded-[2.5rem] border-2 border-slate-100 shadow-2xl mb-20 max-w-5xl mx-auto">
          <table className="w-full text-left font-medium">
            <thead className="bg-[#4338ca] text-white uppercase text-xs tracking-[0.2em] font-black italic">
              <tr>
                <th className="p-8">Feature</th>
                <th className="p-8">VO Languages (SVO, VSO, VOS—where the verb precedes the object)</th>
                <th className="p-8">OV Languages (SOV, OSV, OVS—where the verb follows the object)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                { f: "Adpositions", c1: "Prepositions (in the house)", c2: "Postpositions (house-in)" },
                { f: "Genitive-Noun", c1: "NG (the dog of the man)", c2: "GN (the man's dog)" },
                { f: "Adjective-Noun", c1: "AN or NA (mixed)", c2: "NA (house big) or AN" },
                { f: "Relative Clause", c1: "NRel (the book [that I read])", c2: "RelN ([that I read] book)" },
                { f: "Standard of Comparison", c1: "Adj-Marker-Standard (taller than John)", c2: "Standard-Adj-Marker (John-than tall)" },
                { f: "Question Particles", c1: "Initial or final (variable)", c2: "Final (typically)" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-indigo-50/30 transition-colors group">
                  <td className="p-8 font-extrabold text-indigo-900 uppercase tracking-tighter">{row.f}</td>
                  <td className="p-8 text-slate-600 font-semibold italic">{row.c1}</td>
                  <td className="p-8 text-indigo-600 font-bold italic">{row.c2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 mb-20 max-w-4xl mx-auto ring-8 ring-indigo-50/50">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-indigo-600" />
            <h4 className="font-black text-indigo-900 uppercase tracking-widest text-sm italic">The Head-Directionality Principle</h4>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
            VO languages are <strong>head-initial</strong> (head precedes complements), while OV languages are <strong>head-final</strong> (head follows complements). This principle explains why prepositions (heads) come before NPs in VO languages, while postpositions follow them in OV languages.
          </p>
        </div>

        {/* ==================== HANDS-ON LAB ==================== */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-950 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden mb-20" id="lab">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-10 flex items-center gap-4">
              <FlaskConical className="text-indigo-400" size={40} />
              Hands-On Lab: Language Typology Analysis
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-inner">
                  <h4 className="text-indigo-300 font-black uppercase text-xs tracking-[0.2em] mb-4">📋 Research Objective</h4>
                  <p className="text-indigo-50 font-medium leading-relaxed italic text-lg">You will analyze two languages from different families using typological parameters, compare their structural features, and present your findings in a structured report. This exercise develops practical skills in typological analysis and cross-linguistic comparison.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-black text-indigo-300 uppercase block mb-1 tracking-widest">⏱️ Estimated Time</span>
                    <span className="font-bold">45-60 minutes</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-black text-indigo-300 uppercase block mb-1 tracking-widest">🎯 Learning Goals</span>
                    <span className="font-bold italic">WALS Research & Comparative Analysis</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6">
                <h4 className="text-indigo-300 font-black uppercase text-xs tracking-widest mb-4 underline decoration-2 underline-offset-8">📝 Instructions</h4>
                {[
                  "Select Your Languages: Choose TWO languages from different language families (e.g., Japanese and Arabic).",
                  "Research Basic Word Order: Determine SVO/SOV/VSO type using WALS.info or reliable sources.",
                  "Identify Morphological Type: Classify as isolating, agglutinative, fusional, or polysynthetic with examples.",
                  "Investigate Additional Features: Research adposition type (Prep/Postp), Genitive-noun order, and Relative clauses.",
                  "Apply Greenberg's Universals: Verify if the language follows predicted correlations and note any exceptions.",
                  "Prepare Your Report: Create a comparison table and write a brief analysis (300-500 words) discussing similarities and differences."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(99,102,241,0.5)]">0{i + 1}</div>
                    <p className="text-sm font-medium opacity-90">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: PRACTICE ==================== */}
      <section className="mb-20" id="practice">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-amber-500 p-3 rounded-2xl shadow-lg ring-4 ring-amber-50">
            <HelpCircle className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Practice & Apply Your Knowledge</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              idx: "📘 Easy",
              prob: "Identify word order: 'The cat (S) chased (V) the mouse (O)'.",
              sol: "SVO. (S precedes V, V precedes O)."
            },
            {
              idx: "📙 Medium",
              prob: "Korean is SOV with postpositions. Predict Relative Clause position.",
              sol: "Prenominal (RelN). Head-final languages place modifiers before the head."
            },
            {
              idx: "📕 Hard",
              prob: "A VSO language has postpositions and prenominal relative clauses. Is it consistent?",
              sol: "No. VSO/Head-initial typically implies prepositions and postnominal clauses. This language violates Universal 3."
            }
          ].map((q, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between">
              <div>
                <span className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 block group-hover:text-indigo-400 transition-colors uppercase italic">{q.idx} Problem</span>
                <p className="text-slate-900 font-black leading-relaxed mb-8 italic">"{q.prob}"</p>
              </div>
              <button
                onClick={() => toggleSection(`practice-${i}`)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95 transition-all shadow-lg"
              >
                {openSections[`practice-${i}`] ? 'Hide Solution' : 'Check Solution'}
                <ChevronDown className={`transition-transform duration-500 ${openSections[`practice-${i}`] ? 'rotate-180' : ''}`} size={16} />
              </button>
              <AnimatePresence>
                {openSections[`practice-${i}`] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 text-emerald-900 font-bold text-sm italic shadow-inner">
                      {q.sol}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 9 & 10: PITFALLS & CHEAT SHEET ==================== */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* PITFALLS */}
          <div id="pitfalls">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-rose-500 p-3 rounded-2xl shadow-lg ring-4 ring-rose-50">
                <AlertTriangle className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">Common Pitfalls</h2>
            </div>
            <div className="space-y-6">
              {[
                { t: "Genetic vs Typological Confusion", d: "Genetics is historical history; Typology is structural structure. Related languages can be structurally different (English vs Hindi)." },
                { t: "Treating Categories as Absolute", d: "Most languages are mixed types. English has isolating tendencies but fusional plural rules (mouse/mice)." },
                { t: "Word Order Flexibility", d: "Basic order is for neutral declaratives. Flexible ordered languages often rely on heavy case marking." },
                { t: "Misinterpreting Universals", d: "Implicational universals are statistical tendencies, not absolute laws (except Universal 3)." }
              ].map((p, i) => (
                <div key={i} className="group p-6 bg-rose-50/50 rounded-2xl border-l-4 border-rose-500 border-r border-t border-b border-slate-100 hover:bg-rose-50 transition-colors">
                  <h4 className="font-black text-rose-900 mb-2 uppercase text-sm tracking-tighter italic">#{i + 1}: {p.t}</h4>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed uppercase tracking-tight">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK REF */}
          <div id="quick-ref" className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl translate-x-12 translate-y-12"></div>

            <h3 className="text-2xl font-black text-center mb-10 tracking-[0.3em] uppercase italic text-indigo-300">Quick Reference Cheat Sheet</h3>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-indigo-400 mb-2 tracking-widest underline">Key Orders</h4>
                  <div className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-tighter italic">
                    SOV (~45%)<br />SVO (~42%)<br />VSO (~9%)
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-indigo-400 mb-2 tracking-widest underline">Greenberg Universals</h4>
                  <div className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-tighter italic">
                    U1: Subject &gt; Object<br />U2: Prep → NG | Postp → GN<br />U3: VSO → Prepositional
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-indigo-400 mb-2 tracking-widest underline">VO Patterns</h4>
                  <div className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-tighter italic">
                    Prepositions<br />Head-Initial<br />NG Order / NRel
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-indigo-400 mb-2 tracking-widest underline">OV Patterns</h4>
                  <div className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-tighter italic">
                    Postpositions<br />Head-Final<br />GN Order / RelN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 11: GO DEEPER ==================== */}
      <section className="mb-20" id="further">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg ring-4 ring-indigo-50">
            <Zap className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Go Deeper: Advanced Topics</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              idx: "🔬 01",
              t: "Chomsky's Principles and Parameters",
              d: "Noam Chomsky's Principles and Parameters theory attempts to explain typological variation through a universal grammar with binary \"switches\" that languages can set differently. The head-directionality parameter (head-initial vs. head-final) is one such switch that explains many of Greenberg's correlations. This framework connects typology to generative linguistics and language acquisition research."
            },
            {
              idx: "🔬 02",
              t: "Word Order Change and Grammaticalization",
              d: "Languages can and do change their word order over time. English, for example, changed from SOV (Old English) to SVO (Modern English). Understanding how and why such changes occur involves studying grammaticalization—the process by which grammatical elements develop from lexical items—and syntactic reanalysis."
            },
            {
              idx: "🔬 03",
              t: "Areal Typology and Linguistic Areas",
              d: "Languages in geographic proximity often share typological features even when genetically unrelated—a phenomenon called linguistic convergence. The Balkan linguistic area, the South Asian linguistic area, and the Mesoamerican linguistic area are classic examples where languages have \"borrowed\" structural features from their neighbors."
            }
          ].map((topic, i) => (
            <div key={i} className="p-8 bg-indigo-50/30 rounded-3xl border border-indigo-100 shadow-sm group hover:scale-[1.02] transition-transform">
              <span className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4 block group-hover:italic">{topic.idx} Advanced Topic</span>
              <h4 className="font-black text-indigo-900 mb-4 uppercase text-lg italic tracking-tighter">{topic.t}</h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed uppercase tracking-tight">{topic.d}</p>
            </div>
          ))}
        </div>

        {/* ==================== EXAM PRACTICE ==================== */}
        <div id="exam" className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200 mb-20">
          <h3 className="text-2xl font-black text-center text-indigo-950 mb-10 uppercase italic tracking-widest underline decoration-4 underline-offset-8">University Exam Simulator</h3>
          <div className="space-y-12">
            {[
              {
                q: "Define the terms GENETIC CLASSIFICATION and TYPOLOGICAL CLASSIFICATION of languages. Explain how they differ and provide one example of each (5 Marks).",
                ans: "Genetic classification groups languages by historical descent (common ancestor), while typological classification groups them by shared structural features regardless of history. Example: English/Hindi are genetic (Indo-European) but typologically distinct (SVO vs SOV). Japanese/Turkish are typologically similar (SOV/Agglutinative) but genetically unrelated.",
                marks: "7 minutes"
              },
              {
                q: "Japanese is an SOV language with postpositions. Predict GN order, Relative clause position, and Adjective-noun order based on Greenberg's universals. (10 Marks)",
                ans: "Predictions based on Head-Final principle: 1) GN Order: Universal 2 predicts Genitive precedes Noun in postpositional languages; 2) RelN: Head-final languages place relative clauses before head nouns; 3) AN Order: Adjectives precede nouns. Reasoning: Languages tend toward internal consistency in head-directionality.",
                marks: "15 minutes"
              },
              {
                q: "Compare and contrast the four major morphological types: isolating, agglutinative, fusional, and polysynthetic. (15 Marks)",
                ans: "Isolating: Minimal morphology (Mandarin); Agglutinative: Transparent suffixes (Turkish); Fusional: Fused meanings (Latin); Polysynthetic: Sentence-words (Mohawk). Comparison involves balancing regularity (Agglutinative) vs density (Fusional) vs simplicity (Isolating) vs complexity (Polysynthetic).",
                marks: "20 minutes"
              }
            ].map((exam, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group">
                <div className="absolute top-0 right-10 bg-indigo-600 text-white px-4 py-1 rounded-b-xl text-[10px] font-black uppercase tracking-widest">{exam.marks}</div>
                <h4 className="text-xl font-black text-indigo-900 mb-6 uppercase italic">Question {i + 1}: Analytical Reasoning</h4>
                <p className="font-bold text-slate-700 leading-relaxed mb-8 italic">"{exam.q}"</p>
                <button
                  onClick={() => toggleSection(`exam-${i}`)}
                  className="flex items-center gap-2 font-black text-indigo-600 uppercase text-xs tracking-[0.2em] hover:text-indigo-800 transition-colors no-underline"
                >
                  {openSections[`exam-${i}`] ? 'Hide Solution' : 'View Model Answer & Marking Scheme'}
                  {openSections[`exam-${i}`] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {openSections[`exam-${i}`] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="bg-indigo-50 p-6 rounded-2xl border-l-8 border-indigo-400 text-indigo-900 font-bold text-sm tracking-tight leading-loose uppercase shadow-inner italic">
                        {exam.ans}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== INTERVIEW PREP ==================== */}
        <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-12 mb-20 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <h3 className="text-3xl font-black text-slate-800 mb-10 flex items-center gap-4">
            <Zap className="text-indigo-600" size={32} />
            💼 Interview Preparation
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h4 className="font-black text-indigo-900 mb-4 uppercase text-sm italic tracking-widest">Q1: "What is the difference between genetic and typological classification of languages?"</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold mb-6 italic">Answer: Typological classification groups languages by shared structural features (e.g., SOV order), while genetic classification groups them by historical descent (e.g., Romance languages). Highlight that unrelated languages can be typologically similar (Japanese/Turkish).</p>
              <button className="text-[10px] font-black uppercase text-indigo-600 tracking-widest hover:underline flex items-center gap-1"><Info size={12} /> View Deep Approach</button>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h4 className="font-black text-indigo-900 mb-4 uppercase text-sm italic tracking-widest">Q2: "Explain Greenberg's linguistic universals and give an example."</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold mb-6 italic">Answer: Discuss implicational universals ('If P, then Q') as statistical tendencies. Use Universal 3 (VSO implies prepositions) or the Head-Directionality principle as your concrete example.</p>
              <button className="text-[10px] font-black uppercase text-indigo-600 tracking-widest hover:underline flex items-center gap-1"><Info size={12} /> View Deep Approach</button>
            </div>
          </div>
        </div>

        {/* ==================== RECOMMENDED RESOURCES ==================== */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl mb-20 relative overflow-hidden">
          <h3 className="text-2xl font-black mb-10 text-center tracking-[0.4em] uppercase italic text-indigo-200">Recommended Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "WALS.info", d: "The World Atlas of Language Structures interactive database.", link: "https://wals.info" },
              { t: "Ethnologue", d: "Comprehensive catalog of all living languages.", link: "https://ethnologue.com" },
              { t: "Glottolog", d: "Bibliographic database of world languages.", link: "https://glottolog.org" }
            ].map((res, i) => (
              <a key={i} href={res.link} target="_blank" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all no-underline text-white block group">
                <h4 className="font-black text-indigo-400 mb-2 group-hover:translate-x-1 transition-transform">{res.t}</h4>
                <p className="text-xs opacity-60 font-medium leading-relaxed">{res.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL QUIZ ==================== */}
      <section className="mb-20" id="quiz">
        <Quiz title="Language Typology Section Mastery Quiz" questions={module3Quiz} subject="LS" unitId={2} moduleId={3} />
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="mt-20 border-t-8 border-indigo-100 pt-16 text-center">
        <h2 className="text-4xl font-black text-slate-800 mb-6 uppercase tracking-tight italic">Congratulations!</h2>
        <p className="text-slate-400 font-black uppercase text-xs tracking-widest mb-12">You've reached the end of the Language Typology Module</p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { label: "↑ Top", href: "#" },
            { label: "Theory", href: "#theory" },
            { label: "Worked Examples", href: "#examples" },
            { label: "Exam Practice", href: "#exam" },
            { label: "Mastery Quiz", href: "#quiz" }
          ].map((link, i) => (
            <a key={i} href={link.href} className="px-8 py-3 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full transition-all duration-300 font-black text-xs uppercase tracking-widest text-slate-600 shadow-sm no-underline italic">
              {link.label}
            </a>
          ))}
        </div>

        <div className="bg-slate-900 py-12 px-6 rounded-[3rem] text-white/50 text-[10px] font-bold uppercase tracking-[0.4em] flex flex-col items-center gap-4">
          <div>Principles and Practices of Human Communication | Unit 2</div>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
          <div>Advanced AI Augmented Learning Experience © 2026</div>
        </div>
      </footer>
    </div>
  );
};

export default Module2_3;
