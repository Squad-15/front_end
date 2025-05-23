
'use client'

import React, { useState } from 'react'
import CardModulo from '../components/CardModulo'
import { HeaderScreenModulo } from '../components/HeaderScreenModulo'

export default function LocationPage() {
  const cardsData = [
    {
      image: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-fa18-61fd-bb84-fcd2eabdb0f9/raw?se=2025-05-22T20%3A03%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=f0dcface-b5c6-5b5c-a0fb-bff51ec0f3b0&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-22T12%3A43%3A52Z&ske=2025-05-23T12%3A43%3A52Z&sks=b&skv=2024-08-04&sig=PZ3rGtNyfcni1qW%2BaeMS3CW71XRbtp07HUkjtCjVV8E%3D',
      category: 'Aula 1',
      title: '300 Pontos',
      subTitle: 'Fundamentos da Construção Civil',
      description:
        'Neste aula, os alunos conhecerão os princípios básicos da construção civil e os principais tipos de materiais utilizados.',
      link: '#',
    },
    {
      image: 'https://www.cursosdearquitetura.com.br/wp-content/uploads/2024/04/Planejamento-e-Gestao-de-Obras-em-Zonas-Costeiras01.jpg',
      category: 'Aula 2',
      title: '450 Pontos',
      subTitle: 'Gestão de Obras e Segurança',
      description:
        'Nesta aula, exploramos como organizar canteiros, controlar cronogramas e aplicar normas de segurança no trabalho.',
      link: '#',
    },
    {
      image: 'https://lh5.googleusercontent.com/OIQ2NIkdfwQT_sTUPUwz3wzodF1XLwH2rH31cbjVd_k8SMWxkW8eylNc_Vw8y0mplX7KHWMkSyqtor9OXidUzurRh9dyKHdPMSY2Z8AUhEdpcFW-phLWKulhybZwlshHgHipbdQ',
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

