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
                <ul style={{ lineHeight: '1.7' }}>
                    <li><strong>Define</strong> producers and explain their fundamental role as autotrophs in energy conversion within ecosystems</li>
                    <li><strong>Analyze</strong> the process of photosynthesis and chemosynthesis as primary mechanisms of energy production</li>
                    <li><strong>Evaluate</strong> the structural and functional diversity of producers across terrestrial, aquatic, and extreme environments</li>
                    <li><strong>Calculate</strong> primary productivity (GPP, NPP) and assess factors affecting producer efficiency in energy capture and biomass production</li>
                    <li><strong>Synthesize</strong> understanding of producer adaptations and their ecological significance in maintaining ecosystem stability and food web dynamics</li>
                </ul>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ backgroundColor: '#fff7ed', padding: '30px', borderRadius: '20px', border: '1px solid #ffedd5', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5em', opacity: 0.1 }}>🔥</div>
                    <h3 style={{ color: '#c2410c', marginTop: 0 }}>Why This Topic Matters</h3>
                    <p>Imagine you're at a bustling restaurant where hundreds of people are dining simultaneously. Now picture that every single dish, dessert, and drink served there originates from one master kitchen that creates food from sunlight, air, and water. This is exactly what producers do in nature's restaurant—the ecosystem. They are the master chefs that convert solar energy into the chemical energy that feeds virtually all life on Earth.</p>

                    <p>Producers, also called autotrophs, form the foundation of every ecosystem's energy pyramid. Without them, life as we know it would cease to exist. They are responsible for removing billions of tons of carbon dioxide from the atmosphere annually, producing the oxygen we breathe, and creating the organic matter that sustains all consumers—from tiny insects to massive blue whales.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
                        {[
                            { icon: '🌍', title: 'Climate Change', text: 'Informs carbon sequestration and credit systems.' },
                            { icon: '🌾', title: 'Agricultural Productivity', text: 'Optimizing crop yields and food security.' },
                            { icon: '🌊', title: 'Ecosystem Restoration', text: 'Establishing healthy producer communities.' },
                            { icon: '🚀', title: 'Space Exploration', text: 'Life support systems for Mars missions.' }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #fed7aa', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <div style={{ fontSize: '2em', marginBottom: '10px' }}>{item.icon}</div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9em', color: '#9a3412', marginBottom: '5px' }}>{item.title}</div>
                                <div style={{ fontSize: '0.8em', color: '#7c2d12', lineHeight: '1.4' }}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Deep Dive: Understanding Producers</h3>
                <h4>Definition & Fundamentals</h4>
                <p>What are Producers? In simple terms, producers are organisms that make their own food from simple inorganic substances. Think of them as nature's factories that transform non-living materials into living tissue. Technically, producers are <strong>autotrophs</strong>—organisms capable of synthesizing organic compounds from inorganic substances using energy from light (photosynthesis) or chemical reactions (chemosynthesis).</p>

                <p>The term "producer" refers to their unique position in the ecosystem: they produce the organic matter and energy that all other organisms depend upon. While animals must consume other organisms to obtain energy (heterotrophs), producers can capture energy directly from their environment and convert it into chemical energy stored in the bonds of organic molecules like glucose, proteins, and lipids.</p>

                <p><strong>Why do producers exist?</strong> From an evolutionary perspective, the development of photosynthesis approximately 3.5 billion years ago was one of the most significant events in Earth's history. Before producers evolved, life was limited to simple chemotrophic organisms. The evolution of photosynthetic producers revolutionized the planet by generating oxygen, creating complex food webs, and enabling the explosion of biodiversity we see today. Without producers, ecosystems would collapse within weeks as energy reserves depleted and oxygen disappeared from the atmosphere.</p>

                <p><strong>Historical Context:</strong> The scientific understanding of producers evolved gradually. In the 1770s, Joseph Priestley discovered that plants could "restore" air that had been "injured" by burning candles or animal respiration. Jan Ingenhousz later demonstrated that this process required light. By the mid-19th century, scientists understood that plants converted carbon dioxide and water into organic matter, though the detailed biochemistry wasn't elucidated until the 20th century. The concept of trophic levels and producers as the base of food chains was formalized by ecologist Charles Elton in the 1920s, revolutionizing our understanding of ecosystem structure.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 15px 0', fontSize: '0.85em', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em' }}>📌 Key Terminology</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9em', margin: 0, lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Autotroph:</strong> An organism that produces complex organic compounds from simple inorganic molecules using energy from light or inorganic chemical reactions.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Photosynthesis:</strong> The process by which plants, algae, and some bacteria convert light energy into chemical energy stored in glucose, releasing oxygen as a byproduct.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Chemosynthesis:</strong> The biological conversion of inorganic molecules (like hydrogen sulfide or methane) and nutrients into organic matter using chemical energy rather than sunlight.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Primary Productivity:</strong> The rate at which producers convert energy (usually from sunlight) into chemical energy or biomass through photosynthesis in a given area over a specific time period.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Chlorophyll:</strong> The green pigment found in plants and algae that absorbs light energy (primarily red and blue wavelengths) for photosynthesis.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Trophic Level:</strong> The position an organism occupies in a food chain, with producers always occupying the first (bottom) trophic level.</li>
                            <li><strong>Carbon Fixation:</strong> The process by which producers convert inorganic carbon dioxide into organic compounds that can be used by living organisms.</li>
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

                <div style={{ backgroundColor: '#fcfcfc', padding: '60px 40px', borderRadius: '32px', border: '1px solid #f1f5f9', margin: '40px 0', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ color: '#10b981', fontSize: '1.8em', fontWeight: '800', margin: 0 }}>Role of Producers in Ecosystems</h2>
                    </div>

                    <div style={{ position: 'relative', width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>

                        {/* Sun to Producer Flow */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', width: '100%' }}>
                            <div style={{ textAlign: 'center', flex: '0 0 100px' }}>
                                <div style={{ fontSize: '3.5em', textShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}>☀️</div>
                                <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#b45309', marginTop: '5px' }}>SOLAR ENERGY</div>
                            </div>

                            <div style={{ flex: '1', height: '4px', backgroundColor: '#fbbf24', position: 'relative', borderRadius: '2px' }}>
                                <div style={{ position: 'absolute', right: '-10px', top: '-8px', width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '20px solid #fbbf24' }}></div>
                                <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75em', fontWeight: 'bold', color: '#b45309', whiteSpace: 'nowrap' }}>Light Capture</div>
                            </div>

                            <div style={{ flex: '0 0 320px', backgroundColor: '#f0fdf4', border: '3px solid #10b981', borderRadius: '25px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1)' }}>
                                <div style={{ fontSize: '1.1em', fontWeight: '800', color: '#065f46', letterSpacing: '0.05em' }}>🌱 PRODUCERS (Autotrophs)</div>
                                <div style={{ fontSize: '0.9em', color: '#065f46', marginTop: '12px', fontWeight: '500' }}>Plants, Algae, Cyanobacteria</div>
                                <div style={{ borderTop: '2px solid rgba(16, 185, 129, 0.2)', marginTop: '15px', paddingTop: '15px', fontSize: '0.85em', color: '#065f46' }}>
                                    Convert Light → Chemical Energy<br />
                                    <span style={{ fontWeight: 'bold', display: 'block', marginTop: '5px' }}>Input: CO₂ + H₂O</span>
                                </div>
                            </div>

                            <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5em' }}>💨</div>
                                <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#10b981' }}>O₂ RELEASED</div>
                            </div>
                        </div>

                        {/* Downward Energy Flow Arrow */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '4px', height: '50px', background: 'linear-gradient(to bottom, #10b981, #3b82f6)', borderRadius: '2px' }}></div>
                            <div style={{ width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '15px solid #3b82f6', marginTop: '-2px' }}></div>
                            <div style={{ fontSize: '0.75em', color: '#64748b', fontWeight: 'bold', marginTop: '10px' }}>ENERGY TRANSFER</div>
                        </div>

                        {/* Consumer Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', width: '100%' }}>
                            <div style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1)' }}>
                                <div style={{ fontSize: '2em', marginBottom: '10px' }}>🦌</div>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#1e40af' }}>PRIMARY CONSUMERS</div>
                                <div style={{ fontSize: '0.8em', color: '#1e40af', marginTop: '8px' }}>Depend directly on producers for chemical energy</div>
                            </div>
                            <div style={{ backgroundColor: '#fff1f2', border: '2px solid #ef4444', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.1)' }}>
                                <div style={{ fontSize: '2em', marginBottom: '10px' }}>🦁</div>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#991b1b' }}>HIGHER CONSUMERS</div>
                                <div style={{ fontSize: '0.8em', color: '#991b1b', marginTop: '8px' }}>Energy flow continues up the trophic pyramid</div>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '50px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                        Figure 1: Producers capture solar energy and convert it into chemical energy that flows through the entire ecosystem, supporting all other life forms.
                    </p>
                </div>


                <h3>How It Works: The Mechanism Explained</h3>
                <h4>The Photosynthesis Process: Nature's Solar Panels</h4>
                <p>Photosynthesis is the primary mechanism by which most producers convert light energy into chemical energy. This remarkable process occurs in specialized organelles called <strong>chloroplasts</strong>, which contain the green pigment chlorophyll. Think of photosynthesis as a highly sophisticated solar panel system, but instead of generating electricity, it produces glucose and oxygen from carbon dioxide and water.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', margin: '30px 0' }}>
                    {[
                        { step: '1', title: 'Light Absorption (Light-Dependent Reactions)', text: 'The process begins when photons of light strike chlorophyll molecules in the thylakoid membranes of chloroplasts. This is similar to how solar panels capture sunlight, except that chlorophyll specifically absorbs red and blue light while reflecting green light (which is why plants appear green). The absorbed light energy excites electrons in the chlorophyll molecule to a higher energy state—imagine this as giving electrons a "boost" of energy. These energized electrons are then passed through a series of proteins called the electron transport chain, releasing energy that is used to pump hydrogen ions across a membrane, creating an electrochemical gradient.' },
                        { step: '2', title: 'Water Splitting and Oxygen Release', text: 'To replace the electrons that were boosted to higher energy levels, chlorophyll splits water molecules (H₂O) in a process called photolysis. This is like breaking apart building blocks: each water molecule is split into hydrogen ions (H⁺), electrons (which replace those lost by chlorophyll), and oxygen atoms. The oxygen atoms combine to form oxygen gas (O₂), which is released into the atmosphere as a byproduct. This is the source of virtually all oxygen we breathe—a waste product for plants but essential for animal life!' },
                        { step: '3', title: 'ATP and NADPH Formation', text: 'The hydrogen ion gradient created earlier drives the synthesis of ATP (adenosine triphosphate), the universal energy currency of cells. Simultaneously, hydrogen ions combine with a carrier molecule called NADP⁺ to form NADPH. Think of ATP and NADPH as fully charged batteries that store the captured light energy in chemical form. These energy carriers will power the next stage of photosynthesis.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '1px solid #dcfce7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                            <div style={{ backgroundColor: '#10b981', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '1em', boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)' }}>{item.step}</div>
                            <div>
                                <strong style={{ color: '#065f46', display: 'block', marginBottom: '8px', fontSize: '1.05em' }}>Step {item.step}: {item.title}</strong>
                                <p style={{ fontSize: '0.95em', color: '#166534', margin: 0, lineHeight: '1.6' }}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', margin: '40px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ fontSize: '3em' }}>📚</div>
                    <div>
                        <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Photosynthesis: Crash Course Biology</h4>
                        <p style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#64748b' }}>CrashCourse - 13 min - Comprehensive explanation of photosynthesis with excellent animations</p>
                        <a href="https://www.youtube.com/watch?v=sQK3Yr4Sc_k" target="_blank" style={{ color: '#3b82f6', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9em' }}>Watch on YouTube ↗</a>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', margin: '30px 0' }}>
                    {[
                        { step: '4', title: 'Carbon Fixation (Light-Independent Reactions/Calvin Cycle)', text: 'This stage doesn\'t require direct light but uses the ATP and NADPH produced in the light-dependent reactions. In the stroma (fluid-filled space) of the chloroplast, carbon dioxide from the atmosphere is "fixed" into organic molecules through the Calvin Cycle. An enzyme called RuBisCO (the most abundant protein on Earth!) catalyzes the attachment of CO₂ to a 5-carbon sugar molecule. Through a series of reactions powered by ATP and NADPH, this eventually produces glucose (C₆H₁₂O₆), a simple sugar that can be used immediately for energy or converted into other organic compounds.' },
                        { step: '5', title: 'Synthesis of Complex Organic Molecules', text: 'The glucose produced can be used in several ways. Some is broken down through cellular respiration to provide energy for the plant\'s own metabolic needs. Much of it is converted into cellulose for building cell walls, starch for energy storage, or used as building blocks for proteins, lipids, and nucleic acids. This is comparable to a factory taking raw materials and creating various finished products—some for immediate use, some for storage, and some as structural components.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '1px solid #dcfce7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                            <div style={{ backgroundColor: '#10b981', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '1em', boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)' }}>{item.step}</div>
                            <div>
                                <strong style={{ color: '#065f46', display: 'block', marginBottom: '8px', fontSize: '1.05em' }}>Step {item.step}: {item.title}</strong>
                                <p style={{ fontSize: '0.95em', color: '#166534', margin: 0, lineHeight: '1.6' }}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '20px', margin: '30px 0', border: '4px solid #334155', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#94a3b8', fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Photosynthesis Equation</h4>
                    <p style={{ fontSize: '1.6em', fontWeight: 'bold', color: '#10b981', margin: 0, letterSpacing: '0.05em', fontFamily: 'monospace' }}>
                        6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
                    </p>
                </div>

                <h4>Chemosynthesis: Producers Without Sunlight</h4>
                <p>In extreme environments where sunlight doesn't penetrate—such as deep ocean hydrothermal vents, deep caves, or deep subsurface environments—some producers use chemosynthesis instead of photosynthesis. Chemosynthetic bacteria obtain energy by oxidizing inorganic molecules like hydrogen sulfide (H₂S), ammonia (NH₃), or methane (CH₄). For example, bacteria near hydrothermal vents oxidize hydrogen sulfide, releasing energy that they use to convert carbon dioxide into organic compounds. This process supports entire ecosystems in complete darkness, including tube worms, clams, and unique fish species.</p>

                <div style={{ backgroundColor: '#fcfcfc', padding: '50px 30px', borderRadius: '32px', border: '1px solid #e2e8f0', margin: '40px 0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h4 style={{ color: '#1e293b', fontSize: '1.2em', fontWeight: '700', margin: 0 }}>Process Flow: Photosynthesis</h4>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto' }}>

                        {/* INPUTS ROW */}
                        <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
                            <div style={{ backgroundColor: '#fdf2f8', padding: '12px 20px', borderRadius: '12px', border: '1px solid #fce7f3', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>☀️</span>
                                <span style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#9d174d' }}>Solar Energy</span>
                            </div>
                            <div style={{ backgroundColor: '#eff6ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em' }}>💧</span>
                                <span style={{ fontSize: '0.85em', fontWeight: 'bold', color: '#1e40af' }}>Water H₂O</span>
                            </div>
                        </div>

                        {/* LIGHT DEPENDENT REACTIONS DIAMOND */}
                        <div style={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: '#10b981',
                            transform: 'rotate(45deg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '20px',
                            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                            marginBottom: '60px',
                            marginTop: '20px'
                        }}>
                            <div style={{
                                transform: 'rotate(-45deg)',
                                textAlign: 'center',
                                color: 'white',
                                padding: '10px'
                            }}>
                                <div style={{ fontSize: '0.8em', marginBottom: '5px' }}>Chloroplast</div>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold' }}>Light-Dependent Reactions</div>
                            </div>
                        </div>

                        {/* OUTPUTS FROM LDR */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', position: 'relative', width: '100%', maxWidth: '600px' }}>
                            <div style={{ backgroundColor: '#ef4444', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', color: 'white', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)' }}>
                                <div style={{ fontSize: '0.85em', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    <span>💨</span> Oxygen O₂
                                </div>
                                <div style={{ fontSize: '0.7em', marginTop: '4px', opacity: 0.9 }}>Released to Atmosphere</div>
                            </div>
                            <div style={{ backgroundColor: '#f3e8ff', padding: '15px 20px', borderRadius: '12px', border: '1px solid #e9d5ff', textAlign: 'center', color: '#6b21a8', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.1)' }}>
                                <div style={{ fontSize: '0.85em', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    <span>⚡</span> ATP + NADPH
                                </div>
                                <div style={{ fontSize: '0.7em', marginTop: '4px', opacity: 0.8 }}>Energy Carriers</div>
                            </div>
                        </div>

                        {/* INPUT FOR CALVIN CYCLE */}
                        <div style={{ marginTop: '30px', backgroundColor: '#f8fafc', padding: '10px 15px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.1em' }}>🌫️</span>
                            <span style={{ fontSize: '0.75em', fontWeight: 'bold', color: '#475569' }}>Carbon Dioxide CO₂</span>
                        </div>

                        {/* CALVIN CYCLE DIAMOND */}
                        <div style={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: '#3b82f6',
                            transform: 'rotate(45deg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '20px',
                            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                            margin: '40px 0'
                        }}>
                            <div style={{
                                transform: 'rotate(-45deg)',
                                textAlign: 'center',
                                color: 'white',
                                padding: '10px'
                            }}>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold' }}>Calvin Cycle</div>
                                <div style={{ fontSize: '0.75em', marginTop: '4px' }}>Light-Independent Reactions</div>
                            </div>
                        </div>

                        {/* GLUCOSE OUTPUT */}
                        <div style={{ backgroundColor: '#f97316', padding: '20px 30px', borderRadius: '15px', textAlign: 'center', color: 'white', boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.3)', width: '250px', marginBottom: '30px' }}>
                            <div style={{ fontSize: '0.95em', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <span>🍬</span> Glucose C₆H₁₂O₆
                            </div>
                            <div style={{ fontSize: '0.8em', marginTop: '5px', fontWeight: '500' }}>Organic Molecules</div>
                        </div>

                        {/* FINAL DESTINATIONS FLOW */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', width: '100%', marginTop: '20px' }}>
                            {[
                                { icon: '🌾', label: 'Starch Storage', bg: '#f1f8eb', text: '#3f6212', border: '#d9f99d' },
                                { icon: '🏗️', label: 'Cellulose Structure', bg: '#fff7ed', text: '#9a3412', border: '#fed7aa' },
                                { icon: '⚡', label: 'Cellular Respiration', sub: "Plant's Own Energy", bg: '#fef2f2', text: '#991b1b', border: '#fecaca' },
                                { icon: '🍃', label: 'Other Organic Compounds', sub: "Proteins, Lipids, etc.", bg: '#f5f3ff', text: '#5b21b6', border: '#ddd6fe' }
                            ].map((dest, i) => (
                                <div key={i} style={{ backgroundColor: dest.bg, padding: '15px 10px', borderRadius: '12px', border: `1px solid ${dest.border}`, textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                    <div style={{ fontSize: '1.4em', marginBottom: '8px' }}>{dest.icon}</div>
                                    <div style={{ fontSize: '0.75em', fontWeight: 'bold', color: dest.text, lineHeight: '1.3' }}>{dest.label}</div>
                                    {dest.sub && <div style={{ fontSize: '0.65em', color: dest.text, marginTop: '4px', opacity: 0.8 }}>{dest.sub}</div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#64748b', textAlign: 'center', marginTop: '50px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                        Figure 2: Complete photosynthesis process showing the high-level integration of light-dependent and light-independent reactions.
                    </p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Types and Diversity of Producers</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '1px solid #dcfce7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <span style={{ fontSize: '2em' }}>🌳</span>
                            <h4 style={{ color: '#166534', margin: 0 }}>Terrestrial Producers</h4>
                        </div>
                        <p style={{ fontSize: '0.9em', color: '#14532d', lineHeight: '1.7', margin: 0 }}>
                            Land-based producers include trees, shrubs, and grasses. Forest trees like oaks are particularly important, with a single mature tree producing enough O₂ for two people annually. Challenges include water availability and seasonal temperature extremes.
                        </p>
                        <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '10px', fontSize: '0.85em', color: '#166534', fontWeight: 'bold' }}>
                            Example: Amazon Rainforest - Earth's most productive terrestrial ecosystem (~390B trees).
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '20px', border: '1px solid #e0f2fe', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <span style={{ fontSize: '2em' }}>🌊</span>
                            <h4 style={{ color: '#0369a1', margin: 0 }}>Aquatic Producers</h4>
                        </div>
                        <p style={{ fontSize: '0.9em', color: '#0c4a6e', lineHeight: '1.7', margin: 0 }}>
                            Phytoplankton (microscopic algae) and large seaweeds like kelp. Phytoplankton are the "real lungs" of Earth, producing over 50% of our oxygen and forming the base of every marine food web.
                        </p>
                        <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '10px', fontSize: '0.85em', color: '#0369a1', fontWeight: 'bold' }}>
                            Insight: Kelp forests can grow up to 60cm/day, creating underwater "forests".
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#fdf2f8', padding: '25px', borderRadius: '20px', border: '1px solid #fce7f3', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <span style={{ fontSize: '2em' }}>🧫</span>
                            <h4 style={{ color: '#9d174d', margin: 0 }}>Photosynthetic Bacteria</h4>
                        </div>
                        <p style={{ fontSize: '0.9em', color: '#831843', lineHeight: '1.7', margin: 0 }}>
                            Cyanobacteria evolved ~3.5B years ago. Prochlorococcus is likely the most abundant photosynthesizer on Earth, with 3x10²⁷ individuals in the world's oceans.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <span style={{ fontSize: '2em' }}>🌋</span>
                            <h4 style={{ color: '#475569', margin: 0 }}>Chemosynthetic Producers</h4>
                        </div>
                        <p style={{ fontSize: '0.9em', color: '#334155', lineHeight: '1.7', margin: 0 }}>
                            Thrive in darkness (hydrothermal vents, deep caves). They oxidize H₂S or methane to produce energy, supporting life where sunlight never reaches.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0', color: '#334155', textAlign: 'center' }}>🌍 Producer Distribution & Productivity (NPP)</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
                        {[
                            { name: 'Tropical Rainforest', val: '2,200 g/m²/yr', color: '#166534' },
                            { name: 'Coral Reefs', val: '2,500 g/m²/yr', color: '#0369a1' },
                            { name: 'Estuaries', val: '1,500 g/m²/yr', color: '#059669' },
                            { name: 'Temperate Forests', val: '1,250 g/m²/yr', color: '#15803d' },
                            { name: 'Grasslands', val: '900 g/m²/yr', color: '#1e40af' },
                            { name: 'Open Ocean', val: '125 g/m²/yr', color: '#2563eb' },
                            { name: 'Deserts', val: '90 g/m²/yr', color: '#92400e' }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: `5px solid ${item.color}` }}>
                                <div style={{ fontSize: '0.8em', color: '#64748b', fontWeight: 'bold', marginBottom: '2px' }}>{item.name}</div>
                                <div style={{ fontSize: '1em', fontWeight: '800', color: item.color }}>{item.val}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>Primary Productivity: Measuring Producer Efficiency</h3>
                <h4>Understanding Productivity Metrics</h4>
                <p>Primary productivity refers to the rate at which producers convert energy into biomass through photosynthesis or chemosynthesis. It's typically measured as the amount of carbon fixed or biomass produced per unit area per unit time (e.g., <strong>grams per square meter per year</strong>). This concept is crucial for understanding ecosystem energy flow, carbon cycling, and the capacity of ecosystems to support life.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '20px', border: '1px solid #bae6fd' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>Gross Primary Productivity (GPP)</h4>
                        <p style={{ fontSize: '0.9em', color: '#0c4a6e', margin: 0, lineHeight: '1.6' }}>
                            <strong>Gross Primary Productivity (GPP)</strong> is the total amount of organic matter produced by producers through photosynthesis in a given time period. This is the total amount of solar energy captured and converted into chemical energy before any is used by the producers themselves. <em>Think of GPP as the total salary earned before any deductions.</em>
                        </p>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#15803d' }}>Net Primary Productivity (NPP)</h4>
                        <p style={{ fontSize: '0.9em', color: '#14532d', margin: '0 0 15px 0', lineHeight: '1.6' }}>
                            <strong>Net Primary Productivity (NPP)</strong> is what remains after producers use some of the produced organic matter for their own cellular respiration (R). The formula is: <strong style={{ color: '#166534' }}>NPP = GPP - R</strong>. This represents the actual biomass available to consumers in the ecosystem. <em>Think of NPP as your take-home pay after taxes and deductions—it's what you actually have available to spend.</em>
                        </p>
                        <div style={{ backgroundColor: 'white', padding: '10px 15px', borderRadius: '10px', fontWeight: 'bold', fontSize: '1.1em', color: '#166534', textAlign: 'center', border: '1px solid #dcfce7' }}>NPP = GPP - R</div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '20px', border: '1px solid #ffedd5', marginBottom: '30px' }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>💡</span>
                        <p style={{ margin: 0, fontSize: '0.95em', color: '#9a3412', lineHeight: '1.6' }}>
                            <strong>Example Case Study:</strong> A forest might have a GPP of <strong>3,000 g/m²/year</strong>, but if the plants use <strong>1,000 g/m²/year</strong> for respiration (R), the NPP would be <strong>2,000 g/m²/year</strong>. Only this NPP is available to herbivores and decomposers.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff7ed', padding: '30px', borderRadius: '20px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 20px 0', color: '#c2410c' }}>📊 Detailed Productivity Comparison</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#ffedd5', borderBottom: '2px solid #fed7aa' }}>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#9a3412' }}>Ecosystem Type</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#9a3412' }}>GPP (g/m²/yr)</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#9a3412' }}>NPP (g/m²/yr)</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#9a3412' }}>Efficiency (%)</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#9a3412' }}>Limiting Factors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Tropical Rainforest', gpp: '4,000-5,000', npp: '2,000-2,500', eff: '50-60%', fact: 'Nutrient availability' },
                                    { name: 'Temperate Deciduous Forest', gpp: '2,000-2,500', npp: '1,200-1,300', eff: '55-60%', fact: 'Seasonal light, temperature' },
                                    { name: 'Grassland', gpp: '1,500-2,000', npp: '800-1,000', eff: '50-53%', fact: 'Water, nutrients' },
                                    { name: 'Desert', gpp: '150-200', npp: '70-100', eff: '45-50%', fact: 'Water (severe limitation)' },
                                    { name: 'Open Ocean', gpp: '250-300', npp: '120-130', eff: '45-48%', fact: 'Nutrients (nitrogen, phosphorus)' },
                                    { name: 'Coral Reef', gpp: '4,000-5,000', npp: '2,000-2,500', eff: '50-55%', fact: 'Light, temperature, symbiosis' },
                                    { name: 'Agricultural Cropland', gpp: '1,200-2,000', npp: '600-1,000', eff: '50-55%', fact: 'Managed (water, nutrients added)' }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #ffedd5' }}>
                                        <td style={{ padding: '15px', fontWeight: '600' }}>{row.name}</td>
                                        <td style={{ padding: '15px' }}>{row.gpp}</td>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>{row.npp}</td>
                                        <td style={{ padding: '15px' }}>{row.eff}</td>
                                        <td style={{ padding: '15px', fontStyle: 'italic' }}>{row.fact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h4>🌡️ Environmental Factors Influencing Producers</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', margin: '25px 0' }}>
                    {[
                        { title: 'Light Intensity and Duration', desc: 'Photosynthesis rate increases with light intensity up to a saturation point. Seasonal variations and latitude affect day length. Underwater producers face light attenuation with depth.' },
                        { title: 'Temperature', desc: 'Enzyme activity increases with temperature up to an optimal point (typically 25-35°C). Above this, denaturation reduces productivity. Cold temperatures slow metabolic processes.' },
                        { title: 'Water Availability', desc: 'Essential for photosynthesis and as a transport medium. Water stress closes stomata, reducing CO₂ intake. This is the primary limiting factor in arid ecosystems.' },
                        { title: 'Nutrient Availability', desc: 'Nitrogen (chlorophyll/protein), phosphorus (ATP/DNA), and potassium are critical. Many ecosystems are nutrient-limited.' },
                        { title: 'Carbon Dioxide Concentration', desc: 'Higher CO₂ can increase photosynthesis rates (CO₂ fertilization effect), though limited by other factors. Rising atmospheric CO₂ is affecting global productivity.' },
                        { title: 'Soil Quality (Terrestrial)', desc: 'pH, structure, organic matter, and microbial activity all influence nutrient availability and root function.' }
                    ].map((f, i) => (
                        <div key={i} style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '10px', fontSize: '1.05em' }}>{f.title}</div>
                            <div style={{ fontSize: '0.9em', color: '#475569', lineHeight: '1.6' }}>{f.desc}</div>
                        </div>
                    ))}
                </div>

                <div style={{ margin: '40px 0', border: '1px solid #e2e8f0', borderRadius: '24px', overflow: 'hidden' }}>
                    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold' }}>Master Comparison: Producer Types</div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f1f5f9' }}>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Characteristic</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Terrestrial Plants</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Phytoplankton</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Chemosynthetics</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Energy Source</td>
                                    <td style={{ padding: '15px' }}>Sunlight</td>
                                    <td style={{ padding: '15px' }}>Sunlight</td>
                                    <td style={{ padding: '15px' }}>Chemical Bonds (H₂S, CH₄)</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Primary Location</td>
                                    <td style={{ padding: '15px' }}>Land (Soil)</td>
                                    <td style={{ padding: '15px' }}>Photic Zone (Oceans/Lakes)</td>
                                    <td style={{ padding: '15px' }}>Deep Sea, Caves</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Main Limiting Factor</td>
                                    <td style={{ padding: '15px' }}>Water, Temperature</td>
                                    <td style={{ padding: '15px' }}>Nutrients (P, N, Fe)</td>
                                    <td style={{ padding: '15px' }}>Chemical Substrate Supply</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '60px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <span style={{ color: '#f59e0b', fontSize: '1.5em' }}>⚠️</span>
                        <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.5em', fontWeight: 'bold' }}>Common Misconceptions</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {[
                            {
                                myth: '"All producers are plants"',
                                reality: (
                                    <>
                                        <span style={{ color: '#ef4444' }}>Algae, cyanobacteria, and chemosynthetic bacteria are also producers. In fact, Prochlorococcus may be the most abundant photosynthetic organism on Earth.</span>
                                    </>
                                )
                            },
                            {
                                myth: '"Producers don\'t perform cellular respiration"',
                                reality: (
                                    <>
                                        <span style={{ color: '#ef4444' }}>Producers absolutely respire! They must break down glucose to provide energy for life processes. NPP = GPP - R.</span>
                                    </>
                                )
                            },
                            {
                                myth: '"Rainforests are the only real oxygen source"',
                                reality: (
                                    <>
                                        <span style={{ color: '#ef4444' }}>Ocean phytoplankton produce 50-80% of Earth\'s oxygen. Rainforests consume nearly all the oxygen they produce through respiration and decomposition.</span>
                                    </>
                                )
                            },
                            {
                                myth: '"More sunlight always means more productivity"',
                                reality: (
                                    <>
                                        <span style={{ color: '#ef4444' }}>Productivity follows Liebig\'s Law of the Minimum—it\'s limited by the scarcest resource (like water in deserts) not the most abundant one.</span>
                                    </>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#fff1f2', padding: '30px', borderRadius: '15px', border: '1px solid #fecaca', height: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ fontSize: '1em' }}>
                                    <span style={{ fontWeight: 'bold', color: '#334155' }}>Misconception: </span>
                                    <span style={{ color: '#64748b' }}>{item.myth}</span>
                                </div>
                                <div style={{ fontSize: '1em', lineHeight: '1.6' }}>
                                    <span style={{ fontWeight: 'bold', color: '#334155' }}>Reality: </span>
                                    {item.reality}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', marginTop: '60px' }}>
                    <span style={{ fontSize: '1.8em' }}>⚙️</span>
                    <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.6em', fontWeight: 'bold' }}>Worked Examples: Primary Productivity Calculations</h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.95em', lineHeight: '1.7', marginBottom: '30px' }}>
                    Primary productivity calculations are fundamental in ecology for assessing ecosystem health, comparing different ecosystems, and understanding energy flow. These calculations appear frequently in exams and are essential for environmental impact assessments and conservation planning.
                </p>

                {/* FORMULA CHEAT SHEET */}
                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <span style={{ fontSize: '1.5em' }}>⏱️</span>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>Key Formulas & Units</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.8em', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Net Primary Productivity</div>
                            <code style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#0f172a' }}>NPP = GPP - R</code>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.8em', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Productivity Rate</div>
                            <code style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#0f172a' }}>Biomass / Area / Time</code>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.8em', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Efficiency (%)</div>
                            <code style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#0f172a' }}>(NPP / GPP) × 100</code>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.8em', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Carbon Conversion</div>
                            <code style={{ fontSize: '0.9em', color: '#0f172a' }}>1g Organic ≈ 0.45g Carbon</code>
                        </div>
                    </div>
                </div>

                {/* WORKED EXAMPLE 1 */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.2em', color: '#1e293b' }}>Worked Example 1: Basic NPP Calculation</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                                <span style={{ fontSize: '1.1em' }}>📝</span>
                                <span style={{ color: '#64748b', fontSize: '0.9em', fontWeight: '600' }}>Problem Statement</span>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', color: '#475569' }}>LEVEL: INTRODUCTORY</div>
                    </div>
                    <p style={{ fontSize: '0.95em', color: '#334155', lineHeight: '1.7' }}>
                        A temperate grassland ecosystem captured solar energy to produce <strong>1,800 g/m²/year</strong> (GPP). The producers used <strong>720 g/m²/year</strong> for their own cellular respiration.
                        <strong> Calculate:</strong> NPP, the efficiency of energy conversion, and the biomass available to herbivores.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginTop: '30px' }}>
                        <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '20px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9em', color: '#1e293b', marginBottom: '15px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>🔍 Solution Steps</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div>
                                    <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#3b82f6' }}>STEP 2: CALCULATE NPP</div>
                                    <div style={{ fontSize: '0.95em', marginTop: '4px' }}>NPP = 1,800 - 720 = <strong>1,080 g/m²/year</strong></div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#3b82f6' }}>STEP 3: CALCULATE EFFICIENCY</div>
                                    <div style={{ fontSize: '0.95em', marginTop: '4px' }}>(1,080 / 1,800) × 100 = <strong>60%</strong></div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#3b82f6' }}>STEP 4: AVAILABLE BIOMASS</div>
                                    <div style={{ fontSize: '0.95em', marginTop: '4px' }}>Available Biomass = NPP = <strong>1,080 g/m²/year</strong></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#eff6ff', padding: '25px', borderRadius: '20px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9em', color: '#1e40af', marginBottom: '10px' }}>💡 Key Insights</div>
                            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85em', color: '#1e40af', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <li>60% efficiency is typical; 40% is the "metabolic tax".</li>
                                <li>Only NPP represents <em>new</em> biomass for consumers.</li>
                                <li>Respiration value represents the "cost" of life.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* WORKED EXAMPLE 2 */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.2em', color: '#1e293b' }}>Worked Example 2: Comparing Ecosystem Productivity</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                                <span style={{ fontSize: '1.1em' }}>📝</span>
                                <span style={{ color: '#64748b', fontSize: '0.9em', fontWeight: '600' }}>Problem Statement</span>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fff7ed', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', color: '#c2410c' }}>LEVEL: INTERMEDIATE</div>
                    </div>
                    <p style={{ fontSize: '0.95em', color: '#334155', lineHeight: '1.7' }}>
                        Compare a <strong>Tropical Rainforest (Plot A)</strong> with 45,000 kg/year GPP and 20,000 kg/year R, against a <strong>Desert Shrubland (Plot B)</strong> with 2,000 kg/year GPP and 1,200 kg/year R. Both plots are 1 hectare (10,000 m²).
                    </p>
                    <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Metric</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Rainforest (Plot A)</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Desert (Plot B)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>NPP (g/m²/yr)</td>
                                    <td style={{ padding: '12px', color: '#166534', fontWeight: 'bold' }}>2,500 g/m²/year</td>
                                    <td style={{ padding: '12px', color: '#9a3412', fontWeight: 'bold' }}>80 g/m²/year</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>Efficiency</td>
                                    <td style={{ padding: '12px' }}>56%</td>
                                    <td style={{ padding: '12px' }}>40%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>Carbon Stored</td>
                                    <td style={{ padding: '12px' }}>11,250 kg C/ha/yr</td>
                                    <td style={{ padding: '12px' }}>360 kg C/ha/yr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '20px', border: '1px solid #ffedd5' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9em', color: '#c2410c', marginBottom: '10px' }}>💡 Comparison Perspective</div>
                        <p style={{ margin: 0, fontSize: '0.85em', color: '#9a3412', lineHeight: '1.6' }}>
                            The Rainforest can support <strong>31x more herbivore biomass</strong> per square meter than the Desert. The Desert's 40% efficiency reflects the high metabolic "cost" of surviving extreme water scarcity.
                        </p>
                    </div>
                </div>

                {/* WORKED EXAMPLE 3 */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.2em', color: '#1e293b' }}>Worked Example 3: Energy Transfer Efficiency</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                                <span style={{ fontSize: '1.1em' }}>📝</span>
                                <span style={{ color: '#64748b', fontSize: '0.9em', fontWeight: '600' }}>Problem Statement</span>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#f5f3ff', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75em', fontWeight: 'bold', color: '#5b21b6' }}>LEVEL: ADVANCED</div>
                    </div>
                    <p style={{ fontSize: '0.95em', color: '#334155', lineHeight: '1.7' }}>
                        In a lake, Phytoplankton NPP is <strong>800 g/m²/year</strong>. Zooplankton gain <strong>80 g/m²/year</strong>, and small fish gain <strong>8 g/m²/year</strong>.
                        <strong> Calculate:</strong> Energy transfer efficiency at each level and energy reaching tertiary consumers.
                    </p>
                    <div style={{ backgroundColor: '#f5f3ff', padding: '30px', borderRadius: '24px', margin: '30px 0' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h4 style={{ color: '#5b21b6', margin: 0 }}>Figure 3: Energy Flow Through Trophic Levels (10% Rule)</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            {/* PYRAMID LAYER 1 */}
                            <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#10b981', padding: '20px', borderRadius: '15px', color: 'white', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.2)' }}>
                                <div style={{ fontSize: '1.1em', fontWeight: 'bold' }}>PRODUCERS</div>
                                <div style={{ fontSize: '0.9em', opacity: 0.9 }}>800 g/m²/year (100%)</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.8em', fontWeight: 'bold' }}>
                                <span>⬇️ 10% Transfer</span>
                                <span style={{ color: '#ef4444' }}>❌ 90% lost as Heat/Waste</span>
                            </div>
                            {/* PYRAMID LAYER 2 */}
                            <div style={{ width: '70%', maxWidth: '280px', backgroundColor: '#3b82f6', padding: '15px', borderRadius: '15px', color: 'white', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2)' }}>
                                <div style={{ fontSize: '1em', fontWeight: 'bold' }}>PRIMARY CONSUMERS</div>
                                <div style={{ fontSize: '0.85em', opacity: 0.9 }}>80 g/m²/year (10%)</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.8em', fontWeight: 'bold' }}>
                                <span>⬇️ 10% Transfer</span>
                            </div>
                            {/* PYRAMID LAYER 3 */}
                            <div style={{ width: '40%', maxWidth: '160px', backgroundColor: '#8b5cf6', padding: '12px', borderRadius: '15px', color: 'white', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(139, 92, 246, 0.2)' }}>
                                <div style={{ fontSize: '0.9em', fontWeight: 'bold' }}>SECONDARY CONSUMERS</div>
                                <div style={{ fontSize: '0.75em', opacity: 0.9 }}>8 g/m²/year (1%)</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9em', color: '#1e293b', marginBottom: '10px' }}>✅ Final Conclusion on Food Security</div>
                        <p style={{ margin: 0, fontSize: '0.85em', color: '#475569', lineHeight: '1.6' }}>
                            Eating producers directly (e.g., seaweed) is <strong>10x more energy-efficient</strong> than eating secondary consumers (fish).
                            Sustainability implications: Plant-heavy diets require significantly less agricultural land and resources.
                        </p>
                    </div>
                </div>


                <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '32px', margin: '60px 0', border: '1px solid #334155', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                        <div style={{ fontSize: '2.5em' }}>🧪</div>
                        <div>
                            <h3 style={{ margin: 0, color: '#fbbf24' }}>Lab Simulation: Measuring Productivity</h3>
                            <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9em' }}>The "Light and Dark Bottle" Method</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div>
                            <h4 style={{ color: '#fbbf24', fontSize: '1em' }}>The Procedure</h4>
                            <p style={{ fontSize: '0.85em', lineHeight: '1.7', opacity: 0.9 }}>
                                1. Fill three bottles with pond water containing phytoplankton.<br />
                                2. <strong>Initial Bottle:</strong> Measure dissolved oxygen (DO) immediately.<br />
                                3. <strong>Light Bottle:</strong> Exposed to light (Photosynthesis + Respiration).<br />
                                4. <strong>Dark Bottle:</strong> Wrapped in foil (Respiration only).<br />
                                5. After 24h, measure DO in both.
                            </p>
                        </div>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ color: '#fbbf24', fontSize: '1em', marginTop: 0 }}>The Equations</h4>
                            <ul style={{ fontSize: '0.85em', listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '10px' }}><strong>Respiration (R):</strong> Initial DO - Dark DO</li>
                                <li style={{ marginBottom: '10px' }}><strong>Net Productivity (NPP):</strong> Light DO - Initial DO</li>
                                <li><strong>Gross Productivity (GPP):</strong> Light DO - Dark DO</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '40px', borderRadius: '32px', border: '2px dashed #10b981', margin: '60px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h3 style={{ color: '#065f46', margin: 0 }}>🧠 Exam Quick-Reference Cheat Sheet</h3>
                        <p style={{ color: '#059669', fontSize: '0.9em', marginTop: '5px' }}>Perfect for last-minute review</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                        {[
                            { title: 'The Equations', items: ['NPP = GPP - R', '% Efficiency = (NPP/GPP) * 100', 'GPP = NPP + R'] },
                            { title: 'The Mechanics', items: ['Stroma: Calvin Cycle (Fixes CO₂)', 'Thylakoids: Light Reactions', 'RuBisCO: Main Catalyst Enzyme'] },
                            { title: 'Top Producers', items: ['Swamps/Marshes: Highest GPP', 'Tropical Rainforest: High NPP', 'Open Ocean: High Cumulative NPP'] }
                        ].map((box, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', border: '1px solid #dcfce7' }}>
                                <div style={{ fontWeight: '800', fontSize: '0.75em', color: '#10b981', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>{box.title}</div>
                                <ul style={{ fontSize: '0.85em', paddingLeft: '15px', color: '#065f46', margin: 0 }}>
                                    {box.items.map((li, j) => <li key={j} style={{ marginBottom: '5px' }}>{li}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <hr style={{ margin: '60px 0', border: '0', borderTop: '2px solid #f1f5f9' }} />

                <h3>🎥 Learn Through Videos</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Producers in Ecosystems</h5>
                        <p style={{ fontSize: '0.8em', color: '#64748b', marginBottom: '15px' }}>Amoeba Sisters - Easy explanation of trophic levels and energy flow.</p>
                        <a href="https://www.youtube.com/watch?v=qUZkWZ12A8s" target="_blank" style={{ color: '#3b82f6', fontSize: '0.85em', textDecoration: 'none', fontWeight: 'bold' }}>Watch YouTube ↗</a>
                    </div>
                    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Ocean Phytoplankton</h5>
                        <p style={{ fontSize: '0.8em', color: '#64748b', marginBottom: '15px' }}>NASA visualization of phytoplankton blooms and global importance.</p>
                        <a href="https://www.youtube.com/watch?v=0_fCD_N-5pQ" target="_blank" style={{ color: '#3b82f6', fontSize: '0.85em', textDecoration: 'none', fontWeight: 'bold' }}>Watch YouTube ↗</a>
                    </div>
                    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Chemosynthesis: Life Without Sun</h5>
                        <p style={{ fontSize: '0.8em', color: '#64748b', marginBottom: '15px' }}>BBC Earth - Deep-sea vent ecosystems powered by chemicals.</p>
                        <a href="https://www.youtube.com/watch?v=D69hGvCsWgA" target="_blank" style={{ color: '#3b82f6', fontSize: '0.85em', textDecoration: 'none', fontWeight: 'bold' }}>Watch YouTube ↗</a>
                    </div>
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
