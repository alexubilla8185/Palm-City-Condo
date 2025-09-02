import React, { useEffect } from 'react';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ isOpen, onClose, images }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[95vh] relative p-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200 shrink-0">
          <h2 id="gallery-title" className="text-xl font-bold text-gray-800">Property Photos</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Close photo gallery">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto space-y-4 pr-2">
            {images.map((src, index) => (
                <img 
                    key={index} 
                    src={src} 
                    alt={`Property image ${index + 1}`}
                    className="w-full h-auto object-contain rounded-md" 
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryModal;