"use client";
import { useState } from "react";

export const CourseHeader = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="p-4 bg-white shadow-md rounded-2xl mb-6 md:ml-96">
      {/* Título e botão */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">📚 Gerenciar Cursos</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition">
          + Criar novo curso
        </button>
      </div>

      {/* Filtros e busca */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Buscar por título ou código..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-1 md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tipo */}
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

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Status</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="andamento">Em andamento</option>
        </select>

        {/* Categoria */}
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
