'use client';
import React, { useState, useEffect } from 'react';
import MainSidebar from '@/components/Sidebar';
import { useSession } from 'next-auth/react';

interface CourseOverviewProps {
  onModuleSelect: (unitId: number, moduleId: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ onModuleSelect }) => {
  const [activeTab, setActiveTab] = useState('learning-path');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const { data: session } = useSession();
  const [studentProgress, setStudentProgress] = useState<any[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchStudentProgress(session.user.email);
    }
  }, [session]);

  const fetchStudentProgress = async (email: string) => {
    const res = await fetch(`/api/progress?userEmail=${email}&subject=ES`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    const data = await res.json();
    if (data.success) {
      setStudentProgress(data.data);
    }
  };

  const units = [
    {
      id: 1,
      title: 'Environment-Ecosystem',
      description: 'Understand the basic concepts of environmental science, ecosystems, biodiversity, and the relationship between humans and the environment.',
      modules: [
        { id: '1.1', title: 'Definition, Scope and Importance - Need for Public Awareness', description: 'Basic concepts and scope of environmental science' },
        { id: '1.2', title: 'Multidisciplinary Nature of Environmental Sciences', description: 'Environmental awareness and the interdisciplinary nature of the field' },
        { id: '1.3', title: 'Concept of an Ecosystem', description: 'Understanding ecological systems as social networks' },
        { id: '1.4', title: 'Structure and Function of an Ecosystem: Producers', description: 'The living and non-living parts of nature' },
        { id: '1.5', title: 'Consumers, Decomposers, Ecological Succession & Food Chains', description: 'Trophic relationships and energy providers' },
        { id: '1.6', title: 'Food Webs & Ecological Pyramids', description: 'How biological communities change over time' },
        { id: '1.7', title: 'Energy Flow in Ecosystems & Types of Ecosystems', description: 'Energy transfer networks and pyramids' }
      ]
    },
    {
      id: 2,
      title: 'Natural Resources',
      description: 'Explore renewable and non-renewable energy, forest, water, and mineral resources.',
      modules: [
        { id: '2.1', title: 'Energy & Forest Resources: Renewable vs Non-renewable Energy and Forest Conservation', description: 'Energy sources and their environmental impact' },
        { id: '2.2', title: 'Deforestation & Case Studies: Timber Extraction, Mining, Dams and Effects on Forests and Tribal People', description: 'Forest management and deforestation issues' },
        { id: '2.3', title: 'Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts & Dams', description: 'Water conservation and utilization strategies' },
        { id: '2.4', title: 'Mineral Resources: Use and Exploitation', description: 'Mining impacts and resource extraction' },
        { id: '2.5', title: 'Food Resources: World Food Problems, Changes Caused by Agriculture and Overgrazing', description: 'Global food challenges, world food problems and overgrazing' },
        { id: '2.6', title: 'Effects of Modern Agriculture: Fertilizer-Pesticide Problems, Waterlogging & Salinity', description: 'Fertilizer-Pesticide problems, waterlogging and salinity' }
      ]
    },
    {
      id: 3,
      title: 'Biodiversity and its Conservation',
      description: 'Explore biodiversity definition, values, distribution patterns, threats, and conservation strategies for preserving life on Earth.',
      modules: [
        { id: '3.1', title: 'Definition: Genetic, Species and Ecosystem Diversity', description: 'Understanding the three levels of biodiversity' },
        { id: '3.2', title: 'Value of Biodiversity', description: 'Economic, social, ethical, and aesthetic values of biological diversity' },
        { id: '3.3', title: 'Biodiversity at Global, National and Local Levels', description: 'Distribution patterns and India as a mega-diversity nation' },
        { id: '3.4', title: 'Threats to Biodiversity', description: 'Habitat loss, poaching, conflicts, and other major threats' },
        { id: '3.5', title: 'Unit 3 Quiz', description: 'Test your knowledge of biodiversity and conservation' }
      ]
    },
    {
      id: 4,
      title: 'Environmental Pollution',
      description: 'Study various types of pollution, their causes, effects, control measures, and disaster management strategies.',
      modules: [
        { id: '4.1', title: 'Air Pollution: Definition, Causes, Effects and Control', description: 'Understanding air pollution sources and control technologies' },
        { id: '4.2', title: 'Water Pollution: Definition, Causes, Effects and Control', description: 'Water contamination sources and treatment methods' },
        { id: '4.3', title: 'Soil Pollution and Noise Pollution', description: 'Land contamination and acoustic pollution management' },
        { id: '4.4', title: 'Nuclear Hazards and Solid Waste Management', description: 'Radioactive risks and waste management strategies' },
        { id: '4.5', title: 'Unit 4 Quiz', description: 'Test your knowledge of environmental pollution' }
      ]
    },
    {
      id: 5,
      title: 'Human Population Change and the Environment',
      description: 'Explore population dynamics, women empowerment, environmental issues, and the role of IT in environmental management.',
      modules: [
        { id: '5.1', title: 'Population Growth and Population Explosion', description: 'Understanding population dynamics and growth patterns' },
        { id: '5.2', title: 'Women Empowerment and Population Control', description: 'Role of women empowerment in population management' },
        { id: '5.3', title: 'Environmental Issues: Global Warming, Acid Rain, Ozone Depletion', description: 'Major global environmental challenges and solutions' },
        { id: '5.4', title: 'Role of Information Technology in Environment and Human Health', description: 'IT applications in environmental monitoring and health' },
        { id: '5.5', title: 'Unit 5 Quiz', description: 'Test your knowledge of population and environmental interactions' }
      ]
    }
  ];

  const completedModules = studentProgress.length;
  const masteryModules = studentProgress.filter(p => p.percentage >= 80).length;
  const totalModules = units.reduce((acc, unit) => acc + unit.modules.length, 0);
  const completedPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  const masteryPercentage = totalModules > 0 ? Math.round((masteryModules / totalModules) * 100) : 0;

  return (
    <div className="flex">
      <div>
        <MainSidebar />
      </div>
      <div className="flex-1">
        <div className="lms-dashboard">
          <div className="lms-container">
            <div className="lms-header">
              <div className="header-left">
                <svg className="megaphone-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#4CAF50" strokeWidth="2" fill="none" />
                </svg>
                <h1 className="course-title">Environmental Science</h1>
              </div>
              <div className="header-right">
                <div className="progress-bar-container">
                  <div className="progress-segments">
                    {[...Array(20)].map((_, i) => {
                      const segmentThreshold = (i + 1) * 5;
                      return (
                        <div
                          key={i}
                          className={`segment ${completedPercentage >= segmentThreshold ? 'completed' :
                            masteryPercentage >= segmentThreshold ? 'mastery' : ''
                            }`}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="progress-text">{completedPercentage}% Completed • {masteryPercentage}% Mastery</div>
                </div>
              </div>
            </div>

            <nav className="tab-navigation">
              <button className={`tab ${activeTab === 'learning-path' ? 'active' : ''}`} onClick={() => setActiveTab('learning-path')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 3h12M2 8h12M2 13h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                Learning Path
              </button>
              <button className={`tab ${activeTab === 'sessions' ? 'active' : ''}`} onClick={() => setActiveTab('sessions')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                Sessions
              </button>
              <button className={`tab ${activeTab === 'assessments' ? 'active' : ''}`} onClick={() => setActiveTab('assessments')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Assessments
              </button>
              <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                About
              </button>
              <button className="tab" onClick={() => window.location.href = '/pages/livebooks'} style={{ marginLeft: 'auto' }}>
                Go to Livebooks
              </button>
            </nav>

            <div className="timeline-content">
              {units.map((unit) => (
                <div key={unit.id} className="unit-block">
                  <div className="unit-header-block" onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}>
                    <div className="module-badge">
                      <div className="badge-label">Module</div>
                      <div className="badge-number">{unit.id}</div>
                    </div>
                    <div className="unit-description">
                      <h2 className="unit-title">{unit.title}</h2>
                      <p className="unit-desc">{unit.description}</p>
                    </div>
                    <div className="expand-indicator">{expandedUnit === unit.id ? '▼' : '▶'}</div>
                  </div>

                  {expandedUnit === unit.id && (
                    <div className="lessons-timeline">
                      {unit.modules.map((module, idx) => (
                        <div
                          key={module.id}
                          className="lesson-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            onModuleSelect(unit.id, idx + 1);
                          }}
                        >
                          <div className="lesson-badge">{module.id}</div>
                          <div className="lesson-content">
                            <h3 className="lesson-title">{module.title}</h3>
                            <p className="lesson-desc">{module.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;