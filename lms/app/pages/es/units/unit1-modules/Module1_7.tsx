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

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px' }}>Figure 1: Energy Flow vs Nutrient Cycling</div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                            {/* Energy Flow */}
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#ef4444', marginBottom: '15px' }}>Energy Flow (Linear)</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                                    <div style={{ padding: '8px 15px', backgroundColor: '#fbbf24', borderRadius: '4px', fontSize: '0.7em' }}>☀️ Sun Input</div>
                                    <div style={{ width: '2px', height: '15px', backgroundColor: '#ef4444' }}>↓</div>
                                    <div style={{ padding: '8px 15px', backgroundColor: '#f0fdf4', border: '1px solid #16a34a', borderRadius: '4px', fontSize: '0.7em' }}>Producers</div>
                                    <div style={{ width: '2px', height: '15px', backgroundColor: '#ef4444' }}>↓</div>
                                    <div style={{ padding: '8px 15px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '4px', fontSize: '0.7em' }}>Consumers</div>
                                    <div style={{ width: '2px', height: '15px', backgroundColor: '#ef4444' }}>↓</div>
                                    <div style={{ padding: '8px 15px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px', fontSize: '0.7em' }}>Heat Loss 🔥</div>
                                </div>
                            </div>

                            {/* Nutrient Cycle */}
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#3b82f6', marginBottom: '15px' }}>Nutrient Cycle (Circular)</div>
                                <div style={{ width: '160px', height: '160px', border: '4px solid #3b82f6', borderRadius: '50%', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '0.8em', textAlign: 'center' }}>Matter Cycles<br />Continuously</div>
                                    <div style={{ position: 'absolute', top: '-12px' }}>🌿</div>
                                    <div style={{ position: 'absolute', right: '-12px' }}>🐄</div>
                                    <div style={{ position: 'absolute', bottom: '-12px' }}>🍄</div>
                                    <div style={{ position: 'absolute', left: '-12px' }}>🌍</div>
                                </div>
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
                                <td style={{ padding: '12px' }}><strong>Available to Consumers</strong></td>
                                <td style={{ padding: '12px' }}>~10%</td>
                                <td style={{ padding: '12px' }}>Becomes biomass in consumer bodies (growth, reproduction)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Lost to Respiration</strong></td>
                                <td style={{ padding: '12px' }}>~60-70%</td>
                                <td style={{ padding: '12px' }}>Metabolic heat production, maintaining body temperature (especially endotherms), movement, active transport, protein synthesis</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Lost in Waste</strong></td>
                                <td style={{ padding: '12px' }}>~10-20%</td>
                                <td style={{ padding: '12px' }}>Feces (undigested material), urine (nitrogenous waste), shed materials (hair, feathers, exoskeletons)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Not Consumed</strong></td>
                                <td style={{ padding: '12px' }}>~10-30%</td>
                                <td style={{ padding: '12px' }}>Roots, wood, bones, shells, indigestible parts not eaten; material that dies before being consumed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Productivity: Measuring Energy Flow</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#166534' }}>📊 Primary Productivity</h4>
                        <p style={{ fontSize: '0.9em' }}><strong>GPP (Gross Primary Productivity):</strong> Total rate of organic matter produced by photosynthesis.</p>
                        <p style={{ fontSize: '0.9em' }}><strong>NPP (Net Primary Productivity):</strong> Energy remaining after plants use some for respiration. <br /><strong>NPP = GPP - R</strong></p>
                    </div>
                    <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '12px', border: '1px solid #fecaca' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>📊 Secondary Productivity</h4>
                        <p style={{ fontSize: '0.9em' }}>Rate of biomass production by <strong>consumers</strong>. <br /><strong>Formula: Assimilated energy - Respiration</strong></p>
                        <p style={{ fontSize: '0.8em', color: '#444' }}>Always much lower than NPP due to inefficiencies.</p>
                    </div>
                </div>

                <h4>Global Primary Productivity Patterns</h4>
                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Ecosystem Type</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>NPP (g/m²/year)</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Total Global NPP (%)</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Limiting Factors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Tropical Rainforest</td>
                                <td>2,200</td>
                                <td>22%</td>
                                <td>Nutrients (rapid cycling)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Temperate Forest</td>
                                <td>1,250</td>
                                <td>9%</td>
                                <td>Growing season, temperature</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Savanna/Grassland</td>
                                <td>900</td>
                                <td>8%</td>
                                <td>Water, fire, grazing</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Desert/Scrubland</td>
                                <td>90</td>
                                <td>1%</td>
                                <td>Water (severe)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Open Ocean</td>
                                <td>125</td>
                                <td>25%</td>
                                <td>Nutrients (N, P, Fe)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fffbeb' }}>
                                <td><strong>Coral Reefs</strong></td>
                                <td><strong>2,500</strong></td>
                                <td>1%</td>
                                <td>Temperature, light, symbiosis</td>
                            </tr>
                        </tbody>
                    </table>
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

                <h3>🌍 Part 2: Types of Ecosystems - Classification and Characteristics</h3>
                <p>Ecosystems are classified based on climate, dominant vegetation, and productivity. Broadest division: <strong>TERRESTRIAL</strong> (land-based) and <strong>AQUATIC</strong> (water-based).</p>

                <h4>Terrestrial Ecosystems (Biomes)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    {/* Tropical Rainforest */}
                    <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#166534' }}>🌴 Tropical Rainforest</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Equatorial. Hot year-round, very high rainfall (2,000-10,000mm). Highest biodiversity. Multi-layered canopy. Nutrient-poor soils despite high NPP (~2,200 g/m²/yr).</p>
                    </div>
                    {/* Boreal Forest */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#334155' }}>🌲 Boreal Forest (Taiga)</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Northern Hemisphere. Long cold winters, short mild summers. Coniferous trees. Nutrient-poor acidic soils. Massive carbon storage in peat. NPP: ~800 g/m²/yr.</p>
                    </div>
                    {/* Grassland */}
                    <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#c2410c' }}>🌾 Grassland</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Prairies/Savannas. Moderate rainfall (250-900mm). Fertile soils. Fire-adapted vegetation. NPP: ~600-900 g/m²/yr. Global breadbaskets.</p>
                    </div>
                    {/* Desert */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '12px', border: '1px solid #fecaca' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>🏜️ Desert</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Very low rainfall (&lt;250mm). Extreme temperatures. Sparse vegetation, high specialization. Water is the primary limit. NPP: ~90 g/m²/yr.</p>
                    </div>
                    {/* Tundra */}
                    <div style={{ backgroundColor: '#f1f5f9', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#475569' }}>❄️ Tundra</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Arctic/Alpine. Treeless. <strong>Permafrost</strong>. Very short season. Extremely slow decomposition. NPP: ~140 g/m²/yr.</p>
                    </div>
                </div>

                <h4>Aquatic Ecosystems</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>🌊 Marine (Saltwater)</h4>
                        <ul style={{ fontSize: '0.85em', color: '#0c4a6e', paddingLeft: '20px', margin: 0 }}>
                            <li style={{ marginBottom: '5px' }}><strong>Open Ocean:</strong> 71% of Earth. Nutrient-limited but huge total NPP.</li>
                            <li style={{ marginBottom: '5px' }}><strong>Coral Reefs:</strong> Highest marine NPP (2,500). Shallow/clear waters.</li>
                            <li style={{ marginBottom: '5px' }}><strong>Estuaries:</strong> Nutrient-rich mixing zones. Critical nursery grounds.</li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', border: '1px solid #a5f3fc' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#0891b2' }}>💧 Freshwater</h4>
                        <ul style={{ fontSize: '0.85em', color: '#164e63', paddingLeft: '20px', margin: 0 }}>
                            <li style={{ marginBottom: '5px' }}><strong>Lentic:</strong> Standing water (Lakes, Ponds). Stratification occurs.</li>
                            <li style={{ marginBottom: '5px' }}><strong>Lotic:</strong> Flowing water (Rivers, Streams). High oxygen.</li>
                            <li><strong>Wetlands:</strong> Water-saturated soils. NPP: ~2,000 g/m²/yr.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fafafa', padding: '25px', borderRadius: '12px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>⚠️ Key Differences Recap:</h4>
                    <p style={{ fontSize: '0.9em', marginBottom: '10px' }}><strong>1. Energy Flow:</strong> Unidirectional and cannot be recycled (2nd Law Thermodynamics).</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '10px' }}><strong>2. Biomes:</strong> Determined by temperature and precipitation patterns.</p>
                    <p style={{ fontSize: '0.9em' }}><strong>3. Global Share:</strong> Open Ocean contributes 25% of global NPP despite low local density.</p>
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
