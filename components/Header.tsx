import React from 'react';

const HomeLogo: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary shrink-0">
        <path d="M12 2L2 12H5V20H19V12H22L12 2ZM17 18H7V11.5L12 7L17 11.5V18Z" fill="currentColor"/>
        <path d="M9 18V13H15V18H9Z" fill="currentColor"/>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <a href="#" aria-label="Home" className="flex items-center space-x-3">
            <HomeLogo />
            <span className="text-xl font-semibold text-gray-800">Charming Palm City Condo</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;