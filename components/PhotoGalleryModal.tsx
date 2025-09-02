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

const CloseIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

  const handleEventPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-counter"
    >
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20" 
        aria-label="Close photo gallery"
      >
        <CloseIcon className="w-10 h-10" />
      </button>

      {/* Counter */}
      <div id="gallery-counter" className="absolute top-5 left-5 text-white text-lg bg-black/30 rounded-md px-3 py-1 z-20" onClick={handleEventPropagation}>
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button 
        onClick={(e) => { handleEventPropagation(e); goToPrevious(); }}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 text-white rounded-full hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Image Display */}
      <div className="relative w-full h-full flex items-center justify-center" onClick={handleEventPropagation}>
        <img 
          key={currentIndex}
          src={images[currentIndex]} 
          alt={`Property image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
          loading="lazy"
        />
      </div>

      {/* Next Button */}
      <button 
        onClick={(e) => { handleEventPropagation(e); goToNext(); }}
        disabled={currentIndex === images.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 text-white rounded-full hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next image"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default PhotoGalleryModal;
