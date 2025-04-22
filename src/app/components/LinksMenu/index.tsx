import { AssetsMenu } from "../AssetsMenu";
import { useState } from "react";
export const LinksMenu = () => {
     const [isDashboardOpen, setIsDashboardOpen] = useState(false);
     const [isCursosOpen, setIsCursosOpen] = useState(false);
     const [isColaboradoresOpen, setIsColaboradoresOpen] = useState(false);
     const [isGestoresOpen, setIsGestoresOpen] = useState(false);
     const [isReportOpen, setIsReportOpen] = useState(false);
     const [isReportSquadOpen, setIsReportSquadOpen] = useState(false);
     
    return(
    <nav>
        <div className="py-4 px-4">
            <ul className="space-y-2">
            <li>
                <a
                href="#"
                onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] mr-3"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                    data-original="#000000"
                    />
                    <path
                    d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                    data-original="#000000"
                    />
                </svg>

                <span className="overflow-hidden text-ellipsis whitespace-nowrap">Dashboard</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                    isDashboardOpen ? 'rotate-0' : '-rotate-90'
                    }`}
                    viewBox="0 0 451.847 451.847"
                >
                    <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                    />
                </svg>
                </a>

                <ul className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isDashboardOpen ? "max-h-[500px]" : "max-h-0"}`}>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Visão geral</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Indicadores de performance</span>
                    </a>
                </li>
                </ul>

                <a
                href="#"
                onClick={() => setIsCursosOpen(!isCursosOpen)}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
                >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px] mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>



                <span className="overflow-hidden text-ellipsis whitespace-nowrap">Gestão de cursos</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                    isCursosOpen ? 'rotate-0' : '-rotate-90'
                    }`}
                    viewBox="0 0 451.847 451.847"
                >
                    <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                    />
                </svg>
            </a>

                <ul className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isCursosOpen ? "max-h-[500px]" : "max-h-0"}`}>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Gerenciar cursos</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Gerenciar módulos e materiais</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Atribuir cursos</span>
                    </a>
                </li>

                </ul>

                <a
                href="#"
                onClick={() => setIsColaboradoresOpen(!isColaboradoresOpen)}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                    viewBox="0 0 512 512">
                    <path
                    d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                    data-original="#000000" />
                </svg>


                <span className="overflow-hidden text-ellipsis whitespace-nowrap">Gestão de colaboradores</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                    isColaboradoresOpen ? 'rotate-0' : '-rotate-90'
                    }`}
                    viewBox="0 0 451.847 451.847"
                >
                    <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                    />
                </svg>
            </a>

                <ul className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isColaboradoresOpen ? "max-h-[500px]" : "max-h-0"}`}>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Gerenciar colaboradores</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Ver progresso dos colaboradores</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Cadastrar colaborador</span>
                    </a>
                </li>
                </ul>

                <a
                href="#"
                onClick={() => setIsGestoresOpen(!isGestoresOpen)}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px] mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>



                <span className="overflow-hidden text-ellipsis whitespace-nowrap">Gestão de gestores</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                    isGestoresOpen ? 'rotate-0' : '-rotate-90'
                    }`}
                    viewBox="0 0 451.847 451.847"
                >
                    <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                    />
                </svg>
            </a>

                <ul className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isGestoresOpen ? "max-h-[500px]" : "max-h-0"}`}>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Cadastrar novo gestor</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Gerenciar permissão</span>
                    </a>
                </li>
                </ul>

                <a
                href="#"
                onClick={() => setIsReportOpen(!isReportOpen)}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px] mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>

                <span className="overflow-hidden text-ellipsis whitespace-nowrap">Relatórios</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                    isReportOpen ? 'rotate-0' : '-rotate-90'
                    }`}
                    viewBox="0 0 451.847 451.847"
                >
                    <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                    />
                </svg>
            </a>

            <ul className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isReportOpen ? "max-h-[500px]" : "max-h-0"}`}>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Exportar dados completo</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Ver históricos e estatísticas por período</span>
                    </a>
                </li>
                </ul>

                <a
                href="#"
                onClick={() => setIsReportSquadOpen(!isReportSquadOpen)}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
                >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px] mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>


                <span className="overflow-hidden text-ellipsis whitespace-nowrap">Relatórios da equipe</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${
                    isReportSquadOpen ? 'rotate-0' : '-rotate-90'
                    }`}
                    viewBox="0 0 451.847 451.847"
                >
                    <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                    />
                </svg>
            </a>

                <ul className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isReportSquadOpen ? "max-h-[500px]" : "max-h-0"}`}>
                <li>
                    <a href="#" className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300">
                    <span>Exportar dados da equipe</span>
                    </a>
                </li>
                </ul>

                <AssetsMenu />
                </li>
            </ul>
        </div>
    </nav>
    );
}