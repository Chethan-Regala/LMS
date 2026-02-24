'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_4: React.FC = () => {
    const quizQuestions = [
        {
            question: "The Ok Tedi mine in Papua New Guinea dumps approximately how much waste into the river system daily?",
            options: ["5,000 metric tonnes", "20,000 metric tonnes", "80,000 metric tonnes", "150,000 metric tonnes"],
            correctAnswer: 2,
            explanation: "The Ok Tedi mine discharges ~80,000 metric tonnes of tailings and waste rock into the river system every single day."
        },
        {
            question: "How much water is required to produce one ton of lithium carbonate using current evaporation methods in the Atacama Desert?",
            options: ["50,000 liters", "500,000 liters", "5,000,000 liters", "50,000,000 liters"],
            correctAnswer: 1,
            explanation: "Producing one ton of lithium carbonate requires the evaporation of approximately 500,000 liters of brine water."
        },
        {
            question: "What percentage of fish populations in the Ok Tedi River have declined due to mining pollution?",
            options: ["25%", "50%", "95%", "75%"],
            correctAnswer: 2,
            explanation: "Fish populations in the Ok Tedi River have declined by 95%, virtually eliminating a primary protein source for local communities."
        },
        {
            question: "Which of the following is NOT a major environmental impact of mining operations?",
            options: ["Acid Mine Drainage (AMD)", "Habitat destruction and deforestation", "Ozone layer depletion", "Soil contamination with heavy metals"],
            correctAnswer: 2,
            explanation: "While mining causes water, soil, and air pollution, it is not a direct primary cause of ozone layer depletion."
        },
        {
            question: "What does FPIC stand for in the context of mining and indigenous rights?",
            options: ["Free, Prior, and Informed Consent", "Federal Permit for Indigenous Communities", "Financial Protection for Indigenous Cultures", "Forest Protection and Indigenous Conservation"],
            correctAnswer: 0,
            explanation: "FPIC stands for Free, Prior, and Informed Consent, a specific right that pertains to indigenous peoples."
        },
        {
            question: "What is the primary cause of Acid Mine Drainage (AMD)?",
            options: [
                "Excessive use of explosives in blasting",
                "Oxidation of sulfide minerals when exposed to air and water",
                "Leakage from diesel fuel storage tanks",
                "Discharge of untreated sewage from mining camps"
            ],
            correctAnswer: 1,
            explanation: "AMD is caused by the oxidation of sulfide minerals in waste rock, which produces sulfuric acid."
        },
        {
            question: "Which mineral is most critical for electric vehicle batteries and is primarily extracted from the 'Lithium Triangle' in South America?",
            options: ["Cobalt", "Lithium", "Nickel", "Manganese"],
            correctAnswer: 1,
            explanation: "Lithium is the core component of EV batteries and the Lithium Triangle holds the world's largest reserves."
        },
        {
            question: "What percentage of Amazon deforestation is directly attributable to mining activities?",
            options: ["2%", "5%", "10%", "25%"],
            correctAnswer: 2,
            explanation: "In the Amazon basin, approximately 10% of all deforestation is directly attributable to mining activities."
        },
        {
            question: "True or False: Riverine tailings disposal is considered an acceptable environmental practice by most mining companies worldwide.",
            options: ["True", "False"],
            correctAnswer: 1,
            explanation: "False. Riverine tailings disposal is considered highly destructive and is banned or heavily restricted in most developed countries."
        },
        {
            question: "True or False: Reclamation can fully restore mined landscapes to their original pre-mining condition.",
            options: ["True", "False"],
            correctAnswer: 1,
            explanation: "False. While reclamation improves appearance, it cannot fully restore the complex original biodiversity and soil functions."
        }
    ];

    return (
        <div className="module-content">
            {/* HEADER */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.4</div>
                <div className="lesson-title-main">
                    <h1>💎 Mineral Resources: Use and Exploitation</h1>
                    <p style={{ margin: '10px 0 0 0', color: '#64748b', fontSize: '1.1em' }}>Environmental Effects of Extracting and Using Mineral Resources | Case Studies</p>
                </div>
            </div>

            <section className="content-section">
                {/* METADATA BAR */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', margin: '30px 0', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>⏱️</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Estimated Time</span>
                        <span style={{ fontWeight: '600' }}>75-90 minutes</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>📊</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Difficulty</span>
                        <span style={{ fontWeight: '600' }}>Intermediate</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '1.5em', marginBottom: '5px' }}>🎯</span>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Prerequisites</span>
                        <span style={{ fontWeight: '600' }}>Ecosystems, Geology Basics</span>
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
                        <li style={{ marginBottom: '12px' }}>Identify and classify different types of mineral resources (metallic, non-metallic, and fossil fuels) and their global distribution patterns</li>
                        <li style={{ marginBottom: '12px' }}>Analyze the environmental impacts of mineral extraction including habitat destruction, water pollution, air contamination, and soil degradation</li>
                        <li style={{ marginBottom: '12px' }}>Evaluate the socio-economic consequences of mining activities on local communities and indigenous populations</li>
                        <li style={{ marginBottom: '12px' }}>Apply knowledge of sustainable mining practices and rehabilitation techniques to minimize environmental damage</li>
                        <li>Critically examine real-world case studies (Ok Tedi, Atacama lithium mining) to understand the long-term consequences of unsustainable mineral exploitation</li>
                    </ul>
                </div>

                {/* WHY IT MATTERS */}
                <h2 style={{ color: '#0f172a', borderLeft: '4px solid #f43f5e', paddingLeft: '15px' }}>🔥 Why This Topic Matters</h2>
                <div style={{ fontSize: '1.1em', lineHeight: '1.7', color: '#334155' }}>
                    <p>Imagine waking up one morning to find that the river your family has depended on for generations has turned an unnatural shade of orange. The fish that once provided your daily sustenance have disappeared, and the water that irrigated your crops is now toxic. This is not a hypothetical scenario—it is the lived reality of over 40,000 indigenous people living downstream from the Ok Tedi mine in Papua New Guinea, where 80,000 metric tonnes of mine waste are dumped into the river system every single day.</p>
                    <p>Mineral resources form the backbone of modern civilization. From the smartphone in your pocket (containing over 60 different minerals) to the electric vehicle revolution driving demand for lithium and cobalt, our society is utterly dependent on extracting materials from the Earth. However, this extraction comes at a profound environmental cost that we can no longer afford to ignore.</p>
                    <p>Understanding the environmental impacts of mineral extraction is crucial for future environmental scientists, policymakers, and informed citizens. As global demand for minerals continues to soar—with lithium demand alone projected to increase sixfold by 2030—the decisions we make today about how, where, and whether to extract these resources will determine the health of our planet for generations to come.</p>
                </div>

                <div style={{ backgroundColor: '#eff6ff', padding: '25px', borderRadius: '16px', border: '1px solid #dbeafe', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>💡</span> Real-World Applications:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#1d4ed8', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}>Environmental Impact Assessment (EIA) consulting for mining projects worldwide</li>
                        <li style={{ marginBottom: '10px' }}>Policy development for sustainable resource extraction regulations</li>
                        <li style={{ marginBottom: '10px' }}>Community advocacy for indigenous rights and environmental justice</li>
                        <li style={{ marginBottom: '10px' }}>Development of green technologies and circular economy solutions for mineral recycling</li>
                        <li>Climate change mitigation through responsible sourcing of transition minerals</li>
                    </ul>
                </div>

                {/* DEEP DIVE */}
                <div style={{ margin: '60px 0' }}>
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>📖</span> Deep Dive: Understanding Mineral Resources
                    </h2>

                    <h3>Definition & Fundamentals</h3>
                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                        <p>Mineral resources are naturally occurring concentrations of minerals or rocks that have economic value and can be extracted for human use. Think of them as nature's concentrated deposits of useful materials—formed over millions of years through geological processes—that we can mine and process for various applications. These resources are classified into three main categories: metallic minerals (such as iron, copper, gold, and aluminum), non-metallic minerals (including limestone, gypsum, and sand), and fossil fuels (coal, oil, and natural gas).</p>
                        <p>Without mineral resources, modern civilization as we know it would not exist. Your car contains approximately 1,000 kg of steel (iron ore), 150 kg of aluminum, and 30 kg of copper. A single smartphone requires gold for circuit connections, lithium for batteries, rare earth elements for the screen, and over 60 other minerals. The renewable energy transition—solar panels, wind turbines, and electric vehicle batteries—is driving unprecedented demand for "green minerals" including lithium, cobalt, nickel, and copper.</p>
                        <p>However, mineral resources are non-renewable—once extracted and consumed, they cannot be replenished on human timescales. This fundamental characteristic creates a tension between our society's insatiable demand for materials and the finite nature of Earth's crust.</p>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ margin: '0 0 20px 0', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>📌</span> Key Terminology:
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                                <p style={{ margin: '0 0 10px 0' }}><strong>Ore:</strong> A naturally occurring solid material from which a metal or valuable mineral can be extracted profitably</p>
                                <p style={{ margin: '0 0 10px 0' }}><strong>Overburden:</strong> The rock and soil that lies above a mineral deposit and must be removed before mining can begin</p>
                                <p style={{ margin: '0 0 0 0' }}><strong>Tailings:</strong> The waste material left over after the valuable minerals have been extracted from ore</p>
                            </div>
                            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                                <p style={{ margin: '0 0 10px 0' }}><strong>Acid Mine Drainage (AMD):</strong> The outflow of acidic water from metal or coal mines, caused by the oxidation of sulfide minerals</p>
                                <p style={{ margin: '0 0 10px 0' }}><strong>Reclamation:</strong> The process of restoring mined land to its original or improved condition</p>
                                <p style={{ margin: '0 0 0 0' }}><strong>Riverine Tailings Disposal:</strong> The controversial practice of dumping mining waste directly into rivers</p>
                            </div>
                        </div>
                    </div>

                    <h3>Classification of Mineral Resources</h3>
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#6366f1', marginBottom: '25px' }}>Figure 1: Classification of mineral resources based on composition and use</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                            {/* CONCEPTUAL DIAGRAM REPLACEMENT */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                                <div style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '15px', borderRadius: '12px', fontWeight: 'bold', gridColumn: 'span 3' }}>Mineral Resources</div>
                                <div style={{ backgroundColor: '#60a5fa', color: '#fff', padding: '15px', borderRadius: '12px', fontWeight: 'bold' }}>Metallic Minerals</div>
                                <div style={{ backgroundColor: '#4ade80', color: '#fff', padding: '15px', borderRadius: '12px', fontWeight: 'bold' }}>Non-Metallic Minerals</div>
                                <div style={{ backgroundColor: '#f87171', color: '#fff', padding: '15px', borderRadius: '12px', fontWeight: 'bold' }}>Fossil Fuels</div>

                                <div style={{ textAlign: 'left', backgroundColor: '#eff6ff', padding: '15px', borderRadius: '10px', fontSize: '0.85em' }}>
                                    • <strong>Ferrous:</strong> Iron, Manganese<br />
                                    • <strong>Non-Ferrous:</strong> Copper, Aluminum<br />
                                    • <strong>Precious:</strong> Gold, Silver
                                </div>
                                <div style={{ textAlign: 'left', backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '10px', fontSize: '0.85em' }}>
                                    • <strong>Construction:</strong> Limestone, Sand<br />
                                    • <strong>Industrial:</strong> Gypsum, Salt<br />
                                    • <strong>Fertilizers:</strong> Phosphate, Potash
                                </div>
                                <div style={{ textAlign: 'left', backgroundColor: '#fef2f2', padding: '15px', borderRadius: '10px', fontSize: '0.85em' }}>
                                    • Coal<br />
                                    • Petroleum<br />
                                    • Natural Gas
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3>How Mining Works: The Extraction Process Explained</h3>
                    <p>Mining operations follow a systematic process that transforms buried mineral deposits into usable materials. Understanding this process is crucial because each stage presents distinct environmental challenges that must be managed responsibly.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        {[
                            { step: "Stage 1", title: "Exploration and Site Preparation", color: "#3b82f6", text: "Before any extraction begins, geologists conduct extensive surveys to locate mineral deposits. This involves seismic testing, drilling core samples, and analyzing geological formations. Once a viable deposit is identified, the mining company must clear vegetation, remove topsoil, and construct access roads and processing facilities. This initial stage often involves significant habitat destruction and ecosystem disruption." },
                            { step: "Stage 2", title: "Extraction", color: "#ef4444", text: "Depending on the deposit's location and characteristics, miners use either surface (open-pit) or underground methods. Surface mining removes the overburden to expose the ore body, creating vast craters. Underground mining tunnels beneath the surface, which can cause subsidence (ground sinking)." },
                            { step: "Stage 3", title: "Processing and Beneficiation", color: "#f59e0b", text: "Raw ore typically contains only a small percentage of the desired mineral. Processing involves crushing, grinding, and using chemical reagents to concentrate the valuable material. This stage generates enormous quantities of waste tailings—often toxic slurries containing heavy metals." },
                            { step: "Stage 4", title: "Waste Management and Closure", color: "#10b981", text: "After minerals are extracted, companies must manage waste and eventually close the mine. Modern regulations require reclamation, but the effectiveness of these efforts varies widely." }
                        ].map((s, idx) => (
                            <div key={idx} style={{ padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', backgroundColor: '#fff' }}>
                                <span style={{ color: s.color, fontWeight: 'bold', fontSize: '1.2em' }}>{s.step}</span>
                                <h4 style={{ margin: '10px 0', color: '#1e293b' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.9em', color: '#475569', lineHeight: '1.6' }}>{s.text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#1e293b', marginBottom: '20px' }}>Mining Process Flow</h4>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                            {["Exploration", "Site Prep", "Extraction", "Processing", "Refining", "Product"].map((p, i) => (
                                <React.Fragment key={p}>
                                    <div style={{ padding: '10px 15px', backgroundColor: i === 2 ? '#ef4444' : i === 3 ? '#f59e0b' : '#3b82f6', color: '#fff', borderRadius: '8px', fontSize: '0.9em', fontWeight: 'bold' }}>{p}</div>
                                    {i < 5 && <span style={{ color: '#94a3b8' }}>→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '40px', fontSize: '0.85em' }}>
                            <div style={{ color: '#ef4444' }}><strong>Waste Rock</strong> (from Extraction)</div>
                            <div style={{ color: '#f59e0b' }}><strong>Tailings</strong> (from Processing)</div>
                        </div>
                        <p style={{ marginTop: '15px', fontSize: '0.8em', color: '#dc2626', fontWeight: 'bold' }}>Figure 2: The mining process from exploration to product, showing waste generation points</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '40px 0' }}>

                    </div>

                    <h3 style={{ borderBottom: '2px solid #e11d48', display: 'inline-block', paddingBottom: '5px' }}>Environmental Impacts: A Multi-Dimensional Crisis</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
                        <div>
                            <h4 style={{ color: '#0f766e' }}>🌿 Habitat Destruction and Biodiversity Loss</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>Mining is one of the most destructive human activities for terrestrial ecosystems. Open-pit mines can consume thousands of hectares of forest, grassland, or wetland habitat. The damage extends far beyond the mine itself through associated infrastructure—roads, pipelines, and processing facilities. In the Amazon basin, approximately 10% of all deforestation is directly attributable to mining activities, with gold mining being particularly devastating.</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#1e40af' }}>💧 Water Pollution</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>Mining operations contaminate water through multiple pathways. Acid Mine Drainage (AMD) occurs when sulfide minerals in waste rock are exposed to air and water, producing sulfuric acid that dissolves heavy metals (lead, mercury, cadmium, arsenic) into nearby waterways. A single mine can generate AMD for centuries after closure.</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#be123c' }}>🌫️ Air Pollution</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>Mining releases particulate matter, sulfur dioxide, nitrogen oxides, and heavy metals into the atmosphere. Blasting operations generate dust clouds that can travel kilometers, affecting respiratory health in nearby communities. Smelting operations emit sulfur dioxide that contributes to acid rain.</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#92400e' }}>🌱 Soil Degradation</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>The removal of topsoil during site preparation destroys the soil ecosystem. Waste rock and tailings dumped on the surface can alter soil chemistry, making it impossible for vegetation to reestablish. Heavy metals accumulate in soils, entering the food chain through plants and posing long-term health risks.</p>
                        </div>
                    </div>



                    <div style={{ backgroundColor: '#fff1f2', padding: '35px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '60px 0' }}>
                        <h3 style={{ margin: '0 0 30px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Misconceptions
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { m: "Modern mining is clean and environmentally friendly.", r: "While technology has improved, fundamental environmental impacts remain severe. Even 'best practice' mines generate massive waste, and accidents continue to occur. The Ok Tedi mine dumped untreated waste into rivers for decades despite knowing the consequences." },
                                { m: "Mining brings prosperity to local communities.", r: "Benefits often fail to reach local communities. Indigenous peoples bear the costs while profits flow to distant shareholders. The 'resource curse' phenomenon shows dependent regions often have lower economic growth and higher corruption." },
                                { m: "Reclamation can fully restore mined landscapes.", r: "Appearance improves, but original ecosystems (soil structure, biodiversity, hydrology) are permanently altered. Studies show reclaimed sites support only a fraction of original biodiversity." },
                                { m: "Green minerals like lithium are environmentally friendly.", r: "Lithium enables green tech, but extraction consumes 500k liters of water per ton produced in the Atacama Desert, causing wetlands to disappear and communities to lose water supplies." }
                            ].map((item, idx) => (
                                <div key={idx} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                    <p style={{ fontWeight: 'bold', color: '#e11d48', margin: '0 0 10px 0', fontSize: '1.1em' }}>Misconception #{idx + 1}:</p>
                                    <p style={{ fontStyle: 'italic', color: '#334155', margin: '0 0 15px 0' }}>"{item.m}"</p>
                                    <p style={{ fontSize: '0.95em', color: '#059669', margin: 0 }}><strong>Reality:</strong> {item.r}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VIDEOS */}
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🎥</span> Learn Through Videos
                    </h2>
                    <p>Watch these carefully selected videos to reinforce your understanding with visual explanations, real-world footage, and expert analysis.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', margin: '30px 0' }}>
                        {[
                            { title: "Environmental Impact of Mining", meta: "Khan Academy - 8 minutes", text: "Comprehensive overview of mining's environmental impacts including habitat destruction, water pollution, air contamination, and responsible mining practices. Perfect foundation for this module.", icon: "📚" },
                            { title: "The True Cost of Gold Mining", meta: "Documentary footage - 12 minutes", text: "Visual documentation of gold mining's devastating effects on rainforests, rivers, and indigenous communities in the Amazon basin.", icon: "🎬" },
                            { title: "The Dark Side of Lithium Mining", meta: "Environmental documentary - 15 minutes", text: "Investigation into lithium extraction in South America's 'Lithium Triangle' and its impact on water resources and indigenous communities.", icon: "💻" },
                            { title: "Water in the Lifecycle of a Mine", meta: "University of Arizona - 6 minutes", text: "Expert explanation of how water is used throughout mining operations and the importance of conservation measures.", icon: "💧" }
                        ].map((v, i) => (
                            <div key={i} style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '2em', marginBottom: '15px' }}>{v.icon}</div>
                                <h4 style={{ margin: '0 0 5px 0' }}>{v.title}</h4>
                                <p style={{ fontSize: '0.8em', color: '#2563eb', fontWeight: 'bold', marginBottom: '10px' }}>{v.meta}</p>
                                <p style={{ fontSize: '0.9em', color: '#4b5563' }}>{v.text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '16px', border: '1px solid #ddd', margin: '40px 0' }}>
                        <h4 style={{ margin: '0 0 15px 0' }}>📺 Additional Resources:</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Interactive Simulations:</p>
                                <p style={{ fontSize: '0.85em' }}>Visit <strong>Visual Law</strong> for mining regulation visualizations</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Documentary Films:</p>
                                <p style={{ fontSize: '0.85em' }}>"When Elephants Fight" - mineral trade in DRC</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Research Database:</p>
                                <p style={{ fontSize: '0.85em' }}><strong>MiningWatch Canada</strong> case study library</p>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ color: '#9f1239', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>📚</span> Case Studies: Real-World Impacts
                    </h2>
                    <p style={{ fontSize: '1.1em', color: '#475569' }}>The following case studies illustrate the profound and lasting environmental and social consequences of mineral extraction. These represent patterns that repeat across mining operations worldwide when safeguards are ignored.</p>

                    {/* CASE STUDY 1 */}
                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '40px 0' }}>
                        <h3 style={{ color: '#be123c', marginTop: 0 }}>🏔️ Case Study 1: The Ok Tedi Mining Disaster, Papua New Guinea</h3>
                        <p style={{ fontWeight: '600', color: '#e11d48' }}>Riverine Tailings Disposal</p>



                        <div style={{ fontSize: '1em', lineHeight: '1.7', color: '#334155' }}>
                            <p><strong>Background:</strong> The Ok Tedi copper-gold mine (initially BHP) began operations in 1984 on Mount Fubilan, source of the Ok Tedi River. A 1984 landslide destroyed the planned tailings dam foundations. Rather than finding alternatives, the company lobbied for permission to dump untreated waste directly into the river.</p>
                            <p><strong>Scale:</strong> Discharges <strong>80,000 metric tonnes</strong> of waste daily—equivalent to dumping <strong>40,000 family cars</strong> into the river every single day.</p>
                            <h4 style={{ color: '#be123c' }}>Environmental Impacts:</h4>
                            <ul>
                                <li>2,000 km² forest destroyed by mine tailings</li>
                                <li>Rivers run thick gray with heavy metals; visible from satellite</li>
                                <li>Toxic sludge smothers forests and food gardens during floods</li>
                                <li>Fish populations declined by <strong>95%</strong></li>
                                <li>Mount Fubilan reduced from 2,000m peak to a 3km-wide pit</li>
                            </ul>
                            <h4 style={{ color: '#c2410b' }}>Social Impacts:</h4>
                            <p>40,000 indigenous people (Yonggom/Ninggirum) lost hunting and fishing livelihoods. Elder: "Before the mine, we had plenty of food... The river was clear... Now there are no fish."</p>
                            <p><strong>Corporate Response:</strong> BHP admitted in 1996 the mine was "not compatible with environmental values." In 2002, they transferred ownership to the government and walked away. The mine continues dumping waste today.</p>
                        </div>

                        <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '16px', border: '1px solid #ffedd5', marginTop: '30px' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#9a3412' }}>⚠️ Key Lessons from Ok Tedi:</h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', color: '#c2410b', fontSize: '0.9em' }}>
                                <li>Riverine tailings disposal causes irreversible damage</li>
                                <li>Corporate CSR programs cannot compensate for destroyed ecosystems</li>
                                <li>Weak regulatory environments enable exploitation</li>
                                <li>Indigenous communities bear costs while shareholders capture benefits</li>
                            </ul>
                        </div>
                    </div>

                    {/* CASE STUDY 2 */}
                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '40px 0' }}>
                        <h3 style={{ color: '#0369a1', marginTop: 0 }}>🔋 Case Study 2: Lithium Mining in Chile's Atacama Desert</h3>
                        <p style={{ fontWeight: '600', color: '#0284c7' }}>Water Depletion</p>



                        <div style={{ fontSize: '1em', lineHeight: '1.7', color: '#334155' }}>
                            <p><strong>Background:</strong> Salar de Atacama contains 27% of global lithium. Pumping brine into evaporation ponds Concentrations the lithium over 12-18 months. Producing one ton of lithium carbonate requires evaporating <strong>500,000 liters</strong> of brine water—permanently removed from the aquifer.</p>
                            <h4 style={{ color: '#0369a1' }}>Environmental Impacts:</h4>
                            <ul>
                                <li>Groundwater dropped &gt;10m in 15 years</li>
                                <li>Salt flat sinking 1-2cm per year</li>
                                <li>Lagoons and vegetation disappearing; flamingo habitat loss</li>
                            </ul>
                            <h4 style={{ color: '#10b981' }}>Social Impacts:</h4>
                            <p>Lickanantay Indigenous people lost water for livestock and ceremonies. Elena Rivera Cardoso: "We used to have a river before that now doesn't exist. There isn't a drop of water."</p>
                            <p><strong>The Irony of "Green" Minerals:</strong> Lithium powers EVs in the Global North, while local communities lose survival-critical water. "We suffer from the contamination... at whose cost?"</p>
                        </div>

                        <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '16px', border: '1px solid #e0f2fe', marginTop: '30px' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>💡 Key Lessons from Atacama:</h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', color: '#0284c7', fontSize: '0.9em' }}>
                                <li>"Green" technologies can have significant environmental footprints</li>
                                <li>Water scarcity makes arid regions particularly vulnerable</li>
                                <li>Indigenous rights and FPIC are essential safeguards</li>
                            </ul>
                        </div>
                    </div>

                    <h2 style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🌱</span> Sustainable Solutions & Best Practices
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        {[
                            { title: "Dry Stacking", text: "Dewatering tailings into stable piles. Removes dam failure risk and reduces water use by 80%." },
                            { title: "In-Pit Disposal", text: "Returning tailings to exhausted pits to eliminate surface footprints." },
                            { title: "Phytoremediation", text: "Using hyperaccumulator plants to extract heavy metals from soil sustainably." },
                            { title: "Circular Economy", text: "Urban mining/recycling. EU now requires minimum recycled content in batteries." }
                        ].map((s, i) => (
                            <div key={i} style={{ padding: '25px', backgroundColor: '#f0fdf4', borderRadius: '16px', border: '1px solid #dcfce7' }}>
                                <h4 style={{ margin: '0 0 10px 0', color: '#065f46' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.9em', color: '#047857' }}>{s.text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f1f5f9' }}>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Practice</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Traditional Approach</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Sustainable Alternative</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Benefit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Tailings</td>
                                    <td style={{ padding: '15px' }}>Wet dams</td>
                                    <td style={{ padding: '15px' }}>Dry stacking</td>
                                    <td style={{ padding: '15px' }}>Eliminates failure risk</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Water Use</td>
                                    <td style={{ padding: '15px' }}>Freshwater</td>
                                    <td style={{ padding: '15px' }}>Recycled/Seawater</td>
                                    <td style={{ padding: '15px' }}>Protects supplies</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Energy</td>
                                    <td style={{ padding: '15px' }}>Diesel</td>
                                    <td style={{ padding: '15px' }}>Renewables</td>
                                    <td style={{ padding: '15px' }}>Reduces emissions 70%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Reclamation</td>
                                    <td style={{ padding: '15px' }}>Landscaping</td>
                                    <td style={{ padding: '15px' }}>Ecosystem restoration</td>
                                    <td style={{ padding: '15px' }}>Recovers biodiversity</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ margin: '0 0 20px 0' }}>Policy and Regulatory Frameworks:</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div>
                                <p><strong>EIAs:</strong> Comprehensive studies required before permits are granted.</p>
                                <p><strong>Financial Assurance:</strong> Bonds for cleanup to prevent taxpayer costs if companies go bankrupt.</p>
                            </div>
                            <div>
                                <p><strong>FPIC:</strong> Indigenous communities must give consent before projects proceed.</p>
                                <p><strong>Producer Responsibility:</strong> Lifecycle accountability for material recovery.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
                            Mineral Resources: Use and Exploitation | Environmental Science | EVS
                        </h4>
                    </div>
                    <div style={{ maxWidth: '640px', margin: '0 auto 30px auto' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/zIK_T73tPQ8?si=9G3Rr8cWr0eyzYib"
                                title="Mineral Resources: Use and Exploitation"
                                allowFullScreen
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                    </div>

                    {/* INTERACTIVE PRACTICE */}
                    <div style={{ padding: '50px 0' }}>
                        <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5em' }}>🎯</span> Practice & Apply Your Knowledge
                        </h2>

                        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                            <Quiz
                                title="Module 2.4 Mastery Quiz: Mineral Resources"
                                questions={quizQuestions}
                                subject="ES"
                                unitId={2}
                                moduleId={4}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📘 Easy Problem</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Problem:</strong> A lithium mine produces 50 tons/day. Calculate daily water consumption and compare to a family using 400 liters/day.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ marginTop: '10px' }}>50 tons * 500,000 liters/ton = 25,000,000 liters daily. <br /> 25,000,000 / 400 = <strong>62,500 families</strong>.</p>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📙 Medium Problem</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Problem:</strong> Calculate total waste dumped at Ok Tedi over 40 years (80,000 metric tonnes/day).</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ marginTop: '10px' }}>80,000 * 365 * 40 = <strong>1,168,000,000 tonnes</strong>. (Enough to fill 500k Olympic pools).</p>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* PITFALLS */}
                    <div style={{ backgroundColor: '#fff7ed', padding: '40px', borderRadius: '24px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#9a3412', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Pitfalls & How to Avoid Them
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { t: "Confusing 'renewable' with 'green mining'", c: "Focus on operational footprint vs end-use benefits. Differentiate supply chain 'dirty' from technology 'green'." },
                                { t: "Underestimating scale", c: "Impacts extend hundreds of kms via water/air. Consider indirect and cumulative 'footprints'." },
                                { t: "Trusting tech alone", c: "Approach technology critically (DLE, recycling). Every solution has trade-offs and new problems." },
                                { t: "Ignoring social dimensions", c: "Environmental justice is integral. Always ask: Who bears costs? Who benefits? Distribution fair?" }
                            ].map((p, i) => (
                                <div key={i} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '16px' }}>
                                    <p style={{ color: '#ea580c', fontWeight: 'bold', margin: '0 0 10px 0' }}>🚫 Pitfall #{i + 1}: {p.t}</p>
                                    <p style={{ fontSize: '0.9em', color: '#4b5563', margin: 0 }}>{p.c}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CHEAT SHEET & EXAM TIPS */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', margin: '60px 0' }}>
                        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '20px', border: '2px dashed #94a3b8' }}>
                            <h3 style={{ marginTop: 0 }}>📄 Cheat Sheet</h3>
                            <div style={{ fontSize: '0.85em', color: '#334155' }}>
                                <p><strong>🔑 Definitions:</strong> Ore, Tailings, AMD, FPIC</p>
                                <p><strong>📐 Stats:</strong> Ok Tedi 80k t/day, Lithium 500k L/t</p>
                                <p><strong>⚙️ Impacts:</strong> Habitat, Water (AMD), Air, Soil</p>
                                <p><strong>✅ Solutions:</strong> Dry stacking, Urban mining</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#eff6ff', padding: '30px', borderRadius: '20px', border: '1px solid #dbeafe' }}>
                            <h3 style={{ marginTop: 0 }}>💡 Exam Tips</h3>
                            <ul style={{ fontSize: '0.9em', color: '#1e40af', paddingLeft: '20px' }}>
                                <li>Memorize key stats from Ok Tedi for essays</li>
                                <li>Practice unit conversions (L to m³, tonnes to kg)</li>
                                <li>Know precise definitions (FPIC is a popular 2-mark question)</li>
                                <li>Prepare for 'Traditional vs Sustainable' comparison questions</li>
                            </ul>
                        </div>
                    </div>

                    {/* ADVANCED TOPICS */}
                    <h2 style={{ color: '#4338ca' }}>🚀 Go Deeper: Advanced Topics</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: '30px 0' }}>
                        {[
                            { t: "Circular Economy", d: "Urban mining could reduce demand by 50%. Redwood Materials is building billion-dollar recycle hubs." },
                            { t: "Deep Sea Mining", d: "ISA governance code challenges. 700+ scientists call for moratorium on seabed extraction." },
                            { t: "Resource Curse", d: "Why wealth in minerals leads to economic neglect, Dutch Disease, and social conflict." }
                        ].map((at, i) => (
                            <div key={i} style={{ padding: '20px', backgroundColor: '#eef2ff', borderRadius: '12px', border: '1px solid #c7d2fe' }}>
                                <h4 style={{ margin: '0 0 10px 0', color: '#3730a3' }}>{at.t}</h4>
                                <p style={{ fontSize: '0.85em', color: '#4338ca' }}>{at.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* UNVERISTY EXAM PRACTICE */}
                    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '24px', color: '#f8fafc', margin: '60px 0' }}>
                        <h2 style={{ color: '#fff', marginTop: 0 }}>📝 University Exam Practice</h2>
                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ fontWeight: 'bold' }}>Question 1: Short Answer (5 marks)</p>
                            <p>Define AMD and explain its formation. Describe two impacts.</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Model Answer</summary>
                                <p style={{ padding: '10px' }}>Formation: Sulfide minerals + water + air = Sulfuric Acid. Impacts: Heavy metal mobilization, destruction of aquatic biology.</p>
                            </details>
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ fontWeight: 'bold' }}>Question 2: Problem Solving (10 marks)</p>
                            <p>Mine treats 50,000t/day ore. Gold grade 3g/t. (a) Daily gold (kg)? (b) Water used? (c) Dry stack savings?</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Solution</summary>
                                <p style={{ padding: '10px' }}>(a) 50,000 * 3 = 150,000g = 150kg. (b) 50,000 * 2 = 100,000 m³ water. (c) 100k * 80% = 80,000 m³ saved.</p>
                            </details>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Question 3: Essay (15 marks)</p>
                            <p>"Environmental impacts are unavoidable." Critically evaluate with case studies.</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Framework</summary>
                                <p style={{ padding: '10px' }}>Argue both sides. Use Ok Tedi vs Modern Best Practice. Conclude: Impacts are severe but mitigable through technology and circular economy.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_4;
