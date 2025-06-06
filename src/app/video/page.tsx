import VideoSection from '../components/VideoSection'
import { IoHeart, IoHeartHalf } from 'react-icons/io5'
import Link from 'next/link'

export default function VideoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-3xl aspect-video mb-6">
        <VideoSection youtubeUrl="https://www.youtube.com/watch?v=B7_O-9oOc1o" />
      </div>

      {/* <div
        className="flex justify-center p-1 gap-1 text-red-500"
        style={{ fontSize: '28px' }}
      >
        <IoHeart />
        <IoHeart />
        <IoHeart />
        <IoHeart />
        <IoHeartHalf />
      </div> */}

      <div className="flex flex-col items-center gap-4 mt-6">
        {/* <Link
          href="/modulo"
          className="inline-block px-6 py-2 border border-blue-600 rounded-lg bg-blue-600 text-white font-semibold 
                    hover:bg-blue-700 hover:border-blue-700 transition duration-300 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Voltar
        </Link> */}
      </div>
    </div>
  )
}

// 'use client';

// import VideoSection from '../components/VideoSection';
// import { IoHeart, IoHeartHalf } from 'react-icons/io5';
// import Link from 'next/link';

// export default function VideoPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-gamified">
//       <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg tracking-wide">
//         🕹️ Missão de Treinamento
//       </h1>

//       <div className="w-full max-w-3xl aspect-video mb-6 rounded-xl overflow-hidden border-4 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]">
//         <VideoSection youtubeUrl="https://www.youtube.com/watch?v=B7_O-9oOc1o" />
//       </div>

//       <div className="flex justify-center p-1 gap-1 text-pink-500 text-3xl animate-pulse">
//         <IoHeart />
//         <IoHeart />
//         <IoHeart />
//         <IoHeart />
//         <IoHeartHalf />
//       </div>

//       <div className="flex flex-col items-center gap-4 mt-6">
//         <Link
//           href="/modulo"
//           className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300"
//         >
//           🔙 Voltar ao Módulo
//         </Link>
//       </div>
//     </div>
//   );
// }
