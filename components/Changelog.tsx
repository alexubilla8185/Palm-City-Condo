
import React from 'react';

interface ChangelogProps {
  onClose: () => void;
}

const Changelog: React.FC<ChangelogProps> = ({ onClose }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 relative">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Application Changelog
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            A log of all major feature updates and improvements.
          </p>
          <button 
            onClick={onClose}
            className="absolute top-0 right-0 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            aria-label="Close changelog"
          >
            Close
          </button>
        </header>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.7 - Easter Egg Access
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
               <li>
                <strong>New Backdoor:</strong> Removed the problematic `/changes` URL. The changelog is now accessed via a hidden triple-click on the home icon in the header. This method is more robust and avoids server configuration issues.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.6 - Visual Polish & Readability
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
               <li>
                <strong>Contrast & Clarity:</strong> Improved overall readability by darkening the default text color, the borders around information cards, and the separator line under the header. This creates a sharper, more defined user interface.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.5 - Mobile UX Improvements
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
               <li>
                <strong>Mobile Footer Adjustments:</strong> Updated the mobile footer to respect device safe areas (e.g., the home bar on iPhones), preventing UI overlap. Also increased the bottom padding on the main content to ensure the footer never obscures page content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.4 - UI Refinements
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
               <li>
                <strong>Simplified Header:</strong> Removed the title text from the header for a cleaner, more minimalist design. The logo now serves as the primary brand element in the navigation bar.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.3 - Accessibility & UX Polish
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Accessibility (ARIA):</strong> Implemented full ARIA support for the `FactsAndFeatures` accordion. All interactive elements now have appropriate attributes (`aria-expanded`, `aria-controls`, `role="region"`, etc.) for screen reader compatibility.
              </li>
              <li>
                <strong>Share Icon Update:</strong> Replaced the share icon in the header with a more universally recognized "three connected dots" icon and applied the primary red color for better visibility and brand consistency.
              </li>
               <li>
                <strong>Hidden Changelog:</strong> Added this hidden changelog page, now accessible via a secret triple-click on the home icon, to track development progress.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.2 - Interactivity & Sharing
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Collapsible Sections:</strong> The "Facts & Features" section is now a fully collapsible accordion, improving page scanability and user experience, especially on mobile. Includes a "Show/Hide All" toggle for convenience.
              </li>
              <li>
                <strong>Share Functionality:</strong> Added a share button to the header. It intelligently uses the Web Share API on mobile for native sharing and provides a fallback modal with social media and "copy link" options on desktop.
              </li>
              <li>
                <strong>Readability Enhancements:</strong> Improved text contrast and increased line spacing on paragraphs for a more comfortable reading experience. The mobile footer was also updated with a modern, blurred background.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.1 - UI Overhaul
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Card-Based Layout:</strong> Replaced horizontal line separators with a modern, card-based design. Each section ("About This Home", "Key Facts", etc.) is now enclosed in a visually distinct card with shadows and borders.
              </li>
               <li>
                <strong>Typography Update:</strong> Changed the primary font to "Manrope" to match the clean, modern aesthetic of the inspiration screenshots. Headings are now bolder for better visual hierarchy.
              </li>
              <li>
                <strong>Color Palette Update:</strong> Updated the primary color theme from blue to a specific red (`#de3341`) to align with the provided design.
              </li>
                <li>
                <strong>New Content:</strong> Updated the "About this home" section with a more detailed and engaging property description.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
              Version 1.0 - Initial Redesign
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Redfin-Inspired UI:</strong> Complete redesign of the property page to match the look and feel of the provided Redfin screenshot. This included a new two-column layout, navigation bar, and key fact icons.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Changelog;
