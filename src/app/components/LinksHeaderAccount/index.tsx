"use client";
import {
  UserCircleIcon,
  HomeIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { UserProfile } from "../HeaderAccount";
interface LinksHeaderAccountProps {
  user: UserProfile | null;
  loading: boolean;
}

export const LinksHeaderAccount = ({ user, loading }: LinksHeaderAccountProps) => {
  return (
    <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
      <div className="w-full">
        {loading ? (
          <p className="text-center text-sm text-gray-500">Carregando...</p>
        ) : user ? (
          <div className="px-2 pb-2">
            <p className="text-sm text-slate-800 font-semibold truncate">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
            <hr className="my-2 -mx-2" />
          </div>
        ) : (
          <p className="text-center text-sm text-red-500">Erro ao carregar perfil</p>
        )}

        <a
          href="#"
          className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
        >
          <UserCircleIcon className="h-5 w-5 text-gray-600" />
          Conta
        </a>

        <a
          href="#"
          className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
        >
          <HomeIcon className="h-5 w-5 text-gray-600" />
          Home
        </a>

        <a
          href="#"
          className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
        >
          <DocumentTextIcon className="h-5 w-5 text-gray-600" />
          Posts
        </a>

        <a
          href="#"
          className="text-[15px] text-slate-800 font-medium flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600" />
          Sair
        </a>
      </div>
    </div>
  );
};

