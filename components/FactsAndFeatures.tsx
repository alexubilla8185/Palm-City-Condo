
import React, { useState } from 'react';
import type { FactsAndFeatures } from '../types';
import { 
    BedIcon, BathIcon, HeatingIcon, CoolingIcon, AppliancesIcon, FlooringIcon, 
    ParkingIcon, ConstructionIcon, CommunityIcon, DollarIcon, InfoIcon, 
    AreaIcon, ExteriorIcon, DetailsIcon
} from './FactIcons';

interface FactsAndFeaturesProps {
  data: FactsAndFeatures;
}

const subsectionIconMap: Record<string, React.FC<{className?: string}>> = {
    'Bedrooms & bathrooms': BedIcon,
    'Heating': HeatingIcon,
    'Cooling': CoolingIcon,
    'Appliances': AppliancesIcon,
    'Features': FlooringIcon,
    'Interior area': AreaIcon,
    'Parking': ParkingIcon,
    'Construction': ConstructionIcon,
    'Community & Neighborhood': CommunityIcon,
    'HOA & Financial': DollarIcon,
    'Other': InfoIcon,
    'Location': CommunityIcon,
    'HOA': DollarIcon,
    'Type & style': ConstructionIcon,
    'Materials': ConstructionIcon,
    'Condition': ConstructionIcon,
    'Other facts': InfoIcon,
    'Exterior features': ExteriorIcon,
    'Has view': ExteriorIcon,
    'View description': ExteriorIcon,
    'Details': DetailsIcon,
};

const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


const renderFacts = (facts: any) => {
    if (facts.Included && Array.isArray(facts.Included)) {
        return <p><span className="font-semibold">Included: </span>{facts.Included.join(', ')}</p>
    }
    if (Array.isArray(facts)) {
        return <div className="flex flex-wrap gap-2">{facts.map(fact => <span key={fact} className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{fact}</span>)}</div>
    }
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {Object.entries(facts).map(([key, value]) => (
                <li key={key}><span className="font-semibold">{key}:</span> {String(value)}</li>
            ))}
        </ul>
    );
}

const FactsAndFeatures: React.FC<FactsAndFeaturesProps> = ({ data }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const sectionKeys = Object.keys(data);
  const allSectionsOpen = sectionKeys.length > 0 && sectionKeys.every(key => openSections[key]);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => ({ ...prev, [sectionTitle]: !prev[sectionTitle] }));
  };
  
  const toggleAllSections = () => {
    const newOpenState = !allSectionsOpen;
    const newOpenSections: Record<string, boolean> = {};
    sectionKeys.forEach(key => {
        newOpenSections[key] = newOpenState;
    });
    setOpenSections(newOpenSections);
  };

  const createId = (text: string) => `facts-section-${text.replace(/\W/g, '-').toLowerCase()}`;

  return (
    <div>
       <div className="flex justify-between items-center mb-4">
            <h2 id="facts-and-features-heading" className="text-2xl font-extrabold text-gray-800">Facts & Features</h2>
            {sectionKeys.length > 0 && (
                 <button 
                    onClick={toggleAllSections} 
                    className="text-sm font-semibold text-primary hover:underline focus:outline-none"
                    aria-expanded={allSectionsOpen}
                    aria-controls={sectionKeys.map(createId).join(' ')}
                >
                    {allSectionsOpen ? 'Hide All' : 'Show All'}
                </button>
            )}
       </div>
       <div className="border rounded-lg overflow-hidden">
        {Object.entries(data).map(([sectionTitle, sections], index) => {
            const isOpen = !!openSections[sectionTitle];
            const sectionId = createId(sectionTitle);
            const headerId = `header-${sectionId}`;
            return (
                <div key={sectionTitle} className={`border-b last:border-b-0 ${isOpen ? 'bg-gray-50/50' : 'bg-white'}`}>
                    <h3 id={headerId} className="text-xl font-bold text-gray-900 m-0">
                        <button 
                            onClick={() => toggleSection(sectionTitle)}
                            className="w-full flex justify-between items-center p-4 text-left"
                            aria-expanded={isOpen}
                            aria-controls={sectionId}
                        >
                            <span>{sectionTitle}</span>
                            <ChevronDownIcon className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </h3>
                    {isOpen && (
                        <div 
                            id={sectionId}
                            role="region"
                            aria-labelledby={headerId}
                            className="px-4 pb-4 space-y-4"
                        >
                            {Object.entries(sections).map(([subSectionTitle, facts]) => {
                                const Icon = subsectionIconMap[subSectionTitle] || InfoIcon;
                                return (
                                    <div key={subSectionTitle}>
                                        <div className="flex items-center">
                                            <Icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                                            <h4 className="font-semibold text-gray-800">{subSectionTitle}</h4>
                                        </div>
                                        <div className="mt-2 pl-9 text-gray-700">
                                            {renderFacts(facts)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )
        })}
       </div>
    </div>
  );
};

export default FactsAndFeatures;
