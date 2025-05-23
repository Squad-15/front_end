import React, { useState } from 'react'
import Footer from '../components/footer'
import VideoSection from '../components/VideoSection'
import { IoHeart, IoHeartHalf } from 'react-icons/io5'
import CardsSection from '../components/cardsection'
import Link from 'next/link'

export default function VideoPage() {
  return (
    <div>
      <VideoSection youtubeUrl="https://www.youtube.com/watch?v=B7_O-9oOc1o" />
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
      <div>
        <div className="flex flex-col items-center gap-4 mb-6">
          <button className="mt-4 px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out focus:outline-none">
            Marcar como concluido
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 mb-6">
          <Link
              href="/modulo"
            className="inline-block mt-4 px-6 py-2 border border-blue-600 rounded-lg bg-blue-600 text-white font-semibold 
                      hover:bg-blue-700 hover:border-blue-700 transition duration-300 ease-in-out 
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
            Voltar
        </Link>
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 text-xl font-semibold text-gray-700">
          Exercícios
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      {/* cardsection */}
      <CardsSection />
    </div>
  )
}
