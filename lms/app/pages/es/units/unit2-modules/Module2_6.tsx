'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_6: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which process describes the increasing concentration of pesticides at higher levels of the food chain?",
            options: ["Eutrophication", "Bioaccumulation", "Biomagnification", "Bioremediation"],
            correctAnswer: 2,
            explanation: "Biomagnification is the increase in concentration of toxins at each successive trophic level. Bioaccumulation refers to buildup in a single organism."
        },
        {
            question: "What is the primary cause of waterlogging in irrigated arid regions?",
            options: [
                "Excessive rainfall throughout the year",
                "Over-irrigation and seepage from unlined canals without adequate drainage",
                "Planting water-intensive crops exclusively",
                "Volcanic activity raising the water table"
            ],
            correctAnswer: 1,
            explanation: "In arid regions, seepage from canals and over-irrigation raise the water table to the root zone, causing waterlogging."
        },
        {
            question: "Soil is classified as saline when its electrical conductivity (EC) exceeds:",
            options: ["1 dS/m", "2 dS/m", "4 dS/m", "8 dS/m"],
            correctAnswer: 2,
            explanation: "Electrical conductivity (EC) > 4 dS/m is the technical threshold for saline soil categorization."
        },
        {
            question: "The 'pesticide treadmill' refers to:",
            options: [
                "The mechanical device used to spray pesticides",
                "The cycle of pest resistance leading to increased pesticide use and stronger chemicals",
                "A method of organic pest control using predator insects",
                "Government regulation limiting pesticide sales"
            ],
            correctAnswer: 1,
            explanation: "As pests develop resistance, farmers must use more frequent or more toxic applications, creating a continuous cycle of chemical dependency."
        },
        {
            question: "Which greenhouse gas is directly emitted from nitrogen fertilizer application and is ~265× more potent than CO₂?",
            options: ["Methane (CH₄)", "Nitrous oxide (N₂O)", "Sulfur dioxide (SO₂)", "Carbon monoxide (CO)"],
            correctAnswer: 1,
            explanation: "Nitrous oxide (N₂O) is a major agricultural byproduct of nitrogen fertilization and a potent greenhouse gas."
        }
    ];

    return (
        <div className="module-content">
            {/* LESSON HEADER */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.6</div>
                <div className="lesson-title-main">
                    <h1>🌾 Effects of Modern Agriculture: Fertilizer-Pesticide Problems, Waterlogging & Salinity</h1>
                </div>
            </div>

            <section className="content-section">
                {/* METADATA BAR */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', margin: '30px 0', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>⏱️</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Estimated Time</span>
                        <span style={{ fontWeight: '600' }}>75–90 minutes</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>📊</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Difficulty</span>
                        <span style={{ fontWeight: '600' }}>Intermediate</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>🎯</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Prerequisites</span>
                        <span style={{ fontWeight: '600' }}>Basic Ecology, Water Cycle</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>✅</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Pass Score</span>
                        <span style={{ fontWeight: '600' }}>70% or higher</span>
                    </div>
                </div>

                {/* OBJECTIVES */}
                <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '16px', border: '1px solid #dcfce7', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#166534', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>🎯</span> What You'll Master: Learning Objectives
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '1em', lineHeight: '1.6' }}>
                        <li style={{ marginBottom: '12px' }}>Describe at least four negative environmental effects of modern intensive agriculture on soil, water, and biodiversity.</li>
                        <li style={{ marginBottom: '12px' }}>Explain how chemical fertilizers and pesticides enter ecosystems and identify three specific problems they cause (e.g., eutrophication, bioaccumulation, soil degradation).</li>
                        <li style={{ marginBottom: '12px' }}>Define waterlogging and soil salinity, diagram their causes and mechanisms, and predict their impact on crop yield.</li>
                        <li style={{ marginBottom: '12px' }}>Compare organic farming, integrated pest management (IPM), and conventional agriculture as strategies to mitigate agricultural pollution.</li>
                        <li>Evaluate real-world case studies (e.g., Punjab groundwater crisis, Aral Sea, Gulf of Mexico dead zone) and propose sustainable remediation measures.</li>
                    </ul>
                </div>

                {/* WHY IT MATTERS */}
                <h2 style={{ color: '#0f172a', borderLeft: '4px solid #f59e0b', paddingLeft: '15px' }}>🔥 Why This Topic Matters</h2>
                <div style={{ fontSize: '1.1em', lineHeight: '1.7', color: '#334155' }}>
                    <p>Imagine pouring salt into a potted plant every day — at first, the plant seems fine, but over weeks it wilts and dies. That is essentially what modern agriculture does to millions of hectares of farmland worldwide through excessive fertilizers, pesticides, and poor irrigation management. The Green Revolution of the 1960s dramatically boosted food production but left behind a legacy of degraded soils, polluted waterways, and collapsing ecosystems.</p>
                    <p>This topic is central to environmental science because agriculture is the single largest human use of land and freshwater. Understanding these problems is essential for anyone studying sustainability, environmental policy, land management, or rural development. For exam purposes, questions on fertilizer-pesticide issues, waterlogging, and salinity appear frequently in university papers and competitive examinations like UPSC, NET, and GATE.</p>
                </div>

                <div style={{ backgroundColor: '#eff6ff', padding: '25px', borderRadius: '16px', border: '1px solid #dbeafe', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>💡</span> Real-World Applications:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#1d4ed8', fontSize: '1em' }}>
                        <li style={{ marginBottom: '10px' }}>Understanding the Gulf of Mexico "dead zone" caused by fertilizer runoff from the Mississippi River basin</li>
                        <li style={{ marginBottom: '10px' }}>Addressing the soil salinity crisis in the Indus Basin (Pakistan/India) affecting 6+ million hectares</li>
                        <li>Designing sustainable irrigation systems that prevent waterlogging in arid regions</li>
                    </ul>
                </div>

                {/* DEEP DIVE */}
                <div style={{ margin: '60px 0' }}>
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>📖</span> Deep Dive: Understanding the Concepts
                    </h2>

                    <h3>What Is Modern Agriculture?</h3>
                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                        <p>Modern agriculture (also called industrial or intensive agriculture) refers to farming systems that rely heavily on synthetic chemical inputs — fertilizers, pesticides, and herbicides — along with mechanization, monoculture cropping, and extensive irrigation to maximize crop yields per unit area. While this model feeds roughly half the world's population, it comes at an enormous environmental cost: degraded soils, contaminated water, loss of biodiversity, and greenhouse gas emissions accounting for roughly 10–12% of global totals.</p>
                        <p>The fundamental problem is one of externalities — the environmental costs of intensive farming are not borne by the farmer or the consumer but are passed on to ecosystems and future generations. A field that produces record wheat harvests today may become barren, salt-encrusted wasteland within decades if unsustainable practices continue.</p>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ margin: '0 0 20px 0', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>📌</span> Key Terminology:
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            {[
                                { t: "Eutrophication", d: "Excessive nutrient enrichment of water bodies causing algal blooms and oxygen depletion." },
                                { t: "Bioaccumulation", d: "Progressive buildup of pesticides in organisms' tissues over time." },
                                { t: "Biomagnification", d: "Increasing concentration of toxins at each level of the food chain." },
                                { t: "Waterlogging", d: "Saturation of soil with water, displacing air from pore spaces and suffocating roots." },
                                { t: "Salinity/Salinization", d: "Accumulation of soluble salts (NaCl, Na₂SO₄, Na₂CO₃) in soil to levels toxic to plants." },
                                { t: "Integrated Pest Management (IPM)", d: "An ecologically-based strategy combining biological, cultural, and chemical controls." }
                            ].map((term, i) => (
                                <div key={i} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                                    <strong style={{ color: '#0369a1', display: 'block', marginBottom: '5px' }}>{term.t}</strong>
                                    <p style={{ fontSize: '0.9em', margin: 0, color: '#64748b' }}>{term.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* OVERVIEW DIAGRAM */}
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#059669', marginBottom: '25px' }}>Figure 1: Major Problems of Modern Agriculture</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', maxWidth: '900px', margin: '0 auto' }}>
                            <div style={{ padding: '15px', backgroundColor: '#059669', color: '#fff', borderRadius: '12px', gridColumn: 'span 3', fontWeight: 'bold' }}>🌾 Modern Agriculture</div>

                            <div style={{ padding: '15px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '8px', fontSize: '0.85em' }}>Chemical Fertilizers</div>
                            <div style={{ padding: '15px', backgroundColor: '#8b5cf6', color: '#fff', borderRadius: '8px', fontSize: '0.85em' }}>Synthetic Pesticides</div>
                            <div style={{ padding: '15px', backgroundColor: '#f59e0b', color: '#fff', borderRadius: '8px', fontSize: '0.85em' }}>Excessive Irrigation</div>

                            <div style={{ fontSize: '0.75em', padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>• Eutrophication<br />• Soil Degradation<br />• Groundwater Contamination</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>• Bioaccumulation<br />• Loss of Pollinators<br />• Human Health Risks</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>• Waterlogging<br />• Soil Salinity<br />• Crop Yield Loss</div>

                            <div style={{ backgroundColor: '#ef4444', color: '#fff', padding: '10px', borderRadius: '6px', gridColumn: 'span 3', textAlign: 'center', fontSize: '0.9em', fontWeight: 'bold' }}>Aquatic Dead Zones • Degraded Farmland • Ecosystem Collapse</div>
                        </div>
                    </div>

                    <h3>🧪 Fertilizer Problems</h3>
                    <p>Chemical fertilizers contain nitrogen (N), phosphorus (P), and potassium (K). While they boost growth, crops typically absorb only 30–50% of applied nitrogen; the rest enters the environment through runoff, leaching, and volatilization.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                            <h4 style={{ color: '#0369a1', marginTop: 0 }}>1. Water Pollution (Eutrophication)</h4>
                            <p style={{ fontSize: '0.9em' }}>Excess N and P trigger explosive algal blooms. When algae die, bacteria consume dissolved oxygen, creating <strong>hypoxic "dead zones"</strong>. The Gulf of Mexico dead zone covers up to 22,000 km².</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fdf2f8', borderRadius: '12px', border: '1px solid #fbcfe8' }}>
                            <h4 style={{ color: '#9d174d', marginTop: 0 }}>2. Groundwater Contamination</h4>
                            <p style={{ fontSize: '0.9em' }}>Nitrates leaching into aquifers cause <strong>methemoglobinemia (blue baby syndrome)</strong> by reducing oxygen in blood. WHO limit is 50 mg/L.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                            <h4 style={{ color: '#166534', marginTop: 0 }}>3. Soil Degradation</h4>
                            <p style={{ fontSize: '0.9em' }}>Long-term use acidifies soil, reduces microbial diversity, and leads to heavy metal accumulation (cadmium, lead) present as impurities.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fff7ed', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                            <h4 style={{ color: '#9a3412', marginTop: 0 }}>4. Greenhouse Gas Emissions</h4>
                            <p style={{ fontSize: '0.9em' }}>Nitrogen fertilizers emit <strong>Nitrous oxide (N₂O)</strong>, which is ~265x more potent than CO₂. Agriculture accounts for 60% of global N₂O.</p>
                        </div>
                    </div>

                    {/* POLLUTION PATHWAYS */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ marginBottom: '25px' }}>Figure 2: Fertilizer Pollution Pathways</h4>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ padding: '15px', border: '2px solid #3b82f6', borderRadius: '10px', width: '200px' }}>
                                <strong>ATMOSPHERE</strong><br /><span style={{ fontSize: '0.85em' }}>N₂O ↑ (GHG)<br />NH₃ volatilization</span>
                            </div>
                            <div style={{ padding: '15px', border: '2px solid #10b981', borderRadius: '10px', width: '200px', backgroundColor: '#ecfdf5' }}>
                                <strong>SOIL LAYER</strong><br /><span style={{ fontSize: '0.85em' }}>NPK Application<br />Leaching ↓</span>
                            </div>
                            <div style={{ padding: '15px', border: '2px solid #ef4444', borderRadius: '10px', width: '200px' }}>
                                <strong>SURFACE WATER</strong><br /><span style={{ fontSize: '0.85em' }}>Runoff → Algal Bloom<br />→ Dead Zones</span>
                            </div>
                        </div>
                    </div>

                    <h3>🐛 Pesticide Problems</h3>
                    <p>Over 3 million tonnes of pesticides (insecticides, herbicides, fungicides) are applied annually. Their environmental and health impacts are severe due to persistence and toxicity.</p>

                    <ul>
                        <li><strong>Bioaccumulation & Biomagnification:</strong> Fat-soluble toxins (like DDT) build up in tissues and concentrate as they move up the chain. DDT caused eggshell thinning in bald eagles.</li>
                        <li><strong>Loss of Non-Target Species:</strong> Neonicotinoids are a leading cause of pollinator (bee) decline, vital for 75% of global crops.</li>
                        <li><strong>Human Health Effects:</strong> Risks of neurological damage, cancer, and endocrine disruption. WHO estimates 200,000 deaths annually from pesticide poisoning.</li>
                        <li><strong>The Pesticide Treadmill:</strong> Resistant pest populations force higher doses or more toxic chemicals, creating a vicious cycle of dependency.</li>
                    </ul>

                    {/* BIOMAGNIFICATION FIGURE */}
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#7c3aed', marginBottom: '25px' }}>Figure 3: Biomagnification in a Food Chain</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
                            <div style={{ padding: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Top Predators:</strong> 25 ppm DDT</div>
                            <div style={{ padding: '10px', backgroundColor: '#ede9fe', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Large Fish:</strong> 2.0 ppm DDT</div>
                            <div style={{ padding: '10px', backgroundColor: '#ddd6fe', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Small Fish:</strong> 0.5 ppm DDT</div>
                            <div style={{ padding: '10px', backgroundColor: '#c4b5fd', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Phytoplankton:</strong> 0.04 ppm DDT</div>
                            <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#7c3aed' }}>↑ Concentration increases up the chain ↑</div>
                        </div>
                    </div>

                    <h3>💧 Waterlogging</h3>
                    <p>Waterlogging occurs when the water table rises to the root zone, displacing air and suffocating plant roots. It creates anaerobic conditions that produce toxic compounds like hydrogen sulfide.</p>

                    <div style={{ backgroundColor: '#f0fdfa', padding: '25px', borderRadius: '16px', border: '1px solid #ccfbf1', margin: '30px 0' }}>
                        <strong>Causes:</strong> Over-irrigation, seepage from unlined canals (which lose 25–40%), heavy monsoons, and impermeable subsoil.
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0', fontSize: '0.9em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#0d9488', color: '#fff' }}>
                                <th style={{ padding: '10px' }}>Crop</th>
                                <th style={{ padding: '10px' }}>Critical Depth</th>
                                <th style={{ padding: '10px' }}>Yield Loss if Waterlogged</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px' }}>Wheat</td><td style={{ padding: '10px' }}>0.9 – 1.2 m</td><td style={{ padding: '10px' }}>40 – 60%</td></tr>
                            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px' }}>Cotton</td><td style={{ padding: '10px' }}>1.5 – 1.8 m</td><td style={{ padding: '10px' }}>50 – 70%</td></tr>
                            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px' }}>Maize</td><td style={{ padding: '10px' }}>1.0 – 1.5 m</td><td style={{ padding: '10px' }}>50 – 80%</td></tr>
                        </tbody>
                    </table>

                    <h3>🧂 Soil Salinity</h3>
                    <p>Accumulation of soluble salts (NaCl, Na₂SO₄) in the root zone. Technical classification is <strong>EC &gt; 4 dS/m</strong>. Visible as a white crystalline crust on the surface.</p>

                    <p><strong>Mechanism:</strong> Irrigation water carries salts. Evaporation/transpiration leaves them behind. Poor drainage prevents flushing, leading to <strong>"physiological drought"</strong> where plants cannot extract water despite moist soil.</p>
                    <p><strong>Scale:</strong> 830 million hectares globally; about 20% of all irrigated land. Severely affects India, Pakistan, and Egypt.</p>

                    {/* Vicious Cycle Diagram */}
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#ea580c', marginBottom: '25px' }}>Figure 4: The Waterlogging–Salinity Cycle</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
                            {["Over-Irrigation", "Rising Water Table", "Waterlogging", "Capillary Rise", "Soil Salinity", "Yield Loss"].map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div style={{ padding: '15px', backgroundColor: idx === 0 ? '#3b82f6' : idx === 4 ? '#ea580c' : '#94a3b8', color: '#fff', borderRadius: '12px', fontSize: '0.8em', fontWeight: 'bold' }}>{step}</div>
                                    {idx < 5 && <span style={{ color: '#cbd5e1' }}>→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* MISCONCEPTIONS */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '35px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '60px 0' }}>
                        <h3 style={{ margin: '0 0 30px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Misconceptions
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { m: '"More fertilizer always means better crop yield."', r: "Crops have a limit. Beyond that, the law of diminishing returns applies, and extra fertilizer just pollutes." },
                                { m: '"Pesticides only affect the targeted pest."', r: "Broad-spectrum pesticides kill pollinators, soil organisms, and predators. Often &lt;0.1% reaches the target." },
                                { m: '"Waterlogging only happens in rainy areas."', r: "Arid irrigated regions (Indus/Nile) suffer most due to seepage and over-watering without drainage." },
                                { m: '"Saline soil just needs more water to wash salts."', r: "Without drainage, more water worsens waterlogging and salinity. You need water AND subsurface drainage." }
                            ].map((item, idx) => (
                                <div key={idx} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                    <p style={{ fontWeight: 'bold', color: '#e11d48', margin: '0 0 10px 0' }}>Misconception #{idx + 1}</p>
                                    <p style={{ fontStyle: 'italic', color: '#475569', margin: '0 0 12px 0' }}>{item.m}</p>
                                    <p style={{ fontSize: '0.95em', color: '#059669', margin: 0 }}><strong>Reality:</strong> {item.r}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VIDEOS */}
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🎥</span> Learn Through Videos
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', margin: '30px 0' }}>
                        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 10px 0' }}>📚 Do we need pesticides? (TED-Ed)</h4>
                            <p style={{ fontSize: '0.85em', color: '#4b5563' }}>Excellent animated explainer on pesticide effects, biomagnification, and alternatives.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 10px 0' }}>🌊 Eutrophication Explained</h4>
                            <p style={{ fontSize: '0.85em', color: '#4b5563' }}>Visual explanation of how fertilizer runoff causes algal blooms and dead zones.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 10px 0' }}>🧂 Soil Salinity & Waterlogging</h4>
                            <p style={{ fontSize: '0.85em', color: '#4b5563' }}>Covers mechanisms, salt accumulation, and management strategies in agricultural lands.</p>
                        </div>
                    </div>

                    {/* CASE STUDIES */}
                    <h2 style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>⚙️</span> Case Studies & Worked Examples
                    </h2>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#ef4444' }}>Case Study 1: The Gulf of Mexico Dead Zone</h3>
                        <p><strong>📝 Background:</strong> Runoff from 31 states in the Mississippi basin carries 1.5M tonnes of N to the Gulf annually.</p>
                        <h4 style={{ color: '#b91c1c' }}>🔍 Analysis:</h4>
                        <p style={{ fontSize: '0.9em' }}>Nutrients (N, P) → Algal Blooms → Bacteria consume Oxygen → Dead Zone (22,000 km²). Devastates fisheries worth billions.</p>
                        <p><strong>✅ Key Lesson:</strong> Distant downstream consequences. Upstream farm choices affect coastal ecosystems 1,600 km away.</p>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#3b82f6' }}>Case Study 2: Waterlogging & Salinity in Punjab</h3>
                        <p><strong>📝 Background:</strong> Massive irrigation without drainage. Water tables rose from 30m to &lt;2m.</p>
                        <h4 style={{ color: '#1e40af' }}>🔍 Analysis:</h4>
                        <p style={{ fontSize: '0.9em' }}>Unlined canals (25-40% seepage) + Flat terrain → Rising Water Table → Salinity via capillary rise → White crusts → 40-80% yield loss.</p>
                        <p><strong>✅ Remediation:</strong> Subsurface tile drainage, canal lining, gypsum application, and salt-tolerant crops.</p>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#10b981' }}>Case Study 3: DDT & The Peregrine Falcon</h3>
                        <p><strong>📝 Background:</strong> DDT used widely (1940s-70s). Rachel Carson's <em>Silent Spring</em> documented its biomagnification.</p>
                        <h4 style={{ color: '#047857' }}>🔍 Analysis:</h4>
                        <p style={{ fontSize: '0.9em' }}>DDT sprayed → Waterways → Fish → Birds of Prey (25 ppm) → Eggshell thinning → Population collapse.</p>
                        <p><strong>✅ Outcome:</strong> DDT banned in 1972; falcon populations recovered. Proof that regulation works.</p>
                    </div>

                    {/* COMPARISON TABLE */}
                    <div style={{ margin: '60px 0' }}>
                        <h2 style={{ color: '#0369a1' }}>📊 Comparison & Analysis</h2>
                        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f1f5f9' }}>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Aspect</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Conventional</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Organic Farming</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>IPM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Inputs</td>
                                        <td style={{ padding: '15px' }}>Synthetic chemicals</td>
                                        <td style={{ padding: '15px' }}>Compost, biopesticides</td>
                                        <td style={{ padding: '15px' }}>Combination (minimal chem)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Soil Health</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Degrades</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Improves</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Moderate improvement</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Sustainability</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Unsustainable</td>
                                        <td style={{ padding: '15px' }}>✓ Highly sustainable</td>
                                        <td style={{ padding: '15px' }}>✓ Sustainable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
                            Modern Agriculture Effects: Fertilizers, Pesticides & Sustainability
                        </h4>
                    </div>
                    <div style={{ maxWidth: '640px', margin: '0 auto 30px auto' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/WOH2A17kyIo?si=mu_xdIxWynDrpoED"
                                title="Modern Agriculture Effects Part 2"
                                allowFullScreen
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                    </div>

                    {/* PRACTICE SECTION */}
                    <div style={{ padding: '50px 0' }}>
                        <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5em' }}>🎯</span> Interactive Practice
                        </h2>

                        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                            <Quiz
                                title="Module 2.6 Mastery Quiz"
                                questions={quizQuestions}
                                subject="ES"
                                unitId={2}
                                moduleId={6}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📘 Easy: Short Answer</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Question:</strong> List four environmental effects of excessive chemical fertilizer use.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <ol style={{ fontSize: '0.85em' }}>
                                        <li>Eutrophication (N/P → Water)</li>
                                        <li>Blue Baby Syndrome (Nitrates → Ground water)</li>
                                        <li>Soil Acidification (Ammonium → Soil)</li>
                                        <li>N₂O Emission (Nitrogen → Atmosphere)</li>
                                    </ol>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📙 Medium: Analytical</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Question:</strong> Relationship between waterlogging and salinity.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ fontSize: '0.85em' }}>Waterlogging raises the water table. In arid regions, this brings dissolved salts to the surface via capillary action. Evaporation leaves salt behind, coating the soil.</p>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📕 Hard: Evaluation</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Question:</strong> "Green Revolution saved millions but sowed seeds of catastrophe." Evaluate.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ fontSize: '0.85em' }}>Pros: Food security, yield boom. Cons: Degraded soil in Punjab, toxic groundwater (nitrates), and 6M+ ha salt-affected land. Short-term success vs long-term ruin.</p>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* HANDS-ON ACTIVITY */}
                    <div style={{ backgroundColor: '#f0f9ff', padding: '40px', borderRadius: '24px', border: '1px solid #bae6fd', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 20px 0', color: '#0369a1' }}>🛠️ Hands-On Activity: Investigating Runoff</h3>
                        <p style={{ fontSize: '0.95em' }}><strong>Objective:</strong> Simulate eutrophication with fertilizer and water samples. Observe algal growth over 7–10 days in control vs treated jars.</p>
                        <p style={{ fontSize: '0.85em', color: '#475569' }}>Outcome: High fertilizer → green water, algae, foul smell (anaerobic decomposition). Mirrors real-world dead zones.</p>
                    </div>

                    {/* PITFALLS */}
                    <div style={{ backgroundColor: '#fff7ed', padding: '40px', borderRadius: '24px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#9a3412', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Pitfalls & Exam Tips
                        </h3>
                        <ul>
                            <li><strong>Bioaccumulation vs Biomagnification:</strong> Accumulation is in ONE organism; Magnification is ACROSS chain.</li>
                            <li><strong>Waterlogging vs Salinity:</strong> Physical problem (excess water) vs Chemical problem (excess salt).</li>
                            <li><strong>Fertilizers aren't "evil":</strong> They are vital for food. The problem is EXCESS and IMPROPER use.</li>
                        </ul>
                    </div>

                    {/* CHEAT SHEET */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '20px', border: '2px dashed #94a3b8', margin: '60px 0' }}>
                        <h3 style={{ marginTop: 0 }}>📄 Quick Reference Cheat Sheet</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>📐 Thresholds</h4>
                                <ul style={{ fontSize: '0.8em' }}>
                                    <li>Saline: EC &gt; 4 dS/m</li>
                                    <li>Sodic: ESP &gt; 15</li>
                                    <li>Nitrate: 50 mg/L limit</li>
                                    <li>Hypoxia: DO &lt; 2 mg/L</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>🌍 Case Studies</h4>
                                <ul style={{ fontSize: '0.8em' }}>
                                    <li>Gulf: Fert → Dead zone</li>
                                    <li>Punjab: Waterlogging</li>
                                    <li>Aral Sea: Irrigation failure</li>
                                    <li>DDT: Biomagnification</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>✅ Solutions</h4>
                                <ul style={{ fontSize: '0.8em' }}>
                                    <li>Precision Fertilization</li>
                                    <li>IPM (Integrated Pest Mgmt)</li>
                                    <li>Subsurface Drainage</li>
                                    <li>Drip Irrigation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* UNIVERSITY EXAM PRACTICE */}
                    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '24px', color: '#f8fafc', margin: '60px 0' }}>
                        <h2 style={{ color: '#fff', marginTop: 0 }}>📝 University Exam Practice</h2>
                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ fontWeight: 'bold' }}>Question 1: Short Answer (5 marks)</p>
                            <p>Explain how fertilizers lead to eutrophication and aquatic dead zones.</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Marking Scheme</summary>
                                <p style={{ padding: '10px' }}>1. Runoff (1m) 2. Algal Bloom (1m) 3. Decomposition (1m) 4. Oxygen Depletion (1m) 5. Hypoxia/Dead Zone (1m).</p>
                            </details>
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ fontWeight: 'bold' }}>Question 2: Long Answer (15 marks)</p>
                            <p>Discuss causes, effects, and remediation of waterlogging and salinity.</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Model Outline</summary>
                                <p style={{ padding: '10px' }}>Define terms (3m), Seepage/Over-irrigation causes (4m), Physiological drought/oxygen lack effects (4m), Drainage/Gypsum/Salt-tolerant solutions (4m).</p>
                            </details>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Question 3: Diagram-Based (10 marks)</p>
                            <p>Draw a labelled diagram of biomagnification in an aquatic food chain.</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Model Answer</summary>
                                <p style={{ padding: '10px' }}>Pyramid showing Water (low) -&gt; Plankton -&gt; Fish -&gt; Bird (high). Use values like 0.04 -&gt; 25 ppm.</p>
                            </details>
                        </div>
                    </div>

                    {/* ADDITIONAL RESOURCES */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h3 style={{ marginTop: 0 }}>🚀 Go Deeper: Resources</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ fontSize: '0.85em' }}>
                                <strong>Books:</strong><br />
                                • Environmental Studies: R. Rajagopalan<br />
                                • Silent Spring: Rachel Carson
                            </div>
                            <div style={{ fontSize: '0.85em' }}>
                                <strong>Online:</strong><br />
                                • FAO Soil Salinity Portal<br />
                                • US EPA Nonpoint Source
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_6;
