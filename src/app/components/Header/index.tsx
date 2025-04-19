'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={handleCloseMenu}
        />
      )}

      <header className="flex py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50 mb-6 md:mb-0">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">

          <Link href="#" className="max-sm:hidden">
            <Image src="/assets/img/logo.png" alt="logo" width={144} height={40} className="w-36" />
          </Link>

          <Link href="#" className="hidden max-sm:block">
            <Image src="/assets/img/logo.png" alt="logo" width={144} height={40} className="w-36" />
          </Link>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:block`}>
            <button
              onClick={handleCloseMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              X
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3">
              <li className="mb-6 hidden max-lg:block">
                <Link href="#">
                  <Image src="/assets/img/logo.png" alt="logo" width={144} height={40} className="w-36" />
                </Link>
              </li>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'Sobre' },
                { href: '/service', label: 'Serviços' },
                { href: '/projects', label: 'Projetos' },
                { href: '/location', label: 'Localização' },
                { href: '/contact', label: 'Contato' },
              ].map((item, i) => (
                <li key={i} className="max-lg:border-b max-lg:py-3 px-3">
                  <Link href={item.href} className="hover:text-red-600 font-bold block text-h6" onClick={handleCloseMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-4">
          <Link href="/login" passHref>
            <div className="bg-primary hover:bg-red-600 px-4 py-2 rounded-full text-white text-[15px] font-medium flex items-center justify-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="fill-white inline w-4 h-4">
                <circle cx="10" cy="7" r="6" />
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
              </svg>
              Login
            </div>
          </Link>

            <button onClick={handleToggleMenu} className="lg:hidden">
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
