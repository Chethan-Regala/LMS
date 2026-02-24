import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_9: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which of the following formalisms can describe exactly the set of regular languages?",
            options: ["DFA and NFA only", "DFA, NFA, and ε-NFA", "Context-Free Grammars", "Pushdown Automata"],
            correctAnswer: 1,
            explanation: "DFA, NFA, and ε-NFA are all equivalent and can recognize exactly the class of regular languages."
        },
        {
            question: "The process of converting an NFA to a DFA can result in a DFA with how many states?",
            options: ["Same number of states", "At most 2^n states, where n is the number of NFA states", "n^2 states", "Always fewer states"],
            correctAnswer: 1,
            explanation: "The subset construction algorithm can result in up to 2^n states in the worst case."
        },
        {
            question: "What is the primary difference between a Mealy machine and a Moore machine?",
            options: [
                "Mealy machines are more powerful",
                "Moore machines have more states",
                "Mealy machine output depends on input and state, Moore only on state",
                "Moore machines are asynchronous"
            ],
            correctAnswer: 2,
            explanation: "Mealy machine output is determined by the current state and current input symbol, whereas Moore machine output depends only on the current state."
        },
        {
            question: "Which of the following is an example of an inductive proof step?",
            options: [
                "Proving the base case P(1)",
                "Finding a counterexample",
                "Assuming P(k) is true and proving P(k+1) is true",
                "Assuming the conclusion is false"
            ],
            correctAnswer: 2,
            explanation: "The inductive step involves showing that if the property holds for an arbitrary k, it must also hold for k+1."
        },
        {
            question: "The ε-closure of a state q is:",
            options: [
                "The set of all states reachable from q using one ε-transition",
                "The set of all states reachable from q using only ε-transitions (including q)",
                "The set of final states",
                "The set of states reachable from q using exactly one non-ε transition"
            ],
            correctAnswer: 1,
            explanation: "ε-closure includes the state itself and any state reachable through zero or more epsilon transitions."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.9</div>
                <div className="lesson-title-main">
                    <h1>🏆 Unit 1 Final Assessment</h1>
                    <p className="text-sm mt-2">Comprehensive quiz covering all modules in Unit 1</p>
                </div>
            </div>

            <div className="content-section">
                <p className="mb-6">
                    Congratulations on completing Unit 1: Automata Methods and Finite Automata.
                    This assessment will test your understanding of formal proofs, induction, DFA, NFA, and ε-NFA.
                </p>

                <Quiz
                    title="Unit 1 Final Comprehensive Quiz"
                    questions={quizQuestions}
                    subject="FLAT"
                    unitId={1}
                    moduleId={9}
                />
            </div>
        </div>
    );
};

export default Module1_9;
