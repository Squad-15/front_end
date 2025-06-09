type Trilha = {
  id: number;
  titulo: string;
  descricao: string;
  qtdModulos: number;
  status: 'ativo' | 'inativo';
};

const trilhasMock: Trilha[] = [
  {
    id: 1,
    titulo: 'Trilha de Desenvolvimento Frontend',
    descricao: 'Aprenda tecnologias modernas para desenvolvimento web.',
    qtdModulos: 5,
    status: 'ativo',
  },
  {
    id: 2,
    titulo: 'Trilha de Gestão de Projetos',
    descricao: 'Fundamentos e práticas para gerenciar projetos com sucesso.',
    qtdModulos: 3,
    status: 'inativo',
  },
  {
    id: 3,
    titulo: 'Trilha de Comunicação Efetiva',
    descricao: 'Melhore suas habilidades de comunicação no ambiente corporativo.',
    qtdModulos: 4,
    status: 'ativo',
  },
];

export default function ListaTrilhas() {
  return (
    <div className="space-y-4 md:ml-96">
      {trilhasMock.map((trilha) => (
        <div
          key={trilha.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{trilha.titulo}</h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{trilha.descricao}</p>
            <p className="text-gray-500 text-xs mt-1">
              {trilha.qtdModulos} {trilha.qtdModulos === 1 ? 'módulo' : 'módulos'}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                trilha.status === 'ativo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {trilha.status === 'ativo' ? 'Ativo' : 'Inativo'}
            </span>

            {/* Ações rápidas */}
            <div className="flex items-center gap-3 text-gray-600">
              <button
                aria-label={`Editar trilha ${trilha.titulo}`}
                className="hover:text-blue-600 transition"
                title="Editar"
              >
                ✏️
              </button>

              <button
                aria-label={`Excluir trilha ${trilha.titulo}`}
                className="hover:text-red-600 transition"
                title="Excluir"
              >
                🗑️
              </button>

              <button
                aria-label={`Expandir trilha ${trilha.titulo}`}
                className="hover:text-gray-900 transition"
                title="Expandir"
              >
                📂
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
