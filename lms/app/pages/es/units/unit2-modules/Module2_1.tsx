'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_1: React.FC = () => {
    const quizQuestions = [
        {
            question: "Which statement about renewable vs. non-renewable energy resources is MOST accurate regarding their environmental impacts?",
            options: [
                "Non-renewable resources are better because they have higher energy density, making them more efficient",
                "Renewable energy sources produce zero environmental impacts and are perfectly sustainable",
                "While renewable energy has some environmental impacts from manufacturing and land use, lifecycle emissions are dramatically lower than fossil fuels (15-50g CO₂/kWh vs 450-1000g CO₂/kWh)",
                "Natural gas is a clean renewable energy source suitable as a long-term energy solution"
            ],
            correctAnswer: 2,
            explanation: "While all energy production has some impact (e.g., mineral extraction for panels), the 'lifecycle' emissions of renewables are 10-100x lower than fossil fuels. They don't require continuous fuel extraction and combustion."
        },
        {
            question: "What is the PRIMARY driver of tropical deforestation globally, accounting for approximately 80% of forest loss?",
            options: [
                "Logging for timber and paper products",
                "Agricultural expansion, particularly cattle ranching, soy, and palm oil plantations",
                "Fuelwood collection by local communities",
                "Urban expansion and infrastructure development"
            ],
            correctAnswer: 1,
            explanation: "Agriculture (industrial and subsistence) is responsible for about 80% of deforestation worldwide, with cattle ranching being the single largest driver in the Amazon."
        },
        {
            question: "Forests play a critical role in climate regulation by storing carbon. Approximately how much carbon is stored in global forest biomass and soils combined?",
            options: [
                "50 gigatonnes (billion tonnes)",
                "200 gigatonnes (billion tonnes)",
                "Over 650 gigatonnes (billion tonnes)—more carbon than exists in the entire atmosphere",
                "1,500 gigatonnes (billion tonnes)"
            ],
            correctAnswer: 2,
            explanation: "Global forests store over 650 gigatonnes of carbon (approx. 296Gt in biomass and 400Gt in soil), which exceeds the carbon currently present in the atmosphere."
        },
        {
            question: "Which of the following statements about nuclear energy is MOST accurate?",
            options: [
                "Nuclear power is renewable because uranium is abundant in Earth's crust",
                "Nuclear power produces zero emissions and is completely safe with modern reactor designs",
                "Nuclear power has low lifecycle emissions but faces major challenges including high costs ($6-10 billion per reactor), long construction times (10-20 years), radioactive waste requiring secure storage for 100,000+ years, and catastrophic accident risks",
                "Nuclear power is cheaper than renewable energy and should be massively expanded to address climate change"
            ],
            correctAnswer: 2,
            explanation: "Nuclear is a 'low-carbon' non-renewable resource. Its main hurdles are economic (extremely high cost) and risk-based (waste management and rare but severe accidents)."
        },
        {
            question: "The Amazon rainforest is approaching a dangerous 'tipping point' where reduced rainfall could transform it into savanna. What is the PRIMARY mechanism causing this potential tipping point?",
            options: [
                "Global climate change from fossil fuel emissions reducing rainfall globally",
                "Deforestation reduces evapotranspiration, decreasing regional moisture recycling—less forest means less rain, which causes more forest die-off in a self-reinforcing feedback loop",
                "Increased soil erosion from deforestation preventing tree regrowth",
                "Air pollution from forest fires blocking sunlight needed for photosynthesis"
            ],
            correctAnswer: 1,
            explanation: "Forests generate their own rain through evapotranspiration. When too much forest is lost, the feedback loop breaks, rainfall collapses, and the ecosystem can no longer support a rainforest structure."
        }
    ];

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">2.1</div>
                <div className="lesson-title-main">
                    <h1>🌲 Energy & Forest Resources: Renewable vs Non-renewable Energy and Forest Conservation</h1>
                </div>
            </div>

            <section className="content-section">
                {/* METADATA BAR */}
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
                        Basic Ecology, Environmental Awareness
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.7em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pass Score</span>
                        70% or higher
                    </div>
                </div>

                {/* OBJECTIVES */}
                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#166534' }}>🎯 What You'll Master: Learning Objectives</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}>Analyze and differentiate between renewable and non-renewable energy resources, evaluating their environmental impacts, sustainability, and role in global energy systems</li>
                        <li style={{ marginBottom: '10px' }}>Examine the ecological, economic, and social significance of forest resources, including their role in carbon sequestration, biodiversity conservation, and climate regulation</li>
                        <li style={{ marginBottom: '10px' }}>Critically assess the causes, consequences, and extent of forest over-exploitation including deforestation, habitat fragmentation, and loss of ecosystem services</li>
                        <li style={{ marginBottom: '10px' }}>Evaluate sustainable forest management practices, conservation strategies, and renewable energy alternatives to mitigate environmental degradation</li>
                        <li>Apply knowledge of resource management to propose evidence-based solutions for balancing human energy needs with environmental conservation goals</li>
                    </ul>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* WHY IT MATTERS */}
                <h3>🔥 Why This Topic Matters</h3>
                <p>Imagine waking up one morning to find that your entire city has run out of electricity. No phones charging, no internet, no transportation, no refrigeration—essentially, modern life comes to a grinding halt. This scenario, while extreme, illustrates our complete dependence on energy resources. Every aspect of our daily lives—from the moment we switch on a light to the food we eat and the products we use—depends on energy. The choices we make about which energy sources to use don't just affect our immediate comfort; they determine the future of our planet.</p>
                <p>Now consider forests—they are often called the "lungs of the Earth," but they're much more than that. Forests are complex ecosystems that regulate our climate, purify our water, prevent soil erosion, provide habitat for 80% of terrestrial biodiversity, and support the livelihoods of 1.6 billion people worldwide. Yet we're losing them at an alarming rate of approximately 10 million hectares per year—equivalent to losing an area the size of Iceland every single year. The relationship between energy consumption and forest destruction is deeply interconnected: our demand for fossil fuels drives climate change that threatens forests, while deforestation for agriculture and development reduces our planet's capacity to absorb carbon dioxide.</p>
                <p>Understanding energy resources and forest conservation isn't just academic knowledge—it's essential for your role as an informed citizen and future decision-maker. Whether you become an engineer, policy maker, business leader, or educator, you'll face choices about resource use, sustainability, and environmental protection. Climate change, driven largely by our energy choices and land-use changes, is the defining challenge of our generation. The decisions we make today about transitioning to renewable energy and protecting forests will determine whether future generations inherit a livable planet or face catastrophic environmental collapse, resource wars, and mass extinctions.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>💡 Real-World Applications:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Energy Policy Development:</strong> Governments worldwide are creating renewable energy targets (e.g., India's goal of 500 GW renewable capacity by 2030) based on understanding of resource sustainability</li>
                        <li style={{ marginBottom: '10px' }}><strong>Corporate Sustainability:</strong> Companies like Google, Apple, and Amazon are transitioning to 100% renewable energy to reduce carbon footprints and meet consumer demands</li>
                        <li style={{ marginBottom: '10px' }}><strong>Forest Conservation Programs:</strong> REDD+ (Reducing Emissions from Deforestation and Forest Degradation) provides financial incentives for developing countries to protect forests</li>
                        <li style={{ marginBottom: '10px' }}><strong>Career Opportunities:</strong> The renewable energy sector created 12.7 million jobs globally in 2021, while forest conservation employs millions in ecotourism, sustainable forestry, and environmental management</li>
                        <li><strong>Climate Change Mitigation:</strong> Transitioning to renewables and protecting forests are the two most cost-effective strategies for limiting global warming to 1.5°C</li>
                    </ul>
                </div>

                {/* FIGURE 1 */}


                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* PART 1 */}
                <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '12px', border: '1px solid #ffedd5', margin: '40px 0' }}>
                    <h2 style={{ margin: 0, color: '#9a3412', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ backgroundColor: '#fdba74', color: '#fff', padding: '5px 12px', borderRadius: '8px', fontSize: '0.6em' }}>PART I</span>
                        ⚡ Understanding Energy Resources
                    </h2>
                </div>

                <h3>Definition & Fundamentals</h3>
                <p>Energy resources are natural sources from which humans derive energy to power civilization. These resources can be broadly categorized into two fundamental types based on their ability to regenerate within human timescales. <strong>Renewable energy resources</strong> are sources that naturally replenish on a human timescale and are virtually inexhaustible, including solar radiation, wind, hydropower, geothermal heat, and biomass. In contrast, <strong>non-renewable energy resources</strong> are finite sources that took millions of years to form and cannot be replaced once depleted, primarily fossil fuels (coal, oil, natural gas) and nuclear fuels (uranium, thorium).</p>
                <p>The fundamental distinction lies in the concept of regeneration rate. Renewable resources regenerate continuously or on relatively short cycles—the sun rises every day, wind blows constantly, water cycles through precipitation, and plants grow seasonally. Non-renewable resources, however, formed through geological processes over millions of years. For example, coal formed from ancient plant matter buried and compressed over 300 million years during the Carboniferous period. Once we extract and burn this coal, it's gone forever from a human perspective—we cannot wait another 300 million years for more to form.</p>
                <p>This distinction matters profoundly because our current energy system relies overwhelmingly on non-renewable sources. As of 2023, fossil fuels still provide about 82% of global primary energy, despite decades of warnings about climate change and resource depletion. The burning of fossil fuels releases carbon dioxide (CO₂) that was sequestered underground for millions of years, rapidly increasing atmospheric CO₂ concentrations from pre-industrial levels of 280 parts per million (ppm) to over 420 ppm today—the highest level in at least 3 million years. This greenhouse gas accumulation is driving unprecedented climate change with cascading effects on ecosystems, weather patterns, sea levels, and human societies.</p>



                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>📌 Key Terminology:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#0369a1', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Primary Energy:</strong> Energy in its natural form before conversion (e.g., crude oil, sunlight, uranium ore) as opposed to secondary energy carriers like electricity or hydrogen</li>
                        <li style={{ marginBottom: '10px' }}><strong>Energy Density:</strong> The amount of energy stored per unit volume or mass; fossil fuels have very high energy density (gasoline: 34 MJ/L) compared to batteries (lithium-ion: 0.9 MJ/L)</li>
                        <li style={{ marginBottom: '10px' }}><strong>Capacity Factor:</strong> The ratio of actual energy output to maximum possible output over time; coal plants typically achieve 60-80%, solar panels 15-25%, wind turbines 25-45%</li>
                        <li style={{ marginBottom: '10px' }}><strong>Carbon Intensity:</strong> The amount of CO₂ emissions per unit of energy produced; coal emits ~1000g CO₂/kWh, natural gas ~450g CO₂/kWh, solar ~50g CO₂/kWh (lifecycle emissions)</li>
                        <li style={{ marginBottom: '10px' }}><strong>Energy Security:</strong> The reliable availability of energy sources at affordable prices; countries with domestic renewable resources have greater energy security than those dependent on imported fossil fuels</li>
                        <li><strong>Energy Transition:</strong> The global shift from fossil fuel-based energy systems to renewable energy systems, involving technological, economic, and social transformations</li>
                    </ul>
                </div>

                <h3>Non-Renewable Energy Resources: Deep Dive</h3>
                <p><strong>1. COAL</strong> - Coal is a sedimentary rock formed from ancient plant material that accumulated in swamps and peat bogs between 360-300 million years ago during the Carboniferous period. Through geological processes involving heat, pressure, and time, this organic material transformed through stages: peat → lignite → sub-bituminous coal → bituminous coal → anthracite. Each stage represents increasing carbon content and energy density. Coal currently provides about 27% of global primary energy and generates approximately 36% of global electricity, making it the single largest source of electricity generation worldwide.</p>
                <p>Coal's dominance stems from its abundance and geographic distribution. Proven coal reserves exceed 1 trillion tonnes, representing about 132 years of current production. Major reserves exist in the USA, Russia, Australia, China, and India. However, coal is also the most environmentally damaging fossil fuel. Burning coal releases more CO₂ per unit of energy than any other fuel—approximately twice as much as natural gas. Coal combustion also produces sulfur dioxide (SO₂) causing acid rain, nitrogen oxides (NOₓ) contributing to smog, particulate matter (PM2.5) causing respiratory diseases, and toxic heavy metals including mercury, arsenic, and lead. Coal mining devastates landscapes through mountaintop removal and strip mining, pollutes water sources, and causes thousands of deaths annually from mining accidents and black lung disease.</p>
                <p><strong>2. PETROLEUM (OIL)</strong> - Petroleum formed from ancient marine organisms (plankton, algae) that died and accumulated on ocean floors over millions of years. Buried under sediment layers, subjected to heat (50-120°C) and pressure, these organic remains transformed into liquid hydrocarbons through a process called catagenesis. Petroleum migrated through porous rock until trapped by impermeable layers, creating oil reservoirs. Petroleum is the world's most important energy source, providing about 31% of global primary energy, dominating the transportation sector ({'>'}90% of transportation fuels), and serving as feedstock for plastics, chemicals, pharmaceuticals, and countless other products.</p>
                <p>Crude oil must be refined into useful products through fractional distillation, separating it into components based on boiling points: gases (LPG), gasoline/petrol, kerosene/jet fuel, diesel, heating oil, lubricants, and asphalt. The global oil industry is massive, producing about 95 million barrels per day. However, oil faces severe sustainability challenges. Proven reserves of about 1.7 trillion barrels represent roughly 50 years at current consumption, though new extraction technologies (deep-water drilling, tar sands, oil shales) can access additional resources at higher economic and environmental costs. Oil combustion contributes significantly to climate change, air pollution, and oil spills cause catastrophic marine ecosystem damage.</p>
                <p><strong>3. NATURAL GAS</strong> - Natural gas formed through processes similar to oil but under different temperature conditions (higher temperatures: 120-220°C), primarily from ancient organic matter. It consists mainly of methane (CH₄) with smaller amounts of ethane, propane, butane, and other hydrocarbons. Natural gas provides about 24% of global primary energy and is growing rapidly as a "transition fuel" between coal and renewables. It generates 24% of global electricity, provides heating for homes and businesses, and serves as industrial fuel and chemical feedstock.</p>
                <p>Natural gas is often promoted as "cleaner" than coal or oil because combustion produces about half the CO₂ emissions of coal per unit of energy. However, this advantage is undermined by methane leakage throughout the extraction, processing, and distribution chain. Methane is a greenhouse gas 84 times more potent than CO₂ over 20 years. Studies suggest that 2-6% of natural gas production leaks into the atmosphere, potentially making natural gas worse for climate change than coal when considering these leaks. Hydraulic fracturing ("fracking") has revolutionized natural gas production but raises serious concerns about groundwater contamination, induced seismicity, and industrialization of rural landscapes.</p>
                <p><strong>4. NUCLEAR ENERGY</strong> - Nuclear power harnesses energy from atomic nuclei through fission—splitting heavy atoms (uranium-235 or plutonium-239) into lighter atoms, releasing enormous amounts of energy according to Einstein's equation E=mc². This energy heats water to produce steam that drives turbines generating electricity. Nuclear power currently provides about 10% of global electricity from approximately 440 reactors in 30 countries. France generates 70% of its electricity from nuclear power, the highest proportion globally.</p>
                <p>Nuclear power has unique characteristics among non-renewable sources. Advantages include: zero direct CO₂ emissions during operation, very high energy density (1 kg uranium = energy equivalent to 2-3 million kg coal), small land footprint compared to renewables, and reliable baseload power generation. However, nuclear faces severe challenges: catastrophic accident risks (Chernobyl 1986, Fukushima 2011) with long-lasting contamination, radioactive waste requiring secure storage for thousands of years, high construction costs ($6-10 billion per reactor), long building times (10-20 years), connection to nuclear weapons proliferation concerns, and vulnerability to terrorist attacks. Additionally, uranium is finite—current reserves will last 90-130 years at current consumption.</p>

                <h3>Renewable Energy Resources: Deep Dive</h3>
                <p><strong>1. SOLAR ENERGY</strong> - The sun delivers approximately 173,000 terawatts (TW) of energy continuously to Earth—more than 10,000 times humanity's total energy consumption. Solar energy reaches Earth as electromagnetic radiation, which we can harness through two main technologies: photovoltaic (PV) panels that directly convert sunlight into electricity using semiconductor materials (silicon), and concentrated solar power (CSP) systems that use mirrors to focus sunlight, generating heat to drive steam turbines. Solar PV has experienced explosive growth—from 1.5 gigawatts (GW) of installed capacity in 2000 to over 1,000 GW in 2022—making it the fastest-growing energy technology in history.</p>
                <p>The dramatic cost reduction in solar PV—prices fell 90% between 2010-2020—has made solar the cheapest source of electricity in most locations worldwide. Modern solar panels convert 15-23% of sunlight into electricity (research cells achieve over 40% with multi-junction technology). Advantages include: zero fuel costs, minimal environmental impact during operation, modular scalability (from rooftop systems to utility-scale solar farms), rapidly declining costs, and job creation potential. Challenges include: intermittency (no generation at night, reduced generation on cloudy days), requirement for energy storage or backup power, relatively low energy density requiring significant land area, and environmental impacts of panel manufacturing and disposal at end-of-life.</p>
                <p><strong>2. WIND ENERGY</strong> - Wind is created by uneven heating of Earth's surface by the sun, creating pressure differences that drive air movement. We capture wind's kinetic energy using wind turbines—modern turbines stand 80-120 meters tall with rotor diameters of 80-160 meters. As wind passes through the rotor blades, it causes them to rotate, turning a generator that produces electricity. Wind power has grown from 17 GW globally in 2000 to over 900 GW in 2022, now generating about 7% of global electricity. Leading countries include China (310 GW), USA (135 GW), Germany (64 GW), and India (40 GW).</p>
                <p>Wind energy offers numerous advantages: zero fuel costs after installation, very low operating costs, minimal land footprint, rapid installation, and declining costs. Offshore wind is particularly promising—steadier, stronger winds allow higher capacity factors (40-50%) and larger turbines. However, wind faces challenges: intermittency and variability (wind doesn't always blow when needed), requiring backup power or storage, visual and noise impacts on landscapes, bird and bat mortality (though proper siting and technology minimize this), and transmission challenges.</p>
                <p><strong>3. HYDROELECTRIC POWER</strong> - Hydropower harnesses the gravitational potential energy of water elevated in mountains or behind dams. Water flowing through turbines converts potential energy into kinetic energy and then into electricity. Hydropower is the largest renewable electricity source globally, generating about 16% of global electricity from approximately 1,300 GW of installed capacity. Large-scale hydropower includes massive dams like China's Three Gorges Dam (22.5 GW capacity), Itaipu Dam on the Brazil-Paraguay border (14 GW), and India's Bhakra Dam (1.5 GW).</p>
                <p>Hydropower's advantages include: high efficiency (85-90% conversion efficiency), flexible and controllable generation (can ramp up/down quickly), energy storage capability (pumped-storage), long operational life (50-100+ years), and additional benefits like flood control, irrigation, and recreation. However, large dams have severe environmental and social impacts: flooding vast land areas and destroying ecosystems, blocking fish migration routes, changing downstream river ecosystems, displacing communities (Three Gorges displaced 1.3 million people), methane emissions from decaying organic matter in reservoirs, and vulnerability to drought.</p>
                <p><strong>4. BIOMASS AND BIOENERGY</strong> - Biomass includes plant matter, agricultural residues, forestry waste, animal waste, and organic municipal waste that can be burned directly for heat, converted into liquid biofuels (ethanol, biodiesel), or gasified for electricity generation. Plants capture solar energy through photosynthesis, storing it in chemical bonds. When we burn biomass, we release this stored solar energy. Traditional biomass (wood, dung, crop residues) has been humanity's primary energy source for millennia and still provides cooking and heating energy for 2.5 billion people in developing countries.

                    Modern bioenergy is more sophisticated: first-generation biofuels (corn ethanol, soy biodiesel), second-generation biofuels from non-food biomass (cellulosic ethanol from agricultural waste), and advanced biofuels from algae and waste oils. Biomass provides about 10% of global primary energy. Theoretical advantages include carbon neutrality (CO₂ released when burning was recently absorbed during growth, creating a closed cycle), use of waste products, and rural economic development. However, biomass sustainability is controversial. Problems include: land competition with food production, deforestation for biomass plantations, soil degradation, water use, fertilizer and pesticide pollution, and questionable carbon neutrality (when accounting for land-use change, processing energy, and opportunity cost of not allowing forest regeneration). Burning biomass still produces air pollutants.</p>
                <p><strong>5. GEOTHERMAL ENERGY</strong> -  Earth's interior contains vast amounts of heat—temperatures reach 5,000-7,000°C at the core. This heat slowly flows toward the surface through conduction and convection. Geothermal energy taps into this heat through wells drilled 1-4 km deep, extracting hot water or steam to drive turbines. Geothermal power plants generate about 15 GW globally, concentrated in geologically active regions: USA, Indonesia, Philippines, Turkey, New Zealand, Mexico, Italy, and Kenya. Iceland generates 30% of its electricity from geothermal and heats 90% of homes using geothermal district heating.

                    Geothermal offers unique benefits: continuous baseload generation (24/7, unlike solar and wind), very small land footprint, minimal visual impact, and very low lifecycle emissions (about 50g CO₂/kWh). However, limitations include: geographic restrictions (best resources at tectonic plate boundaries), high upfront drilling costs and exploration risks, potential for induced seismicity, and possible local environmental impacts (release of dissolved gases, land subsidence). Enhanced Geothermal Systems (EGS) could expand geothermal access by creating artificial reservoirs through hydraulic fracturing, but the technology remains experimental and expensive.</p>
                <p><strong>6. OCEAN ENERGY</strong> - The ocean contains enormous energy in multiple forms: tidal energy from gravitational pull of moon and sun, wave energy from wind transferring energy to water surface, ocean thermal energy conversion (OTEC) exploiting temperature differences between warm surface and cold deep water, and salinity gradient energy from osmotic pressure differences between fresh and salt water. Ocean energy is at early development stages—total global installed capacity is only about 0.5 GW, mostly tidal barrages and stream generators.

                    Potential advantages include: predictability (tides are precisely predictable years in advance), high energy density, and vast theoretical resource (ocean energy could theoretically meet all human energy needs). Challenges include: harsh marine environment causing engineering difficulties, high costs, environmental impacts on marine ecosystems, early-stage technology requiring more research and development, and limited suitable locations. The technology shows promise but likely won't contribute significantly to global energy supply for decades.</p>

                {/* COMPREHENSIVE COMPARISON TABLE */}
                <div style={{ backgroundColor: '#f8fafc', padding: '35px', borderRadius: '24px', border: '1px solid #e2e8f0', margin: '40px 0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: '0 0 25px 0', color: '#0f172a', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px', borderRadius: '10px', fontSize: '0.8em' }}>📊</span> Comprehensive Comparison: Energy Resources
                    </h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em', minWidth: '900px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1e293b', color: '#fff' }}>
                                    <th style={{ padding: '15px', border: '1px solid #334155', textAlign: 'left' }}>Criterion</th>
                                    <th style={{ padding: '15px', border: '1px solid #334155' }}>Coal</th>
                                    <th style={{ padding: '15px', border: '1px solid #334155' }}>Oil/Gas</th>
                                    <th style={{ padding: '15px', border: '1px solid #334155' }}>Nuclear</th>
                                    <th style={{ padding: '15px', border: '1px solid #334155' }}>Solar</th>
                                    <th style={{ padding: '15px', border: '1px solid #334155' }}>Wind</th>
                                    <th style={{ padding: '15px', border: '1px solid #334155' }}>Hydro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { criterion: 'Renewability', coal: 'Non-renewable (300M years to form)', oil: 'Non-renewable (millions of years)', nuclear: 'Non-renewable (uranium finite)', solar: 'Renewable (sun lasts 5B years)', wind: 'Renewable (continuous)', hydro: 'Renewable (water cycle)' },
                                    { criterion: 'CO₂ Emissions', coal: 'Very High: ~1000g/kWh', oil: 'High: 450-650g/kWh', nuclear: 'Low: ~15g/kWh (lifecycle)', solar: 'Very Low: ~50g/kWh', wind: 'Very Low: ~15g/kWh', hydro: 'Low: ~25g/kWh' },
                                    { criterion: 'Cost per kWh', coal: '$0.05-0.15', oil: '$0.05-0.20', nuclear: '$0.10-0.20', solar: '$0.03-0.06', wind: '$0.03-0.08', hydro: '$0.03-0.10' },
                                    { criterion: 'Reliability', coal: 'Dispatchable, baseload', oil: 'Dispatchable, flexible', nuclear: 'Baseload, constant', solar: 'Intermittent (day only)', wind: 'Variable (weather dependent)', hydro: 'Flexible, dispatchable' },
                                    { criterion: 'Land Use', coal: 'High (mining devastates landscapes)', oil: 'Moderate (drilling, refineries)', nuclear: 'Very Low (compact plants)', solar: 'Moderate-High (solar farms large)', wind: 'Low (dual land use possible)', hydro: 'Very High (reservoirs flood vast areas)' },
                                    { criterion: 'Safety Risks', coal: 'Mining deaths, black lung disease', oil: 'Oil spills, explosions, gas leaks', nuclear: 'Catastrophic accidents (rare but severe)', solar: 'Minimal (manufacturing chemicals)', wind: 'Low (turbine failures rare)', hydro: 'Dam failures (rare but catastrophic)' },
                                    { criterion: 'Resource Availability', coal: '130 years at current rates', oil: '50 years oil, 50 years gas', nuclear: '90-130 years uranium', solar: 'Unlimited', wind: 'Unlimited', hydro: 'Limited sites (geography constrained)' },
                                    { criterion: 'Scalability', coal: 'Limited by reserves and climate impacts', oil: 'Limited by reserves and climate impacts', nuclear: 'Limited by costs, safety, and public opposition', solar: 'Highly scalable (modular)', wind: 'Highly scalable (modular)', hydro: 'Limited by suitable geography' },
                                    { criterion: 'Job Creation', coal: 'Moderate (declining sector)', oil: 'Moderate (automation increasing)', nuclear: 'Low (few plants, specialized)', solar: 'High (4M jobs globally)', wind: 'High (1.3M jobs globally)', hydro: 'Moderate (construction heavy)' },
                                    { criterion: 'Other Impacts', coal: 'Acid rain, mercury, PM2.5, water pollution', oil: 'Oil spills, plastic pollution, methane leaks', nuclear: 'Radioactive waste (100K year problem)', solar: 'Mining impacts (rare earths, silicon)', wind: 'Bird/bat mortality, visual/noise impacts', hydro: 'Ecosystem destruction, species extinction' }
                                ].map((row, i) => (
                                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f8fafc' }}>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#1e293b' }}>{row.criterion}</td>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', color: '#475569' }}>{row.coal}</td>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', color: '#475569' }}>{row.oil}</td>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', color: '#475569' }}>{row.nuclear}</td>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', color: '#475569' }}>{row.solar}</td>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', color: '#475569' }}>{row.wind}</td>
                                        <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', color: '#475569' }}>{row.hydro}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FIGURE 6: HIERARCHICAL CLASSIFICATION */}
                <div style={{ margin: '60px 0', padding: '40px', backgroundColor: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <h4 style={{ color: '#0f172a', fontWeight: '900', marginBottom: '40px', fontSize: '1.2em' }}>Energy Resource Classification</h4>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                        {/* ROOT */}
                        <div style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '12px 30px', borderRadius: '12px', fontWeight: '900', border: '2px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            Energy Resources
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '40px', flexWrap: 'wrap' }}>

                            {/* NON-RENEWABLE BRANCH */}
                            <div style={{ flex: '1', minWidth: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
                                <div style={{ backgroundColor: '#ef4444', color: 'white', padding: '10px 25px', borderRadius: '10px', fontWeight: 'bold', width: 'fit-content' }}>Non-Renewable</div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
                                    {/* Fossil Fuels */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#e9d5ff', color: '#6b21a8', padding: '6px 15px', borderRadius: '8px', fontSize: '0.85em', fontWeight: 'bold' }}>Fossil Fuels</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px', width: '100%' }}>
                                            {[
                                                { name: 'Coal', val: '~1000g CO₂/kWh', res: '130 years reserves', bg: '#b91c1c' },
                                                { name: 'Oil', val: '~650g CO₂/kWh', res: '50 years reserves', bg: '#dc2626' },
                                                { name: 'Natural Gas', val: '~450g CO₂/kWh', res: '50 years reserves', bg: '#f59e0b' }
                                            ].map((item, i) => (
                                                <div key={i} style={{ backgroundColor: item.bg, color: 'white', padding: '12px', borderRadius: '12px', textAlign: 'center', fontSize: '0.75em', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                                    <div style={{ fontWeight: '900', marginBottom: '4px' }}>{item.name}</div>
                                                    <div>{item.val}</div>
                                                    <div style={{ opacity: 0.9 }}>{item.res}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Nuclear */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#e9d5ff', color: '#6b21a8', padding: '6px 15px', borderRadius: '8px', fontSize: '0.85em', fontWeight: 'bold' }}>Nuclear</div>
                                        <div style={{ backgroundColor: '#64748b', color: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center', fontSize: '0.75em', width: '100%' }}>
                                            <div style={{ fontWeight: '900', marginBottom: '4px' }}>Uranium Fission</div>
                                            <div>~15g CO₂/kWh</div>
                                            <div style={{ opacity: 0.9 }}>90-130 years reserves</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RENEWABLE BRANCH */}
                            <div style={{ flex: '1.5', minWidth: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
                                <div style={{ backgroundColor: '#22c55e', color: 'white', padding: '10px 25px', borderRadius: '10px', fontWeight: 'bold', width: 'fit-content' }}>Renewable</div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '15px', width: '100%' }}>
                                    {[
                                        { name: 'Solar', c1: '173,000 TW potential', c2: '~50g CO₂/kWh', c3: 'Intermittent', bg: '#16a34a' },
                                        { name: 'Wind', c1: 'Vast potential', c2: '~15g CO₂/kWh', c3: 'Variable', bg: '#16a34a' },
                                        { name: 'Hydro', c1: '16% of electricity', c2: '~25g CO₂/kWh', c3: 'Geography limited', bg: '#15803d' },
                                        { name: 'Biomass', c1: '10% of primary energy', c2: 'Carbon neutral?', c3: 'Land competition', bg: '#ea580c' },
                                        { name: 'Geothermal', c1: 'Baseload 24/7', c2: '~50g CO₂/kWh', c3: 'Location specific', bg: '#15803d' },
                                        { name: 'Ocean', c1: 'Huge potential', c2: 'Technology immature', c3: 'Predictable tides', bg: '#2563eb' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ backgroundColor: item.bg, color: 'white', padding: '12px', borderRadius: '12px', textAlign: 'center', fontSize: '0.75em', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100px' }}>
                                            <div style={{ fontWeight: '900', marginBottom: '4px', fontSize: '1.1em' }}>{item.name}</div>
                                            <div style={{ lineHeight: '1.4' }}>{item.c1}</div>
                                            <div style={{ opacity: 0.9 }}>{item.c2}</div>
                                            <div style={{ opacity: 0.8, fontSize: '0.9em', fontStyle: 'italic' }}>{item.c3}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px', fontSize: '0.9em', color: '#64748b', fontWeight: '900' }}>
                        Figure 6: Hierarchical classification of energy resources with key characteristics
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff1f2', padding: '40px', borderRadius: '32px', border: '1px solid #fecaca', margin: '60px 0' }}>
                    <h3 style={{ margin: '0 0 30px 0', color: '#9f1239', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ backgroundColor: '#be123c', color: 'white', padding: '10px', borderRadius: '12px', fontSize: '0.8em' }}>⚠️</span> Common Misconceptions About Energy
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                id: 1,
                                title: "Renewable energy can never fully replace fossil fuels",
                                wrong: "Many believe that renewables are inherently inadequate—too intermittent, not powerful enough, or too expensive—to replace fossil fuels completely, and that we'll always need coal, oil, and gas for baseload power and energy security.",
                                reality: "Multiple peer-reviewed studies demonstrate that 100% renewable energy systems are technically feasible and economically viable. Stanford University's Solutions Project mapped pathways for 139 countries to achieve 100% clean energy by 2050. Countries like Iceland (85% renewable), Norway (98% renewable electricity), Costa Rica (99% renewable electricity), and Uruguay (98% renewable electricity) prove large-scale renewable systems work. The key is combining multiple renewable sources, implementing energy storage, improving grid infrastructure, and enhancing energy efficiency.",
                                evidence: "The IEA projects solar could become the world's largest source of electricity by 2035. Renewable costs have fallen so dramatically that new capacity is now cheaper than operating existing coal plants in most markets. Tesla's battery installations have proven grid-scale storage can provide backup power and peak shaving."
                            },
                            {
                                id: 2,
                                title: "Nuclear power is a clean, green solution to climate change",
                                wrong: "Nuclear is often portrayed as the perfect climate solution—zero emissions, reliable baseload power, and proven technology. Students believe nuclear should be massively expanded to replace fossil fuels.",
                                reality: "While nuclear generates low-carbon electricity, calling it 'clean and green' ignores serious problems. Nuclear is extremely expensive ($6-12 billion per reactor) and takes 10-20 years to build. It produces radioactive waste requiring secure isolation for 100,000+ years. Accidents like Fukushima have devastating long-term consequences ($200+ billion cleanup).",
                                evidence: "Every dollar spent on nuclear could generate 5-10 times more carbon-free energy if invested in solar/wind. The energy transition is happening through solar, wind, and storage, not a nuclear renaissance."
                            },
                            {
                                id: 3,
                                title: "Natural gas is a 'clean' or 'bridge' fuel to a renewable future",
                                wrong: "Natural gas is marketed as 'clean' because it produces about half the CO₂ of coal when burned. Many believe it can serve as a temporary 'bridge fuel' providing flexible backup power.",
                                reality: "Natural gas is not clean—it's just less dirty than coal. This framing ignores methane leakage (84x more potent than CO₂). Leakage rates of 2.3-6% potentially make gas worse for climate change than coal over 20-year timescales. Investment in gas infrastructure locks in decades of emissions.",
                                evidence: "Research in 'Science' shows high methane leakage eliminates gas's climate advantage over coal. Countries like Portugal and UK are bypassing gas entirely, phasing out coal while building renewables directly."
                            },
                            {
                                id: 4,
                                title: "Renewable energy requires too much land and materials to be sustainable",
                                wrong: "Critics claim solar and wind require vast land areas and consume enormous quantities of materials (silicon, rare earths, copper, steel), making them environmentally destructive.",
                                reality: "Impacts are dramatically smaller than fossil fuels. A complete renewable system would require less than 1% of global land area—much of which (rooftops, deserts, offshore) doesn't preclude other uses. Material requirements are finite (one-time installation) unlike fossil fuels (continuous extraction forever).",
                                evidence: "Coal mining has devastated 6,000+ km² in Appalachia alone. Solar panels on just 0.6% of global land area could theoretically power the entire world. Lifecycle material intensity is lower, and panels are 95% recyclable."
                            }
                        ].map((item) => (
                            <div key={item.id} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #fecaca', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <div style={{ color: '#be123c', fontWeight: '900', fontSize: '1.1em', marginBottom: '20px', borderBottom: '2px solid #fecaca', paddingBottom: '10px' }}>
                                    Misconception #{item.id}: "{item.title}"
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: '900', color: '#991b1b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>❌ What is often misunderstood</div>
                                    <div style={{ fontSize: '0.9em', color: '#4b5563', lineHeight: '1.6' }}>{item.wrong}</div>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: '900', color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>✅ The Reality</div>
                                    <div style={{ fontSize: '0.9em', color: '#1f2937', lineHeight: '1.6', fontWeight: '500' }}>{item.reality}</div>
                                </div>
                                <div style={{ backgroundColor: '#fdf2f2', padding: '20px', borderRadius: '16px', border: '1px solid #fee2e2' }}>
                                    <div style={{ fontSize: '0.75em', fontWeight: '900', color: '#991b1b', textTransform: 'uppercase', marginBottom: '8px' }}>🔍 Evidence & Insight</div>
                                    <div style={{ fontSize: '0.85em', color: '#7f1d1d', lineHeight: '1.6', fontStyle: 'italic' }}>{item.evidence}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* PART II */}
                <div style={{ margin: '40px 0' }}>
                    <h2>Part II: Forest Resources and Conservation</h2>

                    <h3>What Are Forest Resources?</h3>
                    <p>Forest resources encompass all the valuable products, services, and ecological functions that forests provide to humanity and the planet. Forests cover approximately 31% of Earth's land area (about 4.06 billion hectares or 10 billion acres), though this represents a dramatic decline from pre-agricultural times when forests covered nearly 6 billion hectares—we've lost one-third of Earth's forests. These ecosystems are among the most biologically diverse and ecologically important habitats on Earth, playing absolutely critical roles in climate regulation, water cycles, soil conservation, and biodiversity support that make life on Earth possible.</p>

                    <p><strong>Global forest distribution</strong></p>
                    <p>Figure 7: Global forest distribution showing highest concentrations in tropical, boreal, and temperate regions (Source: FAO Forest Resources Assessment)</p>

                    <p>Forests provide two broad categories of value: direct use values (tangible products we extract) and indirect use values (ecosystem services that benefit us without extraction). Direct products include timber for construction and furniture, fuelwood for cooking and heating (still the primary energy source for 2.5 billion people), non-timber forest products like fruits, nuts, mushrooms, medicinal plants, resins, rubber, and rattan, and bushmeat (though unsustainable hunting threatens many species). Indirect services are even more valuable: climate regulation through carbon sequestration (forests absorb about 2.6 billion tonnes of CO₂ annually, approximately 1/3 of fossil fuel emissions), water cycle regulation (forests influence precipitation patterns and protect watersheds), soil conservation (tree roots prevent erosion, forest litter maintains soil fertility), air purification (trees filter pollutants), pollination services, and biodiversity habitat (forests contain 80% of terrestrial species).</p>

                    <p>The economic value of forests is staggering yet underestimated. Timber and forest products generate $600+ billion annually in global trade. But ecosystem services are worth far more—estimated at $5-10 trillion annually when you include carbon storage, water purification, flood prevention, pollination, and other benefits. The problem is that these ecosystem services don't show up in GDP calculations, creating perverse incentives where clearing forests for agriculture appears profitable in conventional economics despite destroying far greater value in ecosystem services.</p>

                    <h4>📌 Types of Forests:</h4>
                    <ul>
                        <li><strong>Tropical Rainforests:</strong> Located near equator (Amazon, Congo Basin, Southeast Asia), characterized by high biodiversity, dense vegetation, year-round rainfall, and rapid nutrient cycling. Contain {'>'}50% of Earth's terrestrial species despite covering just 6% of land.</li>
                        <li><strong>Temperate Forests:</strong> Found in mid-latitudes (Eastern USA, Europe, East Asia), characterized by deciduous trees that lose leaves seasonally, moderate climate, and distinct seasons. Historically heavily logged but some regions recovering.</li>
                        <li><strong>Boreal Forests (Taiga):</strong> Vast coniferous forests in northern latitudes (Canada, Russia, Scandinavia), characterized by cold climate, coniferous trees (pines, spruces, firs), and massive carbon storage in soils and trees. Largest terrestrial biome by area.</li>
                        <li><strong>Mangrove Forests:</strong> Coastal forests in tropical/subtropical regions, characterized by salt-tolerant trees with specialized root systems. Critical for coastal protection, fisheries nursery habitat, and carbon sequestration (store 3-5x more carbon per area than terrestrial forests).</li>
                        <li><strong>Dry Forests:</strong> Semi-arid regions with seasonal rainfall (parts of Africa, India, Australia), characterized by drought-resistant species, lower density than rainforests, but still biodiversity hotspots. Among most threatened forest types globally.</li>
                    </ul>

                    <h3>🌲 The Importance of Forests</h3>
                    <p>WWF - 4 minutes - Beautiful visuals showing forest ecosystem services</p>
                    <p>Understand why forests are critical for climate, water, biodiversity, and human wellbeing</p>

                    <h4>Ecological Functions of Forests</h4>

                    <h4>1. CARBON SEQUESTRATION AND CLIMATE REGULATION</h4>
                    <p>Forests are Earth's primary terrestrial carbon sinks, absorbing CO₂ from the atmosphere through photosynthesis and storing carbon in biomass (trunks, branches, leaves, roots) and soils. Global forests store approximately 296 gigatonnes (billion tonnes) of carbon in their biomass alone, plus another 400+ gigatonnes in forest soils—that's more carbon than exists in the entire atmosphere. Growing forests actively sequester about 2.6 billion tonnes of CO₂ annually, offsetting roughly one-third of global fossil fuel emissions.</p>

                    <p>Different forest types store vastly different amounts of carbon. Tropical forests are the most carbon-dense, storing 200-400 tonnes of carbon per hectare in biomass and soils. Old-growth temperate rainforests (like those in the Pacific Northwest USA) can store over 500 tonnes per hectare—among the highest on Earth. Boreal forests store less carbon per hectare in biomass but have enormous soil carbon reserves due to slow decomposition in cold climates. Mangroves, despite smaller area, are exceptionally carbon-dense ("blue carbon"), storing 3-5 times more carbon per area than terrestrial forests.</p>

                    <p><strong>Amazon rainforest aerial view</strong></p>
                    <p>Figure 8: The Amazon rainforest stores massive amounts of carbon and generates much of its own rainfall through evapotranspiration (Source: Wikimedia Commons)</p>

                    <p>When we destroy forests through logging or burning, this stored carbon releases back into the atmosphere as CO₂, driving climate change. Deforestation accounts for approximately 10-15% of global CO₂ emissions—more than all the world's cars, planes, and ships combined. Protecting existing forests, especially old-growth and tropical forests, is one of the most cost-effective climate mitigation strategies available. Reforestation and afforestation (planting new forests) can also help, though they take decades to store significant carbon and can never fully replace the carbon storage capacity and biodiversity of natural old-growth forests.</p>

                    <h4>2. WATER CYCLE REGULATION</h4>
                    <p>Forests profoundly influence water cycles at local, regional, and even global scales through several mechanisms. Tree roots absorb groundwater and transport it upward, where it evaporates from leaves (transpiration) back into the atmosphere. Combined with evaporation from soil and water surfaces, this "evapotranspiration" returns 40-60% of rainfall back to the atmosphere locally, where it forms clouds and generates precipitation downwind. The Amazon rainforest essentially creates its own climate—trees pump so much moisture into the atmosphere that they generate much of the region's rainfall. Destroy the forest, and you destroy the rain.</p>

                    <p>Forests act as natural water filters and storage systems. Tree canopies intercept rainfall, slowing its descent and allowing gradual absorption into soil rather than rapid runoff. Root networks create porous soil structure that absorbs water like a sponge, storing it in underground aquifers and releasing it slowly to streams throughout dry seasons. This means forests prevent both flooding (by absorbing peak rainfall) and drought (by slowly releasing stored water). Studies show that forested watersheds provide more reliable water supplies, higher water quality, and less seasonal variation than deforested areas. Major cities worldwide—New York, Tokyo, Bogotá, Vienna, Barcelona—depend on forested watersheds for drinking water. Protecting these watershed forests is far cheaper than building water treatment facilities.</p>

                    <h4>3. BIODIVERSITY HABITAT</h4>
                    <p>Forests are Earth's biodiversity hotspots, containing an estimated 80% of terrestrial plant, animal, and insect species despite covering just 31% of land. A single hectare of tropical rainforest can contain 200+ tree species—more diversity than exists in all of North America. The three-dimensional structure of forests—from soil to canopy reaching 50-60 meters high in tropical forests—creates countless ecological niches supporting incredible species diversity. Complex interdependencies exist: specific pollinators for specific plants, predator-prey relationships maintaining population balance, decomposers recycling nutrients, and seed dispersers enabling plant reproduction.</p>

                    <h4>Forest Ecosystem Services</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f3f4f6' }}>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Provisioning Services</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Regulating Services</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Supporting Services</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Cultural Services</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Timber & Wood Products</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Climate Regulation</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Biodiversity Habitat</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Recreation & Tourism</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Fuelwood & Energy</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Carbon Sequestration</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>80% of Terrestrial Species</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Spiritual & Religious Value</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Non-Timber Products</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Water Cycle Regulation</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Nutrient Cycling</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Educational & Research Value</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Fruits, Nuts, Medicine</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Watershed Protection</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Soil Formation & Conservation</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Cultural Heritage</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Genetic Resources</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Air Purification / Oxygen</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Primary Production</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Indigenous Homelands</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Pollination / Pest Control</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Figure 9: Comprehensive classification of forest ecosystem services showing multiple value categories</p>

                    <p>Biodiversity isn't just about charismatic species—it's about ecosystem functioning and resilience. Diverse ecosystems are more stable, more productive, and more resistant to disturbances like pests, diseases, and climate change. Many forest species have direct human value: 25% of pharmaceutical drugs derive from forest plants, including aspirin, morphine, quinine, vincristine (cancer treatment), and countless others. Indigenous peoples have used thousands of forest species for medicine, food, and materials for millennia. As forests disappear, we're driving species extinct before we even discover them, losing potential cures for diseases and solutions to problems we don't yet understand.</p>

                    <p>Tropical deforestation is driving a mass extinction event—current extinction rates are 100-1000 times the natural background rate, comparable to the five major mass extinctions in Earth's history. We're losing an estimated 10,000-100,000 species per year, most without even being scientifically described. This isn't just sad for nature lovers—it's an existential threat to civilization. Humans depend on biodiversity for food security (crop pollination, pest control, genetic diversity), ecosystem stability, disease regulation, and countless other services.</p>

                    <h4>4. SOIL CONSERVATION</h4>
                    <p>Forest soils are among the most fertile and productive on Earth, despite the paradox that tropical rainforests often grow on relatively nutrient-poor soils. The secret lies in rapid nutrient cycling—nutrients exist primarily in living biomass rather than soil. Tree roots create extensive underground networks that stabilize soil structure, prevent erosion, and create pathways for water infiltration. The forest canopy shields soil from direct rainfall impact that would otherwise compact and erode it. Fallen leaves, branches, and dead organisms decompose to form humus—organic matter that holds nutrients, retains moisture, and maintains soil structure.</p>

                    <p>When forests are cleared, soil degradation happens rapidly. Without tree roots holding soil in place, erosion accelerates dramatically—studies show erosion rates can increase 10-100 times after deforestation. Without leaf litter protecting soil from sun and rain, tropical soils can harden into concrete-like laterite within a few years. Without continuous organic matter input, soil fertility declines rapidly. This is why slash-and-burn agriculture quickly exhausts tropical forest soils, forcing farmers to clear new areas after just 2-3 years of cultivation. The Amazon's legendary fertility exists in the forest ecosystem, not the soil—clear the forest, and the fertility disappears.</p>

                    <p>Soil erosion from deforestation has cascading effects: sediment clogs rivers and reservoirs, reducing water storage capacity and navigation. Nutrient runoff from degraded soils pollutes waterways, causing algal blooms and dead zones. Loss of topsoil means land can no longer support agriculture, leading to desertification. The Dust Bowl of 1930s America resulted from agriculture on lands that should have remained grassland or forest. Haiti's severe poverty and vulnerability to disasters stems partly from losing 98% of forests, causing catastrophic soil erosion.</p>

                    <h3>🚨 Forest Over-Exploitation: Causes and Consequences</h3>
                    <p>DEFORESTATION STATISTICS: A CRISIS IN NUMBERS - We're losing forests at staggering rates. Global deforestation currently removes approximately 10 million hectares (25 million acres) of forest annually—an area equivalent to Iceland, or 27 football fields per minute. Since 1990, the world has lost 420 million hectares of forest (1 billion acres)—an area larger than India. Historical deforestation is even more extreme: since the agricultural revolution 10,000 years ago, humans have cleared approximately one-third of Earth's forests, reducing cover from ~6 billion hectares to ~4 billion hectares today.</p>

                    <p><strong>Deforestation in Borneo</strong></p>
                    <p>Figure 10: Satellite image showing dramatic deforestation in Borneo for palm oil plantations (Source: NASA)</p>

                    <p>The Amazon rainforest—Earth's largest and most biodiverse tropical forest—has lost approximately 17% of its original area, with another 17% degraded. Brazil alone lost 1.5 million hectares in 2021, a 22% increase from 2020 and the highest deforestation rate in 15 years. At current rates, scientists warn the Amazon could reach a "tipping point" within decades, where reduced rainfall (due to less evapotranspiration from fewer trees) causes the rainforest to transform into savanna—an irreversible ecological catastrophe that would release 90 billion tonnes of CO₂ and cause mass extinctions.</p>

                    <p>Southeast Asia has experienced catastrophic deforestation, losing 50-90% of original forest cover in Indonesia, Malaysia, Thailand, and Philippines. Indonesia had the world's highest deforestation rate in the 2000s, losing 8+ million hectares of tropical forest. Madagascar has lost 90% of its original forests, driving lemurs and countless unique species toward extinction. Central Africa's Congo Basin forests—the world's second-largest tropical forest—are increasingly threatened. Temperate and boreal forests face threats too: Canada's boreal forests are being logged for lumber and cleared for tar sands oil extraction. Europe lost most forests centuries ago (UK has just 13% forest cover). Even protected areas face illegal logging, encroachment, and degradation.</p>

                    <p>🔥 Amazon Deforestation Explained</p>
                    <p>Vox - 7 minutes - Investigative report with maps and data</p>
                    <p>Understand the drivers, scale, and consequences of Amazon rainforest destruction</p>

                    <h3>CAUSES OF FOREST OVER-EXPLOITATION</h3>

                    <h4>1. Agriculture and Livestock Ranching</h4>
                    <p>Agriculture is the driver of approximately 80% of deforestation globally. In tropical regions, forests are cleared for cattle ranching (particularly in Latin America), palm oil plantations (Southeast Asia), soy cultivation (Amazon and Cerrado in Brazil), coffee and cocoa (Africa and Latin America), and rubber plantations. Cattle ranching alone accounts for 40% of tropical deforestation—an area the size of Switzerland is cleared annually just for beef production. The Amazon loses forest primarily to cattle ranching and soy farms (soy mostly feeds livestock). Indonesia and Malaysia have destroyed vast rainforests for palm oil plantations—palm oil is in ~50% of packaged supermarket products.</p>

                    <p>Small-scale subsistence farming also causes deforestation, though much less per capita than industrial agriculture. Poor farmers practice "slash-and-burn" agriculture: cutting and burning forest to create temporary cropland. After 2-3 years when soil fertility is exhausted, they abandon the land and clear new forest. This traditional practice was sustainable when population density was low and forests could regenerate during long fallow periods. But population growth and lack of alternatives now make slash-and-burn farming unsustainable, contributing to permanent forest loss.</p>

                    <p>The perverse irony: much forest is cleared to produce commodities for export (beef, soy, palm oil, coffee, cocoa) to wealthy countries. Your hamburger, chocolate bar, and shampoo may contain deforestation. Consumer demand in Europe, USA, China, and Japan drives forest destruction in the tropics through global supply chains.</p>

                    <h4>2. Logging</h4>
                    <p>Industrial logging removes trees for timber, paper, and wood products. Legal logging is regulated (in theory) but often poorly enforced, leading to unsustainable harvest rates, illegal logging, and ecosystem degradation. Illegal logging is rampant—estimates suggest 15-30% of global timber trade involves illegally harvested wood, rising to 50-90% in tropical countries like Brazil, Indonesia, and Democratic Republic of Congo. Illegal logging costs governments billions in lost revenue and drives corruption.</p>

                    <p>Even "selective logging" that removes only commercially valuable trees causes significant damage: logging roads provide access for farmers and hunters, heavy machinery compacts soil, felling large trees damages surrounding vegetation, and removing keystone species disrupts ecosystem functioning. Studies show that selectively logged tropical forests lose 40-60% of their carbon storage and biodiversity compared to intact forests. Clear-cutting is far worse, removing all trees and often followed by conversion to agriculture or plantations.</p>

                    <h4>3. Infrastructure Development</h4>
                    <p>Roads, dams, mines, and urban expansion drive deforestation directly and indirectly. Roads are particularly destructive because they open previously inaccessible forest areas to settlement, agriculture, and logging. The pattern is tragically predictable: government builds road into forest (often for logging or mining access) → settlers follow the road → forest cleared in expanding "fishbone" patterns along the road → biodiversity collapses. Brazil's Trans-Amazonian Highway drove massive deforestation. China's Belt and Road Initiative is funding roads, dams, and railways across tropical forests in Asia, Africa, and Latin America.</p>

                    <p>Hydroelectric dams flood vast forest areas. Mining for metals, minerals, and fossil fuels devastates landscapes and pollutes watersheds. Gold mining in the Amazon uses mercury that poisons rivers and communities. Oil drilling degrades forests through infrastructure, pipelines, and spills. Urban sprawl consumes forests as cities expand—though this is a smaller factor globally than agriculture, it's significant in rapidly urbanizing regions.</p>

                    <h4>4. Fuelwood and Charcoal</h4>
                    <p>In developing countries, 2.5 billion people depend on fuelwood and charcoal for cooking and heating. This causes significant deforestation in dry forests of Africa and Asia where alternatives are scarce and poverty prevents transition to cleaner energy. In Haiti, 98% deforestation resulted largely from desperate poverty driving unsustainable charcoal production. However, fuelwood is a smaller deforestation driver than often assumed—agriculture is far more destructive.</p>

                    <h4>5. Climate Change (Feedback Loop)</h4>
                    <p>Climate change is now becoming a driver of forest loss, creating a dangerous feedback loop. Droughts stress forests, making them vulnerable to fires, pests, and diseases. The Amazon experienced severe droughts in 2005, 2010, and 2015-2016 that killed billions of trees. Western USA faces unprecedented wildfires driven by climate-change-induced drought, beetle infestations, and heat. Boreal forests in Canada and Siberia are experiencing increased fires as climate warms. As forests die and burn, they release stored carbon, accelerating climate change, which further stresses remaining forests—a feedback loop that could spiral out of control.</p>

                    <h4>Deforestation Drivers and Impacts</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f3f4f6' }}>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>FEEDBACK LOOPS</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>ENVIRONMENTAL IMPACTS</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>DEFORESTATION PROCESS</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>DRIVERS OF DEFORESTATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>More Climate Change → More Forest Stress</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Climate Change (10-15% Emissions)</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>10 Million Ha Lost/Year</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Agriculture 80% (Cattle, Soy, Palm Oil)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Forest Loss → Less Carbon Absorption</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Biodiversity Loss (Mass Extinction)</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Logging (Legal & Illegal)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Degraded Soils → More Poverty → More Clearing</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Water Cycle Disruption (Drought/Floods)</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Infrastructure (Roads, Dams, Mines)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Soil Degradation (Desertification)</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Fuelwood (2.5B people)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Indigenous Displacement</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Climate Change (Droughts, Fires)</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Figure 11: Complex web of deforestation drivers, impacts, and dangerous feedback loops</p>

                    <h3>CONSEQUENCES OF FOREST OVER-EXPLOITATION</h3>

                    <h4>1. Climate Change Acceleration</h4>
                    <p>Deforestation is both cause and consequence of climate change. When forests are cleared and burned, carbon stored in trees and soil releases as CO₂. Deforestation and forest degradation account for approximately 10-15% of global greenhouse gas emissions—about 5 billion tonnes of CO₂ equivalent annually. This is more than the emissions from all global transportation. Indonesia briefly became the world's third-largest emitter (after China and USA) in 2015 due to massive peat forest fires that released enormous carbon quantities.</p>

                    <p>But deforestation's climate impact goes beyond direct emissions. Losing forests means losing carbon sinks that would have absorbed future CO₂ emissions. If we continue current deforestation rates, we forfeit carbon sequestration capacity equivalent to billions of tonnes of CO₂. The Amazon rainforest has absorbed about 1/4 of all CO₂ emitted by fossil fuels over past decades. Research suggests parts of the Amazon have now become net carbon sources rather than sinks due to degradation, drought, and fires—a terrifying tipping point.</p>

                    <p>Deforestation also alters regional climates through changed albedo (surface reflectivity) and reduced evapotranspiration. Models predict that complete Amazon deforestation would reduce rainfall by 20-30% across South America, devastate agriculture, cause droughts, and transform the region's climate. Similar effects occur elsewhere—deforestation in West Africa has reduced Sahel rainfall, contributing to desertification.</p>

                    <h4>2. Biodiversity Collapse and Species Extinction</h4>
                    <p>Deforestation is the primary driver of Earth's sixth mass extinction event. When forests disappear, so do the species that depend on them. We're losing an estimated 10,000-100,000 species per year—extinction rates 100-1,000 times the natural background rate. Most extinctions occur in tropical forests cleared for agriculture. The Atlantic Forest of Brazil has lost 93% of its original area, and dozens of endemic species have gone extinct. Orangutans face extinction as Bornean and Sumatran rainforests are cleared for palm oil. The Sumatran tiger, elephant, and rhinoceros are critically endangered due to habitat loss. Mountain gorillas, lemurs, and countless bird, amphibian, and insect species are disappearing.</p>

                    <p>Habitat fragmentation is nearly as destructive as total clearing. When large forest blocks are divided into small, isolated patches by roads and clearings, many species cannot survive. Large mammals need extensive territories—tigers require 30-100 km², elephants may range over 1,000 km². Small forest fragments cannot support viable populations. Edge effects change microclimate, increasing temperature, reducing humidity, and allowing invasive species to penetrate forest interior. Studies show that forest fragments lose 50%+ of their species within decades of isolation.</p>

                    <p>Losing biodiversity isn't just aesthetically sad—it threatens ecosystem functioning that humans depend on. Forests with higher biodiversity are more productive, more resilient to disturbances, and provide better ecosystem services. Specialized pollinators, seed dispersers, and predators maintain ecosystem health. Remove them, and ecosystems collapse in cascading failures.</p>

                    <h4>3. Water Cycle Disruption</h4>
                    <p>Deforestation devastates water systems at multiple scales. At local scales, removing forest cover causes increased surface runoff and flash flooding because rain isn't absorbed by forest soils. Paradoxically, deforestation also causes droughts because forests no longer release water through evapotranspiration. Studies show that deforested areas experience more extreme floods and droughts—less water regulation overall.</p>

                    <p>At regional scales, deforestation reduces rainfall. The Amazon generates much of its own precipitation through evapotranspiration—moisture from the forest forms clouds that rain back onto the forest, cycling water 5-6 times before rivers carry it to the ocean. Models predict that losing 20-40% of Amazon forest could trigger a tipping point where reduced evapotranspiration causes rainfall to collapse, transforming rainforest into savanna. This wouldn't just affect the Amazon—atmospheric rivers carry Amazon moisture to agricultural regions throughout South America. Amazon deforestation could devastate agriculture in Brazil, Argentina, and Paraguay.</p>

                    <p>Watershed deforestation pollutes drinking water. Without forest filtration, sediment and agricultural runoff contaminate rivers and reservoirs. New York City spends billions maintaining Catskills Mountain forests to protect drinking water—far cheaper than building water treatment plants. Tropical cities face water crises as watershed forests are cleared: São Paulo (Brazil), Cape Town (South Africa), and Chennai (India) have experienced severe water shortages linked to forest loss.</p>

                    <h4>4. Soil Degradation and Desertification</h4>
                    <p>Without forest protection, tropical soils degrade rapidly. Erosion increases 10-100 times after deforestation, washing away fertile topsoil. Exposed to sun and rain, some tropical soils harden into laterite—a brick-like material useless for agriculture. This is why many deforested areas become permanent wastelands. The Sahel region of Africa is expanding southward as deforestation, overgrazing, and climate change drive desertification—productive land becoming desert.</p>

                    <p>Eroded sediment clogs rivers, damages coral reefs, and reduces reservoir capacity. The Three Gorges Dam in China is filling with sediment much faster than predicted due to upstream deforestation. Haiti's deforestation causes such severe erosion that topsoil washes into the ocean, turning coastal waters brown visible from space. Rebuilding lost soil takes centuries to millennia—soil forms incredibly slowly (1 cm of topsoil takes 100-1,000 years to develop).</p>

                    <h4>5. Impacts on Indigenous Peoples and Local Communities</h4>
                    <p>Over 1.6 billion people worldwide depend directly on forests for livelihoods, including 70 million indigenous peoples for whom forests are home, culture, and spiritual center. Deforestation displaces communities, destroys traditional ways of life, and often involves violence. Indigenous peoples are murdered defending forests—Brazil averages ~50 killings per year of environmental defenders, many indigenous. The Amazonian indigenous activist Bruno Pereira and journalist Dom Phillips were murdered in 2022 investigating illegal activities in indigenous territories.</p>

                    <p>Indigenous peoples are often the best forest stewards—studies show that indigenous territories maintain better forest cover and biodiversity than many official protected areas. Indigenous peoples hold customary rights to about 1/3 of remaining intact forests. Recognizing indigenous land rights is thus both a human rights issue and an effective conservation strategy. Yet indigenous lands are constantly invaded by loggers, miners, ranchers, and land-grabbers, often with government complicity.</p>

                    <p>Forest loss also perpetuates poverty. Rural communities lose access to non-timber forest products (fruits, nuts, medicines, materials) they depend on. Women particularly suffer—they typically gather fuelwood, and deforestation forces longer, more dangerous journeys. Degraded soils mean farmers must clear more forest to grow food, creating a poverty-deforestation spiral.</p>

                    <h2>✅ Forest Conservation and Sustainable Management</h2>

                    <h3>CONSERVATION STRATEGIES</h3>

                    <h4>1. Protected Areas</h4>
                    <p>Establishing national parks, wildlife reserves, and other protected areas has been conservation's primary strategy. About 15% of global land area is formally protected (though protection quality varies enormously). Well-managed protected areas successfully conserve biodiversity and ecosystems. Costa Rica has protected 25% of its territory, combining conservation with ecotourism that generates significant revenue. However, many protected areas are "paper parks"—designated but not effectively managed or enforced. Insufficient funding, corruption, illegal logging, and encroachment undermine protection. Protected areas are also often too small or isolated to maintain viable populations of large species.</p>

                    <h4>2. Sustainable Forest Management (SFM)</h4>
                    <p>Sustainable forestry aims to harvest timber while maintaining forest ecosystem health. Principles include: selective harvest rather than clear-cutting, maintaining forest structure and composition, protecting biodiversity and sensitive species, preserving soil and water quality, respecting indigenous and local community rights, and ensuring harvest rates don't exceed regeneration rates. Certification schemes like Forest Stewardship Council (FSC) verify sustainable practices.</p>

                    <p>When properly implemented, SFM can provide timber while maintaining many ecosystem services. Germany has practiced sustainable forestry for over 300 years, maintaining productive forests. However, truly sustainable forestry is expensive and difficult. Many "sustainably managed" forests are actually simplified, degraded ecosystems compared to natural forests. In tropics, sustainable harvest rates are very low—perhaps 1-2 trees per hectare per decade—making tropical SFM economically challenging compared to conversion to agriculture.</p>

                    <h4>3. Reforestation and Afforestation</h4>
                    <p>Reforestation (replanting previously forested land) and afforestation (creating new forests on non-forested land) can restore some forest benefits. Many countries have large-scale planting programs: China's "Great Green Wall" aims to plant 100 billion trees, India pledges to restore 26 million hectares, and the Bonn Challenge targets 350 million hectares of forest restoration globally by 2030.</p>

                    <p>However, tree planting isn't a silver bullet. Many programs plant fast-growing exotic species in monoculture plantations—these provide some carbon storage and wood products but minimal biodiversity or ecosystem service compared to natural forests. Plantations of eucalyptus, pine, or palm oil are not ecological equivalents of natural rainforest. Furthermore, natural forest regeneration is often more effective and cheaper than active planting if you simply protect land and let nature recover. The key is protecting and restoring native, biodiverse forests rather than industrial plantations.</p>

                    <p><strong>Forest restoration</strong></p>
                    <p>Figure 12: Forest landscape restoration combines protection, sustainable management, and community involvement (Source: IUCN)</p>

                    <h4>4. Community-Based Forest Management</h4>
                    <p>Empowering local communities to manage forests sustainably has proven highly effective. When communities have secure rights to forests and benefit economically from conservation, they become powerful stewards. Nepal's community forestry program transferred management of 1/3 of forests to local communities, resulting in improved forest conditions, biodiversity conservation, and poverty reduction. Mexico's community forest management supports thousands of communities that protect millions of hectares while generating sustainable income.</p>

                    <h4>5. Economic Incentives: REDD+ and PES</h4>
                    <p>REDD+ (Reducing Emissions from Deforestation and Forest Degradation) provides financial incentives for developing countries to protect forests. Rich countries pay poor countries to conserve forests, recognizing forests' carbon storage value. Dozens of REDD+ projects operate in Indonesia, Brazil, Congo Basin, and elsewhere. Payment for Ecosystem Services (PES) schemes similarly compensate landowners for maintaining forests that provide watershed protection, biodiversity conservation, or other services.</p>

                    <h4>6. Reducing Consumption and Changing Behavior</h4>
                    <p>Ultimately, forest conservation requires addressing demand driving deforestation. This means: reducing meat consumption (cattle ranching is the top deforestation driver), avoiding products containing palm oil, soy, or timber from unsustainable sources, supporting certification schemes (FSC for timber, RSPO for palm oil, though these have limitations), and advocating for strong forest protection policies. Companies are increasingly committing to "zero deforestation" supply chains in response to consumer pressure—though enforcement varies.</p>

                    <h3>🌟 Success Stories in Forest Conservation</h3>
                    <ul>
                        <li><strong>Costa Rica:</strong> Reversed deforestation through PES programs, ecotourism, and strong environmental policies. Forest cover increased from 20% (1980s) to 55% today (2020s).</li>
                        <li><strong>South Korea:</strong> Reforested 65% of country after Korean War devastation through massive government planting programs and community involvement.</li>
                        <li><strong>Brazil (2004-2012):</strong> Reduced Amazon deforestation by 80% through satellite monitoring, enforcement operations, protected areas expansion, and economic incentives.</li>
                        <li><strong>Bhutan:</strong> Maintains 72% forest cover through constitutional mandate requiring minimum 60% coverage. Practices Buddhist philosophy of environmental harmony and has carbon-negative economy.</li>
                        <li><strong>Community Forests, Nepal and Mexico:</strong> Empowering local communities to manage forests has increased forest cover while improving livelihoods, demonstrating that conservation and development can align.</li>
                    </ul>
                    <p style={{ textAlign: 'center', fontSize: '2em' }}>🎯</p>
                </div>


                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* PRACTICE SECTION */}


                <h3>Problem-Solving Practice</h3>

                <h4>📘 Problem 1: Energy Source Comparison</h4>
                <p><strong>Scenario:</strong> A developing country is deciding between building a 500 MW coal power plant or a combination of 300 MW solar farm + 200 MW wind farm (with battery storage) to meet growing electricity demand. Both options would generate approximately the same annual electricity output.</p>
                <p><strong>Data:</strong></p>
                <ul>
                    <li>Coal plant: Capital cost $1 billion, fuel cost $30/MWh, O&M $5/MWh, lifetime 40 years, CO₂ emissions 950g/kWh</li>
                    <li>Solar+Wind: Capital cost $900 million (including storage), fuel cost $0, O&M $8/MWh, lifetime 25-30 years, CO₂ emissions 35g/kWh (lifecycle)</li>
                    <li>Capacity factor: Coal 70%, Solar 22%, Wind 35%</li>
                    <li>Social cost of carbon: $50 per tonne CO₂</li>
                </ul>
                <p><strong>Question:</strong> Analyze and recommend which option is better considering: (a) total cost over 30 years including environmental costs, (b) employment generation, (c) energy security, and (d) scalability. Justify your recommendation with calculations and reasoning.</p>

                <details>
                    <summary><strong>Show Detailed Solution</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p><strong>Comprehensive Solution:</strong></p>
                        <p><strong>Step 1: Calculate annual electricity generation</strong></p>
                        <p>Coal plant: 500 MW × 8,760 hours/year × 0.70 capacity factor = 3,066,000 MWh/year = 3.07 TWh/year</p>
                        <p>Solar: 300 MW × 8,760 × 0.22 = 577,920 MWh/year = 0.58 TWh/year</p>
                        <p>Wind: 200 MW × 8,760 × 0.35 = 613,200 MWh/year = 0.61 TWh/year</p>
                        <p>Solar + Wind total: 1.19 TWh/year (We need more capacity or storage to match coal's 3.07 TWh. Let's adjust: we need to scale up by factor of 2.6. Revised: 780 MW solar + 520 MW wind ≈ same output as coal.)</p>
                        <p>Revised renewable cost: $900M × 2.6 = $2.34 billion capital cost</p>

                        <p><strong>Step 2: Calculate 30-year costs (Coal)</strong></p>
                        <p>Capital cost: $1 billion</p>
                        <p>Fuel costs over 30 years: 3,066,000 MWh/year × 30 years × $30/MWh = $2.76 billion</p>
                        <p>O&M costs: 3,066,000 × 30 × $5 = $0.46 billion</p>
                        <p>Environmental cost (CO₂): 3,066,000 MWh × 950 kg CO₂/MWh × 30 years = 87.4 million tonnes CO₂</p>
                        <p>At $50/tonne: 87.4M × $50 = $4.37 billion</p>
                        <p>TOTAL COAL COST: $1B + $2.76B + $0.46B + $4.37B = <strong>$8.59 billion</strong></p>

                        <p><strong>Step 3: Calculate 30-year costs (Renewables)</strong></p>
                        <p>Capital cost: $2.34 billion (Note: batteries may need replacement after 15 years, add ~$0.5B)</p>
                        <p>Fuel costs: $0 (sun and wind are free!)</p>
                        <p>O&M costs: 3,066,000 MWh × 30 years × $8/MWh = $0.74 billion</p>
                        <p>Environmental cost (CO₂): 3,066,000 × 35g/kWh × 30 = 3.2 million tonnes CO₂</p>
                        <p>At $50/tonne: 3.2M × $50 = $0.16 billion</p>
                        <p>TOTAL RENEWABLE COST: $2.34B + $0.5B + $0.74B + $0.16B = <strong>$3.74 billion</strong></p>

                        <p><strong>Step 4: Cost Comparison</strong></p>
                        <p>Coal: $8.59 billion over 30 years | Renewables: $3.74 billion over 30 years</p>
                        <p>Renewables save: $4.85 billion (56% cheaper!)</p>
                        <p>Even without accounting for environmental costs, renewables are competitive. With environmental costs included, renewables are dramatically cheaper.</p>

                        <p><strong>Step 5: Employment Generation</strong></p>
                        <p>Coal plant: ~500-800 direct jobs during construction (2-3 years), ~150-200 permanent operations jobs</p>
                        <p>Renewables: ~2,000-3,000 jobs during construction (shorter period but more labor-intensive), ~200-300 permanent O&M jobs spread across multiple sites, plus manufacturing jobs for panels/turbines</p>
                        <p>Advantage: Renewables generate more employment, especially short-term construction jobs</p>

                        <p><strong>Step 6: Energy Security</strong></p>
                        <p>Coal: Requires continuous fuel supply (import or domestic mining). Vulnerable to price volatility, supply disruptions, geopolitical tensions.</p>
                        <p>Renewables: Fuel is free and domestic (sun/wind available everywhere). No import dependence. Reduces foreign exchange spending on fuel imports.</p>
                        <p>Advantage: Renewables provide superior energy security</p>

                        <p><strong>Step 7: Scalability</strong></p>
                        <p>Coal: Limited scalability—requires large upfront investment, long construction time (5-7 years).</p>
                        <p>Renewables: Highly scalable—modular (can add capacity incrementally), faster deployment (1-2 years).</p>
                        <p>Advantage: Renewables are more scalable</p>

                        <p><strong>RECOMMENDATION:</strong> The country should choose the renewable energy option (solar + wind + storage).</p>
                        <p><strong>Justification:</strong> Economic (saves $4.85B), Employment (more jobs), Energy Security (no fuel imports), Environmental (96% less CO₂), Scalability (flexible expansion).</p>
                    </div>
                </details>

                <h4>📙 Problem 2: Forest Carbon Calculation</h4>
                <p><strong>Scenario:</strong> A tropical rainforest in Indonesia covering 10,000 hectares is proposed for clearing to establish palm oil plantations. Environmental impact assessment requires calculating carbon emissions from forest clearing.</p>
                <p><strong>Data:</strong></p>
                <ul>
                    <li>Forest biomass carbon density: 180 tonnes C/hectare (above-ground) + 40 tonnes C/hectare (below-ground roots)</li>
                    <li>Soil organic carbon: 120 tonnes C/hectare in top 1 meter</li>
                    <li>Assume 80% of biomass carbon and 25% of soil carbon will be released as CO₂ within 5 years of clearing</li>
                    <li>Molecular weight ratio: CO₂/C = 44/12 = 3.67</li>
                    <li>Palm oil plantation will store: 25 tonnes C/hectare (steady state after 10 years)</li>
                    <li>Social cost of carbon: $50 per tonne CO₂</li>
                </ul>
                <p><strong>Questions:</strong> Calculate total stored carbon, CO₂ emissions, net loss, and economic cost.</p>

                <details>
                    <summary><strong>Show Complete Solution</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p><strong>Step 1: Calculate total forest carbon storage</strong></p>
                        <p>Total storage: 1,800,000 + 400,000 + 1,200,000 = <strong>3,400,000 tonnes C</strong></p>

                        <p><strong>Step 2: Calculate carbon released from clearing</strong></p>
                        <p>Released: 1,760,000 (biomass) + 300,000 (soil) = <strong>2,060,000 tonnes C</strong></p>

                        <p><strong>Step 3: Convert carbon to CO₂ emissions</strong></p>
                        <p>CO₂ emissions = 2,060,000 × 3.67 = <strong>7,560,200 tonnes CO₂</strong> (1.64 million passenger cars equivalent!)</p>

                        <p><strong>Step 4: Calculate carbon storage in palm plantation</strong></p>
                        <p>Plantation storage: 25 tonnes C/ha × 10,000 ha × 3.67 = <strong>917,500 tonnes CO₂ equivalent</strong></p>

                        <p><strong>Step 5: Calculate net carbon loss</strong></p>
                        <p>Net permanent loss: 12,478,000 - 917,500 = <strong>11,560,500 tonnes CO₂ loss (93%)</strong></p>

                        <p><strong>Step 6: Calculate economic cost of emissions</strong></p>
                        <p>Economic cost = 7,560,200 × $50 = <strong>$378,010,000</strong></p>

                        <p><strong>Step 7: Carbon debt payback period analysis</strong></p>
                        <p>Annual CO₂ avoided by palm biodiesel ≈ 110,000 tonnes. Payback: 7,560,200 ÷ 110,000 = <strong>68.7 years</strong>.</p>
                        <p><strong>⚠️ CRITICAL CONCLUSIONS:</strong> Clearing rainforest emits 7.56M tonnes CO₂ ($378M damage). Palm stores only 7% of original carbon. Payback (69 years) exceeds plantation life (25-30 years). narrative is greenwashing.</p>
                    </div>
                </details>

                <h4>📕 Problem 3: Sustainable Forest Management</h4>
                <p><strong>Scenario:</strong> 5,000 hectares, 1M m³ volume, 4% growth, maintain 70% threshold (700k m³).</p>
                <details>
                    <summary><strong>Show Solution</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p>Truly sustainable forestry requires harvesting well below maximum biological yield to maintain ecosystem integrity. If current harvest (50,000 m³) exceeds annual growth (40,000 m³), the forest degrades. Economic optimization alone lead to degradation—only harvesting a portion of the surplus increment while strictly maintaining the 70% baseline ensures long-term forest survival.</p>
                    </div>
                </details>



                <h3>📊 Comprehensive Comparison & Analysis</h3>

                <h4>Energy Resources: Detailed Comparison Matrix</h4>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0', fontSize: '0.75em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Criterion</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Coal</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Natural Gas</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nuclear</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Solar PV</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Wind</th>
                                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Hydroelectric</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Renewability Status</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Non-renewable (300M years formation)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Non-renewable (millions years formation)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Non-renewable (uranium finite)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Renewable (sun lasts 5B years)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Renewable (continuous atmospheric circulation)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Renewable (water cycle continuous)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Greenhouse Gas Emissions</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very High: 820-1000g CO₂/kWh</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: 450-650g CO₂/kWh (plus methane leakage)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very Low: 12-15g CO₂/kWh (lifecycle)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very Low: 40-50g CO₂/kWh (lifecycle)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very Low: 11-15g CO₂/kWh (lifecycle)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low: 24-40g CO₂/kWh (varies by reservoir)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Levelized Cost ($/MWh)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>$60-150</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>$40-100</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>$120-200</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>$30-60</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>$30-80</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>$30-100</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Capacity Factor</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>60-80%</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>50-70%</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>85-95%</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>15-25%</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>25-45%</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>40-90%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Dispatchability</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Yes (Slow)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Yes (Fast)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>No (Baseload)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>No (Intermittent)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>No (Variable)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Yes (Excellent)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Construction Time</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>3-6 years</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>2-4 years</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>10-20 years</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>6-18 months</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>1-2 years</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>5-15 years</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Water Use</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very High</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very High</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very Low</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>None</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High Evaporation</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Air Pollution (non-GHG)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Severe: SO₂, NOₓ, PM2.5, mercury, heavy metals</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: NOₓ, some PM</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>None (during operation)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>None (during operation)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>None</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>None</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Resource Availability</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>130 years at current rates</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>50 years at current rates</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>90-130 years uranium</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Unlimited (5 billion years of sunlight)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Unlimited (continuous winds)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Limited by geography (suitable rivers)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Energy Security</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Vulnerable (import dependence for many countries)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Vulnerable (geopolitical supply risks)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate (uranium imports, proliferation concerns)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High (domestic, distributed generation)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High (domestic, distributed)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High (domestic, but drought vulnerable)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Safety Risks</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High: mining deaths, black lung, accidents</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: explosions, gas leaks, fracking impacts</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low frequency but catastrophic: meltdowns, waste</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very Low (manufacturing hazards only)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low (turbine failures rare, blade throws)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Dam failures (rare but catastrophic)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Job Creation (Jobs/MW)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>0.2-0.5 permanent jobs/MW</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>0.1-0.3 permanent jobs/MW</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>0.3-0.5 jobs/MW (specialized)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>3.5-4.5 jobs/MW (installation-heavy)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>2-3 jobs/MW</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>0.5-1.5 jobs/MW</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Scalability &amp; Modularity</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Limited (large plants, long build times)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Good (flexible sizes, quick build)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Poor (huge upfront investment, inflexible)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Excellent (1W to 1GW scale)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Excellent (modular, incremental)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Limited (geography constrained)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Future Cost Trajectory</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Rising (regulations, carbon taxes)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Volatile (supply dependent)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Rising (safety, waste costs increase)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Falling (learning curve continues)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Falling (technology improving)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Stable (mature technology)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Climate Change Vulnerability</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate (water scarcity affects cooling)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate (heat affects efficiency)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High (drought, heat cause shutdowns)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low (heat reduces efficiency ~10%)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low-Moderate (wind patterns may shift)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High (drought reduces generation)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Recycling &amp; Disposal</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Ash disposal (toxic), mine remediation</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Infrastructure decommissioning</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Radioactive waste (100,000+ year storage)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>95% recyclable (improving programs)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>85-95% recyclable (blade disposal challenge)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Decommissioning challenges (sediment, ecosystems)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><strong>💡 Key Insights:</strong> Cost Revolution (Renewables cheapest), Emissions Gap (10-100x), Nuclear's Dilemma (Expensive/Slow), Energy Security (Independence), Job Creation (Renewables 5-15x higher).</p>

                <h4>Forest Management Approaches: Comparison</h4>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0', fontSize: '0.7em' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ border: '1px solid #ccc', padding: '5px' }}>Criterion</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px' }}>Clear-Cutting</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px' }}>Selective Logging</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px' }}>Sustainable Forest Management</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px' }}>Protected Areas (No Extraction)</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px' }}>Community-Based Management</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Definition</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Complete removal of all trees from area</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Harvest only commercially valuable trees</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Harvest within regeneration capacity, maintaining ecosystem health</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>No commercial extraction allowed</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Local communities manage forests for multiple benefits</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Economic Return</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High short-term: Maximum immediate harvest</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: Regular harvest of valuable species</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate long-term: Lower harvest rates but sustainable indefinitely</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>No direct timber income (ecotourism possible)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: Diverse income streams (timber, NTFP, tourism)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Biodiversity Impact</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Catastrophic: 80-95% species loss, habitat destruction</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High: 40-70% diversity loss, disrupted ecosystem</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low-Moderate: Can maintain 70-90% of biodiversity if well-managed</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Excellent: Maintains full ecosystem integrity</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Good-Excellent: Communities often prioritize conservation</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Carbon Storage</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Massive loss: 70-90% of forest carbon released</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Significant loss: 30-50% carbon reduction</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate impact: 10-30% carbon reduction (varies by intensity)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Maximum: Preserves full carbon storage capacity</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Good: Maintains most carbon storage with light extraction</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Soil &amp; Water Protection</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Severe degradation: Erosion increases 10-100x</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate degradation: Roads, machinery compact soil</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low impact if proper practices followed (buffer zones, reduced impact logging)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Full protection: Maintains watershed functions</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Good protection: Community interest in maintaining water sources</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Regeneration Potential</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Poor: Degraded soil, seed source lost, invasives colonize</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: Some canopy remains but regeneration slow/altered</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Good: Designed to allow natural regeneration within decades</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Excellent: Natural succession undisturbed</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Good-Excellent: Light extraction allows regeneration</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Long-term Sustainability</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Unsustainable: Requires continuous new forest areas</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Often unsustainable: Extraction exceeds regeneration</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Sustainable: Designed for indefinite harvest if properly managed</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Sustainable: Ecosystem maintained indefinitely</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Sustainable: Communities have long-term incentive for conservation</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Implementation Challenges</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low: Simple, quick, low-skill</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: Requires planning, skilled workers</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High: Requires expertise, monitoring, long-term commitment, lower profits tempt cheating</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High: Requires funding, enforcement, addressing local needs</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High: Requires secure tenure, capacity building, fair governance</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Social Impact</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Negative: Displaces communities, destroys livelihoods, often involves violence</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Mixed: Jobs created but often unfair benefit distribution</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Positive if communities included: Sustainable livelihoods, respects rights</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Mixed: Conservation benefits but may restrict traditional use if poorly designed</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Very Positive: Empowers communities, poverty reduction, cultural preservation</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Examples</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Amazon deforestation for cattle, Borneo palm oil, Pacific Northwest until 1990s</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Tropical hardwood logging (teak, mahogany), Congo Basin, Amazon</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>FSC-certified forests in Sweden, Germany; some tropical concessions</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Costa Rica national parks, Amazon indigenous reserves, Yellowstone, Serengeti</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Nepal community forests, Mexico community forestry, Amazon indigenous territories</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '5px', fontWeight: 'bold' }}>Success Rate</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>N/A (environmentally catastrophic by definition)</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Low: Most operations unsustainable in practice</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate: Works when well-funded, enforced, and monitored</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>Moderate-High: Effective with adequate funding and enforcement</td>
                                <td style={{ border: '1px solid #ccc', padding: '5px' }}>High: When communities have secure rights and capacity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>🎯 Practice &amp; Apply Your Knowledge</h3>
                    <Quiz
                        title="Module 2.1 Quiz: Energy &amp; Forest Resources"
                        questions={quizQuestions}
                        subject="ES"
                        unitId={2}
                        moduleId={1}
                    />
                </div>

                <h3>✅ Comprehensive Mastery Assessment</h3>
                <h4>Test Your Complete Understanding</h4>
                <p>This comprehensive assessment tests your mastery of energy resources, forest ecosystems, and conservation strategies. Answer all questions thoughtfully.</p>
                <p><strong>Passing Score: 70% (7 out of 10 questions correct)</strong></p>
                <p><strong>Instructions:</strong></p>
                <ul>
                    <li>Answer all 10 questions to the best of your ability</li>
                    <li>For MCQs, click your chosen answer then check it</li>
                    <li>For written questions, think carefully and compare your answer to the model answer</li>
                    <li>Your goal is to demonstrate comprehensive understanding, not just memorization</li>
                    <li>You can retake the quiz as many times as needed</li>
                </ul>

                <h4>Question 1: Short Answer (Compare and Contrast)</h4>
                <p><strong>Question:</strong> Compare and contrast renewable and non-renewable energy resources in terms of environmental sustainability, economic viability, and energy security. Use specific examples and data in your answer. (Write 150-200 words)</p>
                <details>
                    <summary><strong>Show Model Answer</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p><strong>Comprehensive Model Answer:</strong></p>
                        <p>Renewable and non-renewable energy resources differ fundamentally in sustainability, economics, and security. Environmental sustainability: Renewable sources (solar, wind, hydro) regenerate continuously and produce minimal lifecycle emissions (15-50g CO₂/kWh), while non-renewable fossil fuels (coal, oil, gas) took millions of years to form and emit 450-1000g CO₂/kWh, driving climate change. For example, coal emits 20 times more CO₂ than wind power per kWh. Economic viability: Renewable energy costs have plummeted—utility-scale solar now costs $30-60/MWh compared to nuclear at $120-200/MWh, making renewables the cheapest electricity source in most markets. Solar and wind also have zero fuel costs, providing price stability. Energy security: Renewables offer superior security since sun and wind are domestic resources available everywhere, eliminating import dependence and price volatility that plague fossil fuels. For instance, Germany's renewable transition reduced fossil fuel imports by €10+ billion annually. However, renewables face intermittency challenges requiring storage or backup, while fossil fuels offer on-demand generation. Overall, renewables are increasingly superior across all three dimensions, explaining their rapid global growth from 20% to 29% of electricity generation (2010-2022) and projected dominance by 2050.</p>
                        <p><strong>Key Points Your Answer Should Include:</strong></p>
                        <ul>
                            <li>Regeneration: Renewables replenish on human timescales; fossil fuels take millions of years</li>
                            <li>Emissions comparison: Specific data showing 10-60x lower emissions for renewables</li>
                            <li>Cost trends: Renewables declining, now cheapest; fossil/nuclear rising</li>
                            <li>Energy security: Renewables = domestic/independent; fossils = import dependent/volatile</li>
                            <li>Specific examples: Actual numbers for costs, emissions, or real-world cases</li>
                            <li>Balanced perspective: Acknowledging intermittency challenge while explaining solutions</li>
                        </ul>
                    </div>
                </details>

                <h4>Question 2: Critical Analysis</h4>
                <p><strong>Question:</strong> Natural gas is often promoted as a "bridge fuel" to a renewable energy future. Critically evaluate this claim, discussing both supporting arguments and counterarguments. What does recent scientific evidence suggest about natural gas's role in climate change? (150-200 words)</p>
                <details>
                    <summary><strong>Show Model Answer</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p>Model answer demonstrates critical thinking about a controversial topic, evaluating both sides while reaching evidence-based conclusion. Students should show they understand the complexity beyond simple "gas is clean" marketing.</p>
                        <p><strong>Supporting arguments for "bridge fuel":</strong> Natural gas emits ~50% less CO₂ than coal per kWh (~450g vs ~1000g). It can back up intermittent renewables with fast-ramping capacity. It already exists as infrastructure in many countries, enabling faster transition than building all-new systems.</p>
                        <p><strong>Counterarguments (the stronger case):</strong> Methane leakage during extraction and transport (1-9% of production) has 80x the warming potency of CO₂ over 20 years, erasing the CO₂ advantage. Building new gas infrastructure locks in emissions for 30-40 years, incompatible with 2050 net-zero goals. Renewable costs have fallen so fast that the "bridge" may not be needed—batteries and demand response can now provide grid flexibility. IEA (2021) states no new fossil fuel development is compatible with 1.5°C pathway.</p>
                        <p><strong>Conclusion:</strong> Scientific evidence increasingly undermines the bridge fuel argument, especially when methane leakage is properly accounted for.</p>
                    </div>
                </details>

                <h4>Question 3: Problem-Solving</h4>
                <p><strong>Scenario:</strong> A country currently generates 70% electricity from coal, 20% from natural gas, and 10% from renewables. The government pledges to achieve 50% renewable electricity by 2030 (7 years away) while reducing CO₂ emissions by 40%. Is this target achievable? What strategy would you recommend, and what are the main barriers?</p>
                <details>
                    <summary><strong>Show Approach &amp; Solution</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p>This question tests ability to apply knowledge to real-world policy scenarios, evaluate feasibility, and propose solutions considering technical, economic, and political constraints.</p>
                        <p><strong>Feasibility analysis:</strong> Going from 10% to 50% renewable in 7 years is ambitious but achievable—comparable to what Germany, Denmark, and China have done. A 40% CO₂ reduction requires replacing most coal capacity, since coal produces ~3x the emissions of gas and ~20x renewables.</p>
                        <p><strong>Recommended strategy:</strong></p>
                        <ul>
                            <li>Immediate: Halt new coal permits; implement carbon price to make coal uneconomic</li>
                            <li>Years 1-3: Fast-deploy utility-scale solar and wind (6-18 month build time); upgrade grid infrastructure</li>
                            <li>Years 3-6: Add battery storage and demand response; retire oldest coal plants first</li>
                            <li>Years 6-7: Natural gas as backup only; achieve 50% renewables milestone</li>
                        </ul>
                        <p><strong>Main barriers:</strong> Grid reliability concerns during transition; stranded asset costs for coal plant owners; political resistance from coal communities; financing renewable buildout; supply chain constraints for panels/turbines.</p>
                        <p><strong>Conclusion:</strong> The target is achievable with strong policy, adequate financing, and a just transition plan for affected workers.</p>
                    </div>
                </details>

                <h4>Question 4: Forest Ecosystems</h4>
                <p><strong>Question:</strong> Explain how forests regulate regional and global climate through three distinct mechanisms. For each mechanism, describe the process and explain what happens when forests are destroyed. (150-200 words)</p>
                <details>
                    <summary><strong>Show Complete Answer</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p>Expected answer should cover the three mechanisms below. Each should describe the process AND what happens when forests are destroyed.</p>
                        <ol>
                            <li><strong>Carbon Sequestration:</strong> Photosynthesis removes atmospheric CO₂ and stores it in biomass (trunks, roots, leaves) and soils. Forests store 650+ Gt of carbon—more than the entire atmosphere. Deforestation releases this stored carbon as CO₂, contributing 10-15% of global greenhouse gas emissions. The Amazon alone stores ~150-200 Gt of carbon; its destruction would push global temperatures well beyond 1.5°C.</li>
                            <li><strong>Evapotranspiration:</strong> Forests pump enormous quantities of water vapor into the atmosphere through transpiration from leaves. This vapor forms clouds and generates rainfall, creating "flying rivers" of moisture. The Amazon generates rainfall for agricultural regions thousands of kilometers away. Deforestation breaks this cycle, reducing regional precipitation and causing droughts that can be self-reinforcing (drought kills more trees, releasing more carbon).</li>
                            <li><strong>Albedo (Reflectivity) Effects:</strong> Dark forest canopies absorb sunlight (low albedo, ~0.12-0.15), converting it to heat that drives atmospheric circulation. Cleared or degraded land reflects more light (high albedo), altering regional energy balance and wind patterns. In temperate regions, this can actually cause cooling locally but disrupts precipitation patterns regionally, affecting agriculture and water supplies far from the deforestation.</li>
                        </ol>
                    </div>
                </details>

                <h4>Question 5: Conservation Strategies</h4>
                <p><strong>Question:</strong> Community-based forest management has proven more effective than government-run protected areas in many cases. Explain why this approach works, what conditions are necessary for success, and provide at least two real-world examples. (150-200 words)</p>
                <details>
                    <summary><strong>Show Model Answer</strong></summary>
                    <div style={{ padding: '20px', border: '1px solid #eee', marginTop: '10px' }}>
                        <p><strong>Why it works:</strong> Local communities that depend directly on the forest have the strongest long-term incentive for sustainable management—unlike distant government agencies, their livelihoods, water, food security, and cultural identity are tied to forest health. Communities also provide far better day-to-day monitoring than infrequent government patrols. Many communities hold traditional ecological knowledge accumulated over generations about forest dynamics, sustainable harvest rates, and indicator species. When communities have formal rights and meaningful decision-making power, they invest in conservation because they capture the benefits.</p>
                        <p><strong>Conditions for success:</strong> Secure land tenure and legal rights (without which communities cannot exclude outsiders); fair benefit-sharing arrangements so all members benefit; capacity building and technical support; supportive national policy frameworks; fair governance structures within communities.</p>
                        <p><strong>Real-world examples:</strong></p>
                        <ul>
                            <li><strong>Nepal community forestry:</strong> Since the 1990s, over 1/3 of Nepal's forests transferred to ~19,000 community forest user groups. Forest cover increased from 26% to 44% in some regions, biodiversity improved, and poverty reduced simultaneously—a rare win-win.</li>
                            <li><strong>Mexico community forests:</strong> Over 8,000 communities manage ~60% of Mexico's forests, generate sustainable timber income, maintain biodiversity, and have lower deforestation rates than government-protected areas in many states.</li>
                        </ul>
                    </div>
                </details>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <h3>📄 Quick Reference Cheat Sheet</h3>
                <p>Bookmark this section for rapid review before exams! Here's everything you need to remember at a glance.</p>

                <h4>🔑 Key Definitions</h4>
                <ul>
                    <li><strong>Renewable Energy:</strong> Sources that regenerate on human timescales (solar, wind, hydro, biomass, geothermal)</li>
                    <li><strong>Non-Renewable Energy:</strong> Finite sources taking millions of years to form (fossil fuels, nuclear)</li>
                    <li><strong>Deforestation:</strong> Permanent removal of forest cover (10M ha/year globally)</li>
                    <li><strong>Carbon Sequestration:</strong> Process of capturing and storing atmospheric CO₂ (forests store 650+ Gt C)</li>
                    <li><strong>Sustainable Yield:</strong> Harvest rate that doesn't exceed regeneration capacity</li>
                    <li><strong>Capacity Factor:</strong> Actual output vs. maximum possible output over time</li>
                </ul>

                <h4>📐 Critical Numbers to Remember</h4>
                <ul>
                    <li><strong>Global forest area:</strong> 4.06 billion hectares (31% of land)</li>
                    <li><strong>Annual deforestation:</strong> 10 million hectares (area of Iceland)</li>
                    <li><strong>Forest carbon storage:</strong> 650+ gigatonnes (more than atmosphere)</li>
                    <li><strong>Coal emissions:</strong> ~1000g CO₂/kWh</li>
                    <li><strong>Natural gas emissions:</strong> ~450g CO₂/kWh (plus methane leakage)</li>
                    <li><strong>Solar/wind emissions:</strong> 15-50g CO₂/kWh (lifecycle)</li>
                    <li><strong>Agriculture drives:</strong> 80% of tropical deforestation</li>
                    <li><strong>Solar cost decline:</strong> 90% decrease (2010-2020)</li>
                </ul>

                <h4>⚙️ Energy Resources Summary</h4>
                <p><strong>Non-Renewable:</strong></p>
                <ul>
                    <li><strong>Coal:</strong> Highest emissions, 130 yr reserves, declining</li>
                    <li><strong>Oil:</strong> Transportation fuel, 50 yr reserves, geopolitical</li>
                    <li><strong>Natural Gas:</strong> "Bridge fuel" myth, methane leaks, 50 yr</li>
                    <li><strong>Nuclear:</strong> Low emissions but expensive, slow, waste problem</li>
                </ul>
                <p><strong>Renewable:</strong></p>
                <ul>
                    <li><strong>Solar:</strong> Cheapest, fastest growing, intermittent</li>
                    <li><strong>Wind:</strong> Cheap, scalable, variable, bird impacts</li>
                    <li><strong>Hydro:</strong> Mature, flexible, geography limited, dam impacts</li>
                </ul>

                <h4>🌳 Forest Ecosystem Services</h4>
                <ul>
                    <li><strong>Climate:</strong> Carbon sink (2.6 Gt CO₂/yr), temperature regulation</li>
                    <li><strong>Water:</strong> Evapotranspiration → rainfall, watershed protection, flood prevention</li>
                    <li><strong>Biodiversity:</strong> 80% of terrestrial species habitat</li>
                    <li><strong>Soil:</strong> Erosion prevention, nutrient cycling, fertility maintenance</li>
                    <li><strong>Direct Products:</strong> Timber, fuelwood, NTFPs, medicine</li>
                    <li><strong>Economic Value:</strong> $5-10 trillion/year in services</li>
                </ul>

                <h4>⚠️ Deforestation Drivers (Remember: ALIFC)</h4>
                <ul>
                    <li><strong>Agriculture (80%):</strong> cattle, soy, palm oil</li>
                    <li><strong>Logging:</strong> legal &amp; illegal timber extraction</li>
                    <li><strong>Infrastructure:</strong> roads, dams, mining, urban expansion</li>
                    <li><strong>Fuelwood:</strong> 2.5B people depend on it</li>
                    <li><strong>Climate feedback:</strong> droughts, fires, pests</li>
                </ul>

                <h4>✅ Conservation Strategies</h4>
                <ul>
                    <li><strong>Protected Areas:</strong> 15% of land (needs enforcement)</li>
                    <li><strong>Sustainable Management:</strong> FSC certification, reduced-impact logging</li>
                    <li><strong>Reforestation:</strong> Native species, natural regeneration best</li>
                    <li><strong>Community Management:</strong> Most effective when communities have rights</li>
                    <li><strong>REDD+:</strong> Payment for carbon storage</li>
                    <li><strong>Reducing Consumption:</strong> Less meat, sustainable sourcing</li>
                </ul>
            </section>
        </div>
    );
};

export default Module2_1;
