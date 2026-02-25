'use client';
import React from 'react';

interface ModuleNavigationProps {
    unitId: number;
    moduleId: number;
    setCurrentModule: (moduleId: number) => void;
    onBack?: () => void;
}

// Full flat list of all LS modules across all units
const ALL_MODULES = [
    // Unit 1
    { unitId: 1, moduleId: 1, label: 'Overview of Linguistics and its Sub-fields', unit: 'Unit 1' },
    { unitId: 1, moduleId: 2, label: 'Phonetics and Phonology', unit: 'Unit 1' },
    { unitId: 1, moduleId: 3, label: 'Morphology: The Study of Word Structure', unit: 'Unit 1' },
    { unitId: 1, moduleId: 4, label: 'Unit 1 Mastery Quiz', unit: 'Unit 1' },
    // Unit 2
    { unitId: 2, moduleId: 1, label: 'Syntax and Syntactic Structures', unit: 'Unit 2' },
    { unitId: 2, moduleId: 2, label: 'Semantics and Semantic Structures', unit: 'Unit 2' },
    { unitId: 2, moduleId: 3, label: 'Language Typology', unit: 'Unit 2' },
    { unitId: 2, moduleId: 4, label: 'Unit 2 Mastery Quiz', unit: 'Unit 2' },
];

const ModuleNavigation: React.FC<ModuleNavigationProps> = ({
    unitId,
    moduleId,
    setCurrentModule,
    onBack,
}) => {
    const currentIndex = ALL_MODULES.findIndex(
        (m) => m.unitId === unitId && m.moduleId === moduleId
    );

    const prev = currentIndex > 0 ? ALL_MODULES[currentIndex - 1] : null;
    const next = currentIndex < ALL_MODULES.length - 1 ? ALL_MODULES[currentIndex + 1] : null;

    const handleNav = (target: typeof ALL_MODULES[0]) => {
        if (target.unitId === unitId) {
            setCurrentModule(target.moduleId);
        } else {
            // Cross-unit navigation — update URL via pushState so page.tsx re-reads searchParams
            window.history.pushState({}, '', `/pages/ls?module=${target.unitId}.${target.moduleId}`);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                gap: '16px',
                margin: '48px 0 32px',
                padding: '0 4px',
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* PREVIOUS */}
            {prev ? (
                <button
                    onClick={() => handleNav(prev)}
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '20px 24px',
                        background: '#fff',
                        border: '1.5px solid #E5E2D9',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#6366f1';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(99,102,241,0.12)';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E2D9';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(0)';
                    }}
                >
                    <span style={{ fontSize: '22px', flexShrink: 0, color: '#6366f1' }}>←</span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 }}>
                        <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#AAA' }}>
                            {prev.unit} · Previous
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#121212', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {prev.label}
                        </span>
                    </span>
                </button>
            ) : (
                <div style={{ flex: 1 }} />
            )}

            {/* NEXT */}
            {next ? (
                <button
                    onClick={() => handleNav(next)}
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '16px',
                        padding: '20px 24px',
                        background: '#6366f1',
                        border: '1.5px solid #6366f1',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        textAlign: 'right',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 16px rgba(99,102,241,0.25)',
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = '#4f46e5';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#4f46e5';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = '#6366f1';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#6366f1';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(0)';
                    }}
                >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)' }}>
                            {next.unit} · Next
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {next.label}
                        </span>
                    </span>
                    <span style={{ fontSize: '22px', flexShrink: 0, color: '#fff' }}>→</span>
                </button>
            ) : onBack ? (
                <button
                    onClick={onBack}
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '16px',
                        padding: '20px 24px',
                        background: '#6366f1',
                        border: '1.5px solid #6366f1',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        textAlign: 'right',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 16px rgba(99,102,241,0.25)',
                    }}
                >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)' }}>
                            Complete
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Back to Overview</span>
                    </span>
                    <span style={{ fontSize: '22px', color: '#fff' }}>↩</span>
                </button>
            ) : null}
        </div>
    );
};

export default ModuleNavigation;
