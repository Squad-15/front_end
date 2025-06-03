'use client';

import { jwtDecode, JwtPayload } from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-ionicons';

type HeaderScreenStepProps = {
  etapaConcluida: number;
};

export const HeaderScreenStep: React.FC<HeaderScreenStepProps> = ({ etapaConcluida }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userCategoryId, setUserCategoryId] = useState<string | null>(null);
  const [pathUserId, setPathUserId] = useState<string | null>(null);
  const [modulos, setModulos] = useState<any[]>([]);

  
  function getCookie(name: string): string | null {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? decodeURIComponent(match[2]) : null;
  }

   useEffect(() => {
    async function fetchUser() {
      const token = getCookie("token");
      if (!token) return;

      try {
        const decoded = jwtDecode<JwtPayload & { id: string }>(token);
        const userId = decoded.id;

        const response = await fetch(`http://localhost:8080/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserId(data.id);
        } else {
          console.error("Erro na requisição:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchUserCategory() {
      if (!userId) return;

      try {
        const response = await fetch(`http://localhost:8080/user/${userId}/categoria`);
        if (!response.ok) {
          console.error("Erro ao buscar categoria do usuário");
          return;
        }

        const userCategoryData = await response.json();
        setUserCategoryId(userCategoryData.idCategoria);
      } catch (error) {
        console.error("Erro ao buscar categoria:", error);
      }
    }

    fetchUserCategory();
  }, [userId]);

  useEffect(() => {
    if (userCategoryId) {
      setPathUserId(userCategoryId);
    }
  }, [userCategoryId]);

  useEffect(() => {
    async function fetchModulosPath() {
      if (!pathUserId) return;

      try {
        const response = await fetch(`http://localhost:8080/trilhas/${pathUserId}/modulos`);
        if (!response.ok) {
          console.log("Erro ao buscar módulos relacionados à trilha do usuário");
          return;
        }

        const modulosResponseData = await response.json();
        console.log("Módulos:", modulosResponseData);
        setModulos(modulosResponseData);
      } catch (e) {
        console.log("Erro ao buscar módulos:", e);
      }
    }

    fetchModulosPath();
  }, [pathUserId]);
  
  
  return (
    <header className="mt-6 py-4 px-4 font-poppins sm:px-10 bg-transparent min-h-[70px] tracking-wide relative z-50 w-full mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-10 w-full sm:w-[50%] mx-auto rounded-full">
        <nav className="lg:flex lg:gap-x-8 max-lg:flex max-lg:flex-col max-lg:items-center">
          <ul className="flex gap-x-8 text-center">
            {modulos.map((modulo) => {
            const isUnlocked = etapaConcluida >= modulo.order;
        return (
          <li key={modulo.id}>
            {isUnlocked ? (
              <Link
                href={`/modulo/${modulo.order}`}
                className="flex items-center gap-2 font-bold text-[15px] hover:text-[#BC1F1B]"
              >
                {modulo.nomeModulo || `Módulo ${modulo.order}`}
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="flex items-center gap-2 font-bold text-[15px] text-gray-400 cursor-not-allowed"
              >
                {`${modulo.nomeModulo}`}
              </span>
            )}
          </li>
        );
  })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
