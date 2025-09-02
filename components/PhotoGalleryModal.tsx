import React, { useState, useEffect, useCallback } from 'react';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const ChevronLeftIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);


const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-full max-h-[95vh] relative p-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200 shrink-0">
          <h2 id="gallery-title" className="text-xl font-bold text-gray-800">
            Property Photos <span className="font-normal text-gray-500">({currentIndex + 1} / {images.length})</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Close photo gallery">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 flex items-center justify-center relative min-h-0">
          <button 
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center">
            <img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt={`Property image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-md" 
              loading="lazy"
            />
          </div>

          <button 
            onClick={goToNext}
            disabled={currentIndex === images.length - 1}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryModal;