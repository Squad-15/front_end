"use client";

import { useEffect, useState } from "react";
import { UserCircleIcon  } from "@heroicons/react/24/outline";

interface UserProfile {
  department: string;
  profileName: string;
  location: string;
}

interface UserData {
  firstName: string;
  lastName: string;
  cargo: string;
  departament: string;
  roleUser: string;
  location: string;
  urlPicture: string;
  numberRegister: string;
  profile: UserProfile;
}


interface ModalDetailsUserProps {
  closeModalUserDetails: () => void;
  userId: number;
}

export const ModalDetailsUser = ({ closeModalUserDetails, userId }: ModalDetailsUserProps) => {

  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://back-end-sz7p.onrender.com/users/${userId}`);
      console.log("userId recebido:", userId);
      if (!response.ok) throw new Error("Erro ao buscar dados");

      const data = await response.json();
      console.log("Dados recebidos do usuário:", data);

      setUserData(data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  fetchUserData();
}, [userId]);

 function formatProfileName(text?: string) {
  if (!text) return "";

  const withSpaces = text.replace(/_/g, " ");
  const lower = withSpaces.toLowerCase();
  const capitalized = lower.replace(/(^|\s|[-])\S/g, (char: string) => char.toUpperCase());

  return capitalized;
}

function formatUpeerCase(text?: string) {
  if (!text) return "";
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}


  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg shadow-lg overflow-hidden">

      <button
        onClick={closeModalUserDetails}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold z-10"
      >
        ×
      </button>

      <div className="flex flex-col lg:flex-row">
        <div
          className="flex-shrink-0 w-full lg:w-2/5 h-64 lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('${userData?.urlPicture || "/assets/img/default_profile.png"}')`,
          }}
        ></div>

        <div className="flex-1 p-6 flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            {userData ? `${userData.firstName} ${userData.lastName}` : ""}
          </h1>

          <div className="w-20 h-1 bg-green-500 rounded-full mb-6"></div>

            <p className="flex items-center text-gray-600 text-sm mb-4">
            <UserCircleIcon className="h-7 w-7 text-green-600 mr-2" />
            Matrícula: {userData?.numberRegister}
          </p>

          <p className="flex items-center text-gray-600 text-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-green-600 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            Departamento: {formatProfileName(userData?.profile.department)}
          </p>

          <p className="flex items-center text-gray-600 text-sm mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7 text-green-600 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
          </svg>
            Profissão: {formatProfileName(userData?.profile.profileName)}
          </p>

          <p className="flex items-center text-gray-600 text-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-green-600 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Permissão: {formatUpeerCase(userData?.roleUser)}
          </p>

          <p className="flex items-center text-gray-600 text-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-green-600 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Localização: {formatProfileName(userData?.profile.location)}
          </p>

          <a href="/manage-users" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full self-start">
            Ver mais
          </a>
        </div>
      </div>
    </div>
  </div>
);

};

