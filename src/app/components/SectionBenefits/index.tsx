import { CardBenefit } from "../CardBenefit";

export const SectionBenefits = () => {
    return (
        <>
            <h1 className="font-jakarta font-bold text-2xl md:text-4xl mb-8 text-center">
                Principais Benefícios
            </h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center max-w-screen-xl mx-auto py-10 px-4 sm:px-6">
            <CardBenefit
                icon="🎯"
                title="Treinamento e Especializações"
                description="Oferecemos cursos completos, garantindo que cada colaborador desenvolva habilidades práticas, seja capacitado no tempo necessário e atenda aos mais altos padrões de qualidade."
                link="#"
            />

             <CardBenefit
                icon="⏳"
                title="Aprendizado e Ritmo"
                description="A plataforma permite que cada colaborador aprenda no seu próprio ritmo, avançando conforme sua disponibilidade e compreensão, garantindo aprendizado eficaz e sem pressa."
                link="#"
                bgColor="bg-white"
                textColor="text-black"
            />

             <CardBenefit
                icon="🧾"
                title="Certificação Conhecida"
                description="Oferecemos certificação reconhecida no mercado, validando o aprendizado e garantindo que nossos colaboradores se destaquem com qualificações valorizadas no setor da construção."
                link="#"
                bgColor="bg-white"
                textColor="text-black"
            />
            </div>
        </>
    );
}