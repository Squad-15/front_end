"use client";
import { useState } from "react";

export const FormRegister = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: "",
        lname: "",
        email: "",
        number: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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


    return(
        <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
        <div className="text-center mb-12 sm:mb-16">
            <a href="javascript:void(0)"><img
            src="/assets/img/logo.png" alt="logo" className='w-44 inline-block' />
            </a>
            <h4 className="text-slate-600 text-h4 mt-6">Iniciar Novo Cadastro</h4>
        </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
            <div className="grid sm:grid-cols-2 gap-8">
                <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Nome</label>
                <input name="name" value={formData.name} onChange={handleChange} type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o nome" />
                </div>
                <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Sobrenome</label>
                <input name="lname" value={formData.lname} onChange={handleChange} type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o sobrenome" />
                </div>
                <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">E-mail</label>
                <input name="email" value={formData.email} onChange={handleChange} type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o e-mail" />
                </div>
                <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Telefone</label>
                <input name="number" value={formData.number} onChange={handleChange} type="number" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o telefone" />
                </div>
            </div>
        )}
       {step === 2 && (
        <div className="grid sm:grid-cols-2 gap-8">
            <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Cargo</label>
                <select 
                    name="cargo" 
                    className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                >
                    <option value="">Selecione o cargo</option>
                    <option value="analista">Analista</option>
                    <option value="desenvolvedor">Desenvolvedor</option>
                    <option value="gerente">Gerente</option>
                    <option value="estagiario">Estagiário</option>
                </select>
                </div>
                <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Departamento</label>
                <select 
                    name="departamento" 
                    className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                >
                    <option value="">Selecione o departamento</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="ti">Tecnologia da Informação</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="comercial">Comercial</option>
                </select>
            </div>

            <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Data de Admissão</label>
                <input 
                type="date" 
                name="dataAdmissao" 
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" 
                />
            </div>
        <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">Tipo de Vínculo</label>
            <select 
            name="tipoVinculo" 
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            >
            <option value="">Selecione o tipo de vínculo</option>
            <option value="clt">CLT</option>
            <option value="pj">Pessoa Jurídica (PJ)</option>
            <option value="estagio">Estágio</option>
            <option value="temporario">Temporário</option>
            </select>
        </div>
      </div>
        )}
        
        {step === 3 && (
         <div className="grid sm:grid-cols-2 gap-8">
            <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Nome do usuário</label>
                <input
                    type="text"
                    name="username"
                    className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Ex: joao.silva" />
            </div>
        <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Nível de Permissão</label>
                <select
                    name="nivelPermissao"
                    className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                >
                    <option value="">Selecione o nível</option>
                    <option value="usuario">Aluno</option>
                    <option value="gestor">Gestor</option>
                    <option value="admin">Administrador</option>
                </select>
            </div>
            </div>
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