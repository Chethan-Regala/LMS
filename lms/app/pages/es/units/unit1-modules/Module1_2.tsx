'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_2: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which approach involves multiple disciplines working independently on a problem and combining their results later?",
            options: [
                "Interdisciplinary",
                "Multidisciplinary",
                "Transdisciplinary",
                "Cross-disciplinary"
            ],
            correctAnswer: 1,
            explanation: "In a multidisciplinary approach (like 'parallel play'), disciplines work independently from their own perspectives and the results are compiled later without deep synthesis during the process."
        },
        {
            question: "According to the module, why is social science essential for solving environmental problems?",
            options: [
                "It explains the chemical reactions of pollutants in the atmosphere",
                "It provides the technology needed to filter contaminated water",
                "It explains human behavior, economic incentives, and how societies make decisions",
                "It is the only discipline that studies biodiversity"
            ],
            correctAnswer: 2,
            explanation: "Social sciences help us understand the 'human dimensions'—why people make decisions that affect the environment and how societies can implement solutions."
        },
        {
            question: "A project that includes non-academic stakeholders like local communities and indigenous peoples as equal partners is called:",
            options: [
                "Interdisciplinary",
                "Multidisciplinary",
                "Transdisciplinary",
                "Intersectoral"
            ],
            correctAnswer: 2,
            explanation: "Transdisciplinary research transcends academic boundaries to include stakeholders (policymakers, communities) in the co-creation of knowledge and solutions."
        },
        {
            question: "Which discipline would be primarily responsible for answering the question: 'What are our ethical obligations to future generations regarding climate change?'",
            options: [
                "Natural Sciences",
                "Social Sciences",
                "Humanities",
                "Applied Fields"
            ],
            correctAnswer: 2,
            explanation: "The Humanities (specifically Philosophy and Ethics) address the 'should' questions regarding values, ethics, and moral obligations."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.2</div>
                <div className="lesson-title-main">
                    <h1>Multidisciplinary Nature of Environmental Sciences</h1>
                </div>
            </div>

            <section className="content-section">
                <p><strong>Understanding How Multiple Disciplines Converge to Address Environmental Challenges</strong></p>

                <div style={{ display: 'flex', gap: '40px', margin: '20px 0', fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Estimated Time</span>
                        90-120 minutes
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Difficulty</span>
                        Beginner to Intermediate
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Prerequisites</span>
                        Basic Science Knowledge
                    </div>
                </div>

                <h3>What You'll Master</h3>
                <p><strong>Learning Objectives</strong></p>
                <ul>
                    <li>Explain why environmental science requires an interdisciplinary approach and identify the limitations of single-discipline perspectives</li>
                    <li>Analyze the specific contributions of natural sciences, social sciences, and humanities to environmental understanding and problem-solving</li>
                    <li>Evaluate how different disciplines interact and integrate their methodologies, theories, and tools in addressing complex environmental issues</li>
                    <li>Apply multidisciplinary thinking to real-world environmental problems by identifying which disciplines are needed and how they complement each other</li>
                    <li>Synthesize knowledge from multiple disciplines to develop comprehensive solutions to environmental challenges</li>
                    <li>Critically assess the strengths and limitations of various disciplinary approaches in environmental research and management</li>
                </ul>

                <h3>Why Multidisciplinary? Understanding the Need</h3>
                <p>
                    Imagine trying to solve a complex puzzle where each piece comes from a different box. One piece shows ecological relationships, another depicts economic systems, a third reveals social dynamics, and yet another displays technological solutions. This is the reality of environmental problems—they are inherently complex, interconnected, and cannot be understood or solved from any single perspective.
                </p>
                <p>
                    Environmental Science stands apart from traditional academic disciplines because it deliberately breaks down the walls between departments, laboratories, and schools of thought. While biology might tell us what species are disappearing, economics explains why people make decisions that harm biodiversity, sociology reveals how communities can organize for conservation, and engineering provides the tools to implement solutions.
                </p>
                <p>
                    Consider climate change—perhaps the most pressing environmental challenge of our time. Understanding it requires:
                </p>
                <ul>
                    <li><strong>Physics:</strong> To understand greenhouse gas effects and energy balance</li>
                    <li><strong>Chemistry:</strong> To track carbon cycles and atmospheric composition</li>
                    <li><strong>Biology:</strong> To assess ecosystem and species impacts</li>
                    <li><strong>Economics:</strong> To analyze costs, benefits, and market mechanisms</li>
                    <li><strong>Political Science:</strong> To navigate international agreements and policy</li>
                    <li><strong>Ethics:</strong> To address justice and intergenerational responsibility</li>
                    <li><strong>Engineering:</strong> To develop renewable energy technologies</li>
                </ul>
                <p>
                    No single expert possesses all this knowledge. Multidisciplinarity is not merely helpful—it's absolutely essential for environmental understanding and action.
                </p>

            

                <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', margin: '20px 0' }}>
                    <strong>Key Insight</strong>
                    <p style={{ margin: '10px 0 0' }}>
                        Traditional disciplines emerged when knowledge could be neatly categorized. Environmental problems don't respect these boundaries—they exist at the intersection of natural and human systems, requiring us to transcend disciplinary silos.
                    </p>
                </div>

                <h3>Quick Start Resources</h3>
                <ul>
                    <li><a href="https://www.nature.com" target="_blank" rel="noopener noreferrer">Nature - Environmental Sciences</a></li>
                    <li><a href="https://www.nationalgeographic.com" target="_blank" rel="noopener noreferrer">National Geographic Environment</a></li>
                    <li><a href="https://www.sciencedirect.com" target="_blank" rel="noopener noreferrer">ScienceDirect - Environmental Science</a></li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Defining Multidisciplinary, Interdisciplinary, and Transdisciplinary</h3>
                <p>
                    Before diving into specific disciplines, it's crucial to understand the different ways knowledge can be integrated. These terms represent increasingly sophisticated levels of integration:
                </p>

                <h4>Multidisciplinary Approach</h4>
                <p>
                    Research involves multiple disciplines working on a problem, each contributing from their own perspective, but maintaining distinct boundaries. Think of it as parallel play—disciplines work side-by-side but don't deeply integrate their approaches.
                </p>

                <h4>Interdisciplinary Approach</h4>
                <p>
                    Research goes further by synthesizing insights from multiple disciplines into a new, integrated understanding. Disciplines don't just contribute—they interact, share methods, and create hybrid approaches.
                </p>

                <h4>Transdisciplinary Approach</h4>
                <p>
                    Research transcends traditional disciplines entirely, including non-academic stakeholders (communities, policymakers, practitioners) as equal partners in knowledge creation. It emphasizes real-world problem-solving over disciplinary advancement.
                </p>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', textAlign: 'center' }}>
                            <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '10px' }}>Multidisciplinary</div>
                                <p style={{ fontSize: '0.8em', color: '#334155', margin: 0 }}>Discipline A works independently; Discipline B works independently; Results combined later</p>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0369a1', marginBottom: '10px' }}>Interdisciplinary</div>
                                <p style={{ fontSize: '0.8em', color: '#0c4a6e', margin: 0 }}>Disciplines collaborate; Methods integrated; Synthesized understanding</p>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#166534', marginBottom: '10px' }}>Transdisciplinary</div>
                                <p style={{ fontSize: '0.8em', color: '#14532d', margin: 0 }}>Transcends disciplines; Includes stakeholders; Co-created solutions</p>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 1: Three levels of integrating knowledge across disciplines
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Natural Sciences: Understanding Natural Systems</h3>
                <p>
                    Natural sciences form the foundational pillar of environmental science, providing the tools and frameworks to understand how nature works.
                </p>

                <h4>Biology & Ecology</h4>
                <p>
                    Biology provides understanding of life at all scales—from molecular genetics to ecosystem dynamics. Ecology specifically examines relationships between organisms and their environment. Key concepts include Biodiversity, Food webs, and Ecosystem services.
                </p>

                <h4>Chemistry</h4>
                <p>
                    Environmental chemistry tracks how substances move through and affect environmental systems. It covers Biogeochemical cycles, Toxicology, and Atmospheric chemistry.
                </p>

                <h4>Geology & Earth Sciences</h4>
                <p>
                    Provides understanding of Earth's structure and history. It reveals how land, water, and atmosphere interact over geological timescales, including soil formation and natural hazards.
                </p>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                            {['Biology & Ecology', 'Chemistry', 'Physics', 'Geology & Earth Sci', 'Atmospheric Science', 'Marine Science'].map((item) => (
                                <span key={item} style={{ backgroundColor: '#f0fdf4', color: '#166534', padding: '8px 20px', borderRadius: '20px', fontSize: '0.85em', fontWeight: '600', border: '1px solid #dcfce7' }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div style={{ marginTop: '30px', borderTop: '2px dashed #e2e8f0', paddingTop: '20px', textAlign: 'center' }}>
                            <span style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#94a3b8' }}>Foundation: Natural Systems</span>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 2: Natural sciences contributing to environmental understanding
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Social Sciences: Understanding Human Dimensions</h3>
                <p>
                    Since humans cause most environmental problems and must implement solutions, understanding human behavior, societies, and decision-making is absolutely essential.
                </p>

                <h4>Economics</h4>
                <p>
                    Analyzes how societies allocate scarce resources. Key concepts include Externalities (like pollution), Common pool resources, and Cost-benefit analysis.
                </p>

                <h4>Political Science</h4>
                <p>
                    Examines how power, governance, and institutions shape environmental outcomes. It explains why some environmental policies succeed while others fail.
                </p>

                <h4>Sociology & Anthropology</h4>
                <p>
                    Studies social behavior and cultural diversity. Key concepts include Environmental justice and Indigenous ecological knowledge.
                </p>

                <h3>Social Dimensions of Environmental Change</h3>
                <div style={{ maxWidth: '640px', margin: '20px auto 30px' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/mu-PuKBlqlM?si=KtYFKL7-LOMZArrK"
                            title="Social Dimensions"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #f97316', margin: '20px 0' }}>
                    <strong>Real-World Integration: Carbon Pricing</strong>
                    <p style={{ margin: '10px 0 0', fontSize: '0.9em' }}>
                        <strong>Natural Sciences:</strong> Provide climate models showing emission targets needed.<br />
                        <strong>Economics:</strong> Provides tax/trading mechanisms for incentives.<br />
                        <strong>Political Science:</strong> Provides strategies for building coalitions.<br />
                        <strong>Sociology:</strong> Provides understanding of public attitudes.
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Humanities & Applied Fields: Values, Ethics, and Implementation</h3>
                <p>
                    Humanities ask the "should" questions while applied fields translate knowledge into action.
                </p>

                <h4>Philosophy & Ethics</h4>
                <p>
                    Provides frameworks for valuation. Key approaches include Anthropocentrism (human-centered), Biocentrism (life-centered), and Ecocentrism (ecosystem-centered).
                </p>

                <h4>Engineering & Technology</h4>
                <p>
                    Develops practical tools like renewable energy systems, water treatment, and green building design.
                </p>

                <h4>Law</h4>
                <p>
                    Establishes legal frameworks and enforcement mechanisms like the Clean Air Act and international treaties like the Paris Agreement.
                </p>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#64748b', marginBottom: '5px' }}>SCIENCE</div>
                                <div style={{ fontSize: '0.9em', fontWeight: '600' }}>What IS happening?</div>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#fdf2f8', borderRadius: '8px', border: '1px solid #fce7f3', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#be185d', marginBottom: '5px' }}>SOCIAL SCIENCE</div>
                                <div style={{ fontSize: '0.9em', fontWeight: '600' }}>Why ARE people doing this?</div>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#fff7ed', borderRadius: '8px', border: '1px solid #ffedd5', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#c2410c', marginBottom: '5px' }}>HUMANITIES</div>
                                <div style={{ fontSize: '0.9em', fontWeight: '600' }}>What SHOULD we do?</div>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #dcfce7', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#166534', marginBottom: '5px' }}>APPLIED FIELDS</div>
                                <div style={{ fontSize: '0.9em', fontWeight: '600' }}>How DO we implement?</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '25px', backgroundColor: '#111827', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                            INTEGRATED SOLUTION
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 3: Different disciplines answer different questions about the same problem
                    </p>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '8px', border: '1px solid #fecaca', margin: '20px 0' }}>
                    <strong>Common Mistake</strong>
                    <p style={{ margin: '10px 0 0' }}>
                        Thinking science alone can solve environmental problems. Science tells us what is, but not what should be. Humanities address values; social sciences address human behavior; applied fields implement solutions. All are essential.
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Integration in Action: Case Studies</h3>

                <h4>Case Study 1: Managing Chesapeake Bay</h4>
                <p>
                    The Chesapeake Bay restoration represents one of the most comprehensive ecosystem efforts globally. Success required deep integration across fields: Marine Biology tracked species, Chemistry measured pollution levels, Economics valued services, and Law established the TMDL regulations for pollution limits. No single discipline could have achieved the recovery of oyster populations and water quality.
                </p>

                <h4>Case Study 2: IPCC Climate Assessment</h4>
                <p>
                    The IPCC structure consists of three Working Groups: Physical Science (Working Group I), Impacts & Adaptation (Working Group II), and Mitigation (Working Group III). Their credibility depends on comprehensive assessment that synthesizes physics, biology, economics, and policy analysis into a single authoritative voice for global policy.
                </p>

                <Quiz
                    title="Module 1.2 Quiz: Multidisciplinary Foundations"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={2}
                />

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div className="resources-section" style={{ marginTop: '40px' }}>
                    <h3>Learning Resources & Further Exploration</h3>
                    <p>Comprehensive learning resources and tutorials to deepen your understanding.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Tutorial Platforms</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.geeksforgeeks.org" target="_blank">GeeksforGeeks</a></li>
                                <li><a href="https://www.javatpoint.com" target="_blank">JavaTpoint</a></li>
                                <li><a href="https://www.tutorialspoint.com" target="_blank">TutorialsPoint</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Video Learning</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.youtube.com/@crashcourse" target="_blank">Crash Course</a></li>
                                <li><a href="https://www.youtube.com/@TEDEd" target="_blank">TED-Ed</a></li>
                                <li><a href="https://www.khanacademy.org" target="_blank">Khan Academy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Academic Resources</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.sciencedirect.com" target="_blank">ScienceDirect</a></li>
                                <li><a href="https://www.jstor.org" target="_blank">JSTOR</a></li>
                                <li><a href=" scholar.google.com" target="_blank">Google Scholar</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Organizations</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.unep.org" target="_blank">UNEP</a></li>
                                <li><a href="https://www.epa.gov" target="_blank">EPA</a></li>
                                <li><a href="https://www.worldwildlife.org" target="_blank">WWF</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Online Courses</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.coursera.org" target="_blank">Coursera</a></li>
                                <li><a href="https://www.edx.org" target="_blank">edX</a></li>
                                <li><a href="https://www.futurelearn.com" target="_blank">FutureLearn</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>News & Updates</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.nationalgeographic.com/environment" target="_blank">Nat Geo Environment</a></li>
                                <li><a href="https://www.scientificamerican.com" target="_blank">Scientific American</a></li>
                                <li><a href="https://www.nature.com" target="_blank">Nature</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Module1_2;
