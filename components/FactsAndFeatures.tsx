import React from 'react';
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
    // A few more specific ones from the data structure
    'Exterior features': ExteriorIcon,
    'Has view': ExteriorIcon,
    'View description': ExteriorIcon,
    'Details': DetailsIcon,
};


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
  return (
    <div>
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Facts & Features</h2>
       <div className="space-y-8">
        {Object.entries(data).map(([sectionTitle, sections]) => (
            <div key={sectionTitle}>
                <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">{sectionTitle}</h3>
                <div className="space-y-4">
                    {Object.entries(sections).map(([subSectionTitle, facts]) => {
                        const Icon = subsectionIconMap[subSectionTitle] || InfoIcon;
                        return (
                            <div key={subSectionTitle}>
                                <div className="flex items-center">
                                    <Icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                                    <h4 className="font-semibold text-gray-800">{subSectionTitle}</h4>
                                </div>
                                <div className="mt-2 pl-9 text-gray-600">
                                    {renderFacts(facts)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
       </div>
    </div>
  );
};

export default FactsAndFeatures;