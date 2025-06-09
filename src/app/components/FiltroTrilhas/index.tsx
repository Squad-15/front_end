export default function FiltroTrilhas() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4 md:ml-96">
      <h2 className="text-lg font-semibold text-gray-800">🔍 Filtro de Trilhas e Módulos</h2>

      {/* Campo de busca */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Pesquisar por título de trilha..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tipo */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Tipo</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todos</option>
            <option value="trilha">Trilha</option>
            <option value="modulo">Módulo</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Status</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todos</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        {/* Categoria */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Categoria</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todas</option>
            <option value="tecnica">Técnica</option>
            <option value="comportamental">Comportamental</option>
            <option value="lideranca">Liderança</option>
          </select>
        </div>
      </div>
    </div>
  );
}

