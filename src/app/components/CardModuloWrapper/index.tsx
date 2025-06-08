'use client'

import React, { useEffect, useState } from 'react'
import "/public/styles/modulo.css";
import { useRouter } from 'next/navigation'

type Modulo = {
  urlVideo: string;
  id: number;
  order: number;
  title: string;
  description: string;
  urlPicture: string;
  amountPoints: number;
}

type CardModuloWrapperProps = {
  moduloSelecionado: number | null;
  etapaConcluida: number;
}

const CardModuloWrapper: React.FC<CardModuloWrapperProps> = ({
  moduloSelecionado,
  etapaConcluida,
}) => {
  const [modulos, setModulos] = useState<Modulo[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter();

  const handleAssistirAgora = (modulo: Modulo) => {
    const videoId = modulo.urlVideo.split('v=')[1];
    router.push(`/video/${videoId}`);
  };

  useEffect(() => {
    if (moduloSelecionado === null || moduloSelecionado === undefined) return;

    async function fetchModulos() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`http://localhost:8080/modulos/${moduloSelecionado}/documentos`)
        if (!res.ok) throw new Error('Erro ao buscar módulos')
        const data = await res.json() as Modulo[];
        console.log(data)
        setModulos(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Erro desconhecido')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchModulos()
  }, [moduloSelecionado])

  if (loading) {
    return <p className="text-center text-gray-600 animate-pulse">Carregando módulos...</p>
  }

  if (error) {
    return <p className="text-center text-red-500">Erro: {error}</p>
  }

  if (!modulos || modulos.length === 0) {
    return <p className="text-center text-gray-500">Nenhum módulo encontrado.</p>
  }

  return (
    <>
      {modulos.map((modulo) => (
        <div
          key={modulo.id}
          className="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] mb-8 font-poppins"
        >
          {/* Tela de bloqueio */}
          {etapaConcluida < modulo.order && (
            <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
              <div className="flex flex-col items-center text-center px-4">
                <div className="bg-red-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-lg font-bold text-gray-800">Missão Bloqueada!</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Esta fase ainda não foi desbloqueada. Complete a aula anterior para liberar o acesso!
                </p>
              </div>
            </div>
          )}

          <div className="relative w-full md:w-2/5 m-0 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 rounded-t-xl md:rounded-r-none bg-clip-border shrink-0 shadow-2xl border-4 border-yellow-400 animate-pulse">
            <img
              src={modulo.urlPicture}
              alt={modulo.title}
              className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
            />

            <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              ⚡ Nível {modulo.order}
            </div>

            <div className="absolute inset-0 rounded-xl border-2 border-white opacity-20 animate-ping"></div>
          </div>

          <div className="p-6 flex flex-col justify-between w-full bg-gradient-to-br from-yellow-100 to-blue-50 rounded-none md:rounded-tr-2xl md:rounded-r-2xl shadow-xl border-2 border-blue-200 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                  🏅 Módulo
                </span>
                <span className="text-sm text-blue-700 font-semibold">
                  🎯 {modulo.amountPoints || '0'} XP
                </span>
              </div>

              <h6 className="text-[20px] font-black text-gray-800 uppercase tracking-wide mb-2">
                {modulo.title}
              </h6>

              <h4 className="text-[16px] font-semibold text-blue-900 mb-1">
                {modulo.description}
              </h4>

              <div className="mb-5">
                <p className="text-xs text-gray-500 mb-1">Progresso</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>

              <hr className="my-3 border-t border-gray-300" />
            </div>

              {etapaConcluida >= modulo.order && (
              <div className="flex gap-4">
                <a className="watchVideo" onClick={() => handleAssistirAgora(modulo)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-gamepad2-icon lucide-gamepad-2">
                    <line x1="6" x2="10" y1="11" y2="11" />
                    <line x1="8" x2="8" y1="9" y2="13" />
                    <line x1="15" x2="15.01" y1="12" y2="12" />
                    <line x1="18" x2="18.01" y1="10" y2="10" />
                    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                  </svg>
                  <span className="now">Agora!</span>
                  <span className="play">Assistir</span>
                </a>
              </div>
            )}


            <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-300 opacity-10 rounded-full animate-ping"></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardModuloWrapper;