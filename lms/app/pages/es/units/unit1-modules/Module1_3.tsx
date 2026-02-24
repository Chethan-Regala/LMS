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

                <h3>Components of an Ecosystem: Biotic and Abiotic Factors</h3>
                <p>Every ecosystem, whether a vast rainforest or a tiny puddle, consists of two fundamental categories of components that interact continuously: biotic (living) and abiotic (non-living) factors.</p>

                <h4>Biotic Components: The Living World</h4>
                <p>Biotic components include all living organisms within an ecosystem, organized by their role in energy flow and nutrient cycling:</p>

                <ol>
                    <li style={{ marginBottom: '20px' }}>
                        <strong>Producers (Autotrophs):</strong> Organisms that produce their own food by converting inorganic substances into organic compounds.
                        <ul style={{ marginTop: '10px' }}>
                            <li><strong>Photoautotrophs:</strong> Use sunlight (plants, algae, cyanobacteria). Photosynthesis converts CO₂ + H₂O + sunlight → glucose + O₂.</li>
                            <li><strong>Chemoautotrophs:</strong> Use chemical energy from inorganic compounds (sulfur bacteria in deep-sea vents).</li>
                            <li><strong>Ecological role:</strong> They form the foundation of all life by introducing energy into the system, converting ~1-3% of solar energy into chemical energy.</li>
                        </ul>
                    </li>
                    <li style={{ marginBottom: '20px' }}>
                        <strong>Consumers (Heterotrophs):</strong> Organisms that must consume others to obtain energy.
                        <ul style={{ marginTop: '10px' }}>
                            <li><strong>Herbivores (Primary Consumers):</strong> Eat only plants (deer, rabbits).</li>
                            <li><strong>Carnivores (Secondary/Tertiary Consumers):</strong> Eat other animals. Secondary carnivores eat herbivores; tertiary eat other carnivores.</li>
                            <li><strong>Omnivores:</strong> Eat both plants and animals (bears, humans).</li>
                            <li><strong>Detritivores:</strong> Feed on dead organic matter (earthworms, millipedes), accelerating decomposition.</li>
                        </ul>
                    </li>
                    <li style={{ marginBottom: '20px' }}>
                        <strong>Decomposers (Saprotrophs):</strong> Fungi and bacteria that break down dead organic matter into simpler inorganic substances.
                        <ul style={{ marginTop: '10px' }}>
                            <li><strong>Bacteria:</strong> Found everywhere; they break down a wide variety of compounds, including cellulose.</li>
                            <li><strong>Fungi:</strong> Secrete enzymes to break down complex wood and plant material externally.</li>
                            <li><strong>Ecological role:</strong> Without them, nutrients would remain locked in dead matter, and new life could not be sustained. They complete the lifecycle.</li>
                        </ul>
                    </li>
                </ol>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Biotic Interaction Map</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(100px, 1fr) auto minmax(100px, 1fr)', alignItems: 'center', gap: '15px', textAlign: 'center', fontSize: '0.9em' }}>
                            <div style={{ padding: '20px', backgroundColor: '#dcfce7', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#166534', marginBottom: '8px' }}>Producers</div>
                                <div style={{ fontWeight: '600' }}>Plants & Algae</div>
                            </div>
                            <div style={{ fontSize: '1.5em', color: '#94a3b8' }}>→</div>
                            <div style={{ padding: '20px', backgroundColor: '#fee2e2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#991b1b', marginBottom: '8px' }}>Consumers</div>
                                <div style={{ fontWeight: '600' }}>Animals</div>
                            </div>

                            <div style={{ gridColumn: 'span 3', margin: '15px 0', display: 'flex', justifyContent: 'center', gap: '40px', color: '#94a3b8', fontSize: '1.2em' }}>
                                <span>↓</span> <span>↓</span>
                            </div>

                            <div style={{ gridColumn: 'span 3', padding: '20px', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fde68a' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#92400e', marginBottom: '8px' }}>Decomposers</div>
                                <div style={{ fontWeight: '600' }}>Fungi & Bacteria</div>
                            </div>

                            <div style={{ gridColumn: 'span 3', marginTop: '15px', textAlign: 'center', fontSize: '0.8em', color: '#94a3b8' }}>
                                <span style={{ borderTop: '2px dashed #cbd5e1', paddingTop: '10px', display: 'inline-block' }}>↑ Recycled Nutrients Return to Soil ↑</span>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 1: Biotic components showing energy flow (downward) and nutrient cycling (upward)
                    </p>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '8px', border: '1px solid #ffedd5', margin: '20px 0' }}>
                    <strong>The Circle of Life</strong>
                    <p style={{ margin: '10px 0 0', fontSize: '0.92em' }}>Notice how decomposers complete the cycle by returning nutrients from dead matter back to producers. This creates a closed loop where matter cycles repeatedly while energy flows one direction (from sun through the system).</p>
                </div>

                <h4>Abiotic Components: The Physical Environment</h4>
                <p>Abiotic components are the non-living physical and chemical factors that shaped what species can survive and how ecosystems function.</p>
                <ul>
                    <li style={{ marginBottom: '15px' }}><strong>1. Solar Energy (Light):</strong> The ultimate energy source. It drives photosynthesis and influences temperature. Wavelength affects depth of aquatic growth (blue penetrates deepest).</li>
                    <li style={{ marginBottom: '15px' }}><strong>2. Temperature:</strong> Affects metabolism and enzyme function. Most organisms can only survive specific ranges. Global warming is shifting these zones, forcing migration or adaptation.</li>
                    <li style={{ marginBottom: '15px' }}><strong>3. Water:</strong> Essential for all life as a solvent and habitat. Availability determines the ecosystem type (e.g., deserts vs. rainforests).</li>
                    <li style={{ marginBottom: '15px' }}><strong>4. Atmosphere (Air):</strong> Provides Oxygen (respiration), CO₂ (photosynthesis), and Nitrogen (essential nutrient fixed by bacteria).</li>
                </ul>

                <h3>Biotic and Abiotic Factors Interaction</h3>
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
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', color: '#475569' }}>Abiotic Factor</th>
                                <th style={{ padding: '12px', color: '#475569' }}>Primary Effect</th>
                                <th style={{ padding: '12px', color: '#475569' }}>Example Impact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Light</td>
                                <td style={{ padding: '12px' }}>Photosynthesis rate</td>
                                <td style={{ padding: '12px' }}>Forest layers by light availability</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Temperature</td>
                                <td style={{ padding: '12px' }}>Metabolic rate</td>
                                <td style={{ padding: '12px' }}>Polar vs. tropical species</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Water</td>
                                <td style={{ padding: '12px' }}>Organism survival</td>
                                <td style={{ padding: '12px' }}>Desert vs. rainforest life</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>Soil</td>
                                <td style={{ padding: '12px' }}>Nutrient availability</td>
                                <td style={{ padding: '12px' }}>Plant community composition</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px', fontWeight: '600' }}>pH</td>
                                <td style={{ padding: '12px' }}>Chemical reactions</td>
                                <td style={{ padding: '12px' }}>Acid rain effects on lakes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '8px', border: '1px solid #feb2b2', margin: '20px 0' }}>
                    <strong>Human Impact Warning</strong>
                    <p style={{ margin: '10px 0 0', fontSize: '0.9em' }}>Humans are dramatically altering abiotic components: Climate change affects temperature/precipitation, air pollution changes atmosphere, and water pollution degrades quality. These changes cascade through all biotic components.</p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Energy Flow in Ecosystems: The One-Way Street</h3>
                <p>Energy is the currency of ecosystems—everything that happens requires energy. Unlike matter, which cycles repeatedly, energy flows in one direction only: from sun → producers → consumers → lost as heat.</p>

                <h4>The 10% Rule: Energy Transfer Efficiency</h4>
                <p>Only about 10% of energy at one trophic level is transferred to the next. The remaining 90% is used for metabolism (movement, warmth), lost as heat, or simply not consumed/digested (roots, bones, waste).</p>

                <p><strong>Implications of the 10% Rule:</strong></p>
                <ul>
                    <li style={{ marginBottom: '10px' }}><strong>Pyramid Shape:</strong> Each trophic level has less energy. If plants capture 10,000 kcal, herbivores get ~1,000, secondary carnivores get ~100, and so on. This limits the number of top predators.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Food Chain Length:</strong> Usually capped at 4-5 levels because energy becomes too depleted to support more.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Efficiency:</strong> Vegetarian diets have lower environmental footprints because eating plants directly is more energy-efficient than feeding grain to cattle.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Productivity:</strong> High primary productivity (rainforests, reefs) can support more complex food webs.</li>
                </ul>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Energy Flow Pyramid (10% Rule)</div>
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '12px', textAlign: 'center', marginBottom: '6px', width: '30%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: '800', color: '#991b1b' }}>TERTIARY</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '700' }}>10 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecaca', padding: '12px', textAlign: 'center', marginBottom: '6px', width: '50%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: '800', color: '#991b1b' }}>SECONDARY</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '700' }}>100 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', padding: '12px', textAlign: 'center', marginBottom: '6px', width: '70%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: '800', color: '#9a3412' }}>PRIMARY</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '700' }}>1,000 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #16a34a', padding: '15px', textAlign: 'center', width: '100%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#166534', letterSpacing: '0.12em' }}>PRODUCERS</div>
                                <div style={{ fontSize: '1em', fontWeight: '800' }}>10,000 kcal</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8em', color: '#64748b' }}>
                            Energy lost as heat at each transfer level (approx. 90%)
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 2: Energy pyramid showing 10% transfer efficiency and heat loss
                    </p>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', margin: '25px 0' }}>
                    <strong>Example: Grassland Ecosystem Energy Flow</strong>
                    <p style={{ margin: '15px 0 0', lineHeight: '1.6' }}>
                        Starting with 10,000 kcal in grass:<br />
                        1. <strong>Herbivore:</strong> Grasshopper gets 1,000 kcal (90% lost to respiration/heat/uneaten stalks).<br />
                        2. <strong>Omnivore:</strong> Mouse eats grasshopper, gets 100 kcal.<br />
                        3. <strong>Carnivore:</strong> Snake eats mouse, gets 10 kcal.<br />
                        4. <strong>Top Predator:</strong> Hawk eats snake, gets 1 kcal.<br />
                        Result: 1 kcal reaches the hawk from 10,000 kcal in grass. This explains why top predators need huge territories!
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Types of Ecosystems: Diversity of Life's Organization</h3>

                <h4>1. Terrestrial Ecosystems (Land-Based)</h4>
                <ul>
                    <li style={{ marginBottom: '10px' }}><strong>Forests:</strong>
                        <ul>
                            <li>Tropical: High rainfall/temp, highest biodiversity, dense canopy.</li>
                            <li>Temperate: Moderate rainfall, seasonal changes, deciduous trees.</li>
                            <li>Boreal (Taiga): Cold winters, coniferous trees, slow decomposition.</li>
                        </ul>
                    </li>
                    <li style={{ marginBottom: '10px' }}><strong>Grasslands:</strong> Savannas (tropical/seasonal) and Prairies (temperate/fertile).</li>
                    <li style={{ marginBottom: '10px' }}><strong>Desert:</strong> Low rainfall (&lt;250mm), extreme temp fluctuations, specialized adaptations.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Tundra:</strong> Extremely cold, permafrost, low-growing vegetation, carbon storage.</li>
                </ul>

                <h4>2. Aquatic Ecosystems (Water-Based)</h4>
                <ul>
                    <li style={{ marginBottom: '10px' }}><strong>Freshwater:</strong> Lentic (lakes/ponds), Lotic (rivers/streams), and Wetlands (swamps/marshes - critical for purification).</li>
                    <li style={{ marginBottom: '10px' }}><strong>Marine:</strong> Coastal (estuaries, reefs, mangroves) and Open Ocean (phytoplankton-based).</li>
                </ul>

                <h3>Earth's Major Ecosystems</h3>
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

                <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '8px', border: '1px solid #feb2b2', margin: '20px 0' }}>
                    <strong>🚨 Ecosystem Threats</strong>
                    <ul style={{ margin: '10px 0 0', fontSize: '0.9em' }}>
                        <li>50% of wetlands lost globally since 1900</li>
                        <li>17% of Amazon rainforest cleared since 1970</li>
                        <li>50% of coral reefs degraded or destroyed</li>
                        <li>70% of grasslands converted to agriculture</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Natural vs. Artificial Ecosystems</h3>
                <p>Natural ecosystems are self-regulating and have evolved over millions of years, while artificial ecosystems are created and maintained by humans for specific purposes.</p>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#166534', letterSpacing: '0.12em', marginBottom: '15px' }}>NATURAL</div>
                                <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#14532d', margin: 0 }}>
                                    <li style={{ marginBottom: '8px' }}>Self-regulating systems</li>
                                    <li style={{ marginBottom: '8px' }}>High species biodiversity</li>
                                    <li style={{ marginBottom: '8px' }}>Complex food web stability</li>
                                    <li>No human intervention</li>
                                </ul>
                            </div>
                            <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '8px', border: '1px solid #ffedd5' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: '800', color: '#c2410c', letterSpacing: '0.12em', marginBottom: '15px' }}>ARTIFICIAL</div>
                                <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#7c2d12', margin: 0 }}>
                                    <li style={{ marginBottom: '8px' }}>Requires active management</li>
                                    <li style={{ marginBottom: '8px' }}>Low species biodiversity</li>
                                    <li style={{ marginBottom: '8px' }}>Simplified food chains</li>
                                    <li>Needs external inputs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 3: Key differences between Natural and Artificial (Human-made) ecosystems
                    </p>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '8px', border: '1px solid #bae6fd', margin: '20px 0' }}>
                    <strong>💡 The Middle Ground</strong>
                    <p style={{ margin: '10px 0 0', fontSize: '0.92em' }}>Many ecosystems fall on a spectrum: <strong>Semi-natural</strong> (managed forests), <strong>Restored</strong> (wetlands recreated after degradation), and <strong>Urban Green</strong> (green roofs/parks attempting to provide services in cities).</p>
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
