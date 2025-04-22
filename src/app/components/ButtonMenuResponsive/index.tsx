import React from 'react';

interface ButtonMenuResponsiveProps {
  openMenu: () => void;
}

export const ButtonMenuResponsive: React.FC<ButtonMenuResponsiveProps> = ({ openMenu }) => {
  return (
    <button 
      className="lg:hidden ml-4 mt-4 fixed top-0 left-0 z-[50]" 
      onClick={openMenu}
    >
      <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
