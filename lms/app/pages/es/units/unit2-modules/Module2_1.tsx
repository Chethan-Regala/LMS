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
                <p><strong>4. BIOMASS AND BIOENERGY</strong> - Biomass includes plant matter, agricultural residues, forestry waste, animal waste, and organic municipal waste that can be burned directly for heat, converted into liquid biofuels (ethanol, biodiesel), or gasified for electricity generation. Traditional biomass (wood, dung, crop residues) has been humanity's primary energy source for millennia and still provides cooking and heating energy for 2.5 billion people in developing countries. Modern bioenergy is more sophisticated: first-generation biofuels (corn ethanol, soy biodiesel), second-generation biofuels from non-food biomass (cellulosic ethanol), and advanced biofuels from algae and waste oils. Biomass provides about 10% of global primary energy.</p>
                <p><strong>5. GEOTHERMAL ENERGY</strong> - Earth's interior contains vast amounts of heat—temperatures reach 5,000-7,000°C at the core. Geothermal energy taps into this heat through wells drilled 1-4 km deep, extracting hot water or steam to drive turbines. Geothermal power plants generate about 15 GW globally, concentrated in geologically active regions: USA, Indonesia, Philippines, Turkey, New Zealand, Mexico, Italy, and Kenya. Geothermal offers unique benefits: continuous baseload generation (24/7), very small land footprint, and very low lifecycle emissions. Challenges include geographic restrictions, high upfront drilling costs, and potential for induced seismicity.</p>
                <p><strong>6. OCEAN ENERGY</strong> - The ocean contains enormous energy in multiple forms: tidal energy from gravitational pull, wave energy from wind, ocean thermal energy conversion (OTEC), and salinity gradient energy. Ocean energy is at early development stages—total global installed capacity is only about 0.5 GW, mostly tidal barrages. Potential advantages include predictability, high energy density, and vast theoretical resource. Challenges include harsh marine environment, high costs, and environmental impacts on marine ecosystems.</p>

                {/* COMPARISON - SHORT VERSION FOR NOW */}
                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0' }}>Comprehensive Comparison: Energy Resources</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#e2e8f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Criterion</th>
                                    <th style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Coal</th>
                                    <th style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Oil/Gas</th>
                                    <th style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Nuclear</th>
                                    <th style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Renewables</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>Renewability</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Non-renewable</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Non-renewable</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Non-renewable</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Renewable</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f1f5f9' }}>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>CO₂ Emissions</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Very High (~1000g)</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>High (450-650g)</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Low (~15g)</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Very Low (15-50g)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>Cost per kWh</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>$0.05-0.15</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>$0.05-0.20</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>$0.12-0.20</td>
                                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>$0.03-0.08</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '12px', border: '1px solid #fecaca', margin: '40px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#9f1239' }}>⚠️ Common Misconceptions About Energy</h4>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontWeight: 'bold', color: '#be123c', margin: '0 0 5px 0' }}>Misconception #1: "Renewable energy can never fully replace fossil fuels"</p>
                        <p style={{ color: '#e11d48', fontSize: '0.9em', margin: 0 }}><strong>Reality:</strong> Multiple peer-reviewed studies demonstrate that 100% renewable energy systems are technically feasible and economically viable. The International Energy Agency (IEA) projects that solar could become the world's largest source of electricity by 2035. New renewable capacity is now cheaper than operating existing coal plants in most markets.</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontWeight: 'bold', color: '#be123c', margin: '0 0 5px 0' }}>Misconception #2: "Nuclear power is a clean, green solution to climate change"</p>
                        <p style={{ color: '#e11d48', fontSize: '0.9em', margin: 0 }}><strong>Reality:</strong> While nuclear generates low-carbon electricity, calling it "clean and green" ignores serious problems. Nuclear is extremely expensive ($6-12 billion per reactor) and takes 10-20 years to build. Every dollar spent on nuclear could generate 5-10 times more carbon-free energy if invested in solar/wind.</p>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold', color: '#be123c', margin: '0 0 5px 0' }}>Misconception #3: "Natural gas is a 'clean' or 'bridge' fuel"</p>
                        <p style={{ color: '#e11d48', fontSize: '0.9em', margin: 0 }}><strong>Reality:</strong> Natural gas framing ignores methane leakage throughout the supply chain. Methane is 84x more potent than CO₂ over 20 years. Studies reveal 2-6% leakage into the atmosphere, making it potentially worse than coal over short timescales.</p>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* PART II */}
                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '40px 0' }}>
                    <h2 style={{ margin: 0, color: '#166534', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ backgroundColor: '#86efac', color: '#fff', padding: '5px 12px', borderRadius: '8px', fontSize: '0.6em' }}>PART II</span>
                        🌲 Forest Resources and Conservation
                    </h2>
                </div>

                <h3>What Are Forest Resources?</h3>
                <p>Forest resources encompass all the valuable products, services, and ecological functions that forests provide to humanity and the planet. Forests cover approximately 31% of Earth's land area (about 4.06 billion hectares or 10 billion acres), though this represents a dramatic decline from pre-agricultural times when forests covered nearly 6 billion hectares—we've lost one-third of Earth's forests. These ecosystems are among the most biologically diverse and ecologically important habitats on Earth, playing absolutely critical roles in climate regulation, water cycles, soil conservation, and biodiversity support that make life on Earth possible.</p>

             

                <p>Forests provide two broad categories of value: direct use values (tangible products we extract) and indirect use values (ecosystem services that benefit us without extraction). Direct products include timber for construction and furniture, fuelwood for cooking and heating (still the primary energy source for 2.5 billion people), non-timber forest products like fruits, nuts, mushrooms, medicinal plants, resins, rubber, and rattan, and bushmeat. Indirect services are even more valuable: climate regulation through carbon sequestration (forests absorb about 2.6 billion tonnes of CO₂ annually, approximately 1/3 of fossil fuel emissions), water cycle regulation (forests influence precipitation patterns and protect watersheds), soil conservation (tree roots prevent erosion, forest litter maintains soil fertility), air purification (trees filter pollutants), pollination services, and biodiversity habitat (forests contain 80% of terrestrial species).</p>

                <div style={{ backgroundColor: '#f0f9ff', padding: '25px', borderRadius: '12px', border: '1px solid #bae6fd', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#075985' }}>📌 Types of Forests:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#0369a1', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Tropical Rainforests:</strong> Located near equator, characterized by high biodiversity, dense vegetation, year-round rainfall, and rapid nutrient cycling. Contain {'>'}50% of Earth's terrestrial species despite covering just 6% of land.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Temperate Forests:</strong> Found in mid-latitudes, characterized by deciduous trees that lose leaves seasonally, moderate climate, and distinct seasons.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Boreal Forests (Taiga):</strong> Vast coniferous forests in northern latitudes, characterized by cold climate, coniferous trees, and massive carbon storage in soils and trees. Largest terrestrial biome.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Mangrove Forests:</strong> Coastal forests in tropical/subtropical regions, characterized by salt-tolerant trees. Critical for coastal protection and carbon sequestration (store 3-5x more carbon per area than terrestrial forests).</li>
                        <li><strong>Dry Forests:</strong> Semi-arid regions with seasonal rainfall, characterized by drought-resistant species. Among most threatened forest types globally.</li>
                    </ul>
                </div>

                <h3>The Importance of Forests</h3>
                <h4>1. Carbon Sequestration and Climate Regulation</h4>
                <p>Forests are Earth's primary terrestrial carbon sinks, absorbing CO₂ from the atmosphere through photosynthesis and storing carbon in biomass (trunks, branches, leaves, roots) and soils. Global forests store approximately 296 gigatonnes (billion tonnes) of carbon in their biomass alone, plus another 400+ gigatonnes in forest soils—that's more carbon than exists in the entire atmosphere. Growing forests actively sequester about 2.6 billion tonnes of CO₂ annually, offsetting roughly one-third of global fossil fuel emissions.</p>

          

                <h4>2. Water Cycle Regulation</h4>
                <p>Forests profoundly influence water cycles at local, regional, and even global scales through several mechanisms. Tree roots absorb groundwater and transport it upward, where it evaporates from leaves. Combined with evaporation from soil and water surfaces, this "evapotranspiration" returns 40-60% of rainfall back to the atmosphere locally. Forests act as natural water filters and storage systems. Tree canopies intercept rainfall, slowing its descent and allowing gradual absorption into soil. Major cities worldwide—New York, Tokyo, Bogotá, Vienna—depend on forested watersheds for drinking water.</p>

                <h4>3. Biodiversity Habitat</h4>
                <p>Forests are Earth's biodiversity hotspots, containing an estimated 80% of terrestrial plant, animal, and insect species despite covering just 31% of land. A single hectare of tropical rainforest can contain 200+ tree species—more diversity than exists in all of North America. Biodiversity isn't just about charismatic species—it's about ecosystem functioning and resilience. Many forest species have direct human value: 25% of pharmaceutical drugs derive from forest plants, including aspirin, morphine, and quinine.</p>

                <h4>4. Soil Conservation</h4>
                <p>Tree roots create extensive underground networks that stabilize soil structure, prevent erosion, and create pathways for water infiltration. Fallen leaves, branches, and dead organisms decompose to form humus—organic matter that holds nutrients and retains moisture. When forests are cleared, soil degradation happens rapidly; erosion rates can increase 10-100 times after deforestation.</p>

                <div style={{ backgroundColor: '#fff1f2', padding: '25px', borderRadius: '12px', border: '1px solid #fecaca', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#9f1239' }}>🚨 Forest Over-Exploitation: Causes and Consequences</h3>
                    <p style={{ color: '#be123c', fontStyle: 'italic', marginBottom: '15px' }}>Global deforestation currently removes approximately 10 million hectares annually—an area equivalent to Iceland, or 27 football fields per minute.</p>

                    <h4 style={{ color: '#9f1239', margin: '20px 0 10px 0' }}>Causes (The ALIFC Framework):</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#be123c', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Agriculture (80%):</strong> Cattle ranching (top driver), soy, palm oil, and cocoa/coffee plantations. Industrial agriculture is the single largest threat.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Logging:</strong> Legal and rampant illegal logging (estimates suggest up to 90% in tropical countries). Selective logging often degrades up to 60% of forest value even if some trees remain.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Infrastructure:</strong> Roads open forests to settlement (fishbone pattern), while dams flood vast areas.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Fuelwood/Charcoal:</strong> 2.5 billion people depend on wood for energy, particularly in dry regions of Africa and Asia.</li>
                        <li><strong>Climate Change:</strong> Created feedback loops where droughts increase fires/pests, leading to more forest loss and CO₂ release.</li>
                    </ul>

                    <h4 style={{ color: '#9f1239', margin: '25px 0 10px 0' }}>Consequences:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#be123c', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Climate Acceleration:</strong> 10-15% of global emissions. Loss of carbon sinks makes future warming harder to control.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Biodiversity Collapse:</strong> 10k-100k species lost per year. Habitat fragmentation isolates populations until they can no longer survive.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Water Disruption:</strong> Flash floods followed by extreme droughts. Regional rainfall collapses (Amazon's 'flying rivers' disappearing).</li>
                        <li><strong>Indigenous Rights:</strong> Displacement and violence against forest defenders. Loss of traditional knowledge and cultural genocide.</li>
                    </ul>
                </div>

                <h3>Forest Conservation and Sustainable Management</h3>
                <p><strong>1. Protected Areas:</strong> About 15% of land is protected, but many are "paper parks" with no enforcement. Costa Rica is the gold standard, protecting 25% of its territory.</p>
                <p><strong>2. Sustainable Forest Management (SFM):</strong> Logging within regeneration capacity. FSC certification helps consumers choose sustainable wood.</p>
                <p><strong>3. Reforestation vs. Afforestation:</strong> Replanting and creating new forests. Note: Industrial monoculture plantations are NOT ecological equivalents to natural forests.</p>
                <p><strong>4. Community-Based Management:</strong> Giving local people secure land rights is the most effective strategy. Nepal and Mexico have seen massive success with this approach.</p>
                <p><strong>5. Economic Incentives (REDD+):</strong> Paying countries to keep forests standing for their carbon storage value.</p>
                <p><strong>6. Reducing Consumption:</strong> Addressing the demand for meat, palm oil, and unsustainable timber that drives 80% of clearing.</p>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '30px 0' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#166534' }}>🌟 Success Stories:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#15803d', fontSize: '0.95em' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Costa Rica:</strong> Forest cover increased from 20% to 55% via the PES program.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Bhutan:</strong> Constitutional mandate for 60% forest cover (currently at 72%).</li>
                        <li style={{ marginBottom: '10px' }}><strong>South Korea:</strong> Reforested 65% of the country after complete devastation.</li>
                        <li><strong>Nepal & Mexico:</strong> Community-led initiatives that increased cover while reducing poverty.</li>
                    </ul>
                </div>

                <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #eee' }} />

                {/* PRACTICE SECTION */}


                <h3>📘 Problem-Solving Practice</h3>

                <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#334155' }}>Problem 1: Energy Source Comparison</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Scenario:</strong> Choosing between 500 MW coal vs 300 MW solar + 200 MW wind farm (with storage).</p>
                        <p><strong>Solution:</strong> While coal has higher energy density, its social cost of carbon alone adds $50/tonne CO₂. Over 30 years, coal emissions (~950g/kWh) would generate millions of tonnes of CO₂ costs that far exceed the capital savings. Solar/wind also generates 5-15x more local jobs.</p>
                    </div>
                </details>

                <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#334155' }}>Problem 2: Forest Carbon Calculation</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Scenario:</strong> Clearing 10,000 ha of tropical rainforest for palm oil.</p>
                        <p><strong>Solution:</strong> Clearing 10k ha (180 tC biomass + 120 tC soil) releases approx. 11 million tonnes of CO₂ equivalent. A palm oil plantation stores only 25 tC/ha. The "carbon debt" created would take over 150 years of biodiesel production to offset, making the clearing ecologically net-negative.</p>
                    </div>
                </details>

                <details style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#334155' }}>Problem 3: Sustainable Forest Management</summary>
                    <div style={{ marginTop: '15px', color: '#475569', fontSize: '0.9em' }}>
                        <p><strong>Solution:</strong> Maximum sustainable yield must ensure volume stays above 70% threshold. If growth is 4% but harvest is 50k m³/year, the extraction exceeds regeneration. A sustainable schedule requires reducing harvest to allow the 70% base-stock to remain undisturbed while only harvesting the surplus increment.</p>
                    </div>
                </details>

                <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>📊 Energy Resources: Detailed Comparison Matrix</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#334155', color: '#fff' }}>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Criterion</th>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Coal</th>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Oil/Gas</th>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Nuclear</th>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Solar</th>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Wind</th>
                                    <th style={{ padding: '8px', border: '1px solid #475569' }}>Hydro</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Energy Density</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>High (24 MJ/kg)</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>High (45-55 MJ/kg)</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Extreme (80M MJ/kg)</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Low</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Low</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Medium</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f1f5f9' }}>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Capacity Factor</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>60-80%</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>50-90%</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>92% (Baseload)</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>15-25%</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>25-45%</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>40-60%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Lifecycle CO₂</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>~1000g/kWh</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>450-650g/kWh</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>~12g/kWh</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>~48g/kWh</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>~11g/kWh</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>~24g/kWh</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f1f5f9' }}>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Env/Social Risk</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Very High</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>High (Methane)</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Catastrophic</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Low</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>Low</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>High (Dams)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', border: '1px solid #dcfce7', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#166534' }}>🌲 Forest Management Approaches: Comparison</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#166534', color: '#fff' }}>
                                    <th style={{ padding: '12px', border: '1px solid #15803d' }}>Approach</th>
                                    <th style={{ padding: '12px', border: '1px solid #15803d' }}>Primary Goal</th>
                                    <th style={{ padding: '12px', border: '1px solid #15803d' }}>Key Advantage</th>
                                    <th style={{ padding: '12px', border: '1px solid #15803d' }}>Main Challenge</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7', fontWeight: 'bold' }}>Strict Protection</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Biodiversity preservation</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Highest ecological integrity</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>"Paper Parks" / Conflict</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f0fdf4' }}>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7', fontWeight: 'bold' }}>SFM (Sustainable)</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Continuous timber yield</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Economic sustainability</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Monitoring illegal logging</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7', fontWeight: 'bold' }}>Community-Based</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Livelihoods + Conservation</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>High local support/success</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Technical capacity needs</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f0fdf4' }}>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7', fontWeight: 'bold' }}>REDD+ (Payments)</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Carbon sequestration</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Global funding stream</td>
                                    <td style={{ padding: '10px', border: '1px solid #dcfce7' }}>Measurement & Leakage</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f1f5f9', padding: '30px', borderRadius: '16px', margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>🎓 Comprehensive Mastery Assessment</h3>
                    <div style={{ color: '#334155', fontSize: '0.95em' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Q1. Explain the 'Energy Trilemma' in the context of transitioning from fossil fuels to renewables.</p>
                        <p style={{ marginLeft: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Focus on balancing energy security (availability), energy equity (affordability), and environmental sustainability (low carbon).</p>

                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Q2. How does forest fragmentation differ from total deforestation, and why is it sometimes more dangerous for species?</p>
                        <p style={{ marginLeft: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Discuss the 'edge effect', isolation of gene pools, and increased vulnerability to fires/pests in small forest islands.</p>

                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Q3. Contrast the environmental impacts of a large-scale hydroelectric dam vs. a utility-scale solar farm.</p>
                        <p style={{ marginLeft: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Include land displacement, impact on aquatic vs terrestrial biodiversity, and methane emissions from reservoirs.</p>

                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Q4. Why is 'Community Forest Management' considered the most successful conservation strategy in the 21st century?</p>
                        <p style={{ marginLeft: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Discuss local ownership, traditional ecological knowledge, and the failure of 'top-down' exclusionary models.</p>

                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Q5. Analyze the role of 'Energy Efficiency' as the "First Fuel" in achieving climate goals.</p>
                        <p style={{ marginLeft: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Explain why avoiding a unit of energy through efficiency is always cheaper and cleaner than producing a unit of renewable energy.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <h4 style={{ color: '#1e293b', margin: '0', fontSize: '1.1em' }}>
RENEWABLE AND NON-RENEWABLE RESOURCES ☀️🌲 Differences and Examples!
                    </h4>
                </div>
                <div style={{ maxWidth: '640px', margin: '0 auto 30px auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>

                        <iframe

                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/MQEiQE_wVMw?si=40EwMtQUazRWXjnZ"
                            title="YouTube video player"
                            allowFullScreen
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>

                <div style={{ margin: '60px 0 40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>🎯 Practice & Apply Your Knowledge</h3>
                    <Quiz
                        title="Module 2.1 Quiz: Energy & Forest Resources"
                        questions={quizQuestions}
                        subject="ES"
                        unitId={2}
                        moduleId={1}
                    />
                </div>

                <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                <div style={{ margin: '40px 0' }}>
                    <h3 style={{ margin: '0 0 20px 0' }}>📄 Quick Reference Cheat Sheet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>Energy Metrics</p>
                            <ul style={{ fontSize: '0.9em', paddingLeft: '20px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '5px' }}>Coal: ~1000g CO₂/kWh</li>
                                <li style={{ marginBottom: '5px' }}>Solar/Wind: 15-50g CO₂/kWh</li>
                                <li>Fossil Fuel Era: 82% global energy</li>
                            </ul>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>Forest Facts</p>
                            <ul style={{ fontSize: '0.9em', paddingLeft: '20px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '5px' }}>Area: 31% of land</li>
                                <li style={{ marginBottom: '5px' }}>Loss: 10M ha/year (Iceland size)</li>
                                <li>Carbon storage: 650+ gigatonnes</li>
                            </ul>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>Exam Tips</p>
                            <ul style={{ fontSize: '0.9em', paddingLeft: '20px', color: '#475569', margin: 0 }}>
                                <li style={{ marginBottom: '5px' }}>Use the ALIFC acronym</li>
                                <li style={{ marginBottom: '5px' }}>Link energy to forest feedbacks</li>
                                <li>Mention case studies (Bhutan, Costa Rica)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_1;
