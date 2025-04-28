interface ManageLinkProps {
  isGestoresOpen: boolean;
  setIsGestoresOpen: (value: boolean) => void;
}

const ManageLink = ({ isGestoresOpen, setIsGestoresOpen }: ManageLinkProps) => {
    return (
      <>
      <div
            onClick={() => setIsGestoresOpen(!isGestoresOpen)}
            className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[18px] h-[18px] mr-3"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>

            <span className="overflow-hidden text-ellipsis whitespace-nowrap">Gestão de gestores</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${isGestoresOpen ? 'rotate-0' : '-rotate-90'}`}
                viewBox="0 0 451.847 451.847"
            >
                <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000" />
            </svg>
        </div><ul
            className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${isGestoresOpen ? 'max-h-[500px]' : 'max-h-0'}`}
        >
                <li>
                    <a
                        href="#"
                        className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300"
                    >
                        <span>Cadastrar novo gestor</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300"
                    >
                        <span>Gerenciar permissão</span>
                    </a>
                </li>
            </ul>
            </>
    );
  };
  
  export default ManageLink;