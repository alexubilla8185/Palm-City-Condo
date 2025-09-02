
import React from 'react';

interface PropertyDescriptionProps {
  description: string;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ description }) => {
  return (
    <p className="leading-loose">
      {description}
    </p>
  );
};

export default PropertyDescription;