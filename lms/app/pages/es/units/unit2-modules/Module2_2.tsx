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
                        <p style={{ fontSize: '0.9em', color: '#4b5563' }}>When forests are cleared or submerged, tribal communities lose access to resources essential for survival. Forest provides 40-60% of the diet for many indigenous groups through hunting, fishing, and gathering of wild foods. Medicinal plants, building materials, tools, and cultural artifacts all come from the forest. Displacement to unfamiliar environments, often urban slums or agricultural settlements, destroys self-sufficient lifestyles and creates dependency on external aid. Traditional skills become worthless, social structures collapse, and poverty, alcoholism, and disease often follow.</p>
                    </div>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#9a3412', marginTop: 0 }}>🕉️ Cultural and Spiritual Impacts</h4>
                        <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Forests contain sacred groves, ancestral burial sites, and locations of religious significance that cannot be replicated elsewhere. Tribal languages, oral histories, traditional knowledge systems, and cultural practices are intrinsically linked to specific landscapes. When these landscapes are destroyed, intangible cultural heritage is lost forever. Younger generations, separated from their ancestral lands, lose connection to their identity and traditional knowledge, leading to cultural erosion within just one or two generations.</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '30px 0' }}>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#9a3412', marginTop: 0 }}>🏥 Health and Wellbeing</h4>
                        <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Studies consistently show deteriorating health outcomes for displaced forest communities. Loss of diverse forest foods leads to malnutrition, particularly among children. Exposure to new diseases from outside populations, combined with loss of traditional medicine access and stress from displacement, increases morbidity and mortality. Mental health impacts include depression, anxiety, and loss of purpose, particularly among elders who witness the destruction of worlds they have known all their lives.</p>
                    </div>
                    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#9a3412', marginTop: 0 }}>⚖️ Legal Rights and Injustice</h4>
                        <p style={{ fontSize: '0.9em', color: '#4b5563' }}>Tribal communities often lack formal legal recognition of their forest tenure, making them vulnerable to displacement without adequate compensation or consent. Even when laws exist (like India's Forest Rights Act 2006), implementation is weak, and powerful economic interests often override community rights. Indigenous peoples worldwide control or manage at least 24% of global land area but hold legally recognized rights to only about 10%. This tenure insecurity enables deforestation projects to proceed despite community opposition.</p>
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
                            <p style={{ fontSize: '0.9em', color: '#ea580c' }}><strong>Reality:</strong> While reforestation is valuable, newly planted trees cannot replicate the biodiversity, ecological complexity, or carbon storage capacity of old-growth forests for decades or centuries. A mature tropical forest contains 300-500 tree species per hectare, thousands of animal species, and complex symbiotic relationships (mycorrhizal networks, pollination systems) that cannot be recreated through tree planting. Additionally, plantations of single species (monocultures) lack the biodiversity and resilience of natural forests, often requiring chemical inputs and providing minimal habitat value.</p>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold' }}>Misconception #2: "Deforestation is necessary for economic development"</p>
                            <p style={{ fontSize: '0.9em', color: '#ea580c' }}><strong>Reality:</strong> This assumes a false dichotomy. Numerous studies demonstrate that intact forests provide greater long-term economic value through ecosystem services (water purification, climate regulation, flood control, pollination, tourism) than short-term extractive uses. Costa Rica, for example, reversed deforestation and boosted its economy through ecotourism and payments for ecosystem services. Research shows that every dollar invested in forest conservation generates $7-10 in economic benefits from ecosystem services alone.</p>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold' }}>Misconception #3: "Tribal people are obstacles to development who prevent forest resource use"</p>
                            <p style={{ fontSize: '0.9em', color: '#ea580c' }}><strong>Reality:</strong> Indigenous territories contain 80% of Earth's remaining biodiversity despite covering only 22% of land area. Communities with secure land tenure have the lowest deforestation rates globally. Far from being obstacles, indigenous peoples are the most effective forest guardians. Their traditional ecological knowledge and sustainable management practices developed over centuries offer solutions to conservation challenges. The real obstacle to sustainable development is short-term extractive thinking, not indigenous stewardship.</p>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold' }}>Misconception #4: "Deforestation is only a tropical problem in faraway countries"</p>
                            <p style={{ fontSize: '0.9em', color: '#ea580c' }}><strong>Reality:</strong> While tropical forests face the highest deforestation rates, the issue is global. Temperate and boreal forests in North America, Europe, and Russia also face logging, mining, and development pressures. Furthermore, deforestation anywhere affects climate globally. Western consumption patterns—demand for beef, soy, palm oil, timber, and minerals—drive much tropical deforestation. Europeans and North Americans are "importing" deforestation through their consumption choices, making this everyone's problem requiring global solutions.</p>
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

                    <h4 style={{ color: '#0369a1' }}>📍 Background &amp; Context</h4>
                    <p>The Amazon rainforest, covering 5.5 million km² across nine countries (primarily Brazil with 60%), is Earth's largest tropical rainforest and most biodiverse ecosystem. It contains approximately 390 billion individual trees representing 16,000 species, produces 20% of the world's oxygen, and stores 150-200 billion tons of carbon. The forest generates its own rainfall through evapotranspiration, influencing weather patterns across South America and globally.</p>

                    <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '12px', margin: '20px 0' }}>
                        <h4 style={{ color: '#0369a1', marginTop: 0 }}>🌲 Drivers of Deforestation</h4>
                        <ul style={{ fontSize: '0.9em', color: '#4b5563' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Cattle Ranching (80% of deforestation):</strong> Brazil is the world's largest beef exporter, and cattle ranching represents the single largest driver of Amazon deforestation. Ranchers clear forest using slash-and-burn techniques to create pasturelands. Land is cheap, beef prices are high, and weak enforcement allows illegal clearing to continue virtually unchecked.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Soy Cultivation (5-10%):</strong> Industrial soy farming, primarily for livestock feed exported to China, Europe, and the US, has expanded dramatically. While direct conversion of forest to soy is now restricted, indirect impacts persist as soy expands onto former pastureland, pushing ranching further into the forest.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Logging Operations (2-3%):</strong> Both legal and illegal logging target valuable hardwoods like mahogany and ipe. Logging roads open previously inaccessible areas to settlers, creating a cascade of further deforestation.</li>
                            <li><strong>Infrastructure Projects:</strong> The Brazilian government's development agenda includes major highways (BR-163, BR-319), hydroelectric dams (Belo Monte, Santo Antônio), and mining operations that fragment the forest and facilitate additional clearing.</li>
                        </ul>
                    </div>

                    <h4 style={{ color: '#0369a1' }}>📊 Scale and Impacts — Quantitative Data</h4>
                    <ul style={{ fontSize: '0.9em', color: '#4b5563' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Total deforestation:</strong> ~17% of original Amazon forest cleared since 1970</li>
                        <li style={{ marginBottom: '8px' }}><strong>Annual deforestation rate:</strong> Peaked at 27,772 km² in 2004, reduced to 4,571 km² by 2012, but increased again to 13,235 km² in 2021</li>
                        <li style={{ marginBottom: '8px' }}><strong>Carbon emissions:</strong> Amazon deforestation contributes approximately 340 million tons of CO₂ annually</li>
                        <li style={{ marginBottom: '8px' }}><strong>Biodiversity loss:</strong> Estimated 137 plant, animal, and insect species extinct daily (though exact figures are disputed)</li>
                        <li><strong>Indigenous impact:</strong> Over 300 indigenous groups totaling ~900,000 people threatened, with some groups numbering fewer than 100 individuals</li>
                    </ul>

                    <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '12px', border: '1px solid #fecdd3', margin: '20px 0' }}>
                        <h4 style={{ color: '#9f1239', marginTop: 0 }}>🌡️ Environmental Consequences</h4>
                        <p style={{ fontSize: '0.9em' }}><strong>Climate Tipping Point:</strong> Scientists warn that deforestation beyond 20-25% could trigger "savannization"—irreversible conversion to dry grassland due to reduced rainfall. We are at 17% and approaching this critical threshold.</p>
                        <p style={{ fontSize: '0.9em' }}><strong>Hydrological Disruption:</strong> The Amazon creates "flying rivers"—atmospheric moisture that provides rainfall for southern Brazil and neighboring countries. Deforestation is already causing longer dry seasons and more severe droughts in São Paulo and other major cities.</p>
                        <p style={{ fontSize: '0.9em' }}><strong>Biodiversity Crisis:</strong> The Amazon contains 10% of all species on Earth. Deforestation fragments habitats, isolating populations and reducing genetic diversity. Edge effects penetrate 300m into remaining forest, degrading far more area than directly cleared.</p>
                        <p style={{ fontSize: '0.9em', marginBottom: 0 }}><strong>Soil Degradation:</strong> Amazonian soils are surprisingly nutrient-poor, with most nutrients locked in the forest biomass. When cleared, these soils quickly degrade, becoming unproductive within 5-10 years, driving further forest clearing.</p>
                    </div>

                    <h4 style={{ color: '#0369a1' }}>👥 Impact on Indigenous Communities</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}>The Amazon is home to over 400 indigenous groups, including dozens of "uncontacted" peoples who have chosen isolation. Deforestation directly threatens their survival:</p>
                    <ul style={{ fontSize: '0.9em', color: '#4b5563' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Yanomami People:</strong> Facing illegal gold miners (garimpeiros) who bring violence, disease (malaria, COVID-19), and mercury poisoning through river contamination</li>
                        <li style={{ marginBottom: '8px' }}><strong>Kayapo Territory:</strong> Surrounded by deforestation, creating islands of forest under siege from loggers and ranchers</li>
                        <li style={{ marginBottom: '8px' }}><strong>Munduruku Resistance:</strong> Fighting the São Luiz do Tapajós dam that would flood 400 km² of their territory</li>
                        <li><strong>Uncontacted Tribes:</strong> Satellite imagery reveals isolated communities whose territories are shrinking as deforestation encroaches, forcing them into potentially deadly contact with outsiders</li>
                    </ul>

                    <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '20px 0' }}>
                        <h4 style={{ color: '#166534', marginTop: 0 }}>💡 Key Lessons</h4>
                        <ul style={{ fontSize: '0.9em', color: '#15803d', margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}>Economic incentives (beef, soy profits) overwhelm environmental regulations without strong enforcement</li>
                            <li style={{ marginBottom: '8px' }}>Indigenous territories with secure tenure have significantly lower deforestation rates than unprotected areas</li>
                            <li style={{ marginBottom: '8px' }}>International consumer demand (especially for beef and soy) drives deforestation thousands of miles away</li>
                            <li style={{ marginBottom: '8px' }}>Forest protection policies work: deforestation decreased 80% from 2004-2012 under strong enforcement, but resumed when political will weakened</li>
                            <li>We may be approaching an irreversible ecological tipping point with global climate consequences</li>
                        </ul>
                    </div>
                </div>

                {/* CASE STUDY 2 */}
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h3 style={{ color: '#1f293b' }}>Case Study 2: Coal Mining in Jharia Coalfields - India</h3>

                    <h4>📍 Background &amp; Context</h4>
                    <p>The Jharia Coalfield in Jharkhand, India, represents one of the most extreme examples of mining-driven deforestation and environmental degradation. Covering approximately 280 km², Jharia contains some of India's highest-quality coking coal, essential for steel production. However, it's also site of an underground fire that has burned continuously since 1916, consuming an estimated 37 million tons of coal and rendering vast areas uninhabitable.</p>

                    <h4>⛏️ Mining Operations and Deforestation Process</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Historical Development:</strong> British colonial mining began in 1894, prioritizing extraction over environmental concerns. Post-independence, coal demand for industrialization accelerated mining, with both underground and opencast methods employed. Bharat Coking Coal Limited (BCCL) manages most operations, producing 28-30 million tons annually.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Deforestation Extent:</strong> The region once contained dense sal (Shorea robusta) forests characteristic of the Chota Nagpur plateau. Systematic clearing for mine access, worker settlements, and waste disposal has eliminated virtually all natural forest within the core coalfield. Estimates suggest 90% forest loss in the mining zone since the 1950s.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Environmental Destruction:</strong> Opencast mining creates massive excavations up to 300m deep. Overburden (waste rock) is dumped in huge piles that smother surrounding vegetation. Underground fires emit toxic gases (carbon monoxide, sulfur dioxide, nitrogen oxides) and particulate matter, creating air quality far exceeding safe limits.</p>

                    <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2', margin: '20px 0' }}>
                        <h4 style={{ color: '#991b1b', marginTop: 0 }}>🔥 The Underground Fire Crisis</h4>
                        <p style={{ fontSize: '0.9em' }}><strong>Origin:</strong> Fires started from spontaneous combustion (coal oxidation), negligent mining practices, and deliberate burning to access coal. Once ignited, they are virtually impossible to extinguish due to extensive underground coal seams.</p>
                        <p style={{ fontSize: '0.9em' }}><strong>Extent:</strong> 70 active fire sites covering approximately 17 km², with surface temperatures exceeding 300°C in places.</p>
                        <p style={{ fontSize: '0.9em' }}><strong>Emissions:</strong> Continuous emission of greenhouse gases (CO₂, methane) and toxic pollutants. Air quality monitoring shows PM2.5 levels 10-15 times higher than safe limits.</p>
                        <p style={{ fontSize: '0.9em', marginBottom: 0 }}><strong>Land Subsidence:</strong> Burning coal creates underground voids, causing sudden ground collapse that has destroyed buildings and claimed lives.</p>
                    </div>

                    <h4>👥 Social Impact: Displacement and Health</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Population Affected:</strong> Approximately 100,000 people live in fire-affected areas, with over 300,000 in the broader coalfield region. Many are descendants of mining workers or indigenous communities displaced by earlier industrial expansion.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '15px 0' }}>
                        <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                            <h4 style={{ fontSize: '1em', marginTop: 0 }}>🏥 Health Crisis</h4>
                            <ul style={{ fontSize: '0.85em', color: '#475569', margin: 0, paddingLeft: '18px' }}>
                                <li style={{ marginBottom: '5px' }}>Respiratory diseases (asthma, chronic bronchitis, silicosis) affect 40-50% of residents</li>
                                <li style={{ marginBottom: '5px' }}>Cancer rates, particularly lung cancer, significantly elevated compared to national averages</li>
                                <li style={{ marginBottom: '5px' }}>Children show stunted growth and cognitive impairment from chronic air pollution exposure</li>
                                <li>Mental health impacts: anxiety about sudden subsidence, fires, or forced relocation</li>
                            </ul>
                        </div>
                        <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                            <h4 style={{ fontSize: '1em', marginTop: 0 }}>� Displacement Issues</h4>
                            <ul style={{ fontSize: '0.85em', color: '#475569', margin: 0, paddingLeft: '18px' }}>
                                <li style={{ marginBottom: '5px' }}>Government relocation plans announced repeatedly but poorly implemented</li>
                                <li style={{ marginBottom: '5px' }}>Compensation inadequate to purchase equivalent housing elsewhere</li>
                                <li style={{ marginBottom: '5px' }}>Many residents refuse relocation despite risks, fearing loss of livelihood and community</li>
                                <li>Relocated families often face unemployment as new settlements lack employment opportunities</li>
                            </ul>
                        </div>
                    </div>

                    <h4>🌊 Water and Soil Contamination</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Acid Mine Drainage:</strong> Sulfur in coal reacts with water and oxygen to produce sulfuric acid, lowering water pH to 2-3 in some water bodies—acidic enough to dissolve metal. Heavy metals (arsenic, lead, mercury) leach into groundwater, making it toxic for consumption or irrigation.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Surface Water Pollution:</strong> The Damodar River and its tributaries receive mine effluents, sedimentation from erosion, and coal particulates. Fish populations have collapsed, and water is unsafe for human use downstream.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Soil Degradation:</strong> Ash, heavy metals, and acidic compounds render soil sterile. Agricultural lands adjacent to mining areas show reduced productivity, with some crops accumulating toxic metals, entering the food chain.</p>

                    <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '20px 0' }}>
                        <h4 style={{ color: '#166534', marginTop: 0 }}>💡 Key Lessons from Jharia</h4>
                        <ul style={{ fontSize: '0.9em', color: '#15803d', margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}>Short-term economic benefits of resource extraction create long-term environmental and social costs far exceeding initial gains</li>
                            <li style={{ marginBottom: '8px' }}>Once environmental damage reaches certain thresholds (underground fires, acid mine drainage), remediation becomes practically impossible with current technology</li>
                            <li style={{ marginBottom: '8px' }}>Regulatory failure: despite numerous laws (Forest Conservation Act, Air/Water Acts), enforcement remains weak when economic interests are powerful</li>
                            <li style={{ marginBottom: '8px' }}>Marginalized communities (often tribal or low-caste) bear disproportionate burdens of environmental degradation while receiving minimal benefits</li>
                            <li>Energy transition away from coal is not just a climate imperative but an environmental justice necessity</li>
                        </ul>
                    </div>
                </div>

                {/* CASE STUDY 3 */}
                <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eee', margin: '30px 0' }}>
                    <h3 style={{ color: '#166534' }}>Case Study 3: Sardar Sarovar Dam - Narmada Valley, India</h3>

                    <h4 style={{ color: '#166534' }}>📍 Background &amp; Context</h4>
                    <p>The Sardar Sarovar Project on the Narmada River represents India's most controversial dam project and a defining case study in the conflict between large-scale development and environmental/social justice. Part of the larger Narmada Valley Development Project (comprising 30 large dams, 135 medium dams, and 3,000 small dams), Sardar Sarovar is the largest dam on the river, with a height of 163 meters and a reservoir covering 375 km².</p>

                    <h4>🏗️ Project Scale and Deforestation Impact</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Construction Timeline:</strong> Project planning began in 1961, foundation stone laid in 1987, construction plagued by controversies and legal battles, dam finally inaugurated in 2017. Each height increase of the dam submerged additional forest and villages.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Forest Submergence:</strong> The reservoir has submerged approximately 37,533 hectares of forest land across Gujarat, Maharashtra, and Madhya Pradesh. This includes dense teak and mixed deciduous forests of the Narmada valley that supported rich biodiversity.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Biodiversity Loss:</strong> The submerged forests were habitat for tigers, leopards, sloth bears, wild boar, various deer species, 180+ bird species, and endemic plants. The Maheshwar gharial (fish-eating crocodile), already endangered, lost critical habitat. Hilsa fish migration was disrupted, affecting river ecology and fishing communities.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Infrastructure Footprint:</strong> Beyond the reservoir, the project required extensive deforestation for access roads, construction sites, worker colonies, transmission lines for 1,450 MW power generation, and canal networks stretching 458 km with 75,000 km of distributaries.</p>

                    <div style={{ backgroundColor: '#ecfdf5', padding: '20px', borderRadius: '12px', border: '1px solid #d1fae5', margin: '20px 0' }}>
                        <h4 style={{ color: '#065f46', marginTop: 0 }}>👥 Human Displacement: Scale and Suffering</h4>
                        <p style={{ fontSize: '0.9em' }}><strong>Displacement Numbers:</strong> Official estimates acknowledge 40,000 families (approximately 200,000-250,000 people) directly displaced. Independent estimates by Narmada Bachao Andolan (NBA) and researchers suggest the actual number exceeds 320,000 when including those affected by canals, downstream impacts, and indirect displacement.</p>
                        <p style={{ fontSize: '0.9em' }}><strong>Tribal Communities — Approximately 60% of displaced are Adivasis (tribal people):</strong> Bhils, Bhilalas, and other groups who have inhabited the Narmada valley for centuries.</p>
                        <ul style={{ fontSize: '0.9em', margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><strong>Cultural Loss:</strong> Submergence of 248 villages included ancestral lands, burial grounds, sacred sites, and forests integral to Adivasi identity and spiritual practices. Many communities practice animism tied to specific trees, groves, and landscapes now underwater.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Livelihood Destruction:</strong> Forest-based livelihoods (collection of tendu leaves, mahua flowers, medicinal plants, fuelwood, bamboo) became impossible. Agriculture on valley's fertile alluvial soil replaced by inferior land in resettlement sites.</li>
                            <li><strong>Social Fragmentation:</strong> Communities dispersed across multiple resettlement sites, breaking social networks, extended family systems, and traditional governance structures.</li>
                        </ul>
                    </div>

                    <h4>⚖️ Resettlement and Rehabilitation Failures</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Inadequate Compensation:</strong> Cash compensation based on outdated land valuations, often insufficient to purchase equivalent agricultural land elsewhere. Many landless families (laborers, artisans) received minimal or no compensation.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Resettlement Site Problems:</strong> Relocation sites often lacked basic infrastructure (water, electricity, roads, schools, health centers). Promised agricultural land frequently of poor quality, water-scarce, or already occupied by other communities, creating conflicts.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Impoverishment:</strong> Studies show 70-80% of displaced families experienced reduced income and living standards post-displacement. Transition from subsistence farming and forest gathering to cash economy without skills or opportunities led to debt, food insecurity, and poverty.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Legal Battles:</strong> The Narmada Bachao Andolan (NBA), led by Medha Patkar, fought a decades-long legal and social battle. Supreme Court hearings, international protests, and hunger strikes brought global attention but ultimately failed to halt the project.</p>

                    <h4>🌍 Environmental and Downstream Impacts</h4>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Altered Hydrology:</strong> Seasonal flooding that replenished soil nutrients and supported downstream agriculture was eliminated. Reduced water flow to downstream states affected irrigation and drinking water. Estuarine ecosystems at river mouth degraded due to reduced sediment and freshwater input, allowing saltwater intrusion.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Seismic Concerns:</strong> The region lies in a moderate seismic zone. Loading 9.5 billion cubic meters of water in the reservoir raised concerns about reservoir-induced seismicity (earthquakes triggered by large water bodies). While major seismic events haven't occurred, the risk remains.</p>
                    <p style={{ fontSize: '0.9em', color: '#4b5563' }}><strong>Greenhouse Gas Emissions:</strong> Decomposition of submerged vegetation in the tropical reservoir releases methane. Studies suggest tropical reservoirs can emit more greenhouse gases per unit energy than coal plants during their first 10-20 years, contradicting the "clean energy" narrative.</p>

                    <h4>🎯 Promised Benefits vs. Reality</h4>
                    <div style={{ overflowX: 'auto', marginTop: '10px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Promised Benefit</th>
                                    <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Reality / Actual Outcome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Irrigation to 1.8 million hectares</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Only ~40% of command area actually receiving canal water; waterlogging and salinization in some irrigated areas</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Drinking water to 8,215 villages &amp; 135 urban centers</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Many villages still lack pipeline connections; water quality issues in some areas; benefits concentrated in water-scarce Gujarat, not displacing states</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>1,450 MW power generation</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Power generation achieved but benefits accrue to industrial/urban consumers, not displaced rural communities</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Flood control</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Questionable as Narmada's flooding wasn't historically severe; downstream drought risks now increased</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Full resettlement and rehabilitation</td>
                                    <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Thousands of families still awaiting proper rehabilitation 35+ years later; many live in poverty in urban slums</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '20px 0' }}>
                        <h4 style={{ color: '#166534', marginTop: 0 }}>💡 Key Lessons from Sardar Sarovar</h4>
                        <ul style={{ fontSize: '0.9em', color: '#15803d', margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><strong>Development Asymmetry:</strong> Benefits accrue to already developed regions (urban Gujarat) while costs (displacement, forest loss) borne by marginalized communities in less developed regions</li>
                            <li style={{ marginBottom: '8px' }}><strong>Inadequate EIA:</strong> Environmental and Social Impact Assessments conducted were superficial, underestimating displacement and environmental damage. Independent review mechanisms are essential.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Power of Resistance:</strong> The NBA demonstrated that affected communities can challenge powerful state projects, bringing international attention to displacement and environmental issues, though they couldn't stop the dam.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Alternatives Ignored:</strong> Decentralized water management (watershed development, small check dams, rainwater harvesting) could have achieved benefits at lower social and environmental costs.</li>
                            <li><strong>Intergenerational Injustice:</strong> Young people born after displacement live with consequences of decisions made before their birth, separated from ancestral lands and cultural heritage they never experienced.</li>
                        </ul>
                    </div>
                </div>

                {/* COMPARATIVE ANALYSIS TABLE */}
                <h3>📊 Comparative Analysis of Case Studies</h3>
                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Aspect</th>
                                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Amazon (Brazil)</th>
                                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Jharia (India)</th>
                                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Sardar Sarovar (India)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Primary Driver</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Cattle ranching, agriculture (soy), logging</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Coal mining (opencast and underground)</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Hydroelectric dam and irrigation project</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Scale of Impact</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>~750,000 km² deforested (17% of total)</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>~90% forest loss in 280 km² coalfield</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>37,533 hectares forest submerged</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Economic Motivation</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Export agriculture (beef, soy) worth $20+ billion annually</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Coking coal for steel industry, ~30 million tons/year</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Power generation (1,450 MW), irrigation (1.8M ha planned)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Biodiversity Impact</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Extreme - 10% of world's species, many endemic</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Moderate - regional fauna/flora eliminated locally</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Significant - endemic species, river ecology disrupted</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Human Displacement</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>~900,000 indigenous people threatened, territory invaded</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>~100,000 living in hazardous fire zones, partial displacement</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>200,000-320,000 people displaced from 248 villages</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Tribal Impact</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>400+ indigenous groups, cultural extinction risk for smallest</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Displacement of indigenous communities, health crisis</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>60% displaced are Adivasis, cultural heritage submerged</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Reversibility</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Partially - secondary forest regrowth possible, old-growth cannot be replaced</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Practically irreversible - underground fires, soil contamination</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Irreversible - permanent submergence, ecosystem transformation</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Climate Impact</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Major - 340M tons CO₂/year, risk of savannization</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Moderate - coal fires emit GHGs, particulates</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Moderate - reservoir methane emissions, reduced carbon sink</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Water Impact</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Reduced rainfall, drought risk, regional climate change</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Severe acid mine drainage, groundwater contamination</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Altered river hydrology, downstream water stress</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Legal Framework</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Forest Code (weak enforcement), indigenous rights recognized but violated</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Forest Act, pollution laws (poorly enforced), coal mining prioritized</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Displacement laws inadequate, NBA legal battles partially successful</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>International Attention</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>High - global concern over climate and biodiversity</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Low - primarily national concern</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>High - World Bank withdrew funding after criticism, global protests</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #ddd' }}>Resistance Movement</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Indigenous organizations, international NGOs (WWF, Greenpeace)</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Weak organized resistance, health activism</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Strong - Narmada Bachao Andolan (NBA), Medha Patkar leadership</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '20px 0' }}>
                    <h4 style={{ marginTop: 0 }}>Common Patterns Across All Cases:</h4>
                    <ul style={{ fontSize: '0.9em', color: '#4b5563' }}>
                        <li style={{ marginBottom: '8px' }}>Economic interests of powerful groups (agribusiness, mining companies, state development projects) override environmental and social concerns</li>
                        <li style={{ marginBottom: '8px' }}>Marginalized communities (indigenous, tribal, poor) bear disproportionate costs while receiving minimal benefits</li>
                        <li style={{ marginBottom: '8px' }}>Environmental Impact Assessments often inadequate, biased, or ignored in implementation</li>
                        <li style={{ marginBottom: '8px' }}>Promised mitigation measures (reforestation, rehabilitation) poorly implemented</li>
                        <li style={{ marginBottom: '8px' }}>Long-term environmental costs (climate, biodiversity, water) not factored into economic calculations</li>
                        <li style={{ marginBottom: '8px' }}>Once damage occurs, restoration is extremely difficult, expensive, or impossible</li>
                        <li>Resistance movements achieve awareness and partial victories but rarely stop projects entirely</li>
                    </ul>
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

                <details style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #dcfce7' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#166534' }}>📗 Easy Problem: Carbon Emissions Calculation</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Problem:</strong> A tropical forest area of 1,000 hectares is cleared for cattle ranching. If each hectare of tropical forest stores approximately 200 tons of carbon in biomass, and 50% of this carbon is released as CO₂ during clearing (burning and decomposition), calculate the total CO₂ emissions from this deforestation event.</p>
                        <p style={{ backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '8px', borderLeft: '4px solid #0369a1' }}><strong>Note:</strong> The molecular weight of CO₂ (44) is 3.67 times the atomic weight of carbon (12), so 1 ton of carbon = 3.67 tons of CO₂.</p>
                        <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold', marginTop: 0 }}>Solution:</p>
                            <p><strong>Step 1:</strong> Calculate total carbon stored<br />
                                Total carbon = Area × Carbon per hectare<br />
                                Total carbon = 1,000 hectares × 200 tons/hectare = <strong>200,000 tons of carbon</strong></p>
                            <p><strong>Step 2:</strong> Calculate carbon released (50% of stored carbon)<br />
                                Carbon released = 200,000 tons × 0.50 = <strong>100,000 tons of carbon</strong></p>
                            <p><strong>Step 3:</strong> Convert carbon to CO₂ emissions<br />
                                CO₂ emissions = Carbon released × 3.67<br />
                                CO₂ emissions = 100,000 tons × 3.67 = <strong>367,000 tons of CO₂</strong></p>
                            <p style={{ backgroundColor: '#dcfce7', padding: '10px', borderRadius: '6px' }}><strong>Final Answer:</strong> The deforestation of 1,000 hectares releases <strong>367,000 tons of CO₂</strong> into the atmosphere.</p>
                            <p><strong>Context:</strong> This is equivalent to the annual emissions from approximately 79,000 passenger vehicles. This demonstrates how deforestation is a major contributor to climate change, responsible for about 15% of global greenhouse gas emissions.</p>
                        </div>
                    </div>
                </details>

                <details style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #ffedd5' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#9a3412' }}>📙 Medium Problem: Displacement Analysis</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Problem:</strong> A proposed dam project will submerge 15,000 hectares of forest area containing 120 villages with a total population of 85,000 people. Based on the Sardar Sarovar case study, where approximately 60% of displaced people were tribal communities and resettlement has been problematic:</p>
                        <ol>
                            <li>Calculate the estimated number of tribal people who will be displaced.</li>
                            <li>If studies show that 75% of displaced families experience reduced income post-displacement, estimate how many people will face economic impoverishment.</li>
                            <li>Discuss three major challenges these displaced tribal communities will likely face based on case study evidence.</li>
                        </ol>
                        <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold', marginTop: 0 }}>Solution:</p>
                            <p><strong>Part (a): Tribal displacement calculation</strong><br />
                                Tribal population = Total population × Percentage tribal<br />
                                Tribal population = 85,000 × 0.60 = <strong>51,000 tribal people displaced</strong></p>
                            <p><strong>Part (b): Economic impoverishment calculation</strong><br />
                                People facing impoverishment = Total population × Percentage experiencing reduced income<br />
                                People facing impoverishment = 85,000 × 0.75 = <strong>63,750 people</strong><br />
                                This includes both tribal and non-tribal communities.</p>
                            <p><strong>Part (c): Major challenges (based on Sardar Sarovar case study):</strong></p>
                            <p><strong>1. Livelihood Destruction and Economic Impoverishment:</strong> Tribal communities traditionally depend on forest resources for 40-60% of their subsistence—hunting, fishing, gathering medicinal plants, collecting non-timber forest products (NTFP) like mahua flowers, tendu leaves, bamboo, and small-scale agriculture on fertile valley lands. When displaced to resettlement sites, these livelihood options disappear. Promised agricultural land is often of poor quality, water-scarce, or already occupied, creating conflicts. Without skills for wage labor or cash economy participation, families fall into poverty, debt, and food insecurity. Studies from Sardar Sarovar show 70-80% of displaced families experienced reduced income and living standards.</p>
                            <p><strong>2. Cultural Erosion and Loss of Identity:</strong> Submergence destroys ancestral lands, sacred groves, burial sites, and locations tied to spiritual practices and oral histories. Tribal languages, traditional knowledge systems, and cultural practices are intrinsically linked to specific landscapes. When communities are dispersed to different resettlement sites, social networks fragment, extended families separate, and traditional governance structures collapse. Young people growing up in resettlement sites lose connection to cultural heritage, traditional ecological knowledge, and community identity. Within one to two generations, languages and cultural practices can be lost entirely.</p>
                            <p><strong>3. Inadequate Resettlement and Social Marginalization:</strong> Based on Sardar Sarovar evidence, resettlement sites frequently lack basic infrastructure (water, electricity, roads, schools, health centers). Compensation based on outdated land valuations is insufficient to purchase equivalent land elsewhere. Landless community members (laborers, artisans) receive minimal or no compensation. Legal battles for proper rehabilitation can extend for decades, with many families still awaiting adequate resettlement 35+ years later. Displaced communities often end up in urban slums or unfamiliar rural areas where they face discrimination, social isolation, and loss of community support systems that previously provided security.</p>
                            <div style={{ backgroundColor: '#fef9c3', padding: '10px', borderRadius: '6px' }}>
                                <p style={{ margin: 0 }}><strong>Final Answer Summary:</strong></p>
                                <p style={{ margin: '5px 0 0 0' }}>a) Approximately 51,000 tribal people will be displaced<br />
                                    b) Approximately 63,750 people will likely face economic impoverishment<br />
                                    c) Major challenges include livelihood destruction, cultural erosion, and inadequate resettlement infrastructure</p>
                            </div>
                        </div>
                    </div>
                </details>

                <details style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #fee2e2' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#991b1b' }}>📕 Hard Problem: Comparative Cost-Benefit Analysis</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Problem:</strong> You are an environmental consultant asked to evaluate two competing proposals for a 50,000-hectare forested region in a biodiversity hotspot:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '15px 0' }}>
                            <div style={{ backgroundColor: '#fef2f2', padding: '15px', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                                <p style={{ fontWeight: 'bold', marginTop: 0, color: '#991b1b' }}>Option A – Logging and Mining</p>
                                <ul style={{ margin: 0, paddingLeft: '18px' }}>
                                    <li>Timber revenue: $150 million over 5 years</li>
                                    <li>Mining revenue: $500 million over 20 years</li>
                                    <li>Jobs: 5,000 direct, 10,000 indirect</li>
                                    <li>100% forest removal, 3,000 tribal families displaced, water contamination for 50,000 downstream, carbon sequestration loss worth $80M</li>
                                </ul>
                            </div>
                            <div style={{ backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                                <p style={{ fontWeight: 'bold', marginTop: 0, color: '#166534' }}>Option B – Conservation with Sustainable Use</p>
                                <ul style={{ margin: 0, paddingLeft: '18px' }}>
                                    <li>Ecotourism: $15 million/year (indefinitely)</li>
                                    <li>REDD+ carbon credits: $30 million/year</li>
                                    <li>Jobs: 2,500 direct, 7,500 indirect</li>
                                    <li>Forest preserved, no displacement, ecosystem services ($25M/year) maintained</li>
                                </ul>
                            </div>
                        </div>
                        <p><strong>Tasks:</strong> (a) Calculate total economic value over 20 years. (b) Calculate value per job. (c) Perform a comprehensive multi-factor analysis and make a recommendation.</p>
                        <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold', marginTop: 0 }}>Comprehensive Solution:</p>
                            <p><strong>Part (a): Economic Value Calculation (20-year timeframe)</strong></p>
                            <p><strong>Option A – Logging and Mining:</strong><br />
                                Revenues: Timber $150M + Mining $500M = <strong>$650M total revenue</strong><br />
                                Costs: Carbon loss $80M + Lost ecosystem services ($25M × 20 = $500M) + Rehabilitation (3,000 families × $10,000 = $30M) + Water treatment ($5M × 20 = $100M) = <strong>$710M total costs</strong><br />
                                <strong>Net = $650M – $710M = –$60 million (NET LOSS)</strong></p>
                            <p><strong>Option B – Conservation with Sustainable Use:</strong><br />
                                Revenue: Ecotourism ($15M × 20 = $300M) + REDD+ ($30M × 20 = $600M) + Ecosystem services ($25M × 20 = $500M) = <strong>$1,400M total value</strong><br />
                                Costs: Conservation management ($3M × 20 = $60M) + Community programs ($2M × 20 = $40M) = <strong>$100M total costs</strong><br />
                                <strong>Net = $1,400M – $100M = $1,300 million (NET GAIN)</strong></p>
                            <p><strong>Part (b): Value Per Job Created</strong><br />
                                Option A: 15,000 jobs, –$60M net → <strong>–$4,000 per job</strong> (each job costs society $4,000)<br />
                                Option B: 10,000 jobs, $1,300M net → <strong>$130,000 per job</strong> created in net value over 20 years</p>
                            <p><strong>Part (c): Comprehensive Multi-Factor Analysis</strong></p>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f1f5f9' }}>
                                            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Factor</th>
                                            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', color: '#991b1b' }}>Option A (Mining)</th>
                                            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', color: '#166534' }}>Option B (Conservation)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Economic (20 years)</td><td style={{ padding: '8px', border: '1px solid #ddd', color: '#991b1b' }}>–$60 million (NET LOSS)</td><td style={{ padding: '8px', border: '1px solid #ddd', color: '#166534' }}>+$1,300 million (NET GAIN)</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Job Quality</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Temporary (20 yrs), hazardous, health risks</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Sustainable indefinitely, safer, skill development</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Social Impact</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>3,000 families displaced, cultural destruction, water crisis for 50,000</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>No displacement, community empowerment, livelihoods improved</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Environmental</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>100% forest loss, irreversible contamination</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Forest preserved, ecosystem services maintained</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Climate Impact</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Major carbon emissions from deforestation + mining</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Continued carbon sequestration, climate mitigation</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Intergenerational Equity</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Current generation profits, future inherits degraded land</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Forest preserved for future generations indefinitely</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Reversibility</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Irreversible – contamination persists centuries</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Reversible – adaptable without permanent damage</td></tr>
                                        <tr><td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Risk</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>High – accidents, disasters, commodity price volatility</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Lower – diversified income, adaptable to market changes</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ backgroundColor: '#dcfce7', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                                <p style={{ fontWeight: 'bold', marginTop: 0, color: '#166534' }}>✅ RECOMMENDATION: Option B (Conservation with Sustainable Use)</p>
                                <p><strong>Superior Economics:</strong> Option B generates $1.3 billion net gain vs. $60 million net loss for Option A over 20 years. The economic case is clear and overwhelming.</p>
                                <p><strong>Sustainability:</strong> Mining revenues end after resource depletion (20 years), leaving contaminated land, unemployment, and social problems. Conservation revenues continue indefinitely.</p>
                                <p><strong>Social Justice:</strong> Option A displaces 3,000 tribal families, destroying cultures and livelihoods. Option B empowers local communities and preserves cultural heritage.</p>
                                <p><strong>Environmental Integrity:</strong> In a biodiversity hotspot, species extinction is irreversible. The precautionary principle demands we avoid irreversible damage when sustainable alternatives exist.</p>
                                <p style={{ marginBottom: 0 }}><strong>Conclusion:</strong> Option B is superior on every metric—economic, environmental, social, and ethical. Sustainable conservation-based development generates greater value while preserving irreplaceable natural and cultural heritage for future generations.</p>
                            </div>
                        </div>
                    </div>
                </details>

                <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '16px', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#166534' }}>🌱 Solutions &amp; Sustainable Practices</h3>
                    <p style={{ color: '#4b5563', marginBottom: '25px' }}>Understanding deforestation problems is crucial, but equally important is knowing effective solutions. Here we explore proven strategies and emerging approaches to combat deforestation while supporting sustainable development.</p>

                    <h4 style={{ color: '#166534' }}>1. 🏛️ Legal and Policy Frameworks</h4>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Forest Rights Act, 2006 (India):</strong> Recognizes and vests forest rights in forest-dwelling communities, allowing them to protect forests from encroachment. When properly implemented, this empowers tribal communities and reduces illegal logging. However, implementation remains weak in many states.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Forest Conservation Act, 1980 (India):</strong> Prohibits forest land conversion without central government approval. Requires compensatory afforestation—planting trees on equivalent non-forest land when forest is diverted for development. While well-intentioned, compensatory afforestation cannot replicate mature forest ecosystems.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>REDD+ (Reducing Emissions from Deforestation and Forest Degradation):</strong> UN framework providing financial incentives to developing countries for forest conservation. Countries receive payment for verified carbon emissions reductions. Brazil's Amazon Fund, supported by Norway and Germany, contributed to 80% deforestation reduction from 2004-2012.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Zero Deforestation Commitments:</strong> Over 470 companies have made commitments to eliminate deforestation from their supply chains by 2020-2030. Companies like Unilever, Nestlé, and Walmart pledged to source palm oil, soy, and beef from deforestation-free sources. However, monitoring and enforcement remain challenging.</p>

                    <h4 style={{ color: '#166534', marginTop: '20px' }}>2. 🌲 Sustainable Forest Management</h4>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Reduced Impact Logging (RIL):</strong> Techniques that minimize collateral damage during timber extraction: directional felling (planning tree fall direction), vine cutting before felling, planned skid trails, and worker training. RIL reduces damage by 40-50% compared to conventional logging while maintaining timber yields.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Forest Certification (FSC, PEFC):</strong> Third-party verification that timber comes from sustainably managed forests. Forest Stewardship Council (FSC) certification requires maintaining biodiversity, respecting indigenous rights, and sustainable harvest rates. Consumers can choose certified products, creating market incentives for sustainable forestry.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Community Forestry:</strong> Transferring forest management to local communities rather than centralized government or private companies. Nepal's community forestry program has reversed deforestation—1.45 million households manage 1.6 million hectares with forest condition improving and rural incomes increasing.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Agroforestry Systems:</strong> Integrating trees with agriculture—combining timber/fruit trees with crops or livestock. Provides diversified income, maintains partial forest cover, prevents soil erosion, and can be more profitable than forest clearing. Examples include coffee and cacao grown under forest canopy, silvopasture (trees + grazing), and alley cropping.</p>

                    <h4 style={{ color: '#166534', marginTop: '20px' }}>3. 💰 Alternative Livelihoods and Economic Incentives</h4>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Ecotourism:</strong> Costa Rica demonstrates the power of ecotourism—once suffering high deforestation rates, the country reversed forest loss and now generates over $4 billion annually from nature tourism. Forest cover increased from 21% (1980s) to 52% (2020). Key success factors: protecting national parks, training local guides, and community-based tourism enterprises.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Non-Timber Forest Products (NTFPs):</strong> Sustainable harvesting of products like Brazil nuts, rubber, açaí berries, medicinal plants, honey, and rattan generates income without forest clearing. Studies in the Amazon show NTFP harvesting can generate $400-700 per hectare annually, competitive with cattle ranching ($200-300/ha) while maintaining forest integrity.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Payment for Ecosystem Services (PES):</strong> Direct payments to landowners for maintaining forests that provide ecosystem services (water purification, carbon storage, biodiversity habitat). Mexico's PES program pays landowners to conserve forests in critical watersheds. Ecuador's SocioBosque program pays indigenous communities to protect forests, benefiting 180,000 people.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Carbon Offset Markets:</strong> Voluntary and compliance carbon markets allow companies to purchase carbon credits from forest conservation projects. Well-designed programs can fund conservation. California's cap-and-trade system includes forest offsets that have protected forests and generated income for rural communities.</p>

                    <h4 style={{ color: '#166534', marginTop: '20px' }}>4. 🌿 Restoration and Reforestation</h4>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Natural Regeneration:</strong> Allowing forests to regrow on their own by removing pressures (grazing, fire) and protecting regenerating areas. Most cost-effective approach where seed sources exist nearby. Secondary forests can develop within 15-30 years, though biodiversity and carbon storage remain below old-growth levels for decades.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Assisted Natural Regeneration (ANR):</strong> Accelerating natural regrowth through selective interventions: protecting existing seedlings from competition, managing invasive species, strategic planting to fill gaps. More cost-effective than full replanting while faster than pure natural regeneration.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Active Reforestation:</strong> Planting native tree species using diverse mixes that mimic natural forest composition. Critical considerations: using locally adapted species, community involvement for long-term maintenance, protection from fire and grazing. Success rates vary—40-60% survival is common, requiring replanting and adaptive management.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Bonn Challenge &amp; AFR100:</strong> Global commitments to restore 350 million hectares of degraded forests by 2030. African Forest Landscape Restoration Initiative (AFR100) aims for 100 million hectares restoration in Africa.</p>
                    <div style={{ backgroundColor: '#fef3c7', padding: '12px', borderRadius: '8px', margin: '10px 0', border: '1px solid #fde68a' }}>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#92400e' }}><strong>⚠️ Important Caveat:</strong> Reforestation cannot fully substitute for protecting existing forests. Primary forests contain irreplaceable biodiversity, carbon stocks, and ecological functions that take centuries to redevelop. Prevention must be the priority.</p>
                    </div>

                    <h4 style={{ color: '#166534', marginTop: '20px' }}>5. 💻 Technology and Innovation</h4>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Satellite Monitoring:</strong> Real-time deforestation tracking using satellite imagery. Global Forest Watch uses NASA and ESA satellites to detect forest clearing within 24-48 hours, alerting authorities to illegal logging. Brazil's DETER system identifies deforestation hotspots for rapid enforcement response.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Drones and AI:</strong> Unmanned aerial vehicles can survey remote forest areas to detect illegal logging, fires, or wildlife poaching. Artificial intelligence analyzes satellite and drone imagery to automatically identify deforestation patterns and predict high-risk areas.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Blockchain for Timber Tracking:</strong> Emerging use of blockchain technology to create transparent, tamper-proof supply chains for timber, ensuring legal sourcing and preventing "timber laundering" where illegal wood is mixed with legal supplies.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>DNA Barcoding:</strong> Genetic analysis to identify tree species and origin, combating illegal timber trade. Wood samples can be matched to reference databases to verify claims about species and source location, exposing fraudulent timber certification.</p>

                    <h4 style={{ color: '#166534', marginTop: '20px' }}>6. 👥 Indigenous Rights and Community Empowerment</h4>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Secure Land Tenure:</strong> Research consistently shows that indigenous territories with legally recognized tenure have significantly lower deforestation rates than surrounding areas—often 50-75% lower. Securing indigenous land rights is one of the most cost-effective conservation strategies.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>FPIC (Free, Prior, and Informed Consent):</strong> Requirement that indigenous communities must give consent before projects affecting their lands proceed. Enshrined in UN Declaration on Rights of Indigenous Peoples (2007). Effective FPIC processes have blocked destructive projects (dams, mines, oil wells) in Ecuador, Canada, and the Philippines.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Traditional Ecological Knowledge (TEK):</strong> Indigenous communities possess sophisticated knowledge of forest ecology, sustainable resource management, and biodiversity. Integrating TEK into conservation planning improves outcomes—indigenous fire management in Australia reduces catastrophic wildfires; indigenous forest monitoring in Bolivia detects changes scientists miss.</p>
                    <p style={{ fontSize: '0.9em', color: '#15803d' }}><strong>Community Conserved Areas (CCAs):</strong> Territories conserved by indigenous and local communities based on cultural values and traditional practices. CCAs cover at least 22% of global land area and often achieve conservation outcomes comparable to government-managed protected areas.</p>

                    <h4 style={{ color: '#166534', marginTop: '20px' }}>7. 🛒 Consumer Actions and Corporate Responsibility</h4>
                    <ul style={{ fontSize: '0.9em', color: '#15803d' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Reduce Beef Consumption:</strong> Especially beef from the Amazon region. Even reducing by one meal per week makes a difference.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Choose Certified Products:</strong> Look for FSC certification on wood/paper products, RSPO (Roundtable on Sustainable Palm Oil) for palm oil products.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Support Conservation Organizations:</strong> WWF, Rainforest Alliance, Amazon Conservation, and local groups working directly with indigenous communities.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Sustainable Investing:</strong> Divest from companies driving deforestation; invest in green bonds, sustainable forestry REITs, and conservation-focused funds.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Political Advocacy:</strong> Support policies for forest protection, indigenous rights, and corporate supply chain transparency. Contact representatives about international trade agreements that include environmental provisions.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Reduce, Reuse, Recycle:</strong> Lower consumption of paper, wood products, and products containing palm oil. Recycling paper reduces demand for virgin timber.</li>
                        <li><strong>Spread Awareness:</strong> Share information about deforestation links to everyday products. Consumer pressure has changed corporate policies (palm oil, beef sourcing).</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>📄 Quick Reference Cheat Sheet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>

                        <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#075985', fontSize: '1em' }}>📚 Key Definitions</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#0369a1', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}><strong>Deforestation:</strong> Permanent removal of trees to convert land to non-forest use (FAO: below 10% crown cover)</li>
                                <li style={{ marginBottom: '6px' }}><strong>Forest Degradation:</strong> Reduced forest quality and capacity without complete tree cover removal</li>
                                <li style={{ marginBottom: '6px' }}><strong>Primary Forest:</strong> Old-growth forests with maximum biodiversity and carbon storage</li>
                                <li style={{ marginBottom: '6px' }}><strong>Secondary Forest:</strong> Regrown after major disturbance; reduced biodiversity</li>
                                <li style={{ marginBottom: '6px' }}><strong>Edge Effects:</strong> Changes in conditions at forest-clearing boundaries (up to 300m penetration)</li>
                                <li style={{ marginBottom: '6px' }}><strong>Savannization:</strong> Irreversible conversion of tropical forest to dry grassland</li>
                                <li style={{ marginBottom: '6px' }}><strong>Adivasi:</strong> Indigenous tribal communities of India, forest-dwelling people</li>
                                <li><strong>REDD+:</strong> UN framework paying countries for forest conservation and carbon emission reductions</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#9f1239', fontSize: '1em' }}>📊 Critical Statistics</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#be185d', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}>15% of global greenhouse gas emissions from deforestation</li>
                                <li style={{ marginBottom: '6px' }}>27 football fields of forest lost every minute globally</li>
                                <li style={{ marginBottom: '6px' }}>Amazon: 17% deforested since 1970; tipping point at 20-25%</li>
                                <li style={{ marginBottom: '6px' }}>Amazon: 340 million tons CO₂ emitted annually from deforestation</li>
                                <li style={{ marginBottom: '6px' }}>Indigenous territories: 22% of land area, 80% of global biodiversity</li>
                                <li style={{ marginBottom: '6px' }}>40-80 million people displaced by dams globally since 1950</li>
                                <li style={{ marginBottom: '6px' }}>India: 33 million displaced by dam projects historically</li>
                                <li style={{ marginBottom: '6px' }}>Sardar Sarovar: 200,000-320,000 displaced, 60% tribal</li>
                                <li style={{ marginBottom: '6px' }}>Jharia: 100,000+ in fire zones, 90% forest loss</li>
                                <li>For every tree logged: 10-20 surrounding trees damaged</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#9a3412', fontSize: '1em' }}>⚠️ Major Drivers of Deforestation</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#c2410c', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}><strong>Timber Extraction:</strong> Commercial logging for hardwoods (teak, mahogany); $600B annual industry</li>
                                <li style={{ marginBottom: '6px' }}><strong>Mining:</strong> Open-pit removal of coal, gold, bauxite, iron ore; leaves moonscapes</li>
                                <li style={{ marginBottom: '6px' }}><strong>Dam Construction:</strong> Permanent submergence; releases methane from anaerobic decomposition</li>
                                <li style={{ marginBottom: '6px' }}><strong>Agricultural Expansion:</strong> Cattle ranching (Amazon: 80%), soy, palm oil</li>
                                <li style={{ marginBottom: '6px' }}><strong>Infrastructure:</strong> Roads (BR-163), power lines, settlements open forest to further clearing</li>
                                <li><strong>Illegal Activities:</strong> Garimpeiro (artisanal) gold mining, poaching, encroachment</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#166534', fontSize: '1em' }}>🌍 Environmental Impacts</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#15803d', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}><strong>Biodiversity Loss:</strong> Habitat fragmentation isolates populations; Amazon has 10% of all Earth's species</li>
                                <li style={{ marginBottom: '6px' }}><strong>Climate Change:</strong> Carbon release (15% GHG), reduced rainfall from lost evapotranspiration</li>
                                <li style={{ marginBottom: '6px' }}><strong>Soil Erosion:</strong> Without root binding, topsoil washes away; landslide risk increases</li>
                                <li style={{ marginBottom: '6px' }}><strong>Hydrological Disruption:</strong> Loss of "flying rivers"; altered water cycles, drought and flooding</li>
                                <li style={{ marginBottom: '6px' }}><strong>Water Contamination:</strong> Acid mine drainage (pH 2-3), heavy metal leaching, mercury from gold mining</li>
                                <li><strong>Microclimate Change:</strong> Increased temperature, reduced humidity, greater wind exposure in fragmented forests</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#fdf4ff', padding: '20px', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#7c3aed', fontSize: '1em' }}>👥 Tribal Community Impacts</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#7c3aed', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}><strong>Displacement:</strong> Loss of ancestral lands, forced relocation to slums or inferior agricultural land</li>
                                <li style={{ marginBottom: '6px' }}><strong>Livelihood Loss:</strong> Forest provides 40-60% of diet; NTFP collection (tendu leaves, mahua) becomes impossible</li>
                                <li style={{ marginBottom: '6px' }}><strong>Cultural Destruction:</strong> Sacred groves, burial sites, oral traditions tied to specific landscapes lost forever</li>
                                <li style={{ marginBottom: '6px' }}><strong>Health Deterioration:</strong> Loss of medicinal plants; toxic exposure from mining/dam operations</li>
                                <li style={{ marginBottom: '6px' }}><strong>Inadequate Rehabilitation:</strong> 70-80% face income reduction; resettlement sites lack infrastructure</li>
                                <li><strong>Legal Injustice:</strong> Weak FRA implementation; powerful economic interests override community rights</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#334155', fontSize: '1em' }}>✅ Key Solutions</p>
                            <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}><strong>Legal:</strong> FRA 2006, REDD+, Zero Deforestation commitments, FCA 1980</li>
                                <li style={{ marginBottom: '6px' }}><strong>Forest Mgmt:</strong> RIL (–40-50% damage), FSC certification, community forestry (Nepal model), agroforestry</li>
                                <li style={{ marginBottom: '6px' }}><strong>Economics:</strong> Ecotourism (Costa Rica $4B+/yr), NTFPs ($400-700/ha), PES, carbon markets</li>
                                <li style={{ marginBottom: '6px' }}><strong>Restoration:</strong> Natural regen, ANR, active reforestation; Bonn Challenge (350M ha by 2030)</li>
                                <li style={{ marginBottom: '6px' }}><strong>Technology:</strong> Satellite monitoring (Global Forest Watch), AI/drones, blockchain supply chain, DNA barcoding</li>
                                <li style={{ marginBottom: '6px' }}><strong>Indigenous Rights:</strong> Secure tenure (50-75% lower deforestation), FPIC, TEK integration, CCAs</li>
                                <li><strong>Consumer Role:</strong> Choose FSC/RSPO certified products, reduce beef, support NGOs, political advocacy</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#fffbeb', padding: '20px', borderRadius: '12px', border: '1px solid #fde68a', marginTop: '25px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#92400e', fontSize: '1em' }}>📝 Exam Tips for Module 2.2</p>
                        <ul style={{ fontSize: '0.85em', paddingLeft: '18px', color: '#78350f', margin: 0 }}>
                            <li style={{ marginBottom: '6px' }}><strong>Deforestation vs Degradation:</strong> Always clarify — deforestation is permanent land-use change (below 10% crown cover); degradation reduces quality without complete removal. Examiners test this distinction.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Case Study Numbers:</strong> Memorize key statistics — Amazon tipping point (20-25%), cattle ranching (80%), Sardar Sarovar (60% tribal, 320,000 displaced), Jharia fires (since 1916, 70 sites)</li>
                            <li style={{ marginBottom: '6px' }}><strong>Calculations:</strong> Practice the carbon conversion formula (C × 3.67 = CO₂). Be clear about steps: area × C/ha → total C → C released (given %) → CO₂ = C released × 3.67</li>
                            <li style={{ marginBottom: '6px' }}><strong>Edge Effects:</strong> Remember they penetrate up to 300m into remaining forest — much larger impact than direct clearing alone.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Savannization:</strong> Also called Amazon dieback — forest converts to savanna due to reduced rainfall from its own loss. Self-reinforcing feedback loop once triggered.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Methane from Dams:</strong> Tropical reservoirs can emit more GHGs than coal plants in first decade (from anaerobic decomposition of submerged vegetation). Challenges "clean energy" label for hydroelectric.</li>
                            <li style={{ marginBottom: '6px' }}><strong>80% Biodiversity Stat:</strong> Indigenous peoples (22% of land) protect 80% of biodiversity — powerful argument for indigenous rights and land tenure as conservation strategy.</li>
                            <li><strong>Conservation Economics:</strong> Remember $1 conservation investment = $7-10 in ecosystem services returned. Conservation Option B always beats extractive Option A when full costs/benefits are counted.</li>
                        </ul>
                    </div>

                    <div style={{ textAlign: 'center', padding: '30px 0 10px', color: '#94a3b8', fontSize: '0.85em' }}>
                        <p>Module 2.2 Complete · Deforestation, Case Studies &amp; Tribal Impacts</p>
                        <p style={{ margin: 0 }}>🌲 Protecting forests means protecting people, climate, and biodiversity for future generations 🌲</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_2;
