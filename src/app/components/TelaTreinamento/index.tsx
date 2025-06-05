'use client'
import React, { useState } from 'react'
import CardModuloWrapper from '../CardModuloWrapper'
import { StepModulos } from '../StepModulos'

export default function TelaTreinamento() {
  const [moduloSelecionado, setModuloSelecionado] = useState<number | null>(null)
  const [etapaConcluida, setEtapaConcluida] = useState<number>(1)

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

// 'use client'
// import React, { useState, useEffect } from 'react'
// import CardModuloWrapper from '../CardModuloWrapper'
// import { StepModulos } from '../StepModulos'

// export default function TelaTreinamento() {
//   const [moduloSelecionado, setModuloSelecionado] = useState<number | null>(null)
//   const [etapaConcluida, setEtapaConcluida] = useState<number>(1)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (moduloSelecionado !== null) {
//       setLoading(true)
//       // Simulando tempo de carregamento
//       const timeout = setTimeout(() => setLoading(false), 1000)
//       return () => clearTimeout(timeout)
//     }
//   }, [moduloSelecionado])

//   return (
//     <div className="flex flex-col items-center">
//       <StepModulos
//         etapaConcluida={etapaConcluida}
//         onSelecionarModulo={(order) => setModuloSelecionado(order)}
//       />

//       {loading && <div className="mt-6 text-center">Carregando módulo...</div>}

//       {!loading && moduloSelecionado !== null && (
//         <CardModuloWrapper
//           moduloSelecionado={moduloSelecionado}
//           etapaConcluida={etapaConcluida}
//         />
//       )}
//     </div>
//   )
// }
