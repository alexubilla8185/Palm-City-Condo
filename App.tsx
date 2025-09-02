
import React, { useState } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import PropertyInfo from './components/PropertyInfo';
import PropertyDescription from './components/PropertyDescription';
import KeyFacts from './components/KeyFacts';
import Footer from './components/Footer';
import BookingCard from './components/BookingCard';
import ContactModal from './components/ContactModal';
import WhatsSpecial from './components/WhatsSpecial';
import FactsAndFeatures from './components/FactsAndFeatures';
import PhotoGalleryModal from './components/PhotoGalleryModal';
import ShareModal from './components/ShareModal';
import Changelog from './components/Changelog';
import type { PropertyDetails } from './types';
import { propertyImageUrls } from './components/imageList';

const propertyData: PropertyDetails = {
  address: {
    street: '2054 SW Silver Pine Way, APT 123D',
    city: 'Palm City',
    state: 'FL',
    zip: '34990',
  },
  beds: 2,
  baths: 2,
  sqft: 1170,
  description: `Discover your ideal Florida getaway in this beautiful ground-floor condo, nestled in the heart of Palm City. The 2-bedroom, 2-bathroom layout feels expansive thanks to vaulted ceilings and a flowing open floor plan. Step out onto your screened-in patio and enjoy peaceful moments with a stunning lake view. The community provides excellent amenities like a pool and tennis courts, and the location is second to none—close to top schools, great shops, and a variety of restaurants. Whether you're looking for a new family home or a perfect seasonal retreat, this condo offers everything you need for a relaxed Florida lifestyle.`,
  keyFacts: {
    'Type': 'Condo',
    'Built in': '1988',
    'Floor Level': '1st (Ground)',
    'Lot size': '33.79 acres',
    'Price/sqft': '$186',
  },
  images: propertyImageUrls,
  whatsSpecial: {
    title: "What's Special",
    description: `This fantastic 2-bed, 2-bath condo is perfectly located in the safe and quiet Pine Ridge at Martin Downs—a gated community across from the library. The 1,170 sq ft home comes with a detached garage and a private fenced courtyard. Inside, you'll find updated bathrooms and new wood flooring throughout. With easy access to shopping and the turnpike, this home won't last long.`,
  },
  factsAndFeatures: {
    'Interior': {
      'Bedrooms & bathrooms': {
        'Bedrooms': 2,
        'Bathrooms': 2,
        'Full bathrooms': 2
      },
      'Heating': { 'Heating': 'Other' },
      'Cooling': { 'Cooling': 'Central' },
      'Appliances': {
        'Included': ['Dishwasher', 'Dryer', 'Garbage disposal', 'Range / Oven', 'Refrigerator', 'Trash compactor', 'Washer']
      },
      'Features': {
        'Flooring': 'Hardwood',
        'Basement': 'None',
        'Has fireplace': 'No'
      },
      'Interior area': {
        'Total interior livable area': '1,170 sqft'
      }
    },
    'Property': {
      'Parking': {
        'Total spaces': 1,
        'Parking features': 'Garage - Detached'
      },
      'Features': {
        'Exterior features': 'Shingle, Cement / Concrete',
        'Has view': 'Yes',
        'View description': 'Park'
      },
      'Details': {
        'Parcel number': '183841015123000401'
      }
    },
    'Construction': {
      'Type & style': {
        'Home type': 'Unknown'
      },
      'Materials': {
        'Materials': 'Concrete Block',
        'Roof': 'Shake / Shingle'
      },
      'Condition': {
        'Year built': 1988
      }
    },
    'Community & Neighborhood': {
      'Location': {
        'Region': 'Palm City'
      }
    },
    'HOA & Financial': {
      'HOA': {
        'Has HOA': 'Yes',
        'HOA fee': '$335 monthly'
      }
    },
    'Other': {
      'Other facts': [
        'Clubhouse',
        'Guest parking',
        'Living room',
        'Secured entry'
      ]
    }
  }
};


const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Use a static URL for sharing to avoid development URLs like blob:
  const propertyUrl = 'https://palm-city-condo.netlify.app';
  
  // Simple router for the hidden changelog page
  if (window.location.pathname === '/changes') {
    return <Changelog />;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header onOpenShareModal={() => setIsShareModalOpen(true)} propertyUrl={propertyUrl} />
      <main className="max-w-screen-xl mx-auto p-4 lg:p-8 pb-32">
        
        <PhotoGallery images={propertyData.images} onOpen={() => setIsGalleryModalOpen(true)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <div className="lg:col-span-2">
            <PropertyInfo {...propertyData} onOpenModal={() => setIsContactModalOpen(true)} />
            
            <div className="mt-8 space-y-8">
              <div className="border border-gray-300 rounded-xl shadow-md p-4 md:p-6">
                 <h2 className="text-2xl font-extrabold text-gray-900 mb-4">About This Home</h2>
                 <PropertyDescription description={propertyData.description} />
              </div>
              
              <div className="border border-gray-300 rounded-xl shadow-md p-4 md:p-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Key Facts</h2>
                  <KeyFacts facts={propertyData.keyFacts} />
              </div>

              <div className="border border-gray-300 rounded-xl shadow-md p-4 md:p-6">
                  <WhatsSpecial data={propertyData.whatsSpecial} />
              </div>

              <div className="border border-gray-300 rounded-xl shadow-md p-4 md:p-6">
                  <FactsAndFeatures data={propertyData.factsAndFeatures} />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
               <BookingCard onOpenModal={() => setIsContactModalOpen(true)} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <PhotoGalleryModal isOpen={isGalleryModalOpen} onClose={() => setIsGalleryModalOpen(false)} images={propertyData.images} />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} propertyUrl={propertyUrl} />
    </div>
  );
};

export default App;