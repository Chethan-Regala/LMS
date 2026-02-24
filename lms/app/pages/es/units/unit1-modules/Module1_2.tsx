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

                <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto' }}>

                        {/* Top Node */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px', position: 'relative' }}>
                            <div style={{
                                backgroundColor: '#ef4444',
                                color: 'white',
                                padding: '15px 30px',
                                borderRadius: '12px',
                                fontWeight: '800',
                                boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.3)',
                                zIndex: 2,
                                border: '3px solid white'
                            }}>
                                Environmental Problem
                            </div>
                            {/* Branching lines from top to middle */}
                            <svg style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '60px', zIndex: 1 }}>
                                <path d="M 450 0 L 450 30 M 450 30 L 150 30 L 150 60 M 450 30 L 450 60 M 450 30 L 750 30 L 750 60" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                            </svg>
                        </div>

                        {/* Middle Level */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '80px', position: 'relative' }}>

                            {/* Multidisciplinary Column */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '0.9em', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.2)', zIndex: 2 }}>
                                    Multidisciplinary
                                </div>
                                <svg style={{ position: 'absolute', top: '40px', left: 0, width: '100%', height: '40px', zIndex: 1 }}>
                                    <path d="M 140 0 L 140 20 M 140 20 L 40 20 L 40 40 M 140 20 L 140 40 M 140 20 L 240 20 L 240 40" fill="none" stroke="#cbd5e1" strokeDasharray="4" strokeWidth="1.5" />
                                </svg>
                                <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center' }}>
                                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#1e40af' }}>Discipline A works independently</div>
                                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#1e40af' }}>Discipline B works independently</div>
                                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#1e40af' }}>Results combined later</div>
                                </div>
                            </div>

                            {/* Interdisciplinary Column */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div style={{ backgroundColor: '#10b981', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '0.9em', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)', zIndex: 2 }}>
                                    Interdisciplinary
                                </div>
                                <svg style={{ position: 'absolute', top: '40px', left: 0, width: '100%', height: '40px', zIndex: 1 }}>
                                    <path d="M 140 0 L 140 20 M 140 20 L 40 20 L 40 40 M 140 20 L 140 40 M 140 20 L 240 20 L 240 40" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                                </svg>
                                <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center' }}>
                                    <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#065f46' }}>Disciplines collaborate</div>
                                    <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#065f46' }}>Methods integrated</div>
                                    <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#065f46' }}>Synthesized understanding</div>
                                </div>
                            </div>

                            {/* Transdisciplinary Column */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '0.9em', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(139, 92, 246, 0.2)', zIndex: 2 }}>
                                    Transdisciplinary
                                </div>
                                <svg style={{ position: 'absolute', top: '40px', left: 0, width: '100%', height: '40px', zIndex: 1 }}>
                                    <path d="M 140 0 L 140 20 M 140 20 L 40 20 L 40 40 M 140 20 L 140 40 M 140 20 L 240 20 L 240 40" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                                </svg>
                                <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center' }}>
                                    <div style={{ backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#5b21b6' }}>Transcends disciplines</div>
                                    <div style={{ backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#5b21b6' }}>Includes stakeholders</div>
                                    <div style={{ backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', padding: '10px', borderRadius: '6px', fontSize: '0.7em', width: '90px', textAlign: 'center', color: '#5b21b6' }}>Co-created solutions</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '20px' }}>
                        Figure 1: Three levels of integrating knowledge across disciplines
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Natural Sciences: Understanding Natural Systems</h3>
                <p>
                    Natural sciences form the foundational pillar of environmental science, providing the tools and frameworks to understand how nature works. These disciplines reveal the physical, chemical, and biological processes that govern Earth's systems and how human activities disrupt them.
                </p>

                <h4>Biology & Ecology</h4>
                <p>
                    What they contribute: Biology provides understanding of life at all scales—from molecular genetics to ecosystem dynamics. Ecology specifically examines relationships between organisms and their environment.

                    Key concepts:

                    Biodiversity: The variety of life and its importance for ecosystem resilience
                    Food webs: Energy flow and trophic interactions
                    Population dynamics: How species populations change over time
                    Ecosystem services: Benefits humans derive from nature
                    Environmental applications: Conservation biology, habitat restoration, species management, invasive species control, climate impact assessment on biodiversity.

                    🔗 Integration example: Ecologists studying coral reef decline collaborate with chemists to measure ocean acidification, economists to value reef ecosystem services, and social scientists to understand fishing community dependencies.
                </p>

                <h4>Chemistry</h4>
                <p>
                    What it contributes: Chemistry explains the composition, structure, and transformations of matter. Environmental chemistry specifically tracks how substances move through and affect environmental systems.

                    Key concepts:

                    Biogeochemical cycles: How elements (C, N, P) cycle through Earth systems
                    Toxicology: How chemicals affect living organisms
                    Pollution chemistry: Source, transport, and fate of pollutants
                    Atmospheric chemistry: Reactions in the atmosphere affecting climate and air quality
                    Environmental applications: Water quality assessment, air pollution monitoring, hazardous waste management, climate change (greenhouse gases), green chemistry development.
                </p>

                <h4>Geology & Earth Sciences</h4>
                <p>
                    What they contribute: Geology provides understanding of Earth's structure, processes, and history. It reveals how land, water, and atmosphere interact over geological timescales.

                    Key concepts:

                    Rock cycle & soil formation: Understanding Earth materials and their transformations
                    Natural resources: Location, extraction, and sustainable use of minerals and energy
                    Natural hazards: Earthquakes, volcanoes, landslides, and their impacts
                    Paleoclimatology: Earth's climate history providing context for current changes
                    Environmental applications: Resource management, hazard assessment, groundwater contamination tracking, carbon sequestration in geological formations, mining impact assessment
                </p>

                <div style={{ backgroundColor: '#f9fafb', padding: '60px 40px', borderRadius: '24px', border: '1px solid #f1f5f9', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', minHeight: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        {/* Connecting Lines (Background) */}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                            <line x1="50%" y1="50%" x2="50%" y2="60" stroke="#cbd5e1" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="50%" y2="490" stroke="#cbd5e1" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="160" y2="140" stroke="#cbd5e1" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="640" y2="140" stroke="#cbd5e1" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="160" y2="410" stroke="#cbd5e1" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="640" y2="410" stroke="#cbd5e1" strokeWidth="2" />
                        </svg>

                        {/* Central Node */}
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            backgroundColor: '#10b981',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '50%',
                            width: '200px',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            border: '6px solid white'
                        }}>
                            <div style={{ fontWeight: '900', fontSize: '1.4em', lineHeight: '1.1', letterSpacing: '0.05em' }}>NATURAL</div>
                            <div style={{ fontWeight: '900', fontSize: '1.4em', lineHeight: '1.1', letterSpacing: '0.05em' }}>SCIENCES</div>
                        </div>

                        {/* Node 1: Atmospheric Science (Top) */}
                        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#f3e8ff', border: '3px solid #d8b4fe', padding: '20px', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: '#6b21a8', fontSize: '0.9em' }}>Atmospheric Science</div>
                            </div>
                        </div>

                        {/* Node 2: Chemistry (Top Right) */}
                        <div style={{ position: 'absolute', top: '70px', right: '10px', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#dbeafe', border: '3px solid #93c5fd', padding: '20px', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: '#1e40af', fontSize: '0.9em' }}>Chemistry</div>
                            </div>
                        </div>

                        {/* Node 3: Geology & Earth Sci (Bottom Right) */}
                        <div style={{ position: 'absolute', bottom: '70px', right: '10px', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#fee2e2', border: '3px solid #fca5a5', padding: '20px', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: '#991b1b', fontSize: '0.9em' }}>Geology & Earth Sci</div>
                            </div>
                        </div>

                        {/* Node 4: Marine Science (Bottom) */}
                        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#e0f2fe', border: '3px solid #7dd3fc', padding: '20px', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: '#075985', fontSize: '0.9em' }}>Marine Science</div>
                            </div>
                        </div>

                        {/* Node 5: Physics (Bottom Left) */}
                        <div style={{ position: 'absolute', bottom: '70px', left: '10px', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#fef9c3', border: '3px solid #fde047', padding: '20px', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: '#854d0e', fontSize: '0.9em' }}>Physics</div>
                            </div>
                        </div>

                        {/* Node 6: Biology & Ecology (Top Left) */}
                        <div style={{ position: 'absolute', top: '70px', left: '10px', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#f0fdf4', border: '3px solid #86efac', padding: '20px', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: '#166534', fontSize: '0.9em' }}>Biology & Ecology</div>
                            </div>
                        </div>

                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px' }}>
                        Figure 2: Natural sciences contributing to environmental understanding
                    </p>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.2em' }}>🔬</span> Why Multiple Natural Sciences?
                    </h3>
                    <p style={{ color: '#475569', lineHeight: '1.6' }}>
                        Environmental systems involve matter, energy, life, and Earth processes simultaneously. Understanding water pollution requires <strong>chemistry</strong> (contaminant properties), <strong>biology</strong> (organism impacts), <strong>geology</strong> (groundwater flow), and <strong>physics</strong> (water movement). No single natural science provides complete understanding.
                    </p>
                    <div style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
                        <p style={{ fontWeight: 'bold', color: '#334155', marginBottom: '10px', fontSize: '0.9em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.1em' }}>🔗</span> Explore Natural Sciences:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85em', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                            <li><a href="https://www.britannica.com/science/ecology" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>Britannica - Ecology</a></li>
                            <li><a href="https://www.acs.org/content/acs/en/greenchemistry.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>ACS - Green Chemistry</a></li>
                            <li><a href="https://www.usgs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>USGS - Earth Science</a></li>
                        </ul>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Social Sciences: Understanding Human Dimensions</h3>
                <p>
                    If natural sciences explain how nature works, social sciences explain how humans work—individually and collectively. Since humans cause most environmental problems and must implement solutions, understanding human behavior, societies, and decision-making is absolutely essential.
                </p>

                <h4>Economics</h4>
                <p>
                    What it contributes: Economics analyzes how societies allocate scarce resources, make decisions under constraints, and respond to incentives. Environmental economics specifically addresses market failures, resource valuation, and policy design.

                    Key concepts:

                    Externalities: Costs/benefits affecting those not involved in transactions (pollution as negative externality)
                    Common pool resources: Resources difficult to exclude users from or limit use (fisheries, atmosphere)
                    Cost-benefit analysis: Comparing costs and benefits of environmental actions
                    Market mechanisms: Carbon taxes, cap-and-trade, payments for ecosystem services
                    Environmental applications: Designing environmental policies, valuing ecosystem services, analyzing sustainable development, evaluating renewable energy economics, carbon pricing mechanisms.

                    🔗 Integration example: Economists designing carbon taxes need climate scientists to quantify emissions impacts, engineers to assess technology costs, and political scientists to understand policy feasibility.
                </p>

                <h4>Political Science</h4>
                <p>
                    What it contributes: Political science examines how power, governance, and institutions shape environmental outcomes. It explains why some environmental policies succeed while others fail.

                    Key concepts:

                    Environmental governance: Multi-level governance from local to global
                    Policy analysis: How environmental laws are made, implemented, and enforced
                    International relations: Transboundary issues requiring cooperation
                    Advocacy & activism: How social movements influence environmental policy
                    Environmental applications: International climate negotiations, environmental regulation design, protected area governance, conflict resolution over natural resources.


                </p>

                <h4>Sociology & Anthropology</h4>
                <p>
                    What they contribute: Sociology studies social behavior, institutions, and inequality. Anthropology examines cultural diversity, traditional knowledge, and human-environment relationships across societies.

                    Key concepts:

                    Environmental justice: Inequitable distribution of environmental harms/benefits
                    Social movements: Collective action for environmental change
                    Indigenous knowledge: Traditional ecological knowledge and sustainable practices
                    Consumption patterns: Social factors driving resource use
                    Environmental applications: Community-based conservation, environmental justice advocacy, understanding consumption behavior, incorporating traditional knowledge.
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
                    Humanities ask the "should" questions that science cannot answer: What do we owe to nature? To future generations? To each other? Applied fields translate knowledge into action through technology, law, design, and management.
                </p>

                <h4>Philosophy & Ethics</h4>
                <p>
                    What they contribute: Philosophical frameworks for environmental values and ethical decision-making. Questions about moral obligations to nature, animals, and future generations.

                    Key approaches:

                    Anthropocentrism: Human-centered environmental ethics
                    Biocentrism: Life-centered ethics valuing all living things
                    Ecocentrism: Ecosystem-centered ethics valuing ecological wholes
                    Deep ecology: Intrinsic value of nature independent of human use
                </p>

                <h4>Engineering & Technology</h4>
                <p>
                    What they contribute: Practical tools and technologies for environmental protection, pollution control, resource efficiency, and sustainable infrastructure.

                    Key areas:

                    Renewable energy systems (solar, wind, hydroelectric)
                    Water treatment and purification technologies
                    Waste management and recycling systems
                    Green building and sustainable design
                    Environmental monitoring technologies
                </p>

                <h4>Law</h4>
                <p>
                    What it contributes: Legal frameworks, regulations, and enforcement mechanisms for environmental protection. International environmental law for transboundary issues.

                    Key areas: Environmental Impact Assessment (EIA) requirements, pollution regulations (Clean Air Act, Clean Water Act), international treaties (Paris Agreement, Montreal Protocol), environmental rights and justice.
                </p>

                <div style={{ margin: '40px 0', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '0.9em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#10b981', color: 'white' }}>
                                <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: '800' }}>Discipline Category</th>
                                <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: '800' }}>Primary Question</th>
                                <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: '800' }}>Example Contribution</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '15px 20px', fontWeight: '700', color: '#1e293b' }}>Natural Sciences</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>What is happening?</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>CO₂ levels rising, causing warming</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
                                <td style={{ padding: '15px 20px', fontWeight: '700', color: '#1e293b' }}>Social Sciences</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>Why is it happening?</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>Economic incentives favor fossil fuels</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '15px 20px', fontWeight: '700', color: '#1e293b' }}>Humanities</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>What should we do?</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>Ethical obligations to future generations</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f8fafc' }}>
                                <td style={{ padding: '15px 20px', fontWeight: '700', color: '#1e293b' }}>Applied Fields</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>How do we do it?</td>
                                <td style={{ padding: '15px 20px', color: '#475569' }}>Solar technology, carbon regulations</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fcfcfc', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', margin: '40px 0', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '850px', margin: '0 auto', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        {/* Environmental Problem (Left) */}
                        <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                            <div style={{ backgroundColor: '#ef4444', color: 'white', padding: '12px 15px', borderRadius: '6px', fontWeight: '700', fontSize: '0.85em', boxShadow: '0 4px 6px rgba(239, 68, 68, 0.3)', width: '160px', textAlign: 'center' }}>
                                Environmental Problem
                            </div>
                        </div>

                        {/* Integration Node (Right) */}
                        <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                            <div style={{ backgroundColor: '#1e293b', color: 'white', padding: '12px 15px', borderRadius: '6px', fontWeight: '700', fontSize: '0.85em', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', width: '160px', textAlign: 'center' }}>
                                Integrated Solution
                            </div>
                        </div>

                        {/* Middle Paths (Grid Layout for positioning) */}
                        <div style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gap: '20px', width: '100%', padding: '0 180px' }}>
                            {/* Path 1: Science */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
                                <div style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', fontWeight: '700', width: '100px', textAlign: 'center' }}>Science</div>
                                <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', width: '150px', color: '#334155' }}>What IS happening?</div>
                                {/* SVG Lines */}
                                <svg style={{ position: 'absolute', top: '50%', left: '-20px', width: '20px', height: '0', zIndex: 0 }}><path d="M 0 0 L 20 0" stroke="#94a3b8" strokeWidth="1.5" fill="none" /></svg>
                            </div>

                            {/* Path 2: Social Science */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', fontWeight: '700', width: '100px', textAlign: 'center' }}>Social Science</div>
                                <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', width: '150px', color: '#334155' }}>Why ARE people doing this?</div>
                            </div>

                            {/* Path 3: Humanities */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', fontWeight: '700', width: '100px', textAlign: 'center' }}>Humanities</div>
                                <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', width: '150px', color: '#334155' }}>What SHOULD we do?</div>
                            </div>

                            {/* Path 4: Applied Fields */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ backgroundColor: '#f59e0b', color: 'white', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', fontWeight: '700', width: '100px', textAlign: 'center' }}>Applied Fields</div>
                                <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', padding: '8px 15px', borderRadius: '4px', fontSize: '0.75em', width: '150px', color: '#334155' }}>How DO we implement?</div>
                            </div>
                        </div>

                        {/* Global Connection SVG Overlay */}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                            {/* From Problem to Disciplines */}
                            <path d="M 160 175 Q 180 175, 180 85" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                            <path d="M 160 175 Q 180 175, 180 145" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                            <path d="M 160 175 Q 180 175, 180 205" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                            <path d="M 160 175 Q 180 175, 180 265" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />

                            {/* From Questions to Integrated Solution */}
                            <path d="M 450 85 Q 670 85, 690 175" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                            <path d="M 450 145 Q 670 145, 690 175" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                            <path d="M 450 205 Q 670 205, 690 175" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                            <path d="M 450 265 Q 670 265, 690 175" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                        </svg>

                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center', color: '#888', marginTop: '20px' }}>
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
                    The Problem: The Chesapeake Bay, largest estuary in the United States, has suffered from pollution, overfishing, and habitat loss for decades. Water quality has declined, oyster populations collapsed, and "dead zones" (oxygen-depleted areas) expanded.

                    Why Multidisciplinary Approach Was Essential:

                    Marine Biology & Ecology: Documented species decline, identified pollution effects on food webs, studied oyster reef restoration benefits, and monitored water quality and ecosystem health.

                    Chemistry: Tracked nutrient pollution (nitrogen and phosphorus) from agricultural runoff and sewage, measured oxygen levels in dead zones, and analyzed sediment contamination.

                    Hydrology & Earth Sciences: Mapped watershed boundaries showing pollutant sources, studied sediment transport, and predicted flooding impacts on pollution.

                    Agricultural Science: Developed best management practices reducing fertilizer runoff while maintaining farm productivity.

                    Economics: Valued ecosystem services (commercial fishing, recreation, tourism), conducted cost-benefit analyses of restoration options, and designed incentive programs for farmers.

                    Political Science: Facilitated cooperation among six states and federal government, negotiated pollution reduction agreements, and addressed conflicts between agricultural and environmental interests.

                    Sociology: Studied fishing community dependencies, engaged stakeholders in restoration planning, and addressed environmental justice concerns.

                    Engineering: Designed stormwater management systems, upgraded wastewater treatment plants, and developed oyster reef restoration techniques.

                    Law: Established Total Maximum Daily Load (TMDL) regulations setting pollution limits, created enforcement mechanisms, and defined state responsibilities.

                    The Result: The Chesapeake Bay Program represents one of the most comprehensive ecosystem restoration efforts globally. While challenges remain, water quality has improved, oyster populations are recovering, and the program serves as a model for integrated watershed management. No single discipline could have achieved this—success required deep integration across all fields.
                </p>

                <h4>Case Study 2: IPCC Climate Assessment</h4>
                <p>
                    The Challenge: Provide comprehensive, authoritative assessment of climate change science, impacts, and response options to inform global policy.

Multidisciplinary Structure:

Working Group I (Physical Science): Climate scientists, atmospheric physicists, oceanographers, glaciologists assess physical climate change—temperature rise, sea level, extreme events. Uses physics, chemistry, mathematics, and computer modeling.

Working Group II (Impacts & Adaptation): Ecologists, agricultural scientists, health experts, economists assess climate impacts on ecosystems, agriculture, water, human health, and infrastructure. Examines adaptation options across sectors. Integrates natural and social sciences.

Working Group III (Mitigation): Energy engineers, economists, policy analysts assess emission reduction technologies and policies. Evaluates renewable energy, energy efficiency, carbon capture, and economic instruments. Integrates engineering, economics, and policy analysis.

Why This Works: The IPCC doesn't just compile separate reports—it synthesizes across working groups, showing how physical changes (WG I) create impacts (WG II) requiring both adaptation and mitigation responses (WG III). Thousands of scientists from diverse disciplines collaborate, with social scientists and humanities scholars increasingly involved to address ethics, justice, and policy dimensions.

Impact: IPCC reports form the scientific foundation for international climate negotiations, national climate policies, and corporate sustainability strategies. Their credibility depends on comprehensive, integrated assessment that no single discipline could provide.
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
