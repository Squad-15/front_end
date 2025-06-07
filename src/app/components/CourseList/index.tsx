import { IoEyeOutline, IoCreateOutline, IoTrashOutline, IoLayersOutline } from "react-icons/io5";

interface Course {
  id: number;
  titulo: string;
  categoria: string;
  tipo: "Online" | "Presencial" | "Híbrido";
  descricao: string;
  status: "Ativo" | "Inativo";
  url_photo?: string;
}

interface CourseListProps {
  cursos: Course[];
}

export const CourseList = ({ cursos }: CourseListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:ml-96">
      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Imagem */}
            <img
              src={curso.url_photo || "/placeholder-curso.jpg"}
              alt={curso.titulo}
              className="w-full md:w-32 h-24 object-cover rounded-xl border border-gray-200"
            />

            {/* Informações do curso */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{curso.titulo}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{curso.descricao}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded-md">📂 {curso.categoria}</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md">🧭 {curso.tipo}</span>
                <span
                  className={`px-2 py-1 rounded-md ${
                    curso.status === "Ativo"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  🔄 {curso.status}
                </span>
              </div>
            </div>

            {/* Ações rápidas */}
            <div className="flex gap-3 justify-start md:justify-end items-center mt-2 md:mt-0">
              <button title="Visualizar" className="text-blue-600 hover:text-blue-800">
                <IoEyeOutline size={20} />
              </button>
              <button title="Editar" className="text-yellow-600 hover:text-yellow-800">
                <IoCreateOutline size={20} />
              </button>
              <button title="Gerenciar Módulos" className="text-purple-600 hover:text-purple-800">
                <IoLayersOutline size={20} />
              </button>
              <button title="Excluir" className="text-red-600 hover:text-red-800">
                <IoTrashOutline size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
