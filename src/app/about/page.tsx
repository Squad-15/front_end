import Footer from '../components/footer'
export default function AboutPage() {
  return (
    <div className="text-left">
      <div className="py-16 bg-white font-poppins" >
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="/assets/img/jotinha_mascote_3.png"
                alt="Mascote Jotanunes"
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Sobre Nós
              </h2>
              <p className="mt-6 text-gray-600">
                Fundada em 1987 em Aracaju (SE), a Jotanunes Construtora é uma
                empresa sólida que atua nos estados de Sergipe, Bahia e
                Pernambuco. Com mais de 26.500 unidades entregues, a empresa se
                destaca pela qualidade, inovação e compromisso com seus
                clientes.
              </p>
              <p className="mt-4 text-gray-600">
                A Jotanunes possui uma ampla variedade de empreendimentos
                residenciais, sempre focando em oferecer moradia de qualidade
                com transparência e responsabilidade social.
              </p>
              <p className="mt-4 text-gray-600">
                Com certificações importantes e premiações no setor, a Jotanunes
                é referência no mercado imobiliário da região, investindo em
                sustentabilidade e melhoria contínua.
              </p>
              <p className="mt-4 text-gray-600">
                Nosso compromisso é transformar sonhos em realidade, construindo
                mais que imóveis — construindo lares.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}
