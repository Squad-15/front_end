import React, { useState, useEffect } from "react";

type Trilha = {
  id: number;
  name: string;
  tipo: string;
  category: string;
  description: string;
  status: string;
  ordem: number;
};

interface ListaTrilhasProps {
  searchTerm: string;
  categoria: string;
}

function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const ListaTrilhas: React.FC<ListaTrilhasProps> = ({ searchTerm, categoria }) => {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredTrilhas = trilhas.filter((trilha) => {
    const termo = normalizeText(searchTerm);
    const cat = normalizeText(categoria);

    const matchesSearch =
      normalizeText(trilha.name).includes(termo) ||
      normalizeText(trilha.description).includes(termo) ||
      normalizeText(trilha.category).includes(termo);

    const matchesCategoria = !cat || normalizeText(trilha.category) === cat;

    return matchesSearch && matchesCategoria;
  });

  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const res = await fetch("http://localhost:8080/path");
        if (!res.ok) throw new Error("Erro ao buscar trilhas");
        const data = await res.json();
        setTrilhas(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    fetchTrilhas();
  }, []);

  if (loading) return <p>Carregando trilhas...</p>;

  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="space-y-4 md:ml-96">
      {filteredTrilhas.length === 0 ? (
        <p>Nenhum resultado foi encontrado.</p>
      ) : (
        filteredTrilhas.map((trilha) => (
          <div key={trilha.id} className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-semibold">{trilha.name}</h3>
            <p className="text-gray-600">{trilha.description}</p>
            <p className="text-gray-500 text-xs mt-1">Categoria: {trilha.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ListaTrilhas;

