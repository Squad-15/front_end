"use client";
// import { IoTrashOutline, IoEyeOutline, IoCreateOutline, IoBookOutline } from "react-icons/io5";

// export const ListCourses = () => {
//   return (
//     <section>
//       <div className="md:ml-0 lg:ml-0 xl:ml-80 p-4">
//         <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 dark:bg-dark dark:border-gray-700">
//           <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between dark:border-gray-700">
//             <h2 className="font-semibold text-gray-800 dark:text-light">
//               Cursos de Treinamento
//             </h2>
//             <button className="flex items-center gap-2 bg-[#60A5FA] hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
//               <IoBookOutline size={20} />
//               <span className="font-medium">Gerenciar Cursos</span>
//             </button>

//           </header>

//           <div className="p-3 overflow-x-auto">
//             <table className="table-auto w-full">
//               <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
//                 <tr>
//                   <th className="p-2 whitespace-nowrap text-left">Curso</th>
//                   <th className="p-2 whitespace-nowrap text-left">Categoria</th>
//                   <th className="p-2 whitespace-nowrap text-left">Duração</th>
//                   <th className="p-2 whitespace-nowrap text-center">Ações</th>
//                 </tr>
//               </thead>
//               <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700">
//                 {[
//                   {
//                     nome: "Segurança no Trabalho em Obras",
//                     categoria: "Segurança",
//                     duracao: "20h",
//                     imagem: "https://img.freepik.com/fotos-premium/engenheiros-e-arquitetos-trabalhando-no-local-de-construcao_31965-4026.jpg",
//                   },
//                   {
//                     nome: "Uso Correto de Equipamentos de Proteção Individual (EPI)",
//                     categoria: "Segurança",
//                     duracao: "15h",
//                     imagem: "https://img.freepik.com/fotos-premium/trabalhadores-da-construcao-usando-equipamentos-de-protecao_163782-2037.jpg",
//                   },
//                   {
//                     nome: "Operação de Máquinas Pesadas",
//                     categoria: "Operação",
//                     duracao: "30h",
//                     imagem: "https://img.freepik.com/fotos-premium/trabalhadores-da-construcao-usando-equipamentos-de-protecao_163782-2037.jpg",
//                   },
//                 ].map((curso, index) => (
//                   <tr key={index}>
//                     <td className="p-2 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 flex-shrink-0 mr-3">
//                           <img
//                             className="rounded"
//                             src={curso.imagem}
//                             alt={curso.nome}
//                             width={40}
//                             height={40}
//                           />
//                         </div>
//                         <div className="font-medium text-gray-800 dark:text-light">
//                           {curso.nome}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="p-2 whitespace-nowrap">
//                       <div className="text-left">{curso.categoria}</div>
//                     </td>
//                     <td className="p-2 whitespace-nowrap">
//                       <div className="text-left font-medium text-primary">
//                         {curso.duracao}
//                       </div>
//                     </td>
//                     <td className="p-2 whitespace-nowrap">
//                       <div className="flex justify-center space-x-2">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <IoEyeOutline size={18} />
//                         </button>
//                         <button className="text-yellow-500 hover:text-yellow-700">
//                           <IoCreateOutline size={18} />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <IoTrashOutline size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useEffect, useState } from "react";
import { IoTrashOutline, IoEyeOutline, IoCreateOutline, IoBookOutline } from "react-icons/io5";

export const ListCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/document")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar cursos");
        return res.json();
      })
      .then((data) => {
        setCourses(data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Carregando cursos...</p>;
  if (error) return <p className="p-4 text-red-500">Erro: {error}</p>;

  return (
    <section>
      <div className="md:ml-0 lg:ml-0 xl:ml-80 p-4">
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 dark:bg-dark dark:border-gray-700">
          <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between dark:border-gray-700">
            <h2 className="font-semibold text-gray-800 dark:text-light">
              Cursos de Treinamento
            </h2>
            <button className="flex items-center gap-2 bg-[#60A5FA] hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
              <IoBookOutline size={20} />
              <span className="font-medium">Gerenciar Cursos</span>
            </button>
          </header>

          <div className="p-3 overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th className="p-2 whitespace-nowrap text-left">Curso</th>
                  {courses.some(c => c.tipo) && (
                    <th className="p-2 whitespace-nowrap text-left">Categoria</th>
                  )}
                  {courses.some(c => c.description) && (
                    <th className="p-2 whitespace-nowrap text-left">Descrição</th>
                  )}
                  <th className="p-2 whitespace-nowrap text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700">
                {courses.map((curso) => (
                  <tr key={curso.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-3">
                          <img
                            className="rounded"
                            src={curso.url_photo || 'assets/img/default_modulo.png'}
                            alt={curso.titulo}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="font-medium text-gray-800 dark:text-light">
                          {curso.titulo}
                        </div>
                      </div>
                    </td>

                    {curso.tipo && (
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{curso.tipo}</div>
                      </td>
                    )}

                    {curso.description && (
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left max-w-xs truncate">{curso.description}</div>
                      </td>
                    )}

                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700" title="Visualizar">
                          <IoEyeOutline size={18} />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700" title="Editar">
                          <IoCreateOutline size={18} />
                        </button>
                        <button className="text-red-500 hover:text-red-700" title="Excluir">
                          <IoTrashOutline size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

