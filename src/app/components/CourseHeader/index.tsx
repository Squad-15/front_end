"use client";
import React from "react";

interface CourseHeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  ordem: number;
  setOrdem: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CourseHeader = ({
  search,
  setSearch,
  type,
  setType,
  ordem,
  setOrdem,
  category,
  setCategory,
}: CourseHeaderProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl mb-6 md:ml-96">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">📚 Gerenciar Cursos</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition">
          + Criar novo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-1 md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tipo</option>
          <option value="online">Online</option>
          <option value="presencial">Presencial</option>
          <option value="hibrido">Híbrido</option>
        </select>

        <select
          value={ordem}
          onChange={(e) => setOrdem(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Ordem</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Categoria</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="lideranca">Liderança</option>
          <option value="vendas">Vendas</option>
          <option value="outros">Outros</option>
        </select>
      </div>
    </div>
  );
};
