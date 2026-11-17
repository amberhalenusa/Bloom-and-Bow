import React from 'react';

interface BrandMarkProps {
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'w-7 h-7' }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Minimal floral petals */}
      <circle cx="18" cy="10.5" r="4" fill="#EBCED0" stroke="#141413" strokeWidth="1.25" />
      <circle cx="24.2" cy="15" r="4" fill="#F7ECEC" stroke="#141413" strokeWidth="1.25" />
      <circle cx="11.8" cy="15" r="4" fill="#F7ECEC" stroke="#141413" strokeWidth="1.25" />
      <circle cx="21.8" cy="21.5" r="4" fill="#EBCED0" stroke="#141413" strokeWidth="1.25" />
      <circle cx="14.2" cy="21.5" r="4" fill="#EBCED0" stroke="#141413" strokeWidth="1.25" />
      {/* Blossom center */}
      <circle cx="18" cy="16.4" r="2.6" fill="#141413" />
      {/* Delicate bow / ribbon stem */}
      <path
        d="M18 25.5V31.5M18 27.5C15.5 25.8 12.5 26 11.5 27.8C10.8 29.1 13.5 30.2 18 28.2M18 27.5C20.5 25.8 23.5 26 24.5 27.8C25.2 29.1 22.5 30.2 18 28.2"
        stroke="#141413"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
