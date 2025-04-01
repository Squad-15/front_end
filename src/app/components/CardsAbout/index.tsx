export const CardsAbout = () => {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">500+</h2>
                        <p className="text-black mb-2 text-center">Treinamentos</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                    <div className="px-12">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">100+</h2>
                        <p className="text-black mb-2 text-center">Certificações</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 py-8">
                    <div className="px-12">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">30M+</h2>
                        <p className="text-black mb-2 text-center">Horas de Curso</p>
                    </div>
                </div>
            </div>
        </div>
    );
};