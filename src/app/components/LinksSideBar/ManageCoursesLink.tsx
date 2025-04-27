import Link from 'next/link';

interface ManageCoursesProps {
  isCursosOpen: boolean;
  setIsCursosOpen: (value: boolean) => void;
}

const ManageCourses = ({ isCursosOpen, setIsCursosOpen }: ManageCoursesProps) => {
  return (
    <>
      <Link
        href="#"
        passHref
        onClick={() => setIsCursosOpen(!isCursosOpen)}
        className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px] mr-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>

        <span className="overflow-hidden text-ellipsis whitespace-nowrap">Gestão de cursos</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`arrowIcon w-3 fill-current ml-auto transition-all duration-500 ${isCursosOpen ? 'rotate-0' : '-rotate-90'}`}
          viewBox="0 0 451.847 451.847"
        >
          <path
            d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
            data-original="#000000"
          />
        </svg>
      </Link>

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
    </>
  );
};

export default ManageCourses;