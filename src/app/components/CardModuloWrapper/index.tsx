import React from 'react'
import CardModulo from '../CardModuloWrapper'

type CardModuloWrapperProps = {
  moduloSelecionado: number
  etapaConcluida: number
}

const CardModuloWrapper: React.FC<CardModuloWrapperProps> = ({
  moduloSelecionado,
  etapaConcluida,
}) => {
  const [modulos, setModulos] = React.useState<any[]>([])

  React.useEffect(() => {
    async function fetchModulos() {
      const res = await fetch('http://localhost:8080/trilhas/1/modulos')
      const data = await res.json()
      setModulos(data)
    }

    fetchModulos()
  }, [])

  const modulo = modulos.find((m) => m.order === moduloSelecionado)

  if (!modulo) return null

  return (
    <CardModulo
      image={modulo.imagemUrl || '/images/default.jpg'}
      category={`Módulo ${modulo.order}`}
      title={modulo.nomeModulo}
      subTitle={modulo.subTitulo || 'Subtítulo do módulo'}
      description={modulo.descricao || 'Descrição breve sobre o conteúdo do módulo.'}
      link={`/modulo/${modulo.id}`}
      isLocked={etapaConcluida < modulo.order}
    />
  )
}

export default CardModuloWrapper