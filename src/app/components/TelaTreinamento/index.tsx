'use client'
import React, { useState } from 'react'
import CardModuloWrapper from '../CardModuloWrapper'
import { StepModulos } from '../StepModulos'

export default function TelaTreinamento() {
  const [moduloSelecionado, setModuloSelecionado] = useState<number | null>(null)
  // const [etapaConcluida, setEtapaConcluida] = useState<number>(1)
  const [etapaConcluida,] = useState<number>(1)

  return (
    <div className="flex flex-col items-center">
      <StepModulos
        etapaConcluida={etapaConcluida}
        onSelecionarModulo={(order) => setModuloSelecionado(order)}
      />

      {moduloSelecionado !== null && (
        <CardModuloWrapper
          moduloSelecionado={moduloSelecionado}
          etapaConcluida={etapaConcluida}
        />
      )}
    </div>
  )
}
