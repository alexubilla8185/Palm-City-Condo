
import React from 'react';
import type { PropertyDetails } from '../types';

interface PropertyInfoProps extends Omit<PropertyDetails, 'description' | 'keyFacts' | 'images' | 'whatsSpecial' | 'factsAndFeatures'> {
  onOpenModal: () => void;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ address, beds, baths, sqft, onOpenModal }) => {
  return (
    <div className="md:flex md:justify-between md:items-start">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">{address.street}</h1>
        <p className="text-gray-700 mt-1">{`${address.city}, ${address.state} ${address.zip}`}</p>

        <div className="flex items-center space-x-2 mt-4">
          <span>{beds} beds</span>
          <span className="text-gray-400">&middot;</span>
          <span>{baths} baths</span>
          <span className="text-gray-400">&middot;</span>
          <span>{new Intl.NumberFormat('en-US').format(sqft)} sqft</span>
        </div>
      </div>
      <div className="mt-6 md:mt-0 lg:hidden shrink-0">
        <button
          onClick={onOpenModal}
          className="w-full md:w-auto bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Schedule a Tour
        </button>
      </div>
    </div>
  );
};

export default PropertyInfo;