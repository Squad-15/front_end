"use client";
import { Player } from '@lottiefiles/react-lottie-player';
import { PuzzlePieceIcon} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { LoadingSpinner } from '../LoadingSpinner';

interface MyJwtPayload extends JwtPayload {
  id: string;
}


export const StepPath = () => {

  const [idUser, setIdUser] = useState<string | null>(null);
  const [userCategoryId, setUserCategoryId] = useState<string | null>(null);
  const [pathUserId, setPathUserId] = useState<string | null>(null);
  interface Modulo {
    id: string;
    nameTrilha?: string;
    nomeModulo?: string;
    status?: string;
  }

  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  function getCookie(name: string): string | null {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? decodeURIComponent(match[2]) : null;
  }
  
  useEffect(() => {
      async function fetchUser() {
        const token = getCookie("token");
        if (!token) return;
  
        try {
          const decoded = jwtDecode<MyJwtPayload>(token);
          const userId = decoded.id;
  
          const response = await fetch(`http://localhost:8080/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setIdUser(data.id);
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
  async function fetchUserPath() {
    if (!idUser) return;

    try {
      const response = await fetch(`http://localhost:8080/user/${idUser}/categoria`);
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

  fetchUserPath();
}, [idUser]);

useEffect(() => {
  async function fetchModulosPath() {
    if(!pathUserId) return;
      const response = await fetch(`http://localhost:8080/trilhas/${pathUserId}/modulos`);
      if(!response.ok) {
        console.log("Erro ao buscar módulos relacionados a trilha do usuário");
        return;
      }

      const modulosResponseData = await response.json();
      console.log("Módulos:", modulosResponseData);
      setModulos(modulosResponseData);
      setIsLoading(false);
    try {

    } catch(e) {
      console.log("Erro ao buscar módulo", e);
      setIsLoading(false);
    }
  }

  fetchModulosPath();
}, [pathUserId])

useEffect(() => {
    async function fetchPathUser() {
       if (!userCategoryId) return;
      setIsLoading(true);
      
      try {
        const response = await fetch(`http://localhost:8080/categorias/${userCategoryId}/trilhas`);
        if(!response.ok) {
          console.log("Erro ao buscar trilha do usuário");
          return;
        }

        const pathUserData = await response.json();
        const idPathUser = pathUserData[0].trilhaId;
        setPathUserId(idPathUser)
      } catch(e) {
         console.error("Erro ao buscar trilha:", e);
      }
    }

      fetchPathUser();
  }, [userCategoryId])

 return (
  isLoading ? (
    <div className="flex flex-col items-center justify-center min-h-[300px] font-poppins text-center">
      <LoadingSpinner />
      <p className="mt-4 text-lg font-semibold animate-bounce">
          Preparando o seu caminho de aprendizado...
     </p>
    </div>
  ) : (
    <div className='flex flex-col md:flex-row items-center justify-center gap-12 font-poppins px-4'>
      <div className="flex-shrink-0">
        <Player
          autoplay
          loop
          src="assets/animations/animation_trilha.json"
          style={{ height: "250px", width: "250px" }}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        {modulos.slice(0, 1).map((modulo) => (
          <div
            key={modulo.id}
            className='flex items-center gap-3 text-2xl font-extrabold text-gradient bg-clip-text text-transparent from-green-400 via-blue-500 to-yellow-500 bg-gradient-to-r select-none mb-4'
          >
            <PuzzlePieceIcon className="w-8 h-8 animate-pulse text-green-500" />
            <span>{modulo.nameTrilha}</span>
          </div>
        ))}

        <div className="flex items-center flex-col">
          <div className="flex items-center flex-col">
        {modulos.length < 4 ? (
          <p className="text-red-500 font-semibold text-center">
            🚧 A trilha ainda não está pronta para você. Aguarde a liberação de novos módulos.
          </p>
      ) : (
      modulos.slice(0, 4).map((modulo, index) => (
        <div key={modulo.id} className="flex items-center flex-col relative group mb-10">
          <div className="absolute top-0 left-full ml-4 w-max">
            <p className={`text-[10px] font-semibold ${modulo.status === 'CONCLUIDO' ? 'text-green-400' : 'text-gray-400'}`}>
              Missão {index + 1}
            </p>
            <h6 className={`text-sm font-bold ${modulo.status === 'CONCLUIDO' ? 'text-green-700' : 'text-gray-400'}`}>
              {modulo.nomeModulo}
            </h6>
            <p className={`text-xs font-semibold ${modulo.status === 'CONCLUIDO' ? 'text-green-600' : 'text-gray-400'}`}>
              {modulo.status === 'CONCLUIDO' ? 'Concluída' : 'Pendente'}
            </p>
          </div>

          <div className={`w-10 h-10 border-2 rounded-full flex items-center justify-center shadow-md
            ${modulo.status === 'CONCLUIDO' ? 'border-green-600 bg-green-100' : 'border-gray-300 bg-gray-100'}`}>
            {modulo.status === 'CONCLUIDO' ? (
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.285 6.709l-11.025 11.025-5.286-5.286 1.414-1.414 3.872 3.872 9.611-9.611z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
              </svg>
            )}
          </div>
        </div>
    ))
  )}
</div>
        </div>

        <div className="mt-6 bg-gray-100 px-4 py-2 rounded-lg text-center text-sm text-gray-700 shadow-sm">
          🌱 Progresso: {modulos.filter(m => m.status === 'CONCLUIDO').length} de {modulos.length} etapas concluídas.
        </div>
      </div>
    </div>
  )
);
};