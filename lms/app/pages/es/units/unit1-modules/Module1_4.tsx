'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_4: React.FC = () => {
    const quizQuestions = [
        {
            question: "What is the primary difference between GPP (Gross Primary Productivity) and NPP (Net Primary Productivity)?",
            options: [
                "GPP is aquatic, while NPP is terrestrial",
                "NPP is the total energy captured, while GPP is what remains after respiration",
                "GPP is the total energy captured, while NPP is what remains after producer respiration",
                "There is no difference; they are two terms for the same process"
            ],
            correctAnswer: 2,
            explanation: "GPP represents the total energy captured by producers. NPP is GPP minus the energy the producers use for their own respiration (NPP = GPP - R). NPP is the actual biomass available to consumers."
        },
        {
            question: "Which enzyme, often cited as the most abundant protein on Earth, catalyzes the 'fixing' of CO2 in the Calvin Cycle?",
            options: [
                "Chlorophyll",
                "ATP Synthase",
                "RuBisCO",
                "NADPH"
            ],
            correctAnswer: 2,
            explanation: "RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase) is the enzyme responsible for carbon fixation in the Calvin Cycle."
        },
        {
            question: "In extreme environments like deep-ocean hydrothermal vents, producers use which process instead of photosynthesis?",
            options: [
                "Cellular Respiration",
                "Chemosynthesis",
                "Photolysis",
                "Thermosynthesis"
            ],
            correctAnswer: 1,
            explanation: "Chemosynthesis uses chemical energy from inorganic molecules (like hydrogen sulfide) instead of sunlight to produce organic matter."
        },
        {
            question: "According to the 10% Rule, if a forest has an NPP of 2,000 g/m²/year, approximately how much biomass can be supported at the secondary consumer level?",
            options: [
                "200 g/m²/year",
                "20 g/m²/year",
                "2 g/m²/year",
                "0.2 g/m²/year"
            ],
            correctAnswer: 1,
            explanation: "From producers (2,000) to primary consumers is 10% (200). From primary to secondary consumers is another 10% of that, which equals 20 g/m²/year."
        },
        {
            question: "Which group of organisms is responsible for over 50% of Earth's oxygen production?",
            options: [
                "Amazon Rainforest trees",
                "Grasslands",
                "Ocean Phytoplankton",
                "Soil Bacteria"
            ],
            correctAnswer: 2,
            explanation: "While rainforests are important, ocean phytoplankton produce the majority of the world's oxygen (estimates range from 50% to 80%)."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">1.4</div>
                <div className="lesson-title-main">
                    <h1>Structure and Function of an Ecosystem: Producers</h1>
                </div>
            </div>

            <section className="content-section">
                <p><strong>Understanding the Fundamental Unit of Ecological Organization</strong></p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', margin: '20px 0', fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Estimated Time</span>
                        75-90 minutes
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Difficulty</span>
                        Intermediate
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Prerequisites</span>
                        Basic Biology, Ecology
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pass Score</span>
                        70% or higher
                    </div>
                </div>

                <h3>Learning Objectives</h3>
                <p>By the end of this module, you will be able to:</p>
                <ul>
                    <li>Define producers and explain their fundamental role as autotrophs in energy conversion within ecosystems</li>
                    <li>Analyze the process of photosynthesis and chemosynthesis as primary mechanisms of energy production in different ecosystems</li>
                    <li>Evaluate the structural and functional diversity of producers across terrestrial, aquatic, and extreme environments</li>
                    <li>Calculate primary productivity (GPP, NPP) and assess factors affecting producer efficiency in energy capture and biomass production</li>
                    <li>Synthesize understanding of producer adaptations and their ecological significance in maintaining ecosystem stability and food web dynamics</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Why This Topic Matters</h3>
                <p>Imagine you're at a bustling restaurant where hundreds of people are dining simultaneously. Now picture that every single dish, dessert, and drink served there originates from one master kitchen that creates food from sunlight, air, and water. This is exactly what producers do in nature's restaurant—the ecosystem. They are the master chefs that convert solar energy into the chemical energy that feeds virtually all life on Earth.</p>

                <p>Producers, also called autotrophs, form the foundation of every ecosystem's energy pyramid. Without them, life as we know it would cease to exist. They are responsible for removing billions of tons of carbon dioxide from the atmosphere annually, producing the oxygen we breathe, and creating the organic matter that sustains all consumers—from tiny insects to massive blue whales. Understanding producers is not just an academic exercise; it's crucial for addressing global challenges like climate change, food security, and biodiversity conservation.</p>

                <p>For students of environmental science, mastering this topic is essential for comprehending ecosystem dynamics, analyzing environmental impacts, and developing sustainable solutions. This knowledge appears regularly in university exams, competitive tests, and is fundamental for careers in ecology, conservation biology, environmental management, agriculture, and climate science. Whether you're planning to work in research, policy-making, or environmental consulting, a deep understanding of producers and their functions is indispensable.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>Real-World Applications:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Climate Change Mitigation:</strong> Understanding carbon sequestration by terrestrial and marine producers informs climate policy and carbon credit systems.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Agricultural Productivity:</strong> Optimizing crop productivity requires knowledge of photosynthetic efficiency, nutrient requirements, and environmental factors.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Ecosystem Restoration:</strong> Successful habitat restoration projects depend on establishing appropriate producer communities for the ecosystem type.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Renewable Energy:</strong> Biofuel production from algae and plants is based on harnessing producer efficiency in energy conversion.</li>
                        <li><strong>Space Exploration:</strong> NASA and other space agencies study producer systems for life support in long-duration space missions and potential Mars colonization.</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Deep Dive: Understanding Producers</h3>
                <h4>Definition & Fundamentals</h4>
                <p>What are Producers? In simple terms, producers are organisms that make their own food from simple inorganic substances. Think of them as nature's factories that transform non-living materials into living tissue. Technically, producers are autotrophs—organisms capable of synthesizing organic compounds from inorganic substances using energy from light (photosynthesis) or chemical reactions (chemosynthesis).</p>

                <p>The term "producer" refers to their unique position in the ecosystem: they produce the organic matter and energy that all other organisms depend upon. While animals must consume other organisms to obtain energy (heterotrophs), producers can capture energy directly from their environment and convert it into chemical energy stored in the bonds of organic molecules like glucose, proteins, and lipids.</p>

                <p>Why do producers exist? From an evolutionary perspective, the development of photosynthesis approximately 3.5 billion years ago was one of the most significant events in Earth's history. Before producers evolved, life was limited to simple chemotrophic organisms. The evolution of photosynthetic producers revolutionized the planet by generating oxygen, creating complex food webs, and enabling the explosion of biodiversity we see today. Without producers, ecosystems would collapse within weeks as energy reserves depleted and oxygen disappeared from the atmosphere.</p>

                <p><strong>Historical Context:</strong> The scientific understanding of producers evolved gradually. In the 1770s, Joseph Priestley discovered that plants could "restore" air that had been "injured" by burning candles or animal respiration. Jan Ingenhousz later demonstrated that this process required light. By the mid-19th century, scientists understood that plants converted carbon dioxide and water into organic matter, though the detailed biochemistry wasn't elucidated until the 20th century. The concept of trophic levels and producers as the base of food chains was formalized by ecologist Charles Elton in the 1920s, revolutionizing our understanding of ecosystem structure.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Terminology</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em', margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><strong>Autotroph:</strong> An organism that produces complex organic compounds from simple inorganic molecules Using energy from light or inorganic chemical reactions.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Photosynthesis:</strong> The process by which plants, algae, and some bacteria convert light energy into chemical energy stored in glucose, releasing oxygen as a byproduct.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Chemosynthesis:</strong> The biological conversion of inorganic molecules (like hydrogen sulfide or methane) and nutrients into organic matter using chemical energy rather than sunlight.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Primary Productivity:</strong> The rate at which producers convert energy into chemical energy or biomass in a given area over a specific time period.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Chlorophyll:</strong> The green pigment that absorbs light energy (primarily red and blue wavelengths) for photosynthesis.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Trophic Level:</strong> The position an organism occupies in a food chain, with producers always occupying the first (bottom) trophic level.</li>
                            <li><strong>Carbon Fixation:</strong> The process by which producers convert inorganic carbon dioxide into organic compounds.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #dcfce7' }}>
                            <span style={{ fontSize: '3em' }}>🌳</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Forest Trees</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}>Dominant terrestrial producers converting solar energy into massive biomass.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e0f2fe' }}>
                            <span style={{ fontSize: '3em' }}>🦠</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Phytoplankton</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}>Produce over 50% of Earth's oxygen and form the base of marine food webs.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#fdf2f8', padding: '15px', borderRadius: '8px', marginBottom: '10px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #fce7f3' }}>
                            <span style={{ fontSize: '3em' }}>🧫</span>
                        </div>
                        <h5 style={{ margin: '0 0 5px 0' }}>Cyanobacteria</h5>
                        <p style={{ fontSize: '0.8em', color: '#666' }}>Ancient producers that first performed oxygenic photosynthesis billions of years ago.</p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Role of Producers in Ecosystems</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: '20px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2em' }}>☀️</div>
                                <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#9a3412' }}>SOLAR ENERGY</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '12px' }}>
                                <div style={{ fontSize: '0.8em', fontWeight: '800', color: '#166534', letterSpacing: '0.1em', marginBottom: '10px' }}>🌱 PRODUCERS (Autotrophs)</div>
                                <div style={{ fontSize: '0.9em' }}>Plants, Algae, Photosynthetic Bacteria</div>
                                <div style={{ fontSize: '0.8em', marginTop: '10px', color: '#15803d' }}>Convert Light → Chemical Energy</div>
                                <div style={{ fontSize: '0.7em', fontStyle: 'italic', marginTop: '5px' }}>CO₂ + H₂O Input</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5em', color: '#16a34a' }}>💨</div>
                                <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#16a34a' }}>O₂ RELEASED</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', color: '#94a3b8', fontSize: '1.5em' }}>↓</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#991b1b', marginBottom: '5px' }}>🦌 PRIMARY CONSUMERS</div>
                                <div style={{ fontSize: '0.8em' }}>Depend on Producers</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#991b1b', marginBottom: '5px' }}>🦁 SECONDARY CONSUMERS</div>
                                <div style={{ fontSize: '0.8em' }}>Energy flows upward</div>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 1: Producers capture solar energy and convert it into chemical energy that flows through the entire ecosystem.
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>How It Works: The Mechanism Explained</h3>
                <h4>The Photosynthesis Process: Nature's Solar Panels</h4>
                <p>Photosynthesis is the primary mechanism by which most producers convert light energy into chemical energy. This remarkable process occurs in specialized organelles called chloroplasts, which contain the green pigment chlorophyll. Think of photosynthesis as a highly sophisticated solar panel system, but instead of generating electricity, it produces glucose and oxygen from carbon dioxide and water.</p>

                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Step 1: Light Absorption (Light-Dependent Reactions)</strong> The process begins when photons of light strike chlorophyll molecules in the thylakoid membranes of chloroplasts. This is similar to how solar panels capture sunlight, except that chlorophyll specifically absorbs red and blue light while reflecting green light. The absorbed light energy excites electrons in the chlorophyll molecule to a higher energy state. These energized electrons are then passed through a series of proteins called the electron transport chain, releasing energy that is used to pump hydrogen ions across a membrane, creating an electrochemical gradient.</p>

                    <p><strong>Step 2: Water Splitting and Oxygen Release</strong> To replace the electrons that were boosted to higher energy levels, chlorophyll splits water molecules (H₂O) in a process called photolysis. Each water molecule is split into hydrogen ions (H⁺), electrons, and oxygen atoms. The oxygen atoms combine to form oxygen gas (O₂), which is released into the atmosphere as a byproduct. This is the source of virtually all oxygen we breathe!</p>

                    <p><strong>Step 3: ATP and NADPH Formation</strong> The hydrogen ion gradient created earlier drives the synthesis of ATP (adenosine triphosphate), the universal energy currency of cells. Simultaneously, hydrogen ions combine with a carrier molecule called NADP⁺ to form NADPH. Think of ATP and NADPH as fully charged batteries that store the captured light energy in chemical form.</p>
                </div>

                <div style={{ maxWidth: '640px', margin: '30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/g78utcLQrJ4"
                            title="Photosynthesis Overview"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>

                <div style={{ marginLeft: '20px' }}>
                    <p><strong>Step 4: Carbon Fixation (Light-Independent Reactions/Calvin Cycle)</strong> This stage doesn't require direct light but uses the ATP and NADPH produced previously. In the stroma of the chloroplast, carbon dioxide from the atmosphere is "fixed" into organic molecules through the Calvin Cycle. An enzyme called <strong>RuBisCO</strong> catalyzes the attachment of CO₂ to a 5-carbon sugar molecule. Through a series of reactions powered by ATP and NADPH, this eventually produces glucose (C₆H₁₂O₆).</p>

                    <p><strong>Step 5: Synthesis of Complex Organic Molecules</strong> The glucose produced can be used in several ways. Some is broken down through cellular respiration to provide energy for the plant's own metabolic needs. Much of it is converted into cellulose for building cell walls, starch for energy storage, or used as building blocks for proteins, lipids, and nucleic acids.</p>
                </div>

                <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#334155' }}>Photosynthesis Equation</h4>
                    <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                        6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
                    </p>
                </div>

                <h4>Chemosynthesis: Producers Without Sunlight</h4>
                <p>In extreme environments where sunlight doesn't penetrate—such as deep ocean hydrothermal vents—some producers use chemosynthesis. Chemosynthetic bacteria obtain energy by oxidizing inorganic molecules like hydrogen sulfide (H₂S), ammonia (NH₃), or methane (CH₄). For example, bacteria near hydrothermal vents oxidize hydrogen sulfide, releasing energy that they use to convert carbon dioxide into organic compounds. This process supports entire ecosystems in complete darkness.</p>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>The Mechanism of Photosynthesis</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '30px', alignItems: 'center' }}>
                            <div style={{ padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#0369a1', letterSpacing: '0.1em', marginBottom: '10px' }}>LIGHT-DEPENDENT</div>
                                <ul style={{ fontSize: '0.85em', paddingLeft: '15px' }}>
                                    <li>Input: H₂O + Light</li>
                                    <li>Output: O₂</li>
                                    <li>Result: ⚡ ATP + NADPH</li>
                                </ul>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5em', color: '#94a3b8' }}>⚡</div>
                                <div style={{ fontSize: '0.6em', color: '#94a3b8' }}>ENERGY<br />CARRIERS</div>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                                <div style={{ fontSize: '0.7em', fontWeight: '800', color: '#15803d', letterSpacing: '0.1em', marginBottom: '10px' }}>CALVIN CYCLE</div>
                                <ul style={{ fontSize: '0.85em', paddingLeft: '15px' }}>
                                    <li>Input: CO₂</li>
                                    <li>Catalyst: RuBisCO</li>
                                    <li>Output: 🍬 GLUCOSE</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 2: Flow of matter and energy in photosynthesis (Light-Dependent and Light-Independent Reactions)
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Types and Diversity of Producers</h3>
                <ol>
                    <li style={{ marginBottom: '20px' }}>
                        <strong>Terrestrial Producers:</strong> Land-based producers include trees, shrubs, grasses, mosses, and ferns. Forest trees are particularly important; a single mature oak tree can produce enough oxygen for two people annually. Challenges include water availability and seasonal temperature changes, leading to adaptations like leaf-dropping and deep root systems.
                        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0fdf4', borderRadius: '6px', fontSize: '0.9em' }}>
                            <strong>Example:</strong> The Amazon Rainforest contains approximately 390 billion individual trees, making it Earth's most productive terrestrial ecosystem.
                        </div>
                    </li>
                    <li style={{ marginBottom: '20px' }}>
                        <strong>Aquatic Producers:</strong> These include phytoplankton (microscopic algae), large algae (kelp), and aquatic plants (water lilies). Phytoplankton produce more than 50% of Earth's oxygen and form the base of marine food webs.
                        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '6px', fontSize: '0.9em' }}>
                            <strong>Insight:</strong> Kelp forests can grow up to 60cm per day, creating underwater habitats that support vast diversity.
                        </div>
                    </li>
                    <li style={{ marginBottom: '20px' }}>
                        <strong>Photosynthetic Bacteria:</strong> Cyanobacteria (blue-green bacteria) evolved over 3.5 billion years ago and were responsible for the Great Oxygenation Event 2.4 billion years ago. Today, Prochlorococcus is likely the most abundant photosynthetic organism on Earth.
                    </li>
                    <li>
                        <strong>Chemosynthetic Producers:</strong> Thriving in environments like hydrothermal vents, these producers oxidize hydrogen sulfide or methane instead of using sunlight.
                    </li>
                </ol>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#334155' }}>🌍 Producer Distribution Across Ecosystems:</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        <div>
                            <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}><strong>Tropical Rainforests:</strong> Highest terrestrial productivity (2,200 g/m²/year)</p>
                            <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}><strong>Temperate Forests:</strong> Moderate productivity (1,250 g/m²/year)</p>
                            <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}><strong>Grasslands:</strong> Moderate productivity (900 g/m²/year)</p>
                        </div>
                        <div>
                            <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}><strong>Deserts:</strong> Low productivity (90 g/m²/year)</p>
                            <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}><strong>Open Ocean:</strong> Low productivity (125 g/m²/year) but huge total area</p>
                            <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}><strong>Coral Reefs:</strong> Very high productivity (2,500 g/m²/year)</p>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Primary Productivity: Measuring Producer Efficiency</h3>
                <p>Primary productivity refers to the rate at which producers convert energy into biomass through photosynthesis or chemosynthesis. It's measured in carbon fixed or biomass produced per unit area per unit time (e.g., g/m²/year).</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '25px 0' }}>
                    <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>Gross Primary Productivity (GPP)</h4>
                        <p style={{ fontSize: '0.9em', margin: 0 }}>The total amount of organic matter produced. Think of this as the "Total Salary" before any deductions.</p>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#15803d' }}>Net Primary Productivity (NPP)</h4>
                        <p style={{ fontSize: '0.9em', margin: '0 0 10px 0' }}>What remains after producers use energy for their own respiration (R).</p>
                        <p style={{ fontWeight: 'bold', fontSize: '1em', margin: 0 }}>NPP = GPP - R</p>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Ecosystem Type</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>GPP (g/m²/year)</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>NPP (g/m²/year)</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Limiting Factors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}>Tropical Rainforest</td>
                                <td style={{ padding: '12px' }}>4,000-5,000</td>
                                <td style={{ padding: '12px' }}>2,000-2,500</td>
                                <td style={{ padding: '12px' }}>Nutrient availability</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}>Desert</td>
                                <td style={{ padding: '12px' }}>150-200</td>
                                <td style={{ padding: '12px' }}>70-100</td>
                                <td style={{ padding: '12px' }}>Water (severe)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}>Open Ocean</td>
                                <td style={{ padding: '12px' }}>250-300</td>
                                <td style={{ padding: '12px' }}>120-130</td>
                                <td style={{ padding: '12px' }}>Nutrients (N, P)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '12px' }}>Coral Reef</td>
                                <td style={{ padding: '12px' }}>4,000-5,000</td>
                                <td style={{ padding: '12px' }}>2,000-2,500</td>
                                <td style={{ padding: '12px' }}>Light, Temperature</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>🌡️ Environmental Factors Influencing Producers</h4>
                <ul style={{ lineHeight: '1.6' }}>
                    <li><strong>Light:</strong> Intensity and duration drive photosynthesis rates up to a saturation point.</li>
                    <li><strong>Temperature:</strong> Influences enzyme activity; optimal range is typically 25-35°C.</li>
                    <li><strong>Water Availability:</strong> The primary limiting factor in arid ecosystems; essential for stomatal function.</li>
                    <li><strong>Nutrient Availability:</strong> Nitrogen, phosphorus, and potassium are critical for biomass production.</li>
                    <li><strong>CO₂ Concentration:</strong> Higher levels can increase photosynthesis (CO₂ fertilization effect).</li>
                    <li><strong>Soil Quality:</strong> pH and organic matter content influence root health and nutrient uptake.</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>⚠️ Common Misconceptions</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', border: '1px solid #feb2b2' }}>
                        <p><strong>Misconception:</strong> "All producers are plants"</p>
                        <p style={{ fontSize: '0.9em', color: '#c53030' }}><strong>Reality:</strong> Algae, cyanobacteria, and chemosynthetic bacteria are also producers. In fact, Prochlorococcus may be the most abundant photosynthetic organism on Earth.</p>
                    </div>
                    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', border: '1px solid #feb2b2' }}>
                        <p><strong>Misconception:</strong> "Producers don't perform cellular respiration"</p>
                        <p style={{ fontSize: '0.9em', color: '#c53030' }}><strong>Reality:</strong> Producers absolutely respire! They must break down glucose to provide energy for life processes. NPP = GPP - R.</p>
                    </div>
                    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', border: '1px solid #feb2b2' }}>
                        <p><strong>Misconception:</strong> "Rainforests are the only real oxygen source"</p>
                        <p style={{ fontSize: '0.9em', color: '#c53030' }}><strong>Reality:</strong> Ocean phytoplankton produce 50-80% of Earth's oxygen. Rainforests consume nearly all the oxygen they produce through respiration and decomposition.</p>
                    </div>
                    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', border: '1px solid #feb2b2' }}>
                        <p><strong>Misconception:</strong> "More sunlight always means more productivity"</p>
                        <p style={{ fontSize: '0.9em', color: '#c53030' }}><strong>Reality:</strong> Productivity follows <strong>Liebig's Law of the Minimum</strong>—it's limited by the scarcest resource (like water in deserts) not the most abundant one.</p>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>🎥 Learn Through Videos</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Producers in Ecosystems</h5>
                        <p style={{ fontSize: '0.8em', color: '#666', marginBottom: '15px' }}>Amoeba Sisters - Easy explanation of trophic levels and energy flow.</p>
                        <a href="https://www.youtube.com/watch?v=qUZkWZ12A8s" target="_blank" style={{ color: '#0369a1', fontSize: '0.85em', textDecoration: 'none', fontWeight: 'bold' }}>Watch →</a>
                    </div>
                    <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Ocean Phytoplankton</h5>
                        <p style={{ fontSize: '0.8em', color: '#666', marginBottom: '15px' }}>NASA visualization of phytoplankton blooms and global importance.</p>
                        <a href="https://www.youtube.com/watch?v=0_fCD_N-5pQ" target="_blank" style={{ color: '#0369a1', fontSize: '0.85em', textDecoration: 'none', fontWeight: 'bold' }}>Watch →</a>
                    </div>
                    <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Chemosynthesis: Life Without Sun</h5>
                        <p style={{ fontSize: '0.8em', color: '#666', marginBottom: '15px' }}>BBC Earth - Deep-sea vent ecosystems powered by chemicals.</p>
                        <a href="https://www.youtube.com/watch?v=D69hGvCsWgA" target="_blank" style={{ color: '#0369a1', fontSize: '0.85em', textDecoration: 'none', fontWeight: 'bold' }}>Watch →</a>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>⚙️ Worked Examples: Primary Productivity Calculations</h3>

                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0' }}>Example 1: Basic NPP Calculation</h4>
                    <p><strong>Problem:</strong> A grassland has a GPP of 1,800 g/m²/year. Producers use 720 g/m²/year for respiration. Calculate NPP and Efficiency.</p>
                    <div style={{ padding: '15px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                        <p style={{ margin: '0 0 10px 0' }}>1. <strong>NPP = GPP - R</strong></p>
                        <p style={{ margin: '0 0 10px 0' }}>NPP = 1,800 - 720 = <strong>1,080 g/m²/year</strong></p>
                        <p style={{ margin: '0 0 10px 0' }}>2. <strong>Efficiency = (NPP / GPP) × 100</strong></p>
                        <p style={{ margin: 0 }}>Efficiency = (1,080 / 1,800) × 100 = <strong>60%</strong></p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0' }}>Example 2: Ecosystem Comparison</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Ecosystem</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>GPP (kg/ha/yr)</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>NPP Calculation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '10px' }}>Rainforest</td>
                                    <td style={{ padding: '10px' }}>45,000</td>
                                    <td style={{ padding: '10px' }}>45,000 - 20,000 = 25,000 (2,500 g/m²/yr)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>Desert</td>
                                    <td style={{ padding: '10px' }}>2,000</td>
                                    <td style={{ padding: '10px' }}>2,000 - 1,200 = 800 (80 g/m²/yr)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: '20px', fontSize: '0.9em' }}><strong>Insight:</strong> The rainforest is over 31 times more productive than the desert, and stores much more carbon annually (11,250 kg C/ha vs 360 kg C/ha).</p>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #f1f5f9', margin: '40px 0' }}>
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '30px', color: '#111827' }}>Energy Transfer Efficiency through Trophic Levels</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gap: '20px' }}>
                                <div style={{ textAlign: 'right', fontSize: '0.7em', color: '#64748b' }}>SECONDARY CONSUMERS</div>
                                <div style={{ padding: '15px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '6px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.9em', fontWeight: 'bold' }}>8 g/m²/year</div>
                                    <div style={{ fontSize: '0.6em' }}>1% of original energy</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', color: '#94a3b8' }}>↑ 10%</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gap: '20px' }}>
                                <div style={{ textAlign: 'right', fontSize: '0.7em', color: '#64748b' }}>PRIMARY CONSUMERS</div>
                                <div style={{ padding: '15px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.9em', fontWeight: 'bold' }}>80 g/m²/year</div>
                                    <div style={{ fontSize: '0.6em' }}>10% of original energy</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', color: '#16a34a', fontWeight: 'bold' }}>↑ 10%</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gap: '20px' }}>
                                <div style={{ textAlign: 'right', fontSize: '0.7em', color: '#166534', fontWeight: 'bold' }}>PRODUCERS</div>
                                <div style={{ padding: '15px', backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '6px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1em', fontWeight: 'bold' }}>800 g/m²/year</div>
                                    <div style={{ fontSize: '0.6em' }}>100% (Baseline NPP)</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: '20px 0 0 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', fontSize: '0.7em', color: '#ef4444' }}>
                            <span>✖ Heat from Respiration</span> <span>✖ Waste Products</span> <span>✖ Non-consumed Biomass</span>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#64748b', margin: '0 10px' }}>
                        Figure 3: Energy transfer efficiency demonstrating the 10% rule and consistent energy loss.
                    </p>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '8px', border: '1px solid #ffedd5', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#c2410c' }}>Energy Transfer Insight</h4>
                    <p style={{ margin: 0, fontSize: '0.92em' }}>Eating producers directly is approximately 10 times more energy-efficient than eating secondary consumers. This is why plant-based diets can support much larger human populations with the same amount of agricultural land.</p>
                </div>

                <Quiz
                    title="Module 1.4 Quiz: Producers and Productivity"
                    questions={quizQuestions}
                    subject="ES"
                    unitId={1}
                    moduleId={4}
                />

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div className="resources-section" style={{ marginTop: '40px' }}>
                    <h3>Learning Resources & Further Exploration</h3>
                    <p>Comprehensive learning resources and tutorials to deepen your understanding.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Tutorial Platforms</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.geeksforgeeks.org" target="_blank">GeeksforGeeks</a></li>
                                <li><a href="https://www.javatpoint.com" target="_blank">JavaTpoint</a></li>
                                <li><a href="https://www.tutorialspoint.com" target="_blank">TutorialsPoint</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Video Learning</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.youtube.com/@crashcourse" target="_blank">Crash Course</a></li>
                                <li><a href="https://www.youtube.com/@TEDEd" target="_blank">TED-Ed</a></li>
                                <li><a href="https://www.khanacademy.org" target="_blank">Khan Academy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Academic Resources</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.sciencedirect.com" target="_blank">ScienceDirect</a></li>
                                <li><a href="https://www.jstor.org" target="_blank">JSTOR</a></li>
                                <li><a href="https://scholar.google.com" target="_blank">Google Scholar</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Organizations</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.unep.org" target="_blank">UNEP</a></li>
                                <li><a href="https://www.epa.gov" target="_blank">EPA</a></li>
                                <li><a href="https://www.worldwildlife.org" target="_blank">WWF</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Online Courses</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.coursera.org" target="_blank">Coursera</a></li>
                                <li><a href="https://www.edx.org" target="_blank">edX</a></li>
                                <li><a href="https://www.futurelearn.com" target="_blank">FutureLearn</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>News & Updates</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em' }}>
                                <li><a href="https://www.nationalgeographic.com/environment" target="_blank">Nat Geo Environment</a></li>
                                <li><a href="https://www.scientificamerican.com" target="_blank">Scientific American</a></li>
                                <li><a href="https://www.nature.com" target="_blank">Nature</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module1_4;
