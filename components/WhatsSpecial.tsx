import React, { useState } from 'react';
import type { WhatsSpecial } from '../types';

interface WhatsSpecialProps {
  data: WhatsSpecial;
}

const WhatsSpecial: React.FC<WhatsSpecialProps> = ({ data }) => {
  const [isHidden, setIsHidden] = useState(false);

  if (isHidden) {
    return (
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
        <button onClick={() => setIsHidden(false)} className="text-sm font-semibold text-primary hover:underline">
          Show
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
        <button onClick={() => setIsHidden(true)} className="text-sm font-semibold text-primary hover:underline">
          Hide
        </button>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">{data.description}</p>
      <p className="text-sm text-gray-500 italic">{data.offMarketNote}</p>
    </div>
  );
};

export default WhatsSpecial;