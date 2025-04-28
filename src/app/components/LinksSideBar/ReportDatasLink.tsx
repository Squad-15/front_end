interface ReportDatasLinkProps {
    isReportOpen: boolean;
    setIsReportOpen: (isOpen: boolean) => void;
}

const ReportDatasLink = ({ isReportOpen, setIsReportOpen }: ReportDatasLinkProps) => {
    return(
        <>
            <div
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
        </div>

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
            </>
    );
}

export default ReportDatasLink;