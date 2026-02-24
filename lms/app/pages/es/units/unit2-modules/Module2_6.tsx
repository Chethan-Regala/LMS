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
                        <span>🎯</span> What You&apos;ll Master: Learning Objectives
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
                        <h4 style={{ color: '#059669', marginBottom: '25px' }}>Figure 1: Major environmental problems arising from modern agricultural practices</h4>
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
                    <p>Chemical fertilizers contain nitrogen (N), phosphorus (P), and potassium (K) — the three macronutrients essential for plant growth. The global application rate is staggering: approximately 12 million tonnes of nitrogen and 4 million tonnes of phosphorus are applied annually to cropland in the United States alone. However, crops typically absorb only 30–50% of applied nitrogen; the rest enters the environment through runoff, leaching, and volatilization.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                            <h4 style={{ color: '#0369a1', marginTop: 0 }}>1. Water Pollution & Eutrophication</h4>
                            <p style={{ fontSize: '0.9em' }}>When excess nitrogen and phosphorus wash off agricultural fields into rivers, lakes, and coastal waters, they stimulate explosive growth of algae — a process called eutrophication. These algal blooms block sunlight, and when the algae die and decompose, bacteria consume dissolved oxygen, creating <strong>hypoxic "dead zones"</strong> where fish and other aquatic organisms cannot survive. The Gulf of Mexico dead zone, fed by nutrient runoff from the Mississippi River basin, covers up to 22,000 km² in peak years.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fdf2f8', borderRadius: '12px', border: '1px solid #fbcfe8' }}>
                            <h4 style={{ color: '#9d174d', marginTop: 0 }}>2. Groundwater Contamination</h4>
                            <p style={{ fontSize: '0.9em' }}>Nitrates leaching through soil enter aquifers that supply drinking water. The WHO limit for nitrate in drinking water is 50 mg/L; concentrations above this cause <strong>methemoglobinemia (blue baby syndrome)</strong> in infants by reducing the oxygen-carrying capacity of blood. Agricultural regions in Punjab (India), the Corn Belt (USA), and the North China Plain report dangerously elevated nitrate levels.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                            <h4 style={{ color: '#166534', marginTop: 0 }}>3. Soil Degradation</h4>
                            <p style={{ fontSize: '0.9em' }}>Long-term use of ammonium-based fertilizers acidifies soil, reducing microbial diversity and the soil's ability to recycle nutrients naturally. Repeated fertilization also leads to heavy metal accumulation (cadmium, lead, mercury present as impurities) and salt buildup, progressively rendering the soil less productive.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fff7ed', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                            <h4 style={{ color: '#9a3412', marginTop: 0 }}>4. Greenhouse Gas Emissions</h4>
                            <p style={{ fontSize: '0.9em' }}>Nitrogen fertilizers contribute to climate change through the emission of <strong>Nitrous oxide (N₂O)</strong>, which is ~265x more potent than CO₂ over a 100-year period. Agriculture accounts for about 60% of global N₂O emissions.</p>
                        </div>
                    </div>

                    {/* POLLUTION PATHWAYS */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#1e293b', marginBottom: '25px' }}>Figure 2: Pathways through which fertilizer pollutants enter the atmosphere, surface water, and groundwater</h4>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ padding: '15px', border: '2px solid #3b82f6', borderRadius: '10px', width: '220px', backgroundColor: '#fff' }}>
                                <strong style={{ color: '#1e40af' }}>ATMOSPHERE</strong><br />
                                <span style={{ fontSize: '0.85em', color: '#475569' }}>N₂O ↑ (GHG)<br />NH₃ volatilization</span>
                            </div>
                            <div style={{ padding: '15px', border: '2px solid #10b981', borderRadius: '10px', width: '220px', backgroundColor: '#ecfdf5' }}>
                                <strong style={{ color: '#065f46' }}>SOIL LAYER</strong><br />
                                <span style={{ fontSize: '0.85em', color: '#475569' }}>NPK Application<br />Leaching ↓</span>
                            </div>
                            <div style={{ padding: '15px', border: '2px solid #ef4444', borderRadius: '10px', width: '220px', backgroundColor: '#fff' }}>
                                <strong style={{ color: '#991b1b' }}>SURFACE WATER</strong><br />
                                <span style={{ fontSize: '0.85em', color: '#475569' }}>Runoff → Algal Bloom<br />→ Dead Zones</span>
                            </div>
                            <div style={{ padding: '15px', border: '2px solid #f59e0b', borderRadius: '10px', width: '220px', backgroundColor: '#fff' }}>
                                <strong style={{ color: '#92400e' }}>GROUNDWATER</strong><br />
                                <span style={{ fontSize: '0.85em', color: '#475569' }}>Nitrate in Aquifer<br />(Blue Baby Syndrome)</span>
                            </div>
                        </div>
                    </div>

                    <h3>🐛 Pesticide Problems</h3>
                    <p>Pesticides are chemicals used to kill organisms harmful to crops — including insecticides, herbicides, fungicides, and rodenticides. Globally, over 3 million tonnes of pesticides are applied annually. While they protect crops and boost yields, their environmental and health impacts are severe.</p>

                    <ul style={{ lineHeight: '1.7', color: '#334155' }}>
                        <li style={{ marginBottom: '15px' }}><strong>Bioaccumulation & Biomagnification:</strong> Many pesticides — especially organochlorines like DDT — are fat-soluble and persistent. They accumulate in the fatty tissues of organisms (bioaccumulation) and become increasingly concentrated as they move up the food chain (biomagnification). A classic example: DDT concentrations increased from 0.04 ppm in lake water to 25 ppm in fish-eating birds, a 600-fold magnification that caused eggshell thinning and population crashes in species like the bald eagle and peregrine falcon.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Loss of Non-Target Species:</strong> Pesticides often kill beneficial organisms alongside pests. Neonicotinoid insecticides are a leading cause of pollinator decline, threatening bee populations essential for pollinating 75% of global food crops. Herbicides eliminate wild flowering plants that support insect diversity.</li>
                        <li style={{ marginBottom: '15px' }}><strong>Human Health Effects:</strong> Farmworkers and consumers face risks including neurological damage, endocrine disruption, cancer, and reproductive disorders. Organophosphates inhibit acetylcholinesterase, causing nerve dysfunction. The WHO estimates that pesticide poisoning causes over 200,000 deaths annually worldwide.</li>
                        <li><strong>Resistance & Pesticide Treadmill:</strong> Continuous use of the same pesticide class leads to resistant pest populations, forcing farmers to apply higher doses or switch to more toxic alternatives — a vicious cycle called the pesticide treadmill.</li>
                    </ul>

                    {/* BIOMAGNIFICATION FIGURE */}
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#7c3aed', marginBottom: '25px' }}>Figure 3: Biomagnification — pesticide concentration increases at each trophic level</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
                            <div style={{ padding: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Top Predators (Birds of Prey):</strong> 25 ppm DDT</div>
                            <div style={{ padding: '10px', backgroundColor: '#ede9fe', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Secondary Consumers (Large Fish):</strong> 2.0 ppm DDT</div>
                            <div style={{ padding: '10px', backgroundColor: '#ddd6fe', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Primary Consumers (Small Fish):</strong> 0.5 ppm DDT</div>
                            <div style={{ padding: '10px', backgroundColor: '#c4b5fd', border: '1px solid #ddd', borderRadius: '6px' }}><strong>Producers (Phytoplankton):</strong> 0.04 ppm DDT</div>
                            <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#7c3aed' }}>↑ Concentration increases up the food chain ↑</div>
                        </div>
                    </div>

                    <h3>💧 Waterlogging</h3>
                    <p>Waterlogging occurs when the soil becomes saturated with water, filling all pore spaces and displacing the air that plant roots need for respiration. It is defined technically as the condition where the water table rises to within the root zone (typically the upper 1–2 metres of soil), depriving roots of oxygen and creating anaerobic conditions.</p>

                    <div style={{ backgroundColor: '#f0fdfa', padding: '25px', borderRadius: '16px', border: '1px solid #ccfbf1', margin: '30px 0' }}>
                        <p style={{ margin: 0 }}><strong>Causes:</strong> The primary causes include over-irrigation without adequate drainage, seepage from unlined canals (which can lose 25–40% of their water), heavy monsoon rainfall, impermeable subsoil layers, and flat terrain that impedes natural drainage. In the Indus Basin irrigation system, for example, seepage from thousands of kilometres of unlined canals has raised water tables dramatically.</p>
                    </div>

                    <div style={{ margin: '20px 0', fontSize: '1em', lineHeight: '1.7', color: '#334155' }}>
                        <p><strong>Effects on Crops & Soil:</strong> Oxygen deprivation causes root suffocation, inhibiting nutrient uptake (especially nitrogen and phosphorus). Anaerobic decomposition produces toxic compounds — hydrogen sulfide, methane, and reduced iron/manganese compounds. Crop yields can decline 20–80% depending on severity and duration. Soil structure degrades as waterlogged clay soils become compacted and difficult to cultivate. Furthermore, waterlogging almost always triggers secondary salinization because poor drainage prevents the flushing of salts.</p>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '30px 0', fontSize: '0.9em', border: '1px solid #e2e8f0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#0d9488', color: '#fff' }}>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0d9488' }}>Crop</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0d9488' }}>Critical Water Table Depth</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0d9488' }}>Yield Loss if Waterlogged</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Wheat</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>0.9 – 1.2 m</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>40 – 60%</td></tr>
                            <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Cotton</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>1.5 – 1.8 m</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>50 – 70%</td></tr>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Rice (tolerant)</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>0.6 m</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Minimal if managed</td></tr>
                            <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Sugarcane</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>0.9 m</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>30 – 50%</td></tr>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>Maize</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>1.0 – 1.5 m</td><td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>50 – 80%</td></tr>
                        </tbody>
                    </table>

                    <h3>🧂 Soil Salinity</h3>
                    <p>Soil salinity is the accumulation of soluble salts — primarily sodium chloride (NaCl), sodium sulfate (Na₂SO₄), and sodium carbonate (Na₂CO₃) — in the root zone to concentrations that adversely affect plant growth. When the electrical conductivity of soil exceeds <strong>4 dS/m (deciSiemens per metre)</strong>, the soil is classified as saline.</p>

                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                        <p><strong>Mechanism:</strong> In arid and semi-arid regions, irrigation water carries dissolved salts into the soil. When water evaporates or is taken up by plants through transpiration, the salts are left behind and accumulate. Without proper drainage to flush these salts below the root zone, concentrations build up season after season. The visible sign is a white crystalline crust on the soil surface.</p>
                        <p><strong>How Salinity Harms Plants:</strong> High salt concentrations create osmotic stress — essentially, salts in the soil solution make it harder for roots to extract water, even when the soil is moist. This is sometimes called "physiological drought." Additionally, specific ions (Na⁺, Cl⁻) are directly toxic to plant cells, disrupting enzyme function and membrane integrity. Sodium causes soil particles to disperse, destroying soil structure and reducing permeability — a condition called sodicity.</p>
                        <p><strong>Scale of the Problem:</strong> Globally, roughly 830 million hectares are affected by salinity — about 20% of all irrigated land and 2% of dryland agriculture. Countries most severely impacted include India, Pakistan, China, Australia, Iraq, and Egypt. In India alone, about 6.7 million hectares are salt-affected.</p>
                    </div>

                    {/* Vicious Cycle Diagram */}
                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#ea580c', marginBottom: '30px' }}>Figure 4: The vicious cycle linking over-irrigation, waterlogging, and salinization</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
                            {[
                                { t: "Over-Irrigation", c: "#3b82f6" },
                                { t: "Rising Water Table", c: "#94a3b8" },
                                { t: "Waterlogging", c: "#94a3b8" },
                                { t: "Poor Drainage", c: "#ef4444" },
                                { t: "Salt Accumulation", c: "#94a3b8" },
                                { t: "Soil Salinity", c: "#ea580c" },
                                { t: "Reduced Crop Yield", c: "#94a3b8" },
                                { t: "More Irrigation Needed", c: "#3b82f6" },
                                { t: "Capillary Rise of Salts", c: "#ea580c" }
                            ].map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div style={{ padding: '12px 18px', backgroundColor: step.c, color: '#fff', borderRadius: '12px', fontSize: '0.85em', fontWeight: 'bold', minWidth: '120px' }}>{step.t}</div>
                                    {idx < 8 && <span style={{ color: '#cbd5e1', fontSize: '1.2em' }}>→</span>}
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
                                { m: '"More fertilizer always means better crop yield."', r: "Crops can only absorb a limited amount of nutrients. Beyond the optimal rate, additional fertilizer provides no yield benefit and instead runs off into water bodies or degrades the soil." },
                                { m: '"Pesticides only affect the targeted pest."', r: "Most pesticides are broad-spectrum and kill beneficial insects (pollinators, natural predators), soil organisms, and aquatic life. Only a small fraction (often less than 0.1%) of applied pesticide actually reaches the target pest." },
                                { m: '"Waterlogging only happens in rainy areas."', r: "Some of the worst waterlogging occurs in arid irrigated regions (e.g., Indus Basin, Nile Valley) where excessive canal irrigation without drainage raises the water table. The climate is dry, but the irrigation is excessive." },
                                { m: '"Saline soil just needs more water to wash salts."', r: "Without proper subsurface drainage, adding more water worsens waterlogging and can even increase salinity through capillary rise. Reclamation requires both adequate water AND drainage, often combined with gypsum application for sodic soils." }
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
                    <p style={{ fontSize: '1.1em', color: '#475569', marginBottom: '30px' }}>Watch these carefully selected videos to reinforce your understanding with visual explanations.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', margin: '30px 0' }}>
                        <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>📚 Do we need pesticides? — Lesson by Fernan Pérez-Gálvez (TED-Ed)</h4>
                            <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Excellent animated explainer on pesticide effects, biomagnification, and alternatives.</p>
                        </div>
                        <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>🌊 Eutrophication Explained</h4>
                            <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Visual explanation of how fertilizer runoff causes eutrophication, algal blooms, and dead zones.</p>
                        </div>
                        <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>🧂 Soil Salinity and Waterlogging — Environmental Issues</h4>
                            <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Covers waterlogging mechanisms, salt accumulation, and management strategies in agricultural lands.</p>
                        </div>
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe', marginBottom: '60px' }}>
                        <p style={{ fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>📺 Search YouTube for more:</p>
                        <ul style={{ color: '#1d4ed8', fontSize: '0.95em', margin: 0 }}>
                            <li>"Effects of modern agriculture on environment" — Channels: Neso Academy, Unacademy, Khan Academy</li>
                            <li>"Waterlogging and salinity in agriculture" — Channels: Gate Smashers, Study IQ Education</li>
                            <li>"Biomagnification of pesticides animation"</li>
                        </ul>
                    </div>

                    {/* CASE STUDIES */}
                    <h2 style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>⚙️</span> Case Studies & Worked Examples
                    </h2>

                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', margin: '40px 0' }}>
                        <h3 style={{ color: '#ef4444', marginTop: 0 }}>Case Study 1: The Gulf of Mexico Dead Zone</h3>
                        <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                            <p><strong>📝 Background:</strong> Every spring, nutrient-laden runoff from the Mississippi River basin — draining farmland across 31 U.S. states — pours into the Gulf of Mexico. The nitrogen and phosphorus from fertilizers trigger massive algal blooms. When the algae die and decompose, bacteria consume dissolved oxygen, creating a hypoxic zone where oxygen drops below 2 mg/L.</p>
                            <p><strong>Scale:</strong> The dead zone typically spans 13,000–22,000 km² (roughly the size of New Jersey), devastating shrimp fisheries worth billions of dollars.</p>
                            <h4 style={{ color: '#b91c1c', marginBottom: '15px' }}>🔍 Analysis:</h4>
                            <p style={{ margin: '5px 0' }}><strong>Step 1:</strong> Fertilizer applied to Midwest corn and soybean fields → 30–50% of N not absorbed by crops.</p>
                            <p style={{ margin: '5px 0' }}><strong>Step 2:</strong> Spring rains wash excess N and P into tributaries → Mississippi River carries ~1.5 million tonnes of N annually.</p>
                            <p style={{ margin: '5px 0' }}><strong>Step 3:</strong> Nutrients enter Gulf → algal blooms → decomposition → oxygen depletion → dead zone.</p>
                            <p style={{ margin: '15px 0' }}><strong>Step 4:</strong> Shrimp, fish, and benthic organisms die or flee → economic losses to fishing communities.</p>
                            <div style={{ backgroundColor: '#fdf2f8', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #ef4444', marginTop: '20px' }}>
                                <p style={{ margin: 0 }}><strong>✅ Key Lesson:</strong> This case demonstrates the distant downstream consequences of upstream fertilizer misuse. The farmer in Iowa and the shrimp fisher in Louisiana are linked by a nutrient pathway spanning 1,600 km.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', margin: '40px 0' }}>
                        <h3 style={{ color: '#3b82f6', marginTop: 0 }}>Case Study 2: Waterlogging & Salinity in Punjab (India-Pakistan)</h3>
                        <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                            <p><strong>📝 Background:</strong> The Indus Basin Irrigation System, one of the world's largest contiguous irrigation networks, transformed the arid plains of Punjab into a breadbasket. However, decades of canal irrigation without adequate drainage have raised water tables from 20–30 m depth to within 1–2 m of the surface across millions of hectares.</p>
                            <h4 style={{ color: '#1e40af', marginBottom: '15px' }}>🔍 Analysis:</h4>
                            <p><strong>Cause:</strong> Unlined canals lose 25–40% of water through seepage. Over-irrigation adds more water than crops need. Flat terrain impedes natural drainage.</p>
                            <p><strong>Effect:</strong> Rising water table → waterlogging in low-lying areas → capillary rise brings dissolved salts to surface → white salt crusts form → crop yields drop 40–80%.</p>
                            <p><strong>Scale:</strong> ~6.3 million hectares affected in Pakistan alone; ~6.7 million hectares in India.</p>
                            <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #3b82f6', marginTop: '20px' }}>
                                <p style={{ margin: 0 }}><strong>✅ Remediation Strategies:</strong> Subsurface tile drainage, canal lining, planting salt-tolerant species (e.g., Prosopis, Atriplex), improved irrigation scheduling, and applying gypsum (CaSO₄) to displace sodium in sodic soils.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', margin: '40px 0' }}>
                        <h3 style={{ color: '#10b981', marginTop: 0 }}>Case Study 3: DDT & the Peregrine Falcon Collapse</h3>
                        <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                            <p><strong>📝 Background:</strong> DDT (dichlorodiphenyltrichloroethane) was widely used from the 1940s–1970s as an agricultural insecticide. Rachel Carson's 1962 book <em>Silent Spring</em> documented how DDT biomagnified through food chains, reaching lethal concentrations in top predators.</p>
                            <h4 style={{ color: '#047857', marginBottom: '15px' }}>🔍 Impact Chain:</h4>
                            <p style={{ margin: '10px 0' }}>DDT sprayed on crops → washed into waterways → absorbed by aquatic organisms → concentrated in fish → eaten by birds of prey → DDE metabolite caused eggshell thinning → reproductive failure → population crashes of bald eagles, peregrine falcons, and brown pelicans.</p>
                            <div style={{ backgroundColor: '#ecfdf5', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #10b981', marginTop: '20px' }}>
                                <p style={{ margin: 0 }}><strong>✅ Outcome:</strong> DDT was banned in the US in 1972 and globally restricted under the Stockholm Convention (2001). Peregrine falcon populations have since recovered — a conservation success story demonstrating that regulation works.</p>
                            </div>
                        </div>
                    </div>

                    {/* COMPARISON TABLE */}
                    <div style={{ margin: '60px 0' }}>
                        <h2 style={{ color: '#0369a1' }}>📊 Comparison & Analysis</h2>
                        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', overflowX: 'auto', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em', color: '#334155' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f1f5f9' }}>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Aspect</th>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Conventional Agriculture</th>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Organic Farming</th>
                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Integrated Pest Management (IPM)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Inputs</td>
                                        <td style={{ padding: '15px' }}>Synthetic fertilizers, chemical pesticides</td>
                                        <td style={{ padding: '15px' }}>Compost, manure, biopesticides</td>
                                        <td style={{ padding: '15px' }}>Combination: biological + minimal chemical</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Yield</td>
                                        <td style={{ padding: '15px' }}>High short-term</td>
                                        <td style={{ padding: '15px' }}>10–25% lower initially</td>
                                        <td style={{ padding: '15px' }}>Comparable to conventional</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Soil Health</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Degrades over time</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Improves structure & biodiversity</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Moderate improvement</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Water Pollution</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Major contributor</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Minimal runoff</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Significantly reduced</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Biodiversity</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Severe loss</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Supports biodiversity</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Partial preservation</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Cost</td>
                                        <td style={{ padding: '15px' }}>Low input cost, high externalities</td>
                                        <td style={{ padding: '15px' }}>Higher labor, lower chemical cost</td>
                                        <td style={{ padding: '15px' }}>Moderate; knowledge-intensive</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Scalability</td>
                                        <td style={{ padding: '15px' }}>Highly scalable</td>
                                        <td style={{ padding: '15px' }}>Challenging at scale</td>
                                        <td style={{ padding: '15px' }}>Scalable with training</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>Long-term Sustainability</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Unsustainable</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Highly sustainable</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Sustainable</td>
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
                            <span style={{ fontSize: '1.5em' }}>🎯</span> Interactive Practice — MCQs
                        </h2>
                        <p style={{ fontSize: '1.1em', color: '#475569', marginBottom: '30px' }}>Test your understanding by clicking your answer, then check it!</p>

                        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                            <Quiz
                                title="Module 2.6 Mastery Quiz"
                                questions={quizQuestions}
                                subject="ES"
                                unitId={2}
                                moduleId={6}
                            />
                        </div>

                        <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px', marginTop: '60px' }}>
                            <span style={{ fontSize: '1.5em' }}>📝</span> Problem-Solving Practice
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0', color: '#0369a1' }}>📘 Easy: Short Answer</h3>
                                <p style={{ fontSize: '0.95em', color: '#334155' }}><strong>Question:</strong> List four environmental effects of excessive chemical fertilizer use. For each, name the pollutant involved and the ecosystem impacted.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0369a1' }}>Show Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155' }}>
                                        <ol>
                                            <li style={{ marginBottom: '10px' }}><strong>Eutrophication:</strong> Excess nitrogen and phosphorus → surface water bodies → algal blooms → oxygen depletion → aquatic dead zones.</li>
                                            <li style={{ marginBottom: '10px' }}><strong>Groundwater contamination:</strong> Nitrate leaching → aquifers → unsafe drinking water → methemoglobinemia risk.</li>
                                            <li style={{ marginBottom: '10px' }}><strong>Soil degradation:</strong> Ammonium fertilizers → soil acidification → loss of microbial diversity → heavy metal accumulation.</li>
                                            <li><strong>Climate change:</strong> N₂O emissions from fertilized soils → atmosphere → enhanced greenhouse effect (265× CO₂ warming potential).</li>
                                        </ol>
                                    </div>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0', color: '#ea580c' }}>📙 Medium: Analytical</h3>
                                <p style={{ fontSize: '0.95em', color: '#334155' }}><strong>Question:</strong> Explain the relationship between waterlogging and soil salinity. Why do these two problems often occur together in irrigated arid regions? Include a diagram in your answer.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#ea580c' }}>Show Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155', lineHeight: '1.6' }}>
                                        <p>Waterlogging and salinity are twin problems that reinforce each other in a positive feedback loop:</p>
                                        <p>(a) Over-irrigation and canal seepage raise the water table → waterlogging occurs when the water table enters the root zone.</p>
                                        <p>(b) Waterlogged soils have impaired drainage → salts brought in by irrigation water cannot be leached downward.</p>
                                        <p>(c) In arid climates with high evaporation, capillary action draws salt-laden groundwater upward toward the surface.</p>
                                        <p>(d) As water evaporates, salts are deposited at/near the surface → soil salinity increases.</p>
                                        <p>(e) Saline soil further degrades soil structure (dispersion of clay particles) &rarr; permeability decreases &rarr; drainage worsens &rarr; more waterlogging.</p>
                                        <p>This is why effective drainage is essential in irrigated agriculture &mdash; without it, the cycle is self-reinforcing and eventually renders land unfit for cultivation.</p>
                                    </div>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0', color: '#ef4444' }}>📕 Hard: Evaluation</h3>
                                <p style={{ fontSize: '0.95em', color: '#334155' }}><strong>Question:</strong> &quot;The Green Revolution saved millions from famine but sowed the seeds of environmental catastrophe.&quot; Critically evaluate this statement with reference to fertilizer/pesticide use, waterlogging, and soil salinity, using specific examples from India&apos;s Punjab region.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#ef4444' }}>Show Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155', lineHeight: '1.6' }}>
                                        <p><strong>Arguments supporting the statement:</strong></p>
                                        <p>The Green Revolution (1960s&ndash;70s) introduced high-yielding wheat and rice varieties that required intensive inputs of chemical fertilizers, pesticides, and irrigation. In Punjab, wheat yields tripled and India became food self-sufficient. However:</p>
                                        <ul>
                                            <li>Fertilizer use increased from 2 kg/ha (1960s) to over 200 kg/ha, leading to soil degradation, declining organic carbon, and groundwater nitrate contamination.</li>
                                            <li>Pesticide overuse caused resistance in pests (e.g., cotton bollworm), destroyed beneficial insects, and created health crises &mdash; Punjab reports elevated cancer rates linked to pesticide exposure.</li>
                                            <li>Tube well irrigation and canal seepage raised water tables, causing waterlogging in southwest Punjab, while over-extraction lowered tables in central Punjab &mdash; a paradox of mismanagement.</li>
                                            <li>Soil salinity now affects significant areas of Punjab, reducing yields in formerly productive land.</li>
                                        </ul>
                                        <p><strong>Counter-arguments:</strong></p>
                                        <ul>
                                            <li>The Green Revolution prevented widespread famine during India's population boom.</li>
                                            <li>The environmental damage is not inevitable — it resulted from mismanagement, not the technology itself.</li>
                                            <li>Improved practices (precision farming, drip irrigation, IPM, organic amendments) can address many of these issues.</li>
                                        </ul>
                                        <p><strong>Conclusion:</strong> The statement is broadly valid &mdash; the Green Revolution&apos;s environmental costs were severe and inadequately anticipated. However, the damage resulted from how technologies were deployed (excess, without drainage/IPM) rather than from the technologies themselves. Sustainable intensification is the path forward.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* HANDS-ON ACTIVITY */}
                    <div style={{ backgroundColor: '#f0f9ff', padding: '40px', borderRadius: '24px', border: '1px solid #bae6fd', margin: '60px 0' }}>
                        <h3 style={{ margin: '0 0 20px 0', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>�️</span> Hands-On Activity: Investigating Fertilizer Runoff & Eutrophication
                        </h3>
                        <div style={{ fontSize: '0.95em', color: '#334155', lineHeight: '1.6' }}>
                            <p><strong>📋 Objective:</strong> Simulate the process of eutrophication by adding fertilizer to water samples and observing algal growth over 7–10 days. Compare treated vs. control samples to understand the link between nutrient loading and water quality degradation.</p>
                            <p><strong>⏱️ Estimated Time:</strong> Setup: 30 min | Observation: 10 min/day × 7 days</p>
                            <p><strong>📝 Instructions:</strong></p>
                            <ol>
                                <li>Gather materials: 4 clear jars/bottles, pond or lake water, commercial NPK fertilizer, measuring spoons, labels, notebook.</li>
                                <li>Label jars: Control (no fertilizer), Low dose (¼ tsp), Medium dose (½ tsp), High dose (1 tsp).</li>
                                <li>Fill each jar with 500 mL of pond water (contains natural algae and microorganisms).</li>
                                <li>Add fertilizer to labeled jars. Do NOT add to Control.</li>
                                <li>Place all jars in a sunny windowsill. Cover loosely with cloth (allows air, blocks debris).</li>
                                <li>Record daily observations: Water colour, clarity, algae growth, odour. Take photos.</li>
                                <li>After 7–10 days, measure dissolved oxygen (if DO meter available) or note signs of oxygen depletion (foul smell, dead organisms).</li>
                                <li>Create a data table and graph comparing algal growth across concentrations.</li>
                                <li>Write a conclusion connecting your observations to real-world eutrophication.</li>
                            </ol>
                            <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '12px', border: '1px solid #bae6fd', marginTop: '20px' }}>
                                <p style={{ margin: 0 }}><strong>✅ Expected Outcome:</strong> Higher fertilizer concentrations → greener water, thicker algal growth, lower clarity, possible foul smell from anaerobic decomposition — mirroring eutrophication in lakes and rivers receiving agricultural runoff.</p>
                            </div>
                        </div>
                    </div>

                    {/* PITFALLS & EXAM TIPS */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '40px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '60px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Pitfalls & Exam Tips
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div>
                                <p style={{ fontWeight: 'bold', color: '#e11d48', marginBottom: '10px' }}>🚫 Pitfall #1: Confusing bioaccumulation with biomagnification</p>
                                <p style={{ fontSize: '0.9em', color: '#475569' }}><strong>How to avoid:</strong> Bioaccumulation = buildup in ONE organism over time. Biomagnification = increase in concentration ACROSS trophic levels. Use the mnemonic: &quot;Accumulate in one, Magnify across many.&quot;</p>

                                <p style={{ fontWeight: 'bold', color: '#e11d48', marginBottom: '10px', marginTop: '20px' }}>🚫 Pitfall #2: Stating that waterlogging and salinity are the same thing</p>
                                <p style={{ fontSize: '0.9em', color: '#475569' }}><strong>How to avoid:</strong> Waterlogging is a physical problem (excess water, no oxygen). Salinity is a chemical problem (excess dissolved salts). They often co-occur but have different mechanisms and require different solutions.</p>

                                <p style={{ fontWeight: 'bold', color: '#e11d48', marginBottom: '10px', marginTop: '20px' }}>🚫 Pitfall #3: Writing &quot;fertilizers are bad&quot; without nuance</p>
                                <p style={{ fontSize: '0.9em', color: '#475569' }}><strong>How to avoid:</strong> Always acknowledge that fertilizers are necessary for food security. The problem is EXCESSIVE and IMPROPER use. Discuss optimal application rates, timing, and precision agriculture as solutions.</p>
                            </div>
                            <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '16px', border: '1px solid #fecdd3' }}>
                                <p style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '15px' }}>💡 Exam Tips:</p>
                                <ul style={{ fontSize: '0.9em', color: '#334155', lineHeight: '1.7', paddingLeft: '20px' }}>
                                    <li>Always draw diagrams for waterlogging and eutrophication questions — they earn bonus marks.</li>
                                    <li>Include specific data: &quot;830 million hectares globally,&quot; &quot;EC &gt; 4 dS/m for saline soil&quot;.</li>
                                    <li>Mention at least one real-world case study (Gulf of Mexico, Punjab, Aral Sea).</li>
                                    <li>For long-answer questions, structure as: Definition &rarr; Causes &rarr; Effects &rarr; Remediation.</li>
                                    <li>Distinguish between saline (EC &gt; 4, pH &lt; 8.5) and sodic (ESP &gt; 15, pH &gt; 8.5) soils.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CHEAT SHEET */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '2px dashed #94a3b8', margin: '60px 0' }}>
                        <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>📄</span> Quick Reference Cheat Sheet
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px', marginTop: '30px' }}>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>🔑 Key Definitions</h4>
                                <ul style={{ fontSize: '0.85em', color: '#475569', paddingLeft: '15px' }}>
                                    <li><strong>Eutrophication:</strong> Nutrient-driven algal overgrowth</li>
                                    <li><strong>Biomagnification:</strong> Toxin concentration &uarr; up food chain</li>
                                    <li><strong>Waterlogging:</strong> Water table in root zone, O&sub2; depleted</li>
                                    <li><strong>Salinity:</strong> Excess salts in soil, EC &gt; 4 dS/m</li>
                                    <li><strong>Sodicity:</strong> High sodium (ESP &gt; 15), destroys soil structure</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>📐 Important Thresholds</h4>
                                <ul style={{ fontSize: '0.85em', color: '#475569', paddingLeft: '15px' }}>
                                    <li>Saline soil: EC &gt; 4 dS/m, pH &lt; 8.5</li>
                                    <li>Sodic soil: ESP &gt; 15, pH &gt; 8.5</li>
                                    <li>Nitrate in water: WHO limit = 50 mg/L</li>
                                    <li>Hypoxia: DO &lt; 2 mg/L (dead zone)</li>
                                    <li>N&sub2;O GWP: &sim;265&times; CO&sub2; (100-year)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>🌍 Key Case Studies</h4>
                                <ul style={{ fontSize: '0.85em', color: '#475569', paddingLeft: '15px' }}>
                                    <li><strong>Gulf of Mexico:</strong> Fertilizer &rarr; dead zone</li>
                                    <li><strong>Punjab India:</strong> Waterlogging + salinity</li>
                                    <li><strong>Aral Sea:</strong> Irrigation-driven disaster</li>
                                    <li><strong>DDT/Peregrine:</strong> Biomagnification</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>✅ Solutions & Remedies</h4>
                                <ul style={{ fontSize: '0.85em', color: '#475569', paddingLeft: '15px' }}>
                                    <li>Precision fertilizer application</li>
                                    <li>Integrated Pest Management (IPM)</li>
                                    <li>Subsurface drainage for waterlogging</li>
                                    <li>Gypsum application for sodic soils</li>
                                    <li>Salt-tolerant crop varieties</li>
                                    <li>Drip irrigation over flood irrigation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* UNIVERSITY EXAM PRACTICE */}
                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '60px 0' }}>
                        <h2 style={{ color: '#1e293b', marginTop: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span>📝</span> University Exam Practice
                        </h2>

                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ color: '#0369a1' }}>Question 1: Short Answer (5 marks) — 7 minutes</h4>
                            <p style={{ color: '#334155' }}>Explain how excessive use of chemical fertilizers leads to eutrophication. Describe the complete chain of events from farm field to aquatic dead zone.</p>
                            <details style={{ marginTop: '15px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0369a1' }}>Show Marking Scheme & Model Answer</summary>
                                <div style={{ marginTop: '15px', fontSize: '0.95em', color: '#334155', lineHeight: '1.7' }}>
                                    <p><strong>Marking Scheme:</strong></p>
                                    <ul>
                                        <li>Definition of eutrophication: 1 mark</li>
                                        <li>Source of nutrients (N, P from fertilizers): 1 mark</li>
                                        <li>Transport mechanism (runoff, leaching): 1 mark</li>
                                        <li>Algal bloom &rarr; decomposition &rarr; O&sub2; depletion: 1 mark</li>
                                        <li>Consequences (dead zone, fish kills): 1 mark</li>
                                    </ul>
                                    <p><strong>Model Answer:</strong></p>
                                    <p>Eutrophication is the excessive enrichment of water bodies with mineral nutrients, primarily nitrogen and phosphorus. When chemical fertilizers are applied to agricultural fields beyond crop requirements, the surplus nutrients are carried into rivers, lakes, and coastal waters through surface runoff during rainfall and through subsurface leaching into groundwater that feeds streams. These elevated nutrient levels stimulate rapid and excessive growth of algae (algal bloom) on the water surface. When these algae die, decomposer bacteria break them down aerobically, consuming large quantities of dissolved oxygen. This creates hypoxic conditions (DO below 2 mg/L) &mdash; known as &quot;dead zones&quot; &mdash; where fish, shellfish, and other aquatic organisms cannot survive, leading to massive die-offs and collapse of aquatic ecosystems. A well-known example is the Gulf of Mexico dead zone, which spans up to 22,000 km&sup2; annually.</p>
                                </div>
                            </details>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ color: '#0369a1' }}>Question 2: Long Answer (15 marks) — 20 minutes</h4>
                            <p style={{ color: '#334155' }}>Discuss the problems of waterlogging and soil salinity in the context of irrigated agriculture. Include causes, effects on crops, and remediation strategies. Support your answer with examples.</p>
                            <details style={{ marginTop: '15px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0369a1' }}>Show Marking Scheme & Model Answer</summary>
                                <div style={{ marginTop: '15px', fontSize: '0.95em', color: '#334155', lineHeight: '1.7' }}>
                                    <p><strong>Marking Scheme:</strong></p>
                                    <ul>
                                        <li>Definitions of waterlogging and salinity: 2 marks</li>
                                        <li>Causes (over-irrigation, poor drainage, canal seepage, capillary rise): 3 marks</li>
                                        <li>Effects on crops (O&sub2; deprivation, osmotic stress, ion toxicity, yield loss): 3 marks</li>
                                        <li>The waterlogging-salinity feedback cycle: 2 marks</li>
                                        <li>Remediation strategies (drainage, gypsum, salt-tolerant crops, improved irrigation): 3 marks</li>
                                        <li>Examples (Indus Basin, Australia Murray-Darling, etc.): 2 marks</li>
                                    </ul>
                                    <p><strong>Model Answer:</strong></p>
                                    <p><strong>Introduction:</strong> Waterlogging and salinity are the twin environmental threats to irrigated agriculture, particularly in arid and semi-arid regions where over 75% of the world&apos;s population lives.</p>
                                    <p><strong>Waterlogging &mdash; Causes &amp; Effects:</strong> Waterlogging occurs when the water table rises to within the root zone (upper 1&ndash;2 m), saturating soil pores and displacing air. Causes include over-irrigation, seepage from unlined canals (25&ndash;40% water loss), impermeable subsoil layers, and inadequate drainage systems. The effect on crops is severe: oxygen-starved roots cannot respire or absorb nutrients, anaerobic conditions produce toxic compounds (H&sub2;S, reduced iron), and yield reductions of 40&ndash;80% are common for sensitive crops like wheat and cotton.</p>
                                    <p><strong>Salinity &mdash; Causes &amp; Effects:</strong> Soil salinity is the accumulation of soluble salts (NaCl, Na&sub2;SO&sub4;) to levels toxic to plants (EC &gt; 4 dS/m). Irrigation water carries dissolved salts into the soil; as water evaporates or is transpired, salts concentrate. Without drainage to leach salts below the root zone, concentrations build up. High salinity creates osmotic stress &mdash; roots struggle to extract water even from moist soil &mdash; and specific ion toxicity (Na&plusmn;, Cl&ordm;) damages cell membranes and enzymes.</p>
                                    <p><strong>The Feedback Cycle:</strong> These problems reinforce each other: waterlogging prevents salt leaching → salts accumulate → saline conditions degrade soil structure → permeability decreases → drainage worsens → more waterlogging.</p>
                                    <p><strong>Remediation:</strong> (i) Subsurface tile drainage systems to lower water tables and flush salts; (ii) Canal lining to reduce seepage; (iii) Gypsum (CaSO₄) application to displace sodium from sodic soils; (iv) Selecting salt-tolerant crop varieties; (v) Switching from flood to drip irrigation to reduce excess water application; (vi) Afforestation with deep-rooted trees (eucalyptus, Prosopis) to lower water tables through transpiration.</p>
                                    <p><strong>Examples:</strong> In Pakistan&apos;s Indus Basin, &sim;6.3 million ha are salt-affected. In India, the Indo-Gangetic plains and Rajasthan face similar crises. Australia&apos;s Murray-Darling Basin has extensive dryland salinity from land clearing that raised water tables, bringing ancient salt deposits to the surface.</p>
                                </div>
                            </details>
                        </div>

                        <div>
                            <h4 style={{ color: '#0369a1' }}>Question 3: Diagram-Based (10 marks) — 12 minutes</h4>
                            <p style={{ color: '#334155' }}>Draw a well-labelled diagram showing how pesticides undergo biomagnification through an aquatic food chain. Indicate approximate concentration values at each trophic level.</p>
                            <details style={{ marginTop: '15px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0369a1' }}>Show Model Answer</summary>
                                <div style={{ marginTop: '15px', fontSize: '0.95em', color: '#334155', lineHeight: '1.7' }}>
                                    <p>Your diagram should include:</p>
                                    <ol>
                                        <li>Water body with pesticide concentration (e.g., 0.003 ppm) — 2 marks</li>
                                        <li>Phytoplankton/algae level (0.04 ppm) — 1 mark</li>
                                        <li>Zooplankton/small invertebrates (0.5 ppm) — 1 mark</li>
                                        <li>Small fish (2 ppm) — 1 mark</li>
                                        <li>Large fish (10 ppm) — 1 mark</li>
                                        <li>Top predator / bird of prey (25+ ppm) — 1 mark</li>
                                        <li>Arrows showing direction of energy/toxin flow — 1 mark</li>
                                        <li>Labels + title + concentration units — 1 mark</li>
                                        <li>Note on biological effect at top level (eggshell thinning, reproductive failure) — 1 mark</li>
                                    </ol>
                                    <p>Refer to Figure 3 (Biomagnification Pyramid) in this module as a guide for your diagram.</p>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* ADDITIONAL RESOURCES */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '60px 0' }}>
                        <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>🚀</span> Go Deeper: Resources
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 15px 0' }}>📚 Recommended Books:</h4>
                                <ul style={{ fontSize: '0.95em', color: '#475569', lineHeight: '1.8' }}>
                                    <li><strong>Environmental Studies: From Crisis to Cure</strong> by R. Rajagopalan — Chapters on agriculture & resources</li>
                                    <li><strong>Environmental Science</strong> by Benny Joseph — Comprehensive coverage of natural resources unit</li>
                                    <li><strong>Silent Spring</strong> by Rachel Carson — Classic text on pesticide impacts (historical context)</li>
                                    <li><strong>Fundamentals of Ecology</strong> by Odum — For understanding nutrient cycling and bioaccumulation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1', margin: '0 0 15px 0' }}>🌐 Online Resources:</h4>
                                <ul style={{ fontSize: '0.95em', color: '#475569', lineHeight: '1.8' }}>
                                    <li>US EPA — Nonpoint Source: Agriculture (epa.gov/nps)</li>
                                    <li>FAO — Soil Salinity Portal (fao.org)</li>
                                    <li>ICID — International Commission on Irrigation and Drainage (icid-ciid.org)</li>
                                    <li>National Geographic — Environmental Impacts of Agricultural Modifications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_6;