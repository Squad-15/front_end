import React, { useEffect, useState } from "react";

interface FiltroTrilhasProps {
  onChangeBusca: (valor: string) => void;
  onChangeCategoria: (categoria: string) => void;
  onChangeDepartamento?: (departamento: string) => void;
}

interface Option {
  value: string;
  label: string;
}

export default function FiltroTrilhas({
  onChangeBusca,
  onChangeCategoria,
}: FiltroTrilhasProps) {
  const [categoria, setCategoria] = useState("");
  const [departamentosOptions, setDepartamentosOptions] = useState<Option[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/metadata/departaments")
      .then((res) => res.json())
      .then((data) => setDepartamentosOptions(data))
      .catch(console.error);
  }, []);

  function handleCategoriaChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const valor = e.target.value;
    setCategoria(valor);
    onChangeCategoria(valor);
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4 md:ml-96">
      <h2 className="text-lg font-semibold text-gray-800">
        🔍 Filtro de Trilhas e Módulos
      </h2>

      <div className="w-full">
        <input
          type="text"
          placeholder="Pesquisar por título, descrição ou categoria da trilha..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onChangeBusca(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Categorias</label>
          <select
            value={categoria}
            onChange={handleCategoriaChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos as Categorias</option>
            {departamentosOptions.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}


