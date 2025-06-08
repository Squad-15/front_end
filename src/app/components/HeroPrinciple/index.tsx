"use client";
import { CardsAbout } from "../CardsAbout";

export const HeroPrinciple = () => {
    return (
        <section>
            <div className="container mx-auto flex md:py-10 md:flex-row flex-col-reverse items-center">
                <div
                    className="lg:flex-grow mt-5 md:mt-0 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1
                        className="font-jakarta text-4xl font-bold mb-3 text-black sm:text-4xl sm:leading-10 md:text-h1 md:leading-normal">
                        Fortalecendo equipes Treinando para o futuro
                    </h1>
                    <p className="mb-8 md:w-96 md:pl-0 pl-2 pr-2 leading-relaxed text-[#696969] font-medium">
                        Capacitação de qualidade para transformar profissionais e elevar o padrão da construção
                    </p>
                    <div className="flex justify-center">
                    <a href="#"
                        className="inline-flex items-center text-white bg-primary hover:bg-red-600 border-0 py-2 px-6 focus:outline-none rounded-full text-h6">
                            Acesse já <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
                    </a>

                        <a href="#"
                            className="ml-4 inline-flex border-0 py-2 px-6 text-h6 underline">
                            Ver Cursos
                        </a>
                    </div>

                    <CardsAbout />
                </div>
                <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                    <img className="object-cover object-center rounded" alt="hero" src="assets/img/img_hero_1.png" />
                </div>
            </div>
        </section>
    );
};