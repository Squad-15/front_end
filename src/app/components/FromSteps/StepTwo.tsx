"use client";
import React from "react";

type StepTwoProps = {

  formData: {
    cargo: string;
    departamento: string;
    typeconnection: string;
    dataAdmissao: string;
  };

  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  departaments: { value: string; label: string }[];
  profile: { value: string; label: string }[];
  typeconnection: { value: string; label: string }[];
};

const StepTwo = ({ formData, handleChange, departaments, profile, typeconnection }: StepTwoProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
       <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Cargo</label>
        <select
          name="cargo"
          value={formData.cargo}
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
            value={formData.dataAdmissao}
            onChange={handleChange}
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" 
          />

      </div>

    <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Tipo de Vínculo</label>
        <select
          name="typeconnection"
          value={formData.typeconnection}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione o tipo de vínculo</option>
          {typeconnection.map((con) => (
            <option key={con.value} value={con.value}>
              {con.label}
            </option>
          ))}
        </select>
      </div>
   </div>
  );
};

export default StepTwo;