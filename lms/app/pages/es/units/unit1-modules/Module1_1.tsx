'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_1: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which of the following BEST describes why Environmental Studies is considered an interdisciplinary field?",
            options: [
                "It focuses exclusively on biology and ecology to understand natural systems",
                "It combines only natural sciences like chemistry, physics, and geology",
                "It integrates knowledge from natural sciences, social sciences, humanities, and applied fields to address complex environmental problems",
                "It studies multiple ecosystems across different geographic regions"
            ],
            correctAnswer: 2,
            explanation: "Environmental Studies is interdisciplinary because environmental problems cannot be understood or solved from any single perspective. It requires natural sciences (how systems work), social sciences (human dimensions), humanities (values and ethics), and applied fields (implementing solutions)."
        },
        {
            question: "The Chipko Movement in India demonstrated which of the following about public environmental awareness?",
            options: [
                "Only government and corporate actions can effectively address environmental problems",
                "Informed, organized communities can drive environmental policy change through grassroots activism",
                "Environmental problems can be solved without public participation",
                "Economic development is more important than forest conservation"
            ],
            correctAnswer: 1,
            explanation: "The Chipko Movement showed that grassroots awareness and activism can drive policy change. Village women, through education and organized nonviolent resistance, attracted media attention and built public awareness."
        },
        {
            question: "Which statement correctly describes ecosystem services and their economic value?",
            options: [
                "Ecosystem services are only important for wildlife, not human economies",
                "Ecosystem services like pollination, water purification, and climate regulation are worth trillions annually but often undervalued in decisions",
                "Ecosystem services have no economic value because they are provided free by nature",
                "Only provisioning services (food, timber) have economic value"
            ],
            correctAnswer: 1,
            explanation: "Ecosystem services—provisioning, regulating, cultural, and supporting—are estimated at $33-125 trillion annually. They are often undervalued in decisions until they are lost."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.1</div>
                <div className="lesson-title-main">
                    <h1>Definition, Scope and Importance - Need for Public Awareness</h1>
                </div>
            </div>

            <section className="content-section">
                <h3>What You'll Master</h3>
                <p><strong>Learning Objectives</strong></p>
                <ul>
                    <li>Define "environment" and distinguish between its various components (biotic, abiotic, natural, built, social)</li>
                    <li>Analyze the multidisciplinary scope of environmental studies spanning natural sciences, social sciences, and humanities</li>
                    <li>Evaluate the critical importance of environmental studies for human survival, economic prosperity, and social justice</li>
                    <li>Explain the need for public awareness in addressing environmental challenges and driving sustainable development</li>
                    <li>Apply environmental concepts to real-world scenarios, case studies, and contemporary global challenges</li>
                </ul>

                <h3>Why This Topic Matters</h3>
                <p>
                    Imagine waking up one morning to discover that the air you breathe has become toxic, the water from your tap is contaminated, and the food you eat is unsafe. This isn't science fiction—millions of people worldwide face these realities daily due to environmental degradation. Environmental Studies exists to prevent such scenarios and ensure a sustainable future for all life on Earth.

                    This foundational topic is like learning the alphabet before writing—you cannot understand climate change, biodiversity loss, pollution control, or sustainable development without first grasping what "environment" means, what Environmental Studies encompasses, why it matters, and why everyone needs to be aware of environmental issues.

                    The practical importance is immense: environmental professionals are among the fastest-growing job markets globally. Corporations need sustainability managers, governments require environmental policy experts, NGOs seek conservation specialists, and communities need environmental educators.
                </p>


                <h3>Introduction to Environmental Science</h3>
                <p>Crash Course provides an excellent overview of what environmental science is and why it matters.</p>
                <div style={{ maxWidth: '640px', margin: '20px 0' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/5QxxaVfgQ3k?si=VkJrD9ND4mNnDnlb"
                            title="Intro to ES"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <h3>Quick Learning Resources</h3>
                <ul>
                    <li><a href="https://www.khanacademy.org/science/biology/ecology" target="_blank" rel="noopener noreferrer">Khan Academy - Ecology & Environment</a></li>
                    <li><a href="https://www.nationalgeographic.com/environment" target="_blank" rel="noopener noreferrer">National Geographic Environment</a></li>
                    <li><a href="https://www.unep.org/" target="_blank" rel="noopener noreferrer">UN Environment Programme</a></li>
                    <li><a href="https://www.epa.gov/students" target="_blank" rel="noopener noreferrer">EPA - Students & Teachers</a></li>
                </ul>

                <h3>Real-World Applications</h3>
                <ul>
                    <li><strong>Corporate Sustainability:</strong> Companies like Unilever, Patagonia, and Tesla use environmental knowledge to develop sustainable products</li>
                    <li><strong>Government Policy:</strong> EPA and environmental agencies worldwide develop regulations protecting air quality, water safety, and biodiversity</li>
                    <li><strong>Community Action:</strong> Grassroots movements use environmental awareness to demand clean-ups and promote sustainable development</li>
                    <li><strong>Climate Action:</strong> The Paris Agreement is built on environmental science principles and public awareness</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Understanding "Environment": A Comprehensive Definition</h3>
                <p>
                    The term "environment" comes from the French word <strong>"environner,"</strong> meaning "to surround" or "to encircle." It encompasses everything that surrounds us—the air we breathe, the water we drink, and the land we walk on.
                </p>
                <p>
                    <strong>Scientific Perspective:</strong> The environment is the sum total of all external conditions and influences that affect the life, development, and survival of an organism. It is external, active, and includes both living and non-living components.
                </p>

                <h4>Key Components</h4>
                <ul>
                    <li><strong>Biotic:</strong> All living organisms (plants, animals, bacteria, fungi)</li>
                    <li><strong>Abiotic:</strong> Non-living factors (air, water, soil, sunlight, temperature)</li>
                    <li><strong>Natural Environment:</strong> Forests, oceans, mountains, wildlife</li>
                    <li><strong>Built Environment:</strong> Cities, buildings, roads, infrastructure</li>
                </ul>

                <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '750px', margin: '0 auto', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        {/* Connecting Lines (Background) */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '2px', height: '100%', background: 'linear-gradient(to bottom, transparent, #cbd5e1, transparent)', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(to right, transparent, #cbd5e1, transparent)', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>

                        {/* Central Node */}
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            backgroundColor: '#10b981',
                            color: 'white',
                            padding: '30px',
                            borderRadius: '50%',
                            width: '180px',
                            height: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4), 0 8px 10px -6px rgba(16, 185, 129, 0.4)',
                            border: '4px solid white'
                        }}>
                            <div style={{ fontWeight: '800', fontSize: '1.2em', lineHeight: '1.1' }}>ENVIRONMENT</div>
                            <div style={{ fontSize: '0.7em', marginTop: '5px', opacity: 0.9 }}>(Sum of all factors)</div>
                        </div>

                        {/* Top Node: NATURAL */}
                        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fcd34d', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '200px' }}>
                                <div style={{ fontWeight: '800', color: '#92400e', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>NATURAL</div>
                                <div style={{ fontSize: '0.75em', color: '#b45309' }}>Forests, Oceans, Mountains, Wildlife</div>
                            </div>
                        </div>

                        {/* Bottom Node: BUILT */}
                        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '200px' }}>
                                <div style={{ fontWeight: '800', color: '#334155', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>BUILT</div>
                                <div style={{ fontSize: '0.75em', color: '#64748b' }}>Cities, Buildings, Roads, Infrastructure</div>
                            </div>
                        </div>

                        {/* Left Node: BIOTIC */}
                        <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '180px' }}>
                                <div style={{ fontWeight: '800', color: '#166534', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>BIOTIC</div>
                                <ul style={{ fontSize: '0.75em', color: '#15803d', margin: 0, padding: 0, listStyle: 'none' }}>
                                    <li>Plants</li>
                                    <li>Animals</li>
                                    <li>Microorganisms</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Node: ABIOTIC */}
                        <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#eff6ff', border: '1px solid #93c5fd', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '180px' }}>
                                <div style={{ fontWeight: '800', color: '#1e40af', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>ABIOTIC</div>
                                <ul style={{ fontSize: '0.75em', color: '#1d4ed8', margin: 0, padding: 0, listStyle: 'none' }}>
                                    <li>Air & Water</li>
                                    <li>Soil & Minerals</li>
                                    <li>Sunlight & Climate</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '30px', margin: '30px 10px 0' }}>
                        Figure 1: Environment consists of interconnected biotic and abiotic components forming natural and built environments
                    </p>
                </div>

                <h4>Learn More</h4>
                <ul>
                    <li><a href="https://www.britannica.com/science/environment-ecology" target="_blank" rel="noopener noreferrer">Britannica - Environment Definition</a></li>
                    <li><a href="https://biologydictionary.net/environment/" target="_blank" rel="noopener noreferrer">Biology Dictionary - Environment</a></li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Scope of Environmental Studies: A Multidisciplinary Field</h3>
                <p>
                    Environmental Studies is unique because it is fundamentally interdisciplinary—it integrates knowledge from natural sciences, social sciences, humanities, and applied fields. Understanding environmental problems and solutions requires expertise from dozens of specialties.
                </p>

                <h4>Natural Sciences Contribution</h4>
                <p>
                    Ecology provides understanding of how organisms interact. Biology explains organism structure and evolution. Chemistry is essential for understanding pollution and biogeochemical cycles. Physics explains energy flow and climate dynamics.
                </p>

                <h4>Social Sciences Contribution</h4>
                <p>
                    Economics analyzes costs/benefits of environmental actions. Political Science examines governance and policy. Sociology studies human behavior and social movements. Psychology investigates behavior change and environmental perception.
                </p>

                <h4>Humanities & Applied Fields</h4>
                <p>
                    Philosophy addresses environmental ethics. History provides context. Engineering develops technologies. Law provides regulatory frameworks.
                </p>

                <h3>Why Environmental Science Matters</h3>
                <p>Explores the interdisciplinary nature of environmental science and its real-world applications.</p>
                <div style={{ maxWidth: '640px', margin: '20px 0' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/8FjhsODW1q4?si=VkJrD9ND4mNnDnlb"
                            title="Importance of ES"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '750px', margin: '0 auto', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        {/* Connecting Lines (Background) */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '2px', height: '100%', background: 'linear-gradient(to bottom, transparent, #cbd5e1, transparent)', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(to right, transparent, #cbd5e1, transparent)', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>

                        {/* Central Node */}
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            padding: '25px',
                            borderRadius: '50%',
                            width: '180px',
                            height: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.4)',
                            border: '4px solid white'
                        }}>
                            <div style={{ fontWeight: '800', fontSize: '1.1em', lineHeight: '1.1' }}>ENVIRONMENTAL STUDIES</div>
                            <div style={{ fontSize: '0.65em', marginTop: '5px', opacity: 0.9 }}>(Interdisciplinary Web)</div>
                        </div>

                        {/* Top Node: NATURAL SCIENCES */}
                        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '200px' }}>
                                <div style={{ fontWeight: '800', color: '#075985', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>NATURAL SCIENCES</div>
                                <div style={{ fontSize: '0.75em', color: '#0369a1' }}>Biology, Chemistry, Physics, Geology</div>
                            </div>
                        </div>

                        {/* Bottom Node: APPLIED FIELDS */}
                        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#f9fafb', border: '1px solid #cbd5e1', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '200px' }}>
                                <div style={{ fontWeight: '800', color: '#334155', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>APPLIED FIELDS</div>
                                <div style={{ fontSize: '0.75em', color: '#64748b' }}>Engineering, Law, Planning, Management</div>
                            </div>
                        </div>

                        {/* Left Node: SOCIAL SCIENCES */}
                        <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#fdf2f8', border: '1px solid #fbcfe8', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '180px' }}>
                                <div style={{ fontWeight: '800', color: '#9d174d', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>SOCIAL SCIENCES</div>
                                <div style={{ fontSize: '0.75em', color: '#be185d' }}>Economics, Politics, Sociology, Psychology</div>
                            </div>
                        </div>

                        {/* Right Node: HUMANITIES */}
                        <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
                            <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '180px' }}>
                                <div style={{ fontWeight: '800', color: '#6b21a8', fontSize: '0.8em', textTransform: 'uppercase', marginBottom: '4px' }}>HUMANITIES</div>
                                <div style={{ fontSize: '0.75em', color: '#7e22ce' }}>Philosophy, History, Ethics, Literature</div>
                            </div>
                        </div>

                    </div>
                    <p style={{ fontSize: '0.8em', fontStyle: 'italic', textAlign: 'center', color: '#888', marginTop: '30px' }}>
                        Figure 2: Interdisciplinary nature of Environmental Studies
                    </p>
                </div>

                <h4>Explore More</h4>
                <ul>
                    <li><a href="https://www.coursera.org/browse/physical-science-and-engineering/environmental-science-and-sustainability" target="_blank" rel="noopener noreferrer">Coursera - Environmental Science</a></li>
                    <li><a href="https://www.edx.org/learn/environmental-science" target="_blank" rel="noopener noreferrer">edX - Environmental Studies Courses</a></li>
                    <li><a href="https://www.futurelearn.com/subjects/nature-and-environment-courses" target="_blank" rel="noopener noreferrer">FutureLearn - Environment Courses</a></li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Importance of Environmental Studies</h3>
                <p>Environmental Studies addresses the most critical challenges facing humanity. Its importance operates at multiple interconnected levels:</p>

                <h4>Human Survival and Health</h4>
                <p>
                    Human survival depends on environmental systems. Air pollution kills approximately 7 million people annually worldwide—more than tuberculosis, AIDS, and malaria combined. Water pollution causes diseases like cholera and typhoid. Climate change intensifies heatwaves and threatens food security.
                </p>

                <h4>Economic Prosperity</h4>
                <p>
                    Ecosystem services are estimated worth $33-125 trillion annually, far exceeding global GDP. When environmental systems degrade, economic productivity suffers. Conversely, sustainability creates opportunities: renewable energy employs millions globally.
                </p>

                <h4>Social Justice</h4>
                <p>
                    Environmental problems disproportionately affect marginalized communities—a pattern called environmental injustice. Polluting facilities are more common in low-income neighborhoods, while parks and clean air are more accessible in affluent areas.
                </p>

                <h3>Our Planet Documentary</h3>
                <p>Netflix's stunning documentary series showing why environmental protection matters for all life on Earth.</p>


                <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '8px', border: '1px solid #feb2b2', margin: '20px 0' }}>
                    <strong>Critical Statistics</strong>
                    <ul>
                        <li>7 million deaths/year from air pollution (WHO)</li>
                        <li>1 million species threatened with extinction</li>
                        <li>75% of land surface significantly altered by humans</li>
                        <li>90% of people breathe polluted air</li>
                    </ul>
                    <p style={{ fontSize: '0.7em', color: '#666' }}>Source: World Health Organization</p>
                </div>

                <h4>Key Organizations</h4>
                <ul>
                    <li><a href="https://www.worldwildlife.org/" target="_blank" rel="noopener noreferrer">World Wildlife Fund (WWF)</a></li>
                    <li><a href="https://www.greenpeace.org/international/" target="_blank" rel="noopener noreferrer">Greenpeace International</a></li>
                    <li><a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">IPCC - Climate Change</a></li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Need for Public Awareness: The Critical Missing Link</h3>
                <p>
                    Knowledge confined to experts cannot solve environmental problems—solutions require public understanding, support, and action. Environmental awareness is the bridge between scientific understanding and societal action.
                </p>

                <h4>Why Public Awareness is Essential</h4>
                <ol>
                    <li><strong>Democratic Decision-Making:</strong> Citizens ultimately determine environmental policies through elections and political pressure. If voters don't understand environmental issues, politicians won't prioritize them. The first Earth Day (1970) mobilized 20 million Americans, creating momentum for landmark environmental laws.</li>
                    <li><strong>Behavior Change:</strong> Many environmental problems stem from collective behaviors—energy consumption, transportation, diet, waste generation. Addressing these requires awareness of problems and solutions. Growing awareness of ocean plastic has driven reusable bag adoption and plastic straw bans.</li>
                    <li><strong>Social Movement Building:</strong> Significant progress results from social movements—organized collective action. The Chipko Movement, climate strikes, and environmental justice movements all required public awareness to mobilize participants.</li>
                    <li><strong>Market Shifts:</strong> Consumer awareness shapes demand for sustainable products. As people learn about environmental impacts, markets respond with organic food, electric vehicles, and renewable energy options.</li>
                </ol>

                <h3>The Power of Youth Climate Activism</h3>
                <p>Greta Thunberg's TED Talk demonstrates how public awareness can drive global climate action.</p>
                <div style={{ maxWidth: '640px', margin: '20px 0' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/EAmmUIEsN9A?si=gdyr_cMK6xOrOXMz"
                            title="Greta Thunberg TED"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderLeft: '4px solid #16a34a', borderRadius: '4px', margin: '20px 0' }}>
                    <strong>Success Story: The Chipko Movement</strong>
                    <p>In 1973, women in India literally hugged trees to prevent logging. Their grassroots awareness campaign proved that informed communities can drive policy change.</p>
                    <ul>
                        <li>Built public understanding of deforestation impacts</li>
                        <li>Used nonviolent resistance to attract media attention</li>
                        <li>Led to logging bans in sensitive Himalayan regions</li>
                        <li>Inspired environmental movements worldwide</li>
                    </ul>
                </div>

                <h4>Take Action</h4>
                <ul>
                    <li><a href="https://fridaysforfuture.org/" target="_blank" rel="noopener noreferrer">Fridays for Future</a></li>
                    <li><a href="https://www.earthday.org/" target="_blank" rel="noopener noreferrer">Earth Day Network</a></li>
                    <li><a href="https://350.org/" target="_blank" rel="noopener noreferrer">350.org - Climate Action</a></li>
                    <li><a href="https://www.sierraclub.org/" target="_blank" rel="noopener noreferrer">Sierra Club</a></li>
                </ul>

                <div style={{ backgroundColor: '#fffaf0', padding: '20px', borderRadius: '8px', border: '1px solid #fbd38d', margin: '20px 0' }}>
                    <strong>Barriers to Environmental Awareness</strong>
                    <ul>
                        <li>Complexity: Many issues involve technical concepts difficult to understand</li>
                        <li>Psychological Distance: Problems feel distant (affecting other places/times)</li>
                        <li>Misinformation: Deliberate doubt manufacturing by vested interests</li>
                        <li>Information Overload: Environmental messages compete for attention</li>
                        <li>Socioeconomic Barriers: Unequal access to environmental education</li>
                    </ul>
                </div>

                <Quiz
                    title="Module 1.1 Quiz: Environment Foundations"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={1}
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
                                <li><a href="https://scholar.google.com" target="_blank">Google Scholar</a></li>
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

export default Module1_1;
