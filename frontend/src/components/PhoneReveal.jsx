import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const PhoneReveal = ({ className = '', iconOnly = false }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const phoneNumber = '313.338.7235';
  const maskedNumber = '313.***.*****';

  const handleReveal = () => {
    setIsRevealed(true);
  };

  if (iconOnly) {
    return (
      <button
        onClick={handleReveal}
        className={`flex items-center space-x-2 text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300 ${className}`}
      >
        <Phone className="w-4 h-4" />
        <span className="font-medium">
          {isRevealed ? phoneNumber : maskedNumber}
        </span>
      </button>
    );
  }

  return (
    <div className={className}>
      {!isRevealed ? (
        <Button
          onClick={handleReveal}
          className="bg-transparent border border-[#d4af37]/30 text-[#c9c9c9] hover:bg-[#d4af37]/10 hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300 px-4 py-2"
        >
          <Phone className="w-4 h-4 mr-2" />
          {maskedNumber} (Click to reveal)
        </Button>
      ) : (
        <a
          href={`tel:${phoneNumber.replace(/\./g, '')}`}
          className="flex items-center space-x-2 text-[#d4af37] hover:text-[#c9a961] transition-colors duration-300 font-medium"
        >
          <Phone className="w-5 h-5" />
          <span>{phoneNumber}</span>
        </a>
      )}
    </div>
  );
};

export default PhoneReveal;
