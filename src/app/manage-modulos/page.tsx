"use client";
import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebouce";
import ListaTrilhas from "../components/ListaTrilhas";
import FiltroTrilhas from "../components/FiltroTrilhas";
import CabecalhoTrilhasModulos from "../components/CabecalhoTrilhasModulos";

export default function ModulosPage() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");  // Corrigido aqui
  const debouncedBusca = useDebounce(busca, 400);

  return (
    <div className="p-6">
      <CabecalhoTrilhasModulos />
      <FiltroTrilhas onChangeBusca={setBusca} onChangeCategoria={setCategoria} />
      <ListaTrilhas searchTerm={debouncedBusca} categoria={categoria} />
    </div>
  );
}