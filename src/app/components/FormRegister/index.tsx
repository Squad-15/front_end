"use client";
import { useEffect, useState } from "react";
import StepIndicator from "../StepIndicator";
import { StepOne } from "../FromSteps/StepOne";
import StepTwo from "../FromSteps/StepTwo";
import StepThree from "../FromSteps/StepThree";

export const FormRegister = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: "",
        lname: "",
        email: "",
        number: "",
        cargo: "",
        departamento: "",
        username: "",
        nivelPermissao: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleNextStep = () => {
        setStep(step + 1);
    }

    const handlePrevStep = () => {
        setStep(step - 1);
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Aqui você pode fazer o que quiser com os dados do formulário, como enviar para uma API ou armazenar no estado global.
    }

    const steps = [
        { id: 1, title: "Dados Pessoais" },
        { id: 2, title: "Informações Profissionais" },
        { id: 3, title: "Usuário e Permissão" },
    ];

    const [departaments, setDepartaments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/departaments")
            .then(res => res.json())
            .then(data => setDepartaments(data));
    }, []);

    return(
    <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
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
        />
)}      
        {step === 3 && (
        <StepThree
            formData={formData}
            handleChange={handleChange}
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
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Cadastrar
            </button>
          )}
        </div>
      </form>
    </div>
    );
}