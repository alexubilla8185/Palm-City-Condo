import React from 'react';

const EmailIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-20">
      <div className="max-w-screen-xl mx-auto flex justify-around items-center">
        <a 
          href="mailto:pipertecmaster@gmail.com"
          className="flex-1 flex justify-center items-center bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 mr-2"
          aria-label="Email the owner"
        >
          <EmailIcon className="w-5 h-5 mr-2" />
          <span>Email</span>
        </a>
        <a 
          href="tel:+17722519456"
          className="flex-1 flex justify-center items-center bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-200 ml-2"
          aria-label="Call the owner"
        >
          <PhoneIcon className="w-5 h-5 mr-2" />
          <span>Call</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;