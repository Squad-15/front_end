
'use client'

import React, { useState } from 'react'
import CardModulo from '../components/CardModulo'

export default function LocationPage() {
  const cardsData = [
    {
      image: 'https://img.freepik.com/vetores-premium/ilustracao-vetorial-de-um-pequeno-trabalhador-em-tempo-de-brincadeira-de-construcao-animada_1080480-29487.jpg?w=2000',
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
      image: 'https://global-uploads.webflow.com/602a08aa6d8e750c207e189f/6032085e4ab0f228ae01dba3_avaliacao-de-desempenho-performance.png',
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

