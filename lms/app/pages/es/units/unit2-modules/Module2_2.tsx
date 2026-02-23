'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_2: React.FC = () => {
    const quizQuestions = [
        {
            question: "What is the single largest driver of Amazon rainforest deforestation, accounting for approximately 80% of forest clearing?",
            options: [
                "Soy cultivation for animal feed exports",
                "Commercial logging of tropical hardwoods",
                "Cattle ranching for beef production and export",
                "Mining operations for minerals and oil"
            ],
            correctAnswer: 2,
            explanation: "Cattle ranching is the single largest driver of deforestation in the Amazon, responsible for about 80% of current forest loss."
        },
        {
            question: "Scientists warn that Amazon deforestation beyond what threshold could trigger irreversible 'savannization'—conversion to dry grassland?",
            options: [
                "10-15% deforestation",
                "20-25% deforestation",
                "35-40% deforestation",
                "50-60% deforestation"
            ],
            correctAnswer: 1,
            explanation: "The tipping point is estimated to be between 20-25% deforestation, beyond which the forest may no longer be able to generate enough rain to sustain itself."
        },
        {
            question: "In the Jharia Coalfield case study, what unique environmental disaster has made the area particularly hazardous and difficult to remediate?",
            options: [
                "Radioactive contamination from uranium mining",
                "Underground coal seam fires burning continuously since 1916",
                "Mercury contamination from gold extraction processes",
                "Massive methane gas leaks creating explosion risks"
            ],
            correctAnswer: 1,
            explanation: "Underground coal seam fires have been burning in Jharia for over a century, causing subsidence and toxic emissions."
        },
        {
            question: "According to research, what percentage of Earth's remaining biodiversity is found in indigenous territories, despite these areas covering only about 22% of global land area?",
            options: [
                "40% of biodiversity",
                "60% of biodiversity",
                "80% of biodiversity",
                "95% of biodiversity"
            ],
            correctAnswer: 2,
            explanation: "Indigenous territories are critical for conservation, housing 80% of the world's remaining biodiversity."
        },
        {
            question: "The Sardar Sarovar Dam on the Narmada River displaced approximately how many people, with about 60% being tribal (Adivasi) communities?",
            options: [
                "50,000-75,000 people",
                "100,000-150,000 people",
                "200,000-320,000 people",
                "500,000-600,000 people"
            ],
            correctAnswer: 2,
            explanation: "The Sardar Sarovar project has displaced between 200,000 and 320,000 people according to various estimates, with tribal groups bearing the brunt."
        },
        {
            question: "Which of the following best describes \"edge effects\" in the context of deforestation?",
            options: [
                "The boundary areas where deforestation is most likely to occur next",
                "Changes in environmental conditions (light, humidity, wind) at forest-clearing boundaries that alter species composition",
                "Economic benefits concentrated at the periphery of forest areas",
                "Legal restrictions on development within 500m of forest boundaries"
            ],
            correctAnswer: 1,
            explanation: "Edge effects refer to the ecological changes that occur at the boundaries of fragmented forests, often degrading the quality of the remaining forest."
        },
        {
            question: "In the context of dam projects, what phenomenon occurs when submerged vegetation decomposes in tropical reservoirs, potentially making them emit more greenhouse gases than fossil fuel power plants?",
            options: [
                "Eutrophication and algal blooms releasing CO₂",
                "Anaerobic decomposition releasing methane gas",
                "Photosynthesis by aquatic plants consuming oxygen",
                "Thermal stratification causing hydrogen sulfide release"
            ],
            correctAnswer: 1,
            explanation: "Anaerobic decomposition of flooded organic matter in reservoirs releases methane, a potent greenhouse gas."
        },
        {
            question: "According to the Forest Rights Act 2006 in India, what is the primary purpose of this legislation?",
            options: [
                "To increase forest cover through mandatory tree planting programs",
                "To regulate commercial logging and timber export",
                "To recognize and vest forest rights in forest-dwelling tribal communities and traditional forest dwellers",
                "To create economic incentives for private forestry enterprises"
            ],
            correctAnswer: 2,
            explanation: "The FRA 2006 aims to rectify historical injustices by recognizing the rights of tribal and forest-dwelling communities."
        },
        {
            question: "Which sustainable alternative to deforestation has been successfully demonstrated in Costa Rica, reversing forest loss while generating over $4 billion annually?",
            options: [
                "Large-scale plantation forestry of eucalyptus and pine",
                "Ecotourism combined with forest protection and national parks",
                "Offshore oil extraction replacing forest-based economy",
                "Manufacturing and technology industries in urban areas"
            ],
            correctAnswer: 1,
            explanation: "Costa Rica's model focuses on ecotourism and payments for ecosystem services to protect its forests while boosting the economy."
        },
        {
            question: "True or False: 'Planting new trees (reforestation) can fully compensate for the loss of old-growth primary forests destroyed by deforestation, as long as an equivalent number of trees are planted.'",
            options: [
                "True",
                "False"
            ],
            correctAnswer: 1,
            explanation: "False. Primary forests carry unique biodiversity and carbon storage that cannot be replicated by new plantations for decades or centuries."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">2.2</div>
                <div className="lesson-title-main">
                    <h1>🌲 Deforestation & Case Studies: Timber Extraction, Mining, Dams and Effects on Forests and Tribal People</h1>
                </div>
            </div>

            <section className="content-section">
                {/* METADATA BAR */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', margin: '20px 0', fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>⏱️ Estimated Time</span>
                        75-90 minutes
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>📊 Difficulty</span>
                        Intermediate
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>🎯 Prerequisites</span>
                        Basic Ecology, Forest Ecosystems
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>✅ Pass Score</span>
                        70% or higher
                    </div>
                </div>

                {/* OBJECTIVES */}
                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#166534' }}>🎯 What You'll Master: Learning Objectives</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}>Analyze the major causes of deforestation including timber extraction, mining operations, and dam construction, and evaluate their environmental impacts</li>
                        <li style={{ marginBottom: '10px' }}>Examine real-world case studies of deforestation events and critically assess the socio-economic and ecological consequences</li>
                        <li style={{ marginBottom: '10px' }}>Evaluate the effects of deforestation on indigenous and tribal communities, including displacement, loss of livelihood, and cultural impacts</li>
                        <li style={{ marginBottom: '10px' }}>Develop strategies for sustainable forest management and propose solutions to balance development needs with environmental conservation</li>
                        <li>Apply knowledge of deforestation impacts to predict long-term consequences on biodiversity, climate change, and ecosystem services</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* WHY IT MATTERS */}
                <h3>🔥 Why This Topic Matters</h3>
                <p>Imagine standing at the edge of a vast rainforest that has existed for thousands of years, home to countless species and indigenous communities who have lived in harmony with nature for generations. Now picture that same landscape transformed into a barren mining site or submerged under a massive reservoir. This is not a hypothetical scenario—it's happening right now across the globe, from the Amazon Basin to the forests of India, Southeast Asia, and Africa.</p>
                <p>Deforestation is one of the most critical environmental challenges of our time, responsible for approximately 15% of global greenhouse gas emissions—more than the entire transportation sector. Every minute, we lose forest area equivalent to 27 football fields. But this isn't just about trees; it's about the intricate web of life they support, the climate systems they regulate, and the millions of people whose lives depend on forests for survival, medicine, food, and cultural identity.</p>



                <p>Understanding deforestation through specific case studies—timber extraction in tropical rainforests, large-scale mining operations in biodiversity hotspots, and dam construction that displaces entire communities—provides crucial insights into the complex interplay between human development and environmental conservation. As future environmental scientists, engineers, policymakers, or informed citizens, you'll need to understand these issues to develop sustainable solutions that balance economic growth with ecological preservation and social justice.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>💡 Real-World Applications:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Environmental Impact Assessment:</strong> Used by governments and companies worldwide to evaluate proposed projects before implementation</li>
                        <li style={{ marginBottom: '10px' }}><strong>Climate Change Mitigation:</strong> REDD+ programs (Reducing Emissions from Deforestation and Forest Degradation) provide financial incentives for forest conservation</li>
                        <li style={{ marginBottom: '10px' }}><strong>Tribal Rights & Social Justice:</strong> Legal frameworks like Forest Rights Act (India, 2006) protect indigenous communities from displacement</li>
                        <li style={{ marginBottom: '10px' }}><strong>Sustainable Development Goals:</strong> SDG 15 (Life on Land) directly addresses deforestation and biodiversity loss</li>
                        <li><strong>Corporate Responsibility:</strong> Companies like Unilever and Nestlé have zero-deforestation policies in their supply chains</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* DEEP DIVE SECTION */}
                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '40px 0' }}>
                    <h2 style={{ margin: 0, color: '#075985', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ backgroundColor: '#7dd3fc', color: '#fff', padding: '5px 12px', borderRadius: '8px', fontSize: '0.6em' }}>📖</span>
                        Deep Dive: Understanding Deforestation
                    </h2>
                </div>

                <h3>Definition & Fundamentals</h3>
                <p><strong>What is Deforestation?</strong> In simple terms, deforestation is the permanent removal of trees and forest cover to convert land for non-forest use. Think of it like demolishing an apartment building that houses hundreds of families to build a parking lot—except the "families" are countless species of plants, animals, fungi, and microorganisms, and the "building" is an irreplaceable ecosystem that took centuries or millennia to develop.</p>
                <p><strong>Technical Definition:</strong> According to the Food and Agriculture Organization (FAO), deforestation is defined as "the conversion of forest to other land use or the permanent reduction of tree crown cover below the 10% threshold." This distinguishes it from forest degradation, where the forest remains but its quality, structure, or function is reduced.</p>
                <p><strong>Why Deforestation Exists:</strong> Forests have been cleared throughout human history for agriculture, settlement, and resource extraction. However, the scale and pace of modern deforestation are unprecedented. The fundamental problem is the conflict between short-term economic gains from forest exploitation and the long-term ecological services forests provide—oxygen production, carbon sequestration, water cycle regulation, soil conservation, and biodiversity preservation. Without forests, we lose nature's life-support systems: reduced rainfall patterns lead to droughts, soil erosion causes landslides and flooding, biodiversity loss disrupts food chains, and carbon release accelerates climate change.</p>
                <p><strong>Historical Context:</strong> While deforestation has ancient roots (the Mediterranean forests were largely cleared by Roman times), the Industrial Revolution marked a dramatic acceleration. The 20th century saw the most rapid forest loss in human history, particularly in tropical regions. The Amazon rainforest, for instance, has lost approximately 17% of its original cover since 1970. In India, forest cover declined from an estimated 40% in the early 20th century to just 21% by 1980, though conservation efforts have since improved this to approximately 24%.</p>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>📌 Key Terminology:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#0369a1', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Primary Forest (Old-Growth):</strong> Forests that have developed naturally without significant human disturbance, containing maximum biodiversity and carbon storage</li>
                        <li style={{ marginBottom: '10px' }}><strong>Secondary Forest:</strong> Forests that have regrown after major disturbance (logging, agriculture), typically with reduced biodiversity and altered species composition</li>
                        <li style={{ marginBottom: '10px' }}><strong>Forest Degradation:</strong> Reduction in forest quality and capacity to provide ecosystem services without complete removal of tree cover</li>
                        <li style={{ marginBottom: '10px' }}><strong>Clear-cutting:</strong> Complete removal of all trees in a specific area, the most destructive form of timber harvesting</li>
                        <li style={{ marginBottom: '10px' }}><strong>Selective Logging:</strong> Removal of specific high-value trees while maintaining forest structure, though still causing significant damage</li>
                        <li style={{ marginBottom: '10px' }}><strong>Edge Effects:</strong> Changes in environmental conditions and species composition at the boundaries between forest and cleared land</li>
                        <li style={{ marginBottom: '10px' }}><strong>Forest Fragmentation:</strong> Breaking up of continuous forest into smaller, isolated patches, reducing habitat connectivity and species movement</li>
                        <li><strong>Indigenous/Tribal People:</strong> Communities who have historical continuity with pre-colonial societies and maintain distinct cultural practices closely tied to their traditional lands</li>
                    </ul>
                </div>



                <h3>Visual Representation: The Deforestation Cycle</h3>
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '20px 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <div style={{ padding: '10px 20px', borderRadius: '20px', backgroundColor: '#dcfce7', color: '#166534', fontWeight: 'bold' }}>Intact Forest Ecosystem</div>
                            <span>➡️</span>
                            <div style={{ padding: '10px 20px', borderRadius: '20px', backgroundColor: '#fee2e2', color: '#991b1b', fontWeight: 'bold' }}>Economic Pressure</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>⬇️</div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f9fafb' }}>Timber Extraction</div>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f9fafb' }}>Mining Operations</div>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f9fafb' }}>Dam Construction</div>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f9fafb' }}>Agricultural Expansion</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>⬇️</div>
                        <div style={{ padding: '10px 20px', borderRadius: '20px', backgroundColor: '#fecaca', color: '#991b1b', fontWeight: 'bold', margin: '0 auto' }}>Forest Clearing</div>
                        <div style={{ textAlign: 'center' }}>⬇️</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85em' }}>Loss of Biodiversity</div>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85em' }}>Soil Erosion</div>
                            <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85em' }}>Climate Impact</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>⬇️</div>
                        <div style={{ padding: '10px 20px', borderRadius: '20px', backgroundColor: '#991b1b', color: '#fff', fontWeight: 'bold', margin: '0 auto' }}>Displacement of Tribal Communities</div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h2>Major Causes of Deforestation: Detailed Analysis</h2>

                <h3>1. Timber Extraction (Commercial Logging)</h3>
                <p>Timber extraction is one of the oldest and most economically significant drivers of deforestation. The global timber industry generates over $600 billion annually, creating enormous pressure on forest resources. Commercial logging operations range from small-scale selective cutting to massive clear-cutting operations that remove entire forest stands. Tropical hardwoods like teak, mahogany, rosewood, and sandalwood command premium prices in international markets, making them prime targets for both legal and illegal logging operations.</p>



                <p>The process typically begins with road construction into previously inaccessible forests. These roads themselves cause significant environmental damage—fragmenting habitats, increasing erosion, and facilitating access for hunters, miners, and agricultural settlers. Heavy machinery like chainsaws, bulldozers, and logging trucks compact soil, damage surrounding vegetation, and disrupt the forest floor. Even "selective logging" operations, which theoretically remove only specific valuable trees, cause extensive collateral damage. Studies show that for every tree removed, 10-20 surrounding trees are damaged or destroyed during felling and extraction.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#166534' }}>🌲 Timber Extraction Impact</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Logging operations and their effects on rainforests - 4:45 - National Geographic</p>
                        <p style={{ fontSize: '0.85em', color: '#4b5563' }}><strong>What you'll learn:</strong> Detailed look at commercial logging practices and ecological damage</p>
                    </div>
                    <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#0369a1' }}>📚 Deforestation Explained</h4>
                        <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Comprehensive overview of deforestation causes and consequences - 5:28 - Kurzgesagt</p>
                        <p style={{ fontSize: '0.85em', color: '#4b5563' }}><strong>What you'll learn:</strong> Global deforestation statistics, major drivers, and environmental impacts</p>
                    </div>
                </div>

                <p>The impact extends far beyond the immediate logging site. Forest fragmentation creates "edge effects" where sunlight penetration increases, humidity decreases, and wind exposure intensifies, fundamentally altering microclimates up to 300 meters into the remaining forest. These conditions favor invasive species and fire-prone vegetation while stressing native species adapted to the cool, moist forest interior. Additionally, logging operations often target the largest, oldest trees—precisely those most important for wildlife habitat, seed production, and carbon storage.</p>

                <h3>2. Mining Operations</h3>
                <p>Mining for minerals, metals, coal, and oil represents another major deforestation driver, particularly devastating because it renders land permanently unsuitable for forest regeneration. The extraction of resources like iron ore, bauxite (aluminum ore), copper, gold, coal, and uranium requires complete forest removal, topsoil stripping, and massive earth displacement. Surface mining operations can devastate thousands of hectares, creating lunar landscapes of exposed rock, toxic waste ponds, and contaminated soil.</p>



                <p>The mining process begins with exploration activities that create access roads and clearings. Once a viable deposit is identified, full-scale extraction begins. Open-pit mining removes overlying vegetation and soil (called "overburden"), sometimes to depths exceeding 500 meters. Underground mining, while less visible, still requires surface infrastructure, waste disposal areas, and processing facilities. The environmental toll is staggering: acid mine drainage contaminates water systems with heavy metals, tailings ponds leak toxic chemicals, dust pollution affects air quality for kilometers, and noise disrupts wildlife far beyond the mine site.</p>
                <p>Particularly concerning is illegal and small-scale gold mining in regions like the Amazon, where mercury is used to extract gold from sediment. This mercury enters the food chain, bioaccumulating in fish and ultimately poisoning indigenous communities who depend on rivers for food and water. A single gold ring can generate 20 tons of mine waste. In India, illegal sand mining for construction has devastated riverine forests and disrupted aquatic ecosystems.</p>

                <h3>3. Dam Construction & Hydroelectric Projects</h3>
                <p>Large dams and hydroelectric projects cause unique deforestation impacts by permanently submerging vast forest areas under reservoirs. While promoted as "clean energy," the reality is far more complex. When forests are flooded, the submerged vegetation decomposes anaerobically (without oxygen), releasing methane—a greenhouse gas 25 times more potent than carbon dioxide. Studies show that large tropical reservoirs can emit more greenhouse gases than equivalent fossil fuel power plants for the first decade of operation.</p>



                <p>Beyond direct submergence, dam construction requires extensive infrastructure: access roads, worker settlements, transmission lines, and quarries for construction materials. The dam itself acts as a barrier to river ecosystems, disrupting fish migration, altering sediment transport, and changing downstream water flow patterns. These changes ripple through the entire watershed, affecting forests that depend on seasonal flooding for nutrient replenishment.</p>

                <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>🏗️ Dams and Deforestation</h4>
                    <p style={{ fontSize: '0.85em', color: '#4b5563', marginBottom: '8px' }}>Impact of large dams on forests and communities - 6:12 - DW Documentary</p>
                    <p style={{ fontSize: '0.85em', color: '#4b5563' }}><strong>What you'll learn:</strong> Case studies of major dam projects and their environmental and social consequences</p>
                </div>

                <p>The social impact is equally severe. Dam projects have displaced an estimated 40-80 million people globally since 1950, with indigenous and tribal communities disproportionately affected. In India alone, large dams have displaced over 33 million people, many from forest-dwelling tribal communities who lose not just homes but ancestral lands, sacred sites, and traditional livelihoods tied to the forest.</p>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                    <h2 style={{ margin: '0 0 20px 0', color: '#9a3412', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        👤 Effects on Tribal and Indigenous Communities
                    </h2>
                    <p style={{ color: '#4b5563' }}>Forest-dwelling tribal and indigenous communities face existential threats from deforestation. These communities, numbering over 370 million people worldwide, have sustainably managed forests for generations, possessing invaluable traditional ecological knowledge. Their relationship with forests transcends mere resource use—it encompasses spiritual beliefs, cultural practices, social structures, and identity itself.</p>
                </div>



                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '30px 0' }}>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#9a3412', marginTop: 0 }}>📍 Displacement and Loss of Livelihood</h4>
                        <p style={{ fontSize: '0.9em', color: '#4b5563' }}>When forests are cleared or submerged, tribal communities lose access to resources essential for survival. Forest provides 40-60% of the diet for many indigenous groups through hunting, fishing, and gathering of wild foods. Medicinal plants, building materials, tools, and cultural artifacts all come from the forest. Displacement to unfamiliar environments destroys self-sufficient lifestyles and creates dependency on external aid.</p>
                    </div>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#9a3412', marginTop: 0 }}>🕉️ Cultural and Spiritual Impacts</h4>
                        <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Forests contain sacred groves, ancestral burial sites, and locations of religious significance. Tribal languages, oral histories, traditional knowledge systems, and cultural practices are intrinsically linked to specific landscapes. When these landscapes are destroyed, intangible cultural heritage is lost forever. Younger generations lose connection to their identity and traditional knowledge.</p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '25px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#991b1b' }}>⚠️ Critical Issue: Environmental Defenders</h4>
                    <p style={{ color: '#b91c1c', fontSize: '0.95em' }}>According to Global Witness, at least 227 environmental defenders were killed in 2020 alone—the highest recorded number—with many victims being indigenous people protecting their forests from illegal logging, mining, and agribusiness. This violence, often with impunity, represents a human rights crisis linked directly to deforestation.</p>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#9a3412' }}>⚠️ Common Misconceptions</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold' }}>Misconception #1: "We can just replant trees to reverse deforestation"</p>
                            <p style={{ fontSize: '0.9em', color: '#ea580c' }}><strong>Reality:</strong> Newly planted trees cannot replicate the biodiversity or carbon storage of old-growth forests for centuries. Monocultures lack the resilience of natural forests.</p>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold' }}>Misconception #2: "Deforestation is necessary for economic development"</p>
                            <p style={{ fontSize: '0.9em', color: '#ea580c' }}><strong>Reality:</strong> Intact forests provide $125 trillion/year in services (water, climate). Every $1 invested in conservation generates $7-10 in benefits.</p>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* CASE STUDIES SECTION */}
                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '40px 0' }}>
                    <h2 style={{ margin: 0, color: '#075985', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        🔍 Real-World Case Studies
                    </h2>
                </div>

                {/* CASE STUDY 1 */}
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h3 style={{ color: '#0369a1' }}>Case Study 1: Amazon Rainforest Deforestation - Brazil</h3>
                    <p>The Amazon rainforest, covering 5.5 million km², is Earth's largest tropical rainforest. It produces 20% of the world's oxygen and stores 150-200 billion tons of carbon.</p>

                    <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '12px', margin: '20px 0' }}>
                        <h4 style={{ color: '#0369a1', marginTop: 0 }}>🌲 Drivers of Deforestation</h4>
                        <ul style={{ fontSize: '0.9em', color: '#4b5563' }}>
                            <li><strong>Cattle Ranching (80%):</strong> Single largest driver; Brazil is the world's top beef exporter.</li>
                            <li><strong>Soy Cultivation (5-10%):</strong> Expand primarily onto former pastureland.</li>
                            <li><strong>Infrastructure:</strong> Highways (BR-163) and Dams (Belo Monte) fragment the forest.</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '12px', border: '1px solid #fecdd3', margin: '20px 0' }}>
                        <h4 style={{ color: '#9f1239', marginTop: 0 }}>🌡️ Environmental Consequences</h4>
                        <p style={{ fontSize: '0.9em' }}><strong>Tipping Point:</strong> Beyond 20-25% deforestation could trigger irreversible "savannization". Higher dry seasons are already affecting São Paulo's water security.</p>
                    </div>

                    <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #0369a1', margin: '20px 0' }}>
                        <p style={{ fontSize: '0.9em', margin: 0 }}><strong>🌍 Amazon Deforestation Explained:</strong> Detailed analysis by Vox (8:47) - Learn about political, economic, and environmental factors driving destruction.</p>
                    </div>
                </div>

                {/* CASE STUDY 2 */}
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h3 style={{ color: '#1f293b' }}>Case Study 2: Coal Mining in Jharia Coalfields - India</h3>
                    <p>The Jharia Coalfield in Jharkhand represents one of the most extreme examples of mining-driven degradation. It contains high-quality coking coal but suffers from a fire burning since 1916.</p>

                    <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '20px 0' }}>
                        <h4 style={{ color: '#991b1b', marginTop: 0 }}>🔥 The Underground Fire Crisis</h4>
                        <p style={{ fontSize: '0.9em' }}>70 active fire sites cover 17 km², emitting toxic gases. Ground collapse (subsidence) has destroyed entire buildings and claimed lives.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                            <h4 style={{ fontSize: '1em', marginTop: 0 }}>🏥 Health Impacts</h4>
                            <p style={{ fontSize: '0.85em', color: '#475569' }}>Respiratory diseases (asthma, silicosis) affect 40-50% of residents. Cancer rates are significantly elevated.</p>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                            <h4 style={{ fontSize: '1em', marginTop: 0 }}>🌊 Contamination</h4>
                            <p style={{ fontSize: '0.85em', color: '#475569' }}>Acid Mine Drainage lowers river pH to 2-3. Heavy metals (arsenic, lead) leach into groundwater.</p>
                        </div>
                    </div>
                </div>

                {/* CASE STUDY 3 */}
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h3 style={{ color: '#166534' }}>Case Study 3: Sardar Sarovar Dam - Narmada Valley, India</h3>
                    <p>India's most controversial dam project, rising 163m and submerging 375 km² of forest and ancestral lands.</p>

                    <div style={{ backgroundColor: '#ecfdf5', padding: '20px', borderRadius: '12px', border: '1px solid #d1fae5', margin: '20px 0' }}>
                        <h4 style={{ color: '#065f46', marginTop: 0 }}>👥 Human Displacement</h4>
                        <p style={{ fontSize: '0.9em' }}>320,000+ people displaced; 60% are Adivasis (tribal people). Loss of forest-based livelihoods (tendu leaves, medicinal plants) led to massive impoverishment.</p>
                    </div>

                    <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #0369a1', margin: '20px 0' }}>
                        <p style={{ fontSize: '0.9em', margin: 0 }}><strong>🌊 Narmada Dam Controversy:</strong> Documentary by WITNESS (12:34) - First-hand accounts from displaced communities and activists.</p>
                    </div>

                    <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Aspect</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Amazon</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Jharia</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Narmada</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Primary Driver</td>
                                    <td style={{ padding: '10px' }}>Cattle/Soy</td>
                                    <td style={{ padding: '10px' }}>Coal Mining</td>
                                    <td style={{ padding: '10px' }}>Hydroelectric Dam</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Tribal Impact</td>
                                    <td style={{ padding: '10px' }}>Cultural Extinction</td>
                                    <td style={{ padding: '10px' }}>Health Crisis</td>
                                    <td style={{ padding: '10px' }}>Forced Displacement</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Reversibility</td>
                                    <td style={{ padding: '10px' }}>Partially Possible</td>
                                    <td style={{ padding: '10px' }}>Irreversible</td>
                                    <td style={{ padding: '10px' }}>Irreversible</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
                        Impact of Dams and Mining on Forests and Tribal people | Case Studies| EVS | Environmental Studies
                    </h4>
                </div>
                <div style={{ maxWidth: '640px', margin: '30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/qzk7R_E9oC4?si=9TZkPekCzZhBU3ks"
                            title="YouTube video player"
                            allowFullScreen
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>

                {/* PRACTICE SECTION */}
                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>🎯 Practice & Apply Your Knowledge</h3>
                    <Quiz
                        title="Module 2.2 Quiz: Deforestation & Case Studies"
                        questions={quizQuestions}
                        subject="ES"
                        unitId={2}
                        moduleId={2}
                    />
                </div>

                <h3>📘 Problem-Solving Practice</h3>

                <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#334155' }}>Problem 1: Carbon Emissions Calculation</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Scenario:</strong> 1,000 hectares cleared. Each hectare stores 200 tons Carbon. 50% released. (1 ton C = 3.67 tons CO₂).</p>
                        <p><strong>Solution:</strong> Total Carbon = 1,000 * 200 = 200,000 tons. Carbon released = 100,000 tons. Total CO₂ = 100,000 * 3.67 = 367,000 tons CO₂.</p>
                    </div>
                </details>

                <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#334155' }}>Problem 2: Displacement Analysis</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Question:</strong> 85,000 people displaced. Estimate tribal count (60%) and economic loss (75%).</p>
                        <p><strong>Solution:</strong> Tribal People = 85,000 * 0.6 = 51,000. Impoverished = 85,000 * 0.75 = 63,750 people.</p>
                    </div>
                </details>

                <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#334155' }}>Problem 3: Comparative Cost-Benefit</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Analysis:</strong> Choose between Option A (Mining - $650M total) vs Option B (Conservation - $45M/year).</p>
                        <p><strong>Solution:</strong> Over 20 years, Option B generates $900M + ecosystem services ($500M) = $1.4B, proving conservation is far more economically sound than short-term extraction.</p>
                    </div>
                </details>

                <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '16px', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#166534' }}>🌱 Solutions & Sustainable Practices</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div>
                            <h4 style={{ color: '#166534' }}>🏛️ Legal Frameworks</h4>
                            <ul style={{ fontSize: '0.9em', color: '#15803d' }}>
                                <li><strong>Forest Rights Act (India):</strong> Vests rights in tribal communities.</li>
                                <li><strong>REDD+ (UN):</strong> Financial incentives for forest conservation.</li>
                                <li><strong>Zero Deforestation:</strong> Corporate supply chain commitments.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#166534' }}>🌲 Forest Management</h4>
                            <ul style={{ fontSize: '0.9em', color: '#15803d' }}>
                                <li><strong>RIL Logging:</strong> Reduces damage by 40-50% during harvest.</li>
                                <li><strong>FSC Certification:</strong> Third-party sustainable wood verification.</li>
                                <li><strong>Community Forestry:</strong> Local management (e.g., Nepal's success).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>📄 Quick Reference Cheat Sheet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>Critical Stats</p>
                            <ul style={{ fontSize: '0.9em', paddingLeft: '20px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '5px' }}>Climate Impact: 15% global emissions</li>
                                <li style={{ marginBottom: '5px' }}>Indigenous: 80% biodiversity on 22% land</li>
                                <li>Amazon Tipping point: 20-25%</li>
                            </ul>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>Case Study Keys</p>
                            <ul style={{ fontSize: '0.9em', paddingLeft: '20px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '5px' }}>Amazon: Cattle (80%) driver</li>
                                <li style={{ marginBottom: '5px' }}>Jharia: Underground fires (1916)</li>
                                <li>Narmada: 320k displaced (60% tribal)</li>
                            </ul>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>Exam Strategy</p>
                            <ul style={{ fontSize: '0.9em', paddingLeft: '20px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '5px' }}>Deforestation vs Degradation</li>
                                <li style={{ marginBottom: '5px' }}>Edge Effects explained</li>
                                <li>Savannization concept</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_2;
