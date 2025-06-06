'use client';

import { jwtDecode, JwtPayload } from 'jwt-decode';
import { useState, useEffect } from 'react';

type HeaderScreenStepProps = {
  etapaConcluida: number;
  onSelecionarModulo: (id: number) => void;
};

export const StepModulos: React.FC<HeaderScreenStepProps> = ({ etapaConcluida, onSelecionarModulo }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userCategoryId, setUserCategoryId] = useState<string | null>(null);
  const [pathUserId, setPathUserId] = useState<string | null>(null);
  const [modulos, setModulos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true); // estado do loading

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
        setModulos(modulosResponseData);
      } catch (e) {
        console.log("Erro ao buscar módulos:", e);
      } finally {
        setIsLoading(false); // finaliza o loading
      }
    }

    fetchModulosPath();
  }, [pathUserId]);

  useEffect(() => {
    if (modulos.length > 0) {
      onSelecionarModulo(modulos[0].idModulo);
    }
  }, [modulos]);

  // Loader gamificado
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-60 w-full">
        <div className="w-20 h-20 animate-bounce mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
            alt="Mascote carregando"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-lg font-semibold text-black animate-pulse">
          Carregando sua jornada...
        </p>
      </div>
    );
  }

  return (
    <header className="mt-6 py-4 px-4 font-poppins sm:px-10 bg-transparent min-h-[70px] tracking-wide relative z-50 w-full mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-10 w-full sm:w-[50%] mx-auto rounded-full">
        <nav className="lg:flex lg:gap-x-8 max-lg:flex max-lg:flex-col max-lg:items-center">
          <ul className="flex gap-x-8 text-center">
            {modulos.map((modulo) => {
              const isUnlocked = true; // ajustar conforme regra depois

              return (
                <li key={modulo.id}>
                  {isUnlocked ? (
                    <button
                      onClick={() => {
                        onSelecionarModulo(modulo.idModulo);
                      }}
                      className="flex items-center gap-2 font-bold text-[15px] hover:text-[#BC1F1B]"
                    >
                      {modulo.nomeModulo}
                    </button>
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
