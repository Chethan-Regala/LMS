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
                        <li>Implementing land management practices to prevent overgrazing</li>
                    </ul>
                </div>



                {/* DEEP DIVE */}
                <div style={{ margin: '60px 0' }}>
                    <h2 style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>📖</span> Deep Dive: Understanding Food Resources
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
                                { t: "Food Security", d: "A situation that exists when all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food." },
                                { t: "Green Revolution", d: "The dramatic increase in agricultural output through high-yielding Varieties, fertilizers, pesticides, and irrigation." },
                                { t: "Desertification", d: "The degradation of land in arid and semi-arid areas resulting from factors including climatic variations and human activities." },
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
                        <p style={{ marginTop: '20px', fontSize: '0.85em', color: '#64748b' }}>Interconnected pillars defining food security at all levels.</p>
                    </div>

                    <h3>How Agriculture Has Changed: The Green Revolution and Beyond</h3>
                    <p>The transformation of agriculture in the 20th century represents one of humanity's most significant environmental interventions. The Green Revolution introduced high-yielding variety (HYV) seeds, primarily of wheat and rice, that could produce two to three times more grain per hectare. Between 1960 and 2000, global cereal production doubled while the area of land cultivated increased by only 10%.</p>

                    <p>However, this intensification came with profound environmental changes. The new crop varieties required heavy inputs of water, synthetic fertilizers, and pesticides. Irrigation expanded dramatically, withdrawing groundwater faster than aquifers could recharge. In India's Punjab state, groundwater tables have fallen by up to 30 meters. The heavy use of fertilizers created nitrogen runoff that creates "dead zones" in waterways—now covering over 8,000 square miles in the Gulf of Mexico.</p>

                    <p>Monoculture farming became standard practice. While this simplified harvest, it eliminated the biodiversity that naturally controls pests. Farmers became dependent on chemical pesticides, leading to a vicious cycle: chemicals kill beneficial insects, pests develop resistance, and "superbugs" threaten entire harvests.</p>



                    {/* FLOWCHART REPLACEMENT FOR FIGURE 2 */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                        <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>Figure 2: Environmental Impacts of Modern Agriculture</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                            <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '15px', borderRadius: '8px', gridColumn: 'span 4', textAlign: 'center', fontWeight: 'bold' }}>Modern Agriculture</div>

                            <div style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center' }}>High-Yield Varieties</div>
                            <div style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center' }}>Chemical Inputs</div>
                            <div style={{ backgroundColor: '#10b981', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center' }}>Monoculture Systems</div>
                            <div style={{ backgroundColor: '#6366f1', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '0.8em', textAlign: 'center' }}>Mechanization</div>

                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>• Increased Production<br />• Loss of Biodiversity</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>• Water Pollution<br />• Soil Degradation<br />• Health Risks</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>• Pest Resistance<br />• Soil Erosion</div>
                            <div style={{ fontSize: '0.75em', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>• Deforestation<br />• Fossil Fuel Dependence</div>

                            <div style={{ backgroundColor: '#ef4444', color: '#fff', padding: '10px', borderRadius: '6px', gridColumn: 'span 4', textAlign: 'center', fontSize: '0.9em', fontWeight: 'bold' }}>Short-term Food Security vs. Long-term Vulnerability (Dead Zones, Desertification)</div>
                        </div>
                    </div>

                    <h3>Overgrazing: The Desertification Crisis</h3>
                    <p>Overgrazing occurs when livestock consume vegetation faster than it can regenerate. This triggers a cascade of environmental degradation that can transform productive grasslands into barren desert. The UN estimates that <strong>overgrazing is responsible for 35% of global desertification</strong>, affecting approximately 2 billion hectares of land.</p>

                    <p><strong>The Mechanism:</strong> When too many animals graze, they remove protective vegetation and damage root systems. Soil becomes exposed to wind and water erosion. Topsoil is blown away, leaving infertile subsoil. Rain runs off rather than soaking in, causing flash floods and preventing groundwater recharge. Conditions become so dry that only desert-adapted plants survive.</p>

                    <p><strong>Causes:</strong> Rooted in socioeconomic factors. Growing human populations force reliance on herding. Traditional nomadic systems (which allowed land recovery) are disrupted by borders and privatization. Climate change reduces rainfall, lowering carrying capacity just as demand increases.</p>
                    <p><strong>Consequences:</strong> Releases stored carbon, causes toxic dust storms, drives rural poverty, and can trigger conflicts. The Syrian civil war was partly fueled by a severe drought (2006-2010) that devastated pastoral lands.</p>



                    {/* DESERTIFICATION CYCLE DIAGRAM */}
                    <div style={{ backgroundColor: '#fafaf9', padding: '30px', borderRadius: '16px', border: '1px solid #e7e5e4', margin: '40px 0', textAlign: 'center' }}>
                        <h4 style={{ color: '#78716c', marginBottom: '25px' }}>Figure 3: The Desertification Cycle</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
                            {["OVER GRAZING", "VEGETATION LOSS", "SOIL EXPOSURE", "EROSION", "SOIL DEGRADATION", "DESERTIFICATION"].map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div style={{ padding: '15px', backgroundColor: idx === 0 ? '#ef4444' : idx === 5 ? '#78716c' : '#f59e0b', color: '#fff', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7em', fontWeight: 'bold' }}>{step}</div>
                                    {idx < 5 && <span style={{ color: '#d6d3d1', fontSize: '1.5em' }}>→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                        <div style={{ marginTop: '20px', backgroundColor: '#fee2e2', padding: '15px', borderRadius: '8px', display: 'inline-block' }}>
                            <p style={{ margin: 0, fontSize: '0.9em', color: '#991b1b' }}><strong>CONSEQUENCES:</strong> Poverty • Migration • Conflict • Climate Change</p>
                        </div>
                    </div>

                    <h3>Key Components & Interconnections</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
                        <div style={{ padding: '20px', backgroundColor: '#fdf2f8', borderRadius: '16px' }}>
                            <h4 style={{ color: '#be185d' }}>Component 1: Soil Health</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>Soil is the foundation of food. A teaspoon of healthy soil contains billions of microorganisms. Modern fertilizers bypass these processes, making soil dependent on external inputs. FAO estimates 33% of global soil is moderately to highly degraded.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#eff6ff', borderRadius: '16px' }}>
                            <h4 style={{ color: '#1d4ed8' }}>Component 2: Water Resources</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>Agriculture uses 70% of global freshwater. The Aral Sea disaster—reduced to 10% of its size—demonstrates the consequences of unsustainable irrigation. Climate change further alters precipitation patterns.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#ecfdf5', borderRadius: '16px' }}>
                            <h4 style={{ color: '#047857' }}>Component 3: Biodiversity</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>75% of world food comes from just 12 plant and 5 animal species. Genetic uniformity creates vulnerability. The Irish Potato Famine (1840s) resulted from reliance on a single potato variety.</p>
                        </div>
                        <div style={{ padding: '20px', backgroundColor: '#fff7ed', borderRadius: '16px' }}>
                            <h4 style={{ color: '#c2410b' }}>Component 4: Climate System</h4>
                            <p style={{ fontSize: '0.95em', lineHeight: '1.6' }}>Food production contributes 25% of global emissions. Conversely, 1°C rise in temperature reduces wheat yields by 6%. Climate stabilization is essential for long-term food security.</p>
                        </div>
                    </div>



                    {/* MISCONCEPTIONS */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '35px', borderRadius: '24px', border: '1px solid #ffe4e6', margin: '60px 0' }}>
                        <h3 style={{ margin: '0 0 30px 0', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>⚠️</span> Common Misconceptions
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {[
                                { m: '"The world doesn\'t produce enough food to feed everyone."', r: "Current global food production is sufficient for 10 billion people. Hunger persists due to poverty, waste (1/3 of food is lost), and unequal distribution." },
                                { m: '"The Green Revolution was entirely successful and should be replicated everywhere."', r: "While yields grew, it caused degradation, benefited the wealthy over the poor, and failed in Africa due to different agroecological conditions." },
                                { m: '"Overgrazing is caused by too many animals, so reducing numbers will solve it."', r: "Desertification is caused by how animals are managed. Properly managed grazing can restore degraded land; the problem is continuous grazing without recovery." },
                                { m: '"Organic farming can never feed the world."', r: "While organic yields are 10-20% lower, they perform better in droughts and build soil health. Combined with reduced waste and diet changes, it is a viable global solution." }
                            ].map((item, idx) => (
                                <div key={idx} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                    <p style={{ fontWeight: 'bold', color: '#e11d48', margin: '0 0 10px 0' }}>Misconception #{idx + 1}</p>
                                    <p style={{ fontStyle: 'italic', color: '#475569', margin: '0 0 12px 0' }}>{item.m}</p>
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
                    <h2 style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '1.5em' }}>📊</span> Case Studies: Real-World Examples
                    </h2>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#10b981' }}>Case Study 1: The Green Revolution in Punjab, India</h3>
                        <p><strong>📝 Background:</strong> Punjab became India's breadbasket, producing 20% of wheat and 12% of rice on 1.5% of land area.</p>
                        <h4 style={{ color: '#047857' }}>🔍 Environmental Changes Observed:</h4>
                        <ul>
                            <li><strong>Groundwater Depletion:</strong> Rice needs 2,300 L/kg. Water tables dropped 30-50 meters; 79% of blocks overexploited.</li>
                            <li><strong>Soil Salinization:</strong> Irrigation without drainage led to salt buildup in 25% of land.</li>
                            <li><strong>Pesticide Pollution:</strong> Highest global usage (923g/ha). Toxins found in groundwater and breast milk.</li>
                            <li><strong>Loss of Biodiversity:</strong> 1,000+ traditional varieties replaced by a few HYVs.</li>
                        </ul>
                        <p><strong>✅ Lessons:</strong> Yield-focused intensification without safeguards creates sustainability crises. Solutions include crop diversification and integrated pest management.</p>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#3b82f6' }}>Case Study 2: The Aral Sea Disaster</h3>
                        <p><strong>📝 Background:</strong> Once the 4th largest lake. Soviet planners diverted feeder rivers to irrigate cotton in the desert.</p>
                        <h4 style={{ color: '#1e40af' }}>🔍 Environmental and Social Consequences:</h4>
                        <ul>
                            <li><strong>Lake Disappearance:</strong> Shrunk to 10% of size by 2007.</li>
                            <li><strong>Climate Change:</strong> Moderating effect gone; summers hotter, winters colder.</li>
                            <li><strong>Health Crisis:</strong> Exposed seabed has toxic dust; cancer rates 3-4x national average.</li>
                            <li><strong>Economic Collapse:</strong> Fishing industry (40k jobs) disappeared.</li>
                        </ul>
                        <p><strong>✅ Restoration:</strong> Kok-Aral Dam (2005) partially recovered the North Aral Sea, but the South continues to shrink.</p>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: '30px 0' }}>
                        <h3 style={{ color: '#f59e0b' }}>Case Study 3: Overgrazing in the Sahel Region</h3>
                        <p><strong>📝 Background:</strong> 135 million people depend on livestock. Population grew from 30m (1950) to 135m today.</p>
                        <h4 style={{ color: '#b45309' }}>🔍 Desertification Process:</h4>
                        <ul>
                            <li><strong>Sedentarization:</strong> Settling nomads concentrated animals in fixed areas.</li>
                            <li><strong>Drought:</strong> 1972-1984 droughts killed 70% of livestock.</li>
                            <li><strong>Land Degradation:</strong> 500 million hectares degraded; desertification advancing 5km/year.</li>
                        </ul>
                        <p><strong>✅ Great Green Wall:</strong> 8,000 km wall of trees across Sahel to restore 100 million hectares by 2030.</p>

                    </div>

                    {/* COMPARISON TABLE */}
                    <div style={{ margin: '60px 0' }}>
                        <h2 style={{ color: '#0369a1' }}>📊 Comparison & Analysis</h2>
                        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f1f5f9' }}>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Aspect</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Conventional (Green Rev)</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Organic Farming</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Agroecology</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Yield/ha</td>
                                        <td style={{ padding: '15px' }}>Highest (baseline)</td>
                                        <td style={{ padding: '15px' }}>10-20% lower</td>
                                        <td style={{ padding: '15px' }}>High in marginal lands</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Soil Health</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ Degrades</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Improves</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Regenerates</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Water Use</td>
                                        <td style={{ padding: '15px', color: '#ef4444' }}>✗ High need</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Better retention</td>
                                        <td style={{ padding: '15px', color: '#10b981' }}>✓ Max rainfall use</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>Best suited for</td>
                                        <td style={{ padding: '15px' }}>Well-capitalized ops</td>
                                        <td style={{ padding: '15px' }}>Premium markets</td>
                                        <td style={{ padding: '15px' }}>Climate-vulnerable smallholders</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '30px' }}>
                            <h4 style={{ marginBottom: '15px' }}>When to Choose What? (Decision Guide)</h4>
                            <ul>
                                <li><strong>Choose Conventional:</strong> If capital/water abundant and short-term yield is priority.</li>
                                <li><strong>Choose Organic:</strong> If premium markets exist and chemical-free is valued.</li>
                                <li><strong>Choose Agroecology:</strong> For limited resources and high climate variability.</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
                            World Food Resources: Use and Over-Exploitation | Environmental Science | EVS
                        </h4>
                    </div>
                    <div style={{ maxWidth: '640px', margin: '0 auto 30px auto' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
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

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📘 Easy Problem</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Problem:</strong> Grazing land has capacity of 1 cow/ha. Currently 15,000 cows graze on 10,000 ha. Calculate % overgrazing and consequences.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ marginTop: '10px' }}>15,000 vs 10,000 cap = 5,000 excess. <br /> (5,000/10,000) * 100 = <strong>50% overgrazing</strong>. <br /> Consequences: Veg removal faster than regrowth; soil compaction.</p>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📙 Medium Problem</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Problem:</strong> Traditional (2t/ha, 50kg fert) vs HYV (5t/ha, 200kg fert). Calculate % yield increase and efficiency (kg fert/ton).</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ marginTop: '10px' }}>% Yield Increase: ((5-2)/2)*100 = <strong>150%</strong>. <br /> Trad Efficiency: 50/2 = 25kg/ton. <br /> HYV Efficiency: 200/5 = <strong>40kg/ton</strong>. <br /> Concern: HYV is 60% less efficient with fertilizer, increasing runoff risk.</p>
                                </details>
                            </div>
                            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ margin: '0 0 20px 0' }}>📕 Hard Problem</h3>
                                <p style={{ fontSize: '0.95em' }}><strong>Problem:</strong> Aral Sea shrunk from 68k to 6.8k km². Toxic dust affects 500km radius. Calculate area affected.</p>
                                <details style={{ marginTop: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Show Solution</summary>
                                    <p style={{ marginTop: '10px' }}>Affected Area = π * r² = 3.14 * (500)² = <strong>785,000 km²</strong>. <br /> Why transboundary? Dust affects multiple nations (KZ, UZ, TM) regardless of borders.</p>
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
                            <div>
                                <p style={{ color: '#ea580c', fontWeight: 'bold' }}>🚫 Pitfall #1: Confusing Availability with Access</p>
                                <p style={{ fontSize: '0.9em' }}>Hunger is often due to poverty/inequality, not a lack of produced food. Analyze using all 4 pillars.</p>
                            </div>
                            <div>
                                <p style={{ color: '#ea580c', fontWeight: 'bold' }}>🚫 Pitfall #2: High-Yield = "Good"</p>
                                <p style={{ fontSize: '0.9em' }}>Yield maximization can mask long-term soil/water degradation. Consider sustainability metrics.</p>
                            </div>
                            <div>
                                <p style={{ color: '#ea580c', fontWeight: 'bold' }}>🚫 Pitfall #3: Overgrazing = Only animal numbers</p>
                                <p style={{ fontSize: '0.9em' }}>Management matters more. Continuous grazing is more damaging than large rotational herds.</p>
                            </div>
                            <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '12px' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>💡 Exam Tips:</p>
                                <p style={{ fontSize: '0.85em', margin: 0 }}>Memorize stats (Punjab pesticide use, Sahel desertification rate). Prepare to explain interconnections (Food-Energy-Water Nexus).</p>
                            </div>
                        </div>
                    </div>

                    {/* CHEAT SHEET */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '20px', border: '2px dashed #94a3b8', margin: '60px 0' }}>
                        <h3 style={{ marginTop: 0 }}>📄 Quick Reference Cheat Sheet</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
                            <div>
                                <h4 style={{ color: '#0369a1' }}>🔑 Definitions</h4>
                                <ul style={{ fontSize: '0.85em' }}>
                                    <li><strong>Food Security:</strong> Access to safe, nutritious food.</li>
                                    <li><strong>Desertification:</strong> Land degradation in drylands.</li>
                                    <li><strong>Monoculture:</strong> Single crop over large areas.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1' }}>📊 Key Stats</h4>
                                <ul style={{ fontSize: '0.85em' }}>
                                    <li><strong>735 million:</strong> Chronic hunger.</li>
                                    <li><strong>35%:</strong> Desertification from overgrazing.</li>
                                    <li><strong>70%:</strong> Freshwater used by agriculture.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#0369a1' }}>🌍 Case Studies</h4>
                                <ul style={{ fontSize: '0.85em' }}>
                                    <li><strong>Punjab:</strong> Groundwater/Pesticides.</li>
                                    <li><strong>Aral Sea:</strong> Irrigation Disaster.</li>
                                    <li><strong>Sahel:</strong> Overgrazing/Great Green Wall.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ADVANCED TOPICS */}
                    <h2 style={{ color: '#4338ca' }}>🚀 Go Deeper: Advanced Topics</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '30px 0' }}>
                        <div style={{ padding: '25px', backgroundColor: '#eef2ff', borderRadius: '16px', border: '1px solid #c7d2fe' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#3730a3' }}>🔬 Advanced Topic 1: Regenerative Agriculture</h4>
                            <p style={{ fontSize: '0.9em' }}>Combines no-till, cover cropping, and managed grazing to actively restore ecosystems. Can sequester 1.5-2 tons of CO2 per acre annually.</p>
                        </div>
                        <div style={{ padding: '25px', backgroundColor: '#eef2ff', borderRadius: '16px', border: '1px solid #c7d2fe' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#3730a3' }}>🔬 Advanced Topic 2: Food-Energy-Water Nexus</h4>
                            <p style={{ fontSize: '0.9em' }}>Three resources are deeply linked. Producing food needs energy/water; energy needs water/land. Understanding trade-offs is crucial for the future.</p>
                        </div>
                    </div>

                    {/* UNIVERSITY EXAM PRACTICE */}
                    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '24px', color: '#f8fafc', margin: '60px 0' }}>
                        <h2 style={{ color: '#fff', marginTop: 0 }}>📝 University Exam Practice</h2>
                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ fontWeight: 'bold' }}>Question 1: Short Answer (5 marks)</p>
                            <p>"Explain the four pillars of food security and why each is necessary."</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Model Answer</summary>
                                <p style={{ padding: '10px' }}>Availability (Supply), Access (Economic/Physical), Utilization (Biological use), and Stability (Consistency). All four must be met for a population to be secure.</p>
                            </details>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Question 2: Problem Solving (10 marks)</p>
                            <p>Region 1970 vs Now: Yield 1.5t → 4.5t; Fert 20kg → 180kg; Water Table 10m → 35m. Analyze sustainability.</p>
                            <details style={{ color: '#94a3b8', fontSize: '0.9em' }}>
                                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>Solution</summary>
                                <p style={{ padding: '10px' }}>Yield increased 200%. Fert efficiency dropped from 13.3kg/t to 40kg/t. Water table dropped 25m. System is unsustainable due to falling efficiency and resource depletion.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_5;
