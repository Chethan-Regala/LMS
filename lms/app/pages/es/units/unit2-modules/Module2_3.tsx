'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_3: React.FC = () => {
    const quizQuestions = [
        {
            question: "What percentage of Earth's total water is accessible surface freshwater (rivers & lakes)?",
            options: [
                "2.5%",
                "0.9%",
                "0.3% of total water (or about 1% of freshwater)",
                "30.1%"
            ],
            correctAnswer: 2,
            explanation: "While 2.5% is freshwater, most is locked in glaciers and groundwater. Easily accessible surface water is only about 0.3% of total water."
        },
        {
            question: "Which Indian state has the most critically over-exploited groundwater resources due to rice cultivation?",
            options: [
                "Gujarat",
                "Punjab",
                "Rajasthan",
                "Uttar Pradesh"
            ],
            correctAnswer: 1,
            explanation: "Punjab is the most critically over-exploited state due to the heavy groundwater pumping intensive rice-wheat cycles."
        },
        {
            question: "The catastrophic Mumbai flood of July 26, 2005 was primarily caused by which combination of factors?",
            options: [
                "Cyclone landfall and storm surge",
                "Glacial outburst flood from Western Ghats",
                "944 mm rainfall in 24 hours + floodplain encroachment + degraded drainage infrastructure",
                "Bandra sea link construction blocking natural outflow"
            ],
            correctAnswer: 2,
            explanation: "The 2005 Mumbai flood was a combination of extreme rainfall (944mm) and human factors like drainage system failure and encroachment on natural water bodies like the Mithi River."
        },
        {
            question: "Which type of drought directly affects crop production by causing soil moisture deficit, even if river levels are not yet reduced?",
            options: [
                "Meteorological drought",
                "Hydrological drought",
                "Agricultural drought",
                "Socioeconomic drought"
            ],
            correctAnswer: 2,
            explanation: "Agricultural drought focuses specifically on the soil moisture needed for crops, which can occur before hydrological systems (rivers/lakes) show depletion."
        },
        {
            question: "The Cauvery River water dispute is between which states in India?",
            options: [
                "Andhra Pradesh and Telangana",
                "Tamil Nadu and Andhra Pradesh",
                "Karnataka, Tamil Nadu, Kerala, and Puducherry",
                "Tamil Nadu and Odisha"
            ],
            correctAnswer: 2,
            explanation: "The Cauvery dispute involves Karnataka, Tamil Nadu, Kerala, and the Union Territory of Puducherry."
        },
        {
            question: "The Narmada Bachao Andolan (NBA) — a major social movement against the Sardar Sarovar Dam — was led by:",
            options: [
                "Vandana Shiva",
                "Medha Patkar",
                "Sunita Narain",
                "Arundhati Roy"
            ],
            correctAnswer: 1,
            explanation: "Medha Patkar is the primary founder and leader of the NBA, which has fought for the rights of those displaced by the Narmada dams."
        },
        {
            question: "Which major adverse environmental effect is caused by dams trapping sediment in reservoirs?",
            options: [
                "Eutrophication of the reservoir",
                "Increased downstream flooding",
                "Coastal delta erosion and loss of agricultural land downstream",
                "Groundwater contamination"
            ],
            correctAnswer: 2,
            explanation: "Dams block the natural flow of sediment. Without this sediment, downstream deltas erode, as seen in the Nile and Mississippi deltas."
        },
        {
            question: "The Aral Sea disaster — once the world's 4th largest lake, now reduced to 10% of original size — was primarily caused by:",
            options: [
                "Climate change causing permanent drought in Central Asia",
                "Soviet diversion of inflowing rivers (Amu Darya and Syr Darya) for cotton irrigation",
                "Nuclear testing contaminating the water making it unusable",
                "Tectonic plate movement draining the lake basin"
            ],
            correctAnswer: 1,
            explanation: "The diversion of the Amu Darya and Syr Darya rivers for cotton farming is the primary cause of the Aral Sea's disappearance."
        },
        {
            question: "Which sector uses approximately 70% of global freshwater?",
            options: [
                "Industrial sector",
                "Domestic/Municipal sector",
                "Agricultural sector (irrigation)",
                "Energy sector (hydropower)"
            ],
            correctAnswer: 2,
            explanation: "Agriculture is by far the largest consumer of freshwater globally, mainly for irrigation."
        },
        {
            question: "An aquifer from which water flows naturally under pressure without pumping is called:",
            options: [
                "Unconfined aquifer",
                "Perched aquifer",
                "Artesian (confined) aquifer",
                "Vadose zone"
            ],
            correctAnswer: 2,
            explanation: "Artesian wells tap into confined aquifers where the water is under enough pressure to rise to the surface naturally."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">2.3</div>
                <div className="lesson-title-main">
                    <h1>💧 Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts & Dams</h1>
                </div>
            </div>

            <section className="content-section">
                {/* METADATA BAR */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', margin: '20px 0', fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>⏱️ Estimated Time</span>
                        90–120 minutes
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>📊 Difficulty</span>
                        Intermediate
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>🎯 Prerequisites</span>
                        Hydrological Cycle, Ecosystems
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>✅ Pass Score</span>
                        70% or higher
                    </div>
                </div>

                {/* NAVIGATION/QUICK LINKS */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                    {['Objectives', 'Theory', 'Surface Water', 'Groundwater', 'Floods', 'Drought', 'Conflicts', 'Dams', 'Videos', 'Quiz', 'Lab', 'Cheat Sheet'].map((link) => (
                        <span key={link} style={{ padding: '5px 15px', borderRadius: '15px', backgroundColor: '#f0f9ff', color: '#0369a1', fontSize: '0.85em', fontWeight: '500' }}>
                            {link}
                        </span>
                    ))}
                </div>

                {/* OBJECTIVES */}
                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#166534' }}>🎯 What You'll Master: Learning Objectives</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}>Distinguish between surface water and groundwater resources, explain their formation, distribution, and quantify the percentage of freshwater available globally using data.</li>
                        <li style={{ marginBottom: '10px' }}>Analyze the causes and consequences of over-utilization of surface and groundwater resources, citing at least three real-world examples of groundwater depletion.</li>
                        <li style={{ marginBottom: '10px' }}>Explain the hydrological mechanisms, causes, types, and management strategies for floods and droughts, including the role of ENSO and climate change.</li>
                        <li style={{ marginBottom: '10px' }}>Evaluate national and international water conflicts, describe the concept of water wars, and critically assess the role of inter-basin water transfer in conflict resolution.</li>
                        <li style={{ marginBottom: '10px' }}>Assess the benefits and adverse socio-environmental impacts of large dams, with reference to specific Indian and global case studies (Sardar Sarovar, Three Gorges), and propose sustainable alternatives.</li>
                    </ul>
                </div>

                {/* WHY IT MATTERS */}
                <h3>🔥 Why Water Resources Matter</h3>
                <p>Imagine waking up one morning and finding that the tap runs dry — not for a few hours, but permanently. This is the daily reality for over 2 billion people who lack access to safe drinking water. Water is not merely a resource; it is the foundation of all terrestrial life, civilisation, food security, and economic development. Yet humanity is consuming, polluting, and mismanaging this finite gift faster than natural systems can replenish it.</p>
                <p>The Earth contains approximately 1.386 billion km³ of water, but 97.5% is saltwater in oceans. Of the remaining 2.5% freshwater, about 69% is locked in glaciers and ice caps, 30% exists as groundwater, and a mere 0.3% flows in rivers and lakes as surface water. This incredibly thin slice of accessible freshwater supports all agriculture (70% of global freshwater use), industry (20%), and domestic needs (10%) for 8 billion people — and the competition for it is intensifying daily.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#0369a1' }}>2.2B</div>
                        <div style={{ fontSize: '0.8em', color: '#666' }}>People lack safe drinking water</div>
                    </div>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#0369a1' }}>0.3%</div>
                        <div style={{ fontSize: '0.8em', color: '#666' }}>Accessible surface freshwater</div>
                    </div>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#0369a1' }}>4B</div>
                        <div style={{ fontSize: '0.8em', color: '#666' }}>Suffer water scarcity 1 mo/yr</div>
                    </div>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#0369a1' }}>70%</div>
                        <div style={{ fontSize: '0.8em', color: '#666' }}>Global freshwater used in agriculture</div>
                    </div>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#0369a1' }}>263</div>
                        <div style={{ fontSize: '0.8em', color: '#666' }}>International river basins shared</div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>💡 Real-World Applications & Relevance:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}>🌾 <strong>Food Security:</strong> 40% of global food is produced using irrigated water from rivers and aquifers</li>
                        <li style={{ marginBottom: '10px' }}>💡 <strong>Energy:</strong> Hydroelectric power provides ~16% of world electricity through dams</li>
                        <li style={{ marginBottom: '10px' }}>🏙️ <strong>Urban Planning:</strong> Cities rely on surface & groundwater management for sustainable growth</li>
                        <li style={{ marginBottom: '10px' }}>🌡️ <strong>Climate Change:</strong> Altered rainfall patterns intensify floods, droughts, and water conflicts</li>
                        <li>⚖️ <strong>Geopolitics:</strong> Water disputes threaten regional stability across Asia, Africa, and the Middle East</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* DEEP DIVE THEORY */}
                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '40px 0' }}>
                    <h2 style={{ margin: 0, color: '#075985', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ backgroundColor: '#7dd3fc', color: '#fff', padding: '5px 12px', borderRadius: '8px', fontSize: '0.6em' }}>📖</span>
                        Water Resources: Deep Dive Theory
                    </h2>
                </div>

                <h3>Global Water Distribution</h3>
                <p>Water exists on Earth in three phases — liquid, solid (ice), and vapour — cycling continuously through the hydrological cycle. The total water on Earth is estimated at 1.386 billion km³. Understanding where water is stored and how it moves is the first step toward appreciating why freshwater is so precious and why its mismanagement has such catastrophic consequences.</p>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>🌍 Global Water Distribution</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#334155', color: '#fff' }}>
                                    <th style={{ padding: '12px', border: '1px solid #475569', textAlign: 'left' }}>Store</th>
                                    <th style={{ padding: '12px', border: '1px solid #475569', textAlign: 'center' }}>Percentage</th>
                                    <th style={{ padding: '12px', border: '1px solid #475569', textAlign: 'left' }}>Breakdown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Oceans</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>97.5%</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Salt Water (1,350M km³)</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f1f5f9' }}>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Freshwater</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>2.5%</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>~35,000,000 km³ total</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', paddingLeft: '30px' }}>├ Glaciers & Ice</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>68.7%</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontSize: '0.85em' }}>Of freshwater store</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', paddingLeft: '30px' }}>├ Groundwater</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>30.1%</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontSize: '0.85em' }}>Of freshwater store (~10.5M km³)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', paddingLeft: '30px' }}>└ Surface Water</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>0.3%</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontSize: '0.85em' }}>Lakes (87%), Swamps (11%), Rivers (2%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>📌 Key Terminology:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#0369a1', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Surface Water:</strong> Water found in rivers, lakes, streams, ponds, wetlands, and reservoirs — replenished by precipitation and snowmelt</li>
                        <li style={{ marginBottom: '8px' }}><strong>Groundwater:</strong> Water stored in aquifers beneath the Earth's surface, filling spaces in rock, sand, and gravel</li>
                        <li style={{ marginBottom: '8px' }}><strong>Aquifer:</strong> An underground layer of permeable rock or sediment that holds and transmits groundwater</li>
                        <li style={{ marginBottom: '8px' }}><strong>Water Table:</strong> The upper surface of the zone of saturation — the level below which the ground is saturated with water</li>
                        <li style={{ marginBottom: '8px' }}><strong>Recharge Rate:</strong> The rate at which aquifers are replenished by rainfall — determines sustainable extraction limits</li>
                        <li><strong>Hydrological Cycle:</strong> The continuous movement of water through evaporation, condensation, precipitation, and runoff</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* SURFACE WATER */}
                <h3 id="surface-water">🌊 Surface Water: Use and Over-utilization</h3>
                <p>Surface water comprises all water bodies visible above ground — rivers, lakes, ponds, wetlands, and reservoirs. It forms the primary source of water for most human civilizations and ecosystems. Rivers alone carry approximately 47,000 km³ of water annually to the oceans, but only a fraction is accessible for human use due to seasonal variability, geographic distribution, and pollution.</p>
                <p>The major rivers of the world — Nile, Amazon, Yangtze, Ganges, Mississippi — have historically shaped civilizations. In India, the Ganga-Brahmaputra-Meghna (GBM) river system drains about 43% of the country's total land area and supports over 600 million people. However, growing populations, urbanization, industrialization, and climate change are placing these vital systems under unprecedented stress.</p>

                <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0' }}>Major Uses of Surface Water</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Sector</th>
                                    <th style={{ padding: '12px', textAlign: 'center' }}>% Global Use</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Primary Purpose</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Major Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Agriculture</td>
                                    <td style={{ padding: '12px', textAlign: 'center' }}>70%</td>
                                    <td style={{ padding: '12px' }}>Crop irrigation, livestock</td>
                                    <td style={{ padding: '12px' }}>River depletion, salinization</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Industry</td>
                                    <td style={{ padding: '12px', textAlign: 'center' }}>20%</td>
                                    <td style={{ padding: '12px' }}>Cooling, processing</td>
                                    <td style={{ padding: '12px' }}>Thermal & chemical pollution</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Domestic</td>
                                    <td style={{ padding: '12px', textAlign: 'center' }}>10%</td>
                                    <td style={{ padding: '12px' }}>Drinking, sanitation</td>
                                    <td style={{ padding: '12px' }}>Wastewater, eutrophication</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#9a3412' }}>🌍 Case Study: The Aral Sea Disaster</h4>
                    <p style={{ fontSize: '0.95em', color: '#4b5563' }}>Once the world's 4th largest lake (68,000 km²), the Aral Sea in Central Asia has shrunk to less than 10% of its original size due to Soviet-era irrigation projects diverting the Amu Darya and Syr Darya rivers.</p>
                    <ul style={{ fontSize: '0.9em', color: '#4b5563', paddingLeft: '20px' }}>
                        <li><strong>Root Cause:</strong> 1960s–70s diversion of 90% inflow for cotton farming in Uzbekistan & Kazakhstan.</li>
                        <li><strong>Consequences:</strong> Fishing industry collapsed (60,000 jobs); sea bed became salt desert; local climate harsher; soaring disease rates.</li>
                        <li><strong>Lesson:</strong> Over-extraction can permanently destroy entire regional economies and ecosystems.</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* GROUNDWATER SECTION */}
                <h3 id="groundwater">🏔️ Groundwater: Use and Over-utilization</h3>
                <p>Groundwater is the largest source of unfrozen freshwater on Earth, stored in aquifers — underground formations of permeable rock, sediment, or soil. It accounts for about 30% of all freshwater and supplies 50% of global drinking water, 43% of irrigation water, and substantial industrial supplies. Unlike surface water, groundwater is generally reliable year-round, naturally filtered, and less prone to seasonal variation — making it extremely valuable.</p>

                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>Underground Aquifer System Structure</h4>
                    <div style={{ fontSize: '0.85em', fontFamily: 'monospace', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
                        <div>Ground Surface ↑</div>
                        <div>[ Vadose Zone / Unsaturated Zone ]</div>
                        <div style={{ color: '#0369a1', fontWeight: 'bold' }}>~~~~ Water Table ~~~~</div>
                        <div style={{ color: '#0369a1' }}>[ Unconfined (Phreatic) Aquifer ]</div>
                        <div style={{ backgroundColor: '#94a3b8', color: '#fff', padding: '2px 5px' }}>▒▒ Confining Layer (Clay/Rock) ▒▒</div>
                        <div style={{ color: '#0369a1', fontWeight: 'bold' }}>[ CONFINED (ARTESIAN) AQUIFER - Under Pressure ]</div>
                        <div style={{ backgroundColor: '#475569', color: '#fff', padding: '2px 5px' }}>████ Impermeable Bedrock ████</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#9f1239' }}>📊 India's Groundwater Crisis: Punjab</h4>
                        <p style={{ fontSize: '0.9em' }}>India extracts 253 km³/year—25% of global use. In Punjab, the water table falls by 0.5–1m annually due to wheat/rice cycles. 30% of blocks are "dark zones".</p>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#166534' }}>🌐 Global Depletion</h4>
                        <ul style={{ fontSize: '0.85em', margin: 0, paddingLeft: '15px' }}>
                            <li><strong>Mexico City:</strong> Sinking 9+ metres since 1900.</li>
                            <li><strong>USA:</strong> Ogallala Aquifer facing collapse.</li>
                            <li><strong>China:</strong> Beijing region sinking due to pumping.</li>
                        </ul>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* FLOODS SECTION */}
                <h3 id="floods">🌧️ Floods: Causes, Types & Management</h3>
                <p>A flood is an overflow of water that inundates normally dry land. Floods are the most common and costly natural disaster globally, responsible for approximately 40% of all natural disaster deaths. Every year, floods affect about 250 million people worldwide.</p>

                <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0' }}>Types of Floods</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Type</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Mechanism</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Speed</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>River (Fluvial)</td>
                                    <td style={{ padding: '10px' }}>River overflow</td>
                                    <td style={{ padding: '10px' }}>Slow</td>
                                    <td style={{ padding: '10px' }}>Brahmaputra (Assam)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Flash Floods</td>
                                    <td style={{ padding: '10px' }}>Intense burst</td>
                                    <td style={{ padding: '10px' }}>Very fast</td>
                                    <td style={{ padding: '10px' }}>Kedarnath 2013</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Coastal</td>
                                    <td style={{ padding: '10px' }}>Storm surge</td>
                                    <td style={{ padding: '10px' }}>Rapid</td>
                                    <td style={{ padding: '10px' }}>Cyclone Fani 2019</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Urban</td>
                                    <td style={{ padding: '10px' }}>Drainage failure</td>
                                    <td style={{ padding: '10px' }}>Fast</td>
                                    <td style={{ padding: '10px' }}>Mumbai 2005</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '25px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#991b1b' }}>🏙️ Case Study: Mumbai Floods 2005</h4>
                    <p style={{ fontSize: '0.9em' }}><strong>July 26, 2005:</strong> 944 mm rainfall in 24 hours. 1,094+ deaths.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '10px' }}>
                        <div style={{ fontSize: '0.85em' }}><strong>Natural:</strong> Unprecedented intensity of monsoon depression.</div>
                        <div style={{ fontSize: '0.85em' }}><strong>Human:</strong> Encroachment on Mithi River; 40% mangrove loss; 1860s drainage system.</div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* DROUGHT SECTION */}
                <h3 id="drought">☀️ Drought: Types, Causes & Impacts</h3>
                <p>Drought is a prolonged period of abnormally low precipitation. Unlike floods, droughts develop slowly (insidious) but are the costliest natural disasters per event.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', margin: '30px 0' }}>
                    {[
                        { type: 'Meteorological', desc: 'Below-normal precipitation. Basic trigger.', color: '#0369a1', bg: '#f0f9ff' },
                        { type: 'Hydrological', desc: 'Reduced river flow and reservoir levels. Lags behind.', color: '#075985', bg: '#e0f2fe' },
                        { type: 'Agricultural', desc: 'Soil moisture deficit affects crops. Timing matters.', color: '#166534', bg: '#f0fdf4' },
                        { type: 'Socioeconomic', desc: 'Demand exceeds supply of economic goods.', color: '#991b1b', bg: '#fef2f2' }
                    ].map((item) => (
                        <div key={item.type} style={{ backgroundColor: item.bg, padding: '15px', borderRadius: '10px', borderLeft: `6px solid ${item.color}` }}>
                            <strong style={{ color: item.color }}>{item.type} Drought:</strong> {item.desc}
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>🏙️ Case Study: Cape Town "Day Zero" 2018</h4>
                    <p style={{ fontSize: '0.9em' }}>Cape Town nearly became the first major city to run out of water. Authorities set "Day Zero" for April 12, 2018.</p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '20px' }}>
                        <li><strong>Causes:</strong> 3 consecutive dry years + 80% population growth + failure to diversify.</li>
                        <li><strong>Measures:</strong> Rationing to 50L/person/day; emergency desalination; recycling.</li>
                        <li><strong>Lesson:</strong> Demand management and source diversification are critical for urban security.</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* CONFLICTS OVER WATER */}
                <h3 id="conflicts">⚔️ Conflicts Over Water</h3>
                <p>As freshwater becomes scarcer and demand increases, competition for water is intensifying — between states within countries, between nations sharing river basins, and between different user groups. The UN has identified water scarcity as one of the top 3 global risks for the next decade.</p>

                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0', textAlign: 'center', color: '#0369a1' }}>Global Water Conflict Hotspots</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                        {[
                            { name: 'Nile Basin', loc: 'Egypt-Ethiopia-Sudan' },
                            { name: 'Indus Basin', loc: 'India-Pakistan' },
                            { name: 'Cauvery River', loc: 'India (TN-KA)' },
                            { name: 'Mekong River', loc: 'China-SE Asia' },
                            { name: 'Jordan River', loc: 'Israel-Palestine' },
                            { name: 'Colorado River', loc: 'USA-Mexico' }
                        ].map((hotspot) => (
                            <div key={hotspot.name} style={{ padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '8px', textAlign: 'center', border: '1px solid #bae6fd' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>{hotspot.name}</div>
                                <div style={{ fontSize: '0.75em', color: '#666' }}>{hotspot.loc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '30px 0' }}>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#0369a1', marginTop: 0 }}>⚔️ 1. Cauvery Dispute (India)</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563' }}>Between Karnataka and Tamil Nadu since 1892. Karnataka needs water for urban growth (Bengaluru); TN needs it for paddy farmers (Cauvery Delta). 2018 SC order allocated: KA (284.75 TMC), TN (404.25 TMC).</p>
                    </div>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#0369a1', marginTop: 0 }}>⚔️ 2. Nile Basin Conflict</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563' }}>Grand Ethiopian Renaissance Dam (GERD) vs Egypt. Egypt depends on Nile for 97% water. Ethiopia views it as a right to development. Potential trigger for inter-state armed conflict.</p>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* DAMS SECTION */}
                <h3 id="dams">🏗️ Dams: Benefits, Impacts & Controversies</h3>
                <p>Dams have been central to modern development, but they have also been called "temples of destruction" due to massive displacement and ecological change. India has over 5,000 large dams—3rd highest globally.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ color: '#166534', marginTop: 0 }}>✅ Functions and Benefits</h4>
                        <ul style={{ fontSize: '0.85em', color: '#15803d', paddingLeft: '20px' }}>
                            <li><strong>Irrigation:</strong> Supports 30-40% of global irrigated area.</li>
                            <li><strong>Hydropower:</strong> 16% of global electricity (Renewable).</li>
                            <li><strong>Flood Control:</strong> Reservoirs absorb peak flows.</li>
                            <li><strong>Municipal Supply:</strong> Major cities depend on dam storage.</li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                        <h4 style={{ color: '#9f1239', marginTop: 0 }}>🌿 Adverse Effects</h4>
                        <ul style={{ fontSize: '0.85em', color: '#9f1239', paddingLeft: '20px' }}>
                            <li><strong>Displacement:</strong> 10k-70k people per large dam.</li>
                            <li><strong>Ecological Loss:</strong> Blocks fish migration; sediment trapping.</li>
                            <li><strong>Methane:</strong> Submerged vegetation releases greenhouse gases.</li>
                            <li><strong>Siltation:</strong> Reservoirs lose capacity over time.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>🇮🇳 Case Study: Sardar Sarovar Dam (Narmada, India)</h4>
                    <p style={{ fontSize: '0.9em' }}>One of India's most controversial projects. 163m tall. Centrepiece of Narmada Valley project.</p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8em', marginTop: '10px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#cbd5e1' }}>
                                <th style={{ padding: '8px', textAlign: 'left' }}>Aspect</th>
                                <th style={{ padding: '8px', textAlign: 'left' }}>Proponents' View</th>
                                <th style={{ padding: '8px', textAlign: 'left' }}>Critics' View (NBA)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <td style={{ padding: '8px', fontWeight: 'bold' }}>Irrigation</td>
                                <td style={{ padding: '8px' }}>1.8M hectares in Gujarat/Rajasthan</td>
                                <td style={{ padding: '8px' }}>Canals incomplete; benefits richer areas</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <td style={{ padding: '8px', fontWeight: 'bold' }}>Displacement</td>
                                <td style={{ padding: '8px' }}>40k families; adequate R&R</td>
                                <td style={{ padding: '8px' }}>250k+ affected; poor R&R execution</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', fontWeight: 'bold' }}>Environment</td>
                                <td style={{ padding: '8px' }}>Hydropower & flood control</td>
                                <td style={{ padding: '8px' }}>1,450 km² forest submerged</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>🌏 Case Study: Three Gorges Dam (China)</h4>
                    <p style={{ fontSize: '0.9em' }}>World's largest hydro project (22,500 MW). 185m high on Yangtze River.</p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '20px' }}>
                        <li><strong>Benefits:</strong> ~100 TWh/year; prevents 50M tons CO₂; heavy flood control.</li>
                        <li><strong>Costs:</strong> 1.4 million people displaced; Yangtze dolphin extinction; triggered landslides.</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* VIDEOS SECTION */}
                <h3 id="videos">🎥 Learn Through Videos</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    {[
                        { title: 'The Global Water Crisis', desc: 'Overview of scarcity and distribution.', icon: '💧' },
                        { title: 'Groundwater Depletion', desc: 'NASA satellite data on global hotspots.', icon: '🏔️' },
                        { title: 'Floods & Droughts', desc: 'Causes, ENSO, and management strategies.', icon: '🌧️' },
                        { title: 'Impact of Dams', desc: 'Ecological consequences (Three Gorges).', icon: '🏗️' }
                    ].map((video) => (
                        <div key={video.title} style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #eee' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>{video.icon}</div>
                            <h4 style={{ margin: '0 0 10px 0', fontSize: '1em' }}>{video.title}</h4>
                            <p style={{ fontSize: '0.85em', color: '#666' }}>{video.desc}</p>
                        </div>
                    ))}
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
                        Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts & Dams
                    </h4>
                </div>
                <div style={{ maxWidth: '640px', margin: '0 auto 30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/ea98IC1IOsU?si=GcRMqVIk_syeIQhs"
                            title="Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts & Dams"
                            allowFullScreen
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>

                {/* PRACTICE SECTION */}
                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>🎯 Practice & Apply Your Knowledge</h3>
                    <Quiz
                        title="Module 2.3 Quiz: Water Resources Mastery"
                        questions={quizQuestions}
                        subject="ES"
                        unitId={2}
                        moduleId={3}
                    />
                </div>

                <h3>📘 Problem-Solving Practice</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
                    <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Easy: Basin Runoff & Storage</summary>
                        <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                            <p><strong>Problem:</strong> 1,200 mm precipitation over 50,000 km². ET = 65%. Dam stores 40% of runoff.</p>
                            <p><strong>Solution:</strong> Total P = 1,200mm = 0.0012km. Area = 50k. Total Volume = 60 km³. Runoff (35%) = 21 km³. Dam Storage = 40% of 21 = 8.4 km³.</p>
                        </div>
                    </details>
                    <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Medium: Groundwater Sustainability</summary>
                        <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                            <p><strong>Problem:</strong> 500k wells * 35 m³/day * 300 days. Recharge = 4 km³/year.</p>
                            <p><strong>Solution:</strong> Extraction = 5.25 km³/year. Aquifer is over-exploited by 31.25%.</p>
                        </div>
                    </details>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* LAB EXERCISE */}
                <div style={{ backgroundColor: '#fafaf9', padding: '30px', borderRadius: '16px', border: '1px solid #e7e5e4', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#444' }}>🛠️ Hands-On Lab: Water Budget Analysis</h3>
                    <p style={{ fontSize: '0.9em' }}><strong>Objective:</strong> Construct a complete water budget for your local watershed (e.g., Ganga, Cauvery).</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.85em' }}>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Step 1: Data Collection</p>
                            <p>Use India-WRIS to collect rainfall, ET, and population data for your district.</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Step 2: Balance Equation</p>
                            <p>P = ET + Runoff + ΔStorage. Calculate if your basin is in surplus or deficit.</p>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '40px 0' }}>
                    <h3 id="cheat-sheet" style={{ margin: '0 0 20px 0' }}>📄 Quick Reference Cheat Sheet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                        <div style={{ padding: '15px', backgroundColor: '#f8fafc', borderRadius: '10px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#1e293b' }}>Stats to Remember</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', margin: 0, color: '#475569' }}>
                                <li>97.5% Saltwater</li>
                                <li>2.5% Freshwater store</li>
                                <li>0.3% Surface accessible</li>
                                <li>70% Global use: Agri</li>
                            </ul>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#f8fafc', borderRadius: '10px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#1e293b' }}>Flood & Drought Keys</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', margin: 0, color: '#475569' }}>
                                <li>Flash Floods: &lt; 6 hours</li>
                                <li>ENSO: Weakens Monsoon</li>
                                <li>Agri Drought: Soil deficit</li>
                                <li>Structural: Dams/Levees</li>
                            </ul>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#f8fafc', borderRadius: '10px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#1e293b' }}>Case Study Summary</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', margin: 0, color: '#475569' }}>
                                <li>Aral Sea: Irrigation kills lake</li>
                                <li>Punjab: GW Dark Zones</li>
                                <li>Nile: GERD vs Egypt</li>
                                <li>Narmada: NBA movement</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#334155' }}>📝 University Exam Practice</h3>

                    <div style={{ marginBottom: '25px' }}>
                        <p style={{ fontWeight: 'bold' }}>Question 1: Short Answer (5 marks) — Time: 8 minutes</p>
                        <p style={{ fontSize: '0.95em' }}>Define groundwater and explain the concept of a 'dark zone' with reference to India's groundwater crisis.</p>
                        <details style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                            <summary style={{ cursor: 'pointer', color: '#0369a1' }}>Show Marking Scheme & Model Answer</summary>
                            <div style={{ padding: '15px', borderLeft: '4px solid #0369a1', marginTop: '10px' }}>
                                <p><strong>Marking Scheme:</strong> 2 marks for definition, 3 marks for 'dark zone' explanation with India context.</p>
                                <p><strong>Model Answer:</strong> Defined as water in zone of saturation. Dark zones are areas where extraction exceeds 100% of recharge.</p>
                            </div>
                        </details>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <p style={{ fontWeight: 'bold' }}>Question 2: Analysis (10 marks) — Time: 15 minutes</p>
                        <p style={{ fontSize: '0.95em' }}>Discuss the causes and management strategies for urban flooding with reference to any two Indian cities.</p>
                        <details style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                            <summary style={{ cursor: 'pointer', color: '#0369a1' }}>Show Marking Scheme & Model Answer</summary>
                            <div style={{ padding: '15px', borderLeft: '4px solid #0369a1', marginTop: '10px' }}>
                                <p><strong>Model Answer Framework:</strong> Mention Mumbai 2005 (Mithi river) and Chennai 2015/Bengaluru. Focus on impervious surfaces and drainage failure.</p>
                            </div>
                        </details>
                    </div>

                    <div>
                        <p style={{ fontWeight: 'bold' }}>Question 3: Essay/Evaluation (15 marks) — Time: 20 minutes</p>
                        <p style={{ fontSize: '0.95em' }}>"Large dams are temples of development for some but shrines of destruction for others." Critically evaluate this statement with specific reference to the benefits and adverse effects of dams, citing appropriate case studies.</p>
                        <details style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                            <summary style={{ cursor: 'pointer', color: '#0369a1' }}>Show Marking Scheme & Model Answer Framework</summary>
                            <div style={{ padding: '15px', borderLeft: '4px solid #0369a1', marginTop: '10px' }}>
                                <p><strong>Framework:</strong> Balanced view. Section 1: Benefits (Energy, Agri). Section 2: Costs (Displacement, Ecosystem). Section 3: Case Studies (Sardar Sarovar, Three Gorges). Conclusion: Sustainable Alternatives.</p>
                            </div>
                        </details>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>⚠️ Common Exam Pitfall</h4>
                    <p style={{ fontSize: '0.85em', color: '#b91c1c' }}>Don't confuse total freshwater (2.5%) with accessible surface freshwater (0.3%). Most freshwater is locked in ice. Also, remember agricultural drought can happen even with "normal" rain if timing is wrong.</p>
                </div>
            </section>
        </div>
    );
};

export default Module2_3;
