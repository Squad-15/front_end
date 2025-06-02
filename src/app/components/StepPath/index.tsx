"use client";
import { Player } from '@lottiefiles/react-lottie-player';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const StepPath = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center font-poppins gap-6 px-4">
      <div className="flex items-center gap-3 text-2xl font-extrabold text-gradient bg-clip-text text-transparent
                      from-green-400 via-blue-500 to-yellow-500 bg-gradient-to-r select-none mb-4">
        <CheckCircleIcon className="w-8 h-8 animate-pulse text-green-500" />
        <span>🔥 Trilha de Conquistas do Usuário</span>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-8">
        <div className="flex-shrink-0">
          <Player
            autoplay
            loop
            src="assets/animations/animation_trilha.json"
            style={{ height: "250px", width: "250px" }}
          />
        </div>

        <div className="flex items-center flex-col w-max relative">
          {/* Etapa 1 */}
          <div className="flex items-center flex-col relative group">
            <div className="absolute top-0 left-full ml-4 w-max">
              <p className="text-[10px] font-semibold text-green-400">Missão 1</p>
              <h6 className="text-sm font-bold text-green-700">Nome da Etapa 1</h6>
              <p className="text-green-600 text-xs font-semibold">Concluída</p>
            </div>
            <div className="w-10 h-10 border-2 border-green-600 bg-green-100 flex items-center justify-center rounded-full shadow-md">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.285 6.709l-11.025 11.025-5.286-5.286 1.414-1.414 3.872 3.872 9.611-9.611z" />
              </svg>
            </div>
            <div className="w-0.5 h-16 bg-green-500"></div>
          </div>

          {/* Etapa 2 */}
          <div className="flex items-center flex-col relative group">
            <div className="absolute top-0 left-full ml-4 w-max">
              <p className="text-[10px] font-semibold text-blue-400">Missão 2</p>
              <h6 className="text-sm font-bold text-blue-700">Nome da Etapa 2</h6>
              <p className="text-gray-400 text-xs font-semibold">Pendente</p>
            </div>
            <div className="w-10 h-10 border-2 border-blue-400 bg-blue-100 flex items-center justify-center rounded-full animate-pulse shadow-md">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
              </svg>
            </div>
            <div className="w-0.5 h-16 bg-blue-300"></div>
          </div>

          {/* Etapa 3 */}
          <div className="flex items-center flex-col relative group">
            <div className="absolute top-0 left-full ml-4 w-max">
              <p className="text-[10px] font-semibold text-yellow-500">Missão 3</p>
              <h6 className="text-sm font-bold text-yellow-600">Nome da Etapa 3</h6>
              <p className="text-gray-400 text-xs font-semibold">Pendente</p>
            </div>
            <div className="w-10 h-10 border-2 border-yellow-400 bg-yellow-100 flex items-center justify-center rounded-full shadow-md">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="w-0.5 h-16 bg-gray-300"></div>
          </div>

          {/* Etapa 4 */}
          <div className="flex items-center flex-col relative group">
            <div className="absolute top-0 left-full ml-4 w-max">
              <p className="text-[10px] font-semibold text-gray-400">Missão 4</p>
              <h6 className="text-sm text-gray-400 font-semibold">Avaliação Final</h6>
              <p className="text-gray-400 text-xs font-semibold">Pendente</p>
            </div>
            <div className="w-10 h-10 border-2 border-gray-300 bg-gray-100 flex items-center justify-center rounded-full shadow-md">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
              </svg>
            </div>
          </div>

          {/* Frase final */}
          <div className="mt-6 bg-gray-100 px-4 py-2 rounded-lg text-center text-sm text-gray-700 shadow-sm">
            🌱 Progresso: 1 de 4 etapas concluídas. Continue evoluindo na sua jornada!
          </div>
        </div>
      </div>
    </div>
  );
};