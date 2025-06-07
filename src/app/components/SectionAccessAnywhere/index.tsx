export const SectionAccessAnywhere = () => {
    return(
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    <span className="text-5xl sm:text-7xl">
                        Acesso Fácil, Sempre ao Seu Alcance
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Com a nossa plataforma, seus colaboradores podem aprender a qualquer hora e em qualquer lugar, diretamente do celular.
                </p>
                <div className="flex mt-8">
                    <a href="#"
                        className="inline-flex items-center text-white bg-primary hover:bg-red-600 border-0 py-2 px-6 focus:outline-none rounded-full text-h6">
                            Acesse já <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="assets/img/jotinha_mascote_2.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
    );
}