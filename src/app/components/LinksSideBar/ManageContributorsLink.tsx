"use client";
interface ManageContributorsProps {
  isColaboradoresOpen: boolean;
  setIsColaboradoresOpen: (value: boolean) => void;
}

const ManageContributorsLink = ({ isColaboradoresOpen, setIsColaboradoresOpen }: ManageContributorsProps) => {
  return (
    <div>
      <div
        onClick={() => setIsColaboradoresOpen(!isColaboradoresOpen)}
        className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-[18px] h-[18px] mr-3"
          viewBox="0 0 512 512"
        >
          <path
            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
            data-original="#000000"
          />
        </svg>

        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          Gestão de colaboradores
        </span>

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
      </div>

      <ul
        className={`sub menu overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8 ${
          isColaboradoresOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <li>
          <a
            href="/manage-users"
            className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300"
          >
            <span>Gerenciar colaboradores</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300"
          >
            <span>Ver progresso dos colaboradores</span>
          </a>
        </li>

        <li>
          <a
            href="/register"
            className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300"
          >
            <span>Cadastrar colaborador</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ManageContributorsLink;
