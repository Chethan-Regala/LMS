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
                    <p style={{ fontSize: '0.95em', color: '#4b5563' }}>Once the world's 4th largest lake (68,000 km²), the Aral Sea in Central Asia has shrunk to less than 10% of its original size due to Soviet-era irrigation projects diverting the Amu Darya and Syr Darya rivers. By 2007, the lake had split into three remnants.</p>
                    <ul style={{ fontSize: '0.9em', color: '#4b5563', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '6px' }}><strong>Root Cause:</strong> 1960s–70s: Soviet cotton farming diverted up to 90% of inflow rivers for irrigation in Uzbekistan & Kazakhstan.</li>
                        <li style={{ marginBottom: '6px' }}><strong>Consequences:</strong> Fishing industry collapsed (60,000 jobs lost); exposed sea bed became salt desert; local climate became harsher; birth defects and cancer rates soared from salt/pesticide dust storms.</li>
                        <li style={{ marginBottom: '6px' }}><strong>Lesson:</strong> Over-extraction of surface water for agriculture can permanently destroy entire ecosystems and regional economies.</li>
                        <li><strong>Status:</strong> Considered the worst man-made environmental catastrophe of the 20th century. Partial restoration of the Small Aral Sea in Kazakhstan shows promise through dam construction.</li>
                    </ul>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>🇮🇳 India's Surface Water Crisis</h4>
                    <ul style={{ fontSize: '0.9em', color: '#0369a1', paddingLeft: '20px', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Cauvery Dispute:</strong> Tamil Nadu and Karnataka have disputed Cauvery river water for over 150 years. The river supports ~3 million farmers.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Ganga Pollution:</strong> The Ganga receives 3 billion litres of untreated sewage daily, plus industrial effluents. The National Mission for Clean Ganga (Namami Gange, 2015) was launched to address this.</li>
                        <li><strong>Dying Rivers:</strong> Many seasonal rivers in Rajasthan, Maharashtra, and AP dry up completely before reaching the sea due to excessive irrigation withdrawals.</li>
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

                <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '12px', border: '1px solid #fecdd3', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#9f1239' }}>📊 India's Groundwater Crisis — The Punjab Example</h4>
                    <ul style={{ fontSize: '0.9em', color: '#4b5563', paddingLeft: '20px', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Context:</strong> Punjab and Haryana — India's "Green Revolution" breadbasket — pump enormous volumes of groundwater for wheat and rice cultivation. India extracts 253 km³/year of groundwater (world's highest), accounting for 25% of global groundwater use.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Scale of Depletion:</strong> The water table in Punjab is falling at 0.5–1 metre per year in many districts. NASA GRACE satellite data (2002–2016) showed a loss of 54 km³ of groundwater in northwestern India — equivalent to depleting Lake Mead 5 times over.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Consequences:</strong> Small and marginal farmers abandoning wells; over 30% of blocks in Punjab are "dark zones" (critically over-exploited); farmers spend ₹50,000–1,00,000 per year on electricity for pumping as wells go deeper; increasing debt spiral.</li>
                        <li><strong>Root Cause:</strong> The combination of free electricity for farmers, Minimum Support Price for water-intensive crops (paddy), and lack of metered extraction creates perverse incentives for over-pumping.</li>
                    </ul>
                    <div style={{ backgroundColor: '#fef2f2', padding: '12px', borderRadius: '8px', marginTop: '15px', fontSize: '0.85em' }}>
                        <strong>⚠️ Government Response:</strong> Punjab Preservation of Subsoil Water Act (2009) delayed paddy transplanting to June 10–15 to reduce evapotranspiration losses. The National Aquifer Mapping Programme (NAQUIM) is mapping all major aquifers for sustainable management.
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '25px 0', overflowX: 'auto' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>🌐 Global Groundwater Depletion Comparison</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Country/Region</th>
                                <th style={{ padding: '10px', textAlign: 'center' }}>Annual Extraction (km³)</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Issue</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Critical Consequence</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { country: 'India', ext: '253', issue: 'Over-extraction for irrigation', cons: 'NW India water table falling 1m/yr' },
                                { country: 'USA', ext: '112', issue: 'Ogallala Aquifer depletion', cons: 'Texas/Kansas facing agricultural collapse' },
                                { country: 'China', ext: '112', issue: 'North China Plain over-pumping', cons: 'Beijing region sinking (subsidence)' },
                                { country: 'Pakistan', ext: '65', issue: 'Indus Plain extraction', cons: 'Salinization of coastal aquifers' },
                                { country: 'Mexico', ext: '29', issue: 'Mexico City aquifer', cons: 'City sinking 9+ metres since 1900' },
                            ].map((row, i) => (
                                <tr key={row.country} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.country}</td>
                                    <td style={{ padding: '10px', textAlign: 'center' }}>{row.ext}</td>
                                    <td style={{ padding: '10px' }}>{row.issue}</td>
                                    <td style={{ padding: '10px' }}>{row.cons}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>🛡️ Flood Management Strategies</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
                        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#0369a1' }}>🏗️ Structural Measures</p>
                            <p style={{ fontSize: '0.85em', margin: 0, color: '#475569' }}>Dams & reservoirs, embankments (levees/bunds), river channelization, retention basins, floodways</p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#166534' }}>📋 Non-Structural Measures</p>
                            <p style={{ fontSize: '0.85em', margin: 0, color: '#475569' }}>Land-use regulation (no construction in 100-year floodplains), flood forecasting & early warning systems, flood insurance, community preparedness</p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#166534' }}>🌿 Ecological Approaches</p>
                            <p style={{ fontSize: '0.85em', margin: 0, color: '#475569' }}>Reforestation of catchments, restoration of wetlands and floodplains as natural buffers, urban green infrastructure (rain gardens, permeable pavements)</p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#7c3aed' }}>🗺️ Flood Zonation</p>
                            <p style={{ fontSize: '0.85em', margin: 0, color: '#475569' }}>Mapping flood-prone areas at different return periods (25-year, 50-year, 100-year floods) for planning purposes</p>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '25px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#991b1b' }}>🏙️ Case Study: Mumbai Floods 2005</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}>On July 26, 2005, Mumbai received <strong>944 mm of rainfall in 24 hours</strong> — the highest one-day rainfall ever recorded in India. The city was submerged, killing over 1,094 people, paralyzing the financial capital for days.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                        <div style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '8px', fontSize: '0.85em' }}>
                            <strong style={{ color: '#b91c1c' }}>⛈️ Natural Factor:</strong>
                            <p style={{ margin: '5px 0 0', color: '#4b5563' }}>Unprecedented intensity of a monsoon depression over the Western Ghats and Arabian Sea.</p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '8px', fontSize: '0.85em' }}>
                            <strong style={{ color: '#b91c1c' }}>🏙️ Human Factors:</strong>
                            <p style={{ margin: '5px 0 0', color: '#4b5563' }}>Encroachment on Mithi River floodplain; mangrove destruction reduced by 40% since 1990; stormwater drainage system built in 1860 for 50 mm/day capacity; unplanned construction on Aarey milk colony lands.</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#fef9c3', padding: '12px', borderRadius: '8px', marginTop: '12px', fontSize: '0.85em' }}>
                        <strong>📋 Response:</strong> BRIMSTOWAD (Brihanmumbai Storm Water Drains) project launched; Mithi River rejuvenation; mangrove protection laws strengthened; Coastal Regulation Zone (CRZ) norms enforced more strictly.
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
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}>In early 2018, Cape Town (South Africa, pop. 4 million) nearly became the first major city in the modern era to run out of water. Authorities set "Day Zero" — the day taps would be turned off — as April 12, 2018, before an emergency response averted it.</p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '20px', color: '#4b5563' }}>
                        <li style={{ marginBottom: '6px' }}><strong>Causes:</strong> Three consecutive years of below-average rainfall (2015–17); population growth of 80% since 1995 without proportional infrastructure growth; failure to diversify water sources.</li>
                        <li style={{ marginBottom: '6px' }}><strong>Emergency Measures:</strong> Water rationing to 50L per person/day (later 13.5L); 200 water distribution points planned; emergency desalination plants fast-tracked.</li>
                        <li style={{ marginBottom: '6px' }}><strong>Resolution:</strong> Conservation reduced consumption by 50%; winter 2018 rains partially refilled dams. "Day Zero" was postponed indefinitely but structural vulnerability remains.</li>
                        <li><strong>Global Lesson:</strong> Urban water security requires demand management, source diversification (recycled water, desalination, rainwater harvesting), and long-term climate adaptation planning.</li>
                    </ul>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>🌱 Drought Management Strategies</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                        {[
                            { title: 'Rainwater Harvesting', detail: 'Johads, check dams, percolation tanks, rooftop RWH — traditional and modern techniques to maximize infiltration' },
                            { title: 'Drip/Micro-Irrigation', detail: 'Reduces agricultural water use by 30–50% vs. flood irrigation' },
                            { title: 'Drought-Resistant Crops', detail: 'Millets (jowar, bajra, ragi) require 60–70% less water than paddy' },
                            { title: 'MGNREGS', detail: "India's employment guarantee scheme funds watershed development, pond creation, and groundwater recharge works" },
                            { title: 'Early Warning Systems', detail: 'NDMC (National Drought Management Center), SPI (Standardized Precipitation Index) monitoring' },
                            { title: 'River Interlinking', detail: 'National River Linking Project — transferring water from surplus basins to deficit basins' },
                        ].map((item) => (
                            <div key={item.title} style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 6px 0', fontSize: '0.85em', color: '#166534' }}>{item.title}</p>
                                <p style={{ margin: 0, fontSize: '0.8em', color: '#475569' }}>{item.detail}</p>
                            </div>
                        ))}
                    </div>
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

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '25px 0' }}>
                    <h4 style={{ margin: '0 0 12px 0', color: '#1e293b' }}>Causes of Water Conflicts</h4>
                    <ul style={{ fontSize: '0.9em', color: '#475569', paddingLeft: '20px', margin: 0 }}>
                        <li style={{ marginBottom: '7px' }}><strong>Shared Rivers (Transboundary):</strong> 263 river basins cross international borders, shared by 145 countries. Upstream-downstream asymmetry creates inherent tension: upstream nations can dam or divert water, affecting downstream nations.</li>
                        <li style={{ marginBottom: '7px' }}><strong>Population Growth & Urbanization:</strong> Rising demand from growing populations increases per-capita competition.</li>
                        <li style={{ marginBottom: '7px' }}><strong>Climate Change:</strong> Changes in precipitation patterns create new scarcities and disrupt established water-sharing arrangements.</li>
                        <li style={{ marginBottom: '7px' }}><strong>Agricultural vs. Domestic Use:</strong> In India, inter-state conflicts often arise from states wanting to protect irrigation rights for their farmers.</li>
                        <li><strong>Lack of Legal Frameworks:</strong> Absence of enforceable international water law; domestic river water tribunals are slow.</li>
                    </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', margin: '30px 0' }}>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                        <h4 style={{ color: '#0369a1', marginTop: 0 }}>⚔️ 1. Cauvery Water Dispute (India)</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563' }}>The Cauvery River originates in Karnataka and flows 800 km to Tamil Nadu. The dispute has raged since 1892, centred on water allocation for irrigation.</p>
                        <ul style={{ fontSize: '0.82em', paddingLeft: '18px', color: '#4b5563' }}>
                            <li style={{ marginBottom: '5px' }}><strong>Historical Accord:</strong> 1924 Agreement between Mysore Princely State and Madras Presidency; became contentious after states reorganization (1956)</li>
                            <li style={{ marginBottom: '5px' }}><strong>Tribunal:</strong> Cauvery Water Disputes Tribunal set up 1990; gave final award 2007 allocating 419 TMC to Tamil Nadu, 270 TMC to Karnataka</li>
                            <li style={{ marginBottom: '5px' }}><strong>Supreme Court:</strong> 2018 SC order modified: Karnataka 284.75 TMC, Tamil Nadu 404.25 TMC, Kerala 30 TMC, Puducherry 7 TMC</li>
                            <li><strong>Violence:</strong> Periodic riots, road blockades, loss of life — notably 1991 and 2016 in Bengaluru and Mysuru</li>
                        </ul>
                    </div>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                        <h4 style={{ color: '#0369a1', marginTop: 0 }}>⚔️ 2. Nile Basin Conflict (Egypt–Ethiopia–Sudan)</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563' }}>The Grand Ethiopian Renaissance Dam (GERD) — Africa's largest hydro project — began filling in 2020, triggering an existential crisis for Egypt which depends on the Nile for 97% of its water.</p>
                        <ul style={{ fontSize: '0.82em', paddingLeft: '18px', color: '#4b5563' }}>
                            <li style={{ marginBottom: '5px' }}><strong>Scale:</strong> GERD capacity 74 billion m³; filling over 4–7 years would reduce downstream flow during filling period</li>
                            <li style={{ marginBottom: '5px' }}><strong>Egypt's Position:</strong> 1959 Nile Waters Treaty gave Egypt 55.5 BCM/year; Ethiopia is violating this unilaterally</li>
                            <li style={{ marginBottom: '5px' }}><strong>Ethiopia's Position:</strong> Colonial-era treaties have no legitimacy; Ethiopia has the right to develop its resources</li>
                            <li><strong>Status:</strong> AU-mediated talks ongoing since 2020; no binding agreement reached; remains a potential trigger for inter-state armed conflict</li>
                        </ul>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>🤝 Resolution Mechanisms for Water Conflicts</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                        {[
                            { title: 'International Law', detail: 'Helsinki Rules (1966), UN Convention on Non-Navigational Uses of International Watercourses (1997) — principles of equitable use, no-harm rule, cooperation' },
                            { title: 'Water Treaties', detail: 'Indus Waters Treaty (India-Pakistan, 1960), Mahakali Treaty (India-Nepal, 1996) — bilateral agreements on shared rivers' },
                            { title: 'River Basin Orgs', detail: 'Mekong River Commission, Nile Basin Initiative — multilateral platforms for data sharing and negotiation' },
                            { title: 'Domestic Tribunals', detail: "India's Inter-State River Water Disputes Act (1956) — establishes Tribunals for Cauvery, Krishna, Godavari etc." },
                            { title: 'Water Markets', detail: "Tradeable water rights (Australia's Murray-Darling Basin) — economic instruments for efficient allocation" },
                        ].map((item) => (
                            <div key={item.title} style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 6px 0', fontSize: '0.85em', color: '#075985' }}>{item.title}</p>
                                <p style={{ margin: 0, fontSize: '0.8em', color: '#475569' }}>{item.detail}</p>
                            </div>
                        ))}
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
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}>The world's largest hydroelectric project on the Yangtze River (22,500 MW capacity; 185m high; 660 km long reservoir). Completed 2012.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '12px' }}>
                        <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: '8px', fontSize: '0.85em' }}>
                            <strong style={{ color: '#166534' }}>✅ Benefits:</strong>
                            <ul style={{ margin: '6px 0 0', paddingLeft: '16px', color: '#15803d' }}>
                                <li>Generates ~100 TWh/year (prevents 50 million tons CO₂ annually)</li>
                                <li>Flood control preventing catastrophic Yangtze valley floods</li>
                                <li>Yangtze navigation improved for larger vessels</li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#fff1f2', padding: '12px', borderRadius: '8px', fontSize: '0.85em' }}>
                            <strong style={{ color: '#9f1239' }}>❌ Costs:</strong>
                            <ul style={{ margin: '6px 0 0', paddingLeft: '16px', color: '#be185d' }}>
                                <li>1.4 million people displaced (100+ towns and 1,600 villages submerged)</li>
                                <li>Yangtze river dolphin (Baiji) driven to extinction; Chinese sturgeon critically endangered</li>
                                <li>Massive landslides triggered; algal blooms in reservoir; reservoir-induced seismicity</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#fffbeb', padding: '10px', borderRadius: '8px', marginTop: '12px', fontSize: '0.84em' }}>
                        <strong>Lesson:</strong> Even technically successful mega-dams carry enormous social and ecological costs that are often underestimated in project planning.
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0', overflowX: 'auto' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>🌱 Sustainable Alternatives to Large Dams</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#334155', color: '#fff' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Aspect</th>
                                <th style={{ padding: '10px', textAlign: 'center' }}>Large Dams</th>
                                <th style={{ padding: '10px', textAlign: 'center' }}>Small/Micro Dams</th>
                                <th style={{ padding: '10px', textAlign: 'center' }}>Watershed Management</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Displacement', '10,000–100,000+', 'Minimal', 'None'],
                                ['Ecological Impact', 'Severe — blocks migration', 'Moderate', 'Positive — recharges GW'],
                                ['Cost', 'Very high (often overrun)', 'Low–moderate', 'Low'],
                                ['Construction Time', '10–25 years', '1–3 years', 'Ongoing'],
                                ['Flood Control', 'Excellent', 'Limited', 'Good (upstream retention)'],
                                ['Power Generation', 'Large-scale hydropower', 'Small-scale only', 'None'],
                            ].map((row, i) => (
                                <tr key={row[0]} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                                    <td style={{ padding: '9px', fontWeight: 'bold' }}>{row[0]}</td>
                                    <td style={{ padding: '9px', textAlign: 'center', color: '#9f1239' }}>{row[1]}</td>
                                    <td style={{ padding: '9px', textAlign: 'center', color: '#0369a1' }}>{row[2]}</td>
                                    <td style={{ padding: '9px', textAlign: 'center', color: '#166534' }}>{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

                    <details style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#166534' }}>📕 Easy: Basin Runoff & Dam Storage</summary>
                        <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                            <p><strong>Problem:</strong> A river basin receives annual precipitation of 1,200 mm over an area of 50,000 km². If evapotranspiration accounts for 65% of precipitation and the remainder becomes runoff, calculate (a) the annual volume of runoff in km³, and (b) if a dam stores 40% of runoff, what volume is stored?</p>
                            <div style={{ borderLeft: '4px solid #166534', paddingLeft: '15px', marginTop: '10px' }}>
                                <p style={{ margin: '0 0 6px', fontWeight: 'bold', color: '#166534' }}>Step-by-Step Solution:</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 1 — Total Precipitation Volume:</strong> P = 1,200 mm = 1.2 m; Area = 50,000 km² = 50,000 × 10⁶ m²; Volume = 1.2 × 50,000 × 10⁶ = 60,000 × 10⁶ m³ = 60 km³</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 2 — Runoff (35% of precipitation):</strong> Runoff = 0.35 × 60 km³ = 21 km³/year</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 3 — Dam Storage (40% of runoff):</strong> Storage = 0.40 × 21 = 8.4 km³</p>
                                <p style={{ margin: 0 }}><strong>Final Answers:</strong> (a) Annual runoff = 21 km³; (b) Dam storage = 8.4 km³ per year</p>
                            </div>
                        </div>
                    </details>

                    <details style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#9a3412' }}>📙 Medium: Groundwater Sustainability Assessment</summary>
                        <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                            <p><strong>Problem:</strong> A district has 500,000 tube wells pumping an average of 35 m³/day each, 300 days/year. The district's aquifer has a safe yield (sustainable recharge) of 4 km³/year. (a) Calculate annual extraction. (b) Determine if the aquifer is over-exploited. (c) By what % does extraction exceed recharge? (d) Suggest two immediate management interventions.</p>
                            <div style={{ borderLeft: '4px solid #f97316', paddingLeft: '15px', marginTop: '10px' }}>
                                <p style={{ margin: '0 0 6px', fontWeight: 'bold', color: '#9a3412' }}>Step-by-Step Solution:</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 1 — Annual Extraction:</strong> = 500,000 wells × 35 m³/day × 300 days = 5,250,000,000 m³ = 5.25 km³/year</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 2 — Compare with Recharge:</strong> Extraction (5.25) &gt; Safe yield (4.0) → YES, the aquifer is over-exploited</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 3 — Excess %:</strong> = (5.25 − 4.0) / 4.0 × 100 = 1.25/4.0 × 100 = <strong>31.25% above sustainable yield</strong></p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 4 — Interventions:</strong> (i) Restrict pumping hours / metered water allocation; (ii) Launch artificial recharge programme — inject treated water into aquifer, build percolation ponds; (iii) Shift to less water-intensive crops (maize/millets vs. rice)</p>
                                <p style={{ margin: 0, fontStyle: 'italic', color: '#b45309' }}>Key Insight: 31% over-exploitation means the water table will fall continuously, eventually making wells uneconomic and the aquifer permanently damaged.</p>
                            </div>
                        </div>
                    </details>

                    <details style={{ backgroundColor: '#fdf4ff', padding: '20px', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#7c3aed' }}>📕 Hard: Dam Water Budget & Irrigation Analysis (Sardar Sarovar)</summary>
                        <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                            <p><strong>Problem:</strong> The Narmada River carries 45 BCM (billion cubic metres) of water annually. The Sardar Sarovar Dam has a gross storage capacity of 9.5 BCM but loses 15% to evaporation and 8% to silt accumulation annually. Downstream states claim 35 BCM/year is needed for ecosystems and fisheries (environmental flow). (a) Calculate net usable storage. (b) After environmental flow release, how much water is available for human use? (c) If 60% is allocated to irrigation (assuming 65% efficiency), how many hectares can be irrigated at a water requirement of 8,000 m³/hectare/year? (d) Critically evaluate whether this represents sustainable dam management.</p>
                            <div style={{ borderLeft: '4px solid #7c3aed', paddingLeft: '15px', marginTop: '10px' }}>
                                <p style={{ margin: '0 0 6px', fontWeight: 'bold', color: '#7c3aed' }}>Step-by-Step Solution:</p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 1 — Net Usable Storage:</strong> Gross = 9.5 BCM; Less evaporation (15%) = 9.5 × 0.15 = 1.425 BCM; Less silt loss (8%) = 9.5 × 0.08 = 0.76 BCM; <strong>Net storage = 9.5 − 1.425 − 0.76 = 7.315 BCM</strong></p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 2 — Water for Human Use:</strong> Total annual flow = 45 BCM; Environmental flow = 35 BCM; Available = 45 − 35 = 10 BCM; But dam can only capture 7.315 BCM → limiting factor is storage; <strong>Available for human use = 7.315 BCM</strong></p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 3 — Irrigation Area:</strong> Irrigation allocation = 60% × 7.315 = 4.389 BCM = 4,389 × 10⁶ m³; At 65% irrigation efficiency, effective water = 4,389 × 10⁶ × 0.65 = 2,852.85 × 10⁶ m³; Area = 2,852.85 × 10⁶ / 8,000 = <strong>356,606 hectares ≈ 3.57 lakh hectares</strong></p>
                                <p style={{ margin: '0 0 5px' }}><strong>Step 4 — Critical Evaluation:</strong> (i) Environmental flow of 35 BCM (78% of river flow) is ambitious — many rivers release far less (&lt;10%); (ii) 3.57 lakh hectares is 20% of the 1.8 million hectares claimed → overestimation in project reports; (iii) Silt accumulation will reduce storage by ~8% annually — dam lifespan may be 50–70 years, not 200; (iv) Social costs (250,000 displaced) not captured in this analysis.</p>
                                <p style={{ margin: 0, fontStyle: 'italic', color: '#7c3aed' }}>Conclusion: Dam provides genuine irrigation benefit but at much lower scale than claimed, and sustainability depends critically on maintaining environmental flows and managing siltation.</p>
                            </div>
                        </div>
                    </details>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ backgroundColor: '#fafaf9', padding: '30px', borderRadius: '16px', border: '1px solid #e7e5e4', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#444' }}>🛠️ Hands-On Lab: Water Budget Analysis for Your Local Watershed</h3>
                    <p style={{ fontSize: '0.85em', color: '#666', margin: '0 0 20px' }}><strong>Objective:</strong> Construct a complete water budget for a chosen river basin or district, calculate the water deficit/surplus, identify over-utilization, and propose sustainable management strategies. | ⏱️ Estimated Time: 45–60 minutes</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', fontSize: '0.85em' }}>
                        {[
                            { step: 'Step 1: Choose a Basin', detail: 'Select your home state\'s major river basin (e.g., Krishna, Godavari, Cauvery, Ganga, Brahmaputra). Alternatively use the Cauvery basin data provided in this module.' },
                            { step: 'Step 2: Collect Data', detail: 'From India-WRIS (wris.gov.in) or state SWRD, collect: Annual rainfall (mm), Evapotranspiration (mm), Runoff coefficient, Population, Agricultural area (ha)' },
                            { step: 'Step 3: Calculate Water Availability', detail: 'Use formula: Total Water = Rainfall × Basin Area × Runoff Coefficient; subtract evapotranspiration losses' },
                            { step: 'Step 4: Calculate Water Demand', detail: 'Sector-wise demand: Irrigation (40% of cropped area × 6,000 m³/ha), Domestic (135 L/capita/day × population), Industrial (estimate from state data)' },
                            { step: 'Step 5: Compute Water Budget', detail: 'Balance = Availability − Demand; Determine if basin is water-surplus or water-deficit. Formula: P = ET + R + ΔS' },
                            { step: 'Step 6: Groundwater Assessment', detail: 'Find CGWB data on groundwater recharge vs. extraction in your district; categorize as safe/semi-critical/critical/over-exploited' },
                            { step: 'Step 7: Map Flood & Drought Vulnerability', detail: 'Using NDMA flood atlas and drought frequency data, map high-risk zones in your chosen basin' },
                            { step: 'Step 8: Identify Conflicts', detail: 'List any existing water allocation disputes in your basin; identify stakeholders and their interests' },
                            { step: 'Step 9: Propose Interventions', detail: 'Based on analysis, propose 5 specific water management interventions with cost-effectiveness reasoning' },
                        ].map((item) => (
                            <div key={item.step} style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #e7e5e4' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px', color: '#444', fontSize: '0.9em' }}>{item.step}</p>
                                <p style={{ margin: 0, color: '#666' }}>{item.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: '8px', marginTop: '15px', fontSize: '0.85em' }}>
                        <strong style={{ color: '#166534' }}>🎓 Grading Rubric (50 marks):</strong> Data collection & citation of sources: 10 marks | Accuracy of water budget calculation: 15 marks | Identification of water stress indicators: 10 marks | Quality and feasibility of management recommendations: 10 marks | Presentation clarity and use of diagrams: 5 marks
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '40px 0' }}>
                    <h3 id="cheat-sheet" style={{ margin: '0 0 20px 0' }}>📄 Quick Reference Cheat Sheet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>

                        <div style={{ backgroundColor: '#f0f9ff', padding: '18px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#075985' }}>💧 Water Distribution</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#0369a1' }}>
                                <li style={{ marginBottom: '4px' }}>Total Earth water: 1.386 billion km³</li>
                                <li style={{ marginBottom: '4px' }}>Saltwater (oceans): 97.5%</li>
                                <li style={{ marginBottom: '4px' }}>Total freshwater: 2.5%</li>
                                <li style={{ marginBottom: '4px' }}>Glaciers/Ice: 68.7% of freshwater</li>
                                <li style={{ marginBottom: '4px' }}>Groundwater: 30.1% of freshwater</li>
                                <li>Surface freshwater: ~0.3% of total</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fef2f2', padding: '18px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#9f1239' }}>🌊 Types of Floods</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#be185d' }}>
                                <li style={{ marginBottom: '4px' }}><strong>Fluvial:</strong> River overflow (slow onset)</li>
                                <li style={{ marginBottom: '4px' }}><strong>Flash:</strong> Rapid, intense rainfall (&lt;6 hrs)</li>
                                <li style={{ marginBottom: '4px' }}><strong>Coastal:</strong> Storm surge / tsunami</li>
                                <li style={{ marginBottom: '4px' }}><strong>Urban:</strong> Impervious surface runoff</li>
                                <li><strong>Glacial:</strong> GLOF — ice dam burst</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fffbeb', padding: '18px', borderRadius: '12px', border: '1px solid #fde68a' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#92400e' }}>☀️ Types of Drought</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#78350f' }}>
                                <li style={{ marginBottom: '4px' }}><strong>Meteorological:</strong> Below-normal rainfall</li>
                                <li style={{ marginBottom: '4px' }}><strong>Hydrological:</strong> Reduced river/GW levels</li>
                                <li style={{ marginBottom: '4px' }}><strong>Agricultural:</strong> Soil moisture deficit</li>
                                <li style={{ marginBottom: '4px' }}><strong>Socioeconomic:</strong> Demand &gt; supply</li>
                                <li><strong>Cascade:</strong> Met → Hydro → Agri → Socio</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fff1f2', padding: '18px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#9f1239' }}>⚔️ Key Water Conflicts</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#be185d' }}>
                                <li style={{ marginBottom: '4px' }}>Cauvery: Karnataka-TN (154+ years)</li>
                                <li style={{ marginBottom: '4px' }}>Nile/GERD: Egypt-Ethiopia</li>
                                <li style={{ marginBottom: '4px' }}>Indus: India-Pakistan (IWT 1960)</li>
                                <li style={{ marginBottom: '4px' }}>Mekong: China-SE Asia</li>
                                <li>Colorado: USA-Mexico</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#f8fafc', padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>🏗️ Dam Facts</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#475569' }}>
                                <li style={{ marginBottom: '4px' }}>World large dams: ~57,000</li>
                                <li style={{ marginBottom: '4px' }}>India large dams: 5,000+ (3rd highest)</li>
                                <li style={{ marginBottom: '4px' }}>Three Gorges: 22,500 MW; displaced 1.4M</li>
                                <li style={{ marginBottom: '4px' }}>Sardar Sarovar: 163m; Narmada, Gujarat</li>
                                <li>Benefits: Water, power, flood control | Cost: Displacement, delta erosion</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#f0fdf4', padding: '18px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#166534' }}>📀 Key Formulas</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#15803d' }}>
                                <li style={{ marginBottom: '4px' }}><strong>Water Budget:</strong> P = ET + R + ΔS</li>
                                <li style={{ marginBottom: '4px' }}><strong>Runoff Volume:</strong> Q = P × A × C</li>
                                <li style={{ marginBottom: '4px' }}><strong>Water Stress Index:</strong> WSI = Withdrawal / Availability</li>
                                <li style={{ marginBottom: '4px' }}>WSI &gt; 0.4 = Water scarcity</li>
                                <li><strong>Per capita:</strong> Total Volume / Population</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fdf4ff', padding: '18px', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#7c3aed' }}>🌱 Management Strategies</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#7c3aed' }}>
                                <li style={{ marginBottom: '4px' }}>Rainwater Harvesting (Johad, RWH)</li>
                                <li style={{ marginBottom: '4px' }}>Drip/Micro-irrigation (saves 30–50%)</li>
                                <li style={{ marginBottom: '4px' }}>Groundwater recharge structures</li>
                                <li style={{ marginBottom: '4px' }}>Watershed management + Afforestation</li>
                                <li style={{ marginBottom: '4px' }}>Crop diversification to millets</li>
                                <li>Environmental flows for rivers</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fff7ed', padding: '18px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#9a3412' }}>⚠️ Don't Confuse!</p>
                            <ul style={{ fontSize: '0.82em', paddingLeft: '16px', margin: 0, color: '#c2410c' }}>
                                <li style={{ marginBottom: '4px' }}>❌ Surface water ≠ All freshwater</li>
                                <li style={{ marginBottom: '4px' }}>❌ GW recharge ≠ Extraction rate</li>
                                <li style={{ marginBottom: '4px' }}>❌ Meteorological drought ≠ Famine</li>
                                <li style={{ marginBottom: '4px' }}>❌ Large dams = ONLY flood solution</li>
                                <li>❌ Environmental flow = minimum, not optional</li>
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
                                <p><strong>Marking Scheme:</strong> Definition of groundwater: 1 mark | Explanation of aquifer types: 1 mark | Definition/criteria of dark zone: 1 mark | Specific data on India's groundwater status: 1 mark | Consequence/significance: 1 mark</p>
                                <p><strong>Model Answer:</strong> Groundwater is water stored beneath the Earth's surface in aquifer formations — layers of permeable rock, gravel, or sand saturated with water. It constitutes ~30% of all freshwater and supplies 50% of global drinking water.</p>
                                <p>A 'dark zone' (also 'over-exploited zone' in CGWB terminology) is an administrative block where annual groundwater extraction exceeds the net annual recharge (extraction: recharge ratio &gt; 100%). India has over 1,034 over-exploited blocks across 14 states. Punjab has more than 30% of its blocks classified as dark zones due to excessive pumping for paddy irrigation. Consequences include: falling water tables, increased pumping costs for farmers, saltwater intrusion in coastal areas, and eventual permanent loss of aquifer storage capacity as compaction occurs.</p>
                            </div>
                        </details>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <p style={{ fontWeight: 'bold' }}>Question 2: Analysis (10 marks) — Time: 15 minutes</p>
                        <p style={{ fontSize: '0.95em' }}>Discuss the causes and management strategies for urban flooding with reference to any two Indian cities.</p>
                        <details style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                            <summary style={{ cursor: 'pointer', color: '#0369a1' }}>Show Marking Scheme & Model Answer</summary>
                            <div style={{ padding: '15px', borderLeft: '4px solid #0369a1', marginTop: '10px' }}>
                                <p><strong>Marking Scheme:</strong> Definition/introduction: 1 mark | Natural causes: 2 marks | Anthropogenic causes: 3 marks | Case study 1 (Mumbai or similar): 2 marks | Case study 2 (Chennai or Bengaluru): 1 mark | Management strategies: 3 marks</p>
                                <p><strong>Key Points:</strong> Urban flooding is caused by: (1) Impervious surface expansion — concrete/asphalt prevents infiltration; (2) Encroachment on wetlands and floodplains; (3) Outdated drainage infrastructure; (4) Deforestation in catchments.</p>
                                <p><strong>Mumbai (2005):</strong> 944 mm rainfall in 24 hours overwhelmed 1860-era drainage system (capacity 25 mm/hour). Mithi River floodplain encroachment and mangrove destruction removed natural buffers. 1,094 deaths. Response: BRIMSTOWAD project, Mithi River rejuvenation.</p>
                                <p><strong>Chennai (2015):</strong> November-December 2015 extreme rainfall (1,218 mm in Nov). Pallikaranai wetland (5,000 ha → 600 ha remaining) had been converted to IT corridor, removing flood buffering. 400+ deaths, ₹20,000 crore losses. Response: CRZ norms enforcement, wetland restoration.</p>
                                <p><strong>Management:</strong> Structural: stormwater drains upgrade, retention basins, floodways. Non-structural: floodplain zonation, wetland restoration, permeable pavements, early warning systems, flood insurance.</p>
                            </div>
                        </details>
                    </div>

                    <div>
                        <p style={{ fontWeight: 'bold' }}>Question 3: Essay/Evaluation (15 marks) — Time: 20 minutes</p>
                        <p style={{ fontSize: '0.95em' }}>"Large dams are temples of development for some but shrines of destruction for others." Critically evaluate this statement with specific reference to the benefits and adverse effects of dams, citing appropriate case studies.</p>
                        <details style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                            <summary style={{ cursor: 'pointer', color: '#0369a1' }}>Show Marking Scheme & Model Answer Framework</summary>
                            <div style={{ padding: '15px', borderLeft: '4px solid #0369a1', marginTop: '10px' }}>
                                <p><strong>Marking Scheme:</strong> Introduction with context (Nehru's "temples" quote): 2 marks | Benefits with data: 4 marks | Adverse effects (social, ecological, economic): 4 marks | Case studies (Sardar Sarovar + one global): 3 marks | Balanced conclusion with sustainable alternatives: 2 marks</p>
                                <p><strong>Introduction:</strong> India's first PM Jawaharlal Nehru called large dams "the temples of modern India." This captures the dual nature of dams: viewed as transformative development tools by planners, yet experienced as catastrophic disruptions by displaced communities and ecologists.</p>
                                <p><strong>Benefits:</strong> Irrigation of 30–40% of global irrigated area; India's dam irrigation supports ~40 million hectares; 16% of global electricity from hydropower; Three Gorges Dam generates 100 TWh/year avoiding 50 million tonnes CO₂; reservoir storage enables year-round water supply; flood control.</p>
                                <p><strong>Adverse Effects:</strong> Social: India's large dams displaced 21–33 million people; Adivasi communities disproportionately affected; R&R often inadequate. Ecological: sediment trapping causes delta erosion; fish migration blocked; methane from submerged biomass; reservoir-induced seismicity.</p>
                                <p><strong>Sardar Sarovar:</strong> Irrigates 3.57 lakh ha (calculated) vs. 1.8 million ha (claimed); displaced 250,000+; Narmada Bachao Andolan protest led by Medha Patkar; World Bank withdrew 1993.</p>
                                <p><strong>Conclusion:</strong> Sustainable dam management requires: rigorous EIA; full implementation of R&R; environmental flow maintenance; complement with demand-side measures (drip irrigation, RWH) and small/micro alternatives.</p>
                            </div>
                        </details>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '25px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#991b1b' }}>⚠️ Common Exam Pitfalls</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { pitfall: 'Stating "Only 2.5% of Earth\'s water is freshwater" as the answer to "accessible freshwater"', fix: '2.5% is total freshwater, but most is locked in glaciers and groundwater. Accessible surface freshwater is only ~0.3% of total water. Always specify which you mean.' },
                            { pitfall: 'Confusing Meteorological and Agricultural Drought', fix: 'Students say "drought means no rain" — which is meteorological drought. Agricultural drought = soil moisture deficit during crop growth period — timing matters more than annual total.' },
                            { pitfall: 'Saying "Dams only have benefits"', fix: 'Exam questions specifically test critical evaluation of dams. Always present both benefits (water storage, hydropower, flood control) AND adverse effects (displacement, delta erosion, fish migration, methane emissions) with specific examples.' },
                            { pitfall: 'Stating that the Indus Waters Treaty "solved" India-Pakistan water disputes', fix: 'The treaty (1960) allocated river systems but disputes continue over hydropower projects India is building on western rivers (Baglihar, Kishanganga). Correct statement: IWT was a historic achievement but ongoing disputes exist.' },
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                                <p style={{ margin: '0 0 5px', fontWeight: 'bold', color: '#9f1239', fontSize: '0.85em' }}>🚫 Pitfall {i + 1}: {item.pitfall}</p>
                                <p style={{ margin: 0, color: '#475569', fontSize: '0.82em' }}>✅ <strong>Correct approach:</strong> {item.fix}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#fffbeb', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 8px', color: '#92400e' }}>💡 Top Exam Tips:</p>
                        <ul style={{ fontSize: '0.84em', paddingLeft: '18px', margin: 0, color: '#78350f' }}>
                            <li style={{ marginBottom: '5px' }}>Always use <strong>specific numbers</strong>: "India extracts 253 km³/year" scores better than "India extracts a lot"</li>
                            <li style={{ marginBottom: '5px' }}>For dam questions, <strong>mention Sardar Sarovar or Three Gorges</strong> with displacement numbers</li>
                            <li style={{ marginBottom: '5px' }}>In conflict questions, mention <strong>specific legal frameworks</strong> — Cauvery Tribunal, Indus Waters Treaty, UN 1997 Convention</li>
                            <li style={{ marginBottom: '5px' }}>For flood management, distinguish <strong>structural</strong> (dams, levees) vs. <strong>non-structural</strong> (land use, early warning) measures</li>
                            <li>Link every water issue to <strong>climate change</strong> for contemporary relevance — examiners expect this in 2024+ papers</li>
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: 'center', padding: '30px 0 10px', color: '#94a3b8', fontSize: '0.85em' }}>
                    <p>Module 2.3 Complete · Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts &amp; Dams</p>
                    <p style={{ margin: 0 }}>💧 Every drop counts — water is the foundation of all life and civilisation 💧</p>
                </div>
            </section>
        </div>
    );
};

export default Module2_3;
