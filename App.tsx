
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
  description: `Welcome to this charming and beautifully maintained 2-bedroom, 2-bathroom condo in the desirable community of Palm City. This second-floor unit offers a spacious and open floor plan with vaulted ceilings, creating a bright and airy atmosphere. Enjoy serene lake views from your private screened-in balcony. The community features a pool, tennis courts, and is conveniently located near top-rated schools, shopping, and dining. Perfect for first-time homebuyers, seasonal residents, or anyone looking for a peaceful Florida lifestyle.`,
  keyFacts: {
    'Type': 'Condo',
    'Built in': '1988',
    'Lot size': '-- sqft lot',
    'Price/sqft': '$186',
  },
  images: propertyImageUrls,
  whatsSpecial: {
    title: "What's special",
    description: `2/2 Villa with a detached garage and a Fenced Courtyard, 1,170 Sq/Ft, located in a gated community call Pine Ridge at Martin Down (across from the Library) very nice, quiet and safe community. Close to shopping center and turnpike. Very nice community, laminated wood flooring all through out, update bathrooms. Ready to move in. Won't last long`,
    offMarketNote: `This property is off market, which means it's not currently listed for sale or rent on Zillow. This may be different from what's available on other websites or public sources.`
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
    'Community & neighborhood': {
      'Location': {
        'Region': 'Palm City'
      }
    },
    'HOA & financial': {
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

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header address={propertyData.address} />
      <main className="max-w-screen-xl mx-auto p-4 lg:p-8 pb-24">
        <div className="sm:hidden mb-4">
             <h1 className="text-2xl font-bold text-gray-800">{propertyData.address.street}</h1>
             <p className="text-gray-600">{`${propertyData.address.city}, ${propertyData.address.state} ${propertyData.address.zip}`}</p>
        </div>
        
        <PhotoGallery images={propertyData.images} onOpen={() => setIsGalleryModalOpen(true)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <div className="lg:col-span-2">
            <PropertyInfo {...propertyData} onOpenModal={() => setIsContactModalOpen(true)} />

            <div className="mt-8 border-t border-gray-200 pt-8">
               <h2 className="text-2xl font-bold text-gray-800 mb-4">About this home</h2>
               <PropertyDescription description={propertyData.description} />
            </div>
             <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Facts</h2>
                <KeyFacts facts={propertyData.keyFacts} />
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
                <WhatsSpecial data={propertyData.whatsSpecial} />
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
                <FactsAndFeatures data={propertyData.factsAndFeatures} />
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
    </div>
  );
};

export default App;
