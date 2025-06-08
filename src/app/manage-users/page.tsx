"use client";
import { useState } from "react";
import { ColaboradoresFiltro } from "../components/ColaboradoresFiltro";

export default function ManageUsers() {
    const [search, setSearch] = useState("");
    const [cargo, setCargo] = useState("");
    const [status, setStatus] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    
    return(
        <div>
        <ColaboradoresFiltro
            search={search}
            setSearch={setSearch}
            cargo={cargo}
            setCargo={setCargo}
            status={status}
            setStatus={setStatus}
            dataInicio={dataInicio}
            setDataInicio={setDataInicio}
            dataFim={dataFim}
            setDataFim={setDataFim}
        />
    </div>
    )
}