import React from 'react';
import type { FactsAndFeatures } from '../types';

interface FactsAndFeaturesProps {
  data: FactsAndFeatures;
}

const renderFacts = (facts: any) => {
    if (facts.Included && Array.isArray(facts.Included)) {
        return <p><span className="font-semibold">Included: </span>{facts.Included.join(', ')}</p>
    }
    if (Array.isArray(facts)) {
        return <div className="flex flex-wrap gap-2">{facts.map(fact => <span key={fact} className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{fact}</span>)}</div>
    }
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            {Object.entries(facts).map(([key, value]) => (
                <li key={key}><span className="font-semibold">{key}:</span> {String(value)}</li>
            ))}
        </ul>
    );
}

const FactsAndFeatures: React.FC<FactsAndFeaturesProps> = ({ data }) => {
  return (
    <div>
       <h2 className="text-2xl font-bold text-gray-800 mb-4">Facts & Features</h2>
       <div className="space-y-6">
        {Object.entries(data).map(([sectionTitle, sections]) => (
            <div key={sectionTitle}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{sectionTitle}</h3>
                <div className="pl-4 border-l-2 border-primary space-y-4">
                    {Object.entries(sections).map(([subSectionTitle, facts]) => (
                        <div key={subSectionTitle}>
                            <h4 className="font-semibold text-gray-700">{subSectionTitle}</h4>
                            <div className="mt-1 text-gray-600">
                                {renderFacts(facts)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
       </div>
    </div>
  );
};

export default FactsAndFeatures;