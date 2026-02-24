'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_5: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which of the following is NOT one of the four pillars of food security as defined by the FAO?",
            options: ["Availability", "Access", "Affordability", "Utilization"],
            correctAnswer: 2,
            explanation: "The four official pillars are Availability, Access, Utilization, and Stability. Affordability is considered an element of Access."
        },
        {
            question: "The Green Revolution is associated with which of the following environmental problems?",
            options: ["Only soil erosion", "Only water pollution", "Groundwater depletion, soil salinization, and pesticide pollution", "Only loss of crop biodiversity"],
            correctAnswer: 2,
            explanation: "The intensification of agriculture led to massive groundwater extraction, salt buildup in soil (salinization), and contamination from heavy pesticide/fertilizer use."
        },
        {
            question: "What percentage of global desertification is attributed to overgrazing according to the United Nations?",
            options: ["15%", "35%", "55%", "75%"],
            correctAnswer: 1,
            explanation: "Overgrazing is responsible for approximately 35% of global desertification, primarily through the removal of vegetation cover."
        },
        {
            question: "Which of the following best describes the relationship between agriculture and climate change?",
            options: [
                "Agriculture is only affected by climate change but does not contribute to it",
                "Agriculture both contributes to and is affected by climate change",
                "Agriculture is the largest source of greenhouse gas emissions globally",
                "Climate change has no significant impact on agricultural yields"
            ],
            correctAnswer: 1,
            explanation: "Agriculture contributes ~25% of emissions and is simultaneously one of the sectors most vulnerable to changing climates."
        },
        {
            question: "According to current data, approximately how many people worldwide face chronic hunger or undernourishment?",
            options: ["100 million", "350 million", "735 million", "2 billion"],
            correctAnswer: 2,
            explanation: "As of recent reports, approximately 735 million people face chronic hunger, which is about 9.1% of the global population."
        },
        {
            question: "Which region was MOST severely affected by the failure of the Green Revolution to increase food production?",
            options: ["South Asia", "Latin America", "Sub-Saharan Africa", "Southeast Asia"],
            correctAnswer: 2,
            explanation: "Sub-Saharan Africa was largely bypassed by the Green Revolution due to different agroecological conditions and lack of infrastructure."
        },
        {
            question: "The Aral Sea disaster was primarily caused by:",
            options: [
                "Climate change and reduced rainfall",
                "Diverting rivers for cotton irrigation",
                "Overfishing and pollution from boats",
                "Construction of dams downstream"
            ],
            correctAnswer: 1,
            explanation: "Forcing cotton cultivation in arid regions by diverting the Amu Darya and Syr Darya rivers led to the disappearance of the sea."
        },
        {
            question: "True or False: Monoculture farming increases biodiversity by focusing resources on the most productive crop species.",
            options: ["True", "False"],
            correctAnswer: 1,
            explanation: "False. Monocultures displace diverse ecosystems and traditional varieties, leading to a massive loss of genetic and ecological biodiversity."
        },
        {
            question: "True or False: Properly managed grazing can help restore degraded lands and sequester carbon in soils.",
            options: ["True", "False"],
            correctAnswer: 0,
            explanation: "True. Rotational or restorative grazing (like Allan Savory's method) mimics nature and can rebuild soil health and store carbon."
        },
        {
            question: "Which of the following is the most accurate statement about global food production?",
            options: [
                "Global food production is insufficient to feed the current population",
                "Global food production is sufficient, but distribution and access are unequal",
                "Hunger is caused primarily by natural disasters and crop failures",
                "Only industrial agriculture can produce enough food for the world"
            ],
            correctAnswer: 1,
            explanation: "We produce enough food for 10 billion people; hunger is a problem of poverty, distribution, and waste."
        }
    ];

    return (
        <div className="module-content">
            {/* LESSON HEADER */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.5</div>
                <div className="lesson-title-main">
                    <h1>🌾 Food Resources: World Food Problems, Changes Caused by Agriculture and Overgrazing</h1>
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
                        <span style={{ fontWeight: '600' }}>Ecosystems, Natural Resources Basics</span>
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
                        <li style={{ marginBottom: '12px' }}>Analyze the causes and consequences of world food problems including hunger, malnutrition, and food insecurity across different regions</li>
                        <li style={{ marginBottom: '12px' }}>Evaluate the environmental impacts of modern agricultural practices including the Green Revolution, chemical fertilizer use, and monoculture farming</li>
                        <li style={{ marginBottom: '12px' }}>Explain the process of desertification caused by overgrazing and its effects on ecosystems and human livelihoods</li>
                        <li style={{ marginBottom: '12px' }}>Compare sustainable and unsustainable food production systems and propose solutions to global food challenges</li>
                        <li>Apply knowledge of food resource management to analyze case studies and develop strategies for food security</li>
                    </ul>
                </div>

                {/* WHY IT MATTERS */}
                <h2 style={{ color: '#0f172a', borderLeft: '4px solid #f43f5e', paddingLeft: '15px' }}>🔥 Why This Topic Matters</h2>
                <div style={{ fontSize: '1.1em', lineHeight: '1.7', color: '#334155' }}>
                    <p>Imagine walking into a grocery store where shelves are empty, or facing the reality of sending your children to bed hungry every night. For nearly 828 million people worldwide, this is not imagination—it's daily life. Food is the most fundamental of all resources, yet our global food system faces unprecedented challenges that threaten the survival and dignity of billions.</p>
                    <p>The way we produce food has transformed dramatically over the past century. The Green Revolution brought promises of feeding the world through high-yield crop varieties and chemical inputs, but it also created a legacy of soil degradation, water pollution, and biodiversity loss. Meanwhile, traditional practices like overgrazing continue to turn fertile grasslands into deserts, affecting over 3 billion people in dryland regions.</p>
                    <p>Understanding food resources is essential for environmental scientists, policymakers, and global citizens because food security intersects with climate change, water scarcity, economic inequality, and geopolitical stability. The decisions we make about agriculture today will determine whether future generations inherit a world of abundance or scarcity.</p>
                </div>

                <div style={{ backgroundColor: '#eff6ff', padding: '25px', borderRadius: '16px', border: '1px solid #dbeafe', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>💡</span> Real-World Applications:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#1d4ed8', fontSize: '1em' }}>
                        <li style={{ marginBottom: '10px' }}>Designing sustainable agricultural policies for developing nations</li>
                        <li style={{ marginBottom: '10px' }}>Developing climate-resilient farming systems to combat desertification</li>
                        <li style={{ marginBottom: '10px' }}>Creating food distribution networks to address regional hunger crises</li>
                        <li style={{ marginBottom: '10px' }}>Implementing land management practices to prevent overgrazing</li>
                    </ul>
                    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '10px' }}>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#1e40af' }}>📊 Global Hunger Statistics</p>
                        <p style={{ margin: 0, fontSize: '0.9em' }}>Global hunger affects 9.1% of the world's population, with 735 million people facing chronic undernourishment.</p>
                    </div>
                </div>

                {/* DEEP DIVE */}
                <div style={{ margin: '60px 0' }}>
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>📖</span> Deep Dive: Understanding Food Resources and World Food Problems
                    </h2>

                    <h3>Definition & Fundamentals</h3>
                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                        <p>Food resources encompass all the natural and human-managed systems that provide nourishment for human populations. This includes cultivated crops, livestock, fisheries, wild foods, and the agricultural land, water, and energy required to produce them. Unlike non-renewable resources such as fossil fuels, food resources are theoretically renewable—but only when managed sustainably within the carrying capacity of ecosystems.</p>
                        <p>World food problems refer to the complex challenges that prevent equitable access to adequate, nutritious food for all people. These problems manifest in three primary forms: undernourishment (insufficient caloric intake), malnutrition (deficiency or excess of nutrients), and food insecurity (lack of consistent access to enough food for an active, healthy life). According to the FAO, approximately 2.3 billion people faced moderate or severe food insecurity in 2021.</p>
                        <p>The historical context of food problems reveals a troubling paradox: while global food production has increased dramatically over the past 50 years, hunger persists and is even growing in some regions. The Green Revolution of the 1960s-70s doubled cereal production in Asia and Latin America through high-yield varieties, irrigation, and chemical inputs. However, this "success" came with environmental costs and failed to reach the poorest populations, particularly in sub-Saharan Africa where hunger rates continue to rise.</p>
                    </div>

                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ margin: '0 0 20px 0', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>📌</span> Key Terminology:
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            {[
                                { t: "Food Security", d: "A situation that exists when all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food that meets their dietary needs for an active and healthy life." },
                                { t: "Green Revolution", d: "The dramatic increase in agricultural output through the use of high-yielding crop varieties, chemical fertilizers, pesticides, and irrigation." },
                                { t: "Desertification", d: "The degradation of land in arid, semi-arid, and dry sub-humid areas resulting from various factors, including climatic variations and human activities." },
                                { t: "Overgrazing", d: "The grazing of land by livestock beyond its carrying capacity, leading to vegetation loss and soil degradation." },
                                { t: "Monoculture", d: "The agricultural practice of growing a single crop species over a wide area for many successive years." }
                            ].map((term, i) => (
                                <div key={i} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                                    <strong style={{ color: '#0369a1', display: 'block', marginBottom: '5px' }}>{term.t}</strong>
                                    <p style={{ fontSize: '0.9em', margin: 0, color: '#64748b' }}>{term.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PILLARS DIAGRAM */}
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#6366f1', marginBottom: '25px' }}>Figure 1: The Four Pillars of Food Security</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{ padding: '20px', backgroundColor: '#6366f1', color: '#fff', borderRadius: '12px', gridColumn: 'span 2', fontWeight: 'bold' }}>FOOD SECURITY</div>
                            <div style={{ padding: '20px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '12px' }}>
                                <strong>AVAILABILITY</strong><br /><span style={{ fontSize: '0.8em' }}>Production & Supply of sufficient food</span>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#22c55e', color: '#fff', borderRadius: '12px' }}>
                                <strong>ACCESS</strong><br /><span style={{ fontSize: '0.8em' }}>Economic & physical ability to obtain food</span>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#ef4444', color: '#fff', borderRadius: '12px' }}>
                                <strong>UTILIZATION</strong><br /><span style={{ fontSize: '0.8em' }}>Proper biological use of nutrients</span>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#f59e0b', color: '#fff', borderRadius: '12px' }}>
                                <strong>STABILITY</strong><br /><span style={{ fontSize: '0.8em' }}>Consistent access over time</span>
                            </div>
                        </div>
                        <p style={{ marginTop: '20px', fontSize: '0.85em', color: '#64748b' }}>Figure 1: The four interconnected pillars that define food security at household, national, and global levels.</p>
                    </div>

                    <h3>How Agriculture Has Changed: The Green Revolution and Beyond</h3>
                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                        <p>The transformation of agriculture in the 20th century represents one of humanity's most significant environmental interventions. The Green Revolution, pioneered by Norman Borlaug and others, introduced high-yielding variety (HYV) seeds, primarily of wheat and rice, that could produce two to three times more grain per hectare than traditional varieties. Between 1960 and 2000, global cereal production doubled while the area of land cultivated increased by only 10%.</p>
                        <p>However, this intensification came with profound environmental changes. The new crop varieties required heavy inputs of water, synthetic fertilizers (nitrogen, phosphorus, potassium), and pesticides. Irrigation expanded dramatically, withdrawing groundwater faster than aquifers could recharge. In India's Punjab state, the "breadbasket" of the Green Revolution, groundwater tables have fallen by up to 30 meters in some areas. The heavy use of fertilizers created nitrogen runoff that pollutes waterways, creating dead zones like the one in the Gulf of Mexico that now covers over 8,000 square miles.</p>
                        <p>Monoculture farming—growing single crops over vast areas—became standard practice to maximize efficiency. While this simplified mechanization and harvest, it eliminated the biodiversity that naturally controls pests and maintains soil health. Farmers became dependent on chemical pesticides to control the pest outbreaks that inevitably followed. The result has been a vicious cycle: pesticides kill beneficial insects along with pests, requiring ever-stronger chemicals, while pests develop resistance, creating "superbugs" that threaten entire harvests.</p>
                    </div>

                    {/* ENVIRONMENTAL IMPACTS FLOWCHART */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ textAlign: 'center', marginBottom: '30px', color: '#1e293b' }}>Figure 2: Environmental Impacts of Modern Agriculture</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                            <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '15px', borderRadius: '8px', gridColumn: 'span 4', textAlign: 'center', fontWeight: 'bold' }}>Modern Agriculture</div>

                            <div style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center', fontWeight: 'bold' }}>High-Yield Varieties</div>
                            <div style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center', fontWeight: 'bold' }}>Chemical Inputs</div>
                            <div style={{ backgroundColor: '#10b981', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center', fontWeight: 'bold' }}>Monoculture Systems</div>
                            <div style={{ backgroundColor: '#6366f1', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center', fontWeight: 'bold' }}>Mechanization</div>

                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#fff' }}>• Increased Production<br />• Loss of Biodiversity</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#fff' }}>• Water Pollution<br />• Soil Degradation<br />• Health Risks</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#fff' }}>• Pest Resistance<br />• Soil Erosion</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#fff' }}>• Deforestation<br />• Fossil Fuel Dependence</div>

                            <div style={{ backgroundColor: '#ef4444', color: '#fff', padding: '12px', borderRadius: '6px', gridColumn: 'span 4', textAlign: 'center', fontSize: '0.9em', fontWeight: 'bold' }}>Short-term Food Security vs. Long-term Vulnerability (Dead Zones, Desertification)</div>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85em', color: '#64748b' }}>Figure 2: The complex web of agricultural practices and their environmental consequences.</p>
                    </div>

                    <h3>Overgrazing: The Desertification Crisis</h3>
                    <div style={{ fontSize: '1.05em', lineHeight: '1.7', color: '#334155' }}>
                        <p>Overgrazing occurs when livestock consume vegetation faster than it can regenerate, stripping the land of its protective plant cover. This seemingly simple process triggers a cascade of environmental degradation that can transform productive grasslands into barren desert. The United Nations estimates that <strong>overgrazing is responsible for 35% of global desertification</strong>, affecting approximately 2 billion hectares of land worldwide.</p>
                        <p><strong>The Mechanism:</strong> When too many animals graze in an area, they remove not just the above-ground vegetation but also damage root systems that hold soil together. Without plant cover, soil becomes exposed to wind and water erosion. Topsoil—the layer containing most nutrients—is blown or washed away, leaving behind infertile subsoil. When rain falls on degraded land, it runs off rather than soaking in, causing flash floods and further erosion. The land becomes increasingly dry as groundwater is not replenished, creating conditions where only desert-adapted plants can survive.</p>
                        <p><strong>Causes:</strong> The causes of overgrazing are complex and often rooted in socioeconomic factors. In many developing regions, growing human populations and limited economic opportunities force more people to rely on livestock herding. Traditional nomadic systems that allowed land to recover between grazing periods have been disrupted by political borders, land privatization, and conflict. Climate change exacerbates the problem by reducing rainfall in already marginal areas, lowering the land's carrying capacity just as demand for grazing increases.</p>
                        <p><strong>Consequences:</strong> The consequences extend far beyond the immediate grazing areas. Desertification releases stored carbon into the atmosphere, contributing to climate change. Dust from degraded lands can travel thousands of miles, affecting air quality and human health. The loss of productive land drives rural communities into poverty and can trigger conflicts over remaining resources and migration to already crowded cities. The Syrian civil war, for example, was partly fueled by a severe drought (2006-2010) that devastated agricultural lands and displaced rural populations.</p>
                    </div>

                    {/* DESERTIFICATION CYCLE DIAGRAM */}
                    <div style={{ backgroundColor: '#fafaf9', padding: '40px', borderRadius: '24px', border: '1px solid #e7e5e4', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#78716c', marginBottom: '30px', fontWeight: 'bold' }}>Figure 3: The Desertification Cycle</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                            {[
                                { t: "OVER GRAZING", desc: "More livestock on less land", c: "#ef4444" },
                                { t: "VEGETATION LOSS", desc: "Plant cover removed", c: "#f59e0b" },
                                { t: "SOIL EXPOSURE", desc: "Bare ground visible", c: "#f59e0b" },
                                { t: "WIND & WATER EROSION", desc: "Topsoil loss", c: "#f59e0b" },
                                { t: "SOIL DEGRADATION", desc: "Loss of fertility", c: "#f59e0b" },
                                { t: "DESERTIFICATION", desc: "Transition to desert", c: "#78716c" }
                            ].map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div style={{ padding: '15px', backgroundColor: step.c, color: '#fff', borderRadius: '16px', width: '130px', minHeight: '130px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                                        <div style={{ fontSize: '0.8em', fontWeight: 'bold', marginBottom: '8px' }}>{step.t}</div>
                                        <div style={{ fontSize: '0.65em', opacity: 0.9 }}>{step.desc}</div>
                                    </div>
                                    {idx < 5 && <span style={{ color: '#d6d3d1', fontSize: '1.5em', fontWeight: 'bold' }}>→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                        <div style={{ marginTop: '30px', backgroundColor: '#fee2e2', padding: '20px', borderRadius: '12px', border: '1px solid #fecaca', display: 'inline-block' }}>
                            <p style={{ margin: 0, fontSize: '0.95em', color: '#991b1b', fontWeight: 'bold' }}>CONSEQUENCES: Poverty • Migration • Conflict • Climate Change</p>
                        </div>
                        <p style={{ marginTop: '20px', fontSize: '0.85em', color: '#78716c' }}>Figure 3: The vicious cycle of overgrazing leading to desertification and its broader societal impacts.</p>
                    </div>

                    <h3>Key Components & Interconnections</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', margin: '30px 0' }}>
                        {[
                            {
                                t: "Component 1: Soil Health",
                                d: "Soil is the foundation of food production. A single teaspoon of healthy soil contains billions of microorganisms that cycle nutrients and suppress diseases. Modern agriculture's reliance on chemical fertilizers bypasses these natural processes, leaving soil dependent on external inputs and vulnerable to erosion. 33% of global soil is already degraded."
                            },
                            {
                                t: "Component 2: Water Resources",
                                d: "Agriculture consumes 70% of global freshwater. Irrigation has enabled food production in arid regions but has depleted aquifers and destroyed ecosystems like the Aral Sea. Climate change's alteration of precipitation patterns makes efficient water management critical for future food security."
                            },
                            {
                                t: "Component 3: Biodiversity",
                                d: "Industrial agriculture has dramatically reduced genetic diversity—75% of global food comes from just 12 plant and 5 animal species. This uniformity creates extreme vulnerability to pests and diseases, similar to the conditions that led to the Irish Potato Famine."
                            },
                            {
                                t: "Component 4: Climate System",
                                d: "Agriculture contributes 25% of global greenhouse gas emissions through deforestation, methane from livestock, and nitrous oxide from fertilizers. Simultaneously, every 1°C rise in temperature is projected to reduce wheat yields by 6%, creating a dangerous feedback loop."
                            }
                        ].map((comp, i) => (
                            <div key={i} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', borderTop: `4px solid ${['#8b5e3c', '#0ea5e9', '#10b981', '#f43f5e'][i]}` }}>
                                <h4 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>{comp.t}</h4>
                                <p style={{ fontSize: '0.9em', lineHeight: '1.6', color: '#4b5563', margin: 0 }}>{comp.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* MISCONCEPTIONS */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '40px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Misconceptions
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { m: '"The world doesn\'t produce enough food to feed everyone."', r: "Current global food production is sufficient to feed 10 billion people. Hunger persists primarily due to poverty, food waste (1/3 is lost), and unequal distribution, not absolute scarcity." },
                                { m: '"The Green Revolution was entirely successful and should be replicated everywhere."', r: "While yields grew, it caused degradation, benefited wealthy farmers over poor ones, and failed in Africa due to different agroecological conditions." },
                                { m: '"Overgrazing is caused by too many animals, so reducing livestock numbers will solve desertification."', r: "Desertification is primarily caused by HOW animals are managed. Properly managed grazing can restore degraded land by simulating plant growth. The problem is continuous grazing vs. rotational systems." },
                                { m: '"Organic farming can never feed the world because it produces lower yields."', r: "While yields are 10-20% lower, organic systems perform better during droughts and build soil health over time. A combination of sustainable intensification and reduced waste makes it viable." }
                            ].map((item, idx) => (
                                <div key={idx} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                    <p style={{ fontWeight: 'bold', color: '#e11d48', margin: '0 0 10px 0', fontSize: '1.1em' }}>Misconception #{idx + 1}</p>
                                    <p style={{ fontStyle: 'italic', color: '#475569', margin: '0 0 12px 0', fontSize: '0.9em' }}>{item.m}</p>
                                    <p style={{ fontSize: '0.95em', color: '#059669', margin: 0 }}><strong>Reality:</strong> {item.r}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VIDEOS */}
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>🎥</span> Learn Through Videos
                    </h2>
                    <p style={{ fontSize: '1.1em', color: '#4b5563' }}>Watch these carefully selected videos to reinforce your understanding with visual explanations and expert perspectives.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', margin: '30px 0' }}>
                        {[
                            { title: "World Hunger: A Crisis Explained", meta: "Kurzgesagt - 10 minutes", text: "The root causes of global hunger, why food production isn't the problem, and potential solutions to food insecurity.", icon: "📚" },
                            { title: "How Agriculture Affects Environment", meta: "Khan Academy - 8 minutes", text: "Environmental impacts including soil erosion, water pollution, and biodiversity loss from farming.", icon: "🎬" },
                            { title: "Desertification: Causes and Solutions", meta: "TED-Ed - 5 minutes", text: "How desertification occurs, its human and climatic causes, and innovative approaches to restoring degraded lands.", icon: "🌍" },
                            { title: "How to Green the World's Deserts", meta: "TED Talks - 22 minutes", text: "Counterintuitive insights on how properly managed livestock can reverse desertification and sequester carbon.", icon: "💻" }
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
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Documentary:</p>
                                <p style={{ fontSize: '0.85em' }}>"Seeds of Hunger" - global food crisis politics</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Interactive Tool:</p>
                                <p style={{ fontSize: '0.85em' }}>FAO's Food Security Indicators (fao.org)</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Case Study:</p>
                                <p style={{ fontSize: '0.85em' }}>The Great Green Wall initiative (Sahel restoration)</p>
                            </div>
                        </div>
                    </div>

                    {/* CASE STUDIES */}
                    <h2 style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '15px', marginTop: '60px' }}>
                        <span style={{ fontSize: '1.5em' }}>📊</span> Case Studies: Real-World Examples
                    </h2>

                    <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#10b981', marginTop: 0 }}>Case Study 1: The Green Revolution in Punjab, India</h3>
                        <p style={{ fontSize: '1.05em', color: '#334155' }}><strong>📝 Background:</strong> Punjab, meaning "Land of Five Rivers," was the epicenter of India's Green Revolution in the 1960s and 70s. The state transformed from food-deficient to India's breadbasket, producing 20% of the country's wheat and 12% of its rice on just 1.5% of India's land area.</p>

                        <h4 style={{ color: '#047857', marginBottom: '15px' }}>🔍 Environmental Changes Observed:</h4>
                        <ul style={{ color: '#334155', lineHeight: '1.8' }}>
                            <li><strong>Groundwater Depletion:</strong> Rice cultivation requires 2,300 liters of water per kilogram. Intensive irrigation has caused water tables to drop by 30-50 meters in some areas, with 79% of Punjab's assessment blocks now classified as overexploited.</li>
                            <li><strong>Soil Salinization:</strong> Excessive irrigation without proper drainage has led to salt accumulation in soils, reducing fertility in over 25% of cultivated land.</li>
                            <li><strong>Pesticide Pollution:</strong> Punjab uses 923 grams of pesticides per hectare—among the highest globally. These chemicals have contaminated groundwater and human bodies, with studies showing pesticide residues in breast milk and blood.</li>
                            <li><strong>Loss of Biodiversity:</strong> Traditional rice and wheat varieties (over 1,000 types) have been replaced by just a few high-yielding varieties, eroding genetic diversity.</li>
                        </ul>
                        <p style={{ backgroundColor: '#ecfdf5', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #10b981', marginTop: '20px' }}>
                            <strong>✅ Lessons Learned:</strong> The Punjab experience demonstrates that yield-focused agricultural intensification without environmental safeguards creates long-term sustainability crises. Solutions being implemented include crop diversification, direct seeding, and integrated pest management.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#3b82f6', marginTop: 0 }}>Case Study 2: The Aral Sea Disaster</h3>
                        <p style={{ fontSize: '1.05em', color: '#334155' }}><strong>📝 Background:</strong> The Aral Sea, located between Kazakhstan and Uzbekistan, was once the fourth-largest lake in the world. Soviet planners diverted its two feeder rivers—the Amu Darya and Syr Darya—to irrigate cotton fields in the desert.</p>

                        <h4 style={{ color: '#1e40af', marginBottom: '15px' }}>🔍 Environmental and Social Consequences:</h4>
                        <ul style={{ color: '#334155', lineHeight: '1.8' }}>
                            <li><strong>Lake Disappearance:</strong> By 2007, the Aral Sea had shrunk to 10% of its original size, splitting into several small, hypersaline lakes.</li>
                            <li><strong>Climate Change:</strong> The lake's moderating effect on local climate disappeared. Summers became hotter, winters colder, and growing seasons shortened by 2-3 weeks.</li>
                            <li><strong>Health Crisis:</strong> Exposed seabed contains toxic pesticides and fertilizers. Dust storms carry these toxins, causing respiratory diseases and cancer rates 3-4 times the national average.</li>
                            <li><strong>Economic Collapse:</strong> The fishing industry that employed 40,000 people disappeared. Ports are now 100+ kilometers from water, with ships stranded in desert.</li>
                        </ul>
                        <p style={{ backgroundColor: '#eff6ff', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #3b82f6', marginTop: '20px' }}>
                            <strong>✅ Current Restoration Efforts:</strong> The Kok-Aral Dam (2005) has helped the North Aral Sea partially recover, reaching 3,600 square kilometers. However, the South Aral Sea continues to shrink.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#f59e0b', marginTop: 0 }}>Case Study 3: Overgrazing in the Sahel Region</h3>
                        <p style={{ fontSize: '1.05em', color: '#334155' }}><strong>📝 Background:</strong> The Sahel is a semi-arid transition zone spanning 14 countries. It supports 135 million people, most of whom depend on livestock herding and rain-fed agriculture.</p>

                        <h4 style={{ color: '#b45309', marginBottom: '15px' }}>🔍 Desertification Process:</h4>
                        <ul style={{ color: '#334155', lineHeight: '1.8' }}>
                            <li><strong>Population Pressure:</strong> The Sahel's population grew from 30 million in 1950 to 135 million today, increasing demand for livestock and grazing land.</li>
                            <li><strong>Sedentarization:</strong> Policies encouraged nomadic herders to settle, concentrating animals in fixed areas rather than allowing traditional rotational grazing.</li>
                            <li><strong>Drought Amplification:</strong> The 1972-1984 droughts killed 50-70% of livestock. Recovery was hampered by continued overgrazing on weakened lands.</li>
                            <li><strong>Land Degradation:</strong> 500 million hectares of the Sahel are now degraded, with desertification advancing at 5 km per year in some areas.</li>
                        </ul>
                        <p style={{ backgroundColor: '#fffbeb', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #f59e0b', marginTop: '20px' }}>
                            <strong>✅ The Great Green Wall Initiative:</strong> This project aims to plant an 8,000-km wall of trees across the Sahel to restore 100 million hectares, sequester carbon, and create 10 million jobs by 2030.
                        </p>
                    </div>

                    {/* COMPARISON TABLE */}
                    <div style={{ margin: '60px 0' }}>
                        <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5em' }}>📊</span> Comparison & Analysis
                        </h2>
                        <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f1f5f9' }}>
                                            <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Aspect</th>
                                            <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Conventional (Green Revolution)</th>
                                            <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Organic Farming</th>
                                            <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Agroecology</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { a: "Yield per hectare", c1: "Highest (baseline)", c2: "10-20% lower on average", c3: "Comparable or higher in marginal lands" },
                                            { a: "External inputs", c1: "High (fertilizers, pesticides, seeds)", c2: "Low (organic amendments only)", c3: "Minimal (local resources, biodiversity)" },
                                            { a: "Soil health", c1: "✗ Degrades over time", c2: "✓ Improves over time", c3: "✓ Rapidly regenerates soil" },
                                            { a: "Water use efficiency", c1: "✗ High irrigation needs", c2: "✓ Better retention", c3: "✓ Maximize rainfall use" },
                                            { a: "Biodiversity impact", c1: "✗ Monocultures", c2: "✓ Supports pollinators", c3: "✓ High diversity" },
                                            { a: "Climate impact", c1: "✗ High emissions", c2: "✓ Lower emissions", c3: "✓ Carbon sequestering" },
                                            { a: "Best suited for", c1: "Large-scale, well-capitalized operations", c2: "Markets paying premiums for organic products", c3: "Smallholders, marginal lands, climate-vulnerable regions" }
                                        ].map((row, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                <td style={{ padding: '15px', fontWeight: 'bold', color: '#475569' }}>{row.a}</td>
                                                <td style={{ padding: '15px' }}>{row.c1}</td>
                                                <td style={{ padding: '15px' }}>{row.c2}</td>
                                                <td style={{ padding: '15px' }}>{row.c3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* DECISION GUIDE */}
                        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '30px' }}>
                            <h4 style={{ marginBottom: '20px', color: '#1e293b' }}>When to Choose What? (Decision Guide)</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <strong style={{ color: '#0369a1', display: 'block', marginBottom: '10px' }}>Choose Conventional when:</strong>
                                    <p style={{ fontSize: '0.85em', color: '#475569', margin: 0 }}>Capital is available, water is abundant, and short-term yield maximization is the priority.</p>
                                </div>
                                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <strong style={{ color: '#0369a1', display: 'block', marginBottom: '10px' }}>Choose Organic when:</strong>
                                    <p style={{ fontSize: '0.85em', color: '#475569', margin: 0 }}>Premium markets exist, soil degradation is moderate, and consumers value chemical-free products.</p>
                                </div>
                                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <strong style={{ color: '#0369a1', display: 'block', marginBottom: '10px' }}>Choose Agroecology when:</strong>
                                    <p style={{ fontSize: '0.85em', color: '#475569', margin: 0 }}>Resources are limited, climate variability is high, and long-term sustainability is essential.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VIDEO EMBED */}
                    <div style={{ margin: '60px 0' }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.2em', fontWeight: 'bold' }}>
                                🎥 Featured Video: World Food Resources: Use and Over-Exploitation
                            </h4>
                            <p style={{ color: '#64748b', fontSize: '0.9em', marginTop: '5px' }}>Comprehensive visual summary of agricultural impacts and food challenges.</p>
                        </div>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    src="https://www.youtube.com/embed/L8-DESgb__Q?si=8yKrTVCh1_c-2PVj"
                                    title="World Food Resources: Use and Over Exploitation"
                                    allowFullScreen
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* PRACTICE SECTION */}
                    <div style={{ padding: '50px 0' }}>
                        <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.5em' }}>🎯</span> Practice & Apply Your Knowledge
                        </h2>

                        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                            <Quiz
                                title="Module 2.5 Mastery Quiz: Food Resources"
                                questions={quizQuestions}
                                subject="ES"
                                unitId={2}
                                moduleId={5}
                            />
                        </div>

                        {/* PROBLEM SOLVING */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0', color: '#1e40af' }}>📘 Easy Problem</h3>
                                <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}><strong>Problem:</strong> A region has 10,000 hectares of grazing land with a carrying capacity of 1 cow per hectare. Currently, 15,000 cows are being grazed continuously. Calculate the percentage of overgrazing and explain two immediate consequences.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #dbeafe' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1e40af' }}>Show Step-by-Step Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155' }}>
                                        <p><strong>Step 1:</strong> Calculate carrying capacity: 10,000 hectares × 1 cow/hectare = 10,000 cows.</p>
                                        <p><strong>Step 2:</strong> Calculate excess animals: 15,000 cows - 10,000 cows = 5,000 cows over capacity.</p>
                                        <p><strong>Step 3:</strong> Calculate percentage overgrazing: (5,000 ÷ 10,000) × 100 = 50% overgrazing.</p>
                                        <p><strong>Step 4:</strong> Immediate consequences: (1) Vegetation removal faster than regrowth, exposing soil; (2) Soil compaction from hooves reducing water infiltration.</p>
                                        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e40af' }}>Final Answer: 50% overgrazing. Consequences include vegetation loss and soil compaction leading to erosion.</p>
                                    </div>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0', color: '#c2410b' }}>📙 Medium Problem</h3>
                                <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}><strong>Problem:</strong> A farmer switches from traditional wheat (yield: 2 tons/hectare, 50 kg fertilizer) to HYV wheat (yield: 5 tons/hectare, 200 kg fertilizer). Calculate: (a) % yield increase, (b) fertilizer efficiency for both, and (c) one environmental concern.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#c2410b' }}>Show Step-by-Step Solution</summary>
                                    <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155' }}>
                                        <p><strong>(a) Yield Increase:</strong> ((5 - 2) / 2) × 100 = 150%.</p>
                                        <p><strong>(b) Efficiency (Traditional):</strong> 50 kg / 2 tons = 25 kg fertilizer per ton.</p>
                                        <p><strong>(b) Efficiency (HYV):</strong> 200 kg / 5 tons = 40 kg fertilizer per ton.</p>
                                        <p><strong>(c) Environmental Concern:</strong> Fertilizer efficiency decreased by 60%. Higher use increases risk of nitrogen runoff, eutrophication, and dead zones.</p>
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* HARD PROBLEM */}
                        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '30px' }}>
                            <h3 style={{ margin: '0 0 20px 0', color: '#991b1b' }}>📕 Hard Problem</h3>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}><strong>Problem:</strong> The Aral Sea originally covered 68,000 km² and shrank to 6,800 km². If the exposed seabed (toxic salts) produces dust storms affecting a 500 km radius, calculate: (a) The area affected, and (b) Discuss why this represents a transboundary environmental problem.</p>
                            <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#991b1b' }}>Show Step-by-Step Solution</summary>
                                <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#334155' }}>
                                    <p><strong>(a) Exposed area:</strong> 68,000 - 6,800 = 61,200 km².</p>
                                    <p><strong>(a) Radius affected:</strong> Area = πr² = 3.14 * (500)² = 785,000 km².</p>
                                    <p><strong>(b) Transboundary problem:</strong> Dust storms carry pollutants (DDT, salts) across Kazakhstan, Uzbekistan, Turkmenistan, and even to the Himalayas. Environmental impacts in one country originate from water diversion in others, requiring international cooperation.</p>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* PITFALLS */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '40px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Pitfalls & How to Avoid Them
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { t: "Confusing food availability with food access", w: "Assume that because enough food is produced globally, hunger must be caused by production problems.", c: "Always analyze using all four pillars. A country can have abundant production but high hunger if poverty prevents access." },
                                { t: "Assuming all high-yield agriculture is 'good'", w: "Evaluate systems only by yield per hectare without considering long-term sustainability.", c: "Factor in soil degradation, water depletion, and input dependency. A system can have high yields but high vulnerability." },
                                { t: "Thinking overgrazing is only about numbers", w: "Assume desertification is simply caused by too many animals in an area.", c: "Management matters more. Continuous grazing of even fewer animals can cause more damage than larger, rotationally moved herds." },
                                { t: "Equating desertification with desert expansion", w: "Think of desertification as deserts 'moving' into new areas.", c: "It is land degradation in drylands. It starts as 'spots' of degraded land within productive areas due to mismanagement." }
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
                                <p><strong>🔑 Key Definitions:</strong> Food Security (4 pillars), Green Revolution (HYVs), Desertification, Overgrazing, Monoculture.</p>
                                <p style={{ marginTop: '10px' }}><strong>📊 Key Statistics:</strong> 735 million face chronic hunger; 33% of global soil degraded; 70% freshwater used by agriculture.</p>
                                <p style={{ marginTop: '10px' }}><strong>🌍 Case Studies:</strong> Punjab (Groundwater depletion), Aral Sea (Irrigation diversion), Sahel (Great Green Wall).</p>
                                <p style={{ marginTop: '10px' }}><strong>✅ Solutions:</strong> Agroecology, Rotational grazing, Integrated Pest Management, Reducing food waste.</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '30px', borderRadius: '20px', border: '1px solid #bae6fd' }}>
                            <h3 style={{ marginTop: 0, color: '#0369a1' }}>💡 Top 5 Exam Tips</h3>
                            <ul style={{ color: '#0c4a6e', lineHeight: '1.8' }}>
                                <li><strong>Case studies:</strong> Always have specific data ready (e.g., Aral Sea shrank to 10% of its size).</li>
                                <li><strong>Definitions:</strong> Memorize the 4 pillars of food security precisely (Availability, Access, Utilization, Stability).</li>
                                <li><strong>Interconnections:</strong> Explain how food connects to water, climate, and biodiversity (Nexus approach).</li>
                                <li><strong>Solutions:</strong> Don't just describe problems; discuss sustainable alternatives like regenerative farming.</li>
                                <li><strong>Terminology:</strong> Use correct terms like 'carrying capacity', 'salinization', and 'sedentarization'.</li>
                            </ul>
                        </div>
                    </div>

                    {/* GO DEEPER */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h3 style={{ margin: '0 0 25px 0', color: '#1e293b' }}>🚀 Go Deeper: Advanced Topics</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div>
                                <h4 style={{ color: '#0369a1' }}>Regenerative Agriculture</h4>
                                <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Goes beyond sustainability to actively restore ecosystems. Combines no-till, cover cropping, and managed grazing to sequester 1.5-2 tons of CO2 per acre annually.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1' }}>Food-Energy-Water Nexus</h4>
                                <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Producing food needs energy/water; energy needs water/land; water treatment needs energy. Understanding these trade-offs is essential for policy.</p>
                            </div>
                        </div>
                    </div>

                    {/* UNIVERSITY EXAM PRACTICE */}
                    <div style={{ margin: '60px 0', padding: '40px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ color: '#1e293b', marginTop: 0 }}>📝 University Exam Practice</h2>

                        {/* QUESTION 1 */}
                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ color: '#0369a1' }}>Question 1: Short Answer (5 marks)</h4>
                            <p style={{ fontStyle: 'italic', color: '#334155', fontSize: '1.1em', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0369a1' }}>
                                "Explain the four pillars of food security and why each is necessary for achieving global food security."
                            </p>
                            <details style={{ marginTop: '20px' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0369a1', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '8px', display: 'inline-block' }}>
                                    Show Marking Scheme & Model Answer
                                </summary>
                                <div style={{ marginTop: '20px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h5 style={{ color: '#1e293b', margin: '0 0 10px 0' }}>📊 Marking Scheme:</h5>
                                        <ul style={{ color: '#475569', fontSize: '0.9em', lineHeight: '1.6' }}>
                                            <li><strong>Availability (definition + importance):</strong> 1.5 marks</li>
                                            <li><strong>Access (definition + importance):</strong> 1.5 marks</li>
                                            <li><strong>Utilization (definition + importance):</strong> 1 mark</li>
                                            <li><strong>Stability (definition + importance):</strong> 1 mark</li>
                                        </ul>
                                    </div>
                                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />
                                    <div>
                                        <h5 style={{ color: '#1e293b', margin: '0 0 10px 0' }}>✅ Model Answer:</h5>
                                        <div style={{ color: '#334155', fontSize: '0.95em', lineHeight: '1.8' }}>
                                            <p><strong>Availability</strong> refers to the physical presence of food through production, imports, and storage. Without sufficient quantities of food being produced or imported, food security is impossible regardless of other factors.</p>
                                            <p><strong>Access</strong> encompasses both economic access (ability to afford food) and physical access (proximity to markets). Food may be available nationally but inaccessible to poor households or remote communities.</p>
                                            <p><strong>Utilization</strong> refers to the body's ability to make use of nutrients through adequate diet, clean water, sanitation, and healthcare. Even with access to calories, malnutrition can occur without proper nutrient utilization.</p>
                                            <p><strong>Stability</strong> ensures consistent access over time, protecting against temporary shocks like price spikes, droughts, or job loss. Without stability, households face recurring food insecurity even when other pillars are met.</p>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        {/* QUESTION 2 */}
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#0369a1' }}>Question 2: Problem Solving (10 marks)</h4>
                            <div style={{ fontStyle: 'italic', color: '#334155', fontSize: '1.1em', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0369a1' }}>
                                <p style={{ margin: 0 }}>"A region has experienced the following changes since adopting Green Revolution practices in 1970:</p>
                                <ul style={{ marginTop: '10px' }}>
                                    <li>Wheat yield: 1.5 tons/hectare → 4.5 tons/hectare</li>
                                    <li>Fertilizer use: 20 kg/hectare → 180 kg/hectare</li>
                                    <li>Groundwater table: 10 meters depth → 35 meters depth</li>
                                </ul>
                                <p style={{ margin: 0 }}>Analyze these changes, calculating relevant metrics, and discuss the sustainability implications."</p>
                            </div>
                            <details style={{ marginTop: '20px' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0369a1', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '8px', display: 'inline-block' }}>
                                    Show Marking Scheme & Complete Solution
                                </summary>
                                <div style={{ marginTop: '20px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h5 style={{ color: '#1e293b', margin: '0 0 10px 0' }}>📊 Marking Scheme:</h5>
                                        <ul style={{ color: '#475569', fontSize: '0.9em', lineHeight: '1.6' }}>
                                            <li><strong>Yield increase calculation and analysis:</strong> 2 marks</li>
                                            <li><strong>Fertilizer efficiency analysis:</strong> 2 marks</li>
                                            <li><strong>Water resource implications:</strong> 2 marks</li>
                                            <li><strong>Overall sustainability assessment:</strong> 4 marks</li>
                                        </ul>
                                    </div>
                                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />
                                    <div>
                                        <h5 style={{ color: '#1e293b', margin: '0 0 10px 0' }}>✅ Complete Solution:</h5>
                                        <div style={{ color: '#334155', fontSize: '0.95em', lineHeight: '1.8' }}>
                                            <p><strong>1. Yield Analysis:</strong> Yield increased by ((4.5 - 1.5) / 1.5) × 100 = 200% increase. This represents successful short-term productivity gains.</p>
                                            <p><strong>2. Fertilizer Efficiency:</strong> 1970: 20kg ÷ 1.5t = 13.3 kg fertilizer per ton. 2023: 180kg ÷ 4.5t = 40 kg fertilizer per ton. Efficiency decreased by 200%—requiring 3x more fertilizer per ton of wheat.</p>
                                            <p><strong>3. Water Implications:</strong> Groundwater fell 25 meters in 50 years (0.5m/year). At this rate, remaining groundwater may be economically inaccessible within decades.</p>
                                            <p style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444', marginTop: '15px' }}>
                                                <strong>4. Sustainability Assessment:</strong> The system is unsustainable. While yields increased, the resource intensity (water, fertilizer) creates long-term risks. This exemplifies the "yield trap"—short-term gains masking long-term degradation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '60px 0' }}>
                        <h2 style={{ margin: 0, color: '#1e293b' }}>🎓 Congratulations on Completing This Module!</h2>
                        <p style={{ color: '#64748b', marginTop: '10px' }}>You've mastered the fundamentals of Food Resources and their environmental impacts.</p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            style={{ marginTop: '30px', padding: '12px 24px', backgroundColor: '#0369a1', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            <span>↑</span> Back to Top
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_5;
