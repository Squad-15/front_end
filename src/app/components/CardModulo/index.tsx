// // components/CardModulo/index.jsx
// import React from "react";

// const CardModulo = ({ image, category, title, subTitle, description, link }) => {
//   return (
//         <div className="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] mb-8 font-poppins">
//       <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-xl md:rounded-r-none bg-clip-border shrink-0">
//         <img
//           src={image}
//           alt={title}
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="p-6">
//         <h6 className="block mb-4 font-sans text-[18px] antialiased font-extrabold leading-relaxed tracking-normal text-black-700 uppercase">
//           {category}
//         </h6>
//         <h4 className="block mb-2 font-sans text-[16px] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
//           {title}
//         </h4>
//         <p className="block mb-5 font-sans text-[13px] antialiased font-normal leading-relaxed text-gray-800">
//           {subTitle}
//         </p>
//         <hr className="my-2 border-t-1 border-black w-50" />
//         <p className="block mb-8 font-sans text-[13px] antialiased font-normal leading-relaxed text-gray-700">
//           {description}
//         </p>
//         <a href={link} className="inline-block">
//           <button
//             className="flex items-center gap-2 px-6 py-3 font-sans text-[15px] font-semibold
//             text-center text-white align-middle transition-transform duration-300 transform rounded-full bg-red-700 hover:scale-105"
//             type="button"
//           >
//             Iniciar
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CardModulo;

import Link from 'next/link'
import React from 'react'

interface CardModuloProps {
  image: string
  category: string
  title: string
  subTitle: string
  description: string
  link: string
  isLocked?: boolean
  onConcluir?: () => void
}

const CardModulo = ({
  image,
  category,
  title,
  subTitle,
  description,
  isLocked = false,
}: CardModuloProps) => {
  return (
    <div className="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] mb-8 font-poppins">
     {isLocked && (
      <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
  <div className="flex flex-col items-center text-center">
    <div className="bg-red text-primary p-4 rounded-full shadow-lg animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>

    </div>
    <h2 className="mt-4 text-lg font-bold text-gray-800">Missão Bloqueada!</h2>
    <p className="mt-2 text-sm text-gray-600">
      Esta fase ainda não foi desbloqueada. Complete a aula anterior para liberar o acesso!
    </p>
  </div>
</div>

)}

      {/* Imagem lateral */}
      <div className="relative w-full md:w-2/5 m-0 overflow-hidden bg-white rounded-t-xl md:rounded-r-none bg-clip-border shrink-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col justify-between w-full">
        <div>
          <h6 className="block mb-4 font-sans text-[18px] font-extrabold leading-relaxed tracking-normal text-black uppercase">
            {category}
          </h6>
          <h4 className="block mb-2 font-sans text-[16px] font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block mb-5 font-sans text-[13px] font-normal leading-relaxed text-gray-800">
            {subTitle}
          </p>
          <hr className="my-2 border-t border-black w-1/2" />
          <p className="block mb-8 font-sans text-[13px] font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        </div>

        {!isLocked && (
          // <div className="flex gap-4">
          //   <Link href="/video" className="inline-block flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white rounded-full bg-red-700 hover:scale-105 transition-transform duration-300 transform">
          //     Iniciar
          //   </Link>
          // </div>

          <div className="flex gap-4">
              <Link
                    href="/video"
                    className="inline-block relative flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white rounded-full 
                              bg-gradient-to-r from-red-600 via-pink-600 to-yellow-500 
                              hover:from-yellow-500 hover:to-red-600 
                              shadow-[0_0_20px_rgba(255,0,0,0.5)] 
                              hover:scale-110 transition-all duration-300 transform overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      🚀 Iniciar
                    </span>

                    {/* Glow animation layer */}
                    <span className="absolute inset-0 bg-white opacity-10 animate-pulse rounded-full z-0" />
              </Link>
        </div>

        )}
      </div>
    </div>
  )
}

export default CardModulo


