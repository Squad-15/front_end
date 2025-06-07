"use client";
import { CourseHeader } from "../components/CourseHeader";
import { CourseList } from "../components/CourseList";
import { CourseUsers } from "../components/CourseUsers";

const cursosExemplo = [
  {
    id: 1,
    titulo: "Curso de React Avançado",
    categoria: "Tecnologia",
    tipo: "Online",
    descricao: "Aprenda React com práticas modernas e hooks.",
    status: "Ativo",
    url_photo: "https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg"
  },
  {
    id: 2,
    titulo: "Gestão de Equipes",
    categoria: "Liderança",
    tipo: "Presencial",
    descricao: "Desenvolva habilidades de liderança e comunicação.",
    status: "Inativo",
    url_photo: ""
  }
];

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

export default function ManageCourses() {
    return(
        <div>
            <CourseHeader />
            <CourseList cursos={cursosExemplo} />
            <CourseUsers
                usuarios={alunos}
                onRemoverUsuario={(id) => console.log("Remover aluno", id)}
                onAdicionarUsuario={() => console.log("Adicionar novo aluno")}
            />
        </div>
    );
}