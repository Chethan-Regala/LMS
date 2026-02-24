'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_7: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which law of thermodynamics states that every energy transformation is inefficient, leading to the loss of energy as heat (entropy)?",
            options: [
                "First Law of Thermodynamics",
                "Second Law of Thermodynamics",
                "Third Law of Thermodynamics",
                "Law of Conservation of Mass"
            ],
            correctAnswer: 1,
            explanation: "The Second Law of Thermodynamics (Entropy) explains that energy transformations are inefficient and some energy is always lost as heat. This is why energy pyramids are always upright and energy cannot be recycled."
        },
        {
            question: "What is the correct formula for Net Primary Productivity (NPP)?",
            options: [
                "NPP = GPP + Respiration",
                "NPP = Secondary Productivity - Respiration",
                "NPP = GPP - Respiration",
                "NPP = Solar Energy / GPP"
            ],
            correctAnswer: 2,
            explanation: "Net Primary Productivity (NPP) is the energy remaining after plants have used some of the energy captured via Gross Primary Productivity (GPP) for their own cellular respiration (R)."
        },
        {
            question: "According to the global productivity patterns, which of these ecosystems contributes the MOST to global total NPP despite having low per-area productivity?",
            options: [
                "Tropical Rainforest",
                "Open Ocean",
                "Coral Reefs",
                "Temperate Grasslands"
            ],
            correctAnswer: 1,
            explanation: "The Open Ocean has low productivity per square meter (125 g/m²/year), but because it covers 71% of the Earth's surface, it contributes about 25% of the total global NPP."
        },
        {
            question: "Why is energy flow in ecosystems described as 'unidirectional'?",
            options: [
                "Because energy only flows from the North to the South Pole",
                "Because energy is converted into heat which cannot be recaptured by producers",
                "Because plants only grow towards the sun",
                "Because nutrient cycles always return the energy to the soil"
            ],
            correctAnswer: 1,
            explanation: "Unlike matter, energy cannot be recycled. Once it is converted into heat during metabolic processes, it radiates into space and cannot be re-used by producers to drive photosynthesis."
        },
        {
            question: "Which biome is characterized by coniferous (needle-leaf) trees, long cold winters, and massive carbon storage in acidic soils?",
            options: [
                "Tropical Rainforest",
                "Temperate Deciduous Forest",
                "Boreal Forest (Taiga)",
                "Tundra"
            ],
            correctAnswer: 2,
            explanation: "The Boreal Forest or Taiga is dominated by conifers like spruce and fir, has long winters, and stores significant carbon in its soil and peat."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.7</div>
                <div className="lesson-title-main">
                    <h1>⚡ Energy Flow in Ecosystems & Types of Ecosystems</h1>
                </div>
            </div>

            <section className="content-section">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', margin: '20px 0', fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Estimated Time</span>
                        90-120 minutes
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Difficulty</span>
                        Intermediate
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Prerequisites</span>
                        Food Chains, Producers
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pass Score</span>
                        70% or higher
                    </div>
                </div>

                <h3>What You'll Master: Learning Objectives</h3>
                <ul>
                    <li>Analyze the unidirectional flow of energy through ecosystems and explain why energy cannot be recycled unlike matter, applying thermodynamic principles</li>
                    <li>Quantify energy transfer efficiency between trophic levels, calculate productivity (GPP, NPP), and evaluate factors limiting energy availability in ecosystems</li>
                    <li>Compare and contrast nutrient cycling (biogeochemical cycles) with energy flow, explaining how matter cycles while energy flows linearly</li>
                    <li>Classify ecosystems based on structural and functional characteristics, analyzing terrestrial biomes (forests, grasslands, deserts) and aquatic ecosystems (marine, freshwater)</li>
                    <li>Evaluate how climate, geography, and species interactions determine ecosystem types, and assess human impacts on energy flow and ecosystem classification globally</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🔥 Why This Topic Matters</h3>
                <p>Imagine your smartphone battery: it converts stored chemical energy into electrical energy that powers your device, but with each transformation, some energy is lost as heat. You can't "recycle" that heat back into usable electrical energy—once it's dispersed, it's gone. This is exactly how energy works in ecosystems: it flows in one direction only, from the sun through producers to consumers, with losses at every step. Understanding this fundamental principle explains why ecosystems are structured as they are, why there are always more plants than herbivores, and why we can't sustain infinite trophic levels.</p>

                <p>Energy flow is the heartbeat of every ecosystem. The sun delivers approximately 1.7 × 10¹⁷ watts of power to Earth continuously—this massive energy input drives weather patterns, ocean currents, photosynthesis, and ultimately all life. Yet only about 0.1% of solar energy reaching Earth is captured by producers through photosynthesis, and at each subsequent trophic level, 90% of energy is lost to heat, waste, and metabolism. This inefficiency has profound implications: it limits food chain length, determines ecosystem productivity, constrains human food production, and shapes biodiversity patterns globally.</p>

                <p>Understanding ecosystem types is equally critical. Earth contains an extraordinary diversity of ecosystems—from scorching deserts receiving 3mm annual rainfall to lush rainforests with 10,000mm, from frozen tundra at -40°C to tropical ecosystems at +35°C, from shallow coral reefs to abyssal ocean trenches 11,000 meters deep. Each ecosystem type has characteristic energy flow patterns, productivity levels, nutrient cycles, and species adapted to specific conditions. For environmental scientists, classifying and understanding these ecosystems is essential for conservation planning, predicting climate change impacts, managing natural resources, and addressing global challenges like biodiversity loss and food security.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>💡 Real-World Applications:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Agriculture & Food Security:</strong> Understanding energy flow efficiency determines sustainable food production—growing crops directly (eating at 1st trophic level) is 10× more efficient than eating meat (2nd/3rd level)</li>
                        <li style={{ marginBottom: '10px' }}><strong>Renewable Energy:</strong> Biofuel production from algae or crops requires understanding photosynthetic efficiency and energy conversion rates</li>
                        <li style={{ marginBottom: '10px' }}><strong>Climate Change Modeling:</strong> Energy flow through ecosystems affects carbon cycling, heat distribution, and climate feedback mechanisms</li>
                        <li style={{ marginBottom: '10px' }}><strong>Conservation Planning:</strong> Protecting ecosystem types requires understanding their unique energy flow patterns, productivity, and species dependencies</li>
                        <li style={{ marginBottom: '10px' }}><strong>Fisheries Management:</strong> Sustainable harvest levels depend on understanding marine energy flow and productivity limitations</li>
                        <li style={{ marginBottom: '10px' }}><strong>Ecosystem Restoration:</strong> Reestablishing degraded ecosystems requires knowledge of which ecosystem type naturally occurs in given climate/geographic conditions</li>
                        <li><strong>Biome Mapping & Monitoring:</strong> Satellite remote sensing tracks primary productivity and ecosystem health globally, informing policy and management</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>⚡ Part 1: Energy Flow in Ecosystems - The Fundamental Process</h3>
                <h4>The Source: Solar Energy Input</h4>
                <p>Virtually all energy in ecosystems originates from the sun through nuclear fusion reactions converting hydrogen to helium, releasing enormous energy. The sun radiates approximately 3.8 × 10²⁶ watts of power in all directions. Earth, at 150 million kilometers distance, intercepts about 1.7 × 10¹⁷ watts—enough energy in one hour to power human civilization for an entire year!</p>

                <p>However, most solar energy reaching Earth is not captured by ecosystems:</p>
                <ul>
                    <li>30% is immediately reflected back to space by clouds, ice, snow, and Earth's surface (albedo effect)</li>
                    <li>~70% is absorbed by atmosphere, land, and oceans, warming the planet and driving weather/ocean currents</li>
                    <li>Only ~1% reaches plant surfaces at wavelengths suitable for photosynthesis (visible light: 400-700 nm)</li>
                    <li>Of that 1%, only ~10% is actually captured by chlorophyll and converted through photosynthesis</li>
                </ul>
                <p>Final result: <strong>~0.1% of incoming solar energy</strong> becomes chemical energy in producers (GPP).</p>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#334155' }}>🔬 Why Photosynthesis is "Inefficient":</h4>
                    <p>Photosynthetic efficiency is limited by fundamental constraints:</p>
                    <ul style={{ fontSize: '0.9em', color: '#475569', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Wavelength limitations:</strong> Chlorophyll only absorbs red (~650-700nm) and blue (~400-500nm) light efficiently; reflects green light (why plants appear green)</li>
                        <li style={{ marginBottom: '8px' }}><strong>Photon energy mismatch:</strong> Blue photons carry more energy than needed for photosynthesis; excess energy is lost as heat</li>
                        <li style={{ marginBottom: '8px' }}><strong>Saturation point:</strong> At high light intensities, photosynthetic machinery becomes saturated and can't process additional photons</li>
                        <li style={{ marginBottom: '8px' }}><strong>Respiration costs:</strong> Plants use ~50% of captured energy for their own cellular respiration and maintenance</li>
                        <li style={{ marginBottom: '8px' }}><strong>Photorespiration:</strong> Under hot, dry conditions, plants waste energy through photorespiration (RuBisCO enzyme binds O₂ instead of CO₂)</li>
                        <li style={{ marginBottom: '8px' }}><strong>Seasonal/daily variations:</strong> Plants can't photosynthesize at night or in winter (deciduous), reducing annual efficiency</li>
                        <li><strong>Best-case scenario:</strong> Sugarcane and algae achieve ~8% efficiency in ideal conditions; most plants average 1-3% efficiency in natural conditions.</li>
                    </ul>
                </div>

                <h4>Unidirectional Flow: Energy Cannot Be Recycled</h4>
                <p>The most fundamental principle of ecosystem energetics: <strong>energy flows in ONE DIRECTION ONLY</strong>, from sun → producers → consumers → decomposers → heat. Unlike matter (carbon, nitrogen, phosphorus) which cycles repeatedly through ecosystems, energy cannot be recycled. This is mandated by the laws of thermodynamics:</p>

                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#c2410c' }}>🔬 Laws of Thermodynamics Applied to Ecosystems</h4>
                    <p style={{ marginBottom: '15px' }}><strong>First Law of Thermodynamics (Conservation of Energy):</strong> Energy cannot be created or destroyed, only transformed from one form to another. In ecosystems: Solar energy (light) → Chemical energy (glucose) → Kinetic energy (movement) → Heat energy (dissipated). Total energy is conserved, but the form changes.</p>
                    <p><strong>Second Law of Thermodynamics (Entropy):</strong> Every energy transformation is inefficient; some energy is inevitably converted to heat (thermal energy), which is the most disordered, lowest-quality form of energy. Heat cannot spontaneously be converted back to higher-quality energy (chemical, kinetic) without external energy input.</p>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '50px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h4 style={{ color: '#0f172a', fontSize: '1.4em', fontWeight: '900', margin: 0 }}>Energy Flow vs. Nutrient Cycling: The Critical Difference</h4>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '30px', alignItems: 'stretch' }}>
                        {/* NUTRIENT CYCLING PANEL */}
                        <div style={{ backgroundColor: '#fefce8', padding: '30px 20px', borderRadius: '24px', border: '1px solid #fde047', position: 'relative' }}>
                            <div style={{ textAlign: 'center', fontSize: '0.85em', fontWeight: '800', color: '#854d0e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '30px' }}>
                                Nutrient Cycling (CIRCULAR)
                            </div>

                            <div style={{ position: 'relative', height: '350px', width: '100%' }}>
                                {/* Nodes */}
                                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', padding: '8px 15px', backgroundColor: '#10b981', color: 'white', borderRadius: '4px', fontSize: '0.75em', fontWeight: 'bold', zIndex: 2 }}>Producers</div>

                                <div style={{ position: 'absolute', top: '100px', left: '20%', padding: '8px 15px', backgroundColor: '#f59e0b', color: 'white', borderRadius: '4px', fontSize: '0.75em', fontWeight: 'bold', zIndex: 2 }}>Consumers</div>

                                <div style={{ position: 'absolute', top: '180px', left: '50%', transform: 'translateX(-50%)', padding: '8px 15px', backgroundColor: '#78350f', color: 'white', borderRadius: '4px', fontSize: '0.75em', fontWeight: 'bold', zIndex: 2 }}>Decomposers</div>

                                <div style={{ position: 'absolute', bottom: '40px', left: '0', padding: '8px 12px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '4px', fontSize: '0.7em', fontWeight: 'bold', zIndex: 2 }}>Atmospheric CO₂/N₂</div>

                                <div style={{ position: 'absolute', bottom: '40px', right: '0', padding: '8px 12px', backgroundColor: '#ea580c', color: 'white', borderRadius: '4px', fontSize: '0.7em', fontWeight: 'bold', zIndex: 2 }}>Soil Nutrients</div>

                                {/* SVG Arrows for Circular Flow */}
                                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                    <defs>
                                        <marker id="arrowhead-nut" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orientation="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                                        </marker>
                                    </defs>
                                    {/* Producers -> Consumers */}
                                    <path d="M 60,35 Q 40,65 40,95" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Consumers -> Decomposers */}
                                    <path d="M 50,135 Q 55,160 80,180" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Consumers -> Atomsphere */}
                                    <path d="M 40,135 Q 35,210 50,265" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Producers -> Decomposers */}
                                    <path d="M 110,35 Q 120,110 110,175" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Decomposers -> Soil */}
                                    <path d="M 140,215 Q 170,240 185,270" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Decomposers -> Atmosphere */}
                                    <path d="M 85,215 Q 70,240 65,265" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Soil -> Producers */}
                                    <path d="M 200,270 Q 230,150 145,35" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                    {/* Atmosphere -> Producers */}
                                    <path d="M 80,270 Q 150,220 120,35" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead-nut)" />
                                </svg>
                            </div>
                        </div>

                        {/* ENERGY FLOW PANEL */}
                        <div style={{ backgroundColor: '#fefce8', padding: '30px', borderRadius: '24px', border: '1px solid #fde047', position: 'relative' }}>
                            <div style={{ textAlign: 'center', fontSize: '0.85em', fontWeight: '800', color: '#854d0e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '30px' }}>
                                Energy Flow (UNIDIRECTIONAL)
                            </div>

                            <div style={{ position: 'relative', height: '600px', width: '100%' }}>
                                {/* Nodes */}
                                <div style={{ position: 'absolute', top: '0', right: '40px', padding: '8px 15px', backgroundColor: '#fbbf24', color: '#92400e', borderRadius: '50px', fontSize: '0.8em', fontWeight: '900', border: '2px solid #b45309', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '1.2em' }}>☀️</span> Sun Input
                                </div>

                                <div style={{ position: 'absolute', top: '80px', right: '40px', width: '140px', padding: '12px', backgroundColor: '#10b981', color: 'white', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', textAlign: 'center' }}>
                                    Producers<br />Photosynthesis
                                </div>

                                <div style={{ position: 'absolute', top: '180px', right: '160px', width: '140px', padding: '12px', backgroundColor: '#f59e0b', color: 'white', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', textAlign: 'center' }}>
                                    Primary Consumers<br />Herbivores
                                </div>

                                <div style={{ position: 'absolute', top: '280px', right: '350px', width: '140px', padding: '12px', backgroundColor: '#ea580c', color: 'white', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', textAlign: 'center' }}>
                                    Secondary Consumers<br />Carnivores
                                </div>

                                <div style={{ position: 'absolute', top: '380px', right: '540px', width: '140px', padding: '12px', backgroundColor: '#ef4444', color: 'white', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', textAlign: 'center' }}>
                                    Tertiary Consumers<br />Top Predators
                                </div>

                                <div style={{ position: 'absolute', top: '480px', right: '200px', width: '140px', padding: '12px', backgroundColor: '#78350f', color: 'white', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', textAlign: 'center' }}>
                                    Decomposers
                                </div>

                                {/* Heat Loss Nodes */}
                                {[
                                    { pos: '680px', color: '#fb7185' },
                                    { pos: '480px', color: '#fb7185' },
                                    { pos: '280px', color: '#fb7185' },
                                    { pos: '100px', color: '#fb7185' },
                                    { pos: '0px', color: '#fb7185' }
                                ].map((h, i) => (
                                    <div key={i} style={{ position: 'absolute', bottom: '110px', left: h.pos, padding: '6px 12px', backgroundColor: h.color, color: 'white', borderRadius: '4px', fontSize: '0.65em', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        Heat Loss <span style={{ fontSize: '1.2em' }}>🔥</span>
                                    </div>
                                ))}

                                <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', padding: '10px 30px', backgroundColor: '#0ea5e9', color: 'white', borderRadius: '8px', fontSize: '0.9em', fontWeight: '900', border: '2px solid #0369a1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    Space <span style={{ fontSize: '1.2em' }}>❄️</span>
                                </div>

                                <div style={{ position: 'absolute', bottom: '50px', right: '40px', fontSize: '0.8em', fontStyle: 'italic', color: '#64748b', backgroundColor: 'rgba(255,255,255,0.7)', padding: '4px 8px', borderRadius: '4px' }}>
                                    Cannot be recaptured
                                </div>

                                {/* SVG Arrows for Energy Flow */}
                                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                    <defs>
                                        <marker id="arrowhead-en" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orientation="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                                        </marker>
                                        <marker id="arrowhead-heat" markerWidth="8" markerHeight="6" refX="7" refY="3" orientation="auto">
                                            <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
                                        </marker>
                                    </defs>

                                    {/* Main Chain */}
                                    <path d="M 620,40 L 620,75" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 570,120 L 290,175" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 230,225 L 180,275" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 110,325 L 70,375" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-en)" />

                                    {/* Flow to Decomposers */}
                                    <path d="M 640,125 Q 650,350 350,490" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 250,225 Q 280,400 280,475" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 150,325 Q 180,420 250,475" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 70,425 Q 130,460 190,485" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead-en)" />

                                    {/* Heat Loss Arrows */}
                                    <path d="M 680,125 Q 730,250 720,480" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrowhead-heat)" />
                                    <path d="M 300,225 Q 400,350 510,480" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrowhead-heat)" />
                                    <path d="M 110,325 Q 200,400 310,480" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrowhead-heat)" />
                                    <path d="M 40,425 L 40,480" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrowhead-heat)" />
                                    <path d="M 270,525 L 310,540" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrowhead-heat)" />

                                    {/* Flow to Space */}
                                    <path d="M 40,515 Q 100,560 380,590" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 140,515 Q 200,560 380,590" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 320,515 Q 350,560 380,590" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 520,515 Q 450,560 420,590" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowhead-en)" />
                                    <path d="M 720,515 Q 600,560 420,590" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowhead-en)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <h4>Energy Transfer Efficiency Between Trophic Levels</h4>
                <p>The ecological efficiency (also called Lindeman efficiency or trophic level transfer efficiency) measures what percentage of energy from one trophic level reaches the next level. The average is approximately 10%, though it ranges from 5-20% depending on organisms and conditions.</p>

                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Energy Category</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Percentage</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Fate/Explanation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Energy Available to Consumers</strong></td>
                                <td style={{ padding: '12px' }}>~10%</td>
                                <td style={{ padding: '12px' }}>Becomes biomass in consumer bodies (growth, reproduction)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Energy Lost to Respiration</strong></td>
                                <td style={{ padding: '12px' }}>~60-70%</td>
                                <td style={{ padding: '12px' }}>Metabolic heat production, maintaining body temperature (especially endotherms), movement, active transport, protein synthesis</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Energy Lost in Waste</strong></td>
                                <td style={{ padding: '12px' }}>~10-20%</td>
                                <td style={{ padding: '12px' }}>Feces (undigested material), urine (nitrogenous waste), shed materials (hair, feathers, exoskeletons)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Energy Not Consumed</strong></td>
                                <td style={{ padding: '12px' }}>~10-30%</td>
                                <td style={{ padding: '12px' }}>Roots, wood, bones, shells, indigestible parts not eaten; material that dies before being consumed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fdf2f8', padding: '35px', borderRadius: '24px', border: '1px solid #fbcfe8', margin: '30px 0' }}>
                    <h5 style={{ color: '#9d174d', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.2em' }}>⚖️</span> Factors Affecting Transfer Efficiency:
                    </h5>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {[
                            { title: 'Metabolism type', desc: 'Ectotherms (reptiles, fish) are more efficient (~13%) than endotherms (mammals, birds, ~10%) because they don\'t spend energy on thermoregulation.', icon: '🦎' },
                            { title: 'Diet quality', desc: 'Carnivores (10-20% efficiency) are more efficient than herbivores (5-10%) because meat is easier to digest than plant cellulose.', icon: '🥩' },
                            { title: 'Environmental temp', desc: 'Warmer environments increase metabolic efficiency up to optimal ranges; cold increases heating costs for endotherms.', icon: '🌡️' },
                            { title: 'Organism size', desc: 'Smaller organisms have higher metabolic rates per unit mass, reducing efficiency; larger organisms are relatively more efficient.', icon: '🐘' },
                            { title: 'Activity level', desc: 'Highly active organisms (birds, cheetahs) lose more energy to movement than sedentary ones (sloths, snakes).', icon: '🏃' },
                            { title: 'Assimilation efficiency', desc: 'Ingested food absorption: Carnivores ~80%, Herbivores ~30-60%, Detritivores ~20-40%.', icon: '🧪' }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #fbcfe8' }}>
                                <div style={{ fontWeight: 'bold', color: '#9d174d', fontSize: '0.9em', marginBottom: '5px' }}>{item.icon} {item.title}</div>
                                <div style={{ fontSize: '0.85em', color: '#475569', lineHeight: '1.5' }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '12px', marginBottom: '40px', borderLeft: '4px solid #0369a1' }}>
                    <p style={{ margin: 0, fontSize: '0.95em', color: '#0c4a6e' }}>
                        <strong>Ecological Efficiency:</strong> Energy transfer efficiency showing massive losses at each trophic level, limiting food chain length.
                    </p>
                </div>

                <div style={{ margin: '60px 0' }}>
                    <h4 style={{ color: '#111827', fontSize: '1.4em', fontWeight: '900', borderBottom: '2px solid #3b82f6', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' }}>Productivity: Measuring Energy Flow</h4>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '30px' }}>
                        Ecologists quantify energy flow using productivity measurements—the rate of energy conversion or biomass production in ecosystems over time:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                        {/* PRIMARY PRODUCTIVITY */}
                        <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '24px', border: '1px solid #bbf7d0' }}>
                            <h5 style={{ color: '#166534', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>📊</span> Primary Productivity (Producer Level)
                            </h5>

                            <div style={{ marginBottom: '25px', backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #dcfce7' }}>
                                <div style={{ fontWeight: 'bold', color: '#15803d', fontSize: '0.9em' }}>Gross Primary Productivity (GPP):</div>
                                <ul style={{ fontSize: '0.85em', color: '#374151', paddingLeft: '18px', margin: '10px 0' }}>
                                    <li><strong>Definition:</strong> Total rate of organic matter/energy produced by photosynthesis in producers.</li>
                                    <li><strong>Formula:</strong> GPP = Total energy fixed by photosynthesis</li>
                                    <li><strong>Units:</strong> g/m²/year, kcal/m²/year, or gC/m²/year (carbon)</li>
                                    <li><strong>Represents:</strong> All energy captured before any is used by plants themselves.</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '25px', backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #dcfce7' }}>
                                <div style={{ fontWeight: 'bold', color: '#15803d', fontSize: '0.9em' }}>Net Primary Productivity (NPP):</div>
                                <ul style={{ fontSize: '0.85em', color: '#374151', paddingLeft: '18px', margin: '10px 0' }}>
                                    <li><strong>Definition:</strong> Energy remaining after plants use some for their own respiration.</li>
                                    <li><strong>Formula:</strong> NPP = GPP - R <span style={{ fontSize: '0.8em', color: '#666' }}>(where R = plant respiration)</span></li>
                                    <li><strong>Represents:</strong> Energy available to consumers (herbivores, decomposers).</li>
                                    <li><strong>Typical value:</strong> NPP ≈ 50-60% of GPP (plants respire 40-50% of captured energy)</li>
                                </ul>
                            </div>

                            <div style={{ backgroundColor: '#166534', color: 'white', padding: '20px', borderRadius: '16px' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9em', marginBottom: '10px' }}>Example Calculation:</div>
                                <div style={{ fontSize: '0.85em', lineHeight: '1.6' }}>
                                    A forest: GPP = 30,000 kcal/m²/year<br />
                                    Respiration (R) = 13,000 kcal/m²/year<br />
                                    <strong>NPP = 30,000 - 13,000 = 17,000 kcal/m²/year</strong><br />
                                    <span style={{ fontSize: '0.85em', opacity: 0.9, display: 'block', marginTop: '5px' }}>This 17,000 kcal/m²/year is available to herbivores, decomposers, and represents net forest growth.</span>
                                </div>
                            </div>
                        </div>

                        {/* SECONDARY PRODUCTIVITY */}
                        <div style={{ backgroundColor: '#fff1f2', padding: '30px', borderRadius: '24px', border: '1px solid #fecaca' }}>
                            <h5 style={{ color: '#991b1b', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>📊</span> Secondary Productivity (Consumer Level)
                            </h5>

                            <div style={{ marginBottom: '25px', backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                <ul style={{ fontSize: '0.85em', color: '#374151', paddingLeft: '18px', margin: '0' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>Definition:</strong> Rate of biomass/energy production by consumers (herbivores, carnivores).</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Formula:</strong> Secondary Productivity = Assimilated energy - Respiration</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '25px', backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                <div style={{ fontWeight: 'bold', color: '#991b1b', fontSize: '0.9em', marginBottom: '8px' }}>Key Point: Secondary productivity is always much lower than NPP due to:</div>
                                <ul style={{ fontSize: '0.85em', color: '#374151', paddingLeft: '18px', margin: 0 }}>
                                    <li>Only ~10% energy transfer from prey to predator</li>
                                    <li>High respiration costs (movement, thermoregulation)</li>
                                    <li>Energy lost in waste products</li>
                                </ul>
                            </div>

                            <div style={{ backgroundColor: '#991b1b', color: 'white', padding: '20px', borderRadius: '16px' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9em', marginBottom: '10px' }}>Example Calculation:</div>
                                <div style={{ fontSize: '0.85em', lineHeight: '1.6' }}>
                                    If NPP = 17,000 kcal/m²/year available:<br />
                                    <strong>Herbivore SP ≈ 17,000 × 0.10 = 1,700 kcal/m²/year</strong><br />
                                    <strong>Carnivore SP ≈ 1,700 × 0.10 = 170 kcal/m²/year</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '60px 0' }}>
                    <h4 style={{ color: '#111827', fontSize: '1.4em', fontWeight: '900', borderBottom: '2px solid #10b981', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' }}>Global Primary Productivity Patterns</h4>

                    <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #10b981' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Ecosystem Type</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>NPP (g/m²/year)</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Area (10⁶ km²)</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Total Global NPP (%)</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Limiting Factors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: 'Tropical Rainforest', npp: '2,200', area: '17.0', global: '22%', limit: 'Nutrients (rapid cycling)' },
                                    { type: 'Temperate Forest', npp: '1,250', area: '12.0', global: '9%', limit: 'Growing season length, temp' },
                                    { type: 'Boreal Forest (Taiga)', npp: '800', area: '12.0', global: '6%', limit: 'Short season, cold' },
                                    { type: 'Savanna/Grassland', npp: '900', area: '15.0', global: '8%', limit: 'Water, fire, grazing' },
                                    { type: 'Desert/Scrubland', npp: '90', area: '18.0', global: '1%', limit: 'Water (severe)' },
                                    { type: 'Tundra', npp: '140', area: '8.0', global: '1%', limit: 'Temp, permafrost, short season' },
                                    { type: 'Cropland', npp: '650', area: '14.0', global: '5%', limit: 'Managed (water/nutrients)' },
                                    { type: 'Open Ocean', npp: '125', area: '332.0', global: '25%', limit: 'Nutrients (N, P)' },
                                    { type: 'Coastal/Shelf', npp: '360', area: '26.6', global: '6%', limit: 'Light, nutrients' },
                                    { type: 'Estuaries', npp: '1,500', area: '1.4', global: '1%', limit: 'Highly productive' },
                                    { type: 'Algal Beds/Coral Reefs', npp: '2,500', area: '0.6', global: '1%', limit: 'Temp, light, symbiosis' }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? 'white' : '#f8fafc' }}>
                                        <td style={{ padding: '12px', fontWeight: (row.type === 'Open Ocean' || row.type === 'Tropical Rainforest') ? 'bold' : 'normal' }}>{row.type}</td>
                                        <td style={{ padding: '12px', textAlign: 'right' }}>{row.npp}</td>
                                        <td style={{ padding: '12px', textAlign: 'right' }}>{row.area}</td>
                                        <td style={{ padding: '12px', textAlign: 'right', color: '#16a34a', fontWeight: 'bold' }}>{row.global}</td>
                                        <td style={{ padding: '12px' }}>{row.limit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '24px', border: '1px solid #bbf7d0' }}>
                        <h5 style={{ color: '#166534', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.2em' }}>🌍</span> Global Productivity Insights:
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            {[
                                { title: 'Terrestrial vs. Aquatic', text: 'Terrestrial ecosystems produce ~60% of global NPP, aquatic ~40%, despite oceans covering 71% of Earth\'s surface.' },
                                { title: 'Most productive per area', text: 'Coral reefs and algal beds (2,500 g/m²/year) > Tropical rainforests (2,200) > Estuaries (1,500).' },
                                { title: 'Largest total contribution', text: 'Open ocean (25% of global NPP) despite low per-area productivity—sheer size matters!' },
                                { title: 'Tropical rainforests', text: 'Cover only 3% of Earth\'s land but produce 22% of terrestrial NPP—critical for global carbon cycling.' },
                                { title: 'Human appropriation', text: 'Humans directly harvest or alter ~25-40% of terrestrial NPP through agriculture, forestry, urbanization.' },
                                { title: 'Climate change impact', text: 'Rising temperatures may increase productivity at high latitudes but decrease it in already hot regions.' }
                            ].map((insight, i) => (
                                <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #dcfce7' }}>
                                    <div style={{ fontWeight: 'bold', color: '#166534', fontSize: '0.95em', marginBottom: '8px' }}>• {insight.title}</div>
                                    <div style={{ fontSize: '0.85em', color: '#374151', lineHeight: '1.6' }}>{insight.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ maxWidth: '640px', margin: '30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/lnAKICtJIA4?si=ZIEV1mEF5N3xJN9e"
                            title="Energy Flow Explained"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '60px 0' }}>
                    <h3 style={{ color: '#0f172a', fontSize: '1.8em', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px', borderRadius: '12px', fontSize: '0.8em' }}>🌍</span> Part 2: Types of Ecosystems - Classification and Characteristics
                    </h3>

                    <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '32px', border: '1px solid #e2e8f0', marginBottom: '50px' }}>
                        <h4 style={{ color: '#1e293b', fontWeight: '800', marginBottom: '20px' }}>What Defines an Ecosystem Type?</h4>
                        <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '30px' }}>
                            Ecosystems are classified based on several key factors that determine their structure, function, and species composition:
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                            {[
                                { title: 'Climate', desc: 'Temperature, precipitation patterns, seasonality', icon: '🌡️' },
                                { title: 'Dominant vegetation', desc: 'Plant life forms adapted to conditions (trees, grasses, succulents)', icon: '🌿' },
                                { title: 'Geography', desc: 'Elevation, latitude, soil type, water availability', icon: '📍' },
                                { title: 'Productivity', desc: 'Primary productivity rates (GPP/NPP)', icon: '📈' },
                                { title: 'Biodiversity', desc: 'Species richness and community structure', icon: '🧬' },
                                { title: 'Disturbance', desc: 'Fire, flooding, storms, grazing', icon: '⚡' },
                                { title: 'Aquatic vs. Terrestrial', desc: 'Land-based or water-based structural foundations', icon: '💧' },
                                { title: 'Anthropogenic', desc: 'Natural vs. human-created/managed (agricultural, urban)', icon: '🏙️' }
                            ].map((item, i) => (
                                <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '1.4em' }}>{item.icon}</span>
                                        <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '0.95em' }}>{item.title}</div>
                                    </div>
                                    <div style={{ fontSize: '0.85em', color: '#64748b', lineHeight: '1.5' }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#eff6ff', borderRadius: '16px', border: '1px solid #bfdbfe', color: '#1e40af', fontSize: '0.95em', lineHeight: '1.6' }}>
                            The broadest classification divides ecosystems into <strong>TERRESTRIAL</strong> (land-based) and <strong>AQUATIC</strong> (water-based). Aquatic systems are further divided into freshwater and marine (saltwater) based on salinity. Terrestrial ecosystems in different regions with similar climate form <strong>biomes</strong>—large-scale ecosystem types like tropical rainforests, deserts, tundra, etc.
                        </div>
                    </div>

                    <h4 style={{ color: '#111827', fontSize: '1.5em', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '5px solid #10b981', paddingLeft: '15px' }}>Terrestrial Ecosystems (Biomes)</h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {[
                            {
                                icon: '🌴',
                                name: 'TROPICAL RAINFOREST',
                                location: 'Equatorial regions (Amazon, Congo Basin, Southeast Asia)',
                                climate: 'Hot year-round (25-27°C), Very high rainfall (2,000-10,000 mm/year), No distinct seasons',
                                characteristics: [
                                    'Highest terrestrial biodiversity on Earth',
                                    'Multi-layered canopy structure (emergent, canopy, understory, forest floor)',
                                    'Nutrient-poor soils despite high productivity (rapid nutrient cycling)',
                                    'Constant high humidity (80-90%)',
                                    'Year-round growing season'
                                ],
                                energyFlow: {
                                    npp: '~2,200 g/m²/year (highest terrestrial)',
                                    gpp: '~4,000-5,000 g/m²/year',
                                    details: 'High decomposition rates; Complex, multi-level food webs'
                                },
                                species: 'Evergreen trees (Mahogany, Brazil nut, Rubber), Epiphytes (Orchids, Bromeliads), Lianas (Woody vines), Diverse fauna (Jaguars, Toucans, Poison dart frogs)',
                                impact: 'Severe deforestation (cattle ranching, agriculture, logging), Biodiversity loss, Carbon emissions, Indigenous displacement',
                                color: '#166534',
                                bg: '#f0fdf4',
                                border: '#bbf7d0'
                            },
                            {
                                icon: '🍂',
                                name: 'TEMPERATE DECIDUOUS FOREST',
                                location: 'Eastern USA, Europe, Eastern Asia (30-50° latitude)',
                                climate: 'Four distinct seasons, Temperature: -30°C to +30°C, Rainfall: 750-1,500 mm/year',
                                characteristics: [
                                    'Trees shed leaves in winter (deciduous adaptation)',
                                    'Well-developed soil with thick leaf litter layer',
                                    'Moderate biodiversity',
                                    'Seasonal animal migrations/hibernation',
                                    'Growing season: 4-6 months'
                                ],
                                energyFlow: {
                                    npp: '~1,200 g/m²/year',
                                    details: 'Seasonal productivity peaks in spring/summer; Slower decomposition than tropical (winter dormancy)'
                                },
                                species: 'Oak, Maple, Beech, Birch trees, Deer, Bears, Squirrels, Woodpeckers, Salamanders',
                                impact: 'Extensive historical clearing for agriculture, Heavy urbanization, Acid rain impacts',
                                color: '#991b1b',
                                bg: '#fef2f2',
                                border: '#fecaca'
                            },
                            {
                                icon: '🌲',
                                name: 'BOREAL FOREST (TAIGA)',
                                location: 'Northern hemisphere (50-60°N): Canada, Russia, Scandinavia',
                                climate: 'Long, cold winters (-50°C), Short, mild summers (+20°C), Low precipitation (200-600 mm/year)',
                                characteristics: [
                                    'Dominated by coniferous (evergreen needle-leaf) trees',
                                    'Acidic, nutrient-poor soils',
                                    'Permafrost in northern areas',
                                    'Short growing season (50-100 days)',
                                    'Low biodiversity compared to forests'
                                ],
                                energyFlow: {
                                    npp: '~800 g/m²/year',
                                    details: 'Very slow decomposition (cold, acidic conditions); Massive carbon storage in soils and peat'
                                },
                                species: 'Spruce, Fir, Pine, Larch trees, Moose, Lynx, Wolves, Bears, Migratory birds',
                                impact: 'Logging, Climate change (warming faster than global average), Permafrost thaw, Fire frequency changes',
                                color: '#334155',
                                bg: '#f8fafc',
                                border: '#e2e8f0'
                            },
                            {
                                icon: '🌾',
                                name: 'GRASSLAND (Temperate & Tropical)',
                                location: 'Prairies (NA), Pampas (SA), Savanna (Africa), Steppes (Asia)',
                                climate: 'Moderate rainfall (250-900 mm/year), Hot summers, Cold winters (temperate) or year-round warmth (tropical savanna)',
                                characteristics: [
                                    'Dominated by grasses with few or no trees',
                                    'Deep, fertile soils (mollisols)',
                                    'Fire-adapted vegetation',
                                    'Large herds of grazing mammals',
                                    'Seasonal drought periods'
                                ],
                                energyFlow: {
                                    npp: '~600-900 g/m²/year',
                                    details: 'Most productivity underground (root systems); Rapid nutrient cycling through grazing-decomposition'
                                },
                                species: 'Buffalo grass, Prairie dogs, Bison, Pronghorn (Temperate); Acacia, Zebras, Wildebeest, Lions, Elephants (Tropical)',
                                impact: 'Converted to agriculture (breadbaskets), Heavy grazing by livestock, Fire suppression, Soil degradation',
                                color: '#92400e',
                                bg: '#fffbeb',
                                border: '#fde68a'
                            },
                            {
                                icon: '🏜️',
                                name: 'DESERT',
                                location: 'Sahara, Arabian, Gobi, Sonoran, Atacama, Australian outback (~30° latitude)',
                                climate: 'Very low rainfall (<250 mm/year), Extreme temperatures (hot: +50°C day, cold: below freezing night)',
                                characteristics: [
                                    'Sparse vegetation adapted to water scarcity',
                                    'Low biodiversity but highly specialized species',
                                    'Sandy, rocky, or salt-flat substrates',
                                    'High evaporation rates',
                                    'Nocturnal activity, water storage, CAM photosynthesis'
                                ],
                                energyFlow: {
                                    npp: '~90 g/m²/year (lowest terrestrial)',
                                    details: 'Water is PRIMARY limiting factor; Simple food chains, low biomass'
                                },
                                species: 'Cacti, Succulents, Drought-deciduous shrubs, Camels, Lizards, Scorpions, Kangaroo rats',
                                impact: 'Overgrazing (desertification), Water extraction, Mining, Climate change expansion',
                                color: '#c2410c',
                                bg: '#fff9f2',
                                border: '#fed7aa'
                            },
                            {
                                icon: '❄️',
                                name: 'TUNDRA',
                                location: 'Arctic regions (>60°N), Antarctic, High mountain peaks (alpine tundra)',
                                climate: 'Extremely cold (-40°C winter, +10°C summer), Very low precipitation (150-250 mm/year), Permafrost',
                                characteristics: [
                                    'Treeless (too cold for trees)',
                                    'Dominated by mosses, lichens, low shrubs',
                                    'Very short growing season (50-60 days)',
                                    'Permafrost layer prevents drainage',
                                    'Low biodiversity'
                                ],
                                energyFlow: {
                                    npp: '~140 g/m²/year',
                                    details: 'Extremely slow decomposition (cold); Massive carbon storage in frozen soils'
                                },
                                species: 'Caribou/Reindeer, Arctic foxes, Polar bears, Migratory birds, Lemmings',
                                impact: 'Climate change (warming 2× faster), Permafrost thaw (CO₂/methane release), Oil/gas extraction',
                                color: '#0369a1',
                                bg: '#f0f9ff',
                                border: '#bae6fd'
                            }
                        ].map((biome, i) => (
                            <div key={i} style={{ backgroundColor: biome.bg, border: `1px solid ${biome.border}`, borderRadius: '32px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <div style={{ padding: '25px 35px', backgroundColor: biome.color, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h5 style={{ color: 'white', margin: 0, fontSize: '1.4em', fontWeight: '900' }}>{biome.icon} {biome.name}</h5>
                                    <span style={{ color: 'white', fontSize: '0.85em', opacity: 0.9, fontWeight: 'bold' }}>📍 {biome.location}</span>
                                </div>
                                <div style={{ padding: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                                    <div>
                                        <div style={{ fontWeight: '800', color: biome.color, marginBottom: '15px', fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Climate & Characteristics</div>
                                        <p style={{ fontSize: '0.85em', color: '#1f2937', lineHeight: '1.6', fontWeight: 'bold', marginBottom: '12px' }}>{biome.climate}</p>
                                        <ul style={{ fontSize: '0.85em', color: '#4b5563', paddingLeft: '18px', margin: 0 }}>
                                            {biome.characteristics.map((char, index) => (
                                                <li key={index} style={{ marginBottom: '6px' }}>{char}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '20px', border: `1px solid ${biome.border}` }}>
                                        <div style={{ fontWeight: '800', color: biome.color, marginBottom: '15px', fontSize: '0.85em', textTransform: 'uppercase' }}>Energy Flow & Productivity</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                                            <div style={{ fontSize: '1.1em', fontWeight: '900', color: biome.color }}>NPP: {biome.energyFlow.npp}</div>
                                            {'gpp' in biome.energyFlow && <div style={{ fontSize: '0.85em', color: '#666', fontWeight: 'bold' }}>GPP: {biome.energyFlow.gpp}</div>}
                                            <div style={{ fontSize: '0.85em', color: '#4b5563', lineHeight: '1.5', fontStyle: 'italic' }}>{biome.energyFlow.details}</div>
                                        </div>
                                        <div style={{ paddingTop: '15px', borderTop: '1px solid #f3f4f6' }}>
                                            <div style={{ fontWeight: 'bold', color: biome.color, fontSize: '0.85em', marginBottom: '5px' }}>Dominant Species:</div>
                                            <div style={{ fontSize: '0.8em', color: '#374151', lineHeight: '1.5' }}>{biome.species}</div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '20px', border: '1px solid #ffedd5' }}>
                                        <div style={{ fontWeight: '800', color: '#9a3412', marginBottom: '12px', fontSize: '0.85em', textTransform: 'uppercase' }}>⚠️ Human Impact</div>
                                        <div style={{ fontSize: '0.85em', color: '#7c2d12', lineHeight: '1.6' }}>{biome.impact}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ margin: '60px 0', padding: '40px', backgroundColor: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <h4 style={{ color: '#0f172a', fontWeight: '900', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            <span>🗺️</span> World Biomes Map Visual Insight
                        </h4>
                        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1em', color: '#475569', lineHeight: '1.8' }}>
                            Global distribution of major terrestrial biomes is determined primarily by <strong>temperature</strong> and <strong>precipitation</strong> patterns.
                            As you move from the equator to the poles, or from sea level to mountain peaks, environmental conditions change, shaping the life that can survive.
                        </div>
                        <div style={{ marginTop: '30px', height: '150px', backgroundColor: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #cbd5e1', color: '#94a3b8' }}>
                            (Interactive World Map visualization showing color-coded biome distribution)
                        </div>
                    </div>

                    <div style={{ margin: '80px 0 60px 0' }}>
                        <h4 style={{ color: '#111827', fontSize: '1.5em', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '5px solid #3b82f6', paddingLeft: '15px' }}>Aquatic Ecosystems</h4>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
                            {/* MARINE */}
                            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <div style={{ padding: '25px 35px', backgroundColor: '#0369a1' }}>
                                    <h5 style={{ color: 'white', margin: 0, fontSize: '1.3em', fontWeight: '900' }}>🌊 MARINE ECOSYSTEMS (Saltwater)</h5>
                                    <div style={{ color: '#e0f2fe', fontSize: '0.85em', marginTop: '5px', fontWeight: 'bold' }}>Coverage: 71% of Earth's surface | 97% of all water | Salinity: ~35 ppt</div>
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{ fontSize: '0.85em', color: '#475569', marginBottom: '25px', lineHeight: '1.6' }}>
                                        <strong>Vast depth range (0-11,000m).</strong> Major zones: intertidal, neritic, oceanic, benthic.
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {[
                                            {
                                                name: '1. Open Ocean (Pelagic)',
                                                npp: '125',
                                                text: 'Low per area, but 25% global total due to size. Nutrient-limited (N, P, Fe). Euphotic (sunlit) vs. Aphotic (dark) zones.'
                                            },
                                            {
                                                name: '2. Coastal / Continental Shelf',
                                                npp: '360',
                                                text: 'High productivity (nutrient runoff, upwelling). Major fisheries zones. Kelp forests, seagrass beds.'
                                            },
                                            {
                                                name: '3. Coral Reefs',
                                                npp: '2,500',
                                                text: 'Warm, shallow, clear tropical waters. Highest marine productivity/biodiversity ("Rainforests of the Sea"). Symbiotic zooxanthellae.'
                                            },
                                            {
                                                name: '4. Estuaries',
                                                npp: '1,500',
                                                text: 'Brackish water (river meets ocean). extremely productive nutrient-rich nursery grounds (marshes, mangroves).'
                                            }
                                        ].map((sub, i) => (
                                            <div key={i} style={{ backgroundColor: 'white', padding: '18px', borderRadius: '15px', border: '1px solid #e0f2fe' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                                    <div style={{ fontWeight: 'bold', color: '#0369a1', fontSize: '0.95em' }}>{sub.name}</div>
                                                    <div style={{ fontSize: '0.8em', backgroundColor: '#e0f2fe', padding: '3px 10px', borderRadius: '10px', color: '#0369a1', fontWeight: '900' }}>NPP: ~{sub.npp}</div>
                                                </div>
                                                <div style={{ fontSize: '0.85em', color: '#4b5563', lineHeight: '1.5' }}>{sub.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                        <div style={{ fontWeight: 'bold', color: '#0369a1', fontSize: '0.9em', marginBottom: '10px' }}>Energy Flow & Human Impact:</div>
                                        <div style={{ fontSize: '0.85em', color: '#475569', lineHeight: '1.6' }}>
                                            Phytoplankton base; Upwelling zones; "Marine snow" in deep ocean. Vents use chemosynthesis. <br />
                                            <strong>⚠️ Human Impact:</strong> Overfishing, plastic/nutrient pollution, ocean acidification, habitat destruction.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FRESHWATER */}
                            <div style={{ backgroundColor: '#ecfeff', border: '1px solid #a5f3fc', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <div style={{ padding: '25px 35px', backgroundColor: '#0891b2' }}>
                                    <h5 style={{ color: 'white', margin: 0, fontSize: '1.3em', fontWeight: '900' }}>💧 FRESHWATER ECOSYSTEMS</h5>
                                    <div style={{ color: '#cffafe', fontSize: '0.85em', marginTop: '5px', fontWeight: 'bold' }}>Coverage: 3% of water | &lt;1% accessible | Salinity: &lt;1 ppt</div>
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{ fontSize: '0.85em', color: '#475569', marginBottom: '25px', lineHeight: '1.6' }}>
                                        <strong>Strongly influenced by surrounding land.</strong> High variability in flow and chemistry.
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #cffafe' }}>
                                            <div style={{ fontWeight: 'bold', color: '#0891b2', fontSize: '1em', marginBottom: '10px' }}>1. Lentic (Standing Water)</div>
                                            <div style={{ fontSize: '0.85em', color: '#475569', lineHeight: '1.6' }}>
                                                <strong>Lakes/Ponds:</strong> NPP (50-1,000). Zones: Littoral (shore), Limnetic (open), Benthic (bottom). Thermal stratification. <br />
                                                <strong>Wetlands:</strong> (NPP: ~2,000) Marshes/Swamps; critical for flood control & water purification. (50% lost historically).
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #cffafe' }}>
                                            <div style={{ fontWeight: 'bold', color: '#0891b2', fontSize: '1em', marginBottom: '10px' }}>2. Lotic (Flowing Water)</div>
                                            <div style={{ fontSize: '0.85em', color: '#475569', lineHeight: '1.6' }}>
                                                <strong>Rivers & Streams:</strong> NPP (500-2,000). Unidirectional flow; high dissolved oxygen. Changes from headwaters (source) to mouth (sediment, speed).
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                        <div style={{ fontWeight: 'bold', color: '#0891b2', fontSize: '0.9em', marginBottom: '10px' }}>Energy Flow & Human Impact:</div>
                                        <div style={{ fontSize: '0.85em', color: '#475569', lineHeight: '1.6' }}>
                                            Aquatic plants, Phytoplankton, Riparian inputs (leaves, insects). Detritus webs common. <br />
                                            <strong>⚠️ Human Impact:</strong> Damming, eutrophication (nutrient pollution), water extraction, invasive species.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CASE STUDIES */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', margin: '40px 0' }}>
                        <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '32px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5em', marginBottom: '15px' }}>🌴</div>
                            <h5 style={{ color: '#166534', margin: '0 0 10px 0', fontWeight: '900', fontSize: '1.2em' }}>Tropical Rainforest</h5>
                            <p style={{ fontSize: '0.85em', color: '#166534', fontWeight: 'bold', marginBottom: '10px' }}>Amazon Basin</p>
                            <p style={{ fontSize: '0.85em', color: '#374151', lineHeight: '1.6' }}>Highest terrestrial biodiversity and productivity, multi-layered canopy structure visible.</p>
                        </div>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '30px', borderRadius: '32px', border: '1px solid #bae6fd', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5em', marginBottom: '15px' }}>🪸</div>
                            <h5 style={{ color: '#0369a1', margin: '0 0 10px 0', fontWeight: '900', fontSize: '1.2em' }}>Coral Reef</h5>
                            <p style={{ fontSize: '0.85em', color: '#0369a1', fontWeight: 'bold', marginBottom: '10px' }}>Coral Reef Ecosystem</p>
                            <p style={{ fontSize: '0.85em', color: '#374151', lineHeight: '1.6' }}>Highest marine productivity (2,500 g/m²/year), incredible biodiversity in tropical waters.</p>
                        </div>
                        <div style={{ backgroundColor: '#fffbeb', padding: '30px', borderRadius: '32px', border: '1px solid #fde68a', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5em', marginBottom: '15px' }}>🦓</div>
                            <h5 style={{ color: '#92400e', margin: '0 0 10px 0', fontWeight: '900', fontSize: '1.2em' }}>Savanna</h5>
                            <p style={{ fontSize: '0.85em', color: '#92400e', fontWeight: 'bold', marginBottom: '10px' }}>African Savanna - Serengeti</p>
                            <p style={{ fontSize: '0.85em', color: '#374151', lineHeight: '1.6' }}>Tropical grassland with scattered trees, supporting large herds of grazing mammals.</p>
                        </div>
                    </div>
                </div>

                <Quiz
                    title="Module 1.7 Quiz: Energy Flow & Ecosystem Types"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={7}
                />

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div className="resources-section">
                    <h3>Learning Resources & Further Exploration</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Ecosystem Data</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.worldwildlife.org" target="_blank">WWF Biomes Guide</a></li>
                                <li><a href="https://www.ipcc.ch" target="_blank">IPCC Reports on Ecosystems</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Video Lessons</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.youtube.com/@crashcourse" target="_blank">Crash Course Ecology</a></li>
                                <li><a href="https://www.youtube.com/@bozemanbiology" target="_blank">Bozeman Science Biomes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module1_7;
