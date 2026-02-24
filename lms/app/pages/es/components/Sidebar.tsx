'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  selectedModule: string;
  onModuleSelect: (unitId: number, moduleId: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedModule, onModuleSelect, isOpen, onClose }) => {
  const units = [
    {
      id: 1,
      title: 'Unit 1: Environment-Ecosystem',
      modules: [
        'Definition, Scope and Importance - Need for Public Awareness',
        'Multidisciplinary Nature of Environmental Sciences',
        'Concept of an Ecosystem',
        'Structure and Function of an Ecosystem: Producers',
        'Consumers, Decomposers, Ecological Succession & Food Chains',
        'Food Webs & Ecological Pyramids',
        'Energy Flow in Ecosystems & Types of Ecosystems'
      ]
    },
    {
      id: 2,
      title: 'Unit 2: Natural Resources',
      modules: [
        'Energy & Forest Resources: Renewable vs Non-renewable Energy and Forest Conservation',
        'Deforestation & Case Studies: Timber Extraction, Mining, Dams and Effects on Forests and Tribal People',
        'Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts & Dams',
        'Mineral Resources: Use and Exploitation',
        'Food Resources: World Food Problems, Changes Caused by Agriculture and Overgrazing',
        'Effects of Modern Agriculture: Fertilizer-Pesticide Problems, Waterlogging & Salinity'
      ]
    },
    {
      id: 3,
      title: 'Unit 3: Biodiversity and its Conservation',
      modules: [
        'Definition: Genetic, Species and Ecosystem Diversity',
        'Value of Biodiversity',
        'Biodiversity at Global, National and Local Levels',
        'Threats to Biodiversity',
        'Unit 3 Quiz'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Environmental Pollution',
      modules: [
        'Air Pollution: Definition, Causes, Effects and Control',
        'Water Pollution: Definition, Causes, Effects and Control',
        'Soil Pollution and Noise Pollution',
        'Nuclear Hazards and Solid Waste Management',
        'Unit 4 Quiz'
      ]
    },
    {
      id: 5,
      title: 'Unit 5: Human Population Change and the Environment',
      modules: [
        'Population Growth and Population Explosion',
        'Women Empowerment and Population Control',
        'Environmental Issues: Global Warming, Acid Rain, Ozone Depletion',
        'Role of Information Technology in Environment and Human Health',
        'Unit 5 Quiz'
      ]
    }
  ];

  const [expandedUnit, setExpandedUnit] = useState<number | null>(
    selectedModule ? parseInt(selectedModule.split('.')[0]) : null
  );

  const [currentUnit] = selectedModule.split('.').map(Number);
  const [, currentModule] = selectedModule.split('.').map(Number);

  const handleUnitClick = (unitId: number) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  const handleModuleClick = (unitId: number, moduleIndex: number) => {
    onModuleSelect(unitId, moduleIndex);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link href="/pages/livebooks" className="back-to-livebooks">
          ← Back to Livebooks
        </Link>
        <div className="sidebar-header">
          <h2>Environmental Science</h2>
        </div>
        <nav className="sidebar-nav">
          {units.map((unit) => (
            <div key={unit.id} className="unit-section">
              <button
                className={`unit-button ${currentUnit === unit.id ? 'active' : ''}`}
                onClick={() => handleUnitClick(unit.id)}
              >
                {unit.title}
              </button>
              {expandedUnit === unit.id && (
                <ul className="module-list">
                  {unit.modules.map((module, index) => (
                    <li key={index}>
                      <button
                        className={`module-button ${currentModule === index + 1 ? 'active' : ''}`}
                        onClick={() => handleModuleClick(unit.id, index + 1)}
                      >
                        {module}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;