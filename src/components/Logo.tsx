
import React from 'react';

const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern geometric "A" shape */}
      <path 
        d="M20 45 L35 15 L50 45 M25 35 L45 35" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Circular accent representing growth/finance */}
      <circle 
        cx="65" 
        cy="30" 
        r="8" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5"
      />
      <circle 
        cx="65" 
        cy="30" 
        r="3" 
        fill="currentColor"
      />
      
      {/* Company name */}
      <text 
        x="85" 
        y="25" 
        className="fill-current text-xl font-bold" 
        fontSize="18"
      >
        Avensis
      </text>
      <text 
        x="85" 
        y="42" 
        className="fill-current text-sm font-medium opacity-80" 
        fontSize="12"
      >
        Financial
      </text>
    </svg>
  );
};

export default Logo;
