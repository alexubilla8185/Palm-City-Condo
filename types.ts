
export interface WhatsSpecial {
    title: string;
    description: string;
    offMarketNote?: string;
}

export interface FactsAndFeaturesSection {
  [subSection: string]: Record<string, string | number> | { Included: string[] } | string[];
}

export interface FactsAndFeatures {
  [section: string]: FactsAndFeaturesSection;
}

export interface PropertyDetails {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  keyFacts: Record<string, string>;
  images: string[];
  whatsSpecial: WhatsSpecial;
  factsAndFeatures: FactsAndFeatures;
}
