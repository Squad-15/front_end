"use client";
import { useEffect, useState } from "react";
import { IoTrashOutline, IoEyeOutline, IoCreateOutline, IoMapOutline } from "react-icons/io5";

interface Track {
  id: number;
  name: string;
  description?: string;
}

export const ListTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/path")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar trilhas");
        return res.json();
      })
      .then((data) => {
        setTracks(data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Carregando trilhas...</p>;
  if (error) return <p className="p-4 text-red-500">Erro: {error}</p>;

  return (
    <section>
      <div className="md:ml-0 lg:ml-0 xl:ml-80 p-4">
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 dark:bg-dark dark:border-gray-700">
          <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between dark:border-gray-700">
            <h2 className="font-semibold text-gray-800 dark:text-light">
              Trilhas de Treinamento
            </h2>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                <IoCreateOutline size={20} />
                <span className="font-medium">Criar Nova</span>
              </button>

              <button className="flex items-center gap-2 bg-[#60A5FA] hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
                <IoMapOutline size={20} />
                <span className="font-medium">Gerenciar Trilhas</span>
              </button>
            </div>
          </header>

          <div className="p-3 overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th className="p-2 whitespace-nowrap text-left">Trilha</th>
                  <th className="p-2 whitespace-nowrap text-left">Descrição</th>
                  <th className="p-2 whitespace-nowrap text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700">
                {tracks.map((trilha) => (
                  <tr key={trilha.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-gray-800 dark:text-light">
                          {trilha.name}
                        </div>
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left max-w-xs truncate">
                        {trilha.description || "-"}
                      </div>
                    </td>

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
