'use client'; // se estiver usando App Router no Next.js 13+

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50 mb-8 md:mb-0">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">

        <Link href="#" className="max-sm:hidden">
          <Image src="/assets/img/logo.png" alt="logo" width={144} height={40} className="w-36" />
        </Link>

        <Link href="#" className="hidden max-sm:block">
          <Image src="/assets/img/logo.png" alt="logo" width={144} height={40} className="w-36" />
        </Link>

        <div id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          
          <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border">
            {/* Ícone */}
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link href="#">
                <Image src="https://readymadeui.com/readymadeui.svg" alt="logo" width={144} height={40} className="w-36" />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link href="/" className="hover:text-red-600 text-primary font-medium block text-h6">Home</Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link href="/about" className="hover:text-red-600 block text-h6 font-bold">Sobre</Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link href="/service" className="hover:text-red-600 font-bold block text-h6">Serviços</Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link href="#" className="hover:text-red-600 font-bold block text-h6">Projetos</Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link href="#" className="hover:text-red-600 font-bold block text-h6">Localização</Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link href="#" className="hover:text-red-600 font-bold block text-h6">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center max-lg:ml-auto space-x-4">
          <button type="button" className="bg-primary hover:bg-red-600 px-4 py-2 rounded-full text-white text-[15px] font-medium flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              className="cursor-pointer fill-white inline w-4 h-4">
              <circle cx="10" cy="7" r="6" data-original="#000000" />
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000" />
            </svg>
            Login
          </button>

          <button id="toggleOpen" className="lg:hidden">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};