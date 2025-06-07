'use client';

import Image from 'next/image';

const DepoimentoSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-10 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/img/jotinha_mascote_3.png"
            alt="Personagem"
            width={386}
            height={600}
            className="object-contain hidden md:block"
            />
        </div>

        <div className="w-full md:w-1/2">
          <div className="text-orange-500 text-xl mb-4">★★★★★</div>

          <h3 className="text-2xl font-bold mb-4">Confiável, eficiente e incrível!</h3>

          <p className="text-gray-600 mb-6">
            A plataforma de treinamento superou minhas expectativas! Com acesso fácil pelo celular, aprendi muito e no meu ritmo, melhorando a eficiência e qualidade no trabalho, dentro do prazo e com ótimos resultados.
          </p>

          <div className="flex items-center gap-4">
            <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*Nt39X5uC-FW8A94OtpgbJg.jpeg"
                alt="Joana Costa"
                width={40}
                height={40}
                className="rounded-full object-cover"
            />

            <div>
              <p className="font-semibold">Joana Costa</p>
              <p className="text-sm text-gray-500">Gestora de Projeto, Jota Nunes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentoSection;
