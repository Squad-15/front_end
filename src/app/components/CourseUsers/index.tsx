import { IoPersonRemoveOutline, IoPersonAddOutline } from "react-icons/io5";

interface User {
  id: number;
  nome: string;
  email: string;
  progresso: number; // de 0 a 100
  avatar?: string;
}

interface CourseUsersProps {
  usuarios: User[];
  onRemoverUsuario: (id: number) => void;
  onAdicionarUsuario: () => void;
}

export const CourseUsers = ({
  usuarios,
  onRemoverUsuario,
  onAdicionarUsuario,
}: CourseUsersProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mt-6 md:ml-96">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">👥 Alunos Matriculados</h3>
        <button
          onClick={onAdicionarUsuario}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <IoPersonAddOutline size={18} />
          <span>Adicionar aluno</span>
        </button>
      </div>

      {usuarios.length === 0 ? (
        <p className="text-gray-500">Nenhum aluno matriculado ainda.</p>
      ) : (
        <div className="space-y-4">
          {usuarios.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar || "https://www.abbviecomvoce.com.br/resource/1569573722000/assets_patient_skyrizi_new/img/avatar.png"}
                  alt={user.nome}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <p className="font-medium text-gray-800">{user.nome}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${user.progresso}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{user.progresso}% completo</p>
                </div>
              </div>

              <button
                onClick={() => onRemoverUsuario(user.id)}
                className="text-red-600 hover:text-red-800"
                title="Remover aluno"
              >
                <IoPersonRemoveOutline size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
