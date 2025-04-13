import React from "react";

type StepThreeProps = {
  formData: {
    username: string;
    nivelPermissao: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const StepThree = ({ formData, handleChange }: StepThreeProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Nome do usuário</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
          placeholder="Ex: joao.silva"
        />
      </div>
      <div>
        <label className="text-slate-800 text-sm font-medium mb-2 block">Nível de Permissão</label>
        <select
          name="nivelPermissao"
          value={formData.nivelPermissao}
          onChange={handleChange}
          className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
        >
          <option value="">Selecione o nível</option>
          <option value="usuario">Aluno</option>
          <option value="gestor">Gestor</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
    </div>
  );
};

export default StepThree;
