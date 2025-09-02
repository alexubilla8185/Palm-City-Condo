
import React from 'react';

interface BookingCardProps {
  onOpenModal: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ onOpenModal }) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-lg p-6">
      <button 
        onClick={onOpenModal}
        className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-hover transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Schedule a Tour
      </button>
    </div>
  );
};

export default BookingCard;
