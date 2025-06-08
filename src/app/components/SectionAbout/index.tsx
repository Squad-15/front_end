"use client";
export const SectionAbout = () => {
    return(
        <section className="bg-gray-50 rounded-3xl p-8 md:p-16 text-black relative max-w-[1200px] mx-auto flex flex-col items-center justify-center mt-10 mb-10">
        <span className="absolute top-2 left-4 text-primary font-semibold text-sm">Sobre nós</span>
      
        <p className="text-2xl md:text-3xl font-medium leading-relaxed">
          Nossa plataforma de treinamento foi desenvolvida para atender às necessidades específicas do setor da construção, oferecendo cursos dinâmicos e interativos que capacitam seus colaboradores de maneira eficaz e prática.
        </p>
      
        <div className="absolute hidden bottom-4 right-4 text-2xl text-white bg-black w-12 h-12 rounded-md md:flex items-center justify-center">
          ↗
        </div>
      </section>
    );
}