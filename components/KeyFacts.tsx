import React from 'react';

const BuildingIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 21v-2.25a2.25 2.25 0 012.25-2.25h8.25a2.25 2.25 0 012.25 2.25V21" />
  </svg>
);

const CalendarIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
  </svg>
);

const LotIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5m-7.5 3H12m-3.75 3h7.5M3 3h18M3 21h18M9 3v18" />
  </svg>
);

const PriceTagIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 11 12 11c-.77 0-1.536.21-2.121.579L9 12.421zm0 0L9 12.421M12 6H6.375a2.25 2.25 0 00-2.25 2.25v9.5c0 .414.336.75.75.75h14.25c.414 0 .75-.336.75-.75v-9.5A2.25 2.25 0 0017.625 6H12z" />
  </svg>
);

const iconMap: Record<string, React.FC<{className?: string}>> = {
  'Type': BuildingIcon,
  'Built in': CalendarIcon,
  'Lot size': LotIcon,
  'Price/sqft': PriceTagIcon,
};

interface KeyFactsProps {
  facts: Record<string, string>;
}

const KeyFacts: React.FC<KeyFactsProps> = ({ facts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
      {Object.entries(facts).map(([key, value]) => {
        const Icon = iconMap[key];
        return (
            <div key={key} className="flex items-start">
                {Icon && <Icon className="w-6 h-6 text-gray-500 mr-3 shrink-0 mt-0.5" />}
                <div>
                    <dt className="text-base">{value}</dt>
                    <dd className="text-sm text-gray-600">{key}</dd>
                </div>
            </div>
        );
      })}
    </div>
  );
};

export default KeyFacts;