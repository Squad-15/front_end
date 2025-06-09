"use client";
import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebouce";
import FiltroTrilhas from "../components/FiltroTrilhas";
import CabecalhoTrilhasModulos from "../components/CabecalhoTrilhasModulos";
import ListaTrilhasComModulos from "../components/ModuloDentroDaTrilha";

export default function ModulosPage() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const debouncedBusca = useDebounce(busca, 400);

  return (
    <div className="p-6">
      <CabecalhoTrilhasModulos />
      <FiltroTrilhas onChangeBusca={setBusca} onChangeCategoria={setCategoria} />
      <ListaTrilhasComModulos searchTerm={debouncedBusca} categoria={categoria} />
    </div>
  );
}