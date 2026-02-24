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
            question: "Ecologist Raymond Lindeman (1942) established which fundamental ecological principle?",
            options: [
                "The Principle of Competitive Exclusion",
                "The 10% Rule of Energy Transfer",
                "The Theory of Island Biogeography",
                "The Concept of Trophic Cascades"
            ],
            correctAnswer: 1,
            explanation: "Raymond Lindeman established the 10% rule, stating that approximately 10% of energy is transferred from one trophic level to the next, while 90% is lost as heat and waste."
        },
        {
            question: "Why might a Pyramid of Numbers be INVERTED in a forest ecosystem?",
            options: [
                "Because there are more predators than prey",
                "Because producers are very small (like grass)",
                "Because a single large producer (like an oak tree) can support thousands of small primary consumers",
                "Because energy increases as you move up the pyramid"
            ],
            correctAnswer: 2,
            explanation: "In forests, a single large producer (one tree) represents '1' in a count but contains massive biomass/energy to support thousands of insects, resulting in an inverted shape at the base."
        },
        {
            question: "Which statement best explains why ectotherms (cold-blooded) typically have higher trophic efficiency (~13%) than endotherms (warm-blooded, ~10%)?",
            options: [
                "Ectotherms eat more nutritious food",
                "Ectotherms do not expend significant energy on maintaining a constant body temperature",
                "Ectotherms have faster digestive systems",
                "Ectotherms are always smaller than endotherms"
            ],
            correctAnswer: 1,
            explanation: "Endotherms must use a large portion of their consumed energy just to generate metabolic heat to maintain body temperature. Ectotherms lack this high metabolic cost, allowing more energy to be converted into new biomass."
        },
        {
            question: "What is the primary factor that limits the length of food chains to typically 4 or 5 levels?",
            options: [
                "Top predators are too fierce",
                "The exponential loss of energy (90% per level) means there is eventually not enough energy to support another level",
                "Ecosystems run out of physical space for more species",
                "Decomposers break down the pyramid from the top"
            ],
            correctAnswer: 1,
            explanation: "Because only about 10% of energy transfers up, the amount of energy at the 5th or 6th level is so miniscule (e.g., 0.1 kcal from an original 10,000) that it cannot support a viable population of a higher trophic level."
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

                <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '40px 0', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#1e293b', fontSize: '1.4em', fontWeight: '800', margin: 0 }}>Detailed Food Web: Grassland Ecosystem</h4>
                        <p style={{ color: '#64748b', fontSize: '0.95em', marginTop: '5px' }}>Energy flow and nutrient cycling in a complex temperate community</p>
                    </div>

                    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', padding: '20px', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden' }}>
                        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                            <defs>
                                <marker id="arrowhead-fw" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orientation="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
                                </marker>
                                <filter id="shadow-fw">
                                    <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.1" />
                                </filter>
                            </defs>

                            {/* --- ENERGY FLOWS (Paths Behind Nodes) --- */}
                            <g fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrowhead-fw)" opacity="0.4">
                                {/* From Sun */}
                                <path d="M 700,60 Q 725,90 750,120" /> {/* Sun -> Grasses */}
                                <path d="M 680,80 Q 400,300 250,680" /> {/* Sun -> Flowering Plants */}
                                <path d="M 720,80 Q 820,300 850,680" /> {/* Sun -> Shrubs */}

                                {/* From Producers */}
                                <path d="M 730,150 Q 600,175 480,200" /> {/* Grasses -> Grasshoppers */}
                                <path d="M 740,155 Q 675,250 620,340" /> {/* Grasses -> Mice */}
                                <path d="M 760,155 Q 770,450 780,740" /> {/* Grasses -> Rabbits */}
                                <path d="M 780,150 Q 850,450 920,740" /> {/* Grasses -> Deer */}

                                <path d="M 270,710 L 290,740" /> {/* Flowering -> Butterflies */}
                                <path d="M 230,710 L 210,740" /> {/* Flowering -> Bees */}
                                <path d="M 250,690 Q 350,450 450,225" /> {/* Flowering -> Grasshoppers */}

                                <path d="M 850,710 L 800,740" /> {/* Shrubs -> Rabbits */}
                                <path d="M 860,710 L 920,740" /> {/* Shrubs -> Deer */}
                                <path d="M 840,690 Q 650,450 480,225" /> {/* Shrubs -> Grasshoppers */}

                                {/* From Primary Consumers */}
                                <path d="M 470,225 L 530,265" /> {/* Grasshoppers -> Spiders */}
                                <path d="M 450,230 L 410,340" /> {/* Grasshoppers -> Frogs */}
                                <path d="M 550,295 L 420,350" /> {/* Spiders -> Frogs */}
                                <path d="M 560,300 Q 600,450 600,530" /> {/* Spiders -> Fungi */}
                                <path d="M 430,375 Q 450,450 580,540" /> {/* Frogs -> Fungi */}

                                <path d="M 600,380 L 600,530" /> {/* Mice -> Fungi */}
                                <path d="M 580,360 Q 540,425 500,480" /> {/* Mice -> Hawks */}
                                <path d="M 620,360 Q 750,550 780,810" /> {/* Mice -> Foxes */}
                                <path d="M 380,365 Q 250,400 170,810" /> {/* Frogs -> Small Birds */}

                                {/* Secondary to Higher */}
                                <path d="M 400,380 L 400,410" /> {/* Frogs -> Snakes */}
                                <path d="M 400,445 L 490,485" /> {/* Snakes -> Hawks */}
                                <path d="M 170,860 Q 155,875 140,890" /> {/* Small Birds -> Owls */}
                                <path d="M 780,785 L 780,810" /> {/* Rabbits -> Foxes */}
                                <path d="M 780,855 L 780,880" /> {/* Foxes -> Wolves */}
                                <path d="M 940,785 Q 940,880 810,910" /> {/* Deer -> Wolves */}

                                {/* Decomposers & Nutrients */}
                                <path d="M 620,575 Q 650,600 680,620" /> {/* Fungi -> Soil Nutrients */}
                                <path d="M 680,630 Q 300,600 250,670" /> {/* Nutrients -> Flowering */}
                                <path d="M 720,630 Q 800,650 850,670" /> {/* Nutrients -> Shrubs */}
                                <path d="M 700,620 Q 730,400 750,150" /> {/* Nutrients -> Grasses */}
                            </g>

                            {/* --- NODES (Ordered by type for clarity) --- */}

                            {/* Sun */}
                            <g transform="translate(680,40)" filter="url(#shadow-fw)">
                                <rect width="60" height="35" rx="6" fill="#facc15" stroke="#a16207" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="#713f12" fontSize="12" fontWeight="bold">☀️ Sun</text>
                            </g>

                            {/* Producers (Green) */}
                            <g transform="translate(740,115)" filter="url(#shadow-fw)">
                                <rect width="70" height="35" rx="6" fill="#22c55e" stroke="#14532d" strokeWidth="1" />
                                <text x="35" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🌾 Grasses</text>
                            </g>
                            <g transform="translate(190,675)" filter="url(#shadow-fw)">
                                <rect width="120" height="35" rx="6" fill="#22c55e" stroke="#14532d" strokeWidth="1" />
                                <text x="60" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🌸 Flowering Plants</text>
                            </g>
                            <g transform="translate(830,675)" filter="url(#shadow-fw)">
                                <rect width="70" height="35" rx="6" fill="#22c55e" stroke="#14532d" strokeWidth="1" />
                                <text x="35" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🌳 Shrubs</text>
                            </g>

                            {/* Primary Consumers (Orange) */}
                            <g transform="translate(420,195)" filter="url(#shadow-fw)">
                                <rect width="90" height="35" rx="6" fill="#f97316" stroke="#7c2d12" strokeWidth="1" />
                                <text x="45" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🦗 Hoppers</text>
                            </g>
                            <g transform="translate(580,335)" filter="url(#shadow-fw)">
                                <rect width="60" height="35" rx="6" fill="#f97316" stroke="#7c2d12" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐁 Mice</text>
                            </g>
                            <g transform="translate(760,745)" filter="url(#shadow-fw)">
                                <rect width="65" height="35" rx="6" fill="#f97316" stroke="#7c2d12" strokeWidth="1" />
                                <text x="32.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐰 Rabbits</text>
                            </g>
                            <g transform="translate(910,745)" filter="url(#shadow-fw)">
                                <rect width="55" height="35" rx="6" fill="#f97316" stroke="#7c2d12" strokeWidth="1" />
                                <text x="27.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🦌 Deer</text>
                            </g>
                            <g transform="translate(170,745)" filter="url(#shadow-fw)">
                                <rect width="50" height="35" rx="6" fill="#f97316" stroke="#7c2d12" strokeWidth="1" />
                                <text x="25" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐝 Bees</text>
                            </g>
                            <g transform="translate(245,745)" filter="url(#shadow-fw)">
                                <rect width="80" height="35" rx="6" fill="#f97316" stroke="#7c2d12" strokeWidth="1" />
                                <text x="40" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🦋 Butterflies</text>
                            </g>

                            {/* Secondary Consumers */}
                            <g transform="translate(520,255)" filter="url(#shadow-fw)">
                                <rect width="65" height="35" rx="6" fill="#fb923c" stroke="#7c2d12" strokeWidth="1" />
                                <text x="32.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🕷️ Spiders</text>
                            </g>
                            <g transform="translate(375,335)" filter="url(#shadow-fw)">
                                <rect width="60" height="35" rx="6" fill="#fb923c" stroke="#7c2d12" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐸 Frogs</text>
                            </g>
                            <g transform="translate(130,815)" filter="url(#shadow-fw)">
                                <rect width="85" height="35" rx="6" fill="#fb923c" stroke="#7c2d12" strokeWidth="1" />
                                <text x="42.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐦 Sm. Birds</text>
                            </g>

                            {/* Predators (Red) */}
                            <g transform="translate(370,410)" filter="url(#shadow-fw)">
                                <rect width="65" height="35" rx="6" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1" />
                                <text x="32.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐍 Snakes</text>
                            </g>
                            <g transform="translate(480,480)" filter="url(#shadow-fw)">
                                <rect width="60" height="35" rx="6" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🦅 Hawks</text>
                            </g>
                            <g transform="translate(760,815)" filter="url(#shadow-fw)">
                                <rect width="60" height="35" rx="6" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🦊 Foxes</text>
                            </g>
                            <g transform="translate(115,885)" filter="url(#shadow-fw)">
                                <rect width="55" height="35" rx="6" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1" />
                                <text x="27.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🦉 Owls</text>
                            </g>

                            {/* Apex (Dark Red) */}
                            <g transform="translate(755,885)" filter="url(#shadow-fw)">
                                <rect width="65" height="35" rx="6" fill="#991b1b" stroke="#450a0a" strokeWidth="1" />
                                <text x="32.5" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🐺 Wolves</text>
                            </g>

                            {/* Decomposers & Nutrients (Brown) */}
                            <g transform="translate(540,535)" filter="url(#shadow-fw)">
                                <rect width="130" height="40" rx="8" fill="#78350f" stroke="#451a03" strokeWidth="1" />
                                <text x="65" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">🍄 Fungi - Decomposers</text>
                            </g>
                            <g transform="translate(670,610)" filter="url(#shadow-fw)">
                                <rect width="100" height="35" rx="6" fill="#a85707" stroke="#451a03" strokeWidth="1" />
                                <text x="50" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">💩 Soil Nutrients</text>
                            </g>
                        </svg>
                    </div>
                    <p style={{ fontSize: '0.95em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                        Figure 1: Complex grassland food web showing multiple feeding relationships, omnivores spanning trophic levels, and decomposer connections.
                    </p>
                </div>

                <div style={{ backgroundColor: '#fcfcfc', padding: '50px 30px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '40px 0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#1e293b', fontSize: '1.4em', fontWeight: '800', margin: 0 }}>Types of Food Web Interactions</h4>
                        <p style={{ color: '#64748b', fontSize: '1em', marginTop: '10px', maxWidth: '800px', marginInline: 'auto' }}>
                            Not all links in a food web are equal. Ecologists classify interactions by their <strong>strength, frequency, and ecological importance</strong>.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                        {/* STRONG LINKS CARD */}
                        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '24px', padding: '30px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5em', opacity: 0.05 }}>🔗</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ backgroundColor: '#1e40af', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em', boxShadow: '0 4px 12px rgba(30, 64, 175, 0.2)' }}>🔗</div>
                                <h5 style={{ margin: 0, color: '#1e3a8a', fontSize: '1.25em', fontWeight: '900' }}>Strong Links</h5>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Definition</div>
                                <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.95em', lineHeight: '1.6', fontWeight: '500' }}>
                                    Feeding relationships where significant energy/biomass transfer occurs regularly; the predator depends heavily on these specific prey species for survival.
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Key Examples</div>
                                <ul style={{ margin: 0, paddingLeft: '18px', color: '#1e40af', fontSize: '0.9em' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>Zooplankton → Small Fish:</strong> In marine systems, zooplankton often constitute 70-90% of the small fish diet.</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Wildebeest → Lions:</strong> Wildebeest serve as the primary foundational prey during massive migration seasons.</li>
                                    <li><strong>Aphids → Ladybugs:</strong> Specialist predators may feed almost exclusively on one target prey group.</li>
                                </ul>
                            </div>

                            <div style={{ backgroundColor: '#1e40af', color: 'white', padding: '15px 20px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(30, 64, 175, 0.15)' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '5px', opacity: 0.9 }}>Ecological Impact</div>
                                <p style={{ margin: 0, fontSize: '0.88em', lineHeight: '1.5' }}>
                                    Removing prey species dramatically affects predator populations. Strong links are <strong>critical to ecosystem function</strong> and are high-priority targets for conservation management.
                                </p>
                            </div>
                        </div>

                        {/* WEAK LINKS CARD */}
                        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '30px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5em', opacity: 0.05 }}>⛓️</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ backgroundColor: '#64748b', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em', boxShadow: '0 4px 12px rgba(100, 116, 139, 0.2)' }}>⛓️</div>
                                <h5 style={{ margin: 0, color: '#334155', fontSize: '1.25em', fontWeight: '900' }}>Weak Links</h5>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Definition</div>
                                <p style={{ margin: 0, color: '#475569', fontSize: '0.95em', lineHeight: '1.6', fontWeight: '500' }}>
                                    Occasional feeding relationships contributing little to the predator's total energy budget; typically opportunistic, rare, or seasonal interactions.
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Key Examples</div>
                                <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '0.9em' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>Bears eating insects:</strong> A small caloric contribution compared to high-fat salmon, seasonal berries, and large mammals.</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Owls eating frogs:</strong> Occurs occasionally, though mice, voles, and shrews remain the primary consistent diet.</li>
                                    <li><strong>Herbivores eating fungi:</strong> Opportunistic consumption of lichens or mushrooms when encountered, but not a primary forage source.</li>
                                </ul>
                            </div>

                            <div style={{ backgroundColor: '#334155', color: 'white', padding: '15px 20px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(51, 65, 85, 0.15)' }}>
                                <div style={{ fontSize: '0.75em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '5px', opacity: 0.9 }}>Stability Role</div>
                                <p style={{ margin: 0, fontSize: '0.88em', lineHeight: '1.5' }}>
                                    Weak links provide <strong>dietary flexibility and redundancy</strong>. They become critical when preferred prey is scarce, stabilizing the predator population during unforeseen disturbances.
                                </p>
                            </div>
                        </div>
                    </div>
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

                <div style={{ backgroundColor: '#fffbeb', padding: '50px 30px', borderRadius: '32px', border: '1px solid #fef3c7', margin: '40px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#92400e', fontSize: '1.4em', fontWeight: '800', margin: 0 }}>Food Web Stability and Resilience</h4>
                        <p style={{ color: '#b45309', fontSize: '1em', marginTop: '10px' }}>Does complexity guarantee ecosystem stability?</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px', marginBottom: '40px' }}>
                        {/* ARGUMENTS FOR STABILITY */}
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #fde68a', boxShadow: '0 4px 6px rgba(180, 83, 9, 0.05)' }}>
                            <h5 style={{ color: '#166534', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>⚖️</span> Case FOR Complexity = Stability
                            </h5>
                            <ul style={{ margin: 0, paddingLeft: '15px', color: '#374151', fontSize: '0.92em', listStyleType: 'none' }}>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#15803d' }}>Redundancy:</strong> Multiple prey species buffer predators against the decline of any single prey source.
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#15803d' }}>Compensation:</strong> When one species declines, others can increase in number, maintaining overall ecosystem function.
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#15803d' }}>Distributed Risk:</strong> Disruptions or disturbances affect a smaller percentage of connections in highly interconnected webs.
                                </li>
                                <li>
                                    <strong style={{ color: '#15803d' }}>Empirical Reality:</strong> Highly diverse tropical ecosystems often appear more stable than simple arctic systems that fluctuate wildly.
                                </li>
                            </ul>
                        </div>

                        {/* ARGUMENTS AGAINST STABILITY */}
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #fde68a', boxShadow: '0 4px 6px rgba(180, 83, 9, 0.05)' }}>
                            <h5 style={{ color: '#991b1b', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>⚠️</span> Case AGAINST (Destabilization)
                            </h5>
                            <ul style={{ margin: 0, paddingLeft: '15px', color: '#374151', fontSize: '0.92em', listStyleType: 'none' }}>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#b91c1c' }}>Mathematical Models:</strong> Robert May's (1972) models famously showed that highly connected systems can actually be mathematically unstable.
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#b91c1c' }}>Propagation:</strong> More connections offer more pathways for a single disturbance to spread rapidly through the entire web.
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong style={{ color: '#b91c1c' }}>Indirect Effects:</strong> Complex interactions produce unpredictable ripple effects that are hard to manage or reverse.
                                </li>
                                <li>
                                    <strong style={{ color: '#b91c1c' }}>Historical Collapses:</strong> Complex ecosystems, like the Caribbean coral reefs, have historically collapsed even with high diversity.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#fffbeb', border: '2px solid #f59e0b', borderRadius: '20px', padding: '25px' }}>
                        <h5 style={{ margin: '0 0 10px 0', color: '#92400e', fontSize: '1.1em' }}>📍 The Current Consensus:</h5>
                        <p style={{ margin: 0, color: '#92400e', fontSize: '0.95em', lineHeight: '1.6' }}>
                            Context is everything. Complexity stabilizes ecosystems <strong>IF</strong> interaction strengths are diverse (mix of strong/weak), <strong>IF</strong> compartments limit disturbance spread, and <strong>IF</strong> keystone interactions are protected. Structure and interaction patterns matter far more than mere species count.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fdf2f8', padding: '50px 30px', borderRadius: '32px', border: '1px solid #fce7f3', margin: '40px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#9d174d', fontSize: '1.4em', fontWeight: '800', margin: 0 }}>Trophic Cascades in Food Webs</h4>
                        <p style={{ color: '#be185d', fontSize: '1em', marginTop: '10px' }}>Power dynamics of top-down vs. bottom-up control</p>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', border: '1px solid #fbcfe8', boxShadow: '0 10px 30px rgba(157, 23, 77, 0.03)' }}>
                        <h5 style={{ color: '#9d174d', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.4em' }}>🌊</span> Classic Marine Example: The Orca-Kelp Cascade
                        </h5>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '20px', top: '20px', bottom: '20px', width: '2px', backgroundColor: '#fbcfe8', zIndex: 0 }}></div>

                            {[
                                { title: 'Historical State', desc: 'Orcas primarily hunt large whales, allowing healthy sea otter populations (+).', icon: '🐳' },
                                { title: 'Whaling Impact (1950s-70s)', desc: 'Commercial whaling depleted large whale populations.', icon: '⚓' },
                                { title: 'Orca Diet Shift', desc: 'With fewer whales, orcas turned to sea otters as a secondary prey source.', icon: '🐋' },
                                { title: 'Otter Population Crash', desc: 'Sea otter numbers plummeted by up to 90% in some areas.', icon: '📉' },
                                { title: 'Urchin Explosion', desc: 'Without otter predation, sea urchin populations exploded by 100x.', icon: '🧆' },
                                { title: 'Kelp Forest Collapse', desc: 'Urchins overgrazed kelp, reducing forests by 90-95% (Urchin Barrens).', icon: '🍂' },
                                { title: 'Ecosystem Transformation', desc: 'Massive loss of biodiversity for fish, invertebrates, and seabirds.', icon: '⚠️' }
                            ].map((step, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid #f9a8d4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2em' }}>{step.icon}</div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ fontWeight: '800', color: '#9d174d', fontSize: '0.95em', marginBottom: '3px' }}>{step.title}</div>
                                        <div style={{ fontSize: '0.9em', color: '#475569', lineHeight: '1.4' }}>{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#9d174d', borderRadius: '20px', color: 'white' }}>
                            <h5 style={{ margin: '0 0 10px 0', fontSize: '1.1em', fontWeight: '800' }}>🗝️ Key Lesson:</h5>
                            <p style={{ margin: 0, fontSize: '0.95em', lineHeight: '1.6', opacity: 0.95 }}>
                                Changes four trophic levels up (orcas → whales) cascaded down to primary producers, fundamentally transforming the ecosystem. This proves apex predators indirectly control plant communities through their influence on herbivores.
                            </p>
                        </div>
                    </div>

                    <div style={{ maxWidth: '640px', margin: '30px auto' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/mNxoL-2iADs?si=qk2E8JVpG4J9_Fr-"
                                title="Food Webs Explained"
                                allowFullScreen
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fcfaff', padding: '50px 30px', borderRadius: '32px', border: '1px solid #f3e8ff', margin: '40px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#7e22ce', fontSize: '1.4em', fontWeight: '800', margin: 0 }}>Bioaccumulation and Biomagnification in Food Webs</h4>
                        <p style={{ color: '#9333ea', fontSize: '1em', marginTop: '10px' }}>Understanding the exponential concentration of toxins in ecosystems</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                        {/* BIOACCUMULATION CARD */}
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #e9d5ff', boxShadow: '0 4px 6px rgba(126, 34, 206, 0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ backgroundColor: '#7e22ce', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em' }}>🧪</div>
                                <h5 style={{ margin: 0, color: '#6b21a8', fontSize: '1.2em', fontWeight: '900' }}>Bioaccumulation</h5>
                            </div>
                            <p style={{ fontSize: '0.92em', color: '#581c87', lineHeight: '1.6', marginBottom: '20px' }}>
                                The buildup of substances (toxins, heavy metals, persistent pollutants) in an <strong>individual organism's</strong> tissues over its lifetime, absorbed faster than they can be excreted or metabolized.
                            </p>
                            <div style={{ backgroundColor: '#f5f3ff', padding: '15px', borderRadius: '16px', marginBottom: '15px' }}>
                                <strong style={{ fontSize: '0.75em', color: '#7e22ce', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>Mechanism</strong>
                                <p style={{ margin: 0, fontSize: '0.88em', color: '#581c87' }}>Lipid-soluble (fat-soluble) toxins are absorbed and stored in fatty tissues, making them extremely difficult for the body to flush out.</p>
                            </div>
                            <div style={{ borderLeft: '3px solid #ddd6fe', paddingLeft: '15px' }}>
                                <strong style={{ fontSize: '0.75em', color: '#7e22ce', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>Example</strong>
                                <p style={{ margin: 0, fontSize: '0.88em', color: '#581c87' }}>A fish in mercury-contaminated water absorbs mercury over years; its tissue concentration may eventually be <strong>1,000–10,000× higher</strong> than the surrounding water.</p>
                            </div>
                        </div>

                        {/* BIOMAGNIFICATION CARD */}
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #fecaca', boxShadow: '0 4px 6px rgba(153, 27, 27, 0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ backgroundColor: '#991b1b', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em' }}>📈</div>
                                <h5 style={{ margin: 0, color: '#7f1d1d', fontSize: '1.2em', fontWeight: '900' }}>Biomagnification</h5>
                            </div>
                            <p style={{ fontSize: '0.92em', color: '#991b1b', lineHeight: '1.6', marginBottom: '20px' }}>
                                The <strong>increasing concentration</strong> of substances as you move up trophic levels. Each consumer accumulates toxins from every single prey item consumed.
                            </p>
                            <div style={{ backgroundColor: '#fef2f2', padding: '15px', borderRadius: '16px', marginBottom: '15px' }}>
                                <strong style={{ fontSize: '0.75em', color: '#991b1b', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>Mechanism</strong>
                                <p style={{ margin: 0, fontSize: '0.88em', color: '#991b1b' }}>As predators eat thousands of contaminated prey over a lifetime, they absorb the cumulative toxin loads of the entire lower food chain.</p>
                            </div>
                            <div style={{ borderLeft: '3px solid #fecaca', paddingLeft: '15px' }}>
                                <strong style={{ fontSize: '0.75em', color: '#b91c1c', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>The DDT Scale (Concentration)</strong>
                                <div style={{ fontSize: '0.85em', color: '#991b1b', display: 'grid', gap: '4px' }}>
                                    <div>💧 Water: 0.000003 ppm</div>
                                    <div>🌱 Plankton: 0.04 ppm (13,000×)</div>
                                    <div>🐟 Lg. Fish: 2 ppm (600,000×)</div>
                                    <div>🦅 Osprey: 25 ppm (8,000,000×)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CLASSIC CASE: DDT */}
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #f3e8ff', marginBottom: '30px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: '#f5f3ff', color: '#7e22ce', padding: '5px 15px', borderRadius: '20px', fontSize: '0.75em', fontWeight: 'bold' }}>CLASSIC CASE STUDY</div>
                        <h5 style={{ color: '#581c87', fontSize: '1.2em', fontWeight: '900', marginBottom: '20px' }}>DDT and the Raptor Population Crash (1950s–1970s)</h5>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div style={{ fontSize: '0.9em', color: '#4b5563', lineHeight: '1.5' }}>
                                <p><strong>The Crisis:</strong> DDT sprayed on crops ran off into waterways, biomagnifying 25-million-fold from water to apex predators like Bald Eagles and Ospreys.</p>
                                <p><strong>The Biological Failure:</strong> Birds metabolized DDT into DDE, which disrupted calcium metabolism, leading to <strong>eggshell thinning</strong>. Eggs crushed under the weight of nesting parents.</p>
                            </div>
                            <div style={{ fontSize: '0.9em', color: '#4b5563', lineHeight: '1.5' }}>
                                <p><strong>The Outcome:</strong> Raptor populations crashed; Bald Eagles were nearly extinct in the lower 48 states. This crisis inspired Rachel Carson's 1962 book <i>Silent Spring</i>.</p>
                                <p><strong>Recovery:</strong> After the US banned DDT in 1972, populations slowly recovered, proving that food web protection is effective conservation.</p>
                            </div>
                        </div>
                    </div>

                    {/* CURRENT CONCERNS */}
                    <div style={{ backgroundColor: '#9333ea', padding: '25px', borderRadius: '20px', color: 'white' }}>
                        <h5 style={{ margin: '0 0 15px 0', fontSize: '1.1em', fontWeight: '800' }}>⚠️ Modern Toxicological Concerns:</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {[
                                { title: 'Mercury', desc: 'In tuna/swordfish (FDA warnings for pregnancy)' },
                                { title: 'PCBs', desc: 'Persistent in Great Lakes fish populations' },
                                { title: 'PFAS', desc: '"Forever chemicals" in drinking water' },
                                { title: 'Microplastics', desc: 'Accumulating in marine food webs globally' }
                            ].map((item, i) => (
                                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '10px 15px', borderRadius: '12px', flex: '1 1 200px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9em', marginBottom: '2px' }}>{item.title}</div>
                                    <div style={{ fontSize: '0.8em', opacity: 0.9 }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🔺 Part 2: Ecological Pyramids - Visualizing Ecosystem Structure</h3>
                <div style={{ backgroundColor: '#fcfcfc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ color: '#111827', fontSize: '1.3em', fontWeight: '800', margin: '0 0 15px 0' }}>What Are Ecological Pyramids?</h4>
                    <p style={{ color: '#4b5563', fontSize: '1em', lineHeight: '1.6', margin: 0 }}>
                        Ecological pyramids are graphical representations showing the <strong>quantitative relationships</strong> between different trophic levels in an ecosystem. They visualize how energy, biomass, or organism numbers change as you move up the food chain. These pyramids are powerful tools for understanding ecosystem productivity, energy flow limitations, and why certain ecosystem structures exist.
                    </p>
                    <p style={{ color: '#4b5563', fontSize: '1em', lineHeight: '1.6', marginTop: '15px' }}>
                        Pyramids are typically drawn with <strong>producers at the base</strong> (widest level) and successive consumer levels stacked above, becoming progressively narrower. The width of each level is proportional to the measured quantity. While most are upright, some can be <strong>inverted</strong>—understanding WHY certain pyramids invert is critical for ecological reasoning.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    {[
                        { title: 'Pyramid of Numbers', desc: 'Shows the count of individual organisms at each trophic level.', color: '#3b82f6', icon: '🔢' },
                        { title: 'Pyramid of Biomass', desc: 'Shows the total dry mass of all organisms at each level (g/m² or kg/ha).', color: '#10b981', icon: '⚖️' },
                        { title: 'Pyramid of Energy', desc: 'Shows the rate of energy flow or productivity (kcal/m²/year).', color: '#f59e0b', icon: '⚡' }
                    ].map((type, i) => (
                        <div key={i} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '20px', border: `1px solid ${type.color}33`, boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontSize: '1.5em', marginBottom: '10px' }}>{type.icon}</div>
                            <h5 style={{ margin: '0 0 8px 0', color: type.color, fontWeight: '800' }}>{type.title}</h5>
                            <p style={{ margin: 0, fontSize: '0.9em', color: '#64748b', lineHeight: '1.5' }}>{type.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ margin: '50px 0' }}>
                    <h4 style={{ color: '#1e293b', fontSize: '1.4em', fontWeight: '900', borderBottom: '2px solid #3b82f6', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' }}>1. Pyramid of Numbers</h4>
                    <p style={{ color: '#475569', fontSize: '1em', lineHeight: '1.7' }}>
                        A pyramid of numbers represents the <strong>count of individual organisms</strong> at each trophic level. This is the simplest type to understand conceptually but can produce surprising and counterintuitive shapes.
                    </p>

                    <div style={{ backgroundColor: '#f0f9ff', padding: '60px 20px', borderRadius: '32px', border: '1px solid #e0f2fe', margin: '40px 0', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Upright Pyramid of Numbers: Grassland Ecosystem</div>
                            <h2 style={{ color: '#0c4a6e', fontSize: '1.8em', fontWeight: '800', margin: 0 }}>Upright Pyramid of Numbers</h2>
                            <p style={{ color: '#0369a1', fontSize: '0.9em', marginTop: '5px' }}>(Typical Grassland Ecosystem)</p>
                        </div>

                        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', padding: '50px 30px', border: '1px solid #e0f2fe', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                {/* TERTIARY */}
                                <div style={{
                                    width: '25%', minWidth: '220px', height: '80px', backgroundColor: '#ef4444', color: 'white',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', padding: '10px'
                                }}>
                                    <div style={{ fontSize: '0.65em', fontWeight: 'bold', textTransform: 'uppercase' }}>TERTIARY: 100 individuals</div>
                                    <div style={{ fontSize: '0.75em', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🚀 Hawks, foxes</div>
                                </div>

                                {/* SECONDARY */}
                                <div style={{
                                    width: '45%', minWidth: '350px', height: '85px', backgroundColor: '#f97316', color: 'white',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', padding: '10px'
                                }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', textTransform: 'uppercase' }}>SECONDARY: 10,000 individuals</div>
                                    <div style={{ fontSize: '0.85em', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🐸 Snakes, frogs, small birds</div>
                                </div>

                                {/* PRIMARY */}
                                <div style={{
                                    width: '70%', minWidth: '500px', height: '95px', backgroundColor: '#f59e0b', color: 'white',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', padding: '10px'
                                }}>
                                    <div style={{ fontSize: '0.85em', fontWeight: 'bold', textTransform: 'uppercase' }}>PRIMARY CONSUMERS: 1,000,000 individuals</div>
                                    <div style={{ fontSize: '0.95em', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>🦗 Grasshoppers, mice, rabbits</div>
                                </div>

                                {/* PRODUCERS */}
                                <div style={{
                                    width: '100%', height: '110px', backgroundColor: '#10b981', color: 'white',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                    borderRadius: '0 0 8px 8px', clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', padding: '15px'
                                }}>
                                    <div style={{ fontSize: '1em', fontWeight: 'bold', textTransform: 'uppercase' }}>PRODUCERS: 10,000,000 grass plants</div>
                                    <div style={{ fontSize: '1.1em', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>🌾 Grasses, herbs, small plants</div>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.8em', color: '#64748b', fontStyle: 'italic' }}>
                                Note: 100:1 reduction at each level (approximately)
                            </div>
                        </div>
                        <p style={{ fontSize: '0.95em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                            Figure 2: Upright pyramid of numbers showing dramatic decrease in organism count at higher trophic levels.
                        </p>
                    </div>

                    {/* INVERTED PYRAMID OF NUMBERS */}
                    <div style={{ backgroundColor: '#fff7ed', padding: '40px', borderRadius: '32px', border: '1px solid #fed7aa', margin: '30px 0' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', order: 2 }}>
                                <div style={{ textAlign: 'center', fontSize: '0.8em', fontWeight: 'bold', color: '#64748b', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inverted Pyramid of Numbers: Forest Ecosystem</div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '40%', height: '22px', backgroundColor: '#ef4444', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.6em', fontWeight: 'bold' }}>BIRDS (50)</div>
                                    <div style={{ width: '100%', height: '22px', backgroundColor: '#fb923c', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.6em', fontWeight: 'bold' }}>PARASITIC WASPS (10,000)</div>
                                    <div style={{ width: '80%', height: '22px', backgroundColor: '#facc15', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#92400e', fontSize: '0.6em', fontWeight: 'bold' }}>CATERPILLARS (5,000)</div>
                                    <div style={{ width: '20%', height: '30px', backgroundColor: '#15803d', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.7em', fontWeight: '800' }}>OAK TREES (5)</div>
                                </div>
                                <p style={{ fontSize: '0.75em', fontStyle: 'italic', color: '#94a3b8', textAlign: 'center', marginTop: '20px' }}>Figure 2b: Inverted pyramid where one producer supports thousands.</p>
                            </div>
                            <div style={{ order: 1 }}>
                                <h5 style={{ color: '#9a3412', fontWeight: '800', marginBottom: '15px' }}>Inverted Pattern (Parasitic & Tree-Based)</h5>
                                <p style={{ fontSize: '0.92em', color: '#444', lineHeight: '1.6' }}>
                                    Some ecosystems show inverted pyramids where higher levels have <strong>MORE</strong> individuals than lower levels.
                                </p>
                                <div style={{ marginTop: '15px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#ea580c' }}>🌳 Forest Case:</div>
                                    <ul style={{ margin: '5px 0 0 0', paddingLeft: '18px', fontSize: '0.85em', color: '#444' }}>
                                        <li>Producers: 5 massive oak trees</li>
                                        <li>Herbivores: 5,000 caterpillars</li>
                                        <li>Parasites: 10,000 wasps</li>
                                    </ul>
                                </div>
                                <p style={{ fontSize: '0.85em', color: '#444', marginTop: '15px', fontStyle: 'italic' }}>
                                    <strong>Why?</strong> A single massive producer (tree) provides enough biomass/energy for thousands of small consumers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '20px', border: '2px solid #3b82f6', borderStyle: 'dashed' }}>
                        <p style={{ margin: 0, fontSize: '0.92em', color: '#334155', lineHeight: '1.6' }}>
                            <strong>Key Insight:</strong> Pyramids of numbers don't account for <strong>organism size</strong>—one tree ≠ one grass plant in ecological significance. This makes this pyramid type less informative than biomass or energy pyramids.
                        </p>
                    </div>
                </div>

                <div style={{ margin: '60px 0' }}>
                    <h4 style={{ color: '#111827', fontSize: '1.4em', fontWeight: '900', borderBottom: '2px solid #10b981', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' }}>2. Pyramid of Biomass</h4>
                    <p style={{ color: '#475569', fontSize: '1em', lineHeight: '1.7' }}>
                        A pyramid of biomass represents the <strong>total dry mass</strong> of all living organisms at each trophic level (typically measured in grams per square meter (g/m²) or kilograms per hectare (kg/ha)). This corrects for organism size differences, providing a more accurate picture of ecosystem structure than numbers alone.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', margin: '30px 0' }}>
                        {/* UPRIGHT BIOMASS (LAND) */}
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #d1fae5', boxShadow: '0 10px 30px rgba(16, 185, 129, 0.05)' }}>
                            <h5 style={{ color: '#065f46', fontWeight: '800', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>🌲</span> Upright Pattern (Terrestrial)
                            </h5>
                            <p style={{ fontSize: '0.9em', color: '#374151', lineHeight: '1.6', marginBottom: '20px' }}>
                                In forests and grasslands, producer biomass far exceeds consumer biomass because:
                            </p>
                            <ul style={{ fontSize: '0.85em', color: '#475569', paddingLeft: '20px', marginBottom: '20px' }}>
                                <li style={{ marginBottom: '8px' }}><strong>Long-lived producers:</strong> Biomass accumulates over years (trees live decades to centuries).</li>
                                <li style={{ marginBottom: '8px' }}><strong>10% transfer:</strong> Only ~10% of biomass transfers; 90% lost to respiration and waste.</li>
                                <li><strong>Metabolic rates:</strong> Consumer metabolic rates are higher, requiring constant feeding but keeping total biomass low.</li>
                            </ul>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8em' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #10b981' }}>
                                        <th style={{ textAlign: 'left', padding: '10px' }}>Trophic Level</th>
                                        <th style={{ textAlign: 'right', padding: '10px' }}>Biomass (kg/ha)</th>
                                        <th style={{ textAlign: 'right', padding: '10px' }}>% of Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '10px' }}>Producers (Trees)</td><td style={{ textAlign: 'right', padding: '10px' }}>200,000</td><td style={{ textAlign: 'right', padding: '10px' }}>99.5%</td></tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '10px' }}>Primary Consumers</td><td style={{ textAlign: 'right', padding: '10px' }}>800</td><td style={{ textAlign: 'right', padding: '10px' }}>0.4%</td></tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '10px' }}>Secondary Consumers</td><td style={{ textAlign: 'right', padding: '10px' }}>80</td><td style={{ textAlign: 'right', padding: '10px' }}>0.04%</td></tr>
                                    <tr><td style={{ padding: '10px' }}>Tertiary Consumers</td><td style={{ textAlign: 'right', padding: '10px' }}>8</td><td style={{ textAlign: 'right', padding: '10px' }}>0.004%</td></tr>
                                </tbody>
                            </table>
                            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '12px', fontSize: '0.85em', color: '#166534', fontStyle: 'italic' }}>
                                <strong>Interpretation:</strong> Producer biomass is 250× greater than all consumer biomass combined. This extreme difference reflects long-term biomass accumulation in woody plants and inefficient energy transfer.
                            </div>
                        </div>

                        {/* INVERTED BIOMASS (OCEAN) */}
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #dbeafe', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.05)' }}>
                            <h5 style={{ color: '#1e40af', fontWeight: '800', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>🌊</span> Inverted Pattern (Aquatic)
                            </h5>
                            <p style={{ fontSize: '0.9em', color: '#374151', lineHeight: '1.6', marginBottom: '20px' }}>
                                In pelagic ecosystems, consumer biomass exceeds producer biomass at any given moment due to timing differences:
                            </p>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8em', marginBottom: '20px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #3b82f6' }}>
                                        <th style={{ textAlign: 'left', padding: '10px' }}>Trophic Level</th>
                                        <th style={{ textAlign: 'right', padding: '10px' }}>Biomass (g/m²)</th>
                                        <th style={{ textAlign: 'right', padding: '10px' }}>Turnover Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '10px' }}>Secondary (Fish)</td><td style={{ textAlign: 'right', padding: '10px' }}>10</td><td style={{ textAlign: 'right', padding: '10px' }}>Months</td></tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '10px' }}>Primary (Zooplankton)</td><td style={{ textAlign: 'right', padding: '10px' }}>20</td><td style={{ textAlign: 'right', padding: '10px' }}>2-4 weeks</td></tr>
                                    <tr style={{ backgroundColor: '#eff6ff' }}><td style={{ padding: '10px' }}><strong>Producers (Phyto)</strong></td><td style={{ textAlign: 'right', padding: '10px' }}><strong>4</strong></td><td style={{ textAlign: 'right', padding: '10px' }}><strong>1-5 days</strong></td></tr>
                                </tbody>
                            </table>
                            <div style={{ backgroundColor: 'white', border: '1px solid #dbeafe', padding: '15px', borderRadius: '12px' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '0.85em', color: '#1e40af', marginBottom: '8px' }}>Why inverted?</div>
                                <ul style={{ fontSize: '0.8em', color: '#444', paddingLeft: '18px', margin: 0 }}>
                                    <li style={{ marginBottom: '5px' }}><strong>Rapid turnover:</strong> Phytoplankton reproduce every 1-5 days, creating massive production despite low standing stock.</li>
                                    <li style={{ marginBottom: '5px' }}><strong>Slow consumer turnover:</strong> Zooplankton and fish live weeks to years, accumulating biomass.</li>
                                    <li><strong>Annual productivity:</strong> If phytoplankton biomass turns over 100× per year, annual production = 4 g/m² × 100 = 400 g/m²/year, far exceeding consumer production—the energy laws still hold when you consider time.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '20px', padding: '25px' }}>
                        <p style={{ margin: 0, fontSize: '0.92em', color: '#166534', lineHeight: '1.6' }}>
                            <strong>Key Lesson:</strong> Biomass is a "stock" (amount at one moment); productivity is a "flow" (amount produced over time). Inverted biomass pyramids occur when producers have high productivity but low standing stock due to rapid turnover.
                        </p>
                    </div>
                </div>

                <div style={{ margin: '60px 0' }}>
                    <h4 style={{ color: '#1e293b', fontSize: '1.4em', fontWeight: '900', borderBottom: '2px solid #f59e0b', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' }}>3. Pyramid of Energy (Pyramid of Productivity)</h4>
                    <p style={{ color: '#475569', fontSize: '1em', lineHeight: '1.7' }}>
                        A pyramid of energy represents the <strong>rate of energy flow</strong> or productivity at each trophic level, typically measured as kilocalories per square meter per year (kcal/m²/year) or kilojoules per square meter per year (kJ/m²/year). This is the <strong>ONLY</strong> pyramid type that is <strong>ALWAYS upright</strong>, regardless of ecosystem type, because it reflects the fundamental thermodynamic reality of energy flow.
                    </p>

                    <div style={{ backgroundColor: '#fffbeb', padding: '60px 20px', borderRadius: '32px', border: '1px solid #fef3c7', margin: '40px 0', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Pyramid of Energy: Universal Energy Flow Pattern</div>
                            <h2 style={{ color: '#92400e', fontSize: '1.8em', fontWeight: '800', margin: 0 }}>Pyramid of Energy (ALWAYS Upright)</h2>
                        </div>

                        <div style={{ position: 'relative', width: '100%', maxWidth: '850px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', padding: '50px 40px', border: '1px solid #fef3c7', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}>
                            <div style={{ position: 'relative', paddingRight: '120px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                    {[
                                        { level: 'APEX', val: '1 kcal/m²/year', detail: 'Large carnivore productivity', color: '#991b1b', width: '25%', heat: '9 kcal' },
                                        { level: 'TERTIARY', val: '10 kcal/m²/year', detail: 'Secondary carnivore productivity', color: '#dc2626', width: '45%', heat: '90 kcal' },
                                        { level: 'SECONDARY', val: '100 kcal/m²/year', detail: 'Small carnivore productivity', color: '#f97316', width: '65%', heat: '900 kcal' },
                                        { level: 'PRIMARY CONSUMERS', val: '1,000 kcal/m²/year', detail: 'Herbivore productivity', color: '#f59e0b', width: '85%', heat: '9,000 kcal' },
                                        { level: 'PRODUCERS', val: '10,000 kcal/m²/year', detail: 'Gross Primary Productivity (GPP)', color: '#10b981', width: '100%', heat: '90,000 kcal' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <div style={{
                                                width: item.width, height: '70px', backgroundColor: item.color, color: 'white',
                                                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', padding: '10px', marginInline: 'auto',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <div style={{ fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.level}: {item.val}</div>
                                                <div style={{ fontSize: '0.8em', opacity: 0.9 }}>{item.detail}</div>
                                            </div>
                                            {/* HEAT LOSS ARROW */}
                                            {i < 4 && (
                                                <div style={{ position: 'absolute', right: '-80px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.8em', width: '60px' }}>{item.heat} <br /><span style={{ fontSize: '0.7em', fontWeight: 'normal' }}>(90% loss)</span></div>
                                                    <div style={{ width: '40px', height: '2px', backgroundColor: '#ef4444', position: 'relative' }}>
                                                        <div style={{ position: 'absolute', right: '-5px', top: '-4px', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '10px solid #ef4444' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#fffbeb', borderRadius: '16px', border: '1px solid #fef3c7' }}>
                                <h5 style={{ margin: '0 0 15px 0', color: '#92400e', fontSize: '1.1em', fontWeight: '800' }}>Why Energy Pyramids Are ALWAYS Upright:</h5>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div style={{ fontSize: '0.85em', color: '#b45309', lineHeight: '1.6' }}>
                                        <p style={{ margin: '0 0 10px 0' }}><strong>Second Law of Thermodynamics:</strong> Energy transformations are always inefficient; energy is inevitably lost as heat during transfer.</p>
                                        <p style={{ margin: 0 }}><strong>Respiration losses:</strong> Organisms use 60-90% of consumed energy for metabolism, movement, and heat production.</p>
                                    </div>
                                    <div style={{ fontSize: '0.85em', color: '#b45309', lineHeight: '1.6' }}>
                                        <p style={{ margin: '0 0 10px 0' }}><strong>Waste production:</strong> Undigested material in feces and urine removes usable energy from the food chain.</p>
                                        <p style={{ margin: 0 }}><strong>Unconsumed biomass:</strong> Not all tissue is eaten (roots, wood, bones), trapping energy at lower levels.</p>
                                    </div>
                                </div>
                                <div style={{ marginTop: '15px', textAlign: 'center', backgroundColor: '#92400e', color: 'white', padding: '10px', borderRadius: '8px', fontSize: '0.9em', fontWeight: 'bold' }}>
                                    Result: Only ~10% (range 5-20%) of energy reaches the next level — The 10% Rule.
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.95em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                            Figure 3: Pyramid of energy showing the 10% rule—only about 10% of energy transfers between trophic levels, making this pyramid type always upright.
                        </p>
                    </div>
                </div>

                {/* 10% RULE SECTION */}
                <div style={{ backgroundColor: '#fdf2f8', padding: '40px', borderRadius: '32px', border: '1px solid #fce7f3', margin: '40px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <div style={{ backgroundColor: '#be185d', color: 'white', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4em' }}>🔬</div>
                        <h4 style={{ margin: 0, color: '#9d174d', fontSize: '1.4em', fontWeight: '900' }}>The 10% Rule (Lindeman's Efficiency)</h4>
                    </div>
                    <p style={{ color: '#475569', fontSize: '1.05em', lineHeight: '1.7', marginBottom: '30px' }}>
                        Ecologist <strong>Raymond Lindeman (1942)</strong> established that approximately 10% of energy from one trophic level transfers to the next. More precise measurements show the range is 5-20%, varying by several factors:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                        {[
                            { title: 'Organism Type', desc: 'Ectotherms (cold-blooded) are more efficient (~13%) than endotherms (~10%) as they don\'t expend energy on body heat.', icon: '🦎' },
                            { title: 'Tissue Type', desc: 'Carnivores are more efficient than herbivores because meat is easier to digest than complex plant cellulose.', icon: '🥩' },
                            { title: 'Environment', desc: 'Warmer temperatures generally increase metabolic efficiency up to optimal physiological ranges.', icon: '🌡️' }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #fbcfe8' }}>
                                <div style={{ fontSize: '1.5em', marginBottom: '10px' }}>{item.icon}</div>
                                <div style={{ fontWeight: 'bold', color: '#9d174d', marginBottom: '5px' }}>{item.title}</div>
                                <div style={{ fontSize: '0.85em', color: '#64748b', lineHeight: '1.5' }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#9d174d', color: 'white', padding: '25px', borderRadius: '20px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.1em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>📍 Implications for Food Chain Length:</div>
                        <p style={{ margin: 0, fontSize: '0.92em', lineHeight: '1.6', opacity: 0.95 }}>
                            The 10% rule limits food chain length to <strong>4-5 levels maximum</strong>. With only 0.1% or less of original energy reaching the 5th level, there is simply not enough energy to support another functional level. This is why few ecosystems have more than 5 trophic levels.
                        </p>
                    </div>
                </div>

                {/* COMPARISON TABLE */}
                <div style={{ margin: '50px 0' }}>
                    <h4 style={{ color: '#1e293b', fontSize: '1.3em', fontWeight: '800', marginBottom: '25px' }}>Comparison of Pyramid Types</h4>
                    <div style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#475569' }}>Feature</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#3b82f6' }}>Pyramid of Numbers</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#10b981' }}>Pyramid of Biomass</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#f59e0b' }}>Pyramid of Energy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { f: 'What\'s Measured', n: 'Count of individuals', b: 'Total dry mass (g/m²)', e: 'Energy flow rate (kcal/m²/yr)' },
                                    { f: 'Always Upright?', n: '❌ NO (Tree/Parasite)', b: '❌ NO (Aquatic systems)', e: '✅ YES (Thermodynamics)' },
                                    { f: 'Accounts for Size?', n: '❌ NO (1 tree = 1 grass)', b: '✅ YES', e: '✅ YES' },
                                    { f: 'Accounts for Time?', n: '❌ NO (Snapshot)', b: '❌ NO (Standing stock)', e: '✅ YES (Productivity/yr)' },
                                    { f: 'Accuracy', n: 'Least accurate', b: 'Moderate', e: 'Highest (actual flow)' },
                                    { f: 'Ease of Measure', n: 'Easiest (counting)', b: 'Moderate (weighing)', e: 'Hardest (productivity)' }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#f8fafc', color: '#475569' }}>{row.f}</td>
                                        <td style={{ padding: '15px', color: '#64748b' }}>{row.n}</td>
                                        <td style={{ padding: '15px', color: '#64748b' }}>{row.b}</td>
                                        <td style={{ padding: '15px', color: '#64748b' }}>{row.e}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PROBLEM-SOLVING PRACTICE SECTION */}
                <div style={{ margin: '80px 0', padding: '50px', backgroundColor: '#f8fafc', borderRadius: '40px', border: '1px solid #e2e8f0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '2em', fontWeight: '900', color: '#0f172a', margin: 0 }}>🧠 Problem-Solving Practice</h3>
                        <p style={{ color: '#64748b', marginTop: '10px' }}>Apply your knowledge to real-world ecological scenarios</p>
                    </div>

                    {/* PROBLEM 1 */}
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ backgroundColor: '#3b82f6', color: 'white', padding: '6px 15px', borderRadius: '20px', fontSize: '0.8em', fontWeight: 'bold' }}>PROBLEM 1</div>
                            <h4 style={{ margin: 0, color: '#1e293b', fontSize: '1.4em', fontWeight: '800' }}>📘 Lake Ecosystem Food Web Analysis</h4>
                        </div>

                        <div style={{ backgroundColor: '#f1f5f9', padding: '25px', borderRadius: '16px', marginBottom: '30px', borderLeft: '4px solid #3b82f6' }}>
                            <h5 style={{ margin: '0 0 10px 0', color: '#334155' }}>Scenario:</h5>
                            <p style={{ margin: 0, fontSize: '0.95em', lineHeight: '1.6', color: '#475569' }}>
                                In a lake ecosystem, ecologists document the following feeding relationships:<br /><br />
                                • <strong>Phytoplankton</strong> are eaten by: Zooplankton, Small fish larvae<br />
                                • <strong>Zooplankton</strong> are eaten by: Small fish, Juvenile large fish<br />
                                • <strong>Small fish</strong> are eaten by: Large fish, Herons, Otters<br />
                                • <strong>Large fish</strong> are eaten by: Osprey (fish-eating hawks), Otters<br />
                                • <strong>Herons</strong> also eat: Frogs, Crayfish<br />
                                • <strong>Otters</strong> also eat: Crayfish, Frogs<br />
                                • <strong>All dead organisms</strong> are consumed by: Bacteria and fungi
                            </p>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h5 style={{ color: '#1e293b', marginBottom: '15px' }}>Critical Thinking Questions:</h5>
                            <ol style={{ paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                                <li>Draw or describe the food web structure. Identify which organisms are <strong>omnivores</strong>.</li>
                                <li>What would happen if a disease eliminated <strong>90% of small fish</strong>? Trace the likely cascading effects.</li>
                                <li>Which organism(s) appear to be <strong>keystone species</strong>? Justify your answer.</li>
                                <li>If <strong>pollutants (mercury)</strong> enter the system, which organism would likely have the highest concentration? Explain <strong>biomagnification</strong>.</li>
                            </ol>
                        </div>

                        <details style={{ cursor: 'pointer' }}>
                            <summary style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1em', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.2em' }}>👁️</span> Click to Show Detailed Solution
                            </summary>
                            <div style={{ marginTop: '20px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <h5 style={{ color: '#3b82f6', marginTop: 0, fontWeight: '800' }}>Part 1: Food Web Structure & Omnivores</h5>
                                <p style={{ fontSize: '0.9em', color: '#475569', lineHeight: '1.6' }}>
                                    <strong>Base:</strong> Phytoplankton (Producers)<br />
                                    <strong>Primary Consumers:</strong> Zooplankton, Small fish larvae<br />
                                    <strong>Secondary Consumers:</strong> Small fish (eat zooplankton), Juvenile large fish<br />
                                    <strong>Tertiary/Top Consumers:</strong> Large fish, Herons, Otters, Osprey<br />
                                    <strong>Decomposers:</strong> Bacteria and fungi
                                </p>
                                <p style={{ fontSize: '0.9em', color: '#475569', lineHeight: '1.6' }}>
                                    <strong>Omnivores (feeding at multiple trophic levels):</strong><br />
                                    • <strong>Small fish:</strong> Eat both phytoplankton (primary consumer) and zooplankton (secondary consumer)<br />
                                    • <strong>Large fish:</strong> Eat zooplankton (secondary) and small fish (tertiary)<br />
                                    • <strong>Herons:</strong> Eat small fish, frogs, and crayfish—likely spanning 3rd and 4th trophic levels<br />
                                    • <strong>Otters:</strong> Similar to herons, eating across multiple levels
                                </p>

                                <h5 style={{ color: '#3b82f6', fontWeight: '800' }}>Part 2: Cascading Effects of Small Fish Decline</h5>
                                <p style={{ fontSize: '0.9em', color: '#475569', fontWeight: 'bold' }}>Immediate effects (direct):</p>
                                <ul style={{ fontSize: '0.9em', color: '#475569', paddingLeft: '20px' }}>
                                    <li>Zooplankton populations would <strong>INCREASE</strong> dramatically (reduced predation pressure)</li>
                                    <li>Large fish, herons, and otters would face <strong>FOOD SHORTAGE</strong></li>
                                </ul>
                                <p style={{ fontSize: '0.9em', color: '#475569', fontWeight: 'bold' }}>Secondary effects (cascading):</p>
                                <ul style={{ fontSize: '0.9em', color: '#475569', paddingLeft: '20px' }}>
                                    <li>Phytoplankton would <strong>DECREASE</strong> due to increased zooplankton grazing</li>
                                    <li>Water clarity might <strong>DECREASE</strong> (fewer phytoplankton, more nutrients from waste)</li>
                                    <li>Large fish populations would <strong>DECLINE</strong> from starvation or emigration</li>
                                    <li>Osprey populations would <strong>DECLINE</strong> (dependent on large fish)</li>
                                    <li>Herons and otters might <strong>INCREASE</strong> predation on alternative prey (frogs, crayfish), potentially depleting those populations</li>
                                </ul>
                                <p style={{ fontSize: '0.9em', color: '#444', fontStyle: 'italic', backgroundColor: '#eff6ff', padding: '15px', borderRadius: '12px' }}>
                                    <strong>Ecosystem shift:</strong> The lake might transition from fish-dominated to invertebrate-dominated, fundamentally changing ecosystem function and structure—this demonstrates how mid-level species can be critical for food web integrity.
                                </p>

                                <h5 style={{ color: '#3b82f6', fontWeight: '800' }}>Part 3: Keystone Species Identification</h5>
                                <ul style={{ fontSize: '0.9em', color: '#475569', paddingLeft: '20px' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>Small fish</strong> are likely keystone species because they connect multiple trophic levels and their removal causes disproportionate ripples. They regulate herbivore (zooplankton) populations, indirectly protecting primary producers.</li>
                                    <li style={{ marginBottom: '10px' }}><strong>Zooplankton</strong> could also be keystone because they control phytoplankton populations and serve as the primary link between producers and higher consumers. Their removal would collapse the food web upward.</li>
                                    <li><strong>Otters</strong> are less likely keystone species here because they have dietary flexibility and other predators (herons, osprey) can partially compensate.</li>
                                </ul>

                                <h5 style={{ color: '#3b82f6', fontWeight: '800' }}>Part 4: Biomagnification Analysis</h5>
                                <p style={{ fontSize: '0.9em', color: '#475569' }}>
                                    <strong>Highest mercury concentration:</strong> OSPREY (fish-eating hawks)
                                </p>
                                <p style={{ fontSize: '0.85em', color: '#475569', backgroundColor: '#fdf2f8', padding: '15px', borderRadius: '12px' }}>
                                    <strong>Biomagnification Pathway:</strong><br />
                                    • Water baseline: 0.001 ppm mercury<br />
                                    • Phytoplankton bioaccumulate: 0.01 ppm (10× concentration)<br />
                                    • Zooplankton consume thousands of phytoplankton: 0.5 ppm (500×)<br />
                                    • Small fish eat thousands of zooplankton over lifetime: 2 ppm (2,000×)<br />
                                    • Large fish eat hundreds of small fish over years: 10 ppm (10,000×)<br />
                                    • Osprey eat hundreds of large fish over lifetime: 30-50 ppm (30,000-50,000×)
                                </p>
                                <p style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                                    <strong>Why osprey &gt; otters:</strong> Osprey eat ONLY fish (specialized diet), and specifically target large fish. Otters eat frogs and crayfish too, diluting their mercury intake.
                                </p>
                                <p style={{ fontSize: '0.9em', color: '#475569', marginTop: '10px' }}>
                                    <strong>Mechanism:</strong> Mercury is fat-soluble and cannot be easily excreted. Each organism accumulates mercury from all prey consumed, and top predators eating contaminated prey for years accumulate extreme concentrations. <strong>Human relevance:</strong> This is why pregnant women are warned against eating top predators like tuna or shark.
                                </p>
                            </div>
                        </details>
                    </div>

                    {/* PROBLEM 2 */}
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ backgroundColor: '#10b981', color: 'white', padding: '6px 15px', borderRadius: '20px', fontSize: '0.8em', fontWeight: 'bold' }}>PROBLEM 2</div>
                            <h4 style={{ margin: 0, color: '#1e293b', fontSize: '1.4em', fontWeight: '800' }}>📙 Ecological Pyramid Construction</h4>
                        </div>

                        <p style={{ fontSize: '0.95em', color: '#475569', marginBottom: '25px' }}>
                            Data provided from a grassland ecosystem study (per hectare per year):
                        </p>

                        <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f0fdf4', borderBottom: '2px solid #10b981' }}>
                                        <th style={{ padding: '12px', textAlign: 'left' }}>Trophic Level</th>
                                        <th style={{ padding: '12px', textAlign: 'right' }}>Biomass (kg/ha)</th>
                                        <th style={{ padding: '12px', textAlign: 'right' }}>Energy (kcal/ha/yr)</th>
                                        <th style={{ padding: '12px', textAlign: 'right' }}>Individuals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td style={{ padding: '12px' }}>Producers (Grasses)</td><td style={{ textAlign: 'right' }}>15,000</td><td style={{ textAlign: 'right' }}>60,000,000</td><td style={{ textAlign: 'right' }}>5,000,000</td></tr>
                                    <tr><td style={{ padding: '12px' }}>Primary Consumers</td><td style={{ textAlign: 'right' }}>1,200</td><td style={{ textAlign: 'right' }}>5,000,000</td><td style={{ textAlign: 'right' }}>50,000</td></tr>
                                    <tr><td style={{ padding: '12px' }}>Secondary Consumers</td><td style={{ textAlign: 'right' }}>90</td><td style={{ textAlign: 'right' }}>400,000</td><td style={{ textAlign: 'right' }}>2,000</td></tr>
                                    <tr><td style={{ padding: '12px' }}>Tertiary Consumers</td><td style={{ textAlign: 'right' }}>8</td><td style={{ textAlign: 'right' }}>30,000</td><td style={{ textAlign: 'right' }}>50</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h5 style={{ color: '#1e293b', marginBottom: '15px' }}>Construction Questions:</h5>
                            <ol style={{ paddingLeft: '20px', color: '#444', lineHeight: '1.8' }}>
                                <li>Calculate the <strong>energy transfer efficiency</strong> from producers to primary consumers, and from primary to secondary consumers.</li>
                                <li>Construct a <strong>pyramid of numbers</strong>. Is it upright or inverted? Explain why.</li>
                                <li>Construct a <strong>pyramid of biomass</strong>. Is it upright or inverted? Explain.</li>
                                <li>Construct a <strong>pyramid of energy</strong>. What does this tell us about food chain length?</li>
                                <li>Which pyramid type is <strong>most useful</strong> for this ecosystem? Justify your answer.</li>
                            </ol>
                        </div>

                        <details style={{ cursor: 'pointer' }}>
                            <summary style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1em', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.2em' }}>👁️</span> Click to Show Detailed Solution
                            </summary>
                            <div style={{ marginTop: '20px', padding: '30px', backgroundColor: '#f0fdf4', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
                                <h5 style={{ color: '#047857', marginTop: 0, fontWeight: '800' }}>Step 1: Energy Transfer Efficiency Calculations</h5>
                                <p style={{ fontSize: '0.9em', color: '#065f46', lineHeight: '1.6' }}>
                                    <strong>Producers to Primary:</strong> (5,000,000 / 60,000,000) × 100 = <strong>8.33%</strong><br />
                                    <strong>Primary to Secondary:</strong> (400,000 / 5,000,000) × 100 = <strong>8.0%</strong><br />
                                    <strong>Secondary to Tertiary:</strong> (30,000 / 400,000) × 100 = <strong>7.5%</strong><br />
                                    <em>Observation: Efficiencies are below the 10% theoretical average, indicating high metabolic/waste losses in this specific system.</em>
                                </p>

                                <h5 style={{ color: '#047857', fontWeight: '800' }}>Step 2: Pyramid of Numbers</h5>
                                <p style={{ fontSize: '0.9em', color: '#065f46' }}>
                                    <strong>Shape: UPRIGHT.</strong> The base (producers) has 5,000,000 individuals, while the top has only 50. <strong>Explanation:</strong> In a grassland, many small individual plants are required to support a smaller number of herbivores, which in turn support even fewer predators.
                                </p>

                                <h5 style={{ color: '#047857', fontWeight: '800' }}>Step 3: Pyramid of Biomass</h5>
                                <p style={{ fontSize: '0.9em', color: '#065f46' }}>
                                    <strong>Shape: UPRIGHT.</strong> 15,000 kg/ha producers &gt; 1.2k kg/ha primary consumers. <strong>Explanation:</strong> In terrestrial systems, producer biomass typically exceeds consumer biomass because producers are long-lived and accumulate mass, whereas energy transfer efficiency limits consumer growth.
                                </p>

                                <h5 style={{ color: '#047857', fontWeight: '800' }}>Step 4: Pyramid of Energy & Food Chain Length</h5>
                                <p style={{ fontSize: '0.9em', color: '#065f46' }}>
                                    <strong>Shape: ALWAYS UPRIGHT.</strong> This reflects the 2nd Law of Thermodynamics. <strong>Food Chain Length:</strong> Notice that by the 4th level, only 30,000 kcal remain. A 5th level would likely have less than 3,000 kcal available, which is insufficient to support a breeding population of larger predators.
                                </p>

                                <h5 style={{ color: '#047857', fontWeight: '800' }}>Step 5: Most Useful Pyramid Type</h5>
                                <p style={{ fontSize: '0.9em', color: '#065f46' }}>
                                    <strong>Answer: Pyramid of Energy.</strong> It is the most useful because it represents the actual <strong>flow</strong> of energy and the functional constraints of the ecosystem. Unlike numbers (which ignore size) or biomass (which ignores turnover and time), energy productivity reveals why the food chain is limited to its current length.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>


                <div style={{ backgroundColor: '#fff5f5', padding: '30px', borderRadius: '24px', border: '1px solid #fecaca' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#c53030', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.2em' }}>⚠️</span> Common Misconceptions:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#991b1b', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>1. "Pyramids of biomass are always upright":</strong> Reality is marine systems often show inverted biomass pyramids due to phytoplankton turnover speed.</li>
                        <li style={{ marginBottom: '10px' }}><strong>2. "Food chains are real":</strong> They are simplified teaching models; food webs are the functional reality.</li>
                        <li><strong>3. "Complexity equals stability":</strong> Not always—structure and keystone interactions matter more than just the number of species.</li>
                    </ul>
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
            </section >
        </div >
    );
};

export default Module1_6;
