'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_5: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which of the following describes a species whose impact on ecosystem structure is disproportionately large relative to its abundance?",
            options: [
                "Invasive Species",
                "Indicator Species",
                "Keystone Species",
                "Pioneer Species"
            ],
            correctAnswer: 2,
            explanation: "Keystone species (like sea otters or wolves) have a massive impact on the structure and balance of their ecosystem, often through trophic cascades."
        },
        {
            question: "What is the primary difference between detritivores and decomposers?",
            options: [
                "Detritivores are bacteria, while decomposers are animals",
                "Detritivores physically fragment dead matter, while decomposers chemically break it down",
                "Decomposers start the food chain, while detritivores end it",
                "There is no difference; they are identical functional roles"
            ],
            correctAnswer: 1,
            explanation: "Detritivores (like earthworms) physically fragment dead material, increasing surface area for decomposers (bacteria/fungi) to perform complete chemical breakdown."
        },
        {
            question: "Succession that occurs in an area where soil already exists after a disturbance (like a forest fire) is called:",
            options: [
                "Primary Succession",
                "Tertiary Succession",
                "Secondary Succession",
                "Climax Succession"
            ],
            correctAnswer: 2,
            explanation: "Secondary succession occurs in areas where an ecosystem existed previously and soil remains, making the recovery much faster than primary succession."
        },
        {
            question: "Approximately what percentage of energy is typically transferred from one trophic level to the next?",
            options: [
                "90%",
                "50%",
                "10%",
                "1%"
            ],
            correctAnswer: 2,
            explanation: "The 10% Rule states that only about 10% of the energy at one trophic level is passed to the next as biomass, while 90% is lost to heat and metabolism."
        },
        {
            question: "In the stages of primary succession, which organisms typically act as the pioneer species on bare rock?",
            options: [
                "Grasses and shrubs",
                "Aspen and birch trees",
                "Lichens and mosses",
                "Oaks and maples"
            ],
            correctAnswer: 2,
            explanation: "Lichens and mosses are pioneer species in primary succession because they can survive on bare rock, breaking it down into soil over time."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.5</div>
                <div className="lesson-title-main">
                    <h1>Consumers, Decomposers, Ecological Succession & Food Chains</h1>
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
                        Intermediate-Advanced
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Prerequisites</span>
                        Producers, Ecosystems
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pass Score</span>
                        70% or higher
                    </div>
                </div>

                <h3>What You'll Master: Learning Objectives</h3>
                <ul>
                    <li>Classify and differentiate between types of consumers (herbivores, carnivores, omnivores, detritivores) and analyze their functional roles in energy transfer through trophic levels</li>
                    <li>Evaluate the critical role of decomposers in nutrient cycling and explain how they complete the circular flow of matter in ecosystems</li>
                    <li>Analyze the stages of ecological succession (primary and secondary) and predict community changes over time in response to disturbances</li>
                    <li>Construct and interpret food chains and food webs, calculating energy transfer efficiency and biomass relationships between trophic levels</li>
                    <li>Synthesize understanding of ecosystem dynamics by connecting consumers, decomposers, succession, and food chains to assess ecosystem stability, resilience, and human impacts</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🔥 Why This Topic Matters</h3>
                <p>Imagine a massive construction project where a skyscraper is being built. You have architects (who design), construction workers (who build), and then you have the demolition and recycling crew (who break down old materials and recycle them for reuse). In nature's grand construction project—the ecosystem—producers are the architects capturing energy, consumers are the workers using that energy, and decomposers are the essential recycling crew ensuring nothing goes to waste. Without any one of these roles, the entire system collapses.</p>

                <p>Understanding consumers, decomposers, and food chains is fundamental to comprehending how energy and matter flow through ecosystems. Every bite of food you eat, every breath you take, and every product you use is connected to these ecological relationships. When you eat a hamburger, you're participating in a food chain. When you see a forest grow back after a fire, you're witnessing ecological succession. When autumn leaves decompose into rich soil, you're observing decomposers at work.</p>

                <p>These concepts are not just academic—they're essential for addressing critical global challenges. Managing fisheries requires understanding marine food webs. Restoring degraded lands demands knowledge of succession. Mitigating climate change depends on understanding how decomposition releases carbon. Agricultural sustainability requires optimizing nutrient cycling by decomposers. For students pursuing careers in environmental science, conservation, wildlife management, agriculture, or environmental policy, mastering these interconnected concepts is absolutely crucial.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>💡 Real-World Applications:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Fisheries Management:</strong> Understanding food webs prevents overfishing of key species that destabilize entire marine ecosystems (e.g., sea otter-urchin-kelp dynamics)</li>
                        <li style={{ marginBottom: '10px' }}><strong>Reforestation & Restoration:</strong> Knowledge of succession guides effective ecosystem restoration after mining, logging, or natural disasters</li>
                        <li style={{ marginBottom: '10px' }}><strong>Composting & Waste Management:</strong> Harnessing decomposers reduces landfill waste and creates nutrient-rich soil amendments</li>
                        <li style={{ marginBottom: '10px' }}><strong>Biological Pest Control:</strong> Using predators (consumers) to control agricultural pests reduces pesticide use and protects ecosystems</li>
                        <li style={{ marginBottom: '10px' }}><strong>Conservation Biology:</strong> Protecting keystone species and understanding trophic cascades is essential for maintaining biodiversity</li>
                        <li><strong>Climate Science:</strong> Decomposition rates affect atmospheric CO₂ levels; understanding decomposer activity in various climates informs carbon cycle models</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🦁 Part 1: Consumers - The Energy Transferers</h3>
                <h4>Definition & Fundamental Concepts</h4>
                <p><strong>What are Consumers?</strong> Consumers, also called heterotrophs, are organisms that cannot produce their own food and must obtain energy by consuming other organisms. Unlike producers who create organic matter from inorganic substances, consumers depend entirely on pre-existing organic matter for their energy and nutrients. Think of consumers as customers in nature's restaurant—they don't cook their own meals; they eat what others have prepared.</p>

                <p>Consumers occupy the second through fifth trophic levels in food chains, with each level representing organisms that are one step further removed from producers. The term "consumer" encompasses an enormous diversity of life—from microscopic zooplankton to massive blue whales, from tiny beetles to elephants, from bacteria that consume dead matter to apex predators like sharks and eagles.</p>

                <p><strong>Why do consumers exist?</strong> From an evolutionary perspective, the heterotrophic strategy evolved because obtaining energy by consuming existing organic matter is often more efficient than manufacturing it from scratch, especially in environments where light or chemical energy sources are limited. Consumers play critical ecological roles: they transfer energy through food webs, control population sizes through predation and herbivory, facilitate nutrient cycling, aid in seed dispersal and pollination, and maintain ecosystem balance through complex interactions.</p>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📌 Key Consumer Terminology:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Heterotroph:</strong> Organism that obtains energy by consuming organic compounds produced by other organisms</li>
                        <li style={{ marginBottom: '8px' }}><strong>Herbivore:</strong> Primary consumer that feeds exclusively or primarily on plants (e.g., deer, rabbits, grasshoppers)</li>
                        <li style={{ marginBottom: '8px' }}><strong>Carnivore:</strong> Consumer that feeds on animal flesh; can be secondary, tertiary, or higher-level consumers (e.g., lions, hawks, sharks)</li>
                        <li style={{ marginBottom: '8px' }}><strong>Omnivore:</strong> Consumer that feeds on both plants and animals (e.g., bears, humans, raccoons)</li>
                        <li style={{ marginBottom: '8px' }}><strong>Detritivore:</strong> Consumer that feeds on dead organic matter (detritus) without fully decomposing it (e.g., earthworms, millipedes, vultures)</li>
                        <li style={{ marginBottom: '8px' }}><strong>Trophic Level:</strong> Position in a food chain; primary consumers are 2nd level, secondary consumers 3rd level, etc.</li>
                        <li><strong>Keystone Species:</strong> Consumer whose impact on ecosystem structure is disproportionately large relative to its abundance</li>
                    </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #dcfce7' }}>
                            <span style={{ fontSize: '3em' }}>🦌</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Deer - Herbivore</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}><strong>Primary Consumer:</strong> Herbivores like deer feed directly on producers, occupying the second trophic level in food chains.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#fef2f2', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #fecaca' }}>
                            <span style={{ fontSize: '3em' }}>🦁</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Lion - Carnivore</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}><strong>Secondary/Tertiary Consumer:</strong> Apex predators like lions occupy higher trophic levels, controlling herbivore populations.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#fff7ed', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ffedd5' }}>
                            <span style={{ fontSize: '3em' }}>🐻</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Bear - Omnivore</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}><strong>Omnivore:</strong> Grizzly bears feed at multiple trophic levels, eating both plants (berries, roots) and animals (fish, mammals).</p>
                    </div>
                </div>

                <h4>Classification of Consumers by Trophic Level</h4>
                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Consumer Type</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Trophic Level</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Food Source</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Examples</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Energy Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Primary Consumers (Herbivores)</strong></td>
                                <td style={{ padding: '12px' }}>2nd Level</td>
                                <td style={{ padding: '12px' }}>Living producers (plants, algae)</td>
                                <td style={{ padding: '12px' }}>Deer, grasshoppers, zooplankton, cows</td>
                                <td style={{ padding: '12px' }}>~10% of producer NPP</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Secondary Consumers (Carnivores/Omnivores)</strong></td>
                                <td style={{ padding: '12px' }}>3rd Level</td>
                                <td style={{ padding: '12px' }}>Primary consumers</td>
                                <td style={{ padding: '12px' }}>Snakes, small fish, frogs, spiders, foxes</td>
                                <td style={{ padding: '12px' }}>~1% of producer NPP</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Tertiary Consumers (Top Carnivores)</strong></td>
                                <td style={{ padding: '12px' }}>4th Level</td>
                                <td style={{ padding: '12px' }}>Secondary consumers</td>
                                <td style={{ padding: '12px' }}>Lions, sharks, eagles, killer whales</td>
                                <td style={{ padding: '12px' }}>~0.1% of producer NPP</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}><strong>Quaternary Consumers (Apex Predators)</strong></td>
                                <td style={{ padding: '12px' }}>5th Level (rare)</td>
                                <td style={{ padding: '12px' }}>Tertiary consumers</td>
                                <td style={{ padding: '12px' }}>Killer whales (eating sharks), large eagles</td>
                                <td style={{ padding: '12px' }}>~0.01% of producer NPP</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Specialized Consumer Adaptations</h4>
                <p><strong>Herbivore Adaptations:</strong> Herbivores have evolved remarkable adaptations to extract nutrition from plant material, which is often difficult to digest due to cellulose cell walls. Ruminants (cows, deer, giraffes) have multi-chambered stomachs with symbiotic bacteria that break down cellulose. Hindgut fermenters (horses, rabbits) have enlarged cecums or colons for bacterial fermentation. Many herbivores have specialized teeth—flat molars for grinding plant material—and extremely long digestive tracts to maximize nutrient extraction. Some, like koalas feeding on eucalyptus, have evolved tolerance to plant toxins that would poison other animals.</p>

                <p><strong>Carnivore Adaptations:</strong> Carnivores have evolved for hunting and consuming prey efficiently. They typically have sharp teeth (canines for killing, carnassials for shearing meat), strong jaws, keen senses (vision, smell, hearing for detecting prey), speed or stealth for capturing prey, and shorter digestive systems (meat is easier to digest than plant matter). Some have specialized adaptations: snakes have flexible jaws and venom, eagles have powerful talons and beaks, and sharks have multiple rows of replaceable teeth.</p>

                <p><strong>Omnivore Flexibility:</strong> Omnivores like bears have diverse dentition—sharp canines for meat and flat molars for plants—and medium-length digestive systems that can handle both food types. This dietary flexibility allows omnivores to survive in changing conditions, switching food sources seasonally or when one becomes scarce. Humans are highly successful omnivores, though our hunting and gathering strategies rely more on tool use and intelligence than specialized physical adaptations.</p>

                <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '40px 0', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Energy Flow Through Consumer Trophic Levels</div>
                        <h2 style={{ color: '#1e293b', fontSize: '1.8em', fontWeight: '800', margin: 0 }}>Energy Pyramid: Energy Available at Each Trophic Level</h2>
                    </div>

                    <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {/* PYRAMID CONTAINER */}
                        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>

                            {/* APEX */}
                            <div style={{
                                width: '15%', minWidth: '120px', height: '80px', backgroundColor: '#b91c1c', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', padding: '20px 10px 5px 10px'
                            }}>
                                <div style={{ fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>APEX</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '800' }}>1 kcal (0.01%)</div>
                            </div>

                            {/* TERTIARY */}
                            <div style={{
                                width: '35%', minWidth: '280px', height: '100px', backgroundColor: '#e11d48', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)', padding: '10px'
                            }}>
                                <div style={{ fontSize: '0.8em', fontWeight: 'bold', textTransform: 'uppercase' }}>TERTIARY CONSUMERS</div>
                                <div style={{ fontSize: '1em', fontWeight: '800' }}>10 kcal (0.1%)</div>
                                <div style={{ fontSize: '0.7em', opacity: 0.9 }}>Hawks, Lions, Sharks</div>
                            </div>

                            {/* SECONDARY */}
                            <div style={{
                                width: '55%', minWidth: '440px', height: '110px', backgroundColor: '#ea580c', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)', padding: '10px'
                            }}>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold', textTransform: 'uppercase' }}>SECONDARY CONSUMERS</div>
                                <div style={{ fontSize: '1.1em', fontWeight: '800' }}>100 kcal (1%)</div>
                                <div style={{ fontSize: '0.8em', opacity: 0.9 }}>Snakes, Small Fish, Frogs</div>
                            </div>

                            {/* PRIMARY */}
                            <div style={{
                                width: '75%', minWidth: '600px', height: '120px', backgroundColor: '#f59e0b', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)', padding: '10px'
                            }}>
                                <div style={{ fontSize: '1em', fontWeight: 'bold', textTransform: 'uppercase' }}>PRIMARY CONSUMERS (Herbivores)</div>
                                <div style={{ fontSize: '1.2em', fontWeight: '800' }}>1,000 kcal (10%)</div>
                                <div style={{ fontSize: '0.85em', opacity: 0.9 }}>Deer, Grasshoppers, Zooplankton</div>
                            </div>

                            {/* PRODUCERS */}
                            <div style={{
                                width: '95%', minWidth: '760px', height: '130px', backgroundColor: '#10b981', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)', padding: '10px'
                            }}>
                                <div style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'uppercase' }}>PRODUCERS</div>
                                <div style={{ fontSize: '1.4em', fontWeight: '800' }}>10,000 kcal (100%)</div>
                                <div style={{ fontSize: '0.95em', opacity: 0.9 }}>Plants, Algae, Phytoplankton</div>
                            </div>

                            {/* LOSS ARROWS LAYER (OVERLAY) */}
                            <div style={{ position: 'absolute', right: '0', top: '150px', display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'flex-start' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '40px', height: '2px', backgroundColor: '#ef4444', position: 'relative' }}>
                                            <div style={{ position: 'absolute', right: '-8px', top: '-6px', width: '0', height: '0', borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '12px solid #ef4444' }}></div>
                                        </div>
                                        <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#ef4444' }}>90% Energy</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WHY DECREASES BOX */}
                        <div style={{ marginTop: '40px', width: '100%', maxWidth: '800px', backgroundColor: '#fffbeb', border: '2px solid #fcd34d', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1em', fontWeight: 'bold', color: '#92400e', marginBottom: '5px' }}>Why Energy Decreases:</div>
                            <div style={{ fontSize: '0.9em', color: '#92400e', lineHeight: '1.5' }}>
                                Each level uses ~90% of energy for metabolism, movement, heat production, and reproduction. Only ~10% becomes biomass available to next level.
                            </div>
                        </div>
                    </div>

                    <p style={{ fontSize: '0.95em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                        Figure 1: Energy pyramid showing dramatic energy loss at each trophic level, explaining why food chains rarely exceed 4-5 levels.
                    </p>
                </div>

                <h4>Keystone Species & Trophic Cascades</h4>
                <p>Some consumers have impacts far beyond what their population size would suggest. <strong>Keystone species</strong> are organisms whose presence, abundance, or role significantly affects ecosystem structure and function. The classic example is the sea otter in Pacific kelp forests. Sea otters prey on sea urchins, which feed on kelp. When sea otters were hunted nearly to extinction, urchin populations exploded, devastating kelp forests and all species dependent on them. Otter reintroduction restored balance—this is called a <strong>trophic cascade</strong>, where changes at one trophic level cascade through the entire food web.</p>

                <div style={{ backgroundColor: '#f0f9ff', padding: '30px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#0369a1' }}>🐺 Classic Case Study: Wolves in Yellowstone</h4>
                    <p style={{ fontSize: '0.95em' }}>When wolves were reintroduced to Yellowstone National Park in 1995 after 70 years of absence, the effects were dramatic and unexpected:</p>
                    <ul style={{ fontSize: '0.9em', color: '#0c4a6e', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Direct Effect:</strong> Wolves preyed on elk, reducing elk populations by about 50%</li>
                        <li style={{ marginBottom: '8px' }}><strong>Behavioral Change:</strong> Elk became more cautious, avoiding river valleys and open areas where they were vulnerable</li>
                        <li style={{ marginBottom: '8px' }}><strong>Vegetation Recovery:</strong> Aspens, willows, and cottonwoods regenerated in areas elk now avoided, growing to heights not seen in decades</li>
                        <li style={{ marginBottom: '8px' }}><strong>Beaver Return:</strong> Increased willow availability allowed beaver populations to recover; beavers built dams creating wetland habitat</li>
                        <li style={{ marginBottom: '8px' }}><strong>Bird Diversity:</strong> Regenerating forests and wetlands attracted songbirds, waterfowl, and raptors</li>
                        <li><strong>Physical Changes:</strong> Vegetation stabilized riverbanks, reducing erosion and even altering river courses</li>
                    </ul>
                    <p style={{ fontSize: '0.95em', fontWeight: 'bold', marginTop: '15px' }}>Key Lesson: This demonstrates how a single apex predator can restructure entire ecosystems through trophic cascades—a concept crucial for conservation and ecosystem management.</p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🍄 Part 2: Decomposers - Nature's Recyclers</h3>
                <h4>The Essential Role of Decomposers</h4>
                <p><strong>What are Decomposers?</strong> Decomposers are specialized heterotrophs that break down dead organic matter (detritus) into simpler inorganic compounds, releasing nutrients back into the environment for reuse by producers. They are the "sanitation engineers" of ecosystems, preventing the accumulation of dead material and ensuring the circular flow of nutrients. Without decomposers, dead plants and animals would pile up, nutrients would remain locked in corpses, and new life could not flourish.</p>

                <p>Decomposers include primarily fungi (mushrooms, molds, yeasts) and bacteria (both aerobic and anaerobic species), but also actinomycetes (filamentous bacteria) and some protozoans. It's important to distinguish decomposers from detritivores: detritivores (earthworms, millipedes, vultures) physically consume and fragment dead material but don't chemically break it down completely; decomposers chemically break organic compounds into inorganic nutrients (CO₂, NH₃, H₂O, minerals).</p>

                <p><strong>Why are decomposers critical?</strong> Decomposers perform three irreplaceable ecosystem services: (1) Nutrient Recycling—they return nitrogen, phosphorus, carbon, and other elements from dead matter to soil and water, making them available for producers; (2) Carbon Cycling—they release CO₂ during decomposition, which plants use for photosynthesis, and they help sequester carbon in soil organic matter; (3) Energy Recovery—they extract the last usable energy from organic matter, ensuring minimal waste in ecosystems.</p>

                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#c2410c' }}>⚠️ Critical Distinction: Decomposers vs. Detritivores</h4>
                    <p style={{ fontSize: '0.9em', marginBottom: '10px' }}><strong>Detritivores:</strong> Animals that physically consume dead organic matter but only partially digest it (earthworms, millipedes, dung beetles, vultures, crabs). They fragment material, increasing surface area for decomposers.</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '10px' }}><strong>Decomposers:</strong> Microorganisms (primarily fungi and bacteria) that secrete enzymes to chemically break down organic compounds into simple inorganic nutrients that can be absorbed by producers.</p>
                    <p style={{ fontSize: '0.9em', fontWeight: 'bold' }}>Relationship: Detritivores and decomposers work together—detritivores break material into smaller pieces, making it accessible to decomposers who complete the chemical breakdown. Think of detritivores as "mechanical breakdown" and decomposers as "chemical breakdown."</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#f5f3ff', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd6fe' }}>
                            <span style={{ fontSize: '3em' }}>🍄</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Fungi Decomposers</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}><strong>Fungi:</strong> Primary Decomposers like these breaking down a fallen log are critical decomposers in forest ecosystems.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #dcfce7' }}>
                            <span style={{ fontSize: '3em' }}>🪱</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Earthworm</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}><strong>Detritivore:</strong> Earthworms consume and fragment organic matter, facilitating decomposer activity and improving soil.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e0f2fe' }}>
                            <span style={{ fontSize: '3em' }}>🦠</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Soil Bacteria</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}><strong>Bacterial Decomposers:</strong> Soil bacteria complete the decomposition process, releasing inorganic nutrients for plant uptake.</p>
                    </div>
                </div>

                <h4>The Decomposition Process</h4>
                <p>Decomposition occurs in stages, each involving different organisms and environmental conditions:</p>
                <div style={{ marginLeft: '20px' }}>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 1: Fragmentation (Days to Weeks)</strong> - Organisms: Detritivores (beetles, flies, earthworms). Physical breakdown of dead material into smaller pieces, increasing surface area. Output: Small organic fragments, partially digested material.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 2: Leaching (Weeks to Months)</strong> - Water-soluble compounds (simple sugars, amino acids, minerals) dissolve and leach into soil or water. Output: Nutrient-enriched soil water, available for immediate plant uptake.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 3: Catabolism/Chemical Breakdown (Months to Years)</strong> - Organisms: Fungi (primarily) and bacteria secrete extracellular enzymes. Process: Enzymes break down complex molecules (cellulose, lignin, proteins) into simpler compounds.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 4: Humification (Years to Decades)</strong> - Process: Resistant organic compounds combine to form humus—dark, stable organic matter. Humus improves soil structure, water retention, and nutrient-holding capacity.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 5: Mineralization (Final Stage)</strong> - Process: Complete conversion of organic nutrients into inorganic forms. Output: CO₂, H₂O, NH₄⁺/NO₃⁻ (nitrogen), PO₄³⁻ (phosphorus), minerals. Significance: Directly usable by producers, completing the nutrient cycle.</p>
                </div>

                <h4>Factors Affecting Decomposition Rate</h4>
                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Factor</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Optimal Conditions</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Effect on Rate</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Explanation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Temperature</td>
                                <td>25-35°C</td>
                                <td>Higher temp = faster</td>
                                <td>Enzyme activity increases. Tropical is much faster than arctic.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Moisture</td>
                                <td>40-60%</td>
                                <td>Moderate = fastest</td>
                                <td>Too dry/wet inhibits microbes. Wetlands decompose slowly.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Oxygen</td>
                                <td>Aerobic</td>
                                <td>Aerobic = 10-20x faster</td>
                                <td>Efficient vs slow anaerobic (methane-producing) breakdown.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>C:N Ratio</td>
                                <td>25:1 to 30:1</td>
                                <td>High C:N = slower</td>
                                <td>Wood (500:1) is slow; Grass (20:1) is fast.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Lignin</td>
                                <td>Low lignin</td>
                                <td>High lignin = much slower</td>
                                <td>Lignin is extremely resistant; only specialized fungi degrade it.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#334155' }}>🌍 Global Decomposition Patterns:</h4>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Tropical Rainforests:</strong> Extremely rapid decomposition (6 weeks-3 months). High temp and moisture. Little organic buildup.</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Temperate Forests:</strong> Moderate decomposition (6 months-2 years). Seasonal variations.</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Boreal Forests (Taiga):</strong> Slow decomposition (3-7 years). Cold limits microbial activity.</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Arctic Tundra:</strong> Extremely slow (decades). Permafrost stores massive carbon.</p>
                    <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Deserts:</strong> Very slow despite warmth. Lack of moisture is the severe limit.</p>
                    <p style={{ fontSize: '0.9em' }}><strong>Wetlands/Peatlands:</strong> Very slow (centuries). Anaerobic conditions; major carbon sinks.</p>
                </div>

                <h4>Decomposers and Climate Change</h4>
                <p>Decomposers play a critical but complex role in climate change. As global temperatures rise, decomposition rates increase, releasing stored carbon from soils as CO₂—a positive feedback loop. thawing permafrost releases both CO₂ and methane (25× more potent). Conversely, peatlands store 30% of global soil carbon; draining them releases this carbon catastrophically.</p>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🔗 Part 3: Food Chains & Food Webs</h3>
                <h4>Food Chains: Linear Energy Pathways</h4>
                <p>A food chain is a linear sequence showing the transfer of energy and nutrients. Arrows show the direction of flow (eated to eater). Food chains rarely exceed 4-5 links due to dramatic energy loss (~10% rule).</p>

                <div style={{ marginLeft: '20px' }}>
                    <p><strong>🌾 Example Terrestrial Food Chain (Grassland):</strong> Grass (Producer) → Grasshopper (1°) → Frog (2°) → Snake (3°) → Hawk (4°) → Decomposers</p>
                    <p><strong>🌊 Example Aquatic Food Chain (Marine):</strong> Phytoplankton (Producer) → Zooplankton (1°) → Small Fish (2°) → Large Fish (3°) → Shark (4°) → Decomposers</p>
                    <p style={{ fontSize: '0.85em', color: '#64748b' }}><strong>Biomagnification Note:</strong> Pollutants like mercury accumulate at each level—top predators have much higher concentrations.</p>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '20px' }}>Basic Food Chain Structure</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                            <div style={{ padding: '10px 20px', backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '8px', fontSize: '0.85em' }}>PRODUCER</div>
                            <span>→</span>
                            <div style={{ padding: '10px 20px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', fontSize: '0.85em' }}>PRIMARY</div>
                            <span>→</span>
                            <div style={{ padding: '10px 20px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px', fontSize: '0.85em' }}>SECONDARY</div>
                            <span>→</span>
                            <div style={{ padding: '10px 20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', fontSize: '0.85em' }}>TERTIARY</div>
                            <span>→</span>
                            <div style={{ padding: '10px 20px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '8px', fontSize: '0.85em' }}>DECOMPOSER</div>
                        </div>
                    </div>
                </div>

                <h4>Food Webs: The Real Picture</h4>
                <p>A <strong>food web</strong> is an interconnected network of multiple food chains. It shows all feeding relationships and reveals redundancy (multiple pathways), Keystone species, and ecosystem vulnerability/stability.</p>

                <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '40px 0', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h3 style={{ color: '#1e293b', fontSize: '1.6em', fontWeight: 'bold' }}>The Food Web: Interconnected Life</h3>
                    </div>

                    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>
                        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orientation="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
                                </marker>
                            </defs>

                            {/* --- CONNECTIONS (Lines Behind Nodes) --- */}
                            <g fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.6">
                                {/* Flow from Sun */}
                                <path d="M 600,50 Q 550,75 500,100" /> {/* Sun -> Grass */}
                                <path d="M 620,65 Q 630,350 600,660" /> {/* Sun -> Shrubs */}
                                <path d="M 625,50 Q 850,100 850,660" /> {/* Sun -> Trees */}

                                {/* Flow from Grass */}
                                <path d="M 500,135 L 500,175" /> {/* Grass -> Grasshopper */}
                                <path d="M 470,115 Q 350,120 280,240" /> {/* Grass -> Mouse */}
                                <path d="M 470,125 Q 350,150 350,735" /> {/* Grass -> Rabbit */}
                                <path d="M 530,125 Q 750,150 750,735" /> {/* Grass -> Deer */}
                                <path d="M 500,135 Q 560,300 500,490" /> {/* Grass -> Decomposers */}

                                {/* Flow from Grasshopper */}
                                <path d="M 500,215 Q 450,225 420,245" /> {/* Grasshopper -> Frog */}
                                <path d="M 500,215 L 502,305" /> {/* Grasshopper -> Bird */}
                                <path d="M 530,200 Q 570,350 530,495" /> {/* Grasshopper -> Decomposers */}

                                {/* Flow from Mouse */}
                                <path d="M 280,275 Q 300,310 320,345" /> {/* Mouse -> Snake */}
                                <path d="M 250,270 Q 150,450 250,805" /> {/* Mouse -> Owl */}
                                <path d="M 265,275 Q 230,350 300,435" /> {/* Mouse -> Hawk */}
                                <path d="M 280,275 Q 350,400 480,505" /> {/* Mouse -> Decomposers */}

                                {/* Flow from Frog */}
                                <path d="M 400,275 Q 350,300 330,345" /> {/* Frog -> Snake */}
                                <path d="M 415,275 Q 450,290 490,310" /> {/* Frog -> Bird */}
                                <path d="M 415,275 Q 450,400 485,495" /> {/* Frog -> Decomposers */}

                                {/* Flow from Bird */}
                                <path d="M 500,350 Q 400,380 335,435" /> {/* Bird -> Hawk */}
                                <path d="M 500,350 L 500,490" /> {/* Bird -> Decomposers */}

                                {/* Flow from Snake */}
                                <path d="M 320,385 L 320,430" /> {/* Snake -> Hawk */}
                                <path d="M 335,380 Q 400,420 480,495" /> {/* Snake -> Decomposers */}

                                {/* Flow from Hawk */}
                                <path d="M 350,455 Q 440,470 475,495" /> {/* Hawk -> Decomposers */}

                                {/* Flow from Shrubs */}
                                <path d="M 630,695 Q 700,720 735,740" /> {/* Shrubs -> Deer */}
                                <path d="M 600,715 Q 500,730 385,745" /> {/* Shrubs -> Rabbit */}
                                <path d="M 600,690 Q 550,600 520,545" /> {/* Shrubs -> Decomposers */}

                                {/* Flow from Trees */}
                                <path d="M 850,715 Q 820,740 785,745" /> {/* Trees -> Deer */}
                                <path d="M 850,690 Q 750,550 535,525" /> {/* Trees -> Decomposers */}

                                {/* Flow from Soil Nutrients */}
                                <path d="M 780,625 Q 840,640 850,665" /> {/* Soil Nutrients -> Trees */}

                                {/* Flow from Rabbit */}
                                <path d="M 370,775 Q 430,795 470,810" /> {/* Rabbit -> Fox */}
                                <path d="M 350,775 Q 280,750 310,465" /> {/* Rabbit -> Hawk */}
                                <path d="M 330,760 Q 300,770 270,810" /> {/* Rabbit -> Owl */}
                                <path d="M 365,740 Q 420,620 480,540" /> {/* Rabbit -> Decomposers */}

                                {/* Flow from Deer */}
                                <path d="M 750,785 Q 650,850 580,900" /> {/* Deer -> Wolf */}
                                <path d="M 750,760 Q 650,650 535,545" /> {/* Deer -> Decomposers */}

                                {/* Flow from Fox */}
                                <path d="M 500,845 L 535,895" /> {/* Fox -> Wolf */}
                                <path d="M 480,820 Q 380,680 340,465" /> {/* Fox -> Hawk */}
                                <path d="M 500,815 Q 510,680 500,545" /> {/* Fox -> Decomposers */}

                                {/* Flow from Wolf */}
                                <path d="M 550,900 Q 520,750 505,545" /> {/* Wolf -> Decomposers */}
                                <path d="M 230,810 Q 200,650 475,520" /> {/* Owl -> Decomposers */}

                                {/* From Decomposers back */}
                                <path d="M 535,520 Q 700,540 740,580" /> {/* Decomposers -> Soil Nutrients */}
                            </g>

                            {/* --- NODES (Rectangles with Text) --- */}

                            {/* Apex (Red) */}
                            <g transform="translate(530,900)">
                                <rect x="0" y="0" width="60" height="35" rx="4" fill="#ef4444" stroke="#334155" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Wolf</text>
                            </g>

                            {/* High Consumers (Red/Dark Orange) */}
                            <g transform="translate(300,440)">
                                <rect x="0" y="0" width="60" height="35" rx="4" fill="#ef4444" stroke="#334155" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Hawk</text>
                            </g>
                            <g transform="translate(220,820)">
                                <rect x="0" y="0" width="60" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Owl</text>
                            </g>
                            <g transform="translate(470,823)">
                                <rect x="0" y="0" width="60" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Fox</text>
                            </g>
                            <g transform="translate(300,350)">
                                <rect x="0" y="0" width="65" height="37" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="32.5" y="23" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Snake</text>
                            </g>

                            {/* Decomposers (Brown) */}
                            <g transform="translate(450,495)">
                                <rect x="0" y="0" width="120" height="40" rx="6" fill="#78350f" stroke="#334155" strokeWidth="2" />
                                <text x="60" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Decomposers</text>
                            </g>

                            {/* Secondary/Primary Consumers (Orange) */}
                            <g transform="translate(480,310)">
                                <rect x="0" y="0" width="55" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="27.5" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Bird</text>
                            </g>
                            <g transform="translate(390,250)">
                                <rect x="0" y="0" width="55" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="27.5" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Frog</text>
                            </g>
                            <g transform="translate(250,250)">
                                <rect x="0" y="0" width="65" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="32.5" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Mouse</text>
                            </g>
                            <g transform="translate(325,745)">
                                <rect x="0" y="0" width="70" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="35" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Rabbit</text>
                            </g>
                            <g transform="translate(730,750)">
                                <rect x="0" y="0" width="60" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="30" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Deer</text>
                            </g>
                            <g transform="translate(445,183)">
                                <rect x="0" y="0" width="110" height="35" rx="4" fill="#f97316" stroke="#334155" strokeWidth="1" />
                                <text x="55" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Grasshopper</text>
                            </g>
                            <g transform="translate(720,590)">
                                <rect x="0" y="0" width="115" height="40" rx="4" fill="#c2410c" stroke="#334155" strokeWidth="1" />
                                <text x="57.5" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Soil Nutrients</text>
                            </g>

                            {/* Producers (Green) */}
                            <g transform="translate(470,100)">
                                <rect x="0" y="0" width="70" height="40" rx="6" fill="#10b981" stroke="#334155" strokeWidth="1" />
                                <text x="35" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Grass</text>
                            </g>
                            <g transform="translate(570,670)">
                                <rect x="0" y="0" width="75" height="40" rx="6" fill="#10b981" stroke="#334155" strokeWidth="1" />
                                <text x="37.5" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Shrubs</text>
                            </g>
                            <g transform="translate(830,670)">
                                <rect x="0" y="0" width="65" height="40" rx="6" fill="#10b981" stroke="#334155" strokeWidth="1" />
                                <text x="32.5" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Trees</text>
                            </g>

                            {/* Sun (Yellow) */}
                            <g transform="translate(585,25)">
                                <rect x="0" y="0" width="55" height="35" rx="6" fill="#fcd34d" stroke="#334155" strokeWidth="2" />
                                <text x="27.5" y="22" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="900">Sun</text>
                            </g>
                        </svg>
                    </div>

                    <p style={{ fontSize: '0.95em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                        Figure 2: Food web showing multiple interconnected feeding relationships and the return of nutrients through decomposers.
                    </p>
                </div>

                <h4>Types of Food Chains</h4>
                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Chain Type</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Starting Point</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Primary Consumers</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Energy Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Grazing</td>
                                <td>Living producers</td>
                                <td>Herbivores (Zebra, Fish)</td>
                                <td>Fresh plant material</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Detrital</td>
                                <td>Dead organic matter</td>
                                <td>Detritivores (Earthworm)</td>
                                <td>Dead litter, lower energy</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Parasitic</td>
                                <td>Living host</td>
                                <td>Parasites (Fleas, Bacteria)</td>
                                <td>Large to small flow</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#475569' }}>🔬 Important Food Web Concepts:</h4>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '5px' }}><strong>Omnivores complicate webs:</strong> feeding at multiple levels simultaneously.</li>
                        <li style={{ marginBottom: '5px' }}><strong>Detrital pathways are huge:</strong> in forests 80-90% of energy flows through them.</li>
                        <li style={{ marginBottom: '5px' }}><strong>Marine vs Terrestrial:</strong> marine webs have longer chains due to smaller sizes.</li>
                        <li><strong>Human impact:</strong> overfishing/invasive species can collapse webs.</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🌱 Part 4: Ecological Succession - Ecosystem Change Over Time</h3>
                <h4>What is Ecological Succession?</h4>
                <p>Ecological succession is the gradual, predictable change in species composition and ecosystem structure over time in a given area. Think of it as ecosystem development—from simple communities with few species to complex, stable communities with high biodiversity. Succession demonstrates that ecosystems are dynamic, not static, and that communities replace one another in relatively predictable patterns.</p>

                <p>The process was first formally described by ecologist Henry Chandler Cowles in 1899, studying sand dune formation along Lake Michigan, and later refined by Frederic Clements who developed the climax community concept. Succession occurs because early colonizers modify environmental conditions (soil, light, humidity, nutrients), making the habitat more suitable for other species that eventually outcompete the pioneers.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '16px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534', fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📌 Key Succession Terms:</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div>
                            <strong style={{ color: '#065f46', display: 'block' }}>Pioneer Species:</strong>
                            <span style={{ fontSize: '0.85em', color: '#15803d' }}>First organisms to colonize barren or disturbed areas (lichens, mosses, grasses).</span>
                        </div>
                        <div>
                            <strong style={{ color: '#065f46', display: 'block' }}>Sere:</strong>
                            <span style={{ fontSize: '0.85em', color: '#15803d' }}>The complete sequence of communities from pioneer to climax.</span>
                        </div>
                        <div>
                            <strong style={{ color: '#065f46', display: 'block' }}>Seral Stages:</strong>
                            <span style={{ fontSize: '0.85em', color: '#15803d' }}>Intermediate communities in the succession sequence.</span>
                        </div>
                        <div>
                            <strong style={{ color: '#065f46', display: 'block' }}>Climax Community:</strong>
                            <span style={{ fontSize: '0.85em', color: '#15803d' }}>The final, stable, self-perpetuating community at equilibrium.</span>
                        </div>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', margin: '40px 0', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '15px', textAlign: 'left', color: '#475569' }}>Characteristic</th>
                                <th style={{ padding: '15px', textAlign: 'left', color: '#059669' }}>Early (Pioneer)</th>
                                <th style={{ padding: '15px', textAlign: 'left', color: '#2563eb' }}>Mid-Succession</th>
                                <th style={{ padding: '15px', textAlign: 'left', color: '#1e293b' }}>Late (Climax)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Species Diversity', 'Low - few hardy species', 'Increasing rapidly', 'High - maximum diversity'],
                                ['Dominant Species', 'Grasses, lichens, mosses', 'Shrubs, small trees', 'Large trees, shade-tolerant'],
                                ['Biomass', 'Very low', 'Increasing', 'Maximum accumulation'],
                                ['Productivity (NPP)', 'Moderate to high (r-selected)', 'Very high (peak)', 'Lower (maintenance mode)'],
                                ['Soil Development', 'Minimal - rocky, poor', 'Increasing organic matter', 'Deep, nutrient-rich'],
                                ['Microclimate', 'Exposed, extreme temps', 'Moderating', 'Stable, buffered, high humidity'],
                                ['Food Webs', 'Simple, few levels', 'Increasing complexity', 'Complex interconnections'],
                                ['Nutrient Cycling', 'Open cycle, high loss', 'Becoming more closed', 'Closed cycle, efficient'],
                                ['Stability', 'Low - vulnerable', 'Increasing', 'High - resistant/resilient'],
                                ['Life Strategies', 'r-selected (fast/high repro)', 'Mixed strategies', 'K-selected (slow/competitive)']
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? 'white' : '#fcfcfc' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold', color: '#64748b' }}>{row[0]}</td>
                                    <td style={{ padding: '15px', color: '#065f46' }}>{row[1]}</td>
                                    <td style={{ padding: '15px', color: '#1e40af' }}>{row[2]}</td>
                                    <td style={{ padding: '15px', color: '#1e293b' }}>{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', margin: '40px 0' }}>
                    <div style={{ backgroundColor: '#fef2f2', padding: '30px', borderRadius: '24px', border: '1px solid #fee2e2', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ fontSize: '2.5em' }}>🌋</div>
                            <h4 style={{ color: '#991b1b', margin: 0 }}>Primary Succession: Starting from Scratch</h4>
                        </div>
                        <p style={{ fontSize: '0.95em', color: '#7f1d1d', lineHeight: '1.6' }}><strong>Definition:</strong> Succession that occurs in an area previously devoid of life, where no soil exists initially.</p>
                        <ul style={{ fontSize: '0.9em', color: '#7f1d1d', paddingLeft: '20px', lineHeight: '1.7' }}>
                            <li><strong>Starting Conditions:</strong> Bare rock, lava flows, sand dunes, glacial till.</li>
                            <li><strong>Timeline:</strong> Very slow—hundreds to thousands of years.</li>
                            <li><strong>First Colonizers:</strong> Lichens and mosses (survive on rock).</li>
                            <li><strong>Examples:</strong> Surtsey Island (formed 1963), Glacier Bay retreat, new lava flows.</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#fff7ed', padding: '30px', borderRadius: '24px', border: '1px solid #ffedd5', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ fontSize: '2.5em' }}>🔥</div>
                            <h4 style={{ color: '#9a3412', margin: 0 }}>Secondary Succession: Restarting from Disturbance</h4>
                        </div>
                        <p style={{ fontSize: '0.95em', color: '#7c2d12', lineHeight: '1.6' }}><strong>Definition:</strong> Succession that occurs in an area where an ecosystem existed previously but was disturbed, with soil remaining.</p>
                        <ul style={{ fontSize: '0.9em', color: '#7c2d12', paddingLeft: '20px', lineHeight: '1.7' }}>
                            <li><strong>Starting Conditions:</strong> Soil present, seed bank intact, root systems may survive.</li>
                            <li><strong>Timeline:</strong> Faster—tens to hundreds of years.</li>
                            <li><strong>First Colonizers:</strong> Grasses, weeds, pioneer tree species.</li>
                            <li><strong>Examples:</strong> Yellowstone after wildfire, abandoned farms, recovery after storms.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#1e293b', fontSize: '1.4em', fontWeight: '800', margin: 0 }}>Stages of Primary Succession (Terrestrial)</h4>
                        <p style={{ color: '#64748b', fontSize: '0.95em', marginTop: '5px' }}>From bare rock to a complex climax forest</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {[
                            {
                                stage: '1', title: 'Pioneer Community', time: '0-50 years',
                                organisms: 'Lichens (symbiotic fungi + algae/cyanobacteria) and mosses',
                                process: 'Lichens secrete acids that weather rock, creating tiny amounts of soil. They fix nitrogen from air. Mosses trap wind-blown dust and organic matter.',
                                change: 'Minimal soil development, some moisture retention begins.',
                                examples: 'Crustose lichens (Rhizocarpon), moss (Polytrichum)',
                                bg: '#f1f5f9', color: '#475569', icon: '🌑'
                            },
                            {
                                stage: '2', title: 'Herbaceous Stage', time: '50-150 years',
                                organisms: 'Annual and perennial grasses, herbs, small flowering plants',
                                process: 'Pioneer lichens/mosses have created thin soil layer. Grasses send roots deeper, further breaking rock. Dead plant material increases soil organic matter.',
                                change: 'Soil depth increases to 5-15 cm, nutrients accumulate, water retention improves.',
                                examples: 'Grasses (Festuca, Agrostis), fireweed (Epilobium), sedges',
                                bg: '#f0fdf4', color: '#166534', icon: '🌱'
                            },
                            {
                                stage: '3', title: 'Shrub Stage', time: '150-300 years',
                                organisms: 'Shrubs, small bushes, nitrogen-fixing plants (legumes, alders)',
                                process: 'Woody plants establish. Nitrogen-fixing species dramatically increase soil nitrogen. Shade begins to affect light-demanding pioneers.',
                                change: 'Soil depth 15-30 cm, nutrient levels increase significantly, microclimate moderation begins.',
                                examples: 'Alders (Alnus), willows (Salix), hawthorn, juniper',
                                bg: '#dcfce7', color: '#14532d', icon: '🌿'
                            },
                            {
                                stage: '4', title: 'Young Forest Stage', time: '300-500 years',
                                organisms: 'Fast-growing, shade-intolerant pioneer trees',
                                process: 'Pioneer trees (aspens, birches, pines) dominate. They grow quickly, outcompeting shrubs for light. Forest canopy begins to close.',
                                change: 'Deep soil (30-60 cm), shaded understory, stable humidity, complex food webs developing.',
                                examples: 'Aspens (Populus tremuloides), birches (Betula), pines (Pinus), cherry trees',
                                bg: '#bbf7d0', color: '#166534', icon: '🌲'
                            },
                            {
                                stage: '5', title: 'Mature/Climax Forest', time: '500-1000+ years',
                                organisms: 'Shade-tolerant climax species, maximum biodiversity',
                                process: 'Shade-tolerant species (oaks, maples, beeches) grow slowly under canopy. As pioneer trees die, climax species replace them. Self-perpetuating community established.',
                                change: 'Deep, nutrient-rich soil (60-100+ cm), stable microclimate, closed nutrient cycles, maximum structural complexity.',
                                examples: 'Oaks (Quercus), maples (Acer), beeches (Fagus), hemlocks (Tsuga)',
                                bg: '#86efac', color: '#064e3b', icon: '🌳'
                            }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '25px', backgroundColor: s.bg, padding: '30px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '4em', opacity: 0.05 }}>{s.icon}</div>
                                <div style={{ backgroundColor: 'white', color: s.color, width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', flexShrink: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: `2px solid ${s.color}20` }}>{s.stage}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: `1px solid ${s.color}20`, paddingBottom: '8px' }}>
                                        <h5 style={{ margin: 0, color: s.color, fontSize: '1.2em', fontWeight: '800' }}>{s.title}</h5>
                                        <span style={{ fontSize: '0.85em', fontWeight: 'bold', backgroundColor: 'white', padding: '4px 12px', borderRadius: '20px', color: s.color, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>{s.time}</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                                        <p style={{ fontSize: '0.95em', margin: 0, color: s.color, lineHeight: '1.6' }}><strong>Organisms:</strong> {s.organisms}</p>
                                        <p style={{ fontSize: '0.9em', margin: 0, color: s.color, lineHeight: '1.6', opacity: 0.9 }}><strong>Process:</strong> {s.process}</p>
                                        <p style={{ fontSize: '0.9em', margin: 0, color: s.color, lineHeight: '1.6', opacity: 0.9 }}><strong>Environmental Change:</strong> {s.change}</p>
                                        <div style={{ marginTop: '5px', padding: '10px 15px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: `1px solid ${s.color}15` }}>
                                            <p style={{ fontSize: '0.85em', fontWeight: 'bold', margin: '0 0 4px 0', color: s.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Example Species:</p>
                                            <p style={{ fontSize: '0.9em', margin: 0, color: s.color, fontStyle: 'italic' }}>{s.examples}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px', borderRadius: '40px', border: '1px solid #e2e8f0', margin: '60px 0', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <div style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Succession Timeline Visualization</div>
                        <h4 style={{ color: '#1e293b', fontSize: '1.6em', fontWeight: '900', margin: 0 }}>PRIMARY SUCCESSION STAGES</h4>
                    </div>

                    <div style={{ width: '100%', maxWidth: '950px', margin: '0 auto', position: 'relative', padding: '40px 20px 80px 20px' }}>
                        {/* THE BOTTOM LINE WITH ARROW */}
                        <div style={{ position: 'absolute', bottom: '100px', left: '20px', right: '20px', height: '4px', backgroundColor: '#334155', borderRadius: '2px' }}>
                            <div style={{ position: 'absolute', right: '-10px', top: '-8px', width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '20px solid #334155' }}></div>
                            <div style={{ position: 'absolute', right: '-60px', top: '-10px', fontSize: '0.9em', fontWeight: 'bold', color: '#334155' }}>Time</div>
                        </div>

                        {/* STAGES SHAPES ROW */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '15px', position: 'relative', zIndex: 1 }}>

                            {/* BARE ROCK */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '100%', maxWidth: '120px', height: '80px', backgroundColor: '#94a3b8', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '35px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Bare Rock</div>
                                    <div style={{ fontSize: '0.7em', opacity: 0.9 }}>No vegetation</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#64748b' }}>Year 0</div>
                                </div>
                            </div>

                            {/* LICHENS */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#10b981', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '35px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Lichens</div>
                                    <div style={{ fontSize: '0.7em', opacity: 0.9 }}>& Mosses</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#10b981' }}>10-50 yrs</div>
                                </div>
                            </div>

                            {/* GRASSES */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{
                                    width: '120px', height: '90px', backgroundColor: '#4ade80',
                                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#064e3b', textAlign: 'center', padding: '10px', marginBottom: '35px'
                                }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Grasses</div>
                                    <div style={{ fontSize: '0.7em', opacity: 0.9 }}>& Herbs</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#22c55e' }}>50-150 yrs</div>
                                </div>
                            </div>

                            {/* SHRUBS */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '110px', height: '110px', backgroundColor: '#f59e0b', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '35px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Shrubs</div>
                                    <div style={{ fontSize: '0.7em', opacity: 0.9 }}>Small Woody Plants</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#d97706' }}>150-300 yrs</div>
                                </div>
                            </div>

                            {/* PIONEER TREES */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', marginBottom: '35px', height: '140px' }}>
                                    <div style={{ width: '25px', height: '120px', backgroundColor: '#ea580c', borderRadius: '4px 4px 0 0' }}></div>
                                    <div style={{ width: '25px', height: '140px', backgroundColor: '#ea580c', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontSize: '0.85em', fontWeight: 'bold', color: 'white' }}>Pioneer Trees</div>
                                    </div>
                                    <div style={{ width: '25px', height: '130px', backgroundColor: '#ea580c', borderRadius: '4px 4px 0 0' }}></div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#ea580c' }}>300-500 yrs</div>
                                </div>
                            </div>

                            {/* CLIMAX FOREST */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', marginBottom: '35px', height: '160px' }}>
                                    <div style={{ width: '25px', height: '140px', backgroundColor: '#15803d', borderRadius: '4px 4px 0 0' }}></div>
                                    <div style={{ width: '25px', height: '160px', backgroundColor: '#15803d', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontSize: '0.85em', fontWeight: 'bold', color: 'white' }}>Climax Forest</div>
                                    </div>
                                    <div style={{ width: '25px', height: '150px', backgroundColor: '#15803d', borderRadius: '4px 4px 0 0' }}></div>
                                    <div style={{ width: '25px', height: '155px', backgroundColor: '#15803d', borderRadius: '4px 4px 0 0' }}></div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#14532d' }}>500-1000+ yrs</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '15px', border: '1px solid #dcfce7', maxWidth: '800px', margin: '20px auto 0' }}>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#166534', lineHeight: '1.5' }}>
                            <strong>Climax Characteristics:</strong> Species composition remains stable unless disturbed; birth rate ≈ death rate; maximum species diversity; highly complex food webs; and extremely efficient, closed nutrient cycling.
                        </p>
                    </div>

                    <p style={{ fontSize: '0.95em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                        Figure 3: Visual representation of primary succession from bare rock to climax forest over centuries
                    </p>
                </div>

                <div style={{ margin: '60px 0' }}>
                    <h4 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '30px' }}>Factors Affecting Succession</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '20px', border: '1px solid #e0f2fe' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>🌍</div>
                            <h5 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>Climate & Geography</h5>
                            <p style={{ fontSize: '0.85em', color: '#0c4a6e', lineHeight: '1.6', margin: 0 }}>Temperature and precipitation determine forest vs. grassland vs. desert climaxes. Slope and aspect also influence local moisture and heat.</p>
                        </div>
                        <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '1px solid #dcfce7' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>🦌</div>
                            <h5 style={{ color: '#166534', margin: '0 0 10px 0' }}>Biological Factors</h5>
                            <p style={{ fontSize: '0.85em', color: '#14532d', lineHeight: '1.6', margin: 0 }}>Seed dispersal methods, competition, and mutualistic relationships (like nitrogen-fixing bacteria) accelerate or redirect development.</p>
                        </div>
                        <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '20px', border: '1px solid #ffe4e6' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>💥</div>
                            <h5 style={{ color: '#9f1239', margin: '0 0 10px 0' }}>Disturbance Regime</h5>
                            <p style={{ fontSize: '0.85em', color: '#881337', lineHeight: '1.6', margin: 0 }}>Fire, floods, and human activities can reset or interrupt succession, maintaining ecosystems in earlier, productive seral stages.</p>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '35px', borderRadius: '32px', border: '2px solid #fee2e2', margin: '60px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <div style={{ fontSize: '2.5em' }}>⚠️</div>
                        <h4 style={{ color: '#991b1b', margin: 0 }}>Common Misconceptions About Succession</h4>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {[
                            { m: '"Climax communities are permanent."', r: 'Climax is a dynamic equilibrium; disturbances create a patchwork of stages.' },
                            { m: '"Succession is always linear."', r: 'While general patterns exist, local factors create variation and multiple pathways.' },
                            { m: '"All ecosystems have the same climax."', r: 'Climate and topography determine multiple possible climax types (forest vs grassland).' },
                            { m: '"Primary succession always takes centuries."', r: 'Timeline varies—warm/wet climates can develop forests in as little as 100-200 years.' }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #fee2e2' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '0.85em', color: '#991b1b', textTransform: 'uppercase', marginBottom: '8px' }}>Misconception:</div>
                                <div style={{ fontSize: '0.9em', color: '#7f1d1d', marginBottom: '12px', fontStyle: 'italic' }}>{item.m}</div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.85em', color: '#166534', textTransform: 'uppercase', marginBottom: '8px' }}>Reality:</div>
                                <div style={{ fontSize: '0.9em', color: '#14532d' }}>{item.r}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ maxWidth: '640px', margin: '30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/jZKIHe2LDP8"
                            title="Succession Explained"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <Quiz
                    title="Module 1.5 Quiz: Energy Flow & Succession"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={5}
                />

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div className="resources-section">
                    <h3>Learning Resources & Further Exploration</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Academic Resources</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://scholar.google.com" target="_blank">Google Scholar</a></li>
                                <li><a href="https://www.sciencedirect.com" target="_blank">ScienceDirect</a></li>
                                <li><a href="https://www.nature.com" target="_blank">Nature Ecology</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Video Tutorials</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.youtube.com/@crashcourse" target="_blank">Crash Course Ecology</a></li>
                                <li><a href="https://www.youtube.com/@TEDEd" target="_blank">TED-Ed Environment</a></li>
                                <li><a href="https://www.youtube.com/@AmoebaSisters" target="_blank">Amoeba Sisters</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module1_5;
