"use client";
import { useState } from "react";
import { ColaboradoresFiltro } from "../components/ColaboradoresFiltro";
import { ListaColaboradores } from "../components/ListaColaboradores";

export default function ManageUsers() {
    const [search, setSearch] = useState("");
    const [cargo, setCargo] = useState("");
    const [departament, setDepartament] = useState("");
    const [location, setLocation] = useState("");
    const [vinculo, setVinculo] = useState("");
    const [role, setRole] = useState("");
    const [dateAdmission, setDateAdmission] = useState("");
    
    return(
        <div>
        <ColaboradoresFiltro
            search={search}
            setSearch={setSearch}
            cargo={cargo}
            setCargo={setCargo}
            departament={departament}
            setDepartament={setDepartament}
            location={location}
            setLocation={setLocation}
            vinculo={vinculo}
            setVinculo={setVinculo}
            role={role}
            setRole={setRole}
            dateAdmission={dateAdmission}
            setDateAdmission={setDateAdmission}
        />

        {/* <ListaColaboradores/>; */}

        <ListaColaboradores
            search={search}
            cargo={cargo}
            departament={departament}
            vinculo={vinculo}
            location={location}
            role={role}
            dateAdmission={dateAdmission}
        />

    </div>
    )
}