// "use client";
// import React, { useEffect, useState } from "react";

// interface Trilha {
//   id: number;
//   name: string;
//   description: string;
//   category: string;
// }

// interface Modulo {
//   id: number;
//   idModulo: number;
//   nomeModulo: string;
//   descricaoModulo: string;
//   ordem: number;
//   status?: "ativo" | "inativo";
// }

// interface TrilhaComModulos extends Trilha {
//   modulos: Modulo[];
// }

// function ModuloDentroDaTrilha({ modulo }: { modulo: Modulo }) {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm mb-2">
//       <div className="w-8 text-center font-semibold text-gray-700">{modulo.ordem}</div>
//       <div className="flex-1 px-4 text-gray-900 font-medium">{modulo.nomeModulo}</div>
//       <div className="w-20 text-center py-1 rounded-full font-semibold text-sm bg-green-100 text-green-700">
//         Ativo
//       </div>
//       <div className="w-32 text-center text-gray-600">
//         {Math.floor(Math.random() * 10) + 1} materiais
//       </div>
//       <div className="flex space-x-3 text-gray-600 text-lg cursor-pointer">
//         <button className="hover:text-blue-600">✏️</button>
//         <button className="hover:text-red-600">🗑️</button>
//         <button className="hover:text-purple-600">📦</button>
//       </div>
//     </div>
//   );
// }

// export default function ListaTrilhas() {
//   const [trilhas, setTrilhas] = useState<TrilhaComModulos[]>([]);
//   const [trilhaExpandidaId, setTrilhaExpandidaId] = useState<number | null>(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState<string | null>(null);

//   useEffect(() => {
//     async function buscarTrilhasComModulos() {
//       try {
//         const trilhasRes = await fetch("http://localhost:8080/path");
//         if (!trilhasRes.ok) throw new Error("Erro ao buscar trilhas");
//         const trilhasData: Trilha[] = await trilhasRes.json();

//         const trilhasComModulos = await Promise.all(
//           trilhasData.map(async (trilha) => {
//             const modulosRes = await fetch(`http://localhost:8080/trilhas/${trilha.id}/modulos`);
//             const modulosData: Modulo[] = await modulosRes.json();

//             return {
//               ...trilha,
//               modulos: modulosData
//             };
//           })
//         );

//         setTrilhas(trilhasComModulos);
//       } catch (error: unknown) {
//         if (error instanceof Error) {
//           setErro(error.message);
//         } else {
//           setErro("Erro desconhecido");
//         }
//       } finally {
//         setCarregando(false);
//       }
//     }

//     buscarTrilhasComModulos();
//   }, []);

//   const toggleExpandir = (id: number) => {
//     setTrilhaExpandidaId((atual) => (atual === id ? null : id));
//   };

//   if (carregando) return <p className="text-center py-8">Carregando trilhas e módulos...</p>;
//   if (erro) return <p className="text-center text-red-600 py-8">Erro: {erro}</p>;

//   return (
//     <div className="space-y-6 md:ml-96">
//       {trilhas.map((trilha) => (
//         <div key={trilha.id} className="border rounded p-4 bg-gray-50">
//           <div className="flex justify-between items-center select-none">
//             <div>
//               <h2 className="font-bold text-lg">{trilha.name}</h2>
//               <p className="text-gray-600 text-sm">{trilha.description}</p>
//               <p className="text-gray-600 text-sm">Categoria: {trilha.category}</p>
//             </div>
//             <button
//               onClick={() => toggleExpandir(trilha.id)}
//               className="text-blue-600 font-semibold"
//             >
//               {trilhaExpandidaId === trilha.id ? "▲ Recolher" : "▼ Expandir"}
//             </button>
//           </div>

//           {trilhaExpandidaId === trilha.id && (
//             <div className="mt-4">
//               {trilha.modulos.length > 0 ? (
//                 trilha.modulos.map((modulo) => (
//                   <ModuloDentroDaTrilha key={modulo.idModulo} modulo={modulo} />
//                 ))
//               ) : (
//                 <p className="text-gray-500">Nenhum módulo associado.</p>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client"
import React, { useEffect, useState } from "react";

interface Trilha {
  id: number;
  name: string;
  description: string;
  category: string;
}

interface Modulo {
  id: number;
  idModulo: number;
  nomeModulo: string;
  descricaoModulo: string;
  ordem: number;
  status?: "ativo" | "inativo";
}

interface TrilhaComModulos extends Trilha {
  modulos: Modulo[];
}

interface ListaTrilhasProps {
  searchTerm: string;
}

function ModuloDentroDaTrilha({ modulo }: { modulo: Modulo }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm mb-2">
      <div className="w-8 text-center font-semibold text-gray-700">{modulo.ordem}</div>
      <div className="flex-1 px-4 text-gray-900 font-medium">{modulo.nomeModulo}</div>
      <div className="w-20 text-center py-1 rounded-full font-semibold text-sm bg-green-100 text-green-700">
        {modulo.status === "ativo" ? "Ativo" : "Inativo"}
      </div>
      <div className="w-32 text-center text-gray-600">
        {Math.floor(Math.random() * 10) + 1} materiais
      </div>
      <div className="flex space-x-3 text-gray-600 text-lg cursor-pointer">
        <button className="hover:text-blue-600" title="Editar">✏️</button>
        <button className="hover:text-red-600" title="Excluir">🗑️</button>
        <button className="hover:text-purple-600" title="Detalhes">📦</button>
      </div>
    </div>
  );
}

export default function ListaTrilhas({ searchTerm }: ListaTrilhasProps) {
  const [trilhas, setTrilhas] = useState<TrilhaComModulos[]>([]);
  const [trilhaExpandidaId, setTrilhaExpandidaId] = useState<number | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function buscarTrilhasComModulos() {
      try {
        const trilhasRes = await fetch("http://localhost:8080/path");
        if (!trilhasRes.ok) throw new Error("Erro ao buscar trilhas");
        const trilhasData: Trilha[] = await trilhasRes.json();

        const trilhasComModulos = await Promise.all(
          trilhasData.map(async (trilha) => {
            const modulosRes = await fetch(`http://localhost:8080/trilhas/${trilha.id}/modulos`);
            const modulosData: Modulo[] = await modulosRes.json();
            console.log(`Módulos da trilha ${trilha.id}:`, modulosData);

            return {
              ...trilha,
              modulos: modulosData,
            };
          })
        );

        setTrilhas(trilhasComModulos);
      } catch (error: unknown) {
        setErro(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setCarregando(false);
      }
    }

    buscarTrilhasComModulos();
  }, []);

  const toggleExpandir = (id: number) => {
    setTrilhaExpandidaId((atual) => (atual === id ? null : id));
  };

  const trilhasFiltradas = trilhas.filter((trilha) =>
    trilha.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (carregando) return <p className="text-center py-8">Carregando trilhas e módulos...</p>;
  if (erro) return <p className="text-center text-red-600 py-8">Erro: {erro}</p>;

  return (
    <div className="space-y-6 md:ml-96">
      {trilhasFiltradas.map((trilha) => (
        <div key={trilha.id} className="border rounded p-4 bg-gray-50">
          <div className="flex justify-between items-center select-none">
            <div>
              <h2 className="font-bold text-lg">{trilha.name}</h2>
              <p className="text-gray-600 text-sm">{trilha.description}</p>
              <p className="text-gray-600 text-sm">Categoria: {trilha.category}</p>
            </div>
            <button
              onClick={() => toggleExpandir(trilha.id)}
              className="text-blue-600 font-semibold"
            >
              {trilhaExpandidaId === trilha.id ? "▲ Recolher" : "▼ Expandir"}
            </button>
          </div>

          {trilhaExpandidaId === trilha.id && (
            <div className="mt-4">
              {trilha.modulos.length > 0 ? (
                trilha.modulos.map((modulo) => (
                  <ModuloDentroDaTrilha key={modulo.idModulo} modulo={modulo} />
                ))
              ) : (
                <p className="text-gray-500">Nenhum módulo associado.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}