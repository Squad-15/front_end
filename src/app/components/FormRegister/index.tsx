"use client";
import StepIndicator from "../StepIndicator";
import { StepOne } from "../FromSteps/StepOne";
import StepTwo from "../FromSteps/StepTwo";
import StepThree from "../FromSteps/StepThree";
import { useFormRegister } from "@/app/hooks/useFormRegister";

export const FormRegister = () => {
    const {
        step,
        departaments,
        profile,
        typeconnection,
        location,
        roleUser,
        formData,
        handleChange,
        handleNextStep,
        handlePrevStep,
        handleSubmit,
        isSubmitting
      } = useFormRegister();
    
      const steps = [
        { id: 1, title: "Dados Pessoais" },
        { id: 2, title: "Informações Profissionais" },
        { id: 3, title: "Localidade e Permissão" },
      ];

    return(
      <div className="w-full max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6 md:mt-0 md:p-0">
        <div className="text-center mb-12 sm:mb-16">
            <a href="javascript:void(0)"><img
            src="/assets/img/logo.png" alt="logo" className='w-44 inline-block' />
            </a>
            <h4 className="text-slate-600 text-h4 mt-6">Iniciar Novo Cadastro</h4>
        </div>

        <div className="flex justify-center gap-8 mb-8">
            {steps.map(({ id, title }) => (
            <StepIndicator key={id} step={id} currentStep={step} title={title} />
        ))}
    </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && <StepOne formData={formData} handleChange={handleChange} />}

        {step === 2 && (
          <StepTwo
              formData={formData}
              handleChange={handleChange}
              departaments={departaments}
              profile={profile}
              typeconnection={typeconnection}
          />
    )}      
          {step === 3 && (
          <StepThree
              formData={formData}
              handleChange={handleChange}
              roleUser={roleUser}
              optionsLocation={location}
          />
          )}
          
      <div className="mt-12 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
              >
                Voltar
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-red-600 transition"
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center justify-center min-w-[120px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 animate-spin fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    />
                  </svg>
                ) : (
                  "Cadastrar"
                )}
            </button>

            )}
          </div>
      </form>
    </div>
    );
}