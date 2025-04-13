import React from "react";

type StepTwoProps = {
  formData: {
    cargo: string;
    departamento: string;
    profile: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  departaments: { value: string; label: string }[];
  profile: { value: string; label: string }[];
};

const StepTwo = ({ formData, handleChange, departaments, profile }: StepTwoProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {/* <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Cargo</label>
        <select
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione o cargo</option>
          <option value="analista">Analista</option>
          <option value="desenvolvedor">Desenvolvedor</option>
          <option value="gerente">Gerente</option>
          <option value="estagiario">Estagiário</option>
        </select>
      </div> */}
       <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Cargo</label>
        <select
          name="profile"
          value={formData.profile}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione o cargo</option>
          {profile.map((prof) => (
            <option key={prof.value} value={prof.value}>
              {prof.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Departamento</label>
        <select
          name="departamento"
          value={formData.departamento}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione o departamento</option>
          {departaments.map((dep) => (
            <option key={dep.value} value={dep.value}>
              {dep.label}
            </option>
          ))}
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
  );
};

export default StepTwo;