
import React from 'react';

interface PropertyDescriptionProps {
  description: string;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ description }) => {
  return (
    <p className="text-gray-700 leading-relaxed">
      {description}
    </p>
  );
};

export default PropertyDescription;
