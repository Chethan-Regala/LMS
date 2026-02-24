'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_6: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which type of ecological pyramid is ALWAYS upright and can never be inverted?",
            options: [
                "Pyramid of Numbers",
                "Pyramid of Biomass",
                "Pyramid of Energy",
                "Pyramid of Trophic Levels"
            ],
            correctAnswer: 2,
            explanation: "The Pyramid of Energy (or Productivity) is always upright because according to the Second Law of Thermodynamics, energy is lost as heat at each transfer, so there is always less energy available at higher levels."
        },
        {
            question: "What is the process called when the concentration of toxins (like mercury or DDT) increases exponentially as you move up the food chain?",
            options: [
                "Bioaccumulation",
                "Biomagnification",
                "Eutrophication",
                "Trophic Cascading"
            ],
            correctAnswer: 1,
            explanation: "Biomagnification (or biological magnification) is the increasing concentration of a substance in the tissues of organisms at successively higher levels in a food chain."
        },
        {
            question: "In which ecosystem would you most likely find an INVERTED pyramid of biomass?",
            options: [
                "Tropical Rainforest",
                "Temperate Grassland",
                "Open Ocean (Pelagic)",
                "Desert Shrubland"
            ],
            correctAnswer: 2,
            explanation: "In aquatic ecosystems, producers (phytoplankton) have a very high turnover rate. While their 'standing stock' biomass is low at any moment, they produce a massive amount of energy over time, allowing the pyramid to appear inverted."
        },
        {
            question: "If a food web's 'Connectance' is measured, what is being determined?",
            options: [
                "The total number of species in the web",
                "The proportion of possible links that actually exist between species",
                "The amount of energy lost as heat",
                "The rate of decomposition in the soil"
            ],
            correctAnswer: 1,
            explanation: "Connectance measures ecosystem complexity by calculating the proportion of possible feeding links that actually exist in the web (Actual links / Possible links)."
        },
        {
            question: "What is a 'Trophic Cascade'?",
            options: [
                "The regular movement of energy from producers to consumers",
                "The process of nutrients leaching from the soil into water",
                "A phenomenon where changes at one trophic level cause ripples across multiple other levels",
                "The accumulation of biomass in a climax community"
            ],
            correctAnswer: 2,
            explanation: "A trophic cascade occurs when changes at one level (often an apex predator) cause significant changes in the populations of species at lower levels, such as when sea otters protect kelp forests by eating sea urchins."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.6</div>
                <div className="lesson-title-main">
                    <h1>🕸️ Food Webs & Ecological Pyramids</h1>
                </div>
            </div>

            <section className="content-section">
                <p><strong>Analyzing the Complexity of Energy Flow and Ecosystem Structure</strong></p>

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

                <h3>Learning Objectives</h3>
                <p>By the end of this module, you will be able to:</p>
                <ul>
                    <li>Construct and analyze complex food webs, distinguishing them from simple food chains and explaining their ecological significance in ecosystem stability and resilience</li>
                    <li>Interpret and construct the three types of ecological pyramids (numbers, biomass, energy) and explain why each type may be upright or inverted in different ecosystems</li>
                    <li>Calculate and analyze energy flow efficiency between trophic levels using quantitative data to determine ecological productivity and limitations on food chain length</li>
                    <li>Evaluate the consequences of removing keystone species or introducing invasive species on food web structure and predict cascading effects through trophic levels</li>
                    <li>Apply food web and pyramid concepts to real-world environmental issues including bioaccumulation, conservation strategies, sustainable fisheries management, and ecosystem restoration</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🔥 Why This Topic Matters</h3>
                <p>Imagine trying to understand a city's economy by looking at only one business transaction—say, a farmer selling wheat to a baker. You'd miss the vast web of interconnections: the suppliers providing seeds and equipment to the farmer, the baker selling to restaurants and grocery stores, the delivery drivers connecting them all, the banks financing operations, and consumers at the end of countless chains. Similarly, simple food chains give us only a glimpse of ecosystem complexity. Food webs reveal the intricate reality: organisms feeding at multiple trophic levels, energy flowing through overlapping pathways, and species playing multiple ecological roles simultaneously.</p>

                <p>Understanding food webs and ecological pyramids is absolutely critical for anyone working in environmental science, conservation, or resource management. These concepts explain why overfishing one species can collapse an entire marine ecosystem, why introducing a single invasive species can devastate native communities, and why protecting apex predators is essential for maintaining healthy habitats. When we visualize energy flow through ecological pyramids, we understand fundamental constraints on ecosystem productivity—why there are always many more plants than herbivores, more herbivores than carnivores, and why food chains rarely exceed five levels.</p>

                <p>These aren't just textbook concepts—they're practical tools used daily by ecologists, wildlife managers, and environmental consultants. When biologists decide which species to reintroduce to restore an ecosystem, they're using food web analysis. When fisheries managers set catch quotas, they're applying pyramid of biomass calculations. When toxicologists track mercury poisoning in fish-eating birds, they're tracing bioaccumulation through food webs.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>💡 Real-World Applications:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Fisheries Management:</strong> Understanding marine food webs prevents catastrophic overexploitation like the collapse of Atlantic cod fisheries.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Bioaccumulation Monitoring:</strong> Tracking toxins (mercury, PCBs, pesticides) as they concentrate up food webs protects human health.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Invasive Species Control:</strong> Predicting food web disruptions helps prioritize which invasive species to target first.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Ecosystem Restoration:</strong> Reintroducing keystone species (wolves, sea otters, beavers) requires understanding their food web roles.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Climate Change Adaptation:</strong> Predicting how shifting species distributions will alter food web structure informs conservation strategies.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Sustainable Agriculture:</strong> Designing polyculture systems and integrated pest management uses food web principles to reduce chemical inputs.</li>
                        <li><strong>Conservation Prioritization:</strong> Pyramid analysis reveals which trophic levels need protection to maintain ecosystem functioning.</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🕸️ Part 1: Food Webs - The Real Picture of Energy Flow</h3>
                <h4>From Chains to Webs: Why Complexity Matters</h4>
                <p>While food chains are useful teaching tools showing linear energy transfer (Grass → Grasshopper → Frog → Snake → Hawk), they dramatically oversimplify reality. Real ecosystems contain organisms that feed at multiple trophic levels, creating a <strong>food web</strong>—a complex network of interconnected food chains. A hawk doesn't eat only snakes; it also eats mice, rabbits, small birds, and occasionally carrion. A mouse doesn't eat only seeds; it also consumes insects, making it both a primary and secondary consumer simultaneously.</p>

                <p>This complexity is not chaos—it's functional redundancy that provides ecosystem stability and resilience. When one food source declines, predators can switch to alternatives. This flexibility buffers ecosystems against disturbances and prevents cascading collapses. However, complexity also means disturbances can propagate in unexpected ways through multiple pathways, making prediction and management challenging.</p>

                <h4>Key differences between food chains and food webs:</h4>
                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Characteristic</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Food Chain</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Food Web</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Structure</strong></td>
                                <td style={{ padding: '12px' }}>Linear, single pathway</td>
                                <td style={{ padding: '12px' }}>Network with multiple interconnected pathways</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Organism Roles</strong></td>
                                <td style={{ padding: '12px' }}>One role per organism (e.g., only herbivore)</td>
                                <td style={{ padding: '12px' }}>Multiple roles (omnivores span trophic levels)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Realism</strong></td>
                                <td style={{ padding: '12px' }}>Simplified, idealized model</td>
                                <td style={{ padding: '12px' }}>Reflects actual ecosystem complexity</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Stability</strong></td>
                                <td style={{ padding: '12px' }}>Vulnerable—removing one link breaks the chain</td>
                                <td style={{ padding: '12px' }}>Resilient—redundant pathways provide alternatives</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Energy Flow</strong></td>
                                <td style={{ padding: '12px' }}>Single directional path</td>
                                <td style={{ padding: '12px' }}>Multiple simultaneous pathways</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Predictive Power</strong></td>
                                <td style={{ padding: '12px' }}>Limited—misses indirect effects</td>
                                <td style={{ padding: '12px' }}>High—captures cascading and indirect effects</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Anatomy of a Food Web</h4>
                <p>Food webs contain several key structural elements that ecologists study to understand ecosystem function:</p>
                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', margin: '25px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📌 Food Web Components:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.92em', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Nodes (Vertices):</strong> Individual species or functional groups (e.g., "phytoplankton," "herring").</li>
                        <li style={{ marginBottom: '8px' }}><strong>Links (Edges):</strong> Feeding relationships; arrow direction shows energy flow (from eaten to eater).</li>
                        <li style={{ marginBottom: '8px' }}><strong>Connectance:</strong> Proportion of possible links that actually exist (Actual links / Possible links).</li>
                        <li style={{ marginBottom: '8px' }}><strong>Link Density:</strong> Average number of links per species (Total links / Number of species).</li>
                        <li style={{ marginBottom: '8px' }}><strong>Trophic Levels:</strong> Organisms often span levels; we assign average positions (e.g., omnivores at 2.5).</li>
                        <li><strong>Compartments:</strong> Weakly connected sub-webs within the larger web (e.g., terrestrial vs. aquatic).</li>
                    </ul>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Detailed Food Web: Grassland Ecosystem</div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', textAlign: 'center', fontSize: '0.8em' }}>
                            {/* Apex */}
                            <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
                                <div style={{ padding: '10px 20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', fontWeight: 'bold' }}>🦅 Hawks</div>
                                <div style={{ padding: '10px 20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', fontWeight: 'bold' }}>🐺 Wolves</div>
                            </div>

                            {/* Tertiary/Secondary */}
                            <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                                <div style={{ padding: '8px 15px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px' }}>🦉 Owls</div>
                                <div style={{ padding: '8px 15px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px' }}>🦊 Foxes</div>
                                <div style={{ padding: '8px 15px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px' }}>🐍 Snakes</div>
                            </div>

                            {/* Secondary/Primary */}
                            <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ padding: '6px 12px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px' }}>🐸 Frogs</div>
                                <div style={{ padding: '6px 12px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px' }}>🕷️ Spiders</div>
                                <div style={{ padding: '6px 12px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px' }}>🐦 Birds</div>
                                <div style={{ padding: '6px 12px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px' }}>🐁 Mice</div>
                            </div>

                            {/* Primary */}
                            <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                                <div style={{ padding: '6px 10px', backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px' }}>🦗 Grasshoppers</div>
                                <div style={{ padding: '6px 10px', backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px' }}>🐰 Rabbits</div>
                                <div style={{ padding: '6px 10px', backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px' }}>🦌 Deer</div>
                                <div style={{ padding: '6px 10px', backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px' }}>🐝 Bees</div>
                            </div>

                            {/* Producers */}
                            <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', gap: '30px', borderTop: '2px dashed #eee', paddingTop: '20px' }}>
                                <div style={{ padding: '10px 20px', backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '8px', fontWeight: 'bold' }}>🌾 Grasses</div>
                                <div style={{ padding: '10px 20px', backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '8px', fontWeight: 'bold' }}>🌳 Shrubs</div>
                                <div style={{ padding: '10px 20px', backgroundColor: '#f5f3ff', border: '1px dashed #ddd6fe', borderRadius: '8px' }}>🍄 Decomposers</div>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '20px 10px 0' }}>
                        Figure 1: Complex grassland food web showing multiple feeding relationships, omnivores spanning trophic levels, and decomposer connections.
                    </p>
                </div>

                <h4>Types of Food Web Interactions</h4>
                <p>Not all links in a food web are equal. Ecologists classify interactions by their strength and ecological importance:</p>

                <div style={{ marginLeft: '20px' }}>
                    <p><strong>🔗 Strong Links (High Energy Transfer):</strong> Feeding relationships where significant energy/biomass transfer occurs regularly (e.g., Zooplankton → Small fish; Wildebeest → Lions). Removing these prey species dramatically affects predator populations.</p>
                    <p><strong>🔗 Weak Links (Low Energy Transfer):</strong> Occasional or opportunistic feeding relationships contributing little to energy budget (e.g., Bears eating insects; Owls occasionally eating frogs). These provide dietary flexibility and redundancy.</p>
                </div>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>🔑 Keystone Interactions</h4>
                    <p style={{ fontSize: '0.9em', marginBottom: '10px' }}>Feeding relationships whose disruption causes disproportionately large changes to food web structure.</p>
                    <ul style={{ fontSize: '0.85em', color: '#0c4a6e', paddingLeft: '20px', margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}><strong>Sea Otters → Sea Urchins:</strong> Otters prevent urchins from overgrazing kelp forests.</li>
                        <li style={{ marginBottom: '5px' }}><strong>Wolves → Elk:</strong> Predators control herbivore behavior and populations.</li>
                        <li><strong>Starfish → Mussels:</strong> Predatory starfish maintain intertidal biodiversity.</li>
                    </ul>
                </div>

                <h4>Food Web Stability and Resilience</h4>
                <p><strong>The Complexity-Stability Debate:</strong> Complexity can stabilize ecosystems IF interaction strengths are heterogeneous (mix of strong and weak links), compartments limit disturbance spread, and keystone interactions are protected.</p>

                <h4>Trophic Cascades in Food Webs</h4>
                <p>A trophic cascade occurs when changes at one level cause ripples above and below. For example, in the <strong>Orca → Sea Otter → Sea Urchin → Kelp</strong> cascade, a reduction in large whales led orcas to eat more otters, which allowed urchins to explode and destroy kelp forests.</p>

                <div style={{ maxWidth: '640px', margin: '30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/mNxoL-2iADs?si=qk2E8JVpG4J9_Fr-"
                            title="Food Webs Explained"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <h4>Bioaccumulation and Biomagnification</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '25px 0' }}>
                    <div style={{ backgroundColor: '#fcfaff', padding: '20px', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#7e22ce' }}>Bioaccumulation</h4>
                        <p style={{ fontSize: '0.85em', margin: 0 }}>The buildup of toxins in an <strong>individual organism's</strong> tissues over its lifetime faster than they can be excreted.</p>
                    </div>
                    <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '12px', border: '1px solid #fecaca' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>Biomagnification</h4>
                        <p style={{ fontSize: '0.85em', margin: 0 }}>The <strong>increasing concentration</strong> of toxins as you move up trophic levels. Apex predators accumulate massive loads from thousands of prey.</p>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🔺 Part 2: Ecological Pyramids - Visualizing Ecosystem Structure</h3>
                <p>Ecological pyramids are graphical representations showing quantitative relationships between trophic levels. They visualize how energy, biomass, or organism numbers change as you move up the food chain.</p>

                <h4>📊 The Three Types of Ecological Pyramids:</h4>
                <ol>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Pyramid of Numbers:</strong> Shows the count of individual organisms. Can be upright (Grassland) or inverted (Forest with many parasites on one tree).
                        <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9', margin: '15px 0' }}>
                            <div style={{ textAlign: 'center', fontSize: '0.75em', fontWeight: 'bold', marginBottom: '15px' }}>Upright Pyramid of Numbers: Grassland</div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <div style={{ width: '10%', height: '15px', backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}></div>
                                <div style={{ width: '30%', height: '15px', backgroundColor: '#fff1f2', border: '1px solid #fecaca' }}></div>
                                <div style={{ width: '60%', height: '15px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}></div>
                                <div style={{ width: '90%', height: '20px', backgroundColor: '#f0fdf4', border: '2px solid #16a34a' }}></div>
                            </div>
                            <p style={{ fontSize: '0.7em', textAlign: 'center', marginTop: '10px' }}>Figure 2: Upright pyramid showing dramatic decrease in organism count.</p>
                        </div>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Pyramid of Biomass:</strong> Shows total dry mass. Usually upright on land, but often <strong>inverted in aquatic ecosystems</strong> (Open Ocean) because phytoplankton turn over so fast they support more zooplankton than their 'snapshot' weight suggests.
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Pyramid of Energy (Productivity):</strong> Shows energy flow rate (kcal/m²/yr). This is the <strong>ONLY type that is ALWAYS upright</strong>, due to the Second Law of Thermodynamics.
                    </li>
                </ol>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Pyramid of Energy (ALWAYS Upright)</div>
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '10px', textAlign: 'center', marginBottom: '4px', width: '20%', marginInline: 'auto' }}>
                                <div style={{ fontSize: '0.6em', fontWeight: 'bold' }}>APEX</div>
                                <div style={{ fontSize: '0.7em' }}>1 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecaca', padding: '12px', textAlign: 'center', marginBottom: '4px', width: '40%', marginInline: 'auto' }}>
                                <div style={{ fontSize: '0.6em', fontWeight: 'bold' }}>TERTIARY</div>
                                <div style={{ fontSize: '0.75em' }}>10 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecaca', padding: '15px', textAlign: 'center', marginBottom: '4px', width: '60%', marginInline: 'auto' }}>
                                <div style={{ fontSize: '0.6em', fontWeight: 'bold' }}>SECONDARY</div>
                                <div style={{ fontSize: '0.85em' }}>100 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', padding: '18px', textAlign: 'center', marginBottom: '4px', width: '80%', marginInline: 'auto' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: 'bold' }}>PRIMARY</div>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold' }}>1,000 kcal</div>
                            </div>
                            <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #16a34a', padding: '22px', textAlign: 'center', width: '100%', marginInline: 'auto' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#166534', letterSpacing: '0.12em' }}>PRODUCERS</div>
                                <div style={{ fontSize: '1.1em', fontWeight: '800' }}>10,000 kcal</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.75em', color: '#ef4444' }}>
                            <strong>~90% Energy Lost as Heat/Waste at Each Transfer</strong>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 3: Pyramid of energy showing the 10% rule—only about 10% of energy transfers between levels.
                    </p>
                </div>

                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Feature</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Numbers</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Biomass</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Energy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Always Upright?</strong></td>
                                <td style={{ padding: '12px' }}>❌ NO</td>
                                <td style={{ padding: '12px' }}>❌ NO</td>
                                <td style={{ padding: '12px' }}>✅ YES (Thermodynamics)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Accounts for Size?</strong></td>
                                <td style={{ padding: '12px' }}>❌ NO</td>
                                <td style={{ padding: '12px' }}>✅ YES</td>
                                <td style={{ padding: '12px' }}>✅ YES</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Most Accurate?</strong></td>
                                <td style={{ padding: '12px' }}>Least accurate</td>
                                <td style={{ padding: '12px' }}>Moderate</td>
                                <td style={{ padding: '12px' }}>Highest accuracy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#fff5f5', padding: '25px', borderRadius: '12px', border: '1px solid #feb2b2', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#c53030' }}>⚠️ Common Misconceptions:</h4>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>1. "Pyramids of biomass are always upright":</strong> Reality is marine systems often show inverted biomass pyramids due to phytoplankton turnover speed.</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>2. "Food chains are real":</strong> They are simplified teaching models; food webs are the functional reality.</p>
                    <p style={{ fontSize: '0.9em' }}><strong>3. "Complexity equals stability":</strong> Not always—structure and keystone interactions matter more than just the number of species.</p>
                </div>


                <Quiz
                    title="Module 1.6 Quiz: Food Webs & Pyramids"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={6}
                />

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div className="resources-section">
                    <h3>Learning Resources & Further Exploration</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Scientific Data</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.nasa.gov" target="_blank">NASA Earth Observatory</a></li>
                                <li><a href="https://www.noaa.gov" target="_blank">NOAA Fisheries Data</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Learning Hubs</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.khanacademy.org" target="_blank">Khan Academy Biology</a></li>
                                <li><a href="https://www.hhmi.org/biointeractive" target="_blank">HHMI BioInteractive</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module1_6;
