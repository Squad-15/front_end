interface ReportSquadDataLinkProps {
    isReportSquadOpen: boolean;
    setIsReportSquadOpen: (value: boolean) => void;
}

const ReportSquadDataLink = ({isReportSquadOpen, setIsReportSquadOpen}: ReportSquadDataLinkProps) => {
    return(
        <>
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
        </>
    );
}

export default ReportSquadDataLink;