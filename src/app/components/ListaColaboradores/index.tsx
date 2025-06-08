// "use client";

// import { useEffect, useState } from "react";
// import {
//   IoPencilOutline,
//   IoTrashOutline,
//   IoLockClosedOutline,
//   IoBookOutline,
// } from "react-icons/io5";

// interface Colaborador {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   cargo: string;
//   dataAdmission: string;
//   urlPicture?: string;
//   numberRegister: string;
//   phone: string;
//   roleUser: string;
//   profile: {
//     profileName: string;
//     department: string;
//     location: string;
//     typeConnection: string;
//     dateAdmission: string;
//   };
// }

// interface ListaColaboradoresProps {
//   onEditar: (id: number) => void;
//   onExcluir: (id: number) => void;
//   onRedefinirSenha: (id: number) => void;
//   onVerCursos: (id: number) => void;
// }

// export const ListaColaboradores = ({
//   onEditar,
//   onExcluir,
//   onRedefinirSenha,
//   onVerCursos,
// }: ListaColaboradoresProps) => {
//   const [users, setUsers] = useState<Colaborador[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:8080/users/all")
//       .then((res) => {
//         if (!res.ok) throw new Error("Erro: Não foi possível carregar os usuários");
//         return res.json();
//       })
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((err) => {
//         console.log("Aconteceu um erro ao carregar os usuários.", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//    function formatProfileName(text: string) {
//       if (!text) return "";

//       const withSpaces = text.replace(/_/g, " ");
//       const lower = withSpaces.toLowerCase();

//       const capitalized = lower.replace(/(^|\s|[-])\S/g, (char: string) => char.toUpperCase());

//       return capitalized;
//     }

//     function formatUpeerCase(text: string) {
//         if (!text) return "";
//         return text
//             .toLowerCase()
//             .replace(/\b\w/g, (char) => char.toUpperCase());
//     }


//   return (
//     <div className="bg-white p-4 rounded-2xl shadow md:ml-96">
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">👥 Lista de Colaboradores</h2>

//       {loading ? (
//         <p className="text-gray-500 animate-pulse">Carregando...</p>
//       ) : users.length === 0 ? (
//         <p className="text-gray-500">Nenhum colaborador encontrado.</p>
//       ) : (
//         <div className="space-y-4">
//           {users.map((colab) => (
//             <div
//               key={colab.id}
//               className="flex items-center justify-between bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow"
//             >
//               <div className="flex items-start gap-4">
//                 <img
//                   src={
//                     colab.urlPicture ||
//                     "https://www.abbviecomvoce.com.br/resource/1569573722000/assets_patient_skyrizi_new/img/avatar.png"
//                   }
//                   alt={colab.firstName}
//                   className="w-12 h-12 rounded-full border border-gray-300 object-cover"
//                 />
//                 <div>
//                   <p className="font-medium text-gray-800 text-base">
//                     {colab.firstName} {colab.lastName}
//                   </p>
//                   <p className="text-sm text-gray-500">{colab.email}</p>

//                   <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 text-xs text-gray-600">
//                     <p><span className="font-medium text-gray-700">Matrícula:</span> {colab.numberRegister}</p>
//                     <p><span className="font-medium text-gray-700">Profissão:</span> {formatProfileName(colab.profile.profileName)}</p>
//                     <p><span className="font-medium text-gray-700">Departamento:</span> {formatProfileName(colab.profile.department)}</p>
//                     <p><span className="font-medium text-gray-700">Permissão:</span> {formatUpeerCase(colab.roleUser)}</p>
//                     <p><span className="font-medium text-gray-700">Localização:</span> {formatProfileName(colab.profile.location)}</p>
//                     <p><span className="font-medium text-gray-700">Vínculo:</span> {formatUpeerCase(colab.profile.typeConnection)}</p>
//                     <p><span className="font-medium text-gray-700">Admissão:</span> {colab.profile.dateAdmission}</p>
//                     <p><span className="font-medium text-gray-700">Telefone:</span> {colab.phone}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 text-gray-600">
//                 <button title="Ver cursos atribuídos" onClick={() => onVerCursos(colab.id)} className="hover:text-blue-600">
//                   <IoBookOutline size={18} />
//                 </button>
//                 <button title="Redefinir senha" onClick={() => onRedefinirSenha(colab.id)} className="hover:text-yellow-600">
//                   <IoLockClosedOutline size={18} />
//                 </button>
//                 <button title="Editar" onClick={() => onEditar(colab.id)} className="hover:text-green-600">
//                   <IoPencilOutline size={18} />
//                 </button>
//                 <button title="Excluir" onClick={() => onExcluir(colab.id)} className="hover:text-red-600">
//                   <IoTrashOutline size={18} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// ListaColaboradores.tsx
"use client";

import { useEffect, useState } from "react";
import {
  IoPencilOutline,
  IoTrashOutline,
  IoLockClosedOutline,
  IoBookOutline,
} from "react-icons/io5";
import { useDebounce } from "../../hooks/useDebouce";

interface Colaborador {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cargo: string;
  dataAdmission: string;
  urlPicture?: string;
  numberRegister: string;
  phone: string;
  roleUser: string;
  profile: {
    profileName: string;
    department: string;
    location: string;
    typeConnection: string;
    dateAdmission: string;
  };
}

interface ListaColaboradoresProps {
  search: string;
  cargo: string;
  departament: string;
  vinculo: string;
  location: string;
  role: string;
  dateAdmission: string;
}

export const ListaColaboradores = ({
  search,
  cargo,
  departament,
  vinculo,
  location,
  role,
  dateAdmission,
}: ListaColaboradoresProps) => {
  const [users, setUsers] = useState<Colaborador[]>([]);
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search);
  const debouncedCargo = useDebounce(cargo);
  const debouncedDepartament = useDebounce(departament);
  const debouncedVinculo = useDebounce(vinculo);
  const debouncedLocation = useDebounce(location);
  const debouncedRole = useDebounce(role);
  const debouncedDateAdmission = useDebounce(dateAdmission);

  useEffect(() => {
    fetch("http://localhost:8080/users/all")
      .then((res) => {
        if (!res.ok) throw new Error("Erro: Não foi possível carregar os usuários");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log("Aconteceu um erro ao carregar os usuários.", err);
      })
      .finally(() => setLoading(false));
  }, []);

  function formatProfileName(text: string) {
    if (!text) return "";
    return text.replace(/_/g, " ").toLowerCase().replace(/(^|\s|[-])\S/g, (char: string) => char.toUpperCase());
  }

  function formatUpeerCase(text: string) {
    if (!text) return "";
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function normalizeString(text: string) {
  return text.toLowerCase().replace(/_/g, " ").trim();
}
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return (
      (!debouncedSearch ||
        fullName.includes(debouncedSearch.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        user.numberRegister.includes(debouncedSearch)) &&
      // (!debouncedCargo || user.profile.profileName === debouncedCargo) &&
      (!debouncedCargo || normalizeString(user.profile.profileName) === normalizeString(debouncedCargo)) &&
      // (!debouncedDepartament || user.profile.department === debouncedDepartament) &&
      (!debouncedDepartament || normalizeString(user.profile.department) === normalizeString(debouncedDepartament)) &&
      (!debouncedVinculo || user.profile.typeConnection === debouncedVinculo) &&
      (!debouncedLocation || user.profile.location === debouncedLocation) &&
      (!debouncedRole || user.roleUser === debouncedRole) &&
      (!debouncedDateAdmission || user.profile.dateAdmission === debouncedDateAdmission)
    );
  });

  return (
    <div className="bg-white p-4 rounded-2xl shadow md:ml-96">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">👥 Lista de Colaboradores</h2>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Carregando...</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-gray-500">Nenhum resultado encontrado.</p>
      ) : (
        <div className="space-y-4">
          {filteredUsers.map((colab) => (
            <div
              key={colab.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow"
            >
              <div className="flex items-start gap-4">
                <img
                  src={
                    colab.urlPicture ||
                    "https://www.abbviecomvoce.com.br/resource/1569573722000/assets_patient_skyrizi_new/img/avatar.png"
                  }
                  alt={colab.firstName}
                  className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800 text-base">
                    {colab.firstName} {colab.lastName}
                  </p>
                  <p className="text-sm text-gray-500">{colab.email}</p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 text-xs text-gray-600">
                    <p><span className="font-medium text-gray-700">Matrícula:</span> {colab.numberRegister}</p>
                    <p><span className="font-medium text-gray-700">Profissão:</span> {formatProfileName(colab.profile.profileName)}</p>
                    <p><span className="font-medium text-gray-700">Departamento:</span> {formatProfileName(colab.profile.department)}</p>
                    <p><span className="font-medium text-gray-700">Permissão:</span> {formatUpeerCase(colab.roleUser)}</p>
                    <p><span className="font-medium text-gray-700">Localização:</span> {formatProfileName(colab.profile.location)}</p>
                    <p><span className="font-medium text-gray-700">Vínculo:</span> {formatUpeerCase(colab.profile.typeConnection)}</p>
                    <p><span className="font-medium text-gray-700">Admissão:</span> {colab.profile.dateAdmission}</p>
                    <p><span className="font-medium text-gray-700">Telefone:</span> {colab.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <button title="Ver cursos atribuídos"  className="hover:text-blue-600">
                  <IoBookOutline size={18} />
                </button>
                <button title="Redefinir senha" className="hover:text-yellow-600">
                  <IoLockClosedOutline size={18} />
                </button>
                <button title="Editar" className="hover:text-green-600">
                  <IoPencilOutline size={18} />
                </button>
                <button title="Excluir" className="hover:text-red-600">
                  <IoTrashOutline size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};