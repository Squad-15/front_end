"use client";
import { useEffect, useState } from "react";
import { CourseHeader } from "../components/CourseHeader";
import  { CourseList } from "../components/CourseList";
import { useDebounce } from "../hooks/useDebouce";

import { Course } from "../types/Course";

export default function ManageCourses() {
  const [cursos, setCursos] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [ordem, setOrdem] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchCursos() {
      try {
        const response = await fetch("http://localhost:8080/document");
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error("Erro ao carregar cursos", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCursos();
  }, []);

  const filteredCursos = cursos.filter((curso) => {
    const matchesSearch =
    curso.titulo.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesType = type ? curso.tipo.toLowerCase() === type.toLowerCase() : true;

      const matchesStatus = ordem
    ? curso.ordem === Number(ordem)
    : true;

    const matchesCategory = category
      ? curso.categoria?.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearch && matchesType && matchesStatus && matchesCategory;
  });

  return (
    <div>
      <CourseHeader
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        ordem={ordem === "" ? 0 : Number(ordem)}
        setOrdem={setOrdem}
        category={category}
        setCategory={setCategory}
      />
      {loading ? (
          <p className="text-center text-gray-600 mt-4">Carregando...</p>
        ) : filteredCursos.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">Nenhum resultado foi encontrado.</p>
        ) : (
          <CourseList cursos={filteredCursos} />
        )}
    </div>
  );
}
