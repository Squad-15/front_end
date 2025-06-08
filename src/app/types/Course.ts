export interface Course {
  id: number;
  titulo: string;
  descricao: string;
  description: string;
  url_video: string;
  url_photo?: string;
  ordem: number | React.ReactNode;
  tipo: "Online" | "Presencial" | "Híbrido";
  categoria?: string;
  status: "Ativo" | "Inativo";
}