"use client";
import React, { useState } from "react";

interface ModuloProps {
  ordem: number;
  titulo: string;
  status: "ativo" | "inativo";
  quantidadeMateriais: number;
}

function ModuloDentroDaTrilha({
  ordem,
  titulo,
  status,
  quantidadeMateriais,
}: ModuloProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm mb-2">
      <div className="w-8 text-center font-semibold text-gray-700">{ordem}</div>

      <div className="flex-1 px-4 text-gray-900 font-medium">{titulo}</div>

      <div
        className={`w-20 text-center py-1 rounded-full font-semibold text-sm ${
          status === "ativo"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status === "ativo" ? "Ativo" : "Inativo"}
      </div>

      <div className="w-32 text-center text-gray-600">{quantidadeMateriais} materiais</div>

      <div className="flex space-x-3 text-gray-600 text-lg cursor-pointer">
        <button type="button" aria-label="Editar módulo" className="hover:text-blue-600">
          ✏️
        </button>
        <button type="button" aria-label="Excluir módulo" className="hover:text-red-600">
          🗑️
        </button>
        <button type="button" aria-label="Ver materiais" className="hover:text-purple-600">
          📦
        </button>
      </div>
    </div>
  );
}

interface Modulo {
  id: number;
  ordem: number;
  titulo: string;
  status: "ativo" | "inativo";
  quantidadeMateriais: number;
}

interface Trilha {
  id: number;
  titulo: string;
  modulos: Modulo[];
}

const trilhasMock: Trilha[] = [
  {
    id: 1,
    titulo: "Trilha de React",
    modulos: [
      { id: 1, ordem: 1, titulo: "Fundamentos do React", status: "ativo", quantidadeMateriais: 10 },
      { id: 2, ordem: 2, titulo: "Hooks Avançados", status: "inativo", quantidadeMateriais: 7 },
    ],
  },
  {
    id: 2,
    titulo: "Trilha de Node.js",
    modulos: [
      { id: 3, ordem: 1, titulo: "Introdução ao Node", status: "ativo", quantidadeMateriais: 8 },
    ],
  },
];

function ListaTrilhas() {
  const [trilhaExpandida, setTrilhaExpandida] = useState<number | null>(null);

  function toggleExpandirTrilha(idTrilha: number) {
    console.log("Toggle trilha:", idTrilha);
    if (trilhaExpandida === idTrilha) {
      setTrilhaExpandida(null);
    } else {
      setTrilhaExpandida(idTrilha);
    }
  }

  return (
    <div>
      {trilhasMock.map((trilha) => (
        <div key={trilha.id} className="mb-6 border rounded p-4 bg-gray-50 md:ml-96">
          <div className="flex justify-between items-center select-none">
            <h2 className="font-bold text-lg">{trilha.titulo}</h2>
            <button
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => toggleExpandirTrilha(trilha.id)}
              aria-label={trilhaExpandida === trilha.id ? "Recolher trilha" : "Expandir trilha"}
            >
              {trilhaExpandida === trilha.id ? "▲ Recolher" : "▼ Expandir"}
            </button>
          </div>

          {trilhaExpandida === trilha.id && (
            <div className="mt-4">
              {trilha.modulos.map((modulo) => (
                <ModuloDentroDaTrilha
                  key={modulo.id}
                  ordem={modulo.ordem}
                  titulo={modulo.titulo}
                  status={modulo.status}
                  quantidadeMateriais={modulo.quantidadeMateriais}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListaTrilhas;
