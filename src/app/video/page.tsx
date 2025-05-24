import VideoSection from '../components/VideoSection'
import { IoHeart, IoHeartHalf } from 'react-icons/io5'
import Link from 'next/link'

export default function VideoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-3xl aspect-video mb-6">
        <VideoSection youtubeUrl="https://www.youtube.com/watch?v=B7_O-9oOc1o" />
      </div>

      <div
        className="flex justify-center p-1 gap-1 text-red-500"
        style={{ fontSize: '28px' }}
      >
        <IoHeart />
        <IoHeart />
        <IoHeart />
        <IoHeart />
        <IoHeartHalf />
      </div>

      <div className="flex flex-col items-center gap-4 mt-6">
        <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out focus:outline-none">
          Marcar como concluído
        </button>

        <Link
          href="/modulo"
          className="inline-block px-6 py-2 border border-blue-600 rounded-lg bg-blue-600 text-white font-semibold 
                    hover:bg-blue-700 hover:border-blue-700 transition duration-300 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Voltar
        </Link>
      </div>
    </div>
  )
}