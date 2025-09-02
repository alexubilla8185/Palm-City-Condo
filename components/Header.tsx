import React, { useState, useRef, useEffect } from 'react';

const HomeLogo: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary shrink-0">
        <path d="M12 2L2 12H5V20H19V12H22L12 2ZM17 18H7V11.5L12 7L17 11.5V18Z" fill="currentColor"/>
        <path d="M9 18V13H15V18H9Z" fill="currentColor"/>
    </svg>
);

const ConnectedDotsShareIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.15-4.14c.52.47 1.2.77 1.96.77c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.52 9.34 6.81 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.81 0 1.52-.34 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/>
    </svg>
);

interface HeaderProps {
  onOpenShareModal: () => void;
  propertyUrl: string;
  onShowChangelog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenShareModal, propertyUrl, onShowChangelog }) => {
  const [clickCount, setClickCount] = useState(0);
  // Fix: Use ReturnType<typeof setTimeout> for environment-agnostic timeout ID typing. This is necessary because NodeJS.Timeout is not available in a browser environment.
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleShareClick = async () => {
    const shareData = {
      title: document.title,
      text: 'Check out this beautiful ground-floor condo in Palm City!',
      url: propertyUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Could not share:', err);
        // Fallback if user cancels or there's an error
        onOpenShareModal();
      }
    } else {
      // Fallback for browsers without navigator.share
      onOpenShareModal();
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 3) {
      onShowChangelog();
      setClickCount(0);
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        setClickCount(0);
      }, 1000); // Reset after 1 second
    }
  };

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-10">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="#" aria-label="Home" onClick={handleLogoClick} title="Triple-click to view changelog">
            <HomeLogo />
          </a>
        </div>
        <div className="flex items-center">
            <button 
                onClick={handleShareClick}
                className="flex items-center space-x-2 text-primary font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                aria-label="Share this property"
            >
                <ConnectedDotsShareIcon className="w-5 h-5" />
                <span>Share</span>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;