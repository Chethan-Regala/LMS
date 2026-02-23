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

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Energy Available at Each Trophic Level</div>
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '12px', textAlign: 'center', marginBottom: '6px', width: '30%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: '800', color: '#991b1b', letterSpacing: '0.05em' }}>APEX / TERTIARY</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '700' }}>1-10 kcal (0.01-0.1%)</div>
                            </div>
                            <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8em', margin: '5px 0' }}>↑ 90% Energy Lost</div>
                            <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecaca', padding: '12px', textAlign: 'center', marginBottom: '6px', width: '50%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: '800', color: '#991b1b', letterSpacing: '0.05em' }}>SECONDARY</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '700' }}>100 kcal (1%)</div>
                            </div>
                            <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8em', margin: '5px 0' }}>↑ 90% Energy Lost</div>
                            <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', padding: '12px', textAlign: 'center', marginBottom: '6px', width: '70%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65em', fontWeight: '800', color: '#9a3412', letterSpacing: '0.05em' }}>PRIMARY</div>
                                <div style={{ fontSize: '0.85em', fontWeight: '700' }}>1,000 kcal (10%)</div>
                            </div>
                            <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8em', margin: '5px 0' }}>↑ 90% Energy Lost</div>
                            <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #16a34a', padding: '15px', textAlign: 'center', width: '100%', marginInline: 'auto', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#166534', letterSpacing: '0.12em' }}>PRODUCERS</div>
                                <div style={{ fontSize: '1em', fontWeight: '800' }}>10,000 kcal (100%)</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.75em', color: '#64748b' }}>
                            <strong>Why Energy Decreases:</strong> Each level uses ~90% of energy for metabolism, movement, heat production, and reproduction. Only ~10% becomes biomass available to next level.
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
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

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '30px' }}>Simplified Food Web Interaction Map</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', fontSize: '0.75em' }}>
                            <div style={{ gridColumn: 'span 2', padding: '10px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>Sun → Grass, Trees</div>
                            <div style={{ gridColumn: 'span 2', padding: '10px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>Rabbits, Mice, Deer</div>

                            <div style={{ gridColumn: 'span 4', height: '20px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', bottom: 0, border: '1px dashed #cbd5e1', borderBottom: 0 }}></div>
                            </div>

                            <div style={{ padding: '10px', backgroundColor: '#fff1f2', borderRadius: '8px' }}>Frog</div>
                            <div style={{ padding: '10px', backgroundColor: '#fff1f2', borderRadius: '8px' }}>Snake</div>
                            <div style={{ padding: '10px', backgroundColor: '#fff1f2', borderRadius: '8px' }}>Fox</div>
                            <div style={{ padding: '10px', backgroundColor: '#fff1f2', borderRadius: '8px' }}>Hawk</div>

                            <div style={{ gridColumn: 'span 4', marginTop: '20px', padding: '15px', backgroundColor: '#f5f3ff', borderRadius: '8px', border: '1px solid #ddd6fe' }}>
                                <div style={{ fontWeight: 'bold', color: '#6b21a8' }}>DECOMPOSERS & SOIL NUTRIENTS</div>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '20px 10px 0' }}>
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
                <p>Ecological succession is the gradual, predictable change in species composition and ecosystem structure over time. It's ecosystem development—from simple communities to complex, stable climax communities. Early colonizers modify conditions (soil, light), making habitat suitable for later species.</p>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '25px 0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        <p style={{ margin: 0, fontSize: '0.85em' }}><strong>Pioneer Species:</strong> First organisms (lichens, mosses, grasses).</p>
                        <p style={{ margin: 0, fontSize: '0.85em' }}><strong>Sere:</strong> Complete sequence from pioneer to climax.</p>
                        <p style={{ margin: 0, fontSize: '0.85em' }}><strong>Climax Community:</strong> Final, stable, self-perpetuating equilibrium community.</p>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Characteristic</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Early (Pioneer)</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Late (Climax)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Diversity</td>
                                <td>Low</td>
                                <td>High / Maximum</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Biomass</td>
                                <td>Very Low</td>
                                <td>Maximum accumulation</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Nutrient Cycle</td>
                                <td>Open (nutrient loss)</td>
                                <td>Closed (efficient recycling)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td>Stability</td>
                                <td>Low (vulnerable)</td>
                                <td>High (resistant)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', margin: '30px 0' }}>
                    <div style={{ padding: '25px', backgroundColor: '#f1f5f9', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#334155' }}>🌋 Primary Succession</h4>
                        <p style={{ fontSize: '0.85em', marginBottom: '10px' }}>Starts from <strong>bare rock</strong> (lava, glacial retreat) devoid of life and soil. Timeline is very slow (centuries).</p>
                        <p style={{ fontSize: '0.85em' }}><strong>Example:</strong> New volcanic islands or retreating glaciers.</p>
                    </div>
                    <div style={{ padding: '25px', backgroundColor: '#f1f5f9', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#334155' }}>🔥 Secondary Succession</h4>
                        <p style={{ fontSize: '0.85em', marginBottom: '10px' }}>Starts where <strong>soil remains</strong> after disturbance (fire, abandoned field, hurricane). Timeline is much faster.</p>
                        <p style={{ fontSize: '0.85em' }}><strong>Example:</strong> Yellowstone regrowth after 1988 wildfire.</p>
                    </div>
                </div>

                <h4>Stages of Primary Succession (Terrestrial)</h4>
                <div style={{ marginLeft: '20px' }}>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 1: Pioneer Community (0-50 yrs)</strong> - Lichens/mosses weather rock, creating tiny soil layer. Acid secretion and dust trapping.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 2: Herbaceous Stage (50-150 yrs)</strong> - Grasses, herbs. Root penetration further breaks rock. Dead matter increases organic soil.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 3: Shrub Stage (150-300 yrs)</strong> - Woody plants, nitrogen-fixers (alders). Microclimate begins moderating.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 4: Young Forest (300-500 yrs)</strong> - Fast-growing, shade-intolerant trees (aspen, birch, pine). Canopy closure starts.</p>
                    <p style={{ marginBottom: '10px' }}><strong>Stage 5: Climax Forest (500-1000+ yrs)</strong> - Shade-tolerant species (Oak, Maple). Birth rate = death rate. Maximum complexity.</p>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '30px' }}>PRIMARY SUCCESSION TIMELINE</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100px', gap: '5px' }}>
                            <div style={{ backgroundColor: '#94a3b8', width: '15%', height: '10%' }}></div>
                            <div style={{ backgroundColor: '#4ade80', width: '15%', height: '30%' }}></div>
                            <div style={{ backgroundColor: '#22c55e', width: '15%', height: '50%' }}></div>
                            <div style={{ backgroundColor: '#16a34a', width: '15%', height: '70%' }}></div>
                            <div style={{ backgroundColor: '#15803d', width: '15%', height: '85%' }}></div>
                            <div style={{ backgroundColor: '#14532d', width: '15%', height: '100%' }}></div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', marginTop: '10px', fontSize: '0.6em', color: '#64748b' }}>
                            <span>Bare Rock</span>
                            <span>Lichens</span>
                            <span>Grasses</span>
                            <span>Shrubs</span>
                            <span>Pioneers</span>
                            <span>Climax</span>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '20px 10px 0' }}>
                        Figure 3: Visual representation of primary succession from bare rock to climax forest over centuries.
                    </p>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>Factors Affecting Succession:</h4>
                    <p style={{ fontSize: '0.85em', marginBottom: '10px' }}><strong>🌍 Climate:</strong> Temperature/Percipitation determines forest vs grassland vs desert climaxes.</p>
                    <p style={{ fontSize: '0.85em', marginBottom: '10px' }}><strong>🦌 Biological:</strong> Seed dispersal, competition, and mutualism (nitrogen-fixing).</p>
                    <p style={{ fontSize: '0.85em' }}><strong>💥 Disturbance:</strong> Fire, floods, and human activities can reverse or interrupt succession.</p>
                </div>

                <div style={{ backgroundColor: '#fff5f5', padding: '25px', borderRadius: '12px', border: '1px solid #fed7aa', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#b91c1c' }}>⚠️ Common Misconceptions:</h4>
                    <ul style={{ fontSize: '0.85em', color: '#991b1b', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}>"Climax communities are permanent": Reality is dynamic equilibrium.</li>
                        <li style={{ marginBottom: '8px' }}>"Succession is always linear": Local factors create multiple paths.</li>
                        <li style={{ marginBottom: '8px' }}>"Climax is the same everywhere": Climate and topography dictate local climaxes.</li>
                        <li>"Primary succession always takes centuries": Varies by climate; 100-200 yrs in tropics.</li>
                    </ul>
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
