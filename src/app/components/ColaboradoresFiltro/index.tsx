"use client";

import { useEffect, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface FiltroProps {
  search: string;
  setSearch: (value: string) => void;
  cargo: string;
  setCargo: (value: string) => void;
  departament: string;
  setDepartament: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  vinculo: string;
  setVinculo: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  dateAdmission: string;
  setDateAdmission: (value: string) => void;
}

export const ColaboradoresFiltro = ({
  search,
  setSearch,
  cargo,
  setCargo,
  departament,
  setDepartament,
  location,
  setLocation,
  vinculo,
  setVinculo,
  role,
  setRole,
  dateAdmission,
  setDateAdmission,
}: FiltroProps) => {
  const [cargosOptions, setCargosOptions] = useState<Option[]>([]);
  const [departamentosOptions, setDepartamentosOptions] = useState<Option[]>([]);
  const [vinculosOptions, setVinculosOptions] = useState<Option[]>([]);
  const [locationsOptions, setLocationsOptions] = useState<Option[]>([]);
  const [roleOptions, setRoleOptions] = useState<Option[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/metadata/profiles")
      .then((res) => res.json())
      .then((data) => setCargosOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/departaments")
      .then((res) => res.json())
      .then((data) => setDepartamentosOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/typeconnection")
      .then((res) => res.json())
      .then((data) => setVinculosOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/location")
      .then((res) => res.json())
      .then((data) => setLocationsOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/roleuser")
      .then((res) => res.json())
      .then((data) => setRoleOptions(data))
      .catch(console.error);
  }, []);

  return (
    <div className="rounded-2xl shadow mb-6 md:ml-96">
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">🔍 Filtros de Busca</h2>
        <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition">
          + Criar novo
        </a>
      </div>

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
     <input
          type="text"
          placeholder="Buscar por nome, e-mail ou matrícula"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        />
        
        <select
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        >
          <option value="">Todos os cargos</option>
          {cargosOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <select
          value={departament}
          onChange={(e) => setDepartament(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        >
          <option value="">Todos os departamentos</option>
          {departamentosOptions.map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>

        <select
          value={vinculo}
          onChange={(e) => setVinculo(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        >
          <option value="">Todos os vínculos</option>
          {vinculosOptions.map((v) => (
            <option key={v.value} value={v.value}>{v.label}</option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        >
          <option value="">Todas as localizações</option>
          {locationsOptions.map((loc) => (
            <option key={loc.value} value={loc.value}>{loc.label}</option>
          ))}
        </select>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        >
          <option value="">Todas as permissões</option>
          {roleOptions.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>

        <input
          type="date"
          value={dateAdmission}
          onChange={(e) => setDateAdmission(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 text-sm w-full"
        />
  </div>
</div>
    </div>
  );
};
