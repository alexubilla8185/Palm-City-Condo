import React from 'react';

interface PhotoGalleryProps {
  images: string[];
  onOpen: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images, onOpen }) => {
  if (!images || images.length === 0) {
    return null;
  }
  
  const handleOpen = (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      onOpen();
  }

  return (
    <div className="relative">
      <div 
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer group"
        onClick={onOpen}
        aria-label="View all photos"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
      >
        {/* Main Image */}
        <div className="md:col-span-2 md:row-span-2 h-full">
          <img src={images[0]} alt="Main property view" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
        </div>
        
        {/* Thumbnail Images (Desktop only) */}
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="hidden md:block relative">
            <img src={image} alt={`Property view ${index + 2}`} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
            {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                </div>
            )}
          </div>
        ))}
      </div>
      
       {/* "View all photos" Button (always visible, styled for desktop) */}
       <div className="absolute bottom-4 right-4 hidden md:block">
            <button onClick={onOpen} className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center shadow-md hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View all photos
            </button>
        </div>

      {/* "View all photos" Button (Mobile only) */}
      <div className="md:hidden absolute bottom-4 right-4">
        <button onClick={onOpen} className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View all photos
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
