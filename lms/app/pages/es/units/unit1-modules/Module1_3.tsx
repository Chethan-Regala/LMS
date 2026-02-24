'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_3: React.FC = () => {
    const quizQuestions = [
        {
            question: "Who coined the term 'ecosystem' in 1935, emphasizing the integration of organisms and their physical environment?",
            options: [
                "Charles Darwin",
                "Arthur Tansley",
                "Rachel Carson",
                "John Muir"
            ],
            correctAnswer: 1,
            explanation: "British ecologist Arthur Tansley coined the term in 1935 to describe the deep interconnection between organisms and their physical environment as a single system."
        },
        {
            question: "According to the 10% Rule of energy transfer, if primary producers (plants) capture 10,000 kcal of energy, how much energy is typically available to the secondary consumers?",
            options: [
                "1,000 kcal",
                "100 kcal",
                "10 kcal",
                "1 kcal"
            ],
            correctAnswer: 1,
            explanation: "Primary producers have 10,000 kcal. Primary consumers (herbivores) get 10% (1,000 kcal). Secondary consumers (carnivores eating herbivores) get 10% of that, which is 100 kcal."
        },
        {
            question: "What is the primary ecological role of decomposers (saprotrophs) like fungi and bacteria?",
            options: [
                "To capture solar energy and produce oxygen",
                "To regulate the population of top predators",
                "To recycle nutrients from dead organic matter back into the environment",
                "To provide the primary substrate for terrestrial ecosystems"
            ],
            correctAnswer: 2,
            explanation: "Decomposers are nature's recyclers; they break down dead matter and release nutrients back into the soil or water, completing the nutrient cycle."
        },
        {
            question: "Which of the following describes an organism that uses chemical energy from inorganic compounds to produce food?",
            options: [
                "Photoautotroph",
                "Chemoautotroph",
                "Detritivore",
                "Saprotroph"
            ],
            correctAnswer: 1,
            explanation: "Chemoautotrophs use chemical energy from inorganic compounds (like sulfur or nitrogen) to produce food, unlike photoautotrophs which use sunlight."
        },
        {
            question: "Most food chains have only 4-5 levels because:",
            options: [
                "Predators at higher levels are too large",
                "Nutrients are not recycled effectively enough",
                "Energy becomes too limited to support higher levels due to the 10% Rule",
                "Biotic factors become more powerful than abiotic factors"
            ],
            correctAnswer: 2,
            explanation: "The 10% Rule means that only a small fraction of energy is passed to the next level. After 4-5 steps, there is usually too little energy left to support a viable population of higher-level consumers."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.3</div>
                <div className="lesson-title-main">
                    <h1>Concept of an Ecosystem</h1>
                </div>
            </div>

            <section className="content-section">
                <p><strong>Understanding the Fundamental Unit of Ecological Organization</strong></p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', margin: '20px 0', fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
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
                        Basic Biology
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Key Components</span>
                        Biotic & Abiotic
                    </div>
                </div>

                <h3>Learning Objectives</h3>
                <p>By the end of this module, you will be able to:</p>
                <ul>
                    <li>Define ecosystem precisely and explain why it's considered the fundamental functional unit of ecology</li>
                    <li>Distinguish between biotic and abiotic components and analyze their interdependencies within ecosystems</li>
                    <li>Describe the structure and organization of ecosystems from species to biosphere levels</li>
                    <li>Explain energy flow and nutrient cycling as the two fundamental processes maintaining all ecosystems</li>
                    <li>Classify different types of ecosystems (terrestrial, aquatic, natural, artificial) and compare their characteristics</li>
                    <li>Evaluate the concept of ecosystem services and understand why ecosystems are critical for human survival</li>
                    <li>Apply ecosystem concepts to real-world examples from forests, oceans, cities, and agricultural systems</li>
                </ul>

                <h3>What is an Ecosystem? The Foundation of Environmental Science</h3>
                <p>
                    Imagine a pond on a warm summer day. You see water lilies floating on the surface, dragonflies darting above, fish swimming below, and frogs sitting on rocks. Beneath the visible activity, invisible bacteria decompose dead matter, while algae photosynthesize, producing oxygen. The water temperature, sunlight penetration, and dissolved minerals influence every living thing. This interconnected web of life and non-life, functioning as a unified system—this is an ecosystem.
                </p>
                <p>
                    The term "ecosystem" was coined by British ecologist <strong>Arthur Tansley</strong> in 1935, but the concept revolutionized how we understand nature. Before Tansley, ecologists studied organisms and their environments separately. Tansley recognized that organisms and their physical environment are so deeply interconnected that they should be studied as a single, integrated system.
                </p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #16a34a', margin: '20px 0' }}>
                    <strong>Formal Definition:</strong> An ecosystem is a biological community of interacting organisms (biotic components) and their physical environment (abiotic components) functioning together as an ecological unit. It includes all the living organisms in a given area, their physical environment, and all the relationships and interactions between them.
                </div>

                <p><strong>Why This Matters:</strong> Ecosystems are the life-support systems of our planet. Every breath of oxygen you take, every drop of clean water you drink, and every bite of food you eat comes from ecosystem processes. Understanding ecosystems is fundamental to understanding how nature sustains life on Earth, why biodiversity matters for stability, and how human activities disrupt these natural systems.</p>

                <p>Think of an ecosystem as nature's way of organizing work. Just as a factory has raw materials, workers, energy sources, and waste disposal systems all working together to produce goods, an ecosystem has components that work together to sustain life. Unlike human factories, ecosystems are self-regulating and self-maintaining.</p>



                <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #bae6fd', margin: '20px 0' }}>
                    <strong>Key Insight</strong>
                    <p style={{ margin: '10px 0 0' }}>An ecosystem is more than just a collection of organisms living in the same place. It's a system where living and non-living components interact through flows of energy and cycles of matter. Remove one component, and the entire system can change dramatically.</p>
                </div>

                <h3>Quick Start Resources</h3>
                <ul>
                    <li><a href="https://www.khanacademy.org/science/biology/ecology/intro-to-ecosystems/a/what-is-an-ecosystem" target="_blank">Khan Academy - Ecosystems</a></li>
                    <li><a href="https://www.nationalgeographic.org/encyclopedia/ecosystem/" target="_blank">National Geographic - Ecosystems</a></li>
                    <li><a href="https://www.britannica.com/science/ecosystem" target="_blank">Britannica - Ecosystem</a></li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3><span style={{ fontSize: '1.2em' }}>🧩</span> Components of an Ecosystem: Biotic and Abiotic Factors</h3>
                <p>
                    Every ecosystem, whether a vast rainforest or a tiny puddle, consists of two fundamental categories of components that interact continuously: biotic (living) and abiotic (non-living) factors. Understanding these components and their interactions is essential for understanding how ecosystems function.
                </p>

                <h4>Biotic Components: The Living World</h4>
                <p>
                    Biotic components include all living organisms within an ecosystem. These are traditionally organized by their role in energy flow and nutrient cycling:
                </p>

                <h5>🌱 1. Producers (Autotrophs)</h5>
                <p>
                    <strong>Definition:</strong> Organisms that produce their own food by converting inorganic substances into organic compounds, forming the foundation of all food chains.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Types:</strong></p>
                    <ul>
                        <li><strong>Photoautotrophs:</strong> Use sunlight as energy source (plants, algae, cyanobacteria)—photosynthesis converts CO₂ + H₂O + sunlight → glucose + O₂</li>
                        <li><strong>Chemoautotrophs:</strong> Use chemical energy from inorganic compounds (sulfur bacteria in deep-sea vents, nitrifying bacteria in soil)</li>
                    </ul>
                    <p><strong>Ecological role:</strong> Producers are called the "primary producers" because they introduce energy into ecosystems. Without them, no other life could exist. They convert approximately 1-3% of incoming solar energy into chemical energy stored in biomass.</p>
                    <p><strong>Examples in different ecosystems:</strong></p>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) minmax(150px, 1fr)', gap: '10px' }}>
                        <li><strong>Forests:</strong> Trees, shrubs, ferns, mosses</li>
                        <li><strong>Grasslands:</strong> Grasses, wildflowers</li>
                        <li><strong>Oceans:</strong> Phytoplankton, kelp</li>
                        <li><strong>Deserts:</strong> Cacti, shrubs</li>
                    </ul>
                </div>

                <h5>🦁 2. Consumers (Heterotrophs)</h5>
                <p>
                    <strong>Definition:</strong> Organisms that cannot produce their own food and must consume other organisms to obtain energy and nutrients.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Categories by diet:</strong></p>
                    <ul>
                        <li style={{ marginBottom: '10px' }}><strong>Herbivores (Primary Consumers):</strong> Eat only plants (deer, rabbits, caterpillars, zooplankton). They occupy the second trophic level and transfer about 10% of plant energy to the next level.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Carnivores (Secondary/Tertiary Consumers):</strong> Eat other animals. Secondary carnivores eat herbivores (snakes eating mice); tertiary carnivores eat other carnivores (hawks eating snakes).</li>
                        <li style={{ marginBottom: '10px' }}><strong>Omnivores:</strong> Eat both plants and animals (bears, humans, pigs, many birds). Their flexible diet helps them survive environmental changes.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Detritivores:</strong> Feed on dead organic matter (earthworms, millipedes, dung beetles). They break down dead material into smaller pieces, accelerating decomposition.</li>
                    </ul>
                    <p><strong>Ecological role:</strong> Consumers transfer energy through the ecosystem and regulate population sizes through predation and competition. They are essential for nutrient cycling and maintaining ecological balance.</p>
                </div>

                <h5>🍄 3. Decomposers (Saprotrophs)</h5>
                <p>
                    <strong>Definition:</strong> Organisms that break down dead organic matter (dead plants, animals, waste products) into simpler inorganic substances that return to the environment.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Main groups:</strong></p>
                    <ul>
                        <li style={{ marginBottom: '10px' }}><strong>Bacteria:</strong> Microscopic decomposers found everywhere—soil, water, inside other organisms. They break down a wide variety of organic compounds, including tough materials like cellulose.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Fungi:</strong> Include mushrooms, molds, and yeasts. They secrete enzymes that break down complex organic compounds externally, then absorb the nutrients. Fungi are especially important for decomposing wood and tough plant material.</li>
                    </ul>
                    <p><strong>Ecological role:</strong> Decomposers are nature's recyclers—absolutely critical for ecosystem functioning. Without them:</p>
                    <ul style={{ color: '#991b1b' }}>
                        <li>Dead matter would accumulate endlessly</li>
                        <li>Nutrients locked in dead organisms would be unavailable</li>
                        <li>Nutrient cycles would halt</li>
                        <li>No new life could be sustained</li>
                    </ul>
                    <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #64748b', marginTop: '15px' }}>
                        <p style={{ margin: 0, fontSize: '0.9em' }}>
                            <strong>Example:</strong> A fallen tree in a forest might take decades to fully decompose. Fungi break down lignin and cellulose in wood, bacteria decompose softer tissues, insects tunnel through creating channels for air and water, and eventually all the carbon, nitrogen, and minerals in that tree return to the soil—available for new trees to use.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fcfcfc', padding: '60px 40px', borderRadius: '32px', border: '1px solid #f1f5f9', margin: '40px 0', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ color: '#10b981', fontSize: '1.8em', fontWeight: '800', margin: 0 }}>Biotic Components of Ecosystem</h2>
                    </div>

                    <div style={{ position: 'relative', width: '100%', maxWidth: '650px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center' }}>

                        {/* Producers Block */}
                        <div style={{
                            backgroundColor: '#f0fdf4',
                            border: '3px solid #10b981',
                            borderRadius: '20px',
                            width: '100%',
                            padding: '30px',
                            position: 'relative',
                            boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                                <div style={{ fontSize: '1.4em', fontWeight: '800', color: '#065f46' }}>PRODUCERS (Autotrophs)</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#065f46', fontSize: '1em' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '1.2em' }}>🌱</span> Plants, Algae, Phytoplankton</div>
                                <div style={{ borderTop: '1px solid rgba(16, 185, 129, 0.2)', paddingTop: '8px', marginTop: '5px' }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <li>• Photosynthesis: Light → Chemical Energy</li>
                                        <li>• Base of food chain</li>
                                        <li>• Produce O₂, Fix CO₂</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Down Arrow - Energy Flow */}
                            <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3 }}>
                                <div style={{ width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderTop: '15px solid #334155' }}></div>
                                <div style={{ fontSize: '0.7em', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '5px' }}>Energy Flow</div>
                            </div>
                        </div>

                        {/* Consumers Block */}
                        <div style={{
                            backgroundColor: '#eff6ff',
                            border: '3px solid #3b82f6',
                            borderRadius: '20px',
                            width: '100%',
                            padding: '30px',
                            position: 'relative',
                            boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                                <div style={{ fontSize: '1.4em', fontWeight: '800', color: '#1e40af' }}>CONSUMERS (Heterotrophs)</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#1e40af', fontSize: '1em' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🦁 Primary: Herbivores (eat plants)</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🐲 Secondary: Carnivores (eat herbivores)</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🦅 Tertiary: Top carnivores</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🐻 Omnivores: Eat both</div>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.2)', paddingTop: '8px', marginTop: '5px' }}>
                                    <li>• Transfer energy through ecosystem</li>
                                </div>
                            </div>

                            {/* Down Arrow - Dead Matter */}
                            <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3 }}>
                                <div style={{ width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderTop: '15px solid #334155' }}></div>
                                <div style={{ fontSize: '0.7em', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '5px' }}>Dead Matter</div>
                            </div>
                        </div>

                        {/* Decomposers Block */}
                        <div style={{
                            backgroundColor: '#fefce8',
                            border: '3px solid #ca8a04',
                            borderRadius: '20px',
                            width: '100%',
                            padding: '30px',
                            position: 'relative',
                            boxShadow: '0 10px 15px -3px rgba(202, 138, 4, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                                <div style={{ fontSize: '1.4em', fontWeight: '800', color: '#854d0e' }}>DECOMPOSERS (Saprotrophs)</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#854d0e', fontSize: '1em' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '1.2em' }}>🍄</span> Fungi & Bacteria</div>
                                <div style={{ borderTop: '1px solid rgba(202, 138, 4, 0.2)', paddingTop: '8px', marginTop: '5px' }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <li>• Break down dead organic matter</li>
                                        <li>• Release nutrients back to soil/water</li>
                                        <li>• Complete the nutrient cycle</li>
                                        <li>• Essential for ecosystem recycling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Nutrient Recycling Loop (Upward Dotted Arrow on the Right) */}
                        <svg style={{ position: 'absolute', right: '-40px', top: '50px', bottom: '50px', width: '100px', height: 'calc(100% - 100px)', zIndex: 1, pointerEvents: 'none' }}>
                            <path
                                d="M 0 540 Q 60 270, 0 0"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="4"
                                strokeDasharray="8 6"
                                strokeLinecap="round"
                            />
                            {/* Arrow Head */}
                            <path d="M 0 0 L -10 15 L 10 15 Z" fill="#10b981" transform="translate(0, 0) rotate(0)" />

                            <text x="60" y="50%" fill="#10b981" style={{ fontSize: '0.85em', fontWeight: 'bold' }} transform="rotate(90, 60, 50%)">
                                Nutrients
                            </text>
                        </svg>

                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '60px' }}>
                        Figure 1: Biotic components showing energy flow (downward) and nutrient cycling (upward)
                    </p>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '8px', border: '1px solid #ffedd5', margin: '20px 0' }}>
                    <strong>The Circle of Life</strong>
                    <p style={{ margin: '10px 0 0', fontSize: '0.92em' }}>Notice how decomposers complete the cycle by returning nutrients from dead matter back to producers. This creates a closed loop where matter cycles repeatedly while energy flows one direction (from sun through the system).</p>
                </div>

                <h4>Abiotic Components: The Physical Environment</h4>
                <p>
                    Abiotic components are the non-living physical and chemical factors that influence organisms and ecosystem processes. While they may seem passive, abiotic factors actively shape what species can survive where and how ecosystems function.
                </p>

                <h5>☀️ 1. Solar Energy (Light)</h5>
                <p>
                    <strong>Role:</strong> The ultimate energy source for most ecosystems. Drives photosynthesis, influences temperature, affects behavior and distribution of organisms.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Effects on ecosystems:</strong></p>
                    <ul>
                        <li style={{ marginBottom: '8px' }}><strong>Intensity:</strong> Determines photosynthesis rates. High light = high productivity (tropical regions). Low light = low productivity (polar regions, deep ocean).</li>
                        <li style={{ marginBottom: '8px' }}><strong>Duration (photoperiod):</strong> Triggers biological clocks—flowering in plants, migration in animals, breeding cycles.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Wavelength:</strong> Different wavelengths penetrate water differently. Red light absorbed near surface; blue light penetrates deepest. This limits where aquatic plants can grow.</li>
                    </ul>
                    <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #0369a1', marginTop: '10px' }}>
                        <p style={{ margin: 0, fontSize: '0.9em' }}>
                            <strong>Example:</strong> In a forest, tall trees capture most sunlight. Forest floor receives only 1-2% of sunlight reaching the canopy. Plants there must be shade-tolerant. If a tree falls, the light gap allows rapid growth of sun-loving species—demonstrating how light shapes community structure.
                        </p>
                    </div>
                </div>

                <h5>🌡️ 2. Temperature</h5>
                <p>
                    <strong>Role:</strong> Affects metabolic rates, enzyme function, water availability, and organism distribution. Most organisms can only survive within specific temperature ranges.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Effects on ecosystems:</strong></p>
                    <ul>
                        <li style={{ marginBottom: '8px' }}><strong>Metabolic rates:</strong> Higher temperatures generally increase metabolism up to a point. Many chemical reactions double in rate with 10°C temperature increase.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Distribution:</strong> Temperature determines where species can live. Tropical species cannot survive freezing; polar species cannot tolerate heat.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Seasonal changes:</strong> Drive migration, hibernation, dormancy, and breeding cycles.</li>
                    </ul>
                    <div style={{ backgroundColor: '#fff1f2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #be123c', marginTop: '10px' }}>
                        <p style={{ margin: 0, fontSize: '0.9em' }}>
                            <strong>Climate change impact:</strong> Global warming is shifting temperature zones poleward, forcing species to migrate, adapt, or face extinction. Coral reefs bleach when water temperatures rise just 1-2°C above normal for extended periods.
                        </p>
                    </div>
                </div>

                <h5>💧 3. Water</h5>
                <p>
                    <strong>Role:</strong> Essential for all life. Solvent for biochemical reactions, transport medium, temperature regulator, habitat.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Effects on ecosystems:</strong></p>
                    <ul>
                        <li style={{ marginBottom: '8px' }}><strong>Availability:</strong> Determines ecosystem type. High rainfall → forests. Low rainfall → deserts. Seasonal rainfall → savannas.</li>
                        <li style={{ marginBottom: '8px' }}><strong>In aquatic systems:</strong> Affects salinity, oxygen content, nutrient distribution, temperature stratification.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Water cycle:</strong> Links terrestrial and aquatic ecosystems. Evaporation, precipitation, runoff redistribute water globally.</li>
                    </ul>
                </div>

                <h5>🌫️ 4. Atmosphere (Air)</h5>
                <p>
                    <strong>Components:</strong> Nitrogen (78%), Oxygen (21%), CO₂ (0.04%), water vapor, other gases.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Roles:</strong></p>
                    <ul>
                        <li style={{ marginBottom: '8px' }}><strong>Oxygen:</strong> Required for aerobic respiration by most organisms</li>
                        <li style={{ marginBottom: '8px' }}><strong>CO₂:</strong> Raw material for photosynthesis; greenhouse gas affecting climate</li>
                        <li style={{ marginBottom: '8px' }}><strong>Nitrogen:</strong> Essential nutrient but unusable directly by most organisms—must be "fixed" by bacteria</li>
                        <li style={{ marginBottom: '8px' }}><strong>Wind:</strong> Disperses seeds, pollen, and small organisms; affects evaporation and temperature</li>
                    </ul>
                </div>

                <h3><span style={{ fontSize: '1.2em' }}>🎥</span> Biotic and Abiotic Factors</h3>
                <p>Clear explanation of how living and non-living components interact in ecosystems.</p>
                <div style={{ maxWidth: '640px', margin: '20px auto 30px' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/UMbrxi_DsXc?si=_GYTnp4_ChCl_C-F"
                            title="Biotic vs Abiotic"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', margin: '25px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em', textAlign: 'left', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1e293b', color: 'white' }}>
                                <th style={{ padding: '15px' }}>Abiotic Factor</th>
                                <th style={{ padding: '15px' }}>Primary Effect</th>
                                <th style={{ padding: '15px' }}>Example Impact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Light</td>
                                <td style={{ padding: '12px' }}>Photosynthesis rate</td>
                                <td style={{ padding: '12px' }}>Forest layers by light availability</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Temperature</td>
                                <td style={{ padding: '12px' }}>Metabolic rate</td>
                                <td style={{ padding: '12px' }}>Polar vs. tropical species</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Water</td>
                                <td style={{ padding: '12px' }}>Organism survival</td>
                                <td style={{ padding: '12px' }}>Desert vs. rainforest life</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Soil</td>
                                <td style={{ padding: '12px' }}>Nutrient availability</td>
                                <td style={{ padding: '12px' }}>Plant community composition</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>pH</td>
                                <td style={{ padding: '12px' }}>Chemical reactions</td>
                                <td style={{ padding: '12px' }}>Acid rain effects on lakes</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f8fafc' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Minerals</td>
                                <td style={{ padding: '12px' }}>Growth & reproduction</td>
                                <td style={{ padding: '12px' }}>Iron-limited ocean regions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fff5f5', padding: '25px', borderRadius: '12px', border: '1px solid #feb2b2', margin: '30px 0' }}>
                    <strong style={{ color: '#991b1b', fontSize: '1.1em' }}>⚠️ Human Impact on Abiotic Factors</strong>
                    <p style={{ margin: '10px 0 15px', fontSize: '0.95em', color: '#7f1d1d' }}>Humans are dramatically altering abiotic components globally:</p>
                    <ul style={{ fontSize: '0.9em', color: '#7f1d1d', margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}><strong>Climate change:</strong> altering temperature and precipitation</li>
                        <li style={{ marginBottom: '5px' }}><strong>Air pollution:</strong> changing atmospheric composition</li>
                        <li style={{ marginBottom: '5px' }}><strong>Water pollution:</strong> degrading water quality</li>
                        <li><strong>Soil degradation:</strong> reducing fertility and structure</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontSize: '0.9em', fontStyle: 'italic', color: '#991b1b' }}>These changes cascade through ecosystems, affecting all biotic components.</p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3><span style={{ fontSize: '1.2em' }}>⚡</span> Energy Flow in Ecosystems: The One-Way Street</h3>
                <p>Energy is the currency of ecosystems—everything that happens requires energy. Understanding energy flow is fundamental to understanding ecosystem function. Unlike matter, which cycles repeatedly through ecosystems, energy flows in one direction only: from sun → producers → consumers → lost as heat.</p>

                <h4>The 10% Rule: Energy Transfer Efficiency</h4>
                <p>A critical principle of ecosystem energy flow is that only about 10% of energy at one trophic level is transferred to the next level. The remaining 90% is:</p>
                <ul style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) minmax(250px, 1fr)', gap: '15px' }}>
                    <li style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><strong>Used for metabolism:</strong> Movement, maintaining body temperature, cellular processes</li>
                    <li style={{ backgroundColor: '#fff1f2', padding: '12px', borderRadius: '8px', border: '1px solid #fecaca' }}><strong>Lost as heat:</strong> All biochemical reactions release heat (second law of thermodynamics)</li>
                    <li style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><strong>Not consumed:</strong> Roots, bones, shells that herbivores don't eat; prey that escape</li>
                    <li style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><strong>Undigested:</strong> Not all consumed material is absorbed (animal waste)</li>
                </ul>

                <p style={{ marginTop: '20px' }}><strong>Implications of the 10% Rule:</strong></p>
                <ul>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>1. Pyramid Shape:</strong> Each trophic level has less energy available. If plants capture 10,000 kcal:
                        Herbivores get ~1,000, Primary carnivores ~100, and Secondary carnivores ~10. This is why top predators are rare.
                    </li>
                    <li style={{ marginBottom: '15px' }}><strong>2. Food Chain Length:</strong> Most food chains have only 4-5 levels because energy becomes too limited to support higher levels.</li>
                    <li style={{ marginBottom: '15px' }}><strong>3. Human Food Production:</strong> Eating plants directly is much more energy-efficient. Producing 1 kg of beef requires about 10 kg of grain; for chicken, it's 3 kg.</li>
                    <li style={{ marginBottom: '15px' }}><strong>4. Ecosystem Productivity:</strong> High primary productivity (rainforests, reefs) can support more complex food webs and higher biodiversity.</li>
                </ul>

                <h4>Trophic Levels: Energy Levels in Ecosystems</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '20px 0' }}>
                    {[
                        { level: 'Level 1', role: 'Producers', desc: 'Capture solar energy through photosynthesis' },
                        { level: 'Level 2', role: 'Primary Consumers', desc: 'Herbivores eating producers' },
                        { level: 'Level 3', role: 'Secondary Consumers', desc: 'Carnivores eating herbivores' },
                        { level: 'Level 4', role: 'Tertiary Consumers', desc: 'Carnivores eating other carnivores' }
                    ].map((t, i) => (
                        <div key={i} style={{ padding: '15px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>{t.level}</div>
                            <div style={{ fontWeight: '700', margin: '5px 0', color: '#1e293b' }}>{t.role}</div>
                            <div style={{ fontSize: '0.85em', color: '#64748b' }}>{t.desc}</div>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: '#fcfcfc', padding: '40px', borderRadius: '32px', border: '1px solid #f1f5f9', margin: '40px 0', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '850px', margin: '0 auto', minHeight: '800px' }}>

                        {/* SVG for complex lines and markers */}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
                            <defs>
                                <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                                </marker>
                                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                                </marker>
                                <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                                </marker>
                            </defs>

                            {/* 1. Main Vertical Energy Flow Axis */}
                            {/* Sun -> Producers */}
                            <line x1="425" y1="90" x2="425" y2="150" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />
                            <text x="435" y="125" fontSize="11" fill="#64748b" fontWeight="700">1% captured</text>

                            {/* Producers -> Primary */}
                            <line x1="425" y1="210" x2="425" y2="280" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />
                            <text x="435" y="255" fontSize="11" fill="#64748b" fontWeight="700">10% transferred</text>

                            {/* Primary -> Secondary */}
                            <line x1="425" y1="340" x2="425" y2="410" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />
                            <text x="435" y="385" fontSize="11" fill="#64748b" fontWeight="700">10% transferred</text>

                            {/* Secondary -> Tertiary */}
                            <line x1="425" y1="470" x2="425" y2="540" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />
                            <text x="435" y="515" fontSize="11" fill="#64748b" fontWeight="700">10% transferred</text>


                            {/* 2. Heat Loss (Left Side - Dashed Lines) */}
                            {/* From Producers */}
                            <path d="M 345 180 Q 230 180, 230 720" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead-gray)" />
                            <text x="130" y="540" fontSize="11" fill="#475569" fontWeight="700">90% lost as heat</text>

                            {/* From Primary */}
                            <path d="M 340 310 Q 260 310, 260 720" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead-gray)" />
                            <text x="180" y="610" fontSize="11" fill="#475569" fontWeight="700">90% lost as heat</text>

                            {/* From Secondary */}
                            <path d="M 335 440 Q 290 440, 290 720" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead-gray)" />
                            <text x="240" y="670" fontSize="11" fill="#475569" fontWeight="700">90% lost as heat</text>

                            {/* From Tertiary */}
                            <path d="M 345 570 L 320 720" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead-gray)" />
                            <text x="310" y="705" fontSize="10" fill="#475569" fontWeight="700" transform="rotate(-15, 310, 705)">90% lost as heat</text>


                            {/* 3. Dead Matter Flow (Right Side - Solid Lines) */}
                            {/* From Producers */}
                            <path d="M 505 180 Q 720 180, 720 720" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />
                            <text x="390" y="440" fontSize="11" fill="#475569" fontWeight="700" transform="rotate(90, 390, 440)">Dead matter</text>

                            {/* From Primary */}
                            <path d="M 510 310 Q 680 310, 680 720" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />
                            <text x="655" y="610" fontSize="11" fill="#475569" fontWeight="700">Dead matter</text>

                            {/* From Secondary */}
                            <path d="M 515 440 Q 640 440, 640 720" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />
                            <text x="730" y="670" fontSize="11" fill="#475569" fontWeight="700">Dead matter</text>

                            {/* From Tertiary */}
                            <path d="M 505 570 L 530 720" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-gray)" />
                            <text x="790" y="735" fontSize="10" fill="#475569" fontWeight="700">Dead matter</text>


                            {/* 4. Nutrient Recycling Loop (Bottom Right -> Back to Top) */}
                            <path d="M 800 750 Q 880 750, 880 180 L 515 180" fill="none" stroke="#1e293b" strokeWidth="2.5" markerEnd="url(#arrowhead-gray)" />
                            <text x="850" y="550" fontSize="12" fill="#1e293b" fontWeight="800" transform="rotate(-90, 850, 550)">Nutrients recycled</text>
                        </svg>

                        {/* Node Elements */}

                        {/* Solar Energy Node */}
                        <div style={{ position: 'absolute', top: '20px', left: '425px', transform: 'translateX(-50%)', width: '130px', padding: '12px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#92400e' }}>☀️ Solar Energy</div>
                            <div style={{ fontSize: '0.9em', fontWeight: '700', marginTop: '2px' }}>1,000,000 kcal</div>
                        </div>

                        {/* Producers Node */}
                        <div style={{ position: 'absolute', top: '150px', left: '425px', transform: 'translateX(-50%)', width: '120px', padding: '12px', backgroundColor: '#f0fdf4', border: '1.5px solid #10b981', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '0.8em', fontWeight: '800', color: '#166534' }}>🌱 Producers</div>
                            <div style={{ fontSize: '0.85em', fontWeight: '700', marginTop: '2px' }}>10,000 kcal</div>
                        </div>

                        {/* Primary Consumers Node */}
                        <div style={{ position: 'absolute', top: '280px', left: '425px', transform: 'translateX(-50%)', width: '170px', padding: '12px', backgroundColor: '#eff6ff', border: '1.5px solid #3b82f6', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '0.8em', fontWeight: '800', color: '#1e40af' }}>🦌 Primary Consumers</div>
                            <div style={{ fontSize: '0.85em', fontWeight: '700', marginTop: '2px' }}>1,000 kcal</div>
                        </div>

                        {/* Secondary Consumers Node */}
                        <div style={{ position: 'absolute', top: '410px', left: '425px', transform: 'translateX(-50%)', width: '190px', padding: '12px', backgroundColor: '#fff1f2', border: '1.5px solid #f43f5e', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '0.8em', fontWeight: '800', color: '#9f1239' }}>🧬 Secondary Consumers</div>
                            <div style={{ fontSize: '0.85em', fontWeight: '700', marginTop: '2px' }}>100 kcal</div>
                        </div>

                        {/* Tertiary Consumers Node */}
                        <div style={{ position: 'absolute', top: '540px', left: '425px', transform: 'translateX(-50%)', width: '170px', padding: '12px', backgroundColor: '#f5f3ff', border: '1.5px solid #8b5cf6', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '0.8em', fontWeight: '800', color: '#5b21b6' }}>🦅 Tertiary Consumers</div>
                            <div style={{ fontSize: '0.85em', fontWeight: '700', marginTop: '2px' }}>10 kcal</div>
                        </div>

                        {/* Bottom Utility Nodes */}
                        {/* Heat Loss Node */}
                        <div style={{ position: 'absolute', bottom: '30px', left: '260px', transform: 'translateX(-50%)', width: '110px', padding: '12px', backgroundColor: '#fff1f2', border: '2px solid #fecaca', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 10px rgba(239, 68, 68, 0.1)' }}>
                            <div style={{ fontSize: '0.85em', fontWeight: '800', color: '#9f1239' }}>🔥 Heat Loss</div>
                        </div>

                        {/* Decomposers Node */}
                        <div style={{ position: 'absolute', bottom: '30px', right: '230px', transform: 'translateX(50%)', width: '130px', padding: '12px', backgroundColor: '#f1f5f9', border: '2px solid #cbd5e1', borderRadius: '8px', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 10px rgba(100, 116, 139, 0.1)' }}>
                            <div style={{ fontSize: '0.85em', fontWeight: '800', color: '#475569' }}>🍄 Decomposers</div>
                        </div>

                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px' }}>
                        Figure 2: Energy flow showing 10% transfer efficiency and heat loss at each level
                    </p>
                </div>

                <div style={{ backgroundColor: '#fcfcfc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '25px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🌾</span>
                        <strong style={{ fontSize: '1.1em' }}>Example: Grassland Ecosystem Energy Flow</strong>
                    </div>
                    <p style={{ margin: 0, lineHeight: '1.8' }}>
                        Starting Point: <strong>Grass</strong> captures 10,000 kcal from sunlight.<br />
                        1. <strong>Grasshopper</strong> (herbivore) eats grass → gets <strong>1,000 kcal</strong>. (9,000 kcal lost to metabolism/waste).<br />
                        2. <strong>Mouse</strong> (omnivore) eats grasshopper → gets <strong>100 kcal</strong>. (900 kcal lost to metabolic heat).<br />
                        3. <strong>Snake</strong> (carnivore) eats mouse → gets <strong>10 kcal</strong>. (90 kcal lost to bones/metabolism).<br />
                        4. <strong>Hawk</strong> (top predator) eats snake → gets <strong>1 kcal</strong>. <br />
                        <strong>Result:</strong> Only 1 kcal reaches the hawk from 10,000 kcal in grass. This explains why large predators need huge territories!
                    </p>
                </div>

                <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px', margin: '30px 0' }}>
                    <div style={{ fontWeight: '800', color: '#475569', fontSize: '0.9em', textTransform: 'uppercase', marginBottom: '10px' }}>🔗 Energy Flow Resources</div>
                    <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9em' }}>
                        <li><a href="https://www.khanacademy.org/science/biology/ecology/intro-to-ecosystems/a/energy-flow-primary-productivity" target="_blank" style={{ color: '#3b82f6', textDecoration: 'none' }}>• Khan Academy - Energy Flow</a></li>
                        <li><a href="https://biologydictionary.net/trophic-level/" target="_blank" style={{ color: '#3b82f6', textDecoration: 'none' }}>• Biology Dictionary - Trophic Levels</a></li>
                        <li><a href="https://www.nature.com/scitable/knowledge/library/the-energy-flow-of-ecosystems-15174542/" target="_blank" style={{ color: '#3b82f6', textDecoration: 'none' }}>• Nature Education - Energy Flow</a></li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3><span style={{ fontSize: '1.2em' }}>🌏</span> Types of Ecosystems: Diversity of Life's Organization</h3>
                <p>Ecosystems exist in enormous variety—from scorching deserts to frozen tundras, from mountain peaks to ocean depths, from pristine wilderness to human-built cities. They can be classified in multiple ways based on location, characteristics, and origin.</p>

                <h4>Classification by Location & Medium</h4>
                <div style={{ marginBottom: '30px' }}>
                    <h5 style={{ color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>🌳 Terrestrial Ecosystems (Land-Based)</h5>
                    <p>Ecosystems where land is the primary substrate. Characterized by limited water availability compared to aquatic systems and greater temperature fluctuations.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '15px' }}>
                        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                            <strong style={{ color: '#166534' }}>1. Forest Ecosystems</strong>
                            <ul style={{ fontSize: '0.9em', marginTop: '10px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}><strong>Tropical Rainforests:</strong> High rainfall, highest terrestrial biodiversity, dense canopy, nutrients locked in biomass.</li>
                                <li style={{ marginBottom: '8px' }}><strong>Temperate Forests:</strong> Seasonal changes, deciduous trees, rich fertile soils.</li>
                                <li><strong>Boreal (Taiga):</strong> Cold winters, coniferous trees, slow decomposition.</li>
                            </ul>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fffbeb', borderRadius: '12px', border: '1px solid #fef3c7' }}>
                            <strong style={{ color: '#92400e' }}>2. Grassland Ecosystems</strong>
                            <ul style={{ fontSize: '0.9em', marginTop: '10px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}><strong>Savannas (Tropical):</strong> Seasonal rain, scattered trees, fire-adapted species.</li>
                                <li><strong>Prairies (Temperate):</strong> Deep fertile soils, historically supported massive herds.</li>
                            </ul>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fff7ed', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                            <strong style={{ color: '#c2410c' }}>3. Desert Ecosystems</strong>
                            <p style={{ fontSize: '0.9em', marginTop: '10px' }}>Very low rainfall (&lt;250mm/year), extreme temp fluctuations, specialized adaptations (cacti, camels).</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <strong style={{ color: '#475569' }}>4. Tundra Ecosystems</strong>
                            <p style={{ fontSize: '0.9em', marginTop: '10px' }}>Extremely cold, permafrost layer, low-growing vegetation, critical carbon storage.</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                    <h5 style={{ color: '#1e40af', display: 'flex', alignItems: 'center', gap: '8px' }}>🌊 Aquatic Ecosystems (Water-Based)</h5>
                    <p>Ecosystems where water is the primary medium. Generally more stable temperatures but variable oxygen and light availability.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginTop: '15px' }}>
                        <div style={{ padding: '20px', backgroundColor: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe' }}>
                            <strong style={{ color: '#1e40af' }}>Freshwater Ecosystems:</strong>
                            <ul style={{ fontSize: '0.9em', marginTop: '10px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}><strong>Lentic:</strong> Still water (lakes, ponds). Stratified by light/temp.</li>
                                <li style={{ marginBottom: '8px' }}><strong>Lotic:</strong> Flowing water (rivers, streams). High oxygen levels.</li>
                                <li><strong>Wetlands:</strong> Marshes, swamps. Critical for purification and flood control.</li>
                            </ul>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#f5f3ff', borderRadius: '12px', border: '1px solid #ede9fe' }}>
                            <strong style={{ color: '#5b21b6' }}>Marine Ecosystems:</strong>
                            <ul style={{ fontSize: '0.9em', marginTop: '10px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}><strong>Coastal:</strong> Estuaries, coral reefs. High productivity nurseries.</li>
                                <li style={{ marginBottom: '8px' }}><strong>Open Ocean:</strong> Phytoplankton-based, vast but mostly low productivity.</li>
                                <li><strong>Deep Sea:</strong> No light, high pressure, chemosynthetic communities.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3><span style={{ fontSize: '1.2em' }}>🎥</span> Earth's Major Ecosystems</h3>
                <p>Stunning visuals of different ecosystem types from forests to oceans to deserts.</p>
                <div style={{ maxWidth: '640px', margin: '20px auto 30px' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/GK_vRtHJZu4?si=I7D3s9glxolRE3n7"
                            title="Major Ecosystems"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1e293b', color: 'white', textAlign: 'left' }}>
                                <th style={{ padding: '15px' }}>Ecosystem Type</th>
                                <th style={{ padding: '15px' }}>Productivity</th>
                                <th style={{ padding: '15px' }}>Biodiversity</th>
                                <th style={{ padding: '15px' }}>Key Threat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { type: 'Tropical Rainforest', prod: 'Very High', bio: 'Highest', threat: 'Deforestation' },
                                { type: 'Coral Reef', prod: 'Very High', bio: 'Very High', threat: 'Bleaching, Pollution' },
                                { type: 'Wetlands', prod: 'High', bio: 'High', threat: 'Drainage, Development' },
                                { type: 'Temperate Forest', prod: 'Moderate', bio: 'Moderate', threat: 'Urbanization' },
                                { type: 'Grassland', prod: 'Moderate', bio: 'Moderate', threat: 'Agriculture' },
                                { type: 'Desert', prod: 'Low', bio: 'Low-Moderate', threat: 'Climate Change' },
                                { type: 'Tundra', prod: 'Very Low', bio: 'Low', threat: 'Warming, Permafrost Melt' }
                            ].map((row, i) => (
                                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px 15px', fontWeight: 'bold' }}>{row.type}</td>
                                    <td style={{ padding: '12px 15px' }}>{row.prod}</td>
                                    <td style={{ padding: '12px 15px' }}>{row.bio}</td>
                                    <td style={{ padding: '12px 15px', color: '#dc2626' }}>{row.threat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fff5f5', padding: '25px', borderRadius: '12px', border: '1px solid #fecaca', margin: '30px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🚨</span>
                        <strong style={{ color: '#991b1b', fontSize: '1.1em' }}>Ecosystem Threats</strong>
                    </div>
                    <ul style={{ margin: 0, fontSize: '0.95em', color: '#7f1d1d' }}>
                        <li style={{ marginBottom: '8px' }}><strong>50%</strong> of wetlands lost globally since 1900</li>
                        <li style={{ marginBottom: '8px' }}><strong>17%</strong> of Amazon rainforest cleared since 1970</li>
                        <li style={{ marginBottom: '8px' }}><strong>50%</strong> of coral reefs degraded or destroyed</li>
                        <li style={{ marginBottom: '8px' }}><strong>70%</strong> of grasslands converted to agriculture</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontSize: '0.85em' }}>
                        <a href="https://www.worldwildlife.org/threats" target="_blank" style={{ color: '#b91c1c', fontWeight: '700' }}>Learn more: WWF - Threats to Ecosystems</a>
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3><span style={{ fontSize: '1.2em' }}>🌿</span> Natural vs. Artificial Ecosystems</h3>
                <p>Ecosystems can be classified by their origin into those that occur naturally and those created by humans.</p>

                <div style={{ backgroundColor: '#fcfcfc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '60px 40px', margin: '40px 0', position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ color: '#10b981', fontSize: '1.8em', fontWeight: '800', margin: 0 }}>Natural vs. Artificial Ecosystems</h2>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
                        {/* Natural Card */}
                        <div style={{
                            backgroundColor: '#eefdf4',
                            border: '3px solid #10b981',
                            borderRadius: '20px',
                            width: '320px',
                            minHeight: '480px',
                            padding: '30px',
                            boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                                <div style={{ fontSize: '1.4em', fontWeight: '800', color: '#065f46', letterSpacing: '0.05em' }}>NATURAL</div>
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <strong style={{ color: '#065f46', display: 'block', marginBottom: '12px' }}>Characteristics:</strong>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95em', color: '#065f46', lineHeight: '1.8' }}>
                                    <li><span style={{ color: '#10b981', marginRight: '8px' }}>✓</span> Self-regulating</li>
                                    <li><span style={{ color: '#10b981', marginRight: '8px' }}>✓</span> High biodiversity</li>
                                    <li><span style={{ color: '#10b981', marginRight: '8px' }}>✓</span> Complex food webs</li>
                                    <li><span style={{ color: '#10b981', marginRight: '8px' }}>✓</span> Stable & resilient</li>
                                    <li><span style={{ color: '#10b981', marginRight: '8px' }}>✓</span> No human input</li>
                                </ul>
                            </div>

                            <div>
                                <strong style={{ color: '#065f46', display: 'block', marginBottom: '12px' }}>Examples:</strong>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95em', color: '#065f46', lineHeight: '1.8' }}>
                                    <li>• Tropical rainforest</li>
                                    <li>• Coral reef</li>
                                    <li>• Natural lake</li>
                                    <li>• Wild grassland</li>
                                </ul>
                            </div>
                        </div>

                        {/* Artificial Card */}
                        <div style={{
                            backgroundColor: '#fef2f2',
                            border: '3px solid #991b1b',
                            borderRadius: '20px',
                            width: '320px',
                            minHeight: '480px',
                            padding: '30px',
                            boxShadow: '0 10px 15px -3px rgba(153, 27, 27, 0.1)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                                <div style={{ fontSize: '1.4em', fontWeight: '800', color: '#7f1d1d', letterSpacing: '0.05em' }}>ARTIFICIAL</div>
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <strong style={{ color: '#7f1d1d', display: 'block', marginBottom: '12px' }}>Characteristics:</strong>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95em', color: '#7f1d1d', lineHeight: '1.8' }}>
                                    <li><span style={{ color: '#dc2626', marginRight: '10px' }}>✗</span> Needs management</li>
                                    <li><span style={{ color: '#dc2626', marginRight: '10px' }}>✗</span> Low biodiversity</li>
                                    <li><span style={{ color: '#dc2626', marginRight: '10px' }}>✗</span> Simple food chains</li>
                                    <li><span style={{ color: '#dc2626', marginRight: '10px' }}>✗</span> Less stable</li>
                                    <li><span style={{ color: '#dc2626', marginRight: '10px' }}>✗</span> Requires inputs</li>
                                </ul>
                            </div>

                            <div>
                                <strong style={{ color: '#7f1d1d', display: 'block', marginBottom: '12px' }}>Examples:</strong>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95em', color: '#7f1d1d', lineHeight: '1.8' }}>
                                    <li>• Agricultural field</li>
                                    <li>• Urban park</li>
                                    <li>• Fish farm</li>
                                    <li>• Garden</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#64748b', textAlign: 'left', marginTop: '60px', marginLeft: '20px' }}>
                        Figure 3: Comparing natural and artificial ecosystems
                    </p>
                </div>


                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 0 }}>
                        <span style={{ fontSize: '1.2em' }}>🏙️</span> The Sustainability Challenge
                    </h4>
                    <p style={{ margin: 0 }}>
                        Artificial ecosystems produce most of our food but often at a high environmental cost. Habitat destruction, biodiversity loss, and pollution are common side effects.
                        <strong> Sustainable agriculture</strong> aims to create productive systems that mimic natural ecosystem functions to reduce these impacts.
                    </p>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '16px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <span style={{ fontSize: '1.5em' }}>💡</span>
                        <strong style={{ fontSize: '1.1em', color: '#0369a1' }}>The Middle Ground</strong>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95em', lineHeight: '1.6' }}>
                        Many ecosystems fall on a spectrum between fully natural and fully artificial:<br />
                        • <strong>Semi-natural:</strong> Managed forests or grazing lands that maintain some natural processes.<br />
                        • <strong>Restored:</strong> Wetlands or prairies recreated after degradation—attempting to return to a natural state.<br />
                        • <strong>Urban Green:</strong> Parks and green roofs providing ecosystem services within concrete jungles.
                    </p>
                </div>

                <Quiz
                    title="Module 1.3 Quiz: Ecosystem Concept"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={3}
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

export default Module1_3;
