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
                    <div style={{ maxWidth: '640px', margin: '30px auto' }}>
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
                            <p><strong>Background:</strong> The Ok Tedi copper-gold mine, majority-owned and operated by BHP (Broken Hill Proprietary, now BHP Billiton), began operations in 1984 in Papua New Guinea's Western Province. The mine is located on Mount Fubilan, the source of the Ok Tedi River, which flows through dense rainforest before joining the Fly River and eventually reaching the Gulf of Papua.</p>
                            <p><strong>The Environmental Catastrophe:</strong> Originally, the mine planned to build a tailings dam to contain waste. However, a major landslide in 1984 destroyed the dam's foundations. Rather than halt operations or find alternative waste management solutions, BHP lobbied the Papua New Guinea government for permission to dump untreated mine waste directly into the Ok Tedi River—a practice known as riverine tailings disposal that is banned or heavily restricted in most developed countries.</p>
                            <p><strong>Scale of Pollution:</strong> Since operations began, the Ok Tedi mine has discharged approximately 80,000 metric tonnes of mine waste into the Fly River system every day—equivalent to dumping 40,000 family cars into the river daily. This waste contains heavy metals including copper, lead, and zinc, along with processing chemicals.</p>

                            <h4 style={{ color: '#be123c' }}>Environmental Impacts:</h4>
                            <ul>
                                <li style={{ marginBottom: '8px' }}>Over 2,000 square kilometers of forest has been damaged or destroyed by mine tailings</li>
                                <li style={{ marginBottom: '8px' }}>The Ok Tedi and Fly rivers run thick and gray with waste, visible from satellite imagery</li>
                                <li style={{ marginBottom: '8px' }}>When the river floods, toxic sludge rises over banks, smothering forests and food gardens</li>
                                <li style={{ marginBottom: '8px' }}>Fish populations in the Ok Tedi River have declined by 95%, eliminating a primary protein source</li>
                                <li>Mount Fubilan has been reduced from a peak of over 2,000 meters to a 3km-wide open pit at sea level</li>
                            </ul>

                            <h4 style={{ color: '#c2410b', marginTop: '20px' }}>Social Impacts:</h4>
                            <p>An estimated 40,000 indigenous people from the Yonggom and Ninggirum communities have been affected. Traditional subsistence lifestyles based on hunting, fishing, and agriculture have been destroyed. As one Yonggom elder described: "Before the mine, we had plenty of food... The river was clear and it was easy to catch fish and prawns. Now there are no fish in the river and the turtles no longer come to lay their eggs."</p>

                            <p><strong>Corporate Response:</strong> In 1996, BHP admitted that the Ok Tedi mine was "not compatible with environmental values" and that they "should not have operated the mine." Their solution? In 2002, BHP transferred its ownership to the Papua New Guinea government, established a trust fund for community development, and walked away—leaving the ongoing environmental disaster for others to manage. The mine continues operating today, still dumping waste into the river.</p>
                        </div>

                        <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '16px', border: '1px solid #ffedd5', marginTop: '30px' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#9a3412' }}>⚠️ Key Lessons from Ok Tedi:</h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', color: '#c2410b', fontSize: '0.9em' }}>
                                <li style={{ marginBottom: '5px' }}>Riverine tailings disposal causes irreversible ecosystem damage</li>
                                <li style={{ marginBottom: '5px' }}>Corporate "social responsibility" programs cannot compensate for destroyed ecosystems</li>
                                <li style={{ marginBottom: '5px' }}>Weak regulatory environments enable environmental exploitation</li>
                                <li>Indigenous communities bear the costs while distant shareholders capture the benefits</li>
                            </ul>
                        </div>
                    </div>

                    {/* CASE STUDY 2 */}
                    <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '40px 0' }}>
                        <h3 style={{ color: '#0369a1', marginTop: 0 }}>🔋 Case Study 2: Lithium Mining in Chile's Atacama Desert</h3>
                        <p style={{ fontWeight: '600', color: '#0284c7' }}>Water Depletion</p>

                        <div style={{ fontSize: '1em', lineHeight: '1.7', color: '#334155' }}>
                            <p><strong>Background:</strong> Chile's Salar de Atacama is the world's largest and purest active source of lithium, containing approximately 27% of global lithium reserves. Since the 1980s, mining companies including Albemarle and SQM have extracted lithium using evaporation ponds—a method that takes advantage of the Atacama's intense solar radiation and arid conditions.</p>
                            <p><strong>The Extraction Process:</strong> Brine containing lithium is pumped from beneath the salt flat into massive open-air evaporation ponds. Over 12-18 months, the sun evaporates the water, concentrating the lithium. The problem? Producing one ton of lithium carbonate requires the evaporation of approximately 500,000 liters (132,000 gallons) of brine water—water that is permanently removed from the aquifer.</p>

                            <h4 style={{ color: '#0369a1' }}>Environmental Impacts:</h4>
                            <ul>
                                <li style={{ marginBottom: '8px' }}>Groundwater levels have fallen by more than 10 meters (33 feet) in the last 15 years</li>
                                <li style={{ marginBottom: '8px' }}>The salt flat is sinking at a rate of 1-2 centimeters per year due to water removal</li>
                                <li style={{ marginBottom: '8px' }}>Lagoons that support wildlife and local communities are disappearing</li>
                                <li style={{ marginBottom: '8px' }}>Vegetation cover has declined significantly, affecting pastoral communities</li>
                                <li>Three iconic flamingo species (Andean, Chilean, and James's) face habitat loss</li>
                            </ul>

                            <h4 style={{ color: '#10b981', marginTop: '20px' }}>Social Impacts:</h4>
                            <p>The Lickanantay (Atacameño) Indigenous people have inhabited this region for thousands of years, developing a culture intimately connected to the desert's scarce water resources. Community members report that lagoons they depend on for livestock and ceremonial purposes have dried up. "We used to have a river before that now doesn't exist. There isn't a drop of water," says Elena Rivera Cardoso, president of the Indigenous Colla community.</p>

                            <p><strong>The Irony of "Green" Minerals:</strong> The lithium extracted from Atacama powers electric vehicles and renewable energy storage in Europe, North America, and China—regions seeking to reduce their carbon footprint. Yet the extraction process itself creates severe environmental damage, and the benefits of the "green transition" do not reach the communities bearing its costs.</p>
                        </div>

                        <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '16px', border: '1px solid #e0f2fe', marginTop: '30px' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>💡 Key Lessons from Atacama:</h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', color: '#0284c7', fontSize: '0.9em' }}>
                                <li style={{ marginBottom: '5px' }}>"Green" technologies can have significant environmental footprints</li>
                                <li style={{ marginBottom: '5px' }}>Water scarcity makes arid regions particularly vulnerable to mining impacts</li>
                                <li>Indigenous rights and free, prior, informed consent (FPIC) are essential safeguards</li>
                            </ul>
                        </div>
                    </div>

                    <h2 style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🌱</span> Sustainable Solutions & Best Practices
                    </h2>
                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155', marginBottom: '30px' }}>
                        <p>While the impacts of mining are significant, the industry is gradually adopting technologies and practices to minimize its footprint.</p>

                        <h4 style={{ color: '#065f46' }}>Technical Solutions:</h4>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '15px' }}><strong>Dry Stacking:</strong> This involves dewatering tailings until they reach a soil-like consistency, and then stacking them in stable piles. This eliminates the risk of catastrophic tailings dam failures and reduces water consumption by up to 80% through recycling.</li>
                            <li style={{ marginBottom: '15px' }}><strong>In-Pit Disposal:</strong> Returning waste rock and tailings to exhausted mine pits. This avoids creating new surface footprints and helps stabilize the pit for eventual reclamation.</li>
                            <li style={{ marginBottom: '15px' }}><strong>Phytoremediation:</strong> Using plants to extract heavy metals from contaminated soils. Certain "hyperaccumulator" plants (like sunflowers or brake ferns) can absorb metals through their roots, concentrating them in their stems and leaves for harvest and disposal.</li>
                        </ul>

                        <h4 style={{ color: '#065f46', marginTop: '25px' }}>Recycling and Circular Economy:</h4>
                        <p>The most sustainable way to "mine" is to recover materials already in circulation.</p>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '15px' }}><strong>Urban Mining:</strong> Recovering minerals from electronic waste (e-waste). For example, there is more gold in a ton of circuit boards than in a ton of gold ore.</li>
                            <li><strong>Battery Recycling:</strong> New regulations in regions like the European Union now require a minimum percentage of recycled content (lithium, cobalt, nickel) in all new EV batteries.</li>
                        </ul>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        {[
                            { title: "Dry Stacking", text: "80% water reduction + safety" },
                            { title: "In-Pit Disposal", text: "Zero surface footprint" },
                            { title: "Phytoremediation", text: "Green soil cleanup" },
                            { title: "Urban Mining", text: "Circular resource recovery" }
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
                                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Practice</th>
                                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Traditional Approach</th>
                                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Sustainable Alternative</th>
                                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Environmental Benefit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Tailings Management</td>
                                    <td style={{ padding: '15px' }}>Wet impoundment dams</td>
                                    <td style={{ padding: '15px' }}>Dry stacking, in-pit disposal</td>
                                    <td style={{ padding: '15px' }}>Eliminates dam failure risk, reduces water use by 80%</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Water Use</td>
                                    <td style={{ padding: '15px' }}>Freshwater consumption</td>
                                    <td style={{ padding: '15px' }}>Recycled water, seawater</td>
                                    <td style={{ padding: '15px' }}>Reduces freshwater demand, protects local supplies</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Energy</td>
                                    <td style={{ padding: '15px' }}>Diesel-powered equipment</td>
                                    <td style={{ padding: '15px' }}>Electrification, renewable energy</td>
                                    <td style={{ padding: '15px' }}>Reduces emissions by up to 70%</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Reclamation</td>
                                    <td style={{ padding: '15px' }}>Basic landscaping</td>
                                    <td style={{ padding: '15px' }}>Ecosystem restoration, native species</td>
                                    <td style={{ padding: '15px' }}>Recovers biodiversity, restores ecosystem functions</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>Waste Rock</td>
                                    <td style={{ padding: '15px' }}>Surface dumps</td>
                                    <td style={{ padding: '15px' }}>Backfilling underground, construction materials</td>
                                    <td style={{ padding: '15px' }}>Reduces surface footprint, prevents AMD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Policy and Regulatory Frameworks:</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                                <p style={{ margin: '0 0 10px 0' }}><strong>Environmental Impact Assessments (EIAs):</strong> Comprehensive studies that must be completed before mining permits are granted. EIAs should evaluate alternatives, predict impacts, and propose mitigation measures.</p>
                                <p style={{ margin: '0' }}><strong>Financial Assurance:</strong> Mining companies should be required to post bonds or other financial guarantees sufficient to cover reclamation costs. This prevents taxpayers from bearing cleanup costs when companies go bankrupt or abandon mines.</p>
                            </div>
                            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                                <p style={{ margin: '0 0 10px 0' }}><strong>Free, Prior, and Informed Consent (FPIC):</strong> The UN Declaration on the Rights of Indigenous Peoples requires that indigenous communities must give consent before projects affecting their lands proceed.</p>
                                <p style={{ margin: '0' }}><strong>Extended Producer Responsibility:</strong> Making manufacturers responsible for the entire lifecycle of their products—including end-of-life recycling—creates incentives for design that facilitates material recovery and reduces demand for virgin minerals.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
                            Mineral Resources: Use and Exploitation | Environmental Science | EVS
                        </h4>
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
                                <h3 style={{ margin: '0 0 20px 0', color: '#1e40af' }}>📘 Easy Problem</h3>
                                <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}><strong>Problem:</strong> A lithium mining operation in the Atacama Desert produces 50 tons of lithium carbonate per day using evaporation pond technology. Calculate the daily water consumption and compare it to the water needs of a typical family of four (using 400 liters per day).</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #dbeafe' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1e40af' }}>Show Step-by-Step Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155' }}>
                                        <p><strong>Step 1:</strong> Identify the water consumption rate: 500,000 liters per ton of lithium carbonate.</p>
                                        <p><strong>Step 2:</strong> Calculate daily water use: 50 tons × 500,000 liters/ton = 25,000,000 liters (25 million liters).</p>
                                        <p><strong>Step 3:</strong> Calculate family water use: 400 liters/day.</p>
                                        <p><strong>Step 4:</strong> Compare: 25,000,000 ÷ 400 = 62,500 families.</p>
                                        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e40af' }}>Final Answer: The mine consumes 25 million liters of water daily, equivalent to the water needs of 62,500 families.</p>
                                    </div>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0', color: '#c2410b' }}>📙 Medium Problem</h3>
                                <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}><strong>Problem:</strong> The Ok Tedi mine has been operating since 1984 (approximately 40 years). Calculate the total amount of waste dumped into the river system over this period (80,000 metric tonnes/day). Express your answer in metric tonnes and compare it to a familiar reference.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#c2410b' }}>Show Step-by-Step Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155' }}>
                                        <p><strong>Step 1:</strong> Daily waste: 80,000 metric tonnes.</p>
                                        <p><strong>Step 2:</strong> Days per year: 365.</p>
                                        <p><strong>Step 3:</strong> Years of operation: 40 years (1984-2024).</p>
                                        <p><strong>Step 4:</strong> Total waste = 80,000 × 365 × 40 = 1,168,000,000 metric tonnes (1.168 billion tonnes).</p>
                                        <p><strong>Step 5:</strong> Comparison: Equivalent to 584 million cars or 3,200 Empire State Buildings.</p>
                                        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#c2410b' }}>Final Answer: Approximately 1.17 billion metric tonnes of waste have been dumped into the Ok Tedi river system.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* PITFALLS */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '40px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Pitfalls & How to Avoid Them
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { t: "Confusing 'renewable energy' with 'green mining'", w: "Assume that because minerals like lithium enable clean energy technologies, their extraction must be environmentally friendly.", c: "Always distinguish between the environmental cost of extraction and the benefits of end-use. A technology can be \"green\" in operation while having a \"dirty\" supply chain." },
                                { t: "Underestimating the scale of mining impacts", w: "Think of mining as a localized activity affecting only the immediate mine site.", c: "Always consider the \"footprint\" of mining—including indirect and cumulative impacts—when analyzing environmental effects. Impacts extend hundreds of kms via water and air." },
                                { t: "Assuming technology will solve all problems", w: "Believe that new technologies (like Direct Lithium Extraction) will eliminate environmental impacts.", c: "Approach technological solutions critically. Ask: What are the trade-offs? Has this been proven at scale? What new problems might it create?" },
                                { t: "Ignoring social and justice dimensions", w: "Focus only on ecological impacts while overlooking who bears the costs and who receives the benefits.", c: "Environmental justice is integral. Always ask: Who is affected? Who benefits? Are impacts distributed fairly? Have affected communities given free, prior, and informed consent (FPIC)?" }
                            ].map((p, i) => (
                                <div key={i} style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                    <p style={{ color: '#e11d48', fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1em' }}>🚫 Pitfall #{i + 1}: {p.t}</p>
                                    <p style={{ fontSize: '0.85em', color: '#4b5563', margin: '0 0 10px 0' }}><strong>What goes wrong:</strong> {p.w}</p>
                                    <p style={{ fontSize: '0.85em', color: '#059669', margin: 0 }}><strong>✅ How to avoid:</strong> {p.c}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CHEAT SHEET & EXAM TIPS */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', margin: '60px 0' }}>
                        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '20px', border: '2px dashed #94a3b8' }}>
                            <h3 style={{ marginTop: 0 }}>📄 Quick Reference Cheat Sheet</h3>
                            <div style={{ fontSize: '0.85em', color: '#334155' }}>
                                <p><strong>🔑 Key Definitions:</strong> Ore, Tailings, AMD (Acid Mine Drainage), Overburden, FPIC (Free, Prior, and Informed Consent)</p>
                                <p style={{ marginTop: '10px' }}><strong>📐 Important Statistics:</strong></p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Ok Tedi: 80,000 tonnes waste/day since 1984</li>
                                    <li>Lithium: 500,000 L water/tonne produced</li>
                                    <li>Fish decline: 95% in Ok Tedi River</li>
                                    <li>Amazon: 10% deforestation from mining</li>
                                </ul>
                                <p style={{ marginTop: '10px' }}><strong>⚙️ Major Impacts:</strong> Habitat destruction, Water pollution (AMD), Air pollution (dust, SO₂), Soil contamination, Biodiversity loss</p>
                                <p style={{ marginTop: '10px' }}><strong>✅ Sustainable Practices:</strong> Dry stacking (80% water reduction), In-pit disposal, Urban mining, Phytoremediation, Renewable energy</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#eff6ff', padding: '30px', borderRadius: '20px', border: '1px solid #dbeafe' }}>
                            <h3 style={{ marginTop: 0, color: '#1e40af' }}>💡 Top Exam Tips</h3>
                            <ul style={{ fontSize: '0.92em', color: '#1e40af', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '8px' }}><strong>Case studies:</strong> Memorize key facts (dates, locations, statistics) from major case studies like Ok Tedi — they frequently appear in exam questions.</li>
                                <li style={{ marginBottom: '8px' }}><strong>Calculations:</strong> Practice unit conversions (liters to cubic meters, tonnes to kg) as these often trip up students in mathematical problems.</li>
                                <li style={{ marginBottom: '8px' }}><strong>Terminology:</strong> Know precise definitions of technical terms (AMD, tailings, overburden, FPIC) as these are commonly tested in 2-mark sections.</li>
                                <li style={{ marginBottom: '8px' }}><strong>Comparison questions:</strong> Be prepared to compare traditional vs. sustainable methods or different minerals in terms of environmental impact.</li>
                                <li><strong>Solutions:</strong> Don't just describe problems — be ready to discuss sustainable alternatives and their limitations for higher-mark essays.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 style={{ color: '#4338ca', marginTop: '60px' }}>🚀 Go Deeper: Advanced Topics</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        {[
                            { t: "Circular Economy and Urban Mining", d: "The approach seeks to eliminate waste by keeping materials in use. Urban mining could reduce demand for virgin mineral extraction by up to 50% for some metals. EU's Battery Directive now requires minimum recycled content." },
                            { t: "Deep Sea Mining Governance", d: "ESA (International Seabed Authority) challenges: How do we regulate activities beyond national jurisdiction? Over 700 marine scientists have called for a moratorium until impacts are better understood." },
                            { t: "The Resource Curse & Justice", d: "The 'paradox of plenty' describes how countries rich in resources often have worse economic outcomes. Mechanisms include Dutch Disease, corruption, and neglect of other sectors." }
                        ].map((at, i) => (
                            <div key={i} style={{ padding: '25px', backgroundColor: '#eef2ff', borderRadius: '16px', border: '1px solid #c7d2fe' }}>
                                <h4 style={{ margin: '0 0 10px 0', color: '#3730a3' }}>{at.t}</h4>
                                <p style={{ fontSize: '0.85em', color: '#4338ca', lineHeight: '1.5' }}>{at.d}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '24px', color: '#f8fafc', margin: '60px 0' }}>
                        <h2 style={{ color: '#fff', marginTop: 0 }}>📝 University Exam Practice</h2>

                        <div style={{ marginBottom: '40px' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#60a5fa' }}>Question 1: Short Answer (5 marks) - [Time: 7 minutes]</p>
                            <p style={{ margin: '10px 0' }}>Define Acid Mine Drainage (AMD) and explain how it forms. Describe two environmental impacts of AMD.</p>
                            <details style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                <summary style={{ cursor: 'pointer', padding: '15px', color: '#3b82f6', fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>Show Marking Scheme & Model Answer</summary>
                                <div style={{ padding: '20px', fontSize: '0.95em', lineHeight: '1.6' }}>
                                    <p><strong>Marking Scheme:</strong> Definition of AMD: 1 mark | Formation process: 2 marks | Environmental impact 1: 1 mark | Environmental impact 2: 1 mark</p>
                                    <p style={{ marginTop: '10px' }}><strong>Model Answer:</strong> Acid Mine Drainage (AMD) is the outflow of acidic water from metal or coal mines, typically with elevated concentrations of dissolved heavy metals. It forms when sulfide minerals (particularly pyrite, FeS₂) in waste rock are exposed to oxygen and water. The oxidation reaction produces sulfuric acid (H₂SO₄), which then dissolves other heavy metals from the rock. Impacts: (1) Water pollution of rivers and groundwater. (2) Destruction of aquatic ecosystems as low pH and toxic metals kill fish and plants.</p>
                                </div>
                            </details>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#60a5fa' }}>Question 2: Problem Solving (10 marks) - [Time: 15 minutes]</p>
                            <p style={{ margin: '10px 0' }}>A gold mine processes 50,000 tonnes of ore per day with a gold grade of 3 grams per tonne. The mine uses wet tailings disposal with a water-to-ore ratio of 2:1. (a) Daily gold production in kg? (b) Daily water consumption for tailings? (c) Daily savings if switch to 80% water recycling dry stacking?</p>
                            <details style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                <summary style={{ cursor: 'pointer', padding: '15px', color: '#3b82f6', fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>Show Solution & Marking Scheme</summary>
                                <div style={{ padding: '20px', fontSize: '0.95em', lineHeight: '1.6' }}>
                                    <p><strong>(a) Gold Production:</strong> 50,000 tonnes × 3 g/tonne = 150,000 grams = <strong>150 kg</strong> of gold per day. (3 marks)</p>
                                    <p><strong>(b) Water consumption:</strong> 50,000 tonnes × 2 m³/tonne = <strong>100,000 m³</strong> per day. (2 marks)</p>
                                    <p><strong>(c) Water savings:</strong> New use = 100,000 × 0.20 = 20,000 m³/day. Savings = 100,000 - 20,000 = <strong>80,000 m³</strong> per day. (3 marks)</p>
                                    <p><strong>(d) Benefit:</strong> Elimination of tailings dam failure risk. (2 marks)</p>
                                </div>
                            </details>
                        </div>

                        <div>
                            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#60a5fa' }}>Question 3: Essay (15 marks) - [Time: 25 minutes]</p>
                            <p style={{ margin: '10px 0' }}>"The environmental impacts of mineral extraction are an unavoidable cost of modern civilization." Critically evaluate this statement with reference to specific examples and discuss how these impacts can be minimized.</p>
                            <details style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                <summary style={{ cursor: 'pointer', padding: '15px', color: '#3b82f6', fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>Show Essay Structure & Marking Scheme</summary>
                                <div style={{ padding: '20px', fontSize: '0.95em', lineHeight: '1.6' }}>
                                    <p><strong>Marking Scheme:</strong> Intro: 2 | Supporting evidence (impacts): 4 | Challenging evidence (alternatives): 4 | Minimization strategies: 3 | Balanced Conclusion: 2</p>
                                    <p style={{ marginTop: '10px' }}><strong>Framework:</strong> Students should argue both sides. (1) Supporting: Detail the massive scale of minerals in modern life (cars, phones) and the inherent destruction of mining pits and tailings (Ok Tedi, Atacama). (2) Challenging: Discuss the role of the circular economy (urban mining), demand reduction (public transit), and alternative technologies (sodium batteries). (3) Minimization: Technical (dry stacking, DLE) and Regulatory (EIAs, FPIC, bonds). (4) Conclusion: Impacts are severe but not "unavoidable" in their current scale; better governance and shift to circularity can decouple growth from raw extraction.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_4;
