"use client";
import React from "react";

type StepThreeProps = {
  formData: {
    nivelPermissao: string;
    roleUser: string;
    location: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  roleUser: { value: string; label: string }[];
  optionsLocation: { value: string; label: string }[];
};

const StepThree = ({ formData, handleChange, roleUser, optionsLocation}: StepThreeProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
         <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Localidade</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione a Localidade</option>
          {optionsLocation.map((loc) => (
            <option key={loc.value} value={loc.value}>
              {loc.label}
            </option>
          ))}
        </select>
      </div>
       <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Nível de Permissão</label>
        <select
          name="roleUser"
          value={formData.roleUser}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione o nível</option>
          {roleUser.map((rol) => (
            <option key={rol.value} value={rol.value}>
              {rol.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StepThree;
