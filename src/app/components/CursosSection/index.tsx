'use client';

import Image from 'next/image';

const cursos = [
  {
    titulo: 'Gestão de Projetos',
    descricao: 'Aprenda estratégias eficazes para gerenciar projetos de construção com sucesso.',
    imagem: '/images/gestao-projetos.jpg', // substitua pelo caminho real da imagem
  },
  {
    titulo: 'Gestão de Obras e Custos',
    descricao: 'Aprenda controle de custos e otimização de recursos em projetos de construção.',
    imagem: '/images/gestao-obras.jpg',
  },
  {
    titulo: 'Liderança e Gestão de Equipes',
    descricao: 'Capacite líderes a gerenciar equipes de forma eficaz e motivar para alcançar resultados excepcionais.',
    imagem: '/images/lideranca-equipes.jpg',
  },

  {
  titulo: 'Segurança no Trabalho',
  descricao: 'Aprenda práticas essenciais para garantir a segurança no ambiente de trabalho e prevenir acidentes.',
  imagem: '/images/seguranca-trabalho.jpg',
},
{
  titulo: 'Planejamento Estratégico',
  descricao: 'Desenvolva habilidades para criar, aplicar e avaliar planos estratégicos com foco em resultados.',
  imagem: '/images/planejamento-estrategico.jpg',
},
{
  titulo: 'Comunicação Empresarial',
  descricao: 'Melhore sua comunicação interna e externa para fortalecer relacionamentos e a imagem da empresa.',
  imagem: '/images/comunicacao-empresarial.jpg',
},

];

export const CursosSection = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 px-4 md:px-20 rounded-3xl my-10 mx-auto max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Explore nossos cursos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cursos.map((curso, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div className="h-48 md:h-56 w-full relative">
              <Image
                src={curso.imagem}
                alt={curso.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold mb-2">{curso.titulo}</h3>
                <p className="text-sm text-gray-300">{curso.descricao}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a href="#" className="text-sm underline">Saiba mais</a>
                <button className="bg-red-600 hover:bg-red-700 p-2 rounded-lg">
                  <span className="text-white text-lg">↗</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CursosSection;
