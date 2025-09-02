
import React, { useState, useEffect } from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, EmailIcon, LinkIcon } from './ShareIcons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyUrl: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, propertyUrl }) => {
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCopied(false); // Reset copied state when modal opens
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const shareText = encodeURIComponent("Check out this beautiful ground-floor condo in Palm City!");
  const shareTitle = encodeURIComponent(document.title);

  const socialLinks = [
    { name: 'Email', icon: EmailIcon, href: `mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${propertyUrl}` },
    { name: 'Facebook', icon: FacebookIcon, href: `https://www.facebook.com/sharer/sharer.php?u=${propertyUrl}` },
    { name: 'Twitter', icon: TwitterIcon, href: `https://twitter.com/intent/tweet?url=${propertyUrl}&text=${shareText}` },
    { name: 'LinkedIn', icon: LinkedInIcon, href: `https://www.linkedin.com/shareArticle?mini=true&url=${propertyUrl}&title=${shareTitle}&summary=${shareText}` },
  ];
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(propertyUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 id="share-modal-title" className="text-xl font-bold text-gray-900">Share this Property</h2>
        </div>

        <div className="p-6">
            <p className="text-gray-600 mb-4">Share this link via</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Icon className="w-10 h-10 mb-2" />
                        <span className="text-sm font-medium text-gray-700">{name}</span>
                    </a>
                ))}
            </div>

            <div className="mt-6">
                <p className="text-gray-600 mb-2">Or copy link</p>
                <div className="flex items-center space-x-2">
                    <div className="flex-grow flex items-center bg-gray-100 border border-gray-300 rounded-md p-2">
                        <LinkIcon className="w-5 h-5 text-gray-500 mr-2 shrink-0" />
                        <input 
                            type="text" 
                            value={propertyUrl} 
                            readOnly 
                            className="bg-transparent w-full text-gray-700 text-sm focus:outline-none"
                            aria-label="Property URL"
                        />
                    </div>
                    <button
                        onClick={handleCopyLink}
                        className={`px-4 py-2 rounded-md font-semibold text-white transition-colors text-sm shrink-0 ${copied ? 'bg-green-500' : 'bg-primary hover:bg-primary-hover'}`}
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
