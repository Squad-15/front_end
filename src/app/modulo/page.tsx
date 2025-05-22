
'use client'

import React, { useState } from 'react'
import CardModulo from '../components/CardModulo'
import { HeaderScreenModulo } from '../components/HeaderScreenModulo'

export default function LocationPage() {
  const cardsData = [
    {
      image: 'https://lwfiles.mycourse.app/engineme2-public/3881c9282a2ea42bd348309490429717.png', // pode substituir por imagem mais construção se quiser
      category: 'Aula 1',
      title: '300 Pontos',
      subTitle: 'Fundamentos da Construção Civil',
      description:
        'Neste aula, os alunos conhecerão os princípios básicos da construção civil e os principais tipos de materiais utilizados.',
      link: '#',
    },
    {
      image: 'https://inbec.com.br/storage/courses/open-graph/de76542388f62f3b8c1c4da5d5d8b314-1200x630-quadrant(R).jpeg?token=b60367c5f2396c0e3218d3673e14f39d',
      category: 'Aula 2',
      title: '450 Pontos',
      subTitle: 'Gestão de Obras e Segurança',
      description:
        'Nesta aula, exploramos como organizar canteiros, controlar cronogramas e aplicar normas de segurança no trabalho.',
      link: '#',
    },
    {
      image: 'https://www.cityofbristol.ac.uk/wp-content/uploads/Construction-small-1920x1080.jpg',
      category: 'Avaliação Final',
      title: '1000 Pontos',
      subTitle: 'Projeto Prático de Construção',
      description:
        'Na avaliação final, os alunos aplicarão os conhecimentos para planejar e executar um projeto simples de construção civil.',
      link: '#',
    },
  ]

  const [etapaConcluida, setEtapaConcluida] = useState(0)


  // Função para avançar etapa
  const handleCardConcluido = (index: number) => {
    if (index === etapaConcluida) {
      setEtapaConcluida(index + 1)
    }
  }

  return (
    <div className="min-h-screen font-poppins">
      <HeaderScreenModulo />

      {/* Menu de Módulos */}
      <header className="mt-6 py-4 px-4 sm:px-10 bg-transparent min-h-[70px] tracking-wide relative z-50 w-full mx-auto ">
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

      {/* Cards */}
      <div className="flex flex-col items-center justify-center py-10 px-4 font-poppins">
        {cardsData.map((card, index) => {
        const isUnlocked = index <= etapaConcluida

      return (
        <CardModulo
          key={index}
          {...card}
          isLocked={!isUnlocked}
          onConcluir={() => handleCardConcluido(index)}
        />
      )
})}
      </div>
    </div>
  )
}

