"use client";
import { MapIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export const InformationsAboutPlataform = () => {

  const [totalMembros, setTotalMembros] = useState(0)
  const [totalModulos, setTotalModulos] = useState(0)
  const [totalTrilhas, setTotalTrilhas] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resMembros = await fetch('http://localhost:8080/users/all')
        const membrosData = await resMembros.json()
        setTotalMembros(membrosData.total || membrosData.length)

        const resModulos = await fetch('http://localhost:8080/modulo')
        const modulosData = await resModulos.json()
        setTotalModulos(modulosData.total || modulosData.length)

        const resTrilhas = await fetch('http://localhost:8080/path')
        const trilhasData = await resTrilhas.json()
        setTotalTrilhas(trilhasData.total || trilhasData.length)
      } catch (error) {
        console.error('Erro ao buscar dados da plataforma:', error)
      }
    }

    fetchData()
  }, [])
    return (
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 md:grid-cols-2 sm:px-12 ml-0 md:ml-0 lg:ml-0 xl:ml-80 mb-4">
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Total de Membros</h3>
          <p className="text-3xl">{totalMembros}</p>
        </div>
      </div>

      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 6l-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V8l-4-2z" />
          </svg>
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Total de Módulos</h3>
          <p className="text-3xl">{totalModulos}</p>
        </div>
      </div>

      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
      <div className="p-4 bg-indigo-400">
        <MapIcon className="h-12 w-12 text-white" />
      </div>
      <div className="px-4 text-gray-700">
        <h3 className="text-sm tracking-wider">Total de Trilhas</h3>
        <p className="text-3xl">{totalTrilhas}</p>
      </div>
    </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M18 9v6m3-3h-6m-2 4a4 4 0 11-8 0 4 4 0 018 0zm4-4a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Total de Matrículas</h3>
          <p className="text-3xl">{totalMembros}</p>
        </div>
      </div>

    </div>
    );
  }
  