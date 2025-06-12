export default function CabecalhoTrilhasModulos() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow mb-6 md:ml-96">
      {/* Título */}
      <h1 className="text-xl font-semibold text-gray-800">
        📘 Gerenciar Trilhas e Módulos
      </h1>

      {/* Botões de ação */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
          ➕ Criar nova trilha
        </button>

        <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-700 transition">
          ➕ Criar novo módulo
        </button>
      </div>
    </div>
  );
}

