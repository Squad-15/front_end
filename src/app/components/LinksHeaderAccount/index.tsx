"use client";
// export const LinksHeaderAccount = () => {
//     return(
//         <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
//         <div className="w-full">
//           <a href="#"
//             className="text-[15x] text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] mr-3 fill-current" viewBox="0 0 512 512">
//               <path
//                 d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
//                 data-original="#000000"></path>
//             </svg>
//             Conta</a>
//           <hr className="my-2 -mx-2" />

//           <a href="#"
//             className="text-[15px] text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3 fill-current"
//               viewBox="0 0 24 24">
//               <path
//                 d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
//                 data-original="#000000"></path>
//               <path
//                 d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
//                 data-original="#000000"></path>
//             </svg>
//             Home</a>
//           <a href="#"
//             className="text-[15px] text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] mr-3 fill-current" viewBox="0 0 24 24">
//               <path
//                 d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
//                 data-original="#000000" />
//               <path d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z" data-original="#000000" />
//               <path d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z" data-original="#000000" />
//             </svg>
//             Posts</a>
//           <a href="#"
//             className="text-[15px] text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] mr-3 fill-current" viewBox="0 0 510 510">
//               <g fillOpacity=".9">
//                 <path
//                   d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
//                   data-original="#000000" />
//                 <path d="M267.75 127.5H229.5v153l132.6 81.6 20.4-33.15-114.75-68.85z"
//                   data-original="#000000" />
//               </g>
//             </svg>
//             Schedules</a>
//           <a href="#"
//             className="text-[15px] text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] mr-3 fill-current" viewBox="0 0 6 6">
//               <path
//                 d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
//                 data-original="#000000" />
//             </svg>
//             Sair</a>
//         </div>
//       </div>
//     );
// }

"use client";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import {
  UserCircleIcon,
  HomeIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';


interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const LinksHeaderAccount = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  useEffect(() => {
    async function fetchUser() {
      const token = getCookie("token");
      if (!token) return;

      try {
        const decoded: any = jwtDecode(token);
        const userId = decoded.id;

        const response = await fetch(`http://localhost:8080/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Erro na requisição:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
      <div className="w-full">
        {loading ? (
          <p className="text-center text-sm text-gray-500">Carregando...</p>
        ) : user ? (
          <div className="px-2 pb-2">
            <p className="text-sm text-slate-800 font-semibold truncate">{user.firstName} {user.lastName}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
            <hr className="my-2 -mx-2" />
          </div>
        ) : (
          <p className="text-center text-sm text-red-500">Erro ao carregar perfil</p>
        )}

        <a href="#" className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition">
          <UserCircleIcon className="h-5 w-5 text-gray-600" />
        Conta
      </a>

      <a href="#" className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition">
          <HomeIcon className="h-5 w-5 text-gray-600" />
        Home
      </a>

      <a href="#" className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition">
          <DocumentTextIcon className="h-5 w-5 text-gray-600" />
        Posts
      </a>
      <a href="#" className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition">
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600" />
        Sair
      </a>
      </div>
    </div>
  );
};

