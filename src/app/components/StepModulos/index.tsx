'use client';

import React from 'react';

type HeaderScreenStepProps = {
  etapaConcluida: number;
};

export const HeaderScreenStep: React.FC<HeaderScreenStepProps> = ({ etapaConcluida }) => {
  return (
    <header className="mt-6 py-4 px-4 font-poppins sm:px-10 bg-transparent min-h-[70px] tracking-wide relative z-50 w-full mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-10 w-[50%] mx-auto rounded-full">
        <nav className="lg:flex lg:gap-x-8 max-lg:flex max-lg:flex-col max-lg:items-center">
          <ul className="flex gap-x-8 text-center">
            {[1, 2, 3, 4].map((modulo, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`flex items-center gap-2 font-bold text-[15px] ${
                    etapaConcluida >= i
                      ? 'hover:text-[#BC1F1B]'
                      : 'text-gray-400 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  Módulo {modulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
