
import React from 'react';

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <img 
      src="/lovable-uploads/d782960d-ac7a-45d4-b509-4a583966ca6e.png" 
      alt="Avensis Financial" 
      className={className}
    />
  );
};

export default Logo;
