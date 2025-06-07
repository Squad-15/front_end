"use client";
import { useEffect, useState } from "react";
import { CourseHeader } from "../components/CourseHeader";
import { CourseList } from "../components/CourseList";
// import { CourseUsers } from "../components/CourseUsers";

// const cursosExemplo = [
//   {
//     id: 1,
//     titulo: "Curso de React Avançado",
//     categoria: "Tecnologia",
//     tipo: "Online",
//     descricao: "Aprenda React com práticas modernas e hooks.",
//     status: "Ativo",
//     url_photo: "https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg"
//   },
//   {
//     id: 2,
//     titulo: "Gestão de Equipes",
//     categoria: "Liderança",
//     tipo: "Presencial",
//     descricao: "Desenvolva habilidades de liderança e comunicação.",
//     status: "Inativo",
//     url_photo: ""
//   }
// ];

const alunos = [
  {
    id: 1,
    nome: "Maria Oliveira",
    email: "maria@exemplo.com",
    progresso: 80,
    avatar: "",
  },
  {
    id: 2,
    nome: "Carlos Souza",
    email: "carlos@exemplo.com",
    progresso: 45,
  },
];

interface Course {
  id: number;
  titulo: string;
  description: string;
  url_video: string;
  url_photo: string;
  ordem: number;
  tipo: string;
}

export default function ManageCourses() {

  const [cursos, setCursos] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

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

    return(
        // <div>
        //     <CourseHeader />
        //     <CourseList cursos={cursosExemplo} />
        //     <CourseUsers
        //         usuarios={alunos}
        //         onRemoverUsuario={(id) => console.log("Remover aluno", id)}
        //         onAdicionarUsuario={() => console.log("Adicionar novo aluno")}
        //     />
        // </div>

        <div>
      <CourseHeader />
          {loading ? (
            <p className="text-center text-gray-600 mt-4">Carregando cursos...</p>
          ) : (
            <CourseList cursos={cursos} />
          )}
    </div>
    );
}